<!--
 * @Author: yangyang993 sonnenlicht@foxmail.com
-->
<!-- docs/.vitepress/theme/NavList.vue -->
<script setup>
import { ref } from 'vue'

const navData = ref([])

fetch('/sitemaps/nav_data.json')
  .then(res => res.json())
  .then(data => navData.value = data)


</script>

<template>
  <div class="nav-container">
    <div v-for="category in navData" :key="category.id" class="category">
      <h2>{{ category.name }}</h2>
      <div v-for="sub in category.children" :key="sub.name" class="sub-category">
        <h3>{{ sub.name }}</h3>
        <div class="link-grid">
          <a v-for="link in sub.links" :href="link.url" target="_blank" class="link-card">
            <span v-if="link.icon" class="icon">{{ link.icon }}</span>
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --primary-pink: #ff69b4;
  /* 基础粉色 */
  --hover-pink: #ff1493;
  /* 悬停粉色 */
  --ripple-pink: rgba(255, 105, 180, 0.3);
  /* 涟漪效果色 */
  --text-dark: #4a4a4a;
  /* 文字颜色 */
}

.nav-container {
  padding: 2rem;

}

/* 分类标题 */
.nav-container h2 {
  font-size: 1.8rem;
  color: var(--primary-pink);
  margin: 1.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-pink);
  display: inline-block;
  text-shadow: #ff1493 0px 1px 2px;
}

/* 子分类标题 */
.nav-container h3 {
  font-size: 1.4rem;
  color: var(--text-dark);
  margin: 1rem 0;
  position: relative;
  padding-left: 1rem;
}

.nav-container h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 70%;
  background: var(--primary-pink);
  border-radius: 2px;
  z-index: -1;
}

/* 链接网格布局 */
.link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.2rem;
  margin: 1rem 0;
}

/* 链接卡片 - 添加水滴效果 */
.link-card {
  position: relative;
  overflow: hidden;
  padding: 1.2rem;
  text-decoration: none;
  color: var(--text-dark);
  transform: translate(0, 0);
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
  box-sizing: border-box;
  cursor: pointer;
  border: white;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 105, 180, 0.1);
  background: linear-gradient(135deg, #fff5f5 0%, #ffe6f0 100%);

  /* 水滴效果容器 */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: var(--ripple-pink);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: width 0.3s, height 0.3s, opacity 0.3s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 16px rgba(255, 105, 180, 0.5);

    &::before {
      /* 悬浮微光效果 */
      animation: shine 1.5s ease-out infinite;
    }
  }

  &:active::after {
    width: 200px;
    height: 200px;
    opacity: 1;
    /* transition: width 0.2s, height 0.2s, opacity 0.3s; */
    transform: scale(0.5);
    transition: transform 0.2s ease;
  }
}

/* 图标样式 */
.link-card .icon {
  display: block;
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
  color: var(--primary-pink);
  transition: transform 0.3s ease;
}

.link-card:hover .icon {
  transform: scale(1.2);
}

/* 悬浮微光动画 */
@keyframes shine {
  0% {
    opacity: 0;
    transform: scale(1) rotate(30deg);
  }

  50% {
    opacity: 0.4;
    transform: scale(2) rotate(30deg);
  }

  100% {
    opacity: 0;
    transform: scale(3) rotate(30deg);
  }
}

.link-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 50%;
  height: 200%;
  background: linear-gradient(30deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 80%);
  pointer-events: none;
}
</style>
