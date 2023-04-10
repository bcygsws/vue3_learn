<!-- 演示Suspense后备组件的使用 -->
<template>
  <br />
  <button @click="showAsync">展示异步组件</button>
  <template v-if="isShowButton">
    <!-- Suspense组件的使用：等待异步组件渲染时，添加一些后备内容 -->
    <Suspense>
      <template #default>
        <Async></Async>
      </template>
      <template #fallback>
        <div>组件正加载中……</div>
      </template>
    </Suspense>
  </template>
</template>
<script>
import { ref, defineAsyncComponent } from 'vue';
const Async = defineAsyncComponent(() => import('./Async.vue'));
export default {
  components: { Async },
  setup() {
    // 默认值为false的布尔类型变量
    const isShowButton = ref(false);
    // 点击按钮，显示后备组件Suspense
    function showAsync() {
      isShowButton.value = true;
    }
    return {
      showAsync,
      isShowButton
    };
  }
};
</script>
