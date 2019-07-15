# onResizeStart回调的基本组件

具有`onResizeStart `回调的基本组件，带有<b>`onResizeStart` </b> prop，它接受在拖动开始时调用的函数（单击或触摸元素）。 如果函数返回`false`，则取消操作。 您可以使用此功能来防止事件冒泡。

~~~js
<vue-draggable-resizable :on-resize-start="onResizeStartCallback">
  <p>Passing a callback to the component that gets called as soon as the component is resized.</p>
</vue-draggable-resizable>

function onResizeStartCallback(handle, ev){
   ...
   // return false; — for cancel
}
~~~

