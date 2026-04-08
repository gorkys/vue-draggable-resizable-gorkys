import VueDraggableResizable from '@/components/vue-draggable-resizable'
import { mount } from '@vue/test-utils'
import syn from 'syn'

let wrapper

describe('`lock-aspect-ratio` prop', function () {
  it('should provide the `lock-aspect-ratio` as prop', function () {
    wrapper = mount(VueDraggableResizable, {
      propsData: {
        lockAspectRatio: true
      }
    })

    expect(wrapper.props().lockAspectRatio).to.be.true
  })

  it('should resize the component accordingly to its aspect ratio if `lock-aspect-ratio` is true', async function () {
    wrapper = mount(VueDraggableResizable, {
      attachToDocument: true,
      propsData: {
        w: 200,
        h: 100,
        active: true,
        lockAspectRatio: true
      }
    })

    await wrapper.vm.$nextTick()

    const $el = wrapper.vm.$el
    const handle = $el.querySelector('div.handle-mr')
    const rect = handle.getBoundingClientRect()

    await syn.drag(
      handle,
      {
        from: { pageX: rect.left, pageY: rect.top },
        to: { pageX: rect.left + 100, pageY: rect.top },
        duration: 10
      }
    )

    expect($el.style.width).to.equal('300px')
    expect($el.style.height).to.equal('150px')
  })

  it('should not resize the component outside the parent node if `parent` prop is true and `lock-aspect-ratio` is set', async function () {
    const ParentComponent = {
      template: `<div class="parent" style="width: 500px; height: 500px;">
        <vue-draggable-resizable :w="300" :h="400" :parent="true" :active="true" :lock-aspect-ratio="true"></vue-draggable-resizable>
      </div>`,
      components: {
        VueDraggableResizable
      }
    }

    wrapper = mount(ParentComponent, {
      attachToDocument: true
    })

    const component = wrapper.findComponent(VueDraggableResizable)

    await component.vm.$nextTick()

    const $el = component.vm.$el
    const handle = $el.querySelector('div.handle-br')
    const rect = handle.getBoundingClientRect()

    await syn.drag(
      handle,
      {
        from: { pageX: rect.left, pageY: rect.top },
        to: { pageX: rect.left + 100, pageY: rect.top },
        duration: 10
      }
    )

    expect($el.style.transform).to.equal('translate(0px, 0px)')
    expect($el.style.width).to.equal('375px')
    expect($el.style.height).to.equal('500px')
  })

  afterEach(() => wrapper.destroy())
})
