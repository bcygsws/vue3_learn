<template>
  <to-refs></to-refs>
  <to-refs1></to-refs1>
  <using-ref></using-ref>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import ToRefs from "./ToRefs.vue";
import ToRefs1 from "./ToRefs1.vue";
import UsingRef from "./UsingRef.vue";
export default defineComponent({
  name: 'Base',
  components:{
    ToRefs,
    ToRefs1,
    UsingRef
  },
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
<style scoped lang="less"></style>
