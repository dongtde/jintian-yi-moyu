<template>
  <section class="challenge-view">
    <div class="boss-panel">
      <div class="boss-portrait">
        <img :src="bossShadow" alt="" />
      </div>
      <div class="boss-copy">
        <span class="eyebrow">{{ game.currentBoss.title }}</span>
        <strong>{{ game.currentBoss.name }}</strong>
        <p>{{ game.currentBoss.notes.join(" · ") }}</p>
      </div>
    </div>

    <div class="boss-stats">
      <span>压力 {{ game.currentBoss.pressure }}</span>
      <span>抗压 {{ game.currentBoss.hp }}</span>
      <span>难度 {{ game.currentBoss.difficulty }}</span>
    </div>

    <button class="battle-button" type="button" @click="game.startBossBattle()">
      <Swords :size="20" />
      <span>应对巡查</span>
    </button>

    <div v-if="game.battleResult" class="battle-result" :class="{ win: game.battleResult.win }">
      <strong>{{ game.battleResult.win ? "摸鱼成功" : "先撤一步" }}</strong>
      <span>{{ game.battleResult.bossName }} · {{ game.battleResult.turns }} 回合</span>
      <div class="reward-line" v-if="game.battleResult.win">
        <span v-for="(value, key) in game.battleResult.rewards" :key="key">{{ rewardLabel(key) }} +{{ value }}</span>
      </div>
      <LogList :logs="game.battleResult.logs" compact />
      <button class="small-action wide" type="button" @click="game.clearBattleResult()">收起</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swords } from "lucide-vue-next";
import bossShadow from "@/assets/enemies/boss-shadow.svg";
import { useGameStore } from "@/game/state/useGameStore";
import LogList from "@/ui/components/LogList.vue";

const game = useGameStore();

function rewardLabel(key: string): string {
  const labels: Record<string, string> = {
    salary: "薪水",
    coffee: "咖啡",
    inspiration: "灵感",
    parts: "零件",
    performance: "绩效",
    stageExp: "摸鱼值",
  };
  return labels[key] ?? key;
}
</script>
