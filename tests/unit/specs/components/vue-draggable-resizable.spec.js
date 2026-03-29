import { expect } from 'chai'
import VueDraggableResizable from '@/components/vue-draggable-resizable'

describe('vue-draggable-resizable', function () {
  describe('formatTransformVal', function () {
    it('should preserve decimal and negative translate values', function () {
      expect(
        VueDraggableResizable.methods.formatTransformVal('translate(10.5px, -20.25px)')
      ).to.deep.equal([10.5, -20.25])
    })

    it('should default missing top value to zero', function () {
      expect(
        VueDraggableResizable.methods.formatTransformVal('translate(10.5px)')
      ).to.deep.equal([10.5, 0])
    })
  })
})
