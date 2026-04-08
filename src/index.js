import './components/vue-draggable-resizable.css'

import VueDraggableResizable from './components/vue-draggable-resizable.vue'

export function install (app) {
  if (install.installed) return
  install.installed = true
  app.component('VueDraggableResizable', VueDraggableResizable)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  install(GlobalVue)
}

export { VueDraggableResizable }
export default VueDraggableResizable
