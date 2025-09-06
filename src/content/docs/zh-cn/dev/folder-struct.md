---
title: 文件夹结构
layout: /src/layouts/autonum.astro
sidebar:
  label: Folder Structure
  order: 30
lastUpdated: 2024-02-18
---

本页面将帮助您了解在进行开发时需要关注的内容

# 仓库结构
- `Extras`：各类配置文件
- `scriptdata`：存储安装脚本所需数据
- `.config`：常规配置文件存储的主目录（如ags、hyprland等）
- `.local/bin`：实用脚本。后续可能移至ags目录。

# AGS配置文件夹结构
- `assets`：用于自定义图标的SVG文件
- `data`：我认为应与代码分离的数据
- `lib`：配置组件共享的公共模块
- `scripts`：各类shell/python脚本
  - `templates`：生成配色方案时需通过sed处理的模板文件
- `scss`：样式表。`main.scss`（负责引入其他文件）在运行时编译为`style.css`
- `services`：包含AGS服务
- `widgets`：核心JS代码文件夹，定义小部件布局与行为
  - 每个小部件窗口的源代码存放于子文件夹中，均包含需由`.config/ags/config.js`导入的`main.js`文件

