# 父级和网格上的组件约束，具有10x10偏移量

组件附加到具有小偏移的网格。 它的起始位置与父级的左上角不完全对齐。

~~~js
<div>
  <vue-draggable-resizable :parent="true" :grid=[20,20] :x="10" :y="10" :width="200" :height="200">
    <p>You cannot move me or resize me outside my parent. And my edges cannot touch the parent element.</p>
  </vue-draggable-resizable>
</div>
~~~