(this["webpackJsonpday21-dragN_drop"]=this["webpackJsonpday21-dragN_drop"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n.n(c),r=n(7),o=n(2),u=n(0),s=(n(12),n(1)),i=function(){var e=Object(u.useState)(5),t=Object(o.a)(e,1)[0],n=Object(u.useState)(0),c=Object(o.a)(n,2),a=c[0],i=c[1],b=Object(u.useState)(!1),j=Object(o.a)(b,2),d=j[0],O=j[1],f=Object(u.useState)(!1),l=Object(o.a)(f,2),p=l[0],v=l[1],g=Object(u.useState)(!1),m=Object(o.a)(g,2),h=m[0],D=m[1],S=function(){O(!0),setTimeout((function(){return v(!0)}),0)},y=function(){O(!1),v(!1),D(!1)},N=function(e){e.preventDefault()},x=function(){D(!1),O(!1)};return Object(s.jsx)("div",{className:"wrap",children:Object(r.a)(Array(t).keys()).map((function(e,t){return Object(s.jsx)("div",{className:"empty ".concat(a===t&&h?"hovered":""),onDragOver:N,onDragEnter:function(e){return function(e,t){e.preventDefault(),i(Number(t)),D(!0),v(!1)}(e,t)},children:a===t&&Object(s.jsx)("div",{className:"".concat(p?"invisible":"fill ".concat(d?"hold":"")),draggable:!0,onDragStart:S,onDragEnd:y,onDrop:x})},t)}))})};a.a.render(Object(s.jsx)(i,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d4e7a39a.chunk.js.map