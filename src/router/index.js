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
      //下拉加载
      {
        path: "pull-down-list",
        name: "PullDownList",
        meta: {
          title: "下拉加载",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "Demo" */ "../views/PullDownList/PullDownList.vue"
          )
      },
      //文本溢出显示更多
      {
        path: "text-overflow",
        name: "TextOverflow",
        meta: {
          title: "文本溢出显示更多",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "Demo" */ "../views/TextOverflow/TextOverflow.vue"
          )
      },
      //下载图片
      {
        path: "download-image",
        name: "DownloadImage",
        meta: {
          title: "下载图片",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "Demo" */ "../views/DownloadImage/DownloadImage.vue"
          )
      },
      //websocket通信
      {
        path: "websocket",
        name: "WebSocket",
        meta: {
          title: "websocket通信",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "Demo" */ "../views/WebSocket/WebSocket.vue"
          )
      },
      //socket.io通信
      {
        path: "socket-io",
        name: "SocketIo",
        meta: {
          title: "socket.io通信",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "Demo" */ "../views/SocketIo/SocketIo.vue"
          )
      }
    ]
  },
  {
    path: "/other-demo",
    name: "OtherDemo",
    meta: {
      title: "OtherDemo",
      icon: "el-icon-user",
      breadcrumb: true
    },
    redirect: "/other-demo/tag",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../views/layout/index.vue"),
    children: [
      {
        path: "tag",
        name: "Tag",
        meta: {
          title: "语义化标签",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "OtherDemo" */ "../views/OtherDemo/tag/tag.vue"
          )
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
