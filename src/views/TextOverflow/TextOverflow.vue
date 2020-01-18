<template>
  <div class="app-mian">
    <div class="app-container">
      <h2>文本溢出显示更多</h2>
      <h3>单行溢出省略</h3>
      <div class="article-content">
        <p class="single-cut">
          徐志摩曾说过：“一生中至少该有一次，为了某个人而忘记了自己，不求结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇见你。”我不知道自己是何等的幸运能在茫茫人海中与你相遇？我也不知道你的出现是恩赐还是劫？但总归要说声“谢谢你，谢谢你曾来过……”，还记得初相识时你那拘谨的样子，话不是很多只是坐在那里听我不停地说着各种不着边际的话。可能因为紧张我也不知道自己想要表达什么？只知道乱七八糟的在说，而你只是静静地听着，偶尔插一两句。想想自己也不知道一个慢热甚至在不熟的人面前不苟言笑的我那天怎么会那么多话？后来才知道那就是你给的莫名的熟悉感和包容吧！
        </p>
      </div>

      <h3>多行溢出省略</h3>
      <div class="article-content">
        <p class="mult-cut">
          徐志摩曾说过：“一生中至少该有一次，为了某个人而忘记了自己，不求结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇见你。”我不知道自己是何等的幸运能在茫茫人海中与你相遇？我也不知道你的出现是恩赐还是劫？但总归要说声“谢谢你，谢谢你曾来过……”，还记得初相识时你那拘谨的样子，话不是很多只是坐在那里听我不停地说着各种不着边际的话。可能因为紧张我也不知道自己想要表达什么？只知道乱七八糟的在说，而你只是静静地听着，偶尔插一两句。想想自己也不知道一个慢热甚至在不熟的人面前不苟言笑的我那天怎么会那么多话？后来才知道那就是你给的莫名的熟悉感和包容吧！
        </p>
      </div>
      <h3>多行溢出显示更多</h3>
      <div class="article-content">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          style="display: none;"
        />
        <p class="mult-cut">
          徐志摩曾说过：“一生中至少该有一次，为了某个人而忘记了自己，不求结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇见你。”我不知道自己是何等的幸运能在茫茫人海中与你相遇？我也不知道你的出现是恩赐还是劫？但总归要说声“谢谢你，谢谢你曾来过……”，还记得初相识时你那拘谨的样子，话不是很多只是坐在那里听我不停地说着各种不着边际的话。可能因为紧张我也不知道自己想要表达什么？只知道乱七八糟的在说，而你只是静静地听着，偶尔插一两句。想想自己也不知道一个慢热甚至在不熟的人面前不苟言笑的我那天怎么会那么多话？后来才知道那就是你给的莫名的熟悉感和包容吧！
        </p>
        <label class="last-txt-btn" for="toggle"></label>
      </div>
	    <h3>另一个多行溢出显示更多示例</h3>
	    <a href="https://blog.csdn.net/qq_43219422/article/details/90641557" target="_blank">示例</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "TextOverflow",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  //计算属性
  computed: {},
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
  //方法
  methods: {}
};
</script>
<style scoped lang="scss">
.app-container {
  .article-content {
    padding: 24px 20px;
    width: 500px;
    p {
    }
  }

  .single-cut {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .mult-cut {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  //溢出显示更多 展开
  input[name="toggle"]:checked {
    & + p {
      -webkit-line-clamp: unset;
    }
  }
  label {
	  color: red;
    &::after {
      content: "更多";
    }
  }
  input[name="toggle"]:checked {
    & ~ label {
      &::after {
        content: "收起";
      }
    }
  }
}
</style>
