import VueDraggableResizable from '@/components/vue-draggable-resizable'
import { mount } from '@vue/test-utils'
import syn from 'syn'

let wrapper
let selectorBoundary

describe('`parent` prop', function () {
  it('should drag the component outside the parent node if `parent` prop is false', async function () {
    const ParentComponent = {
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-resizable :x="0" :y="0" :w="200" :h="200" :parent="false" :active="true"></vue-draggable-resizable>
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

    expect($el.style.transform).to.equal('translate(50px, 50px)')
  })

  it('should not drag the component outside the parent node if `parent` prop is true', async function () {
    const ParentComponent = {
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-resizable :x="0" :y="0" :w="200" :h="200" :parent="true" :active="true"></vue-draggable-resizable>
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
        from: { pageX: rect.left + rect.width / 2, pageY: rect.top + rect.height / 2 },
        to: { pageX: rect.left + rect.width / 2 + 50, pageY: rect.top + rect.height / 2 + 50 },
        duration: 10
      }
    )

    expect($el.style.transform).to.equal('translate(0px, 0px)')
  })

  it('should resize the component outside the parent node if `parent` prop is false', async function () {
    const ParentComponent = {
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-resizable :w="200" :h="200" :parent="false" :active="true"></vue-draggable-resizable>
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

    expect($el.style.transform).to.equal('translate(0px, 0px)')
    expect($el.style.width).to.equal('250px')
    expect($el.style.height).to.equal('250px')
  })

  it('should not resize the component outside the parent node if `parent` prop is true', async function () {
    const ParentComponent = {
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-resizable :w="200" :h="200" :parent="true" :active="true"></vue-draggable-resizable>
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

    expect($el.style.transform).to.equal('translate(0px, 0px)')
    expect($el.style.width).to.equal('200px')
    expect($el.style.height).to.equal('200px')
  })

  it('should accept a parent selector string and clamp dragging to the matched element', async function () {
    selectorBoundary = document.createElement('div')
    selectorBoundary.className = 'parent-selector-boundary'
    selectorBoundary.style.width = '200px'
    selectorBoundary.style.height = '200px'
    document.body.appendChild(selectorBoundary)

    wrapper = mount(VueDraggableResizable, {
      attachTo: selectorBoundary,
      props: {
        x: 0,
        y: 0,
        w: 200,
        h: 200,
        parent: '.parent-selector-boundary',
        active: true
      }
    })

    await wrapper.vm.$nextTick()

    const $el = wrapper.element

    const rect = $el.getBoundingClientRect()
    const fromX = rect.left + rect.width / 2
    const fromY = rect.top + rect.height / 2

    await syn.drag(
      $el,
      {
        from: { pageX: fromX, pageY: fromY },
        to: { pageX: fromX + 50, pageY: fromY + 50 },
        duration: 10
      }
    )

    expect($el.style.transform).to.equal('translate(0px, 0px)')
  })

  afterEach(() => {
    if (wrapper) {
      wrapper.destroy()
      wrapper = null
    }

    if (selectorBoundary?.parentNode) {
      selectorBoundary.parentNode.removeChild(selectorBoundary)
    }

    selectorBoundary = null
  })
})
