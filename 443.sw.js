"use strict";(self.webpackChunkfrontik_website=self.webpackChunkfrontik_website||[]).push([[443],{443:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});s(524),s(120),s(188),s(80);s(989);var n=s(917);s(491),s(486);var c=s(125),a=s(951);s(119),s(873);const r={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};s(902);class i extends a._{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(r)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));t.waitUntil(s);let n,a=await t.cacheMatch(e);if(a)0;else{0;try{a=await s}catch(e){e instanceof Error&&(n=e)}}if(!a)throw new c.V("no-response",{url:e.url,error:n});return a}}s(54);function o(e){e.debug&&console.log("[PWA][SW]: running swCustom code",e),(0,n.X)((e=>[/graph\.facebook\.com\/.*\/picture/,/netlify\.com\/img/,/avatars1\.githubusercontent/].some((t=>e.url.href.match(t)))),new i)}}}]);