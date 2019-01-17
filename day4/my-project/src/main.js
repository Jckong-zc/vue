import Vue from 'vue'
import App from './App.vue'

// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)

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

// 微信路由 微信页面
import Wechat from './pages/Wechat.vue'
// 联系路由 联系页面
import Contact from './pages/Contact.vue'
// 配置路由
const routes = [
  // 如果url的路由为 /foo，进入Foo组件
  { path: '/wechat', component: Wechat },
  { path: '/contact', component: Contact }
]

// 实例该路由配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// Root容器
new Vue({
  el:"#lemon",
  // 挂载路由
  router,
  // 把App组件挂载到#app的这个节点上
  render: h => h(App),
})
// .$mount('#app')
