(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{DV8Z:function(t,e,r){"use strict";r.r(e);var n=r("hosL"),o=r("SyCT"),i=r.n(o),c=r("ccaj"),a=r.n(c),p={response_type:"token",redirect_uri:"https://"+window.location.host+"/authorize-success"};e.default=function(t){function e(){for(var e,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).ref=Object(n.e)(),e.handleAuthorize=function(){return new Promise((function(t,e){return Promise.resolve(miro.authorize(p)).then((function(){try{return Promise.resolve(miro.getToken()).then((function(r){try{return r?miro.board.ui.closeModal("success"):console.log("Something went wrong"),t()}catch(t){return e(t)}}),e)}catch(t){return e(t)}}),e)}))},e}var r,o;o=t,(r=e).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o;var c=e.prototype;return c.componentDidMount=function(){this.ref.current&&(this.ref.current.innerHTML=i.a)},c.render=function(){return Object(n.f)("section",{class:a.a.wrapper},Object(n.f)("h2",{class:"miro-h2"},"Poker planning widget"),Object(n.f)("p",{class:"miro-p"},"To use the widget, please authorize it in your account"),Object(n.f)("div",{class:a.a.svgWrapper},Object(n.f)("svg",{class:a.a.svg,ref:this.ref})),Object(n.f)("button",{type:"button",class:"miro-btn miro-btn--primary miro-btn--medium",onClick:this.handleAuthorize},"Authorize app"))},e}(n.a)},SyCT:function(t){t.exports='<rect fill="#fff9df" x="22" y="2" width="24" height="36" rx="2.7619" ry="2.7619"></rect><path fill="#3e52d8" d="M46.01,0H21.99A1.99,1.99,0,0,0,20,1.99V8h3V3H45V37H28v3H46.01A1.99,1.99,0,0,0,48,38.01h0V1.99A1.99,1.99,0,0,0,46.01,0Z"></path><path fill="none" d="M26.01,8H1.99A1.99,1.99,0,0,0,0,9.99V46.01A1.99,1.99,0,0,0,1.99,48H26.01A1.99,1.99,0,0,0,28,46.01h0V9.99A1.99,1.99,0,0,0,26.01,8Z"></path><path fill="#3e52d8" d="M26.01,8H1.99A1.99,1.99,0,0,0,0,9.99V46.01A1.99,1.99,0,0,0,1.99,48H26.01A1.99,1.99,0,0,0,28,46.01h0V9.99A1.99,1.99,0,0,0,26.01,8Z"></path><path fill="#050039" d="M.58,24.0005c-.1944-.0013-.3864.0074-.58.0107V46.01A1.99,1.99,0,0,0,1.99,48H24.6346A24.2268,24.2268,0,0,0,.58,24.0005Z"></path><path fill="#ffd02f" d="M.2225,33.33c-.0752,0-.1477.01-.2225.0112V46.01A1.99,1.99,0,0,0,1.99,48h13.3A15.0792,15.0792,0,0,0,.2225,33.33Z"></path><path fill="#ff6474" d="M26.01,8H12.4214A15.7832,15.7832,0,0,0,28,23.579V9.99A1.99,1.99,0,0,0,26.01,8Z"></path>'},ccaj:function(t){t.exports={wrapper:"wrapper__2JnRV",svg:"svg__2hhJb",svgWrapper:"svgWrapper__2EBVO"}}}]);
//# sourceMappingURL=route-authorize.chunk.4f353.js.map