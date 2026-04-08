import VueDraggableResizable from '../src/components/vue-draggable-resizable.vue'
import AdsorptionAlignmentStory from './advanced/adsorption-alignment'
import ConflictDetectionStory from './advanced/conflict-detection'
import RefLineAlignStory from './advanced/refLine-align'
import { createLegacyStory } from './helpers/legacy-story'

export default {
  title: 'Examples/Advanced',
  component: VueDraggableResizable
}

export const ParentResize = {
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    components: { VueDraggableResizable },
    template: `
      <div style="position: relative; height: 400px; border: 1px solid #3b82f6; margin: 1em; box-sizing: border-box;">
        <vue-draggable-resizable :w="200" :h="200" :parent="true">
          <p>Resize the parent container and keep the component constrained inside it.</p>
        </vue-draggable-resizable>
      </div>
    `
  })
}

export const ConflictDetection = createLegacyStory(ConflictDetectionStory)
export const SnapAlignment = createLegacyStory(AdsorptionAlignmentStory)
export const ReferenceGuides = createLegacyStory(RefLineAlignStory)
