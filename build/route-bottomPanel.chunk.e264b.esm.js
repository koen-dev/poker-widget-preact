(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1/Zx":function(e,t,r){"use strict";var n=r("hosL"),o=r("duEm"),a=r.n(o),i=r("Sqjx"),u=r("QSnH"),c=r("YLTM");t.a=class extends n.a{constructor(){super(...arguments),this.handleReveal=async e=>{"function"==typeof this.props.onBeforeReveal&&this.props.onBeforeReveal(e);var t=(await Object(i.a)()).filter(e=>"back"===Object(u.a)(e).side).map(e=>{var{id:t}=e,{value:r}=Object(u.a)(e);return{id:t,metadata:Object(u.b)(e,{side:"face"}),url:Object(c.a)("face",r)}});await miro.board.widgets.update(t),"function"==typeof this.props.onReveal&&this.props.onReveal()},this.handleClear=async e=>{"function"==typeof this.props.onBeforeClear&&this.props.onBeforeClear(e);var t=(await Object(i.a)()).filter(e=>"card"===Object(u.a)(e).type).map(e=>e.id),r=miro.board.widgets.deleteById(t);console.log("deleted",r.length,"cards"),"function"==typeof this.props.onClear&&this.props.onClear()}}render(){return Object(n.f)("nav",{class:a.a.wrapper},Object(n.f)("button",{type:"button",class:"miro-btn miro-btn--primary miro-btn--small",onClick:this.handleReveal},"Reveal all"),Object(n.f)("button",{class:"miro-btn miro-btn--secondary miro-btn--small",type:"button",onClick:this.handleClear},"Clear all"))}}},"1ksb":function(){},"5IsQ":function(e){function t(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function n(e){if(c===setTimeout)return setTimeout(e,0);if((c===t||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function o(){d&&f&&(d=!1,f.length?p=f.concat(p):b=-1,p.length&&a())}function a(){if(!d){var e=n(o);d=!0;for(var t=p.length;t;){for(f=p,p=[];++b<t;)f&&f[b].run();b=-1,t=p.length}f=null,d=!1,function(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}(e)}}function i(e,t){this.fun=e,this.array=t}function u(){}var c,l,s=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:t}catch(e){c=t}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var f,p=[],d=!1,b=-1;s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];p.push(new i(e,t)),1!==p.length||d||n(a)},i.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=u,s.addListener=u,s.once=u,s.off=u,s.removeListener=u,s.removeAllListeners=u,s.emit=u,s.prependListener=u,s.prependOnceListener=u,s.listeners=function(){return[]},s.binding=function(){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},QSnH:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c}));var i=r("tVdo"),u=function(e,t){if(void 0===t&&(t=i.a),!t)throw new Error("No appId specified");return e.metadata[t]||{}},c=function(e,t,r){return void 0===r&&(r=i.a),o({},e.metadata,{[r]:o({},e.metadata[r],{},t)})}},Sqjx:function(e,t,r){"use strict";async function n(){return(await miro.board.widgets.get()).filter(e=>"card"===Object(o.a)(e).type)}r.d(t,"a",(function(){return n}));var o=r("QSnH")},WsXS:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return u}));var n=r("hosL"),o=r("1ksb"),a=r.n(o),i=r("1/Zx");class u extends n.a{constructor(){super(...arguments),this.state={time:1}}render(e,t){return Object(n.f)("div",{class:a.a.sidebar},Object(n.f)(i.a,null))}}},YLTM:function(e,t,r){"use strict";(function(){t.a=function(e,t){return void 0===t&&(t=""),window.location.origin+"/assets/cards/"+e+t+".svg"}}).call(this,r("5IsQ"))},duEm:function(e){e.exports={wrapper:"wrapper__18AHL"}},tVdo:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return i}));var n="3074457347007443177",o=[1,2,3,4,5,6],a=[{label:"0",value:0},{label:"½",value:.5},{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"5",value:5},{label:"8",value:8},{label:"13",value:13},{label:"20",value:20},{label:"40",value:40},{label:"100",value:100},{label:"∞",value:"infinity"},{label:"?",value:"question"},{label:"☕",value:"coffee"}],i=a.reduce((e,t)=>(e[t.value]=t,e),{})}}]);
//# sourceMappingURL=route-bottomPanel.chunk.e264b.esm.js.map