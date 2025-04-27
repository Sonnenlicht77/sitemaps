<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'
const showButton = ref(false)
</script>

<template>
  <div class="search">
    <div class="search_seaction">
      <input adjust-position="true" placeholder="Search..." @focus="showButton = true" @blur="showButton = false" />
      <button v-show="showButton" class="search-button">
        <img :src="withBase('/search.svg')" alt="Search" />
      </button>
    </div>
  </div>

</template>

<style scoped>
.search {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search_seaction {
  width: 100%;
  position: relative;
  max-width: 700px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background-color: var(--vp-c-bg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  box-sizing: border-box;
  cursor: text;
  font-size: 14px;
  color: var(--vp-c-text);
  font-family: var(--vp-c-font-family);
  font-weight: var(--vp-c-font-weight);
  line-height: var(--vp-c-line-height);


}

.search_seaction input {
  width: 100%;
  height: 40px;
  padding: 0 40px 0 35px;
  background-image: url('/search.svg');
  background-size: 18px;
  background-position: 12px center;
  background-repeat: no-repeat;
  transition: all 0.2s ease;
}

.search-button {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--vp-c-brand);
  border: none;
  padding: 5px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.search-button img {
  width: 18px;
  height: 18px;
  filter: brightness(0) invert(1);
}

/* Vitepress dark mode adaptation */
.dark .search_seaction input {
  background-color: var(--vp-c-bg-alt);
  border-color: var(--vp-c-divider);
}

.dark .search_seaction input:focus {
  border-color: var(--vp-c-brand);
}
</style>