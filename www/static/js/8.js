webpackJsonp([8],{

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(468)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(406),
  /* template */
  __webpack_require__(450),
  /* scopeId */
  "data-v-48db9b74",
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/LoanAgreement.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LoanAgreement.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48db9b74", Component.options)
  } else {
    hotAPI.reload("data-v-48db9b74", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = contractInfo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);


function contractInfo(data) {
  return {
    idCard: data.Idcard,
    cardName: data.Cardname,

    bankCard: data.Bankcard,
    bankPhone: data.Bankphone,
    bank: data.Bankname,
    loanAmount: data.Loanamount,
    totalAmount: data.Totalamount,
    endDate: __WEBPACK_IMPORTED_MODULE_0_moment___default()(data.Enddate).format('YYYY年MM月DD日'),
    startDate: __WEBPACK_IMPORTED_MODULE_0_moment___default()(data.Startdate).format('YYYY年MM月DD日')
  };
}

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_resources_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_adaptors_js__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(44);








/* harmony default export */ __webpack_exports__["default"] = ({
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    __WEBPACK_IMPORTED_MODULE_2__common_resources_js__["a" /* QueryContract */].get().then(function (res) {
      return res.json();
    }).then(function (data) {
      next(function (vm) {
        if (data.data.content) {
          vm.contractInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_adaptors_js__["a" /* contractInfo */])(data.data.content));
        }
      });
    });
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapGetters */])(['user']), {
    serviceCharge: function serviceCharge() {
      var _user$integraluserlev = this.user.integraluserlevel,
          Creditmoney = _user$integraluserlev.Creditmoney,
          Managemoney = _user$integraluserlev.Managemoney;

      return Creditmoney + Managemoney;
    },
    virtualMoney: function virtualMoney() {
      var _user$integraluserlev2 = this.user.integraluserlevel,
          Limit = _user$integraluserlev2.Limit,
          Creditmoney = _user$integraluserlev2.Creditmoney,
          Managemoney = _user$integraluserlev2.Managemoney;

      return Limit - Creditmoney - Managemoney;
    },
    bankCardShort: function bankCardShort() {
      return this.contractInfo.bankCard ? this.contractInfo.bankCard.slice(-4) : '';
    }
  }),
  data: function data() {
    return {
      contractInfo: {}
    };
  }
});

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.ui-container[data-v-48db9b74] {\n  font-size: 14px;\n}\ntable[data-v-48db9b74] {\n  table-layout: fixed;\n  width: 100%;\n  word-wrap: break-word;\n  word-break: break-all;\n  margin-bottom: 10px;\n}\ntd[data-v-48db9b74] {\n  text-align: left !important;\n  padding: 5px;\n}\ntd.title-td[data-v-48db9b74] {\n    width: 4em;\n}\n.ui-whitespace[data-v-48db9b74] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n}\np[data-v-48db9b74] {\n  text-align: left;\n  width: 100%;\n  padding-bottom: 5px;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/src/views/LoanAgreement.vue"],"names":[],"mappings":";AA2LA;EACE,gBAAe;CAChB;AAED;EACE,oBAAmB;EACnB,YAAW;EACX,sBAAqB;EACrB,sBAAqB;EACrB,oBAAmB;CACpB;AAED;EACE,4BAA2B;EAE3B,aAAY;CAIb;AAPD;IAKI,WAAU;CACX;AAGH;EACE,kBAAiB;EACjB,qBAAoB;EACpB,mBAAkB;EAClB,oBAAmB;EACnB,uBAAsB;CACvB;AAED;EACE,iBAAgB;EAChB,YAAW;EACX,oBAAmB;CACpB","file":"LoanAgreement.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ui-container {\n  font-size: 14px;\n}\n\ntable {\n  table-layout: fixed;\n  width: 100%;\n  word-wrap: break-word;\n  word-break: break-all;\n  margin-bottom: 10px;\n}\n\ntd {\n  text-align: left !important;\n  // width: 35%;\n  padding: 5px;\n  &.title-td {\n    width: 4em;\n  }\n}\n\n.ui-whitespace {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n}\n\np {\n  text-align: left;\n  width: 100%;\n  padding-bottom: 5px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "ui-container ui-center ui-whitespace"
  }, [_c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("第一部分、借款、服务信息及相关明细")]), _vm._v(" "), _c('table', {
    staticClass: "ui-table ui-border-tb"
  }, [_c('tbody', [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('tr', [_c('td', [_vm._v("姓名")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.user.UserinfoValLogin.Name))]), _vm._v(" "), _c('td', [_vm._v("身份证号")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.user.UserinfoValLogin.Idcard))])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('tr', [_c('td', [_vm._v("综合服务费")]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm._f("fbCurrency")(_vm.serviceCharge, '￥', '元')))])]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('tr', [_c('td', [_vm._v("借款本金")]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm._f("fbCurrency")(_vm.user.integraluserlevel.Limit, '￥', '元')))])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('tr', [_c('td', [_vm._v("借款出借日")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.contractInfo.startDate))]), _vm._v(" "), _c('td', [_vm._v("借款到期日")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.contractInfo.endDate))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("起息日")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.contractInfo.startDate))]), _vm._v(" "), _c('td', [_vm._v("还款方式")]), _vm._v(" "), _c('td', [_vm._v("从" + _vm._s(_vm.contractInfo.bank) + "（" + _vm._s(_vm.bankCardShort) + "）自动扣款")])]), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('tr', [_c('td', [_vm._v("还款日")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.contractInfo.endDate))]), _vm._v(" "), _c('td', [_vm._v("还款金额")]), _vm._v(" "), _c('td', [_vm._v("应还款" + _vm._s(_vm._f("fbCurrency")(_vm.user.integraluserlevel.Limit, '￥', '元')))])])])]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("第二部分、本服务协议相关具体条款")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("第1条、名词定义")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("除非上下文另有解释，下列用语具有以下含义：")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("1.1 本协议：指本《借款及服务协议》第一部分、第二部分及所有附件中的任何条款、明细和信息。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("1.2 出借人：指本协议第一部分中列明的出借人，为符合中华人民共和国法律具有完全民事权利能力和民事行为能力，能独立行使和承担协议项下权利义务的自然人。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("1.3 借款人：指本协议第一部分中列明的借款人，为符合中华人民共和国法律具有完全民事权利能力和民事行为能力，能独立行使和承担协议项下权利义务的自然人。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("1.4 服务方：指本协议第一部分中列明的服务方公司")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("1.5 支付机构：指本协议各方之间，作为中介机构提供资金转移服务的银行或第三方支付结算机构。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("1.6 本协议项下出借人、借款人、服务方、支付机构单独称“一方”，合称“各方”。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("第2条、关于各方的权利、义务")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.1 关于出借人、借款人（合称“双方”）的权利义务")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.1.1 双方已认真阅读且理解本协议所有内容，并自愿按本协议的相关约定履行各自的权利义务。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.1.2 出借人向借款人成功出借资金时，本协议生效。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.1.3 双方有义务按服务方要求提供真实、准确，完整的个人信息（包括但不限于电子邮箱、手机号码等），因双方操作不当或填写信息有误造成的法律后果及经济损失均由其个人承担。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.1.4 双方同意由服务方指定的支付机构进行借款的支付及还款操作，借款人在此不可核销的同意服务方直接从借款人借款本金中扣除相应金额，用以支付第一部分所列明的服务费用。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.1.5 自本协议成立之日起，至所有本息、第一部分列明的各项费用及违约金（如有）全部清偿前，双方本人、家庭联系人、居住地址、联系方式、账户信息如出现变更的，应在变更之日起3个自然日内向服务方提供变更后的最新信息，若因任何一方未能及时提供最新信息或提供虚假信息而导致其自身或任何其他第三方损失，均由该未及时提供信息一方承担。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.1.6 就借款人提供的个人信息，及服务方通过合法渠道获取的与其相关的个人信息，服务方有权为本协议目的自行管理使用。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.1.7 成功借款后，服务方依据出借人的委托要求借款人按本协议约定进行还款时，借款人有义务无条件及时按照服务方要求进行还款，并想服务方提供协助。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.1.8 借款人同意，若逾期超过60日未能全额归还借款的，服务方有权利代理出借人通过包括但不限于网络、报刊、电视、征信系统等方式向任何第三方披露借款人逾期还款实事。且借款人特别确认届时服务方可同时披露借款人所提供的或服务方自行获取的借款人的个人信息。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.2 关于服务方的义务")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.2.1 服务方按照本协议约定，恪尽职守，以诚实、信用、谨慎、有效的管理为借款人及出借人提供服务。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.2.2 服务方对借款人和出借人的个人信息以及服务相关的其他信息依法保密。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("2.2.3 出借人在此委托服务方，服务方接受出借人的委托代理出借人根据本协议进行借款回收的管理服务。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("第3条、关于各方的承诺及保证")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("3.1 出借人、借款人在此各自确认为具有完全民事行为权利能力和完全民事行为能力的自然人。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("3.2 出借人保证其出借资金来源均合法。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("3.3 借款人保证其向出借人及服务方所提供的信息都是真实有效的。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("第4条、关于违约责任")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("4.1 若借款人未能按照本协议约定足额还款的，须按照下列计算方式，向出借人支付逾期违约金：")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("逾期违约金＝借款金额*1%/天*逾期天数")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("4.2 若借款人没有足额偿还本息的，所偿还之金额应按照违约金、利息、本金顺序偿还。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("4.3 若擅自更改借款用途，提供虚假资料或者故意隐瞒重要事实，则出借人有权通过服务方提前终止本协议并要求借款人提前归还本金，并要求借款人支付借款本金总额15%的违约金。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("4.4 借款人违反本协议之约定，未经出借人同意，擅自转让本协议借款债务的，借款人应向出借人支付借款本金总额15%的违约金。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("4.5 发生以下一项或几项情形时，均视为借款人违约的：")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("（1）借款人违反其在本协议中的任何承诺或保证内容；")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("（2）借款人的任何财产遭受没收、征用、查封、扣押、冻结等可能影响其履行能力的不利事件，且未及时对各方进行书面通知或不能及时提供有效补救措施的。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("（3）借款人的财务状况出现实质性影响其履约能力的不利变化，且未及时对各方进行书面通知或不能及时提供有效补救措施的")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("4.6 出借人合理判断借款人发生或可能发生违约时，授权服务方采取如下一项或几项措施：")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("（1）立即暂缓、取消发放全部或部分借款。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("（2）宣布已发放的借款提前到期，要求借款人应立即偿还所有应付款项。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("（3）解除本协议")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("（4）采取法律、法规以及本协议约定的其救济措施。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("4.7 因借款人违约导致服务方损失的，须由借款人赔偿。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("第5条、相关文件")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("5.1各方确认并同意服务方提供的与本协议有关的书面文件或电子信息作为本协议的组成部分。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("第6条、关于债权转让")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("6.1 出借人将本协议项下债权转让给第三人的，由出借人委托服务方向借款人在服务方的账户发送债权转让通知书，该通知发送至服务方的借款人账户时视为通知已经送达。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("6.2 在出借人转让债权后，借款人须对新债权人继续履行本协议下其对出借人的所有义务，不得以未接到债权转让通知为由拒绝履行还款义务。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("第7条、关于法律适用及管辖")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("7.1 适用法律。本协议的全部事项，包括但不限于本协议的效力、解释、履行以及争议的解决均受到中国法律管辖：本协议项下任一条款如与中国法律中的强制性规范相抵触，应在该等强制性规范所不禁止的最大限度内进行解释和执行，且任何该等与强制性规范相抵触的约定不应影响本协议其他条款的效力。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("7.2 争议管辖。各方一致同意，如发生争议，不论争议金额大小，均提交北京仲裁委员会适用北京仲裁委员会仲裁规则项下的简易程序进行仲裁。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("7.3 在仲裁期间，本协议中不涉及争议的条款仍须履行，各方均不得以解决争议为由拒不履行其在本协议项下的任何义务。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("第8条、关于其他")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("8.1 本协议项下的附件属于本协议不可分割的组成部分。本协议任何条款的标题仅系为方便援引和阅读而设置，不得被用于解释本协议任何条款的依据。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("8.2 本协议经出借人和借款人在网络平台上以线上点击确认的方式订立，本协议各方委托服务方保管所有与本协议有关的书面文件或电子信息。")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("借款人（盖章或签名）：")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("出借人（盖章或签名）： ")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("服务方（盖章）： ")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  }, [_vm._v("代表人（签名）：")]), _vm._v(" "), _c('p', {
    staticClass: "ui-txt-justify"
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_vm._v("出借人")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', {
    staticClass: "title-td"
  }, [_vm._v("姓名")]), _vm._v(" "), _c('td', [_vm._v("程海燕")]), _vm._v(" "), _c('td', {
    staticClass: "title-td"
  }, [_vm._v("身份证号")]), _vm._v(" "), _c('td', [_vm._v("152326198810063320")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_vm._v("借款人")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_vm._v("服务方及收取费用明细")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_vm._v("服务方")]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("北京极速蜂鸟科技有限公司")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_vm._v("借款明细")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_vm._v("借款年利率")]), _vm._v(" "), _c('td', [_vm._v("0%")]), _vm._v(" "), _c('td', [_vm._v("每日利息")]), _vm._v(" "), _c('td', [_vm._v("￥0")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_vm._v("还款计划")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48db9b74", module.exports)
  }
}

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(425);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("74cd9a77", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-48db9b74&scoped=true!../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoanAgreement.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-48db9b74&scoped=true!../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoanAgreement.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=8.js.map