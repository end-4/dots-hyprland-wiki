# dots-hyprland-wiki (**WIP**)
Documentation for [dots-hyprland](https://github.com/end-4/dots-hyprland).

URL: <https://end-4.github.io/dots-hyprland-wiki/en>

# Development

## Usage

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Reference
- [Astro documentation](https://docs.astro.build)
- [Starlight’s docs](https://starlight.astro.build/)
- [Expressive-code](https://expressive-code.com/key-features/text-markers/)

## Howto
- Edit sidebar: `astro.config.mjs`

## Notes
- Every link will be converted to lowercase, even if the original markdown filename contains uppercase. A uppercase inside path of link will result in a `404`.

- If this error occured: `vips/vips8: no such file or directory`, you may install `libvips` manually, e.g. on Arch Linux:
```bash
sudo pacman -S libvips
```
