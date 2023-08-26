"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[925],{6925:function(e,t,n){n.r(t);var r=n(4165),i=n(5861),a=n(9439),s=n(2791),c=n(7689),l=n(2810),o=n(3999),u=n(3373),p=n(1595),d=n(5094),f=n(9508),v=n(3108),h=(n(8055),n(9895)),x=n(5434),j=n(184);t.default=function(){var e=(0,f.x)(),t=e.isLoading,n=e.error,m=e.sendRequest,Z=e.clearError,V=(0,s.useState)(),b=(0,a.Z)(V,2),k=b[0],C=b[1],y=(0,c.UO)().placeId,P=(0,s.useContext)(v.V),w=(0,c.s0)(),T=(0,d.c)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!0),g=(0,a.Z)(T,3),A=g[0],E=g[1],I=g[2],N=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m("".concat("https://your-places-ojpi.onrender.com","/api/places/").concat(y),"PATCH",JSON.stringify({title:A.inputs.title.value,description:A.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+P.token});case 4:w("/"+P.userId+"/places"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("".concat("https://your-places-ojpi.onrender.com","/api/places/").concat(y));case 3:t=e.sent,C(t.place),I({title:{value:t.place.title,isValid:!0},description:{value:t.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[m,y,I]),t?(0,j.jsx)("div",{className:"center",children:(0,j.jsx)(h.Z,{})}):k||n?(0,j.jsxs)(s.Fragment,{children:[(0,j.jsx)(x.Z,{error:n,onClear:Z}),!t&&k&&(0,j.jsxs)("form",{className:"place-form",onSubmit:N,children:[(0,j.jsx)(l.Z,{id:"title",element:"input",label:"Title",validators:[(0,p.hg)()],errorText:"Please enter a valid title.",onInput:E,initialValue:k.title,initialValid:!0}),(0,j.jsx)(l.Z,{id:"description",element:"textarea",label:"Description",validators:[(0,p.CP)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:E,initialValue:k.description,initialValid:!0}),(0,j.jsx)(o.Z,{type:"submit",disabled:!A.isValid,children:"UPPDATE PLACE"})]})]}):(0,j.jsx)("div",{className:"center",children:(0,j.jsx)(u.Z,{children:(0,j.jsx)("h2",{children:"Could not find place!"})})})}},8055:function(){}}]);
//# sourceMappingURL=925.dbd5233a.chunk.js.map