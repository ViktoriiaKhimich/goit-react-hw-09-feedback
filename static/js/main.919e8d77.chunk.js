(this["webpackJsonpgoit-react-hw-09-feedback"]=this["webpackJsonpgoit-react-hw-09-feedback"]||[]).push([[0],[,,function(t,e,c){t.exports={statistics:"Statistics_statistics__2QFok",statisticsItem:"Statistics_statisticsItem__2x0UF"}},,,,,function(t,e,c){},function(t,e,c){t.exports={title:"Section_title__2S6oE"}},function(t,e,c){t.exports={btn:"FeedbackOptions_btn__1rp9P"}},function(t,e,c){t.exports={message:"Notification_message__eciZi"}},function(t,e,c){t.exports={container:"App_container__1MQN3"}},,,,,,,function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),a=c(6),i=c.n(a),r=c(4),o=c(3),j=c(12),l=c(7),d=c.n(l),u=c(8),b=c.n(u),m=c(0),O=function(t){var e=t.title,c=t.children;return Object(m.jsxs)("section",{children:[Object(m.jsx)("h2",{className:b.a.title,children:e}),c]})},x=c(9),f=c.n(x),p=function(t){var e=t.options.map((function(t){var e=t.name,c=t.onClick,n=t.id;return Object(m.jsx)("button",{className:f.a.btn,onClick:c,children:e},n)}));return Object(m.jsx)(m.Fragment,{children:e})},h=c(2),v=c.n(h),_=function(t){var e=t.good,c=t.neutral,n=t.bad,s=t.total,a=t.positivePercentage;return Object(m.jsxs)("div",{className:v.a.statistics,children:[Object(m.jsxs)("p",{className:v.a.statisticsItem,children:["Good: ",e]}),Object(m.jsxs)("p",{className:v.a.statisticsItem,children:["Neutral: ",c]}),Object(m.jsxs)("p",{className:v.a.statisticsItem,children:["Bad: ",n]}),Object(m.jsxs)("p",{className:v.a.statisticsItem,children:["Total: ",s]}),Object(m.jsxs)("p",{className:v.a.statisticsItem,children:["Positive Feedback: ",a," %"]})]})},g=Object(n.memo)(_),N=c(10),k=c.n(N),I=function(t){var e=t.message;return Object(m.jsx)("p",{className:k.a.message,children:e})},S={good:0,neutral:0,bad:0},C=function(){var t=Object(n.useState)(S),e=Object(j.a)(t,2),c=e[0],s=e[1],a=function(t){var e=c[t];s(Object(o.a)(Object(o.a)({},c),{},Object(r.a)({},t,e+1)))},i=function(){return Object.values(c).reduce((function(t,e){return t+e}))},l=[{id:"01",name:"Good",onClick:function(){return a("good")}},{id:"02",name:"Neutral",onClick:function(){return a("neutral")}},{id:"03",name:"Bad",onClick:function(){return a("bad")}}],u=i(),b=u?Object(m.jsx)(g,Object(o.a)(Object(o.a)({},c),{},{total:u,positivePercentage:function(){var t=i();return Math.round(100*c.good/t)}()})):Object(m.jsx)(I,{message:"No feedback given"});return Object(m.jsxs)("div",{className:d.a.container,children:[Object(m.jsx)(O,{title:"Please leave feedback",children:Object(m.jsx)(p,{options:l})}),Object(m.jsx)(O,{title:"Statistics",children:b})]})},F=c(11),P=c.n(F);var w=function(){return Object(m.jsx)("div",{className:P.a.container,children:Object(m.jsx)(C,{})})};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.919e8d77.chunk.js.map