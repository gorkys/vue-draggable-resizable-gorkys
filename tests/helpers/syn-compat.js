function createMouseEvent (type, coords = {}) {
  const pageX = coords.pageX ?? coords.clientX ?? 0
  const pageY = coords.pageY ?? coords.clientY ?? 0
  const button = coords.button ?? 0
  const event = new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    button,
    buttons: coords.buttons ?? 1,
    clientX: coords.clientX ?? pageX,
    clientY: coords.clientY ?? pageY
  })

  Object.defineProperty(event, 'pageX', { configurable: true, value: pageX })
  Object.defineProperty(event, 'pageY', { configurable: true, value: pageY })
  Object.defineProperty(event, 'which', { configurable: true, value: coords.which ?? (button === 2 ? 3 : 1) })

  return event
}

function dispatch (target, type, coords) {
  target.dispatchEvent(createMouseEvent(type, coords))
}

function wait (duration = 0) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

async function complete (callback, duration = 0) {
  await wait(duration)

  if (typeof callback === 'function') {
    callback()
  }
}

export default {
  async click (target, callback) {
    dispatch(target, 'mousedown')
    dispatch(target, 'mouseup')
    dispatch(target, 'click')
    await complete(callback)
  },
  async drag (target, options = {}, callback) {
    const from = options.from || {}
    const to = options.to || from
    const duration = options.duration ?? 0
    const moveTarget = document.documentElement
    const stepCount = Math.max(1, Math.min(20, Math.ceil(duration / 75) || 1))

    dispatch(target, 'mousedown', from)

    for (let step = 1; step <= stepCount; step++) {
      const progress = step / stepCount
      const current = {
        pageX: (from.pageX ?? 0) + ((to.pageX ?? 0) - (from.pageX ?? 0)) * progress,
        pageY: (from.pageY ?? 0) + ((to.pageY ?? 0) - (from.pageY ?? 0)) * progress
      }

      if (duration > 0) {
        await wait(duration / stepCount)
      }

      dispatch(moveTarget, 'mousemove', current)
      dispatch(document, 'mousemove', current)
      dispatch(window, 'mousemove', current)
    }

    dispatch(moveTarget, 'mouseup', { ...to, buttons: 0 })
    dispatch(document, 'mouseup', { ...to, buttons: 0 })
    dispatch(window, 'mouseup', { ...to, buttons: 0 })

    await complete(callback)
  }
}
