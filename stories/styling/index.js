import { withMarkdownNotes } from '@storybook/addon-notes';

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
  'Style组件' : withMarkdownNotes(StyleComponentNotes)(() => (new StyleComponent)),
  'Style拖动' : withMarkdownNotes(StyleDraggingNotes)(() => (new StyleDragging)),
  'Style调整大小' : withMarkdownNotes(StyleResizingNotes)(() => (new StyleResizing)),
  'Style活跃' : withMarkdownNotes(StyleActiveNotes)(() => (new StyleActive)),
  'Style句柄' : withMarkdownNotes(StyleHandlesNotes)(() => (new StyleHandles)),
  'Style处理插槽' : withMarkdownNotes(StyleHandleSlotsNotes)(() => (new StyleHandleSlots)),
}
