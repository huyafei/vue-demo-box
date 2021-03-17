<template>
  <div class="app-mian">
    <div class="app-container">
      <div>
        <el-button @click="exportPdf">导出pdf</el-button>
      </div>
      <div id="renderPdf">
        <div class="text">
          这是一段文字
        </div>
        <div class="img">
          <img src="../../assets/logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./jspdf.customfonts.min.js"></script>
<script src="./default_vfs.js"></script>
<script src="./source-han-sans-normal.js"></script>
<script>
import html2canvas from "html2canvas";
import JsPDF from "jspdf";
import {msyh} from "./fonts/msyh-normal.js";
export default {
  name: "PDF",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    async exportPdf() {
      let doc = new JsPDF();
      // 中文字体乱码处理
      doc.addFileToVFS("msyh-normal.ttf", msyh);
      doc.addFont("msyh-normal.ttf", "msyh", "normal");
      doc.setFont("msyh-normal");

      /**
       * 字体
       *
       * */
      //字体大小2
      //doc.setFontSize(18);
      //文字颜色2
      //doc.setTextColor(150);
      //字体样式3
      //doc.setFont("times");
      //doc.setFontType("italic");
      doc.text(20, 20, "这是一段文字 page");
      //旋转45度
      //doc.text(20, 80, '2: Welcome to hangge.com', 45);
      // （\r）默认自动换行
      //doc.text(20, 20, 'Welcome to hangge.com.\rWelcome to hangge.com.\rWelcome to hangge.com.');

      var imageData = await this.getImage();
      doc.addImage(imageData, "PNG", 50, 50);

      //增加一个新页面
      //doc.addPage();
      doc.save("Test.pdf");
    },
    getImage() {
      let el = document.querySelector(".img");
      return html2canvas(el).then(function(canvas) {
        return canvas.toDataURL("PNG", 1.0);
      });
    }
  }
};
</script>

<style scoped lang="scss">
#renderPdf {
  border: 1px solid #ddd;
  width: 650px;
  height: 800px;
  position: relative;
}
</style>
