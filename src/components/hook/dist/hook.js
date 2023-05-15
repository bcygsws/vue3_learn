"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function getXAndY() {
    // x表示鼠标点击点的绝对横坐标，y表示鼠标点击点的绝对纵坐标
    // 保证x,y都是响应式的，如果设置成reactive({x:-1,y:-1}),不能随便解构，为了不丢失其响应式，需要使用toRefs来解构
    var x = vue_1.ref(-1);
    var y = vue_1.ref(-1);
    /**
     *
     * 参考文档：
     * https://blog.csdn.net/katherin_wanzi/article/details/118736288
     * offsetX= e.pageX-this.offsetLeft
     * 区分offsetX、clientX、pageX（坐标和clientX一样，但是受滚动条的影响）、screenX
     * https://www.jianshu.com/p/f4d086b5adb7
     *
     *
     */
    // 点击页面，获取坐标，至少需要页面加载完成，最早在mounted阶段
    var handleClick = function (event) {
        // console.log(event);
        x.value = event.pageX;
        y.value = event.pageY;
    };
    // 既要绑定，又要解绑；在同一场景下，必须将事件处理函数封装，以保证绑定事件和解绑事件是同一个事件处理函数
    vue_1.onMounted(function () {
        window.addEventListener('click', handleClick);
    });
    //组件崩溃了，卸载前，将给window对象的事件解绑
    vue_1.onBeforeUnmount(function () {
        window.removeEventListener('click', handleClick);
    });
    return {
        x: x, y: y
    };
}
exports["default"] = getXAndY;
