webpackJsonp([9],{

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(478)

var Component = __webpack_require__(8)(
  /* script */
  null,
  /* template */
  __webpack_require__(461),
  /* scopeId */
  "data-v-b10da23e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/Notification.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Notification.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b10da23e", Component.options)
  } else {
    hotAPI.reload("data-v-b10da23e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.notification[data-v-b10da23e] {\n  margin-top: 30px;\n  padding: 0 10px;\n}\nh2[data-v-b10da23e] {\n  margin: 15px 0;\n}\n.qrcode-con[data-v-b10da23e] {\n  margin-top: 20px;\n}\nem[data-v-b10da23e] {\n  font-weight: bold;\n  margin: 0 3px;\n  font-style: normal;\n}\np[data-v-b10da23e] {\n  line-height: 1.8em;\n}\n.qrcode[data-v-b10da23e] {\n  max-width: 300px;\n  margin-top: 10px;\n}\n.text-center[data-v-b10da23e] {\n  text-align: center;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/src/views/Notification.vue"],"names":[],"mappings":";AAcA;EACE,iBAAgB;EAChB,gBAAe;CAChB;AAED;EACE,eAAc;CACf;AAED;EACE,iBAAgB;CACjB;AAED;EACE,kBAAiB;EACjB,cAAa;EACb,mBAAkB;CACnB;AAED;EACE,mBAAkB;CACnB;AAED;EACE,iBAAgB;EAChB,iBAAgB;CACjB;AAED;EACE,mBAAkB;CACnB","file":"Notification.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n.notification {\n  margin-top: 30px;\n  padding: 0 10px;\n}\n\nh2 {\n  margin: 15px 0;\n}\n\n.qrcode-con {\n  margin-top: 20px;\n}\n\nem {\n  font-weight: bold;\n  margin: 0 3px;\n  font-style: normal;\n}\n\np {\n  line-height: 1.8em;\n}\n\n.qrcode {\n  max-width: 300px;\n  margin-top: 10px;\n}\n\n.text-center {\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/new_public_qrcode.jpeg";

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "notification"
  }, [_c('h2', {
    staticClass: "text-center"
  }, [_vm._v("本微信公众号搬家啦！")]), _c('article', [_c('p', [_vm._v("为了给您提供更优质的服务，蜂鸟团队近期对旗下的微信平台进行了整合升级。")]), _c('p', [_vm._v("即日起，蜂鸟速贷公众号将 "), _c('em', [_vm._v("停止更新")]), _vm._v("，本号的内容与服务将整体搬迁至微信公众号"), _c('em', [_vm._v("【极速蜂鸟】")]), _vm._v("。")]), _c('div', {
    staticClass: "text-center qrcode-con"
  }, [_c('p', [_vm._v("欢迎大家关注"), _c('em', [_vm._v("【极速蜂鸟】")])]), _c('p', [_vm._v("长按二维码并关注↓")]), _c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": __webpack_require__(439)
    }
  })])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b10da23e", module.exports)
  }
}

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(435);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("b2f75a4c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-b10da23e&scoped=true!../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notification.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-b10da23e&scoped=true!../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notification.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=9.js.map