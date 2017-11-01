webpackJsonp([2],{

/***/ "+FvN":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("B7du")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("tswc"),
  /* template */
  __webpack_require__("jOPC"),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/fn-h5-frontend/src/views/borrow/BorrowerInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BorrowerInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70935d2a", Component.options)
  } else {
    hotAPI.reload("data-v-70935d2a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

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

/***/ "1Yjo":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")();
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.shiyi-option-msgbox h3,\n.shiyi-option-msgbox h4 {\n  font-weight: 400;\n  font-size: 16px;\n}\n.shiyi-option-msgbox .mint-msgbox-btns {\n  height: auto;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.shiyi-option-msgbox .mint-msgbox-btn {\n  line-height: 1em;\n  padding: 12px 0;\n}\n.shiyi-option-msgbox .mint-msgbox-cancel,\n.shiyi-option-msgbox .mint-msgbox-confirm {\n  border-right: 0;\n  width: 100%;\n  color: #4790fe;\n}\n.shiyi-option-msgbox .mint-msgbox-cancel small,\n  .shiyi-option-msgbox .mint-msgbox-confirm small {\n    color: #4790fe;\n}\n.shiyi-option-msgbox .mint-msgbox-cancel {\n  border-bottom: 1px solid #d9d9d9;\n}\n.borrow-info .icon-sale7 {\n  color: #f44336;\n  font-size: 12px;\n  display: inline-block;\n  padding: 1px 5px;\n  border: 1px solid #f44336;\n  border-radius: 4px;\n}\n.borrow-info .icon-sale7:before {\n    border: 1px solid #f44336;\n}\n.borrow-info .icon-sale7:after {\n    font-size: 12px;\n    content: '7\\6298';\n}\n.borrow-info .loan-agreement {\n  margin-top: 5px;\n}\n.borrow-info small.note {\n  display: block;\n  padding: 10px;\n  color: #888;\n  line-height: 1.8em;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/fn-h5-frontend/src/views/borrow/BorrowerInfo.vue","/Users/luxueyan/mine/github/fn-h5-frontend/src/views/borrow/src/views/borrow/BorrowerInfo.vue","/Users/luxueyan/mine/github/fn-h5-frontend/src/views/borrow/src/assets/scss/_variables.scss"],"names":[],"mappings":";AAAA,iBAAiB;ACsUjB;;EAGI,iBAAgB;EAChB,gBAAe;CAChB;AALH;EAOI,aAAY;EACZ,+BAAsB;MAAtB,2BAAsB;UAAtB,uBAAsB;CACvB;AATH;EAWI,iBAAgB;EAChB,gBAAe;CAChB;AAbH;;EAgBI,gBAAe;EACf,YAAW;EACX,eCnVmB;CDuVpB;AAtBH;;IAoBM,eCrViB;CDsVlB;AArBL;EAwBI,iCCrVkB;CDsVnB;AAIH;EAEI,eC/ViB;EDgWjB,gBAAe;EACf,sBAAqB;EACrB,iBAAgB;EAChB,0BCnWiB;EDoWjB,mBAAkB;CASnB;AAhBH;IASM,0BCtWe;CDuWhB;AAVL;IAYM,gBAAe;IAEf,kBAAS;CAAM;AAdrB;EAkBI,gBAAe;CAChB;AAnBH;EAuBM,eAAc;EACd,cAAa;EACb,YAAW;EACX,mBAAkB;CACnB","file":"BorrowerInfo.vue","sourcesContent":["@charset \"UTF-8\";\n.shiyi-option-msgbox h3,\n.shiyi-option-msgbox h4 {\n  font-weight: 400;\n  font-size: 16px; }\n\n.shiyi-option-msgbox .mint-msgbox-btns {\n  height: auto;\n  flex-direction: column; }\n\n.shiyi-option-msgbox .mint-msgbox-btn {\n  line-height: 1em;\n  padding: 12px 0; }\n\n.shiyi-option-msgbox .mint-msgbox-cancel,\n.shiyi-option-msgbox .mint-msgbox-confirm {\n  border-right: 0;\n  width: 100%;\n  color: #4790fe; }\n  .shiyi-option-msgbox .mint-msgbox-cancel small,\n  .shiyi-option-msgbox .mint-msgbox-confirm small {\n    color: #4790fe; }\n\n.shiyi-option-msgbox .mint-msgbox-cancel {\n  border-bottom: 1px solid #d9d9d9; }\n\n.borrow-info .icon-sale7 {\n  color: #f44336;\n  font-size: 12px;\n  display: inline-block;\n  padding: 1px 5px;\n  border: 1px solid #f44336;\n  border-radius: 4px; }\n  .borrow-info .icon-sale7:before {\n    border: 1px solid #f44336; }\n  .borrow-info .icon-sale7:after {\n    font-size: 12px;\n    content: '7折'; }\n\n.borrow-info .loan-agreement {\n  margin-top: 5px; }\n\n.borrow-info small.note {\n  display: block;\n  padding: 10px;\n  color: #888;\n  line-height: 1.8em; }\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~assets/scss/_variables.scss';\n.shiyi-option-msgbox {\n  h3,\n  h4 {\n    font-weight: 400;\n    font-size: 16px;\n  }\n  .mint-msgbox-btns {\n    height: auto;\n    flex-direction: column;\n  }\n  .mint-msgbox-btn {\n    line-height: 1em;\n    padding: 12px 0; // min-height: 35px;\n  }\n  .mint-msgbox-cancel,\n  .mint-msgbox-confirm {\n    border-right: 0;\n    width: 100%;\n    color: $primary-color;\n    small {\n      color: $primary-color;\n    }\n  }\n  .mint-msgbox-cancel {\n    border-bottom: 1px solid $border-color;\n  }\n}\n\n\n.borrow-info {\n  .icon-sale7 {\n    color: $error-color;\n    font-size: 12px;\n    display: inline-block;\n    padding: 1px 5px;\n    border: 1px solid $error-color;\n    border-radius: 4px;\n    &:before {\n      border: 1px solid $error-color;\n    }\n    &:after {\n      font-size: 12px;\n\n      content: '7折';\n    }\n  }\n  .loan-agreement {\n    margin-top: 5px;\n  }\n\n  small {\n    &.note {\n      display: block;\n      padding: 10px;\n      color: #888;\n      line-height: 1.8em;\n    }\n  }\n}\n","// ----- 颜色 -----\n$primary-font-color: #333; // 文字颜色\n$minor-font-color: #666; // 文字次颜色\n$primary-bg-color: #efeff4; // 主要背景色\n$minor-bg-color: #eeefef; // 次要背景色\n$primary-color: #4790fe; // 主色\n$error-color: #f44336; // 错误色\n$warning-color: #ffc107; // 警告色\n$font-color-em: #3586ff; // 强调字体颜色，偏蓝\n$border-color: #d9d9d9; // 边框颜色\n$gray-color: #888;\n$mid-gray-color: #a0a0a0;\n$small-gray-color: #fafafa;\n$placeholder-color: #b2b2b2;\n$header-bg-color: #1c1c1f;\n\n// ----- 文字尺寸 -----\n$font-size-xxxl: 25px;\n$font-size-xxl: 20px;\n$font-size-xl: 17px;\n$font-size-m: 15px;\n$font-size-s: 14px;\n$font-size-xs: 13px;\n$font-size-xxs: 12px;\n$font-size-xxxs: 10px;\n\n@mixin font-size-xxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.9167);\n}\n@mixin font-size-xxxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.8333);\n}\n\n// ----- 尺寸 -----\n$header-height: 40px; // 头部高度\n\n// ----- mint ui color颜色 -----\n$el-blue: #20A0FF;\n$el-light-blue: #58B7FF;\n$el-dark-blue: #1D8CE0;\n$el-green: #13CE66;\n$el-orange: #df9a51;\n$el-yellow: #ffcc00;\n$el-red: #fe6252;\n$el-black: #1F2D3D;\n$el-light-black: #324057;\n$el-extra-light-black: #475669;\n$el-silver: #8492A6;\n$el-light-silver:#99A9BF;\n$el-extra-light-silver: #C0CCDA;\n$el-gray:#D3DCE6;\n$el-light-gray:#E5E9F2;\n$el-extra-light-gray:#EFF2F7;\n$el-white: white;\n$el-dark-white: #F9FAFC;\n"],"sourceRoot":""}]);

// exports


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

/***/ "5zde":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("zQR9");
__webpack_require__("qyJz");
module.exports = __webpack_require__("FeBl").Array.from;

/***/ }),

/***/ "B7du":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1Yjo");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("f96a7bae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-70935d2a!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BorrowerInfo.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-70935d2a!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BorrowerInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "Gu7T":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("c/Tr");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "Tihm":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")();
// imports


// module
exports.push([module.i, "\n.fb-bank-cards .add-bankcard {\n  font-size: 15px;\n  padding: 15px 10px;\n  text-align: center;\n  background: white;\n  color: inherit;\n  display: block;\n  background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);\n  background-size: 100% 1px;\n  background-repeat: no-repeat;\n  background-position: top;\n}\n.fb-bank-cards .add-bankcard.no-border {\n    background-image: none;\n}\n.fb-bank-cards .add-bankcard:active {\n    background: #f2f2f2;\n}\n.fb-bank-cards .add-bankcard em {\n    font-size: 1.2em;\n    margin-right: .2em;\n}\n.fb-bank-cards .mint-cell:active {\n  background-color: #f2f2f2;\n}\n.fb-bank-cards .mint-cell-mask {\n  display: none;\n}\n.fb-bank-cards .mint-radiolist-label {\n  padding: 0 0 12px 2px;\n  font-size: 14px;\n  margin-top: -5px;\n  float: left;\n  color: #4790fe;\n}\n.fb-bank-cards .mint-radio-input:checked + .mint-radio-core {\n  background-color: #4790fe;\n  border-color: #4790fe;\n}\n.fb-bank-cards .mint-radio-label {\n  color: #4790fe;\n}\n.fb-bank-cards .mint-radio-core {\n  border-color: #4790fe;\n}\n.fb-bank-cards .title {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.fb-bank-cards .content-icon {\n  padding-right: 19px;\n}\n.fb-bank-cards .content-icon .icon-svg {\n    width: 39px;\n    height: 39px;\n}\n.fb-bank-cards .content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1.8em;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 10px 0;\n}\n.fb-bank-cards .content h3 {\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    font-size: 15px;\n    font-weight: normal;\n}\n.fb-bank-cards .content p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #666;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/fn-h5-frontend/src/components/src/views/bank/fb-bank-cards.scss","/Users/luxueyan/mine/github/fn-h5-frontend/src/components/src/assets/scss/_variables.scss"],"names":[],"mappings":";AACA;EAEI,gBCiBc;EDhBd,mBAAkB;EAClB,mBAAkB;EAClB,kBAAiB;EACjB,eAAc;EACd,eAAc;EACd,+EAA0F;EAC1F,0BAAyB;EACzB,6BAA4B;EAC5B,yBAAwB;CAWzB;AAtBH;IAaM,uBAAsB;CACvB;AAdL;IAgBM,oBAA6B;CAC9B;AAjBL;IAmBM,iBAAgB;IAChB,mBAAkB;CACnB;AArBL;EAyBM,0BAAmC;CACpC;AA1BL;EA6BI,cAAa;CACd;AA9BH;EAgCI,sBAAqB;EACrB,gBAAe;EACf,iBAAgB;EAChB,YAAW;EACX,eChCmB;CDiCpB;AArCH;EAuCI,0BCnCmB;EDoCnB,sBCpCmB;CDqCpB;AAzCH;EA2CI,eCvCmB;CDwCpB;AA5CH;EA8CI,sBC1CmB;CD2CpB;AA/CH;EAiDI,sBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,4BAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;CACpB;AAnDH;EAqDI,oBAAmB;CAKpB;AA1DH;IAuDM,YAAW;IACX,aAAY;CACb;AAzDL;EA4DI,sBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,4BAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,mBAAkB;EAMlB,gBAAe;EACf,iBAAgB;EAChB,gBAAe;CAMhB;AA5EH;IAgEM,gBAAO;QAAP,YAAO;YAAP,QAAO;IACP,gBC9CY;ID+CZ,oBAAmB;CACpB;AAnEL;IAwEM,iBAAgB;IAChB,wBAAuB;IACvB,YCzEiB;CD0ElB","file":"FbBankCards.vue","sourcesContent":["@import '~assets/scss/_variables.scss';\n.fb-bank-cards {\n  .add-bankcard {\n    font-size: $font-size-m;\n    padding: 15px 10px;\n    text-align: center;\n    background: white;\n    color: inherit;\n    display: block;\n    background-image: linear-gradient(0deg, $border-color, $border-color 50%, transparent 50%);\n    background-size: 100% 1px;\n    background-repeat: no-repeat;\n    background-position: top;\n    &.no-border {\n      background-image: none;\n    }\n    &:active {\n      background: darken(white, 5%);\n    }\n    em {\n      font-size: 1.2em;\n      margin-right: .2em;\n    }\n  }\n  .mint-cell {\n    &:active {\n      background-color: darken(white, 5%);\n    }\n  }\n  .mint-cell-mask {\n    display: none;\n  }\n  .mint-radiolist-label {\n    padding: 0 0 12px 2px;\n    font-size: 14px;\n    margin-top: -5px;\n    float: left;\n    color: $primary-color;\n  }\n  .mint-radio-input:checked+.mint-radio-core {\n    background-color: $primary-color;\n    border-color: $primary-color;\n  }\n  .mint-radio-label {\n    color: $primary-color;\n  }\n  .mint-radio-core {\n    border-color: $primary-color;\n  }\n  .title {\n    display: flex;\n    align-items: center;\n  }\n  .content-icon {\n    padding-right: 19px;\n    .icon-svg {\n      width: 39px;\n      height: 39px;\n    }\n  }\n  .content {\n    display: flex;\n    align-items: center;\n    line-height: 1.8em;\n    h3 {\n      flex: 1;\n      font-size: $font-size-m;\n      font-weight: normal;\n    }\n    font-size: 14px;\n    overflow: hidden;\n    padding: 10px 0;\n    p {\n      overflow: hidden;\n      text-overflow: ellipsis; // padding-left: 11px;\n      color: $minor-font-color;\n    }\n  }\n}\n","// ----- 颜色 -----\n$primary-font-color: #333; // 文字颜色\n$minor-font-color: #666; // 文字次颜色\n$primary-bg-color: #efeff4; // 主要背景色\n$minor-bg-color: #eeefef; // 次要背景色\n$primary-color: #4790fe; // 主色\n$error-color: #f44336; // 错误色\n$warning-color: #ffc107; // 警告色\n$font-color-em: #3586ff; // 强调字体颜色，偏蓝\n$border-color: #d9d9d9; // 边框颜色\n$gray-color: #888;\n$mid-gray-color: #a0a0a0;\n$small-gray-color: #fafafa;\n$placeholder-color: #b2b2b2;\n$header-bg-color: #1c1c1f;\n\n// ----- 文字尺寸 -----\n$font-size-xxxl: 25px;\n$font-size-xxl: 20px;\n$font-size-xl: 17px;\n$font-size-m: 15px;\n$font-size-s: 14px;\n$font-size-xs: 13px;\n$font-size-xxs: 12px;\n$font-size-xxxs: 10px;\n\n@mixin font-size-xxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.9167);\n}\n@mixin font-size-xxxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.8333);\n}\n\n// ----- 尺寸 -----\n$header-height: 40px; // 头部高度\n\n// ----- mint ui color颜色 -----\n$el-blue: #20A0FF;\n$el-light-blue: #58B7FF;\n$el-dark-blue: #1D8CE0;\n$el-green: #13CE66;\n$el-orange: #df9a51;\n$el-yellow: #ffcc00;\n$el-red: #fe6252;\n$el-black: #1F2D3D;\n$el-light-black: #324057;\n$el-extra-light-black: #475669;\n$el-silver: #8492A6;\n$el-light-silver:#99A9BF;\n$el-extra-light-silver: #C0CCDA;\n$el-gray:#D3DCE6;\n$el-light-gray:#E5E9F2;\n$el-extra-light-gray:#EFF2F7;\n$el-white: white;\n$el-dark-white: #F9FAFC;\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "c/Tr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("5zde"), __esModule: true };

/***/ }),

/***/ "fBQ2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("evD5")
  , createDesc      = __webpack_require__("X8DO");

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),

/***/ "jOPC":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "borrow-info"
  }, [_c('form', {
    staticClass: "borrow-form",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit()
      }
    }
  }, [_c('section', [_vm._m(0), _c('div', {
    staticClass: "fields"
  }, [_c('mt-cell', {
    attrs: {
      "title": "借款金额",
      "value": _vm._f("fbCurrency")(_vm.product.amount)
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "借款天数",
      "value": _vm._f("fbAppend")(_vm.product.loanDays, '天')
    }
  }), _c('mt-cell', {
    attrs: {
      "value": _vm._f("fbCurrency")((_vm.product.serviceFee - _vm.product.discountAmount))
    }
  }, [_c('span', {
    slot: "title"
  }, [_vm._v("服务费"), _c('i', {
    staticClass: "iconfont icon-wenhao",
    on: {
      "click": _vm.showServiceChargeTip
    }
  }), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.borrowOption === 'vocation'),
      expression: "borrowOption === 'vocation'"
    }],
    staticClass: "icon-sale7"
  })])]), _c('mt-cell', {
    attrs: {
      "title": "实际到账",
      "value": _vm._f("fbCurrency")(_vm.virtualMoney)
    }
  })], 1)]), (_vm.contractInfoHasHistory) ? _c('fb-bank-cards') : _vm._e(), (!_vm.contractInfoHasHistory) ? _c('section', [_vm._m(1), _c('div', {
    staticClass: "fields"
  }, [(_vm.user.name) ? _c('mt-cell', {
    attrs: {
      "title": "姓名",
      "value": _vm._f("fbFalse")(_vm.model.name)
    }
  }) : _vm._e(), (!_vm.user.name) ? _c('mt-field', {
    attrs: {
      "label": "姓名",
      "placeholder": "请输入真实姓名",
      "state": _vm.getFieldState('model.name')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'model.name')
      }
    },
    model: {
      value: (_vm.model.name),
      callback: function($$v) {
        _vm.model.name = $$v
      },
      expression: "model.name"
    }
  }) : _vm._e(), _c('mt-field', {
    attrs: {
      "label": "身份证号",
      "placeholder": "请输入身份证号",
      "state": _vm.getFieldState('model.idCard')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'model.idCard')
      }
    },
    model: {
      value: (_vm.model.idCard),
      callback: function($$v) {
        _vm.model.idCard = $$v
      },
      expression: "model.idCard"
    }
  }), _c('fb-field', {
    directives: [{
      name: "mt-field-blur",
      rawName: "v-mt-field-blur",
      value: ({
        blur: _vm.getBank
      }),
      expression: "{blur:getBank}"
    }],
    attrs: {
      "label": "银行卡号",
      "placeholder": "请输入银行卡号",
      "state": _vm.getFieldState('model.bankCard')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'model.bankCard')
      }
    },
    model: {
      value: (_vm.bankCardForShow),
      callback: function($$v) {
        _vm.bankCardForShow = $$v
      },
      expression: "bankCardForShow"
    }
  }, [_c('span', {
    slot: "label"
  }, [_vm._v("银行卡号"), _c('i', {
    staticClass: "iconfont icon-wenhao",
    on: {
      "click": function($event) {
        _vm.showSupportBanks()
      }
    }
  })])]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model.bankCard),
      expression: "model.bankCard"
    }],
    attrs: {
      "type": "hidden"
    },
    domProps: {
      "value": (_vm.model.bankCard)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.model.bankCard = $event.target.value
      }
    }
  }), _c('mt-cell', {
    staticClass: "field-cell",
    class: {
      'empty': _vm.model.bankName === '自动匹配'
    },
    attrs: {
      "title": "开户行",
      "value": _vm.model.bankName
    }
  })], 1), _c('div', {
    staticClass: "fields-header"
  }), _c('div', {
    staticClass: "fields"
  }, [_c('mt-field', {
    attrs: {
      "label": "银行预留手机号",
      "placeholder": "请输入银行预留手机号",
      "state": _vm.getFieldState('model.bankReservePhone')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'model.bankReservePhone')
      }
    },
    model: {
      value: (_vm.model.bankReservePhone),
      callback: function($$v) {
        _vm.model.bankReservePhone = $$v
      },
      expression: "model.bankReservePhone"
    }
  }), _c('mt-field', {
    attrs: {
      "label": "验证码",
      "placeholder": "请输入验证码",
      "state": _vm.getFieldState('model.captcha')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'model.captcha')
      }
    },
    model: {
      value: (_vm.model.captcha),
      callback: function($$v) {
        _vm.model.captcha = $$v
      },
      expression: "model.captcha"
    }
  }, [_c('mt-button', {
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
  })], 1)], 1)], 1)]) : _vm._e(), _c('div', {
    staticClass: "form-buttons"
  }, [_c('mt-button', {
    staticClass: "mint-button-block",
    attrs: {
      "type": "primary",
      "size": "large"
    }
  }, [_vm._v("立即提款")])], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fields-header"
  }, [_c('i', {
    staticClass: "iconfont icon-fangan"
  }), _vm._v("借款方案")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fields-header"
  }, [_c('i', {
    staticClass: "iconfont icon-user-solid"
  }), _vm._v("账户信息"), _c('small', {
    staticClass: "pl5"
  }, [_vm._v("请填写您的真实信息，否则会影响借款。")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-70935d2a", module.exports)
  }
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

/***/ "qyJz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__("+ZMJ")
  , $export        = __webpack_require__("kM2E")
  , toObject       = __webpack_require__("sB3e")
  , call           = __webpack_require__("msXi")
  , isArrayIter    = __webpack_require__("Mhyx")
  , toLength       = __webpack_require__("QRG4")
  , createProperty = __webpack_require__("fBQ2")
  , getIterFn      = __webpack_require__("3fs2");

$export($export.S + $export.F * !__webpack_require__("dY0y")(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "tswc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("Gu7T");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_validator_mixin_js__ = __webpack_require__("nWjG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_common_mixin_js__ = __webpack_require__("4JGu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_resources_js__ = __webpack_require__("3dbI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_js__ = __webpack_require__("oiih");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_utils_js__ = __webpack_require__("JaHG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store__ = __webpack_require__("IcnI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_moment__ = __webpack_require__("PJh5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_vue__ = __webpack_require__("I3G/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_FbBankCards_vue__ = __webpack_require__("/p9w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_FbBankCards_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_FbBankCards_vue__);





















/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_6__views_validator_mixin_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__views_common_mixin_js__["b" /* default */]],
  components: {
    FbBankCards: __WEBPACK_IMPORTED_MODULE_16__components_FbBankCards_vue___default.a
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee() {
      var user, data;
      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = __WEBPACK_IMPORTED_MODULE_12__store__["a" /* default */].getters.user;

              if (!(!user.currentOngoingContract || !user.currentOngoingContract.id)) {
                _context.next = 4;
                break;
              }

              next();
              return _context.abrupt('return');

            case 4:
              _context.next = 6;
              return __WEBPACK_IMPORTED_MODULE_8__common_resources_js__["a" /* selfContracts */].get({ id: user.currentOngoingContract.id }).then(function (res) {
                return res.json();
              });

            case 6:
              data = _context.sent;

              next(function (vm) {
                if (data.data) {
                  vm.contractInfoHasHistory = true;
                  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_assign___default()(vm.model, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_lodash__["pick"])(data.data, ['idCard', 'bankCard', 'bankName', 'bankReservePhone']));
                  vm.bankCardForShow = vm.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g, '$& ');
                }
              });

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  mounted: function mounted() {},

  validators: {
    'model.name': function modelName(value) {
      return this.validate(value).required('请输入您的姓名');
    },
    'model.idCard': function modelIdCard(value) {
      return this.validate(value).required('请输入身份证号').length(18, '请正确输入18位身份证').custom(function () {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__common_utils_js__["c" /* isIdcard */])(value)) {
          return '请正确输入二代18位身份证';
        }
      });
    },
    'model.bankCard': function modelBankCard(value) {
      var _this2 = this;

      return this.validate(value).required('请输入银行卡号').custom(function () {
        if (_this2.bankCardNotSupported) {
          return '抱歉，您选择的银行卡不支持！';
        } else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__common_utils_js__["d" /* isBankCard */])(value)) {
          return '请正确输入16-19位银行卡号';
        }
      });
    },
    'model.bankReservePhone': function modelBankReservePhone(value) {
      return this.validate(value).required('请输入手机号').digit('请正确输入手机号').regex('^1[3-9]\\d{9}$', '请正确输入手机号');
    },
    'model.bankName': function modelBankName(value) {
      return this.validate(value).required();
    },
    'model.captcha': function modelCaptcha(value) {
      return this.validate(value).required('请输入验证码').length(6, '请正确输入验证码');
    }
  },
  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_vuex__["c" /* mapMutations */])(['updateStateCode', 'updateOnGoingContractId']), {
    showServiceChargeTip: function showServiceChargeTip() {
      this.$msgBox('服务费包含', '\n        <table>\n          <tr><th>\u5BA1\u6838\u8D39\u7528\uFF1A</th><td style="text-align:left;">' + __WEBPACK_IMPORTED_MODULE_15_vue___default.a.filter('fbCurrency')(this.product.creditFee) + '</td></tr>\n          <tr><th>\u8D26\u6237\u7BA1\u7406\u8D39\uFF1A</th><td style="text-align:left;">' + __WEBPACK_IMPORTED_MODULE_15_vue___default.a.filter('fbCurrency')(this.product.manageFee) + '</td></tr>\n        </table>');
    },
    _vocationJudge: function _vocationJudge(dateScope) {
      return __WEBPACK_IMPORTED_MODULE_14_lodash__["inRange"].apply(undefined, [+this.now].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(dateScope)));
    },
    _vocationRepayDateGet: function _vocationRepayDateGet() {
      var mapDate = {
        '0917': '10月10日',
        '0918': '10月11日',
        '0919': '10月12日',
        '0920': '10月13日',
        '0921': '10月17日',
        '0922': '10月18日',
        '0923': '10月19日',
        '0924': '10月20日'
      };
      return mapDate[__WEBPACK_IMPORTED_MODULE_13_moment___default()(this.now).format('MMDD')] || '';
    },
    _vocationRepayDaysGet: function _vocationRepayDaysGet() {
      var mapDate = {
        '10月10日': 23,
        '10月11日': 23,
        '10月12日': 23,
        '10月13日': 23,
        '10月17日': 26,
        '10月18日': 26,
        '10月19日': 26,
        '10月20日': 26
      };
      return mapDate[this.vocationRepayDate] || 0;
    },
    submit: function submit() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data, success;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = null;

                if (_this3.contractInfoHasHistory) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 4;
                return _this3.$validate();

              case 4:
                success = _context2.sent;

                if (!success) {
                  _context2.next = 12;
                  break;
                }

                if (_this3.borrowOption === 'vocation') {
                  _this3.model.agreementDays = _this3.vocationRepayDays;
                }
                _context2.next = 9;
                return __WEBPACK_IMPORTED_MODULE_8__common_resources_js__["j" /* contractInitial */].save(_this3.model).then(function (res) {
                  return res.json();
                });

              case 9:
                data = _context2.sent;
                _context2.next = 14;
                break;

              case 12:
                _this3.$toast(_this3.validation.firstError(), 'error');
                return _context2.abrupt('return');

              case 14:
                _context2.next = 25;
                break;

              case 16:
                if (!(_this3.stateCode === __WEBPACK_IMPORTED_MODULE_9__constants_js__["b" /* CUST_STATE_CODE_MAP */].CONTRACT_INFO_FILLED)) {
                  _context2.next = 22;
                  break;
                }

                _context2.next = 19;
                return __WEBPACK_IMPORTED_MODULE_8__common_resources_js__["k" /* contractUpdate */].save({
                  contractId: _this3.user.currentOngoingContract.id,
                  productId: _this3.model.productId
                }).then(function (res) {
                  return res.json();
                });

              case 19:
                data = _context2.sent;
                _context2.next = 25;
                break;

              case 22:
                _context2.next = 24;
                return __WEBPACK_IMPORTED_MODULE_8__common_resources_js__["l" /* contractReturn */].save({ productId: _this3.model.productId }).then(function (res) {
                  return res.json();
                });

              case 24:
                data = _context2.sent;

              case 25:

                if (data.code === __WEBPACK_IMPORTED_MODULE_9__constants_js__["a" /* RET_CODE_MAP */].OK) {
                  _this3.updateStateCode(__WEBPACK_IMPORTED_MODULE_9__constants_js__["b" /* CUST_STATE_CODE_MAP */].CONTRACT_INFO_FILLED);
                  if (!_this3.contractInfoHasHistory) _this3.$store.commit('updateUserName', _this3.model.name);
                  if (data.data.contractId) _this3.updateOnGoingContractId(data.data.contractId);
                  _this3.$router.push({
                    name: 'signature'
                  });
                }

              case 26:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    }
  }),

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_vuex__["b" /* mapGetters */])(['stateCode', 'now']), {
    virtualMoney: function virtualMoney() {
      return this.product.amount - (this.product.serviceFee - this.product.discountAmount);
    }
  }),

  data: function data() {
    var stateUser = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.$store.getters.user));
    var product = stateUser.productInfo[0];

    return {
      contractInfoHasHistory: false,
      validatePhoneModel: 'model.bankReservePhone',

      borrowOption: 'normal',
      repayDate: '',
      vocationRepayDate: '',
      vocationRepayDays: product.loanDays,
      product: product,
      model: {
        productId: product.id,
        name: stateUser.name,
        idCard: stateUser.idCard,
        bankCard: null,
        captcha: '',
        bankName: '自动匹配',
        bankReservePhone: null
      },
      user: stateUser
    };
  }
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
//# sourceMappingURL=2.js.map