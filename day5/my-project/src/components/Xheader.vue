<template>
  <header @click="editAuthor" v-text="title"></header>
</template>
<script>
export default {
  data() {
    return {
      // title: "今日头条"
    };
  },
  methods: {
    editAuthor() {
      console.log(this.$store);
      // 触发store里面的mutations，把store里面的author改为laotian
      // 直接触发mutations
      // this.$store.commit('editAuthor','laotian')
      // 直接触发action 间接触发mutations
      this.$store.dispatch('setAuthor','laotian')
    }
  },
  computed: {
    // 从仓库里面去取值
    title(){
      return this.$store.getters.getAuthor
    }
  },
  watch: {},
  beforeCreate() {
    // 来自于vuex仓库
    // console.log(this.$store.state.author)
    // 来自于组件自定义
    // console.log(this.title)
    console.log(this.$store.getters.getAuthor);
  },
  created() {},
  mounted(){
    
  }
};
</script>
<style scoped>
header {
  /* position: fixed;
  left: 0;
  top: 0; */
  height: 50px;
  line-height: 50px;
  width: 100%;
  text-align: center;
  color: white;
  background-color: red;
}
</style>


