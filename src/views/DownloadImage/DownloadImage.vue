<template>
  <div class="app-mian">
    <div class="app-container">
      <h2>下载图片</h2>
      <img
        src="https://qiniu.easyapi.com/2020/01/14/1578987781804"
        class="avatar"
        style="width:120px;height: 120px"
      />
      <a
        style="margin-left: 20px"
        @click="
          downloadImage('https://qiniu.easyapi.com/2020/01/14/1578987781804')
        "
        >下载二维码</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "DownloadImage",
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
  mounted() {},
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
    /*
     * 点击按钮下载图片
     * param {String} imgsrc 图片地址
     * param {String} name 名称
     * */
    downloadImage(imgsrc, name) {
      let image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function() {
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
        let a = document.createElement("a"); // 生成一个a元素
        let event = new MouseEvent("click"); // 创建一个单击事件
        a.download = name || new Date().getTime(); // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
      };
      image.src = imgsrc;
    }
  }
};
</script>
<style scoped></style>
