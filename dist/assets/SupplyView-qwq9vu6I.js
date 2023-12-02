import{g as ot,t as ye,h as ut,j as it,k as st,c as ct,s as E,l as lt,o as ft}from"./transform-cCkha_rj.js";import{_ as mt,o as gt,c as ht,a as yt}from"./index-EzdrIXnI.js";import{e as dt,a as de,b as ve,l as pe}from"./line-tLHu-7wM.js";import{p as vt,a as Te}from"./pie-kHUYJ-Z5.js";function pt(e,t){e=e.slice();var r=0,n=e.length-1,s=e[r],o=e[n],i;return o<s&&(i=r,r=n,n=i,i=s,s=o,o=i),e[r]=t.floor(s),e[n]=t.ceil(o),e}const ae=new Date,oe=new Date;function U(e,t,r,n){function s(o){return e(o=arguments.length===0?new Date:new Date(+o)),o}return s.floor=o=>(e(o=new Date(+o)),o),s.ceil=o=>(e(o=new Date(o-1)),t(o,1),e(o),o),s.round=o=>{const i=s(o),f=s.ceil(o);return o-i<f-o?i:f},s.offset=(o,i)=>(t(o=new Date(+o),i==null?1:Math.floor(i)),o),s.range=(o,i,f)=>{const T=[];if(o=s.ceil(o),f=f==null?1:Math.floor(f),!(o<i)||!(f>0))return T;let m;do T.push(m=new Date(+o)),t(o,f),e(o);while(m<o&&o<i);return T},s.filter=o=>U(i=>{if(i>=i)for(;e(i),!o(i);)i.setTime(i-1)},(i,f)=>{if(i>=i)if(f<0)for(;++f<=0;)for(;t(i,-1),!o(i););else for(;--f>=0;)for(;t(i,1),!o(i););}),r&&(s.count=(o,i)=>(ae.setTime(+o),oe.setTime(+i),e(ae),e(oe),Math.floor(r(ae,oe))),s.every=o=>(o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?s.filter(n?i=>n(i)%o===0:i=>s.count(0,i)%o===0):s)),s}const ee=U(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);ee.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?U(t=>{t.setTime(Math.floor(t/e)*e)},(t,r)=>{t.setTime(+t+r*e)},(t,r)=>(r-t)/e):ee);ee.range;const L=1e3,k=L*60,I=k*60,P=I*24,ce=P*7,Me=P*30,ue=P*365,Q=U(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*L)},(e,t)=>(t-e)/L,e=>e.getUTCSeconds());Q.range;const le=U(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*L)},(e,t)=>{e.setTime(+e+t*k)},(e,t)=>(t-e)/k,e=>e.getMinutes());le.range;const Tt=U(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*k)},(e,t)=>(t-e)/k,e=>e.getUTCMinutes());Tt.range;const fe=U(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*L-e.getMinutes()*k)},(e,t)=>{e.setTime(+e+t*I)},(e,t)=>(t-e)/I,e=>e.getHours());fe.range;const Mt=U(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*I)},(e,t)=>(t-e)/I,e=>e.getUTCHours());Mt.range;const G=U(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*k)/P,e=>e.getDate()-1);G.range;const me=U(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/P,e=>e.getUTCDate()-1);me.range;const Ct=U(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/P,e=>Math.floor(e/P));Ct.range;function R(e){return U(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,r)=>{t.setDate(t.getDate()+r*7)},(t,r)=>(r-t-(r.getTimezoneOffset()-t.getTimezoneOffset())*k)/ce)}const ne=R(0),te=R(1),Ut=R(2),Dt=R(3),$=R(4),xt=R(5),wt=R(6);ne.range;te.range;Ut.range;Dt.range;$.range;xt.range;wt.range;function Z(e){return U(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCDate(t.getUTCDate()+r*7)},(t,r)=>(r-t)/ce)}const We=Z(0),re=Z(1),St=Z(2),bt=Z(3),q=Z(4),Ft=Z(5),Yt=Z(6);We.range;re.range;St.range;bt.range;q.range;Ft.range;Yt.range;const ge=U(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());ge.range;const kt=U(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());kt.range;const _=U(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());_.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:U(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,r)=>{t.setFullYear(t.getFullYear()+r*e)});_.range;const O=U(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());O.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:U(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCFullYear(t.getUTCFullYear()+r*e)});O.range;function Wt(e,t,r,n,s,o){const i=[[Q,1,L],[Q,5,5*L],[Q,15,15*L],[Q,30,30*L],[o,1,k],[o,5,5*k],[o,15,15*k],[o,30,30*k],[s,1,I],[s,3,3*I],[s,6,6*I],[s,12,12*I],[n,1,P],[n,2,2*P],[r,1,ce],[t,1,Me],[t,3,3*Me],[e,1,ue]];function f(m,y,C){const M=y<m;M&&([m,y]=[y,m]);const d=C&&typeof C.range=="function"?C:T(m,y,C),W=d?d.range(m,+y+1):[];return M?W.reverse():W}function T(m,y,C){const M=Math.abs(y-m)/C,d=ot(([,,N])=>N).right(i,M);if(d===i.length)return e.every(ye(m/ue,y/ue,C));if(d===0)return ee.every(Math.max(ye(m,y,C),1));const[W,H]=i[M/i[d-1][2]<i[d][2]/M?d-1:d];return W.every(H)}return[f,T]}const[Ht,Lt]=Wt(_,ge,ne,G,fe,le);function ie(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function se(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function j(e,t,r){return{y:e,m:t,d:r,H:0,M:0,S:0,L:0}}function It(e){var t=e.dateTime,r=e.date,n=e.time,s=e.periods,o=e.days,i=e.shortDays,f=e.months,T=e.shortMonths,m=X(s),y=J(s),C=X(o),M=J(o),d=X(i),W=J(i),H=X(f),N=J(f),z=X(T),V=J(T),Y={a:qe,A:ze,b:je,B:Xe,c:null,d:Se,e:Se,f:nr,g:gr,G:yr,H:er,I:tr,j:rr,L:He,m:ar,M:or,p:Je,q:Ge,Q:Ye,s:ke,S:ur,u:ir,U:sr,V:cr,w:lr,W:fr,x:null,X:null,y:mr,Y:hr,Z:dr,"%":Fe},v={a:Ke,A:et,b:tt,B:rt,c:null,d:be,e:be,f:Mr,g:kr,G:Hr,H:vr,I:pr,j:Tr,L:Ie,m:Cr,M:Ur,p:nt,q:at,Q:Ye,s:ke,S:Dr,u:xr,U:wr,V:Sr,w:br,W:Fr,x:null,X:null,y:Yr,Y:Wr,Z:Lr,"%":Fe},w={a:Re,A:Ze,b:Ve,B:Ee,c:Be,d:xe,e:xe,f:Xt,g:De,G:Ue,H:we,I:we,j:$t,L:jt,m:Qt,M:qt,p:Oe,q:Bt,Q:Gt,s:Kt,S:zt,u:Ot,U:Rt,V:Zt,w:At,W:Vt,x:Qe,X:$e,y:De,Y:Ue,Z:Et,"%":Jt};Y.x=c(r,Y),Y.X=c(n,Y),Y.c=c(t,Y),v.x=c(r,v),v.X=c(n,v),v.c=c(t,v);function c(u,l){return function(g){var a=[],S=-1,p=0,b=u.length,F,A,he;for(g instanceof Date||(g=new Date(+g));++S<b;)u.charCodeAt(S)===37&&(a.push(u.slice(p,S)),(A=Ce[F=u.charAt(++S)])!=null?F=u.charAt(++S):A=F==="e"?" ":"0",(he=l[F])&&(F=he(g,A)),a.push(F),p=S+1);return a.push(u.slice(p,S)),a.join("")}}function x(u,l){return function(g){var a=j(1900,void 0,1),S=K(a,u,g+="",0),p,b;if(S!=g.length)return null;if("Q"in a)return new Date(a.Q);if("s"in a)return new Date(a.s*1e3+("L"in a?a.L:0));if(l&&!("Z"in a)&&(a.Z=0),"p"in a&&(a.H=a.H%12+a.p*12),a.m===void 0&&(a.m="q"in a?a.q:0),"V"in a){if(a.V<1||a.V>53)return null;"w"in a||(a.w=1),"Z"in a?(p=se(j(a.y,0,1)),b=p.getUTCDay(),p=b>4||b===0?re.ceil(p):re(p),p=me.offset(p,(a.V-1)*7),a.y=p.getUTCFullYear(),a.m=p.getUTCMonth(),a.d=p.getUTCDate()+(a.w+6)%7):(p=ie(j(a.y,0,1)),b=p.getDay(),p=b>4||b===0?te.ceil(p):te(p),p=G.offset(p,(a.V-1)*7),a.y=p.getFullYear(),a.m=p.getMonth(),a.d=p.getDate()+(a.w+6)%7)}else("W"in a||"U"in a)&&("w"in a||(a.w="u"in a?a.u%7:"W"in a?1:0),b="Z"in a?se(j(a.y,0,1)).getUTCDay():ie(j(a.y,0,1)).getDay(),a.m=0,a.d="W"in a?(a.w+6)%7+a.W*7-(b+5)%7:a.w+a.U*7-(b+6)%7);return"Z"in a?(a.H+=a.Z/100|0,a.M+=a.Z%100,se(a)):ie(a)}}function K(u,l,g,a){for(var S=0,p=l.length,b=g.length,F,A;S<p;){if(a>=b)return-1;if(F=l.charCodeAt(S++),F===37){if(F=l.charAt(S++),A=w[F in Ce?l.charAt(S++):F],!A||(a=A(u,g,a))<0)return-1}else if(F!=g.charCodeAt(a++))return-1}return a}function Oe(u,l,g){var a=m.exec(l.slice(g));return a?(u.p=y.get(a[0].toLowerCase()),g+a[0].length):-1}function Re(u,l,g){var a=d.exec(l.slice(g));return a?(u.w=W.get(a[0].toLowerCase()),g+a[0].length):-1}function Ze(u,l,g){var a=C.exec(l.slice(g));return a?(u.w=M.get(a[0].toLowerCase()),g+a[0].length):-1}function Ve(u,l,g){var a=z.exec(l.slice(g));return a?(u.m=V.get(a[0].toLowerCase()),g+a[0].length):-1}function Ee(u,l,g){var a=H.exec(l.slice(g));return a?(u.m=N.get(a[0].toLowerCase()),g+a[0].length):-1}function Be(u,l,g){return K(u,t,l,g)}function Qe(u,l,g){return K(u,r,l,g)}function $e(u,l,g){return K(u,n,l,g)}function qe(u){return i[u.getDay()]}function ze(u){return o[u.getDay()]}function je(u){return T[u.getMonth()]}function Xe(u){return f[u.getMonth()]}function Je(u){return s[+(u.getHours()>=12)]}function Ge(u){return 1+~~(u.getMonth()/3)}function Ke(u){return i[u.getUTCDay()]}function et(u){return o[u.getUTCDay()]}function tt(u){return T[u.getUTCMonth()]}function rt(u){return f[u.getUTCMonth()]}function nt(u){return s[+(u.getUTCHours()>=12)]}function at(u){return 1+~~(u.getUTCMonth()/3)}return{format:function(u){var l=c(u+="",Y);return l.toString=function(){return u},l},parse:function(u){var l=x(u+="",!1);return l.toString=function(){return u},l},utcFormat:function(u){var l=c(u+="",v);return l.toString=function(){return u},l},utcParse:function(u){var l=x(u+="",!0);return l.toString=function(){return u},l}}}var Ce={"-":"",_:" ",0:"0"},D=/^\s*\d+/,Pt=/^%/,_t=/[\\^$*+?|[\]().{}]/g;function h(e,t,r){var n=e<0?"-":"",s=(n?-e:e)+"",o=s.length;return n+(o<r?new Array(r-o+1).join(t)+s:s)}function Nt(e){return e.replace(_t,"\\$&")}function X(e){return new RegExp("^(?:"+e.map(Nt).join("|")+")","i")}function J(e){return new Map(e.map((t,r)=>[t.toLowerCase(),r]))}function At(e,t,r){var n=D.exec(t.slice(r,r+1));return n?(e.w=+n[0],r+n[0].length):-1}function Ot(e,t,r){var n=D.exec(t.slice(r,r+1));return n?(e.u=+n[0],r+n[0].length):-1}function Rt(e,t,r){var n=D.exec(t.slice(r,r+2));return n?(e.U=+n[0],r+n[0].length):-1}function Zt(e,t,r){var n=D.exec(t.slice(r,r+2));return n?(e.V=+n[0],r+n[0].length):-1}function Vt(e,t,r){var n=D.exec(t.slice(r,r+2));return n?(e.W=+n[0],r+n[0].length):-1}function Ue(e,t,r){var n=D.exec(t.slice(r,r+4));return n?(e.y=+n[0],r+n[0].length):-1}function De(e,t,r){var n=D.exec(t.slice(r,r+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),r+n[0].length):-1}function Et(e,t,r){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r,r+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),r+n[0].length):-1}function Bt(e,t,r){var n=D.exec(t.slice(r,r+1));return n?(e.q=n[0]*3-3,r+n[0].length):-1}function Qt(e,t,r){var n=D.exec(t.slice(r,r+2));return n?(e.m=n[0]-1,r+n[0].length):-1}function xe(e,t,r){var n=D.exec(t.slice(r,r+2));return n?(e.d=+n[0],r+n[0].length):-1}function $t(e,t,r){var n=D.exec(t.slice(r,r+3));return n?(e.m=0,e.d=+n[0],r+n[0].length):-1}function we(e,t,r){var n=D.exec(t.slice(r,r+2));return n?(e.H=+n[0],r+n[0].length):-1}function qt(e,t,r){var n=D.exec(t.slice(r,r+2));return n?(e.M=+n[0],r+n[0].length):-1}function zt(e,t,r){var n=D.exec(t.slice(r,r+2));return n?(e.S=+n[0],r+n[0].length):-1}function jt(e,t,r){var n=D.exec(t.slice(r,r+3));return n?(e.L=+n[0],r+n[0].length):-1}function Xt(e,t,r){var n=D.exec(t.slice(r,r+6));return n?(e.L=Math.floor(n[0]/1e3),r+n[0].length):-1}function Jt(e,t,r){var n=Pt.exec(t.slice(r,r+1));return n?r+n[0].length:-1}function Gt(e,t,r){var n=D.exec(t.slice(r));return n?(e.Q=+n[0],r+n[0].length):-1}function Kt(e,t,r){var n=D.exec(t.slice(r));return n?(e.s=+n[0],r+n[0].length):-1}function Se(e,t){return h(e.getDate(),t,2)}function er(e,t){return h(e.getHours(),t,2)}function tr(e,t){return h(e.getHours()%12||12,t,2)}function rr(e,t){return h(1+G.count(_(e),e),t,3)}function He(e,t){return h(e.getMilliseconds(),t,3)}function nr(e,t){return He(e,t)+"000"}function ar(e,t){return h(e.getMonth()+1,t,2)}function or(e,t){return h(e.getMinutes(),t,2)}function ur(e,t){return h(e.getSeconds(),t,2)}function ir(e){var t=e.getDay();return t===0?7:t}function sr(e,t){return h(ne.count(_(e)-1,e),t,2)}function Le(e){var t=e.getDay();return t>=4||t===0?$(e):$.ceil(e)}function cr(e,t){return e=Le(e),h($.count(_(e),e)+(_(e).getDay()===4),t,2)}function lr(e){return e.getDay()}function fr(e,t){return h(te.count(_(e)-1,e),t,2)}function mr(e,t){return h(e.getFullYear()%100,t,2)}function gr(e,t){return e=Le(e),h(e.getFullYear()%100,t,2)}function hr(e,t){return h(e.getFullYear()%1e4,t,4)}function yr(e,t){var r=e.getDay();return e=r>=4||r===0?$(e):$.ceil(e),h(e.getFullYear()%1e4,t,4)}function dr(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+h(t/60|0,"0",2)+h(t%60,"0",2)}function be(e,t){return h(e.getUTCDate(),t,2)}function vr(e,t){return h(e.getUTCHours(),t,2)}function pr(e,t){return h(e.getUTCHours()%12||12,t,2)}function Tr(e,t){return h(1+me.count(O(e),e),t,3)}function Ie(e,t){return h(e.getUTCMilliseconds(),t,3)}function Mr(e,t){return Ie(e,t)+"000"}function Cr(e,t){return h(e.getUTCMonth()+1,t,2)}function Ur(e,t){return h(e.getUTCMinutes(),t,2)}function Dr(e,t){return h(e.getUTCSeconds(),t,2)}function xr(e){var t=e.getUTCDay();return t===0?7:t}function wr(e,t){return h(We.count(O(e)-1,e),t,2)}function Pe(e){var t=e.getUTCDay();return t>=4||t===0?q(e):q.ceil(e)}function Sr(e,t){return e=Pe(e),h(q.count(O(e),e)+(O(e).getUTCDay()===4),t,2)}function br(e){return e.getUTCDay()}function Fr(e,t){return h(re.count(O(e)-1,e),t,2)}function Yr(e,t){return h(e.getUTCFullYear()%100,t,2)}function kr(e,t){return e=Pe(e),h(e.getUTCFullYear()%100,t,2)}function Wr(e,t){return h(e.getUTCFullYear()%1e4,t,4)}function Hr(e,t){var r=e.getUTCDay();return e=r>=4||r===0?q(e):q.ceil(e),h(e.getUTCFullYear()%1e4,t,4)}function Lr(){return"+0000"}function Fe(){return"%"}function Ye(e){return+e}function ke(e){return Math.floor(+e/1e3)}var B,_e,Ne;Ir({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function Ir(e){return B=It(e),_e=B.format,Ne=B.parse,B.utcFormat,B.utcParse,B}function Pr(e){return new Date(e)}function _r(e){return e instanceof Date?+e:+new Date(+e)}function Ae(e,t,r,n,s,o,i,f,T,m){var y=it(),C=y.invert,M=y.domain,d=m(".%L"),W=m(":%S"),H=m("%I:%M"),N=m("%I %p"),z=m("%a %d"),V=m("%b %d"),Y=m("%B"),v=m("%Y");function w(c){return(T(c)<c?d:f(c)<c?W:i(c)<c?H:o(c)<c?N:n(c)<c?s(c)<c?z:V:r(c)<c?Y:v)(c)}return y.invert=function(c){return new Date(C(c))},y.domain=function(c){return arguments.length?M(Array.from(c,_r)):M().map(Pr)},y.ticks=function(c){var x=M();return e(x[0],x[x.length-1],c??10)},y.tickFormat=function(c,x){return x==null?w:m(x)},y.nice=function(c){var x=M();return(!c||typeof c.range!="function")&&(c=t(x[0],x[x.length-1],c??10)),c?M(pt(x,c)):y},y.copy=function(){return st(y,Ae(e,t,r,n,s,o,i,f,T,m))},y}function Nr(){return ut.apply(Ae(Ht,Lt,_,ge,ne,G,fe,le,Q,_e).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}const Ar={name:"SupplyChart",mounted:function(){ct("employees.csv").then(function(r){var n={top:20,right:20,bottom:50,left:60},s=document.getElementById("chart1-div").clientWidth-n.left-n.right,o=document.getElementById("chart1-div").clientHeight-n.top-n.bottom,i=Ne("%Y %b"),f=E("#doubleLineChart").append("svg").attr("width",s+n.left+n.right).attr("height",o+n.top+n.bottom).append("g").attr("transform","translate("+n.left+","+n.top+")"),T=Nr().domain(dt(r,d=>i(d.label))).range([0,s]),m=lt().domain([100,345]).range([o,0]),y=de(T).tickSize(-o).tickFormat("").ticks(5),C=ve(m).tickSize(-s).tickFormat("").ticks(10);f.append("path").datum(r).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",1.5).attr("d",pe().x(function(d){return T(i(d.label))}).y(function(d){return m(d.total)})),f.append("path").datum(r).attr("fill","none").attr("stroke","orange").attr("stroke-width",1.5).attr("d",pe().x(function(d){return T(i(d.label))}).y(function(d){return m(d.ppi)})),f.append("g").attr("class","x-axis-grid").attr("transform","translate(0,"+o+")").call(y),f.append("g").attr("class","y-axis-grid").call(C),f.append("g").attr("transform","translate(0,"+o+")").call(de(T).ticks(5)),f.append("text").attr("class","x-axis-label").attr("x",s/2).attr("y",o+n.top+20).text("Year"),f.append("g").call(ve(m).ticks(Math.max(o/50,2))),f.append("text").attr("class","y-axis-label").attr("x",-o/2).attr("y",n.left/2-70).attr("transform","rotate(-90)").text("Number of Employees (in thousands) vs PPI(base 2012)");var M=f.append("g").attr("transform","translate(30,30)");M.append("line").attr("x1",0).attr("y1",0).attr("x2",20).attr("y2",0).attr("stroke-width",3).attr("stroke","blue"),M.append("text").attr("x",30).attr("y",4).text("# of Employees"),M.append("line").attr("x1",0).attr("y1",20).attr("x2",20).attr("y2",20).attr("stroke-width",3).attr("stroke","orange"),M.append("text").attr("x",30).attr("y",24).text("PPI")});function e(r){var n=[{year:2018,female:83.45,male:54.58},{year:2019,female:87.35,male:52.42},{year:2020,female:84.22,male:46.79},{year:2021,female:89.54,male:46.92},{year:2022,female:83.91,male:49.28}];n.map(v=>v.year);var s=n.find(v=>v.year===r),o={top:20,right:20,bottom:20,left:20},i=400-o.left-o.right,f=400-o.top-o.bottom,T=vt().value(v=>v),m=T(s),y=ft().domain(m.map(v=>v.data.key)).range(["#ff9999","#66b3ff"]),C=i/3,M=Te().outerRadius(C).innerRadius(C*.6);Te().innerRadius(C*.9).outerRadius(C*.9);var d=E("#pieChart").append("svg").attr("width",i).attr("height",f).append("g").attr("transform","translate("+i/2+","+f/2+")"),W=[s.female,s.male],H=E("body").append("div").attr("class","tooltip").style("opacity",0),N=function(v,w){H.style("opacity",1),E(this).style("stroke","black").style("opacity",1);var c=w.data,x=c/(s.female+s.male)*100;H.html("Employees: "+c+"<br>Percentage: "+x.toFixed(2)+"%").style("left",v.pageX+5+"px").style("top",v.pageY-28+"px")},z=function(v){H.style("opacity",0),E(this).style("stroke","none").style("opacity",.8)};d.selectAll("arc").data(T(W)).enter().append("g").attr("class","arc").append("path").attr("d",M).attr("fill",(v,w)=>y(w)).on("mouseover",N).on("mouseout",z);var V=["#ff9999","#66b3ff"];const Y=d.selectAll(".legend").data(V).enter().append("g").attr("class","legend");Y.append("rect").attr("width",18).attr("height",18).attr("x",100).attr("y",function(v,w){return-150+w*30}).style("fill",function(v,w){return V[w]}),Y.append("text").attr("x",120).attr("y",function(v,w){return-140+w*30}).attr("dy",".35em").style("text-anchor","start").text(function(v,w){return w===0?"Female":"Male"})}var t=2022;e(t),E("#yearSelector").on("change",function(){t=+this.value,e(t)})}},Or={class:"SupplyChart"},Rr=yt('<h1 class="title">Pet Product &amp; Service Providers</h1><div class="row"><div class="col"><div class="stat-card"><div class="d-flex justify-content-between"><div class="stat-title">Number of Employees in Pet Industry</div><span class="stat-icon">📈</span></div><div class="stat-number">310,000</div></div></div><div class="col"><div class="stat-card"><div class="d-flex justify-content-between"><div class="stat-title">PPI of Processed Pet Food</div><span class="stat-icon">🥣</span></div><div class="stat-number">339</div></div></div><div class="col"><div class="stat-card"><div class="d-flex justify-content-between"><div class="stat-title">Average Weekly Earnings</div><span class="stat-icon">💰</span></div><div class="stat-number">$667.52</div></div></div></div><div class="row mt-3"><div class="col"><div class="card"><div class="card-body"><div class="row mt-3"><div class="col"><div class="row"><div class="col-md-7"></div><div class="col-md-5"><div class="form-group mb-2"><label for="yearSelector">Select Year:</label><select class="form-control" id="yearSelector"><option>2018</option><option>2019</option><option>2020</option><option>2021</option><option selected>2022</option></select></div></div></div></div></div><div class="row"><div class="col-md-7" id="chart1-div" style="overflow:hidden;"><h6> Number of Employees vs PPI (base=100, 2012)</h6><svg id="doubleLineChart" width="100%" height="100%"></svg></div><div class="col-md-5" id="chart2-div" style="overflow:hidden;"><h6>Employee Sex Distribution</h6><svg id="pieChart" width="100%" height="400"></svg></div></div></div></div></div></div>',3),Zr=[Rr];function Vr(e,t,r,n,s,o){return gt(),ht("div",Or,Zr)}const qr=mt(Ar,[["render",Vr]]);export{qr as default};
