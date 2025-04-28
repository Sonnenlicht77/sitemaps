/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */
/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */
import { defineConfig } from 'vitepress'
import formatData from '../utils/formatData.ts'
//
const sidebar = formatData()

export default defineConfig({
  base: '/sitemaps/',
  title: '前端体系导航',
  description: 'A VitePress Site',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/sitemaps/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    sidebar: sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/Sonnenlicht77/sitemaps' }],
  },
  vite: {
    ssr: {
      noExternal: ['@vue/server-renderer'],
    },
    build: {
      target: 'esnext',
    },
    resolve: {
      alias: {
        '@': '/docs',
      },
    },
  },
})
