(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),b=(a(0),a(99)),l={id:"api",title:"API overview"},i={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"API overview",description:"| Exported name | Description | Section |",source:"@site/docs/api.md",slug:"/api",permalink:"/immer/api",editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/api.md",version:"current",sidebar:"Immer",previous:{title:"Update patterns",permalink:"/immer/update-patterns"},next:{title:"Map and Set",permalink:"/immer/map-set"}},c=[{value:"Importing immer",id:"importing-immer",children:[]}],o={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("center",null,Object(b.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Exported name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Section"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"(default)")),Object(b.b)("td",{parentName:"tr",align:null},"The core API of Immer, typically named ",Object(b.b)("inlineCode",{parentName:"td"},"produce"),": ",Object(b.b)("inlineCode",{parentName:"td"},'import produce from "immer"')),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"produce"},"Produce"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"applyPatches")),Object(b.b)("td",{parentName:"tr",align:null},"Given a base state or draft, and a set of patches, applies the patches"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"patches"},"Patches"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"castDraft")),Object(b.b)("td",{parentName:"tr",align:null},"Converts any immutable type to its mutable counterpart. This is just a cast and doesn't actually do anything."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"typescript"},"TypeScript"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"castImmutable")),Object(b.b)("td",{parentName:"tr",align:null},"Converts any mutable type to its immutable counterpart. This is just a cast and doesn't actually do anything."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"typescript"},"TypeScript"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"createDraft")),Object(b.b)("td",{parentName:"tr",align:null},"Given a base state, creates a mutable draft for which any modifications will be recorded"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"async"},"Async"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"current")),Object(b.b)("td",{parentName:"tr",align:null},"Given a draft object (doesn't have to be a tree root), takes a snapshot of the current state of the draft"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"current"},"Current"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"Draft<T>")),Object(b.b)("td",{parentName:"tr",align:null},"Exposed TypeScript type to convert an immutable type to a mutable type"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"typescript"},"TypeScript"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"enableAllPlugins()")),Object(b.b)("td",{parentName:"tr",align:null},"Enables all plugins mentioned below"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"installation#pick-your-immer-version"},"Installation"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"enableES5()")),Object(b.b)("td",{parentName:"tr",align:null},"Enables support for older JavaScript engines, such as Internet Explorer and React Native"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"installation#pick-your-immer-version"},"Installation"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"enableMapSet()")),Object(b.b)("td",{parentName:"tr",align:null},"Enables support for ",Object(b.b)("inlineCode",{parentName:"td"},"Map")," and ",Object(b.b)("inlineCode",{parentName:"td"},"Set")," collections."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"installation#pick-your-immer-version"},"Installation"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"enablePatches()")),Object(b.b)("td",{parentName:"tr",align:null},"Enables support for JSON patches."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"installation#pick-your-immer-version"},"Installation"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"finishDraft")),Object(b.b)("td",{parentName:"tr",align:null},"Given an draft created using ",Object(b.b)("inlineCode",{parentName:"td"},"createDraft"),", seals the draft and produces and returns the next immutable state that captures all the changes"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"async"},"Async"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"freeze(obj, deep?)")),Object(b.b)("td",{parentName:"tr",align:null},"Freezes draftable objects. Returns the original object. By default freezes shallowly, but if the second argument is ",Object(b.b)("inlineCode",{parentName:"td"},"true")," it will freeze recursively."),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"Immer")),Object(b.b)("td",{parentName:"tr",align:null},'constructor that can be used to create a second "immer" instance (exposing all APIs listed in this instance), that doesn\'t share its settings with global instance.'),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"immerable")),Object(b.b)("td",{parentName:"tr",align:null},"Symbol that can be added to a constructor or prototype, to indicate that Immer should treat the class as something that can be safely drafted"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"complex-objects"},"Classes"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"Immutable<T>")),Object(b.b)("td",{parentName:"tr",align:null},"Exposed TypeScript type to convert mutable types to immutable types"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"isDraft")),Object(b.b)("td",{parentName:"tr",align:null},"Returns true if the given object is a draft object"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"isDraftable")),Object(b.b)("td",{parentName:"tr",align:null},"Returns true if Immer is capable of turning this object into a draft. Which is true for: arrays, objects without prototype, objects with ",Object(b.b)("inlineCode",{parentName:"td"},"Object")," as their prototype, objects that have the ",Object(b.b)("inlineCode",{parentName:"td"},"immerable")," symbol on their constructor or prototype"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"nothing")),Object(b.b)("td",{parentName:"tr",align:null},"Value that can be returned from a recipe, to indicate that the value ",Object(b.b)("inlineCode",{parentName:"td"},"undefined")," should be produced"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"return"},"Return"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"original")),Object(b.b)("td",{parentName:"tr",align:null},"Given a draft object (doesn't have to be a tree root), returns the original object at the same path in the original state tree, if present"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"original"},"Original"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"Patch")),Object(b.b)("td",{parentName:"tr",align:null},"Exposed TypeScript type, describes the shape of an (inverse) patch object"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"patches"},"Patches"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"produce")),Object(b.b)("td",{parentName:"tr",align:null},"The core API of Immer, also exposed as the ",Object(b.b)("inlineCode",{parentName:"td"},"default")," export"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"produce"},"Produce"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"produceWithPatches")),Object(b.b)("td",{parentName:"tr",align:null},"Works the same as ",Object(b.b)("inlineCode",{parentName:"td"},"produce"),", but instead of just returning the produced object, it returns a tuple, consisting of ",Object(b.b)("inlineCode",{parentName:"td"},"[result, patches, inversePatches]"),"."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"patches"},"Patches"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"setAutoFreeze")),Object(b.b)("td",{parentName:"tr",align:null},"Enables / disables automatic freezing of the trees produces. By default enabled."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"freezing"},"Freezing"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"setUseProxies")),Object(b.b)("td",{parentName:"tr",align:null},"Can be used to disable or force the use of ",Object(b.b)("inlineCode",{parentName:"td"},"Proxy")," objects. Useful when filing bug reports."),Object(b.b)("td",{parentName:"tr",align:null})))),Object(b.b)("h2",{id:"importing-immer"},"Importing immer"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"produce")," is exposed as the default export, but optionally it can be used as name import as well, as this benefits some older project setups. So the following imports are all correct, where the first is recommended:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'import produce from "immer"\nimport {produce} from "immer"\n\nconst {produce} = require("immer")\nconst produce = require("immer").produce\nconst produce = require("immer").default\n\nimport unleashTheMagic from "immer"\nimport {produce as unleashTheMagic} from "immer"\n')))}p.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,s=d["".concat(l,".").concat(u)]||d[u]||m[u]||b;return a?r.a.createElement(s,i(i({ref:t},o),{},{components:a})):r.a.createElement(s,i({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);