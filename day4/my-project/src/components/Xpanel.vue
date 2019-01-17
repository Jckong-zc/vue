<template>
  <!-- View -->
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <router-link :to="`/detail/${index}/${'lemon'}`"
        v-for="(n,index) in news"
        :key="index"
        href="javascript:void(0);"
        class="weui-media-box weui-media-box_appmsg"
      >
        <div class="weui-media-box__hd" v-if="n.image_list.length>0">
          <img class="weui-media-box__thumb" :src="n.image_list[0].url" alt>
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-text="n.title"></h4>
          <p class="weui-media-box__desc" v-text="n.keywords"></p>
        </div>
      </router-link>
    </div>
    <div class="weui-panel__ft">
      <a @click="getNews" href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看更多</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  // M
  data() {
    return {
      // 存放新闻数据
      news: []
    };
  },
  methods: {
    // 获取数据的方法
    async getNews() {
      let data = await this.$axios.get("http://localhost:3000/news");
      this.news = this.news.concat(data.data.data)
    }
  },
  created() {
    // 触发getNews方法
    this.getNews();
  }
};
</script>
<style scoped>
.weui-panel {
  background-color: #ffffff;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  padding-bottom: 54px;
}
</style>


