import { afterEach } from 'vitest'

function parsePixels (value) {
  if (!value || value === 'auto') return 0
  const parsed = Number.parseFloat(value)
  return Number.isNaN(parsed) ? 0 : parsed
}

function estimateTextSize (text) {
  const trimmed = text.trim()

  if (!trimmed) {
    return { width: 0, height: 0 }
  }

  return {
    width: trimmed.length * 8,
    height: 16
  }
}

function measureAutoSize (element, axis) {
  const childElements = Array.from(element.children || []).filter((child) => {
    if (!(child instanceof HTMLElement)) {
      return false
    }

    if (child.classList.contains('handle')) {
      return false
    }

    return window.getComputedStyle(child).position !== 'absolute'
  })

  if (childElements.length > 0) {
    if (axis === 'width') {
      return Math.max(...childElements.map(child => child.offsetWidth), 0)
    }

    return childElements.reduce((total, child) => total + child.offsetHeight, 0)
  }

  const estimated = estimateTextSize(element.textContent || '')

  return axis === 'width' ? estimated.width : estimated.height
}

function parseTransform (transform) {
  const match = /translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(transform || '')
  if (!match) return [0, 0]
  return [Number.parseFloat(match[1]) || 0, Number.parseFloat(match[2]) || 0]
}

function wrapDoneCallback (fn) {
  if (typeof fn !== 'function' || fn.length === 0) {
    return fn
  }

  return function wrappedWithDone () {
    return new Promise((resolve, reject) => {
      let settled = false

      const done = (error) => {
        if (settled) {
          return
        }

        settled = true

        if (error) {
          reject(error)
          return
        }

        resolve()
      }

      try {
        const result = fn.call(this, done)

        if (result && typeof result.then === 'function') {
          result.then(() => done(), reject)
        }
      } catch (error) {
        reject(error)
      }
    })
  }
}

function patchTestRegistrar (name) {
  const original = globalThis[name]

  if (typeof original !== 'function' || original.__legacyDonePatched) {
    return
  }

  const wrapRegistrar = (registrar) => (title, fn, ...rest) => registrar(title, wrapDoneCallback(fn), ...rest)
  const patched = wrapRegistrar(original)

  for (const method of ['only', 'skip', 'fails', 'concurrent']) {
    if (typeof original[method] === 'function') {
      patched[method] = wrapRegistrar(original[method])
    }
  }

  if (typeof original.todo === 'function') {
    patched.todo = original.todo.bind(original)
  }

  if (typeof original.each === 'function') {
    patched.each = (...tableArgs) => {
      const eachRegistrar = original.each(...tableArgs)
      return wrapRegistrar(eachRegistrar)
    }
  }

  patched.__legacyDonePatched = true
  globalThis[name] = patched
}

patchTestRegistrar('it')
patchTestRegistrar('test')

if (typeof globalThis.Touch === 'undefined') {
  globalThis.Touch = class Touch {
    constructor (init = {}) {
      Object.assign(this, init)
    }
  }
}

if (typeof globalThis.requestAnimationFrame === 'undefined') {
  globalThis.requestAnimationFrame = (callback) => setTimeout(callback, 0)
  globalThis.cancelAnimationFrame = (id) => clearTimeout(id)
}

Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
  configurable: true,
  get () {
    const width = parsePixels(this.style.width || window.getComputedStyle(this).width)
    return width || measureAutoSize(this, 'width')
  }
})

Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
  configurable: true,
  get () {
    const height = parsePixels(this.style.height || window.getComputedStyle(this).height)
    return height || measureAutoSize(this, 'height')
  }
})

Object.defineProperty(HTMLElement.prototype, 'offsetLeft', {
  configurable: true,
  get () {
    return this.getBoundingClientRect().left
  }
})

Object.defineProperty(HTMLElement.prototype, 'offsetTop', {
  configurable: true,
  get () {
    return this.getBoundingClientRect().top
  }
})

HTMLElement.prototype.getBoundingClientRect = function getBoundingClientRect () {
  const width = this.offsetWidth
  const height = this.offsetHeight
  const style = window.getComputedStyle(this)
  const [left, top] = parseTransform(style.transform || this.style.transform)

  return {
    x: left,
    y: top,
    top,
    left,
    width,
    height,
    right: left + width,
    bottom: top + height,
    toJSON () {
      return this
    }
  }
}

afterEach(() => {
  document.body.innerHTML = ''
})
