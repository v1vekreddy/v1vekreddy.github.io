(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[2355,e=>{var t=e.i(47167),r=e.i(71645),n=e.i(18566);function i(){return"u">typeof window}function a(){return"production"}function o(){return"development"===((i()?window.vam:a())||"production")}function s(e){return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(?=[/?#]|$)`)}function l(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/${e}`}function u(e){return(0,r.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]),(0,r.useEffect)(()=>{!function(e={debug:!0},t){var r;if(!i())return;let{beforeSend:n,src:s,dataset:u}=function(e,t){var r,n;let i=e;if(t)try{i={...null==(r=JSON.parse(t))?void 0:r.analytics,...e}}catch{}!function(e="auto"){if("auto"===e){window.vam=a();return}window.vam=e}(i.mode);let s={sdkn:"@vercel/analytics"+(i.framework?`/${i.framework}`:""),sdkv:"2.0.1"};return i.disableAutoTrack&&(s.disableAutoTrack="1"),i.viewEndpoint&&(s.viewEndpoint=l(i.viewEndpoint)),i.eventEndpoint&&(s.eventEndpoint=l(i.eventEndpoint)),i.sessionEndpoint&&(s.sessionEndpoint=l(i.sessionEndpoint)),o()&&!1===i.debug&&(s.debug="false"),i.dsn&&(s.dsn=i.dsn),i.endpoint?s.endpoint=i.endpoint:i.basePath&&(s.endpoint=l(`${i.basePath}/insights`)),{beforeSend:i.beforeSend,src:(n=i).scriptSrc?l(n.scriptSrc):o()?"https://va.vercel-scripts.com/v1/script.debug.js":n.basePath?l(`${n.basePath}/insights/script.js`):"/_vercel/insights/script.js",dataset:s}}(e,t);if(window.va||(window.va=function(...e){window.vaq||(window.vaq=[]),window.vaq.push(e)}),n&&(null==(r=window.va)||r.call(window,"beforeSend",n)),document.head.querySelector(`script[src*="${s}"]`))return;let c=document.createElement("script");for(let[e,t]of(c.src=s,Object.entries(u)))c.dataset[e]=t;c.defer=!0,c.onerror=()=>{let e=o()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${s}. ${e}`)},document.head.appendChild(c)}({framework:e.framework||"react",basePath:e.basePath??function(){if(void 0!==t.default&&void 0!==t.default.env)return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}(),...void 0!==e.route&&{disableAutoTrack:!0},...e},e.configString??function(){if(void 0!==t.default&&void 0!==t.default.env)return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG}())},[]),(0,r.useEffect)(()=>{e.route&&e.path&&function({route:e,path:t}){var r;null==(r=window.va)||r.call(window,"pageview",{route:e,path:t})}({route:e.route,path:e.path})},[e.route,e.path]),null}function c(e){let i,a,o,{route:l,path:c}=(i=(0,n.useParams)(),a=(0,n.useSearchParams)(),o=(0,n.usePathname)(),i?{route:function(e,t){if(!e||!t)return e;let r=e;try{let e=Object.entries(t);for(let[t,n]of e)if(!Array.isArray(n)){let e=s(n);e.test(r)&&(r=r.replace(e,`/[${t}]`))}for(let[t,n]of e)if(Array.isArray(n)){let e=s(n.join("/"));e.test(r)&&(r=r.replace(e,`/[...${t}]`))}return r}catch{return e}}(o,Object.keys(i).length?i:Object.fromEntries(a.entries())),path:o}:{route:null,path:o});return r.default.createElement(u,{path:c,route:l,...e,basePath:function(){if(void 0!==t.default&&void 0!==t.default.env)return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH}(),configString:function(){if(void 0!==t.default&&void 0!==t.default.env)return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_CLIENT_CONFIG}(),framework:"next"})}e.s(["Analytics",0,function(e){return r.default.createElement(r.Suspense,{fallback:null},r.default.createElement(c,{...e}))}])},57215,e=>{var t=e.i(47167),r=e.i(71645),n=e.i(18566);function i(){return false}function a(e){return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(?=[/?#]|$)`)}function o(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/${e}`}function s(e){(0,r.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.si)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]);let n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(!n.current){let r=function(e={},t){var r;if(!("u">typeof window)||null===e.route)return null;window.si||(window.si=function(...e){window.siq=window.siq||[],window.siq.push(e)});let{beforeSend:n,src:a,dataset:s}=function(e,t){var r,n;let a=e;if(t)try{a={...null==(r=JSON.parse(t))?void 0:r.speedInsights,...e}}catch{}let s={sdkn:"@vercel/speed-insights"+(a.framework?`/${a.framework}`:""),sdkv:"2.0.0"};return a.sampleRate&&(s.sampleRate=a.sampleRate.toString()),a.route&&(s.route=a.route),i()&&!1===a.debug&&(s.debug="false"),a.dsn&&(s.dsn=a.dsn),a.endpoint?s.endpoint=o(a.endpoint):a.basePath&&(s.endpoint=o(`${a.basePath}/speed-insights/vitals`)),{src:(n=a).scriptSrc?o(n.scriptSrc):i()?"https://va.vercel-scripts.com/v1/speed-insights/script.debug.js":n.dsn?"https://va.vercel-scripts.com/v1/speed-insights/script.js":n.basePath?o(`${n.basePath}/speed-insights/script.js`):"/_vercel/speed-insights/script.js",beforeSend:a.beforeSend,dataset:s}}(e,t);if(document.head.querySelector(`script[src*="${a}"]`))return null;n&&(null==(r=window.si)||r.call(window,"beforeSend",n));let l=document.createElement("script");for(let[e,t]of(l.src=a,l.defer=!0,Object.entries(s)))l.dataset[e]=t;return l.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${a}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(l),{setRoute:e=>{l.dataset.route=e??void 0}}}({framework:e.framework??"react",basePath:e.basePath??function(){if(void 0!==t.default&&void 0!==t.default.env)return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}(),...e},e.configString??function(){if(void 0!==t.default&&void 0!==t.default.env)return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG}());r&&(n.current=r.setRoute)}},[e]),(0,r.useEffect)(()=>{n.current&&e.route&&n.current(e.route)},[e.route]),null}function l(e){let i=(()=>{let e=(0,n.useParams)(),t=(0,n.useSearchParams)()||new URLSearchParams,r=(0,n.usePathname)();if(!e)return null;let i=Object.keys(e).length?e:Object.fromEntries(t.entries());if(!r||!i)return r;let o=r;try{let e=Object.entries(i);for(let[t,r]of e)if(!Array.isArray(r)){let e=a(r);e.test(o)&&(o=o.replace(e,`/[${t}]`))}for(let[t,r]of e)if(Array.isArray(r)){let e=a(r.join("/"));e.test(o)&&(o=o.replace(e,`/[...${t}]`))}return o}catch{return r}})();return r.default.createElement(s,{route:i,...e,framework:"next",basePath:function(){if(void 0!==t.default&&void 0!==t.default.env)return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH}(),configString:function(){if(void 0!==t.default&&void 0!==t.default.env)return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_CLIENT_CONFIG}()})}e.s(["SpeedInsights",0,function(e){return r.default.createElement(r.Suspense,{fallback:null},r.default.createElement(l,{...e}))}])},87652,95420,91994,e=>{var t=e.i(86427),r=e.i(71645),n=e.i(37806),i=e.i(47414);function a(e){let a=(0,i.f)(()=>(0,t.o)(e)),{isStatic:o}=(0,r.useContext)(n.f);if(o){let[,t]=(0,r.useState)(e);(0,r.useEffect)(()=>a.on("change",t),[])}return a}e.s(["f",0,a],87652);var o=e.i(28409),s=e.i(96173),l=e.i(12008),u=e.i(55560),c=e.i(79294),d=e.i(87022);let f=new Set,m=({timestamp:e})=>{f.forEach(t=>t.tick(e))};class p extends c.f{constructor(e){super(),this.state="idle",this.startTime=0,this.currentTime=0,this.started=!1,this.hasNextTarget=!1,this.nextTarget=0,this.stop=()=>{"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},this.options=e,this.factory=e.type,this.generator=this.factory(e);let{driver:t}=e;t&&(this.driver=t(e=>this.tick(e))),this.startTime=this.now(),this.state="running",this.driver?this.driver.start():(f.size||d.y.update(m,!0),f.add(this))}setTarget(e,t){this.nextTarget=e,this.nextVelocity=t,this.hasNextTarget=!0}retarget(e,t){let{options:r,generator:n}=this;r.keyframes=e,r.velocity=t,this.startTime=this.now(),this.currentTime=0,n.retarget?n.retarget(e,t):this.generator=this.factory(r)}tick(e){let{options:t,hasNextTarget:r}=this,{delay:n=0,onUpdate:i,onPlay:a}=t;this.started||(this.startTime=(0,u.f)(this.startTime,e));let o=Math.round(e-this.startTime)-n,s=this.currentTime=Math.max(0,o),l=this.generator.next(s),c=o<0?t.keyframes[0]:l.value;if(r){this.hasNextTarget=!1;let{keyframes:e}=t;e[0]=c,e[1]=this.nextTarget,this.retarget(e,this.nextVelocity??this.getGeneratorVelocity())}(r||!this.started)&&(this.started=!0,a?.()),"running"===this.state&&(i?.(c),l.done&&o>=0&&!r&&!this.hasNextTarget&&"running"===this.state&&(this.notifyFinished(),this.teardown(),this.state="finished",t.onComplete?.()))}getGeneratorVelocity(){return(0,l.f)(this.generator,this.currentTime,this.options.velocity)}now(){return this.driver?this.driver.now():s.f.now()}teardown(){this.state="idle",this.driver?this.driver.stop():(f.delete(this),f.size||(0,d.Y)(m))}}var h=e.i(85260),g=e.i(83411);function v(e,t,r){return function(e,t,r){let n,i=e.get(),a=null,o="string"==typeof i?i.replace(/[\d.-]/g,""):void 0,s=e=>n(o?e+o:e),l=()=>e.events.animationStart?.notify(),u=()=>{a&&(a.stop(),a=null),e.animation=void 0};if(e.attach((t,i)=>{n=i;let o=(0,h.f)(t);if(a?.state==="running")return void a.setTarget(o,r.velocity);let c=(0,h.f)(e.get()),d=a?a.getGeneratorVelocity():e.getVelocity();if(u(),c===o)return;let f=a=new p({...{keyframes:[c,o],velocity:d,restDelta:.001,restSpeed:.01,...r,onUpdate:s},onPlay:l});e.animation=f,f.then(()=>{a===f&&(a=null,e.animation=void 0,e.events.animationComplete?.notify())})},u),(0,g.f)(t)){let n=!0===r.skipInitialAnimation,i=t.on("change",t=>{var r,i,a,s;n?(n=!1,e.jump((r=t,(i=o)?r+i:r),!1)):e.set((a=t,(s=o)?a+s:a))}),a=e.on("destroy",i);return()=>{i(),a()}}return u}(e,t,{...r,type:o.f})}e.i(68514),e.i(44573);var y=e.i(44230),w=e.i(74008);function b(e,t){let r=a(t()),n=()=>r.set(t());return n(),(0,w.f)(()=>{let t=()=>d.y.preRender(n,!1,!0),r=e.map(e=>e.on("change",t));return n(),()=>{r.forEach(e=>e()),(0,d.Y)(n)}}),r}function x(e,r,n,a){if("function"==typeof e){let r;return t.I.current=[],e(),r=b(t.I.current,e),t.I.current=void 0,r}if(void 0!==n&&!Array.isArray(n)&&"function"!=typeof r){var o=e,s=r,l=n,u=a;let t=(0,i.f)(()=>Object.keys(l)),c=(0,i.f)(()=>({}));for(let e of t)c[e]=x(o,s,l[e],u);return c}let c="function"==typeof r?r:function(...e){let t=!Array.isArray(e[0]),r=t?0:-1,n=e[0+r],i=e[1+r],a=e[2+r],o=e[3+r],s=(0,y.f)(i,a,o);return t?s(n):s}(r,n,a),d=Array.isArray(e)?k(e,c):k([e],([e])=>c(e)),f=Array.isArray(e)?void 0:e.accelerate;if(f&&!f.isTransformed&&"function"!=typeof r&&Array.isArray(n)&&a?.clamp!==!1){let e=a?.ease;d.accelerate={...f,times:[0,...r,1],keyframes:[n[0],...n,n[n.length-1]],isTransformed:!0,...e?{ease:Array.isArray(e)?[e[0],...e]:e}:{}}}return d}function k(e,t){let r=(0,i.f)(()=>[]);return b(e,()=>{r.length=0;let n=e.length;for(let t=0;t<n;t++)r[t]=e[t].get();return t(r)})}e.s(["f",0,x],95420),e.s(["f",0,function(e,t={}){return function(e,t,i){let{isStatic:o}=(0,r.useContext)(n.f),s=()=>(0,g.f)(e)?e.get():e;if(o)return x(s);let l=a(s());return(0,r.useInsertionEffect)(()=>i(l,e,t),[l,JSON.stringify(t)]),l}(e,t,v)}],91994)},63178,e=>{var t=e.i(71645),r=(e,t,r,n,i,a,o,s)=>{let l=document.documentElement,u=["light","dark"];function c(t){var r;(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&a?i.map(e=>a[e]||e):i;r?(l.classList.remove(...n),l.classList.add(a&&a[t]?a[t]:t)):l.setAttribute(e,t)}),r=t,s&&u.includes(r)&&(l.style.colorScheme=r)}if(n)c(n);else try{let e=localStorage.getItem(t)||r,n=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(n)}catch(e){}},n=["light","dark"],i="(prefers-color-scheme: dark)",a="u"<typeof window,o=t.createContext(void 0),s={setTheme:e=>{},themes:[]},l=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:r=!1,enableSystem:a=!0,enableColorScheme:s=!0,storageKey:u="theme",themes:p=l,defaultTheme:h=a?"system":"light",attribute:g="data-theme",value:v,children:y,nonce:w,scriptProps:b})=>{let[x,k]=t.useState(()=>d(u,h)),[E,$]=t.useState(()=>"system"===x?m():x),S=v?Object.values(v):p,T=t.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=m());let i=v?v[t]:t,o=r?f(w):null,l=document.documentElement,u=e=>{"class"===e?(l.classList.remove(...S),i&&l.classList.add(i)):e.startsWith("data-")&&(i?l.setAttribute(e,i):l.removeAttribute(e))};if(Array.isArray(g)?g.forEach(u):u(g),s){let e=n.includes(h)?h:null,r=n.includes(t)?t:e;l.style.colorScheme=r}null==o||o()},[w]),C=t.useCallback(e=>{let t="function"==typeof e?e(x):e;k(t);try{localStorage.setItem(u,t)}catch(e){}},[x]),_=t.useCallback(t=>{$(m(t)),"system"===x&&a&&!e&&T("system")},[x,e]);t.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),t.useEffect(()=>{let e=e=>{e.key===u&&(e.newValue?k(e.newValue):C(h))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),t.useEffect(()=>{T(null!=e?e:x)},[e,x]);let j=t.useMemo(()=>({theme:x,setTheme:C,forcedTheme:e,resolvedTheme:"system"===x?E:x,themes:a?[...p,"system"]:p,systemTheme:a?E:void 0}),[x,C,e,E,a,p]);return t.createElement(o.Provider,{value:j},t.createElement(c,{forcedTheme:e,storageKey:u,attribute:g,enableSystem:a,enableColorScheme:s,defaultTheme:h,value:v,themes:p,nonce:w,scriptProps:b}),y)},c=t.memo(({forcedTheme:e,storageKey:n,attribute:i,enableSystem:a,enableColorScheme:o,defaultTheme:s,value:l,themes:u,nonce:c,scriptProps:d})=>{let f=JSON.stringify([i,n,s,e,u,l,a,o]).slice(1,-1);return t.createElement("script",{...d,suppressHydrationWarning:!0,nonce:"u"<typeof window?c:"",dangerouslySetInnerHTML:{__html:`(${r.toString()})(${f})`}})}),d=(e,t)=>{let r;if(!a){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},f=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},m=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light");e.s(["J",0,e=>t.useContext(o)?t.createElement(t.Fragment,null,e.children):t.createElement(u,{...e}),"i",0,()=>{var e;return null!=(e=t.useContext(o))?e:s}])},8341,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var n={cancelIdleCallback:function(){return o},requestIdleCallback:function(){return a}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},o="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},79520,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return b},handleClientScriptLoad:function(){return v},initScriptLoader:function(){return y}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(55682),o=e.r(90809),s=e.r(43476),l=a._(e.r(74080)),u=o._(e.r(71645)),c=e.r(42732),d=e.r(22737),f=e.r(8341),m=e.r(19083),p=new Map,h=new Set,g=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:i=null,dangerouslySetInnerHTML:a,children:o="",strategy:s="afterInteractive",onError:u,stylesheets:c}=e,f=r||t;if(f&&h.has(f))return;if(p.has(t)){h.add(f),p.get(t).then(n,u);return}let m=()=>{i&&i(),h.add(f)},g=document.createElement("script"),v=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),n&&n.call(this,t),m()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});a?(g.innerHTML=a.__html||"",m()):o?(g.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",m()):t&&(g.src=t,p.set(t,v)),(0,d.setAttributesFromProps)(g,e),"worker"===s&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",s),c&&(e=>{if(l.default.preinit)return e.forEach(e=>{l.default.preinit(e,{as:"style"})});if("u">typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}})(c),document.body.appendChild(g)};function v(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>g(e))}):g(e)}function y(e){e.forEach(v),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");h.add(t)})}function w(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:i=null,strategy:a="afterInteractive",onError:o,stylesheets:d,...p}=e,{updateScripts:v,scripts:y,getIsSsr:w,appDir:b,nonce:x}=(0,u.useContext)(c.HeadManagerContext);x=p.nonce||x;let k=(0,u.useRef)(!1);(0,u.useEffect)(()=>{let e=t||r;k.current||(i&&e&&h.has(e)&&i(),k.current=!0)},[i,t,r]);let E=(0,u.useRef)(!1);if((0,u.useEffect)(()=>{if(!E.current){if("afterInteractive"===a)g(e);else"lazyOnload"===a&&("complete"===document.readyState?(0,f.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>g(e))}));E.current=!0}},[e,a]),("beforeInteractive"===a||"worker"===a)&&(v?(y[a]=(y[a]||[]).concat([{id:t,src:r,onLoad:n,onReady:i,onError:o,...p,nonce:x}]),v(y)):w&&w()?h.add(t||r):w&&!w()&&g({...e,nonce:x})),b){if(d&&d.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===a)if(!r)return p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,s.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,m.htmlEscapeJsonString)(JSON.stringify([0,{...p,id:t}]))})`}});else return l.default.preload(r,p.integrity?{as:"script",integrity:p.integrity,nonce:x,crossOrigin:p.crossOrigin}:{as:"script",nonce:x,crossOrigin:p.crossOrigin}),(0,s.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,m.htmlEscapeJsonString)(JSON.stringify([r,{...p,id:t}]))})`}});"afterInteractive"===a&&r&&l.default.preload(r,p.integrity?{as:"script",integrity:p.integrity,nonce:x,crossOrigin:p.crossOrigin}:{as:"script",nonce:x,crossOrigin:p.crossOrigin})}return null}Object.defineProperty(w,"__nextScript",{value:!0});let b=w;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},19083,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var n={ESCAPE_REGEX:function(){return o},htmlEscapeAttributeString:function(){return c},htmlEscapeJsonString:function(){return u}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},o=/[&><\u2028\u2029]/g,s={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},l=/[&"'<>]/g;function u(e){return e.replace(o,e=>a[e])}function c(e){return e.replace(l,e=>s[e])}},3514,e=>{var t=e.i(47167),r=e.i(43476),n=e.i(71645),i=e.i(18566),a=e.i(3303);e.s(["default",0,function(){let e=(0,i.usePathname)(),o=(0,i.useSearchParams)(),s=(0,n.useRef)(null),l=t.default.env.UMAMI_ID,u=t.default.env.UMAMI_SRC,c=o.toString(),d=e+(c?`?${c}`:"");return((0,n.useEffect)(()=>{l&&u&&window.umami&&s.current!==d&&(s.current=d,window.umami.track(d))},[d,l,u]),l&&u)?(0,r.jsx)(a.default,{src:u,"data-website-id":l,"data-auto-track":"false",strategy:"afterInteractive",onLoad:()=>{window.umami&&s.current!==d&&(s.current=d,window.umami.track(d))}}):null}])},70151,e=>{var t=e.i(43476),r=e.i(71645),n=e.i(32181),i=e.i(87652),a=e.i(91994),o=e.i(2806);let s={stiffness:350,damping:32,mass:.35};e.s(["CustomCursor",0,()=>{let{soundEnabled:e}=(0,o.P)(),l=(0,i.f)(-100),u=(0,i.f)(-100),c=(0,a.f)(l,s),d=(0,a.f)(u,s),[f,m]=(0,r.useState)(!1),[p,h]=(0,r.useState)(!1),g=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e=>{if("mouse"!==e.pointerType)return;l.set(e.clientX),u.set(e.clientY),h(!0);let t=e.target;t instanceof Element&&m(!!t.closest("a,button,[role='button'],input,textarea,select,label,[data-cursor='interactive']"))},r=e=>{"mouse"===e.pointerType&&(h(!1),m(!1))},n=e=>{"mouse"===e.pointerType&&h(!0)},i=()=>{if(!e)return;g.current?.pause();let t=new Audio("/assets/click.wav");t.volume=.3,g.current=t,t.play().catch(()=>{})};return window.addEventListener("pointermove",t,{passive:!0}),document.documentElement.addEventListener("pointerleave",r),document.documentElement.addEventListener("pointerenter",n),window.addEventListener("click",i),!e&&g.current&&(g.current.pause(),g.current.currentTime=0,g.current=null),()=>{window.removeEventListener("pointermove",t),document.documentElement.removeEventListener("pointerleave",r),document.documentElement.removeEventListener("pointerenter",n),window.removeEventListener("click",i)}},[l,u,e]),(0,t.jsx)(n.f.div,{"aria-hidden":"true",className:"pointer-events-none fixed top-0 left-0 z-9999 hidden rounded-full bg-white mix-blend-difference md:block",animate:{width:f?56:12,height:f?56:12,opacity:+!!p},transition:{width:{type:"spring",stiffness:300,damping:24},height:{type:"spring",stiffness:300,damping:24},opacity:{duration:.15}},style:{x:c,y:d,translateX:"-50%",translateY:"-50%"}})}])},71664,e=>{var t=e.i(43476),r=e.i(71645),n=e.i(22016),i=e.i(32181),a=e.i(87652),o=e.i(91994),s=e.i(95420),l=e.i(56420);let u={name:"circle-user-round",size:24,node:[["path",{d:"M17.925 20.056a6 6 0 0 0-11.851.001",key:"z69sun"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["user-circle-2"]};u.node;let c=(0,l.f)(u);var d=e.i(36037);let f={name:"briefcase",size:24,node:[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};f.node;let m=(0,l.f)(f);var p=e.i(79862),h=e.i(97708),g=e.i(58410);let v=[{id:1,name:"Home",icon:({className:e})=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:(0,p.f)("lucide lucide-house size-full overflow-hidden rounded-sm object-contain",e),"aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),(0,t.jsx)("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),value:"/"},{id:2,name:"Experience",icon:m,value:"/work"},{id:3,name:"Projects",icon:h.f,value:"/projects"},{id:4,name:"Resume",icon:d.f,value:"https://drive.google.com/file/d/1ZKZkrltONeVqQ4238UbZ5IHSVpFeZGAL/view?usp=sharing"},{id:5,name:"Contact",icon:c,value:"/contact"}];g.f;var y=e.i(74080),w=e.i(63178);let b={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};b.node;let x=(0,l.f)(b),k={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};k.node;let E=(0,l.f)(k);var $=e.i(31178),S=e.i(47414),T=e.i(74008),C=e.i(21476),_=e.i(72846),j=r,A=e.i(37806);function I(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class P extends j.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if((0,_.f)(t)&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,r=(0,_.f)(e)&&e.offsetWidth||0,n=(0,_.f)(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=r-a.width-a.left,a.bottom=n-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function L({children:e,isPresent:n,anchorX:i,anchorY:a,root:o,pop:s}){let l=(0,j.useId)(),u=(0,j.useRef)(null),c=(0,j.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:d}=(0,j.useContext)(A.f),f=function(...e){return r.useCallback(function(...e){return t=>{let r=!1,n=e.map(e=>{let n=I(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():I(e[t],null)}}}}(...e),e)}(u,!1!==s?e.props?.ref??e?.ref:void 0);return(0,j.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:f,right:m,bottom:p,direction:h}=c.current;if(n||!1===s||!u.current||!e||!t)return;let g="rtl"===h,v="left"===i?g?`right: ${m}`:`left: ${f}`:g?`left: ${f}`:`right: ${m}`,y="bottom"===a?`bottom: ${p}`:`top: ${r}`,w=u.current;w.dataset.motionPopId=l;let b=w.ownerDocument,x=b.createElement("style");d&&(x.nonce=d);let k=o??b.head;return k.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${v}px !important;
            ${y}px !important;
          }
        `),()=>{u.current?.removeAttribute("data-motion-pop-id"),k.contains(x)&&k.removeChild(x)}},[n]),(0,t.jsx)(P,{isPresent:n,childRef:u,sizeRef:c,pop:s,children:!1===s?e:j.cloneElement(e,{ref:f})})}let O=({children:e,initial:n,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l,anchorX:u,anchorY:c,root:d})=>{let f=(0,S.f)(R),m=(0,r.useId)(),p=(0,r.useRef)(i),h=(0,r.useRef)(a);(0,T.f)(()=>{p.current=i,h.current=a});let g=!0,v=(0,r.useMemo)(()=>(g=!1,{id:m,initial:n,isPresent:i,custom:o,onExitComplete:e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;a&&a()},register:e=>(f.set(e,!1),()=>{f.delete(e),p.current||f.size||h.current?.()})}),[i,f,a]);return s&&g&&(v={...v}),(0,r.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[i]),r.useEffect(()=>{i||f.size||!a||a()},[i]),e=(0,t.jsx)(L,{pop:"popLayout"===l,isPresent:i,anchorX:u,anchorY:c,root:d,children:e}),(0,t.jsx)(C.f.Provider,{value:v,children:e})};function R(){return new Map}var M=e.i(64978);let N=e=>e.key||"";function z(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}let B=({children:e,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:s="sync",propagate:l=!1,anchorX:u="left",anchorY:c="top",root:d})=>{let[f,m]=(0,M.f)(l),p=(0,r.useMemo)(()=>z(e),[e]),h=l&&!f?[]:p.map(N),g=(0,r.useRef)(!0),v=(0,S.f)(()=>new Map),y=(0,r.useRef)(new Set),[w,b]=(0,r.useState)(p),[x,k]=(0,r.useState)(p);(0,T.f)(()=>{!l||f||x.length||m?.()},[f,l,x.length,m]),(0,T.f)(()=>{g.current=!1;for(let e=0;e<x.length;e++){let t=N(x[e]);h.includes(t)?(v.delete(t),y.current.delete(t)):!0!==v.get(t)&&v.set(t,!1)}},[x,h.length,h.join("-")]);let E=[];if(p!==w){let e=[...p],t=0;for(let r of x){let n=h.indexOf(N(r));-1===n?(e.splice(t++,0,r),E.push(r)):t=n+E.length+1}return E.every(e=>v.get(N(e)))?e=p:"wait"===s&&(e=E),k(z(e)),b(p),null}let{forceRender:C}=(0,r.useContext)($.f);return(0,t.jsx)(t.Fragment,{children:x.map(e=>{let r=N(e),w=(!l||!!f)&&(p===x||h.includes(r));return(0,t.jsx)(O,{isPresent:w,initial:(!g.current||!!i)&&void 0,custom:n,presenceAffectsLayout:o,mode:s,root:d,onExitComplete:w?void 0:()=>{if(y.current.has(r)||!v.has(r))return;y.current.add(r),v.set(r,!0);let e=!0;v.forEach(t=>{t||(e=!1)}),e&&(C?.(),b([]),l&&m?.(),a&&a())},anchorX:u,anchorY:c,children:e},r)})})},V=({className:e="",variant:n="circle",start:a="center",blur:o=!1})=>{let{isDark:s,toggleTheme:l,changeThemeWithoutAnimation:u}=(({variant:e="circle",start:t="center",blur:n=!1})=>{let{setTheme:i,resolvedTheme:a}=(0,w.i)(),o="dark"===a,s=(0,r.useCallback)(e=>{if("u"<typeof document)return;let t=document.getElementById("theme-transition-styles");t||((t=document.createElement("style")).id="theme-transition-styles",document.head.appendChild(t)),t.textContent=e},[]),l=(0,r.useCallback)(r=>{(s(H(e,t,n).css),"u"<typeof document||"function"!=typeof document.startViewTransition)?i(r):document.startViewTransition(()=>{(0,y.flushSync)(()=>{i(r)})})},[i,e,t,n,s]),u=(0,r.useCallback)(()=>{i("dark"===a?"light":"dark")},[i,a]),c=(0,r.useCallback)(()=>{l("dark"===a?"light":"dark")},[l,a]);return{isDark:o,toggleTheme:c,setCrazyLightTheme:(0,r.useCallback)(()=>{l("light")},[l]),setCrazyDarkTheme:(0,r.useCallback)(()=>{l("dark")},[l]),changeThemeWithoutAnimation:u}})({variant:n,start:a,blur:o});(0,r.useEffect)(()=>{let e=e=>{"d"!==e.key.toLowerCase()||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement||e.ctrlKey||e.metaKey||e.altKey||u()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[l]);let c=(0,r.useSyncExternalStore)(()=>()=>{},()=>!0,()=>!1);return(0,t.jsx)("button",{type:"button",onClick:l,"aria-label":"Toggle theme","aria-pressed":!!c&&s,className:(0,p.f)("group flex size-full cursor-pointer items-center justify-center",e),children:(0,t.jsx)(B,{mode:"wait",initial:!1,children:(0,t.jsx)(B,{mode:"wait",initial:!1,children:c&&(s?(0,t.jsx)(i.f.span,{initial:{opacity:0,rotate:-45,scale:.7},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:45,scale:.7},transition:{duration:.2,ease:"easeOut"},className:"flex items-center justify-center",children:(0,t.jsx)(E,{className:"text-neutral-300 transition-colors group-hover:text-indigo-400",strokeWidth:1.5})},"sun"):(0,t.jsx)(i.f.span,{initial:{opacity:0,rotate:45,scale:.7},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:-45,scale:.7},transition:{duration:.2,ease:"easeOut"},className:"flex items-center justify-center",children:(0,t.jsx)(x,{className:"text-neutral-500 transition-colors group-hover:text-orange-400",strokeWidth:1.5})},"moon"))})})})},F=e=>{switch(e){case"top-left":return{cx:"0",cy:"0"};case"top-right":return{cx:"40",cy:"0"};case"bottom-left":return{cx:"0",cy:"40"};case"bottom-right":return{cx:"40",cy:"40"};case"top-center":return{cx:"20",cy:"0"};case"bottom-center":return{cx:"20",cy:"40"};case"bottom-up":case"top-down":case"left-right":case"right-left":return{cx:"20",cy:"20"}}},H=(e,t="center",r=!1)=>{let n=((e,t)=>{if("circle-blur"===e){if("center"===t)return'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="20" cy="20" r="18" fill="white" filter="url(%23blur)"/></svg>';let e=F(t);if(!e)throw Error(`Invalid start position: ${t}`);let{cx:r,cy:n}=e;return`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="${r}" cy="${n}" r="18" fill="white" filter="url(%23blur)"/></svg>`}if("center"===t)return;if("rectangle"===e)return"";let r=F(t);if(!r)throw Error(`Invalid start position: ${t}`);let{cx:n,cy:i}=r;return"circle"===e?`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="${n}" cy="${i}" r="20" fill="white"/></svg>`:""})(e,t),i=(e=>{switch(e){case"top-left":return"top left";case"top-right":return"top right";case"bottom-left":return"bottom left";case"bottom-right":return"bottom right";case"top-center":return"top center";case"bottom-center":return"bottom center";case"bottom-up":case"top-down":case"left-right":case"right-left":return"center"}})(t);if("rectangle"===e){let n=(e=>{switch(e){case"bottom-up":default:return{from:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"top-down":return{from:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"left-right":return{from:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"right-left":return{from:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"top-left":return{from:"polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"top-right":return{from:"polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"bottom-left":return{from:"polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"bottom-right":return{from:"polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}}})(t);return{name:`${e}-${t}${r?"-blur":""}`,css:`

       ::view-transition-group(root) {

        animation-duration: 0.7s;

        animation-timing-function: var(--expo-out);

      }

      ::view-transition-new(root) {

        animation-name: reveal-light-${t}${r?"-blur":""};

        ${r?"filter: blur(2px);":""}

      }

      ::view-transition-old(root),

      .dark::view-transition-old(root) {

        animation: none;

        z-index: -1;

      }

      .dark::view-transition-new(root) {

        animation-name: reveal-dark-${t}${r?"-blur":""};

        ${r?"filter: blur(2px);":""}

      }

      @keyframes reveal-dark-${t}${r?"-blur":""} {

        from {

          clip-path: ${n.from};

          ${r?"filter: blur(8px);":""}

        }

        ${r?"50% { filter: blur(4px); }":""}

        to {

          clip-path: ${n.to};

          ${r?"filter: blur(0px);":""}

        }

      }

      @keyframes reveal-light-${t}${r?"-blur":""} {

        from {

          clip-path: ${n.from};

          ${r?"filter: blur(8px);":""}

        }

        ${r?"50% { filter: blur(4px); }":""}

        to {

          clip-path: ${n.to};

          ${r?"filter: blur(0px);":""}

        }

      }

      `}}if("circle"===e&&"center"===t)return{name:`${e}-${t}${r?"-blur":""}`,css:`

       ::view-transition-group(root) {

        animation-duration: 0.7s;

        animation-timing-function: var(--expo-out);

      }

      ::view-transition-new(root) {

        animation-name: reveal-light${r?"-blur":""};

        ${r?"filter: blur(2px);":""}

      }

      ::view-transition-old(root),

      .dark::view-transition-old(root) {

        animation: none;

        z-index: -1;

      }

      .dark::view-transition-new(root) {

        animation-name: reveal-dark${r?"-blur":""};

        ${r?"filter: blur(2px);":""}

      }

      @keyframes reveal-dark${r?"-blur":""} {

        from {

          clip-path: circle(0% at 50% 50%);

          ${r?"filter: blur(8px);":""}

        }

        ${r?"50% { filter: blur(4px); }":""}

        to {

          clip-path: circle(100.0% at 50% 50%);

          ${r?"filter: blur(0px);":""}

        }

      }

      @keyframes reveal-light${r?"-blur":""} {

        from {

           clip-path: circle(0% at 50% 50%);

           ${r?"filter: blur(8px);":""}

        }

        ${r?"50% { filter: blur(4px); }":""}

        to {

          clip-path: circle(100.0% at 50% 50%);

          ${r?"filter: blur(0px);":""}

        }

      }

      `};if("circle-blur"===e)return"center"===t?{name:`${e}-${t}`,css:`

        ::view-transition-group(root) {

          animation-timing-function: var(--expo-out);

        }

        ::view-transition-new(root) {

          mask: url('${n}') center / 0 no-repeat;

          mask-origin: content-box;

          animation: scale 1s;

          transform-origin: center;

        }

        ::view-transition-old(root),

        .dark::view-transition-old(root) {

          animation: scale 1s;

          transform-origin: center;

          z-index: -1;

        }

        @keyframes scale {

          to {

            mask-size: 350vmax;

          }

        }

        `}:{name:`${e}-${t}`,css:`

      ::view-transition-group(root) {

        animation-timing-function: var(--expo-out);

      }

      ::view-transition-new(root) {

        mask: url('${n}') ${t.replace("-"," ")} / 0 no-repeat;

        mask-origin: content-box;

        animation: scale 1s;

        transform-origin: ${i};

      }

      ::view-transition-old(root),

      .dark::view-transition-old(root) {

        animation: scale 1s;

        transform-origin: ${i};

        z-index: -1;

      }

      @keyframes scale {

        to {

          mask-size: 350vmax;

        }

      }

      `};if("polygon"===e){let n=(e=>{switch(e){case"top-left":default:return{darkFrom:"polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%)",darkTo:"polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%)",lightFrom:"polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%)",lightTo:"polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%)"};case"top-right":return{darkFrom:"polygon(150% -71%, 250% 71%, 250% 71%, 150% -71%)",darkTo:"polygon(150% -71%, 250% 71%, 50% 171%, -71% 50%)",lightFrom:"polygon(-71% 50%, 50% 171%, 50% 171%, -71% 50%)",lightTo:"polygon(-71% 50%, 50% 171%, 250% 71%, 150% -71%)"}}})(t);return{name:`${e}-${t}${r?"-blur":""}`,css:`

      ::view-transition-group(root) {

        animation-duration: 0.7s;

        animation-timing-function: var(--expo-out);

      }

      ::view-transition-new(root) {

        animation-name: reveal-light-${t}${r?"-blur":""};

        ${r?"filter: blur(2px);":""}

      }

      ::view-transition-old(root),

      .dark::view-transition-old(root) {

        animation: none;

        z-index: -1;

      }

      .dark::view-transition-new(root) {

        animation-name: reveal-dark-${t}${r?"-blur":""};

        ${r?"filter: blur(2px);":""}

      }

      @keyframes reveal-dark-${t}${r?"-blur":""} {

        from {

          clip-path: ${n.darkFrom};

          ${r?"filter: blur(8px);":""}

        }

        ${r?"50% { filter: blur(4px); }":""}

        to {

          clip-path: ${n.darkTo};

          ${r?"filter: blur(0px);":""}

        }

      }

      @keyframes reveal-light-${t}${r?"-blur":""} {

        from {

          clip-path: ${n.lightFrom};

          ${r?"filter: blur(8px);":""}

        }

        ${r?"50% { filter: blur(4px); }":""}

        to {

          clip-path: ${n.lightTo};

          ${r?"filter: blur(0px);":""}

        }

      }

      `}}if("circle"===e&&"center"!==t){let n=(e=>{switch(e){case"top-left":return"0% 0%";case"top-right":return"100% 0%";case"bottom-left":return"0% 100%";case"bottom-right":return"100% 100%";case"top-center":return"50% 0%";case"bottom-center":return"50% 100%";default:return"50% 50%"}})(t);return{name:`${e}-${t}${r?"-blur":""}`,css:`

       ::view-transition-group(root) {

        animation-duration: 1s;

        animation-timing-function: var(--expo-out);

      }

      ::view-transition-new(root) {

        animation-name: reveal-light-${t}${r?"-blur":""};

        ${r?"filter: blur(2px);":""}

      }

      ::view-transition-old(root),

      .dark::view-transition-old(root) {

        animation: none;

        z-index: -1;

      }

      .dark::view-transition-new(root) {

        animation-name: reveal-dark-${t}${r?"-blur":""};

        ${r?"filter: blur(2px);":""}

      }

      @keyframes reveal-dark-${t}${r?"-blur":""} {

        from {

          clip-path: circle(0% at ${n});

          ${r?"filter: blur(8px);":""}

        }

        ${r?"50% { filter: blur(4px); }":""}

        to {

          clip-path: circle(150.0% at ${n});

          ${r?"filter: blur(0px);":""}

        }

      }

      @keyframes reveal-light-${t}${r?"-blur":""} {

        from {

           clip-path: circle(0% at ${n});

           ${r?"filter: blur(8px);":""}

        }

        ${r?"50% { filter: blur(4px); }":""}

        to {

          clip-path: circle(150.0% at ${n});

          ${r?"filter: blur(0px);":""}

        }

      }

      `}}return{name:`${e}-${t}${r?"-blur":""}`,css:`

      ::view-transition-group(root) {

        animation-timing-function: var(--expo-in);

      }

      ::view-transition-new(root) {

        mask: url('${n}') ${t.replace("-"," ")} / 0 no-repeat;

        mask-origin: content-box;

        animation: scale-${t}${r?"-blur":""} 1s;

        transform-origin: ${i};

        ${r?"filter: blur(2px);":""}

      }

      ::view-transition-old(root),

      .dark::view-transition-old(root) {

        animation: scale-${t}${r?"-blur":""} 1s;

        transform-origin: ${i};

        z-index: -1;

      }

      @keyframes scale-${t}${r?"-blur":""} {

        from {

          ${r?"filter: blur(8px);":""}

        }

        ${r?"50% { filter: blur(4px); }":""}

        to {

          mask-size: 2000vmax;

          ${r?"filter: blur(0px);":""}

        }

      }

    `}},q={mass:.2,stiffness:300,damping:22},W=({mouseX:e,children:a,href:l,label:u})=>{let[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),m=(0,s.f)(e,e=>{let t=f.current?.getBoundingClientRect();return t&&Number.isFinite(e)?Math.abs(e-(t.left+t.width/2)):999}),p=(0,s.f)(m,[0,40,80,120],[1.18,1.1,1.04,1]),h=(0,s.f)(m,[0,40,80,120],[38,36,34,32]),g=(0,o.f)(p,q),v=(0,o.f)(h,q),y="group flex size-8 shrink-0 items-center justify-center rounded-2xl bg-white text-neutral-500 shadow-[inset_1px_1px_4px_rgba(0,0,0,0.1)] ring ring-neutral-200 transition-colors duration-200 hover:text-orange-500 hover:ring-orange-400 dark:bg-neutral-700 dark:text-neutral-300 dark:ring-neutral-700 dark:hover:text-indigo-400 dark:hover:ring-indigo-400";return(0,t.jsxs)(i.f.div,{ref:f,style:{width:v},className:"relative flex h-8 shrink-0 items-center justify-center",onHoverStart:()=>d(!0),onHoverEnd:()=>d(!1),children:[(0,t.jsx)(i.f.div,{style:{scale:g,transformOrigin:"bottom center"},className:"flex size-8 shrink-0 items-center justify-center",children:l?(0,t.jsx)(n.default,{href:l,"aria-label":u,target:l.startsWith("http")?"_blank":void 0,rel:l.startsWith("http")?"noopener noreferrer":void 0,className:y,children:a}):(0,t.jsx)("div",{className:y,children:a})}),c&&(0,t.jsx)(i.f.span,{initial:{opacity:0,y:5,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.18},className:"pointer-events-none absolute bottom-full left-1/2 z-100 mb-4 -translate-x-1/2 rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white shadow-lg after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[5px] after:border-transparent after:border-t-neutral-900 dark:bg-white dark:text-neutral-900 dark:after:border-t-white",children:u})]})};e.s(["Navbar",0,()=>{let e=(0,a.f)(1/0);return(0,t.jsxs)(i.f.nav,{onMouseMove:t=>e.set(t.clientX),onMouseLeave:()=>e.set(1/0),layout:!0,transition:{layout:q},"aria-label":"Main navigation",className:"fixed bottom-3 left-1/2 z-999 flex h-11 w-max -translate-x-1/2 items-center gap-2 rounded-2xl bg-white p-1.5 text-neutral-900 shadow-sm ring ring-neutral-200 md:bottom-4 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700",children:[(0,t.jsx)("div",{className:"flex items-center gap-2",children:v.map(r=>{let n=r.icon;return(0,t.jsx)(W,{mouseX:e,href:r.value,label:r.name,children:(0,t.jsx)(n,{className:"size-5 transition-colors"})},r.id)})}),(0,t.jsx)("div",{className:"h-full w-[1.5px] shrink-0 bg-linear-to-b from-transparent via-neutral-300 to-transparent dark:via-neutral-600"}),(0,t.jsx)(W,{mouseX:e,label:"Toggle theme",children:(0,t.jsx)(V,{variant:"circle",start:"bottom-center"})})]})}],71664)},77163,e=>{var t=e.i(43476),r=e.i(71645),n=e.i(18566),i=e.i(32181);e.s(["NavigationProgress",0,function(){let e=(0,n.usePathname)(),[a,o]=(0,r.useState)("idle"),[s,l]=(0,r.useState)(0),u=(0,r.useRef)(e),c=(0,r.useRef)(null),d=(0,r.useCallback)(()=>{c.current&&(clearTimeout(c.current),c.current=null),l(0),o("loading"),requestAnimationFrame(()=>{l(75)})},[]);return(0,r.useEffect)(()=>{let e=e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target;if(!(t instanceof Element))return;let r=t.closest("a");if(!r||"_blank"===r.target||r.hasAttribute("download"))return;let n=new URL(r.href,window.location.href);if(n.origin!==window.location.origin)return;let i=new URL(window.location.href);(n.pathname!==i.pathname||n.search!==i.search||n.hash!==i.hash)&&d()};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[d]),(0,r.useEffect)(()=>{if(u.current!==e)return u.current=e,l(100),o("complete"),c.current=setTimeout(()=>{o("idle"),l(0),c.current=null},300),()=>{c.current&&(clearTimeout(c.current),c.current=null)}},[e]),(0,r.useEffect)(()=>()=>{c.current&&clearTimeout(c.current)},[]),(0,t.jsx)(i.f.div,{"aria-hidden":"true",className:"pointer-events-none fixed inset-x-0 top-0 z-9999 h-0.5",initial:!1,animate:{opacity:+("idle"!==a)},transition:{duration:.15},children:(0,t.jsx)(i.f.div,{className:"h-full bg-black shadow-[0_0_8px_rgba(255,255,255,0.65)] dark:bg-white",initial:!1,animate:{width:`${s}%`},transition:{duration:"complete"===a?.15:.4,ease:"easeOut"}})})}])},43539,e=>{var t=e.i(71645);let r=new Set(["chatgpt.com","claude.ai","grok.com","x.ai","gemini.google.com","perplexity.ai"]);e.s(["default",0,function(){return(0,t.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("utm_source")?.toLowerCase();if(!e||!r.has(e)||window.matchMedia("(prefers-reduced-motion: reduce)").matches||sessionStorage.getItem("swarm-played"))return;let t=!1,n=()=>{if(t||document.getElementById("swarm-script"))return;sessionStorage.setItem("swarm-played","1");let e=document.createElement("script");e.id="swarm-script",e.src="/swarm.js",e.async=!0,document.body.appendChild(e)};return"complete"===document.readyState?setTimeout(n,800):window.addEventListener("load",()=>setTimeout(n,800),{once:!0}),()=>{t=!0}},[]),null}])},54980,e=>{var t=e.i(43476),r=e.i(71645);let n=()=>()=>{};e.s(["CurrentYear",0,function(){let e=(0,r.useSyncExternalStore)(n,()=>new Date().getFullYear(),()=>null);return(0,t.jsx)(t.Fragment,{children:e})}])},2806,e=>{var t=e.i(43476),r=e.i(71645);let n=(0,r.createContext)({soundEnabled:!0,setSoundEnabled:e=>{}});e.s(["O",0,({children:e})=>{let[i,a]=(0,r.useState)(!0);return(0,t.jsx)(n.Provider,{value:{soundEnabled:i,setSoundEnabled:a},children:e})},"P",0,()=>(0,r.useContext)(n)])},77255,e=>{var t=e.i(43476),r=e.i(2806),n=e.i(63178);let i=({children:e})=>(0,t.jsx)(n.J,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:e});e.s(["AppProviders",0,function({children:e}){return(0,t.jsx)(i,{children:(0,t.jsx)(r.O,{children:e})})}],77255)}],18566,(e,t,r)=>{t.exports=e.r(76562)},3303,(e,t,r)=>{t.exports=e.r(79520)}]);