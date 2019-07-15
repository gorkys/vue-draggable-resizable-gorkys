# 拖动时具有自定义类名的组件

在拖动时具有自定义类名的组件，由prop <b>`class-name-dragging` </b>提供。

~~~js
<vue-draggable-resizable class-name-dragging="my-dragging-class" class-name="my-class">
  <p>You can provide a default class name for the component when it's dragging using the <b>class-name-dragging</b> prop.</p>
</vue-draggable-resizable>
~~~

~~~css
.my-class {
    background-color: green;
    border: 1px solid red;
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
}

.my-dragging-class {
    background-color: red;
    border: 1px solid black;
}
~~~

