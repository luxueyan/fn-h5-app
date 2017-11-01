webpackJsonp([6],{

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

/***/ "DND8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")();
// imports


// module
exports.push([module.i, "\n.login input::-moz-placeholder {\n  font-size: 17px !important;\n}\n.login input:-ms-input-placeholder {\n  font-size: 17px !important;\n}\n.login input::-webkit-input-placeholder {\n  font-size: 17px !important;\n}\n.login .mint-cell-title {\n  width: 30px !important;\n}\n.login .mint-cell-title .iconfont {\n    color: #c0cad8;\n    font-size: 20px;\n}\n.login .mint-cell {\n  min-height: 60px;\n}\n.login .mint-cell:first-child .mint-cell-wrapper {\n    background-image: none;\n}\n.login .mint-cell:last-child {\n    background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);\n    background-size: 100% 1px;\n    background-repeat: no-repeat;\n    background-position: bottom;\n}\n.login .mint-button {\n  height: 50px;\n  font-size: 17px;\n}\n.login .mint-field-core {\n  font-size: 17px;\n}\n.login .mint-field-other .mint-button {\n  height: 35px;\n  width: 85px;\n  margin-left: 3px;\n  font-size: 12px;\n}\n.login .form-buttons {\n  padding: 10px 0;\n}\n.login .login-form {\n  padding: 37px 25px 0;\n}\n.login .mint-cell-wrapper {\n  padding: 0;\n  font-size: 17px;\n}\n.login .form-buttons {\n  margin-top: 37px;\n}\n.login .note-line {\n  color: #666;\n  font-size: 14px;\n  padding: 20px 0;\n}\n.login .logo {\n  background: white;\n  text-align: center;\n  padding: 10px;\n}\n.login .logo img {\n    max-width: 50%;\n    max-width: 30vh;\n}\n.login .logo small {\n    display: block;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/fn-h5-frontend/src/views/common/src/views/common/Login.vue","/Users/luxueyan/mine/github/fn-h5-frontend/src/views/common/src/assets/scss/_variables.scss"],"names":[],"mappings":";AAuHA;EAEI,2BAAkC;CACnC;AAHH;EAMI,2BAAkC;CACnC;AAPH;EAUI,2BAAkC;CACnC;AAXH;EAaI,uBAAqB;CAKtB;AAlBH;IAeM,eAAc;IACd,gBAAe;CAChB;AAjBL;EAoBI,iBAAgB;CAYjB;AAhCH;IAuBQ,uBAAsB;CACvB;AAxBP;IA2BM,+EAA0F;IAC1F,0BAAyB;IACzB,6BAA4B;IAC5B,4BAA2B;CAC5B;AA/BL;EAkCI,aAAY;EACZ,gBCvIe;CDwIhB;AApCH;EAsCI,gBC1Ie;CD2IhB;AAvCH;EA0CM,aAAY;EACZ,YAAW;EACX,iBAAgB;EAChB,gBC7Ic;CD8If;AA9CL;EAiDI,gBAAe;CAChB;AAlDH;EAoDI,qBAAoB;CACrB;AArDH;EAuDI,WAAU;EACV,gBC5Je;CD6JhB;AAzDH;EA2DI,iBAAgB;CACjB;AA5DH;EA8DI,YCnLmB;EDoLnB,gBCjKc;EDkKd,gBAAe;CAChB;AAjEH;EAmEI,kBAAiB;EACjB,mBAAkB;EAClB,cAAa;CAQd;AA7EH;IAuEM,eAAc;IACd,gBAAe;CAChB;AAzEL;IA2EM,eAAc;CACf","file":"Login.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~assets/scss/_variables.scss';\n.login {\n  input::-moz-placeholder {\n    font-size: $font-size-xl!important;\n  }\n\n  input:-ms-input-placeholder {\n    font-size: $font-size-xl!important;\n  }\n\n  input::-webkit-input-placeholder {\n    font-size: $font-size-xl!important;\n  }\n  .mint-cell-title {\n    width: 30px!important;\n    .iconfont {\n      color: #c0cad8;\n      font-size: 20px;\n    }\n  }\n  .mint-cell {\n    min-height: 60px;\n    &:first-child {\n      .mint-cell-wrapper {\n        background-image: none;\n      }\n    }\n    &:last-child {\n      background-image: linear-gradient(0deg, $border-color, $border-color 50%, transparent 50%);\n      background-size: 100% 1px;\n      background-repeat: no-repeat;\n      background-position: bottom;\n    }\n  }\n  .mint-button {\n    height: 50px;\n    font-size: $font-size-xl;\n  }\n  .mint-field-core {\n    font-size: $font-size-xl;\n  }\n  .mint-field-other {\n    .mint-button {\n      height: 35px;\n      width: 85px;\n      margin-left: 3px;\n      font-size: $font-size-xxs;\n    }\n  }\n  .form-buttons {\n    padding: 10px 0;\n  }\n  .login-form {\n    padding: 37px 25px 0;\n  }\n  .mint-cell-wrapper {\n    padding: 0;\n    font-size: $font-size-xl;\n  }\n  .form-buttons {\n    margin-top: 37px;\n  }\n  .note-line {\n    color: $minor-font-color;\n    font-size: $font-size-s;\n    padding: 20px 0;\n  }\n  .logo {\n    background: white;\n    text-align: center; // background: white;\n    padding: 10px;\n    img {\n      max-width: 50%;\n      max-width: 30vh;\n    }\n    small {\n      display: block;\n    }\n  }\n}\n","// ----- 颜色 -----\n$primary-font-color: #333; // 文字颜色\n$minor-font-color: #666; // 文字次颜色\n$primary-bg-color: #efeff4; // 主要背景色\n$minor-bg-color: #eeefef; // 次要背景色\n$primary-color: #4790fe; // 主色\n$error-color: #f44336; // 错误色\n$warning-color: #ffc107; // 警告色\n$font-color-em: #3586ff; // 强调字体颜色，偏蓝\n$border-color: #d9d9d9; // 边框颜色\n$gray-color: #888;\n$mid-gray-color: #a0a0a0;\n$small-gray-color: #fafafa;\n$placeholder-color: #b2b2b2;\n$header-bg-color: #1c1c1f;\n\n// ----- 文字尺寸 -----\n$font-size-xxxl: 25px;\n$font-size-xxl: 20px;\n$font-size-xl: 17px;\n$font-size-m: 15px;\n$font-size-s: 14px;\n$font-size-xs: 13px;\n$font-size-xxs: 12px;\n$font-size-xxxs: 10px;\n\n@mixin font-size-xxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.9167);\n}\n@mixin font-size-xxxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.8333);\n}\n\n// ----- 尺寸 -----\n$header-height: 40px; // 头部高度\n\n// ----- mint ui color颜色 -----\n$el-blue: #20A0FF;\n$el-light-blue: #58B7FF;\n$el-dark-blue: #1D8CE0;\n$el-green: #13CE66;\n$el-orange: #df9a51;\n$el-yellow: #ffcc00;\n$el-red: #fe6252;\n$el-black: #1F2D3D;\n$el-light-black: #324057;\n$el-extra-light-black: #475669;\n$el-silver: #8492A6;\n$el-light-silver:#99A9BF;\n$el-extra-light-silver: #C0CCDA;\n$el-gray:#D3DCE6;\n$el-light-gray:#E5E9F2;\n$el-extra-light-gray:#EFF2F7;\n$el-white: white;\n$el-dark-white: #F9FAFC;\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "FTgb":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("WO+M")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("zx+b"),
  /* template */
  __webpack_require__("QEuU"),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/fn-h5-frontend/src/views/common/Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e9af5256", Component.options)
  } else {
    hotAPI.reload("data-v-e9af5256", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ "QEuU":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "login"
  }, [_c('form', {
    staticClass: "login-form",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit()
      }
    }
  }, [_c('div', {
    staticClass: "fields"
  }, [_c('fb-field', {
    attrs: {
      "label": "手机号",
      "placeholder": "请输入您的手机号",
      "state": _vm.getFieldState('user.phone')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'user.phone')
      }
    },
    model: {
      value: (_vm.user.phone),
      callback: function($$v) {
        _vm.user.phone = $$v
      },
      expression: "user.phone"
    }
  }, [_c('span', {
    slot: "label"
  }, [_c('i', {
    staticClass: "iconfont icon-user-solid2"
  })])]), _c('fb-field', {
    attrs: {
      "label": "手机号",
      "placeholder": "请输入验证码",
      "state": _vm.getFieldState('user.captcha')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'user.captcha')
      }
    },
    model: {
      value: (_vm.user.captcha),
      callback: function($$v) {
        _vm.user.captcha = $$v
      },
      expression: "user.captcha"
    }
  }, [_c('span', {
    slot: "label"
  }, [_c('i', {
    staticClass: "iconfont icon-verification"
  })]), _c('mt-button', {
    attrs: {
      "type": "default",
      "disabled": _vm.countdownVisible
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.toGetMsgCode()
      }
    }
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.countdownVisible),
      expression: "!countdownVisible"
    }]
  }, [_vm._v("获取验证码")]), _c('fb-countdown', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.countdownVisible),
      expression: "countdownVisible"
    }],
    ref: "fnCountdown",
    on: {
      "countdown-over": function($event) {
        _vm.onCountdownOver()
      }
    }
  })], 1)], 1)], 1), _c('div', {
    staticClass: "form-buttons"
  }, [_c('mt-button', {
    staticClass: "mint-button-block",
    attrs: {
      "type": "primary",
      "size": "large"
    }
  }, [_vm._v("立即登录")]), _c('div', {
    staticClass: "note-line"
  }, [_c('fb-checkbox', {
    attrs: {
      "value": false,
      "state": _vm.getFieldState('agreement')
    },
    model: {
      value: (_vm.agreement),
      callback: function($$v) {
        _vm.agreement = $$v
      },
      expression: "agreement"
    }
  }, [_c('span', {
    staticClass: "pl10"
  }, [_vm._v("我已阅读并同意")]), _c('router-link', {
    attrs: {
      "to": {
        name: 'registerAgreement',
        params: {
          transitionName: 'slideRightFade'
        }
      }
    }
  }, [_vm._v("《注册与服务合同》")])], 1)], 1)], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e9af5256", module.exports)
  }
}

/***/ }),

/***/ "WO+M":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("DND8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("0e1720b8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e9af5256!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e9af5256!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "nWjG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_vue_validator__ = __webpack_require__("IXCS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_vue_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_simple_vue_validator__);

var Validator = __WEBPACK_IMPORTED_MODULE_0_simple_vue_validator___default.a.Validator;

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    Validator: Validator,
    validate: Validator.value,
    getFieldState: function getFieldState(field) {
      if (this.validation.hasError(field)) {
        return 'error';
      } else if (this.validation.isPassed(field)) {
        return 'success';
      }
      return '';
    },
    showFieldError: function showFieldError(event, field) {
      var et = event.target;
      if (et.classList.contains('mintui-field-error') && et.parentNode.classList.contains('mint-field-state')) {
        this.$toast(this.validation.firstError(field), 'error');
      }
    }
  }
});

/***/ }),

/***/ "zx+b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_validator_mixin_js__ = __webpack_require__("nWjG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_common_mixin_js__ = __webpack_require__("4JGu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_js__ = __webpack_require__("oiih");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__storage__ = __webpack_require__("VuIw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__("IcnI");












/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_4__views_common_mixin_js__["b" /* default */], __WEBPACK_IMPORTED_MODULE_3__views_validator_mixin_js__["a" /* default */]],
  validators: {
    'agreement': function agreement(value) {
      var _this = this;

      return this.validate(value).custom(function () {
        if (!_this.agreement) {
          return '请阅读并同意《注册与服务合同》';
        }
      });
    },
    'user.phone': function userPhone(value) {
      return this.validate(value).required('请输入手机号').digit('请正确输入手机号').regex('^1[3-9]\\d{9}$', '请正确输入手机号');
    },
    'user.captcha': function userCaptcha(value) {
      return this.validate(value).required('请输入验证码').digit('请正确输入验证码').length(6, '请正确输入验证码');
    }
  },

  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!to.query.accesstoken) {
                _context.next = 8;
                break;
              }

              to.query.accesstoken;
              __WEBPACK_IMPORTED_MODULE_8__store__["a" /* default */].dispatch('updateToken', to.query.accesstoken);
              _context.next = 5;
              return __WEBPACK_IMPORTED_MODULE_8__store__["a" /* default */].dispatch('getUser');

            case 5:
              next({
                name: to.query.to || 'authorizedTip'
              });
              _context.next = 9;
              break;

            case 8:
              next();

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }))();
  },
  mounted: function mounted() {
    this.redirect = decodeURIComponent(this.$route.query.redirect || '');

    this.user.phone = this.$store.getters.user.phone || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__storage__["a" /* read */])(__WEBPACK_IMPORTED_MODULE_5__constants_js__["d" /* STORE_KEY_LAST_LOGINED_PHONE */]) || '';
  },


  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_vuex__["a" /* mapActions */])(['login', 'getUser', 'updateToken']), {
    submit: function submit() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var success, data, selfLocation;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.$validate();

              case 2:
                success = _context2.sent;

                if (!success) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 6;
                return _this3.login(_this3.user);

              case 6:
                data = _context2.sent;

                if (data.code === __WEBPACK_IMPORTED_MODULE_5__constants_js__["a" /* RET_CODE_MAP */].OK) {
                  if (false) {
                    selfLocation = location.href.replace(/(https?:\/\/[^/]+)\/?.*/, '$1') + _this3.redirect;

                    location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + process.env.WX_APPID + '&redirect_uri=' + encodeURIComponent(selfLocation) + '&response_type=code&scope=snsapi_base&#wechat_redirect';
                  } else {
                    _this3.$router.push({
                      path: _this3.redirect || '/'
                    });
                  }
                }
                _context2.next = 11;
                break;

              case 10:
                _this3.$toast(_this3.validation.firstError(), 'error');

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    }
  }),

  data: function data() {
    return {
      redirect: null,
      agreement: false,
      user: {
        phone: '',
        captcha: ''
      }
    };
  }
});

/***/ })

});
//# sourceMappingURL=6.js.map