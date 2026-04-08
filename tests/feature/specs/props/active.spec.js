import VueDraggableResizable from '@/components/vue-draggable-resizable'
import { mount } from '@vue/test-utils'
import syn from 'syn'

let wrapper

describe('`active` prop', function () {
  it('should enable the component through `active` prop', function () {
    wrapper = mount(VueDraggableResizable, {
      propsData: {
        active: true
      }
    })

    expect(wrapper.props().active).to.be.true
    expect(wrapper.classes()).to.contain('active')
  })

  it('should not show handles if the component is not active', function () {
    wrapper = mount(VueDraggableResizable, {
      propsData: {
        active: false
      }
    })

    expect(wrapper.find('div.handle').isVisible()).to.be.false
  })

  it('should show handles if the component is active', function () {
    wrapper = mount(VueDraggableResizable, {
      propsData: {
        active: true
      }
    })

    expect(wrapper.find('div.handle').isVisible()).to.be.true
  })

  it('should react to the `active` prop', async function () {
    wrapper = mount(VueDraggableResizable, {
      propsData: {
        active: false
      }
    })

    await wrapper.setProps({ active: true })

    expect(wrapper.classes()).to.contain('active')
  })

  it('should activate the component when clicking on it', async function () {
    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true
    })

    await wrapper.vm.$nextTick()
    await wrapper.trigger('mousedown')

    expect(wrapper.emitted()).to.have.property('activated')
    expect(wrapper.emitted()).to.have.property('update:active')
  })

  it('should deactivate the component when clicking outside it', async function () {
    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        active: true
      }
    })

    await syn.click(document.body)

    await wrapper.vm.$nextTick()

    expect(wrapper.classes()).to.not.contain('active')
    expect(wrapper.emitted()).to.have.property('deactivated')
    expect(wrapper.emitted()).to.have.property('update:active')
  })

  it('should not activate the component when right-clicking on it', async function () {
    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        active: false
      }
    })

    await wrapper.trigger('mousedown', {
      button: 2,
      buttons: 2
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.classes()).to.not.contain('active')
    expect(wrapper.emitted()).to.not.have.property('activated')
    expect(wrapper.emitted()).to.not.have.property('update:active')
  })

  it('should resize the component also when it is activated using prop', async function () {
    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        w: 100,
        h: 100,
        active: false
      }
    })

    await wrapper.setProps({ active: true })

    await wrapper.vm.$nextTick()

    const $el = wrapper.vm.$el
    const rect = $el.querySelector('div.handle-br').getBoundingClientRect()
    const fromX = rect.left
    const fromY = rect.top

    await syn.drag(
      $el.querySelector('div.handle-br'),
      {
        from: { pageX: fromX, pageY: fromY },
        to: { pageX: fromX + 10, pageY: fromY + 10 },
        duration: 10
      }
    )

    expect(wrapper.emitted()).to.have.property('resizing')
    expect(wrapper.emitted().resizing.pop()).to.deep.equal([0, 0, 110, 110])
  })

  it('should activate the component when touching on it', async function () {
    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true
    })

    await wrapper.vm.$nextTick()

    const touch = new Touch({
      identifier: 1,
      target: wrapper.vm.$el
    })

    await wrapper.trigger('touchstart', {
      touches: [touch]
    })

    expect(wrapper.emitted()).to.have.property('activated')
    expect(wrapper.emitted()).to.have.property('update:active')
  })

  afterEach(() => wrapper.destroy())
})

describe('`prevent-deactivation` prop', function () {
  it('should not deactivate the component when clicking outside it', async function () {
    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        active: true,
        preventDeactivation: true
      }
    })

    expect(wrapper.props().preventDeactivation).to.be.true

    await syn.click(document.body)

    await wrapper.vm.$nextTick()

    expect(wrapper.props().active).to.be.true
    expect(wrapper.emitted()).to.not.have.property('deactivated')
  })

  afterEach(() => wrapper.destroy())
})
