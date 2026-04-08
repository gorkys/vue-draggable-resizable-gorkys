import VueDraggableResizable from '../src/components/vue-draggable-resizable.vue'
import DragMultiple from './how-to/drag-multiple'
import { createLegacyStory } from './helpers/legacy-story'

export default {
  title: 'Examples/How To',
  component: VueDraggableResizable
}

export const DragMultipleElements = createLegacyStory(DragMultiple)
