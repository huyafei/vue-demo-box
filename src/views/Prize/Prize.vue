<template>
  <div class="app-mian">
    <div class="app-container">
      <el-form ref="form" label-position="top" :model="form" label-width="80px">
        <el-form-item label="配置:">
          <el-checkbox-group v-model="form.config">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="概率:">
          <el-input
            v-for="item in prizeArr"
            :key="item.id"
            placeholder="请输入内容"
            v-model.number="item.val"
            style="width: 200px"
          >
            <template slot="prepend">{{ item.name }}</template>
          </el-input>
        </el-form-item>
      </el-form>

      <div class="prize">
        <div class="prize-btn" @click="submit">
          开始
        </div>
        <div class="prize-list">
          <div
            v-for="(item, index) in prizeArr"
            :key="index"
            :class="[
              'prize-list__item',
              index === prizeEndIndex ? 'active' : ''
            ]"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span v-if="prizeIndex!==-1">{{prizeArr[prizeIndex].name}}</span>
    </el-dialog>
  </div>
</template>
<script>
import { getRandomArbitrary } from "../../utils/numberUtil";
import { arrObjFindElem } from "../../utils/arrUtil";

export default {
  name: "Prize",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      form: {
        config: []
      },
      //抽奖状态：-1活动未开始，1活动已开始，0活动已过期
      activityStatus: 1,
      //奖品
      prizeArr: [
        {
          id: 1,
          name: "红包118元",
          val: 15
        },
        {
          id: 2,
          name: "零食大礼包",
          val: 50
        },
        {
          id: 3,
          name: "精美小礼物",
          val: 100
        },
        {
          id: 4,
          name: "再来一次",
          val: 60
        },
        {
          id: 5,
          name: "红包666",
          val: 10
        },
        {
          id: 6,
          name: "iPhone 12",
          val: 1
        },
        {
          id: 7,
          name: "红包1688",
          val: 5
        },
        {
          id: 8,
          name: "谢谢参与",
          val: 20
        }
      ],
      //中奖位置
      prizeIndex: -1,
      //起始位置
      prizeStartIndex: -1,
      //
      prizeEndIndex: -1,
      //是否正在旋转
      isSpin: false,
      //抽奖定时器
      timer: null,
      //速度
      speed: 200,
      //总圈数
      totalTimes: 5,
      //当前圈数
      currentTimes: 0,
      dialogVisible:false
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  mounted() {},
  beforeUpdate() {},
  methods: {
    submit() {
      if (this.isSpin) {
        return;
      }
      this.isSpin = true;
      this.prizeIndex = this.getPrize();
      console.log("抽中的奖品位置", this.prizeIndex);
      //计算旋转次数
      this.startSpinPrize();
    },
    //开始旋转抽奖
    startSpinPrize() {
      if (this.prizeStartIndex === -1) {
        this.prizeStartIndex = 0;
      }
      if (this.prizeEndIndex === this.prizeArr.length - 1) {
        this.prizeEndIndex = 0;
      } else {
        this.prizeEndIndex += 1;
      }
      //判断圈数：旋转的位置到起始位置为一圈
      if (this.prizeEndIndex === this.prizeStartIndex) {
        this.currentTimes += 1;
      }
      console.log(
        "当前圈数：" + this.currentTimes,
        "总圈数：" + this.totalTimes
      );
      if (this.currentTimes <= 2) {
        this.speed -= 8;
      } else if (this.currentTimes >= 4) {
        this.speed += 35;
      }
      //圈数大于指定圈数且选中的奖品位置，关闭选旋转定时器并初始化数据，
      if (
        this.currentTimes >= this.totalTimes &&
        this.prizeEndIndex === this.prizeIndex
      ) {
        console.log(
          "结束位置：" + this.prizeEndIndex,
          "奖品位置" + this.prizeIndex
        );
        this.prizeStartIndex = this.prizeEndIndex;
        clearTimeout(this.timer);
        this.dialogVisible=true
        this.initConfig();
      } else {
        this.timer = setTimeout(this.startSpinPrize, this.speed);
      }
    },
    //获取奖品
    getPrize() {
      //随机获取概率
      let RV = getRandomArbitrary(1, 100);
      let orgPrizeArr = JSON.parse(JSON.stringify(this.prizeArr));
      let newPrizeArr = orgPrizeArr.sort((a, b) => a.val - b.val);
      let prize;
      for (let i in newPrizeArr) {
        if (RV <= newPrizeArr[i].val) {
          prize = newPrizeArr[i];
          break;
        }
      }

      return arrObjFindElem(this.prizeArr, "id", prize.id);
    },

    //初始化
    initConfig() {
      this.isSpin = false;
      this.timer = null;
      this.currentTimes = 0;
      this.speed = 200;
    },
  }
};
</script>
<style scoped lang="scss">
.prize {
  width: 300px;
  height: 300px;
  position: relative;
  &-btn {
    position: absolute;
    top: calc(100% / 3);
    left: calc(100% / 3);
    width: calc(100% / 3);
    height: calc(100% / 3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  &-list {
    width: 100%;
    height: 100%;
    &__item {
      position: absolute;
      width: calc(100% / 3);
      height: calc(100% / 3);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      left: 0;
      top: 0;
    }
    & > &__item:nth-child(2) {
      left: calc(100% / 3);
      top: 0;
    }
    & > &__item:nth-child(3) {
      left: calc(100% / 3 * 2);
      top: 0;
    }
    & > &__item:nth-child(4) {
      left: calc(100% / 3 * 2);
      top: calc(100% / 3);
    }
    & > &__item:nth-child(5) {
      left: calc(100% / 3 * 2);
      top: calc(100% / 3 * 2);
    }
    & > &__item:nth-child(6) {
      left: calc(100% / 3);
      top: calc(100% / 3 * 2);
    }
    & > &__item:nth-child(7) {
      left: 0;
      top: calc(100% / 3 * 2);
    }
    & > &__item:nth-child(8) {
      left: 0;
      top: calc(100% / 3);
    }
    &__item.active {
      color: #fff;
      background: #e4393c;
    }
    &__item__btn {
      cursor: pointer;
    }
  }
}
</style>
