# 带拖动句柄的基本组件

一个基本组件，只能通过一个句柄拖动，由prop <b>`drag-handle` </b>和一个有效的CSS选择器指定。

~~~js
<vue-draggable-resizable style="border: 1px solid black;" :drag-handle="'.drag-handle'">
  <div class="drag-handle">Drag Only Here</div>
</vue-draggable-resizable>
~~~

