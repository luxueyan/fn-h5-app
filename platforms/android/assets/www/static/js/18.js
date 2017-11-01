webpackJsonp([18],{

/***/ "TCb5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__("oiih");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_resources_js__ = __webpack_require__("3dbI");








/* harmony default export */ __webpack_exports__["default"] = ({
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var data;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __WEBPACK_IMPORTED_MODULE_4__common_resources_js__["d" /* bankCards */].get({ id: to.params.id }).then(function (res) {
                return res.json();
              });

            case 2:
              data = _context.sent;

              next(function (vm) {
                if (data.code === __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* RET_CODE_MAP */].OK) {
                  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["merge"])(vm.model, data.data);
                }
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },


  methods: {
    changeBankPhone: function changeBankPhone() {
      this.$router.push({
        name: 'changeBankPhoneStep1',
        params: {
          bankCardId: this.model.id,
          bankCard: this.model.bankCard,
          from: this.$route
        }
      });
    },
    deleteBankCard: function deleteBankCard() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var bankCardsCount, _action, action, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                bankCardsCount = _this2.$store.getters.bankCardsCount;

                if (!(_this2.model.bankCard && bankCardsCount === 1)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 4;
                return _this2.$msgBox({
                  title: '提示',
                  message: '您无法解绑唯一的卡片，请先添加一张新的银行卡。',
                  confirmButtonText: '前往添加',
                  showCancelButton: true
                }).catch(function (action) {
                  return action;
                });

              case 4:
                _action = _context2.sent;


                if (_action === 'confirm') {
                  _this2.$router.push({
                    name: 'addBankStep1',
                    params: {
                      from: _this2.$route
                    }
                  });
                }
                return _context2.abrupt('return');

              case 7:
                _context2.next = 9;
                return _this2.$msgBox.confirm('您确认解除绑定该银行卡吗？').catch(function (action) {
                  return action;
                });

              case 9:
                action = _context2.sent;

                if (!(action === 'confirm')) {
                  _context2.next = 15;
                  break;
                }

                _context2.next = 13;
                return __WEBPACK_IMPORTED_MODULE_4__common_resources_js__["o" /* bankCardDelete */].save({ id: _this2.model.id }).then(function (res) {
                  return res.json();
                });

              case 13:
                data = _context2.sent;

                if (data.code === __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* RET_CODE_MAP */].OK) {
                  _this2.$toast('成功解除绑定！', 'success');
                  _this2.routerBack();
                }

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  },

  data: function data() {
    return {
      model: {
        name: this.$store.getters.user.name,
        bankCard: '',
        bankName: '',
        bankReservePhone: ''
      }
    };
  }
});

/***/ }),

/***/ "THg7":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "bank-detail single-page-tip"
  }, [_c('div', {
    staticClass: "cells"
  }, [_c('mt-cell', {
    attrs: {
      "title": "姓名",
      "value": _vm.model.name
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "卡号",
      "value": _vm.model.bankCard
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "开户行",
      "value": _vm.model.bankName
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "手机号",
      "value": _vm.model.bankReservePhone,
      "is-link": "is-link"
    },
    nativeOn: {
      "click": function($event) {
        _vm.changeBankPhone()
      }
    }
  })], 1), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.model.bankCard),
      expression: "model.bankCard"
    }],
    staticClass: "remove-bind",
    on: {
      "click": function($event) {
        _vm.deleteBankCard()
      }
    }
  }, [_vm._v("解除绑定")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7aa444a4", module.exports)
  }
}

/***/ }),

/***/ "Y0ap":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f3xv");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6a7f9fc9", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7aa444a4!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Detail.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7aa444a4!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Detail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "f3xv":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")();
// imports


// module
exports.push([module.i, "\n.bank-detail {\n  padding-top: 10px;\n}\n.bank-detail .cells-title {\n    padding: 10px;\n}\n.bank-detail .remove-bind {\n    font-size: 15px;\n    height: 45px;\n    line-height: 45px;\n    margin-top: 15px;\n    background: white;\n    padding: 0 15px;\n}\n.bank-detail .remove-bind:active {\n      background: #f2f2f2;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/fn-h5-frontend/src/views/bank/src/views/bank/Detail.vue","/Users/luxueyan/mine/github/fn-h5-frontend/src/views/bank/src/assets/scss/_variables.scss"],"names":[],"mappings":";AAyFA;EACE,kBAAiB;CAelB;AAhBD;IAGI,cAAa;CACd;AAJH;IAMI,gBC3Ec;ID4Ed,aAAY;IACZ,kBAAiB;IACjB,iBAAgB;IAChB,kBAAiB;IACjB,gBAAe;CAIhB;AAfH;MAaM,oBAA6B;CAC9B","file":"Detail.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~assets/scss/_variables.scss\";\n.bank-detail {\n  padding-top: 10px;\n  .cells-title {\n    padding: 10px;\n  }\n  .remove-bind {\n    font-size: $font-size-m;\n    height: 45px;\n    line-height: 45px;\n    margin-top: 15px;\n    background: white;\n    padding: 0 15px;\n    &:active {\n      background: darken(white, 5%);\n    }\n  }\n}\n","// ----- 颜色 -----\n$primary-font-color: #333; // 文字颜色\n$minor-font-color: #666; // 文字次颜色\n$primary-bg-color: #efeff4; // 主要背景色\n$minor-bg-color: #eeefef; // 次要背景色\n$primary-color: #4790fe; // 主色\n$error-color: #f44336; // 错误色\n$warning-color: #ffc107; // 警告色\n$font-color-em: #3586ff; // 强调字体颜色，偏蓝\n$border-color: #d9d9d9; // 边框颜色\n$gray-color: #888;\n$mid-gray-color: #a0a0a0;\n$small-gray-color: #fafafa;\n$placeholder-color: #b2b2b2;\n$header-bg-color: #1c1c1f;\n\n// ----- 文字尺寸 -----\n$font-size-xxxl: 25px;\n$font-size-xxl: 20px;\n$font-size-xl: 17px;\n$font-size-m: 15px;\n$font-size-s: 14px;\n$font-size-xs: 13px;\n$font-size-xxs: 12px;\n$font-size-xxxs: 10px;\n\n@mixin font-size-xxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.9167);\n}\n@mixin font-size-xxxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.8333);\n}\n\n// ----- 尺寸 -----\n$header-height: 40px; // 头部高度\n\n// ----- mint ui color颜色 -----\n$el-blue: #20A0FF;\n$el-light-blue: #58B7FF;\n$el-dark-blue: #1D8CE0;\n$el-green: #13CE66;\n$el-orange: #df9a51;\n$el-yellow: #ffcc00;\n$el-red: #fe6252;\n$el-black: #1F2D3D;\n$el-light-black: #324057;\n$el-extra-light-black: #475669;\n$el-silver: #8492A6;\n$el-light-silver:#99A9BF;\n$el-extra-light-silver: #C0CCDA;\n$el-gray:#D3DCE6;\n$el-light-gray:#E5E9F2;\n$el-extra-light-gray:#EFF2F7;\n$el-white: white;\n$el-dark-white: #F9FAFC;\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "ma0B":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("Y0ap")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("TCb5"),
  /* template */
  __webpack_require__("THg7"),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/fn-h5-frontend/src/views/bank/Detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7aa444a4", Component.options)
  } else {
    hotAPI.reload("data-v-7aa444a4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=18.js.map