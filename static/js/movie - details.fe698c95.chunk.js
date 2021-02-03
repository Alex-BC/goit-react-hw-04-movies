(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{103:function(e,t,n){e.exports={backBtn:"MovieDetails_backBtn__1-olM",movieCard:"MovieDetails_movieCard__3RwvL",infoWrapper:"MovieDetails_infoWrapper__3ul0y",movieName:"MovieDetails_movieName__3DYTx",userScore:"MovieDetails_userScore__1QWi2",Lbl:"MovieDetails_Lbl__2OGVN",Value:"MovieDetails_Value__1ctKL",genres:"MovieDetails_genres__3ikRW",genreName:"MovieDetails_genreName__3waTY",overviewHeader:"MovieDetails_overviewHeader__1zXtO",overviewText:"MovieDetails_overviewText__1bREM",optionsList:"MovieDetails_optionsList__2PHVR",option:"MovieDetails_option__2jWnl",optionChecked:"MovieDetails_optionChecked__GxB4L"}},110:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(72),a=n(62),c=n(0),i=n(5),o=n(11),s=n(16),u=n.n(s),l=n(73),f=n(103),d=n.n(f),p=n(63),v=n(3),b=Object(c.lazy)((function(){return n.e(1).then(n.bind(null,112))})),m=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,113))}));function h(){var e,t,n,s,f,h,j=Object(i.g)(),O=Object(i.h)().movieId,g=Object(i.i)(),_=g.url,y=g.path,x=Object(c.useState)(null),w=Object(a.a)(x,2),N=w[0],S=w[1],k=Object(c.useState)(!0),M=Object(a.a)(k,2),C=M[0],D=M[1];Object(c.useEffect)((function(){Object(p.c)(O).then(S)}),[O]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("queue"));N&&(e&&e.find((function(e){return e.id===N.id}))||D(!1))}),[C,N]);return N&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.b,{className:d.a.backBtn,to:null!==(e=null===j||void 0===j||null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:"Back to Movies"}),Object(v.jsxs)("div",{className:d.a.movieCard,children:[Object(v.jsx)("img",{className:d.a.movieImg,src:"https://image.tmdb.org/t/p/w300/".concat(N.poster_path),alt:N.original_title}),Object(v.jsxs)("div",{className:d.a.infoWrapper,children:[Object(v.jsx)("h2",{className:d.a.movieName,children:"".concat(N.original_title," (").concat(N.release_date.slice(0,4),")")}),Object(v.jsxs)("div",{className:d.a.userScore,children:[Object(v.jsx)("span",{className:d.a.Lbl,children:"User Score:"})," ",Object(v.jsx)("span",{className:d.a.Value,children:N.vote_average})]}),Object(v.jsxs)("div",{className:d.a.genres,children:[Object(v.jsx)("span",{className:d.a.Lbl,children:"Genres:"}),N.genres.map((function(e){return Object(v.jsx)("span",{className:d.a.genreName,children:e.name},e.id)}))]}),Object(v.jsx)("h3",{className:d.a.overviewHeader,children:"Overview"}),Object(v.jsx)("p",{className:d.a.overviewText,children:N.overview}),C?Object(v.jsx)(l.a,{onClick:function(){var e=JSON.parse(localStorage.getItem("queue")).filter((function(e){return e.id!==N.id}));localStorage.setItem("queue",JSON.stringify(Object(r.a)(e))),D(!1)},name:"Remove from Queue"}):Object(v.jsx)(l.a,{onClick:function(){var e=JSON.parse(localStorage.getItem("queue"));if(!e)return localStorage.setItem("queue",JSON.stringify([N])),void D(!0);localStorage.setItem("queue",JSON.stringify([N].concat(Object(r.a)(e)))),D(!0)},name:"Add to Queue"})]})]}),Object(v.jsxs)("ul",{className:d.a.optionsList,children:[Object(v.jsx)("li",{children:Object(v.jsx)(o.c,{to:{pathname:"".concat(_,"/credits"),state:{from:null!==(n=null===j||void 0===j||null===(s=j.state)||void 0===s?void 0:s.from)&&void 0!==n?n:"/"}},className:d.a.option,activeClassName:d.a.optionChecked,children:"Cast"})},"cast"),Object(v.jsx)("li",{children:Object(v.jsx)(o.c,{to:{pathname:"".concat(_,"/reviews"),state:{from:null!==(f=null===j||void 0===j||null===(h=j.state)||void 0===h?void 0:h.from)&&void 0!==f?f:"/"}},className:d.a.option,activeClassName:d.a.optionChecked,children:"Reviews"})},"reviews")]}),Object(v.jsxs)(c.Suspense,{fallback:Object(v.jsx)(u.a,{type:"Puff",color:"#00BFFF",height:100,width:100,style:{textAlign:"center"}}),children:[Object(v.jsx)(i.a,{path:"".concat(y,"/credits"),children:Object(v.jsx)(b,{id:O})}),Object(v.jsx)(i.a,{path:"".concat(y,"/reviews"),children:Object(v.jsx)(m,{id:O})})]})]})}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(65);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},63:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return j}));var r=n(68),a=n.n(r),c=n(69),i=n(70),o=n.n(i),s="2bd63387ebd1c73ba3770ca5b24c8e07",u="https://api.themoviedb.org/3/";function l(){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(u,"trending/movie/week?api_key=").concat(s)).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(u,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US")).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US")).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US")).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(u,"search/movie?api_key=").concat(s,"&language=en-US&page=").concat(n,"&query=").concat(t)).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},64:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(64);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},71:function(e,t,n){e.exports={Button:"Button_Button__31fGd"}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(64);var a=n(65);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var r=n(71),a=n.n(r),c=n(3);var i=function(e){var t=e.onClick,n=void 0===t?null:t,r=e.name,i=void 0===r?"click me":r;return Object(c.jsx)("button",{type:"button",className:a.a.Button,onClick:n,children:i})}}}]);
//# sourceMappingURL=movie - details.fe698c95.chunk.js.map