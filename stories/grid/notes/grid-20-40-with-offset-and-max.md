# 网格20x40像素，具有10x10偏移和maxHeight，maxWidth值

如果提供的`maxHeight`和`maxWidth`值高于相应的网格值，则可以注意到调整大小会停止到较低的合适值。 例如，在`x`轴上，尊重`maxWidth`和`grid [x]`约束的最低有效值是80.这同样适用于`y`轴。

~~~js
<vue-draggable-resizable :grid="[20,40]" :x="10" :y="20" :maxHeight="290" :maxWidth="290">
  <p>Grid 20x40 starting with a 10x20 offset and max height, max width values equal to 290.</p>
</vue-draggable-resizable>
~~~

