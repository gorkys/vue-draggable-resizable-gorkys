import { withMarkdownNotes } from '@storybook/addon-notes';

import EventsActivated from './events-activated'
import EventsActivatedNotes from './notes/events-activated.md'
import EventsDragging from './events-dragging'
import EventsDraggingNotes from './notes/events-dragging.md'
import EventsResizing from './events-resizing'
import EventsResizingNotes from './notes/events-resizing.md'

export default {
  '激活' : [() => new EventsActivated, EventsActivatedNotes],
  '拖动' : [() => new EventsDragging, EventsDraggingNotes],
  '调整' : [() => new EventsResizing, EventsResizingNotes]
}
