webpackJsonp([10],{

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(464)

var Component = __webpack_require__(8)(
  /* script */
  null,
  /* template */
  __webpack_require__(446),
  /* scopeId */
  "data-v-126186fe",
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/UnauthorizedTip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UnauthorizedTip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-126186fe", Component.options)
  } else {
    hotAPI.reload("data-v-126186fe", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.jpg";

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.unauthorized-tip article[data-v-126186fe] {\n  text-align: center;\n}\n.logo[data-v-126186fe] {\n  background: white;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/src/views/UnauthorizedTip.vue"],"names":[],"mappings":";AAYA;EAEI,mBAAkB;CACnB;AAGH;EACE,kBAAiB;CAClB","file":"UnauthorizedTip.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n.unauthorized-tip {\n  article {\n    text-align: center;\n  }\n}\n\n.logo {\n  background: white;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "unauthorized-tip single-page-tip"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(399)
    }
  }), _c('small', [_vm._v("免审核借款1000元")])]), _c('article', [_c('p', [_vm._v("感谢您的来访。")]), _c('p', [_vm._v("我们的服务尚在内测阶段，尚未全面开放。")]), _c('p', [_vm._v("欢迎继续关注蜂鸟速贷！")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-126186fe", module.exports)
  }
}

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(421);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("31d9367b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-126186fe&scoped=true!../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UnauthorizedTip.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-126186fe&scoped=true!../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UnauthorizedTip.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=10.js.map