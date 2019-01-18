# Vuex
**Vuex**是一个专为**Vue.js**应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

其实最简单理解为，在我们写Vue组件中，一个页面多个组件之间想要通信数据，那你可以使用**Vuex**

- Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
- Vuex状态管理 === 管理组件数据流动 === 全局数据管理
- Vue的全局数据池，在这里它存放着大量的复用或者公有的数据，然后可以分发给组件
- Vue双向数据绑定的MV框架，数据驱动(区别节点驱动)，模块化和组件化，所以管理各组件和模块之间数据的流向至关重要
- Vuex是一个前端非持久化的数据库中心，Vuex其实是Vue的重要选配，一般小型不怎么用，大型项目运用比较多，所以页面刷新，Vuex数据池会重置
- 

> 路由-》管理的是组件流动

> Vuex-》管理的是数据流动

没有`Vuex`之前，组件数据来源

- ajax请求后端
- 组件自身定义默认数据
- 继承其他组件的数据
- (从vuex拿)

## 安装

安装必须的依赖
```js
yarn add vuex --save
npm install vuex --save
```

## 使用

在一个模块化的打包系统中，您必须显式地通过`Vue.use()`来安装 Vuex：
```js
import Vue from 'vue'//var Vue = require('vue')
import Vuex from 'vuex'//var Vuex = require('vuex')
Vue.use(Vuex)
```

# 五大概念


- State     池 (数据源)
- Getter    查 (获取数据源的数据)
- Mutation  改 (真正修改的动作)
- Action    触发修改行为
- Module    可以拥有多个数据源(数据池)

# 导出store

每一个 Vuex 应用的核心就是 store（仓库）。`store` 基本上就是一个容器，它包含着你的应用中大部分的状态(state)。Vuex 和单纯的全局对象有以下两点不同：

1. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交(commit) mutations。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
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

# 数据的流动


|组件(异步)|>|dispatch|>|触发`action`|>|commit|>|触发`mutations`|>|修改`state`的数据|
|-|-|-|-|-|-|-|-|-|-|-|
|组件(同步)|>|>|>|>|>|commit|>|触发`mutations`|>|修改`state`的数据|
|组件|>|getters|>|触发`getters`|>|获取`state`的数据|

```javascript
const store = new Vuex.Store({
	state: {
		getSearchName: 'hello vuex, I am wscats',
	},
	//接受组件commit传过来的数据并保存到state中,this.$store.commit('changeSearchName', this.searchName);
	mutations: {
		changeSearchName: function(state, a) {
			state.searchName = a;
		},
	},
	//可以从组件调用此方法获取值，一般配合计算属性动态获取值
	//(1)return this.$store.state.searchName
	//(2)return this.$store.getters.getSearchName
	getters: {
		getSearchName: function(state) {
			return state.searchName;
		}
	}
})
```
视图中获取**getSearchName**值然后触发**search()**函数，看下面的`this.$store.commit('changeSearchName', this.getSearchName);`函数
```html
<input type="search" @keyup="search()" v-model="getSearchName" placeholder="搜索" />
```
通过在根实例中注册**store**选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 `this.$store`访问到
```javascript
const app = new Vue({
	store
}).$mount('#app')
```
## 往state设置值

### 直接设置`state`的值
```javascript
this.$store.state.title = “wscats”
```

### 直接触发mutations

通过`commit`方法提交直接触发`mutations`
```javascript
methods: {
	search() {
		this.$store.commit('changeSearchName', this.getSearchName);
	}
},
```

### 触发actions

定义`action`，再用`commit`触发`mutations`，建议如果有异步的操作的话，可以配合`action`触发数据变动，但是如果是同步的话，可以在组件直接`commit`触发`mutations`
```javascript
actions: {
	setChange(context, data) {
		context.commit('setCount', data)
		context.commit('settitle', data)
	},
	setNews(context, data) {
		context.commit('setNews')
	}
}
```
然后在组件中用`dispatch`触发`action`的改变
```javascript
methods: {
	loadMore() {
		this.$store.dispatch("setNews")
	}
}
```

## 从state获取值

### 直接获取state的值
不推荐这种做法
```javascript
computed: {
	searchName() {
		return this.$store.state.searchName;
                //或者return this.$store.state.searchName
	}
},
```
### 通过getters方法获取
先在`store`中定义`getters`
```javascript
getters: {
	getTitle(state) {
		//处理数据
		return state.title + "ed"
	}
}
```
然后通过`getters`方法配合`computed`计算属性动态获取
```javascript
computed: {
	title() {
		//直接获取状态
		//this.$store.state.title
                //通过getters获取状态
		return this.$store.getters.getTitle
	}
}
```
### mapState

我们可以使用`mapState`来获取`vuex`里面的`state`的值，这样比`getters`方便很多
```js
import { mapActions, mapState } from "vuex";
computed: {
    // 从仓库里面去取值
    title() {
      return this.$store.getters.getAuthor;
    },
    ...mapState({
      author: state => state.author,
    })
}
```


# 组件通信四大方案

- Vuex(同页面下==同路由下，任何形式下的组件都可以进行通信) 同路由下的组件之间的通信
- $emit和$on事件总线，观察者模式 任意阶层传
https://cn.vuejs.org/v2/guide/components-custom-events.html
- props父子孙数据集成
https://cn.vuejs.org/v2/guide/components-props.html
- 本地存储和cookie，把数据放到url上