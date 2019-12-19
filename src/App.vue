<template>
  <div>
    <vue-draggable-resizable
      v-for="element in elements"
      :key="element.id"
      :x="element.x"
      :y="element.y"
      :w="200"
      :h="200"
      :active.sync="element.active"
      :snap="true"
      :snapTolerance="10"
      :resizable="false"
      @refLineParams="getRefLineParams"
      @dragging="(left, top) => dragging(element.id, left, top)"
      @dragstop="(left, top) => dragstop(element.id, left, top)"
    >
      <p>{{ element.text }}</p>
    </vue-draggable-resizable>
    <vue-draggable-resizable
      :x="222"
      :y="222"
      :w="400"
      :h="400"
      :snap="true"
      :snapTolerance="10"
      :resizable="false"
      @refLineParams="getRefLineParams"
    >
      <p>aaa</p>
    </vue-draggable-resizable>
    <!--辅助线-->
    <span class="ref-line v-line"
          v-for="item in vLine"
          v-show="item.display"
          :style="{ left: item.position, top: item.origin, height: item.lineLength}"
    />
    <span class="ref-line h-line"
          v-for="item in hLine"
          v-show="item.display"
          :style="{ top: item.position, left: item.origin, width: item.lineLength}"
    />
    <!--辅助线END-->
  </div>
</template>

<script>
import VueDraggableResizable from './components/vue-draggable-resizable'
import './components/vue-draggable-resizable.css'

export default {
  name: 'app',
  components: {
    VueDraggableResizable
  },
  data() {
    return {
      sync: false,
      draggingId: null,
      prevOffsetX: 0,
      prevOffsetY: 0,
      vLine: [],
      hLine: [],
      elements: [
        {id: 1, x: 0, y: 0,active: false, text: 'Element 1'},
        {id: 2, x: 200, y: 200,active: false, text: 'Element 2'},
        {id: 3, x: 400, y: 400,active: false, text: 'Element 3'}
      ]
    }
  },
  mounted() {
    window.addEventListener('keydown', ev => {
      if (ev.keyCode === 17) {
        this.sync = true;
      }
    });
    window.addEventListener('keyup', ev => {
      if (ev.keyCode === 17) {
        this.sync = false;
      }
    });
  },
  methods: {
    dragging(id, left, top) {
      this.draggingId = id;

      if (! this.sync) return;

      const offsetX = left - this.draggingElement.x;
      const offsetY = top - this.draggingElement.y;

      const deltaX = this.deltaX(offsetX);
      const deltaY = this.deltaY(offsetY);

      this.elements.map(el => {
        if (el.id !== id) {
          el.x += deltaX;
          el.y += deltaY;
          el.active = true
        }

        return el;
      });
    },
    dragstop(id, left, top) {
      this.elements.map(el => {
        if (el.id === id) {
          el.x = left;
          el.y = top;
          el.active = false
        }

        return el;
      });

      this.draggingId = null;
      this.prevOffsetX = 0;
      this.prevOffsetY = 0;
      this.sync = false;
    },
    deltaX(offsetX) {
      const ret = offsetX - this.prevOffsetX;

      this.prevOffsetX = offsetX;

      return ret;
    },
    deltaY(offsetY) {
      const ret = offsetY - this.prevOffsetY;

      this.prevOffsetY = offsetY;

      return ret;
    },
    getRefLineParams (params) {
      const {vLine, hLine} = params
      this.vLine = vLine
      this.hLine = hLine
    }
  },
  computed: {
    draggingElement: function () {
      if (! this.draggingId) return;

      return this.elements.find(el => el.id === this.draggingId);
    }
  }
}
</script>

<style>
  .test1 {
    background-color: rgb(239, 154, 154);
  }
  .test2{
    background-color: rgb(129, 212, 250);
  }
  .test3{
    background-color: rgb(174, 213, 129);
  }
</style>
