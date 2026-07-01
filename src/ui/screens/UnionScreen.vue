<template>
  <section class="union-view">
    <div class="locked-panel">
      <Users :size="42" />
      <strong>准点下班协会</strong>
      <span>会长工牌未激活</span>
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
</script>
