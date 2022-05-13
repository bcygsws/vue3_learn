<template>
  <h4>我是Son子组件</h4>
  <input
    type="text"
    placeholder="请输入一段文本"
    v-model="txt"
    @keyup.enter="handleChange"
  />
  <!-- 键盘弹起事件，enter键 -->
</template>

<script lang="ts" setup>
// 使用setup语法糖
import { defineProps, defineEmits, ref } from 'vue';
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
});
// 文本框中输入的内容
const txt = ref('');
// 声明要分发的事件
/**
 *
 * @ v-model实现父组件向子组件传值时
 * 父组件 v-model:list=""
 *
 * 子组件 在使用emit分发事件，来改变父组件的list时要注意：
 * 1.事件名称：update:list,格式：update:改变的属性名称
 * 2.defineEmits中拿到emits时，同步声明事件名称；例：const emits=defineEmits(['update:list']);
 * 3.分发事件时，emits('update:list',传参);
 *
 *
 */
const emits = defineEmits(['update:list']);
// console.log(emits);
const handleChange = () => {
  const arr = props.list;
  // 新添加的数据，放在数组元素最前面，unshift方法
  arr.unshift(txt.value);
  // update:props属性名，是固定写法，表示更新某个属性
  emits('update:list', arr);
  console.log(arr);
  // 分发事件完成后，清空文本框
  txt.value = '';
};
</script>
<style scoped lang="less"></style>
