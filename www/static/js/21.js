webpackJsonp([21],{

/***/ "1KmC":
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
     require("vue-hot-reload-api").rerender("data-v-653012f6", module.exports)
  }
}

/***/ }),

/***/ "6Eg1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("oVFJ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("240372d0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-653012f6!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-653012f6!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "h5sO":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("6Eg1")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("vGm2"),
  /* template */
  __webpack_require__("1KmC"),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/fn-h5-frontend/src/views/account/Message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-653012f6", Component.options)
  } else {
    hotAPI.reload("data-v-653012f6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ "oVFJ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")();
// imports


// module
exports.push([module.i, "\n.message {\n  padding: 10px 10px 0;\n}\n.message h3 {\n    font-size: 16px;\n    margin: 5px 0;\n    font-weight: normal;\n}\n.message small {\n    display: block;\n    font-size: 13px;\n    color: #888;\n    margin-bottom: 10px;\n}\n.message .content {\n    line-height: 1.8em;\n    padding-top: 10px;\n    color: #888;\n    font-size: 14px;\n}\n.message .content:last-child {\n      background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);\n      background-size: 100% 1px;\n      background-repeat: no-repeat;\n      background-position: top;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/fn-h5-frontend/src/views/account/src/views/account/Message.vue","/Users/luxueyan/mine/github/fn-h5-frontend/src/views/account/src/assets/scss/_variables.scss"],"names":[],"mappings":";AAyBA;EACE,qBAAoB;CAwBrB;AAzBD;IAGI,gBAAe;IACf,cAAa;IACb,oBAAmB;CACpB;AANH;IAQI,eAAc;IACd,gBAAe;IACf,YCzBa;ID0Bb,oBAAmB;CACpB;AAZH;IAcI,mBAAkB;IAClB,kBAAiB;IACjB,YC/Ba;IDgCb,gBAAe;CAOhB;AAxBH;MAmBM,+EAA8E;MAC9E,0BAAyB;MACzB,6BAA4B;MAC5B,yBAAwB;CACzB","file":"Message.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~assets/scss/_variables.scss';\n.message {\n  padding: 10px 10px 0;\n  h3 {\n    font-size: 16px;\n    margin: 5px 0;\n    font-weight: normal;\n  }\n  small {\n    display: block;\n    font-size: 13px;\n    color: $gray-color;\n    margin-bottom: 10px;\n  }\n  .content {\n    line-height: 1.8em;\n    padding-top: 10px;\n    color: $gray-color;\n    font-size: 14px;\n    &:last-child {\n      background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);\n      background-size: 100% 1px;\n      background-repeat: no-repeat;\n      background-position: top;\n    }\n  }\n}\n","// ----- 颜色 -----\n$primary-font-color: #333; // 文字颜色\n$minor-font-color: #666; // 文字次颜色\n$primary-bg-color: #efeff4; // 主要背景色\n$minor-bg-color: #eeefef; // 次要背景色\n$primary-color: #4790fe; // 主色\n$error-color: #f44336; // 错误色\n$warning-color: #ffc107; // 警告色\n$font-color-em: #3586ff; // 强调字体颜色，偏蓝\n$border-color: #d9d9d9; // 边框颜色\n$gray-color: #888;\n$mid-gray-color: #a0a0a0;\n$small-gray-color: #fafafa;\n$placeholder-color: #b2b2b2;\n$header-bg-color: #1c1c1f;\n\n// ----- 文字尺寸 -----\n$font-size-xxxl: 25px;\n$font-size-xxl: 20px;\n$font-size-xl: 17px;\n$font-size-m: 15px;\n$font-size-s: 14px;\n$font-size-xs: 13px;\n$font-size-xxs: 12px;\n$font-size-xxxs: 10px;\n\n@mixin font-size-xxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.9167);\n}\n@mixin font-size-xxxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.8333);\n}\n\n// ----- 尺寸 -----\n$header-height: 40px; // 头部高度\n\n// ----- mint ui color颜色 -----\n$el-blue: #20A0FF;\n$el-light-blue: #58B7FF;\n$el-dark-blue: #1D8CE0;\n$el-green: #13CE66;\n$el-orange: #df9a51;\n$el-yellow: #ffcc00;\n$el-red: #fe6252;\n$el-black: #1F2D3D;\n$el-light-black: #324057;\n$el-extra-light-black: #475669;\n$el-silver: #8492A6;\n$el-light-silver:#99A9BF;\n$el-extra-light-silver: #C0CCDA;\n$el-gray:#D3DCE6;\n$el-light-gray:#E5E9F2;\n$el-extra-light-gray:#EFF2F7;\n$el-white: white;\n$el-dark-white: #F9FAFC;\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "vGm2":
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

/***/ })

});
//# sourceMappingURL=21.js.map