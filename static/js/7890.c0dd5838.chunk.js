"use strict";(self.webpackChunkctic=self.webpackChunkctic||[]).push([[7890],{48143:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(1413),a=n(45987),i=(n(72791),n(28182)),o="AppCard_card__-gQvj",s="AppCard_heightFull__X4tWq",l="AppCard_cardBody__zbEDw",c="AppCard_cardHeader__Paf0m",u="AppCard_cardTitle__Lil34",d="AppCard_action__nYCA7",p="AppCard_cardFooter__9j++7",f=n(9140),h=n(80184),m=["title","footer","children","className","titleClass","actionClass","footerClass","cardBodyClass","cardHeaderClass","action","heightFull","cardImg"],y=function(e){var t=e.title,n=e.footer,y=e.children,g=e.className,v=e.titleClass,x=e.actionClass,b=e.footerClass,A=e.cardBodyClass,j=e.cardHeaderClass,C=e.action,S=e.heightFull,k=e.cardImg,_=(0,a.Z)(e,m);return(0,h.jsxs)(f.Z,(0,r.Z)((0,r.Z)({className:(0,i.default)(o,S?s:"",g),title:t},_),{},{children:[k?(0,h.jsx)(f.Z.Img,{variant:"top",src:k}):null,t||C?(0,h.jsxs)(f.Z.Header,{className:(0,i.default)(c,j),children:["object"===typeof t?t:(0,h.jsx)(f.Z.Title,{className:(0,i.default)(u,"mb-0 text-truncate",v),children:t}),"object"===typeof C?C:(0,h.jsx)("a",{className:(0,i.default)(d,"text-decoration-none ms-1",x),href:"#",children:C})]}):null,(0,h.jsx)(f.Z.Body,{className:(0,i.default)(l,A),children:y}),n?(0,h.jsx)(f.Z.Footer,{className:(0,i.default)(p,b),children:n}):null]}))},g=y;y.defaultProps={}},38081:function(e,t,n){n.d(t,{Z:function(){return T}});var r,a=n(72791),i=n(10077),o=n(1413),s=n(29439),l=n(60185),c=n(28182),u={plain:{color:"#F8F8F2",fontFamily:"Poppins",fontWeight:n(1975).F3.REGULAR,backgroundColor:"#333333"},styles:[{types:["prolog","constant","builtin"],style:{color:"#FFFFFF"}},{types:["inserted","tag","function"],style:{color:"#E6DB74"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","selector"],style:{color:"#98CD2F"}},{types:["keyword","variable"],style:{color:"#65D4EA"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"#98CD2F"}}]},d=n(38109),p="AppComponentCard_compCardTitleDescription__ajRNc",f="AppComponentCard_preTag__1xMz6",h="AppComponentCard_componentRoot__v0LGC",m="AppComponentCard_codeIcon__wOsLC",y=n(15671),g=n(43144),v=n(60136),x=n(27277),b=n(4942),A=n(80184),j="close",C="closing",S="closed",k="open",_="opening",Z="opened",R=(r={},(0,b.Z)(r,j,j),(0,b.Z)(r,S,j),(0,b.Z)(r,_,j),(0,b.Z)(r,C,k),(0,b.Z)(r,k,k),(0,b.Z)(r,Z,k),r),w=function(e){(0,v.Z)(n,e);var t=(0,x.Z)(n);function n(e){var r;return(0,y.Z)(this,n),(r=t.call(this,e)).getClientHeight=function(){return r.refWrapper.scrollHeight},r.getDefaultExpandStyle=function(){switch(r.state.status){case _:case j:case S:return{height:0,opacity:0,overflow:"hidden"};case Z:case C:return{height:r.getClientHeight(),opacity:1,overflow:"hidden"};default:return{height:"auto",opacity:1,overflow:"unset"}}},r.getExpandStyle=function(){return(0,o.Z)((0,o.Z)({},r.getDefaultExpandStyle()),r.props.styles[R[r.state.status]])},r.getTransition=function(e){return"".concat(e," ").concat(r.props.duration,"ms ").concat(r.props.easing)},r.updateStatus=function(e){return r.setState({status:e})},r.delay=function(e,t){r.timeout=setTimeout(e,t)},r.clearDelay=function(){r.timeout&&clearTimeout(r.timeout)},r.transit=function(e,t,n){var a=r.props.duration;r.updateStatus(e),r.delay((function(){r.updateStatus(t),r.delay((function(){r.updateStatus(n)}),a)}),20)},r.toggle=function(e){r.clearDelay(),e?r.transit(_,Z,k):r.transit(C,S,j)},r.setRef=function(e){r.refWrapper=e},r.state={status:r.props.open?k:j},r}return(0,g.Z)(n,[{key:"componentDidUpdate",value:function(e){e.open!==this.props.open&&this.toggle(this.props.open)}},{key:"componentWillUnmount",value:function(){this.clearDelay()}},{key:"getStyle",value:function(){var e=this.props.transitions.map(this.getTransition).join(",");return(0,o.Z)((0,o.Z)({},this.getExpandStyle()),{},{transition:e})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=e.tag,a={className:t,style:this.getStyle(),ref:this.setRef};return(0,A.jsx)(r,(0,o.Z)((0,o.Z)({},a),{},{children:n}))}}]),n}(a.Component);w.defaultProps={open:!1,duration:200,easing:"ease-in-out",className:"",tag:"div",transitions:["height","opacity"],styles:{}};var N=w,P=n(48143),O=n(58617),E=n(43360),D=function(e){var t=e.title,n=e.description,r=e.className,i=e.maxHeight,y=e.component,g=e.source,v=(0,a.useState)(!1),x=(0,s.Z)(v,2),b=x[0],j=x[1];return(0,A.jsxs)(P.Z,{className:r,title:(0,A.jsxs)("div",{className:"w-100",children:[(0,A.jsx)("div",{children:t}),(0,A.jsx)("div",{className:(0,c.default)(p,"text-truncate"),children:n})]}),extra:g?(0,A.jsx)(E.Z,{"aria-label":"view code",shape:"circle",onClick:function(){return j(!b)},children:(0,A.jsx)(O.oT$,{className:m})}):null,children:[(0,A.jsx)(N,{open:b,children:g?(0,A.jsx)(d.Z,{style:{borderRadius:8,background:"#333333",height:350,maxHeight:400},children:(0,A.jsx)(l.ZP,(0,o.Z)((0,o.Z)({},l.lG),{},{code:g,language:"jsx",theme:u,children:function(e){var t=e.style,n=e.tokens,r=e.getLineProps,a=e.getTokenProps;return(0,A.jsx)("pre",{className:f,style:(0,o.Z)((0,o.Z)({},t),{},{maxHeight:500}),children:n.map((function(e,t){return(0,A.jsx)("div",(0,o.Z)((0,o.Z)({},r({line:e,key:t})),{},{children:e.map((function(e,n){return(0,A.jsx)("span",(0,o.Z)({},a({token:e,key:n})),t)}))}),t)}))})}}))}):null}),(0,A.jsx)(d.Z,{style:{maxHeight:i},className:"position-relative",children:(0,A.jsx)("div",{className:(0,c.default)(h,"d-flex align-items-center justify-content-center w-100 p-3"),children:(0,A.jsx)(y,{})})})]})},F=D;D.defaultProps={description:"",maxHeight:500};var B=function(e){var t=e.title,n=e.description,r=e.className,a=e.maxHeight,o=e.component,s=e.source;return(0,A.jsx)(i.Z,{type:"bottom",interval:100,duration:450,children:(0,A.jsx)(F,{title:t,description:n,className:r,maxHeight:a,component:o,source:s},"card")})},T=B;B.defaultProps={description:"",maxHeight:500}},66398:function(e,t,n){n.d(t,{Z:function(){return u}});n(72791);var r="AppComponentHeader_headerTitle__kUBXS",a="AppComponentHeader_titleH3__i1QqS",i="AppComponentHeader_textBase__RwNDJ",o=n(10077),s=n(43360),l=n(80184),c=function(e){var t=e.title,n=e.description,c=e.refUrl;return(0,l.jsx)(o.Z,{type:"top",height:"auto",interval:100,duration:450,children:(0,l.jsxs)("div",{className:"d-flex flex-column pb-3 flex-sm-row justify-content-sm-between pt-xxl-3",children:[(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)("h3",{className:a,children:t}),n?(0,l.jsx)("h5",{className:i,children:n}):null]}),c?(0,l.jsx)("div",{style:{height:30},children:(0,l.jsx)(s.Z,{variant:"primary",href:c,target:"_blank",children:"Reference"})}):null]},"header")})},u=c;c.defaultProps={}},61708:function(e,t,n){n(72791);var r=n(89743),a=n(92914),i=n(80184);t.Z=function(e){var t=e.children;return(0,i.jsx)(r.Z,{className:a.Z.row,children:t})}},27890:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r=n(72791),a=n(19913),i=n(99607),o=n(87997),s=n(75582),l=n(24485),c=n(18111),u=n.n(c),d=n(74786),p=n.n(d),f=n(93629),h=n.n(f),m=n(81694),y=n.n(m),g=n(35195),v=n(96295),x=n(46044),b=n(23031),A=n(36768),j=n(87970),C=n(41048),S=n(70587),k=n(39926),_=n(57241);function Z(e){return Z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=F(e);if(t){var a=F(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===Z(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var B=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(o,e);var t,n,a,i=D(o);function o(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=i.call.apply(i,[this].concat(n))).state={isAnimationFinished:!1},e.handleAnimationEnd=function(){var t=e.props.onAnimationEnd;e.setState({isAnimationFinished:!0}),p()(t)&&t()},e.handleAnimationStart=function(){var t=e.props.onAnimationStart;e.setState({isAnimationFinished:!1}),p()(t)&&t()},e}return t=o,n=[{key:"getDeltaAngle",value:function(){var e=this.props,t=e.startAngle,n=e.endAngle;return(0,S.uY)(n-t)*Math.min(Math.abs(n-t),360)}},{key:"renderSectorsStatically",value:function(e){var t=this,n=this.props,r=n.shape,a=n.activeShape,i=n.activeIndex,s=n.cornerRadius,l=P(n,["shape","activeShape","activeIndex","cornerRadius"]),c=(0,_.L6)(l);return e.map((function(e,n){var u=w(w(w(w({},c),{},{cornerRadius:s},e),(0,_.bw)(t.props,e,n)),{},{key:"sector-".concat(n),className:"recharts-radial-bar-sector",forceCornerRadius:l.forceCornerRadius,cornerIsExternal:l.cornerIsExternal});return o.renderSectorShape(n===i?a:r,u)}))}},{key:"renderSectorsWithAnimation",value:function(){var e=this,t=this.props,n=t.data,a=t.isAnimationActive,i=t.animationBegin,o=t.animationDuration,s=t.animationEasing,l=t.animationId,c=this.state.prevData;return r.createElement(g.ZP,{begin:i,duration:o,isActive:a,easing:s,from:{t:0},to:{t:1},key:"radialBar-".concat(l),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},(function(t){var a=t.t,i=n.map((function(e,t){var n=c&&c[t];if(n){var r=(0,S.k4)(n.startAngle,e.startAngle),i=(0,S.k4)(n.endAngle,e.endAngle);return w(w({},e),{},{startAngle:r(a),endAngle:i(a)})}var o=e.endAngle,s=e.startAngle,l=(0,S.k4)(s,o);return w(w({},e),{},{endAngle:l(a)})}));return r.createElement(x.m,null,e.renderSectorsStatically(i))}))}},{key:"renderSectors",value:function(){var e=this.props,t=e.data,n=e.isAnimationActive,r=this.state.prevData;return!(n&&t&&t.length)||r&&u()(r,t)?this.renderSectorsStatically(t):this.renderSectorsWithAnimation()}},{key:"renderBackground",value:function(e){var t=this,n=this.props.cornerRadius,r=(0,_.L6)(this.props.background);return e.map((function(e,a){e.value;var i=e.background,s=P(e,["value","background"]);if(!i)return null;var l=w(w(w(w(w({cornerRadius:n},s),{},{fill:"#eee"},i),r),(0,_.bw)(t.props,e,a)),{},{index:a,key:"sector-".concat(a),className:"recharts-radial-bar-background-sector"});return o.renderSectorShape(i,l)}))}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.data,a=e.className,i=e.background,o=e.isAnimationActive;if(t||!n||!n.length)return null;var s=this.state.isAnimationFinished,l=y()("recharts-area",a);return r.createElement(x.m,{className:l},i&&r.createElement(x.m,{className:"recharts-radial-bar-background"},this.renderBackground(n)),r.createElement(x.m,{className:"recharts-radial-bar-sectors"},this.renderSectors()),(!o||s)&&j.e.renderCallByParent(w(w({},this.props),{},{clockWise:this.getDeltaAngle()<0}),n))}}],a=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curData:e.data,prevData:t.curData}:e.data!==t.curData?{curData:e.data}:null}},{key:"renderSectorShape",value:function(e,t){return r.isValidElement(e)?r.cloneElement(e,t):p()(e)?e(t):r.createElement(v.L,t)}}],n&&O(t.prototype,n),a&&O(t,a),o}(r.PureComponent);B.displayName="RadialBar",B.defaultProps={angleAxisId:0,radiusAxisId:0,minPointSize:0,hide:!1,legendType:"rect",data:[],isAnimationActive:!A.x.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease",forceCornerRadius:!1,cornerIsExternal:!1},B.getComposedData=function(e){var t=e.item,n=e.props,r=e.radiusAxis,a=e.radiusAxisTicks,i=e.angleAxis,o=e.angleAxisTicks,s=e.displayedData,c=e.dataKey,u=e.stackedData,d=e.barPosition,p=e.bandSize,f=e.dataStartIndex,m=(0,k.Bu)(d,t);if(!m)return null;var y=i.cx,g=i.cy,v=n.layout,x=t.props,A=x.children,j=x.minPointSize,_="radial"===v?i:r,Z=u?_.scale.domain():null,R=(0,k.Yj)({numericAxis:_}),N=(0,b.NN)(A,C.b.displayName);return{data:s.map((function(e,s){var d,x,b,A,C,_;if(u?d=(0,k.Vv)(u[f+s],Z):(d=(0,k.F$)(e,c),h()(d)||(d=[R,d])),"radial"===v){x=(0,k.Fy)({axis:r,ticks:a,bandSize:p,offset:m.offset,entry:e,index:s}),C=i.scale(d[1]),A=i.scale(d[0]),b=x+m.size;var P=C-A;if(Math.abs(j)>0&&Math.abs(P)<Math.abs(j))C+=(0,S.uY)(P||j)*(Math.abs(j)-Math.abs(P));_={background:{cx:y,cy:g,innerRadius:x,outerRadius:b,startAngle:n.startAngle,endAngle:n.endAngle}}}else{x=r.scale(d[0]),b=r.scale(d[1]),C=(A=(0,k.Fy)({axis:i,ticks:o,bandSize:p,offset:m.offset,entry:e,index:s}))+m.size;var O=b-x;if(Math.abs(j)>0&&Math.abs(O)<Math.abs(j))b+=(0,S.uY)(O||j)*(Math.abs(j)-Math.abs(O))}return w(w(w(w({},e),_),{},{payload:e,value:u?d:d[1],cx:y,cy:g,innerRadius:x,outerRadius:b,startAngle:A,endAngle:C},N&&N[s]&&N[s].props),{},{tooltipPayload:[(0,k.Qo)(t,e)],tooltipPosition:(0,l.op)(y,g,(x+b)/2,(A+C)/2)})})),layout:v}};var T=(0,i.z)({chartName:"RadialBarChart",GraphicalChild:B,legendContent:"children",defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"angleAxis",AxisComp:o.I},{axisType:"radiusAxis",AxisComp:s.S}],formatAxisMap:l.t9,defaultProps:{layout:"radial",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),H=n(27281),I=[{name:"18-24",uv:31.47,pv:2400,fill:"#4299E1"},{name:"25-29",uv:26.69,pv:4567,fill:"#83a6ed"},{name:"30-34",uv:15.69,pv:1398,fill:"#8dd1e1"},{name:"35-39",uv:8.22,pv:9800,fill:"#F04F47"},{name:"40-49",uv:8.63,pv:3908,fill:"#a4de6c"},{name:"50+",uv:2.63,pv:4800,fill:"#d0ed57"},{name:"unknow",uv:6.67,pv:4800,fill:"#F04F47"}],z={top:0,left:350,lineHeight:"24px"},M=n(80184),L=function(){return(0,M.jsx)(a.h,{width:"100%",height:300,children:(0,M.jsxs)(T,{innerRadius:20,outerRadius:140,barSize:10,data:I,children:[(0,M.jsx)(B,{minAngle:15,label:!0,background:!0,clockWise:!0,dataKey:"uv"}),(0,M.jsx)(H.D,{iconSize:10,width:120,height:140,layout:"vertical",verticalAlign:"middle",wrapperStyle:z})]})})},W=n(2677),U=n(38081),Y=n(66398),G=n(61708),Q=function(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Y.Z,{title:"Radial Bar Chart",refUrl:"http://recharts.org/en-US/api/RadialBarChart/"}),(0,M.jsx)(G.Z,{children:(0,M.jsx)(W.Z,{xs:12,children:(0,M.jsx)(U.Z,{title:"Simple Radial Bar Chart",component:L,source:"import React from 'react';\r\nimport {Legend, RadialBar, RadialBarChart, ResponsiveContainer} from 'recharts';\r\nimport data from './data';\r\nimport style from './style';\r\n\r\nconst SimpleRadialBarChart = () => (\r\n  <ResponsiveContainer width='100%' height={300}>\r\n    <RadialBarChart innerRadius={20} outerRadius={140} barSize={10} data={data}>\r\n      <RadialBar minAngle={15} label background clockWise={true} dataKey='uv' />\r\n      <Legend\r\n        iconSize={10}\r\n        width={120}\r\n        height={140}\r\n        layout='vertical'\r\n        verticalAlign='middle'\r\n        wrapperStyle={style}\r\n      />\r\n    </RadialBarChart>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default SimpleRadialBarChart;\r\n"})})})]})}},41048:function(e,t,n){n.d(t,{b:function(){return r}});var r=function(e){return null};r.displayName="Cell"},92914:function(e,t){t.Z={row:"AppRowContainer_row__PQa1g"}}}]);
//# sourceMappingURL=7890.c0dd5838.chunk.js.map