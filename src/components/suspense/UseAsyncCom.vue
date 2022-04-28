<template>
  <div class="use_dynamicImp">
  <p>{{msg}}</p>
  </div>
</template>

<script lang='ts'>
import { defineComponent} from 'vue'
export default defineComponent({
  name: 'UseAsyncCom',
  setup() {
  
    return {
     msg:"abc"
    }
  },
})

</script>
<style scoped lang='less'>
  .use_dynamicImp{
    background-color:hotpink;
  }
</style>