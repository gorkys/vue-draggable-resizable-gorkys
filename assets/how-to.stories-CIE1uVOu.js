import{V as m}from"./vue-draggable-resizable-BX8TAbx8.js";import{c as p}from"./legacy-story-CKa4IDFP.js";import"./vue.esm-bundler-CTxP03on.js";const u=()=>({template:`
    <div>
      <vue-draggable-resizable
        class-name-active="my-active-class"
        v-for="element in elements"
        :key="element.id"
        :x="element.x"
        :y="element.y"
        :w="200"
        :h="200"
        :resizable="false"
        @dragging="(left, top) => dragging(element.id, left, top)"
        @dragstop="(left, top) => dragstop(element.id, left, top)"
      >
        <p>{{ element.text }}</p>
      </vue-draggable-resizable>
      <div id="toolbar">
        <label>
            <input type="checkbox" name="sync" v-model="sync" disabled> Synchronize (use <b>ctrl</b> or <b>cmd</b> key)
        </label>
      </div>
    </div>
  `,data(){return{sync:!1,draggingId:null,prevOffsetX:0,prevOffsetY:0,elements:[{id:1,x:0,y:0,text:"Element 1"},{id:2,x:200,y:200,text:"Element 2"}]}},mounted(){const e=[17,91,224];window.addEventListener("keydown",t=>{(e.includes(t.keyCode)||t.ctrlKey||t.metaKey)&&(this.sync=!0)}),window.addEventListener("keyup",t=>{e.includes(t.keyCode)&&(this.sync=!1)}),window.addEventListener("blur",()=>{this.sync=!1})},methods:{dragging(e,t,i){this.draggingId=e;const s=this.elements.find(r=>r.id===e);if(!s)return;const a=t-s.x,d=i-s.y;if(!this.sync){this.prevOffsetX=a,this.prevOffsetY=d;return}const g=this.deltaX(a),f=this.deltaY(d);this.elements.map(r=>(r.id!==e&&(r.x+=g,r.y+=f),r))},dragstop(e,t,i){this.elements.map(s=>(s.id===e&&(s.x=t,s.y=i),s)),this.draggingId=null,this.prevOffsetX=0,this.prevOffsetY=0,this.sync=!1},deltaX(e){const t=e-this.prevOffsetX;return this.prevOffsetX=e,t},deltaY(e){const t=e-this.prevOffsetY;return this.prevOffsetY=e,t}},computed:{draggingElement:function(){if(this.draggingId)return this.elements.find(e=>e.id===this.draggingId)}}}),b={title:"Examples/How To",component:m},n=p(u);var l,o,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"createLegacyStory(DragMultiple)",...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const x=["DragMultipleElements"];export{n as DragMultipleElements,x as __namedExportsOrder,b as default};
