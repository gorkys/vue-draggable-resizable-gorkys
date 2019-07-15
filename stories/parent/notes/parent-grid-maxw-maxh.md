# 具有网格限制的组件在父级中具有maxWidth和maxHeight

附加到网格的组件，无法在其父元素之外拖动或调整大小，使用<b> maxWidth </b>和<b> maxHeight </b>来限制其大小。 __Notice__使用`20`作为`grid` prop为<b> y轴</b>，元素的`maxHeight`是`280`而不是`290`。

~~~js
<div>
  <vue-draggable-resizable :parent="true" :max-width="290" :max-height="290" :grid="[10,20]">
    <p>Component costrained in parent with <b>maxWidth</b> and <b>maxHeight</b> equal to 290.</p>
  </vue-draggable-resizable>
</div>
~~~

