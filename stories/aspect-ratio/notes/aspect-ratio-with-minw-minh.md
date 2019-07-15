# 让组件具有宽高比和minHeight，minWidth

一个组件，<b>`lock-aspect-ratio` </b> prop和最小高度设置为`100`，最小宽度设置为`50`.请注意，锁定纵横比也会强制最小宽度为100（条件：1 / 1）。

~~~js
<vue-draggable-resizable :lock-aspect-ratio="true" :minHeight="100" :minWidth="50">
  <p>Keep aspect ratio and set <b>minHeight</b> to 100 and <b>minWidth</b> to 50.</p>
</vue-draggable-resizable>
~~~

