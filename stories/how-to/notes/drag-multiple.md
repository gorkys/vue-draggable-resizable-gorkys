# 同时拖动多个元素

默认情况下，这不是组件提供的功能，但它是如何使用现有功能构建复杂方案的示例。

由于`ctrl`事件处理程序的注册方式，请确保在开始拖动元素之前单击容器内的任何位置。

```js
<vue-draggable-resizable
  class-name-active="my-active-class"
  v-for="element in elements"
  :key="element.id"
  :x="element.x"
  :y="element.y"
  :w="200"
  :h="200"
  :resizable="false"
  @dragging="(left, top) => dragging(element.id, left, top)"
  @dragstop="(left, top) => dragstop(element.id, left, top)"
>
  <p>{{ element.text }}</p>
</vue-draggable-resizable>
```

检查 [源代码](https://github.com/mauricius/vue-draggable-resizable/tree/master/stories/how-to/drag-multiple.js) 以了解其工作原理的详细信息。
