<template>
  <div class="main">
    <h3>3.transition的生命周期</h3>
    <button @click="flag = !flag">点击按钮，切换动画</button>
    <!-- transition的生命周期：@before-enter @enter @after-enter @before-leave @leave @after-leave  -->
    <transition @before-enter="enterHook">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'TransitionLife',
  setup() {
    const flag = ref(true);
    const enterHook = (el: Element) => {
      console.log('transition包裹的标签:', el);
    };
    return {
      flag,
      enterHook
    };
  }
});
</script>
<style scoped lang="less">
.main {
  flex: 1;
  margin: 14px;
  border: 1px solid #ccc;
  overflow: auto;
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
  }
}
</style>
