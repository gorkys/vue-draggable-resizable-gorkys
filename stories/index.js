import { storiesOf } from '@storybook/vue'

import './styles.css';

import AspectRatioStories from './aspect-ratio/index'
import BasicStories from './basic/index'
import GridStories from './grid/index'
import ParentStories from './parent/index'
import StylingStories from './styling/index'
import EventsStories from './events/index'
import AdvancedStories from './advanced/index'
import HowToStories from './how-to/index'

for (var story in BasicStories) {
  storiesOf('基本', module)
    .add(story, BasicStories[story][0], markdownNotes(BasicStories[story][1]))
}

for (var story in GridStories) {
  storiesOf('网格', module)
    .add(story, GridStories[story][0], markdownNotes(GridStories[story][1]))
}

for (var story in ParentStories) {
  storiesOf('父级', module)
    .add(story, ParentStories[story][0], markdownNotes(ParentStories[story][1]))
}

for (var story in AspectRatioStories) {
  storiesOf('宽高比', module)
    .add(story, AspectRatioStories[story][0], markdownNotes(AspectRatioStories[story][1]))
}

for (var story in StylingStories) {
  storiesOf('样式', module)
    .add(story, StylingStories[story][0], markdownNotes(StylingStories[story][1]))
}

for (var story in EventsStories) {
  storiesOf('活动', module)
    .add(story, EventsStories[story][0], markdownNotes(EventsStories[story][1]))
}

for (var story in AdvancedStories) {
  storiesOf('高级', module)
    .add(story, AdvancedStories[story][0], markdownNotes(AdvancedStories[story][1]))
}

for (var story in HowToStories) {
  storiesOf('How To', module)
    .add(story, HowToStories[story][0], markdownNotes(HowToStories[story][1]))
}

/**
 * Render markdown notes, if available
 * @param  {String} notes
 * @return {Object}
 */
function markdownNotes(notes) {
  return notes
    ? { notes: { markdown: notes }}
    : {}
}
