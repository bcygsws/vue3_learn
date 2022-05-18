-
<template>
  <h3>九、浅监视或者浅劫持或者浅响应式</h3>
  <p>m1:{{ m1 }}</p>
  <p>m2:{{ m2 }}</p>
  <p>m3:{{ m3 }}</p>
  <p>m4:{{ m4 }}</p>
  <p>m5:{{ m5 }}</p>
  <button @click="changeData">更新数据</button>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  shallowReactive,
  shallowRef
} from 'vue';
export default defineComponent({
  name: 'ShallowReactive',
  setup() {
    const m1 = reactive({
      name: '张勇',
      age: 19,
      fallow: {
        cars: { red: '法拉利' }
      }
    });
    const m2 = shallowReactive({
      name: '张勇',
      age: 19,
      fallow: {
        cars: { red: '法拉利' }
      }
    });
    const m3 = ref({
      name: '张勇',
      age: 19,
      fallow: {
        cars: { red: '法拉利' }
      }
    });
    const m4 = shallowRef({
      name: '张勇',
      age: 19,
      fallow: {
        cars: { red: '法拉利' }
      }
    });
    // 只处理value的响应式(基本类型数据的)，传入的对象不会进行reactive处理
    const m5 = shallowRef(4);
    // 更新数据的方法changeData
    function changeData() {
      // 注意：这俩操作要单独验证，观看状态

      // m1：深度监视、深度响应式，深度劫持
      // m1.name += '==';
      // m1.fallow.cars.red += '1';
      // console.log(m1);

      // m2：浅监视、浅响应式、浅劫持。恰好是shallowReadonly的补集
      // m2.name += '==';
      m2.fallow.cars.red += '1';
      // m2仍然是一个Proxy对象，深层次的数据能够改变，但是深层次的数据改变不会触发页面更新
      console.log(m2);
      // 1.m3：ref传入对象，内部会按照reactive进行处理，等效于第一种情形了
      // 2.m3中 _value是一个代理对象Proxy
      // 3.m3深监视、深劫持、深度响应式
      // m3.value.name += '==';
      // m3.value.fallow.cars.red += '1';
      // console.log(m3); // m3里面的属性_shallow: false，表示是深监视，深劫持

      // m4:浅ref shallowRef
      // 打印m4中是一个Ref对象---不再是Proxy代理对象了,最外层属性和深层次属性的数据都能改变，但是不能触发页面更新
      // m4.value.name += '==';
      // 打印m4，m4中的_value是一个普通对象，不是像m3中的代理对象了；cars的red值确实变化了，但是没有触发页面更新
      // m4.value.fallow.cars.red += '1';
      // console.log(m4); // __v_isShallow: true,表示浅监视，浅Ref

      // m5:shallowRef只会处理value的响应式，不会进行对象的reactive处理
      // m5.value += 1;
    }
    return {
      m1,
      m2,
      m3,
      m4,
      changeData,
      m5
    };
  }
});
/**
 *
 * @ 浅劫持、浅响应式或浅监视
 *
 * 总结reactive和shallowReactive ref和shallowRef的使用场合
 * shallowReactive只处理数据对象最外层的响应式，浅响应式
 * shallowRef只处理value的响应式，传入对象不会进行默认的reactive处理(意思是：处理基本类型时，ref和shallowRef基本等效)
 * 1.基本数据类型的响应式，使用ref
 * 2.ref中传入了对象，系统内部会使用reactive来处理它
 * 3.一般情况下，用ref和reactive即可
 * 4.如果数据的结构比较深，需求是只处理最外层的属性，使用shallowReactive
 * 5.如果一个对象数据，后面会产生新的对象来替换，可以使用shallowRef
 *
 *
 *
 *
 */
</script>
