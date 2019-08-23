(window["webpackJsonpgeneral-app"]=window["webpackJsonpgeneral-app"]||[]).push([[0],{101:function(e,t){},103:function(e,t){},137:function(e,t){},138:function(e,t){},140:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=140},143:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(30),i=n.n(a),c=n(10),u=n(20),o=n(66),l=function(e){return function(t){t({type:"REGISTER_USER",data:e})}},d=function(e){return function(t){t({type:"LOGIN_STATUS",data:e})}},h=function(e){return function(t){t({type:"LOGIN_USER",user:e})}},p={loginStatus:!1,serviceList:[],userDetails:{},token:"",register:!1},m=Object(u.c)({userServiceReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOKEN_SETTER":return Object.assign({},e,{token:t.token});case"LOGIN_STATUS":return Object.assign({},e,{loginStatus:t.data});case"LOGIN_USER":return Object.assign({},e,{userDetails:t.user});case"REGISTER_USER":return Object.assign({},e,{register:t.data});case"SERVICES_LIST":return Object.assign({},e,{serviceList:t.data});case"FETCH_API":return Object.assign({},e,{fetchAPI:!e.fetchAPI});case"FETCHED_DATA":return Object.assign({},e,{studentList:t.data});case"STUDENT_SELECTED":return Object.assign({},e,{selectedStudent:t.selectedStudent});case"SELECTION_POPUP":return Object.assign({},e,{studentDetailsPopup:t.payload});default:return e}}});n(77);var b=n(14),f=n(15),g=n(17),S=n(16),v=n(18),E=(n(78),n(24)),O="",y={allServices:(O="https://service-subscriber.herokuapp.com/api")+"/allServices",authenticate:O+"/authenticate",userSubscribeServices:O+"/userSubscribeServices",users:O+"/users"},j=n(144),w=n(148),L=n(147),k=n(146),C=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(S.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(E.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.loginVerify()},n.state={username:"",password:""},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"loginVerify",value:function(){var e=this;fetch(y.authenticate,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})}).then(function(e){return e.json()}).then(function(t){console.log("Login status data: ",t),500===t.status?e.props.alterLoginStatus(!1):(e.props.alterLoginStatus(!0),e.props.loggedInUser(t),e.props.tokenSetter(e.state.username+":"+e.state.password))}).catch(function(t){return e.setState({error:t})})}},{key:"validateForm",value:function(){return this.state.username.length>0&&this.state.password.length>0}},{key:"render",value:function(){return s.a.createElement("div",{className:"form-fields"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement(j.a,{controlId:"username",bsSize:"large"},s.a.createElement(w.a,null,"User Name"),s.a.createElement(L.a,{autoFocus:!0,type:"text",value:this.state.username,onChange:this.handleChange})),s.a.createElement(j.a,{controlId:"password",bsSize:"large"},s.a.createElement(w.a,null,"Password"),s.a.createElement(L.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),s.a.createElement(k.a,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit"},"Login")),s.a.createElement("h2",null,"Available Services: "),this.props.serviceList.map(function(e){return s.a.createElement("div",null,e.name)}))}}]),t}(r.Component),T=Object(c.b)(function(e){return{serviceList:e.userServiceReducer.serviceList}},function(e){return{alterLoginStatus:function(t){return e(d(t))},loggedInUser:function(t){return e(h(t))},tokenSetter:function(t){return e((n=t,function(e){e({type:"TOKEN_SETTER",token:n})}));var n}}})(C),R=n(145),D=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(S.a)(t).call(this,e))).handleChange=function(e,t){n.setState(Object(E.a)({},t,e.target.value))},n.logout=function(){n.props.alterLoginStatus(!1),n.props.loggedInUser({})},n.state={username:"",password:""},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"validateForm",value:function(){return this.state.username.length>0&&this.state.password.length>0}},{key:"userDetailsUpdate",value:function(){var e=this;console.log("user details update after subscribe/unsbuscribe",this.props.token),fetch(y.authenticate,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.props.token.split(":")[0],password:this.props.token.split(":")[0]})}).then(function(e){return e.json()}).then(function(t){console.log("Login status data: ",t),e.props.loggedInUser(t)}).catch(function(t){return e.setState({error:t})})}},{key:"subscribeService",value:function(e,t){var n=this;console.log("User page subscribe try",e,t,this.props.userDetails),fetch(y.userSubscribeServices,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:this.props.userDetails.id,subscribes:[{id:t.id}]})}).then(function(e){console.log("Subscribed try result: ",e),n.userDetailsUpdate()}).catch(function(e){return n.setState({error:e})})}},{key:"unsubscribeService",value:function(e,t){var n=this;console.log("User page unsubscribe try",e,t,this.props.userDetails),fetch(y.userSubscribeServices+"/"+t.id,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:this.props.userDetails.id,subscribes:[{id:t.id}]})}).then(function(e){console.log("Unsubscribed try result: ",e),n.userDetailsUpdate()}).catch(function(e){return n.setState({error:e})})}},{key:"render",value:function(){var e=this,t=this.props.subscribedList.map(function(e){return e.id});return s.a.createElement("div",{className:"Login"},s.a.createElement("h3",null," Hi ",this.props.username),s.a.createElement(k.a,{onClick:this.logout},"Logout"),s.a.createElement("h2",null,"Services"),s.a.createElement(R.a,null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"ID"),s.a.createElement("th",null,"Name"),s.a.createElement("th",null))),s.a.createElement("tbody",null,this.props.serviceList.map(function(n){return t.includes(n.id)?s.a.createElement("tr",null,s.a.createElement("th",null,s.a.createElement(w.a,null,n.id)),s.a.createElement("th",null,s.a.createElement(w.a,null,n.name)),s.a.createElement("th",null,s.a.createElement(k.a,{onClick:function(t){return e.unsubscribeService(t,n)}},"UnSubscribe"))):s.a.createElement("tr",null,s.a.createElement("th",null,s.a.createElement(w.a,null,n.id)),s.a.createElement("th",null,s.a.createElement(w.a,null,n.name)),s.a.createElement("th",null,s.a.createElement(k.a,{onClick:function(t){return e.subscribeService(t,n)}},"Subscribe")))}))))}}]),t}(r.Component),U=Object(c.b)(function(e){return{serviceList:e.userServiceReducer.serviceList,userDetails:e.userServiceReducer.userDetails,username:e.userServiceReducer.userDetails.username,token:e.userServiceReducer.token,subscribedList:e.userServiceReducer.userDetails.subscribes||[]}},function(e){return{alterLoginStatus:function(t){return e(d(t))},loggedInUser:function(t){return e(h(t))}}})(D),I=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(S.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(E.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.register()},n.state={username:"",password:"",confirm_password:"",errorMsg:""},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"validateForm",value:function(){return this.state.username.length>0&&this.state.password.length>0&&this.state.confirm_password.length>0}},{key:"register",value:function(){var e=this;this.state.password==this.state.confirm_password?(this.setState({errorMsg:""}),fetch(y.users,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})}).then(function(t){console.log("Register request status: ",t),200===t.status?e.props.newUserRegister(!1):e.setState({error:t.message})}).catch(function(t){return e.setState({error:t})})):this.setState({errorMsg:"Password not matching!!"})}},{key:"render",value:function(){return s.a.createElement("div",{className:"form-fields"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement(j.a,{controlId:"username",bsSize:"large"},s.a.createElement(w.a,null,"User Name"),s.a.createElement(L.a,{autoFocus:!0,type:"text",value:this.state.username,onChange:this.handleChange})),s.a.createElement(j.a,{controlId:"password",bsSize:"large"},s.a.createElement(w.a,null,"Password"),s.a.createElement(L.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),s.a.createElement(j.a,{controlId:"confirm_password",bsSize:"large"},s.a.createElement(w.a,null,"Confirm Password"),s.a.createElement(L.a,{value:this.state.confirm_password,onChange:this.handleChange,type:"password"})),s.a.createElement(k.a,{bsSize:"large",disabled:!this.validateForm(),type:"submit"},"Register")))}}]),t}(r.Component),N=Object(c.b)(function(e){return{serviceList:e.userServiceReducer.serviceList,userDetails:e.userServiceReducer.userDetails,username:e.userServiceReducer.userDetails.username,subscribedList:e.userServiceReducer.userDetails.subscribes||[]}},function(e){return{alterLoginStatus:function(t){return e(d(t))},loggedInUser:function(t){return e(h(t))},newUserRegister:function(t){return e(l(t))}}})(I),_=(n(142),function(e){function t(){var e,n;Object(b.a)(this,t);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(n=Object(g.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(s)))).studentSelection=function(e){n.props.studentSelection()},n.registerUser=function(){n.props.newUserRegister(!0)},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.serviceListFetch()}},{key:"serviceListFetch",value:function(){var e=this;fetch(y.allServices).then(function(e){return e.json()}).then(function(t){console.log("Available services: ",t),e.props.allServicesFetch(t)}).catch(function(t){return e.setState({error:t})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",{className:"App-title"}," Welcome to Online Service Subscriber ")),this.props.register?"":this.props.loginStatus?s.a.createElement(U,null):s.a.createElement(T,null),this.props.loginStatus?"":this.props.register?s.a.createElement(N,null):s.a.createElement(k.a,{style:{bottom:"0",position:"fixed"},block:!0,bsSize:"large",onClick:this.registerUser},"Register"))}}]),t}(r.Component)),A=Object(c.b)(function(e){return{loginStatus:e.userServiceReducer.loginStatus,username:e.userServiceReducer.userDetails.username,subscribedList:e.userServiceReducer.userDetails.subscribes||[],register:e.userServiceReducer.register}},function(e){return{studentSelection:function(){return e(function(e){e({type:"STUDENT_SELECTED",selectedStudent:t})});var t},allServicesFetch:function(t){return e(function(e){return function(t){t({type:"SERVICES_LIST",data:e})}}(t))},newUserRegister:function(t){return e(l(t))}}})(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(c.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.d)(m,e,Object(u.a)(o.a))}()},s.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,n){e.exports=n(143)},77:function(e,t,n){},83:function(e,t){},85:function(e,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.cd11b668.chunk.js.map