---
title: Folder Structure
layout: /src/layouts/autonum.astro
sidebar:
  label: Folder Structure
  order: 30
lastUpdated: 2025-10-16
---

This page will help you know what to look into when you wanna hack up something

# Repo structure
- `dots/.config`: The main folder where normal config files are stored.
- `dots-extra`: Misc config files
- `sdata`: Stores data for install script
- `sdist`: Stores data for install script but distro specific

# (Deprecated) AGS config folder structure
- `assets`: SVGs that are used as custom icons
- `data`: Data that I believe should be separated from code
- `lib`: Shared parts used by widgets of the config
- `scripts`: Contains shell/python scripts of various categories
  - `templates`: Template files to be sed'ed into real config files during color generation
- `scss`: Stylesheets. `main.scss` (which sources others) is compiled to `style.css` at runtime
- `services`: Contains AGS Services
- `widgets`: This is the main JS code folder in which widget layouts and behavior are defined
  - The source of each widget window is put into a child folder. Each has a `main.js` that's to be imported by `.config/ags/config.js`
