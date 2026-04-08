import VueDraggableResizable from '../src/components/vue-draggable-resizable.vue'
import EventsActivated from './events/events-activated'
import EventsDragging from './events/events-dragging'
import EventsResizing from './events/events-resizing'
import { createLegacyStory } from './helpers/legacy-story'

export default {
  title: 'Examples/Events',
  component: VueDraggableResizable
}

export const Activated = createLegacyStory(EventsActivated)
export const Dragging = createLegacyStory(EventsDragging)
export const Resizing = createLegacyStory(EventsResizing)
