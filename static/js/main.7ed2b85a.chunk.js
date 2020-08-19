(this.webpackJsonpsapp=this.webpackJsonpsapp||[]).push([[0],{113:function(e,t,n){e.exports=n(136)},136:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),c=n(32),u=n(199),l=n(198),i=n(79),s=a.a.createContext(null),p=n(56),m=n(57);var f=function(){function e(t,n){Object(p.a)(this,e),this.store=t,this.parentSub=n,this.unsubscribe=null,this.listeners={notify:function(){}},this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}return Object(m.a)(e,[{key:"addNestedSub",value:function(e){return this.trySubscribe(),this.listeners.subscribe(e)}},{key:"notifyNestedSubs",value:function(){this.listeners.notify()}},{key:"handleChangeWrapper",value:function(){this.onStateChange&&this.onStateChange()}},{key:"isSubscribed",value:function(){return Boolean(this.unsubscribe)}},{key:"trySubscribe",value:function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=null,t=null;return{clear:function(){e=null,t=null},notify:function(){Object(o.unstable_batchedUpdates)((function(){for(var t=e;t;)t.callback(),t=t.next}))},get:function(){for(var t=[],n=e;n;)t.push(n),n=n.next;return t},subscribe:function(n){var r=!0,a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){r&&null!==e&&(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}())}},{key:"tryUnsubscribe",value:function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners={notify:function(){}})}}]),e}();function b(e){var t=e.store,n=e.children,o=Object(r.useMemo)((function(){var e=new f(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),c=Object(r.useMemo)((function(){return t.getState()}),[t]);return Object(r.useEffect)((function(){return o.subscription.trySubscribe(),c!==t.getState()&&o.subscription.notifyNestedSubs(),function(){o.subscription.tryUnsubscribe(),o.subscription.onStateChange=null}}),[t,o,c]),a.a.createElement(s.Provider,{value:o},n)}var d=n(20),g=n(50),h=n(97),v=n(38),y=n.n(v);function E(e){var t=function(e){return{getStorage:function(t){return e[t]}}};function n(e,t){if(e===t)return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||e[n[a]]!==t[n[a]])return!1;return!0}var r,a,o,c,u,l=!1;function i(e,l){var i=!n(l,a),s=e!==r;return r=e,a=l,i&&s?(o=t(r),u=Object(d.a)(Object(d.a)(Object(d.a)({},a),o),c)):i?u=Object(d.a)(Object(d.a)(Object(d.a)({},a),o),c):s?function(){var e=t(r),l=!n(e,o);return o=e,l&&(u=Object(d.a)(Object(d.a)(Object(d.a)({},a),o),c)),u}():u}return function(n,s){return l?i(n,s):(a=s,o=t(r=n),c=function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}(e),u=Object(d.a)(Object(d.a)(Object(d.a)({},a),o),c),l=!0,u)}}function w(e,t,n){Object(r.useLayoutEffect)((function(){return e.apply(void 0,Object(h.a)(t))}),[e,t,n])}function S(e,t,n,r,a,o,c){e.current=r,t.current=a,n.current=!1,o.current&&(o.current=null,c())}function x(e,t,n,r,a,o,c,u,l){var i=!1,s=function(){if(!i){var t=e.getState(),s=n(t,r.current);s===a.current?o.current||u():(a.current=s,c.current=s,o.current=!0,l({type:"STORE_UPDATED",payload:{error:void 0}}))}};t.onStateChange=s,t.trySubscribe(),s();return function(){i=!0,t.tryUnsubscribe(),t.onStateChange=null}}function k(e){var t=r.useMemo;var n=a.a.memo((function(n){var o=Object(r.useMemo)((function(){return n}),[n]);console.log(o);var c=Object(r.useContext)(s),u=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch),l=u?n.store:c.store,i=Object(r.useMemo)((function(){return E(l.dispatch)}),[l]),p=Object(r.useMemo)((function(){var e=new f(l,u?null:c.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[l,u,c]),m=Object(g.a)(p,2),b=m[0],h=m[1],v=Object(r.useMemo)((function(){return u?c:Object(d.a)(Object(d.a)({},c),{},{subscription:b})}),[u,c,b]),y=Object(r.useReducer)((function(e,t){return[t.payload]}),[],(function(){return[null]})),k=Object(g.a)(y,2),O=Object(g.a)(k[0],1)[0],j=k[1];if(O&&O.error)throw O.error;var C=Object(r.useRef)(),N=Object(r.useRef)(o),A=Object(r.useRef)(),M=Object(r.useRef)(!1),T=t((function(){return A.current&&o===N.current?A.current:i(l.getState(),o)}),[l,O,o]);w(S,[N,C,M,o,T,A,h]),w(x,[l,b,i,N,C,M,A,h,j],[l,b,i]);var q=Object(r.useMemo)((function(){return a.a.createElement(e,T)}),[T]);return Object(r.useMemo)((function(){return a.a.createElement(s.Provider,{value:v},q)}),[q,v])}));return n.WrappedComponent=e,y()(n,e)}var O=n(14),j=n(6),C=n.n(j),N=n(10),A=n(165),M=n(203),T=n(55),q=n(200),P=n(168),I=n(164),B=n(166),D=function(e){return new Uint8Array(e.split("").map((function(e){return e.charCodeAt()}))).buffer},F=function(e){return Array.from(new Uint8Array(e)).map((function(e){return String.fromCharCode(e)})).join("")};function W(e,t){return R.apply(this,arguments)}function R(){return(R=Object(N.a)(C.a.mark((function e(t,n){var r,a,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest({name:"SHA-256"},D(n));case 2:return r=e.sent,e.next=5,crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["encrypt"]);case 5:return a=e.sent,e.next=8,crypto.subtle.encrypt({name:"AES-GCM",iv:r},a,D(t));case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t){return H.apply(this,arguments)}function H(){return(H=Object(N.a)(C.a.mark((function e(t,n){var r,a,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest({name:"SHA-256"},D(n));case 2:return r=e.sent,e.next=5,crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["decrypt"]);case 5:return a=e.sent,e.next=8,crypto.subtle.decrypt({name:"AES-GCM",iv:r},a,t);case 8:return o=e.sent,e.abrupt("return",F(o));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(e,t,n){return _.apply(this,arguments)};function _(){return(_=Object(N.a)(C.a.mark((function e(t,n,r){var a,o,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(JSON.stringify({url:t,init:n}),navigator.userAgent);case 2:return a=e.sent,e.next=5,fetch("https://data.mcsmds.tk/sapi",{method:"POST",body:a});case 5:return o=e.sent,e.t0=JSON,e.t1=U,e.next=10,o.arrayBuffer();case 10:return e.t2=e.sent,e.t3=navigator.userAgent,e.next=14,(0,e.t1)(e.t2,e.t3);case 14:return e.t4=e.sent,c=e.t0.parse.call(e.t0,e.t4),r||(c.body=(new DOMParser).parseFromString(decodeURIComponent(escape(c.body)),"text/html")),e.abrupt("return",c);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e,t){return G.apply(this,arguments)};function G(){return(G=Object(N.a)(C.a.mark((function e(t,n){var r,a,o,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("/templates/");case 2:return r=e.sent,a=r.cookie.replace("; path=/",""),o=r.body.querySelector("[action='../login.php']>[name='securetoken']").value,e.next=7,L("/login.php",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Cookie:a},body:"UserLogin="+t+"&UserPassword="+n+"&securetoken="+o});case 7:return c=e.sent,e.abrupt("return",c.body.querySelector("[name='securetoken']")?"error":{cookie:a});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=function(e,t){return z.apply(this,arguments)};function z(){return(z=Object(N.a)(C.a.mark((function e(t,n){var r,a,o,c,u;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=["viewfolder.php?FolderID=2","viewfolder.php?FolderID=0","viewfolder.php?FolderID=1","trash.php","viewfolder.php?FolderID="+n][n>3?4:n],e.next=3,L("/home/imail/"+a,{headers:{Cookie:t}});case 3:if(!(o=e.sent).body.querySelector("[name='securetoken']")){e.next=6;break}return e.abrupt("return","error");case 6:if(o=null===(r=o.body.querySelector(".tablebottom td[width='100%']"))||void 0===r?void 0:r.textContent.split("\u7e3d\u6578 ")[1]){e.next=9;break}return e.abrupt("return",[]);case 9:return e.next=11,L("/home/imail/"+a,{headers:{Cookie:t+"; ck_page_size="+o}});case 11:return(c=e.sent).body.querySelector(".tablebottom").parentNode.remove(),u=[],c.body.querySelectorAll(".tabletop~tr").forEach((function(e){if(0===n||n>3){var t=e.querySelector("[class^='iMailsender']").textContent,r=e.querySelector("[class^='iMailsubject']").textContent.trim(),a=e.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];u.push({title:t,subtitle:r,id:a})}else if(1===n){var o=e.querySelector("[title]").getAttribute("title"),c=e.querySelector("[class^='iMailsubject']").textContent.trim(),l=e.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];u.push({title:"\u6536\u4ef6\u8005: "+o,subtitle:c,id:l})}else if(2===n){var i=e.querySelector("[class^='iMailsubject']").textContent.trim();u.push({title:"\u8349\u7a3f",subtitle:i})}else if(3===n){var s=e.querySelector("[class^='iMailsender']").textContent,p=e.querySelector("[class^='iMailsubject']").textContent.trim();u.push({title:s,subtitle:p})}})),e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=function(e){return V.apply(this,arguments)};function V(){return(V=Object(N.a)(C.a.mark((function e(t){var n,r,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("/home/imail/folder.php",{headers:{Cookie:t}});case 2:if(!(n=e.sent).body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return r=n.body.querySelectorAll(".iMailsubject"),a=[],r.forEach((function(e,t){if(t%2!==1){var n=e.text,r=parseInt(e.getAttribute("href").split("=")[1]);a.push({name:n,id:r})}})),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=n(89),Y=n(161),Z=n(69),$=n.n(Z);function ee(e){var t={replace:function(e){var n=e.name,r=e.attribs,o=e.children;return n&&"a"===n?a.a.createElement(Y.a,{href:r.href},$.a.domToReact(o,t)):n&&"p"===n?a.a.createElement(T.a,null,$.a.domToReact(o,t)):void 0}};return Object(X.renderToStaticMarkup)($()(e,t))}var te=function(e,t){return ne.apply(this,arguments)};function ne(){return(ne=Object(N.a)(C.a.mark((function e(t,n){var r,a,o,c,u,l,i,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("/home/imail/viewmail_content.php?CampusMailID="+n,{headers:{Cookie:t}});case 2:if(!(r=e.sent).body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return a=r.body.querySelectorAll(".tabletext"),o=Object(g.a)(a,5),c=o[0],u=o[1],l=(l=o[4]).textContent,u=u.textContent,c=c.querySelector("#PastDateDiv").getAttribute("title"),i=[],r.body.querySelectorAll("img[src='/images/file.gif']").forEach((function(e){i.push(e.nextElementSibling.textContent)})),(s=r.body.querySelector(".style1").parentNode).querySelectorAll("[class]").forEach((function(e){return e.removeAttribute("class")})),s.querySelectorAll("[lang]").forEach((function(e){return e.removeAttribute("lang")})),s.querySelectorAll("[style]").forEach((function(e){e.style.fontFamily="",e.style.lineHeight=""})),console.log(s),s=ee(s.innerHTML),e.abrupt("return",{title:l,sender:u,time:c,files:i,content:s});case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var re=function(e,t){return ae.apply(this,arguments)};function ae(){return(ae=Object(N.a)(C.a.mark((function e(t,n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("/home/imail/remove.php?CampusMailID="+n,{headers:{Cookie:t}});case 2:if(!e.sent.body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe=function(e,t,n,r){return ce.apply(this,arguments)};function ce(){return(ce=Object(N.a)(C.a.mark((function e(t,n,r,a){var o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=["2","0","1","2",r][r>3?4:r],e.next=3,L("/home/imail/changefolder.php",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Cookie:t},body:"CampusMailID[]="+n+"&FolderID="+o+"&targetFolderID="+a});case 3:if(!e.sent.body.querySelector("[name='securetoken']")){e.next=6;break}return e.abrupt("return","error");case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ue=function(e,t,n){return le.apply(this,arguments)};function le(){return(le=Object(N.a)(C.a.mark((function e(t,n,r){var a,o,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("/home/imail/downloadattachment.php?CampusMailID="+n+"&b_filename="+encodeURIComponent(btoa(unescape(encodeURIComponent(r)))),{headers:{Cookie:t}},!0);case 2:return a=e.sent,o=a.body.split("").map((function(e){return e.codePointAt(0)})),c=Uint8Array.from(o),e.abrupt("return",new Blob([c.buffer]));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie={login:function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,r,a=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:window.getStorage("username"),n=a.length>1&&void 0!==a[1]?a[1]:window.getStorage("password"),e.next=4,J(t,n);case 4:if("error"!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:return window.setStorage("username",t),window.setStorage("password",n),window.setStorage("cookie",r.cookie),e.abrupt("return",window.getStorage("cookie"));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),mail:function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,r,a,o=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:0,e.next=3,K(window.getStorage("cookie"),t);case 3:if("error"!==(n=e.sent)){e.next=12;break}return e.next=7,this.login();case 7:return r=e.sent,e.next=10,K(r,t);case 10:return a=e.sent,e.abrupt("return",a);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),label:function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(window.getStorage("cookie"));case 2:if("error"!==(t=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return n=e.sent,e.next=9,Q(n);case 9:return r=e.sent,e.abrupt("return",r);case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),content:function(){var e=Object(N.a)(C.a.mark((function e(t){var n,r,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(window.getStorage("cookie"),t);case 2:if("error"!==(n=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return r=e.sent,e.next=9,te(r,t);case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),moveto:function(){var e=Object(N.a)(C.a.mark((function e(t,n,r){var a,o,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(window.getStorage("cookie"),t,n,r);case 2:if("error"!==(a=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return o=e.sent,e.next=9,oe(o,t,n,r);case 9:return c=e.sent,e.abrupt("return",c);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}(),remove:function(){var e=Object(N.a)(C.a.mark((function e(t){var n,r,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(window.getStorage("cookie"),t);case 2:if("error"!==(n=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return r=e.sent,e.next=9,re(r,t);case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),dawnload:function(){var e=Object(N.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue(window.getStorage("cookie"),window.getStorage("contentid"),t);case 2:n=e.sent,(r=document.createElement("a")).download=t,r.href=URL.createObjectURL(n),r.click();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},se=Object(I.a)((function(e){return{root:{marginTop:e.spacing(9),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{marginTop:e.spacing(2)}}})),pe=function(e){return function(t){t.preventDefault(),e(document.querySelector("#username").value,document.querySelector("#password").value)}},me=k((function(e){var t=Object(O.e)(),n=se(),r=function(){var n=Object(N.a)(C.a.mark((function n(r,a){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ie.login(r,a);case 2:if(n.sent){n.next=5;break}return n.abrupt("return");case 5:t.replace("mails"),ie.mail().then((function(t){return e.setStorage("mails",t)})),ie.label().then((function(t){return e.setStorage("label",t)}));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return a.a.createElement(A.a,{className:n.root,maxWidth:"xs"},a.a.createElement(M.a,{className:n.avatar},a.a.createElement(B.a,null)),a.a.createElement(T.a,{variant:"h5"},"\u767b\u5165"),a.a.createElement("form",{className:n.form},a.a.createElement(q.a,{autoComplete:"username",fullWidth:!0,id:"username",label:"\u767b\u5165\u7de8\u865f",margin:"normal",variant:"outlined"}),a.a.createElement(q.a,{autoComplete:"current-password",fullWidth:!0,id:"password",label:"\u5bc6\u78bc",margin:"normal",type:"password",variant:"outlined"}),a.a.createElement(P.a,{className:n.submit,color:"primary",fullWidth:!0,onClick:pe(r),variant:"outlined"},"\u767b\u5165")))})),fe=n(201),be=n(189),de=n(35),ge=n(137),he=n(169),ve=n(170),ye=n(81),Ee=n(171),we=n(204),Se=n(174),xe=n(4),ke=n(172),Oe=n(173),je=Object(xe.a)((function(e){var t;return{root:(t={alignItems:"center",display:"flex",minHeight:56-e.spacing(1)},Object(de.a)(t,e.breakpoints.up("sm"),{minHeight:64-e.spacing(1)}),Object(de.a)(t,"margin",e.spacing(1)),Object(de.a)(t,"marginBottom",0),Object(de.a)(t,"padding","0 3px"),t),color:{backgroundColor:"#fffe"},icon:{padding:12},input:{flex:1,margin:"0 6px"}}}))((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(ge.a,{appear:!1,in:!Object(he.a)()},a.a.createElement(ve.a,{className:e.classes.color,elevation:0},a.a.createElement(ye.a,{className:e.classes.root},a.a.createElement(Ee.a,{"aria-label":"\u76ee\u9304",className:e.classes.icon,onClick:function(){return e.onToggle(!0)}},a.a.createElement(ke.a,null)),a.a.createElement(we.a,{className:e.classes.input,inputProps:{"aria-label":"\u5728\u90f5\u4ef6\u4e2d\u641c\u5c0b"},placeholder:"\u5728\u90f5\u4ef6\u4e2d\u641c\u5c0b"}),a.a.createElement(Ee.a,{"aria-label":"\u641c\u5c0b",className:e.classes.icon,onClick:function(){return e.onToggle(!0)}},a.a.createElement(Oe.a,null))))),a.a.createElement(Se.a,null))})),Ce=n(202),Ne=n(175),Ae=n(167),Me=n(180),Te=n(181),qe=n(182),Pe=n(176),Ie=n(177),Be=n(178),De=n(179),Fe=n(183),We=n(184),Re=n(185),Ue=function(e,t){return function(n){(!n||"keydown"!==n.type||"Shift"!==n.key&&"Tab"!==n.key)&&e.onToggle(t)}},He=Object(xe.a)((function(e){return{list:{width:250,maxWidth:"75vw"},toolbar:e.mixins.toolbar}}))((function(e){var t=Object(O.e)();return a.a.createElement(Ce.a,{disableSwipeToOpen:!1,onClose:Ue(e,!1),onOpen:Ue(e,!0),open:e.open},a.a.createElement("div",{className:e.classes.list,onClick:Ue(e,!1),onKeyDown:Ue(e,!1)},a.a.createElement(fe.a,{alignItems:"center",className:e.classes.toolbar,display:"flex",px:2},a.a.createElement(T.a,{color:"secondary",variant:"h6"},"School APP")),a.a.createElement(Ne.a,null),a.a.createElement(Ae.a,null,[[a.a.createElement(Pe.a,null),"\u6536\u4ef6\u7bb1"],[a.a.createElement(Ie.a,null),"\u5bc4\u4ef6\u7bb1"],[a.a.createElement(Be.a,null),"\u8349\u7a3f\u7bb1"],[a.a.createElement(De.a,null),"\u5783\u573e\u7bb1"]].map((function(t,n){return a.a.createElement(Me.a,{button:!0,onClick:function(){return e.onPageChange(n)}},a.a.createElement(Te.a,null,t[0]),a.a.createElement(qe.a,{primary:t[1]}))}))),e.label&&e.label.length>0&&a.a.createElement(r.Fragment,null,a.a.createElement(Ne.a,null),a.a.createElement(Ae.a,null,e.label.map((function(t){return a.a.createElement(Me.a,{button:!0,onClick:function(){return e.onPageChange(t.id)}},a.a.createElement(Te.a,null,a.a.createElement(Fe.a,null)),a.a.createElement(qe.a,{primary:t.name}))})))),a.a.createElement(Ne.a,null),a.a.createElement(Ae.a,null,[[a.a.createElement(We.a,null),"\u8a2d\u5b9a",function(){return t.push("setting")}],[a.a.createElement(Re.a,null),"\u8aaa\u660e",function(){return t.push("about")}]].map((function(e){return a.a.createElement(Me.a,{button:!0,onClick:e[2]},a.a.createElement(Te.a,null,e[0]),a.a.createElement(qe.a,{primary:e[1]}))})))))})),Le=n(186),_e=n(93),Je=n(187),Ge=Object(xe.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3),color:e.palette.secondary.main,backgroundColor:e.palette.secondary.contrastText,"&:hover":{backgroundColor:Object(_e.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.secondary.contrastText}}},no:{height:56+e.spacing(6)-e.spacing(2)}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Le.a,{"aria-label":"\u64b0\u5beb",className:e.classes.fab},a.a.createElement(Je.a,null)),a.a.createElement("div",{className:e.classes.no}))})),Ke=n(188),ze=Object(xe.a)({truncate:{"& *":{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}})((function(e){return e.items&&e.items.length>0&&a.a.createElement(Ae.a,null,e.items.map((function(t){return a.a.createElement(Me.a,{button:!0,onClick:function(){return e.onEachClick(t.id)}},a.a.createElement(Ke.a,null,a.a.createElement(M.a,null,t.title[0])),a.a.createElement(qe.a,{className:e.classes.truncate,primary:t.title,secondary:t.subtitle}))})))})),Qe=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},Ve=k((function(e){var t=Object(O.e)(),n=function(){var n=Object(N.a)(C.a.mark((function n(r){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0!==r){n.next=2;break}return n.abrupt("return");case 2:return e.setStorage("contentid",r),ie.content(r).then((function(t){return e.setStorage("content",t)})),n.next=6,Qe(275);case 6:t.push("content");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement(je,{onToggle:function(t){return e.setStorage("drawer",t)}}),a.a.createElement(He,{label:e.getStorage("label"),onPageChange:function(t){e.setStorage("mails",null),ie.mail(t).then((function(t){return e.setStorage("mails",t)})),e.setStorage("pagesid",t)},onToggle:function(t){return e.setStorage("drawer",t)},open:e.getStorage("drawer")}),e.getStorage("mails")?a.a.createElement(ze,{items:e.getStorage("mails"),onEachClick:n}):a.a.createElement(fe.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"calc(100% - 64px - 88px)"}},a.a.createElement(be.a,null)),a.a.createElement(Ge,null))})),Xe=Object(xe.a)((function(e){return{root:{margin:e.spacing(1,0),padding:e.spacing(2)}}}))((function(e){return e.files.length>0&&a.a.createElement(ye.a,{className:e.classes.root,variant:"outlined"},e.files.map((function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Y.a,{onClick:function(){return e.onClick(t)}},t),a.a.createElement("br",null))})))})),Ye=Object(xe.a)((function(e){return{root:{padding:e.spacing(1,0)}}}))((function(e){return a.a.createElement(Me.a,{className:e.classes.root,elementType:"div"},a.a.createElement(Ke.a,null,a.a.createElement(M.a,null,e.content.sender[0])),a.a.createElement(qe.a,{primary:e.content.sender,secondary:e.content.time}))})),Ze=n(190),$e=n(191),et=Object(xe.a)((function(e){return{color:{backgroundColor:"#fffe"},grow:{flexGrow:1}}}))((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(ve.a,{className:e.classes.color,elevation:Object(he.a)({disableHysteresis:!0,threshold:0})?4:0},a.a.createElement(Se.a,null,a.a.createElement(Ee.a,{"aria-label":"\u8fd4\u56de",edge:"start",onClick:e.onBack},a.a.createElement(Ze.a,null)),a.a.createElement("div",{className:e.classes.grow}),a.a.createElement(Ee.a,{"aria-label":"\u5220\u9664",onClick:e.onRemove},a.a.createElement(De.a,null)),a.a.createElement(Ee.a,{"aria-label":"\u66f4\u591a",edge:"end",onClick:function(){return e.onToggle()}},a.a.createElement($e.a,null)))),a.a.createElement(Se.a,null))})),tt=n(29),nt=function(e,t){return function(n){(!n||"keydown"!==n.type||"Shift"!==n.key&&"Tab"!==n.key)&&e.onToggle(t)}},rt=Object(xe.a)((function(e){return{list:{width:"auto"}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(tt.a,{anchor:"bottom",onClose:nt(e,!1),open:e.open},a.a.createElement("div",{className:e.classes.list,onClick:nt(e,!1),onKeyDown:nt(e,!1)},a.a.createElement(Ae.a,null,[["\u79fb\u81f3",e.onMove],["\u5217\u5370",function(){return window.print()}],["\u53d6\u6d88"]].map((function(e){return a.a.createElement(Me.a,{button:!0,onClick:e[1]},a.a.createElement(qe.a,{primary:e[0]}))}))))))})),at=n(192),ot=n(193),ct=a.a.forwardRef((function(e,t){return a.a.createElement(ge.a,Object.assign({direction:"up",ref:t},e))})),ut=Object(xe.a)((function(e){return{appBar:{position:"relative",backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(at.a,{fullScreen:!0,open:e.open1,onClose:e.handleClose,TransitionComponent:ct},a.a.createElement(ve.a,{className:e.classes.appBar},a.a.createElement(Se.a,null,a.a.createElement(Ee.a,{edge:"start",onClick:e.handleClose,"aria-label":"close"},a.a.createElement(ot.a,null)),a.a.createElement(T.a,{variant:"h6",className:e.classes.title,color:"textPrimary"},"\u79fb\u81f3"))),a.a.createElement(Ae.a,null,a.a.createElement(Me.a,{button:!0,onClick:function(){return e.moveto(2)}},a.a.createElement(Te.a,null,a.a.createElement(Pe.a,null)),a.a.createElement(qe.a,{primary:"\u6536\u4ef6\u7bb1"})),a.a.createElement(Me.a,{button:!0,onClick:function(){return e.moveto(0)}},a.a.createElement(Te.a,null,a.a.createElement(Ie.a,null)),a.a.createElement(qe.a,{primary:"\u5bc4\u4ef6\u7bb1"}))),e.label.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Ne.a,null),a.a.createElement(Ae.a,null,e.label.map((function(t){return a.a.createElement(Me.a,{button:!0,onClick:function(){return e.moveto(t.id)}},a.a.createElement(Te.a,null,a.a.createElement(Fe.a,null)),a.a.createElement(qe.a,{primary:t.name}))}))))))})),lt=n(194),it=n(195),st=n(196),pt=n(197),mt=Object(xe.a)((function(e){return{root:{marginTop:"auto",marginBottom:e.spacing(2)}}}))((function(e){return a.a.createElement("div",{className:e.classes.root},a.a.createElement(lt.a,{container:!0,spacing:1},a.a.createElement(lt.a,{item:!0,xs:4},a.a.createElement(P.a,{fullWidth:!0,startIcon:a.a.createElement(it.a,null),variant:"outlined"},"\u56de\u8986")),a.a.createElement(lt.a,{item:!0,xs:4},a.a.createElement(P.a,{fullWidth:!0,startIcon:a.a.createElement(st.a,null),variant:"outlined"},"\u56de\u8986\u5168\u90e8")),a.a.createElement(lt.a,{item:!0,xs:4},a.a.createElement(P.a,{fullWidth:!0,startIcon:a.a.createElement(pt.a,null),variant:"outlined"},"\u8f49\u5bc4"))))})),ft=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},bt=Object(I.a)((function(e){return{root:Object(de.a)({display:"flex",flexDirection:"column",minHeight:"calc(100% - 56px)"},e.breakpoints.up("sm"),{minHeight:"calc(100% - 64px)"})}})),dt=k((function(e){var t=bt().root,n=Object(O.e)(),r=function(){var t=Object(N.a)(C.a.mark((function t(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.goBack(),t.next=3,ft(275);case 3:e.setStorage("content",null),e.setStorage("open1",!1),e.setStorage("open2",!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(N.a)(C.a.mark((function t(){var r,a=arguments;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=!(a.length>0&&void 0!==a[0])||a[0])?n.push("content/more"):n.goBack(),e.setStorage("open1",r);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(N.a)(C.a.mark((function t(r){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ft(275);case 2:r?n.push("content/move"):n.goBack(),e.setStorage("open2",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement(et,{onBack:r,onToggle:o,onRemove:function(){ie.remove(e.getStorage("contentid")),alert("\u79fb\u9664\u5230\u56de\u6536\u7bb1")}}),a.a.createElement(O.a,{path:"/content/more"},a.a.createElement(rt,{onMove:function(){return c(!0)},onToggle:o,open:e.getStorage("open1")})),a.a.createElement(O.a,{path:"/content/move"},a.a.createElement(ut,{label:e.getStorage("label"),moveto:function(t){ie.moveto(e.getStorage("contentid"),e.getStorage("pagesid"),t).then((function(){return console.log("ok")}))},open1:e.getStorage("open2"),handleClose:function(){return c(!1)}})),e.getStorage("content")?a.a.createElement(A.a,{maxWidth:"md",className:t},a.a.createElement(T.a,{variant:"h5"},e.getStorage("content").title),a.a.createElement(Ye,{content:e.getStorage("content")}),a.a.createElement(Xe,{files:e.getStorage("content").files,onClick:function(e){return ie.dawnload(e)}}),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.getStorage("content").content},style:{marginBottom:8}}),a.a.createElement(mt,null)):a.a.createElement(fe.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"calc(100% - 64px)"}},a.a.createElement(be.a,null)))})),gt=Object(I.a)((function(e){return{appBar:{backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)},submit:{marginTop:e.spacing(2)}}})),ht=k((function(e){var t=Object(O.e)(),n=gt();return a.a.createElement(a.a.Fragment,null,a.a.createElement(ve.a,{className:n.appBar},a.a.createElement(Se.a,null,a.a.createElement(Ee.a,{edge:"start",onClick:function(){return t.goBack()},"aria-label":"close"},a.a.createElement(Ze.a,null)),a.a.createElement(T.a,{variant:"h6",className:n.title,color:"textPrimary"},"\u8a2d\u5b9a"))),a.a.createElement(Se.a,null),a.a.createElement(A.a,{maxWidth:"md"},a.a.createElement(P.a,{className:n.submit,variant:"contained",onClick:function(t){t.preventDefault(),e.setStorage("username",null),e.setStorage("password",null),e.setStorage("cookie",null),e.setStorage("contentid",null),e.setStorage("pagesid",0),e.setStorage("content",null),e.setStorage("label",null),e.setStorage("mails",null),e.setStorage("open1",!1),e.setStorage("open2",!1),e.setStorage("drawer",!1)}},"\u5220\u9664\u6240\u6709\u6578\u64da")))})),vt=Object(xe.a)((function(e){return{appBar:{backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)}}}))((function(e){var t=Object(O.e)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(ve.a,{className:e.classes.appBar},a.a.createElement(Se.a,null,a.a.createElement(Ee.a,{edge:"start",onClick:function(){return t.goBack()},"aria-label":"close"},a.a.createElement(Ze.a,null)),a.a.createElement(T.a,{variant:"h6",className:e.classes.title,color:"textPrimary"},"\u8aaa\u660e"))),a.a.createElement(Se.a,null),a.a.createElement(A.a,{maxWidth:"md"},a.a.createElement(T.a,{variant:"h5",className:e.classes.title,color:"textPrimary"},"\u6211\u4e0d\u77e5\u9053\u8a72\u5728\u9019\u88e1\u5beb\u4ec0\u9ebc\uff01")))})),yt=k((function(e){window.getStorage=e.getStorage,window.setStorage=e.setStorage;var t=Object(O.e)();return Object(r.useEffect)((function(){window.getStorage("username")&&window.getStorage("password")?(t.replace("mails"),window.setStorage("open1",!1),window.setStorage("open2",!1),window.setStorage("drawer",!1),ie.mail(window.getStorage("pagesid")).then((function(e){return window.setStorage("mails",e)})),ie.label().then((function(e){return window.setStorage("label",e)}))):t.replace("")}),[t]),a.a.createElement(r.Fragment,null,a.a.createElement(O.a,{exact:!0,path:"/",component:me}),a.a.createElement(O.a,{exact:!0,path:"/mails",component:Ve}),a.a.createElement(O.a,{path:"/content",component:dt}),a.a.createElement(O.a,{path:"/setting",component:ht}),a.a.createElement(O.a,{path:"/about",component:vt}))})),Et=n(95),wt=Object(Et.a)({palette:{primary:{main:"#1976d2"},secondary:{main:"#e53935"},background:{default:"#fff"}}}),St=function(){return JSON.parse(localStorage.getItem("SAPP"))},xt=n(98),kt=n(96),Ot=function(e){Object(xt.a)(n,e);var t=Object(kt.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={canShow:!1},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.store.dispatch({type:"init",show:function(){return e.setState({canShow:!0})}})}},{key:"render",value:function(){return this.state.canShow?this.props.children:null}}]),n}(r.PureComponent),jt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case e:return r.value;default:return n}}},Ct=jt("username"),Nt=jt("password"),At=jt("cookie"),Mt=jt("contentid"),Tt=jt("pagesid",0),qt=jt("drawer",!1),Pt=jt("open1",!1),It=jt("open2",!1),Bt=jt("mails"),Dt=jt("label"),Ft=jt("content"),Wt=function(e){var t=function(e){return function(e){localStorage.setItem("SAPP",JSON.stringify(e))}(e),e};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return"init"===r.type&&r.show(),r.type.startsWith("@@redux")?t(St()||e(n,r)):t(e(n,r))}}(Object(i.a)({username:Ct,password:Nt,cookie:At,contentid:Mt,pagesid:Tt,drawer:qt,open1:Pt,open2:It,mails:Bt,label:Dt,content:Ft})),Rt=Object(i.b)(Wt);Object(o.render)(a.a.createElement(l.a,{theme:wt},a.a.createElement(u.a,null),a.a.createElement(b,{store:Rt},a.a.createElement(Ot,{store:Rt},a.a.createElement(c.a,null,a.a.createElement(yt,null))))),document.querySelector("#root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.7ed2b85a.chunk.js.map