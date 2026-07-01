<template>
  <section class="union-view">
    <div class="locked-panel union-status-panel" :class="{ joined: game.union }">
      <Users :size="42" />
      <strong>{{ game.union?.name ?? "尚未加入工会" }}</strong>
      <span>{{ game.union ? `${game.union.role} · ${game.union.notice}` : "会长工牌未激活" }}</span>
    </div>

    <div v-if="game.union" class="union-stat-grid">
      <span>
        <em>等级</em>
        <strong>{{ game.union.level }}</strong>
      </span>
      <span>
        <em>身份</em>
        <strong>{{ game.union.role }}</strong>
      </span>
      <span>
        <em>贡献</em>
        <strong>{{ game.union.contribution }}</strong>
      </span>
    </div>

    <div class="preview-grid">
      <div>
        <strong>工会跳战</strong>
        <span>跨楼层挑战</span>
      </div>
      <div>
        <strong>周报共创</strong>
        <span>全会领奖</span>
      </div>
      <div>
        <strong>工会科技</strong>
        <span>咖啡机升级</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Users } from "lucide-vue-next";
import { useGameStore } from "@/game/state/useGameStore";

const game = useGameStore();
</script>
