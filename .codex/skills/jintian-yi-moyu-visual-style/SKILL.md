---
name: jintian-yi-moyu-visual-style
description: Use when working in this jintian-yi-moyu project on frontend UI, game screens, CSS, components, icons, generated image prompts, visual QA, or any user-facing feature that affects look and feel. Apply the project's Q-version Chinese cultivation mobile game style: ink-wash green immortal grove, cute jiangshi/Daoist fantasy, dense mobile RPG interface, gold brush typography, carved teal panels, spirit-glow accents, and playful xianxia progression.
---

# Jintian Yi Moyu Visual Style

## Core Direction

Make user-facing screens feel like a polished vertical Chinese cultivation idle/RPG mobile game: Q-version, hand-painted, xianxia, jiangshi/Daoist, cute rather than horror. Treat the interface as an in-world cultivation panel, not a generic web app.

Use `assets/reference-style.png` as the visual anchor when exact mood or asset prompting matters.

## Visual Language

- Build around a misty ink-wash immortal grove: twisted ancient trees, soft fog, jade grass, pale waterfall light, blue spirit flowers, drifting leaves, and subtle glowing particles.
- Keep the mood light, magical, and collectible. Even monsters, jiangshi, ghosts, and spirits should read as cute, mischievous, or toy-like.
- Prefer hand-painted textures, watercolor edges, brush softness, parchment/stone/wood/bronze materials, and layered translucency.
- Use dense game UI composition: top status/currency strip, central character or scene, progression/status bars, equipment grids, chat/system notices, and bottom navigation/actions.
- Favor small symbolic controls with icons and short Chinese labels over explanatory panels or marketing copy.

## Palette

- Main environment: mist jade, moss green, blue-green, muted teal, pale mint, off-white fog.
- Panels: deep teal, charcoal green, ink gray, low-opacity glassy green-black.
- Highlights: warm gold, amber-orange, soft firelight, cream text glow.
- Magic accents: cyan-blue spirit light, icy turquoise crystals, small red notification dots.
- Keep the palette balanced. Do not let the whole screen become one-note purple, beige, dark slate, or flat neon.

Useful anchors:

- `#123432` deep teal panel
- `#315f50` moss jade
- `#8fd9b4` mist mint
- `#f4c86a` gold text/accent
- `#f07f35` orange CTA
- `#3fd3ff` spirit blue
- `#d93b31` notification red

## Typography And Text

- Use brush/calligraphy styling for large labels, item slots, progression titles, and major game nouns.
- Use readable Chinese UI fonts for small stats and controls; prioritize legibility over ornament.
- Add subtle dark stroke or glow to gold/cream text on painted backgrounds.
- Keep labels compact: examples include `武器`, `头部`, `衣服`, `鞋履`, `灵兽`, `精怪`, `洞府`, `妖盟`, `挑战`, `冒险`.
- Avoid visible tutorial text that explains the UI. Let controls, iconography, and state do the teaching.

## Components

- Buttons should feel tactile: gold/orange lacquer, carved stone, jade, bronze, or parchment. Use glow sparingly for primary actions.
- Cards are only for repeated items, slots, modals, or framed tools. Do not nest cards inside cards.
- Equipment and inventory slots should use stable square or rectangular dimensions, thin jade/stone borders, dark translucent interiors, and centered brush labels or icons.
- Progress bars should feel like cultivation meters: dark troughs with warm/gold fill, spirit glow, or soft inner light.
- Navigation icons should be object-like: cave, banner, furnace, mountain stone, talisman, scroll, beast, weapon, pearl, gourd, bell, coin, crystal.
- Red dots indicate actionable notifications; use them consistently and keep them small.

## Character And Asset Prompts

When creating or asking for assets, include these traits:

`Q版国风修真手游, 萌系小僵尸/道童, 大头小身, 毛笔线条, 手绘水墨, 青绿仙境, 金色描边, 蓝色灵光, 符纸, 道袍, 古树, 洞府, 法宝, cute not scary, transparent background when used as UI asset`

For icons:

`small mobile game icon, hand-painted Chinese fantasy prop, jade/bronze/gold material, readable silhouette, slight bevel, transparent background`

For backgrounds:

`ink-wash Chinese immortal grove, ancient twisted tree, soft fog, jade grass, pale waterfall light, spirit flowers, layered watercolor, mobile game background`

## Layout Rules

- Optimize first for portrait mobile game screens, then adapt to desktop without making the app feel like a landing page.
- Keep key gameplay state visible without scrolling when possible: player status, current cultivation stage, primary action, and navigation.
- Use stable dimensions for boards, slots, bottom bars, icon buttons, meters, and counters so dynamic text or hover states do not shift layout.
- Make every interactive state visible: idle, hover/focus, pressed, disabled, selected, locked, available, and notified.
- Verify Chinese text fits inside buttons and slots at mobile widths; wrap or reduce local text size when needed.

## Avoid

- Generic SaaS dashboards, minimalist white cards, stock-photo heroes, western medieval fantasy, cyberpunk, photorealistic horror, gore, or dark scary jiangshi imagery.
- Oversized marketing hero sections when the task is to build an app/game/tool.
- Pure gradients, decorative blobs/orbs, flat monochrome icon sets, or SVG-only atmospheric art when a painted bitmap/game asset would fit better.
- UI text that describes features instead of being the actual feature.

## QA Checklist

Before finishing visual UI work:

- Compare the result against `assets/reference-style.png` for mood, density, palette, and game feel.
- Check mobile and desktop viewports for overlap, clipped Chinese text, oversized headings, unstable slot sizes, and washed-out contrast.
- Confirm primary actions read as warm gold/orange, secondary panels read as deep teal/jade, and magical accents remain cyan-blue rather than dominating the screen.
- If assets were generated, confirm they have readable silhouettes at small sizes and match Q-version Chinese cultivation fantasy.
