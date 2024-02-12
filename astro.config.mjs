import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/reference/configuration
export default defineConfig({
  site: 'https://end-4.github.io',
  base: '/dots-hyprland-wiki',
	integrations: [
		starlight({
			title: 'end-4/dots-hyprland',
			social: {
				github: 'https://github.com/end-4/dots-hyprland',
			},
      editLink: {
          baseUrl: 'https://github.com/end-4/dots-hyprland-wiki/tree/main',
      },
      customCss: ['./src/styles/custom.css'],
      tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 2, },
      favicon: './favicon.ico',
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
        // 'fr': {
        //   label: 'French', //French
        //   lang: 'fr',
        // },
        // 'ja': {
        //   label: 'Japanese', //Japanese
        //   lang: 'ja',
        // },
        // 'pl': {
        //   label: 'Polish', //Polish
        //   lang: 'pl',
        // },
        // 'ru': {
        //   label: 'Russian', //Russian
        //   lang: 'ru',
        // },
        // 'tr': {
        //   label: 'Turkish', //Turkish
        //   lang: 'tr',
        // },
        'vi': {
          label: 'Tiếng Việt', // Vietnamese
          lang: 'vi',
        },
        'zh-cn': {
          label: '简体中文', //Simplified Chinese
          lang: 'zh-CN',
        },
      },
			sidebar: [
				{
					label: 'General',
          translations: {
            'zh-CN': '通用',
          },
					autogenerate: { directory: 'general' },
				},
				{
					label: 'Illogical Impulse',
          // idk why but it won't work when using `illogical-impulse'
					autogenerate: { directory: 'i-i' },
				},
				{
					label: 'Archives (unmaintained)',
          translations: {
            'zh-CN': '存档（不再维护）',
          },
					autogenerate: { directory: 'archives' },
				},
			],
		}),
	],
});
