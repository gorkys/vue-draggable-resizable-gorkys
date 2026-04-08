import{r as y}from"./vue.esm-bundler-CTxP03on.js";import{V as h}from"./vue-draggable-resizable-BX8TAbx8.js";const w={title:"VueDraggableResizable",component:h,args:{active:!0,h:140,snap:!1,snapTolerance:5,w:220,x:0,y:0},argTypes:{onDrag:{control:!1},onDragStart:{control:!1},onResize:{control:!1},onResizeStart:{control:!1}}},s=(e,n=()=>({}))=>({components:{VueDraggableResizable:h},setup:n,template:`
    <div style="width: 720px; height: 420px; padding: 32px; background: linear-gradient(135deg, #f8fafc, #e2e8f0); border-radius: 24px;">
      <div style="position: relative; width: 100%; height: 100%; border: 1px dashed #94a3b8; border-radius: 16px; overflow: hidden;">
        ${e}
      </div>
    </div>
  `}),i={render:e=>s(`
    <vue-draggable-resizable v-bind="args">
      <div style="width: 100%; height: 100%; display: grid; place-items: center; background: #0f172a; color: white;">
        Drag and resize me
      </div>
    </vue-draggable-resizable>
  `,()=>({args:e}))},r={args:{parent:!0,x:80,y:60},render:e=>s(`
    <vue-draggable-resizable v-bind="args">
      <div style="width: 100%; height: 100%; display: grid; place-items: center; background: #1d4ed8; color: white;">
        Parent constrained
      </div>
    </vue-draggable-resizable>
  `,()=>({args:e}))},a={args:{parent:!0,snap:!0,x:20,y:20},render:e=>s(`
    <div style="position: absolute; inset: 24px;">
      <vue-draggable-resizable v-bind="args" @refLineParams="onGuides">
        <div style="width: 100%; height: 100%; display: grid; place-items: center; background: #0f766e; color: white;">
          Snap source
        </div>
      </vue-draggable-resizable>
      <vue-draggable-resizable :w="180" :h="120" :x="340" :y="180" :parent="true" :active="false">
        <div style="width: 100%; height: 100%; display: grid; place-items: center; background: #f97316; color: white;">
          Target
        </div>
      </vue-draggable-resizable>
      <span
        v-for="(line, index) in guides.vLine"
        :key="'v-' + index"
        v-show="line.display"
        :style="{
          position: 'absolute',
          top: line.origin,
          left: line.position,
          width: '1px',
          height: line.lineLength,
          background: '#ef4444',
          opacity: 0.8,
          pointerEvents: 'none'
        }"
      />
      <span
        v-for="(line, index) in guides.hLine"
        :key="'h-' + index"
        v-show="line.display"
        :style="{
          position: 'absolute',
          top: line.position,
          left: line.origin,
          width: line.lineLength,
          height: '1px',
          background: '#ef4444',
          opacity: 0.8,
          pointerEvents: 'none'
        }"
      />
    </div>
  `,()=>{const n=y({vLine:[],hLine:[]});return{args:e,guides:n,onGuides(b){n.value=b}}})};var t,d,o;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => Surface(\`
    <vue-draggable-resizable v-bind="args">
      <div style="width: 100%; height: 100%; display: grid; place-items: center; background: #0f172a; color: white;">
        Drag and resize me
      </div>
    </vue-draggable-resizable>
  \`, () => ({
    args
  }))
}`,...(o=(d=i.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var l,g,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    parent: true,
    x: 80,
    y: 60
  },
  render: args => Surface(\`
    <vue-draggable-resizable v-bind="args">
      <div style="width: 100%; height: 100%; display: grid; place-items: center; background: #1d4ed8; color: white;">
        Parent constrained
      </div>
    </vue-draggable-resizable>
  \`, () => ({
    args
  }))
}`,...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var c,u,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    parent: true,
    snap: true,
    x: 20,
    y: 20
  },
  render: args => Surface(\`
    <div style="position: absolute; inset: 24px;">
      <vue-draggable-resizable v-bind="args" @refLineParams="onGuides">
        <div style="width: 100%; height: 100%; display: grid; place-items: center; background: #0f766e; color: white;">
          Snap source
        </div>
      </vue-draggable-resizable>
      <vue-draggable-resizable :w="180" :h="120" :x="340" :y="180" :parent="true" :active="false">
        <div style="width: 100%; height: 100%; display: grid; place-items: center; background: #f97316; color: white;">
          Target
        </div>
      </vue-draggable-resizable>
      <span
        v-for="(line, index) in guides.vLine"
        :key="'v-' + index"
        v-show="line.display"
        :style="{
          position: 'absolute',
          top: line.origin,
          left: line.position,
          width: '1px',
          height: line.lineLength,
          background: '#ef4444',
          opacity: 0.8,
          pointerEvents: 'none'
        }"
      />
      <span
        v-for="(line, index) in guides.hLine"
        :key="'h-' + index"
        v-show="line.display"
        :style="{
          position: 'absolute',
          top: line.position,
          left: line.origin,
          width: line.lineLength,
          height: '1px',
          background: '#ef4444',
          opacity: 0.8,
          pointerEvents: 'none'
        }"
      />
    </div>
  \`, () => {
    const guides = ref({
      vLine: [],
      hLine: []
    });
    return {
      args,
      guides,
      onGuides(value) {
        guides.value = value;
      }
    };
  })
}`,...(v=(u=a.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const x=["Basic","ParentBounds","SnapGuides"];export{i as Basic,r as ParentBounds,a as SnapGuides,x as __namedExportsOrder,w as default};
