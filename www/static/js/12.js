webpackJsonp([12],{

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(469)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(412),
  /* template */
  __webpack_require__(451),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/account/Messages.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Messages.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52a46864", Component.options)
  } else {
    hotAPI.reload("data-v-52a46864", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_crossers_js__ = __webpack_require__(242);





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

    __WEBPACK_IMPORTED_MODULE_0__common_crossers_js__["a" /* headerRightButton */].$on('messages-mark-read', function () {
      var _self = _this2;
      _this2.$messagebox({
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

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.messages {\n  margin-top: 10px;\n}\n.messages .mint-cell-title {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.messages .title {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.messages .date {\n    text-align: right;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.messages .content {\n    line-height: 1.8em;\n    font-size: 14px;\n    overflow: hidden;\n    padding: 10px 0;\n}\n.messages .content h3 {\n      -webkit-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      font-size: 16px;\n      font-weight: normal;\n}\n.messages .content p {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      padding-left: 11px;\n      color: #888;\n}\n.messages .date {\n    font-size: 12px;\n}\n.messages .icon-circle {\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    background-color: #aaa;\n    border-radius: 50%;\n    vertical-align: 2px;\n    margin-right: 5px;\n}\n.messages .icon-circle.unread {\n      background-color: #18b4ed;\n}\n.messages .loading-more-status {\n    padding: 10px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.messages .loading-more-status span {\n      margin-right: 5px;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/account/src/views/account/Messages.vue","/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/account/src/assets/scss/_variables.scss"],"names":[],"mappings":";AAuHA;EACE,iBAAgB;CAsDjB;AAvDD;IAGI,sBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,4BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;CACpB;AALH;IAOI,sBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,4BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;CACpB;AATH;IAWI,kBAAiB;IACjB,gBAAO;QAAP,YAAO;YAAP,QAAO;CACR;AAbH;IAeI,mBAAkB;IAMlB,gBAAe;IACf,iBAAgB;IAChB,gBAAe;CAOhB;AA9BH;MAiBM,gBAAO;UAAP,YAAO;cAAP,QAAO;MACP,gBAAe;MACf,oBAAmB;CACpB;AApBL;MAyBM,iBAAgB;MAChB,wBAAuB;MACvB,mBAAkB;MAClB,YC7IW;CD8IZ;AA7BL;IAgCI,gBAAe;CAChB;AAjCH;IAmCI,sBAAqB;IACrB,WAAU;IACV,YAAW;IACX,uBCtJiB;IDuJjB,mBAAkB;IAClB,oBAAmB;IACnB,kBAAiB;CAIlB;AA7CH;MA2CM,0BCjKiB;CDkKlB;AA5CL;IA+CI,cAAa;IACb,sBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,4BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;IACnB,gCAAuB;QAAvB,sBAAuB;YAAvB,wBAAuB;CAIxB;AAtDH;MAoDM,kBAAiB;CAClB","file":"Messages.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../assets/scss/_variables.scss';\n.messages {\n  margin-top: 10px;\n  .mint-cell-title {\n    display: flex;\n    align-items: center;\n  }\n  .title {\n    display: flex;\n    align-items: center;\n  }\n  .date {\n    text-align: right;\n    flex: 1;\n  }\n  .content {\n    line-height: 1.8em;\n    h3 {\n      flex: 1;\n      font-size: 16px;\n      font-weight: normal;\n    }\n    font-size: 14px;\n    overflow: hidden;\n    padding: 10px 0;\n    p {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      padding-left: 11px;\n      color: $gray-color;\n    }\n  }\n  .date {\n    font-size: 12px;\n  }\n  .icon-circle {\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    background-color: $mid-gray-color;\n    border-radius: 50%;\n    vertical-align: 2px;\n    margin-right: 5px;\n    &.unread {\n      background-color: $primary-color;\n    }\n  }\n  .loading-more-status {\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    span {\n      margin-right: 5px;\n    }\n  }\n}\n","// ----- 颜色 -----\n$primary-color: #18b4ed; // 主色\n$error-color: #f44336; // 错误色\n$warning-color: #ffc107; // 警告色\n$font-color-em: #00a5e0; // 强调字体颜色，偏蓝\n$border-color: #d9d9d9; // 边框颜色\n$gray-color: #888;\n$mid-gray-color: #aaa;\n$small-gray-color: #fafafa;\n\n// ----- 尺寸 -----\n$header-height: 45px; // 头部高度\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 451:
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
     require("vue-hot-reload-api").rerender("data-v-52a46864", module.exports)
  }
}

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(426);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("66d2d864", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-52a46864!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Messages.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-52a46864!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Messages.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=12.js.map