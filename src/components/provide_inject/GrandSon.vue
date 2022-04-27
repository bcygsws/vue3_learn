<template>
  <div>
    <h5>孙子组件GrandSon</h5>
    <!-- 祖父传过来的数据 ,模板中color相当于color.value了-->
    <p :style="{ color: color }">颜色：{{ color }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
export default defineComponent({
  name: 'GrandSon',
  setup() {
    // 为color添加类型注解，避免模板中:style报错
    const color: any = inject('color1');
    console.log(color); // 打印发现inject后的color是一个对象
    console.log(color.value);
    return {
      color
    };
  }
});
</script>
<style scoped lang="less"></style>
