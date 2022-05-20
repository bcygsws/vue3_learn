<template>
  <to-refs></to-refs>
  <to-refs1></to-refs1>
  <using-ref></using-ref>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToRefs from './ToRefs.vue';
import ToRefs1 from './ToRefs1.vue';
import UsingRef from './UsingRef.vue';
export default defineComponent({
  name: 'Base',
  components: {
    ToRefs,
    ToRefs1,
    UsingRef
  }
});
</script>
<style scoped lang="less"></style>
