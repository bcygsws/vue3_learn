import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
// 自定义hook
import DefineHook from '../components/hook/DefineHook.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
      children:[
        {
          path:'/about/hook',
          component:DefineHook
        }
      ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
