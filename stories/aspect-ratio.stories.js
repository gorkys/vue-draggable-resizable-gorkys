import VueDraggableResizable from '../src/components/vue-draggable-resizable.vue'
import AspectRatioGridWithOffsetAndMinStory from './aspect-ratio/aspect-ratio-grid-with-offset-and-min'
import AspectRatioInParentStory from './aspect-ratio/aspect-ratio-in-parent'
import AspectRatioStory from './aspect-ratio/aspect-ratio'
import AspectRatioWithGridInParentStory from './aspect-ratio/aspect-ratio-with-grid-in-parent'
import AspectRatioWithGridStory from './aspect-ratio/aspect-ratio-with-grid'
import AspectRatioWithMaxWidthMaxHeightStory from './aspect-ratio/aspect-ratio-with-maxw-maxh'
import AspectRatioWithMinWidthMinHeightStory from './aspect-ratio/aspect-ratio-with-minw-minh'
import { createLegacyStory } from './helpers/legacy-story'

export default {
  title: 'Examples/Aspect Ratio',
  component: VueDraggableResizable
}

export const BasicAspectRatio = createLegacyStory(AspectRatioStory)
export const AspectRatioWithGrid = createLegacyStory(AspectRatioWithGridStory)
export const AspectRatioInParent = createLegacyStory(AspectRatioInParentStory)
export const AspectRatioWithGridInParent = createLegacyStory(AspectRatioWithGridInParentStory)
export const AspectRatioWithMinConstraints = createLegacyStory(AspectRatioWithMinWidthMinHeightStory)
export const AspectRatioWithMaxConstraints = createLegacyStory(AspectRatioWithMaxWidthMaxHeightStory)
export const AspectRatioWithGridOffsetAndMin = createLegacyStory(AspectRatioGridWithOffsetAndMinStory)
