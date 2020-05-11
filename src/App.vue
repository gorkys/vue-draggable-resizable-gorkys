<template>
  <div id="app">
	  <div style="margin: 0 auto;width:400px;display: flex;justify-content: space-between">
		  <input v-model="scale.current" type="range" min="0.2" max="2" step="0.1" style="width: 320px">
		  <span style="margin-left: 20px">{{scale.current*100}}%</span>
	  </div>
    <div :style="{transform: `scale(${scale.current})`}" style="height: 700px; width: 1200px; border: 1px solid red; position: relative;margin: 0 auto">
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :scaleRatio="scale.current"
        :parent="true"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        :snap="true"
        :snapTolerance="10"
        @refLineParams="getRefLineParams"
        class="test1">
      </vue-draggable-resizable>
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :scaleRatio="scale.current"
        :parent="true"
        :x="210"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        :snap="true"
        :snapTolerance="10"
        @refLineParams="getRefLineParams"
        class="test2">
      </vue-draggable-resizable>
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :scaleRatio="scale.current"
        :parent="true"
        :x="420"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        :snap="true"
        :snapTolerance="10"
        @refLineParams="getRefLineParams"
        class="test3">
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
    data () {
      return {
        scale: {
          current: 0.6,
          min: 0.2,
          max: 2,
          step: .2
        },
        vLine: [],
        hLine: []
      }
    },
    methods: {
      // 辅助线回调事件
      getRefLineParams (params) {
        const { vLine, hLine } = params
        this.vLine = vLine
        this.hLine = hLine
      },
      handleWheelEvent(e) {
        if (e.wheelDeltaY > 0 && this.scale.current + this.scale.step < this.scale.max) {
          this.scale.current += this.scale.step
        } else if (e.wheelDeltaY < 0 && this.scale.current - this.scale.step > this.scale.min) {
          this.scale.current -= this.scale.step
        }
      }
    },
	mounted() {
	  document.addEventListener("wheel", this.handleWheelEvent, false)
	},
    beforeDestroy() {
      document.removeEventListener("wheel", this.handleWheelEvent, false)
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
