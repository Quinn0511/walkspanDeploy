(this["webpackJsonpsenseofwalk-v2"]=this["webpackJsonpsenseofwalk-v2"]||[]).push([[20],{103:function(e,t,n){"use strict";var o=n(1),r=n(144),a=n.n(r),i={response:[{name:"formatResponse",success:function(e){return e.data}}],request:[{name:"addHttpRequestHeader",success:function(e){return e.headers["Access-Control-Allow-Origin"]="*",e},fail:function(e){return console.error("request error: ",e),Promise.reject(e)}}]};function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type;i[n].forEach((function(t){var o=t.success,r=t.fail;e.interceptors[n].use(o,r)}))}function l(e){var t=a.a.create();return function(e){c(e,{type:"response"}),c(e,{type:"request"})}(t,e),t}t.a={get:function(e,t){return l(t)(Object(o.a)({url:e,method:"get"},t))},post:function(e,t){return l(t)(Object(o.a)({url:e,method:"post"},t))}}},157:function(e,t,n){"use strict";var o;function r(e){if("undefined"===typeof document)return 0;if(e||void 0===o){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var n=document.createElement("div"),r=n.style;r.position="absolute",r.top=0,r.left=0,r.pointerEvents="none",r.visibility="hidden",r.width="200px",r.height="150px",r.overflow="hidden",n.appendChild(t),document.body.appendChild(n);var a=t.offsetWidth;n.style.overflow="scroll";var i=t.offsetWidth;a===i&&(i=n.clientWidth),document.body.removeChild(n),o=a-i}return o}n.d(t,"a",(function(){return r}))},201:function(e,t,n){"use strict";n(54),n(240),n(110)},219:function(e,t,n){"use strict";var o=n(10),r=n.n(o),a=n(6),i=n.n(a),c=n(0),l=n.n(c),s=n(13),u=n.n(s),f=n(109),p=n(224),m=n(177),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},h=function(e){function t(){return v(this,t),y(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!!e.forceRender||(!!e.hiddenClassName||!!e.visible)},t.prototype.render=function(){var e=this.props,t=e.className,n=e.hiddenClassName,o=e.visible,r=(e.forceRender,b(e,["className","hiddenClassName","visible","forceRender"])),a=t;return n&&!o&&(a+=" "+n),c.createElement("div",d({},r,{className:a}))},t}(c.Component),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};var C=0;function w(e,t){var n=e["page"+(t?"Y":"X")+"Offset"],o="scroll"+(t?"Top":"Left");if("number"!==typeof n){var r=e.document;"number"!==typeof(n=r.documentElement[o])&&(n=r.body[o])}return n}function E(e,t){var n=e.style;["Webkit","Moz","Ms","ms"].forEach((function(e){n[e+"TransformOrigin"]=t})),n.transformOrigin=t}var O=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,n));return o.inTransition=!1,o.onAnimateLeave=function(){var e=o.props,t=e.afterClose,n=e.getOpenCount;o.wrap&&(o.wrap.style.display="none"),o.inTransition=!1,n()||o.switchScrollingEffect(),t&&t()},o.onDialogMouseDown=function(){o.dialogMouseDown=!0},o.onMaskMouseUp=function(){o.dialogMouseDown&&(o.timeoutId=setTimeout((function(){o.dialogMouseDown=!1}),0))},o.onMaskClick=function(e){Date.now()-o.openTime<300||e.target!==e.currentTarget||o.dialogMouseDown||o.close(e)},o.onKeyDown=function(e){var t=o.props;if(t.keyboard&&e.keyCode===f.a.ESC)return e.stopPropagation(),void o.close(e);if(t.visible&&e.keyCode===f.a.TAB){var n=document.activeElement,r=o.sentinelStart;e.shiftKey?n===r&&o.sentinelEnd.focus():n===o.sentinelEnd&&r.focus()}},o.getDialogElement=function(){var e=o.props,t=e.closable,n=e.prefixCls,r={};void 0!==e.width&&(r.width=e.width),void 0!==e.height&&(r.height=e.height);var a=void 0;e.footer&&(a=c.createElement("div",{className:n+"-footer",ref:o.saveRef("footer")},e.footer));var i=void 0;e.title&&(i=c.createElement("div",{className:n+"-header",ref:o.saveRef("header")},c.createElement("div",{className:n+"-title",id:o.titleId},e.title)));var l=void 0;t&&(l=c.createElement("button",{type:"button",onClick:o.close,"aria-label":"Close",className:n+"-close"},e.closeIcon||c.createElement("span",{className:n+"-close-x"})));var s=g({},e.style,r),u={width:0,height:0,overflow:"hidden",outline:"none"},f=o.getTransitionName(),p=c.createElement(h,{key:"dialog-element",role:"document",ref:o.saveRef("dialog"),style:s,className:n+" "+(e.className||""),visible:e.visible,forceRender:e.forceRender,onMouseDown:o.onDialogMouseDown},c.createElement("div",{tabIndex:0,ref:o.saveRef("sentinelStart"),style:u,"aria-hidden":"true"}),c.createElement("div",{className:n+"-content"},l,i,c.createElement("div",g({className:n+"-body",style:e.bodyStyle,ref:o.saveRef("body")},e.bodyProps),e.children),a),c.createElement("div",{tabIndex:0,ref:o.saveRef("sentinelEnd"),style:u,"aria-hidden":"true"}));return c.createElement(m.a,{key:"dialog",showProp:"visible",onLeave:o.onAnimateLeave,transitionName:f,component:"",transitionAppear:!0},e.visible||!e.destroyOnClose?p:null)},o.getZIndexStyle=function(){var e={},t=o.props;return void 0!==t.zIndex&&(e.zIndex=t.zIndex),e},o.getWrapStyle=function(){return g({},o.getZIndexStyle(),o.props.wrapStyle)},o.getMaskStyle=function(){return g({},o.getZIndexStyle(),o.props.maskStyle)},o.getMaskElement=function(){var e=o.props,t=void 0;if(e.mask){var n=o.getMaskTransitionName();t=c.createElement(h,g({style:o.getMaskStyle(),key:"mask",className:e.prefixCls+"-mask",hiddenClassName:e.prefixCls+"-mask-hidden",visible:e.visible},e.maskProps)),n&&(t=c.createElement(m.a,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:n},t))}return t},o.getMaskTransitionName=function(){var e=o.props,t=e.maskTransitionName,n=e.maskAnimation;return!t&&n&&(t=e.prefixCls+"-"+n),t},o.getTransitionName=function(){var e=o.props,t=e.transitionName,n=e.animation;return!t&&n&&(t=e.prefixCls+"-"+n),t},o.close=function(e){var t=o.props.onClose;t&&t(e)},o.saveRef=function(e){return function(t){o[e]=t}},o.titleId="rcDialogTitle"+C++,o.switchScrollingEffect=n.switchScrollingEffect||function(){},o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.componentDidUpdate({}),this.props.forceRender&&this.props.visible||(this.props.forceRender||!1===this.props.getContainer&&!this.props.visible)&&this.wrap&&(this.wrap.style.display="none")},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.visible,o=t.mask,r=t.focusTriggerAfterClose,a=this.props.mousePosition;if(n){if(!e.visible){this.openTime=Date.now(),this.switchScrollingEffect(),this.tryFocus();var i=s.findDOMNode(this.dialog);if(a){var c=function(e){var t=e.getBoundingClientRect(),n={left:t.left,top:t.top},o=e.ownerDocument,r=o.defaultView||o.parentWindow;return n.left+=w(r),n.top+=w(r,!0),n}(i);E(i,a.x-c.left+"px "+(a.y-c.top)+"px")}else E(i,"")}}else if(e.visible&&(this.inTransition=!0,o&&this.lastOutSideFocusNode&&r)){try{this.lastOutSideFocusNode.focus()}catch(l){this.lastOutSideFocusNode=null}this.lastOutSideFocusNode=null}},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.visible,n=e.getOpenCount;!t&&!this.inTransition||n()||this.switchScrollingEffect(),clearTimeout(this.timeoutId)},t.prototype.tryFocus=function(){Object(p.a)(this.wrap,document.activeElement)||(this.lastOutSideFocusNode=document.activeElement,this.sentinelStart.focus())},t.prototype.render=function(){var e=this.props,t=e.prefixCls,n=e.maskClosable,o=this.getWrapStyle();return e.visible&&(o.display=null),c.createElement("div",{className:t+"-root"},this.getMaskElement(),c.createElement("div",g({tabIndex:-1,onKeyDown:this.onKeyDown,className:t+"-wrap "+(e.wrapClassName||""),ref:this.saveRef("wrap"),onClick:n?this.onMaskClick:null,onMouseUp:n?this.onMaskMouseUp:null,role:"dialog","aria-labelledby":e.title?this.titleId:null,style:o},e.wrapProps),this.getDialogElement()))},t}(c.Component),x=O;function k(e){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=_(e);if(t){var r=_(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}O.defaultProps={className:"",mask:!0,visible:!1,keyboard:!0,closable:!0,maskClosable:!0,destroyOnClose:!1,prefixCls:"rc-dialog",focusTriggerAfterClose:!0};var R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(a,e);var t,n,o,r=S(a);function a(){var e;N(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))).removeContainer=function(){e.container&&(u.a.unmountComponentAtNode(e.container),e.container.parentNode.removeChild(e.container),e.container=null)},e.renderComponent=function(t,n){var o=e.props,r=o.visible,a=o.getComponent,i=o.forceRender,c=o.getContainer,l=o.parent;(r||l._component||i)&&(e.container||(e.container=c()),u.a.unstable_renderSubtreeIntoContainer(l,a(t),e.container,(function(){n&&n.call(this)})))},e}return t=a,(n=[{key:"componentDidMount",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentDidUpdate",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentWillUnmount",value:function(){this.props.autoDestroy&&this.removeContainer()}},{key:"render",value:function(){return this.props.children({renderComponent:this.renderComponent,removeContainer:this.removeContainer})}}])&&j(t.prototype,n),o&&j(t,o),a}(l.a.Component);R.defaultProps={autoMount:!0,autoDestroy:!0,forceRender:!1};var M=n(270),D=n(157);var I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.element,o=void 0===n?document.body:n,r={},a=Object.keys(e);return a.forEach((function(e){r[e]=o.style[e]})),a.forEach((function(t){o.style[t]=e[t]})),r};var F={},z=function(e){if(document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth||e){var t=new RegExp("".concat("ant-scrolling-effect"),"g"),n=document.body.className;if(e){if(!t.test(n))return;return I(F),F={},void(document.body.className=n.replace(t,"").trim())}var o=Object(D.a)();if(o&&(F=I({position:"relative",width:"calc(100% - ".concat(o,"px)")}),!t.test(n))){var r="".concat(n," ").concat("ant-scrolling-effect");document.body.className=r.trim()}}};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=K(e);if(t){var r=K(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return H(this,n)}}function H(e,t){return!t||"object"!==X(t)&&"function"!==typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e){return(X="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Z=0,J=!("undefined"!==typeof window&&window.document&&window.document.createElement),V="createPortal"in u.a,G={},Q=function(e){if(J)return null;if(e){if("string"===typeof e)return document.querySelectorAll(e)[0];if("function"===typeof e)return e();if("object"===X(e)&&e instanceof window.HTMLElement)return e}return document.body},$=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,n,o,r=q(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=r.call(this,e)).getContainer=function(){if(J)return null;if(!t.container){t.container=document.createElement("div");var e=Q(t.props.getContainer);e&&e.appendChild(t.container)}return t.setWrapperClassName(),t.container},t.setWrapperClassName=function(){var e=t.props.wrapperClassName;t.container&&e&&e!==t.container.className&&(t.container.className=e)},t.savePortal=function(e){t._component=e},t.removeCurrentContainer=function(e){t.container=null,t._component=null,V||(e?t.renderComponent({afterClose:t.removeContainer,onClose:function(){},visible:!1}):t.removeContainer())},t.switchScrollingEffect=function(){1!==Z||Object.keys(G).length?Z||(I(G),G={},z(!0)):(z(),G=I({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"}))};var n=e.visible,o=e.getContainer;return J||Q(o)!==document.body||(Z=n?Z+1:Z),t.state={_self:Y(t)},t}return t=a,o=[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps,o=t._self,r=e.visible,a=e.getContainer;if(n){var i=n.visible,c=n.getContainer;r===i||J||Q(a)!==document.body||(Z=r&&!i?Z+1:Z-1),("function"===typeof a&&"function"===typeof c?a.toString()!==c.toString():a!==c)&&o.removeCurrentContainer(!1)}return{prevProps:e}}}],(n=[{key:"componentDidUpdate",value:function(){this.setWrapperClassName()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.visible,n=e.getContainer;J||Q(n)!==document.body||(Z=t&&Z?Z-1:Z),this.removeCurrentContainer(t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.forceRender,r=t.visible,a=null,i={getOpenCount:function(){return Z},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect};return V?((o||r||this._component)&&(a=l.a.createElement(M.a,{getContainer:this.getContainer,ref:this.savePortal},n(i))),a):l.a.createElement(R,{parent:this,visible:r,autoDestroy:!1,getComponent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n(W(W(W({},t),i),{},{ref:e.savePortal}))},getContainer:this.getContainer,forceRender:o},(function(t){var n=t.renderComponent,o=t.removeContainer;return e.renderComponent=n,e.removeContainer=o,null}))}}])&&L(t.prototype,n),o&&L(t,o),a}(l.a.Component),ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},te=function(e){var t=e.visible,n=e.getContainer,o=e.forceRender;return!1===n?c.createElement(x,ee({},e,{getOpenCount:function(){return 2}})):c.createElement($,{visible:t,forceRender:o,getContainer:n},(function(t){return c.createElement(x,ee({},e,t))}))},ne=n(11),oe=n.n(ne),re=n(171),ae=n(139),ie=n.n(ae),ce=n(87),le=n.n(ce),se=n(107),ue=n.n(se);var fe=n(106),pe=n(194),me=function(e){var t=c.useRef(!1),n=c.useRef(),o=c.useState(!1),r=le()(o,2),a=r[0],l=r[1];c.useEffect((function(){var t;if(e.autoFocus){var o=n.current;t=setTimeout((function(){return o.focus()}))}return function(){t&&clearTimeout(t)}}),[]);var s=e.type,u=e.children,f=e.prefixCls,p=e.buttonProps;return c.createElement(fe.a,i()({},Object(pe.a)(s),{onClick:function(){var n=e.actionFn,o=e.closeModal;if(!t.current)if(t.current=!0,n){var r;if(n.length)r=n(o),t.current=!1;else if(!(r=n()))return void o();!function(n){var o=e.closeModal;n&&n.then&&(l(!0),n.then((function(){o.apply(void 0,arguments)}),(function(e){console.error(e),l(!1),t.current=!1})))}(r)}else o()},loading:a,prefixCls:f},p,{ref:n}),u)},de=n(95),ve=function(e){var t=e.icon,n=e.onCancel,o=e.onOk,a=e.close,i=e.zIndex,l=e.afterClose,s=e.visible,u=e.keyboard,f=e.centered,p=e.getContainer,m=e.maskStyle,d=e.okText,v=e.okButtonProps,y=e.cancelText,b=e.cancelButtonProps,h=e.direction,g=e.prefixCls,C=e.rootPrefixCls;Object(de.a)(!("string"===typeof t&&t.length>2),"Modal","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(t,"` at https://ant.design/components/icon"));var w=e.okType||"primary",E="".concat(g,"-confirm"),O=!("okCancel"in e)||e.okCancel,x=e.width||416,k=e.style||{},N=void 0===e.mask||e.mask,j=void 0!==e.maskClosable&&e.maskClosable,P=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),S=e.transitionName||"zoom",T=e.maskTransitionName||"fade",_=oe()(E,"".concat(E,"-").concat(e.type),r()({},"".concat(E,"-rtl"),"rtl"===h),e.className),R=O&&c.createElement(me,{actionFn:n,closeModal:a,autoFocus:"cancel"===P,buttonProps:b,prefixCls:"".concat(C,"-btn")},y);return c.createElement(Ye,{prefixCls:g,className:_,wrapClassName:oe()(r()({},"".concat(E,"-centered"),!!e.centered)),onCancel:function(){return a({triggerCancel:!0})},visible:s,title:"",transitionName:S,footer:"",maskTransitionName:T,mask:N,maskClosable:j,maskStyle:m,style:k,width:x,zIndex:i,afterClose:l,keyboard:u,centered:f,getContainer:p},c.createElement("div",{className:"".concat(E,"-body-wrapper")},c.createElement("div",{className:"".concat(E,"-body")},t,void 0===e.title?null:c.createElement("span",{className:"".concat(E,"-title")},e.title),c.createElement("div",{className:"".concat(E,"-content")},e.content)),c.createElement("div",{className:"".concat(E,"-btns")},R,c.createElement(me,{type:w,actionFn:o,closeModal:a,autoFocus:"ok"===P,buttonProps:v,prefixCls:"".concat(C,"-btn")},d))))},ye=n(33),be=n(32),he=n(60),ge=function(e,t){var n=e.afterClose,o=e.config,r=c.useState(!0),a=le()(r,2),l=a[0],s=a[1],u=c.useState(o),f=le()(u,2),p=f[0],m=f[1],d=c.useContext(he.b),v=d.direction,y=d.getPrefixCls,b=y("modal"),h=y();function g(){s(!1)}return c.useImperativeHandle(t,(function(){return{destroy:g,update:function(e){m((function(t){return i()(i()({},t),e)}))}}})),c.createElement(be.a,{componentName:"Modal",defaultLocale:ye.a.Modal},(function(e){return c.createElement(ve,i()({prefixCls:b,rootPrefixCls:h},p,{close:g,visible:l,afterClose:n,okText:p.okText||(p.okCancel?e.okText:e.justOkText),direction:v,cancelText:p.cancelText||e.cancelText}))}))},Ce=c.forwardRef(ge),we=n(279),Ee=n.n(we),Oe=n(278),xe=n.n(Oe),ke=n(280),Ne=n.n(ke),je=n(281),Pe=n.n(je),Se=i()({},ye.a.Modal);function Te(){return Se}var _e=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},Re="ant";function Me(){return Re}function De(e){var t=document.createElement("div");document.body.appendChild(t);var n=i()(i()({},e),{close:a,visible:!0});function o(){var n=s.unmountComponentAtNode(t);n&&t.parentNode&&t.parentNode.removeChild(t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];var c=r.some((function(e){return e&&e.triggerCancel}));e.onCancel&&c&&e.onCancel.apply(e,r);for(var l=0;l<qe.length;l++){var u=qe[l];if(u===a){qe.splice(l,1);break}}}function r(e){var n=e.okText,o=e.cancelText,r=e.prefixCls,a=_e(e,["okText","cancelText","prefixCls"]);setTimeout((function(){var e=Te();s.render(c.createElement(ve,i()({},a,{prefixCls:r||"".concat(Me(),"-modal"),rootPrefixCls:Me(),okText:n||(a.okCancel?e.okText:e.justOkText),cancelText:o||e.cancelText})),t)}))}function a(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];r(n=i()(i()({},n),{visible:!1,afterClose:o.bind.apply(o,[this].concat(t))}))}return r(n),qe.push(a),{destroy:a,update:function(e){r(n=i()(i()({},n),e))}}}function Ie(e){return i()({type:"warning",icon:c.createElement(Pe.a,null),okCancel:!1},e)}function Fe(e){return i()({type:"info",icon:c.createElement(Ee.a,null),okCancel:!1},e)}function ze(e){return i()({type:"success",icon:c.createElement(xe.a,null),okCancel:!1},e)}function Ae(e){return i()({type:"error",icon:c.createElement(Ne.a,null),okCancel:!1},e)}function We(e){return i()({type:"confirm",icon:c.createElement(Pe.a,null),okCancel:!0},e)}var Ue=0;var Le,Be=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},qe=[];"undefined"!==typeof window&&window.document&&window.document.documentElement&&Object(re.a)(document.documentElement,"click",(function(e){Le={x:e.pageX,y:e.pageY},setTimeout((function(){Le=null}),100)}));var He=function(e){var t,n=c.useContext(he.b),o=n.getPopupContainer,a=n.getPrefixCls,l=n.direction,s=function(t){var n=e.onCancel;n&&n(t)},u=function(t){var n=e.onOk;n&&n(t)},f=function(t){var n=e.okText,o=e.okType,r=e.cancelText,a=e.confirmLoading;return c.createElement(c.Fragment,null,c.createElement(fe.a,i()({onClick:s},e.cancelButtonProps),r||t.cancelText),c.createElement(fe.a,i()({},Object(pe.a)(o),{loading:a,onClick:u},e.okButtonProps),n||t.okText))},p=e.prefixCls,m=e.footer,d=e.visible,v=e.wrapClassName,y=e.centered,b=e.getContainer,h=e.closeIcon,g=Be(e,["prefixCls","footer","visible","wrapClassName","centered","getContainer","closeIcon"]),C=a("modal",p),w=c.createElement(be.a,{componentName:"Modal",defaultLocale:Te()},f),E=c.createElement("span",{className:"".concat(C,"-close-x")},h||c.createElement(ie.a,{className:"".concat(C,"-close-icon")})),O=oe()(v,(t={},r()(t,"".concat(C,"-centered"),!!y),r()(t,"".concat(C,"-wrap-rtl"),"rtl"===l),t));return c.createElement(te,i()({},g,{getContainer:void 0===b?o:b,prefixCls:C,wrapClassName:O,footer:void 0===m?w:m,visible:d,mousePosition:Le,onClose:s,closeIcon:E}))};He.useModal=function(){var e=function(){var e=c.useState([]),t=le()(e,2),n=t[0],o=t[1];return[n,function(e){return o((function(t){return[].concat(ue()(t),[e])})),function(){o((function(t){return t.filter((function(t){return t!==e}))}))}}]}(),t=le()(e,2),n=t[0],o=t[1];function r(e){return function(t){Ue+=1;var n,r=c.createRef(),a=c.createElement(Ce,{key:"modal-".concat(Ue),config:e(t),ref:r,afterClose:function(){n()}});return n=o(a),{destroy:function(){r.current&&r.current.destroy()},update:function(e){r.current&&r.current.update(e)}}}}return[{info:r(Fe),success:r(ze),error:r(Ae),warning:r(Ie),confirm:r(We)},c.createElement(c.Fragment,null,n)]},He.defaultProps={width:520,transitionName:"zoom",maskTransitionName:"fade",confirmLoading:!1,visible:!1,okType:"primary"};var Ye=He;function Ke(e){return De(Ie(e))}var Xe=Ye;Xe.info=function(e){return De(Fe(e))},Xe.success=function(e){return De(ze(e))},Xe.error=function(e){return De(Ae(e))},Xe.warning=Ke,Xe.warn=Ke,Xe.confirm=function(e){return De(We(e))},Xe.destroyAll=function(){for(;qe.length;){var e=qe.pop();e&&e()}},Xe.config=function(e){var t=e.rootPrefixCls;t&&(Re=t)};t.a=Xe},240:function(e,t,n){},257:function(e,t,n){"use strict";n(54),n(258)},258:function(e,t,n){},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var o=n(6),r=n.n(o),a=n(10),i=n.n(a),c=n(0),l=n(11),s=n.n(l),u=n(101),f=n(60),p={small:8,middle:16,large:24};function m(e){var t=e.className,n=e.direction,o=e.index,r=e.size,a=e.marginDirection,l=e.children,s=c.useContext(v);return null===l||void 0===l?null:c.createElement("div",{className:t,style:o>=s?{}:i()({},"vertical"===n?"marginBottom":a,"string"===typeof r?p[r]:r)},l)}var d=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},v=c.createContext(0);t.b=function(e){var t,n=c.useContext(f.b),o=n.getPrefixCls,a=n.space,l=n.direction,p=e.size,y=void 0===p?(null===a||void 0===a?void 0:a.size)||"small":p,b=e.align,h=e.className,g=e.children,C=e.direction,w=void 0===C?"horizontal":C,E=e.prefixCls,O=d(e,["size","align","className","children","direction","prefixCls"]),x=Object(u.a)(g,{keepEmpty:!0});if(0===x.length)return null;var k=void 0===b&&"horizontal"===w?"center":b,N=o("space",E),j=s()(N,"".concat(N,"-").concat(w),(t={},i()(t,"".concat(N,"-rtl"),"rtl"===l),i()(t,"".concat(N,"-align-").concat(k),k),t),h),P="".concat(N,"-item"),S="rtl"===l?"marginLeft":"marginRight",T=0,_=x.map((function(e,t){return null!==e&&void 0!==e&&(T=t),c.createElement(m,{className:P,key:"".concat(P,"-").concat(t),direction:w,size:y,index:t,marginDirection:S},e)}));return c.createElement("div",r()({className:j},O),c.createElement(v.Provider,{value:T},_))}},378:function(e,t,n){"use strict";n(54),n(379)},379:function(e,t,n){},383:function(e,t,n){"use strict";var o=n(10),r=n.n(o),a=n(87),i=n.n(a),c=n(55),l=n.n(c),s=n(0),u=n(11),f=n.n(u),p=n(101),m=n(114),d=n(95),v=n(60);function y(e){return void 0!==e&&null!==e}var b=function(e){var t,n=e.itemPrefixCls,o=e.component,a=e.span,i=e.className,c=e.style,l=e.bordered,u=e.label,p=e.content,m=e.colon,d=o;return l?s.createElement(d,{className:f()((t={},r()(t,"".concat(n,"-item-label"),y(u)),r()(t,"".concat(n,"-item-content"),y(p)),t),i),style:c,colSpan:a},y(u)?u:p):s.createElement(d,{className:f()("".concat(n,"-item"),i),style:c,colSpan:a},s.createElement("div",{className:"".concat(n,"-item-container")},u&&s.createElement("span",{className:f()("".concat(n,"-item-label"),r()({},"".concat(n,"-item-no-colon"),!m))},u),p&&s.createElement("span",{className:f()("".concat(n,"-item-content"))},p)))};function h(e,t,n){var o=t.colon,r=t.prefixCls,a=t.bordered,i=n.component,c=n.type,l=n.showLabel,u=n.showContent;return e.map((function(e,t){var n=e.props,f=n.label,p=n.children,m=n.prefixCls,d=void 0===m?r:m,v=n.className,y=n.style,h=n.span,g=void 0===h?1:h,C=e.key;return"string"===typeof i?s.createElement(b,{key:"".concat(c,"-").concat(C||t),className:v,style:y,span:g,colon:o,component:i,itemPrefixCls:d,bordered:a,label:l?f:null,content:u?p:null}):[s.createElement(b,{key:"label-".concat(C||t),className:v,style:y,span:1,colon:o,component:i[0],itemPrefixCls:d,bordered:a,label:f}),s.createElement(b,{key:"content-".concat(C||t),className:v,style:y,span:2*g-1,component:i[1],itemPrefixCls:d,bordered:a,content:p})]}))}var g=function(e){var t=e.prefixCls,n=e.vertical,o=e.row,r=e.index,a=e.bordered;return n?s.createElement(s.Fragment,null,s.createElement("tr",{key:"label-".concat(r),className:"".concat(t,"-row")},h(o,e,{component:"th",type:"label",showLabel:!0})),s.createElement("tr",{key:"content-".concat(r),className:"".concat(t,"-row")},h(o,e,{component:"td",type:"content",showContent:!0}))):s.createElement("tr",{key:r,className:"".concat(t,"-row")},h(o,e,{component:a?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0}))},C=function(e){return e.children},w=n(16),E={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function O(e,t,n){var o=e;return(void 0===t||t>n)&&(o=Object(w.a)(e,{span:n}),Object(d.a)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}function x(e){var t,n=e.prefixCls,o=e.title,a=e.extra,c=e.column,u=void 0===c?E:c,d=e.colon,y=void 0===d||d,b=e.bordered,h=e.layout,C=e.children,w=e.className,x=e.style,k=e.size,N=s.useContext(v.b),j=N.getPrefixCls,P=N.direction,S=j("descriptions",n),T=s.useState({}),_=i()(T,2),R=_[0],M=_[1],D=function(e,t){if("number"===typeof e)return e;if("object"===l()(e))for(var n=0;n<m.b.length;n++){var o=m.b[n];if(t[o]&&void 0!==e[o])return e[o]||E[o]}return 3}(u,R);s.useEffect((function(){var e=m.a.subscribe((function(e){"object"===l()(u)&&M(e)}));return function(){m.a.unsubscribe(e)}}),[]);var I=function(e,t){var n=Object(p.a)(e).filter((function(e){return e})),o=[],r=[],a=t;return n.forEach((function(e,i){var c,l=null===(c=e.props)||void 0===c?void 0:c.span,s=l||1;if(i===n.length-1)return r.push(O(e,l,a)),void o.push(r);s<a?(a-=s,r.push(e)):(r.push(O(e,s,a)),o.push(r),a=t,r=[])})),o}(C,D);return s.createElement("div",{className:f()(S,w,(t={},r()(t,"".concat(S,"-").concat(k),k&&"default"!==k),r()(t,"".concat(S,"-bordered"),!!b),r()(t,"".concat(S,"-rtl"),"rtl"===P),t)),style:x},(o||a)&&s.createElement("div",{className:"".concat(S,"-header")},o&&s.createElement("div",{className:"".concat(S,"-title")},o),a&&s.createElement("div",{className:"".concat(S,"-extra")},a)),s.createElement("div",{className:"".concat(S,"-view")},s.createElement("table",null,s.createElement("tbody",null,I.map((function(e,t){return s.createElement(g,{key:t,index:t,colon:y,prefixCls:S,vertical:"vertical"===h,bordered:b,row:e})}))))))}x.Item=C;t.a=x},426:function(e,t,n){e.exports={cotainer:"cotainer--2cpy-",edit_button:"edit_button--3iccu",edit_form:"edit_form--1Vq0W"}},662:function(e,t,n){"use strict";n.r(t);n(201);var o=n(219),r=(n(257),n(264)),a=(n(110),n(106)),i=(n(378),n(383)),c=(n(134),n(141)),l=n(100),s=n(0),u=n.n(s),f=n(426),p=n.n(f),m=n(115),d=n.n(m),v=n(116),y=n(103);function b(e){return y.a.get("/proxy_localhost/SenseOfWalkAPI_war/profile?",{params:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}var h=n(3);var g=n(31),C=(n(122),n(126)),w=(n(121),n(125)),E=function(){var e=w.a.useForm(),t=Object(l.a)(e,1)[0];return u.a.createElement("div",{className:p.a.edit_form},u.a.createElement("div",null,"Update User Profile"),u.a.createElement(w.a,{form:t,onFinish:function(e){var n=new URLSearchParams;n.append("companyName",e.companyName),n.append("email",e.email),n.append("name",e.name),n.append("phone",e.phone),n.append("subject",e.subject),t.validateFields(["email","name","phone","subject"]).then((function(){})).catch((function(e){console.log(e)}))}},u.a.createElement(w.a.Item,{name:"name",rules:[{required:!0,message:"Please input the name"}]},u.a.createElement(C.a,{addonBefore:"Name",placeholder:"Your Name *",size:"large"})),u.a.createElement(w.a.Item,{name:"phone",rules:[{required:!0,message:"Please input the phone"}]},u.a.createElement(C.a,{addonBefore:"Phone",placeholder:"Your Phone *",size:"large"})),u.a.createElement(w.a.Item,{name:"email",rules:[{required:!0,message:"Please input the email"}]},u.a.createElement(C.a,{addonBefore:"Email",placeholder:"Your email *",size:"large"}))))},O=function(e){return e.user_profile};t.default=function(){var e=Object(g.b)(),t=Object(s.useState)(!1),n=Object(l.a)(t,2),f=n[0],m=n[1],y=Object(g.c)(O).getProfileResult,C=Object(s.useState)(),w=Object(l.a)(C,2),x=w[0],k=w[1],N=Object(s.useState)(),j=Object(l.a)(N,2),P=j[0],S=j[1],T=Object(s.useState)(),_=Object(l.a)(T,2),R=_[0],M=_[1],D=Object(s.useState)(),I=Object(l.a)(D,2),F=I[0],z=I[1],A=Object(s.useState)(),W=Object(l.a)(A,2),U=W[0],L=W[1],B=Object(s.useState)(),q=Object(l.a)(B,2),H=q[0],Y=q[1],K=Object(s.useState)(),X=Object(l.a)(K,2),Z=X[0],J=X[1];Object(s.useEffect)((function(){e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=Object(v.a)(d.a.mark((function t(n){var o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:o=t.sent,n({type:h.i,payload:{user_profile:o.result,status:o.status}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}({user_id:10}))}),[e]);return Object(s.useEffect)((function(){if(void 0!==y)if("Successfully"===y.status){var e=y.user_profile,t=e.valid_end,n=e.valid_start,o=e.full_name,r=e.membership_level,a=e.phone,i=e.email,l=e.register_time;k(o),S(n),M(t),z(r),L(a),Y(i),J(l)}else c.a.error({message:"Failed",description:"Failed to access the user profile!"})}),[y]),u.a.createElement("div",{className:p.a.cotainer},u.a.createElement("div",{className:p.a.avatar_title},u.a.createElement("p",{style:{fontSize:"34px",fontWeight:"bolder"}},"Welcome back, ",x,"!")),u.a.createElement(i.a,{title:"User Info",bordered:!0},u.a.createElement(i.a.Item,{label:"Name"},x),u.a.createElement(i.a.Item,{label:"Sexaulity"},"Men"),u.a.createElement(i.a.Item,{label:"Register Time"},Z),u.a.createElement(i.a.Item,{label:"Phone Number"},U),u.a.createElement(i.a.Item,{label:"Email Address",span:2},H),u.a.createElement(i.a.Item,{label:"Member Start"},P),u.a.createElement(i.a.Item,{label:"Member End"},R),u.a.createElement(i.a.Item,{label:"Member Level"},function(e){switch(e){case"1":return"Economy";case"2":return"Deluxe";case"3":return"Ultimate"}}(F))),u.a.createElement("div",{className:p.a.edit_button},u.a.createElement(r.b,{align:"center"},u.a.createElement(a.a,{type:"primary",onClick:function(){m(!0)}},"Edit"))),u.a.createElement(o.a,{visible:f,onCancel:function(){m(!1)},onOk:function(){m(!1)}},u.a.createElement(E,null)))}}}]);
//# sourceMappingURL=20.2d5a1478.chunk.js.map