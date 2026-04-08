import VueDraggableResizable from '@/components/vue-draggable-resizable'
import { mount } from '@vue/test-utils'

let parent
let wrapper

describe('`parent` and `position` props', function () {
  it('should set the component position outside the parent node if `parent` prop is false', async function () {
    const ParentComponent = {
      data () {
        return {
          x: 0,
          y: 0
        }
      },
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-resizable :x="x" :y="y" :w="200" :h="200" :parent="false" :active="true"></vue-draggable-resizable>
      </div>`,
      components: {
        VueDraggableResizable
      }
    }

    parent = mount(ParentComponent, {
      attachToDocument: true
    })

    wrapper = parent.findComponent(VueDraggableResizable)

    parent.vm.x = 100
    parent.vm.y = 100
    await parent.vm.$nextTick()

    const $el = wrapper.vm.$el

    expect($el.style.transform).to.equal('translate(100px, 100px)')
    expect($el.style.width).to.equal('200px')
    expect($el.style.height).to.equal('200px')
  })

  it('should not set the component position outside the parent node if `parent` prop is true', async function () {
    const ParentComponent = {
      data () {
        return {
          x: 0,
          y: 0
        }
      },
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-resizable :x="x" :y="y" :w="200" :h="200" :parent="true" :active="true"></vue-draggable-resizable>
      </div>`,
      components: {
        VueDraggableResizable
      }
    }

    parent = mount(ParentComponent, {
      attachToDocument: true
    })

    wrapper = parent.findComponent(VueDraggableResizable)

    parent.vm.x = 100
    parent.vm.y = 100
    await parent.vm.$nextTick()

    const $el = wrapper.vm.$el

    expect($el.style.transform).to.equal('translate(0px, 0px)')
    expect($el.style.width).to.equal('200px')
    expect($el.style.height).to.equal('200px')
  })

  it('should use the latest auto height when clamping the position inside the parent node', async function () {
    const ParentComponent = {
      data () {
        return {
          contentHeight: 50,
          y: 0
        }
      },
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-resizable :x="0" :y="y" :w="100" h="auto" :parent="true" :active="true">
          <div class="content" :style="{ height: contentHeight + 'px' }"></div>
        </vue-draggable-resizable>
      </div>`,
      components: {
        VueDraggableResizable
      }
    }

    parent = mount(ParentComponent, {
      attachToDocument: true
    })

    wrapper = parent.findComponent(VueDraggableResizable)

    parent.vm.contentHeight = 150
    await parent.vm.$nextTick()
    await wrapper.vm.$nextTick()

    parent.vm.y = 100
    await parent.vm.$nextTick()
    await wrapper.vm.$nextTick()

    const $el = wrapper.vm.$el

    expect($el.style.transform).to.equal('translate(0px, 50px)')
  })

  afterEach(() => {
    wrapper.destroy()
    parent.destroy()
  })
})
