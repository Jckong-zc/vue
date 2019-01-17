import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Xheader from './components/Xheader.vue'
import Xsearch from './components/Xsearch.vue'
import Xpanel from './components/Xpanel.vue'
import Xfooter from './components/Xfooter.vue'
Vue.prototype.$axios = axios;
Vue.use(VueRouter)
// 引入微信样式
import 'weui'

import Bar from './pages/Bar.vue'
import Foo from './pages/Foo.vue'
const router = new VueRouter({
    routes: [{
            path: '/foo/:id',
            component: Foo,
            props: {
                default: true,
                sidebar: false,
                name: 'wscats'
            },
            meta: {
                skill: 'ps'
            }
        },
        {
            path: '/bar',
            component: Bar
        }
    ]
})
router.beforeEach((to, from, next) => {
    // to: Route: 即将要进入的目标 路由对象
    // from: Route: 当前导航正要离开的路由
    // 3秒后进入页面
    setTimeout(() => {
        next() // 一定要调用next才能进入下个路由
    }, 3000)

})
// <Xheader></Xheader>
// <Xsearch></Xsearch>
// <Xpanel></Xpanel>
// <Xfooter></Xfooter>
new Vue({
    el: "#demo",
    router,
    data: {},
    template: `
        <div>
            <router-view></router-view>
        </div>
    `,
    // 等价于全局注册
    components: {
        Xheader,
        Xsearch,
        Xpanel,
        Xfooter
    }
})