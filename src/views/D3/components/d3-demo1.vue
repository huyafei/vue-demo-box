<template>
  <div class="">
    <b>demo1</b>
    <div id="ds1"></div>
  </div>
</template>
<script>
export default {
  name: "D3Demo1",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {
    //画布大小
    var width = 300;
    var height = 300;
    //画布周边的空白
    // var padding = { left: 30, right: 30, top: 20, bottom: 20 };
    let el = this.$d3.select(document.getElementById("ds1"));
    let svg = el.append("svg");
    svg.attr("width", width).attr("height", height);

    var dataset = [250, 210, 170, 130, 90]; //数据（表示矩形的宽度）
    var rectHeight = 25; //每个矩形所占的像素高度(包括空白)
    svg
      .selectAll("rect") //选择svg内所有的矩形
      .data(dataset) //绑定数组
      .enter() //指定选择集的enter部分
      .append("rect") //添加足够数量的矩形元素
      .attr("x", 20)
      .attr("y", function(d, i) {
        return i * rectHeight;
      })
      .attr("width", function(d) {
        return d;
      })
      .attr("height", rectHeight - 2) //每个元素高度减2
      .attr("fill", "steelblue"); //给矩形元素设置颜色
  },
  methods: {}
};
</script>
<style scoped></style>
