<script setup>
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeCategory from "@/views/Home/components/HomeCategory.vue";
import HomeProduct from "@/views/Home/components/HomeProduct.vue";
import HomeHot from "@/views/Home/components/HomeHot.vue";
import HomeNew from "@/views/Home/components/HomeNew.vue";
import HomePanel from "@/views/Home/components/HomePanel.vue";
</script>

<template>
  <div class="container">
    <HomeCategory/>
    <HomeBanner/>
  </div>
  <HomeNew/>
  <HomeHot/>
  <HomeProduct/>
<!-- 测试面板 -->
  <HomePanel title="新鲜好物" subTitle="新鲜好物 好多商品">
    <div>我是新鲜好物的插槽</div>
  </HomePanel>
  <HomePanel title="人气推荐" subTitle="人气推荐 好多商品">
    <div>我是人气推荐的插槽</div>

  </HomePanel>>
</template>

