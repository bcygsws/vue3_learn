# vue3_learn

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 创建 vue3 项目的两种方式

### 一、脚手架方式(vue ui 实质也是使用的是脚手架方式)，推荐使用 vue ui 界面化的方式

#### 1.1 只要全局安装了@vue/cli,vue ui 命令就生效了

#### 1.2 可视化创建 vue2 和 vue3 项目，都能实现，通用性更强，全是界面化操作

- 安装或者升级 npm install -g @vue/cli

- 保证 vue cli 版本在 4.5.0 以上;vue --version

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

##### npm 7+, extra double-dash is needed:

- npm create vite@latest my-vue-app -- --template vue

##### yarn

- yarn create vite my-vue-app --template vue

##### pnpm

- pnpm create vite my-vue-app -- --template vue

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
