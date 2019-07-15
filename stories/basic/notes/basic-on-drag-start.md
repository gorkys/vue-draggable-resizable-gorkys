# onDragStart回调的基本组件

一个基本组件，带有<b>`onDragStart` </b> prop，它接受一个在拖动开始时被调用的函数（单击或触摸元素）。 如果函数返回`false`，则取消操作。 您可以使用此功能来防止事件冒泡。

~~~js
<vue-draggable-resizable :on-drag-start="onDragStartCallback">
  <p>Passing a callback to the component that gets called as soon as the component is clicked.</p>
</vue-draggable-resizable>

function onDragStartCallback(ev){
   ...
   // return false; — for cancel
}
~~~

