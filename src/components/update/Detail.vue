<template>
  <h4>这是Detail组件-总结composition API中的两个响应式对象</h4>
  <p>m1:{{ m1 }}</p>
  <p>m2:{{ m2 }}</p>
  <p>m3:{{ m3 }}</p>
  <button @click="handle">点击按钮，观察m1、m2、m3的变化</button>
</template>
<script lang="ts">
/**
 *
 * @ ref和reactive的一些细节
 * 1.ref和reactive是composition API的两个响应式API
 * 2.ref主要用基本数据类型的响应式，reactive用于深度的响应式数据
 * 3.ref也可以处理对象和数组(在setup中要多加一个.value,而reactive方式不需要.value)，
 * 当ref中传入对象或数组时，系统内部会用reactive来处理它（打印m3，能看到里面包含代理对象）
 * 4.ref内部是通过getter/setter来实现数据劫持的
 * 5.proxy内部通过Proxy对象拦截传入的属性对象的任何属性的任何操作（多达13种操作），通过反射对象Reflect来处理Proxy
 * 拦截的属性的操作
 * 6.ref在setup中处理时，const user=ref('dfaggfa');要添加一个value(user.value才能拿到值)，才能拿到值；
 * 在模板中处理它时，系统会自动加value,不用带value
 *
 *
 *
 */
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
  name: 'Detail',
  setup() {
    const m1 = ref('你好啊');
    const m2 = reactive({
      name: '张明明',
      age: 25,
      wife: {
        name: '李红',
        age: 22,
        info: '未解忆长安'
      }
    });
    const m3 = ref({
      name: '张明明',
      age: 25,
      wife: {
        name: '李红',
        age: 22,
        info: '未解忆长安'
      }
    });
    function handle() {
      m1.value += '~';
      m2.wife.info += '**';
      m3.value.wife.info += '&&';
    }
    return {
      m1,
      m2,
      m3,
      handle
    };
  }
});
</script>
