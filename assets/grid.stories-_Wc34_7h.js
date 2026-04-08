import{V as z}from"./vue-draggable-resizable-BX8TAbx8.js";import{c as e}from"./legacy-story-CKa4IDFP.js";import"./vue.esm-bundler-CTxP03on.js";const k={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"20px 20px, 20px 20px"},O=()=>({template:`
    <div :style='${JSON.stringify(k)}'>
      <vue-draggable-resizable :grid="[20,20]" :x="0" :y="0">
        <p>Grid 20x20 starting from the top-left corner</p>
      </vue-draggable-resizable>
    </div>
  `}),W={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"20px 20px, 20px 20px",backgroundPosition:"10px 10px"},$=()=>({template:`
    <div :style='${JSON.stringify(W)}'>
      <vue-draggable-resizable :grid="[20,20]" :x="10" :y="10">
        <p>Grid 20x20 starting with a 10x10 offset</p>
      </vue-draggable-resizable>
    </div>
  `}),w={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"20px 40px, 20px 40px"},A=()=>({template:`
    <div :style='${JSON.stringify(w)}'>
      <vue-draggable-resizable :grid="[20,40]" :x="0" :y="0">
        <p>Grid 20x40 starting from the top-left corner</p>
      </vue-draggable-resizable>
    </div>
  `}),M={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"20px 40px, 20px 40px",backgroundPosition:"10px 20px"},L=()=>({template:`
    <div :style='${JSON.stringify(M)}'>
      <vue-draggable-resizable :grid="[20,40]" :x="10" :y="20" :maxHeight="290" :maxWidth="290" @resizing="onResizing">
        <p>Grid 20x40 starting with a 10x20 offset and max height, max width values equal to 290.</p>
      </vue-draggable-resizable>
      <div id="toolbar">
        Size: {{ width }} x {{ height }}
      </div>
    </div>
  `,data(){return{width:200,height:200}},methods:{onResizing(N,P,G,S){this.width=G,this.height=S}}}),C={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"20px 40px, 20px 40px",backgroundPosition:"10px 20px"},J=()=>({template:`
    <div :style='${JSON.stringify(C)}'>
      <vue-draggable-resizable :grid="[20,40]" :x="10" :y="20" :minHeight="30" :minWidth="30">
        <p>Grid 20x40 starting with a 10x20 offset and min height, min width values equal to 30.</p>
      </vue-draggable-resizable>
    </div>
  `}),E={title:"Examples/Grid",component:z},r=e(O),a=e(A),t=e($),i=e(J),s=e(L);var o,n,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"createLegacyStory(Grid2020)",...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var p,g,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"createLegacyStory(Grid2040)",...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var c,l,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"createLegacyStory(Grid2020WithOffset)",...(b=(l=t.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var u,m,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"createLegacyStory(Grid2040WithOffsetAndMin)",...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,y,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"createLegacyStory(Grid2040WithOffsetAndMax)",...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const H=["Grid20x20","Grid20x40","Grid20x20WithOffset","Grid20x40WithOffsetAndMin","Grid20x40WithOffsetAndMax"];export{r as Grid20x20,t as Grid20x20WithOffset,a as Grid20x40,s as Grid20x40WithOffsetAndMax,i as Grid20x40WithOffsetAndMin,H as __namedExportsOrder,E as default};
