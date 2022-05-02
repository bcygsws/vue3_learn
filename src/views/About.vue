<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ToRefs></ToRefs>
    <ToRefs1></ToRefs1>
    <!-- ref的另外一个作用：获取标签元素对象 -->
    <UsingRef></UsingRef>
    <br />
    <router-link to="/about/fat_life"
      >五、vue2和vue3生命周期钩子的对比</router-link
    >
    <router-link to="/about/hook">六、自定义hook的演示</router-link>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import ToRefs from '../components/to_refs/ToRefs.vue';
import ToRefs1 from '../components/to_refs/ToRefs1.vue';
import UsingRef from '../components/to_refs/UsingRef.vue';

export default defineComponent({
  name: 'About',
  // 注册子组件
  components: {
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
