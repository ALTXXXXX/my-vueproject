// 定义懒加载插件
import {useIntersectionObserver} from '@vueuse/core'
export const lazyPlugin = {
  install(app) {
    //懒加载指令
    app.directive('img-lazy',{
      mounted (el,binding) {
        //   el 绑定的那个img doom
        // bing 绑定属性的value
        console.log(el,binding.value)
      const {stop} =  useIntersectionObserver(
          el,
          ([{isIntersecting}]) => {
            console.log(isIntersecting)
            if(isIntersecting){
              //进入视口区域
              el.src = binding.value
              stop()
            }
          }
        )
      }
    })

  }
}
