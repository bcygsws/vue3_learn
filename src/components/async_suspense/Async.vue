<!-- async_suspense分支：创建了一个异步组件，引入父组件Fat模板中 -->
<template>
  <div>{{ msg }}</div>
</template>
<script>
/**
 *
 *  一、Promise的使用
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
 * 特别注意：
 * 1.await + Promise对象时，必须获取resolve和reject返回的结果，才会执行后面的代码；
 * 2.如果是非Promise对象，把这个非Promise对象作为返回结果
 *
 * 二、回顾原生AJAX的创建过程：
 * https://blog.csdn.net/nilmao/article/details/123894943?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-123894943-blog-127348369.235%5Ev28%5Epc_relevant_recovery_v2&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-123894943-blog-127348369.235%5Ev28%5Epc_relevant_recovery_v2&utm_relevant_index=1
 * 2.1 创建ajax对象
 * const xhr=new XMLHttpRequest();
 * 2.2 设置请求方法和请求地址url
 * xhr.open(方式,url)
 *
 * 注意：如果要得到j响应体数据类型为json，需要手动设置请求类型为json;这一步写在xhr.open()语句之前
 *
 * 2.2.1 需要设置响应体为json
 * xhr.responseType="json";
 * 2.2.2 同时open中设置的请求方式仍然是get类型；xhr.open('get',url)
 *
 * 2.3 发送请求
 * 如果是post请求方式，需要在send发送请求之前设置 请求响应头
 * xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
 * xhr.setRequestHeader('name','atGuiGu');
 * xhr.send();
 * 同时，post请求方式时，send可能需要传参，示例：xhr.send('a=100&b=200&c=300');
 *
 * 2.4 监听服务端请求的返回状态
 * readyState值不同，表示ajax请求服务器处于不同阶段
 * 0 未初始化
 * 1 open方法调用完毕
 * 2 send方法调用完毕
 * 3 服务端返回部分请求数据
 * 4 服务端返回所有请求数据
 *
 * onreadystatechange=function(){
 *    if(xhr.readyState===4){
 *        if(xhr.status>=200 && xhr.status<300){
 *
 *  }
 *
 *  }
 * }
 *
 * 二、取消请求
 * btns[1].addEventListener('click',function(){
 *    xhr.abort();
 * })
 * 三、请求超时异常
 * 3.1 xhr对象创建以后，设置请求超时时间，假设设为2000ms
 * xhr.timeout=2000;
 * 超时回调
 * xhr.ontimeout=function(){
 * // 超时逻辑
 * }
 *
 * 网络异常回调
 * xhr.onerror=function(){
 * // 网络异常逻辑代码
 * }
 *
 *
 */
const getInfo = async () => {
  /**
   *
   * 参考文档：
   * https://blog.csdn.net/rjlmylover_zyw/article/details/122920303
   *
   * await和Promise配合使用，效果是：
   * await new Promise()返回一个resolve()或者reject()函数，必须等待resolve和reject执行完毕后，才会跟着执行当前语句后面的代码
   *
   */
  // 2000ms后，再处理promise中的resolve;用new Promise做了一个延时操作；外层再套一个defineAsyncComponent实现定义异步组件（AsyncFat.vue文件中）
  // （resolve,reject）其中resolve和reject参数都是函数
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(1111);
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
