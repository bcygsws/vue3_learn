<template>
  <h3>十五、瞬移组件</h3>
  <button @click="openDia = true">点击按钮打开对话框</button>
  <!-- to还可以接收id选择器，比如：to="#wrapper" -->
  <Teleport to="body">
    <!-- 加上标签以后，这个组件ModalButton就干净地 瞬移 到了body中 -->
    <div class="modal" v-if="openDia">
      <div class="box">
        <p>这是一个对话框</p>
        <button @click="openDia = false">关闭对话框</button>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts">
/**
 *
 * @ 注意：如果Teleport 瞬移标签中to="body",
 * 该组件ModalButton要成为App的子组件时，按钮开始位于App的第一行，便于观察效果
 *
 *
 */
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'ModalButton',
  setup() {
    const openDia = ref(false);
    return {
      openDia
    };
  }
});
</script>
<style scoped lang="less">
.modal {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  .box {
    /*注意：flex布局中属性不用加单引号，多加了单引号，看不到效果  */
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 400px;
    background-color: #fff;
    align-items: center;
  }
}
</style>
