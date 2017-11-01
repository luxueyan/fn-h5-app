webpackJsonp([3],{

/***/ "3aVt":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/next.png";

/***/ }),

/***/ "ALNM":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("amUR");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7bc667cd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25e8c5a4!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Signature.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25e8c5a4!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Signature.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "BIrB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_epaper_js__ = __webpack_require__("lXIR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_resources_js__ = __webpack_require__("3dbI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_js__ = __webpack_require__("oiih");











/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    var myepaper = __WEBPACK_IMPORTED_MODULE_3__common_epaper_js__["a" /* default */].init('panel', {
      name: this.user.name
    });

    myepaper.setCallback(function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee(action, _ref2) {
        var pngData = _ref2.pngData,
            pointsData = _ref2.pointsData;

        var data, _data;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(action === 'cancel')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_4__common_resources_js__["h" /* contractReset */].get({ contractId: _this.user.currentOngoingContract.id }).then(function (res) {
                  return res.json();
                });

              case 3:
                data = _context.sent;


                if (data.code === __WEBPACK_IMPORTED_MODULE_6__constants_js__["a" /* RET_CODE_MAP */].OK) {
                  _this.updateStateCode(__WEBPACK_IMPORTED_MODULE_6__constants_js__["b" /* CUST_STATE_CODE_MAP */].DEBT_SETTELED);
                  _this.$router.push({
                    name: 'borrowerInfo'
                  });
                }
                return _context.abrupt('return');

              case 8:
                if (!(action === 'agreement')) {
                  _context.next = 12;
                  break;
                }

                _this.$router.push({
                  name: 'loanAgreement'
                });
                _context.next = 20;
                break;

              case 12:
                if (!(action === 'signdone')) {
                  _context.next = 20;
                  break;
                }

                if (pngData) {
                  _context.next = 16;
                  break;
                }

                _this.$toast('\u8BF7\u624B\u5199\u60A8\u7684\u59D3\u540D\uFF1A' + _this.user.name, 'error');
                return _context.abrupt('return');

              case 16:
                _context.next = 18;
                return __WEBPACK_IMPORTED_MODULE_4__common_resources_js__["i" /* contractSign */].save({
                  contractId: _this.user.currentOngoingContract.id,
                  sign: pngData
                }).then(function (res) {
                  return res.json();
                });

              case 18:
                _data = _context.sent;


                if (_data.code === __WEBPACK_IMPORTED_MODULE_6__constants_js__["a" /* RET_CODE_MAP */].OK) {
                  _this.updateStateCode(__WEBPACK_IMPORTED_MODULE_6__constants_js__["b" /* CUST_STATE_CODE_MAP */].LOANING);
                  _this.$router.push({
                    name: 'loaning'
                  });
                }

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  },


  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex__["c" /* mapMutations */])(['updateStateCode'])),

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapGetters */])(['user'])),

  data: function data() {
    return {
      panelStyle: {
        height: window.innerHeight + 'px' }
    };
  }
});

/***/ }),

/***/ "G/6j":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("ALNM")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("BIrB"),
  /* template */
  __webpack_require__("spA4"),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/fn-h5-frontend/src/views/borrow/Signature.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Signature.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25e8c5a4", Component.options)
  } else {
    hotAPI.reload("data-v-25e8c5a4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ "MHzY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/previous.png";

/***/ }),

/***/ "SHXz":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/stroke.png";

/***/ }),

/***/ "Zgkk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/next_press.png";

/***/ }),

/***/ "amUR":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")();
// imports


// module
exports.push([module.i, "\n.writingDiv {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #333;\n  font-size: 15px;\n}\n.writingDiv .topBar,\n  .writingDiv .bottomBar {\n    position: absolute;\n    height: 50px;\n    background: snow;\n    left: 0;\n    right: 0;\n}\n.writingDiv .topBar {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    top: 40px;\n    z-index: 99;\n    padding: 0 20px;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.writingDiv .topBar label {\n      -webkit-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: left;\n      line-height: 50px;\n}\n.writingDiv .bottomBar {\n    height: 45px;\n    bottom: 0;\n    width: 100%;\n    clear: both;\n}\n.writingDiv .paperCanvas {\n    position: absolute;\n    left: 0;\n    bottom: 45px;\n    top: 90px;\n    background-color: #efeff4;\n    width: 100%;\n}\n.writingDiv .ePaperCanvas {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: block;\n}\n.writingDiv .textButton {\n    padding: 0 10px;\n    height: 28px;\n    line-height: 27px;\n    color: #3586ff;\n    font-size: 13px;\n    background: transparent;\n    display: inline-block;\n    border: 0;\n    text-align: center;\n    position: relative;\n    margin-left: 10px;\n}\n.writingDiv .textButton:after {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 200%;\n      height: 200%;\n      -webkit-transform-origin: 0 0;\n          -ms-transform-origin: 0 0;\n              transform-origin: 0 0;\n      -webkit-transform: scale(0.5);\n          -ms-transform: scale(0.5);\n              transform: scale(0.5);\n      border: 1px solid #3586ff;\n}\n.writingDiv .textButton_Done {\n    height: 45px;\n    line-height: 45px;\n    background: #4790fe;\n    border-radius: 2px;\n    width: 256px;\n    position: absolute;\n    border: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    color: white;\n    bottom: 55px;\n}\n.writingDiv .bottomCol {\n    display: block;\n    float: left;\n    width: 20%;\n    height: 28px;\n    margin-top: 7px;\n}\n.writingDiv .bottomButton {\n    background: transparent;\n    -webkit-align-self: center;\n        -ms-flex-item-align: center;\n                -ms-grid-row-align: center;\n            align-self: center;\n    width: 28px;\n    height: 28px;\n    display: block;\n    background-size: 28px;\n    border: none;\n    margin: auto;\n    top: 10px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n.writingDiv .redo {\n    background: url(" + __webpack_require__("3aVt") + ") no-repeat;\n    background-size: 28px;\n    border: none;\n    top: 10px;\n}\n.writingDiv .redo:active {\n    background: url(" + __webpack_require__("Zgkk") + ") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .undo {\n    background: url(" + __webpack_require__("MHzY") + ") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .undo:active {\n    background: url(" + __webpack_require__("xPd5") + ") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .clear {\n    background: url(" + __webpack_require__("L5fL") + ") no-repeat;\n    background-size: 28px;\n    top: 10px;\n}\n.writingDiv .color {\n    background: url(" + __webpack_require__("yeCG") + ") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .stroke {\n    background: url(" + __webpack_require__("SHXz") + ") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .palette {\n    border-bottom: 1px solid #82593e;\n    margin: auto;\n    position: absolute;\n    bottom: 44px;\n    width: 100%;\n    list-style: none;\n    padding: 0;\n    display: none;\n    z-index: 20;\n    background: #fff;\n    left: 0;\n}\n.writingDiv .palette li {\n    float: left;\n    line-height: 44px;\n    font-size: 0.75em;\n    padding: 0;\n    color: #fff;\n    width: 20%;\n    text-align: center;\n    display: inline;\n}\n.writingDiv .penSize {\n    border-bottom: 1px solid #82593e;\n    margin: auto;\n    position: absolute;\n    bottom: 44px;\n    width: 100%;\n    list-style: none;\n    background: #fff;\n    z-index: 20;\n    display: none;\n    padding: 0em 0px 0px 0px;\n    left: 0;\n}\n.writingDiv .penSize li {\n    float: left;\n    font-size: 0.6em;\n    width: 20%;\n}\n.writingDiv .penSize li input {\n    float: left;\n    margin-top: 16px;\n}\n#panel {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 0;\n  background-color: #fff;\n}\n#panel .ePaperCanvas {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: block;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/fn-h5-frontend/src/views/borrow/src/assets/scss/epaper.scss","/Users/luxueyan/mine/github/fn-h5-frontend/src/views/borrow/src/assets/scss/_variables.scss","/Users/luxueyan/mine/github/fn-h5-frontend/src/views/borrow/src/views/borrow/Signature.vue"],"names":[],"mappings":"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","file":"Signature.vue","sourcesContent":["@import \"~assets/scss/_variables.scss\";\n$topbar-height: 50px;\n$bottombar-height: 45px;\n.writingDiv {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: $primary-font-color;\n  font-size: $font-size-m;\n  .topBar,\n  .bottomBar {\n    position: absolute;\n    height: $topbar-height;\n    background: snow;\n    left: 0;\n    right: 0;\n  }\n  .topBar {\n    display: flex;\n    top: $header-height;\n    z-index: 99;\n    padding: 0 20px;\n    align-items: center;\n    label {\n      flex: 1;\n      text-align: left;\n      line-height: $topbar-height;\n    }\n  }\n  .bottomBar {\n    height: $bottombar-height;\n    bottom: 0;\n    width: 100%;\n    clear: both;\n  }\n  .paperCanvas {\n    position: absolute;\n    left: 0;\n    bottom: $bottombar-height;\n    top: $header-height + $topbar-height; // background: url(~assets/images/bg_paper.jpg);\n    background-color: $primary-bg-color;\n    width: 100%;\n  }\n  .ePaperCanvas {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: block;\n  }\n  .textButton {\n    padding: 0 10px;\n    height: 28px;\n    line-height: 27px;\n    color: $font-color-em;\n    font-size: $font-size-xs;\n    background: transparent;\n    display: inline-block;\n    border: 0;\n    text-align: center;\n    position: relative;\n    margin-left: 10px;\n    &:after {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 200%;\n      height: 200%;\n      transform-origin: 0 0;\n      transform: scale(0.5);\n      border: 1px solid $font-color-em;\n    }\n  }\n  .textButton_Done {\n    height: 45px;\n    line-height: 45px;\n    background: $primary-color;\n    border-radius: 2px;\n    width: 256px;\n    position: absolute;\n    border: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    color: white;\n    bottom: $bottombar-height + 10px;\n  }\n  .bottomCol {\n    display: block;\n    float: left;\n    width: 20%;\n    height: 28px;\n    margin-top: 7px;\n  }\n  .bottomButton {\n    background: transparent;\n    align-self: center;\n    width: 28px;\n    height: 28px;\n    display: block;\n    background-size: 28px;\n    border: none;\n    margin: auto;\n    top: 10px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n  .redo {\n    background: url(~assets/images/next.png) no-repeat;\n    background-size: 28px;\n    border: none;\n    top: 10px;\n  }\n  .redo:active {\n    background: url(~assets/images/next_press.png) no-repeat;\n    background-size: 28px;\n  }\n  .undo {\n    background: url(~assets/images/previous.png) no-repeat;\n    background-size: 28px;\n  }\n  .undo:active {\n    background: url(~assets/images/previous_press.png) no-repeat;\n    background-size: 28px;\n  }\n  .clear {\n    background: url(~assets/images/clear.png) no-repeat;\n    background-size: 28px;\n    top: 10px;\n  } // .clear:active {\n  //   background: url(~assets/images/clear_press.png) no-repeat;\n  //   background-size: 28px;\n  // }\n  .color {\n    background: url(~assets/images/color.png) no-repeat;\n    background-size: 28px;\n  } // .color:active {\n  //   background: url(~assets/images/color_press.png) no-repeat;\n  //   background-size: 28px;\n  // }\n  .stroke {\n    background: url(~assets/images/stroke.png) no-repeat;\n    background-size: 28px;\n  } // .stroke:active {\n  //   background: url(~assets/images/stroke_press.png) no-repeat;\n  //   background-size: 28px;\n  // }\n  .palette {\n    border-bottom: 1px solid #82593e;\n    margin: auto;\n    position: absolute;\n    bottom: 44px;\n    width: 100%;\n    list-style: none;\n    padding: 0;\n    display: none;\n    z-index: 20;\n    background: #fff;\n    left: 0;\n  }\n  .palette li {\n    float: left;\n    line-height: 44px;\n    font-size: 0.75em;\n    padding: 0;\n    color: #fff;\n    width: 20%;\n    text-align: center;\n    display: inline;\n  }\n  .penSize {\n    border-bottom: 1px solid #82593e;\n    margin: auto;\n    position: absolute;\n    bottom: 44px;\n    width: 100%;\n    list-style: none;\n    background: #fff;\n    z-index: 20;\n    display: none;\n    padding: 0em 0px 0px 0px;\n    left: 0;\n  }\n  .penSize li {\n    float: left;\n    font-size: 0.6em;\n    width: 20%;\n  }\n  .penSize li input {\n    float: left;\n    margin-top: 16px;\n  }\n}\n","// ----- 颜色 -----\n$primary-font-color: #333; // 文字颜色\n$minor-font-color: #666; // 文字次颜色\n$primary-bg-color: #efeff4; // 主要背景色\n$minor-bg-color: #eeefef; // 次要背景色\n$primary-color: #4790fe; // 主色\n$error-color: #f44336; // 错误色\n$warning-color: #ffc107; // 警告色\n$font-color-em: #3586ff; // 强调字体颜色，偏蓝\n$border-color: #d9d9d9; // 边框颜色\n$gray-color: #888;\n$mid-gray-color: #a0a0a0;\n$small-gray-color: #fafafa;\n$placeholder-color: #b2b2b2;\n$header-bg-color: #1c1c1f;\n\n// ----- 文字尺寸 -----\n$font-size-xxxl: 25px;\n$font-size-xxl: 20px;\n$font-size-xl: 17px;\n$font-size-m: 15px;\n$font-size-s: 14px;\n$font-size-xs: 13px;\n$font-size-xxs: 12px;\n$font-size-xxxs: 10px;\n\n@mixin font-size-xxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.9167);\n}\n@mixin font-size-xxxxs {\n  font-size: $font-size-xxs;\n  transform: scale(0.8333);\n}\n\n// ----- 尺寸 -----\n$header-height: 40px; // 头部高度\n\n// ----- mint ui color颜色 -----\n$el-blue: #20A0FF;\n$el-light-blue: #58B7FF;\n$el-dark-blue: #1D8CE0;\n$el-green: #13CE66;\n$el-orange: #df9a51;\n$el-yellow: #ffcc00;\n$el-red: #fe6252;\n$el-black: #1F2D3D;\n$el-light-black: #324057;\n$el-extra-light-black: #475669;\n$el-silver: #8492A6;\n$el-light-silver:#99A9BF;\n$el-extra-light-silver: #C0CCDA;\n$el-gray:#D3DCE6;\n$el-light-gray:#E5E9F2;\n$el-extra-light-gray:#EFF2F7;\n$el-white: white;\n$el-dark-white: #F9FAFC;\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~assets/scss/epaper.scss';\n#panel {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 0;\n  background-color: #fff;\n  .ePaperCanvas {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: block;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "lXIR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getVersion */
/* unused harmony export setCurrentLanguageType */

function getVersion() {
  return "3.0.0.3";
}
function setCurrentLanguageType(a) {
  var d = ["Cancel", "Done"],
      b = ["\u53D6\u6D88", "\u5B8C\u6210"],
      c = ["Green", "Yellow", "Blue", "Black", "Red"],
      f = ["\u7EFF\u8272", "\u9EC4\u8272", "\u84DD\u8272", "\u9ED1\u8272", "\u7EA2\u8272"],
      e = ["\u7DA0\u8272", "\u9EC3\u8272", "\u85CD\u8272", "\u9ED1\u8272", "\u7D05\u8272"],
      m = ["Ultra Thick", "Thick", "Mid", "Thin", "Ultra Thin"],
      g = ["\u7279\u7C97", "\u7C97", " \u4E2D ", " \u7EC6 ", "\u7279\u7EC6"],
      n = ["0.9em", "0.9em", "0.9em", "0.9em", "0.9em"],
      l = ["1em", "1em", "1em", "1em", "1em"],
      q = document.getElementById("writingDiv").querySelectorAll("input"),
      k = document.getElementById("palette").children,
      h = document.getElementById("penSize").children;
  if ("en" === a) {
    for (a = 0; 2 > a; a++) {
      q[a].value = d[a];
    }d = k.length;
    g = document.body.clientWidth;
    for (a = 0; a < d; a++) {
      k[a].innerHTML = c[a], 320 >= g && (k[a].style.fontSize = "0.7em");
    }c = h.length;
    for (a = 0; a < c; a++) {
      k = h[a].childElementCount, 3 == k ? (h[a].children[1].style.fontSize = n[a], h[a].children[2].style.fontSize = n[a], 0 == a ? (h[a].children[1].innerHTML = "Ultra", h[a].children[2].innerHTML = "Thick") : 4 == a && (h[a].children[1].innerHTML = "Ultra", h[a].children[2].innerHTML = "Thin")) : 2 == k && (h[a].children[1].style.fontSize = n[a], h[a].children[1].innerHTML = m[a]);
    }
  } else if ("zh-Hans" === a) {
    for (a = 0; 2 > a; a++) {
      q[a].value = b[a];
    }d = k.length;
    for (a = 0; a < d; a++) {
      k[a].innerHTML = f[a];
    }c = h.length;
    for (a = 0; a < c; a++) {
      k = h[a].childElementCount, 3 == k ? (h[a].children[1].style.fontSize = l[a], h[a].children[2].style.fontSize = l[a], 0 == a ? (h[a].children[1].innerHTML = "\u7279", h[a].children[2].innerHTML = "\u7C97") : 4 == a && (h[a].children[1].innerHTML = "\u7279", h[a].children[2].innerHTML = "\u7EC6")) : 2 == k && (h[a].children[1].style.fontSize = l[a], h[a].children[1].innerHTML = g[a]);
    }
  } else if ("zh-Hant" === a) {
    for (a = 0; 2 > a; a++) {
      q[a].value = b[a];
    }d = k.length;
    for (a = 0; a < d; a++) {
      k[a].innerHTML = e[a];
    }c = h.length;
    for (a = 0; a < c; a++) {
      k = h[a].childElementCount, 3 == k ? (h[a].children[1].style.fontSize = l[a], h[a].children[2].style.fontSize = l[a], 0 == a ? (h[a].children[1].innerHTML = "\u7279", h[a].children[2].innerHTML = "\u7C97") : 4 == a && (h[a].children[1].innerHTML = "\u7279", h[a].children[2].innerHTML = "\u7D30")) : 2 == k && (h[a].children[1].style.fontSize = l[a], h[a].children[1].innerHTML = g[a]);
    }
  }
}

function init(a) {
  var writingDiv = document.getElementById("writingDiv");
  var inputs = writingDiv.querySelectorAll("input");
  var palette = document.getElementById("palette");
  var penSize = document.getElementById("penSize");
  var f = 0;
  var e = 0;

  a.doneButton = writingDiv.querySelector('.textButton_Done');
  a.checkAgreementButton = writingDiv.querySelector('.textButton_Check_Agreement');
  a.undo = inputs[0];
  a.redo = inputs[1];
  a.clear = inputs[2];
  a.color = inputs[3];
  a.stoke = inputs[4];

  a.checkAgreementButton.onmousedown = function () {
    a.I(a.checkAgreementButton.getAttribute('action') || null, {});
  };
  a.doneButton.onmousedown = function () {
    var b;
    if (0 >= a.b.length) b = null;else {
      a.c = [-1, -1, -1, -1];
      for (b = 0; b < a.b.length; b++) {
        for (var c = 0; c < a.b[b].points.length; c++) {
          var d = a.b[b].points[c],
              e = a,
              f = d.x,
              d = d.y,
              k = 0 > f - 16 ? 0 : f - 16,
              h = 0 > d - 16 ? 0 : d - 16;
          e.c[0] = 0 > e.c[0] ? k : e.c[0];
          e.c[0] = e.c[0] > k ? k : e.c[0];
          e.c[1] = e.c[1] < f + 16 ? f + 16 : e.c[1];
          e.c[2] = 0 > e.c[2] ? h : e.c[2];
          e.c[2] = e.c[2] > h ? h : e.c[2];
          e.c[3] = e.c[3] < d + 16 ? d + 16 : e.c[3];
        }
      }b = a.canvas.getContext("2d").getImageData(a.c[0], a.c[2], a.c[1] - a.c[0], a.c[3] - a.c[2]);
      c = document.createElement("CANVAS");
      e = c.getContext("2d");
      c.height = b.height;
      c.width = b.width;
      e.putImageData(b, 0, 0);
      b = c.toDataURL("image/png");
    }
    c = '{"version":"' + getVersion() + '","strokes":[';
    for (f = 0; f < a.b.length; f++) {
      0 != f && (c += ",");
      c += '{"time":' + a.b[f].time + ",";
      c += '"color":"' + a.b[f].color + '",';
      c += '"penSize":"' + a.b[f].penSize + '",';
      c += '"points":[';
      for (d = 0; d < a.b[f].points.length; d++) {
        e = a.b[f].points[d], 0 != d && (c += ","), c += '{"x":' + Math.round(100 * e.x) / 100 + ',"y":' + Math.round(100 * e.y) / 100 + ',"t":' + (e.t || 0) + "}";
      }c += "]}";
    }
    a.I('signdone', { pngData: b, pointsData: c + "]}" });
  };
  a.undo.onmousedown = function () {
    if ("edit" === a.status) if (a.u && a.u.length) a.b = a.u, a.u = null, y(a);else if (a.b.length) {
      var b = a.b.pop();
      a.B.push([b]);
      y(a);
    }
  };
  a.redo.onmousedown = function () {
    "edit" === a.status && a.B.length && (a.b = a.b.concat(a.B.pop()), y(a));
  };
  a.clear.onmousedown = function () {
    B(a);
  };
  a.color.onmousedown = function () {
    f ? (f = e = 0, penSize.style.display = "none", palette.style.display = "none") : (f = 1, palette.style.display = "inline", e = 0, penSize.style.display = "none");
  };
  a.stoke.onmousedown = function () {
    e ? (f = e = 0, penSize.style.display = "none") : (e = 1, penSize.style.display = "inline", f = 0);
    palette.style.display = "none";
  };
  palette.onclick = function (d) {
    d = d.target;
    "LI" == d.tagName && (a.color = d.getAttribute("value"), f = e = 0, penSize.style.display = "none", palette.style.display = "none");
  };
  penSize.onclick = function (d) {
    d = d.target;
    "DIV" == d.tagName && (a.h = parseInt(d.getAttribute("value")), f = e = 0, penSize.style.display = "none", palette.style.display = "none");
  };
}

function EPaper(a, d) {
  if (a.nodeType) this.canvas = a;else if ("string" == typeof a) this.canvas = document.getElementById(a);else return;
  var b = document.getElementById(d),
      c = b.offsetHeight;
  this.canvas.width = b.offsetWidth;
  this.canvas.height = c - 44 - 45;
  E(this);
  this.b = [];
  this.B = [];
  init(this);
}

EPaper.init = function (a) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  document.getElementById(a).innerHTML = "<div id='writingDiv' class='writingDiv'>\n                                            <div class='topBar'>\n                                              <label>\u8BF7\u5728\u4E0B\u65B9\u624B\u5199\u60A8\u7684\u59D3\u540D</label>\n                                              <button class='textButton textButton_Check_Agreement' action=\"agreement\">\u67E5\u770B\u5408\u540C</button>\n                                            </div>\n                                            <div class='paperCanvas'>\n                                              <canvas id='ePaperCanvas' height='100%' width='100%' class='ePaperCanvas'></canvas>\n                                            </div>\n                                            <button class=\"textButton_Done\">\u5B8C\u6210</button>\n                                            <div class='bottomBar'>\n                                              <div class='bottomCol'><input class='bottomButton undo' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton redo' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton clear' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton color' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton stroke' type='button'/></div>\n                                            </div>\n                                            <ol class='palette' id='palette'>\n                                              <li value='rgba(111,138,37,1)' style='background:rgb(111,138,37)'>\u7EFF\u8272</li>\n                                              <li value='rgba(255,198,2,1)' style='background:rgb(255,198,2)'>\u9EC4\u8272</li>\n                                              <li value='rgba(51,111,172,1)' style='background:rgb(51,111,172)'>\u84DD\u8272</li>\n                                              <li value='rgba(0,0,0,1)' style='background:rgb(0,0,0)'>\u9ED1\u8272</li>\n                                              <li value='rgba(255,0,0,1)' style='background:rgb(255,0,0)'>\u7EA2\u8272</li>\n                                            </ol>\n                                            <ol class='penSize' id='penSize'>\n                                              <li><input type='radio' name='fSize' value='18'/><div value='18'>\u7279</div><div>\u7C97</div></li>\n                                              <li><input type='radio' name='fSize' value='12'/><div style='margin-top:14px;' value='12'>\u7C97</div></li>\n                                              <li><input type='radio' name='fSize' value='8' checked/><div style='margin-top:14px;' value='8'>\u4E2D</div></li>\n                                              <li><input type='radio' name='fSize' value='6'/><div style='margin-top:14px;' value='6'>\u7EC6</div></li>\n                                              <li><input type='radio' name='fSize' value='3'/><div value='3'>\u7279</div><div>\u7EC6</div></li>\n                                            </ol>\n                                          </div>";
  return new EPaper("ePaperCanvas", a);
};

var r = EPaper.prototype;
r.i = 1;
r.color = "rgba(0,0,0,1)";
r.h = 8;
r.width = 320;
r.j = null;
r.u = null;
r.status = "edit";
r.c = [-1, -1, -1, -1];
r.J = .4;

function E(a) {
  if (a.canvas.getContext) {
    a.a = a.canvas.getContext("2d");
    a.a.strokeStyle = a.color;
    a.a.fillStyle = a.color;
    F(a.canvas, "selectstart", function () {
      return !1;
    });
    var d = function d(b) {
      if ("edit" === a.status) {
        var c, f;
        if ("touchstart" == b.type) {
          if (2 <= b.touches.length) return;
          c = b.touches[0].pageX;
          f = b.touches[0].pageY;
          G(a.canvas, "mousedown", d);
        } else c = b.pageX, f = b.pageY;
        a.m = a.canvas.getBoundingClientRect();
        a.m = {
          left: a.m.left + (window.scrollX || window.pageXOffset),
          top: a.m.top + (window.scrollY || window.pageYOffset)
        };
        c -= a.m.left;
        f -= a.m.top;
        a.j = {
          time: new Date(),
          points: [{
            x: c,
            y: f,
            La: 0
          }],
          color: a.color,
          penSize: a.h
        };
        H(a, c, f, b.type);
        b.preventDefault();
      }
    };
    F(a.canvas, "touchstart", d);
    F(a.canvas, "mousedown", d);
  }
}

function H(a, d, b, c) {
  window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty();
  a.a.save();
  a.a.moveTo(d, b);
  a.g = null;
  a.o = null;
  a.f = [];
  a.D = 0;
  a.i = a.h / 2 * (a.width / 320);
  a.s && (G(document, "mousemove", a.s), G(document, "touchmove", a.s), G(document, "mouseup", a.v), G(document, "touchend", a.v));
  a.s = function (b) {
    if ("edit" === a.status) {
      var c, d;
      if ("touchmove" == b.type) {
        if (2 <= b.touches.length) return;
        c = b.touches[0].pageX;
        d = b.touches[0].pageY;
      } else c = b.pageX, d = b.pageY;
      c -= a.m.left;
      d -= a.m.top;
      a.j.points.push({
        x: c,
        y: d,
        t: new Date() - a.j.time
      });
      I(a, c, d);
      b.preventDefault();
    }
  };
  a.v = function () {
    "edit" === a.status && (J(a), a.b.length ? a.j.time -= a.M : (a.M = a.j.time, a.j.time = a.j.time.getTime()), a.b.push(a.j), a.u = null, a.B = [], a.j = null);
  };
  "touchstart" == c ? (F(document, "touchmove", a.s), F(document, "touchend", a.v)) : (F(document, "mousemove", a.s), F(document, "mouseup", a.v));
  a.g = null;
  I(a, d, b);
}

function I(a, d, b) {
  var c, f;
  if (a.f.length && (c = a.f[a.f.length - 1], f = Math.sqrt((c.x - d) * (c.x - d) + (c.y - b) * (c.y - b)), 0 == f)) return;
  navigator.userAgent.match(/ OS (\d+).*? Mac OS/) && !a.D && 2 == a.f.length && 4 * c < a.f[1].w && (a.f[0].x -= 2 / 3 * (a.f[0].x - a.f[1].x), a.f[0].y -= 2 / 3 * (a.f[0].y - a.f[1].y), a.f[1].w /= 2 / 3 * a.f[1].w);
  c = {
    x: d,
    y: b,
    w: f
  };
  a.f.push(c);
  3 <= a.f.length && (c = a.f.shift(), K(a, c));
}

function K(a, d, b) {
  var c = d.x,
      f = d.y,
      e = d.w;
  if (!a.g || 0 !== e) {
    a.G = a.f.length ? a.f[0] : null;
    if (e) {
      a.a.moveTo(a.g.x, a.g.y);
      var m;
      !a.D && a.G && e > 3 * a.G.w && (e /= 4, m = 1);
      a.D = 1;
      var g = a.width / 320 * a.h;
      b || (b = e < .003125 * a.width ? 1.625 * g : e < .00625 * a.width ? 1.375 * g : e < .009375 * a.width ? 1.25 * g : e < .015625 * a.width ? 1.125 * g : e < .021875 * a.width ? g : e < .028125 * a.width ? .875 * g : e < .034375 * a.width ? .75 * g : e < .046875 * a.width ? .625 * g : e < .0625 * a.width ? .5 * g : .375 * g);
      a.F = b;
      if (m) for (m = 1; 3 >= m; m++) {
        L(a, c + m / 3 * (a.g.x - c), f + m / 3 * (a.g.y - f), e);
      }
    }
    L(a, c, f, e);
    a.g = d;
  }
}

function J(a) {
  G(document, "mousemove", a.s);
  G(document, "touchmove", a.s);
  G(document, "mouseup", a.v);
  G(document, "touchend", a.v);
  --a.a.i;
  for (var d; a.f.length;) {
    d = a.f.shift(), K(a, d, a.width / 320 * a.h / 8);
  }
}

function B(a) {
  "edit" === a.status && (a.g = null, a.c = [-1, -1, -1, -1], a.b.length && (a.u = a.b), a.b = [], a.a.beginPath(), a.a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.a.closePath());
}

function M(a) {
  function d() {
    b.color = c;
    b.h = f;
    b.l >= b.b.length ? b.status = b.H : (clearTimeout(b.A), b.A = setTimeout(function () {
      M(b);
    }, 300));
  }
  var b = a,
      c = a.color,
      f = a.h,
      e = a.b[a.l];
  if (e && "play" == a.status) {
    a.color = e.color;
    a.h = e.penSize;
    H(a, e.points[0].x, e.points[0].y);
    1 == e.points.length && (J(b), d());
    var m = 1,
        g,
        n = 0;
    g = e.points[m];
    (function () {
      g && (I(b, g.x, g.y), m >= e.points.length - 1 && (J(b), d()), m++, g = e.points[m]) && (clearTimeout(b.A), b.A = setTimeout(arguments.callee, g.t - n), n = g.t);
    })();
    a.l++;
  }
}

function y(a) {
  function d() {
    b.color = c;
    b.h = f;
    b.l >= b.b.length && (b.status = "edit");
  }
  var b = a,
      c = a.color,
      f = a.h;
  a.a.clearRect(0, 0, a.canvas.width, a.canvas.height);
  a.a.beginPath();
  a.l = 0;
  for (var e = a.b[a.l]; e;) {
    a.color = e.color;
    a.h = e.penSize;
    H(a, e.points[0].x, e.points[0].y);
    1 == e.points.length && (J(a), d());
    for (var m = 1, g = 1; m < e.points.length; m++) {
      var n = e.points[g];
      g++;
      I(a, n.x, n.y);
      g >= e.points.length && (J(a), d());
    }
    a.l++;
    e = a.b[a.l];
  }
}

function L(a, d, b, c) {
  var f = {
    x: d,
    y: b
  },
      e = 8,
      m = a.i;
  a.a.fillStyle = a.color;
  a.a.strokeStyle = a.color;
  if (a.g) {
    e = Math.floor(Math.abs(c) / (a.i / 3));
    if (1 < e) for (m = a.i, c = 0; c < e; c++) {
      m -= (m - a.F) / (8 < e ? e : 8);
    } else Math.abs(a.i - a.F) > a.width / 320 * a.h * .025 && (m = a.i - (a.i - a.F) / 8);
    d = null;
    if (0 < a.f.length) {
      d = a.g;
      b = a.f[0];
      var e = a.J,
          g = b.x - d.x,
          n = b.y - d.y,
          l = N(d, f),
          q = N(f, b),
          k = l + q;
      d = 0 == l || 0 == q || (f.x - d.x) / (f.y - d.y) == (f.x - b.x) / (f.y - b.y) ? null : [{
        x: f.x - g * e * l / k,
        y: f.y - n * e * l / k
      }, {
        x: f.x + g * e * q / k,
        y: f.y + n * e * q / k
      }];
    }
    b = [a.g];
    if ((a.o || d) && c > 2 * m) {
      e = d ? d[0] : f;
      a.o = null == a.o ? a.g : a.o;
      g = a.g;
      n = a.o;
      c = c / (2 * m);
      l = [];
      for (q = 0; q < c; q++) {
        var k = (q + 1) / (c + 1),
            h,
            A,
            v,
            z,
            x,
            p,
            w,
            C;
        v = 3 * (n.x - g.x);
        A = 3 * (e.x - n.x) - v;
        h = f.x - g.x - v - A;
        p = 3 * (n.y - g.y);
        x = 3 * (e.y - n.y) - p;
        z = f.y - g.y - p - x;
        w = k * k;
        C = w * k;
        l.push({
          x: h * C + A * w + v * k + g.x,
          y: z * C + x * w + p * k + g.y
        });
      }
      b = b.concat(l);
    }
    b.push(f);
    f = b;
    b = a.i;
    e = m;
    q = b;
    for (g = 1; g < f.length; g++) {
      n = (e - b) / (f.length - 1) + q, c = a, p = f[g - 1], l = f[g], k = n, z = q * Math.sin(Math.atan((l.y - p.y) / (l.x - p.x))), w = q * Math.cos(Math.atan((l.y - p.y) / (l.x - p.x))), x = k * Math.sin(Math.atan((l.y - p.y) / (l.x - p.x))), v = k * Math.cos(Math.atan((l.y - p.y) / (l.x - p.x))), h = p.x + z, A = p.y - w, z = p.x - z, p = p.y + w, w = l.x + x, C = l.y - v, x = l.x - x, v = l.y + v, c.a.beginPath(), c.a.moveTo(h, A), c.a.lineTo(w, C), c.a.lineTo(x, v), c.a.lineTo(z, p), c.a.lineTo(h, A), c.a.fill(), c.a.closePath(), c.a.lineWidth = q, c.a.beginPath(), c.a.arc(l.x, l.y, k, 0, 2 * Math.PI), c.a.fill(), c.a.closePath(), q = n;
    }a.a.lineWidth = a.i = m;
    !d || 1 >= d.length ? a.o = null : a.o = d[1];
  } else a.a.beginPath(), a.a.fillStyle = a.color, a.a.arc(d, b, a.i, 0, 2 * Math.PI), a.a.fill(), a.a.closePath();
}

function N(a, d) {
  return Math.sqrt(Math.pow(d.x - a.x, 2) + Math.pow(d.y - a.y, 2));
}

r.playWithJsonN = function (a) {
  a = eval("(" + a + ")").strokes;
  if (!(0 >= a.length)) {
    B(this);
    for (var d = [], b = 0; b < a.length; b++) {
      for (var c = [], f = 0; f < a[b].points.length; f++) {
        c.push({
          x: a[b].points[f].x,
          y: a[b].points[f].y,
          t: a[b].points[f].t
        });
      }d.push({
        time: a[b].time,
        points: c,
        color: a[b].color,
        penSize: a[b].penSize
      });
    }
    this.b = d;
    0 != this.b.length && ("play" == this.status ? (this.status = this.H, clearTimeout(this.A), y(this)) : (this.H = this.status, this.status = "play", this.a.clearRect(0, 0, this.canvas.width, this.canvas.height), this.a.beginPath(), this.l = 0, M(this)));
  }
};

function F(a, d, b) {
  a.attachEvent ? a.attachEvent("on" + d, b) : a.addEventListener(d, b, !1);
}

function G(a, d, b) {
  a.detachEvent ? a.detachEvent("on" + d, b) : a.removeEventListener(d, b, !1);
}

r.setCallback = function (a) {
  "function" === typeof a && (this.I = a);
};

/* harmony default export */ __webpack_exports__["a"] = (EPaper);

/***/ }),

/***/ "spA4":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: (_vm.panelStyle),
    attrs: {
      "id": "panel"
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-25e8c5a4", module.exports)
  }
}

/***/ }),

/***/ "xPd5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/previous_press.png";

/***/ }),

/***/ "yeCG":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/color.png";

/***/ })

});
//# sourceMappingURL=3.js.map