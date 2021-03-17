<template>
  <div class="app-mian">
    <div class="app-container ">
      <!-- 示例 2 -->
      <div
        class="viewBox"
        :style="{
          width: parentW + 'px',
          height: parentH + 'px',
          position: 'relative',
          border: '1px solid #ddd'
        }"
      >
        <VueDragResize
          :isActive="true"
          :w="200"
          :h="200"
          :isDraggable="isDraggable"
          :isResizable="isResizable"
          :parentW="parentW"
          :parentH="parentH"
          :parentLimitation="true"
          v-on:resizing="resize"
          v-on:dragging="resize"
        >
          <div style="background-color: #E6A23C;width: 100%;height: 100%;">
            <h3>Hello World!</h3>
            <p>{{ top }} х {{ left }}</p>
            <p>{{ width }} х {{ height }}</p>
          </div>
        </VueDragResize>
      </div>
      <!-- 示例 1 -->
      <el-slider
        :min="0.25"
        :max="1.75"
        v-model="value"
        :step="0.01"
      ></el-slider>
      <div class="box1">
        <div class="box2">
          <div class="view" :style="box2Style">
            <div style="background: #99f36c;width: 200px;height: 250px"></div>
            <div style="background: #f69186;width: 200px;height: 250px"></div>
            <div style="background: #686ff8;width: 200px;height: 250px"></div>
            <div style="background: #99f36c;width: 200px;height: 250px"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { zoom } from "./zoom";
import panzoom from "panzoom";
import VueDragResize from "vue-drag-resize";
export default {
  name: "Draggable",
  components: { VueDragResize },
  mixins: [],
  props: {},
  data() {
    return {
      value: 1,
      // 示例 2
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      parentW: 600,
      parentH: 600,
      isDraggable: true,
      isResizable: true
    };
  },
  computed: {
    box2Style() {
      if (this.value === 1) {
        return "";
      } else {
        this.elZoom();
        // return {
        //   transform: `scale(${this.value})`,
        //   "transform-origin": "left top"
        // };
        return "";
      }
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    let _that = this;
    var el = document.querySelector(".view");
    panzoom(el, {
      beforeWheel: function(e) {
        // allow wheel-zoom only if altKey is down. Otherwise - ignore
        var shouldIgnore = !e.altKey;
        return shouldIgnore;
      },
      beforeMouseDown: function(e) {
        // allow mouse-down panning only if altKey is down. Otherwise - ignore
        var shouldIgnore = !e.altKey;
        return shouldIgnore;
      },
      onDoubleClick: function(e) {
        // `e` - is current double click event.
        console.log(e);
        return false; // tells the library to not preventDefault, and not stop propagation
      },
      minScale: 0, //最小缩放
      maxScale: 5, //最大缩放
      startTransform: "scale(1.0)", //初始缩放大小
      $zoomRange: _that.value,
      bounds: true,
      boundsPadding: 0.1
    });
  },
  methods: {
    elZoom() {
      console.log(2);
      zoom.to({
        element: document.querySelector(".view"),
        scale: this.value,
        // Function to call once zooming completes
        callback: function() {
          /* ... */
          console.log(1);
        }
      });
    },
    // 示例 2
    /**
     * @param {Object} newRect
     */
    resize(newRect) {
      // console.log(newRect);
      if (this.setParentH(newRect)) {
        this.isDraggable = true;
        this.isResizable = true;
      }
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
    setParentH(newRect) {
      let el = document.querySelector(".viewBox");
      if (el.offsetHeight - (newRect.top + newRect.height + 2) === 0) {
        this.isDraggable = false;
        this.isResizable = false;
        this.parentH = newRect.top + newRect.height + 2 + 200;
      }
      return true;
    }
  }
};
</script>
<style scoped lang="scss">
.app-container {
  height: 100%;
}

.box1 {
  width: 600px;
  height: 800px;
  overflow: auto;
  padding: 20px;
}
.box2 {
  height: auto;
  border: 1px dashed #ddd;
}
.view {
  height: auto;
}
</style>
