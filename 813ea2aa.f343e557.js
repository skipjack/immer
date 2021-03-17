(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(99)),c={id:"current",title:"Extracting the current state from a draft",sidebar_label:"Current"},i={unversionedId:"current",id:"current",isDocsHomePage:!1,title:"Extracting the current state from a draft",description:"Immer exposes a named export current that creates a copy of the current state of the draft. This can be very useful for debugging purposes (as those objects won't be Proxy objects and not be logged as such). Also, references to current can be safely leaked from a produce function. Put differently, current provides a snapshot of the current state of a draft.",source:"@site/docs/current.md",slug:"/current",permalink:"/immer/current",editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/current.md",version:"current",sidebar_label:"Current",sidebar:"Immer",previous:{title:"Classes",permalink:"/immer/complex-objects"},next:{title:"Extracting the original state from a draft",permalink:"/immer/original"}},l=[{value:"Example",id:"example",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("center",null,Object(a.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),Object(a.b)("p",null,"Immer exposes a named export ",Object(a.b)("inlineCode",{parentName:"p"},"current")," that creates a copy of the current state of the draft. This can be very useful for debugging purposes (as those objects won't be Proxy objects and not be logged as such). Also, references to ",Object(a.b)("inlineCode",{parentName:"p"},"current")," can be safely leaked from a produce function. Put differently, ",Object(a.b)("inlineCode",{parentName:"p"},"current")," provides a snapshot of the current state of a draft."),Object(a.b)("p",null,"Objects generated by ",Object(a.b)("inlineCode",{parentName:"p"},"current")," work similar to the objects created by produce itself."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Unmodified objects will be structurally shared with the original objects."),Object(a.b)("li",{parentName:"ol"},"If no changes are made to a draft, generally it holds that ",Object(a.b)("inlineCode",{parentName:"li"},"original(draft) === current(draft)"),", but this is not guaranteed."),Object(a.b)("li",{parentName:"ol"},"Future changes to the draft won't be reflected in the object produced by ",Object(a.b)("inlineCode",{parentName:"li"},"current")," (except for references to undraftable objects)"),Object(a.b)("li",{parentName:"ol"},"Unlike ",Object(a.b)("inlineCode",{parentName:"li"},"produce")," objects created by ",Object(a.b)("inlineCode",{parentName:"li"},"current")," will ",Object(a.b)("em",{parentName:"li"},"not")," be frozen.")),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"current")," sparingly, it can be a potentially expensive operation, especially when using ES5."),Object(a.b)("p",null,"Note that ",Object(a.b)("inlineCode",{parentName:"p"},"current")," cannot be invoked on objects that aren't drafts."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"The following example shows the effect of ",Object(a.b)("inlineCode",{parentName:"p"},"current")," (and ",Object(a.b)("inlineCode",{parentName:"p"},"original"),"):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const base = {\n    x: 0\n}\n\nconst next = produce(base, draft => {\n    draft.x++\n    const orig = original(draft)\n    const copy = current(draft)\n    console.log(orig.x)\n    console.log(copy.x)\n\n    setTimeout(() => {\n        // this will execute after the produce has finised!\n        console.log(orig.x)\n        console.log(copy.x)\n    }, 100)\n\n    draft.x++\n    console.log(draft.x)\n})\nconsole.log(next.x)\n\n// This will print\n// 0 (orig.x)\n// 1 (copy.x)\n// 2 (draft.x)\n// 2 (next.x)\n// 0 (after timeout, orig.x)\n// 1 (after timeout, copy.x)\n")))}u.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(f,i(i({ref:t},s),{},{components:r})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);