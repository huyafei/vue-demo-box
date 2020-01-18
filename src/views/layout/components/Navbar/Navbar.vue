<template>
  <div class="navbar flex-r">
    <div class="navbar-breadcrumb flex-1">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
          <span v-if="index == levelList.length - 1">{{
            item.meta.title
          }}</span>
          <a v-else @click.prevent="jumpPage(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="navbar-avatar">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      levelList: null
    };
  },
  //计算属性
  computed: {},
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  mounted() {},
  methods: {
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        location.reload(); // 为了重新实例化vue-router对象 避免bug
      });
    },
    jumpPage(item) {
      this.$router.push(item.path);
    },
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    }
  }
};
</script>
<style scoped lang="scss">
.navbar {
  padding: 0 20px;
  height: 50px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  background: #fff;
}
.avatar-wrapper {
  cursor: pointer;
  position: relative;
  line-height: initial;
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
}
</style>
