---
# <https://vitepress.dev/reference/default-theme-home-page>

layout: page
footer: false
next: false
prev: false
editLink: false

sidebar: true
outline: 
  level: [2, 3]
  collapsed: false
aside: true
---
<!-- docs/index.md -->

<script lang="ts" setup>
import NavList from './components/NavList.vue'
import { useData } from 'vitepress'

const { page } = useData()
</script>

<NavList />
