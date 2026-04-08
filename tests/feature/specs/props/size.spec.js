import VueDraggableResizable from '@/components/vue-draggable-resizable'
import { mount } from '@vue/test-utils'
import syn from 'syn'

let wrapper

describe('size props', function () {
  it('should set the initial size of the component using `w` and `h` props', async function () {
    wrapper = mount(VueDraggableResizable, {
      propsData: {
        w: 200,
        h: 150
      }
    })

    expect(wrapper.props().w).to.equal(200)
    expect(wrapper.props().h).to.equal(150)

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.$el.style.width).to.equal('200px')
    expect(wrapper.vm.$el.style.height).to.equal('150px')
  })

  it('should react to size prop changes', async function () {
    wrapper = mount(VueDraggableResizable, {
      propsData: {
        w: 200,
        h: 150
      }
    })

    await wrapper.setProps({ w: 250, h: 200 })

    expect(wrapper.vm.$el.style.width).to.equal('250px')
    expect(wrapper.vm.$el.style.height).to.equal('200px')
  })

  it('should allow auto value for `w` and `h` props', async function () {
    wrapper = mount(VueDraggableResizable, {
      propsData: {
        w: 'auto',
        h: 'auto'
      }
    })

    expect(wrapper.props().w).to.equal('auto')
    expect(wrapper.props().h).to.equal('auto')

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.$el.style.width).to.equal('auto')
    expect(wrapper.vm.$el.style.height).to.equal('auto')
  })

  it('should fallback to numeric values for width and height when the component is resized', async function () {
    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        w: 'auto',
        h: 'auto',
        active: true
      },
      slots: {
        default: 'VueDraggableResizable'
      }
    })

    await wrapper.vm.$nextTick()

    const $el = wrapper.vm.$el
    const handle = $el.querySelector('div.handle-br')
    const rect = handle.getBoundingClientRect()
    const { width, height } = $el.getBoundingClientRect()

    await syn.drag(
      handle,
      {
        from: { pageX: rect.left, pageY: rect.top },
        to: { pageX: rect.left + 10, pageY: rect.top + 10 },
        duration: 10
      }
    )

    expect($el.style.transform).to.equal('translate(0px, 0px)')
    expect(parseFloat($el.style.width)).to.equal(width + 10)
    expect(parseFloat($el.style.height)).to.equal(height + 10)
  })

  it('should change `auto` back to numeric values for width and height', async function () {
    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        w: 'auto',
        h: 'auto',
        active: true
      },
      slots: {
        default: 'VueDraggableResizable'
      }
    })

    await wrapper.vm.$nextTick()

    const $el = wrapper.vm.$el

    await wrapper.setProps({ w: 250, h: 200 })

    expect($el.style.width).to.equal('250px')
    expect($el.style.height).to.equal('200px')
  })

  afterEach(() => wrapper.destroy())
})
