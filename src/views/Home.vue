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
  <!-- 只读和浅只读 -->
  <router-link to="/home/readonly"
    >十、readonly和shallowReadonly-只读和浅只读</router-link
  >
  <router-link to="/home/raw">十一、转换为普通对象，toRaw和markRaw</router-link>
  <!-- toRef的使用，和ref的区别 -->
  <router-link to="/home/to_ref">十二、演示toRef的用法</router-link>
  <!-- customRef的使用 -->
  <router-link to="/home/custom_ref">十三、演示customRef的使用</router-link>
  <!-- 祖孙组件传值provide/inject -->
  <router-link to="/home/provide_inject"
    >十四、provide/inject组孙组件传值</router-link
  >
  <!-- 使用Suspense标签 -->
  <router-link to="/home/suspense"
    >十六、Suspense标签为等待异步加载组件时提供后备内容</router-link
  >
  <router-link to="/home/v_model">十七、v-model实现双向通信</router-link>
  <router-link to="/home/refs_comu">十八、vue组件通信之三-refs方法</router-link>
  <router-link to="/home/vuex">十九、vue组件通信之四-状态管理器vuex</router-link>
  <router-link to="/home/attrs">二十、vue组件通信-attrs</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
// vue3的script和setup语法，推荐使用Volar,注意Volar和原来vue2的Vetur是互斥的；使用Volar时，搜索Vetur插件禁用
// 在Home中定义一个子组件HelloWorld
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home'
});
</script>
