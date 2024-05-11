import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Yu',
  description: 'Yu\'s blog.',
  base: '/blog/',
  srcDir: 'blog',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/blog/favicon.ico' }],
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    siteTitle: '',
    logo: {
      light: '/logo_light.png',
      dark: '/logo_dark.png',
    },
    // nav: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhengyuzi' },
    ],
    search: {
      provider: 'local',
    },
    editLink: {
      pattern: 'https://github.com/zhengyuzi/blog/blob/main/blog/:path',
    },
    sidebar: generateSidebar({
      documentRootPath: 'blog',
      collapsed: true,
    }),
  },
})
