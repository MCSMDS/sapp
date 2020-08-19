(this.webpackJsonpsapp=this.webpackJsonpsapp||[]).push([[0],{110:function(e,t,n){e.exports=n(133)},133:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),c=n(32),l=n(196),u=n(195),i=n(77),s=a.a.createContext(null),p=n(54),m=n(55);var f=function(){function e(t,n){Object(p.a)(this,e),this.store=t,this.parentSub=n,this.unsubscribe=null,this.listeners={notify:function(){}},this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}return Object(m.a)(e,[{key:"addNestedSub",value:function(e){return this.trySubscribe(),this.listeners.subscribe(e)}},{key:"notifyNestedSubs",value:function(){this.listeners.notify()}},{key:"handleChangeWrapper",value:function(){this.onStateChange&&this.onStateChange()}},{key:"trySubscribe",value:function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=null,t=null;return{clear:function(){e=null,t=null},notify:function(){Object(o.unstable_batchedUpdates)((function(){for(var t=e;t;)t.callback(),t=t.next}))},subscribe:function(n){var r=!0,a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){r&&null!==e&&(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}())}},{key:"tryUnsubscribe",value:function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners={notify:function(){}})}}]),e}();function b(e){var t=e.store,n=e.children,r=new f(t);return r.onStateChange=r.notifyNestedSubs,r.trySubscribe(),a.a.createElement(s.Provider,{value:{store:t,subscription:r}},n)}var d=n(20),g=n(66),h=n(38),v=n.n(h);function y(e){var t=function(e){return{getStorage:function(t){return e[t]}}};var n,r,a,o,c,l=!1;function u(e,l){var u=!function(e,t){if(e===t)return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var a=0;a<n.length;a++)if(!t.hasOwnProperty(n[a])||e[n[a]]!==t[n[a]])return!1;return!0}(l,r),i=e!==n;return n=e,r=l,u&&i?(a=t(n),c=Object(d.a)(Object(d.a)(Object(d.a)({},r),a),o)):u?c=Object(d.a)(Object(d.a)(Object(d.a)({},r),a),o):i?function(){var e=t(n);return a=e,c=Object(d.a)(Object(d.a)(Object(d.a)({},r),a),o)}():c}return function(i,s){return l?u(i,s):(r=s,a=t(n=i),o=function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}(e),c=Object(d.a)(Object(d.a)(Object(d.a)({},r),a),o),l=!0,c)}}function E(e){var t=r.useMemo;return v()(a.a.memo((function(n){var o=Object(r.useContext)(s),c=o.store,l=Object(r.useMemo)((function(){return y(c.dispatch)}),[c]),u=new f(c,o.subscription),i=u.notifyNestedSubs.bind(u),p=Object(r.useReducer)((function(e,t){return t.payload}),null),m=Object(g.a)(p,2),b=m[0],h=m[1],v=Object(r.useRef)(),E=Object(r.useRef)(n),w=Object(r.useRef)(),S=Object(r.useRef)(!1),x=t((function(){return w.current&&n===E.current?w.current:l(c.getState(),n)}),[c,b,n]);return E.current=n,v.current=x,S.current=!1,w.current=null,i(),Object(r.useLayoutEffect)((function(){return u.onStateChange=function(){var e=l(c.getState(),E.current);v.current=e,w.current=e,S.current=!0,h({type:"STORE_UPDATED",payload:{}})},u.trySubscribe(),function(){u.tryUnsubscribe(),u.onStateChange=null}}),[c,u,l,i]),a.a.createElement(s.Provider,{value:Object(d.a)(Object(d.a)({},o),{},{subscription:u})},a.a.createElement(e,x))})),e)}var w=n(14),S=n(6),x=n.n(S),k=n(10),O=n(162),j=n(200),C=n(53),N=n(197),A=n(165),T=n(161),q=n(163),P=function(e){return new Uint8Array(e.split("").map((function(e){return e.charCodeAt()}))).buffer},M=function(e){return Array.from(new Uint8Array(e)).map((function(e){return String.fromCharCode(e)})).join("")};function I(e,t){return D.apply(this,arguments)}function D(){return(D=Object(k.a)(x.a.mark((function e(t,n){var r,a,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest({name:"SHA-256"},P(n));case 2:return r=e.sent,e.next=5,crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["encrypt"]);case 5:return a=e.sent,e.next=8,crypto.subtle.encrypt({name:"AES-GCM",iv:r},a,P(t));case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return B.apply(this,arguments)}function B(){return(B=Object(k.a)(x.a.mark((function e(t,n){var r,a,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest({name:"SHA-256"},P(n));case 2:return r=e.sent,e.next=5,crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["decrypt"]);case 5:return a=e.sent,e.next=8,crypto.subtle.decrypt({name:"AES-GCM",iv:r},a,t);case 8:return o=e.sent,e.abrupt("return",M(o));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(e,t,n){return R.apply(this,arguments)};function R(){return(R=Object(k.a)(x.a.mark((function e(t,n,r){var a,o,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(JSON.stringify({url:t,init:n}),navigator.userAgent);case 2:return a=e.sent,e.next=5,fetch("https://data.mcsmds.tk/sapi",{method:"POST",body:a});case 5:return o=e.sent,e.t0=JSON,e.t1=F,e.next=10,o.arrayBuffer();case 10:return e.t2=e.sent,e.t3=navigator.userAgent,e.next=14,(0,e.t1)(e.t2,e.t3);case 14:return e.t4=e.sent,c=e.t0.parse.call(e.t0,e.t4),r||(c.body=(new DOMParser).parseFromString(decodeURIComponent(escape(c.body)),"text/html")),e.abrupt("return",c);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=function(e,t){return H.apply(this,arguments)};function H(){return(H=Object(k.a)(x.a.mark((function e(t,n){var r,a,o,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("/templates/");case 2:return r=e.sent,a=r.cookie.replace("; path=/",""),o=r.body.querySelector("[action='../login.php']>[name='securetoken']").value,e.next=7,W("/login.php",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Cookie:a},body:"UserLogin="+t+"&UserPassword="+n+"&securetoken="+o});case 7:return c=e.sent,e.abrupt("return",c.body.querySelector("[name='securetoken']")?"error":{cookie:a});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(e,t){return _.apply(this,arguments)};function _(){return(_=Object(k.a)(x.a.mark((function e(t,n){var r,a,o,c,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=["viewfolder.php?FolderID=2","viewfolder.php?FolderID=0","viewfolder.php?FolderID=1","trash.php","viewfolder.php?FolderID="+n][n>3?4:n],e.next=3,W("/home/imail/"+a,{headers:{Cookie:t}});case 3:if(!(o=e.sent).body.querySelector("[name='securetoken']")){e.next=6;break}return e.abrupt("return","error");case 6:if(o=null===(r=o.body.querySelector(".tablebottom td[width='100%']"))||void 0===r?void 0:r.textContent.split("\u7e3d\u6578 ")[1]){e.next=9;break}return e.abrupt("return",[]);case 9:return e.next=11,W("/home/imail/"+a,{headers:{Cookie:t+"; ck_page_size="+o}});case 11:return(c=e.sent).body.querySelector(".tablebottom").parentNode.remove(),l=[],c.body.querySelectorAll(".tabletop~tr").forEach((function(e){if(0===n||n>3){var t=e.querySelector("[class^='iMailsender']").textContent,r=e.querySelector("[class^='iMailsubject']").textContent.trim(),a=e.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];l.push({title:t,subtitle:r,id:a})}else if(1===n){var o=e.querySelector("[title]").getAttribute("title"),c=e.querySelector("[class^='iMailsubject']").textContent.trim(),u=e.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];l.push({title:"\u6536\u4ef6\u8005: "+o,subtitle:c,id:u})}else if(2===n){var i=e.querySelector("[class^='iMailsubject']").textContent.trim();l.push({title:"\u8349\u7a3f",subtitle:i})}else if(3===n){var s=e.querySelector("[class^='iMailsender']").textContent,p=e.querySelector("[class^='iMailsubject']").textContent.trim();l.push({title:s,subtitle:p})}})),e.abrupt("return",l);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e){return G.apply(this,arguments)};function G(){return(G=Object(k.a)(x.a.mark((function e(t){var n,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("/home/imail/folder.php",{headers:{Cookie:t}});case 2:if(!(n=e.sent).body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return r=n.body.querySelectorAll(".iMailsubject"),a=[],r.forEach((function(e,t){if(t%2!==1){var n=e.text,r=parseInt(e.getAttribute("href").split("=")[1]);a.push({name:n,id:r})}})),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=n(87),z=n(158),Q=n(67),V=n.n(Q);function X(e){var t={replace:function(e){var n=e.name,r=e.attribs,o=e.children;return n&&"a"===n?a.a.createElement(z.a,{href:r.href},V.a.domToReact(o,t)):n&&"p"===n?a.a.createElement(C.a,null,V.a.domToReact(o,t)):void 0}};return Object(K.renderToStaticMarkup)(V()(e,t))}var Y=function(e,t){return Z.apply(this,arguments)};function Z(){return(Z=Object(k.a)(x.a.mark((function e(t,n){var r,a,o,c,l,u,i,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("/home/imail/viewmail_content.php?CampusMailID="+n,{headers:{Cookie:t}});case 2:if(!(r=e.sent).body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return a=r.body.querySelectorAll(".tabletext"),o=Object(g.a)(a,5),c=o[0],l=o[1],u=(u=o[4]).textContent,l=l.textContent,c=c.querySelector("#PastDateDiv").getAttribute("title"),i=[],r.body.querySelectorAll("img[src='/images/file.gif']").forEach((function(e){i.push(e.nextElementSibling.textContent)})),(s=r.body.querySelector(".style1").parentNode).querySelectorAll("[class]").forEach((function(e){return e.removeAttribute("class")})),s.querySelectorAll("[lang]").forEach((function(e){return e.removeAttribute("lang")})),s.querySelectorAll("[style]").forEach((function(e){e.style.fontFamily="",e.style.lineHeight=""})),console.log(s),s=X(s.innerHTML),e.abrupt("return",{title:u,sender:l,time:c,files:i,content:s});case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=function(e,t){return ee.apply(this,arguments)};function ee(){return(ee=Object(k.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("/home/imail/remove.php?CampusMailID="+n,{headers:{Cookie:t}});case 2:if(!e.sent.body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te=function(e,t,n,r){return ne.apply(this,arguments)};function ne(){return(ne=Object(k.a)(x.a.mark((function e(t,n,r,a){var o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=["2","0","1","2",r][r>3?4:r],e.next=3,W("/home/imail/changefolder.php",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Cookie:t},body:"CampusMailID[]="+n+"&FolderID="+o+"&targetFolderID="+a});case 3:if(!e.sent.body.querySelector("[name='securetoken']")){e.next=6;break}return e.abrupt("return","error");case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var re=function(e,t,n){return ae.apply(this,arguments)};function ae(){return(ae=Object(k.a)(x.a.mark((function e(t,n,r){var a,o,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("/home/imail/downloadattachment.php?CampusMailID="+n+"&b_filename="+encodeURIComponent(btoa(unescape(encodeURIComponent(r)))),{headers:{Cookie:t}},!0);case 2:return a=e.sent,o=a.body.split("").map((function(e){return e.codePointAt(0)})),c=Uint8Array.from(o),e.abrupt("return",new Blob([c.buffer]));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe={login:function(){var e=Object(k.a)(x.a.mark((function e(){var t,n,r,a=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:window.getStorage("username"),n=a.length>1&&void 0!==a[1]?a[1]:window.getStorage("password"),e.next=4,U(t,n);case 4:if("error"!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:return window.setStorage("username",t),window.setStorage("password",n),window.setStorage("cookie",r.cookie),e.abrupt("return",window.getStorage("cookie"));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),mail:function(){var e=Object(k.a)(x.a.mark((function e(){var t,n,r,a,o=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:0,e.next=3,L(window.getStorage("cookie"),t);case 3:if("error"!==(n=e.sent)){e.next=12;break}return e.next=7,this.login();case 7:return r=e.sent,e.next=10,L(r,t);case 10:return a=e.sent,e.abrupt("return",a);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),label:function(){var e=Object(k.a)(x.a.mark((function e(){var t,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(window.getStorage("cookie"));case 2:if("error"!==(t=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return n=e.sent,e.next=9,J(n);case 9:return r=e.sent,e.abrupt("return",r);case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),content:function(){var e=Object(k.a)(x.a.mark((function e(t){var n,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(window.getStorage("cookie"),t);case 2:if("error"!==(n=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return r=e.sent,e.next=9,Y(r,t);case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),moveto:function(){var e=Object(k.a)(x.a.mark((function e(t,n,r){var a,o,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(window.getStorage("cookie"),t,n,r);case 2:if("error"!==(a=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return o=e.sent,e.next=9,te(o,t,n,r);case 9:return c=e.sent,e.abrupt("return",c);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}(),remove:function(){var e=Object(k.a)(x.a.mark((function e(t){var n,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(window.getStorage("cookie"),t);case 2:if("error"!==(n=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return r=e.sent,e.next=9,$(r,t);case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),dawnload:function(){var e=Object(k.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(window.getStorage("cookie"),window.getStorage("contentid"),t);case 2:n=e.sent,(r=document.createElement("a")).download=t,r.href=URL.createObjectURL(n),r.click();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ce=Object(T.a)((function(e){return{root:{marginTop:e.spacing(9),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{marginTop:e.spacing(2)}}})),le=function(e){return function(t){t.preventDefault(),e(document.querySelector("#username").value,document.querySelector("#password").value)}},ue=E((function(e){var t=Object(w.e)(),n=ce(),r=function(){var n=Object(k.a)(x.a.mark((function n(r,a){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,oe.login(r,a);case 2:if(n.sent){n.next=5;break}return n.abrupt("return");case 5:t.replace("mails"),oe.mail().then((function(t){return e.setStorage("mails",t)})),oe.label().then((function(t){return e.setStorage("label",t)}));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return a.a.createElement(O.a,{className:n.root,maxWidth:"xs"},a.a.createElement(j.a,{className:n.avatar},a.a.createElement(q.a,null)),a.a.createElement(C.a,{variant:"h5"},"\u767b\u5165"),a.a.createElement("form",{className:n.form},a.a.createElement(N.a,{autoComplete:"username",fullWidth:!0,id:"username",label:"\u767b\u5165\u7de8\u865f",margin:"normal",variant:"outlined"}),a.a.createElement(N.a,{autoComplete:"current-password",fullWidth:!0,id:"password",label:"\u5bc6\u78bc",margin:"normal",type:"password",variant:"outlined"}),a.a.createElement(A.a,{className:n.submit,color:"primary",fullWidth:!0,onClick:le(r),variant:"outlined"},"\u767b\u5165")))})),ie=n(198),se=n(186),pe=n(35),me=n(134),fe=n(166),be=n(167),de=n(79),ge=n(168),he=n(201),ve=n(171),ye=n(4),Ee=n(169),we=n(170),Se=Object(ye.a)((function(e){var t;return{root:(t={alignItems:"center",display:"flex",minHeight:56-e.spacing(1)},Object(pe.a)(t,e.breakpoints.up("sm"),{minHeight:64-e.spacing(1)}),Object(pe.a)(t,"margin",e.spacing(1)),Object(pe.a)(t,"marginBottom",0),Object(pe.a)(t,"padding","0 3px"),t),color:{backgroundColor:"#fffe"},icon:{padding:12},input:{flex:1,margin:"0 6px"}}}))((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(me.a,{appear:!1,in:!Object(fe.a)()},a.a.createElement(be.a,{className:e.classes.color,elevation:0},a.a.createElement(de.a,{className:e.classes.root},a.a.createElement(ge.a,{"aria-label":"\u76ee\u9304",className:e.classes.icon,onClick:function(){return e.onToggle(!0)}},a.a.createElement(Ee.a,null)),a.a.createElement(he.a,{className:e.classes.input,inputProps:{"aria-label":"\u5728\u90f5\u4ef6\u4e2d\u641c\u5c0b"},placeholder:"\u5728\u90f5\u4ef6\u4e2d\u641c\u5c0b"}),a.a.createElement(ge.a,{"aria-label":"\u641c\u5c0b",className:e.classes.icon,onClick:function(){return e.onToggle(!0)}},a.a.createElement(we.a,null))))),a.a.createElement(ve.a,null))})),xe=n(199),ke=n(172),Oe=n(164),je=n(177),Ce=n(178),Ne=n(179),Ae=n(173),Te=n(174),qe=n(175),Pe=n(176),Me=n(180),Ie=n(181),De=n(182),Fe=function(e,t){return function(n){(!n||"keydown"!==n.type||"Shift"!==n.key&&"Tab"!==n.key)&&e.onToggle(t)}},Be=Object(ye.a)((function(e){return{list:{width:250,maxWidth:"75vw"},toolbar:e.mixins.toolbar}}))((function(e){var t=Object(w.e)();return a.a.createElement(xe.a,{disableSwipeToOpen:!1,onClose:Fe(e,!1),onOpen:Fe(e,!0),open:e.open},a.a.createElement("div",{className:e.classes.list,onClick:Fe(e,!1),onKeyDown:Fe(e,!1)},a.a.createElement(ie.a,{alignItems:"center",className:e.classes.toolbar,display:"flex",px:2},a.a.createElement(C.a,{color:"secondary",variant:"h6"},"School APP")),a.a.createElement(ke.a,null),a.a.createElement(Oe.a,null,[[a.a.createElement(Ae.a,null),"\u6536\u4ef6\u7bb1"],[a.a.createElement(Te.a,null),"\u5bc4\u4ef6\u7bb1"],[a.a.createElement(qe.a,null),"\u8349\u7a3f\u7bb1"],[a.a.createElement(Pe.a,null),"\u5783\u573e\u7bb1"]].map((function(t,n){return a.a.createElement(je.a,{button:!0,onClick:function(){return e.onPageChange(n)}},a.a.createElement(Ce.a,null,t[0]),a.a.createElement(Ne.a,{primary:t[1]}))}))),e.label&&e.label.length>0&&a.a.createElement(r.Fragment,null,a.a.createElement(ke.a,null),a.a.createElement(Oe.a,null,e.label.map((function(t){return a.a.createElement(je.a,{button:!0,onClick:function(){return e.onPageChange(t.id)}},a.a.createElement(Ce.a,null,a.a.createElement(Me.a,null)),a.a.createElement(Ne.a,{primary:t.name}))})))),a.a.createElement(ke.a,null),a.a.createElement(Oe.a,null,[[a.a.createElement(Ie.a,null),"\u8a2d\u5b9a",function(){return t.push("setting")}],[a.a.createElement(De.a,null),"\u8aaa\u660e",function(){return t.push("about")}]].map((function(e){return a.a.createElement(je.a,{button:!0,onClick:e[2]},a.a.createElement(Ce.a,null,e[0]),a.a.createElement(Ne.a,{primary:e[1]}))})))))})),We=n(183),Re=n(91),Ue=n(184),He=Object(ye.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3),color:e.palette.secondary.main,backgroundColor:e.palette.secondary.contrastText,"&:hover":{backgroundColor:Object(Re.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.secondary.contrastText}}},no:{height:56+e.spacing(6)-e.spacing(2)}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(We.a,{"aria-label":"\u64b0\u5beb",className:e.classes.fab},a.a.createElement(Ue.a,null)),a.a.createElement("div",{className:e.classes.no}))})),Le=n(185),_e=Object(ye.a)({truncate:{"& *":{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}})((function(e){return e.items&&e.items.length>0&&a.a.createElement(Oe.a,null,e.items.map((function(t){return a.a.createElement(je.a,{button:!0,onClick:function(){return e.onEachClick(t.id)}},a.a.createElement(Le.a,null,a.a.createElement(j.a,null,t.title[0])),a.a.createElement(Ne.a,{className:e.classes.truncate,primary:t.title,secondary:t.subtitle}))})))})),Je=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},Ge=E((function(e){var t=Object(w.e)(),n=function(){var n=Object(k.a)(x.a.mark((function n(r){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0!==r){n.next=2;break}return n.abrupt("return");case 2:return e.setStorage("contentid",r),oe.content(r).then((function(t){return e.setStorage("content",t)})),n.next=6,Je(275);case 6:t.push("content");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement(Se,{onToggle:function(t){return e.setStorage("drawer",t)}}),a.a.createElement(Be,{label:e.getStorage("label"),onPageChange:function(t){e.setStorage("mails",null),oe.mail(t).then((function(t){return e.setStorage("mails",t)})),e.setStorage("pagesid",t)},onToggle:function(t){return e.setStorage("drawer",t)},open:e.getStorage("drawer")}),e.getStorage("mails")?a.a.createElement(_e,{items:e.getStorage("mails"),onEachClick:n}):a.a.createElement(ie.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"calc(100% - 64px - 88px)"}},a.a.createElement(se.a,null)),a.a.createElement(He,null))})),Ke=Object(ye.a)((function(e){return{root:{margin:e.spacing(1,0),padding:e.spacing(2)}}}))((function(e){return e.files.length>0&&a.a.createElement(de.a,{className:e.classes.root,variant:"outlined"},e.files.map((function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(z.a,{onClick:function(){return e.onClick(t)}},t),a.a.createElement("br",null))})))})),ze=Object(ye.a)((function(e){return{root:{padding:e.spacing(1,0)}}}))((function(e){return a.a.createElement(je.a,{className:e.classes.root,elementType:"div"},a.a.createElement(Le.a,null,a.a.createElement(j.a,null,e.content.sender[0])),a.a.createElement(Ne.a,{primary:e.content.sender,secondary:e.content.time}))})),Qe=n(187),Ve=n(188),Xe=Object(ye.a)((function(e){return{color:{backgroundColor:"#fffe"},grow:{flexGrow:1}}}))((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(be.a,{className:e.classes.color,elevation:Object(fe.a)({disableHysteresis:!0,threshold:0})?4:0},a.a.createElement(ve.a,null,a.a.createElement(ge.a,{"aria-label":"\u8fd4\u56de",edge:"start",onClick:e.onBack},a.a.createElement(Qe.a,null)),a.a.createElement("div",{className:e.classes.grow}),a.a.createElement(ge.a,{"aria-label":"\u5220\u9664",onClick:e.onRemove},a.a.createElement(Pe.a,null)),a.a.createElement(ge.a,{"aria-label":"\u66f4\u591a",edge:"end",onClick:function(){return e.onToggle()}},a.a.createElement(Ve.a,null)))),a.a.createElement(ve.a,null))})),Ye=n(29),Ze=function(e,t){return function(n){(!n||"keydown"!==n.type||"Shift"!==n.key&&"Tab"!==n.key)&&e.onToggle(t)}},$e=Object(ye.a)((function(e){return{list:{width:"auto"}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ye.a,{anchor:"bottom",onClose:Ze(e,!1),open:e.open},a.a.createElement("div",{className:e.classes.list,onClick:Ze(e,!1),onKeyDown:Ze(e,!1)},a.a.createElement(Oe.a,null,[["\u79fb\u81f3",e.onMove],["\u5217\u5370",function(){return window.print()}],["\u53d6\u6d88"]].map((function(e){return a.a.createElement(je.a,{button:!0,onClick:e[1]},a.a.createElement(Ne.a,{primary:e[0]}))}))))))})),et=n(189),tt=n(190),nt=a.a.forwardRef((function(e,t){return a.a.createElement(me.a,Object.assign({direction:"up",ref:t},e))})),rt=Object(ye.a)((function(e){return{appBar:{position:"relative",backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(et.a,{fullScreen:!0,open:e.open1,onClose:e.handleClose,TransitionComponent:nt},a.a.createElement(be.a,{className:e.classes.appBar},a.a.createElement(ve.a,null,a.a.createElement(ge.a,{edge:"start",onClick:e.handleClose,"aria-label":"close"},a.a.createElement(tt.a,null)),a.a.createElement(C.a,{variant:"h6",className:e.classes.title,color:"textPrimary"},"\u79fb\u81f3"))),a.a.createElement(Oe.a,null,a.a.createElement(je.a,{button:!0,onClick:function(){return e.moveto(2)}},a.a.createElement(Ce.a,null,a.a.createElement(Ae.a,null)),a.a.createElement(Ne.a,{primary:"\u6536\u4ef6\u7bb1"})),a.a.createElement(je.a,{button:!0,onClick:function(){return e.moveto(0)}},a.a.createElement(Ce.a,null,a.a.createElement(Te.a,null)),a.a.createElement(Ne.a,{primary:"\u5bc4\u4ef6\u7bb1"}))),e.label.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(ke.a,null),a.a.createElement(Oe.a,null,e.label.map((function(t){return a.a.createElement(je.a,{button:!0,onClick:function(){return e.moveto(t.id)}},a.a.createElement(Ce.a,null,a.a.createElement(Me.a,null)),a.a.createElement(Ne.a,{primary:t.name}))}))))))})),at=n(191),ot=n(192),ct=n(193),lt=n(194),ut=Object(ye.a)((function(e){return{root:{marginTop:"auto",marginBottom:e.spacing(2)}}}))((function(e){return a.a.createElement("div",{className:e.classes.root},a.a.createElement(at.a,{container:!0,spacing:1},a.a.createElement(at.a,{item:!0,xs:4},a.a.createElement(A.a,{fullWidth:!0,startIcon:a.a.createElement(ot.a,null),variant:"outlined"},"\u56de\u8986")),a.a.createElement(at.a,{item:!0,xs:4},a.a.createElement(A.a,{fullWidth:!0,startIcon:a.a.createElement(ct.a,null),variant:"outlined"},"\u56de\u8986\u5168\u90e8")),a.a.createElement(at.a,{item:!0,xs:4},a.a.createElement(A.a,{fullWidth:!0,startIcon:a.a.createElement(lt.a,null),variant:"outlined"},"\u8f49\u5bc4"))))})),it=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},st=Object(T.a)((function(e){return{root:Object(pe.a)({display:"flex",flexDirection:"column",minHeight:"calc(100% - 56px)"},e.breakpoints.up("sm"),{minHeight:"calc(100% - 64px)"})}})),pt=E((function(e){var t=st().root,n=Object(w.e)(),r=function(){var t=Object(k.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.goBack(),t.next=3,it(275);case 3:e.setStorage("content",null),e.setStorage("open1",!1),e.setStorage("open2",!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(k.a)(x.a.mark((function t(){var r,a=arguments;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=!(a.length>0&&void 0!==a[0])||a[0])?n.push("content/more"):n.goBack(),e.setStorage("open1",r);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(k.a)(x.a.mark((function t(r){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,it(275);case 2:r?n.push("content/move"):n.goBack(),e.setStorage("open2",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement(Xe,{onBack:r,onToggle:o,onRemove:function(){oe.remove(e.getStorage("contentid")),alert("\u79fb\u9664\u5230\u56de\u6536\u7bb1")}}),a.a.createElement(w.a,{path:"/content/more"},a.a.createElement($e,{onMove:function(){return c(!0)},onToggle:o,open:e.getStorage("open1")})),a.a.createElement(w.a,{path:"/content/move"},a.a.createElement(rt,{label:e.getStorage("label"),moveto:function(t){oe.moveto(e.getStorage("contentid"),e.getStorage("pagesid"),t).then((function(){return console.log("ok")}))},open1:e.getStorage("open2"),handleClose:function(){return c(!1)}})),e.getStorage("content")?a.a.createElement(O.a,{maxWidth:"md",className:t},a.a.createElement(C.a,{variant:"h5"},e.getStorage("content").title),a.a.createElement(ze,{content:e.getStorage("content")}),a.a.createElement(Ke,{files:e.getStorage("content").files,onClick:function(e){return oe.dawnload(e)}}),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.getStorage("content").content},style:{marginBottom:8}}),a.a.createElement(ut,null)):a.a.createElement(ie.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"calc(100% - 64px)"}},a.a.createElement(se.a,null)))})),mt=Object(T.a)((function(e){return{appBar:{backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)},submit:{marginTop:e.spacing(2)}}})),ft=E((function(e){var t=Object(w.e)(),n=mt();return a.a.createElement(a.a.Fragment,null,a.a.createElement(be.a,{className:n.appBar},a.a.createElement(ve.a,null,a.a.createElement(ge.a,{edge:"start",onClick:function(){return t.goBack()},"aria-label":"close"},a.a.createElement(Qe.a,null)),a.a.createElement(C.a,{variant:"h6",className:n.title,color:"textPrimary"},"\u8a2d\u5b9a"))),a.a.createElement(ve.a,null),a.a.createElement(O.a,{maxWidth:"md"},a.a.createElement(A.a,{className:n.submit,variant:"contained",onClick:function(t){t.preventDefault(),e.setStorage("username",null),e.setStorage("password",null),e.setStorage("cookie",null),e.setStorage("contentid",null),e.setStorage("pagesid",0),e.setStorage("content",null),e.setStorage("label",null),e.setStorage("mails",null),e.setStorage("open1",!1),e.setStorage("open2",!1),e.setStorage("drawer",!1)}},"\u5220\u9664\u6240\u6709\u6578\u64da")))})),bt=Object(ye.a)((function(e){return{appBar:{backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)}}}))((function(e){var t=Object(w.e)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(be.a,{className:e.classes.appBar},a.a.createElement(ve.a,null,a.a.createElement(ge.a,{edge:"start",onClick:function(){return t.goBack()},"aria-label":"close"},a.a.createElement(Qe.a,null)),a.a.createElement(C.a,{variant:"h6",className:e.classes.title,color:"textPrimary"},"\u8aaa\u660e"))),a.a.createElement(ve.a,null),a.a.createElement(O.a,{maxWidth:"md"},a.a.createElement(C.a,{variant:"h5",className:e.classes.title,color:"textPrimary"},"\u6211\u4e0d\u77e5\u9053\u8a72\u5728\u9019\u88e1\u5beb\u4ec0\u9ebc\uff01")))})),dt=E((function(e){window.getStorage=e.getStorage,window.setStorage=e.setStorage;var t=Object(w.e)();return Object(r.useEffect)((function(){window.getStorage("username")&&window.getStorage("password")?(t.replace("mails"),window.setStorage("open1",!1),window.setStorage("open2",!1),window.setStorage("drawer",!1),oe.mail(window.getStorage("pagesid")).then((function(e){return window.setStorage("mails",e)})),oe.label().then((function(e){return window.setStorage("label",e)}))):t.replace("")}),[t]),a.a.createElement(r.Fragment,null,a.a.createElement(w.a,{exact:!0,path:"/",component:ue}),a.a.createElement(w.a,{exact:!0,path:"/mails",component:Ge}),a.a.createElement(w.a,{path:"/content",component:pt}),a.a.createElement(w.a,{path:"/setting",component:ft}),a.a.createElement(w.a,{path:"/about",component:bt}))})),gt=n(93),ht=Object(gt.a)({palette:{primary:{main:"#1976d2"},secondary:{main:"#e53935"},background:{default:"#fff"}}}),vt=function(){return JSON.parse(localStorage.getItem("SAPP"))},yt=n(95),Et=n(94),wt=function(e){Object(yt.a)(n,e);var t=Object(Et.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={canShow:!1},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.store.dispatch({type:"init",show:function(){return e.setState({canShow:!0})}})}},{key:"render",value:function(){return this.state.canShow?this.props.children:null}}]),n}(r.PureComponent),St=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case e:return r.value;default:return n}}},xt=St("username"),kt=St("password"),Ot=St("cookie"),jt=St("contentid"),Ct=St("pagesid",0),Nt=St("drawer",!1),At=St("open1",!1),Tt=St("open2",!1),qt=St("mails"),Pt=St("label"),Mt=St("content"),It=function(e){var t=function(e){return function(e){localStorage.setItem("SAPP",JSON.stringify(e))}(e),e};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return"init"===r.type&&r.show(),r.type.startsWith("@@redux")?t(vt()||e(n,r)):t(e(n,r))}}(Object(i.a)({username:xt,password:kt,cookie:Ot,contentid:jt,pagesid:Ct,drawer:Nt,open1:At,open2:Tt,mails:qt,label:Pt,content:Mt})),Dt=Object(i.b)(It);Object(o.render)(a.a.createElement(u.a,{theme:ht},a.a.createElement(l.a,null),a.a.createElement(b,{store:Dt},a.a.createElement(wt,{store:Dt},a.a.createElement(c.a,null,a.a.createElement(dt,null))))),document.querySelector("#root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.01fcde41.chunk.js.map