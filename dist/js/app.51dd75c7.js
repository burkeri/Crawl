(function(e){function t(t){for(var i,o,s=t[0],u=t[1],c=t[2],d=0,p=[];d<s.length;d++)o=s[d],n[o]&&p.push(n[o][0]),n[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],i=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var i={},n={app:0},a=[];function o(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=i,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var i=r("64a9"),n=r.n(i);n.a},"041d":function(e,t,r){"use strict";var i=r("3605"),n=r.n(i);n.a},"0f5a":function(e,t,r){"use strict";var i=r("4820"),n=r.n(i);n.a},1859:function(e,t,r){"use strict";var i=r("67e8"),n=r.n(i);n.a},3445:function(e,t,r){"use strict";var i=r("37de"),n=r.n(i);n.a},"34ee":function(e,t,r){"use strict";var i=r("f4d6"),n=r.n(i);n.a},3605:function(e,t,r){},"37de":function(e,t,r){},4820:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var i=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("|\n    "),r("router-link",{attrs:{to:"register"}},[e._v("Register")]),e._v("|\n    "),r("router-link",{attrs:{to:"login"}},[e._v("Log In")]),e._v("|\n    "),r("router-link",{attrs:{to:"search"}},[e._v("Search")]),e._v(" |\n    "),r("router-link",{attrs:{to:"info"}},[e._v("Info")]),r("router-link",{attrs:{to:"route"}},[e._v("Route")])],1),r("router-view")],1)},a=[],o=(r("034f"),r("2877")),s={},u=Object(o["a"])(s,n,a,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,l=r("8c4f"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Taste Tour")]),i("div",{attrs:{id:"black"}}),i("video",{attrs:{id:"background-vid",autoplay:"",loop:"",muted:"",src:r("f652")},domProps:{muted:!0}}),i("b-button",{attrs:{size:"lg",id:"login"}},[i("router-link",{attrs:{to:"login"}},[e._v("Sign In")])],1),i("b-button",{attrs:{size:"lg",id:"register"}},[i("router-link",{attrs:{to:"register"}},[e._v("Sign Up")])],1)],1)},p=[],m=(r("0f5a"),{}),f=Object(o["a"])(m,d,p,!1,null,"6586757d",null);f.options.__file="Home.vue";var v=f.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("h1",[e._v("Sign Up")]),r("form",{attrs:{name:"tastetour",autocomplete:"off"}},[r("b-form-input",{attrs:{type:"email",name:"email",placeholder:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("br"),r("b-form-input",{attrs:{type:"password",name:"password",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("br"),r("b-form-input",{attrs:{type:"text",name:"username",placeholder:"username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),r("br"),r("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}),r("br"),e.$store.state.isUserLoggedIn?r("b-button",{attrs:{size:"lg",id:"out"},on:{click:e.logout}},[e._v("Log Out")]):r("b-button",{attrs:{size:"lg",id:"reg"},on:{click:e.register}},[e._v("Register")])],1)},g=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"background-img"}},[i("img",{attrs:{src:r("a700")}})])}],b=(r("96cf"),r("3b8d")),_=r("bc3a"),y=r.n(_),k=function(){return y.a.create({baseURL:"/"})},x={register:function(e){return k().post("register",e)},login:function(e){return k().post("login",e)}},w={data:function(){return{email:"",password:"",username:"",error:null}},methods:{register:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.register({email:this.email,password:this.password,username:this.username});case 3:t=e.sent,this.$store.dispatch("setToken",t.data.token),this.$store.dispatch("setUser",t.data.user),this.email="",this.password="",this.username="",e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),this.error=e.t0.response.data.error;case 14:case"end":return e.stop()}},e,this,[[0,11]])}));function t(){return e.apply(this,arguments)}return t}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.email="",this.password="",this.username=""}}},O=w,L=(r("b0a7"),Object(o["a"])(O,h,g,!1,null,"404f8a65",null));L.options.__file="Register.vue";var j=L.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("h1",[e._v("Sign In")]),r("b-form-input",{attrs:{type:"email",name:"email",placeholder:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("br"),r("b-form-input",{attrs:{type:"password",name:"password",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("br"),r("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}),r("br"),e.$store.state.isUserLoggedIn?r("b-button",{attrs:{id:"out"},on:{click:e.logout}},[e._v("Log Out")]):r("b-button",{attrs:{size:"lg",id:"log"},on:{click:e.login}},[e._v("Log In")])],1)},P=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"background-img"}},[i("img",{attrs:{src:r("a700")}})])}],E={data:function(){return{email:"",password:"",error:null}},methods:{login:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.login({email:this.email,password:this.password});case 3:t=e.sent,this.$store.dispatch("setToken",t.data.token),this.$store.dispatch("setUser",t.data.user),this.email="",this.password="",e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.error=e.t0.response.data.error;case 13:case"end":return e.stop()}},e,this,[[0,10]])}));function t(){return e.apply(this,arguments)}return t}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.email="",this.password=""}}},q=E,R=(r("3445"),Object(o["a"])(q,T,P,!1,null,"af72ef00",null));R.options.__file="Login.vue";var U=R.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{attrs:{id:"black"}}),e._m(0),i("h3",[e._v("Pick Your City")]),i("b-form-input",{attrs:{id:"city",type:"text",name:"city",autocomplete:"off",placeholder:"New York"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),i("img",{attrs:{id:"cutlery",src:r("6014")}}),i("b-form-input",{attrs:{id:"food",type:"text",name:"food",autocomplete:"off",placeholder:"Pick Your Food"},model:{value:e.food,callback:function(t){e.food=t},expression:"food"}}),i("h3",{attrs:{id:"price"}},[e._v("Price")]),i("b-form-radio-group",{attrs:{buttons:"",id:"brand",size:"lg",name:"ds",options:e.options},model:{value:e.checkedPrice,callback:function(t){e.checkedPrice=t},expression:"checkedPrice"}}),i("b-button",{attrs:{id:"search"},on:{click:e.search}},[e._v("Search")]),i("a",[e._v("Log Out")])],1)},I=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"background-img"}},[i("img",{attrs:{src:r("e5bc")}})])}],z=(r("386d"),{search:function(e){return k().post("search",e)}}),A={data:function(){return{city:"",food:"",checkedPrice:"",options:[{text:"$",value:"1"},{text:"$$",value:"2"},{text:"$$$",value:"3"}]}},methods:{search:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.search({location:this.city,query:this.food,price:this.checkedPrice});case 3:t=e.sent,console.log(t),this.location="",this.food="",e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.error=e.t0.response.data.error;case 12:case"end":return e.stop()}},e,this,[[0,9]])}));function t(){return e.apply(this,arguments)}return t}()}},S=A,M=(r("8130"),r("6b00"),Object(o["a"])(S,$,I,!1,null,"5b1855ad",null));M.options.__file="Search.vue";var D=M.exports,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"map-wrapper"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.radius,expression:"radius"}],attrs:{type:"text"},domProps:{value:e.radius},on:{input:function(t){t.target.composing||(e.radius=t.target.value)}}}),r("button",{on:{click:e.getLocation}},[e._v("Check")]),r("p",[e._v(e._s(e.nextLocation))]),r("p",[e._v(e._s(e.msg))]),r("div",{attrs:{id:"map"}})])},C=[],N=r("5d73"),Y=r.n(N),B=r("59ad"),F=r.n(B),H=r("e192"),J=r.n(H),G=r("595b"),W={data:function(){return{radius:"10",nextLocation:"Default",msg:"Default message",accessToken:"pk.eyJ1IjoidGhlbm9vZGxlbW9vc2UiLCJhIjoiY2pvdXM4c3ZrMWZnYTNrbW9ic2hmdjV6ZyJ9.-A735y9fU1TdsJ993uIKLA",routeObj:{center:{latitude:"28.542484",longitude:"-81.326371"},places:[{pid:"BERHdYECP9p1axoc3QXcBQ",name:"Mario's Pizza",address:"7213 Curryford Rd",city:"Orlando",region:"FL",price:1,rating:"4.0",numberOfRatings:106,longitude:-81.29118,latitude:28.51681,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"},{pid:"rMdbNLK_JD13_5UkWtNP4g",name:"Muzzarella Pizza and Italian Kitchen",address:"7780 Lake Underhill Rd",city:"Orlando",region:"FL",price:1,rating:"4.5",numberOfRatings:64,longitude:-81.28142,latitude:28.53873,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"},{pid:"snY6Hub4XL7sx9GwjWb2kg",name:"Pizzeria Del-Dio",address:"3210 E Colonial Dr",city:"Orlando",region:"FL",price:1,rating:"4.5",numberOfRatings:141,longitude:-81.3434482134918,latitude:28.5520465549289,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"},{pid:"79OcxliIkgasAEjH2pS01g",name:"Tomasino's Pizza",address:"2612 E Colonial Dr",city:"Orlando",region:"FL",price:1,rating:"4.5",numberOfRatings:194,longitude:-81.3498468,latitude:28.551336,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"},{pid:"iX7R_COA8V-TMZGXOVRAjQ",name:"Lazy Moon Pizza",address:"1011 E Colonial Dr",city:"Orlando",region:"FL",price:1,rating:"4.5",numberOfRatings:297,longitude:-81.365976028836,latitude:28.5534745,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"}]}}},methods:{map:function(){return J.a.accessToken=this.accessToken,new J.a.Map({container:"map",center:[this.routeObj.center.longitude,this.routeObj.center.latitude],zoom:11.5,style:"mapbox://styles/mapbox/streets-v9"})},getLocation:function(){var e,t=this.routeObj.places,r=[],i=this.radius;console.log(i);var n=0,a=0;this.nextLocation=t[a];var o=t[a],s=!0,u=!1,c=void 0;try{for(var l,d=Y()(t);!(s=(l=d.next()).done);s=!0){var p=l.value;r.push([p.longitude,p.latitude])}}catch(m){u=!0,c=m}finally{try{s||null==d.return||d.return()}finally{if(u)throw c}}navigator.geolocation?navigator.geolocation.watchPosition(function(t){var r=t.coords,s=G["point"]([r.longitude,r.latitude]),u=G["point"]([o.longitude,o.latitude]),c={units:"miles"};e=G["circle"](u,F()(i),c),G["booleanPointInPolygon"](s,e)?0===n&&(alert("You've made it!"),n=1):1===n?(alert("You left"),n=0,a++):alert("You are not there yet")},function(e){switch(e.code){case e.PERMISSION_DENIED:this.error="User denied the request for Geolocation.";break;case e.POSITION_UNAVAILABLE:this.error="Location information is unavailable.";break;case e.TIMEOUT:this.error="The request to get user location timed out.";break;case e.UNKNOWN_ERROR:this.error="An unknown error occurred.";break}}):this.error="Geolocation is not supported by this browser."}},mounted:function(){var e=this.map(),t=this.routeObj.places,r=[],i=!0,n=!1,a=void 0;try{for(var o,s=Y()(t);!(i=(o=s.next()).done);i=!0){var u=o.value;r.push([u.longitude,u.latitude])}}catch(l){n=!0,a=l}finally{try{i||null==s.return||s.return()}finally{if(n)throw a}}var c={id:"route",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:r}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#fd593f","line-width":4,"line-dasharray":[1,2]}};e.on("load",function(){var r=1,i=!0,n=!1,a=void 0;try{for(var o,s=Y()(t);!(i=(o=s.next()).done);i=!0){var u=o.value,d=document.createElement("div");d.textContent=r,d.className="marker",new J.a.Marker(d).setLngLat([u.longitude,u.latitude]).addTo(e),r++}}catch(l){n=!0,a=l}finally{try{i||null==s.return||s.return()}finally{if(n)throw a}}e.addLayer(c)})}},X=W,K=(r("041d"),Object(o["a"])(X,Z,C,!1,null,null,null));K.options.__file="Route.vue";var V=K.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"info-pic-div"}},[r("img",{attrs:{id:"info-pic",src:e.infoPic}}),r("h1",[e._v(e._s(e.name))]),r("div",{attrs:{id:"black"}})]),r("div",{attrs:{id:"rating-container"}}),r("div",{attrs:{id:"container"}},[e._l(e.items,function(t){return r("div",{attrs:{id:"reviews"}},[r("p",[e._v(e._s(t.review))])])}),r("b-button",[e._v("Load more")])],2)])},ee=[],te={data:function(){return{infoPic:"https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Lorem Ipsum",stars:"https://img.freepik.com/free-icon/five-points-star_318-1414.jpg?size=338&ext=jpg",items:[{review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}],rating:4.5,test:"This is a test."}},methods:{printRating:function(){for(var e=this.rating,t=0;t<e;t++){var r=document.getElementById("rating-container"),i=document.createElement("div"),n=document.createElement("img");n.setAttribute("src",this.stars),n.classList.add("rating-icon"),i.classList.add("rating-icon","inline"),i.appendChild(n),r.appendChild(i)}}},mounted:function(){this.printRating()}},re=te,ie=(r("1859"),r("34ee"),Object(o["a"])(re,Q,ee,!1,null,"4677e365",null));ie.options.__file="Info.vue";var ne=ie.exports;i["a"].use(l["a"]);var ae=new l["a"]({routes:[{path:"/",name:"home",component:v},{path:"/register",name:"register",component:j},{path:"/login",name:"login",component:U},{path:"/search",name:"search",component:D},{path:"/info",name:"info",component:ne},{path:"/route",name:"route",component:V}]}),oe=r("2f62");i["a"].use(oe["a"]);var se=new oe["a"].Store({strict:!0,state:{user:null,token:null,username:null,isUserLoggedIn:!1},mutations:{setToken:function(e,t){e.token=t,e.isUserLoggedIn=!!t},setUser:function(e,t){e.user=t}},actions:{setToken:function(e,t){var r=e.commit;r("setToken",t)},setUser:function(e,t){var r=e.commit;r("setUser",t)}}}),ue=r("31bd"),ce=r("9f7b");r("ab8b"),r("2dd8");i["a"].use(ce["a"]),i["a"].config.productionTip=!1,Object(ue["sync"])(se,ae),new i["a"]({router:ae,store:se,render:function(e){return e(c)}}).$mount("#app")},6014:function(e,t,r){e.exports=r.p+"img/cutlery.fdaf0a00.png"},6369:function(e,t,r){},"64a9":function(e,t,r){},"67e8":function(e,t,r){},"6b00":function(e,t,r){"use strict";var i=r("6369"),n=r.n(i);n.a},8130:function(e,t,r){"use strict";var i=r("ff0b"),n=r.n(i);n.a},9440:function(e,t,r){},a700:function(e,t,r){e.exports=r.p+"img/food-resize.d76af7d7.jpg"},b0a7:function(e,t,r){"use strict";var i=r("9440"),n=r.n(i);n.a},e5bc:function(e,t,r){e.exports=r.p+"img/food2-resize.e6c02a98.jpg"},f4d6:function(e,t,r){},f652:function(e,t,r){e.exports=r.p+"media/Untitled.31fcb65c.webm"},ff0b:function(e,t,r){}});
//# sourceMappingURL=app.51dd75c7.js.map