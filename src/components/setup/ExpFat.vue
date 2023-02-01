<template>
  <h3>体会expose语法糖-父组件ExpFat</h3>
  <!-- 在父组件中修改子组件中的count值 -->
  <button @click="changeCount">父组件中修改子组件ExpSon暴露的count对象</button>
  <exp-son ref="mySon"></exp-son>
</template>
<script lang="ts">
/**
 *
 * @ expose语法糖的演示
 * 文档：https://blog.csdn.net/LueLueLue77/article/details/124964058
 *
 *
 */
import { defineComponent, ref } from 'vue';
import ExpSon from './ExpSon.vue';
export default defineComponent({
  components: {
    ExpSon
  },
  // expose用于显式地有限制的暴露属性，父组件只能通过【模板引用】获得子组件暴露的那些属性
  setup(props) {
    const mySon = ref();
    console.log(mySon)
    const changeCount = () => {
      mySon.value.count += 1;
    };
    return { mySon, changeCount };
  }
});
</script>
