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
  '基本组件' : [() => new Basic, BasicNotes],
  'minw和minh的基本组件' : [() => new BasicMinWidthHeight, BasicMinWidthHeightNotes],
  'maxw和maxh的基本组件' : [() => new BasicMaxWidthHeight, BasicMaxWidthHeightNotes],
  '内部形式的基本组件' : [() => new BasicWithForm, BasicWithFormNotes],
  '具有主动道具的基本组件' : [() => new BasicActive, BasicActiveNotes],
  '禁止停用的基本组件' : [() => new BasicPreventDeactivation, BasicPreventDeactivationNotes],
  '基本组件不可拖动' : [() => new BasicNotDraggable, BasicNotDraggableNotes],
  '基本组件不可调整大小' : [() => new BasicNotResizable, BasicNotResizableNotes],
  '禁用本机拖动的基本组件' : [() => new BasicNativeDragEnabled, BasicNativeDragEnabledNotes],
  '基本控制组件' : [() => new BasicControlled, BasicControlledNotes],
  '带拖动手柄的基本组件' : [() => new BasicDragHandle, BasicDragHandleNotes],
  '拖动取消的基本组件' : [() => new BasicCancelHandle, BasicCancelHandleNotes],
  '具有z-index的基本组件' : [() => new BasicZIndex, BasicZIndexNotes],
  '带手柄道具的基本组件' : [() => new BasicHandles, BasicHandlesNotes],
  '轴支撑的基本组件' : [() => new BasicAxis, BasicAxisNotes],
  'onDragStart回调的基本组件' : [() => new BasicOnDragStart, BasicOnDragStartNotes],
  'onResizeStart回调的基本组件' : [() => new BasicOnResizeStart, BasicOnResizeStartNotes],
}
