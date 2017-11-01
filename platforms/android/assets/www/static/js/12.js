webpackJsonp([12],{

/***/ "5ArB":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("GfB1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5f4e3e16", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-efb674d0!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RepayFailed.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-efb674d0!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RepayFailed.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "6Kb6":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "repay-failed single-page-tip error"
  }, [_c('header', {
    staticClass: "small-header"
  }, [_c('h2', [_c('fb-icon', {
    attrs: {
      "name": "shibai"
    }
  }), _vm._v("还款失败")], 1), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.err.repaymentReasonMsg)
    }
  })]), _c('article', [_c('h4', [_vm._v("您还可以这样还款")]), _c('ul', [_c('li', [_vm._v("方式一：继续用尾号" + _vm._s(_vm.contract.bankCard.slice(-4)) + "还款。"), _c('a', {
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.repayRetry()
      }
    }
  }, [_c('mt-button', {
    staticClass: "br2",
    attrs: {
      "type": "default"
    }
  }, [_vm._v("重试")])], 1)]), _c('li', [_vm._v("方式二：更换一张充足余额的银行卡。"), _c('router-link', {
    attrs: {
      "to": {
        name: 'bankList',
        params: {
          transitionName: 'slideRightFade',
          from: _vm.$route
        }
      }
    }
  }, [_c('mt-button', {
    staticClass: "br2",
    attrs: {
      "type": "default"
    }
  }, [_vm._v("前往")])], 1)], 1), _c('li', [_vm._v("方式三：通过支付宝转账至我们公户fengniaosudai@163.com(请备注姓名+手机号），转账后在公众号中通知客服。")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-efb674d0", module.exports)
  }
}

/***/ }),

/***/ "GfB1":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")();
// imports


// module
exports.push([module.i, "\n.repay-failed .mint-button {\n  font-size: 13px;\n  height: 23px;\n  line-height: 23px;\n  background-color: white;\n  overflow: hidden;\n  box-shadow: none;\n  color: inherit;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/fn-h5-frontend/src/views/repay/src/views/repay/RepayFailed.vue","/Users/luxueyan/mine/github/fn-h5-frontend/src/views/repay/src/assets/scss/_variables.scss"],"names":[],"mappings":";AAmFA;EAEI,gBC/De;EDgEf,aAAY;EACZ,kBAAiB;EACjB,wBAAuB;EACvB,iBAAgB;EAChB,iBAAgB;EAChB,eAAc;CACf","file":"RepayFailed.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~assets/scss/_variables.scss\";\n.repay-failed {\n  .mint-button {\n    font-size: $font-size-xs;\n    height: 23px;\n    line-height: 23px;\n    background-color: white;\n    overflow: hidden;\n    box-shadow: none;\n    color: inherit;\n  }\n}\n","// ----- 颜色 -----\n$primary-font-color: #333; // 文字颜色\n$minor-font-color: #666; // 文字次颜色\n$primary-bg-color: #efeff4; // 主要背景色\n$minor-bg-color: #eeefef; // 次要背景色\n$primary-color: #4790fe; // 主色\n$error-color: #f44336; // 错误色\n$warning-color: #ffc107; // 警告色\n$font-color-em: #3586ff; // 强调字体颜色，偏蓝\n$border-color: #d9d9d9; // 边框颜色\n$gray-color: #888;\n$mid-gray-color: #a0a0a0;\n$small-gray-color: #fafafa;\n$placeholder-color: #b2b2b2;\n$header-bg-color: #1c1c1f;\n\n// ----- 文字尺寸 -----\n$font-size-xxxl: 25px;\n$font-size-xxl: 20px;\n$font-size-xl: 17px;\n$font-size-m: 15px;\n$font-size-s: 14px;\n$font-size-xs: 13px;\n$font-size-xxs: 12px;\n$font-size-xxxs: 10px;\n\n@mixin font-size-xxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.9167);\n}\n@mixin font-size-xxxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.8333);\n}\n\n// ----- 尺寸 -----\n$header-height: 40px; // 头部高度\n\n// ----- mint ui color颜色 -----\n$el-blue: #20A0FF;\n$el-light-blue: #58B7FF;\n$el-dark-blue: #1D8CE0;\n$el-green: #13CE66;\n$el-orange: #df9a51;\n$el-yellow: #ffcc00;\n$el-red: #fe6252;\n$el-black: #1F2D3D;\n$el-light-black: #324057;\n$el-extra-light-black: #475669;\n$el-silver: #8492A6;\n$el-light-silver:#99A9BF;\n$el-extra-light-silver: #C0CCDA;\n$el-gray:#D3DCE6;\n$el-light-gray:#E5E9F2;\n$el-extra-light-gray:#EFF2F7;\n$el-white: white;\n$el-dark-white: #F9FAFC;\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "SKmp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_resources_js__ = __webpack_require__("3dbI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_repay_repay_mixins_js__ = __webpack_require__("z0iR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__("IcnI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_js__ = __webpack_require__("oiih");











/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_5__views_repay_repay_mixins_js__["a" /* default */]],

  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var user, datas;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].getters.user;
              _context.next = 3;
              return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a.all([__WEBPACK_IMPORTED_MODULE_4__common_resources_js__["a" /* selfContracts */].get({ id: user.currentOngoingContract.id }).then(function (res) {
                return res.json();
              }), __WEBPACK_IMPORTED_MODULE_4__common_resources_js__["b" /* repaymentError */].get({ contractId: user.currentOngoingContract.id }).then(function (res) {
                return res.json();
              })]);

            case 3:
              datas = _context.sent;


              next(function (vm) {
                if (datas[0].code === __WEBPACK_IMPORTED_MODULE_7__constants_js__["a" /* RET_CODE_MAP */].OK) {
                  vm.contract = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, datas[0].data);
                }
                if (datas[1].code === __WEBPACK_IMPORTED_MODULE_7__constants_js__["a" /* RET_CODE_MAP */].OK) {
                  vm.err = datas[1].data;
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
    repayRetry: function repayRetry() {
      this.$store.commit('updateStateCode', __WEBPACK_IMPORTED_MODULE_7__constants_js__["b" /* CUST_STATE_CODE_MAP */].DEBT_NOT_SETTLED);
      this.$router.push({
        name: 'repayInfo'
      });
    }
  },

  filters: {
    errMsgPrune: function errMsgPrune(val) {
      return val ? val.replace(/\[[^]]*\]/g, '') : '';
    }
  },

  mounted: function mounted() {
    if (this.$route.params.fromDefaultBankSet) {
      this.repay();
    }
  },
  data: function data() {
    return {
      contract: { bankCard: '' },
      err: {
        repaymentReasonMsg: ''
      }
    };
  }
});

/***/ }),

/***/ "slIS":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("5ArB")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("SKmp"),
  /* template */
  __webpack_require__("6Kb6"),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/fn-h5-frontend/src/views/repay/RepayFailed.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RepayFailed.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-efb674d0", Component.options)
  } else {
    hotAPI.reload("data-v-efb674d0", Component.options)
  }
})()}

module.exports = Component.exports


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

/***/ })

});
//# sourceMappingURL=12.js.map