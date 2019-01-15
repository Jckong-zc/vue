import Vue from 'vue'

new Vue({
    el: "#demo",
    data: {
        name: "lemon"
    },
    // <div>hello world</div>
    // 虚拟DOM和JSX
    template:`
        <div>hello world</div>
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