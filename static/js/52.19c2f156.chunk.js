"use strict";(self.webpackChunkfrank=self.webpackChunkfrank||[]).push([[52],{3715:(t,o,e)=>{e.r(o),e.d(o,{default:()=>J});var i=e(5043),a=e(8587),n=e(8168),r=e(8606),s=e(8387),l=e(4535),c=e(6431),m=e(7056),d=e(2400);function p(t){return(0,d.Ay)("MuiImageList",t)}(0,m.A)("MuiImageList",["root","masonry","quilted","standard","woven"]);const u=i.createContext({});var g=e(579);const h=["children","className","cols","component","rowHeight","gap","style","variant"],f=(0,l.Ay)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,o[e.variant]]}})((t=>{let{ownerState:o}=t;return(0,n.A)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===o.variant&&{display:"block"})})),v=i.forwardRef((function(t,o){const e=(0,c.b)({props:t,name:"MuiImageList"}),{children:l,className:m,cols:d=2,component:v="ul",rowHeight:w="auto",gap:A=4,style:b,variant:x="standard"}=e,I=(0,a.A)(e,h),y=i.useMemo((()=>({rowHeight:w,gap:A,variant:x})),[w,A,x]);i.useEffect((()=>{0}),[]);const j="masonry"===x?(0,n.A)({columnCount:d,columnGap:A},b):(0,n.A)({gridTemplateColumns:"repeat(".concat(d,", 1fr)"),gap:A},b),S=(0,n.A)({},e,{component:v,gap:A,rowHeight:w,variant:x}),P=(t=>{const{classes:o,variant:e}=t,i={root:["root",e]};return(0,r.A)(i,p,o)})(S);return(0,g.jsx)(f,(0,n.A)({as:v,className:(0,s.A)(P.root,P[x],m),ref:o,style:j,ownerState:S},I,{children:(0,g.jsx)(u.Provider,{value:y,children:l})}))}));e(805);var w=e(154);function A(t){return(0,d.Ay)("MuiImageListItem",t)}const b=(0,m.A)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),x=["children","className","cols","component","rows","style"],I=(0,l.Ay)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[{["& .".concat(b.img)]:o.img},o.root,o[e.variant]]}})((t=>{let{ownerState:o}=t;return(0,n.A)({display:"block",position:"relative"},"standard"===o.variant&&{display:"flex",flexDirection:"column"},"woven"===o.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{["& .".concat(b.img)]:(0,n.A)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===o.variant&&{height:"auto",flexGrow:1})})})),y=i.forwardRef((function(t,o){const e=(0,c.b)({props:t,name:"MuiImageListItem"}),{children:l,className:m,cols:d=1,component:p="li",rows:h=1,style:f}=e,v=(0,a.A)(e,x),{rowHeight:b="auto",gap:y,variant:j}=i.useContext(u);let S="auto";"woven"===j?S=void 0:"auto"!==b&&(S=b*h+y*(h-1));const P=(0,n.A)({},e,{cols:d,component:p,gap:y,rowHeight:b,rows:h,variant:j}),R=(t=>{const{classes:o,variant:e}=t,i={root:["root",e],img:["img"]};return(0,r.A)(i,A,o)})(P);return(0,g.jsx)(I,(0,n.A)({as:p,className:(0,s.A)(R.root,R[j],m),ref:o,style:(0,n.A)({height:S,gridColumnEnd:"masonry"!==j?"span ".concat(d):void 0,gridRowEnd:"masonry"!==j?"span ".concat(h):void 0,marginBottom:"masonry"===j?y:void 0,breakInside:"masonry"===j?"avoid":void 0},f),ownerState:P},v,{children:i.Children.map(l,(t=>i.isValidElement(t)?"img"===t.type||(0,w.A)(t,["Image"])?i.cloneElement(t,{className:(0,s.A)(R.img,t.props.className)}):t:null))}))}));var j=e(6803);function S(t){return(0,d.Ay)("MuiImageListItemBar",t)}(0,m.A)("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);const P=["actionIcon","actionPosition","className","subtitle","title","position"],R=(0,l.Ay)("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,o["position".concat((0,j.A)(e.position))]]}})((t=>{let{theme:o,ownerState:e}=t;return(0,n.A)({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:o.typography.fontFamily},"bottom"===e.position&&{bottom:0},"top"===e.position&&{top:0},"below"===e.position&&{position:"relative",background:"transparent",alignItems:"normal"})})),k=(0,l.Ay)("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.titleWrap,o["titleWrap".concat((0,j.A)(e.position))],e.actionIcon&&o["titleWrapActionPos".concat((0,j.A)(e.actionPosition))]]}})((t=>{let{theme:o,ownerState:e}=t;return(0,n.A)({flexGrow:1,padding:"12px 16px",color:(o.vars||o).palette.common.white,overflow:"hidden"},"below"===e.position&&{padding:"6px 0 12px",color:"inherit"},e.actionIcon&&"left"===e.actionPosition&&{paddingLeft:0},e.actionIcon&&"right"===e.actionPosition&&{paddingRight:0})})),L=(0,l.Ay)("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:(t,o)=>o.title})((t=>{let{theme:o}=t;return{fontSize:o.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),M=(0,l.Ay)("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:(t,o)=>o.subtitle})((t=>{let{theme:o}=t;return{fontSize:o.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),W=(0,l.Ay)("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.actionIcon,o["actionIconActionPos".concat((0,j.A)(e.actionPosition))]]}})((t=>{let{ownerState:o}=t;return(0,n.A)({},"left"===o.actionPosition&&{order:-1})})),N=i.forwardRef((function(t,o){const e=(0,c.b)({props:t,name:"MuiImageListItemBar"}),{actionIcon:i,actionPosition:l="right",className:m,subtitle:d,title:p,position:u="bottom"}=e,h=(0,a.A)(e,P),f=(0,n.A)({},e,{position:u,actionPosition:l}),v=(t=>{const{classes:o,position:e,actionIcon:i,actionPosition:a}=t,n={root:["root","position".concat((0,j.A)(e))],titleWrap:["titleWrap","titleWrap".concat((0,j.A)(e)),i&&"titleWrapActionPos".concat((0,j.A)(a))],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon","actionIconActionPos".concat((0,j.A)(a))]};return(0,r.A)(n,S,o)})(f);return(0,g.jsxs)(R,(0,n.A)({ownerState:f,className:(0,s.A)(v.root,m),ref:o},h,{children:[(0,g.jsxs)(k,{ownerState:f,className:v.titleWrap,children:[(0,g.jsx)(L,{className:v.title,children:p}),d?(0,g.jsx)(M,{className:v.subtitle,children:d}):null]}),i?(0,g.jsx)(W,{ownerState:f,className:v.actionIcon,children:i}):null]}))}));var C=e(7392),B=e(2041),T=e(6446),z=e(1906),H=e(4802);const E=e.p+"static/media/solo.113e9524633b82ce4354.jpg",G=e.p+"static/media/piano_les.1d05e7a604aba6383591.jpg",F=e.p+"static/media/accordion1.ce82eef66330e87789df.jpg",O=e.p+"static/media/accordion2.d42cbb8d917d682ad0aa.jpg",X=e.p+"static/media/finalGroupPerformance.06d793ded50ceec5d77b.jpg",Y=e.p+"static/media/finalPerformance.f5640b6c527fe8ccd25d.jpg",q=e.p+"static/media/groupPerformance.ab309788072d3a6686a5.jpg",D=t=>"muzik-school-heesch-frank"+t,V=[{img:E,alt:D("solo"),featured:!0},{img:q,alt:D("groupPerformance")},{img:Y,alt:D("finalPerformance"),featured:!0},{img:G,alt:D("piano-lesson"),featured:!0},{img:X,alt:D("final-group-performance")},{img:O,alt:D("accordion")},{img:F,alt:D("accordion")}];var Z=e(3467);function _(t,o,e){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return{src:"".concat(t,"?w=").concat(o*a,"&h=").concat(e*i,"&fit=crop&auto=format"),srcSet:"".concat(t,"?w=").concat(o*a,"&h=").concat(e*i,"&fit=crop&auto=format&dpr=2 2x")}}const J=()=>{const[t,o]=i.useState(null),e=i.useRef(null),a=()=>{o(null)},n=()=>{null!==t&&o((t+1)%V.length)},r=()=>{null!==t&&o((t-1+V.length)%V.length)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z.A,{text:"Gallery"}),(0,g.jsx)(v,{sx:{width:"100%",transform:"translateZ(0)"},rowHeight:200,gap:1,id:"gallery",children:V.map(((t,e)=>{const i=t.featured?2:1,a=t.featured?2:1;return(0,g.jsxs)(y,{cols:i,rows:a,onClick:()=>(t=>{o(t)})(e),children:[(0,g.jsx)("img",{..._(t.img,250,200,a,i),alt:t.alt,loading:"lazy"}),(0,g.jsx)(N,{sx:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},title:t.title,position:"top",actionPosition:"left"})]},t.img)}))}),(0,g.jsx)(B.A,{open:null!==t,onClose:a,"aria-labelledby":"image-viewer","aria-describedby":"image-viewer-description",children:(0,g.jsx)(T.A,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",maxWidth:"600px",bgcolor:"#1a1919",boxShadow:24,p:4,"@media (max-width: 600px)":{width:"90%"}},onTouchStart:t=>{e.current=t.touches[0].clientX},onTouchEnd:t=>{if(null!==e.current){const o=t.changedTouches[0].clientX;e.current-o>50?n():e.current-o<-50&&r()}e.current=null},children:null!==t&&(0,g.jsxs)(T.A,{sx:{position:"relative"},children:[(0,g.jsx)(C.A,{onClick:a,sx:{position:"absolute",top:0,right:0,color:"white"},children:(0,g.jsx)(H.A,{})}),(0,g.jsx)("img",{src:V[t].img,alt:V[t].title,style:{width:"100%"}}),(0,g.jsx)(z.A,{onClick:r,sx:{position:"absolute",left:0,top:"50%",transform:"translateY(-50%)",bgcolor:"rgba(0, 0, 0, 0.5)",color:"white",fontSize:"2rem","@media (max-width: 600px)":{fontSize:"1.5rem"}},children:"<"}),(0,g.jsx)(z.A,{onClick:n,sx:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",bgcolor:"rgba(0, 0, 0, 0.5)",color:"white",fontSize:"2rem","@media (max-width: 600px)":{fontSize:"1.5rem"}},children:">"}),(0,g.jsxs)(T.A,{sx:{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",bgcolor:"rgba(0, 0, 0, 0.5)",color:"white",p:1,borderRadius:1},children:[t+1," / ",V.length]})]})})})]})}},4802:(t,o,e)=>{var i=e(4994);o.A=void 0;var a=i(e(39)),n=e(579);o.A=(0,a.default)((0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")}}]);
//# sourceMappingURL=52.19c2f156.chunk.js.map