# 组件拖动取消的基本操作

一个基本组件，无法通过句柄拖动，由prop <b>`drag-cancel` </b>和有效的CSS选择器指定。

~~~js
<vue-draggable-resizable style="border: 1px solid black;" :drag-cancel="'.drag-cancel'">
  <div class="drag-cancel">Cannot Drag Here</div>
</vue-draggable-resizable>
~~~

