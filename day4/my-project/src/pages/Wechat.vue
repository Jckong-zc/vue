<template>
    <div>
        <Xheader />
        <Xsearch />
        <Xpanel />
    </div>
</template>
<script>
// 引用组件
import Xheader from '../components/Xheader.vue'
import Xsearch from '../components/Xsearch.vue'
import Xpanel from '../components/Xpanel.vue'

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xheader,
    Xsearch,
    Xpanel
  }
}
</script>
