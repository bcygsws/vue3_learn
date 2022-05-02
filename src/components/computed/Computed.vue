<template>
  <h3>五、计算属性和监听演示组件Computed</h3>
  <form>
    <!-- fieldset用于给表单数据分组 -->
    <fieldset>
      <legend>姓名操作：</legend>
      姓氏：<input
        type="text"
        name="name"
        placeholder="请输入姓氏"
        id="name"
        v-model="user.firstName"
      /><br />
      名字：<input
        type="text"
        name="intr"
        placeholder="请输入名字"
        id="intr"
        v-model="user.lastName"
      /><br />
    </fieldset>
    <fieldset>
      <legend>计算属性和监视的演示：</legend>
      显示姓名：<input
        type="text"
        placeholder="显示姓名"
        v-model="fullName1"
      /><br />
      显示姓名：<input
        type="text"
        placeholder="显示姓名"
        v-model="fullName2"
      /><br />
      显示姓名：<input
        type="text"
        placeholder="显示姓名"
        v-model="fullName3"
      /><br />
      显示姓名：<input
        type="text"
        placeholder="显示姓名"
        v-model="fullName4"
      /><br />
      显示姓名：<input
        type="text"
        placeholder="显示姓名"
        v-model="fullName5"
      /><br />
    </fieldset>
  </form>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  watchEffect
} from 'vue';
export default defineComponent({
  name: 'Computed',
  setup() {
    // -字符按照"-横线"劈开，得到两个空字符组件的数组
    console.log('-'.split('-')); // ['','']
    const user = reactive({
      firstName: '东方',
      lastName: '不败'
    });
    // 只有getter的计算属性,一个回调；如果是getter+setter的计算属性，回调函数被{get(){},set(){}}取代
    const fullName1 = computed(() => {
      return user.firstName + '-' + user.lastName;
    });
    // 有getter和setter的计算属性
    const fullName2 = computed({
      get() {
        return user.firstName + '-' + user.lastName;
      },
      set(val: string) {
        let arr = val.split('-');
        console.log(val);
        user.firstName = arr[0];
        user.lastName = arr[1];
      }
    });
    // 使用watch监听时，fullname3得自己定义一下，字符串是基本类型fullName3定义为
    let fullName3 = ref('');
    // watch方式一、使用watch的两个特性来监听，如果数据层次很深，只监视外层的数据,此处监视user,user中有多个属性
    // 1.深度监听 deep:true; 默认值false
    // 2.初始化立即执行 immediate:true; 默认值为false
    watch(
      user,
      () => {
        fullName3.value = user.firstName + '-' + user.lastName;
      },
      {
        immediate: true, // 初始化时立即执行一次，设为true
        deep: true // 深度监听
      }
    );
    // 转换成watchEffect的形式,不用配置，默认会进行监视，而且只执行一次
    // watchEffect(()=>{
    //   fullName3.value=user.firstName+"-"+user.lastName;
    // });
    // watch方式二、监听一个数据，fullName4发生改变时，反过来影响firstName和lastName
    /**
     *
     * watch和watchEffect转换时，注意
     * watch时，watch内有两个参数
     * watch(要监视的变量fullName4或数组,(val){
     * // 带参数的回调，这里的val=fullName4.value,参数已经.value过了
     * })
     *
     * 转换成watchEffect()时，只有一个参数，这个参数是回调函数cb,回调函数cb不含参数，要监视的数据来源对象fullName4
     * 直接现在回调中
     * watchEffect(()=>{
     *   let arr=fullName4.value.split('-');// 注意使用的是fullName4
     *   user.firstName=arr[0];
     *   user.lastName=arr[1];
     *
     * })
     *
     */

    let fullName4 = ref('');
    // 测试时，fullName4的值，变化影响firstName和lastName
    // watch(fullName4, (val) => {
    //   let arr = val.split('-');
    //   user.firstName = arr[0];
    //   user.lastName = arr[1];
    // });
    // 上面用watchEffect进行等效，watchEffect不用配置监视对象，回调中使用哪些数据，就监视这些数据，默认执行一次，
    // 收集要监视的对象
    watchEffect(() => {
      let arr = fullName4.value.split('-');
      user.firstName = arr[0];
      user.lastName = arr[1];
    });
    let fullName5 = ref('');
    // watch方式三、监听多个数据
    // 1.监听多个数据，必须使用数组
    // 2.如果是ref对象，直接使用
    // 2.如果是reactive对象里的属性，要使用函数的形式()=>user.firstName
    watch([fullName5, () => user.firstName, () => user.lastName], (val) => {
      console.log(val);
    });
    return {
      user,
      fullName1,
      fullName2,
      fullName3,
      fullName4,
      fullName5
    };
  }
});
</script>
