"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("../views/Home.vue");
var Learn_vue_1 = require("@/components/setup_ref/Learn.vue");
var RefImpl_vue_1 = require("@/components/setup_ref/RefImpl.vue");
var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home_vue_1["default"],
        children: [
            {
                component: Learn_vue_1["default"],
                path: '/home/learn',
                children: [{
                        path: '/home/learn/ref_impl',
                        component: RefImpl_vue_1["default"]
                    }]
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return Promise.resolve().then(function () { return require(/* webpackChunkName: "about" */ '../views/About.vue'); });
        }
    }
];
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHashHistory(),
    routes: routes
});
exports["default"] = router;
