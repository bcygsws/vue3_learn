<template>
  <h3>这是Home组件</h3>
  <!-- setup和ref使用演示组件 -->
  <router-link to="/home/learn">二、这是setup和ref演示组件</router-link>
  <router-link to="/home/update">三、操作代理数据，影响界面更新</router-link>
  <router-link to="/home/setup">四、setup的执行时机</router-link>
  <!-- 计算属性和监听 -->
  <router-link to="/home/computed"
    >五、计算属性和监听演示组件Computed</router-link
  >
  <router-link to="/home/version_reactive"
    >八、vue2和vue3响应式实现原理的对比</router-link
  >
  <!-- 浅劫持 -->
  <router-link to="/home/shallow_reactive"
    >九、浅监视或者浅劫持或者浅响应式</router-link
  >
  <router-view></router-view>
  <!-- 使用Suspense标签 -->
  <Sus></Sus>
  <!-- 只读和浅只读 -->
  <ReadOnlyProperty></ReadOnlyProperty>
  <!-- toRaw 和markRaw -->
  <ToAndMarkRaw></ToAndMarkRaw>
  <!-- toRef的使用，和ref的区别 -->
  <ToRef></ToRef>
  <!-- customRef的使用 -->
  <CustomRef></CustomRef>
  <!-- 祖孙组件传值provide/inject -->
  <ProInj></ProInj>
</template>

<script lang="ts">
// vue3的script和setup语法，推荐使用Volar,注意Volar和原来vue2的Vetur是互斥的；使用Volar时，搜索Vetur插件禁用
// 在Home中定义一个子组件HelloWorld
import { defineComponent } from 'vue';
// 只读和浅只读
import ReadOnlyProperty from '../components/readonly/ReadOnlyProperty.vue';
import ToAndMarkRaw from '../components/raw/ToAndMarkRaw.vue';
import ToRef from '../components//to_ref/ToRef.vue';
import CustomRef from '../components/custom_ref/CustomRef.vue';
import ProInj from '../components/provide_inject/ProInj.vue';
import Sus from '../components/suspense/Sus.vue';
export default defineComponent({
  // 当前组件名称
  name: 'Home',
  components: {
    // 注册一个子组件
    ReadOnlyProperty,
    ToAndMarkRaw,
    ToRef,
    CustomRef,
    ProInj,
    Sus
  }
});

// setup相当于一个回调函数，里面返回的任何对象，对象的属性和方法，在模板中可以直接使用
</script>
