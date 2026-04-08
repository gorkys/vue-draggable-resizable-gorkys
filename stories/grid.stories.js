import VueDraggableResizable from '../src/components/vue-draggable-resizable.vue'
import Grid2020 from './grid/grid-20-20'
import Grid2020WithOffset from './grid/grid-20-20-with-offset'
import Grid2040 from './grid/grid-20-40'
import Grid2040WithOffsetAndMax from './grid/grid-20-40-with-offset-and-max'
import Grid2040WithOffsetAndMin from './grid/grid-20-40-with-offset-and-min'
import { createLegacyStory } from './helpers/legacy-story'

export default {
  title: 'Examples/Grid',
  component: VueDraggableResizable
}

export const Grid20x20 = createLegacyStory(Grid2020)
export const Grid20x40 = createLegacyStory(Grid2040)
export const Grid20x20WithOffset = createLegacyStory(Grid2020WithOffset)
export const Grid20x40WithOffsetAndMin = createLegacyStory(Grid2040WithOffsetAndMin)
export const Grid20x40WithOffsetAndMax = createLegacyStory(Grid2040WithOffsetAndMax)
