<template>
  <div class="item-modal-backdrop stats-backdrop" @click.self="$emit('close')">
    <article class="stats-modal">
      <header>
        <div>
          <span class="eyebrow">人物属性</span>
          <strong>摸鱼觉者 · {{ game.stageName }}</strong>
        </div>
        <button class="icon-command" type="button" @click="$emit('close')">×</button>
      </header>

      <div class="stats-summary-grid">
        <span>
          <em>战力</em>
          <strong>{{ formatNumber(game.battlePower) }}</strong>
        </span>
        <span>
          <em>段位</em>
          <strong>{{ game.stageIndex + 1 }}</strong>
        </span>
        <span>
          <em>装备</em>
          <strong>{{ equippedCount }}/{{ slotKeys.length }}</strong>
        </span>
      </div>

      <div class="stats-list">
        <div v-for="stat in statRows" :key="stat.key" class="stat-row">
          <span>{{ stat.label }}</span>
          <strong>{{ stat.value }}</strong>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { percentStats, statLabels } from "@/game/content/data";
import { slotKeys, statKeys } from "@/game/simulation/types";
import { useGameStore } from "@/game/state/useGameStore";

defineEmits<{
  close: [];
}>();

const game = useGameStore();

const equippedCount = computed(() => slotKeys.filter((slot) => game.equippedItems[slot]).length);

const statRows = computed(() =>
  statKeys.map((key) => ({
    key,
    label: statLabels[key],
    value: formatStatValue(key, game.totalStats[key]),
  })),
);

function formatNumber(value: number): string {
  if (value >= 10000) {
    return `${(value / 10000).toFixed(1)}万`;
  }
  return `${Math.round(value)}`;
}

function formatStatValue(key: (typeof statKeys)[number], value: number): string {
  return `${Math.round(value)}${percentStats.has(key) ? "%" : ""}`;
}
</script>
