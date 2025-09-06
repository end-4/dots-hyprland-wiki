---
title: 文档站点
layout: /src/layouts/autonum.astro
sidebar:
  label: Doc Site
  order: 60
lastUpdated: 2024-02-24
---

此页面“记录”了此“文档站点”本身。

本站点文档的仓库（repo）[在这里](https://github.com/end-4/dots-hyprland-wiki)，并且开放[贡献](https://www.google.com/search?q=../doc-site-contrib)。

# 开发

目前，该项目基于 Starlight，而 Starlight 又基于 Astro。

本网站使用 GitHub Actions 的工作流托管在 GitHub Pages 上。

当 `src/` 或 `public/` 下的文件发生更改时，工作流将被触发。

它也可以手动触发。

## 在本地运行

| 命令 | 作用 |
| :------------------------ | :----------------------------------------------- |
| `npm install` | 安装依赖项 |
| `npm run dev` | 启动本地开发服务器，地址为 `localhost:4321` |
| `npm run build` | 将生产站点构建到 `./dist/` 目录 |
| `npm run preview` | 在部署前，在本地预览构建结果 |
| `npm run astro ...` | 运行 CLI 命令，例如 `astro add`、`astro check` |
| `npm run astro -- --help` | 获取有关 Astro CLI 的帮助 |

:::tip
如果出现此错误：`vips/vips8: no such file or directory`，您可能需要手动安装 `libvips`，例如在 Arch Linux 上：`sudo pacman -S libvips`
:::

:::caution
在本地运行时，似乎存在一个 bug，它无法应用正确的 base url。但在 GitHub Pages 上运行似乎没问题。
因此，不要仅仅因为本地出现了 `404` 就轻易“修复”相对链接。否则，本地站点的链接虽然“修复”了，但在 GitHub Pages 上的站点会失效。
同样，在本地运行时，打开 [http://localhost:4321/dots-hyprland-wiki/en](https://www.google.com/search?q=http://localhost:4321/dots-hyprland-wiki/en)，而不是 [http://localhost:4321/dots-hyprland-wiki](https://www.google.com/search?q=http://localhost:4321/dots-hyprland-wiki)。
:::

## 如何操作

### 编辑/添加页面

:::caution
始终优先更新英文文档，
以便其他语言可以通过英文翻译进行统一更新。
:::

编辑 `src/content/docs/en/` 下的 markdown 文件。

  - **手动更新 frontmatter 中 `lastUpdated` 的值**，例如 `lastUpdated: 2024-02-10`。
  - 本地 markdown 与 GitHub 上的 markdown 有些不同。[参考](https://starlight.astro.build/guides/authoring-content)。
  - 编辑完成后，对其他语言应用通知，告知源文件（英文）已更新。为此，请使用脚本 `l10n-notify`，其语法为：

<!-- end list -->

```bash
./l10n-notify <file1> [file2] ...
```

该脚本尚不完美，但它健壮且幂等。

### 杂项

  - 发布 HTML 文件：将其放在 `src/pages` 下。
  - 编辑侧边栏：编辑 `astro.config.mjs`。
  - 编辑主题：编辑 `src/styles/custom.css` ([参考](https://starlight.astro.build/guides/css-and-tailwind/))。
  - 编辑主页：编辑 `src/content/docs/en/index.mdx`。

:::caution
当生成链接路径时，原始 markdown 文件名中的大写字母将被转换为小写，并且 `.` 将被移除。如果您仍然使用原始文件名作为链接路径，可能会导致 `404` 错误。
:::

# 参考

  - [Astro 文档](https://docs.astro.build)
  - [Starlight 文档](https://starlight.astro.build/)
  - [Expressive-code](https://expressive-code.com/)

# 历史

本文档站点发起于 [dots-hyprland\#246](https://github.com/end-4/dots-hyprland/issues/246)，然后主要由 [@clsty](https://github.com/clsty) 创建，内容来源于 [dots-hyprland](https://github.com/end-4/dots-hyprland) 的 README 和内置 wiki，以及 [dots-hyprarch](https://github.com/clsty/dots-hyprarch) 的 README。
