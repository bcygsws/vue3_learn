<template>
  <h3>十三、演示customRef的使用</h3>
  <input type="text" name="" id="" v-model="keywords" />
  <p>{{ keywords }}</p>
</template>
<script lang="ts">
/**
 *
 * @ customRef
 *
 * 作用：创建一个自定义Ref,并对其依赖项【跟踪】和【界面触发】进行显式控制
 *
 * 语法：
 * customRef((track,trigger)=>{
 * return {
 *    get(){},
 *    set(){}
 * }})
 * 案例：在文本框中输入内容，界面中p标签内的内容，也会同步更新
 * 使用customRef可以做一个防抖效果，对p标签中的数据跟踪input中的数据以及界面触发，做一个防抖处理
 * 
 * 二、防抖-性能优化的方式之一
 * 场景：文本框中连续多次输入内容时，change方法多次执行，影响性能；设置一种方式，
 * 让在输入暂停或结束时再触发某个事件（触发间隔超过设定时间，才进行某种操作）
 * 
 * 
 *
 *
 *
 */
// import { defineComponent, ref, customRef } from 'vue';
import { defineComponent } from 'vue';
// import useBounceRef from "./useBounceRef.ts";// 错误的方式
import useBounceRef from "./useBounceRef";// 正确的方式，系统内部解析成了useBounceRef.js文件，省略后缀，自动依引入.js
// 自定义hook
// 传入的值除了字符串类型，可能是number数字；使用泛型来约束
// 抽离出去，封装成useBounceRef.ts

export default defineComponent({
  name: 'CustomRef',
  setup() {
    // 1.正常情况下的跟踪
    // const keywords = ref('abc');
    // 2.使用customRef显式控制
    const keywords = useBounceRef<string>('abc', 1500);
    return {
      keywords
    };
  }
});
</script>
