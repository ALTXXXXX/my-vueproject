// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//引入样式
import '@/styles/common.scss'
import App from './App.vue'
import router from './router'
import {useIntersectionObserver} from '@vueuse/core'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令
app.directive('img-lazy',{
  mounted (el,binding) {
  //   el 绑定的那个img doom
    // bing 绑定属性的value
    console.log(el,binding.value)
    useIntersectionObserver(
      el,
      ([{isIntersecting}]) => {
        console.log(isIntersecting)
        if(isIntersecting){
          //进入视口区域
          el.src = binding.value
        }
      }
    )
  }
})
