<template>
  <div class="">
    <b>demo2 添加坐标轴</b>
    <div id="ds2"></div>
  </div>
</template>
<script>
export default {
  name: "D3Demo2",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {
    this.$nextTick(() => {
      this.initD3();
    });
  },
  methods: {
    initD3() {
      let _that = this;
      let d3 = _that.$d3;
      //画布大小
      var width = 300;
      var height = 300;
      //数据（表示矩形的宽度）
      var dataset = [2.5, 2.1, 1.7, 1.3, 0.9];
      var rectHeight = 25; //每个矩形所占的像素高度(包括空白)
      console.log(d3);

      let el = d3.select(document.getElementById("ds2"));
      let svg = el.append("svg");
      svg.attr("width", width).attr("height", height);

      //定义 线性比例尺 scaleLinear() -----------------------------
      // var min = this.$d3.min(dataset);
      var scaleLinear = d3
        .scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, 300]);
      //--------------------------------------------
      //定义坐标轴组件 ---------------------------------
      //为坐标轴定义一个线性比例尺
      var xScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, 300]);
      var xAxis = d3.axisBottom(xScale).ticks(7); //指定刻度的数量
      //----------------------------
      svg
        .selectAll("rect") //选择svg内所有的矩形
        .data(dataset) //绑定数组
        .enter() //指定选择集的enter部分
        .append("rect") //添加足够数量的矩形元素
        .attr("x", 20) //矩形的左上角x，y
        .attr("y", function(d, i) {
          //d数据，i下标
          console.log(d, i, "矩形左上角坐标:(20," + i * rectHeight + ")");
          return i * rectHeight;
        })
        .attr("width", function(d) {
          return scaleLinear(d);
        })
        .attr("height", rectHeight - 2) //每个元素高度减2
        .attr("fill", "steelblue"); //给矩形元素设置颜色
      svg
        .append("g")
        .attr("transform", "translate(20,130)") //移动位置
        .call(xAxis);
    }
  }
};
</script>
<style scoped></style>
