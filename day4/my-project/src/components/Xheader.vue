<template>
  <header v-text="title"></header>
</template>
<script>
export default {
  data() {
    return {
      title: "今日头条"
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {}
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


