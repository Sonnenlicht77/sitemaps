<script setup lang="ts">

import { ListNavItemChid } from '../types/navtypes';

const props = defineProps<{ listItems: ListNavItemChid[] }>()
// console.log(props.listItems);
</script>

<template>
  <div class="nav-container">
    <div v-for="category in props.listItems" :key="category.id" class="category">
      <!-- title -->
      <h2 class="category-title">{{ category.title }}</h2>
      <!-- subcategories -->
      <div class="subcategory">
        <template v-for="subcategory in category?.children" :key="subcategory.id">

          <!-- links -->
          <div class="link-grid">
            <a :href="subcategory.url" target="_blank" class="link-card">
              <!-- <span class="icon" v-if="subcategory.icon">{{ subcategory?.icon }}</span> -->
              {{ subcategory.title }}
            </a>
          </div>
        </template>
      </div>

    </div>
  </div>
</template>

<style>
.nav-container {
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
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

h2.category-title {
  font-size: 1.8rem;
  font-weight: bold;
  font-size: 2rem;
  color: #ff1493 !important;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  text-shadow: #ffe6f0 0px 1px 2px;

}

.subcategory {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* 关键属性：允许换行 */
  gap: 1.5rem;
  /* 卡片间距 */
  margin-bottom: 2rem;
}

/* 链接网格布局 */
.link-grid {
  flex: 1;
  /* 允许伸缩 */
  min-width: 280px;
  /* 最小宽度防止过小 */
  max-width: 320px;
  /* 最大宽度控制尺寸 */
}

/* 链接卡片 - 添加水滴效果 */
.link-card {
  height: auto;
  /* 高度自适应 */
  min-height: 120px;
  /* 最小高度保持统一 */
  padding: 1.5rem;
  /* 防止卡片缩小 */
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

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

/* 响应式适配 */
@media (max-width: 1200px) {
  .link-grid {
    min-width: 240px;
    /* 中等屏幕缩小卡片 */
    max-width: 280px;
  }
}

@media (max-width: 768px) {
  .link-grid {
    min-width: 100%;
    /* 移动端占满整行 */
    max-width: 100%;
  }
}
</style>
