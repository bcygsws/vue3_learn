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
 * 案例：在文本框中输入内容，界面中p标签内的内容，也会同步更新
 * 使用customRef可以做一个防抖效果，对p标签中的数据跟踪input中的数据以及界面触发，做一个防抖处理
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
