(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1/Zx":function(e,t,r){"use strict";var n=r("hosL"),o=r("duEm"),a=r.n(o),c=r("Sqjx"),i=r("QSnH"),u=r("YLTM");t.a=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleReveal=function(e){return new Promise((function(r,n){var o,a;return"function"==typeof t.props.onBeforeReveal&&t.props.onBeforeReveal(e),Promise.resolve(Object(c.a)()).then((function(e){try{return o=e.filter((function(e){return"back"===Object(i.a)(e).side})),a=o.map((function(e){var t=e.id,r=Object(i.a)(e).value;return{id:t,metadata:Object(i.b)(e,{side:"face"}),url:Object(u.a)("face",r)}})),Promise.resolve(miro.board.widgets.update(a)).then((function(){try{return"function"==typeof t.props.onReveal&&t.props.onReveal(),r()}catch(e){return n(e)}}),n)}catch(e){return n(e)}}),n)}))},t.handleClear=function(e){return new Promise((function(r,n){var o,a;return"function"==typeof t.props.onBeforeClear&&t.props.onBeforeClear(e),Promise.resolve(Object(c.a)()).then((function(e){try{return o=e.filter((function(e){return"card"===Object(i.a)(e).type})).map((function(e){return e.id})),a=miro.board.widgets.deleteById(o),console.log("deleted",a.length,"cards"),"function"==typeof t.props.onClear&&t.props.onClear(),r()}catch(e){return n(e)}}),n)}))},t}var r,o;return o=e,(r=t).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o,t.prototype.render=function(){return Object(n.f)("nav",{class:a.a.wrapper},Object(n.f)("button",{type:"button",class:"miro-btn miro-btn--primary miro-btn--small",onClick:this.handleReveal},"Reveal all"),Object(n.f)("button",{class:"miro-btn miro-btn--secondary miro-btn--small",type:"button",onClick:this.handleClear},"Clear all"))},t}(n.a)},L76c:function(e){e.exports={sidebar:"sidebar__U7KN2"}},QSnH:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u}));var c=r("tVdo"),i=function(e,t){if(void 0===t&&(t=c.a),!t)throw new Error("No appId specified");return e.metadata[t]||{}},u=function(e,t,r){var n;return void 0===r&&(r=c.a),o({},e.metadata,((n={})[r]=o({},e.metadata[r],{},t),n))}},Sqjx:function(e,t,r){"use strict";function n(){return new Promise((function(e,t){return Promise.resolve(miro.board.widgets.get()).then((function(r){try{return e(r.filter((function(e){return"card"===Object(o.a)(e).type})))}catch(e){return t(e)}}),t)}))}r.d(t,"a",(function(){return n}));var o=r("QSnH")},YLTM:function(e,t){"use strict";t.a=function(e,t){return void 0===t&&(t=""),window.location.origin+"/assets/cards/"+e+t+".svg"}},duEm:function(e){e.exports={wrapper:"wrapper__18AHL"}},lym1:function(e,t,r){"use strict";function n(){var e,t,r=(e=1,t=f,Math.floor(Math.random()*(t-e+1))+e);return Object(d.a)("back",r)}r.r(t);var o=r("hosL"),a=r("L76c"),c=r.n(a),i=r("n5xL"),u=r.n(i),l=r("1/Zx"),s=r("QSnH"),d=r("YLTM"),f=6,p=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={loaded:!1},t.handleLoad=function(){t.setState({loaded:!0})},t}var r,n;return n=e,(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n,t.prototype.render=function(e){var t=e.value,r=e.disabled,n=e.label,a=e.index,c=e.cards,i=void 0===c?[]:c,l=Object(d.a)("face",t),s=50*(i.length-a);return Object(o.f)("div",{class:u.a.cardWrapper,style:{animationDelay:"-"+s+"ms"}},Object(o.f)("button",{class:u.a.card,title:n,disabled:Boolean(r),"data-loaded":this.state.loaded?"yes":"no","data-value":t,type:"button",style:{backgroundImage:"url("+l+")"},"data-image-url":l},Object(o.f)("span",null,n)),Object(o.f)("img",{class:u.a.hiddenImg,onLoad:this.handleLoad,src:l}))},t}(o.a),b=r("tVdo"),h=function(e){var t=e.disabled;return Object(o.f)(o.b,null,b.c.map((function(e,r,n){var a=e.label,c=e.value;return Object(o.f)(p,{key:c,disabled:t,label:a,value:c,index:r,cards:n})})))},v=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleSwap=function(e){return new Promise((function(r,n){"function"==typeof t.props.onBeforeSwap&&t.props.onBeforeSwap(e);var o=function(){try{return r()}catch(e){return n(e)}},a=function(e){try{return console.error(t.props.chosenCardWidget.id),console.error(e),"function"==typeof t.props.onError&&t.props.onError(e),o()}catch(e){return n(e)}};try{return Promise.resolve(miro.board.widgets.deleteById([t.props.chosenCardWidget.id])).then((function(){try{return"function"==typeof t.props.onSwap&&t.props.onSwap(e),o()}catch(e){return a(e)}}),a)}catch(e){a(e)}}))},t}var r,n;return n=e,(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n,t.prototype.render=function(e){var t=e.chosenCardWidget,r=b.d[Object(s.a)(t).value],n=r.value,a=r.label;return Object(o.f)("section",{class:u.a.chosenCardWrapper},Object(o.f)("h4",{class:"miro-h2"},"Your card"),Object(o.f)(p,{value:n,label:a,disabled:!0}),Object(o.f)("button",{onClick:this.handleSwap,type:"button",class:"miro-btn miro-btn--secondary miro-btn--small"},"Swap"))},t}(o.a),y=r("Sqjx"),m=10,w=20,O=function(e,t){return Math.round(e/t)*t},j=r("uXYu"),g=r.n(j),C=function(e){var t=e.severity,r=e.title,n=e.children;return Object(o.f)("section",{class:g.a.wrapper,"data-severity":t},Object(o.f)("h4",{class:"miro-h4"},r),n)},_=function(){return Object(o.f)(o.b,null,b.b.map((function(e){return Object(o.f)("img",{class:u.a.hiddenCard,key:e,src:Object(d.a)("back",e)})})))},S=1.5,P=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))||this).state={time:Date.now(),count:10,loading:!0,error:null,chosenCardWidget:null,showList:!0},t.ref=Object(o.e)(),t.onReady=function(){var e,r;miro.board.ui.initDraggableItemsContainer(t.ref.current,{draggableItemSelector:"."+u.a.card,onClick:function(t){e=t.dataset.value},getDraggableItemPreview:function(t){return r=n(),e=t.dataset.value,{width:t.offsetWidth,height:t.offsetWidth*S,url:r}},onDrop:function(n,o){return new Promise((function(a,c){return t.hideList(),Promise.resolve(function(e){var t,r=e.y,n=e.metadata;return miro.board.widgets.create({type:"image",url:e.url,x:O(e.x,m),y:O(r,w),capabilities:{editable:!1},metadata:(t={},t[b.a]=n,t)})}({x:n,y:o,url:r,metadata:{type:"card",side:"back",value:e,author:t.state.id}})).then((function(e){try{return t.setChosenCard(e[0]),a()}catch(e){return c(e)}}),c)}))}})},t.setChosenCard=function(e,r){t.setState({chosenCardWidget:e,showList:!1},r),t.checkCardExistence(e.id)},t.checkCardExistence=function(e){return new Promise((function(r,n){var o=function(){try{return r()}catch(e){return n(e)}},a=function(){try{return t.clearChosenCard(),o()}catch(e){return n(e)}};try{return Promise.resolve(miro.board.widgets.update([{id:e}])).then((function(){try{return setTimeout(t.checkCardExistence,1e3,e),o()}catch(e){return a()}}),a)}catch(e){a()}}))},t.hideList=function(){t.setState({showList:!1})},t.showList=function(){t.setState({showList:!0})},t.clearChosenCard=function(e){t.setState({chosenCardWidget:null,showList:!0},e)},t.handleBeforeClear=function(){return new Promise((function(e){return t.clearChosenCard(),e()}))},t.handleReveal=function(){return new Promise((function(e){return e()}))},t.init=function(){return new Promise((function(e,r){var n,o,a;if(!miro.currentUser)return e(t.setState({error:"Seems like the app is running not as a part of Miro board"}));var c=function(){try{return e()}catch(e){return r(e)}},i=function(e){try{return console.error(e),t.setState({error:e.toString()}),c()}catch(e){return r(e)}};try{return Promise.resolve(Promise.all([miro.currentUser.getId(),Object(y.a)()])).then((function(e){try{return o=(n=e)[0],(a=n[1].find((function(e){return Object(s.a)(e).author===o})))&&t.setChosenCard(a),t.setState({id:o,loading:!1},(function(){miro.onReady(t.onReady)})),c()}catch(e){return i(e)}}),i)}catch(e){i(e)}}))},t.onWidgetsDeleted=function(e){var r=t.state.chosenCardWidget;if(!r)return!1;e.data.find((function(e){return e.id===r.id}))&&t.clearChosenCard()},t}var r,a;a=e,(r=t).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var c=t.prototype;return c.componentDidMount=function(){this.init()},c.render=function(e,t){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var r=t.chosenCardWidget,n=t.showList,a=t.loading,c=t.error;return c?Object(o.f)(C,{severity:"error",title:"Oooops..."},Object(o.f)("code",null,c)):Object(o.f)(o.b,null,Object(o.f)("div",{class:u.a.controlsWrapper},Object(o.f)(l.a,{onReveal:this.handleReveal,onBeforeClear:this.handleBeforeClear})),Object(o.f)("div",{ref:this.ref,class:u.a.wrapper},!r&&!a&&Object(o.f)(h,{disabled:!n})),Boolean(r)&&Object(o.f)(v,{chosenCardWidget:r}),Object(o.f)(_,null))},t}(o.a);r.d(t,"default",(function(){return L}));var L=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={time:Date.now(),count:10},t.updateTime=function(){t.setState({time:Date.now()})},t.increment=function(){t.setState({count:t.state.count+1})},t}var r,n;n=e,(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var a=t.prototype;return a.componentDidMount=function(){this.timer=setInterval(this.updateTime,1e3)},a.componentWillUnmount=function(){clearInterval(this.timer)},a.render=function(){return Object(o.f)("div",{class:c.a.sidebar},Object(o.f)(P,null))},t}(o.a)},n5xL:function(e){e.exports={cardWrapper:"cardWrapper__1MWxn",appear:"appear__3Vz41",card:"card__3IJo5",floating:"floating__34mDX",hiddenImg:"hiddenImg__1BjkP",chosenCardWrapper:"chosenCardWrapper__3hGqt",wrapper:"wrapper__3uuSv",controlsWrapper:"controlsWrapper__1xvok",hiddenCard:"hiddenCard__33y6H"}},tVdo:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return c}));var n="3074457347007443177",o=[1,2,3,4,5,6],a=[{label:"0",value:0},{label:"½",value:.5},{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"5",value:5},{label:"8",value:8},{label:"13",value:13},{label:"20",value:20},{label:"40",value:40},{label:"100",value:100},{label:"∞",value:"infinity"},{label:"?",value:"question"},{label:"☕",value:"coffee"}],c=a.reduce((function(e,t){return e[t.value]=t,e}),{})},uXYu:function(e){e.exports={wrapper:"wrapper__jTLi2"}}}]);
//# sourceMappingURL=route-sidebar.chunk.8a71d.js.map