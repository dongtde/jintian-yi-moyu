<template>
  <section class="home-screen">
    <div class="cultivation-scene office-scene">
      <div class="scene-ambient-motion" aria-hidden="true">
        <span class="scene-light-band scene-light-band-one"></span>
        <span class="scene-light-band scene-light-band-two"></span>
        <i class="scene-particle scene-particle-one"></i>
        <i class="scene-particle scene-particle-two"></i>
        <i class="scene-particle scene-particle-three"></i>
        <i class="scene-particle scene-particle-four"></i>
        <i class="scene-particle scene-particle-five"></i>
      </div>

      <button class="mail-talisman" type="button" aria-label="打开背包" @click="game.setTab('bag')">
        <Backpack :size="24" />
        <i></i>
      </button>

      <h1>{{ game.stageIndex + 1 }}级 · {{ game.stageName }} · 一阶</h1>
    </div>

    <div class="cultivation-meter">
      <div class="meter-track">
        <div class="meter-fill" :style="{ width: `${game.stageProgress}%` }"></div>
        <div class="meter-header">
          <strong>摸鱼值</strong>
          <span>{{ game.stageExp }}/{{ game.stageNeed }}</span>
        </div>
        <i></i>
      </div>
      <button type="button" @click="game.setTab('challenge')">渡劫</button>
    </div>

    <div class="hero-stats">
      <span v-for="stat in primaryStats" :key="stat.key">
        <em>{{ stat.label }}</em>
        <strong>{{ stat.value }}</strong>
      </span>
    </div>

    <section class="equipment-board">
      <button class="board-caret-button" type="button" aria-label="查看人物属性" @click="$emit('openStats')">
        <span class="board-caret-shell"></span>
      </button>

      <div class="board-grid">
        <button
          v-for="cell in boardSlots"
          :key="cell.id"
          class="board-slot"
          :class="boardSlotClasses(cell)"
          type="button"
          :aria-label="boardSlotTitle(cell)"
          :title="boardSlotTitle(cell)"
          @click="cell.slot ? selectEquipped(cell.slot) : $emit('openUnion')"
        >
          <template v-if="getEquippedForCell(cell)">
            <EquipmentIcon :kind="cell.id" :template-id="getEquippedForCell(cell)!.templateId" />
            <span class="equipment-level">{{ equipmentLevel(getEquippedForCell(cell)!) }}级</span>
          </template>
          <span v-else class="slot-empty-label">{{ cell.label }}</span>
        </button>
      </div>

      <div class="world-chat">
        <MessageBubble />
        <span>【世界】凌寒、风蒲：沉淀沉淀，老板从东侧过来了</span>
      </div>
    </section>

    <section class="bottom-forge">
      <div class="forge-ticket">
        <TaskScrollMark />
        <span>锤炼1次 · 完成</span>
      </div>

      <div class="forge-options">
        <button type="button"><CircleMark />自动</button>
        <button type="button"><span>1</span>等级</button>
      </div>
    </section>

    <LogList :logs="game.actionLog" />
  </section>
</template>

<script setup lang="ts">
import { Backpack } from "lucide-vue-next";
import { computed } from "vue";
import { rarityMeta, slotMeta } from "@/game/content/data";
import { equipmentLevel } from "@/game/simulation/systems";
import { slotKeys, type EquipmentItem, type SlotKey } from "@/game/simulation/types";
import { useGameStore } from "@/game/state/useGameStore";
import LogList from "@/ui/components/LogList.vue";
import { CircleMark, EquipmentIcon, MessageBubble, TaskScrollMark } from "@/ui/icons/GameMarks";

defineEmits<{
  openStats: [];
  openUnion: [];
}>();

const game = useGameStore();

interface BoardCell {
  id: string;
  label: string;
  slot?: SlotKey;
}

const boardSlots: BoardCell[] = [
  ...slotKeys.map((slot) => ({ id: slot, label: slotMeta[slot].label, slot })),
  { id: "partner", label: "搭子" },
  { id: "spirit", label: "灵脉" },
  { id: "treasure", label: "秘宝" },
  { id: "mount", label: "座驾" },
];

const primaryStats = computed(() => [
  { key: "efficiency", label: "攻击", value: Math.round(game.totalStats.efficiency) },
  { key: "hp", label: "生命", value: Math.round(game.totalStats.hp) },
  { key: "disguise", label: "防御", value: Math.round(game.totalStats.disguise) },
  { key: "speed", label: "敏捷", value: Math.round(game.totalStats.speed) },
]);

function getEquippedForCell(cell: BoardCell): EquipmentItem | null {
  return cell.slot ? game.equippedItems[cell.slot] : null;
}

function boardSlotClasses(cell: BoardCell) {
  const item = getEquippedForCell(cell);
  return [item?.rarity ?? (cell.slot ? "empty" : "locked"), { filled: Boolean(item), locked: !cell.slot }];
}

function boardSlotTitle(cell: BoardCell): string {
  const item = getEquippedForCell(cell);
  if (item) {
    return `${cell.label}：${rarityMeta[item.rarity].label} ${item.name}`;
  }
  return cell.slot ? `${cell.label}：空` : `${cell.label}：未开`;
}

function selectEquipped(slot: SlotKey) {
  const item = game.equippedItems[slot];
  if (item) {
    game.selectedItemId = item.id;
  } else {
    game.setTab("bag");
  }
}
</script>
