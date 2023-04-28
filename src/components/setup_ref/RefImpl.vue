<template>
  <div class="refimpl_container">
    <h3>演示ref(obj)和reactive(obj)在watch侦听上的区别</h3>
    <p>sum的值：{{ sum }}</p>
    <button @click="inc">点击按钮，sum值+1</button>
  </div>
</template>
<script>
import { ref, watch } from 'vue';
// 参考文档：vue3Watch监听RefImpl对象的说明 https://blog.csdn.net/moxunjinmu/article/details/123320567
export default {
  name: 'RefImpl',
  setup() {
    let sum = ref(0);
    let msg = ref('你好啊');
    // 注意：对象在Vue3中，一般使用reactive来定义；当使用ref来包括对象时，对象仍然能够深度响应式；RefImpl把代理对象Proxy挂在自己的value属性上
    let res = ref({
      name: '张无忌',
      age: 20,
      skills: ['太极拳', '九阳神功', '乾坤大挪移']
    });
    // a.sum本身就是一个RefImpl，直接作为北watch监听的对象
    watch(sum, (newVal, oldVal) => {
      // 打印出来，sum是一个RefImpl对象；newVal值为模板中显示的新值
      console.log(sum, newVal, oldVal);
    });
    const inc = () => {
      sum.value += 1;
    };
    return {
      sum,
      inc
    };
  }
};
</script>
