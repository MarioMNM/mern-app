"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[99],{1099:function(e,a,t){t.r(a);var r=t(4165),n=t(5861),s=t(9439),i=t(2791),l=t(7689),d=t(2810),o=t(3999),u=t(5434),p=t(9895),c=t(7212),v=t(1595),x=t(5094),m=t(9508),f=t(3108),h=(t(8055),t(184));a.default=function(){var e=(0,i.useContext)(f.V),a=(0,m.x)(),t=a.isLoading,j=a.error,Z=a.sendRequest,b=a.clearError,g=(0,x.c)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),k=(0,s.Z)(g,2),P=k[0],C=k[1],T=(0,l.s0)(),V=function(){var a=(0,n.Z)((0,r.Z)().mark((function a(t){var n;return(0,r.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,(n=new FormData).append("title",P.inputs.title.value),n.append("description",P.inputs.description.value),n.append("address",P.inputs.address.value),n.append("image",P.inputs.image.value),a.next=9,Z("".concat("https://your-places-ojpi.onrender.com","/api/places"),"POST",n,{Authorization:"Bearer "+e.token});case 9:T("/"),a.next=14;break;case 12:a.prev=12,a.t0=a.catch(1);case 14:case"end":return a.stop()}}),a,null,[[1,12]])})));return function(e){return a.apply(this,arguments)}}();return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)(u.Z,{error:j,onClear:b}),(0,h.jsxs)("form",{className:"place-form",onSubmit:V,children:[t&&(0,h.jsx)(p.Z,{asOverlay:!0}),(0,h.jsx)(d.Z,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,v.hg)()],errorText:"Please enter a valid title.",onInput:C}),(0,h.jsx)(d.Z,{id:"description",element:"textarea",label:"Description",validators:[(0,v.CP)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:C}),(0,h.jsx)(d.Z,{id:"address",element:"input",label:"Address",validators:[(0,v.hg)()],errorText:"Please enter a valid adress.",onInput:C}),(0,h.jsx)(c.Z,{center:!0,id:"image",onInput:C,errorText:"Please provide a valid image."}),(0,h.jsx)("div",{className:"center",children:(0,h.jsx)(o.Z,{type:"submit",disabled:!P.isValid,children:"ADD PLACE"})})]})]})}},8055:function(){}}]);
//# sourceMappingURL=99.52a07ce0.chunk.js.map