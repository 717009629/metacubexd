import{_ as K,k as Q,a1 as ie,i as e,c as l,S as T,d as m,a2 as y,$ as Y,N as ee,F as I,av as ce,p as le,P as oe,b as g,D as R,a0 as te,v as de}from"./vendor-8-YBH5HO.js";import{c as ue,u as j,ae as ge,af as M,ag as pe,B as D,ah as $,ai as he,aj as ve,ak as fe,al as be,am as me,an as xe,ao as _e,ap as $e,aq as Ce,ar as ke,b as ye,as as Se,at as O,au as W,av as we,aw as Ee,ad as De,ax as Te,ay as Z,az as Le,aA as J,aB as Ne,aC as Pe,aD as Ae,aE as Ie,aF as Fe,aG as Be}from"./index-DeJu0PyK.js";import{C as S}from"./ConfigTitle-CI5ujqvH.js";var Re=m('<div class="flex flex-col p-4">'),je=m('<div class="flex flex-col"><form class="flex gap-2 sm:flex-row"><input type=search name=name class="input input-bordered min-w-0 flex-1"placeholder=google.com><div class="flex items-center gap-2"><select name=type class="select select-bordered"><option>A</option><option>AAAA</option><option>MX'),Oe=m("<div class=py-2>"),Ge=m('<form class="grid grid-cols-3 gap-2 sm:grid-cols-5">'),Me=m('<div class="grid grid-cols-2 gap-2 sm:grid-cols-4"><div class=form-control><label for=enable-allow-lan class="label gap-2"><span class=label-text></span></label><input id=enable-allow-lan type=checkbox class=toggle></div><div class=form-control><label for=enable-tun-device class="label gap-2"><span class=label-text></span></label><input id=enable-tun-device type=checkbox class=toggle></div><div class=form-control><label for=tun-ip-stack class="label gap-2"><span class=label-text></span></label><select id=tun-ip-stack class="select select-bordered flex-1"><option>Mixed</option><option>gVisor</option><option>System</option><option>LWIP</option></select></div><div class=form-control><label for=device-name class="label gap-2"><span class=label-text></span></label><input id=device-name class="input input-bordered min-w-0"></div><div class=form-control><label for=interface-name class="label gap-2"><span class=label-text></span></label><input id=interface-name class="input input-bordered min-w-0">'),Qe=m('<div class="flex flex-col gap-4"><select class="select select-bordered"><option></option><option></option><option></option></select><div class="grid grid-cols-2 gap-2 sm:grid-cols-3">'),Ue=m('<div class=form-control><label class=label><span class=label-text></span></label><input type=number class="input input-bordered">'),qe=m('<div class="flex flex-col gap-2"><div class="flex flex-col"><select class="select select-bordered"></select></div><div class="flex flex-col"><select class="select select-bordered">'),Ve=m('<div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div class="flex flex-col gap-2"><div class="flex flex-col items-center"><input type=checkbox class=toggle></div><div class="flex flex-col"><select class="select select-bordered"></select></div></div><div class="flex flex-col gap-2"><div class="flex flex-col items-center"><input type=checkbox class=toggle>'),G=m("<option>"),ze=m('<span class="absolute -right-1 -top-1 flex h-3 w-3"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-info opacity-75"></span><span class="inline-flex h-3 w-3 rounded-full bg-info">'),He=m('<div class="grid grid-cols-2 gap-4"><kbd class=kbd></kbd><div class=relative><kbd class="kbd w-full">'),Xe=m('<div class="mx-auto flex max-w-screen-md flex-col gap-4">');const We=y.object({name:y.string(),type:y.string()}),Ze=()=>{const[d]=j(),t=pe(),{form:f,isSubmitting:h}=Y({extend:te({schema:We}),onSubmit:v=>t.get("dns/query",{searchParams:{name:v.name,type:v.type}}).json().then(({Answer:s})=>C((s==null?void 0:s.map(({data:c})=>c))||[])).catch(s=>de.error(s.message))}),[r,C]=Q([]);return(()=>{var v=je(),s=v.firstChild,c=s.firstChild,n=c.nextSibling;return n.firstChild,ee(f,s,()=>f),e(n,l(D,{type:"submit",class:"btn-primary",get loading(){return h()},get children(){return d("dnsQuery")}}),null),e(v,l(T,{get when(){return r().length>0},get children(){var _=Re();return e(_,l(I,{get each(){return r()},children:o=>(()=>{var p=Oe();return e(p,o),p})()})),_}}),null),v})()},Je=y.object({port:y.number(),"socks-port":y.number(),"redir-port":y.number(),"tproxy-port":y.number(),"mixed-port":y.number()}),Ke=({backendVersion:d})=>{const[t]=j(),f=K(),h=[{label:()=>t("port",{name:"HTTP"}),key:"port",onChange:n=>void $("port",Number(n.target.value),c)},{label:()=>t("port",{name:"Socks"}),key:"socks-port",onChange:n=>void $("socks-port",Number(n.target.value),c)},{label:()=>t("port",{name:"Redir"}),key:"redir-port",onChange:n=>void $("redir-port",Number(n.target.value),c)},{label:()=>t("port",{name:"TProxy"}),key:"tproxy-port",onChange:n=>void $("tproxy-port",Number(n.target.value),c)},{label:()=>t("port",{name:"Mixed"}),key:"mixed-port",onChange:n=>void $("mixed-port",Number(n.target.value),c)}],{form:r,setInitialValues:C,reset:v}=Y({extend:te({schema:Je})}),[s,{refetch:c}]=ce(Be);return le(()=>{const n=s();n&&(C(n),v())}),(()=>{var n=Qe(),_=n.firstChild,o=_.firstChild,p=o.nextSibling,w=p.nextSibling,k=_.nextSibling;return _.addEventListener("change",u=>void $("mode",u.target.value,c)),e(o,()=>t("global")),e(p,()=>t("rule")),e(w,()=>t("direct")),e(n,l(T,{get when(){return!M(d())},get children(){return[(()=>{var u=Ge();return ee(r,u,()=>r),e(u,l(I,{each:h,children:i=>(()=>{var b=Ue(),L=b.firstChild,F=L.firstChild,E=L.nextSibling;return e(F,()=>i.label()),oe(E,"change",i.onChange),g(x=>{var B=i.key,N=i.key,P=i.key,A=i.label();return B!==x.e&&R(L,"for",x.e=B),N!==x.t&&R(E,"id",x.t=N),P!==x.a&&R(E,"name",x.a=P),A!==x.o&&R(E,"placeholder",x.o=A),x},{e:void 0,t:void 0,a:void 0,o:void 0}),b})()})),u})(),(()=>{var u=Me(),i=u.firstChild,b=i.firstChild,L=b.firstChild,F=b.nextSibling,E=i.nextSibling,x=E.firstChild,B=x.firstChild,N=x.nextSibling,P=E.nextSibling,A=P.firstChild,ae=A.firstChild,U=A.nextSibling,q=P.nextSibling,V=q.firstChild,ne=V.firstChild,z=V.nextSibling,re=q.nextSibling,H=re.firstChild,se=H.firstChild,X=H.nextSibling;return e(L,()=>t("allowLan")),F.addEventListener("change",a=>void $("allow-lan",a.target.checked,c)),e(B,()=>t("enableTunDevice")),N.addEventListener("change",a=>void $("tun",{enable:a.target.checked},c)),e(ae,()=>t("tunModeStack")),U.addEventListener("change",a=>void $("tun",{stack:a.target.value},c)),e(ne,()=>t("tunDeviceName")),z.addEventListener("change",a=>void $("tun",{device:a.target.value},c)),e(se,()=>t("interfaceName")),X.addEventListener("change",a=>void $("interface-name",a.target.value,c)),g(()=>{var a;return F.checked=(a=s())==null?void 0:a["allow-lan"]}),g(()=>{var a;return N.checked=(a=s())==null?void 0:a.tun.enable}),g(()=>{var a;return U.value=(a=s())==null?void 0:a.tun.stack}),g(()=>{var a;return z.value=(a=s())==null?void 0:a.tun.device}),g(()=>{var a;return X.value=(a=s())==null?void 0:a["interface-name"]}),u})()]}}),k),e(k,l(D,{class:"btn-primary",get loading(){return he()},onClick:ve,get children(){return t("reloadConfig")}}),null),e(k,l(D,{class:"btn-secondary",get loading(){return fe()},onClick:be,get children(){return t("updateGEODatabases")}}),null),e(k,l(D,{class:"btn-accent",get loading(){return me()},onClick:xe,get children(){return t("flushFakeIP")}}),null),e(k,l(T,{get when(){return!M(d())},get children(){return l(D,{class:"btn-error",get loading(){return _e()},onClick:$e,get children(){return t("upgradeCore")}})}}),null),e(k,l(D,{class:"btn-warning",get loading(){return Ce()},onClick:ke,get children(){return t("restartCore")}}),null),e(k,l(D,{class:"btn-info",onClick:()=>{ye(""),f(Se.Setup)},get children(){return t("switchEndpoint")}}),null),g(()=>{var u;return _.value=(u=s())==null?void 0:u.mode}),g(()=>o.value=O.Global),g(()=>p.value=O.Rule),g(()=>w.value=O.Direct),n})()},Ye=()=>{const[d]=j(),t=[{label:()=>d("en"),value:W.EN},{label:()=>d("zh"),value:W.ZH}];return(()=>{var f=Ve(),h=f.firstChild,r=h.firstChild,C=r.firstChild,v=r.nextSibling,s=v.firstChild,c=h.nextSibling,n=c.firstChild,_=n.firstChild;return e(r,l(S,{get children(){return d("useTwemoji")}}),C),C.addEventListener("change",o=>we(o.target.checked)),e(v,l(S,{get children(){return d("switchLanguage")}}),s),s.addEventListener("change",o=>Ee(o.target.value)),e(s,l(I,{each:t,children:o=>(()=>{var p=G();return e(p,()=>o.label()),g(()=>p.selected=De()===o.value),g(()=>p.value=o.value),p})()})),e(n,l(S,{get children(){return d("autoSwitchTheme")}}),_),_.addEventListener("change",o=>Te(o.target.checked)),e(c,l(T,{get when(){return Z()},get children(){var o=qe(),p=o.firstChild,w=p.firstChild,k=p.nextSibling,u=k.firstChild;return e(p,l(S,{get children(){return d("favDayTheme")}}),w),w.addEventListener("change",i=>Le(i.target.value)),e(w,l(I,{each:J,children:i=>(()=>{var b=G();return b.value=i,e(b,i),b})()})),e(k,l(S,{get children(){return d("favNightTheme")}}),u),u.addEventListener("change",i=>Ne(i.target.value)),e(u,l(I,{each:J,children:i=>(()=>{var b=G();return b.value=i,e(b,i),b})()})),g(()=>w.value=Pe()),g(()=>u.value=Ae()),o}}),null),g(()=>C.checked=Ie()),g(()=>_.checked=Z()),f})()},el=({backendVersion:d})=>{const[t,f]=Q(!1);return le(async()=>{const h=d();h&&f(await Fe(h))}),(()=>{var h=He(),r=h.firstChild,C=r.nextSibling,v=C.firstChild;return e(r,()=>"1.136.1"),e(C,l(T,{get when(){return t()},get children(){return ze()}}),v),e(v,d),h})()},nl=()=>{const d=K();if(!ue())return d("/setup",{replace:!0}),null;const[t]=j(),[f,h]=Q("");return ie(async()=>{h(await ge())}),(()=>{var r=Xe();return e(r,l(T,{get when(){return!M(f())},get children(){return[l(S,{withDivider:!0,get children(){return t("dnsQuery")}}),l(Ze,{})]}}),null),e(r,l(S,{withDivider:!0,get children(){return t("coreConfig")}}),null),e(r,l(Ke,{backendVersion:f}),null),e(r,l(S,{withDivider:!0,get children(){return t("xdConfig")}}),null),e(r,l(Ye,{}),null),e(r,l(S,{withDivider:!0,get children(){return t("version")}}),null),e(r,l(el,{backendVersion:f}),null),r})()};export{nl as default};
