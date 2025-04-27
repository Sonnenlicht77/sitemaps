/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */

// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import NotFound from '../../components/NotFound.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'not-found': () => h(NotFound),
    })
  },
  enhanceApp({ app, router, siteData }) {},
} satisfies Theme
