"use strict";(self.webpackChunkfts_website=self.webpackChunkfts_website||[]).push([[654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(n),v=i,d=u["".concat(l,".").concat(v)]||u[v]||p[v]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="SecureEventEmitter",c={unversionedId:"secure-event-emitter",id:"secure-event-emitter",title:"SecureEventEmitter",description:"SecureEventEmitter is the main constructor for creating emitter instances.",source:"@site/docs/secure-event-emitter.md",sourceDirName:".",slug:"/secure-event-emitter",permalink:"/docs/secure-event-emitter",draft:!1,editUrl:"https://github.com/fluxtech-me/fts/edit/master/website/docs/secure-event-emitter.md",tags:[],version:"current",lastUpdatedBy:"Ruben Arushanyan",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"react-component-shell",permalink:"/docs/react-component-shell"}},l={},m=[{value:"Import",id:"import",level:2},{value:"Syntax",id:"syntax",level:2},{value:"<code>new SecureEventEmitter(eventTypes, emitterKey, validator?)</code>",id:"new-secureeventemittereventtypes-emitterkey-validator",level:3},{value:"Usage",id:"usage",level:2}],s={toc:m};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"secureeventemitter"},"SecureEventEmitter"),(0,i.kt)("p",null,"SecureEventEmitter is the main constructor for creating emitter instances."),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {SecureEventEmitter} from 'secure-event-emitter'\n")),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("h3",{id:"new-secureeventemittereventtypes-emitterkey-validator"},(0,i.kt)("inlineCode",{parentName:"h3"},"new SecureEventEmitter(eventTypes, emitterKey, validator?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"eventTypes")," ",(0,i.kt)("inlineCode",{parentName:"p"},"<string[]>"),(0,i.kt)("br",{parentName:"p"}),"\n","An non-empty array of all event types.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"emitterKey")," ",(0,i.kt)("inlineCode",{parentName:"p"},"<string>")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"<symbol>"),(0,i.kt)("br",{parentName:"p"}),"\n","Any string or symbol value without which we won't be able to call the ",(0,i.kt)("inlineCode",{parentName:"p"},".emit()")," method.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"validator")," ",(0,i.kt)("inlineCode",{parentName:"p"},"<Function>"),(0,i.kt)("br",{parentName:"p"}),"\n","Function to validate the emitted values\u2024 The function receives the emitted values in the argument and returns an error message if something is wrong there."))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {SecureEventEmitter} from 'secure-event-emitter'\n\nconst eventTypes = ['event-1', 'event-2']\nconst emitterKey = Symbol()\n\nconst myEmitter = new SecureEventEmitter(eventTypes, emitterKey)\n\nmyEmitter.on('event-1', (a, b) => {\n    console.log(a, b)\n})\n\nmyEmitter.on('event-2', (x) => {\n    console.log(x)\n})\n\nmyEmitter.unlock(emitterKey).emit('event-1', 2021, 2022)\nmyEmitter.unlock(emitterKey).emit('event-2', 123)\n\n")))}p.isMDXComponent=!0}}]);