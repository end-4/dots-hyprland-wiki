---
title: Documentation Site
layout: /src/layouts/autonum.astro
sidebar:
  label: Doc Site
  order: 60
  badge:
    text: Dev
---

This page "documents" this "document site" itself.

The repo of this doc site is [here](https://github.com/end-4/dots-hyprland-wiki) and it's open to [contribution](#contribute-to-dots-hyprland-wiki).

# Development

Currently, this project is based on Starlight, which is based on Astro.

The website is hosted on GitHub Pages.

## Run Locally

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

:::tip
If this error occured: `vips/vips8: no such file or directory`, you may install `libvips` manually, e.g. on Arch Linux: `sudo pacman -S libvips`
:::

:::caution
When running locally, there seems to be a bug that it does NOT apply a proper base url. But it seems okay on GitHub Pages.
Therefore, do NOT easily "fix" a relative link just because a `404` happened locally. Otherwise, while the link for locally hosted site is "fixed", the site on GitHub Pages will be broken.
Similarly, open <http://localhost:4321/dots-hyprland-wiki/en>, NOT <http://localhost:4321/dots-hyprland-wiki> when running locally.
:::

## How to

- Edit/add pages: Edit markdown files under `src/content/docs/en/` (Somehow different to the markdown on GitHub. [Reference](https://starlight.astro.build/guides/authoring-content)).

:::note
There some numbers before the markdown files, but normally they do not have any meanings, just for auto arranging on sidebar.
:::

> To publish HTML files, put it under `src/pages`.

- Edit sidebar: Edit `astro.config.mjs`.

- Edit theme: Edit `src/styles/custom.css` ([Reference](https://starlight.astro.build/guides/css-and-tailwind/)).

- Edit homepage: Edit `src/content/docs/en/index.mdx`

:::caution
> When generating link paths, the uppercase characters inside original markdown filename will be converted to lowercase, and the `.` will be removed. If you still use the original filename as link path, it may result in a `404`.
:::

# Contribute to dots-hyprland-wiki
We sincerely thanks for all contributors.

You're welcomed to submit any kind of beneficial Pull Request, though it's our final decision to merge it or not.

If you're unsure about a possible PR, you may create a Discussion before you work on it.

:::caution
Always prioritize updating the English documents,
so that other languages can be uniformly updated through English translation.
:::

## Content
Typically, if you have successfully contributed a new function/workflow/... to [dots-hyprland](https://github.com/end-4/dots-hyprland),
and if it needs documentation, then you're very welcomed to submit a PR here to document it.

Troubleshooting related contents are also welcomed.

## Translation

This site has i18n support, and we need your help to finish l10n (i.e. translation).

:::note
Please don't waste your time on translating Dev Notes. See [#1](https://github.com/end-4/dots-hyprland-wiki/issues/1#issuecomment-1938696111) for reason.
:::

**Steps:**

1. Ensure that you have GitHub SSH configured well on your local machine.
To test this, run `ssh -T git@github.com` in terminal, and if you see:
```plain
Hi <Your GitHub username>! You've successfully authenticated, but GitHub does not provide shell access.
```
Then you're all set.

2. [Fork this repo online](https://github.com/end-4/dots-hyprland-wiki/fork), and then `git clone` the forked repo to your local machine.

3. On your local machine, go to the forked repo, edit `astro.config.mjs` and find the languages under `locales: `.
If your language is not listed or is commented, add your language.
Example:
```js title="astro.config.mjs" ins={7-10}
...
      locales: {
        'en': {
          label: 'English', // Engligh
          lang: 'en',
        },
        'zh-cn': {
          label: '简体中文', //Simplified Chinese
          lang: 'zh-CN',
        },
...
```
You may also add translation for the labels on sidebar under the `sidebar: `.
Example:
```js title="astro.config.mjs" ins={6}
...
      sidebar: [
        {
          label: 'General',
          translations: {
            'zh-CN': '通用',
          },
          autogenerate: { directory: 'general' },
        },
...
```
:::caution
Please pay attention to the formatting of `mjs` and do not omit commas, quotation marks, or parentheses.
:::

4. Translate pages: Go to directory `src/content/docs/`.
- Source language (English): `src/content/docs/en/`.
- Target language (your language): `src/content/docs/<lang>/`.

If target language directory does not exists, `mkdir` to create it first.

Target language directory has exact the same folder structure and filename as the source language directory,
and non-existing files and directory in target language directory will fallback to source language (English).

E.g. for Simplified Chinese, `src/content/docs/zh-cn/general/showcase.md` is the translated version of `src/content/docs/en/general/showcase.md`.

:::note
Again, don't translate Dev Notes under `src/content/docs/en/dev/`, i.e. let them fallback to English.
:::

:::caution
Use **lowercase** for language labels, except for the `lang:` and group-label on sidebar in `astro.config.mjs`.
Take `zh-CN` as Example (in astro.config.mjs):
```js title="astro.config.mjs" {2,4,9}
...
        'zh-cn': {
          label: '简体中文', //Simplified Chinese
          lang: 'zh-CN',
        },
...
        label: 'General',
        translations: {
          'zh-CN': '通用',
        },
...
```
As well for the directory name, e.g. `src/content/docs/zh-cn`.
However, as for UI translation filename, e.g. `src/content/i18n/zh-CN.json`.
:::
5. Translate UI (Optional)
Starlight UI already has built-in translation for some languages.
You may still translate to override it if you think it's necessary.

- The source file in English: see [here](https://starlight.astro.build/guides/i18n/#translate-starlights-ui).
- To translate, edit the file under `src/content/i18n/`, eg. for Simplified Chinese: `src/content/i18n/zh-CN.json`.

6. When you've finished translation:
  - `git add .` to track untracked changes under current directory.
  - `git commit -am'Update translation'` to commit the tracked changes with description.
  - `git push` to push new commits to GitHub.
7. Go to the forked repo online, click on `Contribute` and then `Open pull request` to submit a Pull Request.
Remember to detail what you have done (i.e. which language did you translted to) when you submit.

# References

- [Astro documentation](https://docs.astro.build)
- [Starlight’s docs](https://starlight.astro.build/)
- [Expressive-code](https://expressive-code.com/)

# History
This doc site started from [dots-hyprland#246](https://github.com/end-4/dots-hyprland/issues/246) and was then initialized mainly by [@clsty](https://github.com/clsty) with contents from the README and built-in wiki of [dots-hyprland](https://github.com/end-4/dots-hyprland) and the README of [dots-hyprarch](https://github.com/clsty/dots-hyprarch).
