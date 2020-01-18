<template>
  <div class="app-mian">
    <div class="app-container">
      <h2>下拉加载</h2>
      <div class="list" id="list">
        <div class="list-item" v-for="(item, index) in list" :key="index">
          {{ index }}
        </div>
        <div v-if="isLoading" class="list-item">
          加载中
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PullDownList",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      isLoading:false,
      list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  //计算属性
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    let elList = document.getElementById("list");
    elList.addEventListener("scroll", this.handleScroll, true);

  },
  beforeUpdate() {},
  updated() {},
  //keep-alive 组件激活时调用
  activated() {},
  //keep-alive 组件停用时调用。
  deactivated() {},
  //销毁之前
  beforeDestroy() {
    // let elList = document.getElementById("list");
    // elList.removeEventListener("scroll", this.handleScroll);
  },
  //销毁后
  destroyed() {

  },
  //方法
  methods: {
    handleScroll() {
      let _that = this;
      let elList = document.getElementById("list");

      //滚动条距离顶部距离
      let scrollTop = elList.scrollTop;
      //滚动容器高度
      let clientHeight = elList.clientHeight;
      //滚动条区域高度
      let scrollHeight = elList.scrollHeight;
      console.log(scrollTop, clientHeight, scrollHeight);
      //滚动到底部
      // if (scrollHeight === scrollTop + clientHeight) {
      //
      // }
      //距离底部100触发
      if (scrollHeight - clientHeight - scrollTop <= 100) {
        if (!this.isLoading) {
          _that.getList();
        }
      }
    },
    getList() {
      this.isLoading = true;
      setTimeout(() => {
        let list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        this.list = this.list.concat(list);
        this.isLoading = false;
      }, 1000 * 2);
    }
  }
};
</script>
<style scoped lang="scss">
.list {
  height: 667px;
  width: 375px;
  background: #f4f4f4;
  border: 1px solid #333;
  overflow-y: auto;
  .list-item {
    text-align: center;
    background: #fff;
    padding: 24px;
    border-top: 1px solid #ddd;
  }
}
</style>
