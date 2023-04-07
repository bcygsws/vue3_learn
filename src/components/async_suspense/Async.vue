<!-- async_suspense分支：创建了一个异步组件，引入父组件Fat模板中 -->
<template>
  <div>{{ msg }}</div>
</template>
<script>
/**
 *
 *  Promise的使用
 * 参考文档：
 * https://blog.csdn.net/rjlmylover_zyw/article/details/122920303
 * 1.为解决回调地狱，提出的一种异步编程解决方案-Promise
 * 2.Promise是一种链式调用
 * pending到fulfilled表示 已成功
 * pending到rejected表示 已失败
 * 3.Promise还有两个重要方法：
 * 竞争函数race；执行先成功获得数据的请求
 * Promise.race([p1,p2,p3……]);
 * all函数：所有数据请求都成功了才执行
 * Promise.all([p1,p2,p3……]);
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
