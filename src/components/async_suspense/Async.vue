<!-- async_suspense分支：创建了一个异步组件，引入父组件Fat模板中 -->
<template>
  <AsyncButton></AsyncButton>
</template>
<script>
import { defineAsyncComponent } from 'vue';
import ErrorComponent from './ErrorComponent.vue';
// 定义局部异步组件，参考文档：https://blog.csdn.net/weixin_43365995/article/details/123386594
export default {
  components: {
    AsyncButton: defineAsyncComponent({
      // 加载默认演示为200ms
      delay: 200,
      timeout: 3000,
      loader: () => import('./AsyncButton.vue'),
      errorComponent: ErrorComponent,
      onError(error, retry, fail, attempts) {
        if (attempts <= 3) {
          retry();
        } else {
          fail();
        }
      }
    })
  }
};
</script>
