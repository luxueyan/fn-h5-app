webpackJsonp([3],{

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(474)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(407),
  /* template */
  __webpack_require__(456),
  /* scopeId */
  "data-v-66d2fb3a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66d2fb3a", Component.options)
  } else {
    hotAPI.reload("data-v-66d2fb3a", Component.options)
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

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.jpg";

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

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FbCountdown_vue__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FbCountdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_FbCountdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator_mixin_js__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(16);









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FbCountdown: __WEBPACK_IMPORTED_MODULE_1__components_FbCountdown_vue___default.a
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_2__validator_mixin_js__["a" /* default */]],
  validators: {
    'user.phone': function userPhone(value) {
      return this.validate(value).required('请输入手机号').digit('请正确输入手机号').regex('^1[3-9]\\d{9}$', '请正确输入手机号');
    },
    'user.code': function userCode(value) {
      return this.validate(value).required('请输入验证码').digit('请正确输入验证码').length(6, '请正确输入验证码');
    }
  },

  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.query.accesstoken) {
      to.query.accesstoken;
      __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].dispatch('updateToken', to.query.accesstoken);
      __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].dispatch('getUser').then(function (data) {
        next({
          name: to.query.to || 'authorizedTip'
        });
      });
    } else {
      next();
    }
  },
  mounted: function mounted() {
    this.redirect = this.$route.query.redirect;
    this.$route.query.openid && (this.user.openid = this.$route.query.openid);
    this.user.phone = this.$store.getters.user.phone || '';
  },


  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_vuex__["a" /* mapActions */])(['login', 'getMsgCode', 'getUser', 'updateToken']), {
    submit: function submit() {
      var _this = this;

      this.$validate().then(function (success) {
        if (success) {
          _this.login(_this.user).then(function (data) {
            _this.$router.push({
              name: _this.redirect || 'authorizedTip'
            });
          });
        } else {
          _this.$toast(_this.validation.firstError(), 'error');
        }
      });
    },
    toGetMsgCode: function toGetMsgCode() {
      var _this2 = this;

      this.$validate('user.phone').then(function (success) {
        if (success) {
          _this2.getMsgCode(_this2.user.phone).then(function (data) {
            if (data.ret === __WEBPACK_IMPORTED_MODULE_3__constants_js__["a" /* RET_CODE_MAP */].OK) {
              _this2.countdownVisible = true;
              _this2.$refs.fnCountdown.start();
            }
          });
        } else {
          _this2.$toast(_this2.validation.firstError('user.phone'), 'error');
        }
      });
    },
    onCountdownOver: function onCountdownOver() {
      this.countdownVisible = false;
    }
  }),

  data: function data() {
    return {
      redirect: null,
      countdownVisible: false,
      user: {
        UserinfoValLogin: {},
        integraluserlevel: {},
        phone: '',
        code: ''
      }
    };
  }
});

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.logo[data-v-66d2fb3a] {\n  background: white;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/src/views/Login.vue"],"names":[],"mappings":";AAkHA;EACE,kBAAiB;CAClB","file":"Login.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.logo {\n  background: white;\n}\n\n.login-form {\n  // padding: 10px 0;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._m(0), _c('form', {
    staticClass: "login-form",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit()
      }
    }
  }, [_c('div', {
    staticClass: "fields"
  }, [_c('mt-field', {
    attrs: {
      "label": "",
      "placeholder": "请输入手机号",
      "state": _vm.getFieldState('user.phone')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'user.phone')
      }
    },
    model: {
      value: (_vm.user.phone),
      callback: function($$v) {
        _vm.user.phone = $$v
      },
      expression: "user.phone"
    }
  }), _c('mt-field', {
    attrs: {
      "label": "",
      "placeholder": "请输入验证码",
      "state": _vm.getFieldState('user.code')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'user.code')
      }
    },
    model: {
      value: (_vm.user.code),
      callback: function($$v) {
        _vm.user.code = $$v
      },
      expression: "user.code"
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
  }, [_vm._v("登录")])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(399)
    }
  }), _c('small', [_vm._v("免审核借款1000元")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66d2fb3a", module.exports)
  }
}

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(431);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("5de0ec50", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66d2fb3a&scoped=true!../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66d2fb3a&scoped=true!../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=3.js.map