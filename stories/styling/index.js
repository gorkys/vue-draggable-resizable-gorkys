import StyleComponent from './style-component'
import StyleComponentNotes from './notes/style-component.md'
import StyleDragging from './style-dragging'
import StyleDraggingNotes from './notes/style-dragging.md'
import StyleResizing from './style-resizing'
import StyleResizingNotes from './notes/style-resizing.md'
import StyleActive from './style-active'
import StyleActiveNotes from './notes/style-active.md'
import StyleHandles from './style-handles'
import StyleHandlesNotes from './notes/style-handles.md'
import StyleHandleSlots from './style-handle-slots'
import StyleHandleSlotsNotes from './notes/style-handle-slots.md'

export default {
  'Style组件' : [() => new StyleComponent, StyleComponentNotes],
  'Style拖动' : [() => new StyleDragging, StyleDraggingNotes],
  'Style调整大小' : [() => new StyleResizing, StyleResizingNotes],
  'Style活跃' : [() => new StyleActive, StyleActiveNotes],
  'Style句柄' : [() => new StyleHandles, StyleHandlesNotes],
  'Style处理插槽' : [() => new StyleHandleSlots, StyleHandleSlotsNotes]
}
