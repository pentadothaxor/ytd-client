import{S as q,i as B,s as N,e as d,k as M,c as g,a as v,d as i,n as V,b as t,f as z,t as k,g as A,H as r,I as $,K as te,L as U,M as W,N as ae,O as le}from"./vendor-e593b835.js";function X(f,e,l){const s=f.slice();return s[4]=e[l],s}function Z(f){let e,l,s,n=f[1],c=[];for(let a=0;a<n.length;a+=1)c[a]=ee(X(f,n,a));return{c(){e=d("div"),l=M(),s=d("div");for(let a=0;a<c.length;a+=1)c[a].c();this.h()},l(a){e=g(a,"DIV",{class:!0,onclick:!0}),v(e).forEach(i),l=V(a),s=g(a,"DIV",{class:!0});var u=v(s);for(let o=0;o<c.length;o+=1)c[o].l(u);u.forEach(i),this.h()},h(){t(e,"class","backdrop svelte-wog7o0"),t(e,"onclick",f[2]),t(s,"class","languages svelte-wog7o0")},m(a,u){z(a,e,u),z(a,l,u),z(a,s,u);for(let o=0;o<c.length;o+=1)c[o].m(s,null)},p(a,u){if(u&2){n=a[1];let o;for(o=0;o<n.length;o+=1){const p=X(a,n,o);c[o]?c[o].p(p,u):(c[o]=ee(p),c[o].c(),c[o].m(s,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=n.length}},d(a){a&&i(e),a&&i(l),a&&i(s),te(c,a)}}}function ee(f){let e,l=f[4].text+"",s,n,c;return{c(){e=d("a"),s=k(l),this.h()},l(a){e=g(a,"A",{href:!0,class:!0,"data-value":!0});var u=v(e);s=A(u,l),u.forEach(i),this.h()},h(){t(e,"href",n=`${f[4].lang}${f[4].code||""}`),t(e,"class","selectible svelte-wog7o0"),t(e,"data-value",c=f[4].lang)},m(a,u){z(a,e,u),r(e,s)},p:$,d(a){a&&i(e)}}}function se(f){let e,l,s,n,c,a,u,o,p,b,w,y,x,I,h=f[0]&&Z(f);return{c(){e=d("header"),l=d("a"),s=d("h2"),n=d("img"),a=k(`
			YTD7.com`),u=M(),o=d("div"),p=k(`English
		`),b=U("svg"),w=U("path"),y=M(),h&&h.c(),this.h()},l(E){e=g(E,"HEADER",{class:!0});var _=v(e);l=g(_,"A",{href:!0});var m=v(l);s=g(m,"H2",{class:!0});var T=v(s);n=g(T,"IMG",{height:!0,width:!0,src:!0,class:!0,alt:!0,title:!0}),a=A(T,`
			YTD7.com`),T.forEach(i),m.forEach(i),u=V(_),o=g(_,"DIV",{class:!0});var D=v(o);p=A(D,`English
		`),b=W(D,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var Y=v(b);w=W(Y,"path",{fill:!0,d:!0}),v(w).forEach(i),Y.forEach(i),y=V(D),h&&h.l(D),D.forEach(i),_.forEach(i),this.h()},h(){t(n,"height","30"),t(n,"width","30"),ae(n.src,c="/download.svg")||t(n,"src",c),t(n,"class","svg svelte-wog7o0"),t(n,"alt","logo"),t(n,"title","YTD7 logo"),t(s,"class","svelte-wog7o0"),t(l,"href","/"),t(w,"fill","#fff"),t(w,"d","M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"),t(b,"xmlns","http://www.w3.org/2000/svg"),t(b,"width","16"),t(b,"height","16"),t(b,"viewBox","0 0 24 24"),t(b,"class","svelte-wog7o0"),t(o,"class","language svelte-wog7o0"),t(e,"class","svelte-wog7o0")},m(E,_){z(E,e,_),r(e,l),r(l,s),r(s,n),r(s,a),r(e,u),r(e,o),r(o,p),r(o,b),r(b,w),r(o,y),h&&h.m(o,null),x||(I=le(o,"click",f[2]),x=!0)},p(E,[_]){E[0]?h?h.p(E,_):(h=Z(E),h.c(),h.m(o,null)):h&&(h.d(1),h=null)},i:$,o:$,d(E){E&&i(e),h&&h.d(),x=!1,I()}}}function re(f,e,l){let s=!1;return[s,[{lang:"en",text:"English"},{lang:"de",text:"Deutsch"},{lang:"es",text:"Espa\xF1ol"},{lang:"fr",text:"Fran\xE7ais"},{lang:"hi",text:"\u0939\u093F\u0928\u094D\u0926\u0940 / Hind\u012B"},{lang:"id",text:"Indonesian"},{lang:"it",text:"Italiano"},{lang:"ja",text:"\u65E5\u672C\u8A9E"},{lang:"ko",text:"\uD55C\uAD6D\uC5B4"},{lang:"my",text:"Myanmar (\u1019\u103C\u1014\u103A\u1019\u102C)"},{lang:"ms",text:"Malay"},{lang:"ph",text:"Filipino"},{lang:"pt",text:"Portugu\xEAs"},{lang:"ru",text:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{lang:"th",text:"\u0E44\u0E17\u0E22"},{lang:"tr",text:"T\xFCrk\xE7e"},{lang:"vi",text:"Ti\u1EBFng Vi\u1EC7t"},{lang:"zh-cn",text:"\u7B80\u4F53\u4E2D\u6587"},{lang:"zh-tw",text:"\u7E41\u9AD4\u4E2D\u6587"},{lang:"sa",text:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"},{lang:"bn",text:"\u09AC\u09BE\u0999\u09BE\u09B2\u09BF"}],()=>{l(0,s=!s)}]}class he extends q{constructor(e){super();B(this,e,re,se,N,{})}}function oe(f){let e,l,s,n,c,a,u,o,p,b,w,y,x,I,h,E,_,m,T,D,Y,O,H=new Date().getFullYear()+"",C;return{c(){e=d("footer"),l=d("div"),s=d("a"),n=k("Contact us"),c=M(),a=d("a"),u=k("Terms & Conditions"),o=M(),p=d("a"),b=k("Privacy Policy"),w=M(),y=d("a"),x=k("Other1"),I=M(),h=d("a"),E=k("Other2"),_=M(),m=d("div"),T=k("Copyright, \xA9 "),D=d("a"),Y=k("ytd7.com"),O=M(),C=k(H),this.h()},l(P){e=g(P,"FOOTER",{class:!0});var F=v(e);l=g(F,"DIV",{class:!0});var j=v(l);s=g(j,"A",{href:!0,class:!0});var R=v(s);n=A(R,"Contact us"),R.forEach(i),c=V(j),a=g(j,"A",{href:!0,class:!0});var S=v(a);u=A(S,"Terms & Conditions"),S.forEach(i),o=V(j),p=g(j,"A",{href:!0,class:!0});var G=v(p);b=A(G,"Privacy Policy"),G.forEach(i),w=V(j),y=g(j,"A",{rel:!0,target:!0,href:!0,class:!0});var K=v(y);x=A(K,"Other1"),K.forEach(i),I=V(j),h=g(j,"A",{rel:!0,target:!0,href:!0,class:!0});var J=v(h);E=A(J,"Other2"),J.forEach(i),j.forEach(i),_=V(F),m=g(F,"DIV",{class:!0});var L=v(m);T=A(L,"Copyright, \xA9 "),D=g(L,"A",{href:!0});var Q=v(D);Y=A(Q,"ytd7.com"),Q.forEach(i),O=V(L),C=A(L,H),L.forEach(i),F.forEach(i),this.h()},h(){t(s,"href","/contact"),t(s,"class","svelte-5jbydp"),t(a,"href","/terms-and-conditions"),t(a,"class","svelte-5jbydp"),t(p,"href","/privacy-policy"),t(p,"class","svelte-5jbydp"),t(y,"rel","noopener"),t(y,"target","_blank"),t(y,"href","https://pentadothaxor.github.io/sample/"),t(y,"class","svelte-5jbydp"),t(h,"rel","noopener"),t(h,"target","_blank"),t(h,"href","https://github.com/pentadothaxor/sample"),t(h,"class","svelte-5jbydp"),t(l,"class","wrapper svelte-5jbydp"),t(D,"href","/"),t(m,"class","svelte-5jbydp"),t(e,"class","svelte-5jbydp")},m(P,F){z(P,e,F),r(e,l),r(l,s),r(s,n),r(l,c),r(l,a),r(a,u),r(l,o),r(l,p),r(p,b),r(l,w),r(l,y),r(y,x),r(l,I),r(l,h),r(h,E),r(e,_),r(e,m),r(m,T),r(m,D),r(D,Y),r(m,O),r(m,C)},p:$,i:$,o:$,d(P){P&&i(e)}}}class ue extends q{constructor(e){super();B(this,e,null,oe,N,{})}}function ne(f){let e,l,s,n,c,a,u,o,p,b,w,y,x,I,h,E;return{c(){e=d("div"),l=d("nav"),s=d("a"),n=d("div"),c=k("YouTube Downloader"),u=M(),o=d("a"),p=d("div"),b=k("YouTube to MP4"),y=M(),x=d("a"),I=d("div"),h=k("YouTube to MP3"),this.h()},l(_){e=g(_,"DIV",{class:!0});var m=v(e);l=g(m,"NAV",{class:!0});var T=v(l);s=g(T,"A",{href:!0});var D=v(s);n=g(D,"DIV",{class:!0});var Y=v(n);c=A(Y,"YouTube Downloader"),Y.forEach(i),D.forEach(i),u=V(T),o=g(T,"A",{href:!0});var O=v(o);p=g(O,"DIV",{class:!0});var H=v(p);b=A(H,"YouTube to MP4"),H.forEach(i),O.forEach(i),y=V(T),x=g(T,"A",{href:!0});var C=v(x);I=g(C,"DIV",{class:!0});var P=v(I);h=A(P,"YouTube to MP3"),P.forEach(i),C.forEach(i),T.forEach(i),m.forEach(i),this.h()},h(){t(n,"class","btn svelte-zr5u7b"),t(s,"href",a="/"+(f[0]||"en")),t(p,"class","btn svelte-zr5u7b"),t(o,"href",w="/"+(f[0]||"en")+"/youtube-to-mp4"),t(I,"class","btn svelte-zr5u7b"),t(x,"href",E="/"+(f[0]||"en")+"/youtube-to-mp3"),t(l,"class","svelte-zr5u7b"),t(e,"class","menu svelte-zr5u7b")},m(_,m){z(_,e,m),r(e,l),r(l,s),r(s,n),r(n,c),r(l,u),r(l,o),r(o,p),r(p,b),r(l,y),r(l,x),r(x,I),r(I,h)},p(_,[m]){m&1&&a!==(a="/"+(_[0]||"en"))&&t(s,"href",a),m&1&&w!==(w="/"+(_[0]||"en")+"/youtube-to-mp4")&&t(o,"href",w),m&1&&E!==(E="/"+(_[0]||"en")+"/youtube-to-mp3")&&t(x,"href",E)},i:$,o:$,d(_){_&&i(e)}}}function ie(f,e,l){let{lang:s}=e;return f.$$set=n=>{"lang"in n&&l(0,s=n.lang)},[s]}class ve extends q{constructor(e){super();B(this,e,ie,ne,N,{lang:0})}}export{ue as F,he as H,ve as M};
