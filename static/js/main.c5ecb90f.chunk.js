(this["webpackJsonpcounter-redux"]=this["webpackJsonpcounter-redux"]||[]).push([[0],{11:function(e,t,n){e.exports=n(21)},2:function(e,t,n){e.exports={Sections:"Counter_Sections__sX-bD",Counter_heading:"Counter_Counter_heading__12oME",Counter:"Counter_Counter__2InX4",Counter__controls:"Counter_Counter__controls__16z3r",Counter__value:"Counter_Counter__value__2-PZ3"}},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(5),u=n.n(o),a=n(3),l=n(2),i=n.n(l),s=function(e){var t=e.step,n=e.onIncrement,r=e.onDecrement;return c.a.createElement("div",{className:i.a.Counter__controls},c.a.createElement("button",{type:"button",onClick:n},"\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 ",t),c.a.createElement("button",{type:"button",onClick:r},"\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 ",t))},m=function(e){var t=e.value;return c.a.createElement("span",{className:i.a.Counter__value},t)},_=n(4),b=Object(_.a)("counter/Increment"),v=Object(_.a)("counter/Decrement"),C=function(e){return e.counter.value},d=function(e){return e.counter.step};var f=function(){var e=Object(a.b)(),t=Object(a.c)(C),n=Object(a.c)(d);return c.a.createElement("div",{className:i.a.Sections},c.a.createElement("h1",{className:i.a.Counter_heading},"COUNTER"),c.a.createElement("div",{className:i.a.Counter},c.a.createElement(m,{value:t}),c.a.createElement(s,{step:n,onIncrement:function(){return function(t){return e(b(t))}(n)},onDecrement:function(){return function(t){return e(v(t))}(n)}})))};function E(){return c.a.createElement(f,null)}var p,O=function(){return c.a.createElement("div",null,c.a.createElement(E,null))},j=n(1),h=n(10),N=n(7),g=Object(_.b)(0,(p={},Object(N.a)(p,b,(function(e,t){return e+t.payload})),Object(N.a)(p,v,(function(e,t){return e-t.payload})),p)),y=Object(j.combineReducers)({value:g,step:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return e}}),D=Object(j.combineReducers)({counter:y}),I=Object(j.createStore)(D,Object(h.composeWithDevTools)());n(19),n(20);u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(a.a,{store:I},c.a.createElement(O,null))),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c5ecb90f.chunk.js.map