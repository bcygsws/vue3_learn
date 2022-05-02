import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Learn from '../components/setup_ref/Learn.vue';
import Update from '../components/update/Update.vue';
import Fat from '../components/setup/Fat.vue';
// 计算属性和监听
import Computed from '../components/computed/Computed.vue';
// 自定义hook
import DefineHook from '../components/hook/DefineHook.vue';

import FatLife from '../components/life/FatLife.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/learn',
        component: Learn
      },
      {
        path: '/home/update',
        component: Update
      },
      {
        path: '/home/setup',
        component: Fat
      },
      {
        path: '/home/computed',
        component: Computed
      }
    ]
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
      children:[
        {
          path:"/about/define_hook",
          component:DefineHook
        },
      {
        path:"/about/fat_life",
        component: FatLife
      }
    ]}
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
