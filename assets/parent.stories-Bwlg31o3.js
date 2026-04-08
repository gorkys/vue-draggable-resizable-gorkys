import{V as E}from"./vue-draggable-resizable-BX8TAbx8.js";import{c as e}from"./legacy-story-CKa4IDFP.js";import"./vue.esm-bundler-CTxP03on.js";const J=()=>({template:`
    <div style="position: relative; height: 400px; border: 1px solid blue; margin: 1em;">
      <vue-draggable-resizable :parent="true">
        <p>You cannot move me or resize me outside my parent element.</p>
      </vue-draggable-resizable>
    </div>
  `}),N={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"20px 20px, 20px 20px",backgroundPosition:"10px 10px",height:"400px",width:"400px",border:"1px solid blue",boxSizing:"content-box"},B=()=>({template:`
    <div>
      <div :style='${JSON.stringify(N)}'>
        <vue-draggable-resizable :parent="true" :grid=[20,20] :x="x" :y="y" :h="h" :w="w" @dragging="onDrag" @resizing="onResize">
          <p>You cannot move me or resize me outside my parent.</p>
        </vue-draggable-resizable>
      </div>
      <div id="toolbar">
        X: <input type="number" v-model.number="x" />
        Y: <input type="number" v-model.number="y" />
        Width: <input type="number" v-model.number="w" />
        Height: <input type="number" v-model.number="h" />
      </div>
    </div>
  `,data(){return{x:10,y:10,w:100,h:100}},methods:{onDrag(r,t){this.x=r,this.y=t},onResize(r,t,a,i){this.x=r,this.y=t,this.w=a,this.h=i}}}),q={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"10px 20px, 10px 20px",height:"400px",width:"400px",border:"1px solid blue",margin:"1em"},D=()=>({template:`
    <div>
      <div :style='${JSON.stringify(q)}'>
        <vue-draggable-resizable :parent="true" :max-width="290" :max-height="290" @resizing="onResizing" :grid="[10,20]">
          <p>Component costrained in parent with <b>maxWidth</b> and <b>maxHeight</b> equal to 290.</p>
        </vue-draggable-resizable>
      </div>
      <div id="toolbar">
        Size: {{ width }} x {{ height }}
      </div>
    </div>
  `,data(){return{width:200,height:200}},methods:{onResizing(r,t,a,i){this.width=a,this.height=i}}}),_={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"20px 20px, 20px 20px",height:"400px",width:"400px",border:"1px solid blue",margin:"1em"},V=()=>({template:`
    <div :style='${JSON.stringify(_)}'>
      <vue-draggable-resizable :parent="true" :grid=[20,20]>
        <p>You cannot move me or resize me outside my parent.</p>
      </vue-draggable-resizable>
    </div>
  `}),A={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"20px 20px, 20px 20px",backgroundPosition:"17px 17px",height:"500px",width:"500px",border:"1px solid blue",margin:"1em",boxSizing:"content-box"},T=()=>({template:`
    <div :style='${JSON.stringify(A)}'>
      <vue-draggable-resizable :parent="true" :grid=[20,20] :x="17" :y="17" :h="400" :w="400">
        <p>You cannot move me or resize me outside my parent.</p>
      </vue-draggable-resizable>
    </div>
  `}),X={position:"relative",backgroundColor:"#808080",background:"linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",backgroundSize:"20px 20px, 20px 20px",backgroundPosition:"10px 10px",height:"500px",width:"500px",border:"1px solid blue",margin:"1em",boxSizing:"content-box"},j=()=>({template:`
    <div :style='${JSON.stringify(X)}'>
      <vue-draggable-resizable :parent="true" :grid=[20,20] :x="10" :y="10" :h="400" :w="400">
        <p>You cannot move me or resize me outside my parent. And my edges cannot touch the parent element.</p>
      </vue-draggable-resizable>
    </div>
  `}),F=()=>({template:`
    <div>
      <div style="position: relative; height: 400px; border: 1px solid blue; margin: 1em;">
        <vue-draggable-resizable :parent="true" :max-width="300" :max-height="300" @resizing="onResizing">
          <p>Component costrained in parent with <b>maxWidth</b> and <b>maxHeight</b> equal to 300.</p>
        </vue-draggable-resizable>
      </div>
      <div id="toolbar" style="padding: 1em">
        Size: {{ width }} x {{ height }}
      </div>
    </div>
  `,data(){return{width:200,height:200}},methods:{onResizing(r,t,a,i){this.width=a,this.height=i}}}),I=()=>({template:`
    <div>
      <div style="position: relative; height: 300px; border: 1px solid blue; margin: 1em;">
        <vue-draggable-resizable :parent="true" :disableUserSelect="disableUserSelect">
          <p>You can {{ disableUserSelect ? 'not' : '' }} select text inside the component by putting <b>:disableUserSelect</b> prop equal to {{ disableUserSelect }}.</p>
        </vue-draggable-resizable>
      </div>
      <div id="toolbar">
        <input type="checkbox" v-model="disableUserSelect" /> Toggle disableUserSelect
      </div>
    </div>
  `,data(){return{disableUserSelect:!1}}}),ee={title:"Examples/Parent",component:E},o=e(J),n=e(F),s=e(V),d=e(j),p=e(T),g=e(D),l=e(B),c=e(I);var b,m,u;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"createLegacyStory(ParentBasicCaseStory)",...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,h,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"createLegacyStory(ParentMaxWidthMaxHeightStory)",...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,S,z;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"createLegacyStory(ParentGridStory)",...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var P,f,w;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:"createLegacyStory(ParentGridWithOffsetStory)",...(w=(f=d.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var k,C,G;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:"createLegacyStory(ParentGridWithEvenOffsetStory)",...(G=(C=p.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var W,O,M;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:"createLegacyStory(ParentGridMaxWidthMaxHeightStory)",...(M=(O=g.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var U,L,$;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:"createLegacyStory(ParentControlledComponentStory)",...($=(L=l.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var H,R,Y;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:"createLegacyStory(ParentUserSelectStory)",...(Y=(R=c.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};const re=["ParentBounds","ParentMaxConstraints","ParentGrid","ParentGridWithOffset","ParentGridWithEvenOffset","ParentGridMaxConstraints","ParentControlled","ParentUserSelect"];export{o as ParentBounds,l as ParentControlled,s as ParentGrid,g as ParentGridMaxConstraints,p as ParentGridWithEvenOffset,d as ParentGridWithOffset,n as ParentMaxConstraints,c as ParentUserSelect,re as __namedExportsOrder,ee as default};
