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
 * expose实质上，实现子组件向父组件传值（父组件操作子组件，原本需要子组件使用emit来实现的，expose简化了这种通信方式 ）
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
    console.log(mySon);
    const changeCount = () => {
      console.log(mySon.value); // 点击按钮时，mounted阶段已经执行，mySon.value才由undefined变成对象，而且是一个Proxy代理对象
      mySon.value.count += 1;
    };
    return { mySon, changeCount };
  }
});
</script>
