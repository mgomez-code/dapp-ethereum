(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)o=s[p],r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"grey lighten-3"},[n("v-content",[n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n            Portafolio de Inversión\n          ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n            Utilizando Ethereum para Dapp Descentralizada\n          ")]),t.Connected&&t.Sincronizar?n("p",{staticClass:"subheading font-weight-regular",staticStyle:{color:"green"}},[n("strong",[t._v(t._s(t.account.substring(1,6)+"..."+t.account.substr(-4)))])]):t.Connected?n("p",{staticClass:"subheading font-weight-regular",staticStyle:{color:"blue"}},[n("strong",[t._v("\n            Por favor, Sincronizar con Metamask de Ethereum")])]):n("p",{staticClass:"subheading font-weight-regular",staticStyle:{color:"red"}},[n("strong",[t._v("\n            Por favor, instalar "),n("a",{attrs:{href:"https://metamask.io/"}},[t._v("Metamask de Ethereum")])])]),null!==t.resultado?n("p",{staticClass:"subheading font-weight-regular"},[t._v(t._s(t.resultado))]):t._e(),n("v-btn",{staticClass:"mt-3",attrs:{color:"green darken-1 white--text"},on:{click:function(e){return t.getActualizar()}}},[t._v("\n              Actualizar\n          ")])],1)],1),t.Connected&&t.Sincronizar?n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{"max-width":"600px",persistent:""},model:{value:t.startProjectDialog,callback:function(e){t.startProjectDialog=e},expression:"startProjectDialog"}},[n("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("Nuevo Portafolio")]),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline font-weight-bold mt-2 ml-4"},[t._v("\n                Nuevo Plan de Inversión\n              ")])]),n("v-card-text",{staticClass:"pt-0"},[n("v-container",{staticClass:"pt-0",attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Título","persistent-hint":""},model:{value:t.newProject.title,callback:function(e){t.$set(t.newProject,"title",e)},expression:"newProject.title"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-textarea",{attrs:{label:"Descripción","persistent-hint":""},model:{value:t.newProject.description,callback:function(e){t.$set(t.newProject,"description",e)},expression:"newProject.description"}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{label:"Cantidad requerida (ETH)",type:"number",step:"0.0001",min:"0"},model:{value:t.newProject.amountGoal,callback:function(e){t.$set(t.newProject,"amountGoal",e)},expression:"newProject.amountGoal"}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{label:"Duración (en días)",type:"number"},model:{value:t.newProject.duration,callback:function(e){t.$set(t.newProject,"duration",e)},expression:"newProject.duration"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.startProjectDialog=!1,t.newProject.isLoading=!1}}},[t._v("\n                Cerrar\n              ")]),n("v-btn",{attrs:{color:"blue darken-1",flat:"",loading:t.newProject.isLoading},on:{click:t.startProject}},[t._v("\n                Guardar\n              ")])],1)],1)],1)],1):t._e()],1),t.Connected&&t.Sincronizar?n("v-container",{attrs:{"grid-list-lg":""}},[n("h1",{staticClass:"display-1 font-weight-bold mb-3"},[t._v("\n        Portafolios \n      ")]),n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.projectData,function(e,a){return n("v-flex",{key:a,attrs:{xs12:""}},[n("v-dialog",{attrs:{width:"800"},model:{value:e.dialog,callback:function(n){t.$set(e,"dialog",n)},expression:"project.dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline font-weight-bold"},[t._v("\n                "+t._s(e.projectTitle)+"\n              ")]),n("v-card-text",[t._v("\n                "+t._s(e.projectDesc)+"\n              ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:"flat"},on:{click:function(e){t.projectData[a].dialog=!1}}},[t._v("\n                  Close\n                ")])],1)],1)],1),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var i=r.hover;return n("v-card",{class:"elevation-"+(i?10:2)},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline font-weight-bold"},[n("v-chip",{staticClass:"mt-0",attrs:{label:"",color:t.stateMap[e.currentState].color,"text-color":"white"}},[t._v("\n                    "+t._s(t.stateMap[e.currentState].text)+"\n                    ")]),t._v("\n                    "+t._s(e.projectTitle)+"\n                  ")],1),n("br"),n("span",[t._v(t._s(e.projectDesc.substring(0,100)))]),e.projectDesc.length>100?n("span",[t._v("\n                    ... "),n("a",{on:{click:function(e){t.projectData[a].dialog=!0}}},[t._v("[Show full]")])]):t._e(),n("br"),n("br"),e.tufund>0?n("span",{staticStyle:{color:"blue"}},[t._v("Mi inversión: "),n("b",[t._v(t._s(t.weiEth(e.tufund))+" ETH ")]),n("br"),n("br")]):t._e(),n("small",[t._v("Fecha tope: "),n("b",[t._v(t._s(new Date(1e3*e.deadline)))])]),n("br"),n("br"),n("small",[t._v("Objectivo: "),n("b",[t._v(t._s(t.weiEth(e.goalAmount))+" ETH ")])]),1==e.currentState?n("small",[t._v("no se logró la meta")]):t._e(),2==e.currentState?n("small",[t._v("Fondo en Inversión")]):t._e()])]),0==e.currentState&&t.account!=e.projectStarter?n("v-flex",{staticClass:"d-flex ml-3",attrs:{xs12:"",sm6:"",md3:""}},[n("v-text-field",{attrs:{label:"Cantidad (ETH)",type:"number",step:"0.0001",min:"0"},model:{value:e.fundAmount,callback:function(n){t.$set(e,"fundAmount",n)},expression:"project.fundAmount"}}),n("v-btn",{staticClass:"mt-3",attrs:{color:"light-blue darken-1 white--text",loading:e.isLoading},on:{click:function(e){return t.fundProject(a)}}},[t._v("\n                  Invertir\n                ")])],1):t._e(),n("v-flex",{staticClass:"d-flex ml-3",attrs:{xs12:"",sm6:"",md3:""}},[1==e.currentState?n("v-btn",{staticClass:"mt-3",attrs:{color:"amber darken-1 white--text",loading:e.isLoading},on:{click:function(e){return t.getRefund(a)}}},[t._v("\n                  Reembolso\n                ")]):t._e(),2==e.currentState?n("v-btn",{staticClass:"mt-3",attrs:{color:"green darken-1 white--text",loading:e.isLoading},on:{click:function(e){return t.getRefund(a)}}},[t._v("\n                  Ganancias\n                ")]):t._e()],1),0==e.currentState?n("v-card-actions",{staticClass:"text-xs-center"},[n("span",{staticClass:"font-weight-bold",staticStyle:{width:"200px"}},[t._v("\n                  "+t._s(t.weiEth(e.currentAmount))+" ETH\n                ")]),n("v-progress-linear",{attrs:{height:"10",color:t.stateMap[e.currentState].color,value:e.currentAmount/e.goalAmount*100}}),n("span",{staticClass:"font-weight-bold",staticStyle:{width:"200px"}},[t._v("\n                  "+t._s(t.weiEth(e.goalAmount))+" ETH\n                ")])],1):t._e()],1)}}],null,!0)})],1)}),1)],1):t._e()],1)],1)},o=[],s=(n("ac6a"),n("b047")),c=n.n(s),u="0x79C166c52dECEA84A48f13786d272bf79a075A4A",l=[{constant:!0,inputs:[],name:"returnAllProjects",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"title",type:"string"},{name:"description",type:"string"},{name:"durationInDays",type:"uint256"},{name:"amountToRaise",type:"uint256"}],name:"startProject",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"contractAddress",type:"address"},{indexed:!1,name:"projectStarter",type:"address"},{indexed:!1,name:"projectTitle",type:"string"},{indexed:!1,name:"projectDesc",type:"string"},{indexed:!1,name:"deadline",type:"uint256"},{indexed:!1,name:"goalAmount",type:"uint256"}],name:"ProjectStarted",type:"event"}],p=new c.a.providers.Web3Provider(window.ethereum),d=p.getSigner(),f=new c.a.Contract(u,l,d),v=f,m=[{constant:!0,inputs:[],name:"creator",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"amountGoal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"raiseBy",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"contributions",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"title",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"completeAt",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"description",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"checkIfFundingCompleteOrExpired",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"getRefund",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"state",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"currentBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"contribute",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"getDetails",outputs:[{name:"projectStarter",type:"address"},{name:"projectTitle",type:"string"},{name:"projectDesc",type:"string"},{name:"deadline",type:"uint256"},{name:"currentState",type:"uint8"},{name:"currentAmount",type:"uint256"},{name:"goalAmount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"projectStarter",type:"address"},{name:"projectTitle",type:"string"},{name:"projectDesc",type:"string"},{name:"fundRaisingDeadline",type:"uint256"},{name:"goalAmount",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"contributor",type:"address"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"currentTotal",type:"uint256"}],name:"FundingReceived",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"recipient",type:"address"}],name:"CreatorPaid",type:"event"}],y=new c.a.providers.Web3Provider(window.ethereum),b=y.getSigner(),g=function(t){var e=new c.a.Contract(t,m,b);return e},h=new c.a.providers.Web3Provider(window.ethereum),w=h.getSigner(),j={name:"App",data:function(){return{Connected:ethereum.isConnected(),Sincronizar:!1,startProjectDialog:!1,account:null,resultado:null,stateMap:[{color:"primary",text:"En Proceso"},{color:"warning",text:"Expiró"},{color:"success",text:"Completo"}],projectData:[],timer:"",newProject:{isLoading:!1}}},created:function(){this.Actualizar(),this.timer=setInterval(this.Actualizar,1e4)},mounted:function(){this.getIni(),this.getPortafolio()},methods:{Actualizar:function(t){this.Sincronizar||this.getIni()},getActualizar:function(){this.getIni(),this.getPortafolio()},getIni:function(){var t=this;this.Sincronizar=!1,ethereum.enable(),w.getAddress().then(function(e){t.account=e,e.length>0&&(t.Sincronizar=!0)})},ethWei:function(t){return Math.pow(10,18)*t},weiEth:function(t){return t/Math.pow(10,18)},getPortafolio:function(){var t=this;this.projectData=[],v.returnAllProjects().then(function(e){e.forEach(function(e){var n=g(e);n.contributions("0xf7EE36b1666CF5D6801363e4a4748e9ef9471a4F").then(function(a){var r=a;n.getDetails().then(function(n){t.projectData.push({direccion:n[0],projectTitle:n[1],projectDesc:n[2],deadline:n[3],currentState:n[4],currentAmount:n[5],goalAmount:n[6],isLoading:!1,contract:e,tufund:r})})})})})},startProject:function(){this.newProject.isLoading=!0,v.startProject(this.newProject.title,this.newProject.description,this.newProject.duration,this.ethWei(this.newProject.amountGoal)),this.newProject.isLoading=!1,this.startProjectDialog=!1},fundProject:function(t){if(this.projectData[t].fundAmount&&this.account!=this.projectData[t].direccion){var e=g(this.projectData[t].contract);this.projectData[t].isLoading=!0,e.contribute({from:this.account,value:this.ethWei(this.projectData[t].fundAmount),gasLimit:5e5}),this.projectData[t].isLoading=!1,this.projectData[t].fundAmount=null}},getRefund:function(t){}}},x=j,_=n("2877"),P=n("6544"),C=n.n(P),S=n("7496"),D=n("8336"),A=n("b0af"),k=n("99d9"),M=n("12b2"),E=n("cc20"),T=n("a523"),V=n("549c"),z=n("169a"),L=n("0e8f"),O=n("ce87"),I=n("a722"),F=n("8e36"),R=n("9910"),$=n("2677"),G=n("a844"),H=Object(_["a"])(x,i,o,!1,null,null,null),W=H.exports;C()(H,{VApp:S["a"],VBtn:D["a"],VCard:A["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:M["a"],VChip:E["a"],VContainer:T["a"],VContent:V["a"],VDialog:z["a"],VFlex:L["a"],VHover:O["a"],VLayout:I["a"],VProgressLinear:F["a"],VSpacer:R["a"],VTextField:$["a"],VTextarea:G["a"]}),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(W)}}).$mount("#app")}});
//# sourceMappingURL=app.63fea5cb.js.map