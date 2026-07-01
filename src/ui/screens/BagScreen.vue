<template>
  <section class="bag-view">
    <div class="section-title">
      <div>
        <span class="eyebrow">背包</span>
        <strong>{{ game.inventory.length }} / {{ game.inventoryCapacity }}</strong>
      </div>
      <button class="icon-command" type="button" title="重置本地存档" @click="game.resetLocalSave()">
        <RotateCcw :size="17" />
      </button>
    </div>

    <div v-if="game.inventory.length === 0" class="empty-state">
      <Backpack :size="34" />
      <span>背包很轻，先回工位摸一下。</span>
    </div>

    <div v-else class="inventory-list">
      <button
        v-for="item in sortedInventory"
        :key="item.id"
        class="item-row"
        :class="[item.rarity, { equipped: game.isEquipped(item.id) }]"
        type="button"
        @click="game.selectedItemId = item.id"
      >
        <span class="item-rarity">{{ rarityMeta[item.rarity].label }}</span>
        <div>
          <strong>{{ item.name }}</strong>
          <em>{{ slotMeta[item.slot].label }} · {{ item.score }} 战力</em>
        </div>
        <span v-if="game.isEquipped(item.id)" class="row-badge">已穿</span>
        <Lock v-else-if="item.locked" :size="15" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Backpack, Lock, RotateCcw } from "lucide-vue-next";
import { computed } from "vue";
import { rarityMeta, slotMeta } from "@/game/content/data";
import { useGameStore } from "@/game/state/useGameStore";

const game = useGameStore();

const sortedInventory = computed(() =>
  [...game.inventory].sort((left, right) => {
    if (game.isEquipped(left.id) !== game.isEquipped(right.id)) {
      return game.isEquipped(left.id) ? -1 : 1;
    }
    return right.score - left.score;
  }),
);
</script>
