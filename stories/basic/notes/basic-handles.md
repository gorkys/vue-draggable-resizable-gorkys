# 带手柄道具的基本组件

您可以使用<b>`handles` </b> prop选择要为组件提供的句柄，它接受句柄数组。 例如，如果你想仅在横轴上进行成本调整，你只能提供左右句柄`：handles =“['ml'，'mr']”`。

~~~js
<vue-draggable-resizable :prevent-deactivation="true" :handles="['tl','tm','tr','mr','br','bm','bl','ml']">
  <p>Enable/disable handles.</p>
</vue-draggable-resizable>
~~~

