<template>
  <h3>这是Home组件</h3>
  <!-- 只读和浅只读 -->
  <router-link to="/home/readonly"
    >十、readonly和shallowReadonly-只读和浅只读</router-link
  >
  <router-view></router-view>
</template>

<script lang="ts">
// vue3的script和setup语法，推荐使用Volar,注意Volar和原来vue2的Vetur是互斥的；使用Volar时，搜索Vetur插件禁用
// 在Home中定义一个子组件HelloWorld
import { defineComponent } from 'vue';
// 暴露出一个定义好的组件
export default defineComponent({
  // 当前组件名称
  name: 'Home'
});
</script>
