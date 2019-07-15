# 父级中具有网格约束的组件

附加到网格的组件，不能在其父元素之外拖动或调整大小，使用prop <b>`：parent =“true”`</b>定义。 在这种情况下，父级的大小完全匹配网格。

~~~js
<div>
  <vue-draggable-resizable :parent="true" :grid=[20,20]>
    <p>You cannot move me or resize me outside my parent.</p>
  </vue-draggable-resizable>
</div>
~~~