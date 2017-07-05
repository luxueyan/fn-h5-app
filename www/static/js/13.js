webpackJsonp([13],{

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(470)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(411),
  /* template */
  __webpack_require__(452),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/account/Message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5520cc9f", Component.options)
  } else {
    hotAPI.reload("data-v-5520cc9f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      message: {
        title: '自动还款提醒',
        id: 1,
        unRead: true,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }
    };
  }
});

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.message {\n  padding: 10px 10px 0;\n}\n.message h3 {\n    font-size: 16px;\n    margin: 5px 0;\n    font-weight: normal;\n}\n.message small {\n    display: block;\n    font-size: 13px;\n    color: #888;\n    margin-bottom: 10px;\n}\n.message .content {\n    line-height: 1.8em;\n    padding-top: 10px;\n    color: #888;\n    font-size: 14px;\n}\n.message .content:last-child {\n      background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);\n      background-size: 100% 1px;\n      background-repeat: no-repeat;\n      background-position: top;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/account/src/views/account/Message.vue","/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/account/src/assets/scss/_variables.scss"],"names":[],"mappings":";AAyBA;EACE,qBAAoB;CAwBrB;AAzBD;IAGI,gBAAe;IACf,cAAa;IACb,oBAAmB;CACpB;AANH;IAQI,eAAc;IACd,gBAAe;IACf,YC7Ba;ID8Bb,oBAAmB;CACpB;AAZH;IAcI,mBAAkB;IAClB,kBAAiB;IACjB,YCnCa;IDoCb,gBAAe;CAOhB;AAxBH;MAmBM,+EAA8E;MAC9E,0BAAyB;MACzB,6BAA4B;MAC5B,yBAAwB;CACzB","file":"Message.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../assets/scss/_variables.scss';\n.message {\n  padding: 10px 10px 0;\n  h3 {\n    font-size: 16px;\n    margin: 5px 0;\n    font-weight: normal;\n  }\n  small {\n    display: block;\n    font-size: 13px;\n    color: $gray-color;\n    margin-bottom: 10px;\n  }\n  .content {\n    line-height: 1.8em;\n    padding-top: 10px;\n    color: $gray-color;\n    font-size: 14px;\n    &:last-child {\n      background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);\n      background-size: 100% 1px;\n      background-repeat: no-repeat;\n      background-position: top;\n    }\n  }\n}\n","// ----- 颜色 -----\n$primary-color: #18b4ed; // 主色\n$error-color: #f44336; // 错误色\n$warning-color: #ffc107; // 警告色\n$font-color-em: #00a5e0; // 强调字体颜色，偏蓝\n$border-color: #d9d9d9; // 边框颜色\n$gray-color: #888;\n$mid-gray-color: #aaa;\n$small-gray-color: #fafafa;\n\n// ----- 尺寸 -----\n$header-height: 45px; // 头部高度\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "message"
  }, [_c('h3', [_vm._v(_vm._s(_vm.message.title))]), _c('small', [_vm._v(_vm._s(_vm._f("moment")(_vm.message.date, 'YYYY-MM-DD HH:mm:ss')))]), _c('div', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.message.content))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5520cc9f", module.exports)
  }
}

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(427);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("5e47af8e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5520cc9f!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5520cc9f!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=13.js.map