<template>
  <div
    class="weui-search-bar"
    :class="{
    'weui-search-bar_focusing':isShowSeachBar
  }"
    id="searchBar"
  >
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input ref="searchInput"
          type="search"
          class="weui-search-bar__input"
          id="searchInput"
          placeholder="搜索"
          required
        >
        <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
      </div>
      <label
        @click="toggleSearchBar"
        class="weui-search-bar__label"
        id="searchText"
        style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
      >
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </form>
    <a
      @click="toggleSearchBar"
      href="javascript:"
      class="weui-search-bar__cancel-btn"
      id="searchCancel"
    >取消</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowSeachBar: false
    };
  },
  methods: {
    toggleSearchBar() {
      this.$refs.searchInput.focus()
      // 取反
      this.isShowSeachBar = !this.isShowSeachBar;
    }
  }
};
</script>
<style scoped>
.weui-search-bar {
  position: relative;
  padding: 8px 10px;
  display: -webkit-box;
  /* display: -webkit-flex; */
  /* display: flex; */
  box-sizing: border-box;
  background-color: #efeff4;
  -webkit-text-size-adjust: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>


