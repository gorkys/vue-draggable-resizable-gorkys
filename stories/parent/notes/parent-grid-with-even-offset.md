# 父级和网格上的组件限制，具有均匀的17x17偏移量

组件连接到具有偶数偏移的网格。

~~~js
<div>
  <vue-draggable-resizable :parent="true" :grid=[20,20] :x="17" :y="17" :width="200" :height="200">
    <p>You cannot move me or resize me outside my parent.</p>
  </vue-draggable-resizable>
</div>
~~~

