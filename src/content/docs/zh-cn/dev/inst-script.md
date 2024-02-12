---
title: 安装脚本
layout: /src/layouts/autonum.astro
sidebar:
  order: 20
  badge:
    text: 开发者
---

# 幂等性
此脚本是，并且应当是**幂等**的，这意味着用户可以多次运行该脚本。

这对于调试和可恢复性的安装非常有用，同时还使得（某种层面上的）更新成为可能。

# 结构
- 脚本将其“数据”部分保存在 `./scriptdata/` 下。
- 当脚本从源代码构建某些内容时，它们将存储在 `./cache/` 下，该目录含于 `.gitignore` 中。
