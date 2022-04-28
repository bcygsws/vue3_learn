<template>
  <div class="use_axios">
    <p>{{ address }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
export default defineComponent({
  name: 'UseAxios',
  setup() {
    return axios.get('/data/address.json').then((res) => {
      return {
        address: res.data.address
      };
    });
  }
});
</script>
<style scoped lang="less">
.use_axios{
  background-color:pink;
}
</style>
