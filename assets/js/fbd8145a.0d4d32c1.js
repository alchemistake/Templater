(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(104)),o=["components"],l={title:"Config Module"},c={unversionedId:"internal-variables-functions/internal-modules/config-module",id:"internal-variables-functions/internal-modules/config-module",isDocsHomePage:!1,title:"Config Module",description:"This module exposes Templater's running configuration.",source:"@site/docs/internal-variables-functions/internal-modules/config-module.md",slug:"/internal-variables-functions/internal-modules/config-module",permalink:"/Templater/docs/internal-variables-functions/internal-modules/config-module",editUrl:"https://github.com/SilentVoid13/Templater/edit/master/docs/docs/docs/internal-variables-functions/internal-modules/config-module.md",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/Templater/docs/internal-variables-functions"},next:{title:"Date Module",permalink:"/Templater/docs/internal-variables-functions/internal-modules/date-module"}},p=[],u={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This module exposes Templater's ",Object(i.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater/blob/master/src/Templater.ts#L16"},"running configuration"),". "),Object(i.b)("p",null,"This is mostly useful when writing scripts requiring some context informations."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Internal Variable / Function"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"tp.config.template_file")),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"TFile")," object representing the template file.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"tp.config.target_file")),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"TFile")," object representing the target file where the template will be inserted")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"tp.config.run_mode")),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"RunMode")," ",Object(i.b)("a",{parentName:"td",href:"https://github.com/SilentVoid13/Templater/blob/master/src/Templater.ts#L8"},"enumeration"),", representing the way Templater was launched (Create new from template, Append to active file, ...)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"tp.config.active_file?")),Object(i.b)("td",{parentName:"tr",align:null},"The active file (if existing) when launching Templater.")))))}b.isMDXComponent=!0},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||i;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);