# 拖动并拖动事件

拖动组件时会发出`dragging(x,y)`事件。 拖动停止时会发生`dragstop(x,y)`事件。

~~~js
<vue-draggable-resizable :w="200" :h="200" @dragging="onDrag" @dragstop="onDragStop">
  <p>{{ dragging ? 'You are dragging me crazy' : 'Standing still' }}</p>
</vue-draggable-resizable>

export default () => ({
  [...]

  methods: {
    onDrag: function (x, y) {
      this.dragging = true
      this.x = x
      this.y = y
    },
    onDragStop: function (x, y) {
      this.dragging = false
    }
  }
})
~~~

