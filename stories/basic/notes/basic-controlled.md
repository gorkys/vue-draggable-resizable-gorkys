# 基本控制组件

一个基本的受控组件，<b>`x` </b>，<b>`y` </b>，<b>`w` </b>和<b>`h` </b> 控制组件的位置和大小。 你也应该
提供回调以将状态与父进程同步。

~~~js
<vue-draggable-resizable :x="x" :y="y" :w="w" :h="h" @resizing="onResize" @dragging="onDrag">
  <p>Basic controlled component.</p>
</vue-draggable-resizable>

methods: {
  onDrag(left, top) {
    this.x = left
    this.y = top
  },
  onResize(left, top, width, height) {
    this.x = left
    this.y = top
    this.w = width
    this.h = height
  }
}
~~~

