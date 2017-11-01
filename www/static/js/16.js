webpackJsonp([16],{

/***/ "I4KN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_resources_js__ = __webpack_require__("3dbI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("IcnI");








/* harmony default export */ __webpack_exports__["default"] = ({
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var user, data;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].getters.user;
              _context.next = 3;
              return __WEBPACK_IMPORTED_MODULE_3__common_resources_js__["a" /* selfContracts */].get({ id: user.currentOngoingContract.id }).then(function (res) {
                return res.json();
              });

            case 3:
              data = _context.sent;

              next(function (vm) {
                if (data.data) {
                  vm.contract = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, data.data);
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
  data: function data() {
    return {
      contract: {}
    };
  }
});

/***/ }),

/***/ "OSJ2":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "single-page-tip"
  }, [_c('header', [_c('h2', [_c('fb-icon', {
    attrs: {
      "name": "dengdai"
    }
  }), _vm._v("已提交")], 1), _vm._m(0)]), _c('div', {
    staticClass: "table-card"
  }, [_c('table', [_vm._m(1), _c('tbody', [_c('tr', [_c('th', [_vm._v("提款金额：")]), _c('td', [_vm._v(_vm._s(_vm._f("fbCurrency")(_vm.contract.contractAmount)))])]), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.contract.bankName) + "：")]), _c('td', [_vm._v(_vm._s(_vm._f("fbCardNo")(_vm.contract.bankCard)))])]), _c('tr', [_c('th', [_vm._v("应还日期：")]), _c('td', [_vm._v(_vm._s(_vm._f("fbFalse")(_vm.contract.contractEndDate)))])]), _c('tr', [_c('th', [_vm._v("还款金额：")]), _c('td', [_vm._v(_vm._s(_vm._f("fbCurrency")(_vm.contract.contractAmount)))])])])]), _c('div', {
    staticClass: "tfoot"
  }, [_vm._v("查看"), _c('a', {
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.$router.push({
          name: 'loanAgreement'
        })
      }
    }
  }, [_vm._v("《借款服务协议》")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("您的提款请求已提交，系统将在"), _c('br'), _vm._v("1小时内放款，请耐心等待。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('caption', [_c('i', {
    staticClass: "iconfont icon-fangan"
  }), _vm._v("借款详情")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b28a3e8", module.exports)
  }
}

/***/ }),

/***/ "cFdX":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("sWJz");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6995fd89", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1b28a3e8&scoped=true!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Loaning.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1b28a3e8&scoped=true!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Loaning.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "r0+I":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("cFdX")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("I4KN"),
  /* template */
  __webpack_require__("OSJ2"),
  /* scopeId */
  "data-v-1b28a3e8",
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/fn-h5-frontend/src/views/borrow/Loaning.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Loaning.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b28a3e8", Component.options)
  } else {
    hotAPI.reload("data-v-1b28a3e8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ "sWJz":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Loaning.vue","sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=16.js.map