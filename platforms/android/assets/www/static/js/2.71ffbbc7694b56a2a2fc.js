webpackJsonp([2,17],{354:function(n,t,e){e(432);var i=e(61)(e(385),e(417),null,null);i.options.__file="/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/borrow/Signature.vue",i.esModule&&Object.keys(i.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] Signature.vue: functional components are not supported with templates, they should use render functions."),n.exports=i.exports},361:function(n,t,e){"use strict";var i=e(62),o=e.n(i),a=e(35),r=e(15),l=e(63);t.a={methods:o()({},e.i(l.c)(["updateStateCode"]),{drawMoney:function(){var n=this;return a.g.get().then(function(n){return n.json()}).then(function(t){t.ret===r.a.OK&&(n.updateStateCode(r.b.LOANING),n.$router.push({name:"loaning"}))})}})}},375:function(module,__webpack_exports__,__webpack_require__){"use strict";function getVersion(){return"3.0.0.3"}function setCurrentLanguageType(n){var t=["Cancel","Done"],e=["取消","完成"],i=["Green","Yellow","Blue","Black","Red"],o=["绿色","黄色","蓝色","黑色","红色"],a=["綠色","黃色","藍色","黑色","紅色"],r=["Ultra Thick","Thick","Mid","Thin","Ultra Thin"],l=["特粗","粗"," 中 "," 细 ","特细"],s=["0.9em","0.9em","0.9em","0.9em","0.9em"],A=["1em","1em","1em","1em","1em"],c=document.getElementById("writingDiv").querySelectorAll("input"),u=document.getElementById("palette").children,p=document.getElementById("penSize").children;if("en"===n){for(n=0;2>n;n++)c[n].value=t[n];for(t=u.length,l=document.body.clientWidth,n=0;n<t;n++)u[n].innerHTML=i[n],320>=l&&(u[n].style.fontSize="0.7em");for(i=p.length,n=0;n<i;n++)u=p[n].childElementCount,3==u?(p[n].children[1].style.fontSize=s[n],p[n].children[2].style.fontSize=s[n],0==n?(p[n].children[1].innerHTML="Ultra",p[n].children[2].innerHTML="Thick"):4==n&&(p[n].children[1].innerHTML="Ultra",p[n].children[2].innerHTML="Thin")):2==u&&(p[n].children[1].style.fontSize=s[n],p[n].children[1].innerHTML=r[n])}else if("zh-Hans"===n){for(n=0;2>n;n++)c[n].value=e[n];for(t=u.length,n=0;n<t;n++)u[n].innerHTML=o[n];for(i=p.length,n=0;n<i;n++)u=p[n].childElementCount,3==u?(p[n].children[1].style.fontSize=A[n],p[n].children[2].style.fontSize=A[n],0==n?(p[n].children[1].innerHTML="特",p[n].children[2].innerHTML="粗"):4==n&&(p[n].children[1].innerHTML="特",p[n].children[2].innerHTML="细")):2==u&&(p[n].children[1].style.fontSize=A[n],p[n].children[1].innerHTML=l[n])}else if("zh-Hant"===n){for(n=0;2>n;n++)c[n].value=e[n];for(t=u.length,n=0;n<t;n++)u[n].innerHTML=a[n];for(i=p.length,n=0;n<i;n++)u=p[n].childElementCount,3==u?(p[n].children[1].style.fontSize=A[n],p[n].children[2].style.fontSize=A[n],0==n?(p[n].children[1].innerHTML="特",p[n].children[2].innerHTML="粗"):4==n&&(p[n].children[1].innerHTML="特",p[n].children[2].innerHTML="細")):2==u&&(p[n].children[1].style.fontSize=A[n],p[n].children[1].innerHTML=l[n])}}function u(n){var t=document.getElementById("writingDiv").querySelectorAll("input"),e=document.getElementById("palette"),i=document.getElementById("penSize"),o=0,a=0;n.cancelButton=t[0],n.doneButton=t[1],n.R=t[2],n.O=t[3],n.K=t[4],n.L=t[5],n.P=t[6],n.cancelButton.onmousedown=function(){n.I(null,null,!0)},n.doneButton.onmousedown=function(){var t;if(0>=n.b.length)t=null;else{for(n.c=[-1,-1,-1,-1],t=0;t<n.b.length;t++)for(var e=0;e<n.b[t].points.length;e++){var i=n.b[t].points[e],o=n,a=i.x,i=i.y,r=0>a-16?0:a-16,l=0>i-16?0:i-16;o.c[0]=0>o.c[0]?r:o.c[0],o.c[0]=o.c[0]>r?r:o.c[0],o.c[1]=o.c[1]<a+16?a+16:o.c[1],o.c[2]=0>o.c[2]?l:o.c[2],o.c[2]=o.c[2]>l?l:o.c[2],o.c[3]=o.c[3]<i+16?i+16:o.c[3]}t=n.canvas.getContext("2d").getImageData(n.c[0],n.c[2],n.c[1]-n.c[0],n.c[3]-n.c[2]),e=document.createElement("CANVAS"),o=e.getContext("2d"),e.height=t.height,e.width=t.width,o.putImageData(t,0,0),t=e.toDataURL("image/png")}for(e='{"version":"'+getVersion()+'","strokes":[',a=0;a<n.b.length;a++){for(0!=a&&(e+=","),e+='{"time":'+n.b[a].time+",",e+='"color":"'+n.b[a].color+'",',e+='"penSize":"'+n.b[a].penSize+'",',e+='"points":[',i=0;i<n.b[a].points.length;i++)o=n.b[a].points[i],0!=i&&(e+=","),e+='{"x":'+Math.round(100*o.x)/100+',"y":'+Math.round(100*o.y)/100+',"t":'+(o.t||0)+"}";e+="]}"}n.I(t,e+"]}",!1)},n.R.onmousedown=function(){if("edit"===n.status)if(n.u&&n.u.length)n.b=n.u,n.u=null,y(n);else if(n.b.length){var t=n.b.pop();n.B.push([t]),y(n)}},n.O.onmousedown=function(){"edit"===n.status&&n.B.length&&(n.b=n.b.concat(n.B.pop()),y(n))},n.K.onmousedown=function(){B(n)},n.L.onmousedown=function(){o?(o=a=0,i.style.display="none",e.style.display="none"):(o=1,e.style.display="inline",a=0,i.style.display="none")},n.P.onmousedown=function(){a?(o=a=0,i.style.display="none"):(a=1,i.style.display="inline",o=0),e.style.display="none"},e.onclick=function(t){t=t.target,"LI"==t.tagName&&(n.color=t.getAttribute("value"),o=a=0,i.style.display="none",e.style.display="none")},i.onclick=function(t){t=t.target,"DIV"==t.tagName&&(n.h=parseInt(t.getAttribute("value")),o=a=0,i.style.display="none",e.style.display="none")}}function EPaper(n,t){if(n.nodeType)this.canvas=n;else{if("string"!=typeof n)return;this.canvas=document.getElementById(n)}var e=document.getElementById(t),i=e.offsetHeight;this.canvas.width=e.offsetWidth,this.canvas.height=i-44-45,E(this),this.b=[],this.B=[],u(this)}function E(n){if(n.canvas.getContext){n.a=n.canvas.getContext("2d"),n.a.strokeStyle=n.color,n.a.fillStyle=n.color,F(n.canvas,"selectstart",function(){return!1});var t=function t(e){if("edit"===n.status){var i,o;if("touchstart"==e.type){if(2<=e.touches.length)return;i=e.touches[0].pageX,o=e.touches[0].pageY,G(n.canvas,"mousedown",t)}else i=e.pageX,o=e.pageY;n.m=n.canvas.getBoundingClientRect(),n.m={left:n.m.left+(window.scrollX||window.pageXOffset),top:n.m.top+(window.scrollY||window.pageYOffset)},i-=n.m.left,o-=n.m.top,n.j={time:new Date,points:[{x:i,y:o,La:0}],color:n.color,penSize:n.h},H(n,i,o,e.type),e.preventDefault()}};F(n.canvas,"touchstart",t),F(n.canvas,"mousedown",t)}}function H(n,t,e,i){window.getSelection()?window.getSelection().removeAllRanges():document.selection.empty(),n.a.save(),n.a.moveTo(t,e),n.g=null,n.o=null,n.f=[],n.D=0,n.i=n.h/2*(n.width/320),n.s&&(G(document,"mousemove",n.s),G(document,"touchmove",n.s),G(document,"mouseup",n.v),G(document,"touchend",n.v)),n.s=function(t){if("edit"===n.status){var e,i;if("touchmove"==t.type){if(2<=t.touches.length)return;e=t.touches[0].pageX,i=t.touches[0].pageY}else e=t.pageX,i=t.pageY;e-=n.m.left,i-=n.m.top,n.j.points.push({x:e,y:i,t:new Date-n.j.time}),I(n,e,i),t.preventDefault()}},n.v=function(){"edit"===n.status&&(J(n),n.b.length?n.j.time-=n.M:(n.M=n.j.time,n.j.time=n.j.time.getTime()),n.b.push(n.j),n.u=null,n.B=[],n.j=null)},"touchstart"==i?(F(document,"touchmove",n.s),F(document,"touchend",n.v)):(F(document,"mousemove",n.s),F(document,"mouseup",n.v)),n.g=null,I(n,t,e)}function I(n,t,e){var i,o;n.f.length&&(i=n.f[n.f.length-1],0==(o=Math.sqrt((i.x-t)*(i.x-t)+(i.y-e)*(i.y-e))))||(navigator.userAgent.match(/ OS (\d+).*? Mac OS/)&&!n.D&&2==n.f.length&&4*i<n.f[1].w&&(n.f[0].x-=2/3*(n.f[0].x-n.f[1].x),n.f[0].y-=2/3*(n.f[0].y-n.f[1].y),n.f[1].w/=2/3*n.f[1].w),i={x:t,y:e,w:o},n.f.push(i),3<=n.f.length&&(i=n.f.shift(),K(n,i)))}function K(n,t,e){var i=t.x,o=t.y,a=t.w;if(!n.g||0!==a){if(n.G=n.f.length?n.f[0]:null,a){n.a.moveTo(n.g.x,n.g.y);var r;!n.D&&n.G&&a>3*n.G.w&&(a/=4,r=1),n.D=1;var l=n.width/320*n.h;if(e||(e=a<.003125*n.width?1.625*l:a<.00625*n.width?1.375*l:a<.009375*n.width?1.25*l:a<.015625*n.width?1.125*l:a<.021875*n.width?l:a<.028125*n.width?.875*l:a<.034375*n.width?.75*l:a<.046875*n.width?.625*l:a<.0625*n.width?.5*l:.375*l),n.F=e,r)for(r=1;3>=r;r++)L(n,i+r/3*(n.g.x-i),o+r/3*(n.g.y-o),a)}L(n,i,o,a),n.g=t}}function J(n){G(document,"mousemove",n.s),G(document,"touchmove",n.s),G(document,"mouseup",n.v),G(document,"touchend",n.v),--n.a.i;for(var t;n.f.length;)t=n.f.shift(),K(n,t,n.width/320*n.h/8)}function B(n){"edit"===n.status&&(n.g=null,n.c=[-1,-1,-1,-1],n.b.length&&(n.u=n.b),n.b=[],n.a.beginPath(),n.a.clearRect(0,0,n.canvas.width,n.canvas.height),n.a.closePath())}function M(n){function t(){e.color=i,e.h=o,e.l>=e.b.length?e.status=e.H:(clearTimeout(e.A),e.A=setTimeout(function(){M(e)},300))}var e=n,i=n.color,o=n.h,a=n.b[n.l];if(a&&"play"==n.status){n.color=a.color,n.h=a.penSize,H(n,a.points[0].x,a.points[0].y),1==a.points.length&&(J(e),t());var r,l=1,s=0;r=a.points[l],function(){r&&(I(e,r.x,r.y),l>=a.points.length-1&&(J(e),t()),l++,r=a.points[l])&&(clearTimeout(e.A),e.A=setTimeout(arguments.callee,r.t-s),s=r.t)}(),n.l++}}function y(n){function t(){e.color=i,e.h=o,e.l>=e.b.length&&(e.status="edit")}var e=n,i=n.color,o=n.h;n.a.clearRect(0,0,n.canvas.width,n.canvas.height),n.a.beginPath(),n.l=0;for(var a=n.b[n.l];a;){n.color=a.color,n.h=a.penSize,H(n,a.points[0].x,a.points[0].y),1==a.points.length&&(J(n),t());for(var r=1,l=1;r<a.points.length;r++){var s=a.points[l];l++,I(n,s.x,s.y),l>=a.points.length&&(J(n),t())}n.l++,a=n.b[n.l]}}function L(n,t,e,i){var o={x:t,y:e},a=8,r=n.i;if(n.a.fillStyle=n.color,n.a.strokeStyle=n.color,n.g){if(1<(a=Math.floor(Math.abs(i)/(n.i/3))))for(r=n.i,i=0;i<a;i++)r-=(r-n.F)/(8<a?a:8);else Math.abs(n.i-n.F)>n.width/320*n.h*.025&&(r=n.i-(n.i-n.F)/8);if(t=null,0<n.f.length){t=n.g,e=n.f[0];var a=n.J,l=e.x-t.x,s=e.y-t.y,A=N(t,o),c=N(o,e),u=A+c;t=0==A||0==c||(o.x-t.x)/(o.y-t.y)==(o.x-e.x)/(o.y-e.y)?null:[{x:o.x-l*a*A/u,y:o.y-s*a*A/u},{x:o.x+l*a*c/u,y:o.y+s*a*c/u}]}if(e=[n.g],(n.o||t)&&i>2*r){for(a=t?t[0]:o,n.o=null==n.o?n.g:n.o,l=n.g,s=n.o,i/=2*r,A=[],c=0;c<i;c++){var p,d,g,h,f,m,b,v,u=(c+1)/(i+1);g=3*(s.x-l.x),d=3*(a.x-s.x)-g,p=o.x-l.x-g-d,m=3*(s.y-l.y),f=3*(a.y-s.y)-m,h=o.y-l.y-m-f,b=u*u,v=b*u,A.push({x:p*v+d*b+g*u+l.x,y:h*v+f*b+m*u+l.y})}e=e.concat(A)}for(e.push(o),o=e,e=n.i,a=r,c=e,l=1;l<o.length;l++)s=(a-e)/(o.length-1)+c,i=n,m=o[l-1],A=o[l],u=s,h=c*Math.sin(Math.atan((A.y-m.y)/(A.x-m.x))),b=c*Math.cos(Math.atan((A.y-m.y)/(A.x-m.x))),f=u*Math.sin(Math.atan((A.y-m.y)/(A.x-m.x))),g=u*Math.cos(Math.atan((A.y-m.y)/(A.x-m.x))),p=m.x+h,d=m.y-b,h=m.x-h,m=m.y+b,b=A.x+f,v=A.y-g,f=A.x-f,g=A.y+g,i.a.beginPath(),i.a.moveTo(p,d),i.a.lineTo(b,v),i.a.lineTo(f,g),i.a.lineTo(h,m),i.a.lineTo(p,d),i.a.fill(),i.a.closePath(),i.a.lineWidth=c,i.a.beginPath(),i.a.arc(A.x,A.y,u,0,2*Math.PI),i.a.fill(),i.a.closePath(),c=s;n.a.lineWidth=n.i=r,!t||1>=t.length?n.o=null:n.o=t[1]}else n.a.beginPath(),n.a.fillStyle=n.color,n.a.arc(t,e,n.i,0,2*Math.PI),n.a.fill(),n.a.closePath()}function N(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function F(n,t,e){n.attachEvent?n.attachEvent("on"+t,e):n.addEventListener(t,e,!1)}function G(n,t,e){n.detachEvent?n.detachEvent("on"+t,e):n.removeEventListener(t,e,!1)}EPaper.init=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return document.getElementById(n).innerHTML="<div id='writingDiv' class='writingDiv'>\n                                            <div class='topBar'>\n                                              <input class='textButton' type='button' value='返回'/>\n                                              <label>手写您的姓名（"+t.name+"）</label>\n                                              <input class='textButton_Done' type='button' value='完成'/>\n                                            </div>\n                                            <div class='paperCanvas'>\n                                              <canvas id='ePaperCanvas' height='100%' width='100%' class='ePaperCanvas'></canvas>\n                                            </div>\n                                            <div class='bottomBar'>\n                                              <div class='bottomCol'><input class='bottomButton undo' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton redo' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton clear' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton color' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton stroke' type='button'/></div>\n                                            </div>\n                                            <ol class='palette' id='palette'>\n                                              <li value='rgba(111,138,37,1)' style='background:rgb(111,138,37)'>绿色</li>\n                                              <li value='rgba(255,198,2,1)' style='background:rgb(255,198,2)'>黄色</li>\n                                              <li value='rgba(51,111,172,1)' style='background:rgb(51,111,172)'>蓝色</li>\n                                              <li value='rgba(0,0,0,1)' style='background:rgb(0,0,0)'>黑色</li>\n                                              <li value='rgba(255,0,0,1)' style='background:rgb(255,0,0)'>红色</li>\n                                            </ol>\n                                            <ol class='penSize' id='penSize'>\n                                              <li><input type='radio' name='fSize' value='18'/><div value='18'>特</div><div>粗</div></li>\n                                              <li><input type='radio' name='fSize' value='12'/><div style='margin-top:14px;' value='12'>粗</div></li>\n                                              <li><input type='radio' name='fSize' value='8' checked/><div style='margin-top:14px;' value='8'>中</div></li>\n                                              <li><input type='radio' name='fSize' value='6'/><div style='margin-top:14px;' value='6'>细</div></li>\n                                              <li><input type='radio' name='fSize' value='3'/><div value='3'>特</div><div>细</div></li>\n                                            </ol>\n                                          </div>",new EPaper("ePaperCanvas",n)};var r=EPaper.prototype;r.i=1,r.color="rgba(0,0,0,1)",r.h=8,r.width=320,r.j=null,r.u=null,r.status="edit",r.c=[-1,-1,-1,-1],r.J=.4,r.playWithJsonN=function(a){if(a=eval("("+a+")").strokes,!(0>=a.length)){B(this);for(var d=[],b=0;b<a.length;b++){for(var c=[],f=0;f<a[b].points.length;f++)c.push({x:a[b].points[f].x,y:a[b].points[f].y,t:a[b].points[f].t});d.push({time:a[b].time,points:c,color:a[b].color,penSize:a[b].penSize})}this.b=d,0!=this.b.length&&("play"==this.status?(this.status=this.H,clearTimeout(this.A),y(this)):(this.H=this.status,this.status="play",this.a.clearRect(0,0,this.canvas.width,this.canvas.height),this.a.beginPath(),this.l=0,M(this)))}},r.setCallback=function(n){"function"==typeof n&&3===n.length&&(this.I=n)},__webpack_exports__.a=EPaper},385:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(62),o=e.n(i),a=e(375),r=e(35),l=e(63),s=e(15),A=e(361);t.default={mixins:[A.a],mounted:function(){var n=this;a.a.init("panel",{name:this.user.UserinfoValLogin.Name}).setCallback(function(t,e,i){if(i)r.i.get().then(function(){n.updateStateCode(s.b.DEBT_SETTELED),n.$router.push({name:"borrowerInfo"})});else{if(!t)return void n.$root.toast("请手写您的姓名："+n.user.UserinfoValLogin.Name,"error");r.h.save({sign:t}).then(function(n){return n.json()}).then(function(t){t.ret===s.a.OK&&n.drawMoney()})}})},methods:o()({},e.i(l.c)(["updateStateCode"])),computed:o()({},e.i(l.b)(["user"])),data:function(){return{panelStyle:{height:window.innerHeight+"px"}}}}},396:function(n,t,e){t=n.exports=e(1)(),t.push([n.i,"\n.writingDiv {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.writingDiv .topBar,\n  .writingDiv .bottomBar {\n    position: absolute;\n    height: 44px;\n    background: snow;\n    left: 0;\n}\n.writingDiv .topBar {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    top: 45px;\n    width: 100%;\n    z-index: 99;\n}\n.writingDiv .topBar label {\n      -webkit-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: center;\n      line-height: 44px;\n}\n.writingDiv .bottomBar {\n    height: 44px;\n    bottom: 0;\n    width: 100%;\n    clear: both;\n}\n.writingDiv .paperCanvas {\n    position: absolute;\n    left: 0;\n    bottom: 44px;\n    top: 44px;\n    background: url("+e(403)+");\n    width: 100%;\n}\n.writingDiv .ePaperCanvas {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: block;\n}\n.writingDiv .textButton,\n  .writingDiv .textButton_Done {\n    padding: 0;\n    height: 44px;\n    line-height: 44px;\n    border-radius: 5px;\n    color: #18b4ed;\n    font-size: 17px;\n    background: transparent;\n    display: inline-block;\n    border: none;\n    text-align: center;\n}\n.writingDiv .textButton {\n    margin-left: 10px;\n}\n.writingDiv .textButton_Done {\n    margin-right: 10px;\n}\n.writingDiv .bottomCol {\n    display: block;\n    float: left;\n    width: 20%;\n    height: 28px;\n    margin-top: 7px;\n}\n.writingDiv .bottomButton {\n    background: transparent;\n    -webkit-align-self: center;\n        -ms-flex-item-align: center;\n                -ms-grid-row-align: center;\n            align-self: center;\n    width: 28px;\n    height: 28px;\n    display: block;\n    background-size: 28px;\n    border: none;\n    margin: auto;\n    top: 10px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n.writingDiv .redo {\n    background: url("+e(405)+") no-repeat;\n    background-size: 28px;\n    border: none;\n    top: 10px;\n}\n.writingDiv .redo:active {\n    background: url("+e(406)+") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .undo {\n    background: url("+e(407)+") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .undo:active {\n    background: url("+e(408)+") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .clear {\n    background: url("+e(219)+") no-repeat;\n    background-size: 28px;\n    top: 10px;\n}\n.writingDiv .color {\n    background: url("+e(404)+") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .stroke {\n    background: url("+e(409)+") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .palette {\n    border-bottom: 1px solid #82593e;\n    margin: auto;\n    position: absolute;\n    bottom: 44px;\n    width: 100%;\n    list-style: none;\n    padding: 0;\n    display: none;\n    z-index: 20;\n    background: #fff;\n    left: 0;\n}\n.writingDiv .palette li {\n    float: left;\n    line-height: 44px;\n    font-size: 0.75em;\n    padding: 0;\n    color: #fff;\n    width: 20%;\n    text-align: center;\n    display: inline;\n}\n.writingDiv .penSize {\n    border-bottom: 1px solid #82593e;\n    margin: auto;\n    position: absolute;\n    bottom: 44px;\n    width: 100%;\n    list-style: none;\n    background: #fff;\n    z-index: 20;\n    display: none;\n    padding: 0em 0px 0px 0px;\n    left: 0;\n}\n.writingDiv .penSize li {\n    float: left;\n    font-size: 0.6em;\n    width: 20%;\n}\n.writingDiv .penSize li input {\n    float: left;\n    margin-top: 16px;\n}\n#panel {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 0;\n  background-color: #fff;\n}\n#panel .ePaperCanvas {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: block;\n}\n","",{version:3,sources:["/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/borrow/src/assets/scss/epaper.scss","/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/borrow/src/views/borrow/Signature.vue"],names:[],mappings:";AAAA;EACE,mBAAkB;EAClB,YAAW;EACX,aAAY;CA4Kb;AA/KD;;IAMI,mBAAkB;IAClB,aAAY;IACZ,iBAAgB;IAChB,QAAO;CACR;AAVH;IAYI,sBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,UAAS;IACT,YAAW;IACX,YAAW;CAMZ;AArBH;MAiBM,gBAAO;UAAP,YAAO;cAAP,QAAO;MACP,mBAAkB;MAClB,kBAAiB;CAClB;AApBL;IAuBI,aAAY;IACZ,UAAS;IACT,YAAW;IACX,YAAW;CACZ;AA3BH;IA6BI,mBAAkB;IAClB,QAAO;IACP,aAAY;IACZ,UAAS;IACT,0CAA4C;IAC5C,YAAW;CACZ;AAnCH;IAqCI,aAAY;IACZ,YAAW;IACX,UAAS;IACT,WAAU;IACV,eAAc;CACf;AA1CH;;IA6CI,WAAU;IACV,aAAY;IACZ,kBAAiB;IACjB,mBAAkB;IAClB,eAAc;IACd,gBAAe;IACf,wBAAuB;IACvB,sBAAqB;IACrB,aAAY;IACZ,mBAAkB;CACnB;AAvDH;IA6DI,kBAAiB;CAClB;AA9DH;IAgEI,mBAAkB;CACnB;AAjEH;IAmEI,eAAc;IACd,YAAW;IACX,WAAU;IACV,aAAY;IACZ,gBAAe;CAChB;AAxEH;IA0EI,wBAAuB;IACvB,2BAAkB;QAAlB,4BAAkB;gBAAlB,2BAAkB;YAAlB,mBAAkB;IAClB,YAAW;IACX,aAAY;IACZ,eAAc;IACd,sBAAqB;IACrB,aAAY;IACZ,aAAY;IACZ,UAAS;IACT,QAAO;IACP,SAAQ;IACR,UAAS;CACV;AAtFH;IAwFI,oDAAkD;IAClD,sBAAqB;IACrB,aAAY;IACZ,UAAS;CACV;AA5FH;IA8FI,oDAAwD;IACxD,sBAAqB;CACtB;AAhGH;IAkGI,oDAAsD;IACtD,sBAAqB;CACtB;AApGH;IAsGI,oDAA4D;IAC5D,sBAAqB;CACtB;AAxGH;IA0GI,oDAAmD;IACnD,sBAAqB;IACrB,UAAS;CACV;AA7GH;IAmHI,oDAAmD;IACnD,sBAAqB;CACtB;AArHH;IA2HI,oDAAoD;IACpD,sBAAqB;CACtB;AA7HH;IAmII,iCAAgC;IAChC,aAAY;IACZ,mBAAkB;IAClB,aAAY;IACZ,YAAW;IACX,iBAAgB;IAChB,WAAU;IACV,cAAa;IACb,YAAW;IACX,iBAAgB;IAChB,QAAO;CACR;AA9IH;IAgJI,YAAW;IACX,kBAAiB;IACjB,kBAAiB;IACjB,WAAU;IACV,YAAW;IACX,WAAU;IACV,mBAAkB;IAClB,gBAAe;CAChB;AAxJH;IA0JI,iCAAgC;IAChC,aAAY;IACZ,mBAAkB;IAClB,aAAY;IACZ,YAAW;IACX,iBAAgB;IAChB,iBAAgB;IAChB,YAAW;IACX,cAAa;IACb,yBAAwB;IACxB,QAAO;CACR;AArKH;IAuKI,YAAW;IACX,iBAAgB;IAChB,WAAU;CACX;AA1KH;IA4KI,YAAW;IACX,iBAAgB;CACjB;AClGH;EACE,OAAM;EACN,QAAO;EACP,SAAQ;EACR,UAAS;EACT,mBAAkB;EAClB,WAAU;EACV,uBAAsB;CAQvB;AAfD;IASI,aAAY;IACZ,YAAW;IACX,UAAS;IACT,WAAU;IACV,eAAc;CACf",file:"Signature.vue",sourcesContent:[".writingDiv {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  .topBar,\n  .bottomBar {\n    position: absolute;\n    height: 44px;\n    background: snow;\n    left: 0;\n  }\n  .topBar {\n    display: flex;\n    top: 45px;\n    width: 100%;\n    z-index: 99;\n    label {\n      flex: 1;\n      text-align: center;\n      line-height: 44px;\n    }\n  }\n  .bottomBar {\n    height: 44px;\n    bottom: 0;\n    width: 100%;\n    clear: both;\n  }\n  .paperCanvas {\n    position: absolute;\n    left: 0;\n    bottom: 44px;\n    top: 44px;\n    background: url(~assets/images/bg_paper.jpg);\n    width: 100%;\n  }\n  .ePaperCanvas {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: block;\n  }\n  .textButton,\n  .textButton_Done {\n    padding: 0;\n    height: 44px;\n    line-height: 44px;\n    border-radius: 5px;\n    color: #18b4ed;\n    font-size: 17px;\n    background: transparent;\n    display: inline-block;\n    border: none;\n    text-align: center;\n  }\n  // .textButton:active,\n  // .textButton_Done:active {\n  //   text-align: end;\n  // }\n  .textButton {\n    margin-left: 10px;\n  }\n  .textButton_Done {\n    margin-right: 10px;\n  }\n  .bottomCol {\n    display: block;\n    float: left;\n    width: 20%;\n    height: 28px;\n    margin-top: 7px;\n  }\n  .bottomButton {\n    background: transparent;\n    align-self: center;\n    width: 28px;\n    height: 28px;\n    display: block;\n    background-size: 28px;\n    border: none;\n    margin: auto;\n    top: 10px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n  .redo {\n    background: url(~assets/images/next.png) no-repeat;\n    background-size: 28px;\n    border: none;\n    top: 10px;\n  }\n  .redo:active {\n    background: url(~assets/images/next_press.png) no-repeat;\n    background-size: 28px;\n  }\n  .undo {\n    background: url(~assets/images/previous.png) no-repeat;\n    background-size: 28px;\n  }\n  .undo:active {\n    background: url(~assets/images/previous_press.png) no-repeat;\n    background-size: 28px;\n  }\n  .clear {\n    background: url(~assets/images/clear.png) no-repeat;\n    background-size: 28px;\n    top: 10px;\n  }\n  // .clear:active {\n  //   background: url(~assets/images/clear_press.png) no-repeat;\n  //   background-size: 28px;\n  // }\n  .color {\n    background: url(~assets/images/color.png) no-repeat;\n    background-size: 28px;\n  }\n  // .color:active {\n  //   background: url(~assets/images/color_press.png) no-repeat;\n  //   background-size: 28px;\n  // }\n  .stroke {\n    background: url(~assets/images/stroke.png) no-repeat;\n    background-size: 28px;\n  }\n  // .stroke:active {\n  //   background: url(~assets/images/stroke_press.png) no-repeat;\n  //   background-size: 28px;\n  // }\n  .palette {\n    border-bottom: 1px solid #82593e;\n    margin: auto;\n    position: absolute;\n    bottom: 44px;\n    width: 100%;\n    list-style: none;\n    padding: 0;\n    display: none;\n    z-index: 20;\n    background: #fff;\n    left: 0;\n  }\n  .palette li {\n    float: left;\n    line-height: 44px;\n    font-size: 0.75em;\n    padding: 0;\n    color: #fff;\n    width: 20%;\n    text-align: center;\n    display: inline;\n  }\n  .penSize {\n    border-bottom: 1px solid #82593e;\n    margin: auto;\n    position: absolute;\n    bottom: 44px;\n    width: 100%;\n    list-style: none;\n    background: #fff;\n    z-index: 20;\n    display: none;\n    padding: 0em 0px 0px 0px;\n    left: 0;\n  }\n  .penSize li {\n    float: left;\n    font-size: 0.6em;\n    width: 20%;\n  }\n  .penSize li input {\n    float: left;\n    margin-top: 16px;\n  }\n}\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../assets/scss/epaper.scss';\n#panel {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 0;\n  background-color: #fff;\n  .ePaperCanvas {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: block;\n  }\n}\n"],sourceRoot:""}])},403:function(n,t,e){n.exports=e.p+"static/img/bg_paper.5a8fa55.jpg"},404:function(n,t,e){n.exports=e.p+"static/img/color.e631e6c.png"},405:function(n,t,e){n.exports=e.p+"static/img/next.6bcd571.png"},406:function(n,t,e){n.exports=e.p+"static/img/next_press.a3d9787.png"},407:function(n,t,e){n.exports=e.p+"static/img/previous.09e1c5a.png"},408:function(n,t,e){n.exports=e.p+"static/img/previous_press.dc3dfae.png"},409:function(n,t,e){n.exports=e.p+"static/img/stroke.f0ebe60.png"},417:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{style:n.panelStyle,attrs:{id:"panel"}})},staticRenderFns:[]},n.exports.render._withStripped=!0},432:function(n,t,e){var i=e(396);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(3)("02f451e3",i,!1)}});
//# sourceMappingURL=2.71ffbbc7694b56a2a2fc.js.map