import Vue from 'vue'

export default () => ({
  template: `
       <div style="height: 600px; width: 1200px; border: 1px solid red; position: relative;margin: 0 auto">
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        x="210"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :snap="true"
        :snapTolerance="20"
        style="background-color: rgb(174, 213, 129);">
      </vue-draggable-resizable>
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        x="420"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :snap="true"
        :snapTolerance="20"
        style="background-color: rgb(129, 212, 250);">
      </vue-draggable-resizable>
    </div>
  `
})
