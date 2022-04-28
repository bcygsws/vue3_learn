<template>
  <div>
    <h3>Suspense标签为等待异步加载组件时提供后备内容</h3>
    <!-- 定时器模拟异步组件UseSuspense -->
    <Suspense>
      <template v-slot:default>
        <UsePromise></UsePromise>
      </template>
      <template v-slot:fallback>
        <h4>正在加载中……</h4>
      </template>
    </Suspense>
    <!-- 动态导入同步组件模拟这种异步,Network中调成slow 3G才能看到效果 -->
    <Suspense>
      <template v-slot:default><UseAsyncCom></UseAsyncCom></template>
      <template v-slot:fallback><h3>加载中……</h3></template>
    </Suspense>
    <!-- 使用axios请求数据，模拟异步组件的加载 -->
    <Suspense>
      <template v-slot:default><UseAxios></UseAxios></template>
      <template v-slot:fallback><h3>加载中……</h3></template>
    </Suspense>
    <!-- 使用async await的方式 -->
     <Suspense>
      <template v-slot:default><UseAwait></UseAwait></template>
      <template v-slot:fallback><h3>加载中……</h3></template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import UsePromise from './UsePromise.vue';
import UseAxios from './UseAxios.vue';
import UseAwait from './UseAwait.vue';
// 动态导入同步组件，模拟异步
const UseAsyncCom = defineAsyncComponent(() => import('./UseAsyncCom.vue'));
export default defineComponent({
  name: 'Sus',
  components: {
    UsePromise,
    UseAsyncCom,
    UseAxios,
    UseAwait
  }
});
</script>
<style scoped lang="less"></style>
