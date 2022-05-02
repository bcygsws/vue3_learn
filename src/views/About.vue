<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/fat_life">五、vue2和vue3生命周期钩子的对比</router-link>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'About',
});
</script>
