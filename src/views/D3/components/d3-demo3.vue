<template>
  <div class="">
    <b>demo3 完整柱形图</b>
    <div id="ds3"></div>
  </div>
</template>
<script>
export default {
  name: "D3Demo3",
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
      var width = 400;
      var height = 400;
      //画布周边的空白
      var padding = { left: 30, right: 30, top: 20, bottom: 20 };
      //数据（表示矩形的宽度）
      var dataset = [10, 20, 30, 40, 33, 24, 12, 5];
      console.log(d3);
      //定义画布
      let el = d3.select(document.getElementById("ds3"));
      let svg = el.append("svg");
      svg.attr("width", width).attr("height", height);
      /*
       * x 轴使用序数比例尺，y 轴使用线性比例尺。要注意两个比例尺值域的范围
       * */
      //X轴的比例尺
      var xScale = d3
        .scaleOrdinal(d3.range(dataset.length));
        // .domain(d3.range(dataset.length))
        // .rangeRoundBands([0, width - padding.left - padding.right]);
      //y轴的比例尺
      var yScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([height - padding.top - padding.bottom, 0]);
      /*
       * 定义坐标轴x,y
       * */
      var xAxis = d3.axisBottom(xScale);
      var yAxis = d3.axisLeft(yScale);

      //矩形之间的空白
      var rectPadding = 4;
      svg
        .selectAll("rect") //选择svg内所有的矩形
        .data(dataset) //绑定数组
        .enter() //指定选择集的enter部分
        .append("rect") //添加足够数量的矩形元素
        .attr("x", function(d, i) {
          return xScale(i) + rectPadding / 2;
        }) //矩形的左上角x，y
        .attr("y", function(d) {
          return yScale(d);
        })
        .attr("width", xScale.bandwidth() - rectPadding)
        .attr("height", function(d) {
          return height - padding.top - padding.bottom - yScale(d);
        });
      //添加文字元素
      svg
        .selectAll(".MyText")
        .data(dataset)
        .enter()
        .append("text")
        .attr("class", "MyText")
        .attr(
          "transform",
          "translate(" + padding.left + "," + padding.top + ")"
        )
        .attr("x", function(d, i) {
          return xScale(i) + rectPadding / 2;
        })
        .attr("y", function(d) {
          return yScale(d);
        })
        .attr("dx", function() {
          return (xScale.bandwidth() - rectPadding) / 2;
        })
        .attr("dy", function() {
          return 20;
        })
        .text(function(d) {
          return d;
        });
      //添加x轴
      svg
        .append("g")
        .attr("class", "axis")
        .attr(
          "transform",
          "translate(" + padding.left + "," + (height - padding.bottom) + ")"
        )
        .call(xAxis);

      //添加y轴
      svg
        .append("g")
        .attr("class", "axis")
        .attr(
          "transform",
          "translate(" + padding.left + "," + padding.top + ")"
        )
        .call(yAxis);
    }
  }
};
</script>
<style scoped></style>
