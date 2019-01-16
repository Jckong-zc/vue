import Vue from 'vue'
import axios from 'axios'
import Xheader from './components/Xheader.vue'
import Xsearch from './components/Xsearch.vue'
import Xpanel from './components/Xpanel.vue'
import Xfooter from './components/Xfooter.vue'
Vue.prototype.$axios = axios;
// 引入微信样式
import 'weui'
new Vue({
    el: "#demo",
    data: {},
    template: `
        <div>
            <Xheader></Xheader>
            <Xsearch></Xsearch>
            <Xpanel></Xpanel>
            <Xfooter></Xfooter>
        </div>
    `,
    // 等价于全局注册
    components:{
        Xheader,
        Xsearch,
        Xpanel,
        Xfooter
    }
})