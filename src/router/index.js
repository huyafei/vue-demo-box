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
        path: "pdf",
        name: "PDF",
        meta: {
          title: "pdf导出",
          breadcrumb: true
        },
        component: () =>
          import(/* webpackChunkName: "Demo" */ "../views/PDF/pdf.vue")
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
      //商品sku
      {
        path: "sku",
        name: "Sku",
        meta: {
          title: "商品sku",
          breadcrumb: true
        },
        component: () =>
          import(/* webpackChunkName: "org" */ "../views/Sku/Sku.vue")
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
      },
      //d3
      {
        path: "d3-demo",
        name: "D3Demo",
        meta: {
          title: "d3",
          breadcrumb: true
        },
        component: () =>
          import(/* webpackChunkName: "Demo" */ "../views/D3/d3-demo.vue")
      },
      //拖拽
      {
        path: "draggable",
        name: "Draggable",
        meta: {
          title: "拖拽",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "Demo" */ "../views/Draggable/Draggable.vue"
          )
      },
      //抽奖
      {
        path: "prize",
        name: "Prize",
        meta: {
          title: "抽奖",
          breadcrumb: true
        },
        component: () =>
          import(/* webpackChunkName: "Demo" */ "../views/Prize/Prize.vue")
      },
      //微信支付宝支付
      {
        path: "Pay",
        name: "Pay",
        meta: {
          title: "支付",
          breadcrumb: true
        },
        component: () =>
          import(/* webpackChunkName: "Demo" */ "../views/Pay/Pay.vue")
      },
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
