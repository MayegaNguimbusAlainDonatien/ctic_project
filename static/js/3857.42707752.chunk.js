"use strict";(self.webpackChunkctic=self.webpackChunkctic||[]).push([[3857],{53857:function(t,n,e){e.r(n),e.d(n,{default:function(){return F}});var r=e(29439),i=e(72791),o=e(52007),c=e.n(o),u=e(90474);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(){return s=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},s.apply(this,arguments)}function h(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){a(t,n,e[n])}))}return t}function l(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function f(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p={cursor:"pointer"},d=function(t){var n=t.index,e=t.onClick,r=t.photo,o=t.margin,c=t.direction,u=t.top,a=t.left,l=t.key,f={margin:o,display:"block"};"column"===c&&(f.position="absolute",f.left=a,f.top=u);return i.createElement("img",s({key:l,style:e?h({},f,p):f},r,{onClick:e?function(t){e(t,{photo:r,index:n})}:null}))},m=c().shape({key:c().string,src:c().string.isRequired,width:c().number.isRequired,height:c().number.isRequired,alt:c().string,title:c().string,srcSet:c().oneOfType([c().string,c().array]),sizes:c().oneOfType([c().string,c().array])});d.propTypes={index:c().number.isRequired,onClick:c().func,photo:m.isRequired,margin:c().number,top:function(t){if("column"===t.direction&&"number"!==typeof t.top)return new Error("top is a required number when direction is set to `column`")},left:function(t){if("column"===t.direction&&"number"!==typeof t.left)return new Error("left is a required number when direction is set to `column`")},direction:c().string};var g=function(t,n){return n||(n=0),Number(Math.round(t+"e"+n)+"e-"+n)},v=function(t){var n=t.width,e=t.height;return g(n/e,2)};function y(t){this.content=[],this.scoreFunction=t}y.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],n=this.content.pop();return this.content.length>0&&(this.content[0]=n,this.sinkDown(0)),t},remove:function(t){for(var n=this.content.length,e=0;e<n;e++)if(this.content[e]==t){var r=this.content.pop();if(e==n-1)break;this.content[e]=r,this.bubbleUp(e),this.sinkDown(e);break}},size:function(){return this.content.length},bubbleUp:function(t){for(var n=this.content[t],e=this.scoreFunction(n);t>0;){var r=Math.floor((t+1)/2)-1,i=this.content[r];if(e>=this.scoreFunction(i))break;this.content[r]=n,this.content[t]=i,t=r}},sinkDown:function(t){for(var n=this.content.length,e=this.content[t],r=this.scoreFunction(e);;){var i=2*(t+1),o=i-1,c=null;if(o<n){var u=this.content[o],a=this.scoreFunction(u);a<r&&(c=o)}if(i<n){var s=this.content[i];this.scoreFunction(s)<(null==c?r:a)&&(c=i)}if(null==c)break;this.content[t]=this.content[c],this.content[c]=e,t=c}}};var b=function(t,n,e){var r=function(t,n,e){var r={},i={},o={};o[n]=0;var c=new y((function(t){return t.weight}));for(c.push({id:n,weight:0});c.size();){var u=c.pop(),a=u.id;if(!i[a]){var s=t(a)||{};for(var h in i[a]=1,s){var l=u.weight+s[h];("undefined"===typeof o[h]||o[h]>l)&&(o[h]=l,c.push({id:h,weight:l}),r[h]=a)}}}if("undefined"===typeof o[e])throw new Error("There is no path from ".concat(n," to ").concat(e));return r}(t,n,e);return function(t,n){for(var e=[],r=n;r;)e.push(r),t[r],r=t[r];return e.reverse()}(r,e)},w=function(t,n,e){return(n-t.length*(2*e))/t.reduce((function(t,n){return t+v(n)}),0)},x=function(t,n,e,r,i,o){var c=t.slice(n,e),u=w(c,r,o);return Math.pow(Math.abs(u-i),2)},j=function(t){var n=t.containerWidth,e=t.limitNodeSearch,r=t.targetRowHeight,i=t.margin,o=t.photos,c=function(t,n,e,r,i){return function(o){var c={};c[+(o=+o)]=0;for(var u=o+1;u<e.length+1&&!(u-o>r);++u)c[u.toString()]=x(e,o,u,n,t,i);return c}}(r,n,o,e,i),u=b(c,"0",o.length);u=u.map((function(t){return+t}));for(var a=1;a<u.length;++a)for(var s=o.slice(u[a-1],u[a]),h=w(s,n,i),l=u[a-1];l<u[a];++l)o[l].width=g(h*v(o[l]),1),o[l].height=h;return o},k=i.memo((function(t){var n=t.photos,e=t.onClick,r=t.direction,o=t.margin,c=t.limitNodeSearch,a=t.targetRowHeight,s=t.columns,p=t.renderImage,m=f((0,i.useState)(0),2),v=m[0],y=m[1],b=(0,i.useRef)(null);(0,i.useLayoutEffect)((function(){var t=null,n=new u.default((function(n){var e=n[0].contentRect.width;v!==e&&(t=window.requestAnimationFrame((function(){y(Math.floor(e))})))}));return n.observe(b.current),function(){n.disconnect(),window.cancelAnimationFrame(t)}}));var w=function(t,r){var i=r.index;e(t,{index:i,photo:n[i],previous:n[i-1]||null,next:n[i+1]||null})};if(!v)return i.createElement("div",{ref:b},"\xa0");var x,k,O=v-1;"row"===r&&("function"===typeof c&&(c=c(v)),"function"===typeof a&&(a=a(v)),void 0===c&&(c=2,v>=450&&(c=function(t){var n=t.targetRowHeight,e=t.containerWidth;return g(e/n/1.5)+8}({containerWidth:v,targetRowHeight:a}))),x={display:"flex",flexWrap:"wrap",flexDirection:"row"},k=j({containerWidth:O,limitNodeSearch:c,targetRowHeight:a,margin:o,photos:n})),"column"===r&&("function"===typeof s&&(s=s(v)),void 0===s&&(s=1,v>=500&&(s=2),v>=900&&(s=3),v>=1500&&(s=4)),x={position:"relative"},k=function(t){for(var n=t.photos,e=t.columns,r=t.containerWidth,i=t.margin,o=(r-2*i*e)/e,c=n.map((function(t){var n=t.height/t.width*o;return h({},t,{width:g(o,1),height:g(n,1)})})),u=[],a=[],s=0;s<e;s++)u[s]=g(s*(o+2*i),1),a[s]=0;var l=c.map((function(t){var n=a.reduce((function(t,n,e){return n<a[t]?e:t}),0);t.top=a[n],t.left=u[n],a[n]=a[n]+t.height+2*i;var e=a.reduce((function(t,n,e){return n>a[t]?e:t}),0);return t.containerHeight=a[e],t}));return l}({containerWidth:O,columns:s,margin:o,photos:n}),x.height=k[k.length-1].containerHeight);var R=p||d;return i.createElement("div",{className:"react-photo-gallery--gallery"},i.createElement("div",{ref:b,style:x},k.map((function(t,n){var i=t.left,c=t.top,u=t.containerHeight,a=l(t,["left","top","containerHeight"]);return R({left:i,top:c,key:t.key||t.src,containerHeight:u,index:n,margin:o,direction:r,onClick:e?w:null,photo:a})}))))}));k.propTypes={photos:c().arrayOf(m).isRequired,direction:c().string,onClick:c().func,columns:c().oneOfType([c().func,c().number]),targetRowHeight:c().oneOfType([c().func,c().number]),limitNodeSearch:c().oneOfType([c().func,c().number]),margin:c().number,renderImage:c().func},k.defaultProps={margin:2,direction:"row",targetRowHeight:300};var O=k,R=[{src:"https://source.unsplash.com/2ShvY8Lf6l0/800x599",width:4,height:3},{src:"https://source.unsplash.com/Dm-qxdynoEc/800x799",width:1,height:1},{src:"https://source.unsplash.com/qDkso9nvCg0/600x799",width:3,height:4},{src:"https://source.unsplash.com/iecJiKe_RNg/600x799",width:3,height:4},{src:"https://source.unsplash.com/epcsn8Ed8kY/600x799",width:3,height:4},{src:"https://source.unsplash.com/NQSWvyVRIJk/800x599",width:4,height:3},{src:"https://source.unsplash.com/zh7GEuORbUw/600x799",width:3,height:4},{src:"https://source.unsplash.com/PpOHJezOalU/800x599",width:4,height:3},{src:"https://source.unsplash.com/I1ASdgphUH4/800x599",width:4,height:3}],S=e(98056),E="Portfolio_portfolioHeader__SWqAV",H="Portfolio_portfolioTabs__-m+sh",P="Portfolio_reactPhotoGallery__NQx3E",N="Portfolio_tab__q9E2c",Z=e(19485),q=e(61734),_=e(10077),C=e(6344),T=e(28182),D=e(80184),W=[{id:323,name:(0,D.jsx)(S.Z,{id:"common.all"})},{id:333,name:(0,D.jsx)(S.Z,{id:"portfolio.logo"})},{id:32323,name:(0,D.jsx)(S.Z,{id:"portfolio.painting"})},{id:421,name:(0,D.jsx)(S.Z,{id:"portfolio.graphicDesign"})},{id:4454,name:(0,D.jsx)(S.Z,{id:"portfolio.webDesign"})},{id:221,name:(0,D.jsx)(S.Z,{id:"portfolio.ui"})}],F=function(){var t=(0,i.useState)(0),n=(0,r.Z)(t,2),e=n[0],o=n[1];return(0,D.jsxs)(_.Z,{type:"bottom",children:[(0,D.jsx)(C.Z,{title:"Portfolio"}),(0,D.jsxs)("div",{className:"w-100",children:[(0,D.jsxs)("div",{className:(0,T.default)(E,"ms-auto me-auto text-center"),children:[(0,D.jsx)("h2",{children:(0,D.jsx)(S.Z,{id:"portfolio.heading"})}),(0,D.jsx)("p",{children:(0,D.jsx)(S.Z,{id:"portfolio.content"})})]}),(0,D.jsx)(_.Z,{type:"bottom",children:(0,D.jsxs)("div",{children:[(0,D.jsx)(Z.Z,{className:(0,T.default)(H,"d-flex align-items-center justify-content-center"),defaultActiveKey:e,onChange:function(t,n){o(n)},children:W.map((function(t,n){return(0,D.jsx)(q.Z,{title:t.name,eventKey:n,tabClassName:(0,T.default)(N,"border-0")})}))}),(0,D.jsx)("div",{className:P,children:(0,D.jsx)(O,{margin:10,photos:function(t){for(var n,e,r=t.length;r>0;)e=Math.floor(Math.random()*r),n=t[--r],t[r]=t[e],t[e]=n;return t}(R),direction:"column"})})]},"b")})]},"a")]})}}}]);
//# sourceMappingURL=3857.42707752.chunk.js.map