<template>
  <h5>这是Son子组件</h5>
  <!-- 父组件传递的数据 -->
  <p>{{ cmsg }}</p>
  <!-- 子组件中data返回的属性会和setup中返回的属性合并，成组件的属性，重名setup中的优先 -->
  <p>data中的count:{{ count }}</p>
  <button @click="handle">调用的是setup中的handle</button>
  <!-- setup中的info和data中的info重名，setup中优先使用 -->
  <p>使用哪里的info?{{ info }}</p>
  <!-- 点击按钮，分发事件emitxx -->
  <button @click="toFat">点击按钮，分发事件</button>
  <!-- 演示有状态数据，非响应式对象插槽，slots -->
  <slot name="slot1"></slot>
  <slot name="slot2"></slot>
</template>
<script lang="ts">
/**
 *
 * @ 参考文档：https://blog.csdn.net/weixin_43613849/article/details/120262509
 *
 * 一、setup的执行时机
 * 1.1 中返回的是一个对象myRef或方法，对象或方法可以在模板中直接使用；但是ref方式定义的对象，在setup内操作时，
 * 需要使用myRef.value
 * 1.2 setup在beforeCreate生命周期钩子之前执行,而且只执行一次
 * 1.3 setup在执行时，组件还没有创建出来(mounted阶段组件创建完成)，this还不能使用，就不能通过this调用
 * data/computed/props/methods
 *
 * 二、setup的返回值
 * 2.1 setup的返回值一般是一个对象，这个对象的属性和方法，可以提供给模板直接使用
 * 2.2 setup返回对象中的属性，会和data函数（vue3仍然可以写）中返回对象的属性合并成组件的属性
 * 2.3 setup返回对象中方法，会和methods中定义的方法合并成组件的方法
 * 2.4 如果键名或方法名重复，setup中的属性或方法优先
 * 2.5 但最好不要混合用，现在使用的是vue3版本
 *
 * 三、setup的参数
 * setup(props,context){
 *    return {};
 * }
 *
 * 特别注意：
 * 3.1 setup执行在beforeCreated之前，只能访问props,attrs,slots,emit;不能访问data,methods,computed
 * 3.2 context 上下文对象是一个普通的js对象，它是非响应式的，可以对它进行解构
 * 而其中的attrs和slots都是有状态对象，这就意味着，它们会随着组件本身的的更新而更新。因此，应该避免对它们解构，
 * 而是使用attrs.x slots.x引用属性
 * 3.3 attrs和slots都是非响应式的。然而，如果想应用这种副作用，需要在onUpdated钩子中处理
 *
 * 3.4 props是响应式的，因此，不能随便对其解构，解构会使其丧失响应式；如果非要解构，使用toRefs对象
 * const {name}=toRefs(props);
 * 然后，在setup中操作name.value就可以了，这是toRefs的用法，将一个对象分解，而不丧失其响应式，对象中的每个属性都是一个ref
 *
 * props：包含了props配置声明且传了的所有属性的对象
 * props.cmsg可以拿到传入的属性值
 *
 *
 *
 *
 *
 *
 */
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Son',
  data() {
    return {
      count: 10
      // 同名时，setup中的属性优先，data中的info会被setup中info取代
      // info: '曾经沧海难为水'
    };
  },
  methods: {
    // 同名的方法，setup中返回的方法优先使用
    // handle() {
    //   console.log('调用了methods的handle?');
    //   this.count += 1;
    // }
  },
  // 接收父组件Fat传递的数据
  props: {
    cmsg: {
      type: String,
      required: true
    }
  },
  // 解决分发给子组件的事件不能自动继承的警告,emits中分发事件名，是父组件绑定在子组件上@emitxx,emitxx写在子组件中，去掉警告
  emits: ['emitxx'],
  beforeCreate() {
    console.log('钩子beforeCreate执行了');
  },
  setup(props, context) {
    // 项目中，常用解构的方法书写，不直接写context
    // setup(props, {attrs,slots,emit}) {
    // 1.props包含了props配置声明且传入的所有属性对象
    console.log(props); // Proxy {cmsg:'what are you nong sha lei'}
    console.log(props.cmsg);
    // 2.context 参数也是是一个对象
    console.log(context);
    // 2.1 context.attrs是用于获取当前组件标签上的未在props上声明的属性对象
    // Proxy {msg2: '真香啊',__vInternal: 1}
    console.log(context.attrs);
    console.log(context.attrs.msg2);
    // 2.2 打印具名插槽
    // Proxy {_: 1,__vInternal: 1, slot1: f, slot2: f}
    console.log(context.slots);
    // console.log(context.slots.slot1);
    // 2.3 context.emit是用于分发事件的
    console.log(context.emit); // (event, ...args) => instance.emit(event, ...args)

    console.log('setup在beforeCrete之前执行了~');
    function handle() {
      console.log('调用了setup中的handle');
    }
    // 模拟的实际上是子组件向父组件传值，改变了父组件中的msg的值，而这个msg值又是响应式的，会影响当前子组件zhong
    function toFat() {
      // 分发事件
      // context.emit('父组件中@的事件名',传给父组件的参数)
      context.emit('emitxx', '***');
    }
    const info = ref('望极蓝桥，但暮云千里，几重山，几重水');
    return { info, handle, toFat };
  }
});
</script>
