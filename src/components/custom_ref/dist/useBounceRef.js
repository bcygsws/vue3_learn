"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
// 关于防抖的封装见文档：https://blog.csdn.net/weixin_41246825/article/details/115206682
// 相当于useBounceRef最终返回了一个Ref(value)
function useBounceRef(value, delay) {
    if (delay === void 0) { delay = 200; }
    // 定时器是number类型，在setTimeout第一个函数参数内部，清除定时器，timer=null;将其声明为联合类型
    var timer;
    // 返回的是一个Ref类型
    // 闭包，保证上一次点击时的timer值还存在，然后在if(timer)分支清除了这个定时器
    return vue_1.customRef(function (track, trigger) {
        return {
            get: function () {
                // 告诉vue跟踪数据
                track();
                return value;
            },
            set: function (newVal) {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function () {
                    // 进行的操作
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
exports["default"] = useBounceRef;
