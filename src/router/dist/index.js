"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("../views/Home.vue");
var Learn_vue_1 = require("../components/setup_ref/Learn.vue");
var Update_vue_1 = require("../components/update/Update.vue");
var Fat_vue_1 = require("../components/setup/Fat.vue");
// 计算属性和监听
var Computed_vue_1 = require("../components/computed/Computed.vue");
// 自定义hook
var DefineHook_vue_1 = require("../components/hook/DefineHook.vue");
var FatLife_vue_1 = require("../components/life/FatLife.vue");
var Base_vue_1 = require("../components/to_refs/Base.vue");
var VersionReactive_vue_1 = require("../components/reactive/VersionReactive.vue");
var ShallowReactive_vue_1 = require("../components/shallow_reactive/ShallowReactive.vue");
// 只读和浅只读
var ReadOnlyProperty_vue_1 = require("../components/readonly/ReadOnlyProperty.vue");
var ToAndMarkRaw_vue_1 = require("../components/raw/ToAndMarkRaw.vue");
var ToRef_vue_1 = require("../components/to_ref/ToRef.vue");
var CustomRef_vue_1 = require("../components/custom_ref/CustomRef.vue");
var Sus_vue_1 = require("../components/suspense/Sus.vue");
var Father_vue_1 = require("../components/v_model/Father.vue");
var ProInj_vue_1 = require("../components/provide_inject/ProInj.vue");
var MyFat_vue_1 = require("../components/refs_comu/MyFat.vue");
var VuexFat_vue_1 = require("../components/vuex/VuexFat.vue");
var AttrsFat_vue_1 = require("../components/attrs/AttrsFat.vue");
var Transition_vue_1 = require("../components/transition/Transition.vue");
var DefineClass_vue_1 = require("../components/transition/DefineClass.vue");
var TransitionLife_vue_1 = require("../components/transition/TransitionLife.vue");
var SomeWay_vue_1 = require("../components/transition/SomeWay.vue");
var UsingGSAP_vue_1 = require("../components/transition/UsingGSAP.vue");
var UsingAnimate_vue_1 = require("../components/transition/UsingAnimate.vue");
var TransitionGroup_vue_1 = require("../components/transition/TransitionGroup.vue");
var RandomNum_vue_1 = require("../components/transition/RandomNum.vue");
var GSAPWatch_vue_1 = require("../components/transition/GSAPWatch.vue");
var Page_vue_1 = require("../components/transition/cross-component-animation/Page.vue");
var Page1_vue_1 = require("../components/transition/cross-component-animation/Page1.vue");
var Page2_vue_1 = require("../components/transition/cross-component-animation/Page2.vue");
var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home_vue_1["default"],
        children: [
            {
                path: '/home/learn',
                component: Learn_vue_1["default"]
            },
            {
                path: '/home/update',
                component: Update_vue_1["default"]
            },
            {
                path: '/home/setup',
                component: Fat_vue_1["default"]
            },
            {
                path: '/home/computed',
                component: Computed_vue_1["default"]
            },
            {
                path: '/home/version_reactive',
                component: VersionReactive_vue_1["default"]
            },
            {
                path: '/home/shallow_reactive',
                component: ShallowReactive_vue_1["default"]
            },
            {
                path: '/home/readonly',
                component: ReadOnlyProperty_vue_1["default"]
            },
            {
                path: '/home/raw',
                component: ToAndMarkRaw_vue_1["default"]
            },
            {
                path: '/home/to_ref',
                component: ToRef_vue_1["default"]
            },
            {
                path: '/home/custom_ref',
                component: CustomRef_vue_1["default"]
            },
            {
                path: '/home/provide_inject',
                component: ProInj_vue_1["default"]
            },
            {
                path: '/home/suspense',
                component: Sus_vue_1["default"]
            },
            {
                path: '/home/v_model',
                component: Father_vue_1["default"]
            },
            {
                path: '/home/refs_comu',
                component: MyFat_vue_1["default"]
            },
            {
                path: '/home/vuex',
                component: VuexFat_vue_1["default"]
            },
            {
                path: '/home/attrs',
                component: AttrsFat_vue_1["default"]
            },
            {
                path: '/home/transition',
                component: SomeWay_vue_1["default"],
                children: [
                    {
                        path: '/home/transition/tr_name',
                        component: Transition_vue_1["default"]
                    },
                    {
                        path: '/home/transition/define_class',
                        component: DefineClass_vue_1["default"]
                    },
                    {
                        path: '/home/transition/life',
                        component: TransitionLife_vue_1["default"]
                    },
                    {
                        path: '/home/transition/use_gsap',
                        component: UsingGSAP_vue_1["default"]
                    },
                    {
                        path: '/home/transition/use_animate',
                        component: UsingAnimate_vue_1["default"]
                    },
                    {
                        path: '/home/transition/tr_group',
                        component: TransitionGroup_vue_1["default"]
                    },
                    {
                        path: '/home/transition/random_num',
                        component: RandomNum_vue_1["default"]
                    },
                    {
                        path: '/home/transition/gsap_watch',
                        component: GSAPWatch_vue_1["default"]
                    },
                    {
                        path: "/home/transition/cross_component_animation",
                        component: Page_vue_1["default"],
                        children: [
                            {
                                path: "/home/transition/cross_component_animation/page1",
                                name: 'Page1',
                                component: Page1_vue_1["default"]
                            },
                            {
                                path: "/home/transition/cross_component_animation/page2",
                                name: 'Page2',
                                component: Page2_vue_1["default"]
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: '/about',
        component: function () {
            return Promise.resolve().then(function () { return require(/* webpackChunkName: "about" */ '../views/About.vue'); });
        },
        children: [
            {
                path: '/about/hook',
                component: DefineHook_vue_1["default"]
            },
            {
                path: '/about/fat_life',
                component: FatLife_vue_1["default"]
            },
            {
                path: '/about/to_refs',
                component: Base_vue_1["default"]
            }
        ]
    }
];
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHashHistory(),
    routes: routes,
    /**
     *
     * 1.全局配置激活的路由的class,覆盖默认名称：router-link-active，使用linkActiveClass
     * 2.全局配置精准匹配的路由的class,覆盖默认名称：router-link-exact-active，使用linkExactActiveClass
     *
     * 一般选择覆盖router-link-exact-active这个类样式，覆盖linkActiveClass，并没有在router-link标签中显示
     */
    // linkActiveClass:'_active',
    // 通常我们选择覆盖linkExactActiveClass
    linkExactActiveClass: 'exact_active'
});
exports["default"] = router;
