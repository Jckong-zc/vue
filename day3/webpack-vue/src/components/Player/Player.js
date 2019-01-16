import Vue from 'vue'
import Aplayer from 'vue-aplayer'
let Player = Vue.component("Player",{
    template:`
        <aplayer autoplay
            :music="{
            title: '海阔天空',
            artist: 'Beyond',
            src: 'http://zhangmenshiting.qianqian.com/data2/music/3519cdb70c14a95076e8c006c7226963/599516462/599516462.mp3?xcode=6e6d59d18d378711cc3224dc97e4d7a9',
            pic: 'http://qukufile2.qianqian.com/data2/pic/88582702/88582702.jpg@s_1,w_150,h_150'
            }"
        />
    `,
    components:{
        Aplayer
    }
})
export default Player