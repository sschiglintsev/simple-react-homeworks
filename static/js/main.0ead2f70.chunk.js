(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={message:"Message_message__1reWG",messages:"Message_messages__hBOsV",circle:"Message_circle__hU65s",name:"Message_name__ZgICD",p:"Message_p__P7Aq0",span:"Message_span__3-EpH",ugol:"Message_ugol__3UKt4"}},,,function(e,a,t){e.exports={input:"SuperInputText_input__3Q5Cx",superInput:"SuperInputText_superInput__wsrbt",errorInput:"SuperInputText_errorInput__2u1vU",error:"SuperInputText_error__2QdGJ"}},,function(e,a,t){e.exports={blue:"HW4_blue__21sti",column:"HW4_column__ty8oO",testSpanError:"HW4_testSpanError__19Nhj"}},function(e,a,t){e.exports={default:"SuperButton_default__1YMuD",red:"SuperButton_red__1KDtm"}},function(e,a,t){e.exports={label:"SuperCheckbox_label__3eFzG",checkbox:"SuperCheckbox_checkbox__1bVKk",spanClassName:"SuperCheckbox_spanClassName__2zE7V"}},,,function(e,a,t){e.exports={App:"App_App__15j6R"}},function(e,a,t){e.exports={error:"Greeting_error__3SnBM"}},,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),s=(t(20),t(12)),o=t.n(s),u=t(2),i=t.n(u);var m=function(e){return r.a.createElement("div",{className:i.a.messages},r.a.createElement("div",null,r.a.createElement("img",{className:i.a.circle,src:e.avatar})),r.a.createElement("span",{className:i.a.ugol}),r.a.createElement("div",{className:i.a.message},r.a.createElement("div",{className:i.a.name},e.name),r.a.createElement("p",{className:i.a.p},e.message," ",r.a.createElement("span",{className:i.a.span},e.time))))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",d="Artem",h="Npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",E="22:00";var _=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(m,{avatar:p,name:d,message:h,time:E}),r.a.createElement("hr",null),r.a.createElement("hr",null))},f=t(1);var g=function(e){return r.a.createElement("div",{key:e.key},e.affair.name," ",e.affair.priority,r.a.createElement("button",{onClick:function(){return a=e.affair._id,void e.deleteAffairCallback(a);var a}},"X"))};var b=function(e){var a=e.data.map((function(a){return r.a.createElement(g,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},v=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(n.useState)(v),a=Object(f.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(f.a)(c,2),o=s[0],u=s[1],i=function(e,a){var t=[];if("all"===a)return e;switch(a){case"low":case"middle":case"high":t=e.filter((function(e){return e.priority===a}))}return t}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(b,{data:i,setFilter:function(e){return u(e)},deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},C=t(14),N=t(13),O=t.n(N),j=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:l?O.a.error:""}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},x=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(f.a)(l,2),s=c[0],o=c[1],u=Object(n.useState)(!1),i=Object(f.a)(u,2),m=i[0],p=i[1],d=a.length;return r.a.createElement(j,{name:s,setNameCallback:function(e){" "===e.currentTarget.value?p(!0):(o(e.currentTarget.value),p(!1))},addUser:function(){t(s),o(""),alert("Hello  '".concat(s,"'!"))},error:m?"error, add name":"",totalUsers:d})},S=t(23);var w=function(){var e=Object(n.useState)([]),a=Object(f.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(x,{users:t,addUserCallback:function(e){if(""!==e){var a=Object(C.a)(t);a.push({_id:Object(S.a)(),name:e}),l(a)}}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=t(3),A=t(5),T=t.n(A),I=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,u=Object(y.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(T.a.error," ").concat(o||""),m="".concat(T.a.input," ").concat(c?T.a.errorInput:T.a.superInput," ").concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},u)),c&&r.a.createElement("span",{className:i},c))},M=t(7),U=t.n(M),F=t(8),W=t.n(F),B=function(e){var a=e.red,t=e.className,n=Object(y.a)(e,["red","className"]),l="".concat(a?W.a.red:W.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},H=t(9),K=t.n(H),G=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(y.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var P=function(){var e=Object(n.useState)(""),a=Object(f.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),u=Object(f.a)(o,2),i=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:U.a.column},r.a.createElement(I,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(I,{className:U.a.blue}),r.a.createElement(B,null,"default"),r.a.createElement(B,{red:!0,onClick:s},"delete "),r.a.createElement(B,{disabled:!0},"disabled"),r.a.createElement(G,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(G,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var J=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(_,null),r.a.createElement(k,null),r.a.createElement(w,null),r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.0ead2f70.chunk.js.map