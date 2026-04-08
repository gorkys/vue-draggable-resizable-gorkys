import VueDraggableResizable from '@/components/vue-draggable-resizable'
import { mount } from '@vue/test-utils'
import syn from 'syn'
import sinon from 'sinon'

let wrapper

describe('`onDragStart` and `onResizeStart` props', function () {
  it('should call `onDragStart` callback when the component is clicked', async function () {
    const onDragStartCallback = sinon.spy()

    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        onDragStart: onDragStartCallback
      }
    })

    await wrapper.trigger('mousedown')

    sinon.assert.called(onDragStartCallback)
  })

  it('should prevent activation of the component if the `onDragStart` callback returns false', async function () {
    const onDragStartCallback = () => false

    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        onDragStart: onDragStartCallback
      }
    })

    await wrapper.trigger('mousedown')

    expect(wrapper.emitted()).to.not.have.property('activated')
    expect(wrapper.classes()).to.not.contain('active')
  })

  it('should call `onResizeStart` callback when the component is resized', async function () {
    const onResizeStartCallback = sinon.spy()

    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        active: true,
        onResizeStart: onResizeStartCallback
      }
    })

    await wrapper.vm.$nextTick()

    const $el = wrapper.vm.$el
    const handle = $el.querySelector('div.handle-br')
    const rect = handle.getBoundingClientRect()

    await syn.drag(
      handle,
      {
        from: { pageX: rect.left, pageY: rect.top },
        to: { pageX: rect.left + 50, pageY: rect.top + 50 },
        duration: 10
      }
    )

    sinon.assert.called(onResizeStartCallback)
  })

  it('should prevent resizing the component if the `onResizeStart` callback returns false', async function () {
    const onResizeStartCallback = () => false

    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        active: true,
        w: 100,
        h: 100,
        onResizeStart: onResizeStartCallback
      }
    })

    await wrapper.vm.$nextTick()

    const $el = wrapper.vm.$el
    const handle = $el.querySelector('div.handle-br')
    const rect = handle.getBoundingClientRect()

    await syn.drag(
      handle,
      {
        from: { pageX: rect.left, pageY: rect.top },
        to: { pageX: rect.left + 50, pageY: rect.top + 50 },
        duration: 10
      }
    )

    expect($el.style.width).to.equal('100px')
    expect($el.style.height).to.equal('100px')
  })

  afterEach(() => wrapper.destroy())
})

describe('`onDrag` and `onResize` props', function () {
  it('should call `onDrag` callback when the component is dragged', async function () {
    const onDragCallback = sinon.spy()

    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        onDrag: onDragCallback,
        active: true,
        w: 100,
        h: 100
      }
    })

    await wrapper.vm.$nextTick()

    const $el = wrapper.vm.$el
    const rect = $el.getBoundingClientRect()

    await syn.drag(
      $el,
      {
        from: { pageX: rect.left + rect.width / 2, pageY: rect.top + rect.height / 2 },
        to: { pageX: rect.left + rect.width / 2 + 50, pageY: rect.top + rect.height / 2 + 50 }
      }
    )

    sinon.assert.called(onDragCallback)
    sinon.assert.calledWith(onDragCallback, 50, 50)
  })

  it('should prevent dragging the component if the `onDrag` callback returns false', async function () {
    const onDragCallback = (x, y) => {
      if (x > 10) return false
      if (y > 10) return false
    }

    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        onDrag: onDragCallback,
        active: true,
        w: 100,
        h: 100
      }
    })

    await wrapper.vm.$nextTick()

    const $el = wrapper.vm.$el
    const rect = $el.getBoundingClientRect()

    await syn.drag(
      $el,
      {
        from: { pageX: rect.left + rect.width / 2, pageY: rect.top + rect.height / 2 },
        to: { pageX: rect.left + rect.width / 2 + 50, pageY: rect.top + rect.height / 2 + 50 },
        duration: 1500
      }
    )

    expect($el.style.transform).to.equal('translate(10px, 10px)')
    expect($el.style.width).to.equal('100px')
    expect($el.style.height).to.equal('100px')
  })

  it('should call `onResize` callback when the component is resized', async function () {
    const onResizeCallback = sinon.spy()

    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        onResize: onResizeCallback,
        active: true,
        w: 100,
        h: 100
      }
    })

    await wrapper.vm.$nextTick()

    const $el = wrapper.vm.$el
    const handle = $el.querySelector('div.handle-br')
    const rect = handle.getBoundingClientRect()

    await syn.drag(
      handle,
      {
        from: { pageX: rect.left, pageY: rect.top },
        to: { pageX: rect.left + 50, pageY: rect.top + 50 },
        duration: 10
      }
    )

    sinon.assert.called(onResizeCallback)
    sinon.assert.calledWith(onResizeCallback, 'br', 0, 0, 150, 150)
  })

  it('should prevent resizing the component if the `onResize` callback returns false', async function () {
    const onResizeCallback = (handle, x, y, w, h) => {
      if (w > 110) return false
      if (h > 110) return false
    }

    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        active: true,
        w: 100,
        h: 100,
        onResize: onResizeCallback
      }
    })

    await wrapper.vm.$nextTick()

    const $el = wrapper.vm.$el
    const handle = $el.querySelector('div.handle-br')
    const rect = handle.getBoundingClientRect()

    await syn.drag(
      handle,
      {
        from: { pageX: rect.left, pageY: rect.top },
        to: { pageX: rect.left + 50, pageY: rect.top + 50 },
        duration: 1500
      }
    )

    expect($el.style.width).to.equal('110px')
    expect($el.style.height).to.equal('110px')
  })

  afterEach(() => wrapper.destroy())
})
