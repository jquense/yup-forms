(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8,9,16],{"/F7+":function(e,t,n){e.exports={cls1:"JsDocMembers-CssProp1_li-module--cls1--WWdwA",cls2:"JsDocMembers-CssProp1_li-module--cls2--_9_1b JsDocMembers-CssProp1_li-module--cls1--WWdwA"}},"3ZZq":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("IUTE");var l=function(e){var t=e.definition,n=e.level,r=t.examples&&t.examples.length?t.examples:t.type&&t.type.typeDef;return r&&r.length?a.a.createElement("div",null,a.a.createElement(o.a,{level:n},"Example"),t.examples.map((function(e,t){return a.a.createElement("div",{className:"gatsby-highlight"},a.a.createElement("pre",{key:"example "+t,className:"language-javascript"},a.a.createElement("code",{className:"language-javascript",dangerouslySetInnerHTML:{__html:e.highlighted}})))}))):null},i=(n("f3/d"),n("Z2Ku"),n("L9s1"),n("HKgF")),c=n("CymT"),s=n("KKaw"),u=s.jsx,p=s.F,m=function(e){var t=e.elements,r=e.level,a=e.ignoreParams;return u(i.a,null,t.filter((function(e){return!a.includes(e.name)})).map((function(e){return u("li",{key:e.name,css:[n("/F7+"),[]]},u(c.a,{definition:e}),u(O,{definition:e,depth:r+1}))})))};var f=function e(t){var n=t.definition,r=t.level,a=void 0===r?1:r,l=t.ignoreParams,i=void 0===l?[]:l;return n.params&&n.params.length>0?u(p,null,u(o.a,{level:a},"Parameters"),u(m,{level:a,elements:n.params,ignoreParams:i})):n.properties&&n.properties.length>0?u(p,null,1===a&&u(o.a,{level:a},"Properties"),u(m,{level:a,elements:n.properties,ignoreParams:i})):n.members&&n.members.static&&n.members.static.length>0?u(p,null,1===a&&u(o.a,{level:a},"Fields"),u(m,{level:a,elements:n.members.static,ignoreParams:i})):n.type&&n.type.typeDef?u(e,{definition:n.type.typeDef,level:a}):null},d=n("A2+M"),v=n("KKaw"),y=v.jsx,b=(v.F,function(e){var t=e.definition,r=t.description||t.type&&t.type.typeDef;return r?y("div",{css:[n("B7lS"),[]]},y(d.MDXRenderer,null,r.childMdx.body)):null});function g(e){var t,n,r,l,i=e.definition,s=e.level,u=(null===(t=i.returns)||void 0===t?void 0:t.length)?i:null===(n=i.type)||void 0===n?void 0:n.typeDef;return(null===(r=u)||void 0===r?void 0:null===(l=r.returns)||void 0===l?void 0:l.length)?(u=u.returns[0],a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{level:s},"Return Value ",a.a.createElement(c.a,{definition:u})),a.a.createElement(O,{definition:u,depth:s}))):null}var O=t.a=function(e){var t=e.definition,n=e.depth,r=void 0===n?2:n,o=e.ignoreParams,i=void 0===o?[]:o;if(!t)return null;var c=r+1;return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,{definition:t}),a.a.createElement(f,{definition:t,level:c,ignoreParams:i}),a.a.createElement(g,{definition:t,level:c}),a.a.createElement(l,{definition:t,level:c}))}},"3shZ":function(e,t,n){"use strict";n.r(t);n("VRzm"),n("Btvt");t.default=function(){return new Promise((function(e){return setTimeout(e,2e3)}))}},"5MbA":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return u}));n("DNiP"),n("Tze0"),n("pIFo"),n("dRSK"),n("f3/d"),n("bWfx"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r=n("q1tI"),a=n.n(r);function o(e){return new Map(e.map((function(e){return[e.name,e.value]})))}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.find((function(e){return e.name===t}));return n&&n.value}function i(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function c(e){return"func"===e?"function":"bool"===e?"boolean":e}function s(e){var t=e.type,n=c(null==t?void 0:t.name);return"custom"===n?i(l(e.tags,"type")||t.raw):n}function u(e,t,n){return e.reduce((function(e,r,o,l){var i=n(r,o);return a.a.isValidElement(i)&&(i=a.a.cloneElement(i,{key:o})),e=e.concat(i),o===l.length-1?e:e.concat(t)}),[])}},"881h":function(e,t,n){"use strict";n.r(t);n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var r=n("q1tI"),a=n.n(r),o=n("bzer"),l=n.n(o),i=n("S29z");t.default=Object.assign((function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children"]);return a.a.createElement(l.a,Object.assign({},n,{className:"lg:flex"}),a.a.createElement("div",{className:"lg:flex-2"},t),a.a.createElement(i.default,{className:"lg:ml-4 lg:mt-0"}))}),o.formStatics)},"8ugZ":function(e,t,n){"use strict";n.r(t);n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var r=n("q1tI"),a=n.n(r),o=n("bzer"),l=n.n(o),i=n("S29z");t.default=Object.assign((function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children"]);return a.a.createElement(l.a,Object.assign({},n,{className:"lg:flex"}),a.a.createElement("div",{className:"lg:flex-2"},t),a.a.createElement(i.default,{className:"lg:ml-4 lg:mt-0",showErrors:!0}))}),o.formStatics)},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},B7lS:function(e,t,n){e.exports={cls1:"JsDocDescription-CssProp1_div-module--cls1--1KYlW",cls2:"JsDocDescription-CssProp1_div-module--cls2--2FYL6 JsDocDescription-CssProp1_div-module--cls1--1KYlW"}},CXra:function(e,t,n){"use strict";n("f3/d");var r,a=n("A2+M"),o=n("q1tI"),l=n.n(o),i=n("v3k5"),c=n("mSUn"),s=n("S5ux"),u=n("ijtR"),p=n("eXqk");r=n("bWTK").default,t.a=function(e){var t=e.data,n=t.docpocalypse,o=n.description,m=n.importName,f=n.name,d=n.example;return l.a.createElement(p.default,null,l.a.createElement("div",null,l.a.createElement(u.a,{h:1,id:f+"-page",title:f},f)),l.a.createElement(c.a,{example:d,name:f}),l.a.createElement(s.a,{h:2,id:f+"-api"},"API"),l.a.createElement("div",null,m&&l.a.createElement(i.a,{importName:m,docNode:t.docpocalypse})),(null==o?void 0:o.mdx)&&l.a.createElement("div",null,l.a.createElement(a.MDXRenderer,{scope:{React:l.a}},o.mdx.body)),l.a.createElement(r,{metadata:t.docpocalypse}))}},CymT:function(e,t,n){"use strict";n("f3/d");var r=n("q1tI"),a=n.n(r),o=n("TSYQ"),l=n.n(o),i=n("PpR/"),c=n("h4tI");function s(e){var t=e.type,n=e.className;return a.a.createElement("span",{className:l()(n,c.JsDocTypeExpression)},Object(i.a)(t))}var u=n("KKaw"),p=n.n(u)()("span",null,{displayName:"JsDocWrapper",styles:n("tADN"),attrs:null,vars:[]}),m=(n("Z2Ku"),n("L9s1"),n("91GP"),n("nBBu")),f={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]};function d(e){var t=e.code,n=Object(m.useHighlight)({theme:f,code:t,language:"tsx"}),r=n.tokens,o=n.getTokenProps;return a.a.createElement(a.a.Fragment,null,r.map((function(e,t){return a.a.createElement(a.a.Fragment,{key:t},e.map((function(e,t){return a.a.createElement("span",Object.assign({key:t},o({token:e,key:String(t)})))})))})))}function v(e){var t=e.block,n=e.definition,r=e.ignoreParams,o=n.params?n.params.filter((function(e){return!r.includes(e.name)})).map((function(e){var t=e.type&&(e.optional?"?":"")+": "+Object(i.a)(e.type);return""+e.name+(t||"")})):[],l=n.returns&&n.returns.length?Object(i.a)(n.returns[0].type):"void";return a.a.createElement(p,{block:t},a.a.createElement(d,{code:"("+o.join(", ")+") => "+l}))}var y=function(e){var t=e.children;return a.a.createElement("span",{className:"token builtin"},t)};function b(e){var t=e.definition,n=e.ignoreParams,r=void 0===n?[]:n,o=e.fallbackToName,l=void 0!==o&&o,i=e.block,c=void 0!==i&&i;return function e(t,n){return void 0===n&&(n=!0),t.params&&t.params.length>0||t.returns&&t.returns.length>0||n&&t.type&&t.type.typeDef&&e(t.type.typeDef,!1)}(t,!1)?a.a.createElement(v,{block:c,definition:t,ignoreParams:r}):t.type&&t.type.typeDef?a.a.createElement(b,{definition:t.type.typeDef,fallbackToName:!0,block:c}):t.type?a.a.createElement(p,{block:c},a.a.createElement(s,{type:t.type})):l&&t.name?a.a.createElement(p,{block:c},a.a.createElement(y,null,t.name)):null}var g=n("KKaw"),O=g.jsx;g.F,t.a=function(e){var t=e.definition,r=e.title,a=e.showSignature,o=void 0===a||a,l=e.ignoreParams,i=void 0===l?[]:l,c=e.className;return!r&&t.name&&(r=O("code",null,t.name,t.optional&&"?")),O("div",{className:c,css:[n("E3MN"),[]]},r,o&&O(b,{definition:t,ignoreParams:i}))}},E3MN:function(e,t,n){e.exports={cls1:"JsDocTitleSignature-CssProp1_div-module--cls1--3PUvR",cls2:"JsDocTitleSignature-CssProp1_div-module--cls2--3_gOf JsDocTitleSignature-CssProp1_div-module--cls1--3PUvR"}},I5cv:function(e,t,n){var r=n("XKFU"),a=n("Kuth"),o=n("2OiF"),l=n("y3w9"),i=n("0/R4"),c=n("eeVq"),s=n("8MEG"),u=(n("dyZX").Reflect||{}).construct,p=c((function(){function e(){}return!(u((function(){}),[],e)instanceof e)})),m=!c((function(){u((function(){}))}));r(r.S+r.F*(p||m),"Reflect",{construct:function(e,t){o(e),l(t);var n=arguments.length<3?e:o(arguments[2]);if(m&&!p)return u(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(s.apply(e,r))}var c=n.prototype,f=a(i(c)?c:Object.prototype),d=Function.apply.call(e,f,t);return i(d)?d:f}})},Jfbj:function(e,t,n){"use strict";n("f3/d");var r=n("q1tI"),a=n.n(r),o=n("KKaw"),l=n.n(o),i=n("v3k5"),c=n("mSUn"),s=n("S5ux"),u=n("ijtR"),p=n("eXqk"),m=n("PpR/"),f=n("CymT"),d=n("3ZZq"),v=n("KKaw"),y=v.jsx,b=(v.F,n("Vi0z"));var g=function(e){var t,r=e.definition,a=e.level,o=r.params?r.params.map((function(e){var t=e.type&&(e.optional?"?":"");return""+e.name+(t||"")})):[],l=(null===(t=r.returns)||void 0===t?void 0:t.length)?Object(m.a)(r.returns[0].type):"void",i="ƒ ("+o.join(", ")+") => "+l;return y("li",{className:b.HookSignature},y(s.a,{id:i,title:i,h:a,css:[n("jeLy"),[]]},y("span",{className:b.count}),y(f.a,{definition:r})),y("div",null,y(d.a,{depth:a,definition:r})))},O=l()("ul",null,{displayName:"SignatureList",styles:n("f3Mn"),attrs:null,vars:[]});t.a=function(e){var t=e.data,n=t.docpocalypse,r=n.signatures,o=n.name,l=n.importName,m=n.example;return a.a.createElement(p.default,null,a.a.createElement("div",null,a.a.createElement(u.a,{h:1,id:o+"-page",title:o},o)),a.a.createElement(c.a,{example:m,name:o}),a.a.createElement(s.a,{h:2,id:o+"-api"},"API"),l&&a.a.createElement(i.a,{importName:l,docNode:t.docpocalypse}),a.a.createElement(O,null,null==r?void 0:r.map((function(e){return a.a.createElement(g,{level:3,definition:e})}))))}},"PJ/J":function(e,t,n){e.exports={PropListRequiredBadge:"PropsList-styles-module--PropListRequiredBadge--3a5lz",PropListTypeDefinition:"PropsList-styles-module--PropListTypeDefinition--2WeRN",PropListDefaultValue:"PropsList-styles-module--PropListDefaultValue--2f8VQ"}},"PpR/":function(e,t,n){"use strict";n("f3/d");t.a=function e(t){return t?"RecordType"===t.type?"object":"NameExpression"===t.type?t.name:"VoidLiteral"===t.type?"void":"NullLiteral"===t.type?"null":"UndefinedLiteral"===t.type?"undefined":"FunctionType"===t.type?"function":"UnionType"===t.type?t.elements.map(e).join(" | "):"ArrayType"===t.type?"["+t.elements.map(e).join(", ")+"]":"TypeApplication"===t.type&&t.expression?"Array"===t.expression.name?e(t.applications[0])+"[]":e(t.expression)+"<"+e(t.applications[0])+">":"":""}},QuIB:function(e,t,n){e.exports={cls1:"PropsList-CssProp2_div-module--cls1--3aeEt",cls2:"PropsList-CssProp2_div-module--cls2--vaqvT PropsList-CssProp2_div-module--cls1--3aeEt"}},S29z:function(e,t,n){"use strict";n.r(t);n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var r=n("nBBu"),a=n("df/d"),o=n("bzer");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=n("IAtc"),u=s.jsx;s.F;t.default=function(e){var t=e.value,l=e.showErrors,c=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["value","showErrors"]),s=Object(o.useFormValues)((function(e){return e})),p=Object(o.useErrors)(),m=l?p:void 0===t?s:t;return m?u("pre",Object.assign({},c,{style:i({},null===a.b||void 0===a.b?void 0:a.b.plain,{backgroundColor:void 0}),css:[n("kDRC"),[["a1mhkppq",l?'"form errors"':'"form value"']]]}),u(r.CodeBlock,{theme:a.b,language:"json",code:JSON.stringify(m,null,2)})):null}},Vi0z:function(e,t,n){e.exports={HookSignature:"HookSignature-styles-module--HookSignature--1g3dh",count:"HookSignature-styles-module--count--3W_Vh"}},Vs67:function(e,t,n){"use strict";n.d(t,"default",(function(){return m}));n("91GP"),n("f3/d"),n("dRSK"),n("0l/t"),n("bWfx"),n("SRfc"),n("dZ+Y");var r=n("xweI"),a=n.n(r),o=n("q1tI"),l=n.n(o),i=n("vs32"),c=n("iCgw"),s=n("ytwu"),u=n("5MbA"),p=(n("bAZL"),function(e,t){return t.some((function(t){return"string"==typeof t?t===e:!!(null==e?void 0:e.match(t))}))});function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.tokenMap,r=t.elementTypes,o=void 0===r?["elementType",/React\.ComponentType(<.*>)?/]:r;return a()(e,"name").filter((function(e){return!e.tags.find((function(e){return"private"===e.name||"ignore"===e.name}))})).map((function(e){var t,r=e.name,a=e.type,m=e.defaultValue,f=e.description,d=e.tags,v=e.tsType,y=Object(u.b)(d),b=Object(u.e)(e),g=(null==f?void 0:null===(t=f.markdownRemark)||void 0===t?void 0:t.html)||"",O=null;return v?O=l.a.createElement(s.a,{type:v,tags:d,tokens:n}):a&&(O=l.a.createElement(c.a,{type:a,tags:d,tokens:n})),{name:r,tags:d,typeName:b,description:g,deprecated:y.get("deprecated"),type:O,defaultValue:m&&l.a.createElement(i.a,Object.assign({},m,{isElementType:p(b,o)})),propData:e}}))}},WrUJ:function(e,t,n){e.exports={cls1:"PropsList-CssProp1_div-module--cls1--1CFZN",cls2:"PropsList-CssProp1_div-module--cls2--2RW19 PropsList-CssProp1_div-module--cls1--1CFZN"}},X8hv:function(e,t,n){function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=r()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&o(a,n.prototype),a}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var u=n("q1tI"),p=n("7ljp"),m=p.useMDXComponents,f=p.mdx,d=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,r=e.children,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","components","children"]),i=m(n),s=d(t),p=u.useMemo((function(){if(!r)return null;var e=c({React:u,mdx:f},s),t=Object.keys(e),n=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(l(t),[""+r])).apply(void 0,[{}].concat(l(n)))}),[r,t]);return u.createElement(p,c({components:i},o))}},bAZL:function(e,t){},bWTK:function(e,t,n){"use strict";n.r(t);n("91GP"),n("f3/d");var r=n("Vs67"),a=n("7ljp"),o=n("q1tI"),l=n.n(o),i=n("S5ux"),c=n("MtQh"),s=n("ncmG"),u=n("KKaw"),p=u.jsx,m=u.F,f=n("lqTJ"),d=n("PJ/J");t.default=function(e){var t=e.metadata,u=t.name,v=Object(r.default)(t.props||[],{tokenMap:f}),y=Object(o.useMemo)((function(){return{pre:function(e){return p(c.a,Object.assign({},e,{name:u}))}}}),[u]);return p(m,null,v.map((function(e){var t;return p(l.a.Fragment,{key:e.name},p(i.a,{h:3,id:e.name},p("div",{css:[n("WrUJ"),[]]},p("span",{className:d.PropListName},e.name),e.propData.required&&p("strong",{className:d.PropListRequiredBadge},"required"))),p(a.MDXProvider,{components:y},p(s.a,{mdx:null===(t=e.propData.description)||void 0===t?void 0:t.mdx,html:e.description})),p("div",{css:[n("QuIB"),[]]},p("div",null,p("strong",null,"type:"),p("span",{className:d.PropListTypeDefinition},e.type)),e.defaultValue&&p("div",{className:"mt-1"},p("strong",null,"default:"),p("code",{className:d.PropListDefaultValue},e.defaultValue))))})))}},"df/d":function(e,t,n){"use strict";n.d(t,"a",(function(){return a.a})),n.d(t,"b",(function(){return o.a}));n("JQXm"),n("v3k5"),n("mSUn"),n("f3/d"),n("Vs67"),n("ncmG");var r=n("KKaw");r.jsx,r.F,n("rV4u");n("bWTK"),n("GOSd"),n("+a3x"),n("P9iW"),n("3ZZq"),n("MtQh"),n("eXqk"),n("CXra"),n("Jfbj"),n("rhJf"),n("/yoF"),n("aedx"),n("1tCN"),n("G3zN"),n("dxHX");var a=n("5vRp"),o=(n("6re5"),n("IUTE"),n("ijtR"),n("S5ux"),n("7ljp"),n("A2+M"),n("lS62"),n("xjiG"),n("jWge"));n("xm93")},f3Mn:function(e,t,n){e.exports={cls1:"HookPage-SignatureList-module--cls1--t6xvg",cls2:"HookPage-SignatureList-module--cls2--29qUi HookPage-SignatureList-module--cls1--t6xvg"}},h4tI:function(e,t,n){e.exports={JsDocTypeExpression:"JsDocTypeExpression-styles-module--JsDocTypeExpression--1LKRE"}},iCgw:function(e,t,n){"use strict";n("HAE/"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("RW0V"),n("LK8F");var r=n("FqMR"),a=n("8j0Q"),o=(n("rGqo"),n("yt8O"),n("Btvt"),n("/8Fb"),n("bWfx"),n("f3/d"),n("q1tI")),l=n.n(o),i=n("ytwu"),c=n("5MbA");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.type,n=e.tags,r=e.tokens,s=Object(o.useMemo)((function(){return function e(t,n){var r=function(t){return e(t,n)},o=Object(c.c)(t.name),l=Object(c.d)(n,"type");switch(t.name){case"object":return{name:"Object"};case"shape":return{name:"signature",type:"object",raw:"",signature:{properties:Object.entries(t.value).map((function(e){var t=Object(a.a)(e,2),n=t[0],o=t[1];return{key:n,value:u({},r(o),{required:o.required})}}))}};case"union":return{name:"union",elements:t.value.map((function(e){return"string"==typeof o?{name:e}:e})).map(r)};case"enum":var i=t.value||[];return Array.isArray(i)?{name:"union",elements:i.map((function(e){return{name:e.value}}))}:{name:i};case"arrayOf":return{name:"Array",elements:[r(t.value)]};case"custom":return{name:Object(c.a)(l||t.raw)};default:return{name:"literal",value:o}}}(t,n)}),[t,n]);return l.a.createElement(i.a,{type:s,tags:n,tokens:r})}},jeLy:function(e,t,n){e.exports={cls1:"HookSignature-CssProp1_LinkedHeading-module--cls1--1z8ez",cls2:"HookSignature-CssProp1_LinkedHeading-module--cls2--OwNyU HookSignature-CssProp1_LinkedHeading-module--cls1--1z8ez"}},kDRC:function(e,t,n){e.exports={cls1:"Result-CssProp1_pre-module--cls1--2tT9M",cls2:"Result-CssProp1_pre-module--cls2--2IQIu Result-CssProp1_pre-module--cls1--2tT9M px-3 pb-3 mt-4 rounded relative text-sm bg-subtle-on-dark flex-1"}},lS62:function(e,t,n){e.exports={default:"eXqk",component:"mfRe",hook:"p9l3"}},lqTJ:function(e,t,n){e.exports={union:"PropsList-tokenMap-module--union--10mxw"}},mSUn:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("f3/d");var r=n("7ljp"),a=n("A2+M"),o=n("BfwJ"),l=n("q1tI"),i=n.n(l),c=n("MtQh");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=e.example,n=e.name,s=Object(o.useMDXScope)(),p=Object(l.useMemo)((function(){return function(e){return i.a.createElement(c.a,Object.assign({},e,{name:n}))}}),[n]);return t?i.a.createElement(r.MDXProvider,{components:{pre:p}},i.a.createElement(a.MDXRenderer,{scope:u({frontmatter:t.frontmatter},s)},t.body)):null}},mfRe:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l})),n.d(t,"pageQuery",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("CXra");function l(e){return a.a.createElement(o.a,e)}var i="1967203299"},ncmG:function(e,t,n){"use strict";var r=n("A2+M"),a=n("q1tI"),o=n.n(a);t.a=function(e){var t=e.mdx,n=e.html,a=e.as,l=void 0===a?"div":a;return t?o.a.createElement(l,null,o.a.createElement(r.MDXRenderer,null,t.body)):o.a.createElement(l,{dangerouslySetInnerHTML:{__html:n}})}},p9l3:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("Jfbj");t.default=function(e){return a.a.createElement(o.a,e)};var l="608019142"},pUS1:function(e,t,n){e.exports={cls1:"PropsTable-CssProp1_table-module--cls1--sfPS0",cls2:"PropsTable-CssProp1_table-module--cls2--1LT6e PropsTable-CssProp1_table-module--cls1--sfPS0"}},rV4u:function(e,t,n){e.exports={union:"PropsTable-tokenMap-module--union--1-BKN"}},tADN:function(e,t,n){e.exports={cls1:"JsDocTypeWrapper-JsDocWrapper-module--cls1--F9iCh",cls2:"JsDocTypeWrapper-JsDocWrapper-module--cls2--368lX JsDocTypeWrapper-JsDocWrapper-module--cls1--F9iCh",block:"JsDocTypeWrapper-JsDocWrapper-module--block--3SV1r"}},v3k5:function(e,t,n){"use strict";n("91GP"),n("Z2Ku"),n("f3/d");var r=n("q1tI"),a=n.n(r),o=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("nBBu"));var l=function(e){var t=e.importName,n=(e.docNode,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["importName","docNode"]));return a.a.createElement("code",Object.assign({},n,{dangerouslySetInnerHTML:{__html:Object(o.highlight)(t,"js")}}))},i=["Field","FieldArray","Submit","Message","Summary","Summary"];t.a=function(e){var t,n=e.docNode,r="import { "+n.name+" } from 'react-formal';";return i.includes(n.name)&&(r="import Form from 'react-formal';",t=a.a.createElement(l,Object.assign({},e,{importName:"const "+n.name+" = Form."+n.name,className:"mt-2 block"}))),a.a.createElement("div",{className:"mb-6"},a.a.createElement(l,Object.assign({},e,{importName:r,className:"block"})),t)}},vs32:function(e,t,n){"use strict";n("pIFo");var r=n("q1tI"),a=n.n(r);t.a=function(e){var t=e.value,n=e.isElementType;return null==t||"undefined"===t?null:(n&&(t="<".concat(t.replace(/('|")/g,""),">")),a.a.createElement("code",null,t))}},ytwu:function(e,t,n){"use strict";n("Z2Ku"),n("L9s1"),n("f3/d");var r=n("q1tI"),a=n.n(r),o=n("5MbA"),l=function(e){return e[0].toLowerCase()===e[0]};t.a=function(e){var t=e.type,n=e.tags,r=e.tokens;return a.a.createElement(a.a.Fragment,null,function e(t,n,r){var i=t,c=function(t){return e(t,n,r)},s=function(e){var t;return null!==(t=null==r?void 0:r[e])&&void 0!==t?t:"pt-token pt-".concat(e)};function u(e){return a.a.createElement("span",{className:s(l(e)?"primitive":"name")},e)}function p(e){return a.a.createElement("span",{className:s("type_signature")},u(e.name),"elements"in e&&a.a.createElement(a.a.Fragment,null,"<",a.a.createElement("span",{className:s("elements")},Object(o.f)(e.elements,", ",c)),">"))}var m,f=Object(o.d)(n,"type");if(f)return u(f);switch(i.name){case"literal":return a.a.createElement("span",{className:s("literal")},i.value);case"signature":return a.a.createElement("span",{className:s("".concat(i.type,"-signature"))},"function"===i.type?a.a.createElement(a.a.Fragment,null,"(",Object(o.f)(i.signature.arguments,", ",(function(e){return a.a.createElement("span",{className:s("argument")},e.name,": ",c(e.type))})),") => ",a.a.createElement("span",{className:s("return")},c(i.signature.return))):i.raw);case"union":return a.a.createElement("span",{className:s("union")},Object(o.f)(i.elements,null,c));case"tuple":return a.a.createElement("span",{className:s("tuple")},"[",Object(o.f)(i.elements,", ",c),"]");case"intersect":return a.a.createElement("span",{className:s("intersect")},Object(o.f)(i.elements,null,c));default:return function(e){return"Array"===e.name}(t)?function(e){return["signature","union","tuple","intersect"].includes(e.name)}((m=t).elements[0])?p(m):a.a.createElement("span",{className:s("array")},c(m.elements[0]),"[]"):(l(t.name)&&u(t.name),p(t))}}(t,n,r))}}}]);
//# sourceMappingURL=docpoc--getting-started-c273abbcfc5149039acc.js.map