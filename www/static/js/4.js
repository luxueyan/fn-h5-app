webpackJsonp([4],{

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(477)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(408),
  /* template */
  __webpack_require__(459),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/account/ChangeBankCardStep1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChangeBankCardStep1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a0ff6be", Component.options)
  } else {
    hotAPI.reload("data-v-7a0ff6be", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_vue_validator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_vue_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_simple_vue_validator__);

var Validator = __WEBPACK_IMPORTED_MODULE_0_simple_vue_validator___default.a.Validator;

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    Validator: Validator,
    validate: Validator.value,
    getFieldState: function getFieldState(field) {
      if (this.validation.hasError(field)) {
        return 'error';
      } else if (this.validation.isPassed(field)) {
        return 'success';
      }
      return '';
    },
    showFieldError: function showFieldError(event, field) {
      var et = event.target;
      if (et.classList.contains('mintui-field-error') && et.parentNode.classList.contains('mint-field-state')) {
        this.$toast(this.validation.firstError(field), 'error');
      }
    }
  }
});

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    start: function start() {
      var _self = this;
      this.handle = setInterval(function countDown() {
        if (_self.second > 0) {
          _self.second -= 1;
        } else {
          _self.end();
        }
      }, 1000);
    },
    end: function end() {
      clearInterval(this.handle);
      this.second = 59;
      this.$emit('countdown-over');
    }
  },

  data: function data() {
    return {
      handle: null,
      second: 59
    };
  }
});

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(393),
  /* template */
  __webpack_require__(402),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/components/FbCountdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FbCountdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e8c6c91", Component.options)
  } else {
    hotAPI.reload("data-v-0e8c6c91", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('small', [_vm._v(_vm._s(_vm.second) + " 秒后重发")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0e8c6c91", module.exports)
  }
}

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FbCountdown_vue__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FbCountdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_FbCountdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator_mixin_js__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_resources_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(44);









/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_2__validator_mixin_js__["a" /* default */]],
  components: {
    FbCountdown: __WEBPACK_IMPORTED_MODULE_1__components_FbCountdown_vue___default.a
  },

  validators: {
    'model.phoneMsg': function modelPhoneMsg(value) {
      return this.validate(value).required('请输入验证码').digit('请正确输入验证码').length(6, '请正确输入验证码');
    }
  },

  methods: {
    toGetMsgCode: function toGetMsgCode() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_3__common_resources_js__["d" /* updateInfoSendMsgFromPhone */].get().then(function (res) {
        return res.json();
      }).then(function (data) {
        if (data.ret === __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* RET_CODE_MAP */].OK) {
          _this.countdownVisible = true;
          _this.$refs.fnCountdown.start();
        }
      });
    },
    onCountdownOver: function onCountdownOver() {
      this.countdownVisible = false;
    },
    submit: function submit() {
      var _this2 = this;

      this.$validate().then(function (success) {
        if (success) {
          __WEBPACK_IMPORTED_MODULE_3__common_resources_js__["e" /* validateUpdateInfoMsgFromPhone */].get(_this2.model).then(function (res) {
            return res.json();
          }).then(function (data) {
            if (data.ret === __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* RET_CODE_MAP */].OK) {
              _this2.$router.push({
                name: 'changeBankCardStep2'
              });
            }
          });
        } else {
          _this2.$toast(_this2.validation.firstError(), 'error');
        }
      });
    }
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapGetters */])(['user'])),

  data: function data() {
    return {
      model: {
        phoneMsg: ''
      },
      countdownVisible: false
    };
  }
});

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"ChangeBankCardStep1.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('form', {
    staticClass: "change-bank-card-form",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit()
      }
    }
  }, [_c('div', {
    staticClass: "fields-header"
  }, [_vm._v("账户信息"), _c('small', [_vm._v("您即将变更银行卡信息，为保证您的安全，我们将向您的手机：" + _vm._s(_vm.user.phone) + "发送短信验证码，确认身份。")])]), _c('div', {
    staticClass: "fields"
  }, [_c('mt-field', {
    attrs: {
      "label": "",
      "placeholder": "请输入验证码",
      "state": _vm.getFieldState('model.phoneMsg')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'model.phoneMsg')
      }
    },
    model: {
      value: (_vm.model.phoneMsg),
      callback: function($$v) {
        _vm.model.phoneMsg = $$v
      },
      expression: "model.phoneMsg"
    }
  }, [_c('mt-button', {
    attrs: {
      "type": "default",
      "disabled": _vm.countdownVisible
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.toGetMsgCode()
      }
    }
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.countdownVisible),
      expression: "!countdownVisible"
    }]
  }, [_vm._v("发送验证码")]), _c('fb-countdown', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.countdownVisible),
      expression: "countdownVisible"
    }],
    ref: "fnCountdown",
    on: {
      "countdown-over": function($event) {
        _vm.onCountdownOver()
      }
    }
  })], 1)], 1)], 1), _c('div', {
    staticClass: "form-buttons"
  }, [_c('mt-button', {
    staticClass: "mint-button-block",
    attrs: {
      "type": "primary",
      "size": "large"
    }
  }, [_vm._v("下一步")])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7a0ff6be", module.exports)
  }
}

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(434);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("90411558", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7a0ff6be!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChangeBankCardStep1.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7a0ff6be!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChangeBankCardStep1.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=4.js.map