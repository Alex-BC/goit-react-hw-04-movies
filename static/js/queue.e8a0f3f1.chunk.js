(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{104:function(t,e,r){t.exports={title:"Queue_title__2f05o"}},111:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return u}));var n=r(62),i=r(0),o=r(67),a=r(104),c=r.n(a),s=r(3);function u(){var t=Object(i.useState)(null),e=Object(n.a)(t,2),r=e[0],a=e[1];return Object(i.useEffect)((function(){a(JSON.parse(localStorage.getItem("queue")))}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:c.a.title,children:"Movies I want to watch:"}),r&&Object(s.jsx)(o.a,{moviesArr:r})]})}},62:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(65);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(s){i=!0,o=s}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},64:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},65:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(64);function i(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},66:function(t,e,r){t.exports={list:"MoviesList_list__1T_Yj",listItem:"MoviesList_listItem__2mA8H",listImg:"MoviesList_listImg__28Rdt",listLink:"MoviesList_listLink__1NeuC"}},67:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r(0);var n=r(5),i=r(11),o=r(66),a=r.n(o),c=r(3);function s(t){var e=t.moviesArr,r=t.url,o=void 0===r?"/movies":r,s=Object(n.g)();return Object(c.jsx)("ul",{className:a.a.list,children:e.map((function(t){return Object(c.jsx)("li",{className:a.a.listItem,children:Object(c.jsxs)(i.b,{className:a.a.listLink,to:{pathname:"".concat(o,"/").concat(t.id),state:{from:s}},children:[Object(c.jsx)("img",{className:a.a.listImg,src:"https://image.tmdb.org/t/p/w342/".concat(t.poster_path),alt:t.original_title,onError:function(t){"/imgNotFound.png"!==t.target.src&&(t.target.src="/imgNotFound.png")}}),Object(c.jsx)("p",{children:t.title})]})},t.id)}))})}}}]);
//# sourceMappingURL=queue.e8a0f3f1.chunk.js.map