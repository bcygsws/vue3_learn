import { ref, onMounted, onBeforeUnmount } from 'vue';
export default function getXAndY() {
  // 保证x,y都是响应式的，如果设置成reactive({x:-1,y:-1}),不能随便解构，为了不丢失其响应式，需要使用toRefs来解构
  const x = ref(-1);
  const y = ref(-1);
  // 点击页面，获取坐标，至少需要页面加载完成，最早在mounted阶段
  const handleClick = (event: MouseEvent) => {
    // console.log(event);
    x.value = event.pageX;
    y.value = event.pageY;
  };
  // 既要绑定，又要解绑；在同一场景下，必须将事件处理函数封装，以保证绑定事件和解绑事件是同一个事件处理函数
  onMounted(() => {
    window.addEventListener('click', handleClick);
  });
  //组件崩溃了，卸载前，将给window对象的事件解绑
  onBeforeUnmount(() => {
    window.removeEventListener('click', handleClick);
  });
  return {
    x,
    y
  };
}
