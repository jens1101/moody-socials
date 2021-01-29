(this["webpackJsonpmoody-socials-frontend"]=this["webpackJsonpmoody-socials-frontend"]||[]).push([[0],{80:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(0),c=r.n(n),s=r(29),i=r.n(s),o=(r(71),r(7)),u=r.n(o),l=r(10),j=r(9),d=r(11),b=r(40),h=r(59),p=r(54),O=r(15),x=r(12),f="https://react-bbd.herokuapp.com/",m="/",g="/about",v="/login",w="/logout",y="/register",N="/account",k="/manage-social-profiles",S="/edit-password",C=[{displayName:"Positive",value:"positive"},{displayName:"Neutral",value:"neutral"},{displayName:"Negative",value:"negative"}],P=r(60),L=r(65);function A(){return T.apply(this,arguments)}function T(){return(T=Object(l.a)(u.a.mark((function e(){var t,r,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:400,r=a.length>1&&void 0!==a[1]?a[1]:1500,e.next=4,new Promise((function(e){return setTimeout(e,t+Math.random()*(r-t))}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return I.apply(this,arguments)}function I(){return(I=Object(l.a)(u.a.mark((function e(){var t,r,a,n,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:null,r=new URL("/timelineTweets",f),t&&r.searchParams.set("mood",t),e.next=5,window.fetch(r.toString());case 5:return a=e.sent,e.next=8,a.json();case 8:if(n=e.sent,a.ok){e.next=11;break}throw new Error(n.error||"An error occurred while getting social feed");case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){try{return{username:JSON.parse(localStorage.getItem("userData")).username}}catch(e){return null}}function E(e){return M.apply(this,arguments)}function M(){return(M=Object(l.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,t.password,e.next=3,A();case 3:if("error"!==r.toLowerCase()){e.next=5;break}throw new Error("That username is hard-coded to trigger an error");case 5:return a={username:r},localStorage.clear(),localStorage.setItem("userData",JSON.stringify(a)),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return R.apply(this,arguments)}function R(){return(R=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,t.password,e.next=3,A();case 3:if("guest"!==r.toLowerCase()){e.next=5;break}return e.abrupt("return",E({username:r}));case 5:throw new Error('Account for "'.concat(r,'" does not exist'));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return B.apply(this,arguments)}function B(){return(B=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:localStorage.clear();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return H.apply(this,arguments)}function H(){return(H=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.oldPassword,t.newPassword,e.next=3,A();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return J.apply(this,arguments)}function J(){return(J=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:if(D().username===t){e.next=5;break}throw new Error("Could not delete account");case 5:localStorage.clear();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){var t=e.children,r=Object(L.a)(e,["children"]),n=D();return Object(a.jsx)(x.b,Object(P.a)(Object(P.a)({},r),{},{render:function(e){var r=e.location;return(null===n||void 0===n?void 0:n.username)?t:Object(a.jsx)(x.a,{to:{pathname:v,state:{from:r}}})}}))}var K=r(14),Q=r(63),W=r(20),X=r(64),Y=r(19),Z=r(22),$={displayName:"None",value:null};function _(){var e=Object(n.useState)(),t=Object(j.a)(e,2),r=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(j.a)(s,2),o=i[0],u=i[1],l=Object(n.useState)($),b=Object(j.a)(l,2),h=b[0],p=b[1],O=Object(n.useState)(!1),x=Object(j.a)(O,2),f=x[0],m=x[1],g=Object(a.jsxs)(Q.a,{title:"Mood: ".concat(h.displayName),children:[C.map((function(e){return Object(a.jsx)(W.a.Item,{as:"button",onSelect:function(){return p(e)},children:e.displayName})})),Object(a.jsx)(W.a.Divider,{}),Object(a.jsx)(W.a.Item,{as:"button",onSelect:function(){return p($)},children:$.displayName})]});return Object(n.useEffect)((function(){u(!0),q(h.value).then(c).catch((function(e){console.error(e),m(!0)})).finally((function(){return u(!1)}))}),[h.value]),Object(a.jsxs)("div",{children:[Object(a.jsx)(K.a,{bg:"light",style:{borderRadius:"0"},children:Object(a.jsx)(K.a.Body,{children:Object(a.jsx)(d.a,{children:Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("div",{className:"mr-auto",children:g}),Object(a.jsx)(X.a,{animation:"border",role:"status",variant:"primary",className:o?"visible":"invisible",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})]})})})}),Object(a.jsxs)(d.a,{className:"my-3",children:[!f&&Array.isArray(r)&&r.length>0&&r.map((function(e,t){return Object(a.jsx)(K.a,{className:"my-3",children:Object(a.jsxs)(K.a.Body,{children:[Object(a.jsx)(K.a.Title,{children:e.name}),Object(a.jsx)(K.a.Text,{children:e.text})]})},"post-".concat(t))})),!f&&Array.isArray(r)&&r.length<=0&&Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h2",{children:"Feed is Empty"}),Object(a.jsx)("p",{className:"lead",children:"No posts could be found for your feed."})]}),f&&Object(a.jsxs)(Y.a,{variant:"danger",children:[Object(a.jsx)(Y.a.Heading,{children:"Error Retrieving Social Feed"}),Object(a.jsx)("p",{children:"An error occurred while retrieving your social feed"}),Object(a.jsx)(Z.a,{variant:"primary",onClick:function(){u(!0),m(!1),q(h.value).then(c).catch((function(e){console.error(e),m(!0)})).finally((function(){return u(!1)}))},children:"Retry"})]})]})]})}function ee(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{children:Object(a.jsx)("h1",{children:"Feed"})}),Object(a.jsx)(_,{})]})}function te(){return Object(a.jsxs)(d.a,{children:[Object(a.jsx)("h1",{children:"About"}),Object(a.jsx)("p",{children:"This is our about page"})]})}var re=r(8);function ae(e){var t=e.onLogin,r=void 0===t?Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))):t,c=Object(x.g)(),s=(Object(x.h)().state||{from:{pathname:m}}).from,i=Object(n.useState)(""),o=Object(j.a)(i,2),b=o[0],h=o[1],p=Object(n.useState)(""),f=Object(j.a)(p,2),g=f[0],v=f[1],w=Object(n.useState)(!1),N=Object(j.a)(w,2),k=N[0],S=N[1],C=Object(n.useState)(""),P=Object(j.a)(C,2),L=P[0],A=P[1],T=Object(n.useState)(!1),q=Object(j.a)(T,2),I=q[0],D=q[1];function E(){return(E=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(!0),t.preventDefault(),t.currentTarget.checkValidity()){e.next=4;break}return e.abrupt("return");case 4:return D(!0),e.prev=5,e.next=8,r({username:b,password:g});case 8:D(!1),c.replace(s),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),D(!1),A(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}return Object(a.jsxs)(d.a,{className:"text-center",children:[Object(a.jsx)(K.a,{bg:"light",children:Object(a.jsxs)(K.a.Body,{children:[Object(a.jsx)(K.a.Title,{children:Object(a.jsx)("h1",{children:"Login"})}),Object(a.jsxs)(re.a,{onSubmit:function(e){return E.apply(this,arguments)},noValidate:!0,validated:k,children:[Object(a.jsxs)("div",{className:"text-left",children:[Object(a.jsxs)(re.a.Group,{controlId:"loginUsername",children:[Object(a.jsx)(re.a.Label,{children:"Username"}),Object(a.jsx)(re.a.Control,{type:"text",required:!0,value:b,onChange:function(e){return h(e.target.value)}})]}),Object(a.jsxs)(re.a.Group,{controlId:"loginPassword",children:[Object(a.jsx)(re.a.Label,{children:"Password"}),Object(a.jsx)(re.a.Control,{type:"password",required:!0,value:g,onChange:function(e){return v(e.target.value)}})]})]}),L&&Object(a.jsxs)(Y.a,{variant:"danger",onClose:function(){return A("")},dismissible:!0,className:"text-left",children:[Object(a.jsx)(Y.a.Heading,{children:"Login Error"}),Object(a.jsx)("p",{children:"An error occurred while attempting to log you in. This error message was provided:"}),Object(a.jsx)("blockquote",{className:"blockquote",children:Object(a.jsx)("p",{className:"mb-0",children:L})})]}),Object(a.jsx)(Z.a,{variant:"primary",type:"submit",disabled:I,children:"Submit"})]})]})}),Object(a.jsxs)("p",{className:"mt-3",children:["Don't have an account yet? ",Object(a.jsx)(O.b,{to:y,children:"Register"})]})]})}function ne(e){var t=e.onLogout,r=void 0===t?function(){}:t,c=Object(x.g)();return Object(n.useEffect)((function(){Promise.resolve(r()).then((function(){return c.push(m)}))}),[c,r]),Object(a.jsxs)(d.a,{children:[Object(a.jsx)("h1",{children:"Logout"}),Object(a.jsx)("p",{children:"Logging you out. Please wait..."})]})}function ce(e){var t=e.onRegister,r=void 0===t?Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))):t,c=Object(x.g)(),s=Object(n.useState)(""),i=Object(j.a)(s,2),o=i[0],b=i[1],h=Object(n.useState)(""),p=Object(j.a)(h,2),f=p[0],g=p[1],w=Object(n.useState)(""),y=Object(j.a)(w,2),N=y[0],k=y[1],S=Object(n.useState)(!1),C=Object(j.a)(S,2),P=C[0],L=C[1],A=Object(n.useState)(""),T=Object(j.a)(A,2),q=T[0],I=T[1],D=Object(n.useState)(!1),E=Object(j.a)(D,2),M=E[0],F=E[1];function R(){return(R=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L(!0),t.preventDefault(),t.currentTarget.checkValidity()){e.next=4;break}return e.abrupt("return");case 4:return F(!0),e.prev=5,e.next=8,r({username:o,password:f});case 8:F(!1),c.push(m),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),F(!1),I(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}return Object(a.jsxs)(d.a,{className:"text-center",children:[Object(a.jsx)(K.a,{bg:"light",children:Object(a.jsxs)(K.a.Body,{children:[Object(a.jsx)(K.a.Title,{children:Object(a.jsx)("h1",{children:"Register"})}),Object(a.jsxs)(re.a,{onSubmit:function(e){return R.apply(this,arguments)},noValidate:!0,validated:P,children:[Object(a.jsxs)("div",{className:"text-left",children:[Object(a.jsxs)(re.a.Group,{controlId:"registerUsername",children:[Object(a.jsx)(re.a.Label,{children:"Username"}),Object(a.jsx)(re.a.Control,{required:!0,type:"text",value:o,onChange:function(e){return b(e.target.value)}})]}),Object(a.jsxs)(re.a.Group,{controlId:"registerPassword",children:[Object(a.jsx)(re.a.Label,{children:"Password"}),Object(a.jsx)(re.a.Control,{required:!0,type:"password",value:f,onChange:function(e){g(e.target.value),k("")}})]}),Object(a.jsxs)(re.a.Group,{controlId:"registerConfirmPassword",children:[Object(a.jsx)(re.a.Label,{children:"Confirm password"}),Object(a.jsx)(re.a.Control,{required:!0,type:"password",value:N,isValid:!1,onChange:function(e){var t=e.target;k(t.value),t.setCustomValidity(t.value!==f?"Passwords don't match":"")}}),Object(a.jsx)(re.a.Control.Feedback,{type:"invalid",children:"Passwords don't match"})]})]}),q&&Object(a.jsxs)(Y.a,{variant:"danger",onClose:function(){return I("")},dismissible:!0,className:"text-left",children:[Object(a.jsx)(Y.a.Heading,{children:"Registration Error"}),Object(a.jsx)("p",{children:"An error occurred while attempting to register you. This error message was provided:"}),Object(a.jsx)("blockquote",{className:"blockquote",children:Object(a.jsx)("p",{className:"mb-0",children:q})})]}),Object(a.jsx)(Z.a,{variant:"primary",type:"submit",disabled:M,children:"Submit"})]})]})}),Object(a.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(a.jsx)(O.b,{to:v,children:"Login"})]})]})}function se(){return Object(a.jsx)(d.a,{children:Object(a.jsx)("h1",{children:"Manage Social Media Profiles"})})}function ie(e){var t=e.username,r=e.onDelete,c=void 0===r?function(){}:r,s=Object(x.g)(),i=Object(n.useState)(!1),o=Object(j.a)(i,2),b=o[0],h=o[1],p=Object(n.useState)(""),f=Object(j.a)(p,2),g=f[0],v=f[1];return Object(a.jsxs)(d.a,{children:[Object(a.jsx)("h1",{children:"My Account"}),Object(a.jsxs)("small",{className:"text-muted",children:["Logged in as ",t]}),Object(a.jsx)("hr",{}),Object(a.jsx)("p",{children:Object(a.jsx)(O.b,{to:S,children:"Change Password"})}),Object(a.jsx)("p",{children:Object(a.jsx)(O.b,{to:k,children:"Manage Social Media Profiles"})}),Object(a.jsx)("hr",{}),Object(a.jsx)(Z.a,{variant:"danger",disabled:b,onClick:Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Are you sure you want to delete your account and all associated data? This cannot be undone.")){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.prev=3,e.next=6,c(t);case 6:h(!1),s.push(m),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),h(!1),v(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[3,10]])}))),children:"Delete My Account"}),g&&Object(a.jsxs)(Y.a,{variant:"danger",onClose:function(){return v("")},dismissible:!0,className:"text-left",children:[Object(a.jsx)(Y.a.Heading,{children:"Delete Account Error"}),Object(a.jsx)("p",{children:"An error occurred while attempting to delete your account. This error message was provided:"}),Object(a.jsx)("blockquote",{className:"blockquote",children:Object(a.jsx)("p",{className:"mb-0",children:g})})]})]})}function oe(e){var t=e.onPasswordChange,r=void 0===t?Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))):t,c=Object(x.g)(),s=Object(n.useState)(""),i=Object(j.a)(s,2),o=i[0],b=i[1],h=Object(n.useState)(""),p=Object(j.a)(h,2),O=p[0],f=p[1],m=Object(n.useState)(""),g=Object(j.a)(m,2),v=g[0],w=g[1],y=Object(n.useState)(!1),k=Object(j.a)(y,2),S=k[0],C=k[1],P=Object(n.useState)(""),L=Object(j.a)(P,2),A=L[0],T=L[1],q=Object(n.useState)(!1),I=Object(j.a)(q,2),D=I[0],E=I[1];function M(){return(M=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!0),t.preventDefault(),t.currentTarget.checkValidity()){e.next=4;break}return e.abrupt("return");case 4:return E(!0),e.prev=5,e.next=8,r({oldPassword:o,newPassword:O});case 8:E(!1),c.push(N),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),E(!1),T(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}return Object(a.jsx)(d.a,{className:"text-center",children:Object(a.jsx)(K.a,{bg:"light",children:Object(a.jsxs)(K.a.Body,{children:[Object(a.jsx)(K.a.Title,{children:Object(a.jsx)("h1",{children:"Change Password"})}),Object(a.jsxs)(re.a,{onSubmit:function(e){return M.apply(this,arguments)},noValidate:!0,validated:S,children:[Object(a.jsxs)("div",{className:"text-left",children:[Object(a.jsxs)(re.a.Group,{controlId:"changePasswordOldPassword",children:[Object(a.jsx)(re.a.Label,{children:"Old password"}),Object(a.jsx)(re.a.Control,{required:!0,type:"password",value:o,onChange:function(e){return b(e.target.value)}})]}),Object(a.jsxs)(re.a.Group,{controlId:"changePasswordNewPassword",children:[Object(a.jsx)(re.a.Label,{children:"New password"}),Object(a.jsx)(re.a.Control,{required:!0,type:"password",value:O,onChange:function(e){f(e.target.value),w("")}})]}),Object(a.jsxs)(re.a.Group,{controlId:"changePasswordConfirmNewPassword",children:[Object(a.jsx)(re.a.Label,{children:"Confirm new password"}),Object(a.jsx)(re.a.Control,{required:!0,type:"password",value:v,isValid:!1,onChange:function(e){var t=e.target;w(t.value),t.setCustomValidity(t.value!==O?"Passwords don't match":"")}}),Object(a.jsx)(re.a.Control.Feedback,{type:"invalid",children:"Passwords don't match"})]})]}),A&&Object(a.jsxs)(Y.a,{variant:"danger",onClose:function(){return T("")},dismissible:!0,className:"text-left",children:[Object(a.jsx)(Y.a.Heading,{children:"Change Password Error"}),Object(a.jsx)("p",{children:"An error occurred while attempting to change your password. This error message was provided:"}),Object(a.jsx)("blockquote",{className:"blockquote",children:Object(a.jsx)("p",{className:"mb-0",children:A})})]}),Object(a.jsx)(Z.a,{variant:"primary",type:"submit",disabled:D,children:"Submit"})]})]})})})}function ue(){return Object(a.jsxs)(d.a,{children:[Object(a.jsx)("h1",{children:"404 Not Found"}),Object(a.jsx)("p",{className:"lead",children:"Page not found"})]})}var le=function(){var e=Object(n.useState)(D()),t=Object(j.a)(e,2),r=t[0],c=t[1];function s(){return(s=Object(l.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,a=t.password,e.t0=c,e.next=4,E({username:r,password:a});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(l.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,a=t.password,e.t0=c,e.next=4,F({username:r,password:a});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:c(D());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t);case 2:c(D());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(l.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.oldPassword,a=t.newPassword,e.next=3,G({oldPassword:r,newPassword:a});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)(O.a,{children:[Object(a.jsx)(b.a,{variant:"dark",bg:"dark",expand:"sm",children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(b.a.Brand,{children:"Moody Socials"}),Object(a.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(b.a.Collapse,{id:"basic-navbar-nav",children:[Object(a.jsxs)(h.a,{className:"mr-auto",children:[Object(a.jsx)(O.b,{className:"nav-link",to:m,children:"Home"}),Object(a.jsx)(O.b,{className:"nav-link",to:g,children:"About"})]}),!r&&Object(a.jsx)(O.b,{className:"btn btn-primary",to:v,children:"Login"}),r&&Object(a.jsx)(h.a,{children:Object(a.jsxs)(p.a,{title:"Account",id:"main-nav-account",alignRight:!0,children:[Object(a.jsxs)(p.a.Header,{children:["Logged in as ",r.username]}),Object(a.jsx)(O.b,{className:"dropdown-item",to:N,children:"Account"}),Object(a.jsx)(O.b,{className:"dropdown-item",to:k,children:"Manage Social Media Profiles"}),Object(a.jsx)(p.a.Divider,{}),Object(a.jsx)(O.b,{className:"dropdown-item",to:w,children:"Logout"})]})})]})]})}),Object(a.jsx)("main",{className:"mt-5 mb-5",children:Object(a.jsxs)(x.d,{children:[Object(a.jsx)(x.b,{exact:!0,path:m,children:Object(a.jsx)(ee,{})}),Object(a.jsx)(x.b,{exact:!0,path:g,children:Object(a.jsx)(te,{})}),Object(a.jsx)(x.b,{exact:!0,path:v,children:Object(a.jsx)(ae,{onLogin:function(e){return i.apply(this,arguments)}})}),Object(a.jsx)(x.b,{exact:!0,path:y,children:Object(a.jsx)(ce,{onRegister:function(e){return s.apply(this,arguments)}})}),Object(a.jsx)(z,{exact:!0,path:k,children:Object(a.jsx)(se,{})}),Object(a.jsx)(z,{exact:!0,path:N,children:Object(a.jsx)(ie,{username:null===r||void 0===r?void 0:r.username,onDelete:function(e){return f.apply(this,arguments)}})}),Object(a.jsx)(z,{exact:!0,path:S,children:Object(a.jsx)(oe,{onPasswordChange:function(e){return C.apply(this,arguments)}})}),Object(a.jsx)(x.b,{exact:!0,path:w,children:Object(a.jsx)(ne,{onLogout:function(){return o.apply(this,arguments)}})}),Object(a.jsx)(x.b,{path:"*",children:Object(a.jsx)(ue,{})})]})})]})},je=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,85)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(le,{})}),document.getElementById("root")),je()}},[[80,1,2]]]);
//# sourceMappingURL=main.e0e5c68e.chunk.js.map