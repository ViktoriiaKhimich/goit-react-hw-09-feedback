(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={statistics:"Statistics_statistics__2QFok",statisticsItem:"Statistics_statisticsItem__2x0UF"}},,,,,,,function(t,e,n){},function(t,e,n){t.exports={title:"Section_title__2S6oE"}},function(t,e,n){t.exports={btn:"FeedbackOptions_btn__1rp9P"}},function(t,e,n){t.exports={message:"Notification_message__eciZi"}},function(t,e,n){t.exports={container:"App_container__1MQN3"}},,,,,,,,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(6),i=n.n(s),r=n(5),o=n(3),u=n(7),l=n(8),d=n(15),b=n(14),j=n(9),m=n.n(j),O=n(10),f=n.n(O),h=n(0),p=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:f.a.title,children:e}),n]})},x=n(11),v=n.n(x),k=function(t){var e=t.options.map((function(t){var e=t.name,n=t.onClick,c=t.id;return Object(h.jsx)("button",{className:v.a.btn,onClick:n,children:e},c)}));return Object(h.jsx)(h.Fragment,{children:e})},g=n(2),_=n.n(g),N=function(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,s=t.positivePercentage;return Object(h.jsxs)("div",{className:_.a.statistics,children:[Object(h.jsxs)("p",{className:_.a.statisticsItem,children:["Good: ",e]}),Object(h.jsxs)("p",{className:_.a.statisticsItem,children:["Neutral: ",n]}),Object(h.jsxs)("p",{className:_.a.statisticsItem,children:["Bad: ",c]}),Object(h.jsxs)("p",{className:_.a.statisticsItem,children:["Total: ",a]}),Object(h.jsxs)("p",{className:_.a.statisticsItem,children:["Positive Feedback: ",s," %"]})]})},F=n(12),P=n.n(F),I=function(t){var e=t.message;return Object(h.jsx)("p",{className:P.a.message,children:e})},S=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.increase=function(e){t.setState((function(t){var n=t[e];return Object(o.a)({},e,n+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}))},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback();return Math.round(100*t.state.good/e)},t.createFeedbackOptions=function(){return[{id:"01",name:"Good",onClick:function(){return t.increase("good")}},{id:"02",name:"Neutral",onClick:function(){return t.increase("neutral")}},{id:"03",name:"Bad",onClick:function(){return t.increase("bad")}}]},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.createFeedbackOptions(),e=this.countTotalFeedback(),n=e?Object(h.jsx)(N,Object(r.a)(Object(r.a)({},this.state),{},{total:e,positivePercentage:this.countPositiveFeedbackPercentage()})):Object(h.jsx)(I,{message:"No feedback given"});return Object(h.jsxs)("div",{className:m.a.container,children:[Object(h.jsx)(p,{title:"Please leave feedback",children:Object(h.jsx)(k,{options:t})}),Object(h.jsx)(p,{title:"Statistics",children:n})]})}}]),n}(c.Component),C=n(13),w=n.n(C);var y=function(){return Object(h.jsx)("div",{className:w.a.container,children:Object(h.jsx)(S,{})})};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.9e33fa3c.chunk.js.map