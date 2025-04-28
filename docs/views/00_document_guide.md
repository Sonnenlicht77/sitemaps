---

layout: page
title: Frontend Guide
description: Learn how to build a frontend for your app
aside : true
sidebar: true
---

<script lang="ts" setup>
import {useRoute} from 'vitepress'
import NavList from '../components/NavList.vue'
import type { ListNav } from '../types/navtypes';
import data from '../src/nav_data.json'

const route = useRoute()
// console.log(route.path)
const hashStr:string = route.path.split('/').pop()
// console.log(hashStr)

const navData:ListNav = data.find(item => hashStr.includes(item.id))
// console.log(navData)

</script>

<NavList :listItems="navData.children" ></NavList>  
