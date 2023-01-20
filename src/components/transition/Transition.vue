<template>
  <div class="main">
    <h3>1.vue3中transition的使用</h3>
    <button @click="flag =!flag">点击按钮，切换动画</button>
    <!-- transition指定name属性后，过渡动画中的类v系列名称，变成fade-enter-from fade-endter-active等等 -->
    <transition name="fade">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Transition',
  setup() {
    const flag = ref(true);
    return {
      flag
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
  /* 动画进入前的阶段 */
  .fade-enter-from {
    width: 0;
    height: 0;
    opacity: 0;
  }
  /* 动画进入的阶段 */
  .fade-enter-active {
    transition: all 2s ease;
  }
  .fade-enter-to {
    width: 100px;
    height: 100px;
    opacity: 1;
  }
  /* 离开前 */
  .fade-leave-from {
    width: 100px;
    height: 100px;
    opacity: 1;
  }
  /* 离开这个阶段 */
  .fade-leave-active {
    transition: all 2s ease;
  }
  /* 离开后 */
  .fade-leave-to {
    width: 0;
    height: 0;
    opacity: 0;
  }
}
</style>
