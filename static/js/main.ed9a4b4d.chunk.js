(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{32:function(e,t,a){e.exports=a(40)},37:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a.n(r),c=a(30),l=a.n(c),i=(a(37),a(24)),s=a(11),u=a(26);a(41),a(42);u.a.initializeApp({apiKey:"AIzaSyA3MMKIo5jJnvFYAQ8f0NT8SiIaJsZ2Kcs",authDomain:"belal-firegram.firebaseapp.com",projectId:"belal-firegram",storageBucket:"belal-firegram.appspot.com",messagingSenderId:"726234852101",appId:"1:726234852101:web:d2b73e2ebab5fea8f2e56c"});var o=u.a.storage(),m=u.a.firestore(),f=u.a.firestore.FieldValue.serverTimestamp,p=function(e){var t=Object(r.useState)([]),a=Object(s.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){var t=m.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:n}},d=function(){var e=p("images").docs;return console.log(e),n.a.createElement("div",{className:"img-grid"},e&&e.map((function(e){return n.a.createElement("div",{className:"img-wrap",key:e.id},n.a.createElement("img",{src:e.url,alt:"uploaded pic "+e.id}))})))},g=function(){return n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"FireGram"),n.a.createElement("h2",null,"Your Pictures"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))},b=a(0),E=a.n(b),v=a(3),j=function(e){var t=Object(r.useState)(0),a=Object(s.a)(t,2),n=a[0],c=a[1],l=Object(r.useState)(null),i=Object(s.a)(l,2),u=i[0],p=i[1],d=Object(r.useState)(null),g=Object(s.a)(d,2),b=g[0],j=g[1];return Object(r.useEffect)((function(){var t=o.ref(e.name),a=m.collection("images");t.put(e).on("state_change",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){p(e)}),Object(v.a)(E.a.mark((function e(){var r,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:r=e.sent,n=f(),a.add({url:r,createdAt:n}),j(r);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:n,url:b,error:u}},O=function(e){var t=e.file,a=e.setFile,c=j(t),l=c.url,i=c.progress;return Object(r.useEffect)((function(){l&&a(null)}),[l,a]),n.a.createElement("div",{className:"progress-bar",style:{width:i+"%"}})},h=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)(null),i=Object(s.a)(l,2),u=i[0],o=i[1],m=["image/png","image/jpeg","image/jpg","video/mp4"];return n.a.createElement("form",null,n.a.createElement("label",null,n.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),o("")):(c(null),o("Please select an image file (png or jpeg)"))}}),n.a.createElement("span",null,"+")),n.a.createElement("div",{className:"output"},u&&n.a.createElement("div",{className:"error"}," ",u," "),a&&n.a.createElement("div",{className:"error"}," ",a.name," "),a&&n.a.createElement(O,{file:a,setFile:c})))};var S=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null),n.a.createElement(h,null),n.a.createElement(d,null))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ed9a4b4d.chunk.js.map