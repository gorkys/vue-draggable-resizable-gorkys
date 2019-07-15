# y轴上的组件限制

只能在y轴上拖动和调整大小的组件。 使用`axis =“y”`prop定义拖动约束，而通过仅定义顶部和底部句柄`：handles =“['tc'，'bc']”`来调整限制的大小。

~~~js
<vue-draggable-resizable :parent="true" axis="y" :handles="['tm','bm']">
  <p>You can move me or resize me only vertically.</p>
</vue-draggable-resizable>
~~~