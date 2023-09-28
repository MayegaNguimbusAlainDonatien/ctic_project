"use strict";(self.webpackChunkctic=self.webpackChunkctic||[]).push([[8538],{9140:function(e,a,r){r.d(a,{Z:function(){return R}});var s=r(1413),i=r(45987),l=r(81694),t=r.n(l),n=r(72791),o=r(10162),c=r(66543),d=r(27472),f=r(80184),m=["bsPrefix","className","variant","as"],v=n.forwardRef((function(e,a){var r=e.bsPrefix,l=e.className,n=e.variant,c=e.as,d=void 0===c?"img":c,v=(0,i.Z)(e,m),u=(0,o.vE)(r,"card-img");return(0,f.jsx)(d,(0,s.Z)({ref:a,className:t()(n?"".concat(u,"-").concat(n):u,l)},v))}));v.displayName="CardImg";var u=v,b=r(96040),Z=["bsPrefix","className","as"],x=n.forwardRef((function(e,a){var r=e.bsPrefix,l=e.className,c=e.as,d=void 0===c?"div":c,m=(0,i.Z)(e,Z),v=(0,o.vE)(r,"card-header"),u=(0,n.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,f.jsx)(b.Z.Provider,{value:u,children:(0,f.jsx)(d,(0,s.Z)((0,s.Z)({ref:a},m),{},{className:t()(l,v)}))})}));x.displayName="CardHeader";var p=x,N=["bsPrefix","className","bg","text","border","body","children","as"],h=(0,d.Z)("h5"),y=(0,d.Z)("h6"),P=(0,c.Z)("card-body"),j=(0,c.Z)("card-title",{Component:h}),g=(0,c.Z)("card-subtitle",{Component:y}),w=(0,c.Z)("card-link",{Component:"a"}),I=(0,c.Z)("card-text",{Component:"p"}),C=(0,c.Z)("card-footer"),F=(0,c.Z)("card-img-overlay"),k=n.forwardRef((function(e,a){var r=e.bsPrefix,l=e.className,n=e.bg,c=e.text,d=e.border,m=e.body,v=e.children,u=e.as,b=void 0===u?"div":u,Z=(0,i.Z)(e,N),x=(0,o.vE)(r,"card");return(0,f.jsx)(b,(0,s.Z)((0,s.Z)({ref:a},Z),{},{className:t()(l,x,n&&"bg-".concat(n),c&&"text-".concat(c),d&&"border-".concat(d)),children:m?(0,f.jsx)(P,{children:v}):v}))}));k.displayName="Card",k.defaultProps={body:!1};var R=Object.assign(k,{Img:u,Title:j,Subtitle:g,Body:P,Link:w,Text:I,Header:p,Footer:C,ImgOverlay:F})},96040:function(e,a,r){var s=r(72791).createContext(null);s.displayName="CardHeaderContext",a.Z=s},2677:function(e,a,r){r.d(a,{r:function(){return u}});var s=r(29439),i=r(1413),l=r(45987),t=r(81694),n=r.n(t),o=r(72791),c=r(10162),d=r(80184),f=["as","bsPrefix","className"],m=["className"],v=["xxl","xl","lg","md","sm","xs"];function u(e){var a=e.as,r=e.bsPrefix,s=e.className,t=(0,l.Z)(e,f);r=(0,c.vE)(r,"col");var o=[],d=[];return v.forEach((function(e){var a,s,i,l=t[e];delete t[e],"object"===typeof l&&null!=l?(a=l.span,s=l.offset,i=l.order):a=l;var n="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(r).concat(n):"".concat(r).concat(n,"-").concat(a)),null!=i&&d.push("order".concat(n,"-").concat(i)),null!=s&&d.push("offset".concat(n,"-").concat(s))})),[(0,i.Z)((0,i.Z)({},t),{},{className:n().apply(void 0,[s].concat(o,d))}),{as:a,bsPrefix:r,spans:o}]}var b=o.forwardRef((function(e,a){var r=u(e),t=(0,s.Z)(r,2),o=t[0],c=o.className,f=(0,l.Z)(o,m),v=t[1],b=v.as,Z=void 0===b?"div":b,x=v.bsPrefix,p=v.spans;return(0,d.jsx)(Z,(0,i.Z)((0,i.Z)({},f),{},{ref:a,className:n()(c,!p.length&&x)}))}));b.displayName="Col",a.Z=b},73053:function(e,a,r){var s=r(1413),i=r(45987),l=r(81694),t=r.n(l),n=r(72791),o=r(323),c=r(10162),d=r(80184),f=["bsPrefix","className","children","controlId","label"],m=n.forwardRef((function(e,a){var r=e.bsPrefix,l=e.className,n=e.children,m=e.controlId,v=e.label,u=(0,i.Z)(e,f);return r=(0,c.vE)(r,"form-floating"),(0,d.jsxs)(o.Z,(0,s.Z)((0,s.Z)({ref:a,className:t()(l,r),controlId:m},u),{},{children:[n,(0,d.jsx)("label",{htmlFor:m,children:v})]}))}));m.displayName="FloatingLabel",a.Z=m},3350:function(e,a,r){r.d(a,{Z:function(){return _}});var s=r(1413),i=r(45987),l=r(81694),t=r.n(l),n=r(52007),o=r.n(n),c=r(72791),d=r(70783),f=r(96882),m=r(84934),v=r(10162),u=r(80184),b=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var r=e.bsPrefix,l=e.className,n=e.htmlFor,o=(0,i.Z)(e,b),d=(0,c.useContext)(m.Z).controlId;return r=(0,v.vE)(r,"form-check-label"),(0,u.jsx)("label",(0,s.Z)((0,s.Z)({},o),{},{ref:a,htmlFor:n||d,className:t()(l,r)}))}));Z.displayName="FormCheckLabel";var x=Z,p=r(11701),N=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],h=c.forwardRef((function(e,a){var r=e.id,l=e.bsPrefix,n=e.bsSwitchPrefix,o=e.inline,b=void 0!==o&&o,Z=e.disabled,h=void 0!==Z&&Z,y=e.isValid,P=void 0!==y&&y,j=e.isInvalid,g=void 0!==j&&j,w=e.feedbackTooltip,I=void 0!==w&&w,C=e.feedback,F=e.feedbackType,k=e.className,R=e.style,E=e.title,T=void 0===E?"":E,L=e.type,S=void 0===L?"checkbox":L,H=e.label,z=e.children,O=e.as,V=void 0===O?"input":O,M=(0,i.Z)(e,N);l=(0,v.vE)(l,"form-check"),n=(0,v.vE)(n,"form-switch");var B=(0,c.useContext)(m.Z).controlId,G=(0,c.useMemo)((function(){return{controlId:r||B}}),[B,r]),W=!z&&null!=H&&!1!==H||(0,p.XW)(z,x),X=(0,u.jsx)(f.Z,(0,s.Z)((0,s.Z)({},M),{},{type:"switch"===S?"checkbox":S,ref:a,isValid:P,isInvalid:g,disabled:h,as:V}));return(0,u.jsx)(m.Z.Provider,{value:G,children:(0,u.jsx)("div",{style:R,className:t()(k,W&&l,b&&"".concat(l,"-inline"),"switch"===S&&n),children:z||(0,u.jsxs)(u.Fragment,{children:[X,W&&(0,u.jsx)(x,{title:T,children:H}),C&&(0,u.jsx)(d.Z,{type:F,tooltip:I,children:C})]})})})}));h.displayName="FormCheck";var y=Object.assign(h,{Input:f.Z,Label:x}),P=r(74292),j=(0,r(66543).Z)("form-floating"),g=r(323),w=(r(42391),r(2677)),I=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],C=c.forwardRef((function(e,a){var r=e.as,l=void 0===r?"label":r,n=e.bsPrefix,o=e.column,d=e.visuallyHidden,f=e.className,b=e.htmlFor,Z=(0,i.Z)(e,I),x=(0,c.useContext)(m.Z).controlId;n=(0,v.vE)(n,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var N=t()(f,n,d&&"visually-hidden",o&&p);return b=b||x,o?(0,u.jsx)(w.Z,(0,s.Z)({ref:a,as:"label",className:N,htmlFor:b},Z)):(0,u.jsx)(l,(0,s.Z)({ref:a,className:N,htmlFor:b},Z))}));C.displayName="FormLabel",C.defaultProps={column:!1,visuallyHidden:!1};var F=C,k=["bsPrefix","className","id"],R=c.forwardRef((function(e,a){var r=e.bsPrefix,l=e.className,n=e.id,o=(0,i.Z)(e,k),d=(0,c.useContext)(m.Z).controlId;return r=(0,v.vE)(r,"form-range"),(0,u.jsx)("input",(0,s.Z)((0,s.Z)({},o),{},{type:"range",ref:a,className:t()(l,r),id:n||d}))}));R.displayName="FormRange";var E=R,T=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],L=c.forwardRef((function(e,a){var r=e.bsPrefix,l=e.size,n=e.htmlSize,o=e.className,d=e.isValid,f=void 0!==d&&d,b=e.isInvalid,Z=void 0!==b&&b,x=e.id,p=(0,i.Z)(e,T),N=(0,c.useContext)(m.Z).controlId;return r=(0,v.vE)(r,"form-select"),(0,u.jsx)("select",(0,s.Z)((0,s.Z)({},p),{},{size:n,ref:a,className:t()(o,r,l&&"".concat(r,"-").concat(l),f&&"is-valid",Z&&"is-invalid"),id:x||N}))}));L.displayName="FormSelect";var S=L,H=["bsPrefix","className","as","muted"],z=c.forwardRef((function(e,a){var r=e.bsPrefix,l=e.className,n=e.as,o=void 0===n?"small":n,c=e.muted,d=(0,i.Z)(e,H);return r=(0,v.vE)(r,"form-text"),(0,u.jsx)(o,(0,s.Z)((0,s.Z)({},d),{},{ref:a,className:t()(l,r,c&&"text-muted")}))}));z.displayName="FormText";var O=z,V=c.forwardRef((function(e,a){return(0,u.jsx)(y,(0,s.Z)((0,s.Z)({},e),{},{ref:a,type:"switch"}))}));V.displayName="Switch";var M=Object.assign(V,{Input:y.Input,Label:y.Label}),B=r(73053),G=["className","validated","as"],W={_ref:o().any,validated:o().bool,as:o().elementType},X=c.forwardRef((function(e,a){var r=e.className,l=e.validated,n=e.as,o=void 0===n?"form":n,c=(0,i.Z)(e,G);return(0,u.jsx)(o,(0,s.Z)((0,s.Z)({},c),{},{ref:a,className:t()(r,l&&"was-validated")}))}));X.displayName="Form",X.propTypes=W;var _=Object.assign(X,{Group:g.Z,Control:P.Z,Floating:j,Check:y,Switch:M,Label:F,Text:O,Range:E,Select:S,FloatingLabel:B.Z})},323:function(e,a,r){var s=r(1413),i=r(45987),l=r(72791),t=r(84934),n=r(80184),o=["controlId","as"],c=l.forwardRef((function(e,a){var r=e.controlId,c=e.as,d=void 0===c?"div":c,f=(0,i.Z)(e,o),m=(0,l.useMemo)((function(){return{controlId:r}}),[r]);return(0,n.jsx)(t.Z.Provider,{value:m,children:(0,n.jsx)(d,(0,s.Z)((0,s.Z)({},f),{},{ref:a}))})}));c.displayName="FormGroup",a.Z=c}}]);
//# sourceMappingURL=8538.c3b8e8ed.chunk.js.map