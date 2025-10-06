import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/reference/configuration
export default defineConfig({
  site: 'https://end-4.github.io',
  base: '/dots-hyprland-wiki',
	integrations: [
		starlight({
			title: 'illogical-impulse',
      logo: { src: './src/assets/illogical-impulse.svg', replacesTitle: false, },
			social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/end-4/dots-hyprland', },
        { icon: 'pen', label: 'GitHub (wiki)', href: 'https://github.com/end-4/dots-hyprland-wiki', },
      ],
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

        'es': {
          label: 'Español', //Spanish
          lang: 'es',
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
         'ru': {
           label: 'Русский', //Russian
           lang: 'ru',
         },
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
            'vi': 'Chung',
            'zh-CN': '通用',
            'es': 'General',
	           'ru': 'Общее'
          },
          autogenerate: { directory: 'general' },
        },
        {
          label: 'illogical-impulse',
          // idk why but it won't work when using `illogical-impulse'
          collapsed: false,
          badge: { text: 'New', variant: 'success' },
					autogenerate: { directory: 'ii-qs' },
				},
        {
          label: 'illogical-impulse (on AGS)',
          // idk why but it won't work when using `illogical-impulse'
          collapsed: true,
					autogenerate: { directory: 'i-i' },
				},
				{
					label: 'Old stuff',
          collapsed: true,
          translations: {
            'vi': 'Kho lưu trữ (ko đc duy trì)',
            'zh-CN': '存档（不再维护）',
            'es': 'Archivos (no mantenidos)',
            'ru': 'Прошлые версии (не поддерживаются)'
          },
					autogenerate: { directory: 'archives' },
				},
				{
					label: 'Dev Notes',
          collapsed: true,
          badge: { text: 'Dev' },
          translations: {
            'vi': 'Ghi chú cho dev',
            'zh-CN': '开发者笔记',
            'es': 'Notas de desarrollo',
	           'ru': 'Для разработчиков'
          },
					autogenerate: { directory: 'dev' },
				},
				{
					label: 'Translate this wiki',
          badge: { text: 'Help wanted', variant: 'note' },
          translations: {
            'zh-CN': '翻译此文档',
            'es': 'Traducir esta wiki',
	    'ru': 'Помогите перевести вики',
          },
          link: '/dev/doc-site-contrib',
				},
			],
		}),
	],
});
