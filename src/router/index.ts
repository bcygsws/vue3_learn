import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Learn from '../components/setup_ref/Learn.vue';
import Update from '../components/update/Update.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path:'/home/learn',
        component:Learn
      },
      {
        path:'/home/update',
        component:Update
      }
    ]
  },
    {path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
