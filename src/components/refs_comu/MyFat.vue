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
    <button @click="handleExpose">点击按钮，获取子组件对外暴露的属性</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// 引入子组件
import MySon from './MySon.vue';
/**
 *
 * 子组件向父组件传值的一种方式
 *
 *
 */
const childRef = ref(null);
const handleExpose = () => {
  console.log(childRef);
  console.log(childRef.value);
  console.log(childRef.value.list); // Proxy{0: 'HTML', 1: 'CSS', 2: 'JavaScript'}
  console.log(childRef.value.toFat); // 我是子组件数据
  childRef.value.toFatMet(); // 传给父组件的方法toFatMet
};
</script>
<style scoped lang="less"></style>
