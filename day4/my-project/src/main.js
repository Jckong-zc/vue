import Vue from 'vue'
// 引入路由模块
import router from './configs/router.js'
// 微信样式
import 'weui'

// 全局样式
import './styles/app.css'

// 引入ajax库
import axios from 'axios'
// 引入jQuery库
import $ from 'jquery'

// 把库挂载到原型链
Vue.prototype.$axios = axios
Vue.prototype.$ = $

Vue.config.productionTip = false



// Root容器
new Vue({
  el: "#lemon",
  // 挂载路由
  router,
  // 把App组件挂载到#app的这个节点上
  render: h => h('router-view'),
})
// .$mount('#app')