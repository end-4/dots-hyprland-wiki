import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://end-4.github.io',
  base: '/dots-hyprland-wiki',
	integrations: [
		starlight({
			title: 'dots-hyprland wiki',
			social: {
				github: 'https://github.com/end-4/dots-hyprland',
			},
      editLink: {
          baseUrl: 'https://github.com/end-4/dots-hyprland/tree/main',
      },
      customCss: ['./src/styles/custom.css'],
      favicon: '/favicon.ico',
      defaultLocale: 'en',
      locales: {
        // en docs in `src/content/docs/en/`
        'en': {
          label: 'English',
          lang: 'en',
        },
        // zh-CN docs in `src/content/docs/zh-CN/`
        'zh-CN': {
          label: '简体中文',
          lang: 'zh-CN',
        },
        // vn docs in `src/content/docs/vn/`
        'vn': {
          label: 'Vietnamese',
          lang: 'vn',
        },
      },
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
