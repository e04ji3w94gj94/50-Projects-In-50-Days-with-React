(this["webpackJsonpday19-theme_clock"]=this["webpackJsonpday19-theme_clock"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c.n(a),s=c(2),r=c(0),o=(c(9),c(1)),d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=function(){var e=Object(r.useState)("12"),t=Object(s.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)("0"),l=Object(s.a)(n,2),j=l[0],b=l[1],i=Object(r.useState)("0"),O=Object(s.a)(i,2),m=O[0],f=O[1],y=Object(r.useState)("am"),k=Object(s.a)(y,2),v=k[0],h=k[1],g=Object(r.useState)("6"),S=Object(s.a)(g,2),x=S[0],N=S[1],p=Object(r.useState)("2"),M=Object(s.a)(p,2),D=M[0],J=M[1],w=Object(r.useState)("1"),A=Object(s.a)(w,2),C=A[0],R=A[1],F=Object(r.useState)(!1),I=Object(s.a)(F,2),T=I[0],_=I[1],q=Object(r.useRef)(),E=Object(r.useRef)(),H=Object(r.useRef)();Object(r.useEffect)((function(){var e=setInterval((function(){var e=new Date;N(e.getMonth()),J(e.getDay()),R(e.getDate());var t=e.getHours();a(t%12),b(e.getMinutes()),f(e.getSeconds()),h(t>=12?"PM":"AM"),H.current.style.transform="translate(-50%, -100%) rotate(".concat(L(c,0,11,0,360),"deg)"),q.current.style.transform="translate(-50%, -100%) rotate(".concat(L(j,0,59,0,360),"deg)"),E.current.style.transform="translate(-50%, -100%) rotate(".concat(L(m,0,59,0,360),"deg)")}),1e3);return function(){return clearInterval(e)}}),[c,m,j]);var L=function(e,t,c,a,n){return(e-t)*(n-a)/(c-t)+a};return Object(o.jsxs)("div",{className:"mode ".concat(T?"dark":""),children:[Object(o.jsx)("button",{className:"toggle ".concat(T?"dark":""),onClick:function(e){_((function(e){return!e})),T?(document.body.style.backgroundColor="#fff",document.body.style.color="#111"):(document.body.style.backgroundColor="#111",document.body.style.color="#fff")},children:"".concat(T?"Light mode":"Dark mode")}),Object(o.jsxs)("div",{className:"clock-container",children:[Object(o.jsxs)("div",{className:"clock",children:[Object(o.jsx)("div",{className:"needle hour ".concat(T?"dark":""),ref:H}),Object(o.jsx)("div",{className:"needle minute ".concat(T?"dark":""),ref:q}),Object(o.jsx)("div",{className:"needle second ".concat(T?"dark":""),ref:E}),Object(o.jsx)("div",{className:"center-point ".concat(T?"dark":"")})]}),Object(o.jsxs)("div",{className:"time",children:[c,":",j<10?"0".concat(j):j," ",v]}),Object(o.jsxs)("div",{className:"date ".concat(T?"dark":""),children:[d[D],", ",u[x]," ",Object(o.jsx)("span",{className:"circle ".concat(T?"dark":""),children:C})]})]})]})};n.a.render(Object(o.jsx)(l,{}),document.querySelector("#root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.69023747.chunk.js.map