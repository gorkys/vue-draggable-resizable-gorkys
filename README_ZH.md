<!-- <p align="center"><img src="https://rawgit.com/mauricius/vue-draggable-resizable/v1/docs/resources/logo.png" alt="logo"></p> -->
<h1 align="center">VueDraggableResizable 2</h1>

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-draggable-resizable.svg?style=flat-square)](https://npmjs.com/package/vue-draggable-resizable)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/vue-draggable-resizable.svg?style=flat-square)](https://www.npmjs.com/package/vue-draggable-resizable)

> Vue2组件，用于可拖动和可调整大小的元素。

如果您正在寻找组件的版本1，可以在[v1分支](https://github.com/mauricius/vue-draggable-resizable/tree/v1)上找到它。

## 目录

* [特征](#特征)
* [在线演示](#在线演示)
* [安装和基本用法](#安装和基本用法)
  * [Props](#props)
  * [事件](#事件)
  * [Styling](#styling)
* [贡献](#贡献)
* [License](#license)

### 特征

* 没有依赖
 - 使用可拖动，可调整大小或两者兼备
 - 定义用于调整大小的句柄
 - 限制大小和移动到父元素或自定义选择器
 - 将元素捕捉到自定义网格
 - 将拖动限制为垂直或水平轴
- 保持纵横比
 - 启用触控功能
 - 使用自己的样式
 - 为句柄提供自己的样式

### 在线演示

有关组件的示例，请转到 [在线演示](http://tingtas.com/vue-draggable-resizable-gorkys/)

或者，您可以在自己的计算机上运行示例：

* 克隆此存储库
* `npm install`
* `npm run storybook`
* 访问 [http://localhost:9001/](http://localhost:9001/)

---

## 安装和基本用法

```bash
$ npm install --save vue-draggable-resizable
```


全局注册组件

```js
import Vue from 'vue'
import VueDraggableResizable from 'vue-draggable-resizable'

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)
```

局部注册注册

```vue
<template>
  <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
    <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
    </vue-draggable-resizable>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
export default {
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}
</script>
```

### Props

#### className
Type: `String`<br>
Required: `false`<br>
Default: `vdr`

用于设置可拖动可调整大小的组件的自定义`class`。

```html
<vue-draggable-resizable class-name="my-class">
```

#### classNameDraggable
Type: `String`<br>
Required: `false`<br>
Default: `draggable`

用于在启用`draggable`时设置可拖动可调整大小的组件的自定义`class`。

```html
<vue-draggable-resizable class-name-draggable="my-draggable-class">
```

#### classNameResizable
Type: `String`<br>
Required: `false`<br>
Default: `resizable`

当启用`resizable`时，用于设置可拖动可调整大小的组件的自定义`class`。

```html
<vue-draggable-resizable class-name-resizable="my-resizable-class">
```

#### classNameDragging
Type: `String`<br>
Required: `false`<br>
Default: `dragging`

用于在拖动时设置可拖动可调整大小的组件的自定义`class`。

```html
<vue-draggable-resizable class-name-dragging="my-dragging-class">
```

#### classNameResizing
Type: `String`<br>
Required: `false`<br>
Default: `resizing`

用于在调整大小时设置可拖动可调整大小的组件的自定义`class`。

```html
<vue-draggable-resizable class-name-resizing="my-resizing-class">
```

#### classNameActive
Type: `String`<br>
Required: `false`<br>
Default: `active`

用于在活动时设置可拖动可调整大小的组件的自定义`class`。

```html
<vue-draggable-resizable class-name-active="my-active-class">
```

#### classNameHandle
Type: `String`<br>
Required: `false`<br>
Default: `handle`

用于设置每个句柄元素的自定义公共`class`。 这样你就可以使用选择器`<your class>  -  <handle code>`来单独设置每个句柄的样式，其中`handle code`标识`handle` prop提供的句柄之一。

例如，这个组件：

```html
<vue-draggable-resizable class-name-handle="my-handle-class"></vue-draggable-resizable>
```

呈现以下内容：

```html
<div ...>
  <div class="my-handle-class my-handle-class-tl"></div>
  <div class="my-handle-class my-handle-class-tm"></div>
  <div class="my-handle-class my-handle-class-tr"></div>
  [...]
</div>
```

#### disableUserSelect
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

默认情况下，组件将样式声明`user-select：none`添加到自身以防止在拖动期间选择文本。 您可以通过将此prop设置为`false`来禁用此行为。

```html
<vue-draggable-resizable :disable-user-select="false">
```

#### enableNativeDrag
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

默认情况下，浏览器的本机拖放功能（通常用于图像和其他一些元素）被禁用，因为它可能与组件提供的功能冲突。 如果您因任何原因需要恢复此功能，则可以将此道具设置为`true`。

```html
<vue-draggable-resizable :enable-native-drag="true">
```

#### active
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

确定组件是否应处于活动状态。 道具对变化作出反应，也可以与`sync` [modifier](https://vuejs.org/v2/guide/components.html#sync-Modifier)一起使用，以保持状态与父级同步。 您可以与`preventDeactivation` prop一起使用，以便完全控制组件外部的活动行为。

```html
<vue-draggable-resizable :active="true">
```

#### preventDeactivation

Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

确定当用户在其外部单击/点击时是否应停用该组件。

```html
<vue-draggable-resizable :prevent-deactivation="true">
```

#### draggable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

定义组件应该是否可拖动。

```html
<vue-draggable-resizable :draggable="false">
```

#### resizable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

定义组件应该可以调整大小。

```html
<vue-draggable-resizable :resizable="false">
```

#### w
Type: `Number|String`<br>
Required: `false`<br>
Default: `200`

定义元素的初始宽度。它还支持`auto`，但是当您开始调整大小时，该值将退回到一个数字。

```html
<vue-draggable-resizable :w="200">
```

#### h
Type: `Number|String`<br>
Required: `false`<br>
Default: `200`

定义元素的初始高度。它还支持`auto`，但是当您开始调整大小时，该值将退回到一个数字。

```html
<vue-draggable-resizable :h="200">
```

#### minWidth
Type: `Number`<br>
Required: `false`<br>
Default: `50`

定义元素的最小宽度。

```html
<vue-draggable-resizable :min-width="50">
```

#### minHeight
Type: `Number`<br>
Required: `false`<br>
Default: `50`

定义元素的最小高度。

```html
<vue-draggable-resizable :min-height="50">
```

#### maxWidth
Type: `Number`<br>
Required: `false`<br>
Default: `null`

定义元素的最大宽度。

```html
<vue-draggable-resizable :max-width="400">
```

#### maxHeight
Type: `Number`<br>
Required: `false`<br>
Default: `null`

定义元素的最大高度。

```html
<vue-draggable-resizable :max-height="50">
```

#### x
Type: `Number`<br>
Required: `false`<br>
Default: `0`

定义元素的初始`x`位置。

```html
<vue-draggable-resizable :x="0">
```

#### y
Type: `Number`<br>
Required: `false`<br>
Default: `0`

定义元素的初始`y`位置。

```html
<vue-draggable-resizable :y="0">
```

#### z
Type: `Number|String`<br>
Required: `false`<br>
Default: `auto`

定义元素的`zIndex`。

```html
<vue-draggable-resizable :z="999">
```

#### handles
Type: `Array`<br>
Required: `false`<br>
Default: `['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']`

定义句柄数组以限制元素大小调整：
* `tl` - 左上角
* `tm` - 上方中间
 - `tr`  - 右上角
 - `mr`  - 右中角
 - `br`  - 右下角
 - `bm`  - 底部中间
 - `bl`  - 左下角
 - `ml`  - 左中角

```html
<vue-draggable-resizable :handles="['tm','bm','ml','mr']">
```

#### axis
Type: `String`<br>
Required: `false`<br>
Default: `both`

定义元素可拖动的轴。 可用值为`x`，`y`或`both`。

```html
<vue-draggable-resizable axis="x">
```

#### grid
Type: `Array`<br>
Required: `false`<br>
Default: `[1,1]`

定义捕捉元素的网格。

```html
<vue-draggable-resizable :grid="[1,1]">
```

#### parent
Type: `Boolean | String`<br>
Required: `false`<br>
Default: `false`

将组件的移动和尺寸限制为父组件（如果提供了就设置`true`），或者限制为由有效`CSS`选择器标识的元素。

```html
<vue-draggable-resizable :parent="true">
```

```html
<vue-draggable-resizable :parent=".selector">
```

#### dragHandle
Type: `String`<br>
Required: `false`

定义应该用于拖动组件的选择器。

```html
<vue-draggable-resizable drag-handle=".drag">
```

#### dragCancel
Type: `String`<br>
Required: `false`

定义应该用于防止拖动初始化的选择器。

```html
<vue-draggable-resizable drag-cancel=".drag">
```

#### lockAspectRatio
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

`lockAspectRatio`属性用于锁定宽高比。 此属性与`grid`不兼容，因此请确保一次只使用一个。

```html
<vue-draggable-resizable :lock-aspect-ratio="true">
```

#### onDragStart
Type: `Function`<br>
Required: `false`<br>
Default: `null`

拖动开始时调用（单击或触摸元素）。 如果任何处理程序返回`false`，则操作将取消。 您可以使用此功能来防止事件冒泡。

```html
<vue-draggable-resizable :onDragStart="onDragStartCallback">
```

```js
function onDragStartCallback(ev){
   ...
   // return false; — for cancel
}
```

#### onDrag
Type: `Function`<br>
Required: `false`<br>
Default: `null`

在拖动元素之前调用。该函数接收x和y的下一个值。如果任何处理程序返回了“ false”，则该操作将取消。

```html
<vue-draggable-resizable :onDrag="onDragCallback">
```

```js
function onDragStartCallback(x, y){
   ...
   // return false; — for cancel
}
```


#### onResizeStart
Type: `Function`<br>
Required: `false`<br>
Default: `null`

调整大小时启动（单击或触摸手柄）。 如果任何处理程序返回`false`，则操作将取消。

```html
<vue-draggable-resizable :onResizeStart="onResizeStartCallback">
```

```js

function onResizeStartCallback(handle, ev){
   ...
   // return false; — for cancel
}
```

#### onResize
Type: `Function`<br>
Required: `false`<br>
Default: `null`

在调整元素大小之前调用。该函数接收句柄和下一个值“ x”，“ y”，“ width”和“ height”。如果任何处理程序返回了“ false”，则该操作将取消。

```html
<vue-draggable-resizable :onResize="onResizeCallback">
```

```js
function onResizeStartCallback(handle, x, y, width, height){
   ...
   // return false; — for cancel
}
```
---

### 事件

#### activated

参数: `-`

单击组件时调用，以显示句柄。

```html
<vue-draggable-resizable @activated="onActivated">
```

#### deactivated

参数: `-`

每当用户单击组件外的任何位置时调用，以便停用它。

```html
<vue-draggable-resizable @deactivated="onDeactivated">
```

#### resizing

参数:
* `left`元素的X位置
 - `top`元素的Y位置
 - `width`元素的宽度
 - `height`元素的高度

每当组件调整大小时调用。

```html
<vue-draggable-resizable @resizing="onResizing">
```

#### resizestop

参数:
* `left`元素的X位置
 - `top`元素的Y位置
 - `width`元素的宽度
 - `height`元素的高度

每当组件停止调整大小时调用。

```html
<vue-draggable-resizable @resizestop="onResizstop">
```

#### dragging

参数:
* `left` 元素的X位置
* `top` 元素的Y位置

每当拖动组件时调用。

```html
<vue-draggable-resizable @dragging="onDragging">
```

#### dragstop

参数:
* `left`元素的X位置
* `top` 元素的Y位置

每当组件停止拖动时调用。

```html
<vue-draggable-resizable @dragstop="onDragstop">
```

---

### Styling

您可以使用作为props传递给组件的适当类名来设置组件的样式。 此外，您可以替换源文件`vue-draggable-resizable.css`中提供的句柄的默认样式，但您应该注意为它们定义位置和大小。 句柄的默认类是`handle`和`handle-tl`，`handle-br`等等。

该组件还为每个句柄提供[named slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots)，因此您可以在每个句柄中使用您的标记。

## 鸣谢

感谢 @kirillmurashov 在 [vue-drag-resize](https://github.com/kirillmurashov/vue-drag-resize)组件上所做的工作。

## 安全

如果您发现任何与安全相关的问题，请发送电子邮件至maurizio.bonani@gmail.com，而不是使用问题跟踪器。

## 贡献

任何对代码或文档任何部分的贡献以及任何想法和/或建议都是非常受欢迎的。

``` bash
# serve with hot reload at localhost:8080
npm run serve

# distribution build
npm run build

# build the storybook docs into gh-pages
npm run gh-pages:build

# run unit tests
npm run unit

# run storybook at localhost:9001
npm run storybook
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
