import {
  ref,
  onMounted,
  onBeforeUnmount
} from 'vue';
export default function getXAndY(){
  const x = ref(-1);
    const y = ref(-1);
    // 点击页面，获取坐标，至少需要页面加载完成，最早在mounted阶段
    const handleClick = (event: MouseEvent) => {
      // console.log(event);
      x.value = event.pageX;
      y.value = event.pageY;
    };
    onMounted(() => {
      window.addEventListener('click', handleClick);
    });
    //组件崩溃了，卸载前，将给window对象的事件解绑
    onBeforeUnmount(() => {
      window.removeEventListener('click', handleClick);
    });
    return {
      x,y
    }
}