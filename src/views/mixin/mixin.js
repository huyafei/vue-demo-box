export const mixin = {
  data() {
    return {
      name: "mixin"
    };
  },
  //计算属性
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  //方法
  methods: {
    getList() {
      console.log("mixin里getList函数");
    }
  }
};
