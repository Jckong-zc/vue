Vue.component("Xcontent", {
    template: `
        <content id="pageletListContent" class="feed-list-container">
            <div class="list_content" data-pull-fresh="1">
                <section v-for="n in news" class="has_action" data-hot-time="1547515490" data-group-id="6646321188668703240" data-item-id="6646321188668703240"
                    data-format="0"><a href="javascript: void(0)" data-action-label="click_headline" data-tag="news" class="article_link clearfix ">
                        <div class="item_detail">
                            <h3 class="dotdot line3" v-text="n.title"></h3>
                            <div class="item_info">
                                <div><span class="stick_label space">置顶</span>0
                                    <span class="src space" v-text="n.source"></span><span class="cmt space" v-text="'评论'+n.comment_count">
                                    </span><span class="time" title="2019-01-15 09:24">10分钟前</span><span data-id="6646321188668703240"
                                        class="dislike-news fr"></span></div>
                            </div>
                        </div>
                    </a>
                </section>
            </div>
        </content>
    `,
    data(){
        return {
            news: []
        }
    },
    methods: {
        async loadMore() {
            let data = await axios.get('http://localhost:3000/news', {
                params: {
                    ID: 12345
                }
            })
            console.log(data)
            this.news = this.news.concat(data.data.data)
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
        }
    },
    created() {
        this.loadMore()
    }
})