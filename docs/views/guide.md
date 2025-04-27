<!--
 * @Author: yangyang993 sonnenlicht@foxmail.com
-->
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

<script lang="ts" setup>
import NavList from '../components/NavList.vue'
// import sidebar from './components/sidebar.vue'
import { useData,useRoute } from 'vitepress'
import { onMounted, watch } from 'vue'

import navdata from ''

const route = useRoute()
const data = useData()
console.log( data)

console.log(window.location.hash)

</script>
<!-- 布局 -->
<NavList />

<style module>
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

  }
  .sidebar{
    width: 120px;

  }
  .main{
    flex:1;
  }

  @media (max-width: 768px) {
    .sidebar {
      display: none;
    }
  }
</style>
