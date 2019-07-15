# 使用maxWidth和maxHeight在父级中约束的组件

无法在其父元素之外拖动或调整大小的组件，使用<b> maxWidth </b>和<b> maxHeight </b>来限制其大小。

~~~js
<vue-draggable-resizable :parent="true" :max-width="300" :max-height="300">
  <p>Component costrained in parent with <b>maxWidth</b> and <b>maxHeight</b> equal to 300.</p>
</vue-draggable-resizable>
~~~

