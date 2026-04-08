import VueDraggableResizable from '../../src/components/vue-draggable-resizable.vue'

function normalizeLifecycle (story) {
  const normalized = { ...story }

  if (normalized.beforeDestroy && !normalized.beforeUnmount) {
    normalized.beforeUnmount = normalized.beforeDestroy
  }

  if (normalized.destroyed && !normalized.unmounted) {
    normalized.unmounted = normalized.destroyed
  }

  delete normalized.beforeDestroy
  delete normalized.destroyed

  return normalized
}

export function createLegacyStory (factory, parameters = {}) {
  return {
    parameters: {
      layout: 'fullscreen',
      ...parameters
    },
    render: () => {
      const story = normalizeLifecycle(factory())
      const { components, ...rest } = story

      return {
        ...rest,
        components: {
          VueDraggableResizable,
          ...(components || {})
        }
      }
    }
  }
}
