/*! For license information please see 5533.f91b6d4d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkctic=self.webpackChunkctic||[]).push([[5533],{40223:function(e,t,s){s(72791);var a=s(45746),n=s(43360),i=s(80184),r=function(e){var t=e.open,s=e.onDeny,r=e.onConfirm,l=e.modalTitle,o=e.paragraph;e.title;return(0,i.jsxs)(a.Z,{show:t,onHide:function(){return s(!1)},centered:!0,children:[(0,i.jsx)(a.Z.Header,{closeButton:!0,children:(0,i.jsx)(a.Z.Title,{children:l})}),(0,i.jsx)(a.Z.Body,{children:(0,i.jsx)("p",{children:o})}),(0,i.jsxs)(a.Z.Footer,{children:[(0,i.jsx)(n.Z,{variant:"outline-primary",onClick:function(){return s(!1)},children:"Cancel"}),(0,i.jsx)(n.Z,{variant:"primary",onClick:r,children:"Ok"})]})]})};r.defaultProps={paragraph:"Are you sure you want to delete?"},t.Z=r},81487:function(e,t,s){s(72791);var a=s(42230),n=s(60364),i=s(80184);t.Z=function(){var e=(0,n.v9)((function(e){return e.common})),t=e.loading;e.error,e.displayMessage;return(0,i.jsx)(i.Fragment,{children:t?(0,i.jsx)(a.Z,{}):null})}},45484:function(e,t,s){var a=s(72791),n=s(28182),i=s(98056),r=s(52007),l=s.n(r),o=s(3593),c=s(43360),d=s(68914),m=s(80184),u=function(e){var t=e.loader,s=e.placeholder,i=e.loading,r=e.title,l=e.actionTitle,u=e.content,p=e.onClick;return i||t?(0,m.jsx)(a.Fragment,{children:s||(0,m.jsxs)("div",{className:(0,n.default)(d.Z.emptyListContainer,"d-flex align-items-center justify-content-center text-center flex-grow-1 h-100"),children:[(0,m.jsx)(o.Z,{percent:30}),(0,m.jsx)("span",{children:"Loading..."})]})}):(0,m.jsxs)("div",{className:(0,n.default)(d.Z.emptyListContainer,"d-flex align-items-center justify-content-center flex-column text-center flex-grow-1 h-100"),children:[r?(0,m.jsx)("h4",{children:r}):null,(0,m.jsx)("p",{children:u}),l?(0,m.jsx)(c.Z,{type:"primary",style:{marginTop:30,minWidth:150},onClick:p,children:l}):null]})};t.Z=u,u.defaultProps={title:(0,m.jsx)(i.Z,{id:"common.noRecordFound"}),description:""},u.prototype={title:l().string,description:l().string,actionTitle:l().string,action:l().func}},1303:function(e,t,s){s.d(t,{Z:function(){return v}});var a=s(1413),n=s(45987),i=s(72791),r=s(32131),l=s(10077),o=s(80184),c=function(e){return e?i.isValidElement(e)?e:(0,o.jsx)(e,{}):null},d=function(e){return e?i.isValidElement(e)?e:(0,o.jsx)(e,{}):null},m=function(e){var t=e.renderItem,s=e.onEndReached,a=e.data,n=e.ListFooterComponent,i=e.ListEmptyComponent,m=e.interval,u=e.type,p=e.duration,h=e.className,f=e.delay;return s||(s=function(){}),(0,r.C)(s,200),(0,o.jsxs)(l.Z,{className:h,animateStyle:{flexDirection:"column",flexWrap:"no-wrap"},interval:m,type:u,delay:f,duration:p,children:[a.length>0?a.map((function(e,s){return t(e,s)})):c(i),d(n)]})},u=m;m.defaultProps={border:!1,data:[],onEndReached:function(){},type:"top",interval:50,delay:0,duration:300};var p=s(68914),h=s(3593),f=s(28182),x=function(e){var t=e.loading,s=e.footerText;return t?(0,o.jsxs)("div",{className:(0,f.default)(p.Z.loaderProgress,"d-flex align-items-center w-100 p-2"),children:[(0,o.jsx)(h.Z,{percent:30}),(0,o.jsx)("span",{children:"Loading..."})]}):(0,o.jsx)("div",{className:(0,f.default)(p.Z.listFooter,"d-flex align-items-center"),children:(0,o.jsx)("p",{children:s})})},j=x;x.defaultProps={loading:!1};var g=["footerProps"],_=function(e){var t=e.footerProps,s=(0,n.Z)(e,g);return(0,o.jsx)(u,(0,a.Z)((0,a.Z)({},s),{},{ListFooterComponent:t?(0,o.jsx)(j,{loading:t.loading,footerText:t.footerText}):null}))},v=_;_.defaultProps={border:!1}},83126:function(e,t,s){s.d(t,{Z:function(){return h}});var a=s(1413),n=s(29439),i=s(72791),r=s(95717),l=(s(53037),s(28688),"AppMedialViewer_appMediaModal__JxBMa"),o="AppMedialViewer_mediaViewer__UpRBu",c="AppMedialViewer_medialCarousel__9o866",d=s(45746),m=s(28182),u=s(80184),p={dots:!1,arrows:!0,infinite:!1,speed:300,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0},h=function(e){var t=e.index,s=e.modalTitle,h=e.medias,f=e.onClose,x=(0,i.useState)(!1),j=(0,n.Z)(x,2),g=j[0],_=j[1];return(0,i.useEffect)((function(){_(t>-1)}),[t]),(0,u.jsx)(d.Z,{title:s,visible:g,footer:null,onCancel:f,className:(0,m.default)(l,"d-flex flex-column"),children:(0,u.jsx)("div",{className:(0,m.default)(o,"flex-grow-1 d-flex flex-column"),children:t>=0?(0,u.jsx)("div",{className:(0,m.default)(c,"flex-grow-1 d-flex flex-column justify-content-center"),children:(0,u.jsx)(r.Z,{settings:(0,a.Z)((0,a.Z)({},p),{},{initialSlide:t}),slickGoTo:t,children:h.map((function(e,t){return function(e,t){return e.mime_type.startsWith("image")?(0,u.jsx)("img",{src:e.url,alt:e.name?e.name:"detail view"},t):(e.mime_type.startsWith("docs"),(0,u.jsx)("div",{className:"ratio ratio-21x9",children:(0,u.jsx)("iframe",{src:e.url,title:e.name?e.name:"detail view"},t)}))}(e,t)}))})}):null})})}},45652:function(e,t,s){var a=s(1413),n=s(45987),i=(s(72791),s(66520)),r=s(28182),l=s(80184),o=["children","className"];t.Z=function(e){var t=e.children,s=e.className,c=(0,n.Z)(e,o);return(0,l.jsx)("div",(0,a.Z)((0,a.Z)({className:(0,r.default)(i.Z.appsFooter,"apps-footer",s)},c),{},{children:t}))}},19201:function(e,t,s){s(72791);var a=s(66520),n=s(28182),i=s(80184),r=function(e){var t=e.children;return(0,i.jsx)("div",{className:(0,n.default)(a.Z.appsHeader,"apps-header d-flex align-items-center"),children:t})};t.Z=r,r.defaultProps={}},66405:function(e,t,s){s.d(t,{Z:function(){return g}});var a=s(1413),n=s(29439),i=s(72791),r=s(81487),l=s(66520),o=s(54775),c=s(9140),d=s(28182),m=s(80184),u=function(e){var t=e.isAppDrawerOpen,s=e.setAppDrawerOpen,a=e.sidebarContent;return(0,m.jsxs)("div",{className:(0,d.default)(l.Z.appsSidebar,"d-flex flex-column"),children:[(0,m.jsx)(o.Z,{className:l.Z.appsOffcanvas,closeIcon:null,show:t,onHide:function(){return s(!t)},children:(0,m.jsx)(o.Z.Body,{className:"p-0",children:a})}),(0,m.jsx)(c.Z,{className:(0,d.default)(l.Z.card,"d-none h-100 flex-lg-grow-1 d-lg-flex flex-lg-column"),children:a})]})},p=s(3791),h=s(27577),f=s(43360),x=s(78820),j=function(e){var t=(0,i.useState)(!1),s=(0,n.Z)(t,2),o=s[0],j=s[1],g=(0,h.l5)(),_=g.footer,v=g.navStyle,C=e.title,Z=e.noContentAnimation,N=e.sidebarContent,y=e.fullView,b=e.children;return(0,m.jsxs)("div",{className:(0,d.default)(l.Z.appsWrap,"d-flex flex-column"),children:[(0,m.jsxs)("div",{className:(0,d.default)(l.Z.appsWrapHeader,"d-flex align-items-center",{appsWrapHeaderFull:y}),children:[y?null:(0,m.jsx)(f.Z,{className:l.Z.menuBtn,onClick:function(){return j(!o)},children:(0,m.jsx)(x.qTj,{})}),(0,m.jsx)(p.Z,{style:{zIndex:3,overflow:"hidden"},type:"scale",children:(0,m.jsx)("h2",{className:"text-truncate",children:C},"title")})]}),(0,m.jsxs)("div",{className:(0,d.default)(l.Z.appsContainer,"d-flex apps-container"),children:[N?(0,m.jsx)(p.Z,{style:{zIndex:3},type:e.type?e.type:"left",children:(0,m.jsx)(u,{isAppDrawerOpen:o,setAppDrawerOpen:j,footer:_,fullView:y,navStyle:v,sidebarContent:N},"sidebar")}):null,(0,m.jsxs)("div",{className:(0,d.default)(l.Z.appsMainContent,y?l.Z.appsMainContentFull:"","d-flex flex-column"),children:[Z?(0,m.jsx)(c.Z,{className:(0,d.default)(l.Z.card,"flex-grow-1 d-flex flex-column h-100 overflow-hidden"),style:(0,a.Z)({},e.cardStyle),children:b},"content"):(0,m.jsx)(p.Z,{type:e.type?e.type:"right",style:{minHeight:"100%"},children:(0,m.jsx)(c.Z,{className:(0,d.default)(l.Z.card,"flex-grow-1 d-flex flex-column h-100 overflow-hidden"),style:(0,a.Z)({},e.cardStyle),children:b},"content")}),(0,m.jsx)(r.Z,{})]})]})]})},g=j;j.defaultProps={title:"",noContentAnimation:!1}},99984:function(e,t,s){s.d(t,{Z:function(){return l}});s(72791);var a="AppsStarredIcon_starIcon__Qyeif",n=s(5596),i=s(78820),r=s(80184),l=function(e){var t=e.item,s=e.title,l=e.smallBtn,o=e.onChange;return(0,r.jsx)(n.Z,{smallBtn:l,title:s,onClick:function(e){return o(!t.isStarred,t,e)},children:(0,r.jsx)("span",{className:a,children:t.isStarred?(0,r.jsx)(i.pHD,{}):(0,r.jsx)(i.y5j,{})})})}},37302:function(e,t,s){s.r(t),s.d(t,{default:function(){return Qe}});var a=s(72791),n=s(60364),i=s(29439),r=s(82457),l=s(78820),o=s(7692),c="UserInfo_chatUserAvatar__b30RD",d="UserInfo_chatUserStatusDot__TvQF9",m="UserInfo_chatUserStatusDotOnly__nlUEW",u="UserInfo_chatUserInfoContent__dyCve",p="UserInfo_chatUserName__-ZlEI",h="UserInfo_chatUserStatusText__Z-3+q",f="UserInfo_userDropdownMenu__LNob+",x="UserInfo_icon__UrTaB",j="UserInfo_dropDownLink__DwpUu",g=s(28182),_=s(80184),v=function(e){var t=e.user,s=e.showStatus,a=e.showStatusActive;if(!t)return null;r.Z.Menu,r.Z.Item,o.hXj,r.Z.Item,o.hXj,r.Z.Item,o.hXj,r.Z.Item,o.hXj;return(0,_.jsxs)("div",{className:"d-flex align-items-center",children:[(0,_.jsxs)("div",{className:"position-relative",children:[t.photoURL||t.image?(0,_.jsx)("img",{width:"45",height:"45",className:(0,g.default)(c,"d-flex align-items-center justify-content-center"),alt:"avatar",src:t.photoURL||t.image}):(0,_.jsx)("div",{className:(0,g.default)(c,"d-flex align-items-center justify-content-center"),children:function(){var e=t.displayName||t.name;return e?e.charAt(0).toUpperCase():t.email?t.email.charAt(0).toUpperCase():void 0}()}),s&&(0,_.jsx)("span",{className:(0,g.default)(d,m,"position-absolute"),style:{backgroundColor:"online"===t.status?"#389e0d":"#cf1322"}}),a&&(0,_.jsxs)("span",{className:(0,g.default)(d,m,"position-absolute"),children:[(0,_.jsx)("span",{className:d,style:{backgroundColor:"online"===t.status?"#389e0d":"#cf1322"}}),(0,_.jsxs)(r.Z,{className:"position-relative",children:[(0,_.jsx)(r.Z.Toggle,{className:j,children:(0,_.jsx)(l.cuw,{})}),(0,_.jsxs)(r.Z.Menu,{className:f,children:[(0,_.jsxs)(r.Z.Item,{className:"active p-1",children:[(0,_.jsx)(o.hXj,{className:x})," Active"]},"0"),(0,_.jsxs)(r.Z.Item,{className:"p-1",children:[(0,_.jsx)(o.hXj,{className:x})," Away"]},"1"),(0,_.jsxs)(r.Z.Item,{className:"p-1",children:[(0,_.jsx)(o.hXj,{className:x})," Do not distrub"]},"2"),(0,_.jsxs)(r.Z.Item,{className:"p-1",children:[(0,_.jsx)(o.hXj,{className:x})," Invisible"]},"3")]})]})]})]}),(0,_.jsxs)("div",{className:u,children:[(0,_.jsx)("h3",{className:(0,g.default)(p,"text-truncate"),children:t.displayName||t.name?t.displayName||t.name:t.email}),(0,_.jsx)("span",{className:(0,g.default)(h,"text-truncate"),children:t.status?t.status:"Online"})]})]})},C=s(1918),Z="ChatSideBar_chatSidebarUserView__FHXaD",N="ChatSideBar_chatSidebarSearchView__h7bt+",y="ChatSideBar_chatListItem__57Jv3",b="ChatSideBar_chatAvatar__5lNFq",I="ChatSideBar_chatListItemContent__bVv-e",w="ChatSideBar_chatSidebarUserTabs__F1lPr",A="ChatSideBar_chatSidebarTabs__ve-N1",M="ChatSideBar_tab__4hXuS",S="ChatSideBar_chatSidebarTitle__czXt+",U="ChatSideBar_chatSidebarScrollbar__VtYke",E="ChatSideBar_searchInput__i3jYJ",k="ChatSideBar_searchBtn__ERJk+",L=function(e){var t=e.item,s=e.selectedUser,a=(0,n.I0)();return(0,_.jsxs)("div",{className:(0,g.default)(y,"d-flex item-hover",s&&s.id===t.id?"active":""),onClick:function(){return a((0,C.UP)(t))},children:[(0,_.jsxs)("div",{className:"position-relative",children:[(0,_.jsx)("img",{className:b,src:t.image}),(0,_.jsx)("span",{className:(0,g.default)(d,m,"position-absolute"),style:{backgroundColor:"online"===t.status?"#389e0d":"#cf1322"}})]}),(0,_.jsxs)("div",{className:I,children:[(0,_.jsx)("h3",{children:t.name}),(0,_.jsxs)("p",{className:"text-truncate mb-0",children:["@",t.username]})]})]})},O=s(1303),D=s(45484),P=s(1413),F=s(28175),T=function(e){return(0,_.jsxs)(F.ZP,(0,P.Z)((0,P.Z)({viewBox:"0 0 200 40"},e),{},{children:[(0,_.jsx)("circle",{cx:"20",cy:"20",r:"15"}),(0,_.jsx)("rect",{x:"45",y:"10",rx:"1",ry:"1",width:"140",height:"10"}),(0,_.jsx)("rect",{x:"45",y:"22",rx:"1",ry:"1",width:"100",height:"7"})]}))},B=function(){return(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(T,{}),(0,_.jsx)(T,{}),(0,_.jsx)(T,{}),(0,_.jsx)(T,{}),(0,_.jsx)(T,{}),(0,_.jsx)(T,{}),(0,_.jsx)(T,{}),(0,_.jsx)(T,{}),(0,_.jsx)(T,{}),(0,_.jsx)(T,{})]})},V=s(93539),R=s(38109),z=function(e){var t=e.connectionListData,s=e.loading,a=(0,V.Z)().messages,i=(0,n.v9)((function(e){return e.chatApp})).selectedUser;return(0,_.jsxs)(R.Z,{className:U,children:[(0,_.jsx)("h3",{className:S,children:"Contacts"}),(0,_.jsx)(O.Z,{data:t,ListEmptyComponent:(0,_.jsx)(D.Z,{content:a["chatApp.noUserFound"],loading:s,placeholder:(0,_.jsx)(B,{})}),renderItem:function(e){return(0,_.jsx)(L,{item:e,selectedUser:i},e.id)}})]})},W=function(e){var t=e.item,s=e.selectedUser,a=(0,n.I0)();return(0,_.jsxs)("div",{className:(0,g.default)(y,"d-flex item-hover",s&&s.id===t.id?"active":""),onClick:function(){return a((0,C.UP)(t))},children:[(0,_.jsxs)("div",{className:"position-relative",children:[(0,_.jsx)("img",{className:b,src:t.image}),(0,_.jsx)("span",{className:(0,g.default)(d,m,"position-absolute"),style:{backgroundColor:"online"===t.status?"#389e0d":"#cf1322"}})]}),(0,_.jsxs)("div",{className:I,children:[(0,_.jsx)("h3",{children:t.name}),(0,_.jsx)("p",{className:"text-truncate mb-0",children:t.lastMessage.message})]})]})},X=function(e){var t=e.chatListData,s=e.loading,a=(0,V.Z)().messages,i=(0,n.v9)((function(e){return e.chatApp})).selectedUser;return(0,_.jsxs)(R.Z,{className:U,children:[(0,_.jsx)("h3",{className:S,children:"Connections"}),(0,_.jsx)(O.Z,{data:t,ListEmptyComponent:(0,_.jsx)(D.Z,{content:a["chatApp.noUserFound"],loading:s,placeholder:(0,_.jsx)(B,{})}),renderItem:function(e){return(0,_.jsx)(W,{item:e,selectedUser:i},e.id)}})]})},H=s(98056),K=s(19485),Y=s(61734),G=s(39126),q=[{id:333,name:(0,_.jsx)(H.Z,{id:"dashboard.messages"})},{id:323,name:(0,_.jsx)(H.Z,{id:"chatApp.contacts"})}],J=function(e){var t=e.connectionListData,s=e.chatListData,n=e.loading,r=(0,a.useState)("chatList"),l=(0,i.Z)(r,2),c=l[0],d=l[1];return(0,_.jsx)("div",{className:w,children:(0,_.jsxs)(K.Z,{className:A,activeKey:c,onSelect:function(e){d(e)},children:[(0,_.jsx)(Y.Z,{tabClassName:(0,g.default)(M,"d-flex flex-column align-items-center w-100 h-100"),eventKey:"chatList",title:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(G.nGt,{size:16}),q[0].name]}),children:(0,_.jsx)(X,{chatListData:s,loading:n})}),(0,_.jsx)(Y.Z,{tabClassName:(0,g.default)(M,"d-flex flex-column align-items-center w-100 h-100"),eventKey:"connectionList",title:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o.i77,{size:16}),q[1].name]}),children:(0,_.jsx)(z,{connectionListData:t,loading:n})})]})})},Q=J;J.defaultProps={connectionListData:[],chatListData:[]};var $=s(72426),ee=s.n($),te=s(99410),se=s(74292),ae=s(55288),ne=s(71834),ie=function(){var e=(0,a.useState)(""),t=(0,i.Z)(e,2),s=t[0],r=t[1],l=(0,ne.f)().user,o=(0,n.v9)((function(e){return e.chatApp})).connectionList,c=(0,n.v9)((function(e){return e.common})).loading,d=""!==s?o.filter((function(e){return e.name.toUpperCase().includes(s.toUpperCase())})):o,m=function(){var e=o.filter((function(e){return e.lastMessage}));return""!==s&&(e=e.filter((function(e){return e.name.toUpperCase().includes(s.toUpperCase())}))),e.sort((function(e,t){var s=ee()(e.lastMessage.time).format("X");return ee()(t.lastMessage.time).format("X")-s})),e}(),u=(0,V.Z)().messages;return(0,_.jsxs)("div",{className:"d-flex flex-column h-100",children:[(0,_.jsx)("div",{className:Z,children:(0,_.jsx)(v,{user:l,showStatusActive:!0})}),(0,_.jsx)("div",{className:N,children:(0,_.jsxs)(te.Z,{className:"position-relative",children:[(0,_.jsx)(se.Z,{placeholder:u["common.searchHere"],"aria-describedby":"basic-addon2",value:s,className:E,onChange:function(e){return r(e.target.value)}}),(0,_.jsx)(te.Z.Text,{id:"basic-addon2",className:k,children:(0,_.jsx)(ae.Z,{})})]})}),(0,_.jsx)(Q,{connectionListData:d,chatListData:m,loading:c})]})},re="NoUserScreen_messageIcon__YCIhv",le=function(){return(0,_.jsxs)("div",{className:"position-relative",children:[(0,_.jsx)(o.W7F,{className:re}),(0,_.jsx)("p",{className:"mb-0",children:(0,_.jsx)(H.Z,{id:"chatApp.noUser"})})]})},oe=s(34358),ce=s(10293),de=s(60172),me=s(23233),ue=s(43360),pe=s(3350),he=s(40342),fe="ChatContent_chatNoUserScreen__zDhXt",xe="ChatContent_messageScreenScrollbar__KpkEA",je="ChatContent_noMessage__f+bEf",ge="ChatContent_addNewMessageAction__nIz15",_e="ChatContent_messageBtn__eJfuf",ve="ChatContent_addNewMessageActionFirst__YKhFY",Ce="ChatContent_chatHeaderAction__4jHKT",Ze=function(e){var t=e.sendFileMessage,s=e.onSendMessage,n=e.currentMessage,r=void 0===n?"":n,o=(0,a.useState)(r),c=(0,i.Z)(o,2),d=c[0],m=c[1],u=(0,de.uI)({multiple:!0,onDrop:function(e){t({message:"",message_type:me.C.MEDIA,media:e.map((function(e){return{id:(0,he.fV)(),url:URL.createObjectURL(e),mime_type:e.type,file_name:e.name,file_size:e.size}}))})}}),p=u.getRootProps,h=u.getInputProps;(0,a.useEffect)((function(){m(r)}),[r]);var f=function(){d&&(s(d),m(""))},x=(0,V.Z)().messages;return(0,_.jsxs)("div",{className:"d-flex",children:[(0,_.jsx)("div",{className:(0,g.default)(ge,ve,"d-flex flex-row align-items-center"),children:""===d?(0,_.jsxs)(ue.Z,(0,P.Z)((0,P.Z)({},p({className:_e})),{},{children:[(0,_.jsx)("input",(0,P.Z)({},h())),(0,_.jsx)(l.SD$,{className:"d-block"})]})):null}),(0,_.jsx)(pe.Z.Control,{placeholder:x["chatApp.sendMessagePlaceholder"],value:d,onChange:function(e){"\n"!==e.target.value&&m(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&f()}}),(0,_.jsx)("div",{className:(0,g.default)(ge,"d-flex flex-row align-items-center"),children:(0,_.jsx)(ue.Z,{className:_e,onClick:f,children:(0,_.jsx)(l.gYb,{className:"d-block ms-1"})})})]})},Ne=Ze;Ze.defaultProps={message:""};var ye={mediaImg:"MessageItem_mediaImg__6Lftr",mediaVideo:"MessageItem_mediaVideo__48CFP",mediaVideoIcon:"MessageItem_mediaVideoIcon__mQ4Lm",mediaAttach:"MessageItem_mediaAttach__I16Wj",mediaCounter:"MessageItem_mediaCounter__3vJhS",chatMessageListItem:"MessageItem_chatMessageListItem__6F5m2",right:"MessageItem_right__+p6NK",messageChatItem:"MessageItem_messageChatItem__MYZBL",messageChatAvatar:"MessageItem_messageChatAvatar__bdC26",messageMoreDropdownLink:"MessageItem_messageMoreDropdownLink__YB5UN",messageChatView:"MessageItem_messageChatView__jfXRR",messageTime:"MessageItem_messageTime__+4e6t",messageChat:"MessageItem_messageChat__I1NTI",lastChatMessage:"MessageItem_lastChatMessage__uRteQ",messageInfoEdit:"MessageItem_messageInfoEdit__ti0oa",messageChatSender:"MessageItem_messageChatSender__CmOEq",hideUserInfo:"MessageItem_hideUserInfo__jZZeI","message-chat-sender":"MessageItem_message-chat-sender__rP89p"},be=s(83126),Ie=s(16856),we=s(23853),Ae=s(92592),Me=function(e){return e.mime_type.startsWith("image")?(0,_.jsx)("div",{className:ye.mediaImg,children:(0,_.jsx)("img",{alt:"",src:e.url})}):e.mime_type.startsWith("video")?(0,_.jsxs)("div",{className:(0,g.default)(ye.mediaVideo,"position-relative overflow-hidden"),children:[(0,_.jsx)("video",{src:e.url}),(0,_.jsx)(we.BVE,{className:(0,g.default)(ye.mediaVideoIcon,"position-absolute")})]}):(0,_.jsxs)("div",{className:(0,g.default)(ye.mediaAttach,"d-flex flex-nowrap"),children:[(0,_.jsx)(l.wEQ,{}),(0,_.jsxs)("p",{children:[(0,_.jsx)("span",{children:e.file_name}),(0,_.jsx)("span",{children:(0,he.hR)(e.file_size)})]})]})},Se=function(e,t){return e.message_type===me.C.TEXT?(0,_.jsx)("p",{className:"mb-0 d-inline-block",children:e.message}):(0,_.jsx)("div",{className:"d-inline-block overflow-hidden position-relative align-middle",children:(0,_.jsxs)("div",{className:"d-flex flex-wrap m-n1",children:[e.media.slice(0,2).map((function(e,s){return(0,_.jsx)("div",{className:"p-1 pointer",onClick:function(){return t(s)},children:Me(e)},"media-"+e.id)})),e.media.length>2?(0,_.jsx)("div",{className:"p-1 pointer",onClick:function(){return t(2)},children:(0,_.jsxs)("div",{className:(0,g.default)(ye.mediaCounter,"d-flex flex-column align-items-center justify-content-center"),children:["+",e.media.length-2]})}):null]})})},Ue=function(e){var t=e.authUser,s=e.item,n=e.onClickEditMessage,o=e.isPreviousSender,c=void 0!==o&&o,d=e.deleteMessage,m=e.isLast,u=(0,a.useState)(-1),p=(0,i.Z)(u,2),h=p[0],f=p[1],x=(0,_.jsxs)(r.Z.Menu,{children:[s.message_type===me.C.TEXT?(0,_.jsx)(r.Z.Item,{onClick:function(){n(s)},children:(0,_.jsx)(H.Z,{id:"common.edit"})}):null,(0,_.jsx)(r.Z.Item,{onClick:function(){d(s.id)},children:(0,_.jsx)(H.Z,{id:"common.delete"})})]});return(0,_.jsxs)("div",{className:(0,g.default)(ye.chatMessageListItem,ye.right,"d-flex justify-content-end",c?ye.hideUserInfo:"first-chat-message",m?ye.lastChatMessage:""),children:[(0,_.jsxs)("div",{className:ye.messageChatView,children:[(0,_.jsxs)("div",{className:ye.messageChatItem,children:[(0,_.jsx)("span",{className:ye.messageTime,children:s.time}),(0,_.jsxs)("div",{className:ye.messageChat,children:[Se(s,f),s.edited&&(0,_.jsx)("span",{className:ye.messageInfoEdit,children:(0,_.jsx)(Ie.cqP,{})})]})]}),(0,_.jsxs)("div",{className:(0,g.default)(ye.messageChatSender,"d-flex align-items-start"),children:[t.photoURL?(0,_.jsx)(Ae.Z,{roundedCircle:!0,size:34,className:ye.messageChatAvatar,src:t.photoURL}):(0,_.jsx)("div",{className:ye.messageChatAvatar,children:function(){var e=t.displayName;return e?e.charAt(0).toUpperCase():t.email?t.email.charAt(0).toUpperCase():void 0}()}),(0,_.jsx)(r.Z,{overlay:x,trigger:["click"],children:(0,_.jsx)("a",{className:ye.messageMoreDropdownLink,children:(0,_.jsx)(l.fXH,{})})})]})]}),(0,_.jsx)(be.Z,{index:h,medias:s.media,onClose:function(){f(-1)}})]})},Ee=Ue;Ue.defaultProps={};var ke=function(e){return e.mime_type.startsWith("image")?(0,_.jsx)("div",{className:ye.mediaImg,children:(0,_.jsx)("img",{alt:"",src:e.url})}):e.mime_type.startsWith("video")?(0,_.jsxs)("div",{className:(0,g.default)(ye.mediaVideo,"position-relative overflow-hidden"),children:[(0,_.jsx)("video",{src:e.url}),(0,_.jsx)(we.BVE,{className:(0,g.default)(ye.mediaVideoIcon,"position-absolute")})]}):(0,_.jsxs)("div",{className:(0,g.default)(ye.mediaAttach,"d-flex flex-nowrap"),children:[(0,_.jsx)(l.wEQ,{}),(0,_.jsxs)("p",{children:[(0,_.jsx)("span",{children:e.file_name}),(0,_.jsx)("span",{children:(0,he.hR)(e.file_size)})]})]})},Le=function(e,t){return e.message_type===me.C.TEXT?(0,_.jsx)("p",{className:"m-0",children:e.message}):(0,_.jsx)("div",{className:"d-inline-block overflow-hidden position-relative align-middle",children:(0,_.jsxs)("div",{className:"d-flex flex-wrap m-n1",children:[e.media.slice(0,2).map((function(e,s){return(0,_.jsx)("div",{className:"p-1 pointer",onClick:function(){return t(s)},children:ke(e)},"media-"+e.id)})),e.media.length>2?(0,_.jsx)("div",{className:"p-1 pointer",onClick:function(){return t(2)},children:(0,_.jsxs)("div",{className:(0,g.default)(ye.mediaCounter,"d-flex flex-column align-items-center justify-content-center"),children:["+",e.media.length-2]})}):null]})})},Oe=function(e){var t=e.selectedUser,s=e.isPreviousSender,n=void 0!==s&&s,r=e.isLast,o=e.item,c=(0,a.useState)(-1),d=(0,i.Z)(c,2),m=d[0],u=d[1];return(0,_.jsxs)("div",{className:(0,g.default)(ye.chatMessageListItem,ye.left,"d-flex",n?ye.hideUserInfo:"first-chat-message",r?ye.lastChatMessage:""),children:[(0,_.jsxs)("div",{className:ye.messageChatView,children:[n?null:t.image?(0,_.jsx)("img",{className:ye.messageChatAvatar,src:t.image}):(0,_.jsx)("div",{className:ye.messageChatAvatar,children:t.name.charAt(0).toUpperCase()}),(0,_.jsxs)("div",{className:ye.messageChatItem,children:[(0,_.jsx)("span",{className:ye.messageTime,children:o.time}),(0,_.jsxs)("div",{className:ye.messageChat,children:[Le(o,u),o.edited&&(0,_.jsx)("span",{className:ye.messageInfoEdit,children:(0,_.jsx)(l.$iz,{})})]})]})]}),(0,_.jsx)(be.Z,{index:m,medias:o.media,onClose:function(){u(-1)}})]})},De=Oe;Oe.defaultProps={};var Pe=s(1975),Fe=function(e){var t=e.userMessages,s=e.authUser,a=e.selectedUser,n=e.onClickEditMessage,i=e.deleteMessage;return(0,_.jsx)("div",{className:"position-relative p-3",children:(0,_.jsx)(O.Z,{animation:Pe.D0.SLIDEUPIN,data:t.messageData,ListEmptyComponent:(0,_.jsx)(D.Z,{title:"test"}),renderItem:function(e,r){return e.sender===s.id?(0,_.jsx)(Ee,{authUser:s,item:e,isPreviousSender:r>0&&e.sender===t.messageData[r-1].sender,isLast:r+1<t.messageData.length&&e.sender!==t.messageData[r+1].sender||r+1===t.messageData.length,onClickEditMessage:n,deleteMessage:i},e.id):(0,_.jsx)(De,{isPreviousSender:r>0&&e.sender===t.messageData[r-1].sender,isLast:r+1<t.messageData.length&&e.sender!==t.messageData[r+1].sender||r+1===t.messageData.length,selectedUser:a,item:e},e.id)}})})},Te=Fe;Fe.defaultProps={};var Be=s(40223),Ve=s(99984),Re=s(5596),ze=function(e){var t=e.deleteConversation,s=e.selectedUser,n=e.onChangeStarred,c=e.clearChatHistory,d=e.isChecked,m=(0,a.useState)(!1),u=(0,i.Z)(m,2),p=u[0],h=u[1],f=function(){h(!p)},x=(0,_.jsxs)(r.Z.Menu,{children:[(0,_.jsx)(r.Z.Item,{onClick:f,children:(0,_.jsx)(H.Z,{id:"chatApp.deleteConversation"})}),(0,_.jsx)(r.Z.Item,{onClick:c,children:(0,_.jsx)(H.Z,{id:"chatApp.clearChat"})}),(0,_.jsx)(r.Z.Item,{children:(0,_.jsx)(H.Z,{id:"chatApp.hide"})})]});return(0,_.jsxs)("div",{className:"w-100 d-flex align-items-center",children:[(0,_.jsx)(v,{user:s,showStatus:!0}),(0,_.jsxs)("div",{className:(0,g.default)(Ce,"d-flex align-items-center"),children:[(0,_.jsx)(Re.Z,{smallBtn:!0,title:(0,_.jsx)(H.Z,{id:"common.call"}),children:(0,_.jsx)(Ie.q3R,{})}),(0,_.jsx)(Re.Z,{smallBtn:!0,title:(0,_.jsx)(H.Z,{id:"common.videoCall"}),children:(0,_.jsx)(o.gwk,{})}),(0,_.jsx)(Ve.Z,{smallBtn:!0,item:{isStarred:d},onChange:n}),(0,_.jsx)(r.Z,{overlay:x,trigger:["click"],children:(0,_.jsx)(Re.Z,{smallBtn:!0,title:(0,_.jsx)(H.Z,{id:"common.more"}),children:(0,_.jsx)(l.fXH,{})})})]}),p?(0,_.jsx)(Be.Z,{open:p,onDeny:h,onConfirm:function(){t(),f()},modalTitle:(0,_.jsx)(H.Z,{id:"chatApp.deleteContent"})}):null]})},We=ze;ze.defaultProps={};var Xe=s(19201),He=s(45652),Ke=function(e){var t=e.selectedUser,s=e.loading,r=(0,a.useState)(""),l=(0,i.Z)(r,2),o=l[0],c=l[1],d=(0,a.useState)(!1),m=(0,i.Z)(d,2),u=m[0],p=m[1],h=(0,a.useState)(!1),f=(0,i.Z)(h,2),x=f[0],j=f[1],v=(0,a.useState)(null),C=(0,i.Z)(v,2),Z=C[0],N=C[1],y=(0,n.v9)((function(e){return e.chatApp})).userMessages,b=(0,n.I0)(),I=(0,ne.f)().user,w=(0,a.useRef)(null);(0,a.useEffect)((function(){b((0,ce.Od)(t.channelId))}),[b,t]),(0,a.useEffect)((function(){var e,t;if((null===y||void 0===y||null===(e=y.messageData)||void 0===e?void 0:e.length)>0&&(null!==(t=w)&&void 0!==t&&t.current)){var s=w.current.getScrollElement();s.scrollTop=s.scrollHeight}}),[y,w]);return(0,_.jsxs)("div",{className:"d-flex flex-column h-100",children:[(0,_.jsx)(Xe.Z,{children:(0,_.jsx)(We,{isChecked:x,onChangeStarred:function(e){j(e)},selectedUser:t,deleteConversation:function(){b((0,ce.WG)(t.channelId))},clearChatHistory:function(){b((0,ce.uW)(t.channelId))}})}),y&&I?(0,_.jsx)(oe.Z,{ref:function(e){w=e},className:(0,g.default)(xe,"position-relative d-flex flex-column"),children:(0,_.jsx)(Te,{userMessages:y,authUser:I,selectedUser:t,onClickEditMessage:function(e){e.message_type===me.C.TEXT&&(p(!0),c(e.message),N(e))},deleteMessage:function(e){b((0,ce.Uy)(t.channelId,e))},loading:s})}):(0,_.jsx)("div",{className:"d-flex flex-column text-center justify-content-center h-100",children:(0,_.jsxs)("span",{className:je,children:[(0,_.jsx)(H.Z,{id:"chatApp.sayHi"})," ",t.name]})}),(0,_.jsx)(He.Z,{className:"mt-auto",children:(0,_.jsx)(Ne,{currentMessage:o,sendFileMessage:function(e){var s=(0,P.Z)((0,P.Z)({},e),{},{sender:I.id,time:ee()().format("llll")});b((0,ce.Bs)(t.channelId,s))},onSendMessage:function(e){var s=(0,P.Z)((0,P.Z)({},Z),{},{message:e,message_type:me.C.TEXT,sender:I.id,time:ee()().format("llll")});u?(s.edited=!0,b((0,ce.VZ)(t.channelId,s)),c(""),p(!1),N(null)):(b((0,ce.Bs)(t.channelId,s)),c(""))}})})]})},Ye=Ke;Ke.defaultProps={};var Ge=function(){var e=(0,n.v9)((function(e){return e.chatApp})).selectedUser,t=(0,n.v9)((function(e){return e.common})).loading;return(0,_.jsx)(_.Fragment,{children:e?(0,_.jsx)("div",{className:"h-100 d-flex flex-column",children:(0,_.jsx)(Ye,{selectedUser:e,loading:t})}):(0,_.jsx)("div",{className:(0,g.default)(fe,"d-flex flex-column justify-content-center align-content-center text-center h-100 p-3"),children:(0,_.jsx)(le,{})})})},qe=s(66405),Je=s(6344),Qe=function(){var e=(0,n.I0)();(0,a.useEffect)((function(){e((0,ce.di)())}),[e]);var t=(0,V.Z)().messages;return(0,_.jsxs)(qe.Z,{title:t["chatApp.chat"],sidebarContent:(0,_.jsx)(ie,{}),children:[(0,_.jsx)(Je.Z,{title:"Chat App"}),(0,_.jsx)(Ge,{})]})}},55288:function(e,t,s){var a=s(72791),n=s(52007),i=s.n(n);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)s=i[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)s=i[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var o=(0,a.forwardRef)((function(e,t){var s=e.color,n=e.size,i=l(e,["color","size"]);return a.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:s},i),a.createElement("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}))}));o.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},o.defaultProps={color:"currentColor",size:"1em"},t.Z=o},28175:function(e,t,s){var a=s(72791),n=function(){return n=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)};var i=function(e){var t=e.animate,s=e.backgroundColor,i=e.backgroundOpacity,r=e.baseUrl,l=e.children,o=e.foregroundColor,c=e.foregroundOpacity,d=e.gradientRatio,m=e.gradientDirection,u=e.uniqueKey,p=e.interval,h=e.rtl,f=e.speed,x=e.style,j=e.title,g=e.beforeMask,_=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(s[a[n]]=e[a[n]])}return s}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),v=u||Math.random().toString(36).substring(6),C=v+"-diff",Z=v+"-animated-diff",N=v+"-aria",y=h?{transform:"scaleX(-1)"}:null,b="0; "+p+"; 1",I=f+"s",w="top-bottom"===m?"rotate(90)":void 0;return(0,a.createElement)("svg",n({"aria-labelledby":N,role:"img",style:n(n({},x),y)},_),j?(0,a.createElement)("title",{id:N},j):null,g&&(0,a.isValidElement)(g)?g:null,(0,a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+r+"#"+C+")",style:{fill:"url("+r+"#"+Z+")"}}),(0,a.createElement)("defs",null,(0,a.createElement)("clipPath",{id:C},l),(0,a.createElement)("linearGradient",{id:Z,gradientTransform:w},(0,a.createElement)("stop",{offset:"0%",stopColor:s,stopOpacity:i},t&&(0,a.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:b,dur:I,repeatCount:"indefinite"})),(0,a.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:c},t&&(0,a.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:b,dur:I,repeatCount:"indefinite"})),(0,a.createElement)("stop",{offset:"100%",stopColor:s,stopOpacity:i},t&&(0,a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:b,dur:I,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var r=function(e){return e.children?(0,a.createElement)(i,n({},e)):(0,a.createElement)(l,n({},e))},l=function(e){return(0,a.createElement)(r,n({viewBox:"0 0 476 124"},e),(0,a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=r},68914:function(e,t){t.Z={listFooter:"AppList_listFooter__REEpr",loaderProgress:"AppList_loaderProgress__b8whS",emptyListContainer:"AppList_emptyListContainer__kWAAs"}},66520:function(e,t){t.Z={appsWrap:"AppsContainer_appsWrap__8UxWz",appsWrapHeader:"AppsContainer_appsWrapHeader__FO656",menuBtn:"AppsContainer_menuBtn__vzAyp",appsContainer:"AppsContainer_appsContainer__if4bZ",appMainFixedFooter:"AppsContainer_appMainFixedFooter__9nOow",appMainFooter:"AppsContainer_appMainFooter__Im47K",appsMainContent:"AppsContainer_appsMainContent__w5pzL",appsMainContentFull:"AppsContainer_appsMainContentFull__sSRBI",appsContentContainer:"AppsContainer_appsContentContainer__aMrpG",fullView:"AppsContainer_fullView__i3BPW","scrum-absolute":"AppsContainer_scrum-absolute__m--Sj","react-trello-board":"AppsContainer_react-trello-board__4vIGe","scrum-row":"AppsContainer_scrum-row__5hF7K","smooth-dnd-container":"AppsContainer_smooth-dnd-container__6ZXEw",horizontal:"AppsContainer_horizontal__iL9kd","scrum-col":"AppsContainer_scrum-col__3IA-S","react-trello-lane":"AppsContainer_react-trello-lane__5WDCi","scrum-board-list-header-card":"AppsContainer_scrum-board-list-header-card__Yz8Gd","scroll-scrum-item":"AppsContainer_scroll-scrum-item__WCMFY",vertical:"AppsContainer_vertical__edRmG",appsFooter:"AppsContainer_appsFooter__pGF1i",appsHeader:"AppsContainer_appsHeader__Bo3eA",appsSidebar:"AppsContainer_appsSidebar__-TpU5",card:"AppsContainer_card__h0XOx",heightFull:"AppsContainer_heightFull__boO1U",appsOffcanvas:"AppsContainer_appsOffcanvas__FabSU"}}}]);
//# sourceMappingURL=5533.f91b6d4d.chunk.js.map