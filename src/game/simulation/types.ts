export const slotKeys = [
  "computer",
  "keyboard",
  "headset",
  "cup",
  "chair",
  "badge",
  "note",
  "snack",
] as const;

export type SlotKey = (typeof slotKeys)[number];

export const statKeys = [
  "efficiency",
  "hp",
  "disguise",
  "speed",
  "inspiration",
  "stability",
  "combo",
  "crit",
  "evade",
  "counter",
  "busy",
  "heal",
  "bluff",
  "burnout",
  "deflect",
  "composure",
] as const;

export type StatKey = (typeof statKeys)[number];

export type StatBlock = Record<StatKey, number>;

export type RarityKey =
  | "common"
  | "fine"
  | "rare"
  | "epic"
  | "legendary"
  | "artifact"
  | "legacy";

export type ResourceKey = "salary" | "coffee" | "inspiration" | "parts" | "performance";

export type GameTab = "workstation" | "bag" | "challenge" | "union";

export interface SlotMeta {
  key: SlotKey;
  label: string;
  shortLabel: string;
  description: string;
}

export interface RarityMeta {
  key: RarityKey;
  label: string;
  affixCount: number;
  multiplier: number;
  sellValue: number;
  partValue: number;
}

export interface StatModifier {
  key: StatKey;
  value: number;
}

export interface ItemTemplate {
  id: string;
  name: string;
  slot: SlotKey;
  mainStats: StatKey[];
  affixBias: StatKey[];
  flavor: string;
}

export interface EquipmentItem {
  id: string;
  templateId: string;
  name: string;
  slot: SlotKey;
  rarity: RarityKey;
  level?: number;
  main: StatModifier;
  affixes: StatModifier[];
  score: number;
  locked: boolean;
  acquiredAt: number;
  source: string;
  flavor: string;
}

export type EquipmentSlots = Record<SlotKey, string | null>;

export interface BossConfig {
  id: string;
  name: string;
  title: string;
  difficulty: number;
  hp: number;
  pressure: number;
  disguise: number;
  speed: number;
  skillEvery: number;
  skillName: string;
  reward: Partial<Record<ResourceKey, number>> & { stageExp: number };
  notes: string[];
}

export interface BattleLogEntry {
  text: string;
  tone: "normal" | "good" | "bad" | "rare";
}

export interface BattleResult {
  bossId: string;
  bossName: string;
  win: boolean;
  turns: number;
  playerHpLeft: number;
  bossHpLeft: number;
  rewards: Partial<Record<ResourceKey, number>> & { stageExp: number };
  logs: BattleLogEntry[];
}

export interface GameResources {
  salary: number;
  coffee: number;
  inspiration: number;
  parts: number;
  performance: number;
}

export interface PlayerUnion {
  id: string;
  name: string;
  role: "会长" | "成员";
  level: number;
  contribution: number;
  notice: string;
  joinedAt: number;
}

export interface GameState {
  version: number;
  hydrated: boolean;
  currentTab: GameTab;
  union: PlayerUnion | null;
  resources: GameResources;
  stageIndex: number;
  stageExp: number;
  totalClicks: number;
  wins: number;
  inventoryCapacity: number;
  inventory: EquipmentItem[];
  equipped: EquipmentSlots;
  selectedItemId: string | null;
  activeBossIndex: number;
  battleResult: BattleResult | null;
  actionLog: BattleLogEntry[];
  lastSavedAt: number | null;
}
