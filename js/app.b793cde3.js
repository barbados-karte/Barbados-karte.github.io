(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),o=a.n(r);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{background:"black"}},[a("v-main",[a("HelloWorld")],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{primary:""}},[r("v-dialog",{attrs:{persistent:""},model:{value:t.hookahSelector,callback:function(e){t.hookahSelector=e},expression:"hookahSelector"}},[r("v-card",{attrs:{color:"#303030"}},[r("v-toolbar",{attrs:{dense:"",dark:"",color:"#303030"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.hookahSelector=!1}}},[r("v-icon",[t._v("mdi-close")])],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"white",outlined:""},on:{click:function(e){t.hookahSelector=!1}}},[t._v("Schliessen")])],1)],1)],1),r("v-dialog",{attrs:{scrollable:"",color:"primary",width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.loading?r("v-card",{attrs:{color:"primary"}},[r("v-card-title",{attrs:{color:"primary"}},[r("v-toolbar-title",[t._v(t._s(t.currentMenuName))]),r("v-spacer"),r("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1)],1),r("v-divider"),r("v-card-text",[t._l(t.currentMenu,(function(e,a){return r("v-container",{key:a,attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"6"}},[r("p",{staticClass:"text-left .body-1 font-weight-bold"},[r("span",{staticClass:"white--text"},[t._v(t._s(e.productName))])])]),r("v-col",{attrs:{cols:"3"}},[r("p",{staticClass:"text-left .body-1 font-weight-bold"},[r("span",{staticClass:"white--text"},[t._v(t._s(e.ltr))])])]),r("v-col",{attrs:{cols:"3"}},[r("p",{staticClass:"text-left .body-1 font-weight-bold"},[r("span",{staticClass:"white--text"},[t._v(t._s(e.price))])])])],1)],1)})),r("v-divider")],2),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"secondary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Schließen")])],1)],1):r("v-card",{attrs:{color:"primary"}},[r("v-card-title",[t._v(t._s(t.currentMenuName))]),r("v-divider"),r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"3"}}),r("v-col",{attrs:{cols:"3"}},[t._v("Lade Menükarte...")]),r("v-col",{attrs:{cols:"3"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"purple"}})],1)],1)],1)],1)],1),r("v-dialog",{attrs:{width:"500"},model:{value:t.allergeneMenu,callback:function(e){t.allergeneMenu=e},expression:"allergeneMenu"}},[r("v-card",{attrs:{color:"primary"}},[r("v-card-title",[t._v("Allergene & Zusatzstoffe")]),r("v-divider"),r("v-card-title",[t._v("Allergene")]),t._l(t.allergene,(function(e,a){return r("v-container",{key:a,attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},[r("v-col",{staticClass:"ml-3",attrs:{cols:"2"}},[r("p",{staticClass:"text-left .body-1 font-weight-bold"},[r("span",{staticClass:"white--text"},[t._v(t._s(e.iterator))])])]),r("v-col",{attrs:{cols:"8"}},[r("p",{staticClass:"text-left .body-1 font-weight-bold"},[r("span",{staticClass:"white--text"},[t._v(t._s(e.name))])])])],1)],1)})),r("v-divider"),r("v-card-title",[t._v("Zusatzstoffe")]),t._l(t.zusatzstoffe,(function(e,a){return r("v-container",{key:a,attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},[r("v-col",{staticClass:"ml-3",attrs:{cols:"2"}},[r("p",{staticClass:"text-left .body-1 font-weight-bold"},[r("span",{staticClass:"white--text"},[t._v(t._s(e.iterator))])])]),r("v-col",{attrs:{cols:"8"}},[r("p",{staticClass:"text-left .body-1 font-weight-bold"},[r("span",{staticClass:"white--text"},[t._v(t._s(e.name))])])])],1)],1)})),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"secondary",text:""},on:{click:function(e){t.allergeneMenu=!1}}},[t._v("Schließen")])],1)],2)],1),r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("7fe1"),contain:"",height:"280"}}),r("h1",{staticClass:"overline"},[t._v("#Inhale the good shit")]),r("h1",{staticClass:"overline"},[t._v("Exhale the bullshit...")])],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"bigheading mb-3"},[t._v("MENU")]),r("v-row",{attrs:{justify:"center"}},[r("v-card",{staticClass:"primary mx-auto",class:{mobile:t.$vuetify.breakpoint.smAndDown,desktop:t.$vuetify.breakpoint.mdAndUp}},[r("v-container",[r("v-divider",{attrs:{color:t.secondary,secondary:"",dense:""}}),r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12"}}),t._l(t.items,(function(e,a){return r("v-col",{key:a,attrs:{cols:"12"}},[r("v-card",{staticClass:"mt-8 glowing-border primary",attrs:{outlined:"",dark:""},on:{click:function(a){t.dialog=!0,t.getMenu(e.title),t.currentMenuName=e.title}}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("v-card-title",{staticClass:" 1rem smallheadings justify-center",attrs:{"primary-title":""},domProps:{innerHTML:t._s(e.title)}}),r("v-avatar",{attrs:{size:"80",tile:""}},[r("v-icon",{attrs:{color:"secondary","x-large":""}},[t._v(t._s(e.src))])],1)],1)])],1)}))],2)],1),r("v-col",{attrs:{cols:"12"}},[r("v-btn",{attrs:{secondary:"",text:"",href:"https://www.instagram.com/barbados_lounge",target:"_blank"}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-instagram")]),t._v("barbados_lounge ")],1),r("v-col",{attrs:{cols:"12"}},[r("v-btn",{attrs:{secondary:"",text:""}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-gavel")]),t._v("Impressum ")],1)],1),r("v-col",{attrs:{cols:"12"}},[r("v-btn",{attrs:{secondary:"",text:""},on:{click:function(e){t.allergeneMenu=!0}}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-information")]),t._v("Allergene & Zusatzstoffe ")],1)],1)],1),r("v-col",{attrs:{cols:"12"}},[r("Widget")],1)],1)],1)],1)],1)],1)},s=[],l=(a("4160"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"elfsight-widget-container"}},[t.loading?a("div",{staticClass:"loader"}):a("div",{staticClass:"elfsight-app-625aca41-d8c4-4cda-8df2-6da2ab79b94d",attrs:{"data-elfsight-app-lazy":""}})])}),c=[],d={name:"ElfsightWidget",data:function(){return{loading:!0}},mounted:function(){this.ensureElfsightScript()},methods:{ensureElfsightScript:function(){var t=this,e="elfsight-platform-script";if(document.getElementById(e))this.loading=!1;else{var a=document.createElement("script");a.id=e,a.src="https://static.elfsight.com/platform/platform.js",a.defer=!0,document.head.appendChild(a),a.onload=function(){console.log("Elfsight platform script loaded successfully"),t.loading=!1},a.onerror=function(e){console.error("Error loading Elfsight platform script:",e),t.loading=!1}}}}},u=d,f=(a("9b68"),a("2877")),v=Object(f["a"])(u,l,c,!1,null,"15412ba9",null),m=v.exports,h=a("bc3a"),p={created:function(){console.log("Component has been created!",this.Softdrinks)},components:{Widget:m},methods:{copyText:function(){var t=this.$refs.textToCopy.$el.querySelector("input");t.select(),document.execCommand("copy")},getMenu:function(t){var e=this;return this.loading=!1,this.menus.forEach((function(a){if(console.log(a.title),a.title===t){var r=a.menu;h.get("".concat(r,".json")).then((function(t){e.currentMenu=t.data,console.log(e.currentMenu),e.loading=!0}))}})),"hi"}},name:"HelloWorld",currentMenu:"",currentMenuName:"",data:function(){return{password:"fragdenkellner",loading:!1,menus:[{title:"Shisha-Orientalisch",menu:"shishaorientalisch"},{title:"Shisha-Modern",menu:"shishamodern"},{title:"Shisha-Extras",menu:"shishaextras"},{title:"Softdrinks",menu:"softdrinks"},{title:"Warmgetränke",menu:"warmgetraenke"},{title:"Säfte & Saftschorlen",menu:"saftschorlen"},{title:"Bier",menu:"bier"},{title:"Wein & Spritz",menu:"vino"},{title:"Snacks",menu:"snacks"},{title:"Longdrinks",menu:"longdrinks"},{title:"Shots",menu:"shots"},{title:"Cocktails",menu:"cocktails"},{title:"Cocktails (alkoholfrei)",menu:"alkoholfrei"},{title:"Flaschen",menu:"flaschen"}],allergene:[{iterator:"A",name:"Weizen"},{iterator:"B",name:"Eier"},{iterator:"C",name:"Milch/Laktose"},{iterator:"D",name:"Sellerie"},{iterator:"E",name:"Sesam"},{iterator:"F",name:"Fisch"},{iterator:"G",name:"Soja"},{iterator:"H",name:"Schalenfrüchte"},{iterator:"I",name:"Senf"},{iterator:"J",name:"Gerste"},{iterator:"K",name:"Mais"}],zusatzstoffe:[{iterator:"1",name:"Farbstoffe"},{iterator:"2",name:"Konservierungsstoffe"},{iterator:"3",name:"Antioxidationsmittel"},{iterator:"4",name:"Geschmacksverstärker"},{iterator:"5",name:"Geschwefelt (Schwefeldioxid/Sulfite)"},{iterator:"6",name:"Geschwärz"},{iterator:"7",name:"Gewachst"},{iterator:"8",name:"Süßungsmittel"},{iterator:"9",name:"Aspartam"},{iterator:"10",name:"Phosphat"},{iterator:"11",name:"Säurungsmittel"},{iterator:"12",name:"Taurin"},{iterator:"13",name:"Koffein"},{iterator:"14",name:"Chinin"}],items:[{color:"#952175",src:"mdi-glass-stange",title:"Shisha-Orientalisch"},{color:"#952175",src:"mdi-glass-stange",title:"Shisha-Modern"},{color:"#952175",src:"mdi-plus",title:"Shisha-Extras"},{color:"#952175",src:"mdi-bottle-soda-classic-outline",title:"Softdrinks"},{color:"#1F7087",src:"mdi-tea",title:"Warmgetränke"},{color:"#1F7087",src:"mdi-fruit-pineapple",title:"Säfte & Saftschorlen"},{color:"#1F7087",src:"mdi-glass-mug-variant",title:"Bier"},{color:"#1F7087",src:"mdi-bottle-wine",title:"Wein & Spritz"},{color:"#1F7087",src:"mdi-glass-flute",title:"Longdrinks"},{color:"#1F7087",src:"mdi-cup",title:"Shots"},{color:"#1F7087",src:"mdi-glass-cocktail",title:"Cocktails"},{color:"#1F7087",src:"mdi-glass-cocktail",title:"Cocktails (alkoholfrei)"},{color:"#1F7087",src:"mdi-bottle-wine",title:"Flaschen"},{color:"#1F7087",src:"mdi-food",title:"Snacks"}],dialog:!1,hookahSelector:!1,allergeneMenu:!1}}},g=p,b=(a("e99c"),a("6544")),y=a.n(b),k=a("8212"),_=a("8336"),w=a("b0af"),x=a("99d9"),C=a("62ad"),S=a("a523"),M=a("169a"),j=a("ce7e"),V=a("132d"),E=a("adda"),O=a("490a"),F=a("0fd9"),z=a("2fa4"),A=a("71d9"),T=a("2a7f"),W=Object(f["a"])(g,i,s,!1,null,"98c1e7de",null),P=W.exports;y()(W,{VAvatar:k["a"],VBtn:_["a"],VCard:w["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:C["a"],VContainer:S["a"],VDialog:M["a"],VDivider:j["a"],VIcon:V["a"],VImg:E["a"],VProgressCircular:O["a"],VRow:F["a"],VSpacer:z["a"],VToolbar:A["a"],VToolbarTitle:T["a"]});var $={name:"App",components:{HelloWorld:P},data:function(){return{}}},G=$,I=(a("034f"),a("7496")),N=a("f6c4"),B=Object(f["a"])(G,o,n,!1,null,null,null),H=B.exports;y()(B,{VApp:I["a"],VMain:N["a"]});var L=a("f309");r["a"].use(L["a"]);var D=new L["a"]({icons:{iconfont:"mdi"},theme:{dark:!0,themes:{dark:{primary:"black",secondary:"white"},light:{primary:"#dedfe6",secondary:"#a1a4b8"}}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:D,render:function(t){return t(H)}}).$mount("#app")},"7fe1":function(t,e,a){t.exports=a.p+"img/barbados.88a4ad86.jpg"},"85ec":function(t,e,a){},"9b68":function(t,e,a){"use strict";var r=a("a089"),o=a.n(r);o.a},a089:function(t,e,a){},e99c:function(t,e,a){"use strict";var r=a("eff6"),o=a.n(r);o.a},eff6:function(t,e,a){}});
//# sourceMappingURL=app.b793cde3.js.map