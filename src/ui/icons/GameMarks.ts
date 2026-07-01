import { defineComponent, h } from "vue";

export const PlusMark = defineComponent({
  name: "PlusMark",
  setup() {
    return () =>
      h("svg", { viewBox: "0 0 24 24", width: 16, height: 16, "aria-hidden": "true" }, [
        h("path", { d: "M12 5v14M5 12h14", stroke: "currentColor", "stroke-width": 3, "stroke-linecap": "round" }),
      ]);
  },
});

export const ForgeSealMark = defineComponent({
  name: "ForgeSealMark",
  setup() {
    return () =>
      h("svg", { class: "forge-seal-mark", viewBox: "0 0 120 120", width: 96, height: 96, "aria-hidden": "true" }, [
        h("circle", { cx: 60, cy: 60, r: 51, fill: "#7d4215", opacity: ".38" }),
        h("circle", { cx: 60, cy: 56, r: 48, fill: "#f4c86a", stroke: "#fff0a4", "stroke-width": 5 }),
        h("circle", { cx: 60, cy: 56, r: 39, fill: "#c88631", opacity: ".38" }),
        h("path", { d: "M28 75c21 12 43 12 66 0-8 18-20 27-36 27-15 0-25-9-30-27Z", fill: "#8fd9b4", opacity: ".2" }),
        h("path", { d: "M30 66h60l-5 25H35Z", fill: "#244a49", stroke: "#2b2224", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M42 73h4M54 73h4M66 73h4M78 73h4M43 83h34", stroke: "#f8f1d7", "stroke-width": 5, "stroke-linecap": "round" }),
        h("path", { d: "M38 50c10-15 31-16 45 0-13 16-34 16-45 0Z", fill: "#8fd9b4", stroke: "#2b2224", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M82 50 99 39l-2 21Z", fill: "#f07f35", stroke: "#2b2224", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M48 47c8 6 17 6 27 0", fill: "none", stroke: "#315f50", "stroke-width": 4, "stroke-linecap": "round" }),
        h("circle", { cx: 55, cy: 45, r: 4, fill: "#fff4cd", stroke: "#2b2224", "stroke-width": 3 }),
        h("path", { d: "M43 35c6-7 12-10 20-9M70 29c7 1 12 5 16 12", fill: "none", stroke: "#fff0a4", "stroke-width": 4, "stroke-linecap": "round" }),
        h("path", { d: "M31 34c4 0 7 2 9 5M91 27l7-8M99 35h9M23 54l-8 5", stroke: "#fff4cd", "stroke-width": 4, "stroke-linecap": "round", opacity: ".78" }),
        h("circle", { cx: 31, cy: 43, r: 4, fill: "#3fd3ff", opacity: ".86" }),
        h("circle", { cx: 91, cy: 68, r: 3, fill: "#3fd3ff", opacity: ".78" }),
        h("path", { d: "M36 94c15 6 32 7 50 0", fill: "none", stroke: "#fff0a4", "stroke-width": 4, "stroke-linecap": "round", opacity: ".72" }),
      ]);
  },
});

export const NavHomeMark = defineComponent({
  name: "NavHomeMark",
  setup() {
    return () =>
      h("svg", { class: "nav-game-icon", viewBox: "0 0 96 96", width: 58, height: 58, "aria-hidden": "true" }, [
        h("path", { d: "M16 75h67l-8 11H24Z", fill: "#2b4844", stroke: "#182322", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M19 55h58l-6 22H25Z", fill: "#8a5b33", stroke: "#2b2224", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("rect", { x: 27, y: 20, width: 43, height: 31, rx: 7, fill: "#254d51", stroke: "#2b2224", "stroke-width": 5 }),
        h("path", { d: "M36 33h22M38 43h16", stroke: "#9ff1c8", "stroke-width": 4, "stroke-linecap": "round" }),
        h("path", { d: "M48 52v9M36 64h25", stroke: "#2b2224", "stroke-width": 5, "stroke-linecap": "round" }),
        h("path", { d: "M21 58c12 6 28 6 49 0", fill: "none", stroke: "#d7a45e", "stroke-width": 4, "stroke-linecap": "round", opacity: ".86" }),
        h("path", { d: "M70 50h9l-3 18h-8Z", fill: "#f4e3b0", stroke: "#2b2224", "stroke-width": 4, "stroke-linejoin": "round" }),
        h("path", { d: "M72 41c3-4 3-8 0-12M79 41c3-4 3-8 0-12", fill: "none", stroke: "#f4c86a", "stroke-width": 4, "stroke-linecap": "round" }),
        h("circle", { cx: 27, cy: 64, r: 5, fill: "#d93b31", stroke: "#772018", "stroke-width": 3 }),
        h("path", { d: "M20 83c17 6 37 6 58 0", fill: "none", stroke: "#3fd3ff", "stroke-width": 4, "stroke-linecap": "round", opacity: ".58" }),
      ]);
  },
});

export const NavGuildMark = defineComponent({
  name: "NavGuildMark",
  setup() {
    return () =>
      h("svg", { class: "nav-game-icon", viewBox: "0 0 96 96", width: 58, height: 58, "aria-hidden": "true" }, [
        h("path", { d: "M15 72h66l-8 12H23Z", fill: "#314b46", stroke: "#1a2524", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M20 47c9-17 23-26 42-26 12 0 21 6 28 17-20 3-35 12-45 27-8-10-16-16-25-18Z", fill: "#c9d6cd", stroke: "#2b2224", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M25 52c9 3 17 10 25 21 7-15 19-25 35-30", fill: "none", stroke: "#6f8e86", "stroke-width": 5, "stroke-linecap": "round" }),
        h("path", { d: "M34 24c6-8 15-12 25-11 9 1 16 6 21 14-19-4-34-3-46 3Z", fill: "#8fd9b4", stroke: "#315f50", "stroke-width": 4, "stroke-linejoin": "round" }),
        h("path", { d: "M35 47h29M29 61h22M62 59h13", stroke: "#fff0a4", "stroke-width": 5, "stroke-linecap": "round" }),
        h("circle", { cx: 24, cy: 40, r: 6, fill: "#d93b31", stroke: "#772018", "stroke-width": 3 }),
        h("path", { d: "M20 82c19 7 37 7 56 0", fill: "none", stroke: "#3fd3ff", "stroke-width": 4, "stroke-linecap": "round", opacity: ".65" }),
      ]);
  },
});

export const NavCaveMark = defineComponent({
  name: "NavCaveMark",
  setup() {
    return () =>
      h("svg", { class: "nav-game-icon", viewBox: "0 0 96 96", width: 58, height: 58, "aria-hidden": "true" }, [
        h("path", { d: "M18 76h60v10H18Z", fill: "#3c3127", stroke: "#1d1b1b", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M24 46h48v31H24Z", fill: "#f4e3b0", stroke: "#442f24", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M18 45 48 20l30 25Z", fill: "#b93026", stroke: "#4b2a22", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M27 43h42M32 33h32", stroke: "#f4c86a", "stroke-width": 5, "stroke-linecap": "round" }),
        h("circle", { cx: 49, cy: 61, r: 13, fill: "#f07f35", stroke: "#8d431e", "stroke-width": 5 }),
        h("path", { d: "M44 61c5-9 11-9 16 0M44 57c5 9 11 9 16 0", fill: "none", stroke: "#fff0a4", "stroke-width": 4, "stroke-linecap": "round" }),
        h("path", { d: "M21 84c17 6 36 6 58 0", fill: "none", stroke: "#8fd9b4", "stroke-width": 4, "stroke-linecap": "round", opacity: ".65" }),
      ]);
  },
});

export const NavChallengeMark = defineComponent({
  name: "NavChallengeMark",
  setup() {
    return () =>
      h("svg", { class: "nav-game-icon", viewBox: "0 0 96 96", width: 58, height: 58, "aria-hidden": "true" }, [
        h("path", { d: "M23 74h53l-7 11H30Z", fill: "#273e3d", stroke: "#182322", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M28 25 76 73M68 18l-9 20 16 15 11-27Z", fill: "#cfd8d0", stroke: "#2b2224", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M35 67 21 81", stroke: "#8a5b33", "stroke-width": 10, "stroke-linecap": "round" }),
        h("path", { d: "M36 67 23 80", stroke: "#d7a45e", "stroke-width": 5, "stroke-linecap": "round" }),
        h("path", { d: "M23 41c13-6 25-4 35 8", fill: "none", stroke: "#8fd9b4", "stroke-width": 6, "stroke-linecap": "round" }),
        h("path", { d: "M23 53c10-4 19-2 28 6", fill: "none", stroke: "#3fd3ff", "stroke-width": 5, "stroke-linecap": "round" }),
        h("circle", { cx: 70, cy: 30, r: 5, fill: "#f4c86a", stroke: "#8d431e", "stroke-width": 3 }),
        h("path", { d: "M24 84c16 5 34 5 54 0", fill: "none", stroke: "#f4c86a", "stroke-width": 4, "stroke-linecap": "round", opacity: ".6" }),
      ]);
  },
});

export const NavAdventureMark = defineComponent({
  name: "NavAdventureMark",
  setup() {
    return () =>
      h("svg", { class: "nav-game-icon", viewBox: "0 0 96 96", width: 58, height: 58, "aria-hidden": "true" }, [
        h("path", { d: "M13 75h70l-8 12H21Z", fill: "#2a3d3a", stroke: "#182322", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M18 76 39 28l12 18 12-25 19 55Z", fill: "#9ba5a1", stroke: "#2b2224", "stroke-width": 5, "stroke-linejoin": "round" }),
        h("path", { d: "M35 39l6 9 6-10M60 35l5 10 6-7", fill: "none", stroke: "#e9f0e6", "stroke-width": 4, "stroke-linecap": "round", "stroke-linejoin": "round" }),
        h("path", { d: "M27 70c11-8 24-9 39-4", fill: "none", stroke: "#315f50", "stroke-width": 6, "stroke-linecap": "round" }),
        h("circle", { cx: 67, cy: 51, r: 11, fill: "#f4e3b0", stroke: "#47372b", "stroke-width": 4 }),
        h("path", { d: "m67 43 4 9-9 5Z", fill: "#f07f35", stroke: "#8d431e", "stroke-width": 2, "stroke-linejoin": "round" }),
        h("path", { d: "M20 84c18 6 38 6 60 0", fill: "none", stroke: "#3fd3ff", "stroke-width": 4, "stroke-linecap": "round", opacity: ".58" }),
      ]);
  },
});

export const TaskScrollMark = defineComponent({
  name: "TaskScrollMark",
  setup() {
    return () =>
      h("svg", { viewBox: "0 0 54 54", width: 46, height: 46, "aria-hidden": "true" }, [
        h("path", { d: "M13 8h26c5 0 8 3 8 8v27H18c-5 0-9-4-9-9V12c0-2 2-4 4-4Z", fill: "#f9e6b6", stroke: "#6d4b22", "stroke-width": 4 }),
        h("path", { d: "M17 18h21M17 27h17M17 36h12", stroke: "#315f50", "stroke-width": 4, "stroke-linecap": "round" }),
        h("path", { d: "M34 40l4 4 9-12", fill: "none", stroke: "#e06b22", "stroke-width": 4, "stroke-linecap": "round", "stroke-linejoin": "round" }),
      ]);
  },
});

export const MessageBubble = defineComponent({
  name: "MessageBubble",
  setup() {
    return () =>
      h("svg", { viewBox: "0 0 52 38", width: 38, height: 28, "aria-hidden": "true" }, [
        h("path", { d: "M8 5h34c4 0 7 3 7 7v7c0 4-3 7-7 7H22L11 35l2-9H8c-4 0-7-3-7-7v-7c0-4 3-7 7-7Z", fill: "#fff4cd", stroke: "#3f5049", "stroke-width": 3 }),
        h("circle", { cx: 17, cy: 16, r: 3, fill: "#3f5049" }),
        h("circle", { cx: 26, cy: 16, r: 3, fill: "#3f5049" }),
        h("circle", { cx: 35, cy: 16, r: 3, fill: "#3f5049" }),
      ]);
  },
});

export const CircleMark = defineComponent({
  name: "CircleMark",
  setup() {
    return () =>
      h("svg", { viewBox: "0 0 36 36", width: 30, height: 30, "aria-hidden": "true" }, [
        h("circle", { cx: 18, cy: 18, r: 15, fill: "#1c302d", stroke: "#d6e7d6", "stroke-width": 3 }),
        h("path", { d: "M11 20c5-9 11-9 16 0M11 16c5 9 11 9 16 0", stroke: "#f4f1e1", "stroke-width": 3, fill: "none", "stroke-linecap": "round" }),
      ]);
  },
});

export const SlotGlyph = defineComponent({
  name: "SlotGlyph",
  props: {
    kind: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h(
        "svg",
        { class: "slot-glyph", viewBox: "0 0 64 64", width: 36, height: 36, "aria-hidden": "true" },
        slotGlyphNodes(props.kind),
      );
  },
});

export const EquipmentIcon = defineComponent({
  name: "EquipmentIcon",
  props: {
    kind: {
      type: String,
      required: true,
    },
    templateId: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    return () =>
      h(
        "svg",
        { class: "equipment-icon", viewBox: "0 0 96 96", width: 58, height: 58, "aria-hidden": "true" },
        equipmentIconNodes(props.kind, props.templateId),
      );
  },
});

function slotGlyphNodes(kind: string) {
  const baseAttrs = { fill: "none", stroke: "currentColor", "stroke-width": 4, "stroke-linecap": "round", "stroke-linejoin": "round" };
  const fillAttrs = { fill: "currentColor", opacity: ".18" };

  switch (kind) {
    case "computer":
      return [
        h("rect", { x: 12, y: 14, width: 40, height: 28, rx: 5, ...fillAttrs }),
        h("path", { d: "M12 14h40v28H12zM26 50h12M22 56h20", ...baseAttrs }),
      ];
    case "keyboard":
      return [
        h("rect", { x: 10, y: 22, width: 44, height: 24, rx: 5, ...fillAttrs }),
        h("path", { d: "M10 22h44v24H10zM18 31h3M27 31h3M36 31h3M45 31h3M18 39h28", ...baseAttrs }),
      ];
    case "headset":
      return [
        h("path", { d: "M15 36v-8c0-10 7-18 17-18s17 8 17 18v8M18 36h8v14h-8zM38 36h8v14h-8z", ...baseAttrs }),
        h("path", { d: "M42 51c-3 5-8 7-15 6", ...baseAttrs }),
      ];
    case "cup":
      return [
        h("path", { d: "M17 22h28l-4 31H21zM45 27h6c5 0 5 15-2 15h-6", ...baseAttrs }),
        h("path", { d: "M23 14c2-4 2-7 0-10M33 14c3-4 3-7 1-10", ...baseAttrs }),
      ];
    case "chair":
      return [
        h("path", { d: "M20 12h23c4 0 7 3 7 7v18H18V14c0-1 1-2 2-2ZM16 39h36M22 39l-4 15M44 39l4 15", ...baseAttrs }),
        h("path", { d: "M24 22h20", ...baseAttrs }),
      ];
    case "badge":
      return [
        h("path", { d: "M22 10h20l-3 11H25zM18 21h28v32H18z", ...baseAttrs }),
        h("circle", { cx: 32, cy: 34, r: 5, ...baseAttrs }),
        h("path", { d: "M24 46h16", ...baseAttrs }),
      ];
    case "note":
      return [
        h("path", { d: "M17 11h31v42H16V12c0-1 0-1 1-1ZM48 12 38 22h10", ...baseAttrs }),
        h("path", { d: "M23 30h17M23 39h15", ...baseAttrs }),
      ];
    case "snack":
      return [
        h("path", { d: "M15 20c7-7 27-7 34 0l-5 33H20zM18 23l6 5 6-5 6 5 6-5 5 4", ...baseAttrs }),
        h("circle", { cx: 28, cy: 38, r: 2.5, fill: "currentColor" }),
        h("circle", { cx: 38, cy: 44, r: 2.5, fill: "currentColor" }),
      ];
    case "partner":
      return [
        h("path", { d: "M22 27a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM42 27a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM12 52c2-11 9-17 20-17s18 6 20 17", ...baseAttrs }),
      ];
    case "spirit":
      return [
        h("path", { d: "M32 7c10 12 15 22 15 31 0 8-6 15-15 15s-15-7-15-15c0-9 5-19 15-31Z", ...baseAttrs }),
        h("path", { d: "M26 39c3 3 8 3 12 0", ...baseAttrs }),
      ];
    case "treasure":
      return [
        h("path", { d: "M14 28h36v24H14zM18 28c2-10 8-15 14-15s12 5 14 15M32 28v24", ...baseAttrs }),
        h("path", { d: "M22 40h20", ...baseAttrs }),
      ];
    default:
      return [
        h("path", { d: "M20 50h24l5-24H15zM23 26c0-8 4-14 9-14s9 6 9 14M25 50l-4 8M39 50l4 8", ...baseAttrs }),
      ];
  }
}

function equipmentIconNodes(kind: string, templateId: string) {
  switch (kind) {
    case "computer":
      return computerIcon(templateId);
    case "keyboard":
      return keyboardIcon(templateId);
    case "headset":
      return headsetIcon(templateId);
    case "cup":
      return cupIcon(templateId);
    case "chair":
      return chairIcon(templateId);
    case "badge":
      return badgeIcon(templateId);
    case "note":
      return noteIcon(templateId);
    case "snack":
      return snackIcon(templateId);
    default:
      return talismanProp("#f4c86a", "#315f50");
  }
}

function iconStroke(width = 4) {
  return { stroke: "#2b2224", "stroke-width": width, "stroke-linecap": "round", "stroke-linejoin": "round" };
}

function glow(color = "#3fd3ff") {
  return h("path", { d: "M21 78c17 9 37 9 54 0", fill: "none", stroke: color, "stroke-width": 4, "stroke-linecap": "round", opacity: ".58" });
}

function computerIcon(templateId: string) {
  const stroke = iconStroke();
  if (templateId === "computer_old_laptop") {
    return [
      h("path", { d: "M22 32h42c5 0 8 3 8 8v24H18V36c0-2 2-4 4-4Z", fill: "#b8c2b0", ...stroke }),
      h("path", { d: "M15 65h66l-7 10H22Z", fill: "#68786f", ...stroke }),
      h("path", { d: "M31 44h26M31 53h18", stroke: "#315f50", "stroke-width": 4, "stroke-linecap": "round" }),
      h("circle", { cx: 66, cy: 42, r: 4, fill: "#f4c86a", stroke: "#2b2224", "stroke-width": 3 }),
      glow("#f4c86a"),
    ];
  }
  if (templateId === "computer_stealth_window") {
    return [
      h("rect", { x: 20, y: 21, width: 54, height: 39, rx: 7, fill: "#244a49", ...stroke }),
      h("rect", { x: 29, y: 31, width: 25, height: 17, rx: 3, fill: "#8fd9b4", stroke: "#122b29", "stroke-width": 3 }),
      h("path", { d: "M58 47c8-11 15-12 21-5-8 4-15 5-21 5Z", fill: "#315f50", ...stroke }),
      h("path", { d: "M42 61v10M31 75h32", ...stroke }),
      glow(),
    ];
  }
  if (templateId === "computer_workstation") {
    return [
      h("rect", { x: 17, y: 22, width: 43, height: 35, rx: 6, fill: "#2a565b", ...stroke }),
      h("path", { d: "M66 28h13v45H66Z", fill: "#455354", ...stroke }),
      h("circle", { cx: 72.5, cy: 63, r: 3, fill: "#3fd3ff" }),
      h("path", { d: "M27 36h21M27 46h15M38 58v11M28 72h26", stroke: "#a8efd0", "stroke-width": 4, "stroke-linecap": "round" }),
      glow("#8fd9b4"),
    ];
  }
  return [
    h("rect", { x: 11, y: 25, width: 35, height: 30, rx: 6, fill: "#365c61", ...stroke }),
    h("rect", { x: 50, y: 21, width: 35, height: 34, rx: 6, fill: "#244a49", ...stroke }),
    h("path", { d: "M19 38h18M58 34h18M58 44h13M32 56v12M63 56v12M23 72h50", stroke: "#9ff1c8", "stroke-width": 4, "stroke-linecap": "round" }),
    h("path", { d: "M43 24l8-9 6 9", fill: "#f4c86a", ...stroke }),
    glow(),
  ];
}

function keyboardIcon(templateId: string) {
  const stroke = iconStroke();
  const keyLine = { stroke: "#f8f1d7", "stroke-width": 4, "stroke-linecap": "round" };
  if (templateId === "keyboard_mechanical") {
    return [
      h("path", { d: "M15 31h66l-4 36H19Z", fill: "#2e5052", ...stroke }),
      h("path", { d: "M26 41h5M39 41h5M52 41h5M65 41h5M27 54h37", ...keyLine }),
      h("path", { d: "M24 26c7-7 15-8 24-2 10 7 18 7 25 0", fill: "none", stroke: "#3fd3ff", "stroke-width": 4, "stroke-linecap": "round" }),
      glow("#3fd3ff"),
    ];
  }
  if (templateId === "keyboard_shortcut") {
    return [
      h("path", { d: "M17 28h62l-4 38H21Z", fill: "#d9c77c", ...stroke }),
      h("path", { d: "M29 39h9M47 39h9M64 39h5M31 52h32", stroke: "#315f50", "stroke-width": 4, "stroke-linecap": "round" }),
      h("path", { d: "M18 20 31 8l8 18", fill: "#f4e3b0", ...stroke }),
      h("path", { d: "M26 16h8", stroke: "#d93b31", "stroke-width": 4, "stroke-linecap": "round" }),
      glow("#f4c86a"),
    ];
  }
  if (templateId === "keyboard_overtime") {
    return [
      h("path", { d: "M16 32h63l-5 35H20Z", fill: "#4b393e", ...stroke }),
      h("path", { d: "M28 43h5M41 43h5M54 43h5M67 43h5M29 56h34", ...keyLine }),
      h("circle", { cx: 70, cy: 26, r: 11, fill: "#f4c86a", ...stroke }),
      h("path", { d: "M70 20v7l5 4", fill: "none", stroke: "#8d431e", "stroke-width": 3, "stroke-linecap": "round" }),
      glow("#ffb59f"),
    ];
  }
  return [
    h("path", { d: "M16 33h64l-5 32H21Z", fill: "#c7d9cf", ...stroke }),
    h("path", { d: "M28 43h4M40 43h4M52 43h4M64 43h4M29 55h34", stroke: "#315f50", "stroke-width": 4, "stroke-linecap": "round" }),
    h("path", { d: "M22 27c10 4 21 4 32 0", fill: "none", stroke: "#8fd9b4", "stroke-width": 4, "stroke-linecap": "round" }),
    glow("#8fd9b4"),
  ];
}

function headsetIcon(templateId: string) {
  const stroke = iconStroke();
  if (templateId === "headset_meeting") {
    return [
      h("path", { d: "M23 50V38c0-16 10-27 25-27s25 11 25 27v12", fill: "none", ...stroke }),
      h("path", { d: "M19 47h14v22H19zM63 47h14v22H63z", fill: "#315f50", ...stroke }),
      h("path", { d: "M65 67c-5 8-13 11-24 9", fill: "none", ...stroke }),
      h("path", { d: "M16 23h20l-3 16H19Z", fill: "#f4e3b0", ...stroke }),
      h("circle", { cx: 24, cy: 31, r: 2.5, fill: "#315f50" }),
      glow(),
    ];
  }
  if (templateId === "headset_broken") {
    return [
      h("path", { d: "M24 51V38c0-15 10-26 24-26 8 0 15 4 20 10", fill: "none", ...stroke }),
      h("path", { d: "M18 47h14v22H18zM64 47h13v17H64z", fill: "#60716b", ...stroke }),
      h("path", { d: "M65 25 59 34l9 3-8 11", fill: "none", stroke: "#f4c86a", "stroke-width": 4, "stroke-linecap": "round", "stroke-linejoin": "round" }),
      h("path", { d: "M68 64c8 4 9 11 3 18", fill: "none", stroke: "#2b2224", "stroke-width": 4, "stroke-linecap": "round" }),
      glow("#f4c86a"),
    ];
  }
  if (templateId === "headset_radio") {
    return [
      h("path", { d: "M21 51V39c0-16 11-27 27-27s27 11 27 27v12", fill: "none", ...stroke }),
      h("path", { d: "M18 47h15v22H18zM63 47h15v22H63z", fill: "#244a49", ...stroke }),
      h("path", { d: "M76 17c7 6 11 13 12 22M13 17C6 23 2 31 1 39", fill: "none", stroke: "#3fd3ff", "stroke-width": 4, "stroke-linecap": "round" }),
      h("path", { d: "M41 71h16", stroke: "#f4c86a", "stroke-width": 4, "stroke-linecap": "round" }),
      glow("#3fd3ff"),
    ];
  }
  return [
    h("path", { d: "M22 51V39c0-16 10-27 26-27s26 11 26 27v12", fill: "none", ...stroke }),
    h("path", { d: "M18 47h15v22H18zM63 47h15v22H63z", fill: "#3d5960", ...stroke }),
    h("path", { d: "M30 18c11 8 25 8 36 0", fill: "none", stroke: "#8fd9b4", "stroke-width": 5, "stroke-linecap": "round" }),
    h("path", { d: "M33 73c9 5 20 5 30 0", fill: "none", stroke: "#f4c86a", "stroke-width": 4, "stroke-linecap": "round" }),
    glow(),
  ];
}

function cupIcon(templateId: string) {
  const stroke = iconStroke();
  if (templateId === "cup_coffee") {
    return [
      h("path", { d: "M27 31h34l-5 40H32Z", fill: "#f4e3b0", ...stroke }),
      h("path", { d: "M61 39h9c7 0 7 19-3 19h-8", fill: "none", ...stroke }),
      h("path", { d: "M35 43h18", stroke: "#8d431e", "stroke-width": 5, "stroke-linecap": "round" }),
      h("path", { d: "M35 22c4-5 4-9 0-14M48 22c4-5 4-9 0-14", fill: "none", stroke: "#f4c86a", "stroke-width": 4, "stroke-linecap": "round" }),
      glow("#f4c86a"),
    ];
  }
  if (templateId === "cup_water") {
    return [
      h("path", { d: "M34 15h24l-2 13 5 8-6 38H36l-6-38 6-8Z", fill: "#bce8ee", opacity: ".82", ...stroke }),
      h("path", { d: "M35 47c7 5 15 5 23 0", fill: "none", stroke: "#3fd3ff", "stroke-width": 4, "stroke-linecap": "round" }),
      h("path", { d: "M38 14h16", stroke: "#f4e3b0", "stroke-width": 5, "stroke-linecap": "round" }),
      glow("#3fd3ff"),
    ];
  }
  if (templateId === "cup_bubble") {
    return [
      h("path", { d: "M29 26h35l-5 47H35Z", fill: "#f0b889", ...stroke }),
      h("path", { d: "M33 39h27", stroke: "#f8f1d7", "stroke-width": 5, "stroke-linecap": "round" }),
      h("circle", { cx: 42, cy: 62, r: 4, fill: "#3a251d" }),
      h("circle", { cx: 53, cy: 65, r: 4, fill: "#3a251d" }),
      h("path", { d: "M52 10 41 27", stroke: "#315f50", "stroke-width": 5, "stroke-linecap": "round" }),
      glow("#ffb59f"),
    ];
  }
  return [
    h("path", { d: "M29 23h35l-6 49H35Z", fill: "#486355", ...stroke }),
    h("path", { d: "M64 32h7c8 0 8 22-4 22h-6", fill: "none", ...stroke }),
    h("path", { d: "M35 35h23M36 47h20", stroke: "#f4c86a", "stroke-width": 4, "stroke-linecap": "round" }),
    h("path", { d: "M42 16c3-4 3-8 0-12M54 16c3-4 3-8 0-12", fill: "none", stroke: "#f4e3b0", "stroke-width": 4, "stroke-linecap": "round" }),
    glow("#8fd9b4"),
  ];
}

function chairIcon(templateId: string) {
  const stroke = iconStroke();
  if (templateId === "chair_old") {
    return [
      h("path", { d: "M29 17h37c5 0 8 3 8 8v25H25V21c0-2 2-4 4-4Z", fill: "#8a5b33", ...stroke }),
      h("path", { d: "M23 52h52M32 52l-6 24M65 52l8 24", fill: "none", ...stroke }),
      h("path", { d: "M36 28h21M40 38h18", stroke: "#d5b17a", "stroke-width": 4, "stroke-linecap": "round" }),
      h("path", { d: "M74 28l9-6M76 40l11 1", stroke: "#f4c86a", "stroke-width": 4, "stroke-linecap": "round" }),
      glow("#f4c86a"),
    ];
  }
  if (templateId === "chair_hidden") {
    return [
      h("path", { d: "M28 18h36c5 0 8 3 8 8v27H24V22c0-2 2-4 4-4Z", fill: "#244a49", ...stroke }),
      h("path", { d: "M24 52h48M34 52l-5 24M62 52l6 24", fill: "none", ...stroke }),
      h("path", { d: "M23 31c16-11 34-12 53-3-11 6-19 15-24 28-9-15-19-23-29-25Z", fill: "#315f50", opacity: ".7", ...stroke }),
      glow("#3fd3ff"),
    ];
  }
  if (templateId === "chair_cushion") {
    return [
      h("path", { d: "M29 18h36c5 0 8 3 8 8v25H25V22c0-2 2-4 4-4Z", fill: "#57796e", ...stroke }),
      h("rect", { x: 30, y: 39, width: 36, height: 18, rx: 8, fill: "#f4e3b0", ...stroke }),
      h("path", { d: "M24 58h49M34 58l-5 20M62 58l6 20", fill: "none", ...stroke }),
      glow("#f4c86a"),
    ];
  }
  return [
    h("path", { d: "M28 16h39c5 0 8 3 8 8v30H23V21c0-3 2-5 5-5Z", fill: "#4c7b78", ...stroke }),
    h("path", { d: "M30 32h37M23 55h52M34 55l-5 23M64 55l6 23", fill: "none", ...stroke }),
    h("path", { d: "M38 13c8-5 16-5 24 0", fill: "none", stroke: "#f4c86a", "stroke-width": 5, "stroke-linecap": "round" }),
    glow("#8fd9b4"),
  ];
}

function badgeIcon(templateId: string) {
  const stroke = iconStroke();
  if (templateId === "badge_veteran") {
    return [
      h("path", { d: "M34 10h27l-5 16H39Z", fill: "#8a5b33", ...stroke }),
      h("path", { d: "M24 25h48v48H24Z", fill: "#53645c", ...stroke }),
      h("path", { d: "m48 36 5 10 11 1-8 8 2 11-10-5-10 5 2-11-8-8 11-1Z", fill: "#f4c86a", stroke: "#6d4b22", "stroke-width": 3, "stroke-linejoin": "round" }),
      glow("#f4c86a"),
    ];
  }
  if (templateId === "badge_visitor") {
    return [
      h("path", { d: "M32 8c7 11 25 11 32 0", fill: "none", ...stroke }),
      h("rect", { x: 23, y: 26, width: 50, height: 46, rx: 8, fill: "#c7d9cf", ...stroke }),
      h("path", { d: "M32 39h30M32 52h20", stroke: "#315f50", "stroke-width": 5, "stroke-linecap": "round" }),
      h("circle", { cx: 63, cy: 61, r: 5, fill: "#d93b31", stroke: "#2b2224", "stroke-width": 3 }),
      glow("#8fd9b4"),
    ];
  }
  if (templateId === "badge_gold") {
    return [
      h("path", { d: "M34 11h28l-4 16H38Z", fill: "#fff0a4", ...stroke }),
      h("path", { d: "M23 26h50v48H23Z", fill: "#f4c86a", ...stroke }),
      h("circle", { cx: 48, cy: 47, r: 10, fill: "#fff4cd", stroke: "#8d431e", "stroke-width": 4 }),
      h("path", { d: "M34 63h28", stroke: "#8d431e", "stroke-width": 5, "stroke-linecap": "round" }),
      glow("#f4c86a"),
    ];
  }
  return [
    h("path", { d: "M35 10h26l-5 16H40Z", fill: "#8fd9b4", ...stroke }),
    h("path", { d: "M24 25h48v48H24Z", fill: "#e8f6ee", ...stroke }),
    h("circle", { cx: 48, cy: 44, r: 8, fill: "#315f50" }),
    h("path", { d: "M34 60h28", stroke: "#315f50", "stroke-width": 5, "stroke-linecap": "round" }),
    glow("#8fd9b4"),
  ];
}

function noteIcon(templateId: string) {
  const stroke = iconStroke();
  if (templateId === "note_report") {
    return [
      h("path", { d: "M28 12h39v58H24V16c0-2 2-4 4-4Z", fill: "#f4e3b0", ...stroke }),
      h("path", { d: "M35 29h23M35 42h20M35 55h15", stroke: "#315f50", "stroke-width": 5, "stroke-linecap": "round" }),
      h("path", { d: "M67 13 55 26h12", fill: "#d5b17a", stroke: "#2b2224", "stroke-width": 3, "stroke-linejoin": "round" }),
      glow("#f4c86a"),
    ];
  }
  if (templateId === "note_excuse") {
    return talismanProp("#f4e3b0", "#d93b31");
  }
  if (templateId === "note_focus") {
    return [
      h("path", { d: "M25 21h47v43H25Z", fill: "#f4e3b0", ...stroke }),
      h("path", { d: "m48 29 6 12 13 2-10 9 3 13-12-6-12 6 3-13-10-9 13-2Z", fill: "#8fd9b4", stroke: "#315f50", "stroke-width": 3, "stroke-linejoin": "round" }),
      h("path", { d: "M33 16h28", stroke: "#f4c86a", "stroke-width": 5, "stroke-linecap": "round" }),
      glow("#8fd9b4"),
    ];
  }
  return [
    h("rect", { x: 22, y: 23, width: 48, height: 46, rx: 5, fill: "#f3d59a", ...stroke }),
    h("path", { d: "M32 36h26M32 49h19", stroke: "#315f50", "stroke-width": 5, "stroke-linecap": "round" }),
    h("path", { d: "M20 19c10-7 20-7 30 0", fill: "none", stroke: "#d93b31", "stroke-width": 5, "stroke-linecap": "round" }),
    glow("#f4c86a"),
  ];
}

function snackIcon(templateId: string) {
  const stroke = iconStroke();
  if (templateId === "snack_seed") {
    return [
      h("path", { d: "M28 22c13-8 28-8 41 0l-6 50H34Z", fill: "#d9c77c", ...stroke }),
      h("path", { d: "M32 28l7 7 8-7 8 7 8-7", fill: "none", stroke: "#8d431e", "stroke-width": 4, "stroke-linecap": "round", "stroke-linejoin": "round" }),
      h("ellipse", { cx: 43, cy: 50, rx: 4, ry: 7, fill: "#315f50", transform: "rotate(-18 43 50)" }),
      h("ellipse", { cx: 55, cy: 56, rx: 4, ry: 7, fill: "#315f50", transform: "rotate(18 55 56)" }),
      glow("#f4c86a"),
    ];
  }
  if (templateId === "snack_energy") {
    return [
      h("path", { d: "M23 38 62 21l13 30-39 18Z", fill: "#f4c86a", ...stroke }),
      h("path", { d: "m49 33-5 14 13-4-7 15", fill: "none", stroke: "#d93b31", "stroke-width": 5, "stroke-linecap": "round", "stroke-linejoin": "round" }),
      h("path", { d: "M29 42 66 27", stroke: "#fff0a4", "stroke-width": 4, "stroke-linecap": "round" }),
      glow("#f4c86a"),
    ];
  }
  if (templateId === "snack_takeout") {
    return [
      h("path", { d: "M31 14h38v60l-8-6-7 6-7-6-8 6-8-6Z", fill: "#f4e3b0", ...stroke }),
      h("path", { d: "M40 30h20M40 43h16M40 56h22", stroke: "#315f50", "stroke-width": 5, "stroke-linecap": "round" }),
      h("circle", { cx: 65, cy: 22, r: 6, fill: "#d93b31", stroke: "#2b2224", "stroke-width": 3 }),
      glow("#f4c86a"),
    ];
  }
  return [
    h("path", { d: "M27 28c7-10 33-10 41 0l-7 42H34Z", fill: "#f4e3b0", ...stroke }),
    h("path", { d: "M31 32l6 6 7-6 7 6 7-6 7 6", fill: "none", stroke: "#d93b31", "stroke-width": 4, "stroke-linecap": "round", "stroke-linejoin": "round" }),
    h("circle", { cx: 43, cy: 51, r: 6, fill: "#8a5b33", stroke: "#2b2224", "stroke-width": 3 }),
    h("circle", { cx: 54, cy: 58, r: 5, fill: "#8a5b33", stroke: "#2b2224", "stroke-width": 3 }),
    glow("#f4c86a"),
  ];
}

function talismanProp(fill: string, accent: string) {
  const stroke = iconStroke();
  return [
    h("path", { d: "M32 10h33l-4 68H28Z", fill, ...stroke }),
    h("path", { d: "M39 27h16M37 40h20M41 53h12", stroke: accent, "stroke-width": 5, "stroke-linecap": "round" }),
    h("path", { d: "M44 10c3-6 9-6 12 0", fill: "none", stroke: "#f4c86a", "stroke-width": 5, "stroke-linecap": "round" }),
    glow(accent === "#d93b31" ? "#f4c86a" : accent),
  ];
}
