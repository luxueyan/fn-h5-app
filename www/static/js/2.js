webpackJsonp([2],{

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(472)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(416),
  /* template */
  __webpack_require__(454),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/borrow/Signature.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Signature.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c6d8a54", Component.options)
  } else {
    hotAPI.reload("data-v-5c6d8a54", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_resources_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(44);





/* harmony default export */ __webpack_exports__["a"] = ({
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapMutations */])(['updateStateCode']), {
    drawMoney: function drawMoney() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1__common_resources_js__["g" /* PayContract */].get().then(function (res) {
        return res.json();
      }).then(function (data) {
        if (data.ret === __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* RET_CODE_MAP */].OK) {
          _this.updateStateCode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* CUST_STATE_CODE_MAP */].LOANING);
          _this.$router.push({
            name: 'loaning'
          });
        }
      });
    }
  })
});

/***/ }),

/***/ 404:
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

function u(a) {
  var d = document.getElementById("writingDiv").querySelectorAll("input"),
      b = document.getElementById("palette"),
      c = document.getElementById("penSize"),
      f = 0,
      e = 0;
  a.cancelButton = d[0];
  a.doneButton = d[1];
  a.R = d[2];
  a.O = d[3];
  a.K = d[4];
  a.L = d[5];
  a.P = d[6];
  a.cancelButton.onmousedown = function () {
    a.I(null, null, !0);
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
    a.I(b, c + "]}", !1);
  };
  a.R.onmousedown = function () {
    if ("edit" === a.status) if (a.u && a.u.length) a.b = a.u, a.u = null, y(a);else if (a.b.length) {
      var b = a.b.pop();
      a.B.push([b]);
      y(a);
    }
  };
  a.O.onmousedown = function () {
    "edit" === a.status && a.B.length && (a.b = a.b.concat(a.B.pop()), y(a));
  };
  a.K.onmousedown = function () {
    B(a);
  };
  a.L.onmousedown = function () {
    f ? (f = e = 0, c.style.display = "none", b.style.display = "none") : (f = 1, b.style.display = "inline", e = 0, c.style.display = "none");
  };
  a.P.onmousedown = function () {
    e ? (f = e = 0, c.style.display = "none") : (e = 1, c.style.display = "inline", f = 0);
    b.style.display = "none";
  };
  b.onclick = function (d) {
    d = d.target;
    "LI" == d.tagName && (a.color = d.getAttribute("value"), f = e = 0, c.style.display = "none", b.style.display = "none");
  };
  c.onclick = function (d) {
    d = d.target;
    "DIV" == d.tagName && (a.h = parseInt(d.getAttribute("value")), f = e = 0, c.style.display = "none", b.style.display = "none");
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
  u(this);
}

EPaper.init = function (a) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  document.getElementById(a).innerHTML = "<div id='writingDiv' class='writingDiv'>\n                                            <div class='topBar'>\n                                              <input class='textButton' type='button' value='\u8FD4\u56DE'/>\n                                              <label>\u624B\u5199\u60A8\u7684\u59D3\u540D\uFF08" + data.name + "\uFF09</label>\n                                              <input class='textButton_Done' type='button' value='\u5B8C\u6210'/>\n                                            </div>\n                                            <div class='paperCanvas'>\n                                              <canvas id='ePaperCanvas' height='100%' width='100%' class='ePaperCanvas'></canvas>\n                                            </div>\n                                            <div class='bottomBar'>\n                                              <div class='bottomCol'><input class='bottomButton undo' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton redo' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton clear' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton color' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton stroke' type='button'/></div>\n                                            </div>\n                                            <ol class='palette' id='palette'>\n                                              <li value='rgba(111,138,37,1)' style='background:rgb(111,138,37)'>\u7EFF\u8272</li>\n                                              <li value='rgba(255,198,2,1)' style='background:rgb(255,198,2)'>\u9EC4\u8272</li>\n                                              <li value='rgba(51,111,172,1)' style='background:rgb(51,111,172)'>\u84DD\u8272</li>\n                                              <li value='rgba(0,0,0,1)' style='background:rgb(0,0,0)'>\u9ED1\u8272</li>\n                                              <li value='rgba(255,0,0,1)' style='background:rgb(255,0,0)'>\u7EA2\u8272</li>\n                                            </ol>\n                                            <ol class='penSize' id='penSize'>\n                                              <li><input type='radio' name='fSize' value='18'/><div value='18'>\u7279</div><div>\u7C97</div></li>\n                                              <li><input type='radio' name='fSize' value='12'/><div style='margin-top:14px;' value='12'>\u7C97</div></li>\n                                              <li><input type='radio' name='fSize' value='8' checked/><div style='margin-top:14px;' value='8'>\u4E2D</div></li>\n                                              <li><input type='radio' name='fSize' value='6'/><div style='margin-top:14px;' value='6'>\u7EC6</div></li>\n                                              <li><input type='radio' name='fSize' value='3'/><div value='3'>\u7279</div><div>\u7EC6</div></li>\n                                            </ol>\n                                          </div>";
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
  "function" === typeof a && 3 === a.length && (this.I = a);
};

/* harmony default export */ __webpack_exports__["a"] = (EPaper);

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_epaper_js__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_resources_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__borrow_mixins_js__ = __webpack_require__(390);









/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_5__borrow_mixins_js__["a" /* default */]],
  mounted: function mounted() {
    var _this = this;

    var myepaper = __WEBPACK_IMPORTED_MODULE_1__common_epaper_js__["a" /* default */].init('panel', {
      name: this.user.UserinfoValLogin.Name
    });

    myepaper.setCallback(function (pngData, pointsData, isCancel) {
      if (!isCancel) {
        if (!pngData) {
          _this.$toast('\u8BF7\u624B\u5199\u60A8\u7684\u59D3\u540D\uFF1A' + _this.user.UserinfoValLogin.Name, 'error');
          return;
        }

        __WEBPACK_IMPORTED_MODULE_2__common_resources_js__["h" /* SetAgreementSign */].save({
          sign: pngData
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          if (data.ret === __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* RET_CODE_MAP */].OK) {
            _this.drawMoney();
          }
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_2__common_resources_js__["i" /* GiveUpContract */].get().then(function () {
          _this.updateStateCode(__WEBPACK_IMPORTED_MODULE_4__constants_js__["b" /* CUST_STATE_CODE_MAP */].DEBT_SETTELED);
          _this.$router.push({
            name: 'borrowerInfo'
          });
        });
      }
    });
  },


  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapMutations */])(['updateStateCode'])),

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapGetters */])(['user'])),

  data: function data() {
    return {
      panelStyle: {
        height: window.innerHeight + 'px' }
    };
  }
});

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.writingDiv {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.writingDiv .topBar,\n  .writingDiv .bottomBar {\n    position: absolute;\n    height: 44px;\n    background: snow;\n    left: 0;\n}\n.writingDiv .topBar {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    top: 45px;\n    width: 100%;\n    z-index: 99;\n}\n.writingDiv .topBar label {\n      -webkit-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: center;\n      line-height: 44px;\n}\n.writingDiv .bottomBar {\n    height: 44px;\n    bottom: 0;\n    width: 100%;\n    clear: both;\n}\n.writingDiv .paperCanvas {\n    position: absolute;\n    left: 0;\n    bottom: 44px;\n    top: 44px;\n    background: url(" + __webpack_require__(437) + ");\n    width: 100%;\n}\n.writingDiv .ePaperCanvas {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: block;\n}\n.writingDiv .textButton,\n  .writingDiv .textButton_Done {\n    padding: 0;\n    height: 44px;\n    line-height: 44px;\n    border-radius: 5px;\n    color: #18b4ed;\n    font-size: 17px;\n    background: transparent;\n    display: inline-block;\n    border: none;\n    text-align: center;\n}\n.writingDiv .textButton {\n    margin-left: 10px;\n}\n.writingDiv .textButton_Done {\n    margin-right: 10px;\n}\n.writingDiv .bottomCol {\n    display: block;\n    float: left;\n    width: 20%;\n    height: 28px;\n    margin-top: 7px;\n}\n.writingDiv .bottomButton {\n    background: transparent;\n    -webkit-align-self: center;\n        -ms-flex-item-align: center;\n                -ms-grid-row-align: center;\n            align-self: center;\n    width: 28px;\n    height: 28px;\n    display: block;\n    background-size: 28px;\n    border: none;\n    margin: auto;\n    top: 10px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n.writingDiv .redo {\n    background: url(" + __webpack_require__(440) + ") no-repeat;\n    background-size: 28px;\n    border: none;\n    top: 10px;\n}\n.writingDiv .redo:active {\n    background: url(" + __webpack_require__(441) + ") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .undo {\n    background: url(" + __webpack_require__(442) + ") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .undo:active {\n    background: url(" + __webpack_require__(443) + ") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .clear {\n    background: url(" + __webpack_require__(243) + ") no-repeat;\n    background-size: 28px;\n    top: 10px;\n}\n.writingDiv .color {\n    background: url(" + __webpack_require__(438) + ") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .stroke {\n    background: url(" + __webpack_require__(444) + ") no-repeat;\n    background-size: 28px;\n}\n.writingDiv .palette {\n    border-bottom: 1px solid #82593e;\n    margin: auto;\n    position: absolute;\n    bottom: 44px;\n    width: 100%;\n    list-style: none;\n    padding: 0;\n    display: none;\n    z-index: 20;\n    background: #fff;\n    left: 0;\n}\n.writingDiv .palette li {\n    float: left;\n    line-height: 44px;\n    font-size: 0.75em;\n    padding: 0;\n    color: #fff;\n    width: 20%;\n    text-align: center;\n    display: inline;\n}\n.writingDiv .penSize {\n    border-bottom: 1px solid #82593e;\n    margin: auto;\n    position: absolute;\n    bottom: 44px;\n    width: 100%;\n    list-style: none;\n    background: #fff;\n    z-index: 20;\n    display: none;\n    padding: 0em 0px 0px 0px;\n    left: 0;\n}\n.writingDiv .penSize li {\n    float: left;\n    font-size: 0.6em;\n    width: 20%;\n}\n.writingDiv .penSize li input {\n    float: left;\n    margin-top: 16px;\n}\n#panel {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 0;\n  background-color: #fff;\n}\n#panel .ePaperCanvas {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: block;\n}\n", "", {"version":3,"sources":["/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/borrow/src/assets/scss/epaper.scss","/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/borrow/src/views/borrow/Signature.vue"],"names":[],"mappings":";AAAA;EACE,mBAAkB;EAClB,YAAW;EACX,aAAY;CA4Kb;AA/KD;;IAMI,mBAAkB;IAClB,aAAY;IACZ,iBAAgB;IAChB,QAAO;CACR;AAVH;IAYI,sBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,UAAS;IACT,YAAW;IACX,YAAW;CAMZ;AArBH;MAiBM,gBAAO;UAAP,YAAO;cAAP,QAAO;MACP,mBAAkB;MAClB,kBAAiB;CAClB;AApBL;IAuBI,aAAY;IACZ,UAAS;IACT,YAAW;IACX,YAAW;CACZ;AA3BH;IA6BI,mBAAkB;IAClB,QAAO;IACP,aAAY;IACZ,UAAS;IACT,0CAA4C;IAC5C,YAAW;CACZ;AAnCH;IAqCI,aAAY;IACZ,YAAW;IACX,UAAS;IACT,WAAU;IACV,eAAc;CACf;AA1CH;;IA6CI,WAAU;IACV,aAAY;IACZ,kBAAiB;IACjB,mBAAkB;IAClB,eAAc;IACd,gBAAe;IACf,wBAAuB;IACvB,sBAAqB;IACrB,aAAY;IACZ,mBAAkB;CACnB;AAvDH;IA6DI,kBAAiB;CAClB;AA9DH;IAgEI,mBAAkB;CACnB;AAjEH;IAmEI,eAAc;IACd,YAAW;IACX,WAAU;IACV,aAAY;IACZ,gBAAe;CAChB;AAxEH;IA0EI,wBAAuB;IACvB,2BAAkB;QAAlB,4BAAkB;gBAAlB,2BAAkB;YAAlB,mBAAkB;IAClB,YAAW;IACX,aAAY;IACZ,eAAc;IACd,sBAAqB;IACrB,aAAY;IACZ,aAAY;IACZ,UAAS;IACT,QAAO;IACP,SAAQ;IACR,UAAS;CACV;AAtFH;IAwFI,oDAAkD;IAClD,sBAAqB;IACrB,aAAY;IACZ,UAAS;CACV;AA5FH;IA8FI,oDAAwD;IACxD,sBAAqB;CACtB;AAhGH;IAkGI,oDAAsD;IACtD,sBAAqB;CACtB;AApGH;IAsGI,oDAA4D;IAC5D,sBAAqB;CACtB;AAxGH;IA0GI,oDAAmD;IACnD,sBAAqB;IACrB,UAAS;CACV;AA7GH;IAmHI,oDAAmD;IACnD,sBAAqB;CACtB;AArHH;IA2HI,oDAAoD;IACpD,sBAAqB;CACtB;AA7HH;IAmII,iCAAgC;IAChC,aAAY;IACZ,mBAAkB;IAClB,aAAY;IACZ,YAAW;IACX,iBAAgB;IAChB,WAAU;IACV,cAAa;IACb,YAAW;IACX,iBAAgB;IAChB,QAAO;CACR;AA9IH;IAgJI,YAAW;IACX,kBAAiB;IACjB,kBAAiB;IACjB,WAAU;IACV,YAAW;IACX,WAAU;IACV,mBAAkB;IAClB,gBAAe;CAChB;AAxJH;IA0JI,iCAAgC;IAChC,aAAY;IACZ,mBAAkB;IAClB,aAAY;IACZ,YAAW;IACX,iBAAgB;IAChB,iBAAgB;IAChB,YAAW;IACX,cAAa;IACb,yBAAwB;IACxB,QAAO;CACR;AArKH;IAuKI,YAAW;IACX,iBAAgB;IAChB,WAAU;CACX;AA1KH;IA4KI,YAAW;IACX,iBAAgB;CACjB;AClGH;EACE,OAAM;EACN,QAAO;EACP,SAAQ;EACR,UAAS;EACT,mBAAkB;EAClB,WAAU;EACV,uBAAsB;CAQvB;AAfD;IASI,aAAY;IACZ,YAAW;IACX,UAAS;IACT,WAAU;IACV,eAAc;CACf","file":"Signature.vue","sourcesContent":[".writingDiv {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  .topBar,\n  .bottomBar {\n    position: absolute;\n    height: 44px;\n    background: snow;\n    left: 0;\n  }\n  .topBar {\n    display: flex;\n    top: 45px;\n    width: 100%;\n    z-index: 99;\n    label {\n      flex: 1;\n      text-align: center;\n      line-height: 44px;\n    }\n  }\n  .bottomBar {\n    height: 44px;\n    bottom: 0;\n    width: 100%;\n    clear: both;\n  }\n  .paperCanvas {\n    position: absolute;\n    left: 0;\n    bottom: 44px;\n    top: 44px;\n    background: url(~assets/images/bg_paper.jpg);\n    width: 100%;\n  }\n  .ePaperCanvas {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: block;\n  }\n  .textButton,\n  .textButton_Done {\n    padding: 0;\n    height: 44px;\n    line-height: 44px;\n    border-radius: 5px;\n    color: #18b4ed;\n    font-size: 17px;\n    background: transparent;\n    display: inline-block;\n    border: none;\n    text-align: center;\n  }\n  // .textButton:active,\n  // .textButton_Done:active {\n  //   text-align: end;\n  // }\n  .textButton {\n    margin-left: 10px;\n  }\n  .textButton_Done {\n    margin-right: 10px;\n  }\n  .bottomCol {\n    display: block;\n    float: left;\n    width: 20%;\n    height: 28px;\n    margin-top: 7px;\n  }\n  .bottomButton {\n    background: transparent;\n    align-self: center;\n    width: 28px;\n    height: 28px;\n    display: block;\n    background-size: 28px;\n    border: none;\n    margin: auto;\n    top: 10px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n  .redo {\n    background: url(~assets/images/next.png) no-repeat;\n    background-size: 28px;\n    border: none;\n    top: 10px;\n  }\n  .redo:active {\n    background: url(~assets/images/next_press.png) no-repeat;\n    background-size: 28px;\n  }\n  .undo {\n    background: url(~assets/images/previous.png) no-repeat;\n    background-size: 28px;\n  }\n  .undo:active {\n    background: url(~assets/images/previous_press.png) no-repeat;\n    background-size: 28px;\n  }\n  .clear {\n    background: url(~assets/images/clear.png) no-repeat;\n    background-size: 28px;\n    top: 10px;\n  }\n  // .clear:active {\n  //   background: url(~assets/images/clear_press.png) no-repeat;\n  //   background-size: 28px;\n  // }\n  .color {\n    background: url(~assets/images/color.png) no-repeat;\n    background-size: 28px;\n  }\n  // .color:active {\n  //   background: url(~assets/images/color_press.png) no-repeat;\n  //   background-size: 28px;\n  // }\n  .stroke {\n    background: url(~assets/images/stroke.png) no-repeat;\n    background-size: 28px;\n  }\n  // .stroke:active {\n  //   background: url(~assets/images/stroke_press.png) no-repeat;\n  //   background-size: 28px;\n  // }\n  .palette {\n    border-bottom: 1px solid #82593e;\n    margin: auto;\n    position: absolute;\n    bottom: 44px;\n    width: 100%;\n    list-style: none;\n    padding: 0;\n    display: none;\n    z-index: 20;\n    background: #fff;\n    left: 0;\n  }\n  .palette li {\n    float: left;\n    line-height: 44px;\n    font-size: 0.75em;\n    padding: 0;\n    color: #fff;\n    width: 20%;\n    text-align: center;\n    display: inline;\n  }\n  .penSize {\n    border-bottom: 1px solid #82593e;\n    margin: auto;\n    position: absolute;\n    bottom: 44px;\n    width: 100%;\n    list-style: none;\n    background: #fff;\n    z-index: 20;\n    display: none;\n    padding: 0em 0px 0px 0px;\n    left: 0;\n  }\n  .penSize li {\n    float: left;\n    font-size: 0.6em;\n    width: 20%;\n  }\n  .penSize li input {\n    float: left;\n    margin-top: 16px;\n  }\n}\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../assets/scss/epaper.scss';\n#panel {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 0;\n  background-color: #fff;\n  .ePaperCanvas {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: block;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/bg_paper.jpg";

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/color.png";

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/next.png";

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/next_press.png";

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/previous.png";

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/previous_press.png";

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/stroke.png";

/***/ }),

/***/ 454:
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
     require("vue-hot-reload-api").rerender("data-v-5c6d8a54", module.exports)
  }
}

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(429);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("4a8e2836", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5c6d8a54!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Signature.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":0,\"autoprefixer\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5c6d8a54!../../../node_modules/sass-loader/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Signature.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=2.js.map