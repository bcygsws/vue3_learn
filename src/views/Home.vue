<template>
  <h3>这是Home组件</h3>
  <!-- 祖孙组件传值provide/inject -->
  <router-link to="/home/provide_inject"
    >十四、provide/inject组孙组件传值</router-link
  >
  <router-view></router-view>
</template>

<script lang="ts">
// vue3的script和setup语法，推荐使用Volar,注意Volar和原来vue2的Vetur是互斥的；使用Volar时，搜索Vetur插件禁用
import { defineComponent } from 'vue';
// 暴露出一个定义好的组件
export default defineComponent({
  // 当前组件名称
  name: 'Home'
});
</script>
