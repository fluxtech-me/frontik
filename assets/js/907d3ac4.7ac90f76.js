"use strict";(self.webpackChunkfts_website=self.webpackChunkfts_website||[]).push([[40],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),h=o,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},l=void 0,s={unversionedId:"react-component-shell",id:"react-component-shell",title:"react-component-shell",description:"Description",source:"@site/docs/react-component-shell.md",sourceDirName:".",slug:"/react-component-shell",permalink:"/fts/docs/react-component-shell",draft:!1,editUrl:"https://github.com/fluxtech-me/fts/edit/master/website/docs/react-component-shell.md",tags:[],version:"current",lastUpdatedBy:"Ruben Arushanyan",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"SecureEventEmitter",permalink:"/fts/docs/secure-event-emitter"}},c={},i=[{value:"Description",id:"description",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Connect to the react component",id:"connect-to-the-react-component",level:2},{value:"Get the shell from the react component",id:"get-the-shell-from-the-react-component",level:2},{value:"Get the shell state from the react component",id:"get-the-shell-state-from-the-react-component",level:2}],p={toc:i};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"react-component-shell")," is a package that allows you to create a shell object and to connect to the react component."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-component-shell\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {Shell, defineExternalAPI} from 'react-component-shell'\nimport {SecureEventEmitter} from 'secure-event-emitter'\n\nclass GameShell extends Shell {\n    #emitterKey = Symbol('Game Shell emitterKey')\n\n    emitter = new SecureEventEmitter(\n        ['pause', 'run'],\n        this.#emitterKey\n    )\n\n    state={\n        isPause: true\n    }\n\n    // methods\n    pause = () => {\n        this.setState(state => {\n            state.isPause = true\n        })\n        this.emitter.unlock(this.#emitterKey).emit('pause')\n    }\n    run = (payload) => {\n        this.setState(state => {\n            state.isPause = false\n        })\n        this.emitter.unlock(this.#emitterKey).emit('play')\n    }\n}\n\n\nexport default defineExternalAPI(\n    GameShell,\n    (shell) => ({\n        emitter: shell.emitter,\n        pause: shell.pause,\n        run: shell.run,\n    }),\n)\n")),(0,o.kt)("h2",{id:"connect-to-the-react-component"},"Connect to the react component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { ShellProvider } from 'react-component-shell'\n\n// ...\n const game_shell = new GameShell()\n// ...\n\n    <ShellProvider shell={game_shell}>\n        <GameComponent />\n    </ShellProvider>\n// ...\n")),(0,o.kt)("h2",{id:"get-the-shell-from-the-react-component"},"Get the shell from the react component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {useShell} from 'react-component-shell'\n\n// ...\nconst shell = useShell()\n// ...\n")),(0,o.kt)("h2",{id:"get-the-shell-state-from-the-react-component"},"Get the shell state from the react component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {useShellState} from 'react-component-shell'\n\n// ...\nconst isPause = useShellState(state => state.isPause)\n// ...\n")))}m.isMDXComponent=!0}}]);