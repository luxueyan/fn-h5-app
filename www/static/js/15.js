webpackJsonp([15],{

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(467)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(405),
  /* template */
  __webpack_require__(449),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/AuthorizedTip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AuthorizedTip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4644967a", Component.options)
  } else {
    hotAPI.reload("data-v-4644967a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(15);






/* harmony default export */ __webpack_exports__["default"] = ({
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['user'])),

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])(['updateStateCode']), {
    getMoney: function getMoney() {
      this.updateStateCode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* CUST_STATE_CODE_MAP */].DEBT_SETTELED);
      this.$router.push({
        name: 'borrowerInfo'
      });
    }
  })
});

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"AuthorizedTip.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "authorized-tip single-page-tip"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('i', {
    staticClass: "iconfont ui-icon-success"
  }), _c('h3', [_vm._v("欢迎您，特权用户"), _c('em', [_vm._v(_vm._s(_vm.user.userCall))])])]), _c('article', [_c('p', [_vm._v("您已获得"), _c('em', [_vm._v(_vm._s(_vm._f("fbCurrency")(_vm.user.integraluserlevel.Limit, '', '元')))]), _vm._v("速贷特权")]), _c('p', [_vm._v("点击下一步，立刻领取")])]), _c('div', {
    staticClass: "footer"
  }, [_c('mt-button', {
    staticClass: "mint-button-block",
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.getMoney()
      }
    }
  }, [_vm._v("立刻领取")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4644967a", module.exports)
  }
}

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(424);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("49652fdd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4644967a!../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AuthorizedTip.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4644967a!../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AuthorizedTip.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=15.js.map