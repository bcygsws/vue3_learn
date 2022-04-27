<template>
  <div>十四、provide/inject组孙组件传值</div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted
} from 'vue';
export default defineComponent({
  name: 'ProInj',
  setup() {
    console.log('1-开始创建组件-setup');
    const data = reactive({});
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount');
    });
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted');
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>
<style scoped lang="less"></style>
