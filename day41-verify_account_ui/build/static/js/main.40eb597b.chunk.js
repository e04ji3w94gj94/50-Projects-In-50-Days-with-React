(this["webpackJsonpday41-verify_account_ui"]=this["webpackJsonpday41-verify_account_ui"]||[]).push([[0],{12:function(e,c,t){},14:function(e,c,t){"use strict";t.r(c);var n=t(5),r=t.n(n),u=t(6),o=t(7),i=t(1),s=(t(12),t(0)),a=function(){var e=Object(i.useRef)([]),c=Object(i.useState)(6),t=Object(o.a)(c,2),n=t[0];t[1];Object(i.useEffect)((function(){e.current[0].focus()}),[]);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{children:"Verify Your Account"}),Object(s.jsxs)("p",{children:["We emailed you the six digit code to cool_guy@email.com ",Object(s.jsx)("br",{}),"Enter the code below to confirm your email address."]}),Object(s.jsx)("div",{className:"code-container",children:Object(u.a)(Array(n).keys()).map((function(c,t){return Object(s.jsx)("input",{type:"number",className:"code",placeholder:"0",min:"0",max:"9",ref:function(c){return e.current[t]=c},onKeyDown:function(c){return function(c,t){c.key>=0&&c.key<=9?(e.current[t].value="",setTimeout((function(){return t<e.current.length?e.current[t+1].focus():e.current[t].focus()}),10)):"Backspace"===c.key&&setTimeout((function(){return e.current[t-1].focus()}),10)}(c,t)},required:!0},t)}))}),Object(s.jsx)("small",{className:"info",children:"This is design only. We didn't actually send you an email as we don't have your email, right?"})]})};r.a.render(Object(s.jsx)(a,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.40eb597b.chunk.js.map