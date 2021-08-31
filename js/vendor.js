"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = function (u, D, f) {
    "use strict";

    var k, H;

    if (function () {
      var e;
      var t = {
        lazyClass: "lazyload",
        loadedClass: "lazyloaded",
        loadingClass: "lazyloading",
        preloadClass: "lazypreload",
        errorClass: "lazyerror",
        autosizesClass: "lazyautosizes",
        srcAttr: "data-src",
        srcsetAttr: "data-srcset",
        sizesAttr: "data-sizes",
        minSize: 40,
        customMedia: {},
        init: true,
        expFactor: 1.5,
        hFac: .8,
        loadMode: 2,
        loadHidden: true,
        ricTimeout: 0,
        throttleDelay: 125
      };
      H = u.lazySizesConfig || u.lazysizesConfig || {};

      for (e in t) {
        if (!(e in H)) {
          H[e] = t[e];
        }
      }
    }(), !D || !D.getElementsByClassName) {
      return {
        init: function init() {},
        cfg: H,
        noSupport: true
      };
    }

    var O = D.documentElement,
        a = u.HTMLPictureElement,
        P = "addEventListener",
        $ = "getAttribute",
        q = u[P].bind(u),
        I = u.setTimeout,
        U = u.requestAnimationFrame || I,
        l = u.requestIdleCallback,
        j = /^picture$/i,
        r = ["load", "error", "lazyincluded", "_lazyloaded"],
        i = {},
        G = Array.prototype.forEach,
        J = function J(e, t) {
      if (!i[t]) {
        i[t] = new RegExp("(\\s|^)" + t + "(\\s|$)");
      }

      return i[t].test(e[$]("class") || "") && i[t];
    },
        K = function K(e, t) {
      if (!J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").trim() + " " + t);
      }
    },
        Q = function Q(e, t) {
      var i;

      if (i = J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").replace(i, " "));
      }
    },
        V = function V(t, i, e) {
      var a = e ? P : "removeEventListener";

      if (e) {
        V(t, i);
      }

      r.forEach(function (e) {
        t[a](e, i);
      });
    },
        X = function X(e, t, i, a, r) {
      var n = D.createEvent("Event");

      if (!i) {
        i = {};
      }

      i.instance = k;
      n.initEvent(t, !a, !r);
      n.detail = i;
      e.dispatchEvent(n);
      return n;
    },
        Y = function Y(e, t) {
      var i;

      if (!a && (i = u.picturefill || H.pf)) {
        if (t && t.src && !e[$]("srcset")) {
          e.setAttribute("srcset", t.src);
        }

        i({
          reevaluate: true,
          elements: [e]
        });
      } else if (t && t.src) {
        e.src = t.src;
      }
    },
        Z = function Z(e, t) {
      return (getComputedStyle(e, null) || {})[t];
    },
        s = function s(e, t, i) {
      i = i || e.offsetWidth;

      while (i < H.minSize && t && !e._lazysizesWidth) {
        i = t.offsetWidth;
        t = t.parentNode;
      }

      return i;
    },
        ee = function () {
      var i, a;
      var t = [];
      var r = [];
      var n = t;

      var s = function s() {
        var e = n;
        n = t.length ? r : t;
        i = true;
        a = false;

        while (e.length) {
          e.shift()();
        }

        i = false;
      };

      var e = function e(_e, t) {
        if (i && !t) {
          _e.apply(this, arguments);
        } else {
          n.push(_e);

          if (!a) {
            a = true;
            (D.hidden ? I : U)(s);
          }
        }
      };

      e._lsFlush = s;
      return e;
    }(),
        te = function te(i, e) {
      return e ? function () {
        ee(i);
      } : function () {
        var e = this;
        var t = arguments;
        ee(function () {
          i.apply(e, t);
        });
      };
    },
        ie = function ie(e) {
      var i;
      var a = 0;
      var r = H.throttleDelay;
      var n = H.ricTimeout;

      var t = function t() {
        i = false;
        a = f.now();
        e();
      };

      var s = l && n > 49 ? function () {
        l(t, {
          timeout: n
        });

        if (n !== H.ricTimeout) {
          n = H.ricTimeout;
        }
      } : te(function () {
        I(t);
      }, true);
      return function (e) {
        var t;

        if (e = e === true) {
          n = 33;
        }

        if (i) {
          return;
        }

        i = true;
        t = r - (f.now() - a);

        if (t < 0) {
          t = 0;
        }

        if (e || t < 9) {
          s();
        } else {
          I(s, t);
        }
      };
    },
        ae = function ae(e) {
      var t, i;
      var a = 99;

      var r = function r() {
        t = null;
        e();
      };

      var n = function n() {
        var e = f.now() - i;

        if (e < a) {
          I(n, a - e);
        } else {
          (l || r)(r);
        }
      };

      return function () {
        i = f.now();

        if (!t) {
          t = I(n, a);
        }
      };
    },
        e = function () {
      var v, m, c, h, e;
      var y, z, g, p, C, b, A;
      var n = /^img$/i;
      var d = /^iframe$/i;
      var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
      var _ = 0;
      var w = 0;
      var N = 0;
      var M = -1;

      var x = function x(e) {
        N--;

        if (!e || N < 0 || !e.target) {
          N = 0;
        }
      };

      var W = function W(e) {
        if (A == null) {
          A = Z(D.body, "visibility") == "hidden";
        }

        return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden");
      };

      var S = function S(e, t) {
        var i;
        var a = e;
        var r = W(e);
        g -= t;
        b += t;
        p -= t;
        C += t;

        while (r && (a = a.offsetParent) && a != D.body && a != O) {
          r = (Z(a, "opacity") || 1) > 0;

          if (r && Z(a, "overflow") != "visible") {
            i = a.getBoundingClientRect();
            r = C > i.left && p < i.right && b > i.top - 1 && g < i.bottom + 1;
          }
        }

        return r;
      };

      var t = function t() {
        var e, t, i, a, r, n, s, l, o, u, f, c;
        var d = k.elements;

        if ((h = H.loadMode) && N < 8 && (e = d.length)) {
          t = 0;
          M++;

          for (; t < e; t++) {
            if (!d[t] || d[t]._lazyRace) {
              continue;
            }

            if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) {
              R(d[t]);
              continue;
            }

            if (!(l = d[t][$]("data-expand")) || !(n = l * 1)) {
              n = w;
            }

            if (!u) {
              u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand;
              k._defEx = u;
              f = u * H.expFactor;
              c = H.hFac;
              A = null;

              if (w < f && N < 1 && M > 2 && h > 2 && !D.hidden) {
                w = f;
                M = 0;
              } else if (h > 1 && M > 1 && N < 6) {
                w = u;
              } else {
                w = _;
              }
            }

            if (o !== n) {
              y = innerWidth + n * c;
              z = innerHeight + n;
              s = n * -1;
              o = n;
            }

            i = d[t].getBoundingClientRect();

            if ((b = i.bottom) >= s && (g = i.top) <= z && (C = i.right) >= s * c && (p = i.left) <= y && (b || C || p || g) && (H.loadHidden || W(d[t])) && (m && N < 3 && !l && (h < 3 || M < 4) || S(d[t], n))) {
              R(d[t]);
              r = true;

              if (N > 9) {
                break;
              }
            } else if (!r && m && !a && N < 4 && M < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !l && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) {
              a = v[0] || d[t];
            }
          }

          if (a && !r) {
            R(a);
          }
        }
      };

      var i = ie(t);

      var B = function B(e) {
        var t = e.target;

        if (t._lazyCache) {
          delete t._lazyCache;
          return;
        }

        x(e);
        K(t, H.loadedClass);
        Q(t, H.loadingClass);
        V(t, L);
        X(t, "lazyloaded");
      };

      var a = te(B);

      var L = function L(e) {
        a({
          target: e.target
        });
      };

      var T = function T(t, i) {
        try {
          t.contentWindow.location.replace(i);
        } catch (e) {
          t.src = i;
        }
      };

      var F = function F(e) {
        var t;
        var i = e[$](H.srcsetAttr);

        if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) {
          e.setAttribute("media", t);
        }

        if (i) {
          e.setAttribute("srcset", i);
        }
      };

      var s = te(function (t, e, i, a, r) {
        var n, s, l, o, u, f;

        if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
          if (a) {
            if (i) {
              K(t, H.autosizesClass);
            } else {
              t.setAttribute("sizes", a);
            }
          }

          s = t[$](H.srcsetAttr);
          n = t[$](H.srcAttr);

          if (r) {
            l = t.parentNode;
            o = l && j.test(l.nodeName || "");
          }

          f = e.firesLoad || "src" in t && (s || n || o);
          u = {
            target: t
          };
          K(t, H.loadingClass);

          if (f) {
            clearTimeout(c);
            c = I(x, 2500);
            V(t, L, true);
          }

          if (o) {
            G.call(l.getElementsByTagName("source"), F);
          }

          if (s) {
            t.setAttribute("srcset", s);
          } else if (n && !o) {
            if (d.test(t.nodeName)) {
              T(t, n);
            } else {
              t.src = n;
            }
          }

          if (r && (s || o)) {
            Y(t, {
              src: n
            });
          }
        }

        if (t._lazyRace) {
          delete t._lazyRace;
        }

        Q(t, H.lazyClass);
        ee(function () {
          var e = t.complete && t.naturalWidth > 1;

          if (!f || e) {
            if (e) {
              K(t, "ls-is-cached");
            }

            B(u);
            t._lazyCache = true;
            I(function () {
              if ("_lazyCache" in t) {
                delete t._lazyCache;
              }
            }, 9);
          }

          if (t.loading == "lazy") {
            N--;
          }
        }, true);
      });

      var R = function R(e) {
        if (e._lazyRace) {
          return;
        }

        var t;
        var i = n.test(e.nodeName);
        var a = i && (e[$](H.sizesAttr) || e[$]("sizes"));
        var r = a == "auto";

        if ((r || !m) && i && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
          return;
        }

        t = X(e, "lazyunveilread").detail;

        if (r) {
          re.updateElem(e, true, e.offsetWidth);
        }

        e._lazyRace = true;
        N++;
        s(e, t, r, a, i);
      };

      var r = ae(function () {
        H.loadMode = 3;
        i();
      });

      var l = function l() {
        if (H.loadMode == 3) {
          H.loadMode = 2;
        }

        r();
      };

      var o = function o() {
        if (m) {
          return;
        }

        if (f.now() - e < 999) {
          I(o, 999);
          return;
        }

        m = true;
        H.loadMode = 3;
        i();
        q("scroll", l, true);
      };

      return {
        _: function _() {
          e = f.now();
          k.elements = D.getElementsByClassName(H.lazyClass);
          v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
          q("scroll", i, true);
          q("resize", i, true);
          q("pageshow", function (e) {
            if (e.persisted) {
              var t = D.querySelectorAll("." + H.loadingClass);

              if (t.length && t.forEach) {
                U(function () {
                  t.forEach(function (e) {
                    if (e.complete) {
                      R(e);
                    }
                  });
                });
              }
            }
          });

          if (u.MutationObserver) {
            new MutationObserver(i).observe(O, {
              childList: true,
              subtree: true,
              attributes: true
            });
          } else {
            O[P]("DOMNodeInserted", i, true);
            O[P]("DOMAttrModified", i, true);
            setInterval(i, 999);
          }

          q("hashchange", i, true);
          ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
            D[P](e, i, true);
          });

          if (/d$|^c/.test(D.readyState)) {
            o();
          } else {
            q("load", o);
            D[P]("DOMContentLoaded", i);
            I(o, 2e4);
          }

          if (k.elements.length) {
            t();

            ee._lsFlush();
          } else {
            i();
          }
        },
        checkElems: i,
        unveil: R,
        _aLSL: l
      };
    }(),
        re = function () {
      var i;
      var n = te(function (e, t, i, a) {
        var r, n, s;
        e._lazysizesWidth = a;
        a += "px";
        e.setAttribute("sizes", a);

        if (j.test(t.nodeName || "")) {
          r = t.getElementsByTagName("source");

          for (n = 0, s = r.length; n < s; n++) {
            r[n].setAttribute("sizes", a);
          }
        }

        if (!i.detail.dataAttr) {
          Y(e, i.detail);
        }
      });

      var a = function a(e, t, i) {
        var a;
        var r = e.parentNode;

        if (r) {
          i = s(e, r, i);
          a = X(e, "lazybeforesizes", {
            width: i,
            dataAttr: !!t
          });

          if (!a.defaultPrevented) {
            i = a.detail.width;

            if (i && i !== e._lazysizesWidth) {
              n(e, r, a, i);
            }
          }
        }
      };

      var e = function e() {
        var e;
        var t = i.length;

        if (t) {
          e = 0;

          for (; e < t; e++) {
            a(i[e]);
          }
        }
      };

      var t = ae(e);
      return {
        _: function _() {
          i = D.getElementsByClassName(H.autosizesClass);
          q("resize", t);
        },
        checkElems: t,
        updateElem: a
      };
    }(),
        t = function t() {
      if (!t.i && D.getElementsByClassName) {
        t.i = true;

        re._();

        e._();
      }
    };

    return I(function () {
      H.init && t();
    }), k = {
      cfg: H,
      autoSizer: re,
      loader: e,
      init: t,
      uP: Y,
      aC: K,
      rC: Q,
      hC: J,
      fire: X,
      gW: s,
      rAF: ee
    };
  }(e, e.document, Date);

  e.lazySizes = t, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = t);
}("undefined" != typeof window ? window : {});
"use strict";

(function (win, doc) {
  var emptyNodeNames = {
    'STYLE': true,
    'SCRIPT': true,
    'LINK': true,
    'BR': true
  };
  var notEmptyNodeNames = {
    'TEXTAREA': true,
    'IMG': true,
    'INPUT': true,
    'SELECT': true,
    'HR': true
  };
  var util = {
    on: function on(element, type, listener) {
      if (element.addEventListener) {
        element.addEventListener(type, listener, false);
      } else if (element.attachEvent) {
        element.attachEvent('on' + type, function () {
          listener.call(element);
        });
      }
    },
    fireEvent: function fireEvent(element, type, cancelable) {
      var event = doc.createEvent('Event');
      event.initEvent(type, true, cancelable);
      return element.dispatchEvent(event);
    },
    createStyle: function createStyle(css) {
      var style = doc.createElement('style');
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      doc.getElementsByTagName('head')[0].appendChild(style);
    },
    init: function initStyle() {
      if (initStyle.inited) {
        return;
      }

      initStyle.inited = true;
      util.createStyle('' + 'text-line {' + 'display:block;' + 'text-indent:0;' + '}' + 'pre text-line {' + 'display:inline;' + '}' + 'text-line[first-in-element]:first-child {' + 'text-indent:inherit;' + '}');
    },
    removeChildren: function removeChildren(node, from, opt_to) {
      if (from < 0) {
        from = 0;
      }

      var children = node.childNodes;
      var to = opt_to == null ? children.length : opt_to;

      if (from >= to) {
        return [];
      }

      var removed = [];
      var i = to - 1;
      var lastChild;

      while (i >= from) {
        lastChild = children[i];
        removed.push(lastChild);
        node.removeChild(lastChild);
        i--;
      }

      return removed;
    },
    appendChildren: function appendChildren(parent, children) {
      while (children.length) {
        parent.appendChild(children.pop());
      }
    },
    splitNode: function splitNode(node, offset) {
      var parent = node.parentNode;
      var clone = node.cloneNode(false);
      util.appendChildren(clone, util.removeChildren(node, offset));
      parent.insertBefore(clone, node.nextSibling);
      return parent;
    },
    getNodeOffset: function getNodeOffset(node, ignoreTextNode) {
      var prev = node;
      var i = 0;

      while (prev = prev.previousSibling) {
        i++;
      }

      return i;
    },
    isEmptyNode: function isEmptyNode(node) {
      if (node.nodeType === 3) {
        return node.nodeValue.trim() === '';
      }

      var nodeName = node.nodeName;

      if (emptyNodeNames[nodeName]) {
        return true;
      }

      if (notEmptyNodeNames[nodeName]) {
        return false;
      }

      var children = node.childNodes;

      if (!children.length) {
        return true;
      }

      for (var i = 0, l = children.length; i < l; i++) {
        if (!util.isEmptyNode(children[i])) {
          return false;
        }
      }

      return true;
    },
    getFirstContentNode: function getFirstContentNode(container) {
      if (container.nodeType === 3) {
        return [container, 0];
      }

      if (notEmptyNodeNames[container.nodeName]) {
        return [container.parentNode, util.getNodeOffset(container)];
      }

      var start = container.firstChild;

      if (!util.isEmptyNode(start)) {
        return util.getFirstContentNode(start);
      }

      var tmp = start;

      while (util.isEmptyNode(start)) {
        tmp = start.nextSibling;

        if (!tmp) {
          return null;
        }

        start = tmp;
      }

      return util.getFirstContentNode(start);
    },
    adjustOrSplitNode: function adjustOrSplitNode(ancestor, node, offset) {
      var parent;
      var tmpOffset;

      while (node !== ancestor) {
        parent = node.parentNode;
        tmpOffset = util.getNodeOffset(node);

        switch (offset) {
          case 0:
            break;

          case node.childNodes.length:
            tmpOffset++;
            break;

          default:
            util.splitNode(node, offset);
            tmpOffset++;
            break;
        }

        node = parent;
        offset = tmpOffset;
      }

      return [node, offset];
    },
    findContentSibling: function findContentSibling(node, direction) {
      var offset = 0;
      var siblingIsEmpty = true;
      direction = direction === 'forward' ? 'nextSibling' : 'previousSibling';
      var next = node[direction];

      while (next) {
        if (!util.isEmptyNode(next)) {
          siblingIsEmpty = false;
          break;
        }

        offset++;
        next = next[direction];
      }

      return [siblingIsEmpty, offset];
    },
    isSupported: function isSupported() {
      if (util.isSupported.re != null) {
        return util.isSupported.re;
      }

      var Selection = win['Selection'];
      var result = !!(Selection && Selection.prototype && Selection.prototype.modify);

      if (!result) {
        doc.documentElement.className += ' nolining';
      }

      util.isSupported.re = result;
      return result;
    },
    isInLine: function isInLine(node, root) {
      node = node.parentNode;

      while (root.contains(node)) {
        if (node.nodeName === 'TEXT-LINE') {
          return true;
        }

        node = node.parentNode;
      }

      return false;
    },
    getAllOutSideBr: function getAllOutSideBr(root) {
      var brs = root.getElementsByTagName('br');
      var br;
      var outSideBrs = [];

      for (var i = 0, l = brs.length; i < l; i++) {
        br = brs[i];

        if (!util.isInLine(br, root)) {
          outSideBrs.push(br);
        }
      }

      return outSideBrs;
    }
  };

  var Lining = function Lining(element, opt_option) {
    var opt = opt_option || {};
    this._autoResize = opt['autoResize'] == null ? element.hasAttribute('data-auto-resize') : opt['autoResize'];
    this.from = opt['from'] - 1 || parseInt(element.getAttribute('data-from'), 10) - 1 || 0;
    this.from = Math.max(this.from, 0);
    this.to = opt['to'] || parseInt(element.getAttribute('data-to'), 10) || null;
    this.lineClassName = opt['lineClass'] || element.getAttribute('data-line-class') || 'line';
    this._e = element;
    this._oldWidth = -1;
    this.doc = null;
    this.win = null;
    this._ancestor = null;
    this._start = null;
    this._startOffset = 0;
    this._end = null;
    this._endOffset = 0;
    this._collapsed = false;
    this.count = 0;
    this._currentLine = null;
    this._inited = false;
    util.init();
  };

  Lining.prototype.init = function () {
    var that = this;

    if (that._inited) {
      return;
    }

    that._inited = true;

    if (!util.isSupported()) {
      this._e.removeAttribute('data-lining');

      return;
    }

    that.doc = that._e.ownerDocument;
    that.win = that.doc.defaultView;
    that.relining();

    if (!this._autoResize) {
      return that;
    }

    var timeout;
    that.win.addEventListener('resize', function () {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      timeout = setTimeout(function () {
        that.relining();
      }, 1000);
    }, false);
    return that;
  };

  Lining.prototype.unlining = function () {
    if (!util.isSupported()) {
      return;
    }

    util.fireEvent(this._e, 'beforeunlining', false);

    var lines = this._e.getElementsByTagName('text-line');

    var line;
    var removed;
    var parent;

    for (var i = 0, l = lines.length; i < l; i++) {
      line = lines[i];
      parent = line.parentNode;
      removed = util.removeChildren(line, 0);

      while (removed.length) {
        parent.insertBefore(removed.pop(), line);
      }
    }

    while (lines.length) {
      line = lines[lines.length - 1];
      line.parentNode.removeChild(line);
    }

    var brs = util.getAllOutSideBr(this._e);

    while (brs.length) {
      brs.pop().style.display = 'block';
    }

    this._e.normalize();

    this._e.setAttribute('data-lining', '');

    this._currentLine = null;
    this._oldWidth = -1;
    this.count = 0;
    util.fireEvent(this._e, 'afterunlining', false);
  };

  Lining.prototype.relining = function (opt_force) {
    if (!util.isSupported()) {
      return;
    }

    var newWidth = this._e.offsetWidth;
    var isLininged = this._oldWidth >= 0 || this._e.getAttribute('data-lining') === 'end';
    var widthChanged = opt_force || this._oldWidth !== newWidth;

    if (isLininged && !widthChanged || !util.fireEvent(this._e, 'beforelining', true)) {
      return;
    }

    if (isLininged && widthChanged) {
      this.unlining();
    }

    this._currentLine = null;
    this._oldWidth = newWidth;
    this.count = this.from;
    var s = this.win.getSelection();

    while (this._selectNextLine(s)) {
      if (this.count < this.from) {
        continue;
      }

      this._createLine(s);
    }

    if (this._currentLine) {
      this._currentLine.setAttribute('last', '');

      this._adjustLine(this._currentLine, s);
    }

    s.removeAllRanges();
    var brs = util.getAllOutSideBr(this._e);

    while (brs.length) {
      brs.pop().style.display = 'none';
    }

    this._e.setAttribute('data-lining', 'end');

    util.fireEvent(this._e, 'afterlining', false);
  };

  Lining.prototype._update = function (r) {
    this._start = r.startContainer;
    this._startOffset = r.startOffset;
    this._end = r.endContainer;
    this._endOffset = r.endOffset;
    this._ancestor = r.commonAncestorContainer;
    this._collapsed = r.collapsed;
  };

  Lining.prototype._setCursor = function (start, startOffset, opt_s) {
    var s = opt_s || this.win.getSelection();
    var r = this.doc.createRange();
    r.setStart(start, startOffset);
    r.collapse(true);
    s.removeAllRanges();
    s.addRange(r);
    return r;
  };

  Lining.prototype.selectLine = function (i) {
    var s = this.win.getSelection();

    this._setCursor(this._e, 0, s);

    s.modify('extend', 'forward', 'character');
    s.modify('extend', 'forward', 'lineboundary');
    var oldR;
    var tmp;

    while (i > 1) {
      i--;
      oldR = s.getRangeAt(0);
      tmp = this._getNextLineStartPoint(oldR.endContainer, oldR.endOffset);

      if (!tmp) {
        s.removeAllRanges();
        return false;
      }

      this._setCursor(tmp[0], tmp[1], s);

      s.modify('extend', 'forward', 'character');
      s.modify('extend', 'forward', 'lineboundary');
    }

    this._update(s.getRangeAt(0));

    return true;
  };

  Lining.prototype._getNextLineStartPoint = function (end, endOffset) {
    var current;

    if (end.nodeType === 3) {
      if (end.nodeValue.slice(endOffset).trim() !== '') {
        return [end, endOffset];
      } else {
        current = end;
        endOffset = util.getNodeOffset(end) + 1;
        end = end.parentNode;
      }
    } else {
      current = end.childNodes[endOffset - 1];
    }

    var r = util.findContentSibling(current, 'forward');
    var nextSiblingIsEmpty = r[0];
    var nextContentNodeOffset = r[1];

    if (nextSiblingIsEmpty) {
      if (this._e.contains(end.parentNode)) {
        return this._getNextLineStartPoint(end.parentNode, util.getNodeOffset(end) + 1);
      } else {
        return null;
      }
    }

    endOffset += nextContentNodeOffset;
    return util.getFirstContentNode(end.childNodes[endOffset]);
  };

  Lining.prototype._selectNextLine = function (s) {
    if (this.to && this.count >= this.to) {
      return false;
    }

    var line = this._currentLine;

    if (line) {
      var start = line;
      var startOffset = util.getNodeOffset(start) + 1;
      start = start.parentNode;

      var nextPoint = this._getNextLineStartPoint(start, startOffset);

      if (nextPoint) {
        this._setCursor(nextPoint[0], nextPoint[1], s);

        s.modify('extend', 'forward', 'character');
        s.modify('extend', 'forward', 'lineboundary');

        this._update(s.getRangeAt(0));
      }

      return !!nextPoint;
    } else {
      return this.selectLine(this.from + 1);
    }
  };

  Lining.prototype._getRange = function () {
    return this.win.getSelection().getRangeAt(0);
  };

  Lining.prototype._adjustLine = function (line, s) {
    var r = this._setCursor(line, 0, s);

    s.modify('extend', 'forward', 'character');
    s.modify('extend', 'forward', 'lineboundary');
    r = s.getRangeAt(0);

    this._update(r);

    if (line !== this._end && line.contains(this._end)) {
      this._adjustTextBoundary();

      var tmp = util.adjustOrSplitNode(line, this._end, this._endOffset);
      this._end = tmp[0];
      this._endOffset = tmp[1];
    }

    var removed = util.removeChildren(this._end, this._endOffset);
    var parent = this._end.parentNode;
    var next = this._end.nextSibling;

    while (removed.length) {
      parent.insertBefore(removed.pop(), next);
    }
  };

  Lining.prototype._createLine = function (s) {
    var line = doc.createElement('text-line');
    line.className = this.lineClassName;
    line.setAttribute('index', ++this.count);

    try {
      this._getRange().surroundContents(line);
    } catch (e) {
      this.surroundContents(line);
    }

    if (!this._currentLine) {
      line.setAttribute('first', '');
    }

    this._currentLine = line;

    if (!line.previousSibling || util.findContentSibling(line, 'backward')[0]) {
      line.setAttribute('first-in-element', '');
    }

    this._adjustLine(line, s);
  };

  Lining.prototype._adjustTextBoundary = function () {
    if (this._ancestor.nodeType === 3) {
      this._ancestor = this._ancestor.parentNode;
    }

    var offsetAdjust = 0;
    var start = this._start;
    var startOffset = this._startOffset;
    var newStart = start;

    if (start.nodeType === 3) {
      if (startOffset !== 0 && startOffset !== start.nodeValue.length) {
        newStart = start.splitText(startOffset);

        if (this._start === this._end) {
          offsetAdjust = this._start.nodeValue.length;
        }
      }

      this._start = newStart.parentNode;
      this._startOffset = util.getNodeOffset(newStart);
    }

    var end = offsetAdjust ? this._end.nextSibling : this._end;
    var endOffset = this._endOffset - offsetAdjust;

    if (end.nodeType === 3) {
      if (endOffset !== 0 && endOffset !== end.nodeValue.length) {
        end.splitText(endOffset);
      }

      this._end = end.parentNode;
      this._endOffset = util.getNodeOffset(end) + 1;
    }
  };

  Lining.prototype._adjustOrSplitNode = function (isStart) {
    var commonAncestor = this._ancestor;
    var node;
    var offset;

    if (isStart) {
      node = this._start;
      offset = this._startOffset;
    } else {
      node = this._end;
      offset = this._endOffset;
    }

    var r = util.adjustOrSplitNode(commonAncestor, node, offset);

    if (isStart) {
      this._start = r[0];
      this._startOffset = r[1];
    } else {
      this._end = r[0];
      this._endOffset = r[1];
    }
  };

  Lining.prototype.surroundContents = function (line) {
    this._adjustTextBoundary();

    this._adjustOrSplitNode(true);

    this._adjustOrSplitNode(false);

    var removed = util.removeChildren(this._ancestor, this._startOffset, this._endOffset);
    util.appendChildren(line, removed);
    var i = this._startOffset;

    this._ancestor.insertBefore(line, this._ancestor.childNodes[i]);
  };

  var lining = win.lining = function (element, opt_option) {
    return new Lining(typeof element === 'string' ? doc.getElementById(element) : element, opt_option).init();
  };

  lining.Lining = Lining;
  lining.util = util;
  util.on(window, 'load', function () {
    var elements = doc.querySelectorAll('[data-lining]');
    var e;

    for (var i = 0, l = elements.length; i < l; i++) {
      e = elements[i];
      lining(e);
    }
  });
})(window, document);