"use strict";(self.webpackChunkctic=self.webpackChunkctic||[]).push([[3997],{48143:function(e,n,r){r.d(n,{Z:function(){return f}});var t=r(1413),o=r(45987),s=(r(72791),r(28182)),a="AppCard_card__-gQvj",i="AppCard_heightFull__X4tWq",c="AppCard_cardBody__zbEDw",l="AppCard_cardHeader__Paf0m",p="AppCard_cardTitle__Lil34",d="AppCard_action__nYCA7",u="AppCard_cardFooter__9j++7",m=r(9140),h=r(80184),g=["title","footer","children","className","titleClass","actionClass","footerClass","cardBodyClass","cardHeaderClass","action","heightFull","cardImg"],x=function(e){var n=e.title,r=e.footer,x=e.children,f=e.className,y=e.titleClass,v=e.actionClass,C=e.footerClass,b=e.cardBodyClass,j=e.cardHeaderClass,Z=e.action,_=e.heightFull,w=e.cardImg,S=(0,o.Z)(e,g);return(0,h.jsxs)(m.Z,(0,t.Z)((0,t.Z)({className:(0,s.default)(a,_?i:"",f),title:n},S),{},{children:[w?(0,h.jsx)(m.Z.Img,{variant:"top",src:w}):null,n||Z?(0,h.jsxs)(m.Z.Header,{className:(0,s.default)(l,j),children:["object"===typeof n?n:(0,h.jsx)(m.Z.Title,{className:(0,s.default)(p,"mb-0 text-truncate",y),children:n}),"object"===typeof Z?Z:(0,h.jsx)("a",{className:(0,s.default)(d,"text-decoration-none ms-1",v),href:"#",children:Z})]}):null,(0,h.jsx)(m.Z.Body,{className:(0,s.default)(c,b),children:x}),r?(0,h.jsx)(m.Z.Footer,{className:(0,s.default)(u,C),children:r}):null]}))},f=x;x.defaultProps={}},38081:function(e,n,r){r.d(n,{Z:function(){return R}});var t,o=r(72791),s=r(10077),a=r(1413),i=r(29439),c=r(60185),l=r(28182),p={plain:{color:"#F8F8F2",fontFamily:"Poppins",fontWeight:r(1975).F3.REGULAR,backgroundColor:"#333333"},styles:[{types:["prolog","constant","builtin"],style:{color:"#FFFFFF"}},{types:["inserted","tag","function"],style:{color:"#E6DB74"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","selector"],style:{color:"#98CD2F"}},{types:["keyword","variable"],style:{color:"#65D4EA"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"#98CD2F"}}]},d=r(38109),u="AppComponentCard_compCardTitleDescription__ajRNc",m="AppComponentCard_preTag__1xMz6",h="AppComponentCard_componentRoot__v0LGC",g="AppComponentCard_codeIcon__wOsLC",x=r(15671),f=r(43144),y=r(60136),v=r(27277),C=r(4942),b=r(80184),j="close",Z="closing",_="closed",w="open",S="opening",k="opened",B=(t={},(0,C.Z)(t,j,j),(0,C.Z)(t,_,j),(0,C.Z)(t,S,j),(0,C.Z)(t,Z,w),(0,C.Z)(t,w,w),(0,C.Z)(t,k,w),t),N=function(e){(0,y.Z)(r,e);var n=(0,v.Z)(r);function r(e){var t;return(0,x.Z)(this,r),(t=n.call(this,e)).getClientHeight=function(){return t.refWrapper.scrollHeight},t.getDefaultExpandStyle=function(){switch(t.state.status){case S:case j:case _:return{height:0,opacity:0,overflow:"hidden"};case k:case Z:return{height:t.getClientHeight(),opacity:1,overflow:"hidden"};default:return{height:"auto",opacity:1,overflow:"unset"}}},t.getExpandStyle=function(){return(0,a.Z)((0,a.Z)({},t.getDefaultExpandStyle()),t.props.styles[B[t.state.status]])},t.getTransition=function(e){return"".concat(e," ").concat(t.props.duration,"ms ").concat(t.props.easing)},t.updateStatus=function(e){return t.setState({status:e})},t.delay=function(e,n){t.timeout=setTimeout(e,n)},t.clearDelay=function(){t.timeout&&clearTimeout(t.timeout)},t.transit=function(e,n,r){var o=t.props.duration;t.updateStatus(e),t.delay((function(){t.updateStatus(n),t.delay((function(){t.updateStatus(r)}),o)}),20)},t.toggle=function(e){t.clearDelay(),e?t.transit(S,k,w):t.transit(Z,_,j)},t.setRef=function(e){t.refWrapper=e},t.state={status:t.props.open?w:j},t}return(0,f.Z)(r,[{key:"componentDidUpdate",value:function(e){e.open!==this.props.open&&this.toggle(this.props.open)}},{key:"componentWillUnmount",value:function(){this.clearDelay()}},{key:"getStyle",value:function(){var e=this.props.transitions.map(this.getTransition).join(",");return(0,a.Z)((0,a.Z)({},this.getExpandStyle()),{},{transition:e})}},{key:"render",value:function(){var e=this.props,n=e.className,r=e.children,t=e.tag,o={className:n,style:this.getStyle(),ref:this.setRef};return(0,b.jsx)(t,(0,a.Z)((0,a.Z)({},o),{},{children:r}))}}]),r}(o.Component);N.defaultProps={open:!1,duration:200,easing:"ease-in-out",className:"",tag:"div",transitions:["height","opacity"],styles:{}};var M=N,P=r(48143),A=r(58617),E=r(43360),F=function(e){var n=e.title,r=e.description,t=e.className,s=e.maxHeight,x=e.component,f=e.source,y=(0,o.useState)(!1),v=(0,i.Z)(y,2),C=v[0],j=v[1];return(0,b.jsxs)(P.Z,{className:t,title:(0,b.jsxs)("div",{className:"w-100",children:[(0,b.jsx)("div",{children:n}),(0,b.jsx)("div",{className:(0,l.default)(u,"text-truncate"),children:r})]}),extra:f?(0,b.jsx)(E.Z,{"aria-label":"view code",shape:"circle",onClick:function(){return j(!C)},children:(0,b.jsx)(A.oT$,{className:g})}):null,children:[(0,b.jsx)(M,{open:C,children:f?(0,b.jsx)(d.Z,{style:{borderRadius:8,background:"#333333",height:350,maxHeight:400},children:(0,b.jsx)(c.ZP,(0,a.Z)((0,a.Z)({},c.lG),{},{code:f,language:"jsx",theme:p,children:function(e){var n=e.style,r=e.tokens,t=e.getLineProps,o=e.getTokenProps;return(0,b.jsx)("pre",{className:m,style:(0,a.Z)((0,a.Z)({},n),{},{maxHeight:500}),children:r.map((function(e,n){return(0,b.jsx)("div",(0,a.Z)((0,a.Z)({},t({line:e,key:n})),{},{children:e.map((function(e,r){return(0,b.jsx)("span",(0,a.Z)({},o({token:e,key:r})),n)}))}),n)}))})}}))}):null}),(0,b.jsx)(d.Z,{style:{maxHeight:s},className:"position-relative",children:(0,b.jsx)("div",{className:(0,l.default)(h,"d-flex align-items-center justify-content-center w-100 p-3"),children:(0,b.jsx)(x,{})})})]})},T=F;F.defaultProps={description:"",maxHeight:500};var H=function(e){var n=e.title,r=e.description,t=e.className,o=e.maxHeight,a=e.component,i=e.source;return(0,b.jsx)(s.Z,{type:"bottom",interval:100,duration:450,children:(0,b.jsx)(T,{title:n,description:r,className:t,maxHeight:o,component:a,source:i},"card")})},R=H;H.defaultProps={description:"",maxHeight:500}},66398:function(e,n,r){r.d(n,{Z:function(){return p}});r(72791);var t="AppComponentHeader_headerTitle__kUBXS",o="AppComponentHeader_titleH3__i1QqS",s="AppComponentHeader_textBase__RwNDJ",a=r(10077),i=r(43360),c=r(80184),l=function(e){var n=e.title,r=e.description,l=e.refUrl;return(0,c.jsx)(a.Z,{type:"top",height:"auto",interval:100,duration:450,children:(0,c.jsxs)("div",{className:"d-flex flex-column pb-3 flex-sm-row justify-content-sm-between pt-xxl-3",children:[(0,c.jsxs)("div",{className:t,children:[(0,c.jsx)("h3",{className:o,children:n}),r?(0,c.jsx)("h5",{className:s,children:r}):null]}),l?(0,c.jsx)("div",{style:{height:30},children:(0,c.jsx)(i.Z,{variant:"primary",href:l,target:"_blank",children:"Reference"})}):null]},"header")})},p=l;l.defaultProps={}},61708:function(e,n,r){r(72791);var t=r(89743),o=r(92914),s=r(80184);n.Z=function(e){var n=e.children;return(0,s.jsx)(t.Z,{className:o.Z.row,children:n})}},83997:function(e,n,r){r.r(n),r.d(n,{default:function(){return k}});var t=r(72791),o=r(38081),s=r(66398),a=r(61708),i=r(15671),c=r(43144),l=r(60136),p=r(27277),d=(r(34996),r(80184)),u=window.google,m=r(763),h=r(27864),g=h.compose,x=h.withProps,f=h.lifecycle,y=r(4224),v=y.withScriptjs,C=y.withGoogleMap,b=y.GoogleMap,j=y.Marker,Z=r(53543).SearchBox,_=g(x({googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry,drawing&key=AIzaSyC9dEjps9u3AP1ce5dxcXCTYDRUege490k",loadingElement:(0,d.jsx)("div",{className:"cr-embed-responsive-item"}),containerElement:(0,d.jsx)("div",{className:"cr-embed-responsive cr-embed-responsive-21by9"}),mapElement:(0,d.jsx)("div",{className:"cr-embed-responsive-item"})}),f({componentWillMount:function(){var e=this,n={};this.setState({bounds:null,center:{lat:41.9,lng:-87.624},markers:[],onMapMounted:function(e){n.map=e},onBoundsChanged:function(){e.setState({bounds:n.map.getBounds(),center:n.map.getCenter()})},onSearchBoxMounted:function(e){n.searchBox=e},onPlacesChanged:function(){var r=n.searchBox.getPlaces(),t=new u.maps.LatLngBounds;r.forEach((function(e){e.geometry&&e.geometry.viewport?t.union(e.geometry.viewport):t.extend(e.geometry.location)}));var o=r.map((function(e){return{position:e.geometry.location}})),s=m.get(o,"0.position",e.state.center);e.setState({center:s,markers:o})}})}}),v,C)((function(e){return(0,d.jsxs)(b,{ref:e.onMapMounted,defaultZoom:15,center:e.center,defaultOptions:{mapTypeControl:!1},onBoundsChanged:e.onBoundsChanged,children:[(0,d.jsx)(Z,{ref:e.onSearchBoxMounted,bounds:e.bounds,controlPosition:u.maps.ControlPosition.TOP_LEFT,onPlacesChanged:e.onPlacesChanged,children:(0,d.jsx)("input",{type:"text",placeholder:"Enter search location",style:{boxSizing:"border-box",border:"1px solid transparent",width:"240px",height:"32px",marginTop:"27px",padding:"0 12px",borderRadius:"3px",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)",fontSize:"14px",outline:"none",marginLeft:"20px",textOverflow:"ellipses"}})}),e.markers.map((function(e,n){return(0,d.jsx)(j,{position:e.position},n)}))]})})),w=function(e){(0,l.Z)(r,e);var n=(0,p.Z)(r);function r(){return(0,i.Z)(this,r),n.apply(this,arguments)}return(0,c.Z)(r,[{key:"render",value:function(){return(0,d.jsx)(_,{containerElement:(0,d.jsx)("div",{className:"cr-embed-responsive cr-embed-responsive-21by9"}),mapElement:(0,d.jsx)("div",{className:"cr-embed-responsive-item"})})}}]),r}(t.Component),S=r(2677),k=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{title:"Google Map with SearchBox",description:"A wrapper around google.maps.places.SearchBox on the map",refUrl:"https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox/"}),(0,d.jsx)(a.Z,{children:(0,d.jsx)(S.Z,{xs:12,children:(0,d.jsx)(o.Z,{title:"Map With Search Box",component:w,source:"import React, {Component} from 'react';\r\nimport '../../map.scss';\r\n\r\nconst google = window.google;\r\n\r\nconst _ = require('lodash');\r\nconst {compose, withProps, lifecycle} = require('recompose');\r\nconst {\r\n  withScriptjs,\r\n  withGoogleMap,\r\n  GoogleMap,\r\n  Marker,\r\n} = require('react-google-maps');\r\nconst {\r\n  SearchBox,\r\n} = require('react-google-maps/lib/components/places/SearchBox');\r\n\r\nconst MapWithASearchBoxs = compose(\r\n  withProps({\r\n    googleMapURL:\r\n      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry,drawing&key=AIzaSyC9dEjps9u3AP1ce5dxcXCTYDRUege490k',\r\n    loadingElement: <div className='cr-embed-responsive-item' />,\r\n    containerElement: (\r\n      <div className='cr-embed-responsive cr-embed-responsive-21by9' />\r\n    ),\r\n    mapElement: <div className='cr-embed-responsive-item' />,\r\n  }),\r\n  lifecycle({\r\n    componentWillMount() {\r\n      const refs = {};\r\n\r\n      this.setState({\r\n        bounds: null,\r\n        center: {\r\n          lat: 41.9,\r\n          lng: -87.624,\r\n        },\r\n        markers: [],\r\n        onMapMounted: (ref) => {\r\n          refs.map = ref;\r\n        },\r\n        onBoundsChanged: () => {\r\n          this.setState({\r\n            bounds: refs.map.getBounds(),\r\n            center: refs.map.getCenter(),\r\n          });\r\n        },\r\n        onSearchBoxMounted: (ref) => {\r\n          refs.searchBox = ref;\r\n        },\r\n        onPlacesChanged: () => {\r\n          const places = refs.searchBox.getPlaces();\r\n          const bounds = new google.maps.LatLngBounds();\r\n\r\n          places.forEach((place) => {\r\n            if (place.geometry && place.geometry.viewport) {\r\n              bounds.union(place.geometry.viewport);\r\n            } else {\r\n              bounds.extend(place.geometry.location);\r\n            }\r\n          });\r\n          const nextMarkers = places.map((place) => ({\r\n            position: place.geometry.location,\r\n          }));\r\n          const nextCenter = _.get(\r\n            nextMarkers,\r\n            '0.position',\r\n            this.state.center,\r\n          );\r\n\r\n          this.setState({\r\n            center: nextCenter,\r\n            markers: nextMarkers,\r\n          });\r\n          // refs.map.fitBounds(bounds);\r\n        },\r\n      });\r\n    },\r\n  }),\r\n  withScriptjs,\r\n  withGoogleMap,\r\n)((props) => (\r\n  <GoogleMap\r\n    ref={props.onMapMounted}\r\n    defaultZoom={15}\r\n    center={props.center}\r\n    defaultOptions={{mapTypeControl: false}}\r\n    onBoundsChanged={props.onBoundsChanged}>\r\n    <SearchBox\r\n      ref={props.onSearchBoxMounted}\r\n      bounds={props.bounds}\r\n      controlPosition={google.maps.ControlPosition.TOP_LEFT}\r\n      onPlacesChanged={props.onPlacesChanged}>\r\n      <input\r\n        type='text'\r\n        placeholder='Enter search location'\r\n        style={{\r\n          boxSizing: `border-box`,\r\n          border: `1px solid transparent`,\r\n          width: `240px`,\r\n          height: `32px`,\r\n          marginTop: `27px`,\r\n          padding: `0 12px`,\r\n          borderRadius: `3px`,\r\n          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,\r\n          fontSize: `14px`,\r\n          outline: `none`,\r\n          marginLeft: '20px',\r\n          textOverflow: `ellipses`,\r\n        }}\r\n      />\r\n    </SearchBox>\r\n    {props.markers.map((marker, index) => (\r\n      <Marker key={index} position={marker.position} />\r\n    ))}\r\n  </GoogleMap>\r\n));\r\n\r\nexport default class MapWithASearchBox extends Component {\r\n  render() {\r\n    return (\r\n      <MapWithASearchBoxs\r\n        containerElement={\r\n          <div className='cr-embed-responsive cr-embed-responsive-21by9' />\r\n        }\r\n        mapElement={<div className='cr-embed-responsive-item' />}\r\n      />\r\n    );\r\n  }\r\n}\r\n"})})})]})}},34996:function(){},92914:function(e,n){n.Z={row:"AppRowContainer_row__PQa1g"}}}]);
//# sourceMappingURL=3997.ead56988.chunk.js.map