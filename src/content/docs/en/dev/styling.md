---
title: Styling
layout: /src/layouts/autonum.astro
sidebar:
  label: Styling
  order: 40
---

Here are a few things to keep in mind when styling.

# Sizes
- `rem` is used since this makes it easy to scale elements by setting the font size
- _**But why are those values so weird?**_ 
  - Originally, I style everything using px, but then I decided to use rem
  - I often use values 5, 10, 15, etc. px
  - end_4's font size is 11pt = 14.6667px, so 1rem = 14.6667px. I think you see where this is going
- **I recommend this `px` to/from `rem` converter: [NekoCalc](https://nekocalc.com/px-to-rem-converter)**
  - I might make a converter like that on the sidebar soon

# Files
- `_material.scss` holds the generated material colors
- `_wal.scss` holds the generated pywal colors
- `_colors.scss` tweaks and create variants of material colors
- `_musicwal.scss` and `_musicmaterial` hold generated colors for cover art.
- Others are for real components