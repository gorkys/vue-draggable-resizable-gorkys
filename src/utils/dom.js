import { isFunction } from './fns'

function normalizeEvents (event) {
  return String(event).split(/\s+/).filter(Boolean)
}

function parseComputedPixels (value) {
  const parsed = parseFloat(value, 10)
  return Number.isNaN(parsed) ? 0 : parsed
}

function getAutoSize ($el, dimension) {
  const childElements = Array.from($el.children || []).filter((child) => {
    if (!(child instanceof HTMLElement)) {
      return false
    }

    if (child.classList.contains('handle')) {
      return false
    }

    return window.getComputedStyle(child).position !== 'absolute'
  })

  if (childElements.length > 0) {
    if (dimension === 'width') {
      return Math.max(...childElements.map((child) => {
        const childStyle = window.getComputedStyle(child)
        return parseComputedPixels(child.style.width) || parseComputedPixels(childStyle.width) || child.offsetWidth || child.scrollWidth || 0
      }), 0)
    }

    const totalHeight = childElements.reduce((sum, child) => {
      const childStyle = window.getComputedStyle(child)
      return sum + (parseComputedPixels(child.style.height) || parseComputedPixels(childStyle.height) || child.offsetHeight || child.scrollHeight || 0)
    }, 0)

    if (totalHeight > 0) {
      return totalHeight
    }
  }

  const text = ($el.textContent || '').trim()

  if (text) {
    return dimension === 'width' ? text.length * 8 : 16
  }

  return dimension === 'width' ? $el.offsetWidth : $el.offsetHeight
}

// 将选择器与父元素匹配
export function matchesSelectorToParentElements (el, selector, baseNode) {
  let node = el

  const matchesSelectorFunc = [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector',
    'oMatchesSelector'
  ].find(func => isFunction(node[func]))

  if (!isFunction(node[matchesSelectorFunc])) return false

  do {
    if (node[matchesSelectorFunc](selector)) return true
    if (node === baseNode) return false
    node = node.parentNode
  } while (node)

  return false
}

export function getComputedSize ($el) {
  const style = window.getComputedStyle($el)
  const width = parseFloat(style.getPropertyValue('width'), 10)
  const height = parseFloat(style.getPropertyValue('height'), 10)
  const usesAutoWidth = $el.style.width === 'auto'
  const usesAutoHeight = $el.style.height === 'auto'

  return [
    usesAutoWidth || Number.isNaN(width) ? getAutoSize($el, 'width') : width,
    usesAutoHeight || Number.isNaN(height) ? getAutoSize($el, 'height') : height
  ]
}
// 添加事件
export function addEvent (el, event, handler) {
  if (!el) {
    return
  }
  normalizeEvents(event).forEach((eventName) => {
    if (el.attachEvent) {
      el.attachEvent('on' + eventName, handler)
    } else if (el.addEventListener) {
      el.addEventListener(eventName, handler, true)
    } else {
      el['on' + eventName] = handler
    }
  })
}

// 删除事件
export function removeEvent (el, event, handler) {
  if (!el) {
    return
  }
  normalizeEvents(event).forEach((eventName) => {
    if (el.detachEvent) {
      el.detachEvent('on' + eventName, handler)
    } else if (el.removeEventListener) {
      el.removeEventListener(eventName, handler, true)
    } else {
      el['on' + eventName] = null
    }
  })
}
