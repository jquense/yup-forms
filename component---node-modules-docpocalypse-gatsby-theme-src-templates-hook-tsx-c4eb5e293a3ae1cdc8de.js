(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/F7+":function(e,t,n){e.exports={cls1:"JsDocMembers-CssProp1_li-module--cls1--WWdwA",cls2:"JsDocMembers-CssProp1_li-module--cls2--_9_1b JsDocMembers-CssProp1_li-module--cls1--WWdwA"}},"3ZZq":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("IUTE");var i=function(e){var t=e.definition,n=e.level,r=t.examples&&t.examples.length?t.examples:t.type&&t.type.typeDef;return r&&r.length?a.a.createElement("div",null,a.a.createElement(o.a,{level:n},"Example"),t.examples.map((function(e,t){return a.a.createElement("div",{className:"gatsby-highlight"},a.a.createElement("pre",{key:"example "+t,className:"language-javascript"},a.a.createElement("code",{className:"language-javascript",dangerouslySetInnerHTML:{__html:e.highlighted}})))}))):null},l=(n("f3/d"),n("Z2Ku"),n("L9s1"),n("HKgF")),c=n("CymT"),s=n("KKaw"),u=s.jsx,p=s.F,m=function(e){var t=e.elements,r=e.level,a=e.ignoreParams;return u(l.a,null,t.filter((function(e){return!a.includes(e.name)})).map((function(e){return u("li",{key:e.name,css:[n("/F7+"),[]]},u(c.a,{definition:e}),u(h,{definition:e,depth:r+1}))})))};var f=function e(t){var n=t.definition,r=t.level,a=void 0===r?1:r,i=t.ignoreParams,l=void 0===i?[]:i;return n.params&&n.params.length>0?u(p,null,u(o.a,{level:a},"Parameters"),u(m,{level:a,elements:n.params,ignoreParams:l})):n.properties&&n.properties.length>0?u(p,null,1===a&&u(o.a,{level:a},"Properties"),u(m,{level:a,elements:n.properties,ignoreParams:l})):n.members&&n.members.static&&n.members.static.length>0?u(p,null,1===a&&u(o.a,{level:a},"Fields"),u(m,{level:a,elements:n.members.static,ignoreParams:l})):n.type&&n.type.typeDef?u(e,{definition:n.type.typeDef,level:a}):null},d=n("A2+M"),y=n("KKaw"),v=y.jsx,g=(y.F,function(e){var t=e.definition,r=t.description||t.type&&t.type.typeDef;return r?v("div",{css:[n("B7lS"),[]]},v(d.MDXRenderer,null,r.childMdx.body)):null});function b(e){var t,n,r,i,l=e.definition,s=e.level,u=(null===(t=l.returns)||void 0===t?void 0:t.length)?l:null===(n=l.type)||void 0===n?void 0:n.typeDef;return(null===(r=u)||void 0===r?void 0:null===(i=r.returns)||void 0===i?void 0:i.length)?(u=u.returns[0],a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{level:s},"Return Value ",a.a.createElement(c.a,{definition:u})),a.a.createElement(h,{definition:u,depth:s}))):null}var h=t.a=function(e){var t=e.definition,n=e.depth,r=void 0===n?2:n,o=e.ignoreParams,l=void 0===o?[]:o;if(!t)return null;var c=r+1;return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{definition:t}),a.a.createElement(f,{definition:t,level:c,ignoreParams:l}),a.a.createElement(b,{definition:t,level:c}),a.a.createElement(i,{definition:t,level:c}))}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},B7lS:function(e,t,n){e.exports={cls1:"JsDocDescription-CssProp1_div-module--cls1--1KYlW",cls2:"JsDocDescription-CssProp1_div-module--cls2--2FYL6 JsDocDescription-CssProp1_div-module--cls1--1KYlW"}},CymT:function(e,t,n){"use strict";n("f3/d");var r=n("q1tI"),a=n.n(r),o=n("TSYQ"),i=n.n(o),l=n("PpR/"),c=n("h4tI");function s(e){var t=e.type,n=e.className;return a.a.createElement("span",{className:i()(n,c.JsDocTypeExpression)},Object(l.a)(t))}var u=n("KKaw"),p=n.n(u)()("span",null,{displayName:"JsDocWrapper",styles:n("tADN"),attrs:null,vars:[]}),m=(n("Z2Ku"),n("L9s1"),n("91GP"),n("nBBu")),f={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]};function d(e){var t=e.code,n=Object(m.useHighlight)({theme:f,code:t,language:"tsx"}),r=n.tokens,o=n.getTokenProps;return a.a.createElement(a.a.Fragment,null,r.map((function(e,t){return a.a.createElement(a.a.Fragment,{key:t},e.map((function(e,t){return a.a.createElement("span",Object.assign({key:t},o({token:e,key:String(t)})))})))})))}function y(e){var t=e.block,n=e.definition,r=e.ignoreParams,o=n.params?n.params.filter((function(e){return!r.includes(e.name)})).map((function(e){var t=e.type&&(e.optional?"?":"")+": "+Object(l.a)(e.type);return""+e.name+(t||"")})):[],i=n.returns&&n.returns.length?Object(l.a)(n.returns[0].type):"void";return a.a.createElement(p,{block:t},a.a.createElement(d,{code:"("+o.join(", ")+") => "+i}))}var v=function(e){var t=e.children;return a.a.createElement("span",{className:"token builtin"},t)};function g(e){var t=e.definition,n=e.ignoreParams,r=void 0===n?[]:n,o=e.fallbackToName,i=void 0!==o&&o,l=e.block,c=void 0!==l&&l;return function e(t,n){return void 0===n&&(n=!0),t.params&&t.params.length>0||t.returns&&t.returns.length>0||n&&t.type&&t.type.typeDef&&e(t.type.typeDef,!1)}(t,!1)?a.a.createElement(y,{block:c,definition:t,ignoreParams:r}):t.type&&t.type.typeDef?a.a.createElement(g,{definition:t.type.typeDef,fallbackToName:!0,block:c}):t.type?a.a.createElement(p,{block:c},a.a.createElement(s,{type:t.type})):i&&t.name?a.a.createElement(p,{block:c},a.a.createElement(v,null,t.name)):null}var b=n("KKaw"),h=b.jsx;b.F,t.a=function(e){var t=e.definition,r=e.title,a=e.showSignature,o=void 0===a||a,i=e.ignoreParams,l=void 0===i?[]:i,c=e.className;return!r&&t.name&&(r=h("code",null,t.name,t.optional&&"?")),h("div",{className:c,css:[n("E3MN"),[]]},r,o&&h(g,{definition:t,ignoreParams:l}))}},E3MN:function(e,t,n){e.exports={cls1:"JsDocTitleSignature-CssProp1_div-module--cls1--3PUvR",cls2:"JsDocTitleSignature-CssProp1_div-module--cls2--3_gOf JsDocTitleSignature-CssProp1_div-module--cls1--3PUvR"}},I5cv:function(e,t,n){var r=n("XKFU"),a=n("Kuth"),o=n("2OiF"),i=n("y3w9"),l=n("0/R4"),c=n("eeVq"),s=n("8MEG"),u=(n("dyZX").Reflect||{}).construct,p=c((function(){function e(){}return!(u((function(){}),[],e)instanceof e)})),m=!c((function(){u((function(){}))}));r(r.S+r.F*(p||m),"Reflect",{construct:function(e,t){o(e),i(t);var n=arguments.length<3?e:o(arguments[2]);if(m&&!p)return u(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(s.apply(e,r))}var c=n.prototype,f=a(l(c)?c:Object.prototype),d=Function.apply.call(e,f,t);return l(d)?d:f}})},Jfbj:function(e,t,n){"use strict";n("f3/d");var r=n("q1tI"),a=n.n(r),o=n("KKaw"),i=n.n(o),l=n("v3k5"),c=n("mSUn"),s=n("S5ux"),u=n("ijtR"),p=n("eXqk"),m=n("PpR/"),f=n("CymT"),d=n("3ZZq"),y=n("KKaw"),v=y.jsx,g=(y.F,n("Vi0z"));var b=function(e){var t,r=e.definition,a=e.level,o=r.params?r.params.map((function(e){var t=e.type&&(e.optional?"?":"");return""+e.name+(t||"")})):[],i=(null===(t=r.returns)||void 0===t?void 0:t.length)?Object(m.a)(r.returns[0].type):"void",l="ƒ ("+o.join(", ")+") => "+i;return v("li",{className:g.HookSignature},v(s.a,{id:l,title:l,h:a,css:[n("jeLy"),[]]},v("span",{className:g.count}),v(f.a,{definition:r})),v("div",null,v(d.a,{depth:a,definition:r})))},h=i()("ul",null,{displayName:"SignatureList",styles:n("f3Mn"),attrs:null,vars:[]});t.a=function(e){var t=e.data,n=t.docpocalypse,r=n.signatures,o=n.name,i=n.importName,m=n.example;return a.a.createElement(p.default,null,a.a.createElement("div",null,a.a.createElement(u.a,{h:1,id:o+"-page",title:o},o)),a.a.createElement(c.a,{example:m,name:o}),a.a.createElement(s.a,{h:2,id:o+"-api"},"API"),i&&a.a.createElement(l.a,{importName:i,docNode:t.docpocalypse}),a.a.createElement(h,null,null==r?void 0:r.map((function(e){return a.a.createElement(b,{level:3,definition:e})}))))}},"PpR/":function(e,t,n){"use strict";n("f3/d");t.a=function e(t){return t?"RecordType"===t.type?"object":"NameExpression"===t.type?t.name:"VoidLiteral"===t.type?"void":"NullLiteral"===t.type?"null":"UndefinedLiteral"===t.type?"undefined":"FunctionType"===t.type?"function":"UnionType"===t.type?t.elements.map(e).join(" | "):"ArrayType"===t.type?"["+t.elements.map(e).join(", ")+"]":"TypeApplication"===t.type&&t.expression?"Array"===t.expression.name?e(t.applications[0])+"[]":e(t.expression)+"<"+e(t.applications[0])+">":"":""}},Vi0z:function(e,t,n){e.exports={HookSignature:"HookSignature-styles-module--HookSignature--1g3dh",count:"HookSignature-styles-module--count--3W_Vh"}},X8hv:function(e,t,n){function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=r()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&o(a,n.prototype),a}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var u=n("q1tI"),p=n("7ljp"),m=p.useMDXComponents,f=p.mdx,d=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,r=e.children,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","components","children"]),l=m(n),s=d(t),p=u.useMemo((function(){if(!r)return null;var e=c({React:u,mdx:f},s),t=Object.keys(e),n=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(i(t),[""+r])).apply(void 0,[{}].concat(i(n)))}),[r,t]);return u.createElement(p,c({components:l},o))}},f3Mn:function(e,t,n){e.exports={cls1:"HookPage-SignatureList-module--cls1--t6xvg",cls2:"HookPage-SignatureList-module--cls2--29qUi HookPage-SignatureList-module--cls1--t6xvg"}},h4tI:function(e,t,n){e.exports={JsDocTypeExpression:"JsDocTypeExpression-styles-module--JsDocTypeExpression--1LKRE"}},jeLy:function(e,t,n){e.exports={cls1:"HookSignature-CssProp1_LinkedHeading-module--cls1--1z8ez",cls2:"HookSignature-CssProp1_LinkedHeading-module--cls2--OwNyU HookSignature-CssProp1_LinkedHeading-module--cls1--1z8ez"}},mSUn:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("f3/d");var r=n("7ljp"),a=n("A2+M"),o=n("BfwJ"),i=n("q1tI"),l=n.n(i),c=n("MtQh");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=e.example,n=e.name,s=Object(o.useMDXScope)(),p=Object(i.useMemo)((function(){return function(e){return l.a.createElement(c.a,Object.assign({},e,{name:n}))}}),[n]);return t?l.a.createElement(r.MDXProvider,{components:{pre:p}},l.a.createElement(a.MDXRenderer,{scope:u({frontmatter:t.frontmatter},s)},t.body)):null}},p9l3:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("Jfbj");t.default=function(e){return a.a.createElement(o.a,e)};var i="608019142"},tADN:function(e,t,n){e.exports={cls1:"JsDocTypeWrapper-JsDocWrapper-module--cls1--F9iCh",cls2:"JsDocTypeWrapper-JsDocWrapper-module--cls2--368lX JsDocTypeWrapper-JsDocWrapper-module--cls1--F9iCh",block:"JsDocTypeWrapper-JsDocWrapper-module--block--3SV1r"}},v3k5:function(e,t,n){"use strict";n("91GP"),n("Z2Ku"),n("f3/d");var r=n("q1tI"),a=n.n(r),o=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("nBBu"));var i=function(e){var t=e.importName,n=(e.docNode,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["importName","docNode"]));return a.a.createElement("code",Object.assign({},n,{dangerouslySetInnerHTML:{__html:Object(o.highlight)(t,"js")}}))},l=["Field","FieldArray","Submit","Message","Summary","Summary"];t.a=function(e){var t,n=e.docNode,r="import { "+n.name+" } from 'react-formal';";return l.includes(n.name)&&(r="import Form from 'react-formal';",t=a.a.createElement(i,Object.assign({},e,{importName:"const "+n.name+" = Form."+n.name,className:"mt-2 block"}))),a.a.createElement("div",{className:"mb-6"},a.a.createElement(i,Object.assign({},e,{importName:r,className:"block"})),t)}}}]);
//# sourceMappingURL=component---node-modules-docpocalypse-gatsby-theme-src-templates-hook-tsx-c4eb5e293a3ae1cdc8de.js.map