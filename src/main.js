// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//引入样式
import '@/styles/common.scss'
import App from './App.vue'
import router from './router'

//引入懒加载指令并且注册
import {lazyPlugin} from "@/directives/index.js";
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

//定义全局指令
