<template>
  <h3>这是Home组件</h3>
  <!-- 浅劫持 -->
  <router-link to="/home/shallow_reactive">九、浅监视或者浅劫持或者浅响应式</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
// vue3的script和setup语法，推荐使用Volar,注意Volar和原来vue2的Vetur是互斥的；使用Volar时，搜索Vetur插件禁用
// 在Home中定义一个子组件HelloWorld
import { defineComponent } from 'vue';
// 暴露出一个定义好的组件
export default defineComponent({
  // 当前组件名称
  name: 'Home',
  // setup相当于一个回调函数，里面返回的任何对象，对象的属性和方法，在模板中可以直接使用
});
</script>
