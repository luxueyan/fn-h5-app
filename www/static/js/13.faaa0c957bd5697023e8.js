webpackJsonp([13,17],{356:function(t,e,a){var n=a(61)(a(387),a(423),null,null);n.options.__file="/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/repay/RepayInfo.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] RepayInfo.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},358:function(t,e,a){"use strict";function n(t){return{idCard:t.Idcard,cardName:t.Cardname,bankCard:t.Bankcard,bankPhone:t.Bankphone,bank:t.Bankname,loanAmount:t.Loanamount,totalAmount:t.Totalamount,endDate:o()(t.Enddate).format("YYYY年MM月DD日"),startDate:o()(t.Startdate).format("YYYY年MM月DD日")}}var r=a(0),o=a.n(r);e.a=n},363:function(t,e,a){"use strict";var n=a(62),r=a.n(n),o=a(35),s=a(15),l=a(63);e.a={methods:r()({},a.i(l.c)(["updateStateCode"]),{repay:function(){var t=this;o.f.get().then(function(t){return t.json()}).then(function(e){e.ret===s.a.OK&&(t.updateStateCode(s.b.REPAYING),t.$router.push({name:"repaying"}))})}})}},387:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(65),r=a.n(n),o=a(62),s=a.n(o),l=a(217),i=a.n(l),u=a(35),d=a(363),c=a(63),f=a(358);e.default={mixins:[d.a],beforeRouteEnter:function(t,e,n){u.a.get().then(function(t){return t.json()}).then(function(t){n(function(e){t.data.content&&(i()(e.model,a.i(f.a)(t.data.content)),e.bankCardForShow=e.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g,"$& "))})})},methods:{goChangeBankCard:function(){this.$router.push({name:"changeBankCardStep1"})}},computed:s()({},a.i(c.b)(["stateCode"])),data:function(){var t=JSON.parse(r()(this.$store.getters.user));return{bankCardForShow:"",model:{name:t.UserinfoValLogin.Name,idCard:null,bankCard:null,bank:"",bankPhone:null},user:t}}}},423:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"borrow-info"},[a("div",{staticClass:"form"},[a("div",{staticClass:"fields-header"},[t._v("借款方案"),a("small",{staticClass:"fr loan-agreement"},[t._v("查看"),a("router-link",{attrs:{to:{name:"loanAgreement"}}},[t._v("《借款服务协议》")])],1)]),a("div",{staticClass:"fields"},[a("mt-cell",{attrs:{title:"借款金额",value:t._f("fbCurrency")(t.model.loanAmount,"","元")}}),a("mt-cell",{attrs:{title:"应还日期",value:t._f("fbFalse")(t.model.endDate)}}),a("mt-cell",{attrs:{title:"应还金额",value:t._f("fbCurrency")(t.model.totalAmount,"","元")}})],1),a("div",{staticClass:"fields-header"},[t._v("账户信息")]),a("div",{staticClass:"fields"},[a("mt-cell",{attrs:{title:"姓名",value:t._f("fbFalse")(t.user.UserinfoValLogin.Name)}}),a("mt-cell",{attrs:{title:"身份证号",value:t.model.idCard}}),a("mt-cell",{attrs:{title:"银行卡号"}},[a("span",[t._v(t._s(t.bankCardForShow))])]),a("mt-cell",{attrs:{title:"开户行",value:t._f("fbFalse")(t.model.bank)}}),a("mt-cell",{attrs:{title:"银行预留手机号",value:t.model.bankPhone}}),a("mt-cell",{nativeOn:{click:function(e){t.goChangeBankCard()}}},[a("a",{staticClass:"small"},[t._v("变更银行卡")])])],1),a("div",{staticClass:"form-buttons fixed"},[a("mt-button",{staticClass:"mint-button-block",attrs:{type:"primary",size:"large"},on:{click:function(e){t.repay()}}},[t._v("立即还款")])],1)])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});
//# sourceMappingURL=13.faaa0c957bd5697023e8.js.map