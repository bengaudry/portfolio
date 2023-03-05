(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();function C(){}function Ge(t){return t()}function qe(){return Object.create(null)}function se(t){t.forEach(Ge)}function De(t){return typeof t=="function"}function O(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let fe;function re(t,e){return fe||(fe=document.createElement("a")),fe.href=e,t===fe.href}function Re(t){return Object.keys(t).length===0}function l(t,e){t.appendChild(e)}function H(t,e,r){t.insertBefore(e,r||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function ne(t){return document.createTextNode(t)}function g(){return ne(" ")}function Ae(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function s(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function Ve(t){return Array.from(t.childNodes)}function We(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Z(t,e,r,n){r===null?t.style.removeProperty(e):t.style.setProperty(e,r,n?"important":"")}let be;function te(t){be=t}const U=[],Ie=[],ue=[],Fe=[],Ye=Promise.resolve();let _e=!1;function ze(){_e||(_e=!0,Ye.then(Je))}function ye(t){ue.push(t)}const he=new Set;let Q=0;function Je(){if(Q!==0)return;const t=be;do{try{for(;Q<U.length;){const e=U[Q];Q++,te(e),Qe(e.$$)}}catch(e){throw U.length=0,Q=0,e}for(te(null),U.length=0,Q=0;Ie.length;)Ie.pop()();for(let e=0;e<ue.length;e+=1){const r=ue[e];he.has(r)||(he.add(r),r())}ue.length=0}while(U.length);for(;Fe.length;)Fe.pop()();_e=!1,he.clear(),te(t)}function Qe(t){if(t.fragment!==null){t.update(),se(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ye)}}const de=new Set;let Ue;function b(t,e){t&&t.i&&(de.delete(t),t.i(e))}function x(t,e,r,n){if(t&&t.o){if(de.has(t))return;de.add(t),Ue.c.push(()=>{de.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}else n&&n()}function S(t){t&&t.c()}function $(t,e,r,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,r),n||ye(()=>{const d=t.$$.on_mount.map(Ge).filter(De);t.$$.on_destroy?t.$$.on_destroy.push(...d):se(d),t.$$.on_mount=[]}),i.forEach(ye)}function w(t,e){const r=t.$$;r.fragment!==null&&(se(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function Ze(t,e){t.$$.dirty[0]===-1&&(U.push(t),ze(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(t,e,r,n,a,i,d,f=[-1]){const o=be;te(t);const c=t.$$={fragment:null,ctx:[],props:i,update:C,not_equal:a,bound:qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:qe(),dirty:f,skip_bound:!1,root:e.target||o.$$.root};d&&d(c.root);let m=!1;if(c.ctx=r?r(t,e.props||{},(v,k,...h)=>{const _=h.length?h[0]:k;return c.ctx&&a(c.ctx[v],c.ctx[v]=_)&&(!c.skip_bound&&c.bound[v]&&c.bound[v](_),m&&Ze(t,v)),k}):[],c.update(),m=!0,se(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const v=Ve(e.target);c.fragment&&c.fragment.l(v),v.forEach(T)}else c.fragment&&c.fragment.c();e.intro&&b(t.$$.fragment),$(t,e.target,e.anchor,e.customElement),Je()}te(o)}class q{$destroy(){w(this,1),this.$destroy=C}$on(e,r){if(!De(r))return C;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const a=n.indexOf(r);a!==-1&&n.splice(a,1)}}$set(e){this.$$set&&!Re(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function et(t){let e,r;return{c(){e=u("img"),re(e.src,r="../../../public/arrow.svg")||s(e,"src",r),s(e,"alt","\u2192"),s(e,"class","arrow-right svelte-gat2gj")},m(n,a){H(n,e,a)},d(n){n&&T(e)}}}function tt(t){let e,r;return{c(){e=u("img"),re(e.src,r="../../../public/arrow.svg")||s(e,"src",r),s(e,"alt","\u2197"),s(e,"class","arrow-external svelte-gat2gj")},m(n,a){H(n,e,a)},d(n){n&&T(e)}}}function rt(t){let e,r;return{c(){e=u("img"),re(e.src,r="../../../public/arrow.svg")||s(e,"src",r),s(e,"alt","\u2193"),s(e,"class","arrow-bottom svelte-gat2gj")},m(n,a){H(n,e,a)},d(n){n&&T(e)}}}function nt(t){let e,r,n,a,i;function d(c,m){return c[3]==="bottom"?rt:c[3]==="external"?tt:et}let f=d(t),o=f(t);return{c(){e=u("a"),r=u("span"),n=ne(t[1]),a=g(),o.c(),s(e,"href",t[2]),s(e,"class","cta"),s(e,"style",t[0]),s(e,"rel","noopener noreferrer"),s(e,"target",i=t[3]==="external"?"_blank":"_self")},m(c,m){H(c,e,m),l(e,r),l(r,n),l(e,a),o.m(e,null)},p(c,[m]){m&2&&We(n,c[1]),f!==(f=d(c))&&(o.d(1),o=f(c),o&&(o.c(),o.m(e,null))),m&4&&s(e,"href",c[2]),m&1&&s(e,"style",c[0]),m&8&&i!==(i=c[3]==="external"?"_blank":"_self")&&s(e,"target",i)},i:C,o:C,d(c){c&&T(e),o.d()}}}function st(t,e,r){let{customStyle:n=void 0}=e,{content:a}=e,{href:i}=e,{direction:d=void 0}=e;return t.$$set=f=>{"customStyle"in f&&r(0,n=f.customStyle),"content"in f&&r(1,a=f.content),"href"in f&&r(2,i=f.href),"direction"in f&&r(3,d=f.direction)},[n,a,i,d]}class Ke extends q{constructor(e){super(),P(this,e,st,nt,O,{customStyle:0,content:1,href:2,direction:3})}}function lt(t){let e,r,n,a,i,d,f,o,c,m,v,k,h,_;return h=new Ke({props:{content:"Discover",customStyle:"margin: 0 auto; margin-top: 2rem; animation: fade-in 500ms ease-out forwards; animation-delay: 600ms; opacity: 0; transform: translateY(10%);",direction:"bottom",href:"#skills"}}),{c(){e=u("section"),r=u("div"),n=g(),a=u("div"),i=g(),d=u("div"),f=g(),o=u("div"),c=u("h1"),c.innerHTML=`Hey ! I&#39;m Ben
      <br/>
      a junior dev`,m=g(),v=u("p"),v.textContent="Based in France | 17 years old | Front-end dev",k=g(),S(h.$$.fragment),s(r,"class","bubble"),s(a,"class","bubble"),s(d,"class","bubble"),s(c,"class","hero-main-sentence svelte-145d6xa"),s(v,"class","hero-characteristics svelte-145d6xa"),s(o,"class","responsive"),s(e,"class","hero svelte-145d6xa")},m(y,B){H(y,e,B),l(e,r),l(e,n),l(e,a),l(e,i),l(e,d),l(e,f),l(e,o),l(o,c),l(o,m),l(o,v),l(o,k),$(h,o,null),_=!0},p:C,i(y){_||(b(h.$$.fragment,y),_=!0)},o(y){x(h.$$.fragment,y),_=!1},d(y){y&&T(e),w(h)}}}class at extends q{constructor(e){super(),P(this,e,null,lt,O,{})}}function it(t){let e,r,n,a,i,d;return{c(){e=u("header"),r=u("div"),n=u("div"),a=g(),i=u("div"),i.innerHTML=`<div class="title svelte-65ic65"><a href="#top" class="svelte-65ic65">@ben.gaudry</a></div> 
    <nav class="top-bar-nav"><ul class="top-bar-items"><li class="top-bar-item"><a href="#top" class="top-bar-link">Home</a></li> 
        <li class="top-bar-item"><a href="#skills" class="top-bar-link">Skills</a></li> 
        <li class="top-bar-item"><a href="#contact" class="top-bar-link">Contact</a></li></ul></nav>`,s(n,"class","scrollbar svelte-65ic65"),Z(n,"width",t[0]+"%"),s(r,"class","scrollbar-track svelte-65ic65"),s(i,"class","responsive"),s(e,"class",d="top-bar "+(t[1]?"scrolled-top-bar":""))},m(f,o){H(f,e,o),l(e,r),l(r,n),l(e,a),l(e,i)},p(f,[o]){o&1&&Z(n,"width",f[0]+"%"),o&2&&d!==(d="top-bar "+(f[1]?"scrolled-top-bar":""))&&s(e,"class",d)},i:C,o:C,d(f){f&&T(e)}}}function ct(t,e,r){let{percent:n=0}=e;var a=!1;return document.addEventListener("DOMContentLoaded",function(){r(1,a=document.documentElement.scrollTop>50)}),document.addEventListener("scroll",function(){r(1,a=document.documentElement.scrollTop>50)}),t.$$set=i=>{"percent"in i&&r(0,n=i.percent)},[n,a]}class ot extends q{constructor(e){super(),P(this,e,ct,it,O,{percent:0})}}function ft(t){let e,r,n,a,i,d;return{c(){e=u("div"),r=u("span"),n=ne(t[0]),a=g(),i=u("div"),d=u("div"),s(r,"class","label secondary-text"),s(d,"class","progress-bar-fg svelte-5qfrxs"),Z(d,"width",t[1]+"%"),s(i,"class","progress-bar-bg svelte-5qfrxs"),s(e,"class","progress-container svelte-5qfrxs")},m(f,o){H(f,e,o),l(e,r),l(r,n),l(e,a),l(e,i),l(i,d)},p(f,[o]){o&1&&We(n,f[0]),o&2&&Z(d,"width",f[1]+"%")},i:C,o:C,d(f){f&&T(e)}}}function ut(t,e,r){let{label:n}=e,{percent:a}=e;return t.$$set=i=>{"label"in i&&r(0,n=i.label),"percent"in i&&r(1,a=i.percent)},[n,a]}class N extends q{constructor(e){super(),P(this,e,ut,ft,O,{label:0,percent:1})}}function dt(t){let e,r,n,a,i,d,f,o,c,m,v,k,h,_,y,B,$e,A,I,we,le,ke,F,xe,ae,Se,me,Xe,G,X,D,Ee,W,Le,J,Ce,K,ie,Te,E,R,He,V,je,Y,Be,z,ce,Me,M,ge,Ne,pe,Oe,ee,oe,L,ve,Pe;return D=new N({props:{percent:85,label:"Typescript"}}),W=new N({props:{percent:95,label:"JavaScript"}}),J=new N({props:{percent:55,label:"React"}}),K=new N({props:{percent:70,label:"Svelte"}}),R=new N({props:{percent:60,label:"Figma"}}),V=new N({props:{percent:100,label:"Css & Scss"}}),Y=new N({props:{percent:90,label:"Tailwind"}}),z=new N({props:{percent:70,label:"Bootstrap"}}),{c(){e=u("section"),r=u("div"),n=u("div"),n.innerHTML=`<h2 class="svelte-gahrd">Skills</h2> 
      <p class="secondary-text svelte-gahrd">I started learning code 4 years ago, consequently, I am now pretty
        advanced in multiple languages and technologies. Here is a resume of my
        skills.</p>`,a=g(),i=u("div"),d=u("div"),f=u("div"),o=u("button"),c=u("img"),k=g(),h=u("button"),_=u("img"),$e=g(),A=u("div"),I=u("span"),we=ne("/ scripts"),ke=g(),F=u("span"),xe=ne("/ styles"),Se=g(),me=u("div"),Xe=g(),G=u("div"),X=u("div"),S(D.$$.fragment),Ee=g(),S(W.$$.fragment),Le=g(),S(J.$$.fragment),Ce=g(),S(K.$$.fragment),Te=g(),E=u("div"),S(R.$$.fragment),He=g(),S(V.$$.fragment),je=g(),S(Y.$$.fragment),Be=g(),S(z.$$.fragment),Me=g(),M=u("div"),ge=u("div"),Ne=g(),pe=u("div"),Oe=g(),ee=u("div"),s(n,"class","side svelte-gahrd"),re(c.src,m="/arrow.svg")||s(c,"src",m),s(c,"alt","->"),Z(c,"transform","rotate(90deg)"),s(o,"class","slider-btn svelte-gahrd"),s(o,"style",v=t[0]===0?"opacity: .4":"opacity: 1;"),re(_.src,y="/arrow.svg")||s(_,"src",y),s(_,"alt","<-"),Z(_,"transform","rotate(-90deg)"),s(h,"class","slider-btn svelte-gahrd"),s(h,"style",B=t[0]===1?"opacity: .4":"opacity: 1;"),s(f,"class","btn-container svelte-gahrd"),s(I,"style",le=t[0]===0?"transform: translateX(0);":"transform: translateX(-100%)"),s(I,"class","svelte-gahrd"),s(F,"style",ae=t[0]===1?"transform: translateX(0);":"transform: translateX(100%)"),s(F,"class","svelte-gahrd"),s(A,"class","graph-title svelte-gahrd"),s(d,"class","graph-header svelte-gahrd"),s(me,"class","spacer svelte-gahrd"),s(X,"class","graph svelte-gahrd"),s(X,"style",ie=t[0]===0?"transform: scale(1) translateX(0); opacity: 1;":"transform: scale(.80) translateX(calc(-100% - 80px)); opacity: .50;"),s(E,"class","graph svelte-gahrd"),s(E,"style",ce=t[0]===1?"transform: scale(1) translateX(0); opacity: 1;":"transform: scale(.8) translateX(calc(100% + 80px)); opacity: .50;"),s(G,"class","graph-container svelte-gahrd"),s(ge,"class","svelte-gahrd"),s(pe,"class","svelte-gahrd"),s(ee,"class","dot-selector svelte-gahrd"),s(ee,"style",oe=t[0]===0?"transform: translateX(0);":"transform: translateX(calc(100% + 10px));"),s(M,"class","dots svelte-gahrd"),s(i,"class","side svelte-gahrd"),s(r,"class","responsive svelte-gahrd"),s(e,"class","skills svelte-gahrd"),s(e,"id","skills")},m(p,j){H(p,e,j),l(e,r),l(r,n),l(r,a),l(r,i),l(i,d),l(d,f),l(f,o),l(o,c),l(f,k),l(f,h),l(h,_),l(d,$e),l(d,A),l(A,I),l(I,we),l(A,ke),l(A,F),l(F,xe),l(i,Se),l(i,me),l(i,Xe),l(i,G),l(G,X),$(D,X,null),l(X,Ee),$(W,X,null),l(X,Le),$(J,X,null),l(X,Ce),$(K,X,null),l(G,Te),l(G,E),$(R,E,null),l(E,He),$(V,E,null),l(E,je),$(Y,E,null),l(E,Be),$(z,E,null),l(i,Me),l(i,M),l(M,ge),l(M,Ne),l(M,pe),l(M,Oe),l(M,ee),L=!0,ve||(Pe=[Ae(o,"click",t[1]),Ae(h,"click",t[2])],ve=!0)},p(p,[j]){(!L||j&1&&v!==(v=p[0]===0?"opacity: .4":"opacity: 1;"))&&s(o,"style",v),(!L||j&1&&B!==(B=p[0]===1?"opacity: .4":"opacity: 1;"))&&s(h,"style",B),(!L||j&1&&le!==(le=p[0]===0?"transform: translateX(0);":"transform: translateX(-100%)"))&&s(I,"style",le),(!L||j&1&&ae!==(ae=p[0]===1?"transform: translateX(0);":"transform: translateX(100%)"))&&s(F,"style",ae),(!L||j&1&&ie!==(ie=p[0]===0?"transform: scale(1) translateX(0); opacity: 1;":"transform: scale(.80) translateX(calc(-100% - 80px)); opacity: .50;"))&&s(X,"style",ie),(!L||j&1&&ce!==(ce=p[0]===1?"transform: scale(1) translateX(0); opacity: 1;":"transform: scale(.8) translateX(calc(100% + 80px)); opacity: .50;"))&&s(E,"style",ce),(!L||j&1&&oe!==(oe=p[0]===0?"transform: translateX(0);":"transform: translateX(calc(100% + 10px));"))&&s(ee,"style",oe)},i(p){L||(b(D.$$.fragment,p),b(W.$$.fragment,p),b(J.$$.fragment,p),b(K.$$.fragment,p),b(R.$$.fragment,p),b(V.$$.fragment,p),b(Y.$$.fragment,p),b(z.$$.fragment,p),L=!0)},o(p){x(D.$$.fragment,p),x(W.$$.fragment,p),x(J.$$.fragment,p),x(K.$$.fragment,p),x(R.$$.fragment,p),x(V.$$.fragment,p),x(Y.$$.fragment,p),x(z.$$.fragment,p),L=!1},d(p){p&&T(e),w(D),w(W),w(J),w(K),w(R),w(V),w(Y),w(z),ve=!1,se(Pe)}}}function mt(t,e,r){let n=0;return[n,()=>r(0,n=0),()=>r(0,n=1)]}class gt extends q{constructor(e){super(),P(this,e,mt,dt,O,{})}}function pt(t){let e,r,n,a,i,d,f,o,c,m,v,k,h,_;return f=new Ke({props:{content:"See on fiverr",href:"https://fr.fiverr.com/share/2daNGV",direction:"external",customStyle:"margin: 0 auto;"}}),{c(){e=u("section"),r=u("div"),n=u("h2"),n.textContent="Contact",a=g(),i=u("p"),i.textContent="Want to work with me ? See my gigs on fiverr !",d=g(),S(f.$$.fragment),o=g(),c=u("div"),m=g(),v=u("p"),v.innerHTML=`Want to contact me for another reason ?<br/>
      See my social networks :`,k=g(),h=u("div"),h.innerHTML=`<a href="https://www.instagram.com/ben.gaudry/" target="_blank" rel="noopener noreferrer" class="social-btn svelte-9rh1b4"><img src="/instagram.svg" alt="Instagram"/></a> 
      <a href="https://twitter.com/ben_gaudry_" target="_blank" rel="noopener noreferrer" class="social-btn svelte-9rh1b4"><img src="/twitter.svg" alt="Twitter"/></a> 
      <a href="https://github.com/BenGaudry" target="_blank" rel="noopener noreferrer" class="social-btn svelte-9rh1b4"><img src="/github.svg" alt="GitHub"/></a>`,s(n,"class","svelte-9rh1b4"),s(i,"class","svelte-9rh1b4"),s(c,"class","spacer svelte-9rh1b4"),s(v,"class","svelte-9rh1b4"),s(h,"class","socials-container svelte-9rh1b4"),s(r,"class","responsive svelte-9rh1b4"),s(e,"id","contact"),s(e,"class","svelte-9rh1b4")},m(y,B){H(y,e,B),l(e,r),l(r,n),l(r,a),l(r,i),l(r,d),$(f,r,null),l(r,o),l(r,c),l(r,m),l(r,v),l(r,k),l(r,h),_=!0},p:C,i(y){_||(b(f.$$.fragment,y),_=!0)},o(y){x(f.$$.fragment,y),_=!1},d(y){y&&T(e),w(f)}}}class vt extends q{constructor(e){super(),P(this,e,null,pt,O,{})}}function ht(t){let e,r,n,a,i,d,f,o,c;return r=new ot({props:{percent:t[0]}}),a=new at({}),d=new gt({}),o=new vt({}),{c(){e=u("main"),S(r.$$.fragment),n=g(),S(a.$$.fragment),i=g(),S(d.$$.fragment),f=g(),S(o.$$.fragment),s(e,"class","page-main")},m(m,v){H(m,e,v),$(r,e,null),l(e,n),$(a,e,null),l(e,i),$(d,e,null),l(e,f),$(o,e,null),c=!0},p(m,[v]){const k={};v&1&&(k.percent=m[0]),r.$set(k)},i(m){c||(b(r.$$.fragment,m),b(a.$$.fragment,m),b(d.$$.fragment,m),b(o.$$.fragment,m),c=!0)},o(m){x(r.$$.fragment,m),x(a.$$.fragment,m),x(d.$$.fragment,m),x(o.$$.fragment,m),c=!1},d(m){m&&T(e),w(r),w(a),w(d),w(o)}}}function _t(t,e,r){var n=0;return document.body.addEventListener("scroll",function(){r(0,n=document.body.scrollHeight/document.body.clientHeight),console.log("scroll",n)}),[n]}class yt extends q{constructor(e){super(),P(this,e,_t,ht,O,{})}}new yt({target:document.getElementById("app")});
