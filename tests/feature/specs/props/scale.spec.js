import VueDraggableResizable from '@/components/vue-draggable-resizable'
import { mount } from '@vue/test-utils'
import syn from 'syn'

let wrapper

describe('`scaleRatio` prop', function () {
  it('should drag the component accordingly to the `scaleRatio` prop', async function () {
    const ParentComponent = {
      template: `<div>
        <vue-draggable-resizable :x="0" :y="0" :w="200" :h="200" :scale-ratio="0.5" :active="true"></vue-draggable-resizable>
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
    const rect = $el.getBoundingClientRect()

    await syn.drag(
      $el,
      {
        from: { pageX: rect.left, pageY: rect.top },
        to: { pageX: rect.left + 50, pageY: rect.top + 50 },
        duration: 10
      }
    )

    expect($el.style.transform).to.equal('translate(100px, 100px)')
  })

  it('should resize the component accordingly to the `scaleRatio` prop', async function () {
    const ParentComponent = {
      template: `<div>
        <vue-draggable-resizable :x="0" :y="0" :w="200" :h="200" :scale-ratio="1.5" :active="true"></vue-draggable-resizable>
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
        to: { pageX: rect.left + 50, pageY: rect.top + 50 },
        duration: 10
      }
    )

    expect($el.style.width).to.equal('233px')
    expect($el.style.height).to.equal('233px')
  })

  afterEach(() => wrapper.destroy())
})
