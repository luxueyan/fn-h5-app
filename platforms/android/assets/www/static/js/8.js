webpackJsonp([8],{

/***/ "+pef":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("7lfI")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("HgY0"),
  /* template */
  __webpack_require__("HzCO"),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/fn-h5-frontend/src/views/bank/AddBankStep1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AddBankStep1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32fb9efb", Component.options)
  } else {
    hotAPI.reload("data-v-32fb9efb", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ "4JGu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bankMixins; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_js__ = __webpack_require__("oiih");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_resources_js__ = __webpack_require__("3dbI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);








var bankNameIconList = [{
  name: '农业',
  icon: 'nongye'
}, {
  name: '中国银行',
  icon: 'zhongguo'
}, {
  name: '兴业',
  icon: 'nongye'
}, {
  name: '工商',
  icon: 'gongshang'
}, {
  name: '建设',
  icon: 'jianshen'
}, {
  name: '交通',
  icon: 'jiaotong'
}, {
  name: '北京',
  icon: 'beijing'
}, {
  name: '民生银行',
  icon: 'minsheng'
}, {
  name: '光大',
  icon: 'guangda'
}, {
  name: '上海',
  icon: 'shanghai'
}, {
  name: '中信',
  icon: 'zhongxin'
}, {
  name: '浙商',
  icon: 'zheshang'
}, {
  name: '邮政',
  icon: 'youzhengchuxu'
}, {
  name: '华夏',
  icon: 'huaxia'
}, {
  name: '渤海',
  icon: 'bohai'
}, {
  name: '平安',
  icon: 'pingan'
}, {
  name: '恒丰',
  icon: 'hengfeng'
}, {
  name: '浦发',
  icon: 'pufa'
}, {
  name: '招商',
  icon: 'zhaoshang'
}, {
  name: '广发',
  icon: 'guangfa'
}];

var bankMixins = {
  methods: {
    getBankIcon: function getBankIcon(name) {
      var bank = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_lodash__["find"])(bankNameIconList, function (v) {
        return ~name.indexOf(v.name);
      });
      return (bank ? bank.icon : '') + 'yinhang';
    },
    showSupportBanks: function showSupportBanks() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var bankCards, data;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                bankCards = _this.$store.getters.supportBankCards;

                if (!bankCards.length) {
                  _context.next = 5;
                  break;
                }

                _this.$msgBox('支持银行列表：', bankCards.join('、'));
                _context.next = 10;
                break;

              case 5:
                _context.next = 7;
                return __WEBPACK_IMPORTED_MODULE_5__common_resources_js__["e" /* supportBankCards */].get().then(function (res) {
                  return res.json();
                });

              case 7:
                data = _context.sent;

                _this.$store.commit('updateSupportBankCards', data.data);
                _this.$msgBox('支持银行列表：', data.data.join('、'));

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
};



/* harmony default export */ __webpack_exports__["b"] = ({
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_vuex__["a" /* mapActions */])(['getMsgCode']), bankMixins.methods, {
    getBank: function getBank() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this2.validation.isPassed('model.bankCard')) {
                  setTimeout(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
                    var data;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_5__common_resources_js__["f" /* bankCardInfo */].get({
                              cardNo: _this2.model.bankCard
                            }).then(function (res) {
                              return res.json();
                            });

                          case 2:
                            data = _context2.sent;

                            if (data.code === __WEBPACK_IMPORTED_MODULE_3__constants_js__["a" /* RET_CODE_MAP */].OK) {
                              _this2.model.bankName = data.data.bankName;
                              _this2.model.bankCode = data.data.bankCode;
                            } else {
                              _this2.model.bankName = '自动生成';
                              _this2.model.bankCode = '';
                            }
                            _this2.bankCardNotSupported = data.code === __WEBPACK_IMPORTED_MODULE_3__constants_js__["a" /* RET_CODE_MAP */].BANK_CARD_NOT_SUPPORTED;
                            _this2.$validate('model.bankCard');

                          case 6:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this2);
                  })), 100);
                }

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }))();
    },
    toGetMsgCode: function toGetMsgCode() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var success, data;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this3.$validate(_this3.validatePhoneModel);

              case 2:
                success = _context4.sent;

                if (!success) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 6;
                return _this3.getMsgCode({
                  phone: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_lodash__["get"])(_this3, _this3.validatePhoneModel),
                  label: _this3.$route.meta.captchaSendType || ''
                });

              case 6:
                data = _context4.sent;

                if (data.code === __WEBPACK_IMPORTED_MODULE_3__constants_js__["a" /* RET_CODE_MAP */].OK) {
                  _this3.countdownVisible = true;
                  _this3.$refs.fnCountdown.start();
                }
                _context4.next = 11;
                break;

              case 10:
                _this3.$toast(_this3.validation.firstError(_this3.validatePhoneModel), 'error');

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3);
      }))();
    },
    onCountdownOver: function onCountdownOver() {
      this.countdownVisible = false;
    }
  }),

  watch: {
    'bankCardForShow': function bankCardForShow() {
      this.model.bankCard = this.bankCardForShow = this.bankCardForShow.replace(/\s/g, '');
      this.bankCardForShow = this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g, '$& ');
    },
    'model.bankCard': function modelBankCard() {
      this.bankCardNotSupported = false;
    }
  },

  data: function data() {
    return {
      bankCardForShow: '',
      bankCardNotSupported: false,
      validatePhoneModel: 'user.phone',
      countdownVisible: false
    };
  }
});

/***/ }),

/***/ "7lfI":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("jbpG");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("617db4ff", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-32fb9efb!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddBankStep1.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-32fb9efb!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddBankStep1.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "HgY0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_common_mixin_js__ = __webpack_require__("4JGu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_validator_mixin_js__ = __webpack_require__("nWjG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_utils_js__ = __webpack_require__("JaHG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__("NYxO");










/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_3__views_common_mixin_js__["b" /* default */], __WEBPACK_IMPORTED_MODULE_4__views_validator_mixin_js__["a" /* default */]],
  methods: {
    submit: function submit() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var success;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$validate();

              case 2:
                success = _context.sent;

                if (success) {
                  _this.$router.push({
                    name: 'addBankStep2',
                    params: {
                      model: _this.model,
                      from: _this.$route.from
                    }
                  });
                } else {
                  _this.$toast(_this.validation.firstError(), 'error');
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_vuex__["b" /* mapGetters */])(['user'])),

  validators: {
    'model.bankCard': function modelBankCard(value) {
      var _this2 = this;

      return this.validate(value).required('请输入银行卡号').custom(function () {
        if (_this2.bankCardNotSupported) {
          return '抱歉，您选择的银行卡不支持！';
        } else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__common_utils_js__["d" /* isBankCard */])(value)) {
          return '请正确输入16-19位银行卡号';
        }
      });
    },
    'model.bankReservePhone': function modelBankReservePhone(value) {
      return this.validate(value).required('请输入手机号').digit('请正确输入手机号').regex('^1[3-9]\\d{9}$', '请正确输入手机号');
    },
    'model.bankName': function modelBankName(value) {
      return this.validate(value).required();
    },
    'model.name': function modelName(value) {
      return this.validate(value).required('请输入您的姓名');
    }
  },

  data: function data() {
    return {
      model: {
        name: this.$store.getters.user.name,
        bankCard: '',
        bankName: '自动匹配',
        bankCode: '',
        bankReservePhone: '',
        captcha: '',
        isDefault: true
      }
    };
  }
});

/***/ }),

/***/ "HzCO":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "add-bank-step1"
  }, [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit()
      }
    }
  }, [_vm._m(0), _c('div', {
    staticClass: "fields"
  }, [(_vm.user.name) ? _c('mt-cell', {
    attrs: {
      "title": "持卡人",
      "value": _vm.model.name
    }
  }) : _vm._e(), (!_vm.user.name) ? _c('mt-field', {
    attrs: {
      "label": "姓名",
      "placeholder": "请输入真实姓名",
      "state": _vm.getFieldState('model.name')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'model.name')
      }
    },
    model: {
      value: (_vm.model.name),
      callback: function($$v) {
        _vm.model.name = $$v
      },
      expression: "model.name"
    }
  }) : _vm._e(), _c('fb-field', {
    directives: [{
      name: "mt-field-blur",
      rawName: "v-mt-field-blur",
      value: ({
        blur: _vm.getBank
      }),
      expression: "{blur:getBank}"
    }],
    attrs: {
      "placeholder": "点击问号查看支持银行卡",
      "label": "银行卡号",
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
    staticClass: "iconfont icon-wenhao",
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
    staticClass: "field-cell",
    class: {
      'empty': _vm.model.bankName === '自动匹配'
    },
    attrs: {
      "title": "开户行",
      "value": _vm.model.bankName
    }
  }), _c('mt-field', {
    attrs: {
      "label": "银行预留手机号",
      "placeholder": "填写手机号",
      "state": _vm.getFieldState('model.bankReservePhone')
    },
    nativeOn: {
      "click": function($event) {
        _vm.showFieldError($event, 'model.bankReservePhone')
      }
    },
    model: {
      value: (_vm.model.bankReservePhone),
      callback: function($$v) {
        _vm.model.bankReservePhone = $$v
      },
      expression: "model.bankReservePhone"
    }
  })], 1), _c('div', {
    staticClass: "form-buttons"
  }, [_c('mt-button', {
    staticClass: "mint-button-block",
    attrs: {
      "type": "primary",
      "size": "large"
    }
  }, [_vm._v("下一步")])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fields-header"
  }, [_c('p', [_vm._v("请添加持卡人本人的银行卡")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-32fb9efb", module.exports)
  }
}

/***/ }),

/***/ "jbpG":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")();
// imports


// module
exports.push([module.i, "\n.add-bank-step1 input::-moz-placeholder {\n  color: #c5c9d2;\n  font-size: 14px;\n  opacity: 1;\n}\n.add-bank-step1 input:-ms-input-placeholder {\n  color: #c5c9d2;\n  font-size: 14px;\n}\n.add-bank-step1 input::-webkit-input-placeholder {\n  color: #c5c9d2;\n  font-size: 14px;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/fn-h5-frontend/src/views/bank/src/views/bank/AddBankStep1.vue"],"names":[],"mappings":";AAsFA;EAEI,eAAc;EACd,gBAAe;EACf,WAAU;CACX;AALH;EAOI,eAAc;EACd,gBAAe;CAChB;AATH;EAWI,eAAc;EACd,gBAAe;CAChB","file":"AddBankStep1.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.add-bank-step1 {\n  input::-moz-placeholder {\n    color: #c5c9d2;\n    font-size: 14px;\n    opacity: 1;\n  }\n  input:-ms-input-placeholder {\n    color: #c5c9d2;\n    font-size: 14px;\n  }\n  input::-webkit-input-placeholder {\n    color: #c5c9d2;\n    font-size: 14px;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "nWjG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_vue_validator__ = __webpack_require__("IXCS");
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

/***/ })

});
//# sourceMappingURL=8.js.map