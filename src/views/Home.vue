<template>
  <div class="home">
    <h3>这是Home组件</h3>
    <router-link to="/home/version_reactive">八、vue2和vue3响应式实现原理的对比</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
// vue3的script和setup语法，推荐使用Volar,注意Volar和原来vue2的Vetur是互斥的；使用Volar时，搜索Vetur插件禁用
// 在Home中定义一个子组件HelloWorld
import { defineComponent } from 'vue';
// 暴露出一个定义好的组件
export default defineComponent({
  // 当前组件名称
  name: 'Home',

});
</script>
