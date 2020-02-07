<template>
  <div class="app-mian">
    <div class="app-container">
      <h2 style="margin-bottom: 10px;">商品sku</h2>
      <div class="spec-content">
        <div class="spec-content-title">
          <el-checkbox v-model="isSpec">启用规格</el-checkbox>
          <span class="hint"
            >* 启用商品规格后，商品的价格及库存以商品规格为准</span
          >
        </div>
        <div v-if="isSpec" class="spec-content-list">
          <div class="item-spec" v-for="(item, index) in specs" :key="index">
            <div class="item-spec__name flex-r">
              <span>规格名</span>
              <el-input
                v-model.trim="item.name"
                placeholder="规格名"
                style="width: 210px; margin-right: 10px"
                size="small"
                @blur="specBlur(index, item.name)"
              ></el-input>
              <el-button type="danger" size="small" @click="deleteSpec(index)"
                >删除</el-button
              >
            </div>
            <div class="item-spec__value flex-r">
              <span>规格值</span>
              <template v-for="(citem, cindex) in item.values">
                <div class="item-spec__value-item" :key="cindex">
                  <el-input
                    v-model.trim="citem.name"
                    placeholder="规格值"
                    size="small"
                    @blur="specValueBlur(index, cindex, citem.name)"
                  ></el-input>
                  <i
                    class="icon-close el-icon-error"
                    @click="deleteSpecValue(index, cindex)"
                  ></i>
                </div>
              </template>

              <el-button
                type="primary"
                size="small"
                @click="addSpecValues(index)"
                >添加</el-button
              >
            </div>
          </div>
          <el-button plain size="small" @click="addSpec"
            >添加规格项目</el-button
          >
          <el-button type="primary" @click="setSpecAttr" size="small"
            >刷新规格</el-button
          >
        </div>
        <div v-if="isSpec && specs.length > 0" class="spec-content-table">
          <table cellpadding="0" cellspacing="0">
            <thead>
              <tr>
                <td v-for="(item, index) in specHead" :key="index">
                  {{ item }}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in specAttr" :key="index">
                <td v-for="(citem, cindex) in item.specs" :key="cindex">
                  {{ citem.value }}
                </td>
                <td>
                  <el-input v-model="item.price" size="mini" style="width: 100px"></el-input>
                </td>
                <td>
                  <el-input v-model="item.quantity" size="mini" style="width: 100px"></el-input>
                </td>
                <td>
                  <el-input v-model="item.number" size="mini" style="width: 100px"></el-input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <el-button style="margin-top: 24px" type="primary" size="small" @click="submit">确定</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sku",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      isSpec: true,
      // specs格式
      // [
      //   {
      //     name: "颜色",
      //     values: [
      //       {
      //         name: "红色"
      //       },
      //       {
      //         name: "蓝色"
      //       }
      //     ]
      //   }
      // ]
      specs: [],
      //默认
      specHeadDef: ["价格", "库存", "编号"],
      specAttrDef: {
        specs: [],//[{name:"颜色",value:"红色"},{name:"尺寸",value:"12"}]
        price: null, //价格
        quantity: null, //库存
        number: null //编号
      },

      specHead: [],
      specAttr: []
    };
  },
  //计算属性
  computed: {},
  watch: {},
  created() {

  },
  mounted() {

  },
  //方法
  methods: {
    //规格名
    addSpec() {
      let obj = {
        name: "",
        values: []
      };
      this.specs.push(obj);
    },
    deleteSpec(i) {
      this.$confirm("您确定要删除该项规格吗?", "提示").then(() => {
        this.specs.splice(i, 1);
        this.$message.success("删除成功");

        this.setSpecHead();
        this.setSpecAttr()
      });
    },
    specBlur(i, name) {
      if (name) {
        //  查找重复
        let arr = this.specs.filter(item => {
          return item.name === name;
        });
        if (arr.length >= 2) {
          this.$message.warning("已有该规格");
          this.specs[i].name = "";
        } else {
          if (this.specs[i].values.length > 0) {
            this.setSpecHead();
          }
        }
      } else {
        return;
      }
    },
    //规格值
    addSpecValues(i) {
      if( this.specs[i].name){
        let obj = {
          name: ""
        };
        this.specs[i].values.push(obj);
      }else {
        return this.$message.warning("请输入规格名")
      }

    },
    deleteSpecValue(i, ci) {
      this.$confirm("您确定要删除该项规格值吗?", "提示").then(() => {
        this.specs[i].values.splice(ci, 1);
        this.$message.success("删除成功");
        if (this.specs[i].values.length === 0) {
          this.setSpecHead();
        }
        this.setSpecAttr()
      });
    },
    specValueBlur(i, ci, name) {
      if (name) {
        //  查找重复
        let arr = this.specs[i].values.filter(item => {
          return item.name === name;
        });
        if (arr.length >= 2) {
          this.$message.warning("已有该规格值");
          this.specs[i].values[ci].name = "";
        } else {
          this.setSpecHead();
          this.setSpecAttr()
        }
      } else {
        return;
      }
    },
    //设置表头
    setSpecHead() {
      let specHeadDef = this.specHeadDef;
      let specs = this.specs;
      let arr = [];
      specs.map(o => {
        if (o.values.length > 0) {
          arr.push(o.name);
        }
      });
      let newArr = arr.concat(specHeadDef);
      this.specHead = JSON.parse(JSON.stringify(newArr));
    },
    //重组table数据
    setSpecAttr() {
      let specs = this.specs;
      let specAttr = [];
      specs.map((o,i) => {
        let specItemName = o.name;
        let specItemValues = o.values;
        if (i === 0) {
          specItemValues.map(o => {
            let obj=JSON.parse(JSON.stringify(this.specAttrDef))
            obj.specs.push({ name: specItemName, value: o.name });
            specAttr.push(obj);
          });
        } else {
          let arr = [];
          let newSpecAttr = JSON.parse(JSON.stringify(specAttr));
          newSpecAttr.map(o => {
            specItemValues.map(co => {
              let item = JSON.parse(JSON.stringify(o));
              item.specs.push({ name: specItemName, value: co.name });
              arr.push(item);
            });
          });
          specAttr = arr;
        }
      });
      console.log(specAttr)
      this.specAttr = specAttr;
    },
    submit(){
      console.log(this.specAttr)
    },
    //合并单元格
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex);
      return {
        rowspan: 0,
        colspan: 0
      };
    }
  }
};
</script>
<style scoped lang="scss">
.hint {
  color: #e4393c;
  margin-left: 16px;
  font-size: 12px;
}
.spec-content-title {
  margin-bottom: 10px;
}
.spec-content-list {
  padding: 10px 22px;
  border: 1px solid #ddd;
  .item-spec {
    .item-spec__name,
    .item-spec__value {
      font-size: 12px;
      align-items: center;
      margin-bottom: 10px;
      span {
        margin-right: 10px;
      }
      .item-spec__value-item {
        width: 100px;
        margin-right: 10px;
        position: relative;
        .icon-close {
          position: absolute;
          right: -6px;
          top: -5px;
          font-size: 14px;
          color: #999;
          display: none;
          cursor: pointer;
          &:hover {
            color: #222222;
          }
        }
        &:hover {
          .icon-close {
            display: block;
          }
        }
      }
    }
    .item-spec__name {
    }
  }
}
.spec-content-table {
  margin-top: 16px;
  font-size:12px;
  td{
    min-width: 100px;
    padding: 10px 8px;
  }
  table{
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
  }
  td{
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
}
</style>
