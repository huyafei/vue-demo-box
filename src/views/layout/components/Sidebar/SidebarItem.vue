<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <el-submenu :index="resolvePath(item.path, 'parent')" popper-append-to-body>
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <div v-for="child in item.children" :key="child.path">
        <el-menu-item
          :index="resolvePath(child.path, 'son')"
          v-if="!child.hidden"
        >
          {{ child.meta.title }}</el-menu-item
        >
      </div>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  components: {},
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {
    $route() {
      console.log(this.$route);
    }
  },
  methods: {
    resolvePath(routePath, type) {
      if (type === "son") {
        return this.basePath + "/" + routePath;
      } else {
        return routePath;
      }
    }
  },
  mounted() {}
};
</script>
