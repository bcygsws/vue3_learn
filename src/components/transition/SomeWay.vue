<template>
  <div>
<!-- transition动画的几种方式 -->
  <router-link to="/home/transition/tr_name">1.使用transition的name属性更改默认类</router-link>
  <router-link to="/home/transition/define_class">2.自定义动画类名</router-link>
  <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default defineComponent({
  name: 'SomeWay',
  setup() {
    console.log('1-开始创建组件-setup')
    const data = reactive({})
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return {
      ...toRefs(data),
    }
  },
})

</script>
<style scoped lang='less'>
</style>