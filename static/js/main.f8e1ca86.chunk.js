(this.webpackJsonpsapp=this.webpackJsonpsapp||[]).push([[0],{114:function(e,t,n){e.exports=n(137)},137:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),c=n(32),u=n(200),i=n(199),l=n(79),s=a.a.createContext(null),p=n(56),m=n(57);var f=function(e){e()},d={notify:function(){}};function b(){var e=f,t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,a=n={callback:e,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){r&&null!==t&&(r=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}var g=function(){function e(t,n){Object(p.a)(this,e),this.store=t,this.parentSub=n,this.unsubscribe=null,this.listeners=d,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}return Object(m.a)(e,[{key:"addNestedSub",value:function(e){return this.trySubscribe(),this.listeners.subscribe(e)}},{key:"notifyNestedSubs",value:function(){this.listeners.notify()}},{key:"handleChangeWrapper",value:function(){this.onStateChange&&this.onStateChange()}},{key:"isSubscribed",value:function(){return Boolean(this.unsubscribe)}},{key:"trySubscribe",value:function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=b())}},{key:"tryUnsubscribe",value:function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=d)}}]),e}();function h(e){var t=e.store,n=e.context,o=e.children,c=Object(r.useMemo)((function(){var e=new g(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),u=Object(r.useMemo)((function(){return t.getState()}),[t]);Object(r.useEffect)((function(){return c.subscription.trySubscribe(),u!==t.getState()&&c.subscription.notifyNestedSubs(),function(){c.subscription.tryUnsubscribe(),c.subscription.onStateChange=null}}),[t,c,u]);var i=n||s;return a.a.createElement(i.Provider,{value:c},o)}var v=n(44),y=n(99),E=n(45),w=n(97),S=n(37),x=n.n(S),k=n(30);function O(e,t,n,r){function a(e,t){return e===t&&(0!==e||0!==t||1/e===1/t)}function o(e,t){if(a(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!a(e[n[o]],t[n[o]]))return!1;return!0}var c,u,i,l,s,p=!1;function m(a,p){var m=!o(p,u),f=a!==c;return c=a,u=p,m&&f?(i=e(c,u),t.dependsOnOwnProps&&(l=t(r,u)),s=n(i,l,u)):m?(e.dependsOnOwnProps&&(i=e(c,u)),t.dependsOnOwnProps&&(l=t(r,u)),s=n(i,l,u)):f?function(){var t=e(c,u),r=!o(t,i);return i=t,r&&(s=n(i,l,u)),s}():s}return function(a,o){return p?m(a,o):(i=e(c=a,u=o),l=t(r,u),s=n(i,l,u),p=!0,s)}}var j=[];function C(e,t){return[t.payload,e[1]+1]}function P(e,t,n){Object(r.useLayoutEffect)((function(){return e.apply(void 0,Object(w.a)(t))}),[e,t,n])}function N(e,t,n,r,a,o,c){e.current=r,t.current=a,n.current=!1,o.current&&(o.current=null,c())}function T(e,t,n,r,a,o,c,u,i){var l=!1,s=null,p=function(){if(!l){var t,p,m=e.getState();try{t=n(m,r.current)}catch(f){p=f,s=f}p||(s=null),t===a.current?o.current||u():(a.current=t,c.current=t,o.current=!0,i({type:"STORE_UPDATED",payload:{error:p}}))}};t.onStateChange=p,t.trySubscribe(),p();return function(){if(l=!0,t.tryUnsubscribe(),t.onStateChange=null,s)throw s}}var M=function(){return[null,0]};function A(e){var t=s;return function(n){var o=n.displayName||n.name||"Component",c="Connect(".concat(o,")"),u=r.useMemo;function i(o){var c=Object(r.useMemo)((function(){var e=o.reactReduxForwardedRef,t=Object(y.a)(o,["reactReduxForwardedRef"]);return[o.context,e,t]}),[o]),i=Object(E.a)(c,3),l=i[0],s=i[1],p=i[2],m=Object(r.useMemo)((function(){return l&&l.Consumer&&Object(k.isContextConsumer)(a.a.createElement(l.Consumer,null))?l:t}),[l]),f=Object(r.useContext)(m),d=Boolean(o.store)&&Boolean(o.store.getState)&&Boolean(o.store.dispatch),b=d?o.store:f.store,h=Object(r.useMemo)((function(){return t=b.dispatch,O((n=e).initMapStateToProps,n.initMapDispatchToProps,n.initMergeProps,t);var t,n}),[b]),w=Object(r.useMemo)((function(){var e=new g(b,d?null:f.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[b,d,f]),S=Object(E.a)(w,2),x=S[0],A=S[1],q=Object(r.useMemo)((function(){return d?f:Object(v.a)(Object(v.a)({},f),{},{subscription:x})}),[d,f,x]),I=Object(r.useReducer)(C,j,M),D=Object(E.a)(I,2),B=Object(E.a)(D[0],1)[0],F=D[1];if(B&&B.error)throw B.error;var R=Object(r.useRef)(),W=Object(r.useRef)(p),U=Object(r.useRef)(),H=Object(r.useRef)(!1),L=u((function(){return U.current&&p===W.current?U.current:h(b.getState(),p)}),[b,B,p]);P(N,[W,R,H,p,L,U,A]),P(T,[b,x,h,W,R,H,U,A,F],[b,x,h]);var _=Object(r.useMemo)((function(){return a.a.createElement(n,Object.assign({},L,{ref:s}))}),[s,L]);return Object(r.useMemo)((function(){return a.a.createElement(m.Provider,{value:q},_)}),[_,q])}var l=a.a.memo(i);return l.WrappedComponent=n,l.displayName=c,x()(l,n)}}var q,I=function(e,t,n){return Object(v.a)(Object(v.a)(Object(v.a)({},n),e),t)},D=function(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length},B=function(e){var t=function e(t,n){return e.dependsOnOwnProps?e.mapToProps(t,n):e.mapToProps(t)};return t.dependsOnOwnProps=!0,t.mapToProps=function(n,r){t.mapToProps=e,t.dependsOnOwnProps=D(e);var a=t(n,r);return"function"===typeof a&&(t.mapToProps=a,t.dependsOnOwnProps=D(a),a=t(n,r)),a},t};function F(e,t){return A({initMapStateToProps:B(e),initMapDispatchToProps:B(t),initMergeProps:I})}q=o.unstable_batchedUpdates,f=q;var R=n(14),W=n(6),U=n.n(W),H=n(10),L=n(166),_=n(204),J=n(55),G=n(201),K=n(169),z=n(165),Q=n(167),V=function(e){return new Uint8Array(e.split("").map((function(e){return e.charCodeAt()}))).buffer},X=function(e){return Array.from(new Uint8Array(e)).map((function(e){return String.fromCharCode(e)})).join("")};function Y(e,t){return Z.apply(this,arguments)}function Z(){return(Z=Object(H.a)(U.a.mark((function e(t,n){var r,a,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest({name:"SHA-256"},V(n));case 2:return r=e.sent,e.next=5,crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["encrypt"]);case 5:return a=e.sent,e.next=8,crypto.subtle.encrypt({name:"AES-GCM",iv:r},a,V(t));case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t){return ee.apply(this,arguments)}function ee(){return(ee=Object(H.a)(U.a.mark((function e(t,n){var r,a,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest({name:"SHA-256"},V(n));case 2:return r=e.sent,e.next=5,crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["decrypt"]);case 5:return a=e.sent,e.next=8,crypto.subtle.decrypt({name:"AES-GCM",iv:r},a,t);case 8:return o=e.sent,e.abrupt("return",X(o));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te=function(e,t,n){return ne.apply(this,arguments)};function ne(){return(ne=Object(H.a)(U.a.mark((function e(t,n,r){var a,o,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(JSON.stringify({url:t,init:n}),navigator.userAgent);case 2:return a=e.sent,e.next=5,fetch("https://data.mcsmds.tk/sapi",{method:"POST",body:a});case 5:return o=e.sent,e.t0=JSON,e.t1=$,e.next=10,o.arrayBuffer();case 10:return e.t2=e.sent,e.t3=navigator.userAgent,e.next=14,(0,e.t1)(e.t2,e.t3);case 14:return e.t4=e.sent,c=e.t0.parse.call(e.t0,e.t4),r||(c.body=(new DOMParser).parseFromString(decodeURIComponent(escape(c.body)),"text/html")),e.abrupt("return",c);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var re=function(e,t){return ae.apply(this,arguments)};function ae(){return(ae=Object(H.a)(U.a.mark((function e(t,n){var r,a,o,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te("/templates/");case 2:return r=e.sent,a=r.cookie.replace("; path=/",""),o=r.body.querySelector("[action='../login.php']>[name='securetoken']").value,e.next=7,te("/login.php",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Cookie:a},body:"UserLogin="+t+"&UserPassword="+n+"&securetoken="+o});case 7:return c=e.sent,e.abrupt("return",c.body.querySelector("[name='securetoken']")?"error":{cookie:a});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe=function(e,t){return ce.apply(this,arguments)};function ce(){return(ce=Object(H.a)(U.a.mark((function e(t,n){var r,a,o,c,u;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=["viewfolder.php?FolderID=2","viewfolder.php?FolderID=0","viewfolder.php?FolderID=1","trash.php","viewfolder.php?FolderID="+n][n>3?4:n],e.next=3,te("/home/imail/"+a,{headers:{Cookie:t}});case 3:if(!(o=e.sent).body.querySelector("[name='securetoken']")){e.next=6;break}return e.abrupt("return","error");case 6:if(o=null===(r=o.body.querySelector(".tablebottom td[width='100%']"))||void 0===r?void 0:r.textContent.split("\u7e3d\u6578 ")[1]){e.next=9;break}return e.abrupt("return",[]);case 9:return e.next=11,te("/home/imail/"+a,{headers:{Cookie:t+"; ck_page_size="+o}});case 11:return(c=e.sent).body.querySelector(".tablebottom").parentNode.remove(),u=[],c.body.querySelectorAll(".tabletop~tr").forEach((function(e){if(0===n||n>3){var t=e.querySelector("[class^='iMailsender']").textContent,r=e.querySelector("[class^='iMailsubject']").textContent.trim(),a=e.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];u.push({title:t,subtitle:r,id:a})}else if(1===n){var o=e.querySelector("[title]").getAttribute("title"),c=e.querySelector("[class^='iMailsubject']").textContent.trim(),i=e.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];u.push({title:"\u6536\u4ef6\u8005: "+o,subtitle:c,id:i})}else if(2===n){var l=e.querySelector("[class^='iMailsubject']").textContent.trim();u.push({title:"\u8349\u7a3f",subtitle:l})}else if(3===n){var s=e.querySelector("[class^='iMailsender']").textContent,p=e.querySelector("[class^='iMailsubject']").textContent.trim();u.push({title:s,subtitle:p})}})),e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ue=function(e){return ie.apply(this,arguments)};function ie(){return(ie=Object(H.a)(U.a.mark((function e(t){var n,r,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te("/home/imail/folder.php",{headers:{Cookie:t}});case 2:if(!(n=e.sent).body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return r=n.body.querySelectorAll(".iMailsubject"),a=[],r.forEach((function(e,t){if(t%2!==1){var n=e.text,r=parseInt(e.getAttribute("href").split("=")[1]);a.push({name:n,id:r})}})),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le=n(89),se=n(162),pe=n(69),me=n.n(pe);function fe(e){var t={replace:function(e){var n=e.name,r=e.attribs,o=e.children;return n&&"a"===n?a.a.createElement(se.a,{href:r.href},me.a.domToReact(o,t)):n&&"p"===n?a.a.createElement(J.a,null,me.a.domToReact(o,t)):void 0}};return Object(le.renderToStaticMarkup)(me()(e,t))}var de=function(e,t){return be.apply(this,arguments)};function be(){return(be=Object(H.a)(U.a.mark((function e(t,n){var r,a,o,c,u,i,l,s;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te("/home/imail/viewmail_content.php?CampusMailID="+n,{headers:{Cookie:t}});case 2:if(!(r=e.sent).body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return a=r.body.querySelectorAll(".tabletext"),o=Object(E.a)(a,5),c=o[0],u=o[1],i=(i=o[4]).textContent,u=u.textContent,c=c.querySelector("#PastDateDiv").getAttribute("title"),l=[],r.body.querySelectorAll("img[src='/images/file.gif']").forEach((function(e){l.push(e.nextElementSibling.textContent)})),(s=r.body.querySelector(".style1").parentNode).querySelectorAll("[class]").forEach((function(e){return e.removeAttribute("class")})),s.querySelectorAll("[lang]").forEach((function(e){return e.removeAttribute("lang")})),s.querySelectorAll("[style]").forEach((function(e){e.style.fontFamily="",e.style.lineHeight=""})),console.log(s),s=fe(s.innerHTML),e.abrupt("return",{title:i,sender:u,time:c,files:l,content:s});case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ge=function(e,t){return he.apply(this,arguments)};function he(){return(he=Object(H.a)(U.a.mark((function e(t,n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te("/home/imail/remove.php?CampusMailID="+n,{headers:{Cookie:t}});case 2:if(!e.sent.body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ve=function(e,t,n,r){return ye.apply(this,arguments)};function ye(){return(ye=Object(H.a)(U.a.mark((function e(t,n,r,a){var o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=["2","0","1","2",r][r>3?4:r],e.next=3,te("/home/imail/changefolder.php",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Cookie:t},body:"CampusMailID[]="+n+"&FolderID="+o+"&targetFolderID="+a});case 3:if(!e.sent.body.querySelector("[name='securetoken']")){e.next=6;break}return e.abrupt("return","error");case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ee=function(e,t,n){return we.apply(this,arguments)};function we(){return(we=Object(H.a)(U.a.mark((function e(t,n,r){var a,o,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te("/home/imail/downloadattachment.php?CampusMailID="+n+"&b_filename="+encodeURIComponent(btoa(unescape(encodeURIComponent(r)))),{headers:{Cookie:t}},!0);case 2:return a=e.sent,o=a.body.split("").map((function(e){return e.codePointAt(0)})),c=Uint8Array.from(o),e.abrupt("return",new Blob([c.buffer]));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Se={login:function(){var e=Object(H.a)(U.a.mark((function e(){var t,n,r,a=arguments;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:window.getStorage("username"),n=a.length>1&&void 0!==a[1]?a[1]:window.getStorage("password"),e.next=4,re(t,n);case 4:if("error"!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:return window.setStorage("username",t),window.setStorage("password",n),window.setStorage("cookie",r.cookie),e.abrupt("return",window.getStorage("cookie"));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),mail:function(){var e=Object(H.a)(U.a.mark((function e(){var t,n,r,a,o=arguments;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:0,e.next=3,oe(window.getStorage("cookie"),t);case 3:if("error"!==(n=e.sent)){e.next=12;break}return e.next=7,this.login();case 7:return r=e.sent,e.next=10,oe(r,t);case 10:return a=e.sent,e.abrupt("return",a);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),label:function(){var e=Object(H.a)(U.a.mark((function e(){var t,n,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue(window.getStorage("cookie"));case 2:if("error"!==(t=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return n=e.sent,e.next=9,ue(n);case 9:return r=e.sent,e.abrupt("return",r);case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),content:function(){var e=Object(H.a)(U.a.mark((function e(t){var n,r,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(window.getStorage("cookie"),t);case 2:if("error"!==(n=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return r=e.sent,e.next=9,de(r,t);case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),moveto:function(){var e=Object(H.a)(U.a.mark((function e(t,n,r){var a,o,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve(window.getStorage("cookie"),t,n,r);case 2:if("error"!==(a=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return o=e.sent,e.next=9,ve(o,t,n,r);case 9:return c=e.sent,e.abrupt("return",c);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}(),remove:function(){var e=Object(H.a)(U.a.mark((function e(t){var n,r,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge(window.getStorage("cookie"),t);case 2:if("error"!==(n=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return r=e.sent,e.next=9,ge(r,t);case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),dawnload:function(){var e=Object(H.a)(U.a.mark((function e(t){var n,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee(window.getStorage("cookie"),window.getStorage("contentid"),t);case 2:n=e.sent,(r=document.createElement("a")).download=t,r.href=URL.createObjectURL(n),r.click();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xe=Object(z.a)((function(e){return{root:{marginTop:e.spacing(9),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{marginTop:e.spacing(2)}}})),ke=function(e){return function(t){t.preventDefault(),e(document.querySelector("#username").value,document.querySelector("#password").value)}},Oe=F((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){var t=Object(R.e)(),n=xe(),r=function(){var n=Object(H.a)(U.a.mark((function n(r,a){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Se.login(r,a);case 2:if(n.sent){n.next=5;break}return n.abrupt("return");case 5:t.replace("mails"),Se.mail().then((function(t){return e.setStorage("mails",t)})),Se.label().then((function(t){return e.setStorage("label",t)}));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return a.a.createElement(L.a,{className:n.root,maxWidth:"xs"},a.a.createElement(_.a,{className:n.avatar},a.a.createElement(Q.a,null)),a.a.createElement(J.a,{variant:"h5"},"\u767b\u5165"),a.a.createElement("form",{className:n.form},a.a.createElement(G.a,{autoComplete:"username",fullWidth:!0,id:"username",label:"\u767b\u5165\u7de8\u865f",margin:"normal",variant:"outlined"}),a.a.createElement(G.a,{autoComplete:"current-password",fullWidth:!0,id:"password",label:"\u5bc6\u78bc",margin:"normal",type:"password",variant:"outlined"}),a.a.createElement(K.a,{className:n.submit,color:"primary",fullWidth:!0,onClick:ke(r),variant:"outlined"},"\u767b\u5165")))})),je=n(202),Ce=n(190),Pe=n(35),Ne=n(138),Te=n(170),Me=n(171),Ae=n(81),qe=n(172),Ie=n(205),De=n(175),Be=n(4),Fe=n(173),Re=n(174),We=Object(Be.a)((function(e){var t;return{root:(t={alignItems:"center",display:"flex",minHeight:56-e.spacing(1)},Object(Pe.a)(t,e.breakpoints.up("sm"),{minHeight:64-e.spacing(1)}),Object(Pe.a)(t,"margin",e.spacing(1)),Object(Pe.a)(t,"marginBottom",0),Object(Pe.a)(t,"padding","0 3px"),t),color:{backgroundColor:"#fffe"},icon:{padding:12},input:{flex:1,margin:"0 6px"}}}))((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(Ne.a,{appear:!1,in:!Object(Te.a)()},a.a.createElement(Me.a,{className:e.classes.color,elevation:0},a.a.createElement(Ae.a,{className:e.classes.root},a.a.createElement(qe.a,{"aria-label":"\u76ee\u9304",className:e.classes.icon,onClick:function(){return e.onToggle(!0)}},a.a.createElement(Fe.a,null)),a.a.createElement(Ie.a,{className:e.classes.input,inputProps:{"aria-label":"\u5728\u90f5\u4ef6\u4e2d\u641c\u5c0b"},placeholder:"\u5728\u90f5\u4ef6\u4e2d\u641c\u5c0b"}),a.a.createElement(qe.a,{"aria-label":"\u641c\u5c0b",className:e.classes.icon,onClick:function(){return e.onToggle(!0)}},a.a.createElement(Re.a,null))))),a.a.createElement(De.a,null))})),Ue=n(203),He=n(176),Le=n(168),_e=n(181),Je=n(182),Ge=n(183),Ke=n(177),ze=n(178),Qe=n(179),Ve=n(180),Xe=n(184),Ye=n(185),Ze=n(186),$e=function(e,t){return function(n){(!n||"keydown"!==n.type||"Shift"!==n.key&&"Tab"!==n.key)&&e.onToggle(t)}},et=Object(Be.a)((function(e){return{list:{width:250,maxWidth:"75vw"},toolbar:e.mixins.toolbar}}))((function(e){var t=Object(R.e)();return a.a.createElement(Ue.a,{disableSwipeToOpen:!1,onClose:$e(e,!1),onOpen:$e(e,!0),open:e.open},a.a.createElement("div",{className:e.classes.list,onClick:$e(e,!1),onKeyDown:$e(e,!1)},a.a.createElement(je.a,{alignItems:"center",className:e.classes.toolbar,display:"flex",px:2},a.a.createElement(J.a,{color:"secondary",variant:"h6"},"School APP")),a.a.createElement(He.a,null),a.a.createElement(Le.a,null,[[a.a.createElement(Ke.a,null),"\u6536\u4ef6\u7bb1"],[a.a.createElement(ze.a,null),"\u5bc4\u4ef6\u7bb1"],[a.a.createElement(Qe.a,null),"\u8349\u7a3f\u7bb1"],[a.a.createElement(Ve.a,null),"\u5783\u573e\u7bb1"]].map((function(t,n){return a.a.createElement(_e.a,{button:!0,onClick:function(){return e.onPageChange(n)}},a.a.createElement(Je.a,null,t[0]),a.a.createElement(Ge.a,{primary:t[1]}))}))),e.label&&e.label.length>0&&a.a.createElement(r.Fragment,null,a.a.createElement(He.a,null),a.a.createElement(Le.a,null,e.label.map((function(t){return a.a.createElement(_e.a,{button:!0,onClick:function(){return e.onPageChange(t.id)}},a.a.createElement(Je.a,null,a.a.createElement(Xe.a,null)),a.a.createElement(Ge.a,{primary:t.name}))})))),a.a.createElement(He.a,null),a.a.createElement(Le.a,null,[[a.a.createElement(Ye.a,null),"\u8a2d\u5b9a",function(){return t.push("setting")}],[a.a.createElement(Ze.a,null),"\u8aaa\u660e",function(){return t.push("about")}]].map((function(e){return a.a.createElement(_e.a,{button:!0,onClick:e[2]},a.a.createElement(Je.a,null,e[0]),a.a.createElement(Ge.a,{primary:e[1]}))})))))})),tt=n(187),nt=n(93),rt=n(188),at=Object(Be.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3),color:e.palette.secondary.main,backgroundColor:e.palette.secondary.contrastText,"&:hover":{backgroundColor:Object(nt.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.secondary.contrastText}}},no:{height:56+e.spacing(6)-e.spacing(2)}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(tt.a,{"aria-label":"\u64b0\u5beb",className:e.classes.fab},a.a.createElement(rt.a,null)),a.a.createElement("div",{className:e.classes.no}))})),ot=n(189),ct=Object(Be.a)({truncate:{"& *":{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}})((function(e){return e.items&&e.items.length>0&&a.a.createElement(Le.a,null,e.items.map((function(t){return a.a.createElement(_e.a,{button:!0,onClick:function(){return e.onEachClick(t.id)}},a.a.createElement(ot.a,null,a.a.createElement(_.a,null,t.title[0])),a.a.createElement(Ge.a,{className:e.classes.truncate,primary:t.title,secondary:t.subtitle}))})))})),ut=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},it=F((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){var t=Object(R.e)(),n=function(){var n=Object(H.a)(U.a.mark((function n(r){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0!==r){n.next=2;break}return n.abrupt("return");case 2:return e.setStorage("contentid",r),Se.content(r).then((function(t){return e.setStorage("content",t)})),n.next=6,ut(275);case 6:t.push("content");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement(We,{onToggle:function(t){return e.setStorage("drawer",t)}}),a.a.createElement(et,{label:e.getStorage("label"),onPageChange:function(t){e.setStorage("mails",null),Se.mail(t).then((function(t){return e.setStorage("mails",t)})),e.setStorage("pagesid",t)},onToggle:function(t){return e.setStorage("drawer",t)},open:e.getStorage("drawer")}),e.getStorage("mails")?a.a.createElement(ct,{items:e.getStorage("mails"),onEachClick:n}):a.a.createElement(je.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"calc(100% - 64px - 88px)"}},a.a.createElement(Ce.a,null)),a.a.createElement(at,null))})),lt=Object(Be.a)((function(e){return{root:{margin:e.spacing(1,0),padding:e.spacing(2)}}}))((function(e){return e.files.length>0&&a.a.createElement(Ae.a,{className:e.classes.root,variant:"outlined"},e.files.map((function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(se.a,{onClick:function(){return e.onClick(t)}},t),a.a.createElement("br",null))})))})),st=Object(Be.a)((function(e){return{root:{padding:e.spacing(1,0)}}}))((function(e){return a.a.createElement(_e.a,{className:e.classes.root,elementType:"div"},a.a.createElement(ot.a,null,a.a.createElement(_.a,null,e.content.sender[0])),a.a.createElement(Ge.a,{primary:e.content.sender,secondary:e.content.time}))})),pt=n(191),mt=n(192),ft=Object(Be.a)((function(e){return{color:{backgroundColor:"#fffe"},grow:{flexGrow:1}}}))((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(Me.a,{className:e.classes.color,elevation:Object(Te.a)({disableHysteresis:!0,threshold:0})?4:0},a.a.createElement(De.a,null,a.a.createElement(qe.a,{"aria-label":"\u8fd4\u56de",edge:"start",onClick:e.onBack},a.a.createElement(pt.a,null)),a.a.createElement("div",{className:e.classes.grow}),a.a.createElement(qe.a,{"aria-label":"\u5220\u9664",onClick:e.onRemove},a.a.createElement(Ve.a,null)),a.a.createElement(qe.a,{"aria-label":"\u66f4\u591a",edge:"end",onClick:function(){return e.onToggle()}},a.a.createElement(mt.a,null)))),a.a.createElement(De.a,null))})),dt=n(28),bt=function(e,t){return function(n){(!n||"keydown"!==n.type||"Shift"!==n.key&&"Tab"!==n.key)&&e.onToggle(t)}},gt=Object(Be.a)((function(e){return{list:{width:"auto"}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(dt.a,{anchor:"bottom",onClose:bt(e,!1),open:e.open},a.a.createElement("div",{className:e.classes.list,onClick:bt(e,!1),onKeyDown:bt(e,!1)},a.a.createElement(Le.a,null,[["\u79fb\u81f3",e.onMove],["\u5217\u5370",function(){return window.print()}],["\u53d6\u6d88"]].map((function(e){return a.a.createElement(_e.a,{button:!0,onClick:e[1]},a.a.createElement(Ge.a,{primary:e[0]}))}))))))})),ht=n(193),vt=n(194),yt=a.a.forwardRef((function(e,t){return a.a.createElement(Ne.a,Object.assign({direction:"up",ref:t},e))})),Et=Object(Be.a)((function(e){return{appBar:{position:"relative",backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ht.a,{fullScreen:!0,open:e.open1,onClose:e.handleClose,TransitionComponent:yt},a.a.createElement(Me.a,{className:e.classes.appBar},a.a.createElement(De.a,null,a.a.createElement(qe.a,{edge:"start",onClick:e.handleClose,"aria-label":"close"},a.a.createElement(vt.a,null)),a.a.createElement(J.a,{variant:"h6",className:e.classes.title,color:"textPrimary"},"\u79fb\u81f3"))),a.a.createElement(Le.a,null,a.a.createElement(_e.a,{button:!0,onClick:function(){return e.moveto(2)}},a.a.createElement(Je.a,null,a.a.createElement(Ke.a,null)),a.a.createElement(Ge.a,{primary:"\u6536\u4ef6\u7bb1"})),a.a.createElement(_e.a,{button:!0,onClick:function(){return e.moveto(0)}},a.a.createElement(Je.a,null,a.a.createElement(ze.a,null)),a.a.createElement(Ge.a,{primary:"\u5bc4\u4ef6\u7bb1"}))),e.label.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(He.a,null),a.a.createElement(Le.a,null,e.label.map((function(t){return a.a.createElement(_e.a,{button:!0,onClick:function(){return e.moveto(t.id)}},a.a.createElement(Je.a,null,a.a.createElement(Xe.a,null)),a.a.createElement(Ge.a,{primary:t.name}))}))))))})),wt=n(195),St=n(196),xt=n(197),kt=n(198),Ot=Object(Be.a)((function(e){return{root:{marginTop:"auto",marginBottom:e.spacing(2)}}}))((function(e){return a.a.createElement("div",{className:e.classes.root},a.a.createElement(wt.a,{container:!0,spacing:1},a.a.createElement(wt.a,{item:!0,xs:4},a.a.createElement(K.a,{fullWidth:!0,startIcon:a.a.createElement(St.a,null),variant:"outlined"},"\u56de\u8986")),a.a.createElement(wt.a,{item:!0,xs:4},a.a.createElement(K.a,{fullWidth:!0,startIcon:a.a.createElement(xt.a,null),variant:"outlined"},"\u56de\u8986\u5168\u90e8")),a.a.createElement(wt.a,{item:!0,xs:4},a.a.createElement(K.a,{fullWidth:!0,startIcon:a.a.createElement(kt.a,null),variant:"outlined"},"\u8f49\u5bc4"))))})),jt=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},Ct=Object(z.a)((function(e){return{root:Object(Pe.a)({display:"flex",flexDirection:"column",minHeight:"calc(100% - 56px)"},e.breakpoints.up("sm"),{minHeight:"calc(100% - 64px)"})}})),Pt=F((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){var t=Ct().root,n=Object(R.e)(),r=function(){var t=Object(H.a)(U.a.mark((function t(){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.goBack(),t.next=3,jt(275);case 3:e.setStorage("content",null),e.setStorage("open1",!1),e.setStorage("open2",!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(H.a)(U.a.mark((function t(){var r,a=arguments;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=!(a.length>0&&void 0!==a[0])||a[0])?n.push("content/more"):n.goBack(),e.setStorage("open1",r);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(H.a)(U.a.mark((function t(r){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,jt(275);case 2:r?n.push("content/move"):n.goBack(),e.setStorage("open2",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement(ft,{onBack:r,onToggle:o,onRemove:function(){Se.remove(e.getStorage("contentid")),alert("\u79fb\u9664\u5230\u56de\u6536\u7bb1")}}),a.a.createElement(R.a,{path:"/content/more"},a.a.createElement(gt,{onMove:function(){return c(!0)},onToggle:o,open:e.getStorage("open1")})),a.a.createElement(R.a,{path:"/content/move"},a.a.createElement(Et,{label:e.getStorage("label"),moveto:function(t){Se.moveto(e.getStorage("contentid"),e.getStorage("pagesid"),t).then((function(){return console.log("ok")}))},open1:e.getStorage("open2"),handleClose:function(){return c(!1)}})),e.getStorage("content")?a.a.createElement(L.a,{maxWidth:"md",className:t},a.a.createElement(J.a,{variant:"h5"},e.getStorage("content").title),a.a.createElement(st,{content:e.getStorage("content")}),a.a.createElement(lt,{files:e.getStorage("content").files,onClick:function(e){return Se.dawnload(e)}}),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.getStorage("content").content},style:{marginBottom:8}}),a.a.createElement(Ot,null)):a.a.createElement(je.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"calc(100% - 64px)"}},a.a.createElement(Ce.a,null)))})),Nt=Object(z.a)((function(e){return{appBar:{backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)},submit:{marginTop:e.spacing(2)}}})),Tt=F((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){var t=Object(R.e)(),n=Nt();return a.a.createElement(a.a.Fragment,null,a.a.createElement(Me.a,{className:n.appBar},a.a.createElement(De.a,null,a.a.createElement(qe.a,{edge:"start",onClick:function(){return t.goBack()},"aria-label":"close"},a.a.createElement(pt.a,null)),a.a.createElement(J.a,{variant:"h6",className:n.title,color:"textPrimary"},"\u8a2d\u5b9a"))),a.a.createElement(De.a,null),a.a.createElement(L.a,{maxWidth:"md"},a.a.createElement(K.a,{className:n.submit,variant:"contained",onClick:function(t){t.preventDefault(),e.setStorage("username",null),e.setStorage("password",null),e.setStorage("cookie",null),e.setStorage("contentid",null),e.setStorage("pagesid",0),e.setStorage("content",null),e.setStorage("label",null),e.setStorage("mails",null),e.setStorage("open1",!1),e.setStorage("open2",!1),e.setStorage("drawer",!1)}},"\u5220\u9664\u6240\u6709\u6578\u64da")))})),Mt=Object(Be.a)((function(e){return{appBar:{backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)}}}))((function(e){var t=Object(R.e)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(Me.a,{className:e.classes.appBar},a.a.createElement(De.a,null,a.a.createElement(qe.a,{edge:"start",onClick:function(){return t.goBack()},"aria-label":"close"},a.a.createElement(pt.a,null)),a.a.createElement(J.a,{variant:"h6",className:e.classes.title,color:"textPrimary"},"\u8aaa\u660e"))),a.a.createElement(De.a,null),a.a.createElement(L.a,{maxWidth:"md"},a.a.createElement(J.a,{variant:"h5",className:e.classes.title,color:"textPrimary"},"\u6211\u4e0d\u77e5\u9053\u8a72\u5728\u9019\u88e1\u5beb\u4ec0\u9ebc\uff01")))})),At=F((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){window.getStorage=e.getStorage,window.setStorage=e.setStorage;var t=Object(R.e)();return Object(r.useEffect)((function(){window.getStorage("username")&&window.getStorage("password")?(t.replace("mails"),window.setStorage("open1",!1),window.setStorage("open2",!1),window.setStorage("drawer",!1),Se.mail(window.getStorage("pagesid")).then((function(e){return window.setStorage("mails",e)})),Se.label().then((function(e){return window.setStorage("label",e)}))):t.replace("")}),[t]),a.a.createElement(r.Fragment,null,a.a.createElement(R.a,{exact:!0,path:"/",component:Oe}),a.a.createElement(R.a,{exact:!0,path:"/mails",component:it}),a.a.createElement(R.a,{path:"/content",component:Pt}),a.a.createElement(R.a,{path:"/setting",component:Tt}),a.a.createElement(R.a,{path:"/about",component:Mt}))})),qt=n(95),It=Object(qt.a)({palette:{primary:{main:"#1976d2"},secondary:{main:"#e53935"},background:{default:"#fff"}}}),Dt=function(){return JSON.parse(localStorage.getItem("SAPP"))},Bt=n(98),Ft=n(96),Rt=function(e){Object(Bt.a)(n,e);var t=Object(Ft.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={canShow:!1},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.store.dispatch({type:"init",show:function(){return e.setState({canShow:!0})}})}},{key:"render",value:function(){return this.state.canShow?this.props.children:null}}]),n}(r.PureComponent),Wt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case e:return r.value;default:return n}}},Ut=Wt("username"),Ht=Wt("password"),Lt=Wt("cookie"),_t=Wt("contentid"),Jt=Wt("pagesid",0),Gt=Wt("drawer",!1),Kt=Wt("open1",!1),zt=Wt("open2",!1),Qt=Wt("mails"),Vt=Wt("label"),Xt=Wt("content"),Yt=function(e){var t=function(e){return function(e){localStorage.setItem("SAPP",JSON.stringify(e))}(e),e};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return"init"===r.type&&r.show(),r.type.startsWith("@@redux")?t(Dt()||e(n,r)):t(e(n,r))}}(Object(l.a)({username:Ut,password:Ht,cookie:Lt,contentid:_t,pagesid:Jt,drawer:Gt,open1:Kt,open2:zt,mails:Qt,label:Vt,content:Xt})),Zt=Object(l.b)(Yt);Object(o.render)(a.a.createElement(i.a,{theme:It},a.a.createElement(u.a,null),a.a.createElement(h,{store:Zt},a.a.createElement(Rt,{store:Zt},a.a.createElement(c.a,null,a.a.createElement(At,null))))),document.querySelector("#root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.f8e1ca86.chunk.js.map