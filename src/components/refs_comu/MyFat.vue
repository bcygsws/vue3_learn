<template>
  <div>
    <h3>十八、vue组件通信之三-refs方法</h3>
    <MySon ref="childRef"></MySon>
    <ul>
    <!-- ?.表示子组件创建完成了，再获取childRef.list -->
      <li v-for="(item, index) in childRef?.list" :key="index">
        学科：{{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
/**
 * 
 * 子组件向父组件传值的一种方式
 * 
 * 
 */
import { ref } from 'vue';
// 引入子组件
import MySon from './MySon.vue';
const childRef = ref(null);
</script>
<style scoped lang="less"></style>
