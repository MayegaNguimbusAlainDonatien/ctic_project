"use strict";(self.webpackChunkctic=self.webpackChunkctic||[]).push([[9622],{48143:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(1413),o=t(45987),i=(t(72791),t(28182)),a="AppCard_card__-gQvj",c="AppCard_heightFull__X4tWq",s="AppCard_cardBody__zbEDw",l="AppCard_cardHeader__Paf0m",d="AppCard_cardTitle__Lil34",u="AppCard_action__nYCA7",m="AppCard_cardFooter__9j++7",p=t(9140),f=t(80184),h=["title","footer","children","className","titleClass","actionClass","footerClass","cardBodyClass","cardHeaderClass","action","heightFull","cardImg"],y=function(e){var n=e.title,t=e.footer,y=e.children,x=e.className,v=e.titleClass,g=e.actionClass,Z=e.footerClass,C=e.cardBodyClass,A=e.cardHeaderClass,b=e.action,j=e.heightFull,N=e.cardImg,H=(0,o.Z)(e,h);return(0,f.jsxs)(p.Z,(0,r.Z)((0,r.Z)({className:(0,i.default)(a,j?c:"",x),title:n},H),{},{children:[N?(0,f.jsx)(p.Z.Img,{variant:"top",src:N}):null,n||b?(0,f.jsxs)(p.Z.Header,{className:(0,i.default)(l,A),children:["object"===typeof n?n:(0,f.jsx)(p.Z.Title,{className:(0,i.default)(d,"mb-0 text-truncate",v),children:n}),"object"===typeof b?b:(0,f.jsx)("a",{className:(0,i.default)(u,"text-decoration-none ms-1",g),href:"#",children:b})]}):null,(0,f.jsx)(p.Z.Body,{className:(0,i.default)(s,C),children:y}),t?(0,f.jsx)(p.Z.Footer,{className:(0,i.default)(m,Z),children:t}):null]}))},x=y;y.defaultProps={}},38081:function(e,n,t){t.d(n,{Z:function(){return F}});var r,o=t(72791),i=t(10077),a=t(1413),c=t(29439),s=t(60185),l=t(28182),d={plain:{color:"#F8F8F2",fontFamily:"Poppins",fontWeight:t(1975).F3.REGULAR,backgroundColor:"#333333"},styles:[{types:["prolog","constant","builtin"],style:{color:"#FFFFFF"}},{types:["inserted","tag","function"],style:{color:"#E6DB74"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","selector"],style:{color:"#98CD2F"}},{types:["keyword","variable"],style:{color:"#65D4EA"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"#98CD2F"}}]},u=t(38109),m="AppComponentCard_compCardTitleDescription__ajRNc",p="AppComponentCard_preTag__1xMz6",f="AppComponentCard_componentRoot__v0LGC",h="AppComponentCard_codeIcon__wOsLC",y=t(15671),x=t(43144),v=t(60136),g=t(27277),Z=t(4942),C=t(80184),A="close",b="closing",j="closed",N="open",H="opening",K="opened",k=(r={},(0,Z.Z)(r,A,A),(0,Z.Z)(r,j,A),(0,Z.Z)(r,H,A),(0,Z.Z)(r,b,N),(0,Z.Z)(r,N,N),(0,Z.Z)(r,K,N),r),q=function(e){(0,v.Z)(t,e);var n=(0,g.Z)(t);function t(e){var r;return(0,y.Z)(this,t),(r=n.call(this,e)).getClientHeight=function(){return r.refWrapper.scrollHeight},r.getDefaultExpandStyle=function(){switch(r.state.status){case H:case A:case j:return{height:0,opacity:0,overflow:"hidden"};case K:case b:return{height:r.getClientHeight(),opacity:1,overflow:"hidden"};default:return{height:"auto",opacity:1,overflow:"unset"}}},r.getExpandStyle=function(){return(0,a.Z)((0,a.Z)({},r.getDefaultExpandStyle()),r.props.styles[k[r.state.status]])},r.getTransition=function(e){return"".concat(e," ").concat(r.props.duration,"ms ").concat(r.props.easing)},r.updateStatus=function(e){return r.setState({status:e})},r.delay=function(e,n){r.timeout=setTimeout(e,n)},r.clearDelay=function(){r.timeout&&clearTimeout(r.timeout)},r.transit=function(e,n,t){var o=r.props.duration;r.updateStatus(e),r.delay((function(){r.updateStatus(n),r.delay((function(){r.updateStatus(t)}),o)}),20)},r.toggle=function(e){r.clearDelay(),e?r.transit(H,K,N):r.transit(b,j,A)},r.setRef=function(e){r.refWrapper=e},r.state={status:r.props.open?N:A},r}return(0,x.Z)(t,[{key:"componentDidUpdate",value:function(e){e.open!==this.props.open&&this.toggle(this.props.open)}},{key:"componentWillUnmount",value:function(){this.clearDelay()}},{key:"getStyle",value:function(){var e=this.props.transitions.map(this.getTransition).join(",");return(0,a.Z)((0,a.Z)({},this.getExpandStyle()),{},{transition:e})}},{key:"render",value:function(){var e=this.props,n=e.className,t=e.children,r=e.tag,o={className:n,style:this.getStyle(),ref:this.setRef};return(0,C.jsx)(r,(0,a.Z)((0,a.Z)({},o),{},{children:t}))}}]),t}(o.Component);q.defaultProps={open:!1,duration:200,easing:"ease-in-out",className:"",tag:"div",transitions:["height","opacity"],styles:{}};var E=q,B=t(48143),w=t(58617),I=t(43360),_=function(e){var n=e.title,t=e.description,r=e.className,i=e.maxHeight,y=e.component,x=e.source,v=(0,o.useState)(!1),g=(0,c.Z)(v,2),Z=g[0],A=g[1];return(0,C.jsxs)(B.Z,{className:r,title:(0,C.jsxs)("div",{className:"w-100",children:[(0,C.jsx)("div",{children:n}),(0,C.jsx)("div",{className:(0,l.default)(m,"text-truncate"),children:t})]}),extra:x?(0,C.jsx)(I.Z,{"aria-label":"view code",shape:"circle",onClick:function(){return A(!Z)},children:(0,C.jsx)(w.oT$,{className:h})}):null,children:[(0,C.jsx)(E,{open:Z,children:x?(0,C.jsx)(u.Z,{style:{borderRadius:8,background:"#333333",height:350,maxHeight:400},children:(0,C.jsx)(s.ZP,(0,a.Z)((0,a.Z)({},s.lG),{},{code:x,language:"jsx",theme:d,children:function(e){var n=e.style,t=e.tokens,r=e.getLineProps,o=e.getTokenProps;return(0,C.jsx)("pre",{className:p,style:(0,a.Z)((0,a.Z)({},n),{},{maxHeight:500}),children:t.map((function(e,n){return(0,C.jsx)("div",(0,a.Z)((0,a.Z)({},r({line:e,key:n})),{},{children:e.map((function(e,t){return(0,C.jsx)("span",(0,a.Z)({},o({token:e,key:t})),n)}))}),n)}))})}}))}):null}),(0,C.jsx)(u.Z,{style:{maxHeight:i},className:"position-relative",children:(0,C.jsx)("div",{className:(0,l.default)(f,"d-flex align-items-center justify-content-center w-100 p-3"),children:(0,C.jsx)(y,{})})})]})},D=_;_.defaultProps={description:"",maxHeight:500};var T=function(e){var n=e.title,t=e.description,r=e.className,o=e.maxHeight,a=e.component,c=e.source;return(0,C.jsx)(i.Z,{type:"bottom",interval:100,duration:450,children:(0,C.jsx)(D,{title:n,description:t,className:r,maxHeight:o,component:a,source:c},"card")})},F=T;T.defaultProps={description:"",maxHeight:500}},66398:function(e,n,t){t.d(n,{Z:function(){return d}});t(72791);var r="AppComponentHeader_headerTitle__kUBXS",o="AppComponentHeader_titleH3__i1QqS",i="AppComponentHeader_textBase__RwNDJ",a=t(10077),c=t(43360),s=t(80184),l=function(e){var n=e.title,t=e.description,l=e.refUrl;return(0,s.jsx)(a.Z,{type:"top",height:"auto",interval:100,duration:450,children:(0,s.jsxs)("div",{className:"d-flex flex-column pb-3 flex-sm-row justify-content-sm-between pt-xxl-3",children:[(0,s.jsxs)("div",{className:r,children:[(0,s.jsx)("h3",{className:o,children:n}),t?(0,s.jsx)("h5",{className:i,children:t}):null]}),l?(0,s.jsx)("div",{style:{height:30},children:(0,s.jsx)(c.Z,{variant:"primary",href:l,target:"_blank",children:"Reference"})}):null]},"header")})},d=l;l.defaultProps={}},11406:function(e,n,t){var r=t(45987),o=t(1413),i=(t(72791),t(92914)),a=t(10077),c=t(89743),s=t(80184),l=["children"],d=function(e){return(0,s.jsx)(c.Z,(0,o.Z)({className:i.Z.row},e))};n.Z=function(e){var n=e.children,t=(0,r.Z)(e,l);return(0,s.jsx)(a.Z,(0,o.Z)((0,o.Z)({animateStyle:{flexDirection:"row"},component:d,type:"bottom",ease:"easeInOutQuart",height:"auto"},t),{},{children:n}))}},99622:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(72791),o=t(66398),i=t(11406),a=t(2677),c=t(38081),s=t(65695),l="Accordion_accHeader__3o5ia",d=t(80184),u=function(){return(0,d.jsx)("div",{children:(0,d.jsxs)(s.Z,{defaultActiveKey:"0",children:[(0,d.jsxs)(s.Z.Item,{eventKey:"0",children:[(0,d.jsx)(s.Z.Header,{className:l,children:"Accordion Item #1"}),(0,d.jsx)(s.Z.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),(0,d.jsxs)(s.Z.Item,{eventKey:"1",children:[(0,d.jsx)(s.Z.Header,{className:l,children:"Accordion Item #2"}),(0,d.jsx)(s.Z.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})})},m=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(s.Z,{children:[(0,d.jsxs)(s.Z.Item,{eventKey:"0",children:[(0,d.jsx)(s.Z.Header,{className:l,children:"Accordion Item #1"}),(0,d.jsx)(s.Z.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),(0,d.jsxs)(s.Z.Item,{eventKey:"1",children:[(0,d.jsx)(s.Z.Header,{className:l,children:"Accordion Item #2"}),(0,d.jsx)(s.Z.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})})},p=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(s.Z,{defaultActiveKey:"0",flush:!0,children:[(0,d.jsxs)(s.Z.Item,{eventKey:"0",children:[(0,d.jsx)(s.Z.Header,{className:l,children:"Accordion Item #1"}),(0,d.jsx)(s.Z.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),(0,d.jsxs)(s.Z.Item,{eventKey:"1",children:[(0,d.jsx)(s.Z.Header,{className:l,children:"Accordion Item #2"}),(0,d.jsx)(s.Z.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})})},f=t(87333),h=t(9140);function y(e){var n=e.children,t=e.eventKey,r=(0,f.k)(t,(function(){return console.log("totally custom!")}));return(0,d.jsx)("button",{type:"button",style:{backgroundColor:"pink"},onClick:r,children:n})}var x=function(){return(0,d.jsxs)(s.Z,{defaultActiveKey:"0",children:[(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(h.Z.Header,{children:(0,d.jsx)(y,{eventKey:"0",children:"Click me!"})}),(0,d.jsx)(s.Z.Collapse,{eventKey:"0",children:(0,d.jsx)(h.Z.Body,{children:"Hello! Im the body"})})]}),(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(h.Z.Header,{children:(0,d.jsx)(y,{eventKey:"1",children:"Click me!"})}),(0,d.jsx)(s.Z.Collapse,{eventKey:"1",children:(0,d.jsx)(h.Z.Body,{children:"Hello! Im another body"})})]})]})},v=t(5912);function g(e){var n=e.children,t=e.eventKey,o=e.callback,i=(0,r.useContext)(v.Z).activeEventKey,a=(0,f.k)(t,(function(){return o&&o(t)})),c=i===t;return(0,d.jsx)("button",{type:"button",style:{backgroundColor:c?"pink":"lavender"},onClick:a,children:n})}var Z=function(){return(0,d.jsxs)(s.Z,{defaultActiveKey:"0",children:[(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(h.Z.Header,{children:(0,d.jsx)(g,{eventKey:"0",children:"Click me!"})}),(0,d.jsx)(s.Z.Collapse,{eventKey:"0",children:(0,d.jsx)(h.Z.Body,{children:"Hello! Im the body"})})]}),(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(h.Z.Header,{children:(0,d.jsx)(g,{eventKey:"1",children:"Click me!"})}),(0,d.jsx)(s.Z.Collapse,{eventKey:"1",children:(0,d.jsx)(h.Z.Body,{children:"Hello! Im another body"})})]})]})},C=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Z,{title:"Accordion",description:"Build vertically collapsing accordions in combination with the Collapse component.",refUrl:"https://react-bootstrap.github.io/components/accordion/"}),(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(a.Z,{xs:12,md:6,children:(0,d.jsx)(c.Z,{title:"Basic Examples",component:u,source:"import React from 'react';\r\nimport {Accordion} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nconst Basic = () => {\r\n  return (\r\n    <div>\r\n      <Accordion defaultActiveKey='0'>\r\n        <Accordion.Item eventKey='0'>\r\n          <Accordion.Header className={styles.accHeader}>\r\n            Accordion Item #1\r\n          </Accordion.Header>\r\n          <Accordion.Body>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r\n            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n            aliquip ex ea commodo consequat. Duis aute irure dolor in\r\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r\n            culpa qui officia deserunt mollit anim id est laborum.\r\n          </Accordion.Body>\r\n        </Accordion.Item>\r\n        <Accordion.Item eventKey='1'>\r\n          <Accordion.Header className={styles.accHeader}>\r\n            Accordion Item #2\r\n          </Accordion.Header>\r\n          <Accordion.Body>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r\n            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n            aliquip ex ea commodo consequat. Duis aute irure dolor in\r\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r\n            culpa qui officia deserunt mollit anim id est laborum.\r\n          </Accordion.Body>\r\n        </Accordion.Item>\r\n      </Accordion>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Basic;\r\n",noScrollbar:!0})}),(0,d.jsx)(a.Z,{xs:12,md:6,children:(0,d.jsx)(c.Z,{title:"Flush",component:p,source:"import React from 'react';\r\nimport {Accordion} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nconst Flush = () => {\r\n  return (\r\n    <>\r\n      <Accordion defaultActiveKey='0' flush>\r\n        <Accordion.Item eventKey='0'>\r\n          <Accordion.Header className={styles.accHeader}>\r\n            Accordion Item #1\r\n          </Accordion.Header>\r\n          <Accordion.Body>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r\n            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n            aliquip ex ea commodo consequat. Duis aute irure dolor in\r\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r\n            culpa qui officia deserunt mollit anim id est laborum.\r\n          </Accordion.Body>\r\n        </Accordion.Item>\r\n        <Accordion.Item eventKey='1'>\r\n          <Accordion.Header className={styles.accHeader}>\r\n            Accordion Item #2\r\n          </Accordion.Header>\r\n          <Accordion.Body>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r\n            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n            aliquip ex ea commodo consequat. Duis aute irure dolor in\r\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r\n            culpa qui officia deserunt mollit anim id est laborum.\r\n          </Accordion.Body>\r\n        </Accordion.Item>\r\n      </Accordion>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default Flush;\r\n",noScrollbar:!0,description:"Add flush to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container."})}),(0,d.jsx)(a.Z,{xs:12,md:6,children:(0,d.jsx)(c.Z,{title:"Custom Accordions",component:x,source:"import React from 'react';\r\nimport {Accordion, Card, useAccordionButton} from 'react-bootstrap';\r\n\r\n// eslint-disable-next-line react/prop-types\r\nfunction CustomToggle({children, eventKey}) {\r\n  const decoratedOnClick = useAccordionButton(eventKey, () =>\r\n    console.log('totally custom!'),\r\n  );\r\n\r\n  return (\r\n    <button\r\n      type='button'\r\n      style={{backgroundColor: 'pink'}}\r\n      onClick={decoratedOnClick}>\r\n      {children}\r\n    </button>\r\n  );\r\n}\r\n\r\nfunction Custom() {\r\n  return (\r\n    <Accordion defaultActiveKey='0'>\r\n      <Card>\r\n        <Card.Header>\r\n          <CustomToggle eventKey='0'>Click me!</CustomToggle>\r\n        </Card.Header>\r\n        <Accordion.Collapse eventKey='0'>\r\n          <Card.Body>Hello! Im the body</Card.Body>\r\n        </Accordion.Collapse>\r\n      </Card>\r\n      <Card>\r\n        <Card.Header>\r\n          <CustomToggle eventKey='1'>Click me!</CustomToggle>\r\n        </Card.Header>\r\n        <Accordion.Collapse eventKey='1'>\r\n          <Card.Body>Hello! Im another body</Card.Body>\r\n        </Accordion.Collapse>\r\n      </Card>\r\n    </Accordion>\r\n  );\r\n}\r\n\r\nexport default Custom;\r\n",noScrollbar:!0,description:"You can still create card-based accordions like those in Bootstrap 4. You can hook into the Accordion toggle functionality via useAccordionButton to make custom toggle components."})}),(0,d.jsx)(a.Z,{xs:12,md:6,children:(0,d.jsx)(c.Z,{title:"Custom Toggle with Expansion Awareness",component:Z,source:"import React, {useContext} from 'react';\r\nimport {\r\n  Accordion,\r\n  AccordionContext,\r\n  Card,\r\n  useAccordionButton,\r\n} from 'react-bootstrap';\r\n\r\n// eslint-disable-next-line react/prop-types\r\nfunction ContextAwareToggle({children, eventKey, callback}) {\r\n  const {activeEventKey} = useContext(AccordionContext);\r\n\r\n  const decoratedOnClick = useAccordionButton(\r\n    eventKey,\r\n    () => callback && callback(eventKey),\r\n  );\r\n\r\n  const isCurrentEventKey = activeEventKey === eventKey;\r\n\r\n  return (\r\n    <button\r\n      type='button'\r\n      style={{backgroundColor: isCurrentEventKey ? 'pink' : 'lavender'}}\r\n      onClick={decoratedOnClick}>\r\n      {children}\r\n    </button>\r\n  );\r\n}\r\n\r\nfunction Toggle() {\r\n  return (\r\n    <Accordion defaultActiveKey='0'>\r\n      <Card>\r\n        <Card.Header>\r\n          <ContextAwareToggle eventKey='0'>Click me!</ContextAwareToggle>\r\n        </Card.Header>\r\n        <Accordion.Collapse eventKey='0'>\r\n          <Card.Body>Hello! Im the body</Card.Body>\r\n        </Accordion.Collapse>\r\n      </Card>\r\n      <Card>\r\n        <Card.Header>\r\n          <ContextAwareToggle eventKey='1'>Click me!</ContextAwareToggle>\r\n        </Card.Header>\r\n        <Accordion.Collapse eventKey='1'>\r\n          <Card.Body>Hello! Im another body</Card.Body>\r\n        </Accordion.Collapse>\r\n      </Card>\r\n    </Accordion>\r\n  );\r\n}\r\n\r\nexport default Toggle;\r\n",noScrollbar:!0,description:"You may wish to have different styles for the toggle if its associated section is expanded, this can be achieved with a custom toggle that is context aware and also takes advantage of the useAccordionButton hook. "})}),(0,d.jsx)(a.Z,{xs:12,md:6,children:(0,d.jsx)(c.Z,{title:"Fully Collapsed State",component:m,source:"import React from 'react';\r\nimport {Accordion} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nconst Fully = () => {\r\n  return (\r\n    <>\r\n      <Accordion>\r\n        <Accordion.Item eventKey='0'>\r\n          <Accordion.Header className={styles.accHeader}>\r\n            Accordion Item #1\r\n          </Accordion.Header>\r\n          <Accordion.Body>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r\n            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n            aliquip ex ea commodo consequat. Duis aute irure dolor in\r\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r\n            culpa qui officia deserunt mollit anim id est laborum.\r\n          </Accordion.Body>\r\n        </Accordion.Item>\r\n        <Accordion.Item eventKey='1'>\r\n          <Accordion.Header className={styles.accHeader}>\r\n            Accordion Item #2\r\n          </Accordion.Header>\r\n          <Accordion.Body>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r\n            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n            aliquip ex ea commodo consequat. Duis aute irure dolor in\r\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r\n            culpa qui officia deserunt mollit anim id est laborum.\r\n          </Accordion.Body>\r\n        </Accordion.Item>\r\n      </Accordion>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default Fully;\r\n",noScrollbar:!0,description:"If you want your Accordion to start in a fully-collapsed state, then simply dont pass in a defaultActiveKey prop to Accordion."})})]})]})}},65695:function(e,n,t){t.d(n,{Z:function(){return q}});var r=t(1413),o=t(45987),i=t(81694),a=t.n(i),c=t(72791),s=t(32592),l=t(10162),d=t(73193),u=t(5912),m=t(80184),p=["as","bsPrefix","className","children","eventKey"],f=c.forwardRef((function(e,n){var t=e.as,i=void 0===t?"div":t,s=e.bsPrefix,f=e.className,h=e.children,y=e.eventKey,x=(0,o.Z)(e,p),v=(0,c.useContext)(u.Z).activeEventKey;return s=(0,l.vE)(s,"accordion-collapse"),(0,m.jsx)(d.Z,(0,r.Z)((0,r.Z)({ref:n,in:(0,u.T)(v,y)},x),{},{className:a()(f,s),children:(0,m.jsx)(i,{children:c.Children.only(h)})}))}));f.displayName="AccordionCollapse";var h=f,y=t(58410),x=["as","bsPrefix","className"],v=c.forwardRef((function(e,n){var t=e.as,i=void 0===t?"div":t,s=e.bsPrefix,d=e.className,u=(0,o.Z)(e,x);s=(0,l.vE)(s,"accordion-body");var p=(0,c.useContext)(y.Z).eventKey;return(0,m.jsx)(h,{eventKey:p,children:(0,m.jsx)(i,(0,r.Z)((0,r.Z)({ref:n},u),{},{className:a()(d,s)}))})}));v.displayName="AccordionBody";var g=v,Z=t(87333),C=["as","bsPrefix","className","children","onClick"],A=c.forwardRef((function(e,n){var t=e.as,i=void 0===t?"h2":t,c=e.bsPrefix,s=e.className,d=e.children,u=e.onClick,p=(0,o.Z)(e,C);return c=(0,l.vE)(c,"accordion-header"),(0,m.jsx)(i,(0,r.Z)((0,r.Z)({ref:n},p),{},{className:a()(s,c),children:(0,m.jsx)(Z.Z,{onClick:u,children:d})}))}));A.displayName="AccordionHeader";var b=A,j=["as","bsPrefix","className","eventKey"],N=c.forwardRef((function(e,n){var t=e.as,i=void 0===t?"div":t,s=e.bsPrefix,d=e.className,u=e.eventKey,p=(0,o.Z)(e,j);s=(0,l.vE)(s,"accordion-item");var f=(0,c.useMemo)((function(){return{eventKey:u}}),[u]);return(0,m.jsx)(y.Z.Provider,{value:f,children:(0,m.jsx)(i,(0,r.Z)((0,r.Z)({ref:n},p),{},{className:a()(d,s)}))})}));N.displayName="AccordionItem";var H=N,K=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],k=c.forwardRef((function(e,n){var t=(0,s.Ch)(e,{activeKey:"onSelect"}),i=t.as,d=void 0===i?"div":i,p=t.activeKey,f=t.bsPrefix,h=t.className,y=t.onSelect,x=t.flush,v=t.alwaysOpen,g=(0,o.Z)(t,K),Z=(0,l.vE)(f,"accordion"),C=(0,c.useMemo)((function(){return{activeEventKey:p,onSelect:y,alwaysOpen:v}}),[p,y,v]);return(0,m.jsx)(u.Z.Provider,{value:C,children:(0,m.jsx)(d,(0,r.Z)((0,r.Z)({ref:n},g),{},{className:a()(h,Z,x&&"".concat(Z,"-flush"))}))})}));k.displayName="Accordion";var q=Object.assign(k,{Button:Z.Z,Collapse:h,Item:H,Header:b,Body:g})},87333:function(e,n,t){t.d(n,{k:function(){return f}});var r=t(1413),o=t(45987),i=t(93433),a=t(72791),c=t(81694),s=t.n(c),l=t(5912),d=t(58410),u=t(10162),m=t(80184),p=["as","bsPrefix","className","onClick"];function f(e,n){var t=(0,a.useContext)(l.Z),r=t.activeEventKey,o=t.onSelect,c=t.alwaysOpen;return function(t){var a=e===r?null:e;c&&(a=Array.isArray(r)?r.includes(e)?r.filter((function(n){return n!==e})):[].concat((0,i.Z)(r),[e]):[e]),null==o||o(a,t),null==n||n(t)}}var h=a.forwardRef((function(e,n){var t=e.as,i=void 0===t?"button":t,c=e.bsPrefix,h=e.className,y=e.onClick,x=(0,o.Z)(e,p);c=(0,u.vE)(c,"accordion-button");var v=(0,a.useContext)(d.Z).eventKey,g=f(v,y),Z=(0,a.useContext)(l.Z).activeEventKey;return"button"===i&&(x.type="button"),(0,m.jsx)(i,(0,r.Z)((0,r.Z)({ref:n,onClick:g},x),{},{"aria-expanded":v===Z,className:s()(h,c,!(0,l.T)(Z,v)&&"collapsed")}))}));h.displayName="AccordionButton",n.Z=h},5912:function(e,n,t){function r(e,n){return Array.isArray(e)?e.includes(n):e===n}t.d(n,{T:function(){return r}});var o=t(72791).createContext({});o.displayName="AccordionContext",n.Z=o},58410:function(e,n,t){var r=t(72791).createContext({eventKey:""});r.displayName="AccordionItemContext",n.Z=r},73193:function(e,n,t){var r,o=t(1413),i=t(45987),a=t(4942),c=t(81694),s=t.n(c),l=t(75427),d=t(72791),u=t(27726),m=t(71380),p=t(82777),f=t(67202),h=t(85007),y=t(80184),x=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],v={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function g(e,n){var t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],r=v[e];return t+parseInt((0,l.Z)(n,r[0]),10)+parseInt((0,l.Z)(n,r[1]),10)}var Z=(r={},(0,a.Z)(r,u.Wj,"collapse"),(0,a.Z)(r,u.Ix,"collapsing"),(0,a.Z)(r,u.d0,"collapsing"),(0,a.Z)(r,u.cn,"collapse show"),r),C={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:g},A=d.forwardRef((function(e,n){var t=e.onEnter,r=e.onEntering,a=e.onEntered,c=e.onExit,l=e.onExiting,u=e.className,v=e.children,C=e.dimension,A=void 0===C?"height":C,b=e.getDimensionValue,j=void 0===b?g:b,N=(0,i.Z)(e,x),H="function"===typeof A?A():A,K=(0,d.useMemo)((function(){return(0,p.Z)((function(e){e.style[H]="0"}),t)}),[H,t]),k=(0,d.useMemo)((function(){return(0,p.Z)((function(e){var n="scroll".concat(H[0].toUpperCase()).concat(H.slice(1));e.style[H]="".concat(e[n],"px")}),r)}),[H,r]),q=(0,d.useMemo)((function(){return(0,p.Z)((function(e){e.style[H]=null}),a)}),[H,a]),E=(0,d.useMemo)((function(){return(0,p.Z)((function(e){e.style[H]="".concat(j(H,e),"px"),(0,f.Z)(e)}),c)}),[c,j,H]),B=(0,d.useMemo)((function(){return(0,p.Z)((function(e){e.style[H]=null}),l)}),[H,l]);return(0,y.jsx)(h.Z,(0,o.Z)((0,o.Z)({ref:n,addEndListener:m.Z},N),{},{"aria-expanded":N.role?N.in:null,onEnter:K,onEntering:k,onEntered:q,onExit:E,onExiting:B,childRef:v.ref,children:function(e,n){return d.cloneElement(v,(0,o.Z)((0,o.Z)({},n),{},{className:s()(u,v.props.className,Z[e],"width"===H&&"collapse-horizontal")}))}}))}));A.defaultProps=C,n.Z=A},82777:function(e,n){n.Z=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),null)}},92914:function(e,n){n.Z={row:"AppRowContainer_row__PQa1g"}}}]);
//# sourceMappingURL=9622.032acdb7.chunk.js.map