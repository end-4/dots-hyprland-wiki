---
title: AGS
layout: /src/layouts/autonum.astro
sidebar:
  label: AGS
  order: 40
lastUpdated: 2024-02-18
---

# General
## User options
- Defaults are in `.config/ags/modules/.configuration/user_options.js`
  - If you wanna add a new config option, add it to the `configOptions` object
  - It's available globally in the config

## Code formatting
- Indentation: 4 spaces
- Closing brackets of an `if` should not be in the same line as its `else`
- That's it. Use some common sense...

# Styling
## Sizes
- `rem` is used since this makes it easy to scale elements by setting the font size
- TL;DR: Set system font size to 11pt, use the Conversions tool on left sidebar to convert px to rem
- _But why are those values so weird?_
  - Originally, I style everything using px, but then I decided to use rem
  - I often used values 5, 10, 15, etc. px
  - I use font size 11pt = 14.6667px so that's the size of 1rem...

## Files
- `_material.scss` holds the generated material colors
- `_wal.scss` holds the generated pywal colors
- `_colors.scss` tweaks and create variants of material colors
- `_musicwal.scss` and `_musicmaterial` hold generated colors for cover art.
- Others are for real components
