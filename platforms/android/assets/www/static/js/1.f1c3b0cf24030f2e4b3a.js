webpackJsonp([1,17],{342:function(e,t,a){a(407);var n=a(61)(a(373),a(428),null,null);e.exports=n.exports},351:function(e,t,a){"use strict";function n(e){return{idCard:e.Idcard,cardName:e.Cardname,bankCard:e.Bankcard,bankPhone:e.Bankphone,bank:e.Bankname,loanAmount:e.Loanamount,totalAmount:e.Totalamount,endDate:o()(e.Enddate).format("YYYY年MM月DD日"),startDate:o()(e.Startdate).format("YYYY年MM月DD日")}}var r=a(0),o=a.n(r);t.a=n},352:function(e,t,a){"use strict";var n=a(64),r=a.n(n),o=r.a.Validator;t.a={methods:{Validator:o,validate:o.value,getFieldState:function(e){return this.validation.hasError(e)?"error":this.validation.isPassed(e)?"success":""},showFieldError:function(e,t){var a=e.target;a.classList.contains("mintui-field-error")&&a.parentNode.classList.contains("mint-field-state")&&this.$root.toast(this.validation.firstError(t),"error")}}}},353:function(e,t,a){"use strict";var n="@@clickoutsideContext";t.a={bind:function(e,t,a){var r=function(t){a.context&&!e.contains(t.target)&&a.context[e[n].methodName]()};e[n]={documentHandler:r,methodName:t.expression,arg:t.arg||"click"},document.addEventListener(e[n].arg,r)},update:function(e,t){e[n].methodName=t.expression},unbind:function(e){document.removeEventListener(e[n].arg,e[n].documentHandler)},install:function(e){e.directive("clickoutside",{bind:this.bind,unbind:this.unbind})}}},355:function(e,t,a){"use strict";t.a={methods:{showSupportBanks:function(){this.$root.MessageBox("支持银行列表：","农业银行、中国银行、工商银行、建设银行、交通银行、兴业银行、中信银行、平安银行、光大银行、上海银行")}}}},358:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(359),o=a.n(r),i=a(217),s=a.n(i),l=a(38),d=(a.n(l),a(37)),c=a.n(d),u=a(70),h=(a.n(u),a(69)),m=a.n(h),f=a(353);t.default={name:"fb-field",components:(n={},s()(n,m.a.name,m.a),s()(n,c.a.name,c.a),n),data:function(){return{active:!1,currentValue:this.value}},directives:{Clickoutside:f.a},props:{type:{type:String,default:"text"},rows:String,label:String,placeholder:String,readonly:Boolean,disabled:Boolean,disableClear:Boolean,state:{type:String,default:"default"},value:{},attr:Object},methods:{doCloseActive:function(){this.active=!1},handleInput:function(e){this.currentValue=e.target.value},handleClear:function(){this.disabled||this.readonly||(this.currentValue="")}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e)},attr:{immediate:!0,handler:function(e){var t=this;this.$nextTick(function(){[t.$refs.input,t.$refs.textarea].forEach(function(t){t&&e&&o()(e).map(function(a){return t.setAttribute(a,e[a])})})})}}}}},359:function(e,t,a){e.exports={default:a(360),__esModule:!0}},360:function(e,t,a){a(362),e.exports=a(8).Object.keys},361:function(e,t,a){var n=a(25),r=a(8),o=a(36);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],i={};i[e]=t(a),n(n.S+n.F*o(function(){a(1)}),"Object",i)}},362:function(e,t,a){var n=a(67),r=a(66);a(361)("keys",function(){return function(e){return r(n(e))}})},365:function(e,t,a){var n=a(61)(a(358),a(367),null,null);e.exports=n.exports},367:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mt-cell",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.doCloseActive,expression:"doCloseActive"}],staticClass:"mint-field",class:[{"is-textarea":"textarea"===e.type,"is-nolabel":!e.label}],attrs:{title:e.label}},[a("template",{slot:"title"},[e._t("label")],2),e._v(" "),"textarea"===e.type?a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"textarea",staticClass:"mint-field-core",attrs:{placeholder:e.placeholder,rows:e.rows,disabled:e.disabled,readonly:e.readonly},domProps:{value:e.currentValue},on:{change:function(t){e.$emit("change",e.currentValue)},input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):a("input",{ref:"input",staticClass:"mint-field-core",attrs:{placeholder:e.placeholder,number:"number"===e.type,type:e.type,disabled:e.disabled,readonly:e.readonly},domProps:{value:e.currentValue},on:{change:function(t){e.$emit("change",e.currentValue)},focus:function(t){e.active=!0},input:e.handleInput}}),e._v(" "),e.disableClear?e._e():a("div",{directives:[{name:"show",rawName:"v-show",value:e.currentValue&&"textarea"!==e.type&&e.active,expression:"currentValue && type !== 'textarea' && active"}],staticClass:"mint-field-clear",on:{click:e.handleClear}},[a("i",{staticClass:"mintui mintui-field-error"})]),e._v(" "),e.state?a("span",{staticClass:"mint-field-state",class:["is-"+e.state]},[a("i",{staticClass:"mintui",class:["mintui-field-"+e.state]})]):e._e(),e._v(" "),a("div",{staticClass:"mint-field-other"},[e._t("default")],2)],2)},staticRenderFns:[]}},373:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(216),r=a.n(n),o=a(62),i=a.n(o),s=a(352),l=a(355),d=a(365),c=a.n(d),u=a(35),h=a(15),m=a(68),f=a(351),b=a(63);t.default={mixins:[s.a,l.a],components:{FbField:c.a},beforeRouteEnter:function(e,t,n){u.a.get().then(function(e){return e.json()}).then(function(e){var t=a.i(f.a)(e.data.content);n(function(a){e.data.content&&(a.contractInfoHasHistory=!0,a.placeholders.bankCard=t.bankCard.replace(/\d{4}(?=(\d{1,4}))/g,"$& "),a.placeholders.bankPhone=t.bankPhone,a.model.bankName=t.bank)})})},validators:{"model.bankCard":function(e){return this.validate(e).required("请输入银行卡号").custom(function(){if(!a.i(m.b)(e))return"请正确输入16-19位银行卡号"})},"model.bankPhone":function(e){return this.validate(e).required("请输入手机号").digit("请正确输入手机号").regex("^1[3-9]\\d{9}$","请正确输入手机号")},"model.bankName":function(e){return this.validate(e).required()}},watch:{bankCardForShow:function(){this.model.bankCard=this.bankCardForShow=this.bankCardForShow.replace(/\s/g,""),this.bankCardForShow=this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g,"$& ")}},methods:i()({},a.i(b.c)(["updateUser"]),{getBank:function(){var e=this;this.validation.isPassed("model.bankCard")&&u.b.get({bankCard:this.model.bankCard}).then(function(e){return e.json()}).then(function(t){e.model.bankName=t.data.bank,e.bankCardNotSupported=t.ret===h.a.BANK_CARD_NOT_SUPPORTED})},submit:function(){var e=this;if(this.bankCardNotSupported)return void this.$root.toast("抱歉，您选择的银行卡不支持！","error");this.model.bankCard||(this.bankCardForShow=this.placeholders.bankCard,this.model.bankCard=this.placeholders.bankCard.replace(/\s/g,"")),this.model.bankPhone||(this.model.bankPhone=this.placeholders.bankPhone),this.$validate().then(function(t){t?u.c.save(e.model).then(function(e){return e.json()}).then(function(t){t.ret===h.a.OK&&(e.updateUser(r()({},e.user,e.model,{bank:e.model.bankName})),e.$router.push({name:"changeBankCardStep3"}))}):e.$root.toast(e.validation.firstError(),"error")})}}),computed:i()({},a.i(b.b)(["user"])),data:function(){return{bankCardNotSupported:!1,bankCardForShow:"",placeholders:{bankCard:"",bankPhone:null},model:{bankCard:"",bankPhone:null,bankName:""}}}}},393:function(e,t,a){t=e.exports=a(4)(),t.push([e.i,".change-bank-card-form input::-moz-placeholder{color:#c5c9d2;font-size:14px;opacity:1}.change-bank-card-form input:-ms-input-placeholder{color:#c5c9d2;font-size:14px}.change-bank-card-form input::-webkit-input-placeholder{color:#c5c9d2;font-size:14px}",""])},407:function(e,t,a){var n=a(393);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(5)("64da34aa",n,!0)},428:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("form",{staticClass:"change-bank-card-form",on:{submit:function(t){t.preventDefault(),e.submit()}}},[a("div",{staticClass:"fields-header"},[e._v("更新银行卡信息")]),a("div",{staticClass:"fields"},[a("fb-field",{directives:[{name:"mt-field-blur",rawName:"v-mt-field-blur",value:{blur:e.getBank},expression:"{blur:getBank}"}],attrs:{label:"银行卡号",placeholder:e.placeholders.bankCard,state:e.getFieldState("model.bankCard")},nativeOn:{click:function(t){e.showFieldError(t,"model.bankCard")}},model:{value:e.bankCardForShow,callback:function(t){e.bankCardForShow=t},expression:"bankCardForShow"}},[a("span",{slot:"label"},[e._v("银行卡号"),a("i",{staticClass:"iconfont ui-icon-info",on:{click:function(t){e.showSupportBanks()}}})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.bankCard,expression:"model.bankCard"}],attrs:{type:"hidden"},domProps:{value:e.model.bankCard},on:{input:function(t){t.target.composing||(e.model.bankCard=t.target.value)}}}),a("mt-field",{attrs:{label:"银行预留手机号",placeholder:e.placeholders.bankPhone,state:e.getFieldState("model.bankPhone")},nativeOn:{click:function(t){e.showFieldError(t,"model.bankPhone")}},model:{value:e.model.bankPhone,callback:function(t){e.model.bankPhone=t},expression:"model.bankPhone"}}),a("mt-cell",{attrs:{title:"开户行",value:e._f("fbFalse")(e.model.bankName)}})],1),a("div",{staticClass:"form-buttons"},[a("mt-button",{staticClass:"mint-button-block",attrs:{type:"primary",size:"large"}},[e._v("下一步")])],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=1.f1c3b0cf24030f2e4b3a.js.map