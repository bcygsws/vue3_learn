<template>
  <h3>十一、toRaw和markRaw的使用</h3>
  <p>{{ state }}</p>
  <!-- toRaw的使用 -->
  <button @click="handleToRaw">toRaw,数据变化，页面不更新</button>
  <!-- markRaw的使用 -->
  <p>{{ state }}</p>
  <button @click="handleMarkRaw">markRaw,数据不能更改</button>
</template>
<script lang="ts">
interface IUser {
  name: string;
  age: number;
  cars: { red: string };
  likes?: string[];
}
import { defineComponent, reactive, toRaw, markRaw } from 'vue';
/**
 *
 * 1.toRaw 是一个还原方法，可以用于临时读取，但是对象不被代理/跟踪，数据可以改变，页面不能更新
 *
 * 2.markRaw 标记一个对象，永远不能转化为代理对象；返回对象本身
 *
 */
export default defineComponent({
  name: 'ToAndMarkRaw',
  setup() {
    const state = reactive<IUser>({
      name: '张衡',
      age: 19,
      cars: {
        red: '劳斯莱斯'
      }
    });
    // raw初始的，原始的
    // 1.toRaw是一个还原方法，对象只能读取，数据可以改变，但是页面不会更新
    const handleToRaw = () => {
      const user = toRaw(state);
      // toRaw(state)之后，state变化了，state对象数据确实改变了，但页面没有更新；打印user还原成了一个普通对象，普通对象
      // 是无法触发响应式的，这在ref和reactive的使用中验证过
      user.name += '==';
      console.log(user);
    };
    // 标记一个对象，永远不能成为代理对象
    const handleMarkRaw = () => {
      const likes = ['吃', '喝', '玩', '乐'];
      // 标记likes数组，永远不能成为代理对象了
      state.likes = markRaw(likes); // error: Property 'likes' does not exist on type '{ name: string; age: number; cars: { red: string; }; }'.
      if (state.likes) {
        state.likes[0] += '***';
        console.log(state);
        // 点击无数次按钮后，state.likes[0]="吃***"，不会再改变了
        console.log('分支执行了~');
      }
    };

    return {
      state,
      handleToRaw,
      handleMarkRaw
    };
  }
});
</script>
