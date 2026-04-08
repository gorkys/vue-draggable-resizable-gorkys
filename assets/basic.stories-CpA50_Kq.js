import{V as he}from"./vue-draggable-resizable-BX8TAbx8.js";import{c as e}from"./legacy-story-CKa4IDFP.js";import"./vue.esm-bundler-CTxP03on.js";const ze=()=>({template:`
    <div>
      <vue-draggable-resizable :active.sync="active">
        <p>Controlling the active state from outside the component by providing the <b>:active</b> prop.</p>
      </vue-draggable-resizable>
      <div id="toolbar">
        <input type="checkbox" v-model="active" /> Toggle Active
      </div>
    </div>
  `,data(){return{active:!1}},methods:{toggle(){this.active=!this.active}}}),Se=()=>({template:`
    <div>
      <vue-draggable-resizable :axis="axis">
        <p>Draggable on {{ axis }} axis.</p>
      </vue-draggable-resizable>
      <div id="toolbar">
        <label>
          <input type="checkbox" v-model="x" /> X
        </label>
        <label>
          <input type="checkbox" v-model="y" /> Y
        </label>
      </div>
    </div>
  `,data(){return{x:!0,y:!0}},computed:{axis(){return this.x&&this.y?"both":this.x?"x":this.y?"y":!1}}}),Be=()=>({template:`
    <vue-draggable-resizable style="border: 1px solid black;" :drag-cancel="'.drag-cancel'">
      <div class="drag-cancel">Cannot Drag Here</div>
    </vue-draggable-resizable>
  `}),He=()=>({template:`
    <div>
      <vue-draggable-resizable :x="x" :y="y" :w="w" :h="h" @resizing="onResize" @dragging="onDrag">
        <p>Basic controlled component.</p>
      </vue-draggable-resizable>
      <div id="toolbar">
        X: <input type="number" v-model.number="x" />
        Y: <input type="number" v-model.number="y" />
        Width: <input type="number" v-model.number="w" />
        Height: <input type="number" v-model.number="h" />
      </div>
    </div>
  `,data(){return{x:0,y:0,w:100,h:100}},methods:{onDrag(a,x){this.x=a,this.y=x},onResize(a,x,ye,xe){this.x=a,this.y=x,this.w=ye,this.h=xe}}}),fe=()=>({template:`
    <vue-draggable-resizable style="border: 1px solid black;" :drag-handle="'.drag-handle'">
      <div class="drag-handle">Drag Only Here</div>
    </vue-draggable-resizable>
  `}),De=()=>({template:`
    <div>
      <vue-draggable-resizable :handles="enabledHandles" :prevent-deactivation="true" :w="250" :h="250">
        <p>Enable/disable handles.</p>
        <ul>
          <li v-for="handle in Object.keys(handles)" :key="handle">{{ handle }} - {{ handles[handle] ? '&check;' : '&cross;' }}</li>
        </ul>
      </vue-draggable-resizable>
      <div id="toolbar">
        <label v-for="handle in Object.keys(handles)" :key="handle">
          <input type="checkbox"  v-model="handles[handle]" /> {{ handle }}
        </label>
      </div>
    </div>
  `,data(){return{handles:{tl:!0,tm:!0,tr:!0,mr:!0,br:!0,bm:!0,bl:!0,ml:!0}}},computed:{enabledHandles(){return Object.keys(this.handles).filter(a=>this.handles[a]===!0)}}}),We=()=>({template:`
    <div>
      <vue-draggable-resizable :max-width="maxWidth" :max-height="maxHeight">
        <p>Basic component with programmable <b>maxWidth</b> and <b>maxHeight</b> props.</p>
      </vue-draggable-resizable>
      <div id="toolbar">
        Max Width: <input type="number" v-model.number="maxWidth" />
        Max Height: <input type="number" v-model.number="maxHeight" />
      </div>
    </div>
  `,data(){return{maxWidth:300,maxHeight:300}}}),ke=()=>({template:`
    <div>
      <vue-draggable-resizable :min-width="minWidth" :min-height="minHeight">
        <p>Basic component with programmable <b>minWidth</b> and <b>minHeight</b> props.</p>
      </vue-draggable-resizable>
      <div id="toolbar">
        Min Width: <input type="number" v-model.number="minWidth" />
        Min Height: <input type="number" v-model.number="minHeight" />
      </div>
    </div>
  `,data(){return{minWidth:100,minHeight:100}}}),we=()=>({template:`
    <div>
      <vue-draggable-resizable :enable-native-drag="false" :x="0" :y="0" :w="200" :h="200">
        <p>Native drag disabled. Try to drag the component from the ball.</p>
        <img src="https://js.cx/clipart/ball.svg" />
      </vue-draggable-resizable>
      <vue-draggable-resizable :enable-native-drag="true" :x="0" :y="200" :w="200" :h="200">
        <p>Native drag enabled. Try to drag the component from the ball.</p>
        <img src="https://js.cx/clipart/ball.svg" />
      </vue-draggable-resizable>
    </div>
  `}),Le=()=>({template:`
    <div>
      <vue-draggable-resizable :draggable="draggable">
        <p>Basic component that is {{ draggable ? 'also' : 'not' }} draggable.</p>
      </vue-draggable-resizable>
      <div id="toolbar">
        <input type="checkbox" v-model="draggable" id="draggable" /> Toggle draggable
      </div>
    </div>
  `,data(){return{draggable:!1}}}),Me=()=>({template:`
    <div>
      <vue-draggable-resizable :resizable.sync="resizable">
        <p>Basic component that is {{ resizable ? 'also' : 'not' }} resizable.</p>
      </vue-draggable-resizable>
      <div id="toolbar">
        <input type="checkbox" v-model="resizable" /> Toggle resizable
      </div>
    </div>
  `,data(){return{resizable:!1}}}),Ne=()=>({template:`
    <div>
      <vue-draggable-resizable :on-drag-start="onDragStart">
      </vue-draggable-resizable>
      <div id="toolbar">
        <p :style="style">I turn red when <i>onDragStart</i> is called. Callback then prevents activation.</p>
      </div>
    </div>
  `,data(){return{style:{color:"black"}}},methods:{onDragStart(a){return this.style.color="red",!1}}}),Re=()=>({template:`
    <div>
      <vue-draggable-resizable :on-resize-start="onResizeStart">
      </vue-draggable-resizable>
      <div id="toolbar">
        <p :style="style">I turn red when <i>onResizeStart</i> is called. Callback then prevents resizing.</p>
      </div>
    </div>
  `,data(){return{style:{color:"black"}}},methods:{onResizeStart(a){return this.style.color="red",!1}}}),Ce=()=>({template:`
    <vue-draggable-resizable :prevent-deactivation="true">
      <p>Prevents the deactivation of the component by providing the <b>:prevent-deactivation</b> prop.</p>
    </vue-draggable-resizable>
  `}),Oe={border:"dashed 1px black"},Ae=()=>({template:`
    <vue-draggable-resizable v-bind:style='${JSON.stringify(Oe)}'>
      <p>Basic component with form inside.</p>
      <form @submit.stop.prevent="onSubmit">
        <input type="text" name="input" />
        <button type="submit">Submit</button>
      </form>
    </vue-draggable-resizable>
  `,methods:{onSubmit(a){alert("You just submitted the form!")}}}),Ee=()=>({template:`
    <div>
      <vue-draggable-resizable :z="z">
        <p>Controlling the z-index from outside the component by providing the <b>:z</b> prop.</p>
      </vue-draggable-resizable>
      <div style="width: 200px; height: 200px; background-color: red; position: absolute; top: 100px; left: 100px; z-index: 1; text-align: center; font-size: 24px">
        1
      </div>
      <div style="width: 300px; height: 300px; background-color: green; position: absolute; top: 200px; left: 200px; z-index: 9; text-align: center; font-size: 24px">
        9
      </div>
      <div id="toolbar">
        Change z-index: <input type="number" v-model="z" />
      </div>
    </div>
  `,data(){return{z:0}}}),Te={title:"Examples/Basic",component:he},r={parameters:{layout:"centered"},render:()=>({components:{VueDraggableResizable:he},template:`
      <div style="width: 320px; height: 220px; position: relative;">
        <vue-draggable-resizable>
          <p>Drag me and resize me freely.</p>
        </vue-draggable-resizable>
      </div>
    `})},t=e(ke),i=e(We),s=e(Ae),o=e(ze),d=e(Ce),l=e(Le),n=e(Me),c=e(we),g=e(He),p=e(fe),b=e(Be),m=e(Ee),u=e(De),v=e(Se),h=e(Ne),y=e(Re);var z,S,B;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: () => ({
    components: {
      VueDraggableResizable
    },
    template: \`
      <div style="width: 320px; height: 220px; position: relative;">
        <vue-draggable-resizable>
          <p>Drag me and resize me freely.</p>
        </vue-draggable-resizable>
      </div>
    \`
  })
}`,...(B=(S=r.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var H,f,D;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:"createLegacyStory(BasicMinWidthHeight)",...(D=(f=t.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var W,k,w;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:"createLegacyStory(BasicMaxWidthHeight)",...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var L,M,N;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:"createLegacyStory(BasicWithForm)",...(N=(M=s.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var R,C,O;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:"createLegacyStory(BasicActive)",...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var A,E,P;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:"createLegacyStory(BasicPreventDeactivation)",...(P=(E=d.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var j,I,T;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:"createLegacyStory(BasicNotDraggable)",...(T=(I=l.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var F,Z,V;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:"createLegacyStory(BasicNotResizable)",...(V=(Z=n.parameters)==null?void 0:Z.docs)==null?void 0:V.source}}};var Y,_,X;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:"createLegacyStory(BasicNativeDragEnabled)",...(X=(_=c.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var J,$,q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:"createLegacyStory(BasicControlled)",...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var G,K,Q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:"createLegacyStory(BasicDragHandle)",...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,ee,ae;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:"createLegacyStory(BasicCancelHandle)",...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,ie;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:"createLegacyStory(BasicZIndex)",...(ie=(te=m.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var se,oe,de;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:"createLegacyStory(BasicHandles)",...(de=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var le,ne,ce;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:"createLegacyStory(BasicAxis)",...(ce=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var ge,pe,be;h.parameters={...h.parameters,docs:{...(ge=h.parameters)==null?void 0:ge.docs,source:{originalSource:"createLegacyStory(BasicOnDragStart)",...(be=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var me,ue,ve;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:"createLegacyStory(BasicOnResizeStart)",...(ve=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ve.source}}};const Fe=["Playground","MinWidthMinHeight","MaxWidthMaxHeight","WithForm","ActiveByDefault","PreventDeactivation","NotDraggable","NotResizable","NativeDragEnabled","Controlled","DragHandle","CancelHandle","ZIndex","Handles","Axis","OnDragStart","OnResizeStart"];export{o as ActiveByDefault,v as Axis,b as CancelHandle,g as Controlled,p as DragHandle,u as Handles,i as MaxWidthMaxHeight,t as MinWidthMinHeight,c as NativeDragEnabled,l as NotDraggable,n as NotResizable,h as OnDragStart,y as OnResizeStart,r as Playground,d as PreventDeactivation,s as WithForm,m as ZIndex,Fe as __namedExportsOrder,Te as default};
