(this["webpackJsonpfacial-recognition-system"]=this["webpackJsonpfacial-recognition-system"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.63d10e19.png"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),i=a.n(r),c=(a(12),a(1)),s=(a(13),a(4)),l=a.n(s),m=(a(14),a(15),a(5)),u=a.n(m),p=a(6),d=a.n(p),h=function(){return o.a.createElement("div",{className:"logo"},o.a.createElement(u.a,{options:{max:50}},o.a.createElement("div",null,o.a.createElement("img",{className:"logo-img",src:d.a,alt:"Logo"}))))},g=function(e){var t=e.route,a=e.isSignedIn,n=e.handleRouteChange;return o.a.createElement("nav",{className:"nav"},o.a.createElement("div",{className:"nav-section"},o.a.createElement(h,null)),o.a.createElement("ul",{className:"nav-section nav-title"},o.a.createElement("li",null,o.a.createElement("h1",null,"detekt")),o.a.createElement("li",null,o.a.createElement("h3",null,"Facial Recognition System"))),"signin"===t?o.a.createElement("p",{className:"nav-section nav-item",onClick:function(){return n("registration")}},"Register"):"registration"===t?o.a.createElement("p",{className:"nav-section nav-item",onClick:function(){return n("signin")}},"Sign In"):a?o.a.createElement("p",{className:"nav-section nav-item",onClick:function(){return n("signin")}},"Sign Out"):void 0)},f=(a(16),function(e){var t=e.handleRouteChange,a=e.handleSignIn,r=Object(n.useState)(""),i=Object(c.a)(r,2),s=i[0],l=i[1],m=Object(n.useState)(""),u=Object(c.a)(m,2),p=u[0],d=u[1];return o.a.createElement("div",{className:"signin--container"},o.a.createElement("form",{className:"signin--form--container"},o.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},o.a.createElement("h3",{className:"f4 fw6 ph0 mh0"},"Sign In"),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),o.a.createElement("input",{className:"signin--form--input pa2 input-reset ba bg-transparent hover-bg-black hover-white",type:"email",name:"email-address",id:"email-address",onChange:function(e){l(e.target.value)}})),o.a.createElement("div",{className:"mv3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),o.a.createElement("input",{className:"signin--form--input b pa2 input-reset ba bg-transparent hover-bg-black hover-white",type:"password",name:"password",id:"password",onChange:function(e){d(e.target.value)}}))),o.a.createElement("div",{className:""},o.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:function(e){e.preventDefault(),fetch("https://salty-mesa-37106.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:p})}).then((function(e){return e.json()})).then((function(e){e.email&&(a(e),t("home"))})).catch(console.log)}})),o.a.createElement("div",{className:"lh-copy mt3"},o.a.createElement("p",{className:"f6 link dim black db pointer",onClick:function(){return t("registration")}},"Sign up"))))}),b=(a(17),function(e){var t=e.handleRouteChange,a=Object(n.useState)(""),r=Object(c.a)(a,2),i=r[0],s=r[1],l=Object(n.useState)(""),m=Object(c.a)(l,2),u=m[0],p=m[1],d=Object(n.useState)(""),h=Object(c.a)(d,2),g=h[0],f=h[1],b=Object(n.useState)(""),v=Object(c.a)(b,2),E=v[0],N=v[1];return o.a.createElement("div",{className:"registration--container"},o.a.createElement("form",{className:"registration--form--container"},o.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},o.a.createElement("h3",{className:"f4 fw6 ph0 mh0"},"Register"),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"fname"},"First Name"),o.a.createElement("input",{className:"registration--form--input pa2 input-reset ba bg-transparent hover-bg-black hover-white",type:"fname",name:"fname",id:"fname",onChange:function(e){s(e.target.value)}})),o.a.createElement("div",{className:"mv3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"lname"},"Last Name"),o.a.createElement("input",{className:"registration--form--input pa2 input-reset ba bg-transparent hover-bg-black hover-white",type:"lname",name:"lname",id:"lname",onChange:function(e){p(e.target.value)}})),o.a.createElement("div",{className:"mv3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),o.a.createElement("input",{className:"registration--form--input pa2 input-reset ba bg-transparent hover-bg-black hover-white",type:"email",name:"email-address",id:"email-address",onChange:function(e){f(e.target.value)}})),o.a.createElement("div",{className:"mv3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),o.a.createElement("input",{className:"registration--form--input b pa2 input-reset ba bg-transparent hover-bg-black hover-white",type:"password",name:"password",id:"password",onChange:function(e){N(e.target.value)}}))),o.a.createElement("div",{className:""},o.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register",onClick:function(e){e.preventDefault(),fetch("https://salty-mesa-37106.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:i,lastname:u,email:g,password:E})}).then((function(e){if(200===e.status)return e.json()})).then((function(e){e&&t("signin")})).catch(console.log)}})),o.a.createElement("div",{className:"lh-copy mt3"})))}),v=(a(18),function(){return o.a.createElement("div",{className:"stats-title"})}),E=(a(19),function(e){var t=e.handleInputChange,a=e.handleButtonSubmit;return o.a.createElement("div",{className:"form-container"},o.a.createElement("p",{className:"form-title"},"Enter Image URL"),o.a.createElement("div",{className:"form-content"},o.a.createElement("input",{className:"form-input",type:"text",placeholder:"https://example.com/images/example.jpg",onChange:t}),o.a.createElement("button",{className:"form-button",onClick:a},"Detect")),o.a.createElement("p",{className:"form-tip"},"Note: Large images take longer to process."))}),N=(a(20),a(21),function(e){var t=e.boxAreas;return o.a.createElement("div",null,t.map((function(e,t){return o.a.createElement("div",{className:"frs--bounding-box",key:t,style:{top:e.topRow,left:e.leftCol,bottom:e.bottomRow,right:e.rightCol}})})))}),w=function(e){var t=e.imageUrl,a=e.boxAreas,r=Object(n.useState)("Loading..."),i=Object(c.a)(r,2),s=i[0],l=i[1];return""!==t?o.a.createElement("div",{className:"frs--container"},o.a.createElement("div",{className:"frs--container-inner"},o.a.createElement("img",{className:"frs--image",id:"inputImage",onLoad:function(){l("")},src:t,alt:""}),o.a.createElement(N,{boxAreas:a}),o.a.createElement("p",{style:{textAlign:"center"}},s))):o.a.createElement("div",{className:"frs--container"})},y={particles:{number:{value:45,density:{enable:!0,value_area:800}},line_linked:{shadow:{enable:!0,color:"#3CA9D1",blur:1}}}};var k=function(){var e=Object(n.useState)("signin"),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),s=Object(c.a)(i,2),m=s[0],u=s[1],p=Object(n.useState)(""),d=Object(c.a)(p,2),h=d[0],N=d[1],k=Object(n.useState)([{}]),j=Object(c.a)(k,2),C=j[0],S=j[1],O=Object(n.useState)([{}]),R=Object(c.a)(O,2),x=R[0],I=R[1];fetch("https://salty-mesa-37106.herokuapp.com/",{method:"get",headers:{"Content-Type":"application/json"}}).catch(console.log);var A=function(e){"home"!==e&&(u(!1),N(""),S([{}]),I([{}])),r(e)},_=function(e){var t=e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box})),a=document.getElementById("inputImage"),n=Number(a.width),o=Number(a.height);return t.map((function(e){return{topRow:e.top_row*o,leftCol:e.left_col*n,bottomRow:o-e.bottom_row*o,rightCol:n-e.right_col*n}}))},F=function(e){S(e)};return o.a.createElement("div",{className:"App"},o.a.createElement(l.a,{className:"particles",params:y}),o.a.createElement(g,{route:a,handleRouteChange:A,isSignedIn:m}),"signin"===a?o.a.createElement(f,{handleRouteChange:A,handleSignIn:function(e){I(e),u(!0)}}):"registration"===a?o.a.createElement(b,{handleRouteChange:A}):o.a.createElement("section",null,o.a.createElement(v,null),o.a.createElement(E,{handleInputChange:function(e){S([{}]),N(e.target.value)},handleButtonSubmit:function(){fetch("https://salty-mesa-37106.herokuapp.com/clarifai",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageUrl:h})}).then((function(e){return e.json()})).then((function(e){fetch("https://salty-mesa-37106.herokuapp.com/image",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({itemsdetected:e.outputs[0].data.regions.length,accountid:x.accountid})}).catch(console.log),F(_(e))})).catch((function(e){return console.log("Error loading image: ",e)}))}}),o.a.createElement(w,{imageUrl:h,boxAreas:C})))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/detekt",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/detekt","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}],[[7,1,2]]]);
//# sourceMappingURL=main.068d1aff.chunk.js.map