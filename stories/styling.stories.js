import VueDraggableResizable from '../src/components/vue-draggable-resizable.vue'
import StyleActive from './styling/style-active'
import StyleComponent from './styling/style-component'
import StyleDragging from './styling/style-dragging'
import StyleHandles from './styling/style-handles'
import StyleResizing from './styling/style-resizing'
import { createLegacyStory } from './helpers/legacy-story'

export default {
  title: 'Examples/Styling',
  component: VueDraggableResizable
}

export const ActiveClass = createLegacyStory(StyleActive)
export const ComponentClass = createLegacyStory(StyleComponent)
export const DraggingClass = createLegacyStory(StyleDragging)
export const HandleClass = createLegacyStory(StyleHandles)
export const ResizingClass = createLegacyStory(StyleResizing)

export const HandleSlots = {
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    components: { VueDraggableResizable },
    template: `
      <vue-draggable-resizable class-name-handle="my-handle-class">
        <p>The default slot and handle slots can be customized independently.</p>

        <template #tl><div>😀</div></template>
        <template #tm><div>😂</div></template>
        <template #tr><div>😆</div></template>
        <template #mr><div>😉</div></template>
        <template #br><div>😎</div></template>
        <template #bm><div>😍</div></template>
        <template #bl><div>😣</div></template>
        <template #ml><div>😕</div></template>
      </vue-draggable-resizable>
    `
  })
}
