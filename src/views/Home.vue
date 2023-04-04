<template>
  <div class="home">
    <h3>这是Home组件</h3>
    <!-- <p>{number}</p> -->
    <!-- 注意：在vue中使用模板是双括号，react中是单括号 -->
    <p>{{ number }}</p>
    <!-- setup和ref使用演示组件 -->
    <Learn></Learn>
  </div>
</template>

<script lang="ts">
// 在Home中定义一个子组件HelloWorld
import Learn from '../components/setup_ref/Learn.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  // 注册一个子组件
  components: {
    Learn
  },
  // setup相当于一个回调函数，里面返回的任何对象，对象的属性和方法，在模板中可以直接使用
  setup() {
    let number = 16;
    return { number };
  }
});
</script>
