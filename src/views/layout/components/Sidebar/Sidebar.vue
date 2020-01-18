<template>
  <div class="asidebar">
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      background-color="#2d3a4b"
      text-color="rgb(191, 203, 217)"
      active-text-color="rgb(64, 158, 255)"
      :collapse-transition="false"
      router
      mode="vertical"
    >
      <SidebarItem
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      ></SidebarItem>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
export default {
  name: "Sidebar",
  components: { SidebarItem },
  mixins: [],
  props: {},
  data() {
    return {};
  },
  //计算属性
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    //激活
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
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
  methods: {}
};
</script>
<style scoped lang="scss">
.asidebar {
  width: 210px;
  height: 100%;
}
.el-menu {
  height: 100%;
}
</style>
