<template>
  <div ref="host" class="phaser-workstation" aria-hidden="true"></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, shallowRef } from "vue";
import { createWorkstationGame, type WorkstationGameHandle } from "@/game/phaser/workstationGame";

const host = ref<HTMLDivElement | null>(null);
const gameHandle = shallowRef<WorkstationGameHandle | null>(null);
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  if (!host.value) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  gameHandle.value = createWorkstationGame(host.value, { reducedMotion });
  resizeObserver = new ResizeObserver(() => gameHandle.value?.resize());
  resizeObserver.observe(host.value);
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  resizeObserver = null;
  gameHandle.value?.destroy();
  gameHandle.value = null;
});
</script>
