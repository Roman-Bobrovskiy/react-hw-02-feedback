(this["webpackJsonpreact-hw-02-feedback"]=this["webpackJsonpreact-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(3),o=n.n(a),r=n(4),i=n(5),s=n(6),l=n(8),d=n(7),u=n(0);function j(e){var t=e.onHandleChsnge;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"button",name:"Good",onClick:t,children:"Good"}),Object(u.jsx)("button",{type:"button",name:"Neutral",onClick:t,children:"Neutral"}),Object(u.jsx)("button",{type:"button",name:"Bad",onClick:t,children:"Bad"})]})})}function b(e){var t=e.title,n=e.children;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),n]})}function h(e){var t=e.onGood,n=e.onNeutral,c=e.onBad,a=e.onTotal,o=e.onCountPositiveFeedback;return Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good: ",t]}),Object(u.jsxs)("li",{children:["Neutral: ",n]}),Object(u.jsxs)("li",{children:["Bad: ",c]}),Object(u.jsxs)("li",{children:["Total: ",a]}),Object(u.jsxs)("li",{children:["Positive feedback: ",o," %"]})]})}function O(e){var t=e.message;return Object(u.jsx)(c.Fragment,{children:Object(u.jsx)("p",{children:t})})}var v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={Good:0,Neutral:0,Bad:0},e.handleChange=function(t){var n=t.target.name;e.setState((function(e){return Object(r.a)({},n,e[n]+1)}))},e}return Object(s.a)(n,[{key:"countTotal",value:function(){var e=this.state;return e.Good+e.Neutral+e.Bad}},{key:"countPositiveFeedback",value:function(){var e=100*this.state.Good/this.countTotal();return Math.round(e)}},{key:"render",value:function(){var e=this.state,t=e.Good,n=e.Neutral,c=e.Bad,a=this.countTotal();return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{title:"Please leasve feedback",children:Object(u.jsx)(j,{onHandleChsnge:this.handleChange})}),Object(u.jsx)(b,{title:"Statistic",children:0===a?Object(u.jsx)(O,{message:"No result"}):Object(u.jsx)(h,{onGood:t,onNeutral:n,onBad:c,onTotal:this.countTotal(),onCountPositiveFeedback:this.countPositiveFeedback()})})]})}}]),n}(c.Component);o.a.render(Object(u.jsx)(v,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5140f0fe.chunk.js.map