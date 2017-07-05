webpackJsonp([0],{

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(465)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(413),
  /* template */
  __webpack_require__(447),
  /* scopeId */
  "data-v-255f9644",
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/borrow/BorrowerInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BorrowerInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-255f9644", Component.options)
  } else {
    hotAPI.reload("data-v-255f9644", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = contractInfo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);


function contractInfo(data) {
  return {
    idCard: data.Idcard,
    cardName: data.Cardname,

    bankCard: data.Bankcard,
    bankPhone: data.Bankphone,
    bank: data.Bankname,
    loanAmount: data.Loanamount,
    totalAmount: data.Totalamount,
    endDate: __WEBPACK_IMPORTED_MODULE_0_moment___default()(data.Enddate).format('YYYY年MM月DD日'),
    startDate: __WEBPACK_IMPORTED_MODULE_0_moment___default()(data.Startdate).format('YYYY年MM月DD日')
  };
}

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

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var clickoutsideContext = '@@clickoutsideContext';

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: function bind(el, binding, vnode) {
    var documentHandler = function documentHandler(e) {
      if (vnode.context && !el.contains(e.target)) {
        vnode.context[el[clickoutsideContext].methodName]();
      }
    };
    el[clickoutsideContext] = {
      documentHandler: documentHandler,
      methodName: binding.expression,
      arg: binding.arg || 'click'
    };
    document.addEventListener(el[clickoutsideContext].arg, documentHandler);
  },
  update: function update(el, binding) {
    el[clickoutsideContext].methodName = binding.expression;
  },
  unbind: function unbind(el) {
    document.removeEventListener(el[clickoutsideContext].arg, el[clickoutsideContext].documentHandler);
  },
  install: function install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
});

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    showSupportBanks: function showSupportBanks() {
      this.$messagebox('支持银行列表：', '农业银行、中国银行、工商银行、建设银行、交通银行、兴业银行、中信银行、光大银行、上海银行');
    }
  }
});

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui_lib_cell_style_css__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui_lib_cell_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui_lib_cell_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui_lib_cell__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui_lib_cell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mint_ui_lib_cell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mint_ui_lib_field_style_css__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mint_ui_lib_field_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mint_ui_lib_field_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_field__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_clickoutside_js__ = __webpack_require__(389);







var _components;



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'fb-field',
  components: (_components = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_field___default.a.name, __WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_field___default.a), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_3_mint_ui_lib_cell___default.a.name, __WEBPACK_IMPORTED_MODULE_3_mint_ui_lib_cell___default.a), _components),

  data: function data() {
    return {
      active: false,
      currentValue: this.value
    };
  },


  directives: {
    Clickoutside: __WEBPACK_IMPORTED_MODULE_6__common_clickoutside_js__["a" /* default */]
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    rows: String,
    label: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: Boolean,
    state: {
      type: String,
      default: 'default'
    },
    value: {},
    attr: Object
  },

  methods: {
    doCloseActive: function doCloseActive() {
      this.active = false;
    },
    handleInput: function handleInput(evt) {
      this.currentValue = evt.target.value;
    },
    handleClear: function handleClear() {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
    }
  },

  watch: {
    value: function value(val) {
      this.currentValue = val;
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
    },


    attr: {
      immediate: true,
      handler: function handler(attrs) {
        var _this = this;

        this.$nextTick(function () {
          var target = [_this.$refs.input, _this.$refs.textarea];
          target.forEach(function (el) {
            if (!el || !attrs) return;
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(attrs).map(function (name) {
              return el.setAttribute(name, attrs[name]);
            });
          });
        });
      }
    }
  }
});

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(396), __esModule: true };

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(398);
module.exports = __webpack_require__(6).Object.keys;

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(27)
  , core    = __webpack_require__(6)
  , fails   = __webpack_require__(47);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(72)
  , $keys    = __webpack_require__(71);

__webpack_require__(397)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(394),
  /* template */
  __webpack_require__(403),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/components/FbField.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FbField.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a4eae24c", Component.options)
  } else {
    hotAPI.reload("data-v-a4eae24c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('mt-cell', {
    directives: [{
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: (_vm.doCloseActive),
      expression: "doCloseActive"
    }],
    staticClass: "mint-field",
    class: [{
      'is-textarea': _vm.type === 'textarea',
      'is-nolabel': !_vm.label
    }],
    attrs: {
      "title": _vm.label
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._t("label")], 2), _vm._v(" "), (_vm.type === 'textarea') ? _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "textarea",
    staticClass: "mint-field-core",
    attrs: {
      "placeholder": _vm.placeholder,
      "rows": _vm.rows,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "change": function($event) {
        _vm.$emit('change', _vm.currentValue)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _c('input', {
    ref: "input",
    staticClass: "mint-field-core",
    attrs: {
      "placeholder": _vm.placeholder,
      "number": _vm.type === 'number',
      "type": _vm.type,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": _vm.currentValue
    },
    on: {
      "change": function($event) {
        _vm.$emit('change', _vm.currentValue)
      },
      "focus": function($event) {
        _vm.active = true
      },
      "input": _vm.handleInput
    }
  }), _vm._v(" "), (!_vm.disableClear) ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentValue && _vm.type !== 'textarea' && _vm.active),
      expression: "currentValue && type !== 'textarea' && active"
    }],
    staticClass: "mint-field-clear",
    on: {
      "click": _vm.handleClear
    }
  }, [_c('i', {
    staticClass: "mintui mintui-field-error"
  })]) : _vm._e(), _vm._v(" "), (_vm.state) ? _c('span', {
    staticClass: "mint-field-state",
    class: ['is-' + _vm.state]
  }, [_c('i', {
    staticClass: "mintui",
    class: ['mintui-field-' + _vm.state]
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mint-field-other"
  }, [_vm._t("default")], 2)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a4eae24c", module.exports)
  }
}

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator_mixin_js__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_mixin_js__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_resources_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_utils_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_adaptors_js__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vuex__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_FbField_vue__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_FbField_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_FbField_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);















/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_3__validator_mixin_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__common_mixin_js__["a" /* default */]],
  components: {
    FbField: __WEBPACK_IMPORTED_MODULE_10__components_FbField_vue___default.a
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    __WEBPACK_IMPORTED_MODULE_5__common_resources_js__["a" /* QueryContract */].get().then(function (res) {
      return res.json();
    }).then(function (data) {
      next(function (vm) {
        if (data.data.content) {
          vm.contractInfoHasHistory = true;
          __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(vm.model, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__common_adaptors_js__["a" /* contractInfo */])(data.data.content));
          vm.bankCardForShow = vm.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g, '$& ');
        }
      });
    });
  },


  watch: {
    'bankCardForShow': function bankCardForShow() {
      this.model.bankCard = this.bankCardForShow = this.bankCardForShow.replace(/\s/g, '');
      this.bankCardForShow = this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g, '$& ');
    }
  },
  validators: {
    'model.idCard': function modelIdCard(value) {
      return this.validate(value).required('请输入身份证号').length(18, '请正确输入18位身份证').custom(function () {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__common_utils_js__["c" /* isIdcard */])(value)) {
          return '请正确输入二代18位身份证';
        }
      });
    },
    'model.bankCard': function modelBankCard(value) {
      return this.validate(value).required('请输入银行卡号').custom(function () {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__common_utils_js__["b" /* isBankCard */])(value)) {
          return '请正确输入16-19位银行卡号';
        }
      });
    },
    'model.bankPhone': function modelBankPhone(value) {
      return this.validate(value).required('请输入手机号').digit('请正确输入手机号').regex('^1[3-9]\\d{9}$', '请正确输入手机号');
    },
    'model.bank': function modelBank(value) {
      return this.validate(value).required();
    }
  },
  methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_vuex__["c" /* mapMutations */])(['updateStateCode']), {
    showServiceChargeTip: function showServiceChargeTip() {
      var _user$integraluserlev = this.user.integraluserlevel,
          Creditmoney = _user$integraluserlev.Creditmoney,
          Managemoney = _user$integraluserlev.Managemoney;

      this.$messagebox('服务费包含', '\n        <table>\n          <tr><th>\u5BA1\u6838\u8D39\u7528\uFF1A</th><td>' + Creditmoney + '\u5143</td></tr>\n          <tr><th>\u8D26\u6237\u7BA1\u7406\u8D39\uFF1A</th><td>' + Managemoney + '\u5143</td></tr>\n        </table>');
    },
    getBank: function getBank() {
      var _this = this;

      if (this.validation.isPassed('model.bankCard')) {
        __WEBPACK_IMPORTED_MODULE_5__common_resources_js__["b" /* isDetectionBankCard */].get({
          bankCard: this.model.bankCard
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this.model.bank = data.data.bank;
          _this.bankCardNotSupported = data.ret === __WEBPACK_IMPORTED_MODULE_6__constants_js__["a" /* RET_CODE_MAP */].BANK_CARD_NOT_SUPPORTED;
        });
      }
    },
    submit: function submit() {
      var _this2 = this;

      if (this.bankCardNotSupported) {
        this.$toast('抱歉，您选择的银行卡不支持！', 'error');
        return;
      }

      this.$validate().then(function (success) {
        if (success) {
          __WEBPACK_IMPORTED_MODULE_5__common_resources_js__["j" /* SetAgreementMsg */].get(_this2.model).then(function (res) {
            return res.json();
          }).then(function (data) {
            if (data.ret === __WEBPACK_IMPORTED_MODULE_6__constants_js__["a" /* RET_CODE_MAP */].OK) {
              _this2.updateStateCode(__WEBPACK_IMPORTED_MODULE_6__constants_js__["b" /* CUST_STATE_CODE_MAP */].CONTRACT_INFO_FILLED);
              _this2.$router.push({
                name: 'signature'
              });
            }
          });
        } else {
          _this2.$toast(_this2.validation.firstError(), 'error');
        }
      });
    },
    goChangeBankCard: function goChangeBankCard() {
      this.$router.push({
        name: 'changeBankCardStep1'
      });
    }
  }),
  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_vuex__["b" /* mapGetters */])(['stateCode']), {
    serviceCharge: function serviceCharge() {
      var _user$integraluserlev2 = this.user.integraluserlevel,
          Creditmoney = _user$integraluserlev2.Creditmoney,
          Managemoney = _user$integraluserlev2.Managemoney;

      return Creditmoney + Managemoney;
    },
    virtualMoney: function virtualMoney() {
      var _user$integraluserlev3 = this.user.integraluserlevel,
          Limit = _user$integraluserlev3.Limit,
          Creditmoney = _user$integraluserlev3.Creditmoney,
          Managemoney = _user$integraluserlev3.Managemoney;

      return Limit - Creditmoney - Managemoney;
    }
  }),
  data: function data() {
    var stateUser = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.$store.getters.user));
    return {
      qmNoteVisible: +__WEBPACK_IMPORTED_MODULE_11_moment___default()().toDate() <= +new Date('2017-04-05 12:00:00'),
      contractInfoHasHistory: false,
      bankCardNotSupported: false,
      countdownVisible: false,
      bankCardForShow: '',
      model: {
        name: stateUser.UserinfoValLogin.Name,
        idCard: null,
        bankCard: null,
        bank: '',
        bankPhone: null
      },
      user: stateUser
    };
  }
});

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.loan-agreement[data-v-255f9644] {\n  margin-top: 5px;\n}\nsmall.note[data-v-255f9644] {\n  display: block;\n  padding: 10px;\n  color: #888;\n  line-height: 1.8em;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/borrow/src/views/borrow/BorrowerInfo.vue"],"names":[],"mappings":";AA8NA;EACE,gBAAe;CAChB;AAED;EAEI,eAAc;EACd,cAAa;EACb,YAAW;EACX,mBAAkB;CACnB","file":"BorrowerInfo.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loan-agreement {\n  margin-top: 5px;\n}\n\nsmall {\n  &.note {\n    display: block;\n    padding: 10px;\n    color: #888;\n    line-height: 1.8em;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "borrow-info"
  }, [_c('form', {
    staticClass: "borrow-form",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit()
      }
    }
  }, [_c('div', {
    staticClass: "fields-header"
  }, [_vm._v("借款方案")]), _c('div', {
    staticClass: "fields"
  }, [_c('mt-cell', {
    attrs: {
      "title": "借款金额",
      "value": _vm._f("fbCurrency")(_vm.user.integraluserlevel.Limit, '', '元')
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "借款天数",
      "value": _vm._f("fbAppend")(_vm.user.product.Length, '天')
    }
  }), _c('mt-cell', {
    attrs: {
      "value": _vm._f("fbCurrency")(_vm.serviceCharge, '', '元')
    }
  }, [_c('span', {
    slot: "title"
  }, [_vm._v("服务费"), _c('i', {
    staticClass: "iconfont ui-icon-info",
    on: {
      "click": _vm.showServiceChargeTip
    }
  })])]), _c('mt-cell', {
    attrs: {
      "title": "实际到账",
      "value": _vm._f("fbCurrency")(_vm.virtualMoney, '', '元')
    }
  })], 1), _c('div', {
    staticClass: "fields-header"
  }, [_vm._v("账户信息"), (!_vm.contractInfoHasHistory) ? _c('small', [_c('i', {
    staticClass: "iconfont ui-icon-warn"
  }), _vm._v("请填写您的真实信息，否则会影响借款。")]) : _vm._e()]), _c('div', {
    staticClass: "fields"
  }, [_c('mt-cell', {
    attrs: {
      "title": "姓名",
      "value": _vm._f("fbFalse")(_vm.user.UserinfoValLogin.Name)
    }
  }), (!_vm.contractInfoHasHistory) ? [_c('mt-field', {
    attrs: {
      "label": "身份证号",
      "placeholder": "请输入身份证号",
      "state": _vm.getFieldState('model.idCard')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'model.idCard')
      }
    },
    model: {
      value: (_vm.model.idCard),
      callback: function($$v) {
        _vm.model.idCard = $$v
      },
      expression: "model.idCard"
    }
  }), _c('fb-field', {
    directives: [{
      name: "mt-field-blur",
      rawName: "v-mt-field-blur",
      value: ({
        blur: _vm.getBank
      }),
      expression: "{blur:getBank}"
    }],
    attrs: {
      "label": "银行卡号",
      "placeholder": "请输入银行卡号",
      "state": _vm.getFieldState('model.bankCard')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'model.bankCard')
      }
    },
    model: {
      value: (_vm.bankCardForShow),
      callback: function($$v) {
        _vm.bankCardForShow = $$v
      },
      expression: "bankCardForShow"
    }
  }, [_c('span', {
    slot: "label"
  }, [_vm._v("银行卡号"), _c('i', {
    staticClass: "iconfont ui-icon-info",
    on: {
      "click": function($event) {
        _vm.showSupportBanks()
      }
    }
  })])]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model.bankCard),
      expression: "model.bankCard"
    }],
    attrs: {
      "type": "hidden"
    },
    domProps: {
      "value": (_vm.model.bankCard)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.model.bankCard = $event.target.value
      }
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "开户行",
      "value": _vm._f("fbFalse")(_vm.model.bank)
    }
  }), _c('mt-field', {
    attrs: {
      "label": "银行预留手机号",
      "placeholder": "请输入银行预留手机号",
      "state": _vm.getFieldState('model.bankPhone')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'model.bankPhone')
      }
    },
    model: {
      value: (_vm.model.bankPhone),
      callback: function($$v) {
        _vm.model.bankPhone = $$v
      },
      expression: "model.bankPhone"
    }
  })] : _vm._e(), (_vm.contractInfoHasHistory) ? [_c('mt-cell', {
    attrs: {
      "title": "身份证号",
      "value": _vm.model.idCard
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "银行卡号"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.bankCardForShow))])]), _c('mt-cell', {
    attrs: {
      "title": "开户行",
      "value": _vm._f("fbFalse")(_vm.model.bank)
    }
  }), _c('mt-cell', {
    attrs: {
      "title": "银行预留手机号",
      "value": _vm.model.bankPhone
    }
  }), _c('mt-cell', {
    nativeOn: {
      "click": function($event) {
        _vm.goChangeBankCard()
      }
    }
  }, [_c('a', {
    staticClass: "small"
  }, [_vm._v("变更银行卡")])])] : _vm._e()], 2), _c('div', {
    staticClass: "form-buttons fixed"
  }, [_c('mt-button', {
    staticClass: "mint-button-block",
    attrs: {
      "type": "primary",
      "size": "large"
    }
  }, [_vm._v("立即提款")])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-255f9644", module.exports)
  }
}

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(422);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("87d59318", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-255f9644&scoped=true!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BorrowerInfo.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-255f9644&scoped=true!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BorrowerInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=0.js.map