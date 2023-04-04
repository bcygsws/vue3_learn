/** * @description: 2.start分支 * @event: 2023/1/15 * @return {*} */
<template>
  <h3>二、vue3响应式两个重要对象-ref和reactive</h3>
  <!-- <h4>vue2方式</h4>
  <button @click="handlePlus">+1</button>
  <p>{{ count2 }}</p> -->
  <h4>vue3方式</h4>
  <button @click="handlePlus">+1</button>
  <p>{{ count3 }}</p>
  <h5>姓名：{{ user.name }}</h5>
  <h5>年龄：{{ user.age }}</h5>
  <h5>配偶：{{ user.wife }}</h5>
  <!-- 点击按钮，改变引用类型的数据 -->
  <button @click="handleObjChange">改变引用类型的响应式数据user</button>
</template>
<script>
/**
 *
 * @ 技巧：为解决prettier和eslint之间的冲突，在.prettierrc文件中添加trailingComma:'none',去掉末尾那个无意义的逗号
 *
 * 需求:点击按钮实现，count2和count3数值的增加
 * 分别使用vue2和vue3的方式实现
 * 一、vue2 data +methods
 * 二、vue3 setup,配合【响应式API】ref和reactive
 *
 * 注意：setup是composition API的入口函数
 * 三、setup的用法：
 * 结合文档：https://cn.vuejs.org/api/composition-api-setup.html#basic-usage
 * 基本使用
 * 可以使用响应式API来声明响应式状态，setup函数的返回值可以作为模板和组件实例（this）调用（在setup内部打印this值为undefined，但是
 * 在其他选项API中，比如mounted中调用this.count;组件实例就是this）
 *
 * 在setup中声明了count3和事件处理函数handlePlus，但是点击按钮，没有反应
 * 原因：此时count3还不是响应式数据
 * 何为响应式数据，数据更新了，这种更新也立即作用于页面（页面也同步更新）
 * 解决：引入ref,创建有一个响应式的数据对象count3,count3.value拿到值
 * let count=ref(0);  count是一个对象，count.value初始值为0
 *
 * ref用于定义一个基本数据类型的响应式数据
 * 1.ref的作用是定义一个响应式数据，返回一个响应式对象，如果要对其值进行操作，使用count.value
 * let count=ref(0);在setup中count是一个对象，count.value可以拿到响应式对象count的初始值0
 *
 * 2.但是，在html模板中，直接使用count拿到数值，并不使用count.value,而是直接count;在模板中使用返回值时，vue3会自动浅层解包，
 * 因此在模板中不需要书写.value
 *
 * 接上面，ref定义一个基本类型的响应式数据，那么引用类型的响应式数据，如何实现呢？
 * 使用reactive
 *
 * reactive 接收一个普通对象，返回一个响应式的代理器对象
 * 其内部是通过ES6的proxy实现的，通过【代理对象】 操作【源对象或者目标对象或者被代理对象】内部的数据是响应式的
 *
 */
// defineComponent({})可以不写，仍然如vue2中写成export default{}也是可以的
// import { defineComponent, ref, reactive } from 'vue';
// export default defineComponent({
//   name: 'Learn',
//   // vue2方式
//   // data() {
//   //   return { count2: 0 };
//   // },
//   // // vue2方式
//   // methods: {
//   //   handlePlus() {
//   //     this.count2++;
//   //   }
//   // }
//   setup() {
//     // 需求：显示基本数据类型count3，点击按钮可以更新
//     // count3的类型是Ref
//     let count3 = ref(0);
//     console.log(count3);
//     // 需求：显示用户的基本信息（包含多个基本数据类型，使用对象），点击按钮可以更新用户信息
//     /**
//      *
//      * user 是返回的代理对象
//      * obj 传入的对象是被代理的对象
//      *
//      *
//      */
//     const obj = {
//       name: '张三',
//       age: 25,
//       wife: {
//         name: '小甜甜',
//         age: 20,
//         cars: ['奔驰', '宝马', '奥迪']
//       }
//     };
//     // 1.直接在handleObjChange中对目标对象进行更改，是不能更新页面的；只有给目标对象进行代理
//     // reactive(Obj)后，返回的对象，才能对目标对象里的数据进行响应式操作
//     // 2.user对象的类型是Proxy,代理对象类型
//     // 3.user是深层次的响应式，不论这个目标对象的层级有多深
//     let user = reactive(obj);
//     console.log(user);
//     function handlePlus() {
//       count3.value++;
//       // 测试，数据count3是否变化了，count3变化，但是没有同步更新页面；react中的setState更改数据，立即更新页面
//       console.log(count3.value);
//     }
//     function handleObjChange() {
//       user.age++;
//       console.log(user.age);
//       user.wife.name += '++';
//       user.wife.cars[0] = '玛莎拉蒂';
//     }
//     return {
//       count3,
//       handlePlus,
//       user,
//       handleObjChange
//     };
//   }
// });
import { ref, reactive } from 'vue';
export default {
  name: 'Learn',
  // vue2方式
  // data() {
  //   return { count2: 0 };
  // },
  // // vue2方式
  // methods: {
  //   handlePlus() {
  //     this.count2++;
  //   }
  // }
  setup() {
    // 需求：显示基本数据类型count3，点击按钮可以更新
    // count3的类型是Ref，自动浅层解包；基本数据类型常用ref这个响应式API
    const count3 = ref(0);
    console.log(count3);
    // 需求：显示用户的基本信息（包含多个基本数据类型，使用对象），点击按钮可以更新用户信息
    /**
     *
     * user 是返回的代理对象
     * obj 传入的对象是被代理的对象
     *
     *
     */
    const obj = {
      name: '张三',
      age: 25,
      wife: {
        name: '小甜甜',
        age: 20,
        cars: ['奔驰', '宝马', '奥迪']
      }
    };
    // 1.直接在handleObjChange中对目标对象进行更改，是不能更新页面的；只有给目标对象进行代理
    // reactive(Obj)后，返回的对象，才能对目标对象里的数据进行响应式操作
    // 2.user对象的类型是Proxy,代理对象类型
    // 3.user是深层次的响应式，不论这个目标对象的层级有多深
    let user = reactive(obj);
    console.log(user);
    function handlePlus() {
      count3.value++;
      // 测试，数据count3是否变化了，count3变化，但是没有同步更新页面；react中的setState更改数据，立即更新页面
      console.log(count3.value);
    }
    function handleObjChange() {
      // user最外层属性
      // user.age++;
      // console.log(user.age);
      // user内层属性
      user.wife.name += '++';
      user.wife.cars[0] += '&&';
    }
    return {
      count3,
      user,
      handlePlus,
      handleObjChange
    };
  },
  // 选项式API钩子mounted,setup中响应式数据count3，可以在其他选项式API中被调用；
  mounted() {
    console.log(this.count3);
    // RefImpl{__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: 0, _value: 0}
  }
};
</script>
