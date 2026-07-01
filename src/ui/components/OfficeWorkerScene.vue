<template>
  <svg class="office-worker-illustration" viewBox="0 0 420 360" role="img" aria-label="office worker typing at a computer">
    <defs>
      <linearGradient id="suit-grad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#f1f4ed" />
        <stop offset=".52" stop-color="#b8c7bf" />
        <stop offset="1" stop-color="#54645f" />
      </linearGradient>
      <linearGradient id="vest-grad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#37505a" />
        <stop offset="1" stop-color="#151d22" />
      </linearGradient>
      <linearGradient id="skin-grad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#ffd9bd" />
        <stop offset=".58" stop-color="#e7aa83" />
        <stop offset="1" stop-color="#b86f55" />
      </linearGradient>
      <linearGradient id="hair-grad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#3d332d" />
        <stop offset="1" stop-color="#111214" />
      </linearGradient>
      <linearGradient id="keyboard-grad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#364448" />
        <stop offset="1" stop-color="#12191b" />
      </linearGradient>
      <radialGradient id="screen-glow" cx=".5" cy=".48" r=".7">
        <stop offset="0" stop-color="#8ceaff" stop-opacity=".9" />
        <stop offset=".52" stop-color="#277e99" stop-opacity=".5" />
        <stop offset="1" stop-color="#07161c" stop-opacity=".08" />
      </radialGradient>
    </defs>

    <ellipse cx="211" cy="331" rx="154" ry="22" fill="#030708" opacity=".5" />

    <g class="computer-layer">
      <rect x="126" y="44" width="188" height="116" rx="13" fill="#11161a" stroke="#090b0d" stroke-width="8" />
      <rect class="monitor-glow" x="140" y="57" width="160" height="85" rx="8" fill="url(#screen-glow)" />
      <path class="screen-code-line screen-code-line-one" d="M158 81h61" stroke="#bdf5ff" stroke-width="5" stroke-linecap="round" opacity=".72" />
      <path class="screen-code-line screen-code-line-two" d="M158 101h104" stroke="#7ad7f2" stroke-width="5" stroke-linecap="round" opacity=".52" />
      <path class="screen-code-line screen-code-line-three" d="M158 121h78" stroke="#f6c66f" stroke-width="5" stroke-linecap="round" opacity=".58" />
      <path d="M209 160v34M166 196h92" stroke="#121619" stroke-width="9" stroke-linecap="round" />
      <path d="M177 196h70" stroke="#50666c" stroke-width="4" stroke-linecap="round" opacity=".7" />
    </g>

    <g class="chair-layer">
      <path d="M121 165c9-46 43-70 93-70 54 0 87 27 96 80l-17 119H138Z" fill="#171f24" stroke="#0c1013" stroke-width="8" />
      <path d="M143 180c42-22 88-23 137-3" fill="none" stroke="#44575d" stroke-width="8" stroke-linecap="round" opacity=".5" />
      <path d="M158 290h105l16 47H142Z" fill="#11171a" stroke="#080a0c" stroke-width="7" />
    </g>

    <g class="shoulder-group">
      <path d="M111 223c17-42 49-65 96-66 52 0 88 24 107 73 12 31 9 65-8 101H105c-17-39-15-75 6-108Z" fill="url(#suit-grad)" stroke="#101519" stroke-width="8" stroke-linejoin="round" />
      <path d="M159 174c19 18 39 27 61 28 22-2 41-13 58-32l12 47c-20 24-44 37-72 39-28-2-53-15-73-39Z" fill="#f4f0de" stroke="#5a6c67" stroke-width="6" stroke-linejoin="round" />
      <path d="M176 216l34 96 42-98" fill="url(#vest-grad)" stroke="#11171a" stroke-width="6" stroke-linejoin="round" />
      <path d="M208 210l-16 26 20 18 20-20-15-25Z" fill="#2a3940" stroke="#11171a" stroke-width="5" stroke-linejoin="round" />
      <path d="M150 239c21 14 44 22 69 24M271 235c-20 16-42 25-66 28" fill="none" stroke="#f8f4e8" stroke-width="5" stroke-linecap="round" opacity=".36" />
    </g>

    <g class="head-group">
      <path d="M184 141h56l6 38c-8 15-22 23-42 23-19-1-32-9-39-23Z" fill="url(#skin-grad)" stroke="#101519" stroke-width="6" stroke-linejoin="round" />
      <path d="M158 96c0-42 31-70 76-66 38 3 64 29 66 68l16 12-17 11c-8 34-32 56-66 59-47 4-75-29-75-84Z" fill="url(#skin-grad)" stroke="#101519" stroke-width="8" stroke-linejoin="round" />
      <path d="M156 95c-5-50 34-83 86-75 37 6 61 31 63 66-28-13-57-15-88-6-21 6-40 11-61 15Z" fill="url(#hair-grad)" />
      <path d="M171 79c27-25 66-31 116-17 8 5 13 13 14 24-36-7-68-4-98 9-14 6-30 8-47 7 1-9 6-17 15-23Z" fill="#191817" opacity=".92" />
      <path d="M182 117c7 8 16 12 27 12M265 109h12" stroke="#11171a" stroke-width="6" stroke-linecap="round" />
      <path d="M257 145c11 5 22 3 31-7" stroke="#8e4c40" stroke-width="5" stroke-linecap="round" opacity=".52" />
      <circle cx="162" cy="122" r="9" fill="#efb08c" stroke="#101519" stroke-width="5" />
      <path d="M193 166c16 9 34 10 55 1" fill="none" stroke="#ffe0c9" stroke-width="4" stroke-linecap="round" opacity=".5" />
    </g>

    <g class="desk-foreground">
      <path d="M42 286h339c17 0 29 12 29 29v29H12v-29c0-17 11-29 30-29Z" fill="#5b3c26" stroke="#12100e" stroke-width="7" />
      <path d="M32 304h360" stroke="#b77a45" stroke-width="5" opacity=".38" />
    </g>

    <g class="keyboard-layer">
      <path class="keyboard-base" d="M137 268h176l28 44H113Z" fill="url(#keyboard-grad)" stroke="#101519" stroke-width="7" stroke-linejoin="round" />
      <path d="M154 284h21M187 284h22M220 284h22M253 284h22M286 284h22M167 298h118" stroke="#e8eee9" stroke-width="6" stroke-linecap="round" opacity=".72" />
      <path class="key-spark key-spark-left" d="M139 257l12-18 13 18" fill="none" stroke="#57dcff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      <path class="key-spark key-spark-right" d="M291 256l13-18 13 19" fill="none" stroke="#f4c86a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    </g>

    <g class="typing-arm typing-arm-left">
      <path d="M156 222c-28 13-47 35-58 67" fill="none" stroke="#101519" stroke-width="31" stroke-linecap="round" opacity=".45" />
      <path d="M156 222c-28 13-47 35-58 67" fill="none" stroke="#dfe7df" stroke-width="23" stroke-linecap="round" />
      <path d="M99 288c20 2 42 7 66 16" fill="none" stroke="#101519" stroke-width="22" stroke-linecap="round" opacity=".5" />
      <path d="M99 288c20 2 42 7 66 16" fill="none" stroke="url(#skin-grad)" stroke-width="15" stroke-linecap="round" />
      <ellipse class="typing-hand typing-hand-left" cx="170" cy="304" rx="20" ry="11" fill="#efb08c" stroke="#101519" stroke-width="5" transform="rotate(9 170 304)" />
    </g>

    <g class="typing-arm typing-arm-right">
      <path d="M270 219c29 13 50 36 63 69" fill="none" stroke="#101519" stroke-width="32" stroke-linecap="round" opacity=".45" />
      <path d="M270 219c29 13 50 36 63 69" fill="none" stroke="#d6ded9" stroke-width="24" stroke-linecap="round" />
      <path d="M333 288c-23 1-47 6-71 16" fill="none" stroke="#101519" stroke-width="23" stroke-linecap="round" opacity=".52" />
      <path d="M333 288c-23 1-47 6-71 16" fill="none" stroke="url(#skin-grad)" stroke-width="16" stroke-linecap="round" />
      <ellipse class="typing-hand typing-hand-right" cx="258" cy="304" rx="20" ry="11" fill="#efb08c" stroke="#101519" stroke-width="5" transform="rotate(-10 258 304)" />
    </g>

    <g class="desk-items">
      <rect x="334" y="262" width="31" height="42" rx="9" fill="#c9c2b2" stroke="#17120f" stroke-width="5" />
      <path d="M341 276h18M342 288h16" stroke="#6c604f" stroke-width="4" stroke-linecap="round" />
      <path d="M60 272h46" stroke="#11171a" stroke-width="7" stroke-linecap="round" />
      <path d="M62 272h43" stroke="#c9b58c" stroke-width="3" stroke-linecap="round" opacity=".8" />
    </g>
  </svg>
</template>
