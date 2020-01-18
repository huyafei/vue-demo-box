import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/*
 *
 * hidden 显示
 * */

const routes = [
  {
    path: "/",
    redirect: "/demo",
    hidden: true
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      title: "登录"
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue")
  },
  {
    path: "/demo",
    redirect: "/demo/pull-down-list",
    name: "Demo",
    meta: {
      title: "DEMO",
      icon: "el-icon-user",
      breadcrumb: true
    },
    component: () =>
      import(/* webpackChunkName: "layout" */ "../views/layout/index.vue"),
    children: [
      {
        path: "pull-down-list",
        name: "PullDownList",
        meta: {
          title: "下拉加载",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "org" */ "../views/PullDownList/PullDownList.vue"
          )
      },
      {
        path: "text-overflow",
        name: "TextOverflow",
        meta: {
          title: "文本溢出显示更多",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "org" */ "../views/TextOverflow/TextOverflow.vue"
          )
      },
      {
        path: "download-image",
        name: "DownloadImage",
        meta: {
          title: "下载图片",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "org" */ "../views/DownloadImage/DownloadImage.vue"
          )
      },
      {
        path: "websocket",
        name: "WebSocket",
        meta: {
          title: "websocket通信",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "org" */ "../views/WebSocket/WebSocket.vue"
          )
      },
      {
        path: "socket-io",
        name: "SocketIo",
        meta: {
          title: "socket.io通信",
          breadcrumb: true
        },
        component: () =>
          import(/* webpackChunkName: "org" */ "../views/SocketIo/SocketIo.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
