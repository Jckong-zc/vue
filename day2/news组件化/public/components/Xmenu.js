Vue.component("Xmenu", {
    template: `
        <div class="top_menu_bar ">
            <div class="top_menu_more">
                <div class="list_shadow"></div><a class="more_btn" href="javascript:void(0)"><span class="cross"></span></a>
            </div>
            <div class="top_menu_list">
                <a @click="changeChannel(index)" v-for="(channel,index) in channels" href="javascript:void(0)" :data-channel="channel.channel" :data-query="'channel='+channel.channel"
                    class="btn" :class="{
                        'cur': index==cur
                    }" v-text="channel.title"></a>
            </div>
        </div>
    `,
    data() {
        return {
            channels: [{
                channel: '__all__',
                title: '推荐'
            }, {
                channel: 'video',
                title: '视频'
            }, {
                channel: 'news_hot',
                title: '热点'
            }, {
                channel: 'news_society',
                title: '社会'
            }, {
                channel: 'news_entertainment',
                title: '娱乐'
            }, {
                channel: '__all__',
                title: '推荐'
            }, {
                channel: 'video',
                title: '视频'
            }, {
                channel: 'news_hot',
                title: '热点'
            }, {
                channel: 'news_society',
                title: '社会'
            }, {
                channel: 'news_entertainment',
                title: '娱乐'
            }],
            cur: 0
        }
    },
    methods: {
        changeChannel(index) {
            console.log(index)
            this.cur = index;
        }
    }
})