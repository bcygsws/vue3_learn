<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 点击按钮，销毁Life组件，观察组件销毁的钩子 -->
    <button @click="isShow">点击按钮，销毁Life组件</button>
    <Life v-if="flag"></Life>
    <router-link to="/about/hook">六、自定义hook的演示</router-link>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Life from '../components/life/Life.vue';
export default defineComponent({
  name: 'About',
  // 注册子组件
  components: {
    Life
  },
  setup() {
    let flag = ref(true);
    console.log(flag);
    function isShow() {
      flag.value = !flag.value;
    }
    return { flag, isShow };
  }
});
</script>
