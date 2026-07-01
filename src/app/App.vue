<template>
  <div class="app-shell">
    <div class="phone-frame">
      <div v-if="!game.hydrated" class="loading-screen">
        <span>工位载入中</span>
      </div>

      <template v-else>
        <header class="hero-topbar">
          <div class="avatar-ring">
            <img :src="workerAvatar" alt="" />
          </div>

          <div class="top-identity">
            <strong>摸鱼觉者</strong>
            <div class="resource-row">
              <span><Coins :size="14" />{{ formatNumber(game.resources.salary) }}</span>
              <button type="button" aria-label="添加薪水"><PlusMark /></button>
              <span><Zap :size="14" />{{ game.resources.inspiration }}</span>
            </div>
          </div>

          <div class="power-banner">战力 {{ formatNumber(game.battlePower) }}</div>
        </header>

        <main class="screen-body">
          <WorkstationScreen
            v-if="game.currentTab === 'workstation'"
            :is-forging="isForging"
            @open-stats="showStatsModal = true"
          />
          <BagScreen v-else-if="game.currentTab === 'bag'" />
          <ChallengeScreen v-else-if="game.currentTab === 'challenge'" />
          <UnionScreen v-else />
        </main>

        <nav class="bottom-nav">
          <button
            v-for="tab in leadingTabs"
            :key="tab.id"
            type="button"
            @click="openFeatureMenu(tab)"
          >
            <component :is="tab.icon" />
            <span>{{ tab.label }}</span>
          </button>

          <button class="nav-forge-button" type="button" aria-label="摸一下" @click="handleForge">
            <ForgeSealMark />
            <span>摸一下</span>
          </button>

          <button
            v-for="tab in trailingTabs"
            :key="tab.id"
            type="button"
            @click="openFeatureMenu(tab)"
          >
            <component :is="tab.icon" />
            <span>{{ tab.label }}</span>
          </button>
        </nav>

        <div v-if="activeFeatureMenu" class="feature-menu-backdrop" @click.self="closeFeatureMenu">
          <section class="feature-menu-panel">
            <header>
              <strong>{{ activeFeatureMenu.label }}</strong>
              <button class="icon-command" type="button" @click="closeFeatureMenu">×</button>
            </header>

            <div class="feature-menu-grid">
              <button v-for="action in activeFeatureMenu.actions" :key="action.name" type="button" disabled>
                <component :is="activeFeatureMenu.icon" />
                <strong>{{ action.name }}</strong>
                <span>{{ action.state }}</span>
              </button>
            </div>
          </section>
        </div>

        <StatsModal v-if="showStatsModal" @close="showStatsModal = false" />
        <ItemModal />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Coins, Zap } from "lucide-vue-next";
import { onMounted, ref, type Component } from "vue";
import workerAvatar from "@/assets/characters/office-worker-avatar.svg";
import { useGameStore } from "@/game/state/useGameStore";
import ItemModal from "@/ui/modals/ItemModal.vue";
import StatsModal from "@/ui/modals/StatsModal.vue";
import BagScreen from "@/ui/screens/BagScreen.vue";
import ChallengeScreen from "@/ui/screens/ChallengeScreen.vue";
import UnionScreen from "@/ui/screens/UnionScreen.vue";
import WorkstationScreen from "@/ui/screens/WorkstationScreen.vue";
import { ForgeSealMark, NavAdventureMark, NavCaveMark, NavChallengeMark, NavGuildMark, PlusMark } from "@/ui/icons/GameMarks";

const game = useGameStore();
const isForging = ref(false);
const showStatsModal = ref(false);
const activeFeatureMenu = ref<NavEntry | null>(null);

type NavEntryId = "guild" | "bag" | "challenge" | "adventure";

interface NavEntry {
  id: NavEntryId;
  label: string;
  icon: Component;
  actions: Array<{
    name: string;
    state: string;
  }>;
}

const tabs: NavEntry[] = [
  {
    id: "guild",
    label: "工会",
    icon: NavGuildMark,
    actions: [
      { name: "工会跳战", state: "未开" },
      { name: "周报共创", state: "未开" },
      { name: "工会科技", state: "未开" },
    ],
  },
  {
    id: "bag",
    label: "洞府",
    icon: NavCaveMark,
    actions: [
      { name: "装备库", state: "未开" },
      { name: "摸鱼仓", state: "未开" },
      { name: "洞府商铺", state: "未开" },
    ],
  },
  {
    id: "challenge",
    label: "挑战",
    icon: NavChallengeMark,
    actions: [
      { name: "真人挑战", state: "未开" },
      { name: "领导试炼", state: "未开" },
      { name: "摸鱼榜", state: "未开" },
    ],
  },
  {
    id: "adventure",
    label: "冒险",
    icon: NavAdventureMark,
    actions: [
      { name: "茶水间", state: "未开" },
      { name: "电梯奇遇", state: "未开" },
      { name: "外勤摸鱼", state: "未开" },
    ],
  },
];

const leadingTabs = tabs.slice(0, 2);
const trailingTabs = tabs.slice(2);

function formatNumber(value: number): string {
  if (value >= 10000) {
    return `${(value / 10000).toFixed(1)}万`;
  }
  return `${Math.round(value)}`;
}

function handleForge() {
  activeFeatureMenu.value = null;

  if (game.currentTab !== "workstation") {
    game.setTab("workstation");
  }

  if (isForging.value) {
    return;
  }

  isForging.value = true;
  const previousSelectedId = game.selectedItemId;
  game.moyuClick();
  const rolledItemId = game.selectedItemId;

  if (rolledItemId && rolledItemId !== previousSelectedId) {
    game.selectedItemId = null;
    window.setTimeout(() => {
      game.selectedItemId = rolledItemId;
    }, 430);
  }

  window.setTimeout(() => {
    isForging.value = false;
  }, 560);
}

function openFeatureMenu(tab: NavEntry) {
  activeFeatureMenu.value = tab;
}

function closeFeatureMenu() {
  activeFeatureMenu.value = null;
}

onMounted(async () => {
  await game.hydrate();
  game.setTab("workstation");
});
</script>
