import localforage from "localforage";
import { defineStore } from "pinia";
import { bosses, rarityMeta, stageExpNeeded, stageNames } from "@/game/content/data";
import {
  calculateBattlePower,
  calculateStats,
  createEmptyEquipment,
  generateItem,
  getEquippedItem,
  nextBossIndex,
  runBossBattle,
} from "@/game/simulation/systems";
import type { BattleLogEntry, EquipmentItem, GameResources, GameState, GameTab, PlayerUnion, SlotKey } from "@/game/simulation/types";

const SAVE_VERSION = 1;
const STORAGE_KEY = "moyu-game-save-v1";

function initialResources(): GameResources {
  return {
    salary: 188,
    coffee: 8,
    inspiration: 0,
    parts: 0,
    performance: 0,
  };
}

function freshState(): GameState {
  return {
    version: SAVE_VERSION,
    hydrated: false,
    currentTab: "workstation",
    union: null,
    resources: initialResources(),
    stageIndex: 0,
    stageExp: 0,
    totalClicks: 0,
    wins: 0,
    inventoryCapacity: 120,
    inventory: [],
    equipped: createEmptyEquipment(),
    selectedItemId: null,
    activeBossIndex: 0,
    battleResult: null,
    actionLog: [{ text: "工位已就绪，今天适合低调摸鱼。", tone: "rare" }],
    lastSavedAt: null,
  };
}

function createUnionProfile(role: PlayerUnion["role"], name: string, notice: string): PlayerUnion {
  const joinedAt = Date.now();

  return {
    id: `union-${joinedAt}`,
    name,
    role,
    level: 1,
    contribution: 0,
    notice,
    joinedAt,
  };
}

function addResource(resources: GameResources, key: keyof GameResources, value = 0) {
  resources[key] = Math.max(0, Math.round(resources[key] + value));
}

export const useGameStore = defineStore("game", {
  state: freshState,
  getters: {
    selectedItem(state): EquipmentItem | null {
      return state.selectedItemId ? state.inventory.find((item) => item.id === state.selectedItemId) ?? null : null;
    },
    hasUnion(state): boolean {
      return Boolean(state.union?.id);
    },
    totalStats(state) {
      return calculateStats(state.inventory, state.equipped, state.stageIndex);
    },
    battlePower(state): number {
      const stats = calculateStats(state.inventory, state.equipped, state.stageIndex);
      return calculateBattlePower(stats, state.inventory, state.equipped);
    },
    stageName(state): string {
      return stageNames[Math.min(state.stageIndex, stageNames.length - 1)];
    },
    stageNeed(state): number {
      return stageExpNeeded[Math.min(state.stageIndex, stageExpNeeded.length - 1)];
    },
    stageProgress(state): number {
      const need = stageExpNeeded[Math.min(state.stageIndex, stageExpNeeded.length - 1)];
      return Math.min(100, Math.round((state.stageExp / need) * 100));
    },
    currentBoss(state) {
      return bosses[state.activeBossIndex] ?? bosses[0];
    },
    equippedItems(state): Record<SlotKey, EquipmentItem | null> {
      return {
        computer: getEquippedItem(state.inventory, state.equipped, "computer"),
        keyboard: getEquippedItem(state.inventory, state.equipped, "keyboard"),
        headset: getEquippedItem(state.inventory, state.equipped, "headset"),
        cup: getEquippedItem(state.inventory, state.equipped, "cup"),
        chair: getEquippedItem(state.inventory, state.equipped, "chair"),
        badge: getEquippedItem(state.inventory, state.equipped, "badge"),
        note: getEquippedItem(state.inventory, state.equipped, "note"),
        snack: getEquippedItem(state.inventory, state.equipped, "snack"),
      };
    },
  },
  actions: {
    async hydrate() {
      localforage.config({
        name: "today-moyu",
        storeName: "player",
      });

      const saved = await localforage.getItem<GameState>(STORAGE_KEY);
      if (saved?.version === SAVE_VERSION) {
        const savedUnion = saved.union ?? null;
        const savedTab = saved.currentTab ?? "workstation";

        this.union = savedUnion;
        this.currentTab = savedTab === "union" && !savedUnion ? "workstation" : savedTab;
        this.resources = { ...initialResources(), ...saved.resources };
        this.stageIndex = saved.stageIndex ?? 0;
        this.stageExp = saved.stageExp ?? 0;
        this.totalClicks = saved.totalClicks ?? 0;
        this.wins = saved.wins ?? 0;
        this.inventoryCapacity = saved.inventoryCapacity ?? 120;
        this.inventory = saved.inventory ?? [];
        this.equipped = { ...createEmptyEquipment(), ...saved.equipped };
        this.selectedItemId = null;
        this.activeBossIndex = saved.activeBossIndex ?? 0;
        this.battleResult = saved.battleResult ?? null;
        this.actionLog = saved.actionLog?.length ? saved.actionLog.slice(0, 8) : freshState().actionLog;
        this.lastSavedAt = saved.lastSavedAt ?? null;
      }

      this.hydrated = true;
      await this.persist();
    },
    async persist() {
      this.lastSavedAt = Date.now();
      await localforage.setItem(STORAGE_KEY, JSON.parse(JSON.stringify({ ...this.$state, hydrated: true })));
    },
    pushLog(entry: BattleLogEntry) {
      this.actionLog.unshift(entry);
      this.actionLog = this.actionLog.slice(0, 8);
    },
    setTab(tab: GameTab) {
      this.currentTab = tab;
      void this.persist();
    },
    enterUnion(): boolean {
      if (!this.union) {
        return false;
      }

      this.currentTab = "union";
      void this.persist();
      return true;
    },
    joinLocalUnion() {
      this.union = createUnionProfile("成员", "茶水间同盟", "今日目标：低调摸鱼，准点撤退。");
      this.currentTab = "union";
      this.pushLog({ text: `已加入「${this.union.name}」，工会频道已开启。`, tone: "good" });
      void this.persist();
    },
    createLocalUnion() {
      this.union = createUnionProfile("会长", "准点下班协会", "会长工牌已激活，等你招募摸鱼同僚。");
      this.currentTab = "union";
      this.pushLog({ text: `已创建「${this.union.name}」，从此摸鱼有组织。`, tone: "rare" });
      void this.persist();
    },
    moyuClick() {
      if (this.inventory.length >= this.inventoryCapacity) {
        this.pushLog({ text: "背包塞满了，先清一清再继续摸。", tone: "bad" });
        return;
      }

      const item = generateItem(this.totalClicks);
      this.inventory.unshift(item);
      this.selectedItemId = item.id;
      this.totalClicks += 1;
      addResource(this.resources, "salary", 3);
      this.stageExp += item.rarity === "common" ? 5 : item.rarity === "fine" ? 7 : 10;
      this.checkStageUp();
      this.pushLog({
        text: `摸到「${item.name}」：${rarityMeta[item.rarity].label} ${item.score} 战力。`,
        tone: item.rarity === "epic" || item.rarity === "legendary" || item.rarity === "artifact" || item.rarity === "legacy" ? "rare" : "normal",
      });
      void this.persist();
    },
    checkStageUp() {
      let needed = stageExpNeeded[Math.min(this.stageIndex, stageExpNeeded.length - 1)];
      while (this.stageExp >= needed && this.stageIndex < stageNames.length - 1) {
        this.stageExp -= needed;
        this.stageIndex += 1;
        addResource(this.resources, "coffee", 2);
        addResource(this.resources, "salary", 88 + this.stageIndex * 22);
        this.pushLog({ text: `段位突破：${stageNames[this.stageIndex]}。`, tone: "rare" });
        needed = stageExpNeeded[Math.min(this.stageIndex, stageExpNeeded.length - 1)];
      }
    },
    equipItem(itemId: string) {
      const item = this.inventory.find((entry) => entry.id === itemId);
      if (!item) {
        return;
      }

      this.equipped[item.slot] = item.id;
      this.selectedItemId = null;
      this.pushLog({ text: `已换上「${item.name}」，工位气场更稳了。`, tone: "good" });
      void this.persist();
    },
    sellItem(itemId: string) {
      const item = this.inventory.find((entry) => entry.id === itemId);
      if (!item || this.isEquipped(item.id) || item.locked) {
        return;
      }

      addResource(this.resources, "salary", rarityMeta[item.rarity].sellValue);
      this.removeItem(item.id);
      this.pushLog({ text: `出售「${item.name}」，薪水 +${rarityMeta[item.rarity].sellValue}。`, tone: "normal" });
      void this.persist();
    },
    decomposeItem(itemId: string) {
      const item = this.inventory.find((entry) => entry.id === itemId);
      if (!item || this.isEquipped(item.id) || item.locked) {
        return;
      }

      addResource(this.resources, "parts", rarityMeta[item.rarity].partValue);
      addResource(this.resources, "inspiration", Math.max(1, Math.floor(rarityMeta[item.rarity].partValue / 3)));
      this.removeItem(item.id);
      this.pushLog({ text: `分解「${item.name}」，零件 +${rarityMeta[item.rarity].partValue}。`, tone: "normal" });
      void this.persist();
    },
    removeItem(itemId: string) {
      this.inventory = this.inventory.filter((entry) => entry.id !== itemId);
      if (this.selectedItemId === itemId) {
        this.selectedItemId = null;
      }
    },
    toggleLock(itemId: string) {
      const item = this.inventory.find((entry) => entry.id === itemId);
      if (!item) {
        return;
      }

      item.locked = !item.locked;
      void this.persist();
    },
    isEquipped(itemId: string): boolean {
      return Object.values(this.equipped).includes(itemId);
    },
    startBossBattle() {
      if (this.resources.coffee <= 0) {
        this.pushLog({ text: "咖啡不够，先缓一缓。", tone: "bad" });
        return;
      }

      addResource(this.resources, "coffee", -1);
      const result = runBossBattle(this.totalStats, this.battlePower, this.currentBoss);
      this.battleResult = result;
      for (const entry of result.logs.slice(-4).reverse()) {
        this.pushLog(entry);
      }

      if (result.win) {
        this.wins += 1;
        for (const [key, value] of Object.entries(result.rewards)) {
          if (key === "stageExp") {
            this.stageExp += value ?? 0;
          } else {
            addResource(this.resources, key as keyof GameResources, value ?? 0);
          }
        }
        this.checkStageUp();
        this.activeBossIndex = nextBossIndex(this.activeBossIndex, this.wins);
      }

      void this.persist();
    },
    clearBattleResult() {
      this.battleResult = null;
      void this.persist();
    },
    resetLocalSave() {
      const next = freshState();
      this.$patch({ ...next, hydrated: true });
      void this.persist();
    },
  },
});
