<template>
  <h3>这是Home组件</h3>
  <HelloWorld></HelloWorld>
  <!-- <p>{number}</p> -->
  <!-- 注意：在vue中使用模板是双括号，react中是单括号 -->
  <p>{{ number }}</p>
  <!-- setup和ref使用演示组件 -->
  <Learn></Learn>
  <Update></Update>
  <Fat></Fat>
  <!-- 计算属性和监听 -->
  <Computed></Computed>
  <!-- 浅劫持 -->
  <ShallowReactive></ShallowReactive>
</template>

<script lang="ts">
// vue3的script和setup语法，推荐使用Volar,注意Volar和原来vue2的Vetur是互斥的；使用Volar时，搜索Vetur插件禁用
// 在Home中定义一个子组件HelloWorld
import HelloWorld from '../components/HelloWorld.vue';
import Learn from '../components/setup_ref/Learn.vue';
import Update from '../components/update/Update.vue';
import Fat from '../components/update/Fat.vue';
// 计算属性和监听
import Computed from '../components/computed/Computed.vue';
import ShallowReactive from '../components/shallow_reactive/ShallowReactive.vue';
import { defineComponent } from 'vue';
// 暴露出一个定义好的组件
export default defineComponent({
  // 当前组件名称
  name: 'Home',
  components: {
    // 注册一个子组件
    HelloWorld,
    Learn,
    Update,
    Fat,
    Computed,
    ShallowReactive
  },
  // setup相当于一个回调函数，里面返回的任何对象，对象的属性和方法，在模板中可以直接使用
  setup() {
    let number = 16;
    return { number };
  }
});
</script>
