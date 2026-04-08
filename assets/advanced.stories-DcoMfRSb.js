import{V as v}from"./vue-draggable-resizable-BX8TAbx8.js";import{c as i}from"./legacy-story-CKa4IDFP.js";import"./vue.esm-bundler-CTxP03on.js";const x=()=>({template:`
       <div style="height: 600px; width: 1200px; border: 1px solid red; position: relative;margin: 0 auto">
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        x="210"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :snap="true"
        :snapTolerance="20"
        style="background-color: rgb(174, 213, 129);">
      </vue-draggable-resizable>
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        x="420"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :snap="true"
        :snapTolerance="20"
        style="background-color: rgb(129, 212, 250);">
      </vue-draggable-resizable>
    </div>
  `}),L=()=>({template:`
    <div style="height: 600px; width: 1200px; border: 1px solid red; position: relative;margin: 0 auto">
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        x="210"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        style="background-color: rgb(174, 213, 129);">
      </vue-draggable-resizable>
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        x="420"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        style="background-color: rgb(129, 212, 250);">
      </vue-draggable-resizable>
    </div>
  `}),w=()=>({template:`
    <div style="position: relative;margin: 0 auto">
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        :snap="true"
        :snapTolerance="10"
        @refLineParams="getRefLineParams"
        style="background-color: rgb(174, 213, 129);">
      </vue-draggable-resizable>
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        :x="210"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        :snap="true"
        :snapTolerance="10"
        @refLineParams="getRefLineParams"
        style="background-color: rgb(129, 212, 250);">
      </vue-draggable-resizable>
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        :x="420"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        :snap="true"
        :snapTolerance="10"
        @refLineParams="getRefLineParams"
        style="background-color: rgb(239, 154, 154);">
      </vue-draggable-resizable>
      <span class="ref-line v-line"
            v-for="item in vLine"
            v-show="item.display"
            :style="{ left: item.position, top: item.origin, height: item.lineLength}"
      />
      <span class="ref-line h-line"
            v-for="item in hLine"
            v-show="item.display"
            :style="{ top: item.position, left: item.origin, width: item.lineLength}"
       />
    </div>
  `,data(){return{vLine:[],hLine:[]}},methods:{getRefLineParams(f){const{vLine:y,hLine:z}=f;this.vLine=y,this.hLine=z}}}),R={title:"Examples/Advanced",component:v},e={parameters:{layout:"fullscreen"},render:()=>({components:{VueDraggableResizable:v},template:`
      <div style="position: relative; height: 400px; border: 1px solid #3b82f6; margin: 1em; box-sizing: border-box;">
        <vue-draggable-resizable :w="200" :h="200" :parent="true">
          <p>Resize the parent container and keep the component constrained inside it.</p>
        </vue-draggable-resizable>
      </div>
    `})},r=i(L),a=i(x),t=i(w);var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    components: {
      VueDraggableResizable
    },
    template: \`
      <div style="position: relative; height: 400px; border: 1px solid #3b82f6; margin: 1em; box-sizing: border-box;">
        <vue-draggable-resizable :w="200" :h="200" :parent="true">
          <p>Resize the parent container and keep the component constrained inside it.</p>
        </vue-draggable-resizable>
      </div>
    \`
  })
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"createLegacyStory(ConflictDetectionStory)",...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"createLegacyStory(AdsorptionAlignmentStory)",...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,b,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"createLegacyStory(RefLineAlignStory)",...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const A=["ParentResize","ConflictDetection","SnapAlignment","ReferenceGuides"];export{r as ConflictDetection,e as ParentResize,t as ReferenceGuides,a as SnapAlignment,A as __namedExportsOrder,R as default};
