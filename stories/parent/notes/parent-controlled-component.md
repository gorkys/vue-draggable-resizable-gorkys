# 父元素控制的组件与网格

一个基本的父控制组件，<b>`x` </b>，<b>`y` </b>，<b>`w` </b>和<b>`h` </b> 用于控制组件位置和大小的道具。 __Notice__使用`grid` prop，组件只会对网格值的有效倍数作出反应。

~~~js
<vue-draggable-resizable :parent="true" :grid=[20,20] :x="x" :y="y" :h="h" :w="w" @dragging="onDrag" @resizing="onResize">
  <p>You cannot move me or resize me outside my parent.</p>
</vue-draggable-resizable>
~~~