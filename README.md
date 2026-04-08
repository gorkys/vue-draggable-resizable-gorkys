# vue-draggable-resizable-gorkys

Vue 3 draggable and resizable component with snapping guides, conflict detection, parent bounds, rotation, and multi-handle resizing.

## Status

- Package version: `3.0.0`
- Framework target: `Vue 3.5+`
- Tooling: `Vite 5`, `Vitest 2`, `Storybook 8`
- Node.js: `>= 20`

## Install

```bash
npm install vue-draggable-resizable-gorkys
```

The package exports:

- component/module entry: `vue-draggable-resizable-gorkys`
- built stylesheet: `vue-draggable-resizable-gorkys/style.css`
- raw SFC entry: `vue-draggable-resizable-gorkys/sfc`

## Vue 3 Usage

### Local registration

```vue
<script setup>
import { ref } from 'vue'
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'
import 'vue-draggable-resizable-gorkys/style.css'

const x = ref(20)
const y = ref(20)
const width = ref(200)
const height = ref(120)
</script>

<template>
  <div style="position: relative; width: 640px; height: 360px; border: 1px dashed #94a3b8;">
    <VueDraggableResizable
      v-model:active="true"
      :x="x"
      :y="y"
      :w="width"
      :h="height"
      :parent="true"
      :snap="true"
      :snap-tolerance="8"
      @dragging="(nextX, nextY) => { x = nextX; y = nextY }"
      @resizing="(nextX, nextY, nextW, nextH) => {
        x = nextX
        y = nextY
        width = nextW
        height = nextH
      }"
    >
      <div
        style="width: 100%; height: 100%; display: grid; place-items: center; background: #0f172a; color: white;"
      >
        Drag and resize me
      </div>
    </VueDraggableResizable>
  </div>
</template>
```

### App-wide registration

```js
import { createApp } from 'vue'
import App from './App.vue'
import VdrPlugin from 'vue-draggable-resizable-gorkys'
import 'vue-draggable-resizable-gorkys/style.css'

createApp(App)
  .use(VdrPlugin)
  .mount('#app')
```

## Key Features

- Dragging and resizing with 8 handles
- Optional parent boundary constraints
- Grid snapping for drag and resize
- Alignment guide lines through `refLineParams`
- Conflict detection between sibling components
- Rotation via `rotate`
- Selector-based parent bounds: `parent=".canvas"`
- Auto z-index promotion with `activeOnTop`
- Right-click selection with `selectOnContextMenu`
- Scaled canvas support via `scaleRatio`

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | `Number` | `0` | Horizontal position. |
| `y` | `Number` | `0` | Vertical position. |
| `w` | `Number \| "auto"` | `200` | Width. Use `"auto"` to follow content width until resized manually. |
| `h` | `Number \| "auto"` | `200` | Height. Use `"auto"` to follow content height until resized manually. |
| `active` | `Boolean` | `false` | Initial active state. Supports `v-model:active`. |
| `draggable` | `Boolean` | `true` | Enables dragging. |
| `resizable` | `Boolean` | `true` | Enables resize handles. |
| `parent` | `Boolean \| String` | `false` | Constrain to parent element or to a selector target. |
| `grid` | `Number[]` | `[1, 1]` | Drag/resize grid. |
| `axis` | `"x" \| "y" \| "both"` | `"both"` | Restrict drag axis. |
| `minWidth` | `Number` | `0` | Minimum width. |
| `minHeight` | `Number` | `0` | Minimum height. |
| `maxWidth` | `Number \| null` | `null` | Maximum width. |
| `maxHeight` | `Number \| null` | `null` | Maximum height. |
| `z` | `Number \| "auto"` | `"auto"` | z-index. |
| `handles` | `String[]` | `['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']` | Visible resize handles. |
| `dragHandle` | `String \| null` | `null` | Only start dragging from matching descendants. |
| `dragCancel` | `String \| null` | `null` | Prevent dragging from matching descendants. |
| `lockAspectRatio` | `Boolean` | `false` | Preserve aspect ratio while resizing. |
| `rotate` | `Number` | `0` | Rotation in degrees. |
| `scaleRatio` | `Number` | `1` | Correct pointer math for scaled canvases. |
| `snap` | `Boolean` | `false` | Enable alignment snapping against sibling elements. |
| `snapTolerance` | `Number` | `5` | Distance threshold for snapping and guide lines. |
| `isConflictCheck` | `Boolean` | `false` | Revert movement/resize when colliding with other active siblings. |
| `handleInfo` | `Object` | `{ size: 8, offset: -5, switch: true }` | Resize handle sizing and offset. |
| `activeOnTop` | `Boolean` | `false` | Promote active component above siblings. |
| `selectOnContextMenu` | `Boolean` | `false` | Activate on right click and emit `contextmenu`. |
| `disableUserSelect` | `Boolean` | `true` | Disable text selection while dragging. |
| `enableNativeDrag` | `Boolean` | `false` | Allow native browser drag behavior. |
| `preventDeactivation` | `Boolean` | `false` | Keep active when clicking outside. |
| `className*` props | `String` | various | Override CSS class names for root state and handles. |
| `onDragStart` | `Function` | `() => true` | Return `false` to cancel drag start. |
| `onDrag` | `Function` | `() => true` | Return `false` to reject a drag step. |
| `onResizeStart` | `Function` | `() => true` | Return `false` to cancel resize start. |
| `onResize` | `Function` | `() => true` | Return `false` to reject a resize step. |

## Events

| Event | Payload |
| --- | --- |
| `activated` | none |
| `deactivated` | none |
| `update:active` | `(active: boolean)` |
| `dragging` | `(x, y)` |
| `dragstop` | `(x, y)` |
| `resizing` | `(x, y, width, height)` |
| `resizestop` | `(x, y, width, height)` |
| `refLineParams` | `({ vLine, hLine })` |
| `contextmenu` | `(MouseEvent)` |

### Alignment guide example

```vue
<script setup>
import { ref } from 'vue'
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'
import 'vue-draggable-resizable-gorkys/style.css'

const guides = ref({ vLine: [], hLine: [] })
</script>

<template>
  <div style="position: relative; width: 800px; height: 400px;">
    <VueDraggableResizable
      :w="220"
      :h="140"
      :parent="true"
      :snap="true"
      @refLineParams="(value) => { guides = value }"
    />

    <VueDraggableResizable :w="160" :h="120" :x="420" :y="180" :parent="true" :active="false" />

    <span
      v-for="(line, index) in guides.vLine"
      :key="'v-' + index"
      v-show="line.display"
      :style="{ position: 'absolute', left: line.position, top: line.origin, height: line.lineLength, width: '1px', background: '#ef4444' }"
    />
    <span
      v-for="(line, index) in guides.hLine"
      :key="'h-' + index"
      v-show="line.display"
      :style="{ position: 'absolute', top: line.position, left: line.origin, width: line.lineLength, height: '1px', background: '#ef4444' }"
    />
  </div>
</template>
```

## Migration Notes

This release is the Vue 3 upgrade line.

- Use `app.use(...)` instead of `Vue.use(...)`.
- Import styles from `vue-draggable-resizable-gorkys/style.css`.
- The scaling prop is `scaleRatio`.
- Test/build tooling moved from Vue CLI + Karma to Vite + Vitest + Storybook 8.

## Development

```bash
npm install
npm run lint
npm test
npm run build
npm run storybook
npm run build-storybook
```

Storybook uses the Vue 3 + Vite builder and serves the new stories from [`stories/vue-draggable-resizable.stories.js`](./stories/vue-draggable-resizable.stories.js).

## Verification

The Vue 3 upgrade branch is currently verified with:

- `npm run lint`
- `npm test`
- `npm run build`
- `npm run build-storybook`

## License

MIT
