---
title: Folder Structure
layout: /src/layouts/autonum.astro
sidebar:
  label: Folder Structure
  order: 30
---

This page will help you know what to look into when you wanna hack up something

# Repo structure
- `Import manually`: My misc config files
- `scriptdata`: Stores data for install script
- `.config`: This is the main folder where normal config files are stored. (ags, hyprland, etc.)
- `.local/bin`: My utility scripts. I might move them to ags folder later.

# AGS config folder structure
- `assets`: SVGs that are used as custom icons
- `data`: Data that I believe should be separated from code
- `lib`: Shared parts used by widgets of the config
- `scripts`: Contains shell/python scripts of various categories
  - `templates`: Template files to be sed'ed into real config files during color generation
- `scss`: Stylesheets. `main.scss` (which sources others) is compiled to `style.css` at runtime
- `services`: Contains AGS Services
- `widgets`: This is the main JS code folder in which widget layouts and behavior are defined
  - The source of each widget window is put into a child folder. Each has a `main.js` that's to be imported by `.config/ags/config.js`
