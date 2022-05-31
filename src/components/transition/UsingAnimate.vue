<template>
  <div class="main">
    <h3>5.单独使用animate.css实现动画</h3>
    <button @click="flag = !flag">点击按钮，切换动画</button>
    <!-- transition的生命周期：@before-enter @enter @after-enter @before-leave @leave @after-leave  -->
    <transition
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeInRight"
    >
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script lang="ts">
/**
 *
 * @ 使用 animate.css插件，实现左侧进入，右侧画出的动画
 *
 * cnpm i animate.css --save
 *
 * 主要是通过添加类名来实现
 *
 *
 *
 */
import { defineComponent, ref } from 'vue';
// 引入动画插件
import 'animate.css';
export default defineComponent({
  name: 'UsingAnimate',
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
}
</style>
