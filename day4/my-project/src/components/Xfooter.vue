<template>
  <div class="weui-tabbar">
    <router-link to="/app/wechat" href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
      <span style="display: inline-block;position: relative;">
        <img :src="iconTabbar" alt class="weui-tabbar__icon">
        <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
      </span>
      <p class="weui-tabbar__label">微信</p>
    </router-link>
    <!-- 编程式导航 -->
    <a @click="toContact" href="javascript:;" class="weui-tabbar__item">
      <img :src="iconTabbar" alt class="weui-tabbar__icon">
      <p class="weui-tabbar__label">通讯录</p>
    </a>
    <a href="javascript:;" class="weui-tabbar__item">
      <span style="display: inline-block;position: relative;">
        <img :src="iconTabbar" alt class="weui-tabbar__icon">
        <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
      </span>
      <p class="weui-tabbar__label">发现</p>
    </a>
    <a href="javascript:;" class="weui-tabbar__item">
      <img :src="iconTabbar" alt class="weui-tabbar__icon">
      <p class="weui-tabbar__label">我</p>
    </a>
  </div>
</template>
<script>
import iconTabbar from "../assets/icon_tabbar.png";
export default {
  data() {
    return {
      iconTabbar
    };
  },
  methods: {
    toContact() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "contact" });
    }
  }
};
</script>
<style scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>


