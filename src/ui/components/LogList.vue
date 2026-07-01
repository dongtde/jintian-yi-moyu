<template>
  <div class="log-list" :class="{ compact }">
    <p v-for="(entry, index) in logs" :key="`${entry.text}-${index}`" :class="entry.tone">
      {{ entry.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { BattleLogEntry } from "@/game/simulation/types";

defineProps<{
  logs: BattleLogEntry[];
  compact?: boolean;
}>();
</script>
