<template>
  <div class="app-mian">
    <div class="app-container">
      <h2 style="margin-bottom: 24px">常用语义化标签</h2>
      header <br />
      footer<br />
      main<br />
      article<br />
      aside<br />
      section<br />
      <hr />
      <dl>
        <dt>header</dt>
        <dd>
          定义文档或者文档的部分区域的页眉，应作为介绍内容或者导航链接栏的容器
        </dd>
        <dt>footer</dt>
        <dd>定义最近一个章节内容或者根节点元素的页脚</dd>
        <dt>nav</dt>
        <dd>
          描述一个含有多个超链接的区域，该区域包含跳转到其他页面或页面内部其他部分的链接列表
        </dd>
        <dt>main</dt>
        <dd>
          定义文档的主要内容，该内容在文档中应当是独一无二的，不包含任何在文档中重复的内容，比如侧边栏，导航栏链接，版权信息，网站logo，搜索框（除非搜索框作为文档的主要功能）
        </dd>
        <dt>article</dt>
        <dd>
          元素表示文档、页面、应用或网站中的独立结构，是可独立分配的、可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目
        </dd>
        <dt>aside</dt>
        <dd>
          元素表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分且可以被单独的拆分出来而不会影响整体。通常表现为侧边栏或嵌入内容
        </dd>
        <dt>section</dt>
        <dd>表示文档中的一个区域（或节），比如，内容中的一个专题组</dd>
      </dl>
    </div>

  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      list: [145, 112, 100, 120, 130, 160],
      maxData: 0
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.maxData = Math.max(...this.list);
  },
  methods: {
    styleHeight(data) {
      return { height: ((data / this.maxData) * 300).toFixed() + "px" };
    }
  },
  watch: {}
};
</script>
<style scoped lang="scss">
dl {
  dt {
    font-weight: bold;
    margin-bottom: 8px;
  }
  dd {
    margin-bottom: 16px;
  }
}
.item {
  .list {
    height: 300px;
    width: 80px;
    display: inline-block;
    vertical-align: bottom;
    text-align: center;
    background: rgba(255, 0, 0, 0.2);
    margin: 30px;
    &.last-list {
      background: rgba(0, 255, 0, 0.3);
    }
  }
}
</style>
