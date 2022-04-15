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
