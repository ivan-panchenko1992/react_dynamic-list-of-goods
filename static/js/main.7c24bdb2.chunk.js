(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(4),c=n.n(a),s=n(1),u=n.n(s),i=n(2),l=n(5),d=n(6),f=n(8),m=n(7);n(15);function p(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var h=function(){return p().then((function(t){return t.slice(0,5).sort((function(t,e){return t.name.localeCompare(e.name)}))}))},g=function(){return p().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},v=function(t){var e=t.goods;return r.a.createElement("ul",null,e.map((function(t){return r.a.createElement("li",{key:t.id,style:{color:t.color}},t.name)})))},b=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goods:[]},t.loadAllGoods=Object(i.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t.loadFiveFirst=Object(i.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t.loadRedGoods=Object(i.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state.goods;return r.a.createElement("div",null,r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement("button",{type:"button",onClick:this.loadAllGoods},"Load All goods"),r.a.createElement("button",{type:"button",onClick:this.loadFiveFirst},"Load 5 first goods"),r.a.createElement("button",{type:"button",onClick:this.loadRedGoods},"Load red goods"),r.a.createElement(v,{goods:t}))}}]),n}(r.a.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.7c24bdb2.chunk.js.map