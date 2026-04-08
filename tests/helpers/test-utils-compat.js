import * as testUtils from '@vue/test-utils-real'

function patchLegacyWrapperApi (WrapperConstructor) {
  if (!WrapperConstructor || !WrapperConstructor.prototype) {
    return
  }

  if (typeof WrapperConstructor.prototype.destroy !== 'function' && typeof WrapperConstructor.prototype.unmount === 'function') {
    WrapperConstructor.prototype.destroy = function destroy () {
      try {
        return this.unmount()
      } catch (error) {
        if (/root wrapper/.test(error.message)) {
          return undefined
        }

        throw error
      }
    }
  }

  if (typeof WrapperConstructor.prototype.contains !== 'function') {
    WrapperConstructor.prototype.contains = function contains (selector) {
      return this.find(selector).exists()
    }
  }

  if (typeof WrapperConstructor.prototype.is !== 'function') {
    WrapperConstructor.prototype.is = function is (selector) {
      if (!this.exists()) {
        return false
      }

      if (typeof selector === 'string') {
        if (this.element && typeof this.element.matches === 'function') {
          return this.element.matches(selector)
        }

        return this.element?.tagName?.toLowerCase() === selector.toLowerCase()
      }

      return false
    }
  }

  if (!WrapperConstructor.prototype.__legacyTriggerPatched && typeof WrapperConstructor.prototype.trigger === 'function') {
    const originalTrigger = WrapperConstructor.prototype.trigger

    WrapperConstructor.prototype.trigger = function trigger (event, options = {}) {
      const eventName = String(event).split('.')[0]
      const isMouseEvent = /^mouse|click$|contextmenu$/.test(eventName)
      const normalizedOptions = isMouseEvent
        ? {
            button: 0,
            buttons: 1,
            ...options
          }
        : options

      return originalTrigger.call(this, event, normalizedOptions)
    }

    WrapperConstructor.prototype.__legacyTriggerPatched = true
  }
}

patchLegacyWrapperApi(testUtils.DOMWrapper)
patchLegacyWrapperApi(testUtils.VueWrapper)

function normalizeMountOptions (options = {}) {
  const normalized = { ...options }

  if (normalized.propsData) {
    normalized.props = {
      ...(normalized.props || {}),
      ...normalized.propsData
    }
    delete normalized.propsData
  }

  if (normalized.attachToDocument) {
    normalized.attachTo = document.body
    delete normalized.attachToDocument
  }

  return normalized
}

function decorateWrapper (wrapper) {
  if (wrapper && typeof wrapper.unmount === 'function' && typeof wrapper.destroy !== 'function') {
    Object.defineProperty(wrapper, 'destroy', {
      configurable: true,
      enumerable: false,
      value: () => {
        try {
          return wrapper.unmount()
        } catch (error) {
          if (/root wrapper/.test(error.message)) {
            return undefined
          }

          throw error
        }
      }
    })
  }

  return wrapper
}

export function mount (component, options) {
  return decorateWrapper(testUtils.mount(component, normalizeMountOptions(options)))
}

export function shallowMount (component, options) {
  return decorateWrapper(testUtils.shallowMount(component, normalizeMountOptions(options)))
}

export function createWrapper () {
  throw new Error('createWrapper is not supported in the Vue 3 test setup. Use findComponent instead.')
}

export * from '@vue/test-utils-real'
