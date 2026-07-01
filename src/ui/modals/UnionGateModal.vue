<template>
  <div class="union-gate-backdrop" @click.self="$emit('close')">
    <section class="union-gate-modal" role="dialog" aria-modal="true" aria-label="工会入口" @click.self="$emit('close')">
      <button class="union-gate-card union-gate-card-join" type="button" aria-label="加入工会" @click="$emit('join')">
        <span class="union-gate-painting join-painting" aria-hidden="true">
          <i class="gate-mist"></i>
          <i class="gate-pavilion"></i>
          <i class="gate-peak gate-peak-one"></i>
          <i class="gate-peak gate-peak-two"></i>
        </span>
        <span class="union-gate-label">加入工会</span>
        <span class="union-gate-seal"><UsersRound :size="18" /></span>
      </button>

      <button class="union-gate-card union-gate-card-create" type="button" aria-label="创建工会" @click="$emit('create')">
        <span class="union-gate-painting create-painting" aria-hidden="true">
          <i class="gate-mist"></i>
          <i class="gate-tree"></i>
          <i class="gate-flower gate-flower-one"></i>
          <i class="gate-flower gate-flower-two"></i>
        </span>
        <span class="union-gate-label">创建工会</span>
        <span class="union-gate-seal"><ScrollText :size="18" /></span>
      </button>

      <span class="union-gate-swish" aria-hidden="true"></span>
      <strong class="union-gate-hint">点击空白位置关闭</strong>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ScrollText, UsersRound } from "lucide-vue-next";

defineEmits<{
  close: [];
  join: [];
  create: [];
}>();
</script>
