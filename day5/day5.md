# 组件通信

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式

vuex状态管理 -》 组件数据流动 -》数据管理

vue的全局数据池，在这里它存放着大量的复用或者公有的数据，然后可以分发给组件

vue双向数据绑定的MV框架，数据驱动(区别节点驱动)，模块化和组件化

路由-》管理的是组件
Vuex-》 管理的是数据

Vuex的一个前端非持久化的数据库中心，Vuex其实是Vue的重要选配，小型不怎么用，大型项目运用比较多

注意点:页面刷新，数据池会重置

组件数据来源
- ajax请求后端
- 定义默认数据，写死
- 从vuex拿

## 安装

安装必须的依赖
```js
yarn add vuex --save
```

## 使用

在一个模块化的打包系统中，您必须显式地通过 Vue.use() 来安装 Vuex：
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
```

# 五大概念


- State     池 (数据源)
- Getter    查 (获取数据源的数据)
- Mutation  改 (真正修改的动作)
- Action    触发修改行为
- Module    可以拥有多个数据源(数据池)

# 导出store

```js
// 实例化Vuex，创建一个仓库
const store = new Vuex.Store({
    // 状态
    // 该库存数据的地方
    state: {
        // 状态值
        count: 0,
        author: 'lemon'
    },
    // 修改数据的方法
    mutations: {
        // 修改数据的第一个方法
        increment(state) {
            state.count++
        }
    }
})
// 暴露store仓库到`main.js`的根容器里面
export default store
```

# 挂载仓库

```js
// 引入仓库
import store from './configs/store.js'
// Root容器
let vm = new Vue({
  el: "#lemon",
  // 挂载路由
  router,
  // 挂载仓库
  store,
  // 把App组件挂载到#app的这个节点上
  render: h => h('router-view'),
})

```


# 获取数据源的数据

第一种方法

```js
beforeCreate() {
    // 来自于vuex仓库
    console.log(this.$store.state.author)
    // 来自于组件自定义
    console.log(this.title)
}
```

第二种方法

先定义`store`中的`getters`
```js
getters: {
    // 获取author的方法
    getAuthor(state) {
        return state.author + ' Yeah'
    },
    getCount(state) {
        return state.count
    }
}
```

通过属性访问
Getter 会暴露为`store.getters`对象，你可以以属性的形式访问这些值

```js
computed: {
    // 从仓库里面去取值
    title(){
      return this.$store.getters.getAuthor
    }
}
```


# 修改数据的方法

先定义`store`中的`mumat`
```js
// 修改数据的方法
mutations: {
    // 修改数据的第一个方法
    editCount(state) {
        state.count++
    },
    // 修改仓库中state中的author
    editAuthor(state, data) {
        state.author = data
    }
}
```
然后在组件触发`commit`事件
```js
methods: {
    editAuthor() {
      console.log(this.$store);
      // 触发store里面的mutations，把store里面的author改为laotian
      this.$store.commit('editAuthor','laotian')
    }
}
```

配合`action`

先触发`action`--commit-->`mutations`---->更改`state`的数据----->触发`getters`->获取数据