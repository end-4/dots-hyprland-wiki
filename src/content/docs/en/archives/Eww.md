---
title: Eww (multiple)
layout: /src/layouts/autonum.astro
---

:::danger[Alert]
These sets of configs are no longer maintained. We recommend against using them.
:::

# Description
Several sets of configs, including `windoes`, `hybrid` and `NovelKnock`, etc.
# Installation
- Dependencies: See branch-specific dependency list
- Copy these
    - `.config`, `.local` to your home folder
    - Folders in `.local/share/icons` to your `/usr/share/icons`
    - Stuff in `Import manually` folder if you need them

 ## Performance
|  ⌄  | Do use | Not recommended | Notes                 |
| --- | ------ | ----------- | ------------------------- |
| Kernel |     | cachyos, xanmod | Don't abuse power savers. Also I'm not sure what the hell I'm saying - this is just from personal experience. |
| Login shell  | bash/zsh | fish | It's okay to use fish in a terminal - that's what I do |

 ## Setup
 - eww configs only work properly in `~/.config/eww`
 - Start eww with `eww daemon`
 - To open top bar: `eww open bar`
 - To open the Windows bar: `eww open winbar` (`windoes`/`hybrid` branch)
 - To open the bottom line: `eww open bottomline` (so that the music window opens if you click the bottom edge of the screen)
 - Open the overview (middle-click workspaces) and wait 10 seconds (for it to generate app search cache, or icons won't show properly)
 ## Usage
 - Music controls: Middle-click for Play/Pause, Right-click for Next track, scroll to change volume
 - To open the Overview, middle/right-click the workspace indicators or run `eww open overview`
 - In overview, type to search apps (see more below)
 ## Search
 - Type to search apps
 - Type math (must begin with number) to calculate using `qalc`
 - `>save THEME`: Saves current colorscheme, with THEME as the name.
 - `>load THEME`: Loads a saved theme. Available themes will be shown as you type.
 - `>music`: Get colorscheme from current media thumbnail
 - `>wall`: Get colorscheme from wallpaper located in `~/.config/eww/images/wallpaper/wallpaper`
 - `>light`: Remember to use light mode for next color generations
 - `>dark`: Remember to use dark mode for next color generations
 - `>one`: Remember to use only one color for bar icons for next color generations
 - `>multi`: Remember to use many colors for bar icons for next color generations
 - `>r`: Reload (kills and relaunches eww with the default bar)
