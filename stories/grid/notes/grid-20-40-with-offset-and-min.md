# 网格20x40像素，具有10x10偏移和minHeight，minWidth值

如果您提供的`minHeight`和`minWidth`值低于相应的网格值，您可以注意到调整大小会停止到最低的合适值。 例如，在`x`轴上，尊重`minWidth`和`grid [x]`约束的最低有效值是40.同样适用于`y`轴。

~~~js
<vue-draggable-resizable :grid="[20,40]" :x="10" :y="20" :minHeight="30" :minWidth="30">
  <p>Grid 20x40 starting with a 10x20 offset and min height, min width values equal to 30.</p>
</vue-draggable-resizable>
~~~

