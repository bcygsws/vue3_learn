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
  <router-view></router-view>
  <!-- <p>{num}</p> -->
  <!-- 注意：在vue中使用模板是双括号，react中是单括号 -->
  <p>{{ num }}</p>
  <!-- 使用Suspense标签 -->
  <Sus></Sus>
  <!-- vue2和vue3响应式的处理的不同点 -->
  <version-reactive></version-reactive>
  <!-- 浅劫持 -->
  <ShallowReactive></ShallowReactive>
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

import VersionReactive from '../components/reactive//VersionReactive.vue';
import ShallowReactive from '../components/shallow_reactive/ShallowReactive.vue';
// 只读和浅只读
import ReadOnlyProperty from '../components/readonly/ReadOnlyProperty.vue';
import ToAndMarkRaw from '../components/raw/ToAndMarkRaw.vue';
import ToRef from '../components//to_ref/ToRef.vue';
import CustomRef from '../components/custom_ref/CustomRef.vue';
import ProInj from '../components/provide_inject/ProInj.vue';
import Sus from '../components/suspense/Sus.vue';
import { defineComponent } from 'vue';
// 暴露出一个定义好的组件
export default defineComponent({
  // 当前组件名称
  name: 'Home',
  components: {
    // 注册一个子组件
    VersionReactive,
    ShallowReactive,
    ReadOnlyProperty,
    ToAndMarkRaw,
    ToRef,
    CustomRef,
    ProInj,
    Sus
  },
  setup() {
    const num = 16;
    return { num };
  }
});
</script>
