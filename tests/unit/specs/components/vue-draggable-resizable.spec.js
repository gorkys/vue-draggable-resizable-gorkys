import { expect } from 'chai'
import VueDraggableResizable from '@/components/vue-draggable-resizable'

function createResizeContext (handle) {
  return {
    handle,
    left: 0,
    top: 0,
    right: -200,
    bottom: -100,
    width: 200,
    height: 100,
    widthTouched: false,
    heightTouched: false,
    lockAspectRatio: true,
    aspectFactor: 2,
    scaleRatio: 1,
    grid: [1, 1],
    bounds: {
      minLeft: null,
      maxLeft: null,
      minTop: null,
      maxTop: null,
      minRight: null,
      maxRight: null,
      minBottom: null,
      maxBottom: null
    },
    mouseClickPosition: {
      mouseX: 0,
      mouseY: 0,
      left: 0,
      top: 0,
      right: -200,
      bottom: -100
    },
    parentWidth: null,
    parentHeight: null,
    onResize: () => true,
    $emit: () => {}
  }
}

describe('vue-draggable-resizable', function () {
  describe('handleResize', function () {
    it('should keep the bottom-left corner fixed when resizing from the top-right handle with lockAspectRatio', function () {
      const context = createResizeContext('tr')

      VueDraggableResizable.methods.handleResize.call(context, {
        pageX: 100,
        pageY: 0
      })

      expect(context.left).to.equal(0)
      expect(context.top).to.equal(-50)
      expect(context.width).to.equal(300)
      expect(context.height).to.equal(150)
    })

    it('should keep the top-right corner fixed when resizing from the bottom-left handle with lockAspectRatio', function () {
      const context = createResizeContext('bl')

      VueDraggableResizable.methods.handleResize.call(context, {
        pageX: -100,
        pageY: 0
      })

      expect(context.left).to.equal(-100)
      expect(context.top).to.equal(0)
      expect(context.width).to.equal(300)
      expect(context.height).to.equal(150)
    })
  })
})
