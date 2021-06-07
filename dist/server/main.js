!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(){this._max=0,this._ids=[]}gen(){var e;return null!==(e=this._ids.pop())&&void 0!==e?e:this._max++}free(e){this._ids.push(e)}clear(){this._max=0,this._ids=[]}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.script=void 0,t.script="npc"},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.conf=t.vRPTunnelServer=t.vRPServer=void 0;const o=n(1),c=n(4),i=r(n(7));let s,u;t.vRPServer=s,t.vRPTunnelServer=u;const l=(e,t)=>{"config"===t?console.log(`^1ERROR(gmconfig/${o.script}.json): ${e}`):"none"===t?console.log("^1ERROR: "+e):console.log(`^1ERROR(${t}): ${e}`)};i.default.existsSync("./gmconfig/")||l('cant find folder "gmconfig" in '+process.cwd(),"none"),i.default.existsSync(`./gmconfig/${o.script}.json`)||l("please read the installation instructions of our scripts","none");const f=JSON.parse(i.default.readFileSync(`./gmconfig/${o.script}.json`).toString());onNet(`gm_${o.script}:getConfig`,e=>{emitNet(`gm_${o.script}:callbackUtils`,source,f,e.CallbackID),"vrp"===f.framework&&(t.vRPServer=s=c.VrpProxy.getInterface("vRP"),t.vRPTunnelServer=u=c.VrpTunnel.getInterface("vRP"))});const a=f;t.conf=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(1),n(2),n(8)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VrpProxy=t.VrpTunnel=t.IdGenerator=void 0,t.IdGenerator=n(0),t.VrpTunnel=n(5),t.VrpProxy=n(6)},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function i(e){try{u(r.next(e))}catch(e){c(e)}}function s(e){try{u(r.throw(e))}catch(e){c(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.bindInterface=t.getInterface=void 0;const o=n(0);t.getInterface=function(e,t=GetCurrentResourceName()){const n=new o.default,r={};return onNet(`${e}:${t}:tunnel_res`,(e,t)=>{const o=r[e];o&&(delete r[e],n.free(e),o(t.length<=1?t[0]:t))}),new Proxy({},{get(o,c){const i=c.toString();return o[i]||(o[i]=function(o){return(c,...i)=>-1===c||o.startsWith("_")?emitNet(e+":tunnel_req",c,o.substring(1),i,t,-1):new Promise(s=>{const u=n.gen();r[u]=s,emitNet(e+":tunnel_req",c,o,i,t,u)})}(i)),o[i]},set(){throw new Error("set isn't supported on Tunnel access")}})},t.bindInterface=function(e,t){onNet(e+":tunnel_req",(n,o,c,i)=>r(this,void 0,void 0,(function*(){const r=global.source,s=t[n];let u;if(s)try{u=yield s(...o)}catch(e){console.error(e)}i>=0&&emitNet(`${e}:${c}:tunnel_res`,r,i,[u])})))}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function i(e){try{u(r.next(e))}catch(e){c(e)}}function s(e){try{u(r.throw(e))}catch(e){c(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.addInterface=t.getInterface=void 0;const o=n(0);t.getInterface=function(e,t=GetCurrentResourceName()){const n=new o.default,r={};return on(`${e}:${t}:proxy_res`,(e,t)=>{const o=r[e];o&&(delete r[e],n.free(e),o(t.length<=1?t[0]:t))}),new Proxy({},{get(o,c){const i=c.toString();return o[i]||(o[i]=function(o){return(...c)=>{if(o.startsWith("_"))return emit(e+":proxy",o.substring(1),c,t,-1);let i,s=!1;const u=new Promise(u=>{const l=n.gen();r[l]=e=>{s=!0,i=e,u(i)},emit(e+":proxy",o,c,t,l)});return s?i:u}}(i)),o[i]},set(){throw new Error("cannot set values on proxy access interface")}})},t.addInterface=function(e,t){on(e+":proxy",(n,o,c,i)=>r(this,void 0,void 0,(function*(){const r=t[n];let s;if(r)try{s=yield r(...o)}catch(e){console.error(e)}else console.log(`error: proxy call ${e}:${n} not found`);i>=0&&emit(`${e}:${c}:proxy_res`,i,[s])})))}},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);setTick(()=>{r.conf.deleteAllVehicles&&GetAllVehicles().forEach(e=>{null!=e&&(HasVehicleBeenOwnedByPlayer(e)||DeleteEntity(e))}),r.conf.deleteAllPeds&&(console.log(GetAllPeds()),GetAllPeds().forEach(e=>{null!=e&&DeleteEntity(e)}))})}]);