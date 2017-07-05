webpackJsonp([7],{

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(466)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(415),
  /* template */
  __webpack_require__(448),
  /* scopeId */
  "data-v-384fa28e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/borrow/Loaning.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Loaning.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-384fa28e", Component.options)
  } else {
    hotAPI.reload("data-v-384fa28e", Component.options)
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

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_resources_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_adaptors_js__ = __webpack_require__(387);








/* harmony default export */ __webpack_exports__["default"] = ({
  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])(['user'])),

  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    __WEBPACK_IMPORTED_MODULE_3__common_resources_js__["a" /* QueryContract */].get().then(function (res) {
      return res.json();
    }).then(function (data) {
      next(function (vm) {
        if (data.data.content) {
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(vm.contractInfo, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__common_adaptors_js__["a" /* contractInfo */])(data.data.content));
          vm.bankCardForShow = vm.contractInfo.bankCard.replace(/(\d{4})\d+(\d{4})/g, '$1****$2');
        }
      });
    });
  },


  methods: {
    checkLoanAgreement: function checkLoanAgreement() {
      this.$router.push({
        name: 'loanAgreement'
      });
    }
  },

  data: function data() {
    return {
      bankCardForShow: '',
      contractInfo: {}
    };
  }
});

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Loaning.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "change-bank-card-step3 single-page-tip"
  }, [_vm._m(0), _c('article', [_c('table', [_c('tr', [_c('th', [_vm._v("提款金额：")]), _c('td', [_vm._v(_vm._s(_vm._f("fbCurrency")(_vm.contractInfo.loanAmount, '', '元')))])]), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.contractInfo.bank) + "：")]), _c('td', [_vm._v(_vm._s(_vm._f("fbFalse")(_vm.bankCardForShow)))])]), _c('tr', [_c('th', [_vm._v("还款日期：")]), _c('td', [_vm._v(_vm._s(_vm._f("fbFalse")(_vm.contractInfo.endDate)))])]), _c('tr', [_c('th', [_vm._v("还款金额：")]), _c('td', [_vm._v(_vm._s(_vm._f("fbCurrency")(_vm.contractInfo.totalAmount, '', '元')))])])]), _c('small', [_vm._v("您的提款请求已发送成功，请耐心等待。")])]), _c('div', {
    staticClass: "footer no-padding-top"
  }, [_c('div', {
    staticClass: "simple-btns"
  }, [_c('a', {
    on: {
      "click": function($event) {
        _vm.checkLoanAgreement()
      }
    }
  }, [_vm._v("查看《借款服务协议》")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('i', {
    staticClass: "iconfont ui-icon-success"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-384fa28e", module.exports)
  }
}

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(423);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("4353cc02", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-384fa28e&scoped=true!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Loaning.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-384fa28e&scoped=true!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Loaning.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=7.js.map