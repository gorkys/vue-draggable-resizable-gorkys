# 网格20x20像素，偏移量为10x10

始终从组件的左上角计算网格。 在此示例中，您可以看到它相对于父元素具有偏移量。 这对于父元素中的成本要求很重要。

~~~js
<vue-draggable-resizable :grid="[20,20]" :x="10" :y="10">
  <p>Grid 20x20 starting with a 10x10 offset</p>
</vue-draggable-resizable>
~~~

