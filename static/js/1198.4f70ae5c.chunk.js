"use strict";(self.webpackChunkctic=self.webpackChunkctic||[]).push([[1198],{48143:function(e,n,r){r.d(n,{Z:function(){return y}});var t=r(1413),o=r(45987),a=(r(72791),r(28182)),s="AppCard_card__-gQvj",l="AppCard_heightFull__X4tWq",i="AppCard_cardBody__zbEDw",d="AppCard_cardHeader__Paf0m",c="AppCard_cardTitle__Lil34",u="AppCard_action__nYCA7",m="AppCard_cardFooter__9j++7",h=r(9140),p=r(80184),f=["title","footer","children","className","titleClass","actionClass","footerClass","cardBodyClass","cardHeaderClass","action","heightFull","cardImg"],x=function(e){var n=e.title,r=e.footer,x=e.children,y=e.className,Z=e.titleClass,g=e.actionClass,v=e.footerClass,j=e.cardBodyClass,M=e.cardHeaderClass,C=e.action,w=e.heightFull,b=e.cardImg,S=(0,o.Z)(e,f);return(0,p.jsxs)(h.Z,(0,t.Z)((0,t.Z)({className:(0,a.default)(s,w?l:"",y),title:n},S),{},{children:[b?(0,p.jsx)(h.Z.Img,{variant:"top",src:b}):null,n||C?(0,p.jsxs)(h.Z.Header,{className:(0,a.default)(d,M),children:["object"===typeof n?n:(0,p.jsx)(h.Z.Title,{className:(0,a.default)(c,"mb-0 text-truncate",Z),children:n}),"object"===typeof C?C:(0,p.jsx)("a",{className:(0,a.default)(u,"text-decoration-none ms-1",g),href:"#",children:C})]}):null,(0,p.jsx)(h.Z.Body,{className:(0,a.default)(i,j),children:x}),r?(0,p.jsx)(h.Z.Footer,{className:(0,a.default)(m,v),children:r}):null]}))},y=x;x.defaultProps={}},38081:function(e,n,r){r.d(n,{Z:function(){return A}});var t,o=r(72791),a=r(10077),s=r(1413),l=r(29439),i=r(60185),d=r(28182),c={plain:{color:"#F8F8F2",fontFamily:"Poppins",fontWeight:r(1975).F3.REGULAR,backgroundColor:"#333333"},styles:[{types:["prolog","constant","builtin"],style:{color:"#FFFFFF"}},{types:["inserted","tag","function"],style:{color:"#E6DB74"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","selector"],style:{color:"#98CD2F"}},{types:["keyword","variable"],style:{color:"#65D4EA"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"#98CD2F"}}]},u=r(38109),m="AppComponentCard_compCardTitleDescription__ajRNc",h="AppComponentCard_preTag__1xMz6",p="AppComponentCard_componentRoot__v0LGC",f="AppComponentCard_codeIcon__wOsLC",x=r(15671),y=r(43144),Z=r(60136),g=r(27277),v=r(4942),j=r(80184),M="close",C="closing",w="closed",b="open",S="opening",B="opened",N=(t={},(0,v.Z)(t,M,M),(0,v.Z)(t,w,M),(0,v.Z)(t,S,M),(0,v.Z)(t,C,b),(0,v.Z)(t,b,b),(0,v.Z)(t,B,b),t),k=function(e){(0,Z.Z)(r,e);var n=(0,g.Z)(r);function r(e){var t;return(0,x.Z)(this,r),(t=n.call(this,e)).getClientHeight=function(){return t.refWrapper.scrollHeight},t.getDefaultExpandStyle=function(){switch(t.state.status){case S:case M:case w:return{height:0,opacity:0,overflow:"hidden"};case B:case C:return{height:t.getClientHeight(),opacity:1,overflow:"hidden"};default:return{height:"auto",opacity:1,overflow:"unset"}}},t.getExpandStyle=function(){return(0,s.Z)((0,s.Z)({},t.getDefaultExpandStyle()),t.props.styles[N[t.state.status]])},t.getTransition=function(e){return"".concat(e," ").concat(t.props.duration,"ms ").concat(t.props.easing)},t.updateStatus=function(e){return t.setState({status:e})},t.delay=function(e,n){t.timeout=setTimeout(e,n)},t.clearDelay=function(){t.timeout&&clearTimeout(t.timeout)},t.transit=function(e,n,r){var o=t.props.duration;t.updateStatus(e),t.delay((function(){t.updateStatus(n),t.delay((function(){t.updateStatus(r)}),o)}),20)},t.toggle=function(e){t.clearDelay(),e?t.transit(S,B,b):t.transit(C,w,M)},t.setRef=function(e){t.refWrapper=e},t.state={status:t.props.open?b:M},t}return(0,y.Z)(r,[{key:"componentDidUpdate",value:function(e){e.open!==this.props.open&&this.toggle(this.props.open)}},{key:"componentWillUnmount",value:function(){this.clearDelay()}},{key:"getStyle",value:function(){var e=this.props.transitions.map(this.getTransition).join(",");return(0,s.Z)((0,s.Z)({},this.getExpandStyle()),{},{transition:e})}},{key:"render",value:function(){var e=this.props,n=e.className,r=e.children,t=e.tag,o={className:n,style:this.getStyle(),ref:this.setRef};return(0,j.jsx)(t,(0,s.Z)((0,s.Z)({},o),{},{children:r}))}}]),r}(o.Component);k.defaultProps={open:!1,duration:200,easing:"ease-in-out",className:"",tag:"div",transitions:["height","opacity"],styles:{}};var H=k,F=r(48143),_=r(58617),E=r(43360),T=function(e){var n=e.title,r=e.description,t=e.className,a=e.maxHeight,x=e.component,y=e.source,Z=(0,o.useState)(!1),g=(0,l.Z)(Z,2),v=g[0],M=g[1];return(0,j.jsxs)(F.Z,{className:t,title:(0,j.jsxs)("div",{className:"w-100",children:[(0,j.jsx)("div",{children:n}),(0,j.jsx)("div",{className:(0,d.default)(m,"text-truncate"),children:r})]}),extra:y?(0,j.jsx)(E.Z,{"aria-label":"view code",shape:"circle",onClick:function(){return M(!v)},children:(0,j.jsx)(_.oT$,{className:f})}):null,children:[(0,j.jsx)(H,{open:v,children:y?(0,j.jsx)(u.Z,{style:{borderRadius:8,background:"#333333",height:350,maxHeight:400},children:(0,j.jsx)(i.ZP,(0,s.Z)((0,s.Z)({},i.lG),{},{code:y,language:"jsx",theme:c,children:function(e){var n=e.style,r=e.tokens,t=e.getLineProps,o=e.getTokenProps;return(0,j.jsx)("pre",{className:h,style:(0,s.Z)((0,s.Z)({},n),{},{maxHeight:500}),children:r.map((function(e,n){return(0,j.jsx)("div",(0,s.Z)((0,s.Z)({},t({line:e,key:n})),{},{children:e.map((function(e,r){return(0,j.jsx)("span",(0,s.Z)({},o({token:e,key:r})),n)}))}),n)}))})}}))}):null}),(0,j.jsx)(u.Z,{style:{maxHeight:a},className:"position-relative",children:(0,j.jsx)("div",{className:(0,d.default)(p,"d-flex align-items-center justify-content-center w-100 p-3"),children:(0,j.jsx)(x,{})})})]})},R=T;T.defaultProps={description:"",maxHeight:500};var q=function(e){var n=e.title,r=e.description,t=e.className,o=e.maxHeight,s=e.component,l=e.source;return(0,j.jsx)(a.Z,{type:"bottom",interval:100,duration:450,children:(0,j.jsx)(R,{title:n,description:r,className:t,maxHeight:o,component:s,source:l},"card")})},A=q;q.defaultProps={description:"",maxHeight:500}},66398:function(e,n,r){r.d(n,{Z:function(){return c}});r(72791);var t="AppComponentHeader_headerTitle__kUBXS",o="AppComponentHeader_titleH3__i1QqS",a="AppComponentHeader_textBase__RwNDJ",s=r(10077),l=r(43360),i=r(80184),d=function(e){var n=e.title,r=e.description,d=e.refUrl;return(0,i.jsx)(s.Z,{type:"top",height:"auto",interval:100,duration:450,children:(0,i.jsxs)("div",{className:"d-flex flex-column pb-3 flex-sm-row justify-content-sm-between pt-xxl-3",children:[(0,i.jsxs)("div",{className:t,children:[(0,i.jsx)("h3",{className:o,children:n}),r?(0,i.jsx)("h5",{className:a,children:r}):null]}),d?(0,i.jsx)("div",{style:{height:30},children:(0,i.jsx)(l.Z,{variant:"primary",href:d,target:"_blank",children:"Reference"})}):null]},"header")})},c=d;d.defaultProps={}},11406:function(e,n,r){var t=r(45987),o=r(1413),a=(r(72791),r(92914)),s=r(10077),l=r(89743),i=r(80184),d=["children"],c=function(e){return(0,i.jsx)(l.Z,(0,o.Z)({className:a.Z.row},e))};n.Z=function(e){var n=e.children,r=(0,t.Z)(e,d);return(0,i.jsx)(s.Z,(0,o.Z)((0,o.Z)({animateStyle:{flexDirection:"row"},component:c,type:"bottom",ease:"easeInOutQuart",height:"auto"},r),{},{children:n}))}},31198:function(e,n,r){r.r(n),r.d(n,{default:function(){return E}});var t=r(72791),o=r(66398),a=r(11406),s=r(2677),l=r(38081),i=r(45746),d=r(43360),c={closeBtn:"Modals_closeBtn__YcfnD"},u=r(80184),m=function(){return(0,u.jsx)("div",{children:(0,u.jsxs)(i.Z.Dialog,{children:[(0,u.jsx)(i.Z.Header,{className:c.closeBtn,closeButton:!0,children:(0,u.jsx)(i.Z.Title,{children:"Modal title"})}),(0,u.jsx)(i.Z.Body,{children:(0,u.jsx)("p",{children:"Modal body text goes here."})}),(0,u.jsxs)(i.Z.Footer,{children:[(0,u.jsx)(d.Z,{variant:"secondary",children:"Close"}),(0,u.jsx)(d.Z,{variant:"primary",children:"Save changes"})]})]})})},h=r(29439);function p(){var e=(0,t.useState)(!1),n=(0,h.Z)(e,2),r=n[0],o=n[1],a=function(){return o(!1)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{variant:"primary",onClick:function(){return o(!0)},children:"Launch demo modal"}),(0,u.jsxs)(i.Z,{show:r,onHide:a,children:[(0,u.jsx)(i.Z.Header,{className:c.closeBtn,closeButton:!0,children:(0,u.jsx)(i.Z.Title,{children:"Modal heading"})}),(0,u.jsx)(i.Z.Body,{children:"Woohoo, you're reading this text in a modal!"}),(0,u.jsxs)(i.Z.Footer,{children:[(0,u.jsx)(d.Z,{variant:"secondary",onClick:a,children:"Close"}),(0,u.jsx)(d.Z,{variant:"primary",onClick:a,children:"Save Changes"})]})]})]})}var f=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(p,{})})};function x(){var e=(0,t.useState)(!1),n=(0,h.Z)(e,2),r=n[0],o=n[1],a=function(){return o(!1)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{variant:"primary",onClick:function(){return o(!0)},children:"Launch demo modal"}),(0,u.jsxs)(i.Z,{show:r,onHide:a,animation:!1,children:[(0,u.jsx)(i.Z.Header,{className:c.closeBtn,closeButton:!0,children:(0,u.jsx)(i.Z.Title,{children:"Modal heading"})}),(0,u.jsx)(i.Z.Body,{children:"Woohoo, you're reading this text in a modal!"}),(0,u.jsxs)(i.Z.Footer,{children:[(0,u.jsx)(d.Z,{variant:"secondary",onClick:a,children:"Close"}),(0,u.jsx)(d.Z,{variant:"primary",onClick:a,children:"Save Changes"})]})]})]})}var y=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(x,{})})},Z=r(1413);function g(e){return(0,u.jsxs)(i.Z,(0,Z.Z)((0,Z.Z)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,u.jsx)(i.Z.Header,{className:c.closeBtn,closeButton:!0,children:(0,u.jsx)(i.Z.Title,{id:"contained-modal-title-vcenter",children:"Modal heading"})}),(0,u.jsxs)(i.Z.Body,{children:[(0,u.jsx)("h4",{children:"Centered Modal"}),(0,u.jsx)("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})]}),(0,u.jsx)(i.Z.Footer,{children:(0,u.jsx)(d.Z,{onClick:e.onHide,children:"Close"})})]}))}function v(){var e=t.useState(!1),n=(0,h.Z)(e,2),r=n[0],o=n[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{variant:"primary",onClick:function(){return o(!0)},children:"Launch vertically centered modal"}),(0,u.jsx)(g,{show:r,onHide:function(){return o(!1)}})]})}var j=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(v,{})})},M=r(47022),C=r(89743);function w(e){return(0,u.jsxs)(i.Z,(0,Z.Z)((0,Z.Z)({},e),{},{"aria-labelledby":"contained-modal-title-vcenter",children:[(0,u.jsx)(i.Z.Header,{className:c.closeBtn,closeButton:!0,children:(0,u.jsx)(i.Z.Title,{id:"contained-modal-title-vcenter",children:"Using Grid in Modal"})}),(0,u.jsx)(i.Z.Body,{className:"show-grid",children:(0,u.jsxs)(M.Z,{children:[(0,u.jsxs)(C.Z,{children:[(0,u.jsx)(s.Z,{xs:12,md:8,children:".col-xs-12 .col-md-8"}),(0,u.jsx)(s.Z,{xs:6,md:4,children:".col-xs-6 .col-md-4"})]}),(0,u.jsxs)(C.Z,{children:[(0,u.jsx)(s.Z,{xs:6,md:4,children:".col-xs-6 .col-md-4"}),(0,u.jsx)(s.Z,{xs:6,md:4,children:".col-xs-6 .col-md-4"}),(0,u.jsx)(s.Z,{xs:6,md:4,children:".col-xs-6 .col-md-4"})]})]})}),(0,u.jsx)(i.Z.Footer,{children:(0,u.jsx)(d.Z,{onClick:e.onHide,children:"Close"})})]}))}function b(){var e=(0,t.useState)(!1),n=(0,h.Z)(e,2),r=n[0],o=n[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{variant:"primary",onClick:function(){return o(!0)},children:"Launch modal with grid"}),(0,u.jsx)(w,{show:r,onHide:function(){return o(!1)}})]})}var S=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(b,{})})};function B(){var e=(0,t.useState)(!1),n=(0,h.Z)(e,2),r=n[0],o=n[1],a=(0,t.useState)(!1),s=(0,h.Z)(a,2),l=s[0],m=s[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{onClick:function(){return o(!0)},children:"Small modal"})," ",(0,u.jsx)(d.Z,{onClick:function(){return m(!0)},children:"Large modal"}),(0,u.jsxs)(i.Z,{size:"sm",show:r,onHide:function(){return o(!1)},"aria-labelledby":"example-modal-sizes-title-sm",children:[(0,u.jsx)(i.Z.Header,{className:c.closeBtn,closeButton:!0,children:(0,u.jsx)(i.Z.Title,{id:"example-modal-sizes-title-sm",children:"Small Modal"})}),(0,u.jsx)(i.Z.Body,{children:"..."})]}),(0,u.jsxs)(i.Z,{size:"lg",show:l,onHide:function(){return m(!1)},"aria-labelledby":"example-modal-sizes-title-lg",children:[(0,u.jsx)(i.Z.Header,{className:c.closeBtn,closeButton:!0,children:(0,u.jsx)(i.Z.Title,{id:"example-modal-sizes-title-lg",children:"Large Modal"})}),(0,u.jsx)(i.Z.Body,{children:"..."})]})]})}var N=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(B,{})})};function k(){var e=(0,t.useState)(!0),n=(0,h.Z)(e,2),r=n[0],o=n[1],a=(0,t.useState)(!1),s=(0,h.Z)(a,2),l=s[0],m=s[1];return(0,u.jsxs)("div",{style:{width:"100%"},children:[[!0,"sm-down","md-down","lg-down","xl-down","xxl-down"].map((function(e,n){return(0,u.jsxs)(d.Z,{className:"me-2",onClick:function(){return o(e),void m(!0)},children:["Full screen","string"===typeof e&&"below ".concat(e.split("-")[0])]},n)})),(0,u.jsxs)(i.Z,{show:l,fullscreen:r,onHide:function(){return m(!1)},children:[(0,u.jsx)(i.Z.Header,{className:c.closeBtn,closeButton:!0,children:(0,u.jsx)(i.Z.Title,{children:"Modal"})}),(0,u.jsx)(i.Z.Body,{children:"Modal body content"})]})]})}var H=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(k,{})})};function F(){var e=(0,t.useState)(!1),n=(0,h.Z)(e,2),r=n[0],o=n[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{variant:"primary",onClick:function(){return o(!0)},children:"Custom Width Modal"}),(0,u.jsxs)(i.Z,{show:r,onHide:function(){return o(!1)},dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[(0,u.jsx)(i.Z.Header,{className:c.closeBtn,closeButton:!0,children:(0,u.jsx)(i.Z.Title,{id:"example-custom-modal-styling-title",children:"Custom Modal Styling"})}),(0,u.jsx)(i.Z.Body,{children:(0,u.jsx)("p",{children:"Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!"})})]})]})}var _=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(F,{})})},E=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Z,{title:"Modals",description:"Add dialogs to your site for lightboxes, user notifications, or completely custom content.",refUrl:"https://react-bootstrap.github.io/components/modal/"}),(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(s.Z,{xs:12,md:6,children:(0,u.jsx)(l.Z,{title:"Static Markup",component:m,source:"import React from 'react';\r\nimport {Button, Modal} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nconst Examples = () => {\r\n  return (\r\n    <div>\r\n      <Modal.Dialog>\r\n        <Modal.Header className={styles.closeBtn} closeButton>\r\n          <Modal.Title>Modal title</Modal.Title>\r\n        </Modal.Header>\r\n\r\n        <Modal.Body>\r\n          <p>Modal body text goes here.</p>\r\n        </Modal.Body>\r\n\r\n        <Modal.Footer>\r\n          <Button variant='secondary'>Close</Button>\r\n          <Button variant='primary'>Save changes</Button>\r\n        </Modal.Footer>\r\n      </Modal.Dialog>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Examples;\r\n",noScrollbar:!0,description:"Below is a static modal dialog (without the positioning) to demonstrate the look and feel of the Modal."})}),(0,u.jsx)(s.Z,{xs:12,md:6,children:(0,u.jsx)(l.Z,{title:"Live demo",component:f,source:"import React, {useState} from 'react';\r\nimport {Button, Modal} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nfunction Example() {\r\n  const [show, setShow] = useState(false);\r\n\r\n  const handleClose = () => setShow(false);\r\n  const handleShow = () => setShow(true);\r\n\r\n  return (\r\n    <>\r\n      <Button variant='primary' onClick={handleShow}>\r\n        Launch demo modal\r\n      </Button>\r\n\r\n      <Modal show={show} onHide={handleClose}>\r\n        <Modal.Header className={styles.closeBtn} closeButton>\r\n          <Modal.Title>Modal heading</Modal.Title>\r\n        </Modal.Header>\r\n        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>\r\n        <Modal.Footer>\r\n          <Button variant='secondary' onClick={handleClose}>\r\n            Close\r\n          </Button>\r\n          <Button variant='primary' onClick={handleClose}>\r\n            Save Changes\r\n          </Button>\r\n        </Modal.Footer>\r\n      </Modal>\r\n    </>\r\n  );\r\n}\r\n\r\nconst Live = () => {\r\n  return (\r\n    <div>\r\n      <Example />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Live;\r\n",noScrollbar:!0,description:"When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it."})}),(0,u.jsx)(s.Z,{xs:12,md:6,children:(0,u.jsx)(l.Z,{title:"Without Animation",component:y,source:"import React, {useState} from 'react';\r\nimport {Button, Modal} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nfunction Example() {\r\n  const [show, setShow] = useState(false);\r\n\r\n  const handleClose = () => setShow(false);\r\n  const handleShow = () => setShow(true);\r\n\r\n  return (\r\n    <>\r\n      <Button variant='primary' onClick={handleShow}>\r\n        Launch demo modal\r\n      </Button>\r\n\r\n      <Modal show={show} onHide={handleClose} animation={false}>\r\n        <Modal.Header className={styles.closeBtn} closeButton>\r\n          <Modal.Title>Modal heading</Modal.Title>\r\n        </Modal.Header>\r\n        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>\r\n        <Modal.Footer>\r\n          <Button variant='secondary' onClick={handleClose}>\r\n            Close\r\n          </Button>\r\n          <Button variant='primary' onClick={handleClose}>\r\n            Save Changes\r\n          </Button>\r\n        </Modal.Footer>\r\n      </Modal>\r\n    </>\r\n  );\r\n}\r\n\r\nconst Without = () => {\r\n  return (\r\n    <div>\r\n      <Example />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Without;\r\n",noScrollbar:!0,description:'A Modal can also be without an animation. For that set the "animation" prop to false.'})}),(0,u.jsx)(s.Z,{xs:12,md:6,children:(0,u.jsx)(l.Z,{title:"Vertically centered",component:j,source:"import React from 'react';\r\nimport {Button, Modal} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nfunction MyVerticallyCenteredModal(props) {\r\n  return (\r\n    <Modal\r\n      {...props}\r\n      size='lg'\r\n      aria-labelledby='contained-modal-title-vcenter'\r\n      centered>\r\n      <Modal.Header className={styles.closeBtn} closeButton>\r\n        <Modal.Title id='contained-modal-title-vcenter'>\r\n          Modal heading\r\n        </Modal.Title>\r\n      </Modal.Header>\r\n      <Modal.Body>\r\n        <h4>Centered Modal</h4>\r\n        <p>\r\n          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\r\n          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac\r\n          consectetur ac, vestibulum at eros.\r\n        </p>\r\n      </Modal.Body>\r\n      <Modal.Footer>\r\n        <Button onClick={props.onHide}>Close</Button>\r\n      </Modal.Footer>\r\n    </Modal>\r\n  );\r\n}\r\n\r\nfunction App() {\r\n  const [modalShow, setModalShow] = React.useState(false);\r\n\r\n  return (\r\n    <>\r\n      <Button variant='primary' onClick={() => setModalShow(true)}>\r\n        Launch vertically centered modal\r\n      </Button>\r\n\r\n      <MyVerticallyCenteredModal\r\n        show={modalShow}\r\n        onHide={() => setModalShow(false)}\r\n      />\r\n    </>\r\n  );\r\n}\r\n\r\nconst Vertically = () => {\r\n  return (\r\n    <div>\r\n      <App />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Vertically;\r\n",noScrollbar:!0,description:'You can vertically center a modal by passing the "centered" prop.'})}),(0,u.jsx)(s.Z,{xs:12,md:6,children:(0,u.jsx)(l.Z,{title:"Using",component:S,source:"import React, {useState} from 'react';\r\nimport {Button, Col, Container, Modal, Row} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nfunction MydModalWithGrid(props) {\r\n  return (\r\n    <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>\r\n      <Modal.Header className={styles.closeBtn} closeButton>\r\n        <Modal.Title id='contained-modal-title-vcenter'>\r\n          Using Grid in Modal\r\n        </Modal.Title>\r\n      </Modal.Header>\r\n      <Modal.Body className='show-grid'>\r\n        <Container>\r\n          <Row>\r\n            <Col xs={12} md={8}>\r\n              .col-xs-12 .col-md-8\r\n            </Col>\r\n            <Col xs={6} md={4}>\r\n              .col-xs-6 .col-md-4\r\n            </Col>\r\n          </Row>\r\n\r\n          <Row>\r\n            <Col xs={6} md={4}>\r\n              .col-xs-6 .col-md-4\r\n            </Col>\r\n            <Col xs={6} md={4}>\r\n              .col-xs-6 .col-md-4\r\n            </Col>\r\n            <Col xs={6} md={4}>\r\n              .col-xs-6 .col-md-4\r\n            </Col>\r\n          </Row>\r\n        </Container>\r\n      </Modal.Body>\r\n      <Modal.Footer>\r\n        <Button onClick={props.onHide}>Close</Button>\r\n      </Modal.Footer>\r\n    </Modal>\r\n  );\r\n}\r\n\r\nfunction App() {\r\n  const [modalShow, setModalShow] = useState(false);\r\n\r\n  return (\r\n    <>\r\n      <Button variant='primary' onClick={() => setModalShow(true)}>\r\n        Launch modal with grid\r\n      </Button>\r\n\r\n      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />\r\n    </>\r\n  );\r\n}\r\n\r\nconst Using = () => {\r\n  return (\r\n    <div>\r\n      <App />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Using;\r\n",noScrollbar:!0,description:"You can use grid layouts within a model using regular grid components inside the modal content."})}),(0,u.jsx)(s.Z,{xs:12,md:6,children:(0,u.jsx)(l.Z,{title:"Optional Sizes",component:N,source:"import React, {useState} from 'react';\r\nimport {Button, Modal} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nfunction Example() {\r\n  const [smShow, setSmShow] = useState(false);\r\n  const [lgShow, setLgShow] = useState(false);\r\n\r\n  return (\r\n    <>\r\n      <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}\r\n      <Button onClick={() => setLgShow(true)}>Large modal</Button>\r\n      <Modal\r\n        size='sm'\r\n        show={smShow}\r\n        onHide={() => setSmShow(false)}\r\n        aria-labelledby='example-modal-sizes-title-sm'>\r\n        <Modal.Header className={styles.closeBtn} closeButton>\r\n          <Modal.Title id='example-modal-sizes-title-sm'>\r\n            Small Modal\r\n          </Modal.Title>\r\n        </Modal.Header>\r\n        <Modal.Body>...</Modal.Body>\r\n      </Modal>\r\n      <Modal\r\n        size='lg'\r\n        show={lgShow}\r\n        onHide={() => setLgShow(false)}\r\n        aria-labelledby='example-modal-sizes-title-lg'>\r\n        <Modal.Header className={styles.closeBtn} closeButton>\r\n          <Modal.Title id='example-modal-sizes-title-lg'>\r\n            Large Modal\r\n          </Modal.Title>\r\n        </Modal.Header>\r\n        <Modal.Body>...</Modal.Body>\r\n      </Modal>\r\n    </>\r\n  );\r\n}\r\n\r\nconst Optional = () => {\r\n  return (\r\n    <div>\r\n      <Example />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Optional;\r\n",noScrollbar:!0,description:"You can specify a bootstrap large or small modal by using the size prop."})}),(0,u.jsx)(s.Z,{xs:12,children:(0,u.jsx)(l.Z,{title:"Fullscreen",component:H,source:"import React, {useState} from 'react';\r\nimport {Button, Modal} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nfunction Example() {\r\n  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];\r\n  const [fullscreen, setFullscreen] = useState(true);\r\n  const [show, setShow] = useState(false);\r\n\r\n  function handleShow(breakpoint) {\r\n    setFullscreen(breakpoint);\r\n    setShow(true);\r\n  }\r\n\r\n  return (\r\n    <div style={{width: '100%'}}>\r\n      {values.map((v, idx) => (\r\n        <Button key={idx} className='me-2' onClick={() => handleShow(v)}>\r\n          Full screen\r\n          {typeof v === 'string' && `below ${v.split('-')[0]}`}\r\n        </Button>\r\n      ))}\r\n      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>\r\n        <Modal.Header className={styles.closeBtn} closeButton>\r\n          <Modal.Title>Modal</Modal.Title>\r\n        </Modal.Header>\r\n        <Modal.Body>Modal body content</Modal.Body>\r\n      </Modal>\r\n    </div>\r\n  );\r\n}\r\n\r\nconst Fullscreen = () => {\r\n  return (\r\n    <div>\r\n      <Example />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Fullscreen;\r\n",noScrollbar:!0,description:"You can use the fullscreen prop to make the modal fullscreen. Specifying a breakpoint will only set the modal as fullscreen below the breakpoint size."})}),(0,u.jsx)(s.Z,{xs:12,children:(0,u.jsx)(l.Z,{title:"Sizing modals using custom CSS",component:_,source:"import React, {useState} from 'react';\r\nimport {Button, Modal} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nfunction Example() {\r\n  const [show, setShow] = useState(false);\r\n\r\n  return (\r\n    <>\r\n      <Button variant='primary' onClick={() => setShow(true)}>\r\n        Custom Width Modal\r\n      </Button>\r\n\r\n      <Modal\r\n        show={show}\r\n        onHide={() => setShow(false)}\r\n        dialogClassName='modal-90w'\r\n        aria-labelledby='example-custom-modal-styling-title'>\r\n        <Modal.Header className={styles.closeBtn} closeButton>\r\n          <Modal.Title id='example-custom-modal-styling-title'>\r\n            Custom Modal Styling\r\n          </Modal.Title>\r\n        </Modal.Header>\r\n        <Modal.Body>\r\n          <p>\r\n            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde\r\n            commodi aspernatur enim, consectetur. Cumque deleniti temporibus\r\n            ipsam atque a dolores quisquam quisquam adipisci possimus\r\n            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod\r\n            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia\r\n            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum\r\n            deleniti rem!\r\n          </p>\r\n        </Modal.Body>\r\n      </Modal>\r\n    </>\r\n  );\r\n}\r\n\r\nconst Sizing = () => {\r\n  return (\r\n    <div>\r\n      <Example />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Sizing;\r\n",noScrollbar:!0,description:'You can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.'})})]})]})}},58063:function(e,n,r){r.d(n,{Z:function(){return a}});var t,o=r(97357);function a(e){if((!t&&0!==t||e)&&o.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),t=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return t}},47022:function(e,n,r){var t=r(1413),o=r(45987),a=r(81694),s=r.n(a),l=r(72791),i=r(10162),d=r(80184),c=["bsPrefix","fluid","as","className"],u=l.forwardRef((function(e,n){var r=e.bsPrefix,a=e.fluid,l=e.as,u=void 0===l?"div":l,m=e.className,h=(0,o.Z)(e,c),p=(0,i.vE)(r,"container"),f="string"===typeof a?"-".concat(a):"-fluid";return(0,d.jsx)(u,(0,t.Z)((0,t.Z)({ref:n},h),{},{className:s()(m,a?"".concat(p).concat(f):p)}))}));u.displayName="Container",u.defaultProps={fluid:!1},n.Z=u},45746:function(e,n,r){r.d(n,{Z:function(){return P}});var t=r(29439),o=r(45987),a=r(1413),s=r(81694),l=r.n(s),i=r(3070),d=r(97357),c=r(78376),u=r(36382),m=r(58063),h=r(72791);var p=r(22330),f=r(36141),x=r(75057),y=r(33690),Z=r(30802),g=r(99106),v=r(72709),j=r(66543),M=(0,j.Z)("modal-body"),C=r(99820),w=r(10162),b=r(80184),S=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],B=h.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,s=e.contentClassName,i=e.centered,d=e.size,c=e.fullscreen,u=e.children,m=e.scrollable,h=(0,o.Z)(e,S);r=(0,w.vE)(r,"modal");var p="".concat(r,"-dialog"),f="string"===typeof c?"".concat(r,"-fullscreen-").concat(c):"".concat(r,"-fullscreen");return(0,b.jsx)("div",(0,a.Z)((0,a.Z)({},h),{},{ref:n,className:l()(p,t,d&&"".concat(r,"-").concat(d),i&&"".concat(p,"-centered"),m&&"".concat(p,"-scrollable"),c&&f),children:(0,b.jsx)("div",{className:l()("".concat(r,"-content"),s),children:u})}))}));B.displayName="ModalDialog";var N=B,k=(0,j.Z)("modal-footer"),H=r(32086),F=["bsPrefix","className"],_=h.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,s=(0,o.Z)(e,F);return r=(0,w.vE)(r,"modal-header"),(0,b.jsx)(H.Z,(0,a.Z)((0,a.Z)({ref:n},s),{},{className:l()(t,r)}))}));_.displayName="ModalHeader",_.defaultProps={closeLabel:"Close",closeButton:!1};var E=_,T=(0,r(27472).Z)("h4"),R=(0,j.Z)("modal-title",{Component:T}),q=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],A={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:N};function D(e){return(0,b.jsx)(v.Z,(0,a.Z)((0,a.Z)({},e),{},{timeout:null}))}function z(e){return(0,b.jsx)(v.Z,(0,a.Z)((0,a.Z)({},e),{},{timeout:null}))}var L=h.forwardRef((function(e,n){var r=e.bsPrefix,s=e.className,v=e.style,j=e.dialogClassName,M=e.contentClassName,S=e.children,B=e.dialogAs,N=e["aria-labelledby"],k=e.show,H=e.animation,F=e.backdrop,_=e.keyboard,E=e.onEscapeKeyDown,T=e.onShow,R=e.onHide,A=e.container,L=e.autoFocus,P=e.enforceFocus,W=e.restoreFocus,O=e.restoreFocusOptions,U=e.onEntered,I=e.onExit,G=e.onExiting,Y=e.onEnter,Q=e.onEntering,V=e.onExited,K=e.backdropClassName,X=e.manager,$=(0,o.Z)(e,q),J=(0,h.useState)({}),ee=(0,t.Z)(J,2),ne=ee[0],re=ee[1],te=(0,h.useState)(!1),oe=(0,t.Z)(te,2),ae=oe[0],se=oe[1],le=(0,h.useRef)(!1),ie=(0,h.useRef)(!1),de=(0,h.useRef)(null),ce=(0,h.useState)(null),ue=(0,t.Z)(ce,2),me=ue[0],he=ue[1],pe=(0,f.Z)(n,he),fe=(0,p.Z)(R),xe=(0,w.SC)();r=(0,w.vE)(r,"modal");var ye=(0,h.useMemo)((function(){return{onHide:fe}}),[fe]);function Ze(){return X||(0,g.t)({isRTL:xe})}function ge(e){if(d.Z){var n=Ze().getScrollbarWidth()>0,r=e.scrollHeight>(0,c.Z)(e).documentElement.clientHeight;re({paddingRight:n&&!r?(0,m.Z)():void 0,paddingLeft:!n&&r?(0,m.Z)():void 0})}}var ve=(0,p.Z)((function(){me&&ge(me.dialog)}));(0,x.Z)((function(){(0,u.Z)(window,"resize",ve),null==de.current||de.current()}));var je=function(){le.current=!0},Me=function(e){le.current&&me&&e.target===me.dialog&&(ie.current=!0),le.current=!1},Ce=function(){se(!0),de.current=(0,y.Z)(me.dialog,(function(){se(!1)}))},we=function(e){"static"!==F?ie.current||e.target!==e.currentTarget?ie.current=!1:null==R||R():function(e){e.target===e.currentTarget&&Ce()}(e)},be=(0,h.useCallback)((function(e){return(0,b.jsx)("div",(0,a.Z)((0,a.Z)({},e),{},{className:l()("".concat(r,"-backdrop"),K,!H&&"show")}))}),[H,K,r]),Se=(0,a.Z)((0,a.Z)({},v),ne);H||(Se.display="block");return(0,b.jsx)(C.Z.Provider,{value:ye,children:(0,b.jsx)(Z.Z,{show:k,ref:pe,backdrop:F,container:A,keyboard:!0,autoFocus:L,enforceFocus:P,restoreFocus:W,restoreFocusOptions:O,onEscapeKeyDown:function(e){_||"static"!==F?_&&E&&E(e):(e.preventDefault(),Ce())},onShow:T,onHide:R,onEnter:function(e,n){e&&(e.style.display="block",ge(e)),null==Y||Y(e,n)},onEntering:function(e,n){null==Q||Q(e,n),(0,i.ZP)(window,"resize",ve)},onEntered:U,onExit:function(e){null==de.current||de.current(),null==I||I(e)},onExiting:G,onExited:function(e){e&&(e.style.display=""),null==V||V(e),(0,u.Z)(window,"resize",ve)},manager:Ze(),transition:H?D:void 0,backdropTransition:H?z:void 0,renderBackdrop:be,renderDialog:function(e){return(0,b.jsx)("div",(0,a.Z)((0,a.Z)({role:"dialog"},e),{},{style:Se,className:l()(s,r,ae&&"".concat(r,"-static")),onClick:F?we:void 0,onMouseUp:Me,"aria-labelledby":N,children:(0,b.jsx)(B,(0,a.Z)((0,a.Z)({},$),{},{onMouseDown:je,className:j,contentClassName:M,children:S}))}))}})})}));L.displayName="Modal",L.defaultProps=A;var P=Object.assign(L,{Body:M,Header:E,Title:R,Footer:k,Dialog:N,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},75057:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(72791);function o(e){var n=function(e){var n=(0,t.useRef)(e);return n.current=e,n}(e);(0,t.useEffect)((function(){return function(){return n.current()}}),[])}},92914:function(e,n){n.Z={row:"AppRowContainer_row__PQa1g"}}}]);
//# sourceMappingURL=1198.4f70ae5c.chunk.js.map