(function(e){function t(t){for(var n,i,s=t[0],u=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"0400":function(e,t,r){"use strict";var n=r("bdc7"),o=r.n(n);o.a},"041d":function(e,t,r){"use strict";var n=r("3605"),o=r.n(n);o.a},3605:function(e,t,r){},"4b03":function(e,t,r){"use strict";var n=r("81c3"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("|\n    "),r("router-link",{attrs:{to:"register"}},[e._v("Register")]),e._v("|\n    "),r("router-link",{attrs:{to:"login"}},[e._v("Log In")]),e._v("|\n    "),r("router-link",{attrs:{to:"search"}},[e._v("Search")]),e._v("|\n    "),r("router-link",{attrs:{to:"route"}},[e._v("Route")])],1),r("router-view")],1)},a=[],i=(r("034f"),r("2877")),s={},u=Object(i["a"])(s,o,a,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,c=r("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Taste Tour")]),n("div",{attrs:{id:"black"}}),n("video",{attrs:{id:"background-vid",autoplay:"",loop:"",muted:"",src:r("f652")},domProps:{muted:!0}}),n("b-button",{attrs:{size:"lg",id:"login"}},[n("router-link",{attrs:{to:"login"}},[e._v("Sign In")])],1),n("b-button",{attrs:{size:"lg",id:"register"}},[n("router-link",{attrs:{to:"register"}},[e._v("Sign Up")])],1)],1)},p=[],f=(r("4b03"),{}),m=Object(i["a"])(f,d,p,!1,null,"1e4c8d25",null);m.options.__file="Home.vue";var g=m.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("h1",[e._v("Sign Up")]),r("form",{attrs:{name:"tastetour",autocomplete:"off"}},[r("b-form-input",{attrs:{type:"email",name:"email",placeholder:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("br"),r("b-form-input",{attrs:{type:"password",name:"password",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("br"),r("b-form-input",{attrs:{type:"text",name:"username",placeholder:"username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),r("br"),r("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}),r("br"),e.$store.state.isUserLoggedIn?r("b-button",{attrs:{size:"lg",id:"out"},on:{click:e.logout}},[e._v("Log Out")]):r("b-button",{attrs:{size:"lg",id:"reg"},on:{click:e.register}},[e._v("Register")])],1)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"background-img"}},[n("img",{attrs:{src:r("a700")}})])}],b=(r("96cf"),r("3b8d")),_=r("bc3a"),y=r.n(_),k=function(){return y.a.create({baseURL:"/"})},w={register:function(e){return k().post("register",e)},login:function(e){return k().post("login",e)}},O={data:function(){return{email:"",password:"",username:"",error:null}},methods:{register:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.register({email:this.email,password:this.password,username:this.username});case 3:t=e.sent,this.$store.dispatch("setToken",t.data.token),this.$store.dispatch("setUser",t.data.user),this.email="",this.password="",this.username="",e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),this.error=e.t0.response.data.error;case 14:case"end":return e.stop()}},e,this,[[0,11]])}));function t(){return e.apply(this,arguments)}return t}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.email="",this.password="",this.username=""}}},x=O,T=(r("0400"),Object(i["a"])(x,v,h,!1,null,"0845bb97",null));T.options.__file="Register.vue";var j=T.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("h1",[e._v("Sign In")]),r("b-form-input",{attrs:{type:"email",name:"email",placeholder:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("br"),r("b-form-input",{attrs:{type:"password",name:"password",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("br"),r("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}),r("br"),e.$store.state.isUserLoggedIn?r("b-button",{attrs:{id:"out"},on:{click:e.logout}},[e._v("Log Out")]):r("b-button",{attrs:{size:"lg",id:"log"},on:{click:e.login}},[e._v("Log In")])],1)},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"background-img"}},[n("img",{attrs:{src:r("a700")}})])}],R={data:function(){return{email:"",password:"",error:null}},methods:{login:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.login({email:this.email,password:this.password});case 3:t=e.sent,this.$store.dispatch("setToken",t.data.token),this.$store.dispatch("setUser",t.data.user),this.email="",this.password="",e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.error=e.t0.response.data.error;case 13:case"end":return e.stop()}},e,this,[[0,10]])}));function t(){return e.apply(this,arguments)}return t}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.email="",this.password=""}}},U=R,E=(r("f450"),Object(i["a"])(U,L,P,!1,null,"29d53298",null));E.options.__file="Login.vue";var z=E.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"black"}}),e._m(0),r("h3",[e._v("Pick Your City")]),r("b-form-input",{attrs:{type:"text",name:"city"}}),r("b-form-input",{attrs:{type:"text",name:"food",placeholder:"Pick Your Food"}}),r("b-button"),r("b-button"),r("b-button")],1)},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"background-img"}},[n("img",{attrs:{src:r("e5bc")}})])}],$=(r("8ca7"),{}),M=Object(i["a"])($,I,A,!1,null,"2ed6700a",null);M.options.__file="Search.vue";var S=M.exports,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"map-wrapper"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.radius,expression:"radius"}],attrs:{type:"text"},domProps:{value:e.radius},on:{input:function(t){t.target.composing||(e.radius=t.target.value)}}}),r("div",{attrs:{id:"map"}})])},N=[],C=r("5d73"),Y=r.n(C),B=r("59ad"),D=r.n(B),F=r("e192"),H=r.n(F),J=r("595b"),G={data:function(){return{radius:"0.25",accessToken:"pk.eyJ1IjoidGhlbm9vZGxlbW9vc2UiLCJhIjoiY2pvdXM4c3ZrMWZnYTNrbW9ic2hmdjV6ZyJ9.-A735y9fU1TdsJ993uIKLA",routeObj:{center:{latitude:"28.542484",longitude:"-81.326371"},places:[{pid:"BERHdYECP9p1axoc3QXcBQ",name:"Mario's Pizza",address:"7213 Curryford Rd",city:"Orlando",region:"FL",price:1,rating:"4.0",numberOfRatings:106,longitude:-81.29118,latitude:28.51681,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"},{pid:"rMdbNLK_JD13_5UkWtNP4g",name:"Muzzarella Pizza and Italian Kitchen",address:"7780 Lake Underhill Rd",city:"Orlando",region:"FL",price:1,rating:"4.5",numberOfRatings:64,longitude:-81.28142,latitude:28.53873,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"},{pid:"snY6Hub4XL7sx9GwjWb2kg",name:"Pizzeria Del-Dio",address:"3210 E Colonial Dr",city:"Orlando",region:"FL",price:1,rating:"4.5",numberOfRatings:141,longitude:-81.3434482134918,latitude:28.5520465549289,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"},{pid:"79OcxliIkgasAEjH2pS01g",name:"Tomasino's Pizza",address:"2612 E Colonial Dr",city:"Orlando",region:"FL",price:1,rating:"4.5",numberOfRatings:194,longitude:-81.3498468,latitude:28.551336,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"},{pid:"iX7R_COA8V-TMZGXOVRAjQ",name:"Lazy Moon Pizza",address:"1011 E Colonial Dr",city:"Orlando",region:"FL",price:1,rating:"4.5",numberOfRatings:297,longitude:-81.365976028836,latitude:28.5534745,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"}]}}},methods:{map:function(){return H.a.accessToken=this.accessToken,new H.a.Map({container:"map",center:[this.routeObj.center.longitude,this.routeObj.center.latitude],zoom:11.5,style:"mapbox://styles/mapbox/streets-v9"})}},mounted:function(){var e,t=this.map(),r=this.routeObj.places,n=[],o=0,a=this.radius,i=0,s=r[i],u=!0,l=!1,c=void 0;try{for(var d,p=Y()(r);!(u=(d=p.next()).done);u=!0){var f=d.value;n.push([f.longitude,f.latitude])}}catch(b){l=!0,c=b}finally{try{u||null==p.return||p.return()}finally{if(l)throw c}}function m(){navigator.geolocation?navigator.geolocation.watchPosition(g,v):this.error="Geolocation is not supported by this browser."}function g(t){var r=t.coords,n=J["point"]([r.longitude,r.latitude]),u=J["point"]([s.longitude,s.latitude]),l={units:"miles"};console.log(a),e=J["circle"](u,D()(a),l),J["booleanPointInPolygon"](n,e)?0===o&&(console.log("You've made it!"),o=1):1===o?(console.log("You left"),o=0,i++):console.log("You are not there yet")}function v(e){switch(e.code){case e.PERMISSION_DENIED:this.error="User denied the request for Geolocation.";break;case e.POSITION_UNAVAILABLE:this.error="Location information is unavailable.";break;case e.TIMEOUT:this.error="The request to get user location timed out.";break;case e.UNKNOWN_ERROR:this.error="An unknown error occurred.";break}}m();var h={id:"route",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:n}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#fd593f","line-width":4,"line-dasharray":[1,2]}};t.on("load",function(){var e=1,n=!0,o=!1,a=void 0;try{for(var i,s=Y()(r);!(n=(i=s.next()).done);n=!0){var u=i.value,l=document.createElement("div");l.textContent=e,l.className="marker",new H.a.Marker(l).setLngLat([u.longitude,u.latitude]).addTo(t),e++}}catch(b){o=!0,a=b}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}t.addLayer(h)})}},W=G,X=(r("041d"),Object(i["a"])(W,Z,N,!1,null,null,null));X.options.__file="Route.vue";var K=X.exports;n["a"].use(c["a"]);var V=new c["a"]({routes:[{path:"/",name:"home",component:g},{path:"/register",name:"register",component:j},{path:"/login",name:"login",component:z},{path:"/search",name:"search",component:S},{path:"/route",name:"route",component:K}]}),Q=r("2f62");n["a"].use(Q["a"]);var q=new Q["a"].Store({strict:!0,state:{user:null,token:null,username:null,isUserLoggedIn:!1},mutations:{setToken:function(e,t){e.token=t,e.isUserLoggedIn=!!t},setUser:function(e,t){e.user=t}},actions:{setToken:function(e,t){var r=e.commit;r("setToken",t)},setUser:function(e,t){var r=e.commit;r("setUser",t)}}}),ee=r("31bd"),te=r("9f7b");r("ab8b");n["a"].use(te["a"]),n["a"].config.productionTip=!1,Object(ee["sync"])(q,V),new n["a"]({router:V,store:q,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,r){},"81c3":function(e,t,r){},"8ca7":function(e,t,r){"use strict";var n=r("e825"),o=r.n(n);o.a},a700:function(e,t,r){e.exports=r.p+"img/food-resize.d76af7d7.jpg"},bdc7:function(e,t,r){},e5bc:function(e,t,r){e.exports=r.p+"img/food2-resize.e6c02a98.jpg"},e825:function(e,t,r){},f450:function(e,t,r){"use strict";var n=r("f522"),o=r.n(n);o.a},f522:function(e,t,r){},f652:function(e,t,r){e.exports=r.p+"media/Untitled.31fcb65c.webm"}});
//# sourceMappingURL=app.8cb89587.js.map