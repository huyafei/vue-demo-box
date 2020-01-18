<template>
  <div class="layout">
    <div class="container">
      <Sidebar></Sidebar>
      <div class="main-container">
        <Navbar></Navbar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar } from "./components";
export default {
  name: "Layout",
  components: { Sidebar, Navbar },
  mixins: [],
  computed: {},
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  .container {
    flex: 1;
    display: flex;
    flex-direction: row;
    .main-container {
      flex: 1;
    }
  }
}
</style>
