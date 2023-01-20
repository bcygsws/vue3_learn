<template>
  <div>
    <h3>十七、v-model实现父子组件通信</h3>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <!-- vue3中props接收 -->
    <Son v-model:list="list"></Son>
  </div>
</template>

<script lang="ts" setup>
// 使用setup语法糖
import { ref } from 'vue';
// 引入子组件Son
import Son from './Son.vue';
const list = ref(['HTML', 'CSS', 'JavaScript']);
</script>
<style scoped lang="less"></style>
