# 具有z-index控制的基本组件

一个基本组件，使用<b>`z-index` </b> prop来控制组件外部的`z-index`。 如果没有提供，它将采用值`auto`。

~~~js
<vue-draggable-resizable :z-index="zindex">
  <p>Controlling the z-index from outside the component by providing the <b>:z</b> prop.</p>
</vue-draggable-resizable>
~~~

