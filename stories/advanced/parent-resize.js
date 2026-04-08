export default () => ({
  template: `
    <div style="position: relative; height: 400px; border: 1px solid blue; margin: 1em; box-sizing: border-box">
      <vue-draggable-resizable :w="200" :h="200" :parent="true">
        <p>尝试调整窗口大小�?该组件将适应新的父级大小�?/p>
      </vue-draggable-resizable>
    </div>
  `
})
