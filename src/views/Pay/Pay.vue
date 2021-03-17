<template>
  <div class="app-mian">
    <div class="app-container">
      <el-form label-position="top" label-width="80px" :model="formData">
        <el-form-item label="充值金额">
          <el-radio-group v-model="formData.money">
            <el-radio :label="10" border>10元</el-radio>
            <el-radio :label="30" border>30元</el-radio>
            <el-radio :label="50" border>50元</el-radio>
            <el-radio :label="100" border>100元</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="充值方式">
          <el-radio-group v-model="formData.type">
            <el-radio :label="1" border>微信</el-radio>
            <el-radio :label="2" border>支付宝</el-radio>
          </el-radio-group>
        </el-form-item>
	      <el-form-item>
		      <el-button type="primary" @click="submit">提交</el-button>
	      </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pay",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      formData: {
        money: 10,
        type: 1
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
  },
  methods: {
    submit(){

    }
  }
};
</script>
<style scoped></style>
