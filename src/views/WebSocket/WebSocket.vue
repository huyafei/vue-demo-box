<template>
  <div class="app-mian">
    <div class="app-container">
      <h2>websocket通信</h2>
      <div>
        <input v-model="mes" />
        <el-button @click="websocketsend(mes)">发送</el-button>
        <el-button @click="initWebSocket()">链接</el-button>
        <el-button @click="() => {websocket.close();}">断开链接</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WebSocket",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      mes: "",
      websocket: null
    };
  },
  //计算属性
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.initWebSocket();
  },
  //方法
  methods: {
    websocketSend() {},
    //WebSocket
    initWebSocket() {
      //初始化weosocket
      if ("WebSocket" in window) {
        const wsurl = "ws://123.207.136.134:9010/ajaxchattest";
        this.websocket = new WebSocket(wsurl);
        this.websocket.onopen = this.websocketonopen;
        this.websocket.onmessage = this.websocketonmessage;
        this.websocket.onerror = this.websocketonerror;
        this.websocket.onclose = this.websocketclose;

      } else {
        alert("您的浏览器不支持WebSocket");
      }
    },
    //连接建立之后执行send方法发送数据
    websocketonopen() {
      console.log("websocket连接成功");
      let data = "发送数据";
      this.websocketsend(data);
    },
    //数据发送
    websocketsend(data) {
      console.log("websocket数据发送");
      this.websocket.send(data);
    },
    //数据接收
    websocketonmessage(e) {
      console.log("websocket数据已接收");
      console.log("数据为："+e.data);
    },
    //连接建立失败重连
    websocketonerror() {
      console.log("websocket连接建立失败重连");
      this.initWebSocket();
    },
    //关闭
    websocketclose(e) {
      console.log("断开连接", e);
    }
  }
};
</script>
<style scoped></style>
