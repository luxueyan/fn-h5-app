webpackJsonp([16],{

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(418),
  /* template */
  __webpack_require__(460),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/repay/RepayInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RepayInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-97117f3a", Component.options)
  } else {
    hotAPI.reload("data-v-97117f3a", Component.options)
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

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_resources_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(44);





/* harmony default export */ __webpack_exports__["a"] = ({
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapMutations */])(['updateStateCode']), {
    repay: function repay() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_1__common_resources_js__["f" /* CustRepayment */].get().then(function (res) {
        return res.json();
      }).then(function (data) {
        if (data.ret === __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* RET_CODE_MAP */].OK) {
          _this.updateStateCode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* CUST_STATE_CODE_MAP */].REPAYING);
          _this.$router.push({
            name: 'repaying'
          });
        }
      });
    }
  })
});

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_resources_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__repay_mixins_js__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_adaptors_js__ = __webpack_require__(387);










/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_4__repay_mixins_js__["a" /* default */]],
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    __WEBPACK_IMPORTED_MODULE_3__common_resources_js__["a" /* QueryContract */].get().then(function (res) {
      return res.json();
    }).then(function (data) {
      next(function (vm) {
        if (data.data.content) {
          __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(vm.model, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_adaptors_js__["a" /* contractInfo */])(data.data.content));
          vm.bankCardForShow = vm.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g, '$& ');
        }
      });
    });
  },

  methods: {
    goChangeBankCard: function goChangeBankCard() {
      this.$router.push({
        name: 'changeBankCardStep1'
      });
    }
  },
  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapGetters */])(['stateCode'])),
  data: function data() {
    var stateUser = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.$store.getters.user));
    return {
      bankCardForShow: '',
      model: {
        name: stateUser.UserinfoValLogin.Name,
        idCard: null,
        bankCard: null,
        bank: '',
        bankPhone: null
      },
      user: stateUser
    };
  }
});

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "borrow-info"
  }, [_c('div', {
    staticClass: "form"
  }, [_c('div', {
    staticClass: "fields-header"
  }, [_vm._v("借款方案"), _c('small', {
    staticClass: "fr loan-agreement"
  }, [_vm._v("查看"), _c('router-link', {
    attrs: {
      "to": {
        name: 'loanAgreement'
      }
    }
  }, [_vm._v("《借款服务协议》")])], 1)]), _c('div', {
    staticClass: "fields"
  }, [_c('mt-cell', {
    attrs: {
      "title": "借款金额",
      "value": _vm._f("fbCurrency")(_vm.model.loanAmount, '', '元')
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "应还日期",
      "value": _vm._f("fbFalse")(_vm.model.endDate)
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "应还金额",
      "value": _vm._f("fbCurrency")(_vm.model.totalAmount, '', '元')
    }
  })], 1), _c('div', {
    staticClass: "fields-header"
  }, [_vm._v("账户信息")]), _c('div', {
    staticClass: "fields"
  }, [_c('mt-cell', {
    attrs: {
      "title": "姓名",
      "value": _vm._f("fbFalse")(_vm.user.UserinfoValLogin.Name)
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "身份证号",
      "value": _vm.model.idCard
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "银行卡号"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.bankCardForShow))])]), _c('mt-cell', {
    attrs: {
      "title": "开户行",
      "value": _vm._f("fbFalse")(_vm.model.bank)
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "银行预留手机号",
      "value": _vm.model.bankPhone
    }
  }), _c('mt-cell', {
    nativeOn: {
      "click": function($event) {
        _vm.goChangeBankCard()
      }
    }
  }, [_c('a', {
    staticClass: "small"
  }, [_vm._v("变更银行卡")])])], 1), _c('div', {
    staticClass: "form-buttons fixed"
  }, [_c('mt-button', {
    staticClass: "mint-button-block",
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.repay()
      }
    }
  }, [_vm._v("立即还款")])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-97117f3a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=16.js.map