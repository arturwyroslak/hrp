(()=>{const t=!1,e="_actors_hnoi";let i=globalThis[e];(()=>{if(i)return;const o={};i=function e(i){const n={},a=new Proxy(i,{get:(s,c)=>"assign"===c?t=>{Object.assign(a,t)}:(c in i||(i[c]={},n[c]=e(i[c]),i===o&&t&&(globalThis[c]=i[c])),c in n?n[c]:i[c]),set:(e,a,s)=>(i[a]=s,n[a]=s,i===o&&t&&(globalThis[a]=i[a]),!0)});return a}(o),globalThis[e]=i,t&&(globalThis.app=o)})(),(()=>{const{$ai:t,$bus:e}=i;t.controller={init(){this._closeAuthPopupOnSuccess()},async _closeAuthPopupOnSuccess(){await e.send("openai.isAuthPopup")&&(await this._waitForChatInterface(),await this._waitForLogin(),setTimeout((()=>window.close()),1500))},async _waitForChatInterface(){await new Promise((t=>{const e=setInterval((()=>{!!document.querySelector("#__next main")&&(clearInterval(e),t())}),50)}))},async _waitForLogin(){await new Promise((t=>{setTimeout((async()=>{try{await this._waitNoMutations();const e="https://chat.openai.com/api/auth/session",i=await fetch(e,{credentials:"include"});(await i.json()).error&&await this._waitForLogin(),t()}catch(t){console.error("failed to fetch session",t)}}),1500)}))},async _waitNoMutations(t=1e3){await new Promise((e=>{const i=()=>{e(),n.disconnect()};let o=setTimeout(i,t);const n=new MutationObserver((()=>{clearTimeout(o),o=setTimeout(i,t)}));n.observe(document.documentElement,{attributes:!0,childList:!0,subtree:!0})}))}}})(),(()=>{const{$startup:t,$ai:e}=i;t.openaiController={init(){e.controller.init()}},t.openaiController.init()})()})();