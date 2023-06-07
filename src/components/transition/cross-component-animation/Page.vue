<template>
  <div class="cross_container">
    <h3>9.gsap+路由守卫实现跨组件动画</h3>
    <div class="bar">
      <router-link to="/home/transition/cross_component_animation/page1"
        >Page1</router-link
      >
      <router-link to="/home/transition/cross_component_animation/page2"
        >Page2</router-link
      >
    </div>
    <router-view />
  </div>
</template>
<script></script>
<style lang="less" scoped>
.cross_container {
  .bar {
    width: 100%;
    height: 50px;
    background-color: pink;
    /* 该属性让.bar成为flex container */
    display: flex;
    > a {
      flex: 1;
      height: 50px;
      line-height: 50px;
      display: block;
      margin: 0 30px;
      text-decoration: none;
      color: #111;
      justify-content: space-between;
    }
    >a.exact_active{
      color:red;
    }
  }
}
</style>
