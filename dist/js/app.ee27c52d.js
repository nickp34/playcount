(function(){"use strict";var e={9183:function(e,t,r){var a=r(144),s=r(629),o=r(998),l=r(6072),n=r(6190),u=r(4324),y=r(3059),i=r(3687),p=function(){var e=this,t=e._self._c;return t(o.Z,[t(l.Z,{attrs:{app:"",color:"primary",dark:""}},[t("div",{staticClass:"d-flex align-center"},[t(n.Z,{on:{click:e.undoPlay}},[t("span",{staticClass:"mr-2"},[e._v("Undo Play")]),t(u.Z,[e._v("mdi-open-in-new")])],1),t(i.Z),t(n.Z,{attrs:{color:e.savePlayButtonColor},on:{click:e.savePlay}},[t("span",{staticClass:"mr-2"},[e._v("Save Play")]),t(u.Z,[e._v("mdi-open-in-new")])],1),t(n.Z,{attrs:{color:e.savePlayButtonColor}},[t("span",{staticClass:"mr-2"},[e._v("On Field: "+e._s(e.playerInCount))])])],1),t(i.Z),t(n.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[t("span",{staticClass:"mr-2"},[e._v("New Game")]),t(u.Z,[e._v("mdi-open-in-new")])],1)],1),t(y.Z,[t("FootballGame")],1)],1)},m=[],c=r(266),N=r(2118),f=r(9223),b=r(1713),g=function(){var e=this,t=e._self._c;return t(N.Z,[t(b.Z,e._l(e.onField,(function(e){return t(c.Z,{key:e.jersey,attrs:{cols:"12",sm:"4"}},[t("FootballPlayer",{attrs:{player:e}})],1)})),1),t(f.Z),t(b.Z,e._l(e.onSideline,(function(e){return t(c.Z,{key:e.jersey,attrs:{cols:"12",sm:"4"}},[t("FootballPlayer",{attrs:{player:e}})],1)})),1)],1)},d=[],h=r(778),P=r(4610),v=function(){var e=this,t=e._self._c;return t(N.Z,[t(b.Z,{attrs:{"no-gutters":""}},[t(c.Z,[t(h.Z,{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t("FootballPlayerIn",{attrs:{player:e.player}}),e._v(" #"+e._s(e.player.jerseyNumber)+" "+e._s(e.player.lastName)+" "),t("FootballPlayerOut",{attrs:{player:e.player}}),t(P.Z,{attrs:{color:e.playCountColor,"text-color":"white"}},[e._v(" "+e._s(e.playCount)+" ")])],1)],1)],1)],1)},j=[],S=function(){var e=this,t=e._self._c;return t(u.Z,{attrs:{color:e.iconColor},on:{click:e.click}},[e._v("mdi-account-check")])},Z=[],C={name:"FootballPlayerIn",props:{player:Object},computed:{iconColor(){return"in"===this.player.playStatus?"green":"gray"}},methods:{click(){this.$store.commit("playerIn",this.player)}}},_=C,k=r(1001),O=(0,k.Z)(_,S,Z,!1,null,null,null),x=O.exports,F=function(){var e=this,t=e._self._c;return t(u.Z,{attrs:{large:"",right:"",color:e.iconColor},on:{click:e.click}},[e._v("mdi-account-remove")])},w=[],I={name:"FootballPlayerOut",props:{player:Object},computed:{iconColor(){return"out"===this.player.playStatus?"red":"gray"}},methods:{click(){this.$store.commit("playerOut",this.player)}}},M=I,B=(0,k.Z)(M,F,w,!1,null,null,null),$=B.exports,G={name:"FootballPlayer",props:{player:Object},computed:{...(0,s.Se)(["totalPlays"]),playCount(){return this.totalPlays(this.player)},playCountColor(){return this.playCount<3?"red":this.playCount>=10?"green":"orange"}},components:{FootballPlayerIn:x,FootballPlayerOut:$}},T=G,H=(0,k.Z)(T,v,j,!1,null,null,null),J=H.exports,E={name:"FootballGame",data:()=>({plays:[]}),computed:{roster(){return this.$store.getters.roster},onField(){return this.$store.getters.playersIn},onSideline(){return this.$store.getters.playersOut},allPlays(){return this.$store.getters.plays}},components:{FootballPlayer:J}},L=E,R=(0,k.Z)(L,g,d,!1,null,null,null),A=R.exports,K={name:"App",components:{FootballGame:A},computed:{...(0,s.Se)({playersIn:"playersIn",getMaxPlayers:"getMaxPlayers"}),playerInCount(){return this.playersIn.length},savePlayButtonColor(){return this.playerInCount<5||this.playerInCount>this.getMaxPlayers?"red":this.playerInCount<this.getMaxPlayers?"orange":"green"}},methods:{savePlay(){this.$store.dispatch("savePlay")},undoPlay(){this.$store.dispatch("undoPlay")}}},z=K,D=(0,k.Z)(z,p,m,!1,null,null,null),U=D.exports,V=r(8864);a.ZP.use(V.Z);var W=new V.Z({});r(7658);a.ZP.use(s.ZP);const q=11,Q={minPlayersPerPlay:q,roster:[{firstName:"Paxton",lastName:"Green",jerseyNumber:2,groups:[],playStatus:"out"},{firstName:"Grayson",lastName:"Cardenas ",jerseyNumber:4,groups:[],playStatus:"out"},{firstName:"Brendan",lastName:"Hughart",jerseyNumber:5,groups:[],playStatus:"out"},{firstName:"Brantley",lastName:"Taylor ",jerseyNumber:6,groups:[],playStatus:"out"},{firstName:"Nolan",lastName:"Bales",jerseyNumber:10,groups:[],playStatus:"out"},{firstName:"Kellen",lastName:"Spearman",jerseyNumber:33,groups:[],playStatus:"out"},{firstName:"Keller",lastName:"Green",jerseyNumber:35,groups:[],playStatus:"out"},{firstName:"Ole",lastName:"Dimick",jerseyNumber:40,groups:[],playStatus:"out"},{firstName:"Cameron",lastName:"Hang ",jerseyNumber:42,groups:[],playStatus:"out"},{firstName:"Jonah",lastName:"Miller",jerseyNumber:44,groups:[],playStatus:"out"},{firstName:"Mason",lastName:"Woodard",jerseyNumber:45,groups:[],playStatus:"out"},{firstName:"Rey",lastName:"LaRosa ",jerseyNumber:50,groups:[],playStatus:"out"},{firstName:"Parker",lastName:"Bass",jerseyNumber:51,groups:[],playStatus:"out"},{firstName:"Evan",lastName:"Ouellette",jerseyNumber:54,groups:[],playStatus:"out"},{firstName:"Nolan",lastName:"Pate",jerseyNumber:55,groups:[],playStatus:"out"},{firstName:"Jordan",lastName:"Gillock",jerseyNumber:60,groups:[],playStatus:"out"},{firstName:"Brayden",lastName:"Ayers",jerseyNumber:61,groups:[],playStatus:"out"},{firstName:"Henry",lastName:"Tischhauser",jerseyNumber:63,groups:[],playStatus:"out"},{firstName:"Benjamin",lastName:"Roman",jerseyNumber:64,groups:[],playStatus:"out"},{firstName:"Logan",lastName:"Minick",jerseyNumber:71,groups:[],playStatus:"out"},{firstName:"Parker",lastName:"Clark",jerseyNumber:74,groups:[],playStatus:"out"},{firstName:"Jackson",lastName:"Conroy",jerseyNumber:75,groups:[],playStatus:"out"},{firstName:"Baylor",lastName:"Moehring ",jerseyNumber:80,groups:[],playStatus:"out"},{firstName:"Cameron",lastName:"Moore",jerseyNumber:83,groups:[],playStatus:"out"},{firstName:"Logan",lastName:"Niessner",jerseyNumber:84,groups:[],playStatus:"out"},{firstName:"Jackson",lastName:"Hughes ",jerseyNumber:85,groups:[],playStatus:"out"},{firstName:"Meyer",lastName:"Johnson",jerseyNumber:87,groups:[],playStatus:"out"},{firstName:"Brandon",lastName:"Hernandez",jerseyNumber:90,groups:[],playStatus:"out"}],plays:[]},X={getMaxPlayers(e){return e.minPlayersPerPlay},playersIn(e){return e.roster.filter((e=>"in"===e.playStatus)).sort((({jerseyNumber:e},{jerseyNumber:t})=>e-t))},playersOut(e){return e.roster.filter((e=>"out"===e.playStatus)).sort((({jerseyNumber:e},{jerseyNumber:t})=>e-t))},plays(e){return e.plays},roster(e){return e.roster},totalPlays:e=>t=>{let r=0;return e.plays.forEach((e=>{e.forEach((e=>{e.jerseyNumber===t.jerseyNumber&&(r+=1)}))})),r}},Y={playerIn(e,t){const r=e.roster.find((e=>e.jerseyNumber===t.jerseyNumber));r.playStatus="in"},playerOut(e,t){const r=e.roster.find((e=>e.jerseyNumber===t.jerseyNumber));r.playStatus="out"},savePlay(e,t){e.plays.push(t)},undoPlay(e){e.plays.length>0&&e.plays.pop()}},ee={savePlay({commit:e,getters:t}){e("savePlay",t.playersIn)},undoPlay({commit:e}){e("undoPlay")}},te=new s.ZP.Store({actions:ee,getters:X,mutations:Y,state:Q});var re=te;a.ZP.config.productionTip=!1,new a.ZP({store:re,vuetify:W,Vuex:s.ZP,render:e=>e(U)}).$mount("#app")}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,a,s,o){if(!a){var l=1/0;for(i=0;i<e.length;i++){a=e[i][0],s=e[i][1],o=e[i][2];for(var n=!0,u=0;u<a.length;u++)(!1&o||l>=o)&&Object.keys(r.O).every((function(e){return r.O[e](a[u])}))?a.splice(u--,1):(n=!1,o<l&&(l=o));if(n){e.splice(i--,1);var y=s();void 0!==y&&(t=y)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[a,s,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,o,l=a[0],n=a[1],u=a[2],y=0;if(l.some((function(t){return 0!==e[t]}))){for(s in n)r.o(n,s)&&(r.m[s]=n[s]);if(u)var i=u(r)}for(t&&t(a);y<l.length;y++)o=l[y],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(i)},a=self["webpackChunkplaycount"]=self["webpackChunkplaycount"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(9183)}));a=r.O(a)})();
//# sourceMappingURL=app.ee27c52d.js.map