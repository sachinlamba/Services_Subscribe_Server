(window["webpackJsonpgeneral-app"]=window["webpackJsonpgeneral-app"]||[]).push([[0],{128:function(e,t){},129:function(e,t){},131:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=131},133:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(24),i=n.n(a),c=n(8),u=n(10),o=n(58),l=function(e){return function(t){t({type:"LOGIN_STATUS",data:e})}},p=function(e){return function(t){t({type:"LOGIN_USER",user:e})}},d={loginStatus:!1,serviceList:[],userDetails:{},token:""},h=Object(u.c)({userServiceReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_STATUS":return Object.assign({},e,{loginStatus:t.data});case"LOGIN_USER":return Object.assign({},e,{userDetails:t.user});case"SERVICES_LIST":return Object.assign({},e,{serviceList:t.data});case"FETCH_API":return Object.assign({},e,{fetchAPI:!e.fetchAPI});case"FETCHED_DATA":return Object.assign({},e,{studentList:t.data});case"STUDENT_SELECTED":return Object.assign({},e,{selectedStudent:t.selectedStudent});case"SELECTION_POPUP":return Object.assign({},e,{studentDetailsPopup:t.payload});default:return e}}});n(68);var f=n(15),b=n(16),v=n(19),m=n(17),S=n(18),g=(n(69),n(26)),E=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(v.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e,t){n.setState(Object(g.a)({},t,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.loginVerify()},n.state={username:"",password:""},n}return Object(S.a)(t,e),Object(b.a)(t,[{key:"loginVerify",value:function(){var e=this;fetch("https://service-subscriber.herokuapp.com/api/authenticate",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})}).then(function(e){return e.json()}).then(function(t){console.log("Login status data: ",t),500==t.status&&e.props.alterLoginStatus(!1),e.props.alterLoginStatus(!0),e.props.loggedInUser(t)}).catch(function(t){return e.setState({error:t})})}},{key:"validateForm",value:function(){return this.state.username.length>0&&this.state.password.length>0}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Login"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{id:"username",bsSize:"large"},s.a.createElement("label",null,"username"),s.a.createElement("input",{autoFocus:!0,type:"text",value:this.state.username,onChange:function(t){return e.handleChange(t,"username")}})),s.a.createElement("div",{id:"password",bsSize:"large"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{value:this.state.password,onChange:function(t){return e.handleChange(t,"password")},type:"password"})),s.a.createElement("button",{bsSize:"large",disabled:!this.validateForm(),type:"submit"},"Login")),s.a.createElement("h2",null,"Available Services: "),this.props.serviceList.map(function(e){return s.a.createElement("div",null,e.name)}))}}]),t}(r.Component),O=Object(c.b)(function(e){return{serviceList:e.userServiceReducer.serviceList}},function(e){return{alterLoginStatus:function(t){return e(l(t))},loggedInUser:function(t){return e(p(t))}}})(E),j=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(v.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e,t){n.setState(Object(g.a)({},t,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.loginVerify()},n.state={username:"",password:""},n}return Object(S.a)(t,e),Object(b.a)(t,[{key:"loginVerify",value:function(){var e=this;fetch("https://service-subscriber.herokuapp.com/api/authenticate",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})}).then(function(e){return e.json()}).then(function(t){console.log("Login status data: ",t),500==t.status&&e.props.alterLoginStatus(!1),e.props.alterLoginStatus(!0),e.props.loggedInUser(t)}).catch(function(t){return e.setState({error:t})})}},{key:"validateForm",value:function(){return this.state.username.length>0&&this.state.password.length>0}},{key:"subscribeService",value:function(e,t){var n=this;console.log("User page subscribe try",e,t,this.props.userDetails),fetch("https://service-subscriber.herokuapp.com/api/userSubscribeServices",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:this.props.userDetails.id,subscribes:[{id:t.id}]})}).then(function(e){return e.json()}).then(function(e){console.log("Subscribed try result: ",e)}).catch(function(e){return n.setState({error:e})})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Login"},s.a.createElement("h3",null," Hi ",this.props.username),s.a.createElement("div",null,"Subscribed Services:"),this.props.subscribedList.map(function(e){return s.a.createElement("div",null,e.name)}),s.a.createElement("h2",null,"Subscribe to Services: "),this.props.serviceList.map(function(t){return s.a.createElement("div",{onClick:function(n){return e.subscribeService(n,t)}},t.name)}))}}]),t}(r.Component),y=Object(c.b)(function(e){return{serviceList:e.userServiceReducer.serviceList,userDetails:e.userServiceReducer.userDetails,username:e.userServiceReducer.userDetails.username,subscribedList:e.userServiceReducer.userDetails.subscribes||[]}},function(e){return{alterLoginStatus:function(t){return e(l(t))},loggedInUser:function(t){return e(p(t))}}})(j),L=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(n=Object(v.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).studentSelection=function(e){n.props.studentSelection()},n}return Object(S.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.serviceListFetch()}},{key:"serviceListFetch",value:function(){var e=this;fetch("https://service-subscriber.herokuapp.com/api/allServices").then(function(e){return e.json()}).then(function(t){console.log("Available services: ",t),e.props.allServicesFetch(t)}).catch(function(t){return e.setState({error:t})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",{className:"App-title"}," Welcome to Online Service Subscriber ")),s.a.createElement("div",null,this.props.loginStatus?s.a.createElement(y,null):s.a.createElement(O,null)),s.a.createElement("button",null,"Register"))}}]),t}(r.Component),w=Object(c.b)(function(e){return{loginStatus:e.userServiceReducer.loginStatus,username:e.userServiceReducer.userDetails.username,subscribedList:e.userServiceReducer.userDetails.subscribes||[]}},function(e){return{studentSelection:function(){return e(function(e){e({type:"STUDENT_SELECTED",selectedStudent:t})});var t},allServicesFetch:function(t){return e(function(e){return function(t){t({type:"SERVICES_LIST",data:e})}}(t))}}})(L);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(c.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.d)(h,e,Object(u.a)(o.a))}()},s.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,n){e.exports=n(133)},68:function(e,t,n){},74:function(e,t){},76:function(e,t){},92:function(e,t){},94:function(e,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.df9a032d.chunk.js.map