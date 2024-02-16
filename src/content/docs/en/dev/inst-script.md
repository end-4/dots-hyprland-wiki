---
title: Installation script
layout: /src/layouts/autonum.astro
sidebar:
  order: 20
---

# Idempotent
The script is and should be **idempotent**, which means that user can run this script for multiple times.

This is useful for debugging and a resumable installation, and also provide updater function somehow.

# Structrue
- The script keeps its "data" part under `./scriptdata/`.
- When the script build something from source, they're stored under `./cache/`, which is listed on `.gitignore`.
