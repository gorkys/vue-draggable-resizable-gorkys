import { withMarkdownNotes } from '@storybook/addon-notes';

import Basic from './basic'
import BasicNotes from './notes/basic.md'
import BasicMinWidthHeight from './basic-min-width-height'
import BasicMinWidthHeightNotes from './notes/basic-min-width-height.md'
import BasicMaxWidthHeight from './basic-max-width-height'
import BasicMaxWidthHeightNotes from './notes/basic-max-width-height.md'
import BasicWithForm from './basic-with-form'
import BasicWithFormNotes from './notes/basic-with-form.md'
import BasicActive from './basic-active'
import BasicActiveNotes from './notes/basic-active.md'
import BasicPreventDeactivation from './basic-prevent-deactivation'
import BasicPreventDeactivationNotes from './notes/basic-prevent-deactivation.md'
import BasicNotDraggable from './basic-not-draggable'
import BasicNotDraggableNotes from './notes/basic-not-draggable.md'
import BasicNotResizable from './basic-not-resizable'
import BasicNotResizableNotes from './notes/basic-not-resizable.md'
import BasicNativeDragEnabled from './basic-native-drag-enabled'
import BasicNativeDragEnabledNotes from './notes/basic-native-drag-enabled.md'
import BasicControlled from './basic-controlled'
import BasicControlledNotes from './notes/basic-controlled.md'
import BasicDragHandle from './basic-drag-handle'
import BasicDragHandleNotes from './notes/basic-drag-handle.md'
import BasicCancelHandle from './basic-cancel-handle'
import BasicCancelHandleNotes from './notes/basic-cancel-handle.md'
import BasicZIndex from './basic-z-index'
import BasicZIndexNotes from './notes/basic-z-index.md'
import BasicHandles from './basic-handles'
import BasicHandlesNotes from './notes/basic-handles.md'
import BasicAxis from './basic-axis'
import BasicAxisNotes from './notes/basic-axis.md'
import BasicOnDragStart from './basic-on-drag-start'
import BasicOnDragStartNotes from './notes/basic-on-drag-start.md'
import BasicOnResizeStart from './basic-on-resize-start'
import BasicOnResizeStartNotes from './notes/basic-on-resize-start.md'

export default {
  '基本组件' : withMarkdownNotes(BasicNotes)(() => (new Basic)),
  'minw和minh的基本组件' : withMarkdownNotes(BasicMinWidthHeightNotes)(() => (new BasicMinWidthHeight)),
  'maxw和maxh的基本组件' : withMarkdownNotes(BasicMaxWidthHeightNotes)(() => (new BasicMaxWidthHeight)),
  '内部形式的基本组件' : withMarkdownNotes(BasicWithFormNotes)(() => (new BasicWithForm)),
  '具有主动道具的基本组件' : withMarkdownNotes(BasicActiveNotes)(() => (new BasicActive)),
  '禁止停用的基本组件' : withMarkdownNotes(BasicPreventDeactivationNotes)(() => (new BasicPreventDeactivation)),
  '基本组件不可拖动' : withMarkdownNotes(BasicNotDraggableNotes)(() => (new BasicNotDraggable)),
  '基本组件不可调整大小' : withMarkdownNotes(BasicNotResizableNotes)(() => (new BasicNotResizable)),
  '禁用本机拖动的基本组件' : withMarkdownNotes(BasicNativeDragEnabledNotes)(() => (new BasicNativeDragEnabled)),
  '基本控制组件' : withMarkdownNotes(BasicControlledNotes)(() => (new BasicControlled)),
  '带拖动手柄的基本组件' : withMarkdownNotes(BasicDragHandleNotes)(() => (new BasicDragHandle)),
  '拖动取消的基本组件' : withMarkdownNotes(BasicCancelHandleNotes)(() => (new BasicCancelHandle)),
  '具有z-index的基本组件' : withMarkdownNotes(BasicZIndexNotes)(() => (new BasicZIndex)),
  '带手柄道具的基本组件' : withMarkdownNotes(BasicHandlesNotes)(() => (new BasicHandles)),
  '轴支撑的基本组件' : withMarkdownNotes(BasicAxisNotes)(() => (new BasicAxis)),
  'onDragStart回调的基本组件' : withMarkdownNotes(BasicOnDragStartNotes)(() => (new BasicOnDragStart)),
  'onResizeStart回调的基本组件' : withMarkdownNotes(BasicOnResizeStartNotes)(() => (new BasicOnResizeStart))
}
