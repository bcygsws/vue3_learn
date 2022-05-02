<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 点击按钮，销毁Life组件，观察组件销毁的钩子 -->
    <button @click="isShow">点击按钮，销毁Life组件</button>
    <Life v-if="flag"></Life>
    <ToRefs></ToRefs>
    <ToRefs1></ToRefs1>
    <!-- ref的另外一个作用：获取标签元素对象 -->
    <UsingRef></UsingRef>
    <router-link to="/about/hook">六、自定义hook的演示</router-link>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Life from '../components/life/Life.vue';
import ToRefs from '../components/to_refs/ToRefs.vue';
import ToRefs1 from '../components/to_refs/ToRefs1.vue';
import UsingRef from '../components/to_refs/UsingRef.vue';

export default defineComponent({
  name: 'About',
  // 注册子组件
  components: {
    Life,
    ToRefs,
    ToRefs1,
    UsingRef
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
