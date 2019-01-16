import Vue from 'vue'
// css
import './Xheader.css'
let Xheader = Vue.component("Xheader", {
    // html
    // 需要配置html-loader
    template: require('./Xheader.html'),
    data(){
        return {
            name:"lemon"
        }
    },
    // 上台前
    // 毫无准备 
    // 没数据 没模板
    beforeCreate() {
        console.log("beforeCreate")
        console.log(this.$data)
        console.log(this.el)
    },
    // 背台词,化妆
    // 有数据，没模板
    created() {
        console.log("created")
        console.log(this.$data)
        console.log(this.$el)
    },
    // 没登舞台
    // 有数据，有模板
    beforeMount() {
        console.log("beforeMount")
        console.log(this.$data)
        console.log(this.$el)
        console.log(document.querySelector(".site-header"))
    },
    // 登上舞台
    // 模板 = > DOM
    mounted() {
        console.log("mounted")
        console.log(this.$data)
        // ref
        console.log(this.$refs)
        console.log(this.$el)
        // $(this.$refs.abc).css()
        // this.$refs.abc.style.backgroundColor='red'
        
        console.log(document.querySelector(".site-header"))
    },
    // 表演前
    beforeUpdate() {
        alert(1)
        console.log("beforeUpdate")
        console.log(this.$data.name)
        console.log(this.$el)
    },
    // 表演时候
    updated() {
        alert(2)
        console.log("updated")
        console.log(this.$data.name)
        console.log(this.$el)
    },
    // 谢幕前
    beforeDestroy() {
        console.log("beforeDestroy")
        console.log(this.$data.name)
        console.log(this.$el)
    },
    // 谢幕后
    destroyed() {
        console.log("destroyed")
        console.log(this.$data.name)
        console.log(this.$el)
    }
})

// 编译(创建)
// 挂载
// 更新
// 销毁
export default Xheader

// 现有数据 Model
// let data = [];
// // beforeCreate
// // created 模板 === 虚拟DOM
// let html = data.map(()=>{
//     return `
//         <li name="abc">${}
//             <li name="abc">${}
//                 <li name="abc">${}
//                     <li name="abc">${}<li>
//                 <li>
//             <li>
//         <li>
//     `
// }).join('')

// // beforeMount
// // mounted 真实DOM
// $().html(html)
// // updated
// // beforeUpdate
//     .css()
//     .find().attr()
//     .show()
// // beforeDestroy
// // destroyed
// $().remove();
// 现有数据 View

// 对象
// 操作真实DOM结构是昂贵的，而操作字符串是低廉的
// 真实DOM应该少去操作，但是频繁操作模板(虚拟DOM)是不会太大影响的

// 四大生命周期
// 要更改数据，在created之后更改，加载数据，ajax,jonp
// 要更改节点，在mounted之后更改，并且最好配合ref，ref改虚拟DOM
// 数据变动或者视图变动的时候可以用updated来监听  和watch和computed很相似
// 节点销毁就会出beforeDestroy生命周期