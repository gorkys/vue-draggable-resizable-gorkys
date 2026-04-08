import{V as H}from"./vue-draggable-resizable-BX8TAbx8.js";import{c as e}from"./legacy-story-CKa4IDFP.js";import"./vue.esm-bundler-CTxP03on.js";const L=()=>({template:`
    <vue-draggable-resizable class-name-active="my-active-class" class-name="my-class">
      <p>You can provide a default class name for the component when it's active using the <b>class-name-active</b> prop.</p>
    </vue-draggable-resizable>
  `}),R=()=>({template:`
    <vue-draggable-resizable class-name="my-class">
      <p>You can provide a default class name for the component using the <b>class-name</b> prop.</p>
    </vue-draggable-resizable>
  `}),Y=()=>({template:`
    <vue-draggable-resizable class-name-dragging="my-dragging-class" class-name="my-class">
      <p>You can provide a default class name for the component when it's dragging using the <b>class-name-dragging</b> prop.</p>
    </vue-draggable-resizable>
  `}),A=()=>({template:`
    <vue-draggable-resizable class-name-handle="my-handle-class">
      <p>You can provide a default class name for the handle using the <b>class-name-handle</b> prop.</p>
    </vue-draggable-resizable>
  `}),w=()=>({template:`
    <vue-draggable-resizable class-name-resizing="my-resizing-class" class-name="my-class">
      <p>You can provide a default class name for the component when it's resizing using the <b>class-name-resizing</b> prop.</p>
    </vue-draggable-resizable>
  `}),T={title:"Examples/Styling",component:H},a=e(L),t=e(R),s=e(Y),l=e(A),r=e(w),n={parameters:{layout:"fullscreen"},render:()=>({components:{VueDraggableResizable:H},template:`
      <vue-draggable-resizable class-name-handle="my-handle-class">
        <p>The default slot and handle slots can be customized independently.</p>

        <template #tl><div>😀</div></template>
        <template #tm><div>😂</div></template>
        <template #tr><div>😆</div></template>
        <template #mr><div>😉</div></template>
        <template #br><div>😎</div></template>
        <template #bm><div>😍</div></template>
        <template #bl><div>😣</div></template>
        <template #ml><div>😕</div></template>
      </vue-draggable-resizable>
    `})};var m,o,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"createLegacyStory(StyleActive)",...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"createLegacyStory(StyleComponent)",...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,u,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"createLegacyStory(StyleDragging)",...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,y,D;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"createLegacyStory(StyleHandles)",...(D=(y=l.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var z,h,S;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:"createLegacyStory(StyleResizing)",...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,C,E;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    components: {
      VueDraggableResizable
    },
    template: \`
      <vue-draggable-resizable class-name-handle="my-handle-class">
        <p>The default slot and handle slots can be customized independently.</p>

        <template #tl><div>😀</div></template>
        <template #tm><div>😂</div></template>
        <template #tr><div>😆</div></template>
        <template #mr><div>😉</div></template>
        <template #br><div>😎</div></template>
        <template #bm><div>😍</div></template>
        <template #bl><div>😣</div></template>
        <template #ml><div>😕</div></template>
      </vue-draggable-resizable>
    \`
  })
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const O=["ActiveClass","ComponentClass","DraggingClass","HandleClass","ResizingClass","HandleSlots"];export{a as ActiveClass,t as ComponentClass,s as DraggingClass,l as HandleClass,n as HandleSlots,r as ResizingClass,O as __namedExportsOrder,T as default};
