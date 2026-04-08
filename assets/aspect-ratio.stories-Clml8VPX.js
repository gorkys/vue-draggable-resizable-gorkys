import{V as C}from"./vue-draggable-resizable-BX8TAbx8.js";import{c as e}from"./legacy-story-CKa4IDFP.js";import"./vue.esm-bundler-CTxP03on.js";const H={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"20px 40px, 20px 40px",backgroundPosition:"10px 20px"},I=()=>({template:`
    <div :style='${JSON.stringify(H)}'>
      <vue-draggable-resizable :grid="[20,40]" :x="10" :y="20" :minh="30" :minw="30" :lock-aspect-ratio="true">
        <p>Aspect ratio in Grid 20x40 starting with a 10x20 offset</p>
      </vue-draggable-resizable>
    </div>
  `}),O=()=>({template:`
    <div style="position: relative; height: 400px; border: 1px solid blue; margin: 1em;">
      <vue-draggable-resizable :lock-aspect-ratio="true" :parent="true">
        <p>Combine aspect ratio and costrain in parent.</p>
      </vue-draggable-resizable>
    </div>
  `}),w=()=>({template:`
    <div>
      <vue-draggable-resizable :lock-aspect-ratio="ratio">
        <p>Keep aspect ratio using <b>:lock-aspect-ratio</b> prop.</p>
      </vue-draggable-resizable>
      <div id="toolbar">
        <input type="checkbox" v-model="ratio" /> Toggle Lock Aspect Ratio
      </div>
    </div>
  `,data(){return{ratio:!0}}}),K={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"20px 20px, 20px 20px",height:"400px",width:"400px",border:"1px solid blue",margin:"20px",boxSizing:"border-box"},$=()=>({template:`
    <div :style='${JSON.stringify(K)}'>
      <vue-draggable-resizable :grid=[20,20] :parent="true" :lock-aspect-ratio="true">
        <p>Keep aspect ratio, grid and parent costrained.</p>
      </vue-draggable-resizable>
    </div>
  `}),J={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"20px 20px, 20px 20px"},N=()=>({template:`
    <div :style='${JSON.stringify(J)}'>
      <vue-draggable-resizable :w="400" :h="200" :lock-aspect-ratio="true" :grid=[20,20]>
        <p>Keep aspect ratio in component costrained on grid.</p>
      </vue-draggable-resizable>
    </div>
  `}),_=()=>({template:`
    <div>
      <vue-draggable-resizable :lock-aspect-ratio="true" :maxWidth="300" :maxHeight="250" @resizing="onResizing">
        <p>Keep aspect ratio and set <b>maxWidth</b> to 300 and <b>maxHeight</b> to 250.</p>
      </vue-draggable-resizable>
      <div id="toolbar">
        Size: {{ width }} x {{ height }}
      </div>
    </div>
  `,data(){return{width:200,height:200}},methods:{onResizing(E,V,L,P){this.width=L,this.height=P}}}),B=()=>({template:`
    <vue-draggable-resizable :lock-aspect-ratio="true" :minHeight="100" :minWidth="50">
      <p>Keep aspect ratio and set <b>minHeight</b> to 100 and <b>minWidth</b> to 50.</p>
    </vue-draggable-resizable>
  `}),q={title:"Examples/Aspect Ratio",component:C},t=e(w),a=e(N),r=e(O),i=e($),o=e(B),s=e(_),p=e(I);var c,n,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"createLegacyStory(AspectRatioStory)",...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var g,l,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"createLegacyStory(AspectRatioWithGridStory)",...(b=(l=a.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var u,m,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"createLegacyStory(AspectRatioInParentStory)",...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,y,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"createLegacyStory(AspectRatioWithGridInParentStory)",...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,A,R;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:"createLegacyStory(AspectRatioWithMinWidthMinHeightStory)",...(R=(A=o.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var W,z,k;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:"createLegacyStory(AspectRatioWithMaxWidthMaxHeightStory)",...(k=(z=s.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var f,M,G;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:"createLegacyStory(AspectRatioGridWithOffsetAndMinStory)",...(G=(M=p.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};const F=["BasicAspectRatio","AspectRatioWithGrid","AspectRatioInParent","AspectRatioWithGridInParent","AspectRatioWithMinConstraints","AspectRatioWithMaxConstraints","AspectRatioWithGridOffsetAndMin"];export{r as AspectRatioInParent,a as AspectRatioWithGrid,i as AspectRatioWithGridInParent,p as AspectRatioWithGridOffsetAndMin,s as AspectRatioWithMaxConstraints,o as AspectRatioWithMinConstraints,t as BasicAspectRatio,F as __namedExportsOrder,q as default};
