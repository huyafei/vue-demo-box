<template>
  <div class="app-mian">
    <div class="app-container">
      <h2>socket.io通信</h2>
      <div>
        <el-button type="primary" @click="socketOpen">链接</el-button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "SocketIo",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  //计算属性
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  //sockets
  sockets: {
    connect: function(e) {
      // this.id = this.$socket.id;
      console.log("--socket--连接成功", e);
    },
    customEmit: function(data) {
      console.log("--socket--data", data);
    },
    // MessageAppSubscribe(res) {
    // 	console.log('--socket--', res);
    // },
    connect_error(err) {
      console.log("--socket--连接失败", err);
      //   //这里监听 链接失败的事件
      //   //链接失败 sccket会一直尝试去链接有些情况下 我们不需要一直尝试
      //   // 关闭请求
      //   // this.$socket.close();
      //   // 开启请求
      this.$socket.emit("connect", {
        authcode: "508C1ACEEE1142F88922B42ECC522FC5",
        ids: ["FBBFGW1912XXXX0000000002"]
      });
      //   // this.$socket.open();
    }
  },
  mounted() {
    // this.$socket.emit("login", {
    //   username: "username",
    //   password: "password"
    // });
    // //接收服务端的信息
    // this.sockets.subscribe("relogin", data => {
    //   console.log(data);
    // });
  },

  beforeUpdate() {},
  updated() {},
  //keep-alive 组件激活时调用
  activated() {},
  //keep-alive 组件停用时调用。
  deactivated() {},
  //销毁之前
  beforeDestroy() {},
  //销毁后
  destroyed() {},
  //方法
  methods: {
    socketOpen() {
      this.$socket.emit("connect", {
        authcode: "508C1ACEEE1142F88922B42ECC522FC5",
        ids: ["FBBFGW1912XXXX0000000002"]
      });
    }
  }
};
</script>
<style scoped></style>
