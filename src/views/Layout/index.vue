<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
import {useCategoryStore} from "@/stores/category.js";
import {onMounted} from "vue";
const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
  console.log(categoryStore.categoryList)
})

</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
<!-- 添加key 破坏复用机制 强制销毁重建 -->
<!--  <RouterView :key="$route.fullPath" />-->
  <RouterView />

  <LayoutFooter />
</template>
