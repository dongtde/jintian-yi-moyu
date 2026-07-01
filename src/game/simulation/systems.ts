import { bosses, itemTemplates, percentStats, rarityMeta, stageNames, statLabels } from "../content/data";
import type {
  BattleLogEntry,
  BattleResult,
  BossConfig,
  EquipmentItem,
  EquipmentSlots,
  RarityKey,
  SlotKey,
  StatBlock,
  StatKey,
  StatModifier,
} from "./types";
import { slotKeys, statKeys } from "./types";

const rarityRolls: Array<[RarityKey, number]> = [
  ["common", 48],
  ["fine", 26],
  ["rare", 15],
  ["epic", 7],
  ["legendary", 2.8],
  ["artifact", 1],
  ["legacy", 0.2],
];

const statWeights: Record<StatKey, number> = {
  efficiency: 5.2,
  hp: 0.45,
  disguise: 4.2,
  speed: 12,
  inspiration: 3.4,
  stability: 4.4,
  combo: 9,
  crit: 9,
  evade: 10,
  counter: 8.5,
  busy: 8,
  heal: 8.5,
  bluff: 7.8,
  burnout: 8,
  deflect: 8,
  composure: 7.6,
};

export function createEmptyEquipment(): EquipmentSlots {
  return slotKeys.reduce((slots, key) => {
    slots[key] = null;
    return slots;
  }, {} as EquipmentSlots);
}

export function emptyStats(): StatBlock {
  return statKeys.reduce((stats, key) => {
    stats[key] = 0;
    return stats;
  }, {} as StatBlock);
}

export function getBaseStats(stageIndex: number): StatBlock {
  const stats = emptyStats();
  stats.efficiency = 28 + stageIndex * 8;
  stats.hp = 320 + stageIndex * 58;
  stats.disguise = 12 + stageIndex * 4;
  stats.speed = 8 + stageIndex;
  stats.inspiration = 10 + stageIndex * 2;
  stats.stability = 10 + stageIndex * 3;
  return stats;
}

function choose<T>(values: T[]): T {
  return values[Math.floor(Math.random() * values.length)];
}

function rollRarity(clicks: number): RarityKey {
  const pityBonus = Math.min(2.8, Math.floor(clicks / 28) * 0.2);
  const roll = Math.random() * 100;
  let cursor = 0;

  for (const [rarity, baseWeight] of rarityRolls) {
    const bonus = rarity === "epic" || rarity === "legendary" || rarity === "artifact" ? pityBonus : 0;
    cursor += baseWeight + bonus;
    if (roll <= cursor) {
      return rarity;
    }
  }

  return "common";
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function statValue(key: StatKey, rarity: RarityKey, isMain: boolean): number {
  const multiplier = rarityMeta[rarity].multiplier;
  const base = percentStats.has(key)
    ? randomInt(isMain ? 4 : 2, isMain ? 11 : 7)
    : key === "hp"
      ? randomInt(isMain ? 72 : 30, isMain ? 155 : 88)
      : key === "speed"
        ? randomInt(isMain ? 2 : 1, isMain ? 6 : 4)
        : randomInt(isMain ? 8 : 3, isMain ? 24 : 14);

  return Math.max(1, Math.round(base * multiplier));
}

function createModifier(key: StatKey, rarity: RarityKey, isMain: boolean): StatModifier {
  return {
    key,
    value: statValue(key, rarity, isMain),
  };
}

function scoreModifier(modifier: StatModifier): number {
  return modifier.value * statWeights[modifier.key];
}

export function generateItem(clicks: number): EquipmentItem {
  const template = choose(itemTemplates);
  const rarity = rollRarity(clicks);
  const meta = rarityMeta[rarity];
  const level = Math.max(1, Math.min(99, Math.floor(clicks / 18) + 1));
  const main = createModifier(choose(template.mainStats), rarity, true);
  const affixes: StatModifier[] = [];
  const pool = [...template.affixBias, ...template.affixBias, "hp", "efficiency", "disguise", "speed"] as StatKey[];

  for (let index = 0; index < meta.affixCount; index += 1) {
    affixes.push(createModifier(choose(pool), rarity, false));
  }

  const score = Math.round((scoreModifier(main) + affixes.reduce((sum, affix) => sum + scoreModifier(affix), 0)) * meta.multiplier);

  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    templateId: template.id,
    name: template.name,
    slot: template.slot,
    rarity,
    level,
    main,
    affixes,
    score,
    locked: rarity === "artifact" || rarity === "legacy",
    acquiredAt: Date.now(),
    source: "摸鱼掉落",
    flavor: template.flavor,
  };
}

export function equipmentLevel(item: Pick<EquipmentItem, "level" | "score">): number {
  return item.level ?? Math.max(1, Math.min(99, Math.floor(item.score / 420) + 1));
}

export function calculateStats(inventory: EquipmentItem[], equipped: EquipmentSlots, stageIndex: number): StatBlock {
  const stats = getBaseStats(stageIndex);

  for (const slot of slotKeys) {
    const itemId = equipped[slot];
    if (!itemId) {
      continue;
    }

    const item = inventory.find((entry) => entry.id === itemId);
    if (!item) {
      continue;
    }

    stats[item.main.key] += item.main.value;
    for (const affix of item.affixes) {
      stats[affix.key] += affix.value;
    }
  }

  return stats;
}

export function calculateBattlePower(stats: StatBlock, inventory: EquipmentItem[], equipped: EquipmentSlots): number {
  const itemScore = slotKeys.reduce((sum, slot) => {
    const item = inventory.find((entry) => entry.id === equipped[slot]);
    return sum + (item?.score ?? 0);
  }, 0);

  const statScore =
    stats.efficiency * 7 +
    stats.hp * 0.8 +
    stats.disguise * 5 +
    stats.speed * 22 +
    stats.stability * 5 +
    stats.inspiration * 3;

  const buildScore = statKeys
    .filter((key) => percentStats.has(key))
    .reduce((sum, key) => sum + stats[key] * statWeights[key], 0);

  return Math.max(1, Math.round(statScore + buildScore + itemScore));
}

export function modifierText(modifier: StatModifier): string {
  const suffix = percentStats.has(modifier.key) ? "%" : "";
  return `${statLabels[modifier.key]} +${modifier.value}${suffix}`;
}

export function getEquippedItem(inventory: EquipmentItem[], equipped: EquipmentSlots, slot: SlotKey): EquipmentItem | null {
  const itemId = equipped[slot];
  return itemId ? inventory.find((item) => item.id === itemId) ?? null : null;
}

function clampChance(value: number): number {
  return Math.min(0.72, Math.max(0, value / 100));
}

function chance(value: number): boolean {
  return Math.random() < clampChance(value);
}

function log(text: string, tone: BattleLogEntry["tone"] = "normal"): BattleLogEntry {
  return { text, tone };
}

export function runBossBattle(stats: StatBlock, battlePower: number, boss: BossConfig): BattleResult {
  let playerHp = Math.round(stats.hp);
  let bossHp = boss.hp + boss.difficulty * 70;
  const maxTurns = 24;
  const logs: BattleLogEntry[] = [log(`${boss.name}出现：${boss.title}`, "rare")];

  for (let turn = 1; turn <= maxTurns; turn += 1) {
    const playerFirst = stats.speed + randomInt(0, 4) >= boss.speed + randomInt(0, 4);

    const playerAction = () => {
      const crit = chance(stats.crit);
      const baseDamage = Math.max(6, Math.round(stats.efficiency * (0.82 + Math.random() * 0.36) - boss.disguise * 0.4));
      const damage = crit ? Math.round(baseDamage * 1.8) : baseDamage;
      bossHp -= damage;
      logs.push(log(`第${turn}回合：你${crit ? "触发暴摸，" : ""}输出 ${damage} 点摸鱼伤害。`, crit ? "good" : "normal"));

      if (bossHp > 0 && chance(stats.combo)) {
        const comboDamage = Math.max(4, Math.round(baseDamage * 0.55));
        bossHp -= comboDamage;
        logs.push(log(`连摸发动，追加 ${comboDamage} 点伤害。`, "good"));
      }

      if (playerHp > 0 && chance(stats.heal)) {
        const healValue = Math.round(18 + stats.hp * 0.04 + stats.inspiration * 0.8);
        playerHp = Math.min(Math.round(stats.hp), playerHp + healValue);
        logs.push(log(`咖啡续命，恢复 ${healValue} 点抗压值。`, "good"));
      }
    };

    const bossAction = () => {
      if (chance(stats.evade)) {
        logs.push(log(`第${turn}回合：你切屏够快，闪过一次巡查。`, "good"));
        return;
      }

      const usesSkill = turn % boss.skillEvery === 0;
      const busy = chance(stats.busy);
      const pressure = Math.max(
        5,
        Math.round((boss.pressure * (usesSkill ? 1.45 : 1) - stats.disguise * 0.45 - stats.stability * 0.2) * (busy ? 0.62 : 1)),
      );
      playerHp -= pressure;
      logs.push(
        log(
          `第${turn}回合：${boss.name}${usesSkill ? `发动「${boss.skillName}」` : "施加压力"}，你承受 ${pressure} 点压力。`,
          usesSkill ? "bad" : "normal",
        ),
      );

      if (busy) {
        logs.push(log("装忙生效，压力被压低了一截。", "good"));
      }

      if (playerHp > 0 && chance(stats.counter)) {
        const counterDamage = Math.max(8, Math.round(stats.efficiency * 0.55 + stats.disguise * 0.35));
        bossHp -= counterDamage;
        logs.push(log(`反卷触发，回敬 ${counterDamage} 点伤害。`, "good"));
      }
    };

    if (playerFirst) {
      playerAction();
      if (bossHp <= 0) {
        return completeBattle(boss, true, turn, playerHp, bossHp, logs);
      }
      bossAction();
    } else {
      bossAction();
      if (playerHp <= 0) {
        return completeBattle(boss, false, turn, playerHp, bossHp, logs);
      }
      playerAction();
    }

    if (bossHp <= 0 || playerHp <= 0) {
      return completeBattle(boss, playerHp > 0, turn, playerHp, bossHp, logs);
    }
  }

  const timeoutWin = battlePower > boss.hp * 1.7;
  return completeBattle(boss, timeoutWin, maxTurns, playerHp, bossHp, logs);
}

function completeBattle(
  boss: BossConfig,
  win: boolean,
  turns: number,
  playerHpLeft: number,
  bossHpLeft: number,
  logs: BattleLogEntry[],
): BattleResult {
  logs.push(win ? log(`你稳住工位，成功化解「${boss.name}」。`, "rare") : log(`你被「${boss.name}」抓住破绽，先回工位补强。`, "bad"));

  return {
    bossId: boss.id,
    bossName: boss.name,
    win,
    turns,
    playerHpLeft: Math.max(0, playerHpLeft),
    bossHpLeft: Math.max(0, bossHpLeft),
    rewards: win ? boss.reward : { stageExp: 0 },
    logs: logs.slice(-16),
  };
}

export function nextBossIndex(current: number, wins: number): number {
  if (wins < 2) {
    return 0;
  }

  if (wins < 5) {
    return Math.min(1, bosses.length - 1);
  }

  return Math.min(current + 1, bosses.length - 1);
}

export function stageLabel(index: number): string {
  return stageNames[Math.min(index, stageNames.length - 1)];
}
