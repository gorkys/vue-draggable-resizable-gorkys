# 组件在x轴上限制

只能在x轴上拖动和调整大小的组件。 使用`axis =“x”`prop定义拖动约束，而通过仅定义左右句柄来实现调整限制：handles =“['ml'，'mr']”`。

~~~js
<vue-draggable-resizable :parent="true" axis="x" :handles="['ml','mr']">
  <p>You can move me or resize me only horizontally.</p>
</vue-draggable-resizable>
~~~