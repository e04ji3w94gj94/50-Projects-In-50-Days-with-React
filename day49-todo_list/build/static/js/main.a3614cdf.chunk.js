(this["webpackJsonpday49-todo_list"]=this["webpackJsonpday49-todo_list"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var o=c(8),n=c.n(o),a=c(7),s=c(4),l=c(6),r=c(1),u=(c(13),c(0)),i=function(){var t=Object(r.useState)([]),e=Object(l.a)(t,2),c=e[0],o=e[1],n=Object(r.useState)(""),i=Object(l.a)(n,2),j=i[0],d=i[1];Object(r.useEffect)((function(){var t=JSON.parse(localStorage.getItem("todos"));t&&o(t)}),[]),Object(r.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"todos"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o([].concat(Object(s.a)(c),[{todo:j,completed:!1}])),d("")},children:[Object(u.jsx)("input",{type:"text",className:"input",placeholder:"Enter your todo",autoComplete:"off",value:j,onChange:function(t){d(t.target.value)}}),Object(u.jsx)("ul",{className:"todos",children:c.map((function(t,e){return Object(u.jsx)("li",{className:"".concat(c[e].completed?"completed":""),onClick:function(){return function(t){var e=Object(s.a)(c);e[t]=Object(a.a)(Object(a.a)({},e[t]),{},{completed:!e[t].completed}),o(e)}(e)},onContextMenu:function(t){return function(t,e){t.preventDefault();var n=Object(s.a)(c);n.splice(e,1),o(n)}(t,e)},children:t.todo},e)}))})]}),Object(u.jsxs)("small",{children:["Left click to toggle completed.",Object(u.jsx)("br",{}),"Right click to delete todo"]})]})};n.a.render(Object(u.jsx)(i,{}),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a3614cdf.chunk.js.map