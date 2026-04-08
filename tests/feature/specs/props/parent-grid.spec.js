import VueDraggableResizable from '@/components/vue-draggable-resizable'
import { mount } from '@vue/test-utils'
import syn from 'syn'

let wrapper

function createParentComponent (templateProps) {
  return {
    template: `<div class="parent" style="width: 400px; height: 400px;">
      <vue-draggable-resizable ${templateProps}></vue-draggable-resizable>
    </div>`,
    components: {
      VueDraggableResizable
    }
  }
}

async function mountComponent (templateProps) {
  wrapper = mount(createParentComponent(templateProps), {
    attachToDocument: true
  })

  const component = wrapper.findComponent(VueDraggableResizable)

  await component.vm.$nextTick()

  return component
}

describe('`parent` and `grid` props', function () {
  it('should not drag the component outside the parent node when grid is an exact dividend of the parent size', async function () {
    const component = await mountComponent(':x="0" :y="0" :w="300" :h="300" :parent="true" :active="true" :grid="[20, 20]"')
    const $el = component.vm.$el
    const rect = $el.getBoundingClientRect()

    await syn.drag(
      $el,
      {
        from: { pageX: rect.left + rect.width / 2, pageY: rect.top + rect.height / 2 },
        to: { pageX: rect.left + rect.width / 2 + 120, pageY: rect.top + rect.height / 2 + 120 },
        duration: 10
      }
    )

    expect($el.style.transform).to.equal('translate(100px, 100px)')
  })

  it('should not resize the component outside the parent node when the grid is an exact dividend of the parent size', async function () {
    const component = await mountComponent(':x="0" :y="0" :w="300" :h="300" :parent="true" :active="true" :grid="[20, 20]"')
    const $el = component.vm.$el
    const handle = $el.querySelector('div.handle-br')
    const rect = handle.getBoundingClientRect()

    await syn.drag(
      handle,
      {
        from: { pageX: rect.left, pageY: rect.top },
        to: { pageX: rect.left + 120, pageY: rect.top + 120 },
        duration: 10
      }
    )

    expect($el.style.width).to.equal('400px')
    expect($el.style.height).to.equal('400px')
  })

  it('should not drag the component outside the parent node when grid is not an exact dividend of the parent size', async function () {
    const component = await mountComponent(':parent="true" :grid="[24, 24]" :x="0" :y="0" :w="360" :h="360" :active="true"')
    const $el = component.vm.$el
    const rect = $el.getBoundingClientRect()

    await syn.drag(
      $el,
      {
        from: { pageX: rect.left + rect.width / 2, pageY: rect.top + rect.height / 2 },
        to: { pageX: rect.left + rect.width / 2 + 48, pageY: rect.top + rect.height / 2 + 48 },
        duration: 10
      }
    )

    expect($el.style.transform).to.equal('translate(24px, 24px)')
  })

  it('should not resize the component outside the parent node when the grid is not an exact dividend of the parent size', async function () {
    const component = await mountComponent(':parent="true" :grid="[24, 24]" :x="0" :y="0" :w="360" :h="360" :active="true"')
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

    expect($el.style.width).to.equal('384px')
    expect($el.style.height).to.equal('384px')
  })

  it('should not drag the component outside the parent node when component has offset and grid is not an exact dividend of the parent size', async function () {
    const component = await mountComponent(':parent="true" :grid="[24, 24]" :x="10" :y="10" :w="360" :h="360" :active="true"')
    const $el = component.vm.$el
    const rect = $el.getBoundingClientRect()

    await syn.drag(
      $el,
      {
        from: { pageX: rect.left + rect.width / 2, pageY: rect.top + rect.height / 2 },
        to: { pageX: rect.left + rect.width / 2 + 48, pageY: rect.top + rect.height / 2 + 48 },
        duration: 10
      }
    )

    expect($el.style.transform).to.equal('translate(34px, 34px)')
  })

  it('should not resize the component outside the parent node when component has offset the grid is not an exact dividend of the parent size', async function () {
    const component = await mountComponent(':parent="true" :grid="[24, 24]" :x="10" :y="10" :w="360" :h="360" :active="true"')
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

    expect($el.style.width).to.equal('384px')
    expect($el.style.height).to.equal('384px')
  })

  afterEach(() => wrapper.destroy())
})
