# 项目 vue3_learn

## 一、创建 vue3 项目的两种方式

### 一、脚手架方式(vue ui 实质也是使用的是脚手架方式)，推荐使用 vue ui 界面化的方式

#### 1.1 只要全局安装了@vue/cli,vue ui 命令就生效了

#### 1.2 可视化创建 vue2 和 vue3 项目，都能实现，通用性更强，全是界面化操作

- 安装或者升级 npm install -g @vue/cli

- 保证 vue cli 版本在 4.5.0 以上;vue --version或者vue -V

- 创建项目 vue create my-project

### 二、vite 方式创建 vue3 项目

- [参考文档](https://blog.csdn.net/weixin_44647098/article/details/115519309?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0.pc_relevant_paycolumn_v3&spm=1001.2101.3001.4242.1&utm_relevant_index=3)
  #### create-react-app 的方式，已被抛弃
- create-vite-app 全局安装，然后 create-vite-app 项目名称
- 但是注意：全局安装 create-vite-app 时，会提醒这个插件已被抛弃：npm WARN deprecated create-vite-app@1.21.0: create-vite-app has been deprecated. run `npm init @vitejs/app` or `yarn create @vitejs/app` instead.

#### 运行 npm 命令的方式，npm @vitejs/app，推荐：每次安装，可以使用到最新的特性

- [npm init @vitejs/app 到底干了什么](https://blog.csdn.net/helloxiaoliang/article/details/117093912)
- 根据上面的文档，npm init @vitejs/app 等价于执行了 npx init @vitejs/create-app
- 参考 vite 官方文档[vite 官方文档](https://cn.vitejs.dev/guide/#index-html-and-project-root)
- 使用命令安装：npm create vite@latest my-vue-app -- --template vue，本机的 npm 版本是 7+，所以指定模板时，需要双短横线

##### npm 6.x

- npm create vite@latest my-vue-app --template vue
- 或者 npm init @vitejs/app my-vue-app --template vue
- 区别在于 npm create vite 和 npm init @vitejs/app,后面配置项目名称+vue 模板，方式是一样的

##### npm 7+, extra double-dash is needed:

- npm create vite@latest my-vue-app -- --template vue

##### yarn

- yarn create vite my-vue-app --template vue

##### pnpm

- pnpm create vite my-vue-app -- --template vue

## 二、vue2 和 vue3 数据响应式的实现原理的比较,实例：./setup_ref/Learn.vue

### vue2 的响应式

- 对象：是通过 defineProperty 对对象的属性值的读取和修改进行劫持（监视/拦截）
- 数组：通过重写数组的【更新数组的元素的一系列方法】来实现元素修改的劫持，例如：Array 的 unshift、push、pop、shift
- 等方法都需要重写
-
- 缺点：
- 1.添加和删除属性，页面不更新
- 2.通过下标更改元素值(arr[3]="更改元素值")或更新 length，页面不更新
-
-
- Object.defineProperty(data,"count",{
- get(){},
- set(){}
- })

### vue3 的数据响应式，Proxy 对属性的操作进行拦截，Reflect 对属性的操作进行处理

#### 一、通过 Proxy 代理：拦截 data 对任意属性的任意(13 种)操作，包括读取、更改、添加、删除属性等---属性操作拦截

- new Proxy(data,{
- get(target,prop){return Reflect.get(target,prop)}, // 拦截读取属性
- set(target,prop,value){return Reflect.set(target,prop,value)},// 拦截设置或添加新属性
- deleteProperty(target,prop){return Reflect.deleteProperty(target,prop)}, // 拦截删除属性
-
- })

#### 二、通过 Reflect 反射：动态地被代理对象(目标对象)进行特定的操作---属性操作处理

## 三、ref 和 reactive 的一些细节

- 1. ref 和 reactive 是 composition API 的两个响应式 API
- 2. ref 主要用基本数据类型的响应式，reactive 用于深度的响应式数据
- 3. ref 也可以处理对象和数组(在 setup 中要多加一个.value,而 reactive 方式不需要.value)，当 ref 中传入对象或数组时，系统内部会用 reactive 来处理它（打印 m3，能看到里面包含代理对象）
- 4. ref 内部是通过 getter/setter 来实现数据劫持的
- 5. proxy 内部通过 Proxy 对象拦截传入的属性对象的任何属性的任何操作（多达 13 种操作），通过反射对象 Reflect 来处理 Proxy 拦截的属性的操作
- 6. ref 在 setup 中处理时，const user=ref('dfaggfa');要添加一个 value(user.value 才能拿到值)，才能拿到值；在模板中处理它时，系统会自动加 value,不用带 value

## 四、setup 的一些注意问题

### setup 的执行时机

- setup 执行发生在 beforeCreate 和 created 之前，因此 setup 不能操作 data,methods,computed 等属性；只能操作 setup 固有的参数 props,attrs,slots,emit 这四个属性
- 在 vue3 中 setup 被当做 vue2 中生命周期钩子 beforeCreate 和 created 使用，准确的说是顶替了这两个钩子的使用

### setup 的参数(props,{attrs,slots,emit})

#### [setup 参数官方文档](https://www.javascriptc.com/vue3js/guide/composition-api-setup.html#%E4%B8%8A%E4%B8%8B%E6%96%87)

#### 响应式参数 props

- props 参数是响应式的，不能随便其进行解构，解构会丢失其响应式
- 强行解构它，用到另外一个对象，toRefs。toRefs 的作用是在不丢失响应式的前提下，分解响应式对象，这个对象的每一个属性都是一个 ref;我们知道 ref 也是响应式的-处理基本数据类型的响应式数据
- 强制解构举例：const user=reactive({name:\'\',age:\'\'}); const {name,age}=toRefs(user); name 和 age 就是两个 ref 了，在 setup 中操作数据，需要按照 ref 的用法，name.value,age.value 来进行读写操作

#### 有状态参数 attrs 和 slots

- 打印这两个对象，看到是 Prox 代理对象，它们是有状态的；会随着组件自身的更新而更新；因此要避免对它们解构，使用 attrs.x,slots.x 获取响应属性。context 上下文对象是一个普通的 js 对象，是非响应式的可以对其解构，解构成了{attrs,slots,emit}
- attrs 和 slots 是非响应式的，如果打算根据 attrs 和 slots 更改应用副作用，需要在生命周期钩子 onUpdated 中操作

#### 常用参数 emits，用来分发事件的

- 常用于子组件向父组件传值，类似 vue2 中的 this.$emit(父组件绑定的方法名称@emitxx,参数 val)

## Bug 修复

### Bug1:项目运行时，有警告

### 问题描述

- 项目运行后，有警告提示如下：
- warning Replace `↹` with `··` prettier/prettier
- 3:1 warning Replace `↹↹` with `····` prettier/prettier
- 4:1 warning Replace `↹` with `··` prettier/prettier
- 8:30 warning Replace `'vue-class-component'` with `"vue-class-component"` prettier/prettier
- 11:1 warning Replace `↹components:·{}` with `··components:·{},` prettier/prettier

### 解决

- 新建.prettierrc 文件
- 在对象中，统一生命 tabWidth:2; 即 tab 键为 2 个空格
