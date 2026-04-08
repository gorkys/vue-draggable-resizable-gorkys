import VueDraggableResizable from '@/components/vue-draggable-resizable'
import { mount } from '@vue/test-utils'

let parent
let wrapper

describe('`parent` and `size` props', function () {
  it('should set the component size outside the parent node if `parent` prop is false', async function () {
    const ParentComponent = {
      data () {
        return {
          w: 200,
          h: 200
        }
      },
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-resizable :x="0" :y="0" :w="w" :h="h" :parent="false" :active="true"></vue-draggable-resizable>
      </div>`,
      components: {
        VueDraggableResizable
      }
    }

    parent = mount(ParentComponent, {
      attachToDocument: true
    })

    wrapper = parent.findComponent(VueDraggableResizable)

    parent.vm.w = 300
    parent.vm.h = 300
    await parent.vm.$nextTick()

    const $el = wrapper.vm.$el

    expect($el.style.transform).to.equal('translate(0px, 0px)')
    expect($el.style.width).to.equal('300px')
    expect($el.style.height).to.equal('300px')
  })

  it('should not set the component size outside the parent node if `parent` prop is true', async function () {
    const ParentComponent = {
      data () {
        return {
          w: 200,
          h: 200
        }
      },
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-resizable :x="0" :y="0" :w="w" :h="h" :parent="true" :active="true"></vue-draggable-resizable>
      </div>`,
      components: {
        VueDraggableResizable
      }
    }

    parent = mount(ParentComponent, {
      attachToDocument: true
    })

    wrapper = parent.findComponent(VueDraggableResizable)

    parent.vm.w = 300
    parent.vm.h = 300
    await parent.vm.$nextTick()

    const $el = wrapper.vm.$el

    expect($el.style.transform).to.equal('translate(0px, 0px)')
    expect($el.style.width).to.equal('200px')
    expect($el.style.height).to.equal('200px')
  })

  afterEach(() => {
    wrapper.destroy()
    parent.destroy()
  })
})
