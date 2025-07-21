---
title: Misc tips
layout: /src/layouts/autonum.astro
sidebar:
  order: 99
lastUpdated: 2024-02-18
---
The tips below are not very specific for this repo.
They're just for quick notes for developing.

- To git-ignore a file/dir, it should be included in `.gitignore` and **also** `git rm <file/dir>` if `git add` (git-tracked) before.
- Use `LANG=C ` before a command to make sure the locale is right to parse the output with `grep` `awk` and `sed`, etc. ([#265](https://github.com/end-4/dots-hyprland/issues/265))
