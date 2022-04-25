/**
 *
 * @ 发送一个get请求获取数据：
 * 数据没有加载完成，显示loading
 * 加载数据完成，获取data
 * 加载完成没有数据，报错误信息errorMsg
 *
 *
 */
import { ref } from 'vue';
import axios from 'axios';
// 应对res的不同类型，使用泛型来约束data
export default function urlRequests<T>(url: string) {
  // 数据加载完成前，动画，布尔类型，默认值为true
  const loading = ref(true);
  // data数据，数组或者对象
  const data = ref<T | null>(null);
  // 错误提示信息，字符串类型
  const errorMsg = ref('');
  // 向后台发起请求，此处用本地数据模拟，将假数据json文件放在public静态文件夹下，当项目启动时；index.html托管在
  // localhost:8080下了，访问的是本地的数据，不存在跨域的问题
  // 当使用index.html
  axios
    .get(url)
    .then((res) => {
      // axios是基于promise封装的，then后面是异步的过程，数据请求完成后，才会执行其中的两行代码
      loading.value = false;
      data.value = res.data;
    })
    .catch((error) => {
      // 异常捕获
      loading.value = false;
      errorMsg.value = error || '未知错误';
    });
  return {
    loading,
    data,
    errorMsg
  };
}
