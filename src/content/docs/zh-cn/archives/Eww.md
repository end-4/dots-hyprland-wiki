---
title: Eww (多个)
layout: /src/layouts/autonum.astro
sidebar:
  badge:
    text: 已废弃
    variant: caution
lastUpdated: 2024-02-18
---

:::danger[警告]
这些配置文件集已不再维护。我们不建议使用它们。
:::

# 描述
多套配置文件，包括 `windoes`、`hybrid` 和 `NovelKnock` 等。

# 安装
- 依赖项：请参阅特定分支的依赖项列表
- 复制以下文件
  - `.config`、`.local` 到你的主文件夹
  - `.local/share/icons` 中的文件夹到你的 `/usr/share/icons`
  - 如果你需要，请复制 `Import manually` 文件夹中的内容

## 性能
| ⌄ | 建议使用 | 不推荐使用 | 备注 |
| :--- | :--- | :--- | :--- |
| Kernel（内核） | | cachyos, xanmod | 不要滥用省电功能。此外，我也不确定我在说什么——这只是个人经验。 |
| Login shell（登录 shell） | bash/zsh | fish | 在终端中使用 fish 是可以的——这就是 end_4 所做的 |

## 设置
- eww configs 只能在 `~/.config/eww` 中正常工作
- 使用 `eww daemon` 启动 eww
- 打开顶部栏：`eww open bar`
- 打开 Windows 栏：`eww open winbar` (`windoes`/`hybrid` 分支)
- 打开底部线：`eww open bottomline` (这样如果你点击屏幕底部边缘，音乐窗口就会打开)
- 打开 overview (概览，通过鼠标中键点击工作区) 并等待 10 秒钟 (以便它生成应用搜索缓存，否则图标将无法正常显示)

## 使用
- 音乐控制：鼠标中键播放/暂停，鼠标右键下一曲，滚动来改变音量
- 打开 Overview，鼠标中键/右键点击工作区指示器，或者运行 `eww open overview`
- 在 overview 中，输入以搜索应用 (详见下文)

## 搜索
- 输入以搜索应用
- 输入数学表达式 (必须以数字开头) 以使用 `qalc` 进行计算
- `>save THEME`: 保存当前配色方案，THEME 为名称。
- `>load THEME`: 加载一个已保存的主题。当你输入时，可用的主题会显示出来。
- `>music`: 从当前媒体缩略图中获取配色方案
- `>wall`: 从位于 `~/.config/eww/images/wallpaper/wallpaper` 的壁纸中获取配色方案
- `>light`: 记住在下一次颜色生成时使用亮色模式
- `>dark`: 记住在下一次颜色生成时使用暗色模式
- `>one`: 记住在下一次颜色生成时只为 bar icons 使用一种颜色
- `>multi`: 记住在下一次颜色生成时为 bar icons 使用多种颜色
- `>r`: 重载 (杀死并重新启动 eww 以及默认的 bar)
