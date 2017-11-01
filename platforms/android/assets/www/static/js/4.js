webpackJsonp([4],{

/***/ "+JCH":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "fb-bank-cards"
  }, [_vm._m(0), _c('div', {
    staticClass: "fields"
  }, [_c('div', {
    staticClass: "cells"
  }, [_c('mt-cell', {
    staticClass: "pt10",
    attrs: {
      "is-link": "is-link"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.push({
          name: 'bankList'
        })
      }
    }
  }, [_c('div', {
    staticClass: "content",
    slot: "title"
  }, [_c('div', {
    staticClass: "content-icon"
  }, [_c('fb-icon', {
    attrs: {
      "name": _vm.getBankIcon(_vm.defaultBankCard.bankName)
    }
  })], 1), _c('div', {
    staticClass: "content-body"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('h3', [_vm._v(_vm._s(_vm.defaultBankCard.bankName))])]), _c('p', [_vm._v(_vm._s(_vm._f("fbBankCardSpace")(_vm.defaultBankCard.bankCard)))])])])])], 1), _c('router-link', {
    staticClass: "add-bankcard",
    attrs: {
      "to": {
        name: 'addBankStep1',
        params: {
          transitionName: 'slideRightFade'
        }
      }
    }
  }, [_c('em', [_vm._v("+")]), _vm._v("添加银行卡")])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fields-header"
  }, [_c('i', {
    staticClass: "iconfont icon-bank-card3"
  }), _vm._v("银行账户")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3ba384c1", module.exports)
  }
}

/***/ }),

/***/ "/p9w":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("zVvI")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("pFqE"),
  /* template */
  __webpack_require__("+JCH"),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/fn-h5-frontend/src/components/FbBankCards.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FbBankCards.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ba384c1", Component.options)
  } else {
    hotAPI.reload("data-v-3ba384c1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ "4JGu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bankMixins; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_js__ = __webpack_require__("oiih");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_resources_js__ = __webpack_require__("3dbI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);








var bankNameIconList = [{
  name: '农业',
  icon: 'nongye'
}, {
  name: '中国银行',
  icon: 'zhongguo'
}, {
  name: '兴业',
  icon: 'nongye'
}, {
  name: '工商',
  icon: 'gongshang'
}, {
  name: '建设',
  icon: 'jianshen'
}, {
  name: '交通',
  icon: 'jiaotong'
}, {
  name: '北京',
  icon: 'beijing'
}, {
  name: '民生银行',
  icon: 'minsheng'
}, {
  name: '光大',
  icon: 'guangda'
}, {
  name: '上海',
  icon: 'shanghai'
}, {
  name: '中信',
  icon: 'zhongxin'
}, {
  name: '浙商',
  icon: 'zheshang'
}, {
  name: '邮政',
  icon: 'youzhengchuxu'
}, {
  name: '华夏',
  icon: 'huaxia'
}, {
  name: '渤海',
  icon: 'bohai'
}, {
  name: '平安',
  icon: 'pingan'
}, {
  name: '恒丰',
  icon: 'hengfeng'
}, {
  name: '浦发',
  icon: 'pufa'
}, {
  name: '招商',
  icon: 'zhaoshang'
}, {
  name: '广发',
  icon: 'guangfa'
}];

var bankMixins = {
  methods: {
    getBankIcon: function getBankIcon(name) {
      var bank = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_lodash__["find"])(bankNameIconList, function (v) {
        return ~name.indexOf(v.name);
      });
      return (bank ? bank.icon : '') + 'yinhang';
    },
    showSupportBanks: function showSupportBanks() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var bankCards, data;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                bankCards = _this.$store.getters.supportBankCards;

                if (!bankCards.length) {
                  _context.next = 5;
                  break;
                }

                _this.$msgBox('支持银行列表：', bankCards.join('、'));
                _context.next = 10;
                break;

              case 5:
                _context.next = 7;
                return __WEBPACK_IMPORTED_MODULE_5__common_resources_js__["e" /* supportBankCards */].get().then(function (res) {
                  return res.json();
                });

              case 7:
                data = _context.sent;

                _this.$store.commit('updateSupportBankCards', data.data);
                _this.$msgBox('支持银行列表：', data.data.join('、'));

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
};



/* harmony default export */ __webpack_exports__["b"] = ({
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_vuex__["a" /* mapActions */])(['getMsgCode']), bankMixins.methods, {
    getBank: function getBank() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this2.validation.isPassed('model.bankCard')) {
                  setTimeout(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
                    var data;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_5__common_resources_js__["f" /* bankCardInfo */].get({
                              cardNo: _this2.model.bankCard
                            }).then(function (res) {
                              return res.json();
                            });

                          case 2:
                            data = _context2.sent;

                            if (data.code === __WEBPACK_IMPORTED_MODULE_3__constants_js__["a" /* RET_CODE_MAP */].OK) {
                              _this2.model.bankName = data.data.bankName;
                              _this2.model.bankCode = data.data.bankCode;
                            } else {
                              _this2.model.bankName = '自动生成';
                              _this2.model.bankCode = '';
                            }
                            _this2.bankCardNotSupported = data.code === __WEBPACK_IMPORTED_MODULE_3__constants_js__["a" /* RET_CODE_MAP */].BANK_CARD_NOT_SUPPORTED;
                            _this2.$validate('model.bankCard');

                          case 6:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this2);
                  })), 100);
                }

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }))();
    },
    toGetMsgCode: function toGetMsgCode() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var success, data;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this3.$validate(_this3.validatePhoneModel);

              case 2:
                success = _context4.sent;

                if (!success) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 6;
                return _this3.getMsgCode({
                  phone: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_lodash__["get"])(_this3, _this3.validatePhoneModel),
                  label: _this3.$route.meta.captchaSendType || ''
                });

              case 6:
                data = _context4.sent;

                if (data.code === __WEBPACK_IMPORTED_MODULE_3__constants_js__["a" /* RET_CODE_MAP */].OK) {
                  _this3.countdownVisible = true;
                  _this3.$refs.fnCountdown.start();
                }
                _context4.next = 11;
                break;

              case 10:
                _this3.$toast(_this3.validation.firstError(_this3.validatePhoneModel), 'error');

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3);
      }))();
    },
    onCountdownOver: function onCountdownOver() {
      this.countdownVisible = false;
    }
  }),

  watch: {
    'bankCardForShow': function bankCardForShow() {
      this.model.bankCard = this.bankCardForShow = this.bankCardForShow.replace(/\s/g, '');
      this.bankCardForShow = this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g, '$& ');
    },
    'model.bankCard': function modelBankCard() {
      this.bankCardNotSupported = false;
    }
  },

  data: function data() {
    return {
      bankCardForShow: '',
      bankCardNotSupported: false,
      validatePhoneModel: 'user.phone',
      countdownVisible: false
    };
  }
});

/***/ }),

/***/ "4VtY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_resources_js__ = __webpack_require__("3dbI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_repay_repay_mixins_js__ = __webpack_require__("z0iR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_FbBankCards_vue__ = __webpack_require__("/p9w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_FbBankCards_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_FbBankCards_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_js__ = __webpack_require__("oiih");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store__ = __webpack_require__("IcnI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__("PJh5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);















/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_6__views_repay_repay_mixins_js__["a" /* default */]],
  components: {
    FbBankCards: __WEBPACK_IMPORTED_MODULE_8__components_FbBankCards_vue___default.a
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee() {
      var user, data;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = __WEBPACK_IMPORTED_MODULE_10__store__["a" /* default */].getters.user;
              _context.next = 3;
              return __WEBPACK_IMPORTED_MODULE_5__common_resources_js__["a" /* selfContracts */].get({ id: user.currentOngoingContract.id }).then(function (res) {
                return res.json();
              });

            case 3:
              data = _context.sent;

              next(function (vm) {
                if (data.code === __WEBPACK_IMPORTED_MODULE_9__constants_js__["a" /* RET_CODE_MAP */].OK) {
                  vm.model = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()({}, data.data);
                }
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  methods: {
    goChangeBankCard: function goChangeBankCard() {
      this.$router.push({
        name: 'bankList'
      });
    },
    repayConfirm: function repayConfirm() {
      var _this2 = this;

      if (new Date() - __WEBPACK_IMPORTED_MODULE_11_moment___default()(this.model.startDateTs).toDate() <= 86400000) {
        this.$msgBox.confirm('确认提交还款?').then(function (action) {
          if (action === 'confirm') {
            _this2.repay();
          }
        }).catch(function () {});
      } else {
        this.repay();
      }
    }
  },
  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_vuex__["b" /* mapGetters */])(['stateCode'])),
  data: function data() {
    var stateUser = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.$store.getters.user));
    return {
      model: {
        name: stateUser.name,
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

/***/ "Ce9l":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "repay-info"
  }, [_c('div', {
    staticClass: "form"
  }, [_c('section', [_c('div', {
    staticClass: "fields-header"
  }, [_c('i', {
    staticClass: "iconfont icon-fangan"
  }), _vm._v("还款计划"), _c('small', {
    staticClass: "fr loan-agreement"
  }, [_vm._v("查看"), _c('router-link', {
    attrs: {
      "to": {
        name: 'loanAgreement',
        params: {
          transitionName: 'slideRightFade'
        }
      }
    }
  }, [_vm._v("《借款服务协议》")])], 1)]), _c('div', {
    staticClass: "fields"
  }, [_c('mt-cell', {
    attrs: {
      "title": "借款金额",
      "value": _vm._f("fbCurrency")(_vm.model.contractAmount)
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "应还日期",
      "value": _vm._f("fbFalse")(_vm.model.contractEndDate)
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "应还金额",
      "value": _vm._f("fbCurrency")(_vm.model.contractAmount)
    }
  })], 1)]), _c('fb-bank-cards'), _c('div', {
    staticClass: "form-buttons"
  }, [_c('mt-button', {
    staticClass: "mint-button-block",
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.repayConfirm()
      }
    }
  }, [_vm._v("立即还款")])], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2cbe6a49", module.exports)
  }
}

/***/ }),

/***/ "Tihm":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")();
// imports


// module
exports.push([module.i, "\n.fb-bank-cards .add-bankcard {\n  font-size: 15px;\n  padding: 15px 10px;\n  text-align: center;\n  background: white;\n  color: inherit;\n  display: block;\n  background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);\n  background-size: 100% 1px;\n  background-repeat: no-repeat;\n  background-position: top;\n}\n.fb-bank-cards .add-bankcard.no-border {\n    background-image: none;\n}\n.fb-bank-cards .add-bankcard:active {\n    background: #f2f2f2;\n}\n.fb-bank-cards .add-bankcard em {\n    font-size: 1.2em;\n    margin-right: .2em;\n}\n.fb-bank-cards .mint-cell:active {\n  background-color: #f2f2f2;\n}\n.fb-bank-cards .mint-cell-mask {\n  display: none;\n}\n.fb-bank-cards .mint-radiolist-label {\n  padding: 0 0 12px 2px;\n  font-size: 14px;\n  margin-top: -5px;\n  float: left;\n  color: #4790fe;\n}\n.fb-bank-cards .mint-radio-input:checked + .mint-radio-core {\n  background-color: #4790fe;\n  border-color: #4790fe;\n}\n.fb-bank-cards .mint-radio-label {\n  color: #4790fe;\n}\n.fb-bank-cards .mint-radio-core {\n  border-color: #4790fe;\n}\n.fb-bank-cards .title {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.fb-bank-cards .content-icon {\n  padding-right: 19px;\n}\n.fb-bank-cards .content-icon .icon-svg {\n    width: 39px;\n    height: 39px;\n}\n.fb-bank-cards .content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1.8em;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 10px 0;\n}\n.fb-bank-cards .content h3 {\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    font-size: 15px;\n    font-weight: normal;\n}\n.fb-bank-cards .content p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #666;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/fn-h5-frontend/src/components/src/views/bank/fb-bank-cards.scss","/Users/luxueyan/mine/github/fn-h5-frontend/src/components/src/assets/scss/_variables.scss"],"names":[],"mappings":";AACA;EAEI,gBCiBc;EDhBd,mBAAkB;EAClB,mBAAkB;EAClB,kBAAiB;EACjB,eAAc;EACd,eAAc;EACd,+EAA0F;EAC1F,0BAAyB;EACzB,6BAA4B;EAC5B,yBAAwB;CAWzB;AAtBH;IAaM,uBAAsB;CACvB;AAdL;IAgBM,oBAA6B;CAC9B;AAjBL;IAmBM,iBAAgB;IAChB,mBAAkB;CACnB;AArBL;EAyBM,0BAAmC;CACpC;AA1BL;EA6BI,cAAa;CACd;AA9BH;EAgCI,sBAAqB;EACrB,gBAAe;EACf,iBAAgB;EAChB,YAAW;EACX,eChCmB;CDiCpB;AArCH;EAuCI,0BCnCmB;EDoCnB,sBCpCmB;CDqCpB;AAzCH;EA2CI,eCvCmB;CDwCpB;AA5CH;EA8CI,sBC1CmB;CD2CpB;AA/CH;EAiDI,sBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,4BAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;CACpB;AAnDH;EAqDI,oBAAmB;CAKpB;AA1DH;IAuDM,YAAW;IACX,aAAY;CACb;AAzDL;EA4DI,sBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,4BAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,mBAAkB;EAMlB,gBAAe;EACf,iBAAgB;EAChB,gBAAe;CAMhB;AA5EH;IAgEM,gBAAO;QAAP,YAAO;YAAP,QAAO;IACP,gBC9CY;ID+CZ,oBAAmB;CACpB;AAnEL;IAwEM,iBAAgB;IAChB,wBAAuB;IACvB,YCzEiB;CD0ElB","file":"FbBankCards.vue","sourcesContent":["@import '~assets/scss/_variables.scss';\n.fb-bank-cards {\n  .add-bankcard {\n    font-size: $font-size-m;\n    padding: 15px 10px;\n    text-align: center;\n    background: white;\n    color: inherit;\n    display: block;\n    background-image: linear-gradient(0deg, $border-color, $border-color 50%, transparent 50%);\n    background-size: 100% 1px;\n    background-repeat: no-repeat;\n    background-position: top;\n    &.no-border {\n      background-image: none;\n    }\n    &:active {\n      background: darken(white, 5%);\n    }\n    em {\n      font-size: 1.2em;\n      margin-right: .2em;\n    }\n  }\n  .mint-cell {\n    &:active {\n      background-color: darken(white, 5%);\n    }\n  }\n  .mint-cell-mask {\n    display: none;\n  }\n  .mint-radiolist-label {\n    padding: 0 0 12px 2px;\n    font-size: 14px;\n    margin-top: -5px;\n    float: left;\n    color: $primary-color;\n  }\n  .mint-radio-input:checked+.mint-radio-core {\n    background-color: $primary-color;\n    border-color: $primary-color;\n  }\n  .mint-radio-label {\n    color: $primary-color;\n  }\n  .mint-radio-core {\n    border-color: $primary-color;\n  }\n  .title {\n    display: flex;\n    align-items: center;\n  }\n  .content-icon {\n    padding-right: 19px;\n    .icon-svg {\n      width: 39px;\n      height: 39px;\n    }\n  }\n  .content {\n    display: flex;\n    align-items: center;\n    line-height: 1.8em;\n    h3 {\n      flex: 1;\n      font-size: $font-size-m;\n      font-weight: normal;\n    }\n    font-size: 14px;\n    overflow: hidden;\n    padding: 10px 0;\n    p {\n      overflow: hidden;\n      text-overflow: ellipsis; // padding-left: 11px;\n      color: $minor-font-color;\n    }\n  }\n}\n","// ----- 颜色 -----\n$primary-font-color: #333; // 文字颜色\n$minor-font-color: #666; // 文字次颜色\n$primary-bg-color: #efeff4; // 主要背景色\n$minor-bg-color: #eeefef; // 次要背景色\n$primary-color: #4790fe; // 主色\n$error-color: #f44336; // 错误色\n$warning-color: #ffc107; // 警告色\n$font-color-em: #3586ff; // 强调字体颜色，偏蓝\n$border-color: #d9d9d9; // 边框颜色\n$gray-color: #888;\n$mid-gray-color: #a0a0a0;\n$small-gray-color: #fafafa;\n$placeholder-color: #b2b2b2;\n$header-bg-color: #1c1c1f;\n\n// ----- 文字尺寸 -----\n$font-size-xxxl: 25px;\n$font-size-xxl: 20px;\n$font-size-xl: 17px;\n$font-size-m: 15px;\n$font-size-s: 14px;\n$font-size-xs: 13px;\n$font-size-xxs: 12px;\n$font-size-xxxs: 10px;\n\n@mixin font-size-xxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.9167);\n}\n@mixin font-size-xxxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.8333);\n}\n\n// ----- 尺寸 -----\n$header-height: 40px; // 头部高度\n\n// ----- mint ui color颜色 -----\n$el-blue: #20A0FF;\n$el-light-blue: #58B7FF;\n$el-dark-blue: #1D8CE0;\n$el-green: #13CE66;\n$el-orange: #df9a51;\n$el-yellow: #ffcc00;\n$el-red: #fe6252;\n$el-black: #1F2D3D;\n$el-light-black: #324057;\n$el-extra-light-black: #475669;\n$el-silver: #8492A6;\n$el-light-silver:#99A9BF;\n$el-extra-light-silver: #C0CCDA;\n$el-gray:#D3DCE6;\n$el-light-gray:#E5E9F2;\n$el-extra-light-gray:#EFF2F7;\n$el-white: white;\n$el-dark-white: #F9FAFC;\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "k+kw":
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("4VtY"),
  /* template */
  __webpack_require__("Ce9l"),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/fn-h5-frontend/src/views/repay/RepayInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RepayInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cbe6a49", Component.options)
  } else {
    hotAPI.reload("data-v-2cbe6a49", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ "pFqE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_resources_js__ = __webpack_require__("3dbI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_common_mixin_js__ = __webpack_require__("4JGu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_js__ = __webpack_require__("oiih");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);









/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_3__views_common_mixin_js__["a" /* bankMixins */]],
  mounted: function mounted() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var data;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __WEBPACK_IMPORTED_MODULE_2__common_resources_js__["d" /* bankCards */].get().then(function (res) {
                return res.json();
              });

            case 2:
              data = _context.sent;

              if (data.code === __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* RET_CODE_MAP */].OK) {
                _this.defaultBankCard = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_lodash__["find"])(data.data.bankCards, function (bd) {
                  return bd.isDefault;
                });
                _this.$store.commit('updateBankCardsCount', data.data.bankCards.length);
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  data: function data() {
    return {
      defaultBankCard: {
        bankName: '',
        bankCard: ''
      }
    };
  }
});

/***/ }),

/***/ "z0iR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_resources_js__ = __webpack_require__("3dbI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_js__ = __webpack_require__("oiih");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__("NYxO");







/* harmony default export */ __webpack_exports__["a"] = ({
  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex__["c" /* mapMutations */])(['updateStateCode']), {
    repay: function repay() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var data, status;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__common_resources_js__["c" /* repayments */].save({
                  contractId: _this.$store.getters.user.currentOngoingContract.id
                }).then(function (res) {
                  return res.json();
                });

              case 2:
                data = _context.sent;

                if (data.code === __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* RET_CODE_MAP */].OK) {
                  status = data.data.repaymentStatus;

                  if (status === 0) {
                    _this.updateStateCode(__WEBPACK_IMPORTED_MODULE_4__constants_js__["b" /* CUST_STATE_CODE_MAP */].REPAYING);
                    _this.$router.push({
                      name: 'repaying'
                    });
                  } else if (status === 2) {
                    _this.$toast('支付系统升级中！', 'error');
                  } else {
                    _this.$toast('抱歉，系统繁忙', 'error');
                  }
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  })
});

/***/ }),

/***/ "zVvI":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Tihm");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7988c2d4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3ba384c1!../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FbBankCards.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3ba384c1!../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FbBankCards.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=4.js.map