import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/reference/configuration
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
          baseUrl: 'https://github.com/end-4/dots-hyprland-wiki/tree/main',
      },
      customCss: ['./src/styles/custom.css'],
      tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 2, },
      favicon: '/favicon.ico',
      lastUpdated: true,
      defaultLocale: 'en',
      // English docs in `src/content/docs/en/`
      // Other lang docs in `src/content/docs/<lang>/`
      // See also https://github.com/CloudCannon/pagefind/tree/main/pagefind_ui/translations
      locales: {
        'en': {
          label: 'English', // Engligh
          lang: 'en',
        },
        'ru': {
          label: 'Russian', //Russian
          lang: 'ru',
        },
        'pl': {
          label: 'Polish', //Polish
          lang: 'pl',
        },
        'fr': {
          label: 'French', //French
          lang: 'fr',
        },
        'tr': {
          label: 'Turkish', //Turkish
          lang: 'tr',
        },
        'ja': {
          label: 'Japanese', //Japanese
          lang: 'ja',
        },
        'zh-CN': {
          label: '简体中文', //Simplified Chinese
          lang: 'zh-CN',
        },
        'vi': {
          label: 'Tiếng Việt', // Vietnamese
          lang: 'vi',
        },
      },
			sidebar: [
				{
					label: 'General',
					autogenerate: { directory: 'general' },
				},
				{
					label: 'Illogical Impulse',
          // idk why but it won't work when using `illogical-impulse'
					autogenerate: { directory: 'i-i' },
				},
				{
					label: 'Archives (NOT maintained)',
					autogenerate: { directory: 'archives' },
				},
			],
		}),
	],
});
