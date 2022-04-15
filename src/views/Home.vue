<template>
  <div class="home">
    <h3>这是Home组件</h3>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class Home extends Vue {}
</script>
