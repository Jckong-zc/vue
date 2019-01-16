import Vue from 'vue'
// css
import './Xfooter.css'
let Xfooter = Vue.component("Xfooter", {
    // html
    // 需要配置html-loader
    template: require('./Xfooter.html')
})

export default Xfooter