(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),l=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=l(t),u=r,b=s["".concat(c,".").concat(u)]||s[u]||p[u]||a;return t?o.a.createElement(b,i(i({ref:n},d),{},{components:t})):o.a.createElement(b,i({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<a;d++)c[d]=t[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return m})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(104)),c=["components"],i={title:"Dynamic Commands"},m={unversionedId:"commands/dynamic-command",id:"commands/dynamic-command",isDocsHomePage:!1,title:"Dynamic Commands",description:'With this command utility, you can declare a command as "dynamic", which means that this command will be resolved when entering preview mode.',source:"@site/docs/commands/dynamic-command.md",slug:"/commands/dynamic-command",permalink:"/Templater/docs/commands/dynamic-command",editUrl:"https://github.com/SilentVoid13/Templater/edit/master/docs/docs/docs/commands/dynamic-command.md",version:"current",sidebar:"docs",previous:{title:"Javascript Execution Command",permalink:"/Templater/docs/commands/execution-command"},next:{title:"Whitespace Control",permalink:"/Templater/docs/commands/whitespace-control"}},d=[{value:"Refresh problems",id:"refresh-problems",children:[]}],l={toc:d};function s(e){var n=e.components,t=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,'With this command utility, you can declare a command as "dynamic", which means that this command will be resolved when entering preview mode.'),Object(a.b)("p",null,"To declare a dynamic command add a plus ",Object(a.b)("inlineCode",{parentName:"p"},"+")," sign after the command opening tag: ",Object(a.b)("inlineCode",{parentName:"p"},"<%+")),Object(a.b)("p",null,"That's it, your command will now be executed only in preview mode."),Object(a.b)("p",null,"This is useful for internal functions like ",Object(a.b)("inlineCode",{parentName:"p"},"tp.file.last_modified_date")," for example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"Last modified date: <%+ tp.file.last_modified_date() %>\n")),Object(a.b)("h2",{id:"refresh-problems"},"Refresh problems"),Object(a.b)("p",null,'One "downside" of the preview mode is that it puts the rendered note in cache, to speed things up.'),Object(a.b)("p",null,"This means that your dynamic command will be rendered only once, when you open the note, but won't be refreshed after."),Object(a.b)("p",null,"If you want to refresh it, you must close the note to clear the cache and open it again."))}s.isMDXComponent=!0}}]);