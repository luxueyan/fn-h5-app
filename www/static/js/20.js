webpackJsonp([20],{

/***/ "Hnox":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_crossers_js__ = __webpack_require__("aphx");





/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    markAllMessageAsRead: function markAllMessageAsRead() {
      console.log('mark all messages read');
    },
    loadMore: function loadMore() {
      var _this = this;

      this.loadingMoreStatus = true;
      setTimeout(function () {
        _this.loadingMoreStatus = false;
        _this.messages.push({
          title: '自动还款提醒',
          id: 1,
          unRead: true,
          date: new Date(),
          content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
        });
      }, 1500);
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    __WEBPACK_IMPORTED_MODULE_0__common_crossers_js__["b" /* headerRightButton */].$on('messages-mark-read', function () {
      var _self = _this2;
      _this2.$msgBox({
        title: '提示',
        message: '确定将全部消息标记为已读吗？',
        confirmButtonText: '确定',
        showCancelButton: true,
        cancelButtonText: '取消',
        callback: function callback(action) {
          if (action === 'confirm') {
            _self.markAllMessageAsRead();
          }
        }
      });
    });
  },
  data: function data() {
    return {
      loadingMoreStatus: false,
      messages: [{
        title: '自动还款提醒',
        id: 1,
        unRead: true,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }, {
        title: '自动还款提醒',
        id: 1,
        unRead: false,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }, {
        title: '自动还款提醒',
        id: 1,
        unRead: false,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }, {
        title: '自动还款提醒',
        id: 1,
        unRead: false,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }, {
        title: '自动还款提醒',
        id: 1,
        unRead: false,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }, {
        title: '自动还款提醒',
        id: 1,
        unRead: false,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }]
    };
  }
});

/***/ }),

/***/ "agKh":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vrh/");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("210cfcb0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-397b0984!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Messages.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-397b0984!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Messages.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "mwdA":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "infinite-scroll",
      rawName: "v-infinite-scroll",
      value: (_vm.loadMore),
      expression: "loadMore"
    }],
    staticClass: "messages",
    attrs: {
      "infinite-scroll-disabled": "loadingMoreStatus",
      "infinite-scroll-distance": "10"
    }
  }, [_c('div', {
    staticClass: "cells"
  }, _vm._l((_vm.messages), function(message) {
    return _c('mt-cell', {
      attrs: {
        "is-link": "is-link",
        "to": {
          name: 'messageDetail',
          params: {
            id: message.id
          }
        }
      }
    }, [_c('div', {
      staticClass: "content",
      slot: "title"
    }, [_c('div', {
      staticClass: "title"
    }, [_c('h3', [_c('i', {
      staticClass: "icon-circle",
      class: {
        'unread': message.unRead
      },
      slot: "icon"
    }), _vm._v(_vm._s(message.title))]), _c('div', {
      staticClass: "date"
    }, [_vm._v(_vm._s(_vm._f("moment")(message.date, 'YYYY-MM-DD')))])]), _c('p', [_vm._v(_vm._s(message.content))])])])
  })), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loadingMoreStatus),
      expression: "loadingMoreStatus"
    }],
    staticClass: "loading-more-status"
  }, [_c('mt-spinner', {
    attrs: {
      "type": "snake"
    }
  }), _vm._v("努力加载中...")], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-397b0984", module.exports)
  }
}

/***/ }),

/***/ "sYTQ":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("agKh")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("Hnox"),
  /* template */
  __webpack_require__("mwdA"),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/fn-h5-frontend/src/views/account/Messages.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Messages.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-397b0984", Component.options)
  } else {
    hotAPI.reload("data-v-397b0984", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ "vrh/":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")();
// imports


// module
exports.push([module.i, "\n.messages {\n  margin-top: 10px;\n}\n.messages .mint-cell-title {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.messages .title {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.messages .date {\n    text-align: right;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.messages .content {\n    line-height: 1.8em;\n    font-size: 14px;\n    overflow: hidden;\n    padding: 10px 0;\n}\n.messages .content h3 {\n      -webkit-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      font-size: 16px;\n      font-weight: normal;\n}\n.messages .content p {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      padding-left: 11px;\n      color: #888;\n}\n.messages .date {\n    font-size: 12px;\n}\n.messages .icon-circle {\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    background-color: #a0a0a0;\n    border-radius: 50%;\n    vertical-align: 2px;\n    margin-right: 5px;\n}\n.messages .icon-circle.unread {\n      background-color: #4790fe;\n}\n.messages .loading-more-status {\n    padding: 10px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.messages .loading-more-status span {\n      margin-right: 5px;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/fn-h5-frontend/src/views/account/src/views/account/Messages.vue","/Users/luxueyan/mine/github/fn-h5-frontend/src/views/account/src/assets/scss/_variables.scss"],"names":[],"mappings":";AAuHA;EACE,iBAAgB;CAsDjB;AAvDD;IAGI,sBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,4BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;CACpB;AALH;IAOI,sBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,4BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;CACpB;AATH;IAWI,kBAAiB;IACjB,gBAAO;QAAP,YAAO;YAAP,QAAO;CACR;AAbH;IAeI,mBAAkB;IAMlB,gBAAe;IACf,iBAAgB;IAChB,gBAAe;CAOhB;AA9BH;MAiBM,gBAAO;UAAP,YAAO;cAAP,QAAO;MACP,gBAAe;MACf,oBAAmB;CACpB;AApBL;MAyBM,iBAAgB;MAChB,wBAAuB;MACvB,mBAAkB;MAClB,YCzIW;CD0IZ;AA7BL;IAgCI,gBAAe;CAChB;AAjCH;IAmCI,sBAAqB;IACrB,WAAU;IACV,YAAW;IACX,0BClJoB;IDmJpB,mBAAkB;IAClB,oBAAmB;IACnB,kBAAiB;CAIlB;AA7CH;MA2CM,0BC7JiB;CD8JlB;AA5CL;IA+CI,cAAa;IACb,sBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,4BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;IACnB,gCAAuB;QAAvB,sBAAuB;YAAvB,wBAAuB;CAIxB;AAtDH;MAoDM,kBAAiB;CAClB","file":"Messages.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~assets/scss/_variables.scss';\n.messages {\n  margin-top: 10px;\n  .mint-cell-title {\n    display: flex;\n    align-items: center;\n  }\n  .title {\n    display: flex;\n    align-items: center;\n  }\n  .date {\n    text-align: right;\n    flex: 1;\n  }\n  .content {\n    line-height: 1.8em;\n    h3 {\n      flex: 1;\n      font-size: 16px;\n      font-weight: normal;\n    }\n    font-size: 14px;\n    overflow: hidden;\n    padding: 10px 0;\n    p {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      padding-left: 11px;\n      color: $gray-color;\n    }\n  }\n  .date {\n    font-size: 12px;\n  }\n  .icon-circle {\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    background-color: $mid-gray-color;\n    border-radius: 50%;\n    vertical-align: 2px;\n    margin-right: 5px;\n    &.unread {\n      background-color: $primary-color;\n    }\n  }\n  .loading-more-status {\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    span {\n      margin-right: 5px;\n    }\n  }\n}\n","// ----- 颜色 -----\n$primary-font-color: #333; // 文字颜色\n$minor-font-color: #666; // 文字次颜色\n$primary-bg-color: #efeff4; // 主要背景色\n$minor-bg-color: #eeefef; // 次要背景色\n$primary-color: #4790fe; // 主色\n$error-color: #f44336; // 错误色\n$warning-color: #ffc107; // 警告色\n$font-color-em: #3586ff; // 强调字体颜色，偏蓝\n$border-color: #d9d9d9; // 边框颜色\n$gray-color: #888;\n$mid-gray-color: #a0a0a0;\n$small-gray-color: #fafafa;\n$placeholder-color: #b2b2b2;\n$header-bg-color: #1c1c1f;\n\n// ----- 文字尺寸 -----\n$font-size-xxxl: 25px;\n$font-size-xxl: 20px;\n$font-size-xl: 17px;\n$font-size-m: 15px;\n$font-size-s: 14px;\n$font-size-xs: 13px;\n$font-size-xxs: 12px;\n$font-size-xxxs: 10px;\n\n@mixin font-size-xxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.9167);\n}\n@mixin font-size-xxxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.8333);\n}\n\n// ----- 尺寸 -----\n$header-height: 40px; // 头部高度\n\n// ----- mint ui color颜色 -----\n$el-blue: #20A0FF;\n$el-light-blue: #58B7FF;\n$el-dark-blue: #1D8CE0;\n$el-green: #13CE66;\n$el-orange: #df9a51;\n$el-yellow: #ffcc00;\n$el-red: #fe6252;\n$el-black: #1F2D3D;\n$el-light-black: #324057;\n$el-extra-light-black: #475669;\n$el-silver: #8492A6;\n$el-light-silver:#99A9BF;\n$el-extra-light-silver: #C0CCDA;\n$el-gray:#D3DCE6;\n$el-light-gray:#E5E9F2;\n$el-extra-light-gray:#EFF2F7;\n$el-white: white;\n$el-dark-white: #F9FAFC;\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=20.js.map