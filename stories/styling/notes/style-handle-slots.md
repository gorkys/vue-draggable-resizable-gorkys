# 具有句柄自定义标记的组件

具有句柄自定义标记的组件，由[VueJS named slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots)提供（例如`slot =“tl”`）。

~~~js
<vue-draggable-resizable class-name-handle="emoji-handles">
  <p>The first child will populate the default slot.</p>

  <div slot="tl">😀</div>
  <div slot="tm">😀</div>
  <div slot="tr">😀</div>
  <div slot="mr">😀</div>
  <div slot="br">😀</div>
  <div slot="bm">😀</div>
  <div slot="bl">😀</div>
  <div slot="ml">😀</div>
</vue-draggable-resizable>
~~~

