<template>
  <h4>这是ToRef的子组件Son</h4>
  <!-- 在其父组件中点击按钮，age也同步变化 -->
  <p>Son子组件年龄：{{ age }}</p>
  <!-- 增加一个需求，如果要拿到传入的数据位数，length怎么办?而且getLength函数是别人封装的，传入的参数是Ref类型 -->
  <p>length:{{ length }}</p>
</template>
<script lang="ts">
import { defineComponent, toRef, computed, Ref } from 'vue';
// 别人封装的获取长度函数
function getLength(age: Ref) {
  // 数据age只要变化，就计算长度，需要监听
  // 这种属于只有getter的computed的监听
  return computed(() => {
    return age.value.toString().length;
  });
}
export default defineComponent({
  name: 'Son',
  props: {
    age: {
      type: Number,
      required: true // 必须的
    }
  },
  setup(props) {
    // 要使用传入的age,使用setup的参数props
    console.log(props);
    // 别人定义的函数getLength参数接收的是Ref类型数据，而目前age是number类型数据，因此需要把number类型转换成Ref类型
    const length = getLength(toRef(props, 'age'));
    return {
      length
    };
  }
});
/**
 *
 *  @ age:Ref
 * 目前的参数是number类型，number类型转换成Ref类型，才能通过类型校验
 * toRef(props,'age');
 *
 *
 *
 */
</script>
