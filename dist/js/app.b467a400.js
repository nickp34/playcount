(function(){"use strict";var e={7146:function(e,t,a){var r=a(144),s=a(629),o=a(7359),l=a(998),u=a(3059),n=a(626),y=a(3595),p=a(6670),c=function(){var e=this,t=e._self._c;return t("div",[t(l.Z,[t(u.Z,[t(p.Z,[t(n.Z,[e._v("Game")]),t(n.Z,[e._v("Stats")]),t(y.Z,[t("FootballGame")],1),t(y.Z,[t("FootballPlayerStats")],1)],1),e.showSuccess?t(o.Z,{attrs:{type:"success"}},[e._v("Success")]):e._e()],1)],1)],1)},i=[],m=a(6190),N=a(266),f=a(2150),g=a(1713),h=function(){var e=this,t=e._self._c;return t("div",[t(f.Z,[t(g.Z,[t(N.Z,[t(m.Z,{attrs:{color:"yellow"},on:{click:e.undoPlay}},[e._v(" Undo ")])],1),t(N.Z,[t(m.Z,{attrs:{color:e.savePlayButtonColor},on:{click:e.savePlay}},[e._v(" Save "+e._s(e.playerInCount)+" ")])],1),t(N.Z,[t(m.Z,{attrs:{color:"orange"},on:{click:e.clearField}},[e._v(" Clear ")])],1),t(N.Z,[t(m.Z,{attrs:{color:"blue"},on:{click:e.toggleNames}},[e._v(" Names ")])],1)],1)],1),t(f.Z,{style:{"background-color":"green"}},[t(g.Z,e._l(e.playersIn,(function(a){return t(N.Z,{key:a.jersey,attrs:{cols:"2",sm:"3"}},[t("FootballPlayer",{attrs:{showName:e.showName,canSub:"",player:a}})],1)})),1)],1),t(f.Z,{style:{"background-color":"#e3e3e3"}},[t(g.Z,e._l(e.playersOut,(function(a){return t(N.Z,{key:a.jersey,attrs:{cols:"2",sm:"3"}},[t("FootballPlayer",{attrs:{showName:e.showName,canSub:"",player:a}})],1)})),1)],1)],1)},b=[],d=a(579),S=a(4127),C=function(){var e=this,t=e._self._c;return t(f.Z,{staticClass:"pa-0"},[t(g.Z,{attrs:{"no-gutters":""}},[t(N.Z,[t(d.Z,[t(f.Z,{staticClass:"pa-1"},[t(g.Z,{attrs:{dense:"","no-gutters":""}},[e.canSub?t(N.Z,[t("FootballPlayerIn",{attrs:{player:e.player}})],1):e._e(),e.showName?e._e():t(N.Z,[e._v(" #"+e._s(e.player.jerseyNumber)+" ")]),e.showName?t(N.Z,[e._v(" "+e._s(e.player.lastName)+" ")]):e._e(),e.canSub?t(N.Z,[t("FootballPlayerOut",{attrs:{player:e.player}})],1):e._e(),e.showPlayCount?t(N.Z,[t(S.Z,{attrs:{color:e.playCountColor,"text-color":"white"}},[e._v(" "+e._s(e.player.playCount)+" ")])],1):e._e()],1)],1)],1)],1)],1)],1)},P=[],Z=a(4324),v=function(){var e=this,t=e._self._c;return t(Z.Z,{attrs:{color:e.iconColor},on:{click:e.click}},[e._v("mdi-account-check")])},j=[],_={name:"FootballPlayerIn",props:{player:Object},computed:{iconColor(){return"in"===this.player.playStatus?"green":"gray"}},methods:{click(){this.$store.commit("playerIn",this.player)}}},w=_,k=a(1001),O=(0,k.Z)(w,v,j,!1,null,null,null),F=O.exports,x=function(){var e=this,t=e._self._c;return t(Z.Z,{attrs:{color:e.iconColor},on:{click:e.click}},[e._v("mdi-account-remove")])},B=[],I={name:"FootballPlayerOut",props:{player:Object},computed:{iconColor(){return"out"===this.player.playStatus?"red":"gray"}},methods:{click(){this.$store.commit("playerOut",this.player)}}},M=I,G=(0,k.Z)(M,x,B,!1,null,null,null),T=G.exports,$={name:"FootballPlayer",props:{player:Object,canSub:Boolean,showPlayCount:Boolean,showName:{type:Boolean,default:!1}},computed:{playCountColor(){return this.player.playCount<3?"red":this.player.playCount<=5?"orange":this.player.playCount<10?"blue":"green"}},components:{FootballPlayerIn:F,FootballPlayerOut:T}},H=$,J=(0,k.Z)(H,C,P,!1,null,null,null),R=J.exports,L={name:"FootballGame",data:()=>({showName:!1}),computed:{...(0,s.Se)({playersIn:"playersIn",playersOut:"playersOut",getMaxPlayers:"getMaxPlayers",roster:"roster",plays:"plays"}),playerInCount(){return this.playersIn.length},savePlayButtonColor(){return this.playerInCount<5||this.playerInCount>this.getMaxPlayers?"red":this.playerInCount<this.getMaxPlayers?"orange":"green"}},methods:{savePlay(){this.$store.dispatch("savePlay"),this.$store.dispatch("toggleSuccess")},undoPlay(){this.$store.dispatch("undoPlay"),this.$store.dispatch("toggleSuccess")},clearField(){this.$store.dispatch("clearField")},toggleNames(){this.showName=!this.showName}},components:{FootballPlayer:R}},A=L,E=(0,k.Z)(A,h,b,!1,null,null,null),K=E.exports,z=function(){var e=this,t=e._self._c;return t(f.Z,{style:{"background-color":"#e3e3e3"}},[t(g.Z,[t(N.Z,[t(m.Z,{attrs:{color:"green"},on:{click:e.toggleNames}},[e._v(" Sort ")])],1),t(N.Z,[t(m.Z,{attrs:{color:"blue"},on:{click:e.toggleNames}},[e._v(" Names ")])],1)],1),t(g.Z,e._l(e.sortedRoster,(function(a){return t(N.Z,{key:a.jersey,attrs:{cols:"12",sm:"4"}},[t("FootballPlayer",{attrs:{showPlayCount:"",showName:e.showName,player:a}})],1)})),1)],1)},D=[],U={name:"FootbalPlayerStats",data:()=>({showName:!0}),computed:{...(0,s.Se)({playersByPlayCount:"playersByPlayCount",roster:"roster"}),sortedRoster(){return this.playersByPlayCount}},methods:{toggleNames(){this.showName=!this.showName}},components:{FootballPlayer:R}},V=U,W=(0,k.Z)(V,z,D,!1,null,null,null),q=W.exports,Q={name:"App",computed:{...(0,s.Se)({showSuccess:"showSuccess"})},components:{FootballGame:K,FootballPlayerStats:q}},X=Q,Y=(0,k.Z)(X,c,i,!1,null,null,null),ee=Y.exports,te=a(8864);r.ZP.use(te.Z);var ae=new te.Z({});a(7658);r.ZP.use(s.ZP);const re=11,se={minPlayersPerPlay:re,roster:[{firstName:"Paxton",lastName:"Green",jerseyNumber:2,groups:[],playStatus:"out",playCount:0},{firstName:"Grayson",lastName:"Cardenas ",jerseyNumber:4,groups:[],playStatus:"out",playCount:0},{firstName:"Brendan",lastName:"Hughart",jerseyNumber:5,groups:[],playStatus:"out",playCount:0},{firstName:"Brantley",lastName:"Taylor ",jerseyNumber:6,groups:[],playStatus:"out",playCount:0},{firstName:"Nolan",lastName:"Bales",jerseyNumber:10,groups:[],playStatus:"out",playCount:0},{firstName:"Kellen",lastName:"Spearman",jerseyNumber:33,groups:[],playStatus:"out",playCount:0},{firstName:"Keller",lastName:"Green",jerseyNumber:35,groups:[],playStatus:"out",playCount:0},{firstName:"Ole",lastName:"Dimick",jerseyNumber:40,groups:[],playStatus:"out",playCount:0},{firstName:"Cameron",lastName:"Hang ",jerseyNumber:42,groups:[],playStatus:"out",playCount:0},{firstName:"Jonah",lastName:"Miller",jerseyNumber:44,groups:[],playStatus:"out",playCount:0},{firstName:"Mason",lastName:"Woodard",jerseyNumber:45,groups:[],playStatus:"out",playCount:0},{firstName:"Rey",lastName:"LaRosa ",jerseyNumber:50,groups:[],playStatus:"out",playCount:0},{firstName:"Parker",lastName:"Bass",jerseyNumber:51,groups:[],playStatus:"out",playCount:0},{firstName:"Evan",lastName:"Ouellette",jerseyNumber:54,groups:[],playStatus:"out",playCount:0},{firstName:"Nolan",lastName:"Pate",jerseyNumber:55,groups:[],playStatus:"out",playCount:0},{firstName:"Jordan",lastName:"Gillock",jerseyNumber:60,groups:[],playStatus:"out",playCount:0},{firstName:"Brayden",lastName:"Ayers",jerseyNumber:61,groups:[],playStatus:"out",playCount:0},{firstName:"Henry",lastName:"Tischhauser",jerseyNumber:63,groups:[],playStatus:"out",playCount:0},{firstName:"Benjamin",lastName:"Roman",jerseyNumber:64,groups:[],playStatus:"out",playCount:0},{firstName:"Logan",lastName:"Minick",jerseyNumber:71,groups:[],playStatus:"out",playCount:0},{firstName:"Parker",lastName:"Clark",jerseyNumber:74,groups:[],playStatus:"out",playCount:0},{firstName:"Jackson",lastName:"Conroy",jerseyNumber:75,groups:[],playStatus:"out",playCount:0},{firstName:"Baylor",lastName:"Moehring ",jerseyNumber:80,groups:[],playStatus:"out",playCount:0},{firstName:"Cameron",lastName:"Moore",jerseyNumber:83,groups:[],playStatus:"out",playCount:0},{firstName:"Logan",lastName:"Niessner",jerseyNumber:84,groups:[],playStatus:"out",playCount:0},{firstName:"Jackson",lastName:"Hughes ",jerseyNumber:85,groups:[],playStatus:"out",playCount:0},{firstName:"Meyer",lastName:"Johnson",jerseyNumber:87,groups:[],playStatus:"out",playCount:0},{firstName:"Brandon",lastName:"Hernandez",jerseyNumber:90,groups:[],playStatus:"out",playCount:0}],plays:[],settings:{showSuccess:!1}},oe={getMaxPlayers(e){return e.minPlayersPerPlay},playersByPlayCount(e){return e.roster.sort((({playCount:e},{playCount:t})=>e-t))},playersIn(e){return e.roster.filter((e=>"in"===e.playStatus)).sort((({jerseyNumber:e},{jerseyNumber:t})=>e-t))},playersOut(e){return e.roster.filter((e=>"out"===e.playStatus)).sort((({jerseyNumber:e},{jerseyNumber:t})=>e-t))},plays(e){return e.plays},roster(e){return e.roster},showSuccess(e){return e.settings.showSuccess}},le={playerIn(e,t){const a=e.roster.find((e=>e.jerseyNumber===t.jerseyNumber));a.playStatus="in"},playerOut(e,t){const a=e.roster.find((e=>e.jerseyNumber===t.jerseyNumber));a.playStatus="out"},savePlay(e,t){e.plays.push(t);const a=t.map((e=>e.jerseyNumber)).flat();for(let r=0;r<e.roster.length;r+=1){const t=e.roster[r];-1!==a.indexOf(t.jerseyNumber)&&(t.playCount+=1)}},undoPlay(e){if(e.plays.length>0){const t=e.plays[e.plays.length-1];e.plays.pop();const a=t.map((e=>e.jerseyNumber)).flat();for(let r=0;r<e.roster.length;r+=1){const t=e.roster[r];-1!==a.indexOf(t.jerseyNumber)&&(t.playCount-=1)}}},clearField(e){for(let t=0;t<e.roster.length;t+=1)e.roster[t].playStatus="out"},setSuccess(e,t){e.settings.showSuccess=t}},ue={savePlay({commit:e,getters:t}){e("savePlay",t.playersIn)},undoPlay({commit:e}){e("undoPlay")},clearField({commit:e}){e("clearField")},toggleSuccess({commit:e}){e("setSuccess",!0),setTimeout((()=>{e("setSuccess",!1)}),1e3)},toggleNames({commit:e}){e("toggleNames")}},ne=new s.ZP.Store({actions:ue,getters:oe,mutations:le,state:se});var ye=ne;r.ZP.config.productionTip=!1,new r.ZP({store:ye,vuetify:ae,Vuex:s.ZP,render:e=>e(ee)}).$mount("#app")}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,s,o){if(!r){var l=1/0;for(p=0;p<e.length;p++){r=e[p][0],s=e[p][1],o=e[p][2];for(var u=!0,n=0;n<r.length;n++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[n])}))?r.splice(n--,1):(u=!1,o<l&&(l=o));if(u){e.splice(p--,1);var y=s();void 0!==y&&(t=y)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[r,s,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,o,l=r[0],u=r[1],n=r[2],y=0;if(l.some((function(t){return 0!==e[t]}))){for(s in u)a.o(u,s)&&(a.m[s]=u[s]);if(n)var p=n(a)}for(t&&t(r);y<l.length;y++)o=l[y],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(p)},r=self["webpackChunkplaycount"]=self["webpackChunkplaycount"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(7146)}));r=a.O(r)})();
//# sourceMappingURL=app.b467a400.js.map