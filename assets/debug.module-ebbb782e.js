import{ah as i,k as M,ai as O}from"./vendor-4c67f001.js";typeof window<"u"&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.17.1",i,{Fragment:M,Component:O});function W(n,c){(c==null||c>n.length)&&(c=n.length);for(var p=0,u=new Array(c);p<c;p++)u[p]=n[p];return u}function F(n,c){var p=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(p)return(p=p.call(n)).next.bind(p);if(Array.isArray(n)||(p=function(f,l){if(f){if(typeof f=="string")return W(f,l);var y=Object.prototype.toString.call(f).slice(8,-1);return y==="Object"&&f.constructor&&(y=f.constructor.name),y==="Map"||y==="Set"?Array.from(f):y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)?W(f,l):void 0}}(n))||c&&n&&typeof n.length=="number"){p&&(n=p);var u=0;return function(){return u>=n.length?{done:!0}:{done:!1,value:n[u++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var P={};function B(){P={}}function m(n){return n.type===M?"Fragment":typeof n.type=="function"?n.type.displayName||n.type.name:typeof n.type=="string"?n.type:"#text"}var T=[],k=[];function L(){return T.length>0?T[T.length-1]:null}var z=!1;function C(n){return typeof n.type=="function"&&n.type!=M}function _(n){for(var c=[n],p=n;p.__o!=null;)c.push(p.__o),p=p.__o;return c.reduce(function(u,f){u+="  in "+m(f);var l=f.__source;return l?u+=" (at "+l.fileName+":"+l.lineNumber+")":z||(z=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),u+`
`},"")}var $=typeof WeakMap=="function";function R(n){return n?typeof n.type=="function"?n.__===null?n.__e!==null&&n.__e.parentNode!==null?n.__e.parentNode.localName:"":R(n.__):n.type:""}var J=O.prototype.setState;O.prototype.setState=function(n,c){return this.__v==null&&this.state==null&&console.warn(`Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.

`+_(L())),J.call(this,n,c)};var X=O.prototype.forceUpdate;function v(n){var c=n.props,p=m(n),u="";for(var f in c)if(c.hasOwnProperty(f)&&f!=="children"){var l=c[f];typeof l=="function"&&(l="function "+(l.displayName||l.name)+"() {}"),l=Object(l)!==l||l.toString?l+"":Object.prototype.toString.call(l),u+=" "+f+"="+JSON.stringify(l)}var y=c.children;return"<"+p+u+(y&&y.length?">..</"+p+">":" />")}O.prototype.forceUpdate=function(n){return this.__v==null?console.warn(`Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.

`+_(L())):this.__P==null&&console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

`+_(this.__v)),X.call(this,n)},function(){(function(){var e=i.__b,o=i.diffed,r=i.__,a=i.vnode,s=i.__r;i.diffed=function(t){C(t)&&k.pop(),T.pop(),o&&o(t)},i.__b=function(t){C(t)&&T.push(t),e&&e(t)},i.__=function(t,d){k=[],r&&r(t,d)},i.vnode=function(t){t.__o=k.length>0?k[k.length-1]:null,a&&a(t)},i.__r=function(t){C(t)&&k.push(t),s&&s(t)}})();var n=!1,c=i.__b,p=i.diffed,u=i.vnode,f=i.__r,l=i.__e,y=i.__,U=i.__h,H=i.__c,N=$?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,w=[],S=[];i.__e=function(e,o,r,a){if(o&&o.__c&&typeof e.then=="function"){var s=e;e=new Error("Missing Suspense. The throwing component was: "+m(o));for(var t=o;t;t=t.__)if(t.__c&&t.__c.__c){e=s;break}if(e instanceof Error)throw e}try{(a=a||{}).componentStack=_(o),l(e,o,r,a),typeof e.then!="function"&&setTimeout(function(){throw e})}catch(d){throw d}},i.__=function(e,o){if(!o)throw new Error(`Undefined parent passed to render(), this is the second argument.
Check if the element is available in the DOM/has the correct id.`);var r;switch(o.nodeType){case 1:case 11:case 9:r=!0;break;default:r=!1}if(!r){var a=m(e);throw new Error("Expected a valid HTML node as a second argument to render.	Received "+o+" instead: render(<"+a+" />, "+o+");")}y&&y(e,o)},i.__b=function(e){var o=e.type;if(typeof o!="string"||o!=="thead"&&o!=="tfoot"&&o!=="tbody"&&o!=="tr"&&o!=="td"&&o!=="th"||S.push(e),n=!0,o===void 0)throw new Error(`Undefined component passed to createElement()

You likely forgot to export your component or might have mixed up default and named imports`+v(e)+`

`+_(e));if(o!=null&&typeof o=="object")throw o.__k!==void 0&&o.__e!==void 0?new Error("Invalid type passed to createElement(): "+o+`

Did you accidentally pass a JSX literal as JSX twice?

  let My`+m(e)+" = "+v(o)+`;
  let vnode = <My`+m(e)+` />;

This usually happens when you export a JSX literal and not the component.

`+_(e)):new Error("Invalid type passed to createElement(): "+(Array.isArray(o)?"array":o));if(e.ref!==void 0&&typeof e.ref!="function"&&typeof e.ref!="object"&&!("$$typeof"in e))throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [`+typeof e.ref+`] instead
`+v(e)+`

`+_(e));if(typeof e.type=="string"){for(var r in e.props)if(r[0]==="o"&&r[1]==="n"&&typeof e.props[r]!="function"&&e.props[r]!=null)throw new Error(`Component's "`+r+'" property should be a function, but got ['+typeof e.props[r]+`] instead
`+v(e)+`

`+_(e))}if(typeof e.type=="function"&&e.type.propTypes){if(e.type.displayName==="Lazy"&&N&&!N.lazyPropTypes.has(e.type)){var a="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var s=e.type();N.lazyPropTypes.set(e.type,!0),console.warn(a+"Component wrapped in lazy() is "+m(s))}catch{console.warn(a+"We will log the wrapped component's name once it is loaded.")}}var t=e.props;e.type.__f&&delete(t=function(d,b){for(var g in b)d[g]=b[g];return d}({},t)).ref,function(d,b,g,x,j){Object.keys(d).forEach(function(E){var h;try{h=d[E](b,E,x,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(A){h=A}h&&!(h.message in P)&&(P[h.message]=!0,console.error("Failed prop type: "+h.message+(j&&`
`+j()||"")))})}(e.type.propTypes,t,0,m(e),function(){return _(e)})}c&&c(e)},i.__r=function(e){f&&f(e),n=!0},i.__h=function(e,o,r){if(!e||!n)throw new Error("Hook can only be invoked from render methods.");U&&U(e,o,r)};var I=function(e,o){return{get:function(){var r="get"+e+o;w&&w.indexOf(r)<0&&(w.push(r),console.warn("getting vnode."+e+" is deprecated, "+o))},set:function(){var r="set"+e+o;w&&w.indexOf(r)<0&&(w.push(r),console.warn("setting vnode."+e+" is not allowed, "+o))}}},D={nodeName:I("nodeName","use vnode.type"),attributes:I("attributes","use vnode.props"),children:I("children","use vnode.props.children")},Y=Object.create({},D);i.vnode=function(e){var o=e.props;if(e.type!==null&&o!=null&&("__source"in o||"__self"in o)){var r=e.props={};for(var a in o){var s=o[a];a==="__source"?e.__source=s:a==="__self"?e.__self=s:r[a]=s}}e.__proto__=Y,u&&u(e)},i.diffed=function(e){if(e.__k&&e.__k.forEach(function(h){if(typeof h=="object"&&h&&h.type===void 0){var A=Object.keys(h).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+A+`}.

`+_(e))}}),n=!1,p&&p(e),e.__k!=null)for(var o=[],r=0;r<e.__k.length;r++){var a=e.__k[r];if(a&&a.key!=null){var s=a.key;if(o.indexOf(s)!==-1){console.error('Following component has two or more children with the same key attribute: "'+s+`". This may cause glitches and misbehavior in rendering process. Component: 

`+v(e)+`

`+_(e));break}o.push(s)}}if(e.__c!=null&&e.__c.__H!=null){var t=e.__c.__H.__;if(t)for(var d=0;d<t.length;d+=1){var b=t[d];if(b.__H){for(var g,x=F(b.__H);!(g=x()).done;)if((E=g.value)!=E){var j=m(e);throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index "+d+" in component "+j+" was called with NaN.")}}}}var E},i.__c=function(e,o){for(var r=0;r<S.length;r++){var a=S[r],s=a.type,t=R(a.__);s!=="thead"&&s!=="tfoot"&&s!=="tbody"||t==="table"?s==="tr"&&t!=="thead"&&t!=="tfoot"&&t!=="tbody"&&t!=="table"?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+v(a)+`

`+_(a)):s==="td"&&t!=="tr"?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+v(a)+`

`+_(a)):s==="th"&&t!=="tr"&&console.error("Improper nesting of table. Your <th> should have a <tr>."+v(a)+`

`+_(a)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+v(a)+`

`+_(a))}S=[],H&&H(e,o)}}();export{B as resetPropWarnings};
//# sourceMappingURL=debug.module-ebbb782e.js.map
