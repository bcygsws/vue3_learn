<template>
  <h3>体会expose语法糖-父组件ExpFat</h3>
  <!-- 父组件中渲染子组件ExpSon expose的count值 ，渲染结果是{ "count": 0 }-->
  <p>{{ mySon }}</p>
  <!-- mySon.count来拿count值会报错为：operties of undefined (reading 'count') -->
  <p>{{ count }}</p>
  <!-- 在父组件中修改子组件中的count值 -->
  <button @click="changeCount">父组件中修改子组件ExpSon暴露的count对象</button>
  <exp-son ref="mySon"></exp-son>
</template>
<script lang="ts">
/**
 *
 * @ expose语法糖的演示
 * 文档：https://blog.csdn.net/LueLueLue77/article/details/124964058
 *
 * expose实质上，实现子组件向父组件传值（父组件操作子组件，原本需要子组件使用emit来实现的，expose简化了这种通信方式 ）
 *
 *
 */
import {
  defineComponent,
  ref,
  toRefs,
  onMounted,
  computed,
  reactive
} from 'vue';
import ExpSon from './ExpSon.vue';
export default defineComponent({
  components: {
    ExpSon
  },
  // expose用于显式地有限制的暴露属性，父组件只能通过【模板引用】获得子组件暴露的那些属性
  setup(props) {
    const mySon = ref();
    console.log(mySon);
    // 弹出警告： toRefs() expects a reactive object but received a plain one.
    // console.log(toRefs(mySon.value));

    /**
     *
     * count直接放在setup中，由于setup在beforeCreate之前执行；mySon.value中还拿不到count值；
     * 解决：
     * 1.将count放在mounted钩子中
     * 2.将count值放在mounted中的钩子，模板中能够正常渲染了
     * 但是，changeCount更改mySon的值时，count并没有跟随这种变化
     * 3.为此，需要引入watch侦听,来侦听这种变化
     *
     *
     */
    // 使用watch监听count值的变化；onMounted钩子
    // onMounted(() => {
    //   count = ref(mySon.value.count);
    // });

    // 数据ct的格式为：{"count",1} ct.count会报错
    const ct = computed(() => {
      console.log('计算属性执行了');
      return mySon.value;// mySon.value.count在计算属性中也会报错
    });
    const changeCount = () => {
      console.log(mySon.value); // 点击按钮时，mounted阶段已经执行，mySon.value才由undefined变成对象，而且是一个Proxy代理对象
      mySon.value.count += 1;
    };
    return { mySon, changeCount, ct};
  }
});
</script>
