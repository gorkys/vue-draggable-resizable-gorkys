# 父元素的组件限制

无法在其父元素之外拖动或调整大小的组件，使用prop <b>`：parent =“true”`</b>定义。

~~~js
<vue-draggable-resizable :parent="true">
  <p>You cannot move or resize me outside my parent element.</p>
</vue-draggable-resizable>
~~~

