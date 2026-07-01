<template>
  <div v-if="selectedItem" class="item-modal-backdrop" @click.self="game.selectedItemId = null">
    <article class="item-modal" :class="selectedItem.rarity">
      <header>
        <div>
          <span class="eyebrow">{{ rarityMeta[selectedItem.rarity].label }} · {{ slotMeta[selectedItem.slot].label }}</span>
          <strong>{{ selectedItem.name }}</strong>
        </div>
        <button class="icon-command" type="button" @click="game.selectedItemId = null">×</button>
      </header>

      <p class="flavor">{{ selectedItem.flavor }}</p>

      <div class="compare-row">
        <span>评分</span>
        <strong>{{ selectedItem.score }}</strong>
        <em :class="{ up: scoreDelta >= 0, down: scoreDelta < 0 }">{{ scoreDelta >= 0 ? "+" : "" }}{{ scoreDelta }}</em>
      </div>

      <div class="modifier-list">
        <span>{{ modifierText(selectedItem.main) }}</span>
        <span v-for="(affix, index) in selectedItem.affixes" :key="`${affix.key}-${index}`">{{ modifierText(affix) }}</span>
      </div>

      <div class="modal-actions">
        <button class="equip-command" type="button" @click="game.equipItem(selectedItem.id)">
          <Wrench :size="16" />
          <span>换上</span>
        </button>
        <button class="plain-command" type="button" @click="game.toggleLock(selectedItem.id)">
          <LockOpen v-if="selectedItem.locked" :size="16" />
          <Lock v-else :size="16" />
          <span>{{ selectedItem.locked ? "解锁" : "锁定" }}</span>
        </button>
        <button class="plain-command" type="button" :disabled="game.isEquipped(selectedItem.id) || selectedItem.locked" @click="game.sellItem(selectedItem.id)">
          <Coins :size="16" />
          <span>出售</span>
        </button>
        <button class="plain-command" type="button" :disabled="game.isEquipped(selectedItem.id) || selectedItem.locked" @click="game.decomposeItem(selectedItem.id)">
          <Trash2 :size="16" />
          <span>分解</span>
        </button>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { Coins, Lock, LockOpen, Trash2, Wrench } from "lucide-vue-next";
import { computed } from "vue";
import { rarityMeta, slotMeta } from "@/game/content/data";
import { modifierText as formatModifier } from "@/game/simulation/systems";
import type { StatModifier } from "@/game/simulation/types";
import { useGameStore } from "@/game/state/useGameStore";

const game = useGameStore();
const selectedItem = computed(() => game.selectedItem);

const scoreDelta = computed(() => {
  if (!selectedItem.value) {
    return 0;
  }
  const current = game.equippedItems[selectedItem.value.slot];
  return selectedItem.value.score - (current?.score ?? 0);
});

function modifierText(modifier: StatModifier): string {
  return formatModifier(modifier);
}
</script>
