<!-- async_suspense分支：创建了一个异步组件，引入父组件Fat模板中 -->
<template>
  <div>{{ msg }}</div>
</template>
<script>
  /**
   * 
   *  Promise的使用
   * 
   * 
    */
const getInfo = async () => {
  // 2000ms后，再处理promise中的resolve;用new Promise做了一个延时操作；外层再套一个defineAsyncComponent实现定义异步组件（AsyncFat.vue文件中）
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const info = {
    name: '蓉蓉',
    age: 18
  };
  return info;
};
export default {
  async setup() {
    const msg = await getInfo();
    console.log(msg);
    // 供模板使用
    return {
      msg
    };
  }
};

// import ErrorComponent from './ErrorComponent.vue';
// 定义局部异步组件，参考文档：https://blog.csdn.net/weixin_43365995/article/details/123386594
// export default {
//   components: {
//     AsyncButton: defineAsyncComponent({
//       // 加载默认演示为200ms
//       delay: 200,
//       timeout: 3000,
//       loader: () => import('./AsyncButton.vue'),
//       errorComponent: ErrorComponent,
//       onError(error, retry, fail, attempts) {
//         if (attempts <= 3) {
//           retry();
//         } else {
//           fail();
//         }
//       }
//     })
//   }
// };
</script>
