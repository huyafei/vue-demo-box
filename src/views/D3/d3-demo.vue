<template>
  <div class="app-mian">
    <div class="app-container ">
      <D3Demo1></D3Demo1>
      <D3Demo2></D3Demo2>
      <D3Demo3></D3Demo3>
    </div>
  </div>
</template>
<script>
import D3Demo1 from "./components/d3-demo1";
import D3Demo2 from "./components/d3-demo2";
import D3Demo3 from "./components/d3-demo3";
export default {
  name: "D3Demo",
  components: { D3Demo1, D3Demo2, D3Demo3 },
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>
<style scoped></style>
