# 脚手架

vue-cli vue的开发环境

vue(它的核心是依赖于webpack实现的)

vue的模块化和组件化的开发环境


vue-cli + vue-dev-tool + vue-router + vuex

全局安装，就会在全局有一个`vue`的命令

```js
npm install -g @vue/cli
```

创建项目
```
vue create [项目名字]
```
选择默认default选项(babel，eslint)

运行项目
```
npm run serve
//npm start
```

# 依赖

devDependencies这个是非必须依赖，开发环境时候才需要用到的第三个模块
```
gulp
webpack
css-loader
url-loader
```

dependencies这个是必须依赖，也就是你打包之后真正需要用到的模块
```
jquery
vue
weui
bootstrap
```

# 路由

- 实现单页面应用，只有一个页面，页面更新不跳转页面，而是局部刷新(切换)(三阶段)
- 多页面应用，页面跳转会刷新(二阶段)

## 安装

安装vue路由，是一个必须依赖
```
npm install vue-router --save
```
把下面代码复制进去`main.js`里面，并且一定要用`Vue.use`来明确安装
```js
// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)
```
如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

## 定义路由组件

使用单文件组件定义路由组件
```js
Vue.component()
单文件组件(xxx.vue)
const = {}
```
创建一个`pages`文件夹，放路由组件->页面组件

## 定义路由

引入组件，并配置路由参数
```js
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
```

# 实例路由

```js
// 实例该路由配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
```

# 注入router

在根容器
```js
new Vue({
  el:"#lemon",
  // 挂载路由
  router,
  // 把App组件挂载到#app的这个节点上
  render: h => h(App),
})
```

# 放置router-view

router-view根据上面路由配置的规则，让组件出现
```js
<router-view></router-view>
```

# Vue路由官网

https://router.vuejs.org/zh/guide/#html