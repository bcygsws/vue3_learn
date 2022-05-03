<template>
  <div>
    <h5>这是Son子组件</h5>
    <input type="text" v-model="txt" @keyup.enter="handleChange" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from 'vue';
const list = ref(['HTML', 'CSS', 'JavaScript']);
const txt = ref('');
const handleChange = () => {
  list.value.unshift(txt.value);
  // 清空文本框
  txt.value = '';
};
// setup组件默认是关闭的，如果通过模板ref获取组件的公开实例，不会暴露任何在<script setup>中的声明，如果需要暴露，
// 需要使用defineExpose
defineExpose({ list });
</script>
<style scoped lang="less"></style>
