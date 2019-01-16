import Vue from 'vue'
// css
import './Xheader.css'
let Xheader = Vue.component("Xheader", {
    // html
    // 需要配置html-loader
    template: require('./Xheader.html'),

    // 上台前
    // 毫无准备 
    beforeCreate() {},
    // 背台词,化妆
    created() {

    },
    // 没登舞台
    // 
    beforeMount() {

    },
    // 登上舞台
    mounted() {

    },
    // 表演前
    beforeUpdate() {},
    // 表演时候
    updated() {

    },
    // 谢幕前
    beforeDestroy() {},
    // 谢幕后
    destroyed() {}
})

// 编译(创建)
// 挂载
// 更新
// 销毁
export default Xheader


// let data = [];
