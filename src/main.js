import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'
import './permission' // 导入权限
import './mock'

import highlight from '@/directive/highlight' // 封装highlight.js(代码高亮) 插件的 自定义指令

Vue.use(ElementUI)
Vue.use(highlight) // 使用 highlight 指令

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
