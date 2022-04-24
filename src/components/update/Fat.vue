<template>
  <div>
    <h4>Fat组件，演示setup的执行时机</h4>
    <!-- setup中数据渲染 -->
    <p>{{ msg }}</p>
    <button @click="handle">更新数据</button>
    <!-- msg里的数据传递给子组件 -->
    <!-- 在Son子组件中，点击按钮分发事件 -->
    <Son :cmsg="msg" msg2="真香啊" @emitxx="handleEvent"></Son>
    <!-- 演示ref和reactive的细节 -->
    <Detail></Detail>
  </div>
</template>
<script lang="ts">
// setup的执行时机
import { defineComponent, ref } from 'vue';
import Son from './Son.vue';
import Detail from './Detail.vue';
export default defineComponent({
  name: 'Fat',
  // 解决传入组件的属性不能自动继承的警告
  // emits: ['msg2'],
  // 注册组件
  components: {
    Son,
    Detail
  },
  setup() {
    let msg = ref('what are you nong sha lei');
    function handle() {
      // 点击按钮更新数据
      msg.value += '***';
    }
    // 子组件Son分发的事件名称，emitxxx,传递的参数'***'
    function handleEvent(val: string) {
      msg.value += val;
    }
    return {
      msg,
      handle,
      handleEvent
    };
  }
});
</script>
