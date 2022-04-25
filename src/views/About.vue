<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 点击按钮，销毁Life组件，观察组件销毁的钩子 -->
    <button @click="isShow">点击按钮，销毁Life组件</button>
    <Life v-if="flag"></Life>
    <DefineHook></DefineHook>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Life from '../components/life/Life.vue';
import DefineHook from '../components/hook/DefineHook.vue';
export default defineComponent({
  name: 'About',
  // 注册子组件
  components: {
    Life,
    DefineHook
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
