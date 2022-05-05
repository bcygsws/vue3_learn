<template>
  <h4>这是Son子组件</h4>
  <div>
    姓名：<span>{{ name }}</span
    ><br />
    mapGetters方式获得姓名：<span>{{ getName }}</span
    ><br />
    <br />年龄：<span>{{ age }}</span
    ><br />性别：<span>{{ sex }}</span>
    <br />
    <button @click="changeName">更改姓名</button>
  </div>
</template>
<script>
import { useStore, mapGetters, mapMutations, mapActions } from 'vuex';
import { defineComponent } from 'vue';
// 引入封装的useState文件
import { useState } from './hook/useState.js';
import { useActions } from './hook/useActions.js';
import { useGetters } from './hook/useGetters.js';
/**
 * @ vue3中使用映射模板，要进行一定的封装
 * 封装思路见文档：https://blog.csdn.net/qq_16139383/article/details/119935755?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_antiscanv2&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_antiscanv2&utm_relevant_index=1
 *
 *
 */
export default defineComponent({
  name: 'Son1',
  setup() {
    const storeState = useState('Son1', ['name', 'age', 'sex']);
    const storeGetters = useGetters('Son1', ['getName']);
    const storeActions = useActions('Son1', ['setName']);
    const changeName = () => {
      storeActions.setName('李四');
    };
    return {
      ...storeState, // 短路运算符，解构对象，方便在模板中使用，且解构出来的属性响应式没有丢失
      ...storeGetters,
      ...storeActions, // 'Son1'是moduleName
      changeName
    };
  }
});
</script>
