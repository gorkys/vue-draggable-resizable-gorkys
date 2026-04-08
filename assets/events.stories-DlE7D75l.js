import{V as z}from"./vue-draggable-resizable-BX8TAbx8.js";import{c as s}from"./legacy-story-CKa4IDFP.js";import"./vue.esm-bundler-CTxP03on.js";const y=()=>({template:`
    <vue-draggable-resizable :w="200" :h="200" @activated="onActivated" @deactivated="onDeactivated">
      <p v-if="active">The component has been activated.</p>
    </vue-draggable-resizable>
  `,data(){return{active:!1}},methods:{onActivated(){this.active=!0},onDeactivated(){this.active=!1}}}),b=()=>({template:`
    <vue-draggable-resizable :w="200" :h="200" @dragging="onDrag" @dragstop="onDragStop">
      <p>{{ dragging ? 'You are dragging me crazy' : 'Standing still' }}<br>X: {{ x }} / Y: {{ y }}</p>
    </vue-draggable-resizable>
  `,data(){return{dragging:!1,x:0,y:0}},beforeDestroy:function(){clearTimeout(this.timer)},methods:{onDrag:function(e,t){this.dragging=!0,this.x=e,this.y=t},onDragStop:function(e,t){this.dragging=!1}}}),f=()=>({template:`
    <vue-draggable-resizable :w="200" :h="200" :x="0" :y="0" @resizing="onResize" @resizestop="onResizeStop">
      <p>{{ resizing ? 'You are resizing me crazy' : 'This is my favourite shape' }}<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
    </vue-draggable-resizable>
  `,data(){return{resizing:!1,x:0,y:0,width:200,height:200}},methods:{onResize:function(e,t,o,g){this.resizing=!0,this.x=e,this.y=t,this.width=o,this.height=g},onResizeStop:function(e,t,o,g){this.resizing=!1,console.log(arguments)}}}),E={title:"Examples/Events",component:z},a=s(y),r=s(b),i=s(f);var n,c,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"createLegacyStory(EventsActivated)",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,p,l;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"createLegacyStory(EventsDragging)",...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,u,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"createLegacyStory(EventsResizing)",...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const R=["Activated","Dragging","Resizing"];export{a as Activated,r as Dragging,i as Resizing,R as __namedExportsOrder,E as default};
