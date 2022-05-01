import { customRef, Ref } from 'vue';
// 关于防抖的封装见文档：https://blog.csdn.net/weixin_41246825/article/details/115206682
export default function useBounceRef<T>(value: T, delay = 200): Ref {
  // 定时器是number类型，在setTimeout第一个函数参数内部，清除定时器，timer=null;弱化它的类型约束，定义为any类型
  let timer: any;
  // 返回的是一个Ref类型
  // 闭包，保证上一次点击时的timer值还存在，然后在if(timer)分支清除了这个定时器
  return customRef((track, trigger) => {
    return {
      get() {
        // 告诉vue跟踪数据
        track();
        return value;
      },
      set(newVal: T) {
        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(() => {
          value = newVal;
          // 触发界面更新
          trigger();
          // 清空定时器
          timer = null;
        }, delay);
      }
    };
  });
}
