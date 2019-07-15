# 具有宽高比的组件在20x20网格上进行了受限

使用`lock-aspect-ratio`时，在网格上使用组件的成本并不是很好。 您可以通过拖动（例如右手柄或底部手柄）来注意到您有不同的结果。

~~~js
<vue-draggable-resizable :lock-aspect-ratio="true" :grid=[20,20]>
  <p>Keep aspect ratio in component costrained on grid.</p>
</vue-draggable-resizable>
~~~

