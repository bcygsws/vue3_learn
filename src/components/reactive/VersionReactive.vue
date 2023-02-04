<template>
  <h3>文本：vue2和vue3响应式实现原理的对比</h3>
</template>
<script lang="ts">
/**
 *
 * @ 比较vue2和vue3的数据响应式的底层实现原理
 * reactive分支
 * 八、vue2和vue3数据响应式对比
 *
 *
 * vue2的响应式：
 * 详情参考文档：https://www.cnblogs.com/fundebug/p/responsive-vue.html
 * 一、vue2响应式实现原理步骤-术语
 * 1.1数据劫持/数据代理（侦测数据的变化）
 * 1.2收集依赖（视图中依赖哪些数据）
 * 1.3发布订阅模式（“数据”变化时，自动通知需要更新的视图部分，并进行更新）
 * 
 * 
 * 对象：是通过defineProperty对对象的属性值的读取和修改进行劫持（监视/拦截）
 * 数组：通过重写数组的【更新数组的元素的一系列方法】来实现元素修改的劫持，例如：Array的unshift、push、pop、shift
 * 等方法都需要重写
 *
 * 缺点：
 * 1.对象中：添加和删除属性，页面不更新
 * 2.数组中：通过下标更改元素值(arr[3]="更改元素值")或更新length，页面不更新
 *
 *
 * Object.defineProperty(data,"count",{
 *    get(){},
 *    set(){}
 * })
 *
 * 
 * vue3的数据响应式
 * 通过Proxy代理：拦截data对任意属性的任意(13种)操作，包括读取、更改、添加、删除属性等---属性操作拦截
 * new Proxy(data,{
 *    get(target,prop){
 *        return Reflect.get(target,prop)
 *        },  // 拦截读取属性
 *    set(target,prop,value){// 更改已有属性的属性值或者添加新属性，set方法都会调用
 *        console.log('set方法调用了');
 *         return Reflect.set(target,prop,value)
 *        },// 拦截设置或添加新属性
 *    deleteProperty(target,prop){
 *      return Reflect.deleteProperty(target,prop)
 *         }, // 拦截删除属性
 *
 * })
 * 通过Reflect反射：动态地被代理对象(目标对象)进行特定的操作---属性操作处理
 *
 *
 *
 */
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VersionReactive'
});
</script>
