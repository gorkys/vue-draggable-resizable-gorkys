import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import './styles.css';

import AspectRatioStories from './aspect-ratio/index'
import BasicStories from './basic/index'
import GridStories from './grid/index'
import ParentStories from './parent/index'
import StylingStories from './styling/index'
import EventsStories from './events/index'
import AdvancedStories from './advanced/index'

for (var story in BasicStories) {
  storiesOf('基本', module)
    .add(story, BasicStories[story])
}

for (var story in GridStories) {
  storiesOf('网格', module)
    .add(story, GridStories[story])
}

for (var story in ParentStories) {
  storiesOf('父级', module)
    .add(story, ParentStories[story])
}

for (var story in AspectRatioStories) {
  storiesOf('宽高比', module)
    .add(story, AspectRatioStories[story])
}

for (var story in StylingStories) {
  storiesOf('样式', module)
    .add(story, StylingStories[story])
}

for (var story in EventsStories) {
  storiesOf('活动', module)
    .add(story, EventsStories[story])
}

for (var story in AdvancedStories) {
  storiesOf('高级', module)
    .add(story, AdvancedStories[story])
}
