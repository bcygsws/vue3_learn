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
import Base from '../components/to_refs/Base.vue';
import VersionReactive from '../components/reactive/VersionReactive.vue';
import ShallowReactive from '../components/shallow_reactive/ShallowReactive.vue';
// 只读和浅只读
import ReadOnlyProperty from '../components/readonly/ReadOnlyProperty.vue';
import ToAndMarkRaw from '../components/raw/ToAndMarkRaw.vue';
import ToRef from '../components/to_ref/ToRef.vue';
import CustomRef from '../components/custom_ref/CustomRef.vue';
import Sus from '../components/suspense/Sus.vue';
import Father from '../components/v_model/Father.vue';
import ProInj from '../components/provide_inject/ProInj.vue';
import MyFat from '../components/refs_comu/MyFat.vue';
import VuexFat from '../components/vuex/VuexFat.vue';
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
      },
      {
        path: '/home/version_reactive',
        component: VersionReactive
      },
      {
        path: '/home/shallow_reactive',
        component: ShallowReactive
      },
      {
        path: '/home/readonly',
        component: ReadOnlyProperty
      },
      {
        path: '/home/raw',
        component: ToAndMarkRaw
      },
      {
        path: '/home/to_ref',
        component: ToRef
      },
      {
        path: '/home/custom_ref',
        component: CustomRef
      },
      {
        path: '/home/provide_inject',
        component: ProInj
      },
      {
        path: '/home/suspense',
        component: Sus
      },
      {
        path: '/home/v_model',
        component: Father
      },
      {
        path: '/home/refs_comu',
        component: MyFat
      },
      {
        path: '/home/vuex',
        component: VuexFat
      }
    ]
  },
  {
    path: '/about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: '/about/hook',
        component: DefineHook
      },
      {
        path: '/about/fat_life',
        component: FatLife
      },
      {
        path: '/about/to_refs',
        component: Base
      }
    ]
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
