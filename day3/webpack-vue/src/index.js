import Vue from 'vue'
// import $ from 'jquery'
// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/product.css'
// 头部组件
import Xheader from './components/Xheader/Xheader.js'
import Banner from './components/Banner/Banner.js'
import Xfooter from './components/Xfooter/Xfooter.js'
// 模块化 》组件化
// 组件的本质就是自定义标签，而自定义标签的来源，就是一个独特的模块输出的结果
new Vue({
    el: "#demo",
    data: {
        name: "lemon"
    },
    // <div>hello world</div>
    // 虚拟DOM和JSX
    template: `
        <div>
            <Xheader></Xheader>
            <Banner></Banner>
            <Xfooter></Xfooter>
        </div>
    `
    // render(createElement) {
    //     return createElement(
    //         'div', // 标签名称
    //         {
    //             style: {
    //                 color: 'red',
    //                 fontSize: '14px'
    //             },
    //         }, // 子元素数组
    //         ['hello world']
    //     )
    // }
})