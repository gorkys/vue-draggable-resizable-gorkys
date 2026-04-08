import VueDraggableResizable from '../src/components/vue-draggable-resizable.vue'
import ParentBasicCaseStory from './parent/parent-basic-case'
import ParentControlledComponentStory from './parent/parent-controlled-component'
import ParentGridMaxWidthMaxHeightStory from './parent/parent-grid-maxw-maxh'
import ParentGridStory from './parent/parent-grid'
import ParentGridWithEvenOffsetStory from './parent/parent-grid-with-even-offset'
import ParentGridWithOffsetStory from './parent/parent-grid-with-offset'
import ParentMaxWidthMaxHeightStory from './parent/parent-maxw-maxh'
import ParentUserSelectStory from './parent/parent-user-select'
import { createLegacyStory } from './helpers/legacy-story'

export default {
  title: 'Examples/Parent',
  component: VueDraggableResizable
}

export const ParentBounds = createLegacyStory(ParentBasicCaseStory)
export const ParentMaxConstraints = createLegacyStory(ParentMaxWidthMaxHeightStory)
export const ParentGrid = createLegacyStory(ParentGridStory)
export const ParentGridWithOffset = createLegacyStory(ParentGridWithOffsetStory)
export const ParentGridWithEvenOffset = createLegacyStory(ParentGridWithEvenOffsetStory)
export const ParentGridMaxConstraints = createLegacyStory(ParentGridMaxWidthMaxHeightStory)
export const ParentControlled = createLegacyStory(ParentControlledComponentStory)
export const ParentUserSelect = createLegacyStory(ParentUserSelectStory)
