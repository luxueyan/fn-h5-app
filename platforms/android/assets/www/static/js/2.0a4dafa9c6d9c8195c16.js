webpackJsonp([2,17],{347:function(t,e,n){n(403);var i=n(61)(n(378),n(424),null,null);t.exports=i.exports},354:function(t,e,n){"use strict";var i=n(62),o=n.n(i),a=n(35),l=n(15),r=n(63);e.a={methods:o()({},n.i(r.c)(["updateStateCode"]),{drawMoney:function(){var t=this;return a.g.get().then(function(t){return t.json()}).then(function(e){e.ret===l.a.OK&&(t.updateStateCode(l.b.LOANING),t.$router.push({name:"loaning"}))})}})}},368:function(module,__webpack_exports__,__webpack_require__){"use strict";function getVersion(){return"3.0.0.3"}function setCurrentLanguageType(t){var e=["Cancel","Done"],n=["取消","完成"],i=["Green","Yellow","Blue","Black","Red"],o=["绿色","黄色","蓝色","黑色","红色"],a=["綠色","黃色","藍色","黑色","紅色"],l=["Ultra Thick","Thick","Mid","Thin","Ultra Thin"],r=["特粗","粗"," 中 "," 细 ","特细"],s=["0.9em","0.9em","0.9em","0.9em","0.9em"],c=["1em","1em","1em","1em","1em"],u=document.getElementById("writingDiv").querySelectorAll("input"),d=document.getElementById("palette").children,p=document.getElementById("penSize").children;if("en"===t){for(t=0;2>t;t++)u[t].value=e[t];for(e=d.length,r=document.body.clientWidth,t=0;t<e;t++)d[t].innerHTML=i[t],320>=r&&(d[t].style.fontSize="0.7em");for(i=p.length,t=0;t<i;t++)d=p[t].childElementCount,3==d?(p[t].children[1].style.fontSize=s[t],p[t].children[2].style.fontSize=s[t],0==t?(p[t].children[1].innerHTML="Ultra",p[t].children[2].innerHTML="Thick"):4==t&&(p[t].children[1].innerHTML="Ultra",p[t].children[2].innerHTML="Thin")):2==d&&(p[t].children[1].style.fontSize=s[t],p[t].children[1].innerHTML=l[t])}else if("zh-Hans"===t){for(t=0;2>t;t++)u[t].value=n[t];for(e=d.length,t=0;t<e;t++)d[t].innerHTML=o[t];for(i=p.length,t=0;t<i;t++)d=p[t].childElementCount,3==d?(p[t].children[1].style.fontSize=c[t],p[t].children[2].style.fontSize=c[t],0==t?(p[t].children[1].innerHTML="特",p[t].children[2].innerHTML="粗"):4==t&&(p[t].children[1].innerHTML="特",p[t].children[2].innerHTML="细")):2==d&&(p[t].children[1].style.fontSize=c[t],p[t].children[1].innerHTML=r[t])}else if("zh-Hant"===t){for(t=0;2>t;t++)u[t].value=n[t];for(e=d.length,t=0;t<e;t++)d[t].innerHTML=a[t];for(i=p.length,t=0;t<i;t++)d=p[t].childElementCount,3==d?(p[t].children[1].style.fontSize=c[t],p[t].children[2].style.fontSize=c[t],0==t?(p[t].children[1].innerHTML="特",p[t].children[2].innerHTML="粗"):4==t&&(p[t].children[1].innerHTML="特",p[t].children[2].innerHTML="細")):2==d&&(p[t].children[1].style.fontSize=c[t],p[t].children[1].innerHTML=r[t])}}function u(t){var e=document.getElementById("writingDiv").querySelectorAll("input"),n=document.getElementById("palette"),i=document.getElementById("penSize"),o=0,a=0;t.cancelButton=e[0],t.doneButton=e[1],t.R=e[2],t.O=e[3],t.K=e[4],t.L=e[5],t.P=e[6],t.cancelButton.onmousedown=function(){t.I(null,null,!0)},t.doneButton.onmousedown=function(){var e;if(0>=t.b.length)e=null;else{for(t.c=[-1,-1,-1,-1],e=0;e<t.b.length;e++)for(var n=0;n<t.b[e].points.length;n++){var i=t.b[e].points[n],o=t,a=i.x,i=i.y,l=0>a-16?0:a-16,r=0>i-16?0:i-16;o.c[0]=0>o.c[0]?l:o.c[0],o.c[0]=o.c[0]>l?l:o.c[0],o.c[1]=o.c[1]<a+16?a+16:o.c[1],o.c[2]=0>o.c[2]?r:o.c[2],o.c[2]=o.c[2]>r?r:o.c[2],o.c[3]=o.c[3]<i+16?i+16:o.c[3]}e=t.canvas.getContext("2d").getImageData(t.c[0],t.c[2],t.c[1]-t.c[0],t.c[3]-t.c[2]),n=document.createElement("CANVAS"),o=n.getContext("2d"),n.height=e.height,n.width=e.width,o.putImageData(e,0,0),e=n.toDataURL("image/png")}for(n='{"version":"'+getVersion()+'","strokes":[',a=0;a<t.b.length;a++){for(0!=a&&(n+=","),n+='{"time":'+t.b[a].time+",",n+='"color":"'+t.b[a].color+'",',n+='"penSize":"'+t.b[a].penSize+'",',n+='"points":[',i=0;i<t.b[a].points.length;i++)o=t.b[a].points[i],0!=i&&(n+=","),n+='{"x":'+Math.round(100*o.x)/100+',"y":'+Math.round(100*o.y)/100+',"t":'+(o.t||0)+"}";n+="]}"}t.I(e,n+"]}",!1)},t.R.onmousedown=function(){if("edit"===t.status)if(t.u&&t.u.length)t.b=t.u,t.u=null,y(t);else if(t.b.length){var e=t.b.pop();t.B.push([e]),y(t)}},t.O.onmousedown=function(){"edit"===t.status&&t.B.length&&(t.b=t.b.concat(t.B.pop()),y(t))},t.K.onmousedown=function(){B(t)},t.L.onmousedown=function(){o?(o=a=0,i.style.display="none",n.style.display="none"):(o=1,n.style.display="inline",a=0,i.style.display="none")},t.P.onmousedown=function(){a?(o=a=0,i.style.display="none"):(a=1,i.style.display="inline",o=0),n.style.display="none"},n.onclick=function(e){e=e.target,"LI"==e.tagName&&(t.color=e.getAttribute("value"),o=a=0,i.style.display="none",n.style.display="none")},i.onclick=function(e){e=e.target,"DIV"==e.tagName&&(t.h=parseInt(e.getAttribute("value")),o=a=0,i.style.display="none",n.style.display="none")}}function EPaper(t,e){if(t.nodeType)this.canvas=t;else{if("string"!=typeof t)return;this.canvas=document.getElementById(t)}var n=document.getElementById(e),i=n.offsetHeight;this.canvas.width=n.offsetWidth,this.canvas.height=i-44-45,E(this),this.b=[],this.B=[],u(this)}function E(t){if(t.canvas.getContext){t.a=t.canvas.getContext("2d"),t.a.strokeStyle=t.color,t.a.fillStyle=t.color,F(t.canvas,"selectstart",function(){return!1});var e=function e(n){if("edit"===t.status){var i,o;if("touchstart"==n.type){if(2<=n.touches.length)return;i=n.touches[0].pageX,o=n.touches[0].pageY,G(t.canvas,"mousedown",e)}else i=n.pageX,o=n.pageY;t.m=t.canvas.getBoundingClientRect(),t.m={left:t.m.left+(window.scrollX||window.pageXOffset),top:t.m.top+(window.scrollY||window.pageYOffset)},i-=t.m.left,o-=t.m.top,t.j={time:new Date,points:[{x:i,y:o,La:0}],color:t.color,penSize:t.h},H(t,i,o,n.type),n.preventDefault()}};F(t.canvas,"touchstart",e),F(t.canvas,"mousedown",e)}}function H(t,e,n,i){window.getSelection()?window.getSelection().removeAllRanges():document.selection.empty(),t.a.save(),t.a.moveTo(e,n),t.g=null,t.o=null,t.f=[],t.D=0,t.i=t.h/2*(t.width/320),t.s&&(G(document,"mousemove",t.s),G(document,"touchmove",t.s),G(document,"mouseup",t.v),G(document,"touchend",t.v)),t.s=function(e){if("edit"===t.status){var n,i;if("touchmove"==e.type){if(2<=e.touches.length)return;n=e.touches[0].pageX,i=e.touches[0].pageY}else n=e.pageX,i=e.pageY;n-=t.m.left,i-=t.m.top,t.j.points.push({x:n,y:i,t:new Date-t.j.time}),I(t,n,i),e.preventDefault()}},t.v=function(){"edit"===t.status&&(J(t),t.b.length?t.j.time-=t.M:(t.M=t.j.time,t.j.time=t.j.time.getTime()),t.b.push(t.j),t.u=null,t.B=[],t.j=null)},"touchstart"==i?(F(document,"touchmove",t.s),F(document,"touchend",t.v)):(F(document,"mousemove",t.s),F(document,"mouseup",t.v)),t.g=null,I(t,e,n)}function I(t,e,n){var i,o;t.f.length&&(i=t.f[t.f.length-1],0==(o=Math.sqrt((i.x-e)*(i.x-e)+(i.y-n)*(i.y-n))))||(navigator.userAgent.match(/ OS (\d+).*? Mac OS/)&&!t.D&&2==t.f.length&&4*i<t.f[1].w&&(t.f[0].x-=2/3*(t.f[0].x-t.f[1].x),t.f[0].y-=2/3*(t.f[0].y-t.f[1].y),t.f[1].w/=2/3*t.f[1].w),i={x:e,y:n,w:o},t.f.push(i),3<=t.f.length&&(i=t.f.shift(),K(t,i)))}function K(t,e,n){var i=e.x,o=e.y,a=e.w;if(!t.g||0!==a){if(t.G=t.f.length?t.f[0]:null,a){t.a.moveTo(t.g.x,t.g.y);var l;!t.D&&t.G&&a>3*t.G.w&&(a/=4,l=1),t.D=1;var r=t.width/320*t.h;if(n||(n=a<.003125*t.width?1.625*r:a<.00625*t.width?1.375*r:a<.009375*t.width?1.25*r:a<.015625*t.width?1.125*r:a<.021875*t.width?r:a<.028125*t.width?.875*r:a<.034375*t.width?.75*r:a<.046875*t.width?.625*r:a<.0625*t.width?.5*r:.375*r),t.F=n,l)for(l=1;3>=l;l++)L(t,i+l/3*(t.g.x-i),o+l/3*(t.g.y-o),a)}L(t,i,o,a),t.g=e}}function J(t){G(document,"mousemove",t.s),G(document,"touchmove",t.s),G(document,"mouseup",t.v),G(document,"touchend",t.v),--t.a.i;for(var e;t.f.length;)e=t.f.shift(),K(t,e,t.width/320*t.h/8)}function B(t){"edit"===t.status&&(t.g=null,t.c=[-1,-1,-1,-1],t.b.length&&(t.u=t.b),t.b=[],t.a.beginPath(),t.a.clearRect(0,0,t.canvas.width,t.canvas.height),t.a.closePath())}function M(t){function e(){n.color=i,n.h=o,n.l>=n.b.length?n.status=n.H:(clearTimeout(n.A),n.A=setTimeout(function(){M(n)},300))}var n=t,i=t.color,o=t.h,a=t.b[t.l];if(a&&"play"==t.status){t.color=a.color,t.h=a.penSize,H(t,a.points[0].x,a.points[0].y),1==a.points.length&&(J(n),e());var l,r=1,s=0;l=a.points[r],function(){l&&(I(n,l.x,l.y),r>=a.points.length-1&&(J(n),e()),r++,l=a.points[r])&&(clearTimeout(n.A),n.A=setTimeout(arguments.callee,l.t-s),s=l.t)}(),t.l++}}function y(t){function e(){n.color=i,n.h=o,n.l>=n.b.length&&(n.status="edit")}var n=t,i=t.color,o=t.h;t.a.clearRect(0,0,t.canvas.width,t.canvas.height),t.a.beginPath(),t.l=0;for(var a=t.b[t.l];a;){t.color=a.color,t.h=a.penSize,H(t,a.points[0].x,a.points[0].y),1==a.points.length&&(J(t),e());for(var l=1,r=1;l<a.points.length;l++){var s=a.points[r];r++,I(t,s.x,s.y),r>=a.points.length&&(J(t),e())}t.l++,a=t.b[t.l]}}function L(t,e,n,i){var o={x:e,y:n},a=8,l=t.i;if(t.a.fillStyle=t.color,t.a.strokeStyle=t.color,t.g){if(1<(a=Math.floor(Math.abs(i)/(t.i/3))))for(l=t.i,i=0;i<a;i++)l-=(l-t.F)/(8<a?a:8);else Math.abs(t.i-t.F)>t.width/320*t.h*.025&&(l=t.i-(t.i-t.F)/8);if(e=null,0<t.f.length){e=t.g,n=t.f[0];var a=t.J,r=n.x-e.x,s=n.y-e.y,c=N(e,o),u=N(o,n),d=c+u;e=0==c||0==u||(o.x-e.x)/(o.y-e.y)==(o.x-n.x)/(o.y-n.y)?null:[{x:o.x-r*a*c/d,y:o.y-s*a*c/d},{x:o.x+r*a*u/d,y:o.y+s*a*u/d}]}if(n=[t.g],(t.o||e)&&i>2*l){for(a=e?e[0]:o,t.o=null==t.o?t.g:t.o,r=t.g,s=t.o,i/=2*l,c=[],u=0;u<i;u++){var p,h,g,f,v,m,y,b,d=(u+1)/(i+1);g=3*(s.x-r.x),h=3*(a.x-s.x)-g,p=o.x-r.x-g-h,m=3*(s.y-r.y),v=3*(a.y-s.y)-m,f=o.y-r.y-m-v,y=d*d,b=y*d,c.push({x:p*b+h*y+g*d+r.x,y:f*b+v*y+m*d+r.y})}n=n.concat(c)}for(n.push(o),o=n,n=t.i,a=l,u=n,r=1;r<o.length;r++)s=(a-n)/(o.length-1)+u,i=t,m=o[r-1],c=o[r],d=s,f=u*Math.sin(Math.atan((c.y-m.y)/(c.x-m.x))),y=u*Math.cos(Math.atan((c.y-m.y)/(c.x-m.x))),v=d*Math.sin(Math.atan((c.y-m.y)/(c.x-m.x))),g=d*Math.cos(Math.atan((c.y-m.y)/(c.x-m.x))),p=m.x+f,h=m.y-y,f=m.x-f,m=m.y+y,y=c.x+v,b=c.y-g,v=c.x-v,g=c.y+g,i.a.beginPath(),i.a.moveTo(p,h),i.a.lineTo(y,b),i.a.lineTo(v,g),i.a.lineTo(f,m),i.a.lineTo(p,h),i.a.fill(),i.a.closePath(),i.a.lineWidth=u,i.a.beginPath(),i.a.arc(c.x,c.y,d,0,2*Math.PI),i.a.fill(),i.a.closePath(),u=s;t.a.lineWidth=t.i=l,!e||1>=e.length?t.o=null:t.o=e[1]}else t.a.beginPath(),t.a.fillStyle=t.color,t.a.arc(e,n,t.i,0,2*Math.PI),t.a.fill(),t.a.closePath()}function N(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function F(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}function G(t,e,n){t.detachEvent?t.detachEvent("on"+e,n):t.removeEventListener(e,n,!1)}EPaper.init=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return document.getElementById(t).innerHTML="<div id='writingDiv' class='writingDiv'>\n                                            <div class='topBar'>\n                                              <input class='textButton' type='button' value='返回'/>\n                                              <label>手写您的姓名（"+e.name+"）</label>\n                                              <input class='textButton_Done' type='button' value='完成'/>\n                                            </div>\n                                            <div class='paperCanvas'>\n                                              <canvas id='ePaperCanvas' height='100%' width='100%' class='ePaperCanvas'></canvas>\n                                            </div>\n                                            <div class='bottomBar'>\n                                              <div class='bottomCol'><input class='bottomButton undo' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton redo' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton clear' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton color' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton stroke' type='button'/></div>\n                                            </div>\n                                            <ol class='palette' id='palette'>\n                                              <li value='rgba(111,138,37,1)' style='background:rgb(111,138,37)'>绿色</li>\n                                              <li value='rgba(255,198,2,1)' style='background:rgb(255,198,2)'>黄色</li>\n                                              <li value='rgba(51,111,172,1)' style='background:rgb(51,111,172)'>蓝色</li>\n                                              <li value='rgba(0,0,0,1)' style='background:rgb(0,0,0)'>黑色</li>\n                                              <li value='rgba(255,0,0,1)' style='background:rgb(255,0,0)'>红色</li>\n                                            </ol>\n                                            <ol class='penSize' id='penSize'>\n                                              <li><input type='radio' name='fSize' value='18'/><div value='18'>特</div><div>粗</div></li>\n                                              <li><input type='radio' name='fSize' value='12'/><div style='margin-top:14px;' value='12'>粗</div></li>\n                                              <li><input type='radio' name='fSize' value='8' checked/><div style='margin-top:14px;' value='8'>中</div></li>\n                                              <li><input type='radio' name='fSize' value='6'/><div style='margin-top:14px;' value='6'>细</div></li>\n                                              <li><input type='radio' name='fSize' value='3'/><div value='3'>特</div><div>细</div></li>\n                                            </ol>\n                                          </div>",new EPaper("ePaperCanvas",t)};var r=EPaper.prototype;r.i=1,r.color="rgba(0,0,0,1)",r.h=8,r.width=320,r.j=null,r.u=null,r.status="edit",r.c=[-1,-1,-1,-1],r.J=.4,r.playWithJsonN=function(a){if(a=eval("("+a+")").strokes,!(0>=a.length)){B(this);for(var d=[],b=0;b<a.length;b++){for(var c=[],f=0;f<a[b].points.length;f++)c.push({x:a[b].points[f].x,y:a[b].points[f].y,t:a[b].points[f].t});d.push({time:a[b].time,points:c,color:a[b].color,penSize:a[b].penSize})}this.b=d,0!=this.b.length&&("play"==this.status?(this.status=this.H,clearTimeout(this.A),y(this)):(this.H=this.status,this.status="play",this.a.clearRect(0,0,this.canvas.width,this.canvas.height),this.a.beginPath(),this.l=0,M(this)))}},r.setCallback=function(t){"function"==typeof t&&3===t.length&&(this.I=t)},__webpack_exports__.a=EPaper},378:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(62),o=n.n(i),a=n(368),l=n(35),r=n(63),s=n(15),c=n(354);e.default={mixins:[c.a],mounted:function(){var t=this;a.a.init("panel",{name:this.user.UserinfoValLogin.Name}).setCallback(function(e,n,i){if(i)l.i.get().then(function(){t.updateStateCode(s.b.DEBT_SETTELED),t.$router.push({name:"borrowerInfo"})});else{if(!e)return void t.$root.toast("请手写您的姓名："+t.user.UserinfoValLogin.Name,"error");l.h.save({sign:e}).then(function(t){return t.json()}).then(function(e){e.ret===s.a.OK&&t.drawMoney()})}})},methods:o()({},n.i(r.c)(["updateStateCode"])),computed:o()({},n.i(r.b)(["user"])),data:function(){return{panelStyle:{height:window.innerHeight+"px"}}}}},389:function(t,e,n){e=t.exports=n(4)(),e.push([t.i,".writingDiv{position:relative;width:100%;height:100%}.writingDiv .bottomBar,.writingDiv .topBar{position:absolute;height:44px;background:snow;left:0}.writingDiv .topBar{display:-webkit-flex;display:-ms-flexbox;display:flex;top:45px;width:100%;z-index:99}.writingDiv .topBar label{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:44px}.writingDiv .bottomBar{height:44px;bottom:0;width:100%;clear:both}.writingDiv .paperCanvas{position:absolute;left:0;bottom:44px;top:44px;background:url("+n(410)+");width:100%}.writingDiv .ePaperCanvas{height:100%;width:100%;margin:0;padding:0;display:block}.writingDiv .textButton,.writingDiv .textButton_Done{padding:0;height:44px;line-height:44px;border-radius:5px;color:#18b4ed;font-size:17px;background:transparent;display:inline-block;border:none;text-align:center}.writingDiv .textButton{margin-left:10px}.writingDiv .textButton_Done{margin-right:10px}.writingDiv .bottomCol{display:block;float:left;width:20%;height:28px;margin-top:7px}.writingDiv .bottomButton{background:transparent;-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;width:28px;height:28px;display:block;background-size:28px;border:none;margin:auto;top:10px;left:0;right:0;bottom:0}.writingDiv .redo{background:url("+n(412)+") no-repeat;background-size:28px;border:none;top:10px}.writingDiv .redo:active{background:url("+n(413)+") no-repeat;background-size:28px}.writingDiv .undo{background:url("+n(414)+") no-repeat;background-size:28px}.writingDiv .undo:active{background:url("+n(415)+") no-repeat;background-size:28px}.writingDiv .clear{background:url("+n(218)+") no-repeat;background-size:28px;top:10px}.writingDiv .color{background:url("+n(411)+") no-repeat;background-size:28px}.writingDiv .stroke{background:url("+n(416)+") no-repeat;background-size:28px}.writingDiv .palette{border-bottom:1px solid #82593e;margin:auto;position:absolute;bottom:44px;width:100%;list-style:none;padding:0;display:none;z-index:20;background:#fff;left:0}.writingDiv .palette li{float:left;line-height:44px;font-size:.75em;padding:0;color:#fff;width:20%;text-align:center;display:inline}.writingDiv .penSize{border-bottom:1px solid #82593e;margin:auto;position:absolute;bottom:44px;width:100%;list-style:none;background:#fff;z-index:20;display:none;padding:0;left:0}.writingDiv .penSize li{float:left;font-size:.6em;width:20%}.writingDiv .penSize li input{float:left;margin-top:16px}#panel{top:0;left:0;right:0;bottom:0;position:absolute;z-index:0;background-color:#fff}#panel .ePaperCanvas{height:100%;width:100%;margin:0;padding:0;display:block}",""])},403:function(t,e,n){var i=n(389);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(5)("96ce1548",i,!0)},410:function(t,e,n){t.exports=n.p+"static/img/bg_paper.5a8fa55.jpg"},411:function(t,e,n){t.exports=n.p+"static/img/color.e631e6c.png"},412:function(t,e,n){t.exports=n.p+"static/img/next.6bcd571.png"},413:function(t,e,n){t.exports=n.p+"static/img/next_press.a3d9787.png"},414:function(t,e,n){t.exports=n.p+"static/img/previous.09e1c5a.png"},415:function(t,e,n){t.exports=n.p+"static/img/previous_press.dc3dfae.png"},416:function(t,e,n){t.exports=n.p+"static/img/stroke.f0ebe60.png"},424:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:t.panelStyle,attrs:{id:"panel"}})},staticRenderFns:[]}}});
//# sourceMappingURL=2.0a4dafa9c6d9c8195c16.js.map