<script setup lang="ts">
import { useRouter, useRoute, withBase } from 'vitepress'
import { watchEffect } from 'vue'

const router = useRouter()
const route = useRoute()

watchEffect(() => {
  if (route.path === withBase('/')) {
    router.go(withBase('/views/00_document_guide'))
  }
})
</script>
<template>
  <div class="redirect">
    <p>正在跳转到指南页面...</p>
  </div>
</template>
<style scoped>
.redirect {
  color: aquamarine;
}
</style>