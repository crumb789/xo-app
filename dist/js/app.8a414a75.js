(function(){"use strict";var e={78:function(e,n,r){var t=r(963),s=r(252),i=r(577);const o={class:"container"},a={class:"main"},c={class:"header"},l={class:"notice"},h={key:0,class:"message is-dark"},d={class:"message-body"},u={key:1,class:"message is-info"},g={class:"message-body"},b={key:2,class:"message is-warning"},p={class:"message-body"},f={key:3,class:"message is-primary"},m=(0,s._)("div",{class:"message-body"},[(0,s._)("p",null,[(0,s._)("strong",null,"Ничья")])],-1),w=[m];function v(e,n,r,t,m,v){const O=(0,s.up)("board-comp");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("section",a,[(0,s._)("header",c,[(0,s._)("button",{onClick:n[0]||(n[0]=(...e)=>v.resetBoard&&v.resetBoard(...e)),class:"button is-info is-light"},"RESET")]),(0,s.Wm)(O,{currentStep:m.currentStep,board:m.board,gameIsOn:m.gameIsOn,onChangeStep:v.changeNextStep},null,8,["currentStep","board","gameIsOn","onChangeStep"])]),(0,s._)("section",l,[m.gameIsOn?((0,s.wg)(),(0,s.iD)("article",h,[(0,s._)("div",d,[(0,s._)("p",null,[(0,s.Uk)("Ходит "),(0,s._)("strong",null,(0,i.zw)(m.currentStep),1)])])])):(0,s.kq)("",!0),"O"===m.winner?((0,s.wg)(),(0,s.iD)("article",u,[(0,s._)("div",g,[(0,s._)("p",null,[(0,s.Uk)("Поздравляю, "),(0,s._)("strong",null,(0,i.zw)(m.winner)+"!",1)])])])):(0,s.kq)("",!0),"X"===m.winner?((0,s.wg)(),(0,s.iD)("article",b,[(0,s._)("div",p,[(0,s._)("p",null,[(0,s.Uk)("Поздравляю, "),(0,s._)("strong",null,(0,i.zw)(m.winner)+"!",1)])])])):(0,s.kq)("",!0),""!==m.winner||m.gameIsOn?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("article",f,w))])])}const O={class:"board"},k={class:"board__list"},y=["onClick"],_={key:0},I={key:0},S=(0,s._)("i",{class:"bi bi-circle"},null,-1),x=[S],D={key:1},C=(0,s._)("i",{class:"bi bi-x-circle"},null,-1),X=[C];function q(e,n,r,t,o,a){return(0,s.wg)(),(0,s.iD)("div",O,[(0,s._)("ul",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.board,((e,n)=>((0,s.wg)(),(0,s.iD)("li",{class:(0,i.C_)(["board__item",{activeX:"X"==e,activeO:"O"==e}]),key:e,onClick:e=>a.tapOnBox(n)},[0!==e?((0,s.wg)(),(0,s.iD)("div",_,["O"===e?((0,s.wg)(),(0,s.iD)("span",I,x)):(0,s.kq)("",!0),"X"===e?((0,s.wg)(),(0,s.iD)("span",D,X)):(0,s.kq)("",!0)])):(0,s.kq)("",!0)],10,y)))),128))])])}var B={name:"board-comp",props:{currentStep:{type:String},board:{type:Array},gameIsOn:{type:Boolean}},data(){return{}},methods:{tapOnBox(e){if(!this.gameIsOn)return!1;0==this.board[e]&&this.$emit("change-step",this.board,e)}}},j=r(744);const A=(0,j.Z)(B,[["render",q]]);var N=A,z={name:"App",components:{BoardComp:N},data(){return{currentStep:"X",board:[0,0,0,0,0,0,0,0,0],gameIsOn:!0,winner:""}},methods:{changeNextStep(e,n){"X"===this.currentStep?this.board[n]="X":this.board[n]="O","X"===this.currentStep?this.currentStep="O":this.currentStep="X",this.searchWinner(this.board[n]),e.includes(0)||(this.gameIsOn=!1)},resetBoard(){this.board=[],this.currentStep="X",this.winner="",this.gameIsOn=!0;let e=setInterval((()=>this.board.push(0)),50);setTimeout((()=>{clearInterval(e)}),450)},searchWinner(e){for(let n=0;n<this.board.length;n++)this.board[0]==e&&this.board[1]==e&&this.board[2]==e&&(this.winner=e,this.gameIsOn=!1),this.board[3]==e&&this.board[4]==e&&this.board[5]==e&&(this.winner=e,this.gameIsOn=!1),this.board[6]==e&&this.board[7]==e&&this.board[8]==e&&(this.winner=e,this.gameIsOn=!1),this.board[0]==e&&this.board[4]==e&&this.board[8]==e&&(this.winner=e,this.gameIsOn=!1),this.board[2]==e&&this.board[4]==e&&this.board[6]==e&&(this.winner=e,this.gameIsOn=!1),this.board[0]==e&&this.board[3]==e&&this.board[6]==e&&(this.winner=e,this.gameIsOn=!1),this.board[1]==e&&this.board[4]==e&&this.board[7]==e&&(this.winner=e,this.gameIsOn=!1),this.board[2]==e&&this.board[5]==e&&this.board[8]==e&&(this.winner=e,this.gameIsOn=!1)}}};const E=(0,j.Z)(z,[["render",v]]);var T=E,F=r(205);(0,F.z)("/xo-app/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,t.ri)(T).mount("#app")}},n={};function r(t){var s=n[t];if(void 0!==s)return s.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(n,t,s,i){if(!t){var o=1/0;for(h=0;h<e.length;h++){t=e[h][0],s=e[h][1],i=e[h][2];for(var a=!0,c=0;c<t.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[c])}))?t.splice(c--,1):(a=!1,i<o&&(o=i));if(a){e.splice(h--,1);var l=s();void 0!==l&&(n=l)}}return n}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[t,s,i]}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var s,i,o=t[0],a=t[1],c=t[2],l=0;if(o.some((function(n){return 0!==e[n]}))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(c)var h=c(r)}for(n&&n(t);l<o.length;l++)i=o[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(h)},t=self["webpackChunkxo"]=self["webpackChunkxo"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(78)}));t=r.O(t)})();
//# sourceMappingURL=app.8a414a75.js.map