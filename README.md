# dots-hyprland-wiki (**WIP**)

Documentation for [dots-hyprland](https://github.com/end-4/dots-hyprland).

URL: <https://end-4.github.io/dots-hyprland-wiki>

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

> [!NOTE]
> If this error occured: `vips/vips8: no such file or directory`, you may install `libvips` manually, e.g. on Arch Linux: `sudo pacman -S libvips`

> [!IMPORTANT]
> When running locally, there seems to be a bug that it does NOT apply a proper base url. But it seems okay on GitHub Pages.
> Therefore, do NOT easily "fix" a relative link just because a `404` happened locally. Otherwise, while the link for locally hosted site is "fixed", the site on GitHub Pages will be broken.

## How to

- Edit/add pages: Edit markdown files under `src/content/docs/en/`.

> To publish HTML files, put it under `src/pages`.

- Edit sidebar: Edit `astro.config.mjs`.

- Edit theme: Edit `src/styles/custom.css` ([Reference](https://starlight.astro.build/guides/css-and-tailwind/)).

> [!IMPORTANT]
> When generating link paths, the uppercase characters inside original markdown filename will be converted to lowercase, and the `.` will be removed. If you still use the original filename as link path, it may result in a `404`.

### l10n

- Manage languages: Edit `astro.config.mjs`.
- Translate pages: Under `src/content/docs/<lang>/`. Filenames and folder structure are exact the same as which under `src/content/docs/en/`.

> [!IMPORTANT]
> Always prioritize updating the English documents,
> so that other languages can be uniformly updated through English translation.

## References

- [Astro documentation](https://docs.astro.build)
- [Starlight’s docs](https://starlight.astro.build/)
- [Expressive-code](https://expressive-code.com/)
