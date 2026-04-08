import { ref } from 'vue'
import VueDraggableResizable from '../src/components/vue-draggable-resizable.vue'

export default {
  title: 'VueDraggableResizable',
  component: VueDraggableResizable,
  args: {
    active: true,
    h: 140,
    snap: false,
    snapTolerance: 5,
    w: 220,
    x: 0,
    y: 0
  },
  argTypes: {
    onDrag: { control: false },
    onDragStart: { control: false },
    onResize: { control: false },
    onResizeStart: { control: false }
  }
}

const Surface = (template, setup = () => ({})) => ({
  components: { VueDraggableResizable },
  setup,
  template: `
    <div style="width: 720px; height: 420px; padding: 32px; background: linear-gradient(135deg, #f8fafc, #e2e8f0); border-radius: 24px;">
      <div style="position: relative; width: 100%; height: 100%; border: 1px dashed #94a3b8; border-radius: 16px; overflow: hidden;">
        ${template}
      </div>
    </div>
  `
})

export const Basic = {
  render: (args) => Surface(`
    <vue-draggable-resizable v-bind="args">
      <div style="width: 100%; height: 100%; display: grid; place-items: center; background: #0f172a; color: white;">
        Drag and resize me
      </div>
    </vue-draggable-resizable>
  `, () => ({ args }))
}

export const ParentBounds = {
  args: {
    parent: true,
    x: 80,
    y: 60
  },
  render: (args) => Surface(`
    <vue-draggable-resizable v-bind="args">
      <div style="width: 100%; height: 100%; display: grid; place-items: center; background: #1d4ed8; color: white;">
        Parent constrained
      </div>
    </vue-draggable-resizable>
  `, () => ({ args }))
}

export const SnapGuides = {
  args: {
    parent: true,
    snap: true,
    x: 20,
    y: 20
  },
  render: (args) => Surface(`
    <div style="position: absolute; inset: 24px;">
      <vue-draggable-resizable v-bind="args" @refLineParams="onGuides">
        <div style="width: 100%; height: 100%; display: grid; place-items: center; background: #0f766e; color: white;">
          Snap source
        </div>
      </vue-draggable-resizable>
      <vue-draggable-resizable :w="180" :h="120" :x="340" :y="180" :parent="true" :active="false">
        <div style="width: 100%; height: 100%; display: grid; place-items: center; background: #f97316; color: white;">
          Target
        </div>
      </vue-draggable-resizable>
      <span
        v-for="(line, index) in guides.vLine"
        :key="'v-' + index"
        v-show="line.display"
        :style="{
          position: 'absolute',
          top: line.origin,
          left: line.position,
          width: '1px',
          height: line.lineLength,
          background: '#ef4444',
          opacity: 0.8,
          pointerEvents: 'none'
        }"
      />
      <span
        v-for="(line, index) in guides.hLine"
        :key="'h-' + index"
        v-show="line.display"
        :style="{
          position: 'absolute',
          top: line.position,
          left: line.origin,
          width: line.lineLength,
          height: '1px',
          background: '#ef4444',
          opacity: 0.8,
          pointerEvents: 'none'
        }"
      />
    </div>
  `, () => {
    const guides = ref({ vLine: [], hLine: [] })

    return {
      args,
      guides,
      onGuides (value) {
        guides.value = value
      }
    }
  })
}
