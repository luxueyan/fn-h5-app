webpackJsonp([11],{

/***/ "/nK7":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "add-bank-step3 single-page-tip"
  }, [_vm._m(0), _c('div', {
    staticClass: "cells-title"
  }, [_vm._v("银行卡信息")]), _c('div', {
    staticClass: "cells"
  }, [_c('mt-cell', {
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
      "title": "银行预留手机号",
      "value": _vm.model.bankReservePhone,
      "is-link": "is-link"
    },
    nativeOn: {
      "click": function($event) {
        _vm.changeBankPhone()
      }
    }
  })], 1), _c('div', {
    staticClass: "footer"
  }, [_c('mt-button', {
    staticClass: "mint-button-block",
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.goOn()
      }
    }
  }, [_vm._v("完成")])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', [_c('img', {
    attrs: {
      "src": __webpack_require__("qzx+")
    }
  }), _c('h2', [_vm._v("您的银行卡添加成功")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3317cdfd", module.exports)
  }
}

/***/ }),

/***/ "67Hk":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("bYkO")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("B9zf"),
  /* template */
  __webpack_require__("/nK7"),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/fn-h5-frontend/src/views/bank/AddBankStep3.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AddBankStep3.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3317cdfd", Component.options)
  } else {
    hotAPI.reload("data-v-3317cdfd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ "B9zf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);






/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.model = this.$route.params.model || this.model;
  },


  methods: {
    goOn: function goOn() {
      this.$router.push(this.$route.params.from ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["merge"])({
        params: {
          fromDefaultBankSet: this.$route.params.from.name === 'repayFailed' }
      }, this.$route.params.from) : {
        name: 'borrowInfo'
      });
    },
    changeBankPhone: function changeBankPhone() {
      this.$router.push({
        name: 'changeBankPhoneStep1',
        params: {
          bankCardId: this.model.bankCardId,
          from: this.$route
        }
      });
    }
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['stateCode'])),
  data: function data() {
    return {
      model: {
        bankCardId: '',
        bankCard: '',
        bankName: '',
        bankReservePhone: ''
      }
    };
  }
});

/***/ }),

/***/ "HlPL":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")();
// imports


// module
exports.push([module.i, "\n.add-bank-step3 header {\n  background-color: #4790fe;\n  height: 155px;\n  text-align: center;\n  color: white;\n}\n.add-bank-step3 header img {\n    margin-top: 10px;\n    width: 144px;\n}\n.add-bank-step3 header h2 {\n    font-size: 20px;\n    margin-top: 10px;\n    font-weight: normal;\n}\n.add-bank-step3 .cells-title {\n  padding: 10px 15px;\n  color: #666;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/fn-h5-frontend/src/views/bank/src/views/bank/AddBankStep3.vue","/Users/luxueyan/mine/github/fn-h5-frontend/src/views/bank/src/assets/scss/_variables.scss"],"names":[],"mappings":";AAiEA;EAEI,0BC9DmB;ED+DnB,cAAa;EACb,mBAAkB;EAClB,aAAY;CAUb;AAfH;IAOM,iBAAgB;IAChB,aAAY;CACb;AATL;IAWM,gBC1Dc;ID2Dd,iBAAgB;IAChB,oBAAmB;CACpB;AAdL;EAiBI,mBAAkB;EAClB,YCjFmB;CDkFpB","file":"AddBankStep3.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~assets/scss/_variables.scss\";\n.add-bank-step3 {\n  header {\n    background-color: $primary-color;\n    height: 155px;\n    text-align: center;\n    color: white;\n    img {\n      margin-top: 10px;\n      width: 144px;\n    }\n    h2 {\n      font-size: $font-size-xxl;\n      margin-top: 10px;\n      font-weight: normal;\n    }\n  }\n  .cells-title {\n    padding: 10px 15px;\n    color: $minor-font-color;\n  }\n}\n","// ----- 颜色 -----\n$primary-font-color: #333; // 文字颜色\n$minor-font-color: #666; // 文字次颜色\n$primary-bg-color: #efeff4; // 主要背景色\n$minor-bg-color: #eeefef; // 次要背景色\n$primary-color: #4790fe; // 主色\n$error-color: #f44336; // 错误色\n$warning-color: #ffc107; // 警告色\n$font-color-em: #3586ff; // 强调字体颜色，偏蓝\n$border-color: #d9d9d9; // 边框颜色\n$gray-color: #888;\n$mid-gray-color: #a0a0a0;\n$small-gray-color: #fafafa;\n$placeholder-color: #b2b2b2;\n$header-bg-color: #1c1c1f;\n\n// ----- 文字尺寸 -----\n$font-size-xxxl: 25px;\n$font-size-xxl: 20px;\n$font-size-xl: 17px;\n$font-size-m: 15px;\n$font-size-s: 14px;\n$font-size-xs: 13px;\n$font-size-xxs: 12px;\n$font-size-xxxs: 10px;\n\n@mixin font-size-xxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.9167);\n}\n@mixin font-size-xxxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.8333);\n}\n\n// ----- 尺寸 -----\n$header-height: 40px; // 头部高度\n\n// ----- mint ui color颜色 -----\n$el-blue: #20A0FF;\n$el-light-blue: #58B7FF;\n$el-dark-blue: #1D8CE0;\n$el-green: #13CE66;\n$el-orange: #df9a51;\n$el-yellow: #ffcc00;\n$el-red: #fe6252;\n$el-black: #1F2D3D;\n$el-light-black: #324057;\n$el-extra-light-black: #475669;\n$el-silver: #8492A6;\n$el-light-silver:#99A9BF;\n$el-extra-light-silver: #C0CCDA;\n$el-gray:#D3DCE6;\n$el-light-gray:#E5E9F2;\n$el-extra-light-gray:#EFF2F7;\n$el-white: white;\n$el-dark-white: #F9FAFC;\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "bYkO":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("HlPL");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("1a7898fb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3317cdfd!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddBankStep3.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3317cdfd!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddBankStep3.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "qzx+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/success-icon.png";

/***/ })

});
//# sourceMappingURL=11.js.map