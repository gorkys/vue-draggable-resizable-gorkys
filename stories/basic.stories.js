import VueDraggableResizable from '../src/components/vue-draggable-resizable.vue'
import BasicActive from './basic/basic-active'
import BasicAxis from './basic/basic-axis'
import BasicCancelHandle from './basic/basic-cancel-handle'
import BasicControlled from './basic/basic-controlled'
import BasicDragHandle from './basic/basic-drag-handle'
import BasicHandles from './basic/basic-handles'
import BasicMaxWidthHeight from './basic/basic-max-width-height'
import BasicMinWidthHeight from './basic/basic-min-width-height'
import BasicNativeDragEnabled from './basic/basic-native-drag-enabled'
import BasicNotDraggable from './basic/basic-not-draggable'
import BasicNotResizable from './basic/basic-not-resizable'
import BasicOnDragStart from './basic/basic-on-drag-start'
import BasicOnResizeStart from './basic/basic-on-resize-start'
import BasicPreventDeactivation from './basic/basic-prevent-deactivation'
import BasicWithForm from './basic/basic-with-form'
import BasicZIndex from './basic/basic-z-index'
import { createLegacyStory } from './helpers/legacy-story'

export default {
  title: 'Examples/Basic',
  component: VueDraggableResizable
}

export const Playground = {
  parameters: {
    layout: 'centered'
  },
  render: () => ({
    components: { VueDraggableResizable },
    template: `
      <div style="width: 320px; height: 220px; position: relative;">
        <vue-draggable-resizable>
          <p>Drag me and resize me freely.</p>
        </vue-draggable-resizable>
      </div>
    `
  })
}

export const MinWidthMinHeight = createLegacyStory(BasicMinWidthHeight)
export const MaxWidthMaxHeight = createLegacyStory(BasicMaxWidthHeight)
export const WithForm = createLegacyStory(BasicWithForm)
export const ActiveByDefault = createLegacyStory(BasicActive)
export const PreventDeactivation = createLegacyStory(BasicPreventDeactivation)
export const NotDraggable = createLegacyStory(BasicNotDraggable)
export const NotResizable = createLegacyStory(BasicNotResizable)
export const NativeDragEnabled = createLegacyStory(BasicNativeDragEnabled)
export const Controlled = createLegacyStory(BasicControlled)
export const DragHandle = createLegacyStory(BasicDragHandle)
export const CancelHandle = createLegacyStory(BasicCancelHandle)
export const ZIndex = createLegacyStory(BasicZIndex)
export const Handles = createLegacyStory(BasicHandles)
export const Axis = createLegacyStory(BasicAxis)
export const OnDragStart = createLegacyStory(BasicOnDragStart)
export const OnResizeStart = createLegacyStory(BasicOnResizeStart)
