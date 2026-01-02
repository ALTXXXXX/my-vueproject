import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI} from "@/apis/layout.js";
export const useCategoryStore = defineStore('category', () => {
  //导航列表数据
  const categoryList = ref([])
  const getCategory = async () => {
    const res = await getCategoryAPI()
    console.log(res)
    categoryList.value = res.result
  }
    return {
      categoryList,
      getCategory
    }
})
