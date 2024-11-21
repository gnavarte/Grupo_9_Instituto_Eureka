import { r as Ue } from "./index.DhYZZe0J.js";
var Po = { exports: {} },
  ve = {},
  To = { exports: {} },
  Lo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(C, z) {
    var P = C.length;
    C.push(z);
    e: for (; 0 < P; ) {
      var B = (P - 1) >>> 1,
        Y = C[B];
      if (0 < l(Y, z)) (C[B] = z), (C[P] = Y), (P = B);
      else break e;
    }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var z = C[0],
      P = C.pop();
    if (P !== z) {
      C[0] = P;
      e: for (var B = 0, Y = C.length, Xt = Y >>> 1; B < Xt; ) {
        var mn = 2 * (B + 1) - 1,
          al = C[mn],
          vn = mn + 1,
          Gt = C[vn];
        if (0 > l(al, P))
          vn < Y && 0 > l(Gt, al)
            ? ((C[B] = Gt), (C[vn] = P), (B = vn))
            : ((C[B] = al), (C[mn] = P), (B = mn));
        else if (vn < Y && 0 > l(Gt, P)) (C[B] = Gt), (C[vn] = P), (B = vn);
        else break e;
      }
    }
    return z;
  }
  function l(C, z) {
    var P = C.sortIndex - z.sortIndex;
    return P !== 0 ? P : C.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var u = Date,
      o = u.now();
    e.unstable_now = function () {
      return u.now() - o;
    };
  }
  var s = [],
    d = [],
    v = 1,
    m = null,
    p = 3,
    g = !1,
    w = !1,
    k = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(C) {
    for (var z = t(d); z !== null; ) {
      if (z.callback === null) r(d);
      else if (z.startTime <= C)
        r(d), (z.sortIndex = z.expirationTime), n(s, z);
      else break;
      z = t(d);
    }
  }
  function h(C) {
    if (((k = !1), f(C), !w))
      if (t(s) !== null) (w = !0), ol(E);
      else {
        var z = t(d);
        z !== null && sl(h, z.startTime - C);
      }
  }
  function E(C, z) {
    (w = !1), k && ((k = !1), c(_), (_ = -1)), (g = !0);
    var P = p;
    try {
      for (
        f(z), m = t(s);
        m !== null && (!(m.expirationTime > z) || (C && !Ce()));

      ) {
        var B = m.callback;
        if (typeof B == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var Y = B(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Y == "function" ? (m.callback = Y) : m === t(s) && r(s),
            f(z);
        } else r(s);
        m = t(s);
      }
      if (m !== null) var Xt = !0;
      else {
        var mn = t(d);
        mn !== null && sl(h, mn.startTime - z), (Xt = !1);
      }
      return Xt;
    } finally {
      (m = null), (p = P), (g = !1);
    }
  }
  var x = !1,
    N = null,
    _ = -1,
    H = 5,
    T = -1;
  function Ce() {
    return !(e.unstable_now() - T < H);
  }
  function lt() {
    if (N !== null) {
      var C = e.unstable_now();
      T = C;
      var z = !0;
      try {
        z = N(!0, C);
      } finally {
        z ? it() : ((x = !1), (N = null));
      }
    } else x = !1;
  }
  var it;
  if (typeof a == "function")
    it = function () {
      a(lt);
    };
  else if (typeof MessageChannel < "u") {
    var gu = new MessageChannel(),
      Da = gu.port2;
    (gu.port1.onmessage = lt),
      (it = function () {
        Da.postMessage(null);
      });
  } else
    it = function () {
      F(lt, 0);
    };
  function ol(C) {
    (N = C), x || ((x = !0), it());
  }
  function sl(C, z) {
    _ = F(function () {
      C(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), ol(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var P = p;
      p = z;
      try {
        return C();
      } finally {
        p = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, z) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var P = p;
      p = C;
      try {
        return z();
      } finally {
        p = P;
      }
    }),
    (e.unstable_scheduleCallback = function (C, z, P) {
      var B = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? B + P : B))
          : (P = B),
        C)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = P + Y),
        (C = {
          id: v++,
          callback: z,
          priorityLevel: C,
          startTime: P,
          expirationTime: Y,
          sortIndex: -1,
        }),
        P > B
          ? ((C.sortIndex = P),
            n(d, C),
            t(s) === null &&
              C === t(d) &&
              (k ? (c(_), (_ = -1)) : (k = !0), sl(h, P - B)))
          : ((C.sortIndex = Y), n(s, C), w || g || ((w = !0), ol(E))),
        C
      );
    }),
    (e.unstable_shouldYield = Ce),
    (e.unstable_wrapCallback = function (C) {
      var z = p;
      return function () {
        var P = p;
        p = z;
        try {
          return C.apply(this, arguments);
        } finally {
          p = P;
        }
      };
    });
})(Lo);
To.exports = Lo;
var Ra = To.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oa = Ue,
  me = Ra;
function y(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Mo = new Set(),
  zt = {};
function Pn(e, n) {
  Gn(e, n), Gn(e + "Capture", n);
}
function Gn(e, n) {
  for (zt[e] = n, e = 0; e < n.length; e++) Mo.add(n[e]);
}
var Be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Fl = Object.prototype.hasOwnProperty,
  Fa =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wu = {},
  ku = {};
function Ia(e) {
  return Fl.call(ku, e)
    ? !0
    : Fl.call(wu, e)
    ? !1
    : Fa.test(e)
    ? (ku[e] = !0)
    : ((wu[e] = !0), !1);
}
function ja(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ua(e, n, t, r) {
  if (n === null || typeof n > "u" || ja(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ie(e, n, t, r, l, i, u) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = u);
}
var q = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    q[e] = new ie(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  q[n] = new ie(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  q[e] = new ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  q[e] = new ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    q[e] = new ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  q[e] = new ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  q[e] = new ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  q[e] = new ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  q[e] = new ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zi = /[\-:]([a-z])/g;
function Pi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(zi, Pi);
    q[n] = new ie(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(zi, Pi);
    q[n] = new ie(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(zi, Pi);
  q[n] = new ie(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  q[e] = new ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
q.xlinkHref = new ie(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  q[e] = new ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ti(e, n, t, r) {
  var l = q.hasOwnProperty(n) ? q[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Ua(n, t, l, r) && (t = null),
    r || l === null
      ? Ia(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ke = Oa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Zt = Symbol.for("react.element"),
  Mn = Symbol.for("react.portal"),
  Dn = Symbol.for("react.fragment"),
  Li = Symbol.for("react.strict_mode"),
  Il = Symbol.for("react.profiler"),
  Do = Symbol.for("react.provider"),
  Ro = Symbol.for("react.context"),
  Mi = Symbol.for("react.forward_ref"),
  jl = Symbol.for("react.suspense"),
  Ul = Symbol.for("react.suspense_list"),
  Di = Symbol.for("react.memo"),
  Xe = Symbol.for("react.lazy"),
  Oo = Symbol.for("react.offscreen"),
  Su = Symbol.iterator;
function ut(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Su && e[Su]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var A = Object.assign,
  cl;
function mt(e) {
  if (cl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      cl = (n && n[1]) || "";
    }
  return (
    `
` +
    cl +
    e
  );
}
var fl = !1;
function dl(e, n) {
  if (!e || fl) return "";
  fl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (d) {
          r = d;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          i = r.stack.split(`
`),
          u = l.length - 1,
          o = i.length - 1;
        1 <= u && 0 <= o && l[u] !== i[o];

      )
        o--;
      for (; 1 <= u && 0 <= o; u--, o--)
        if (l[u] !== i[o]) {
          if (u !== 1 || o !== 1)
            do
              if ((u--, o--, 0 > o || l[u] !== i[o])) {
                var s =
                  `
` + l[u].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= u && 0 <= o);
          break;
        }
    }
  } finally {
    (fl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? mt(e) : "";
}
function Aa(e) {
  switch (e.tag) {
    case 5:
      return mt(e.type);
    case 16:
      return mt("Lazy");
    case 13:
      return mt("Suspense");
    case 19:
      return mt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = dl(e.type, !1)), e;
    case 11:
      return (e = dl(e.type.render, !1)), e;
    case 1:
      return (e = dl(e.type, !0)), e;
    default:
      return "";
  }
}
function Al(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case Mn:
      return "Portal";
    case Il:
      return "Profiler";
    case Li:
      return "StrictMode";
    case jl:
      return "Suspense";
    case Ul:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ro:
        return (e.displayName || "Context") + ".Consumer";
      case Do:
        return (e._context.displayName || "Context") + ".Provider";
      case Mi:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Di:
        return (
          (n = e.displayName || null), n !== null ? n : Al(e.type) || "Memo"
        );
      case Xe:
        (n = e._payload), (e = e._init);
        try {
          return Al(e(n));
        } catch {}
    }
  return null;
}
function Va(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Al(n);
    case 8:
      return n === Li ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function an(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Fo(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Ha(e) {
  var n = Fo(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (u) {
          (r = "" + u), i.call(this, u);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function Jt(e) {
  e._valueTracker || (e._valueTracker = Ha(e));
}
function Io(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = Fo(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Er(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vl(e, n) {
  var t = n.checked;
  return A({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Eu(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = an(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function jo(e, n) {
  (n = n.checked), n != null && Ti(e, "checked", n, !1);
}
function Hl(e, n) {
  jo(e, n);
  var t = an(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? Bl(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && Bl(e, n.type, an(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Cu(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function Bl(e, n, t) {
  (n !== "number" || Er(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var vt = Array.isArray;
function Wn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + an(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function Wl(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return A({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xu(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (vt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: an(t) };
}
function Uo(e, n) {
  var t = an(n.value),
    r = an(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Nu(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Ao(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ql(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ao(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var qt,
  Vo = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        qt = qt || document.createElement("div"),
          qt.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = qt.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Pt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var gt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ba = ["Webkit", "ms", "Moz", "O"];
Object.keys(gt).forEach(function (e) {
  Ba.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (gt[n] = gt[e]);
  });
});
function Ho(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (gt.hasOwnProperty(e) && gt[e])
    ? ("" + n).trim()
    : n + "px";
}
function Bo(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = Ho(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Wa = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function $l(e, n) {
  if (n) {
    if (Wa[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function Kl(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Yl = null;
function Ri(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xl = null,
  Qn = null,
  $n = null;
function _u(e) {
  if ((e = Kt(e))) {
    if (typeof Xl != "function") throw Error(y(280));
    var n = e.stateNode;
    n && ((n = Zr(n)), Xl(e.stateNode, e.type, n));
  }
}
function Wo(e) {
  Qn ? ($n ? $n.push(e) : ($n = [e])) : (Qn = e);
}
function Qo() {
  if (Qn) {
    var e = Qn,
      n = $n;
    if ((($n = Qn = null), _u(e), n)) for (e = 0; e < n.length; e++) _u(n[e]);
  }
}
function $o(e, n) {
  return e(n);
}
function Ko() {}
var pl = !1;
function Yo(e, n, t) {
  if (pl) return e(n, t);
  pl = !0;
  try {
    return $o(e, n, t);
  } finally {
    (pl = !1), (Qn !== null || $n !== null) && (Ko(), Qo());
  }
}
function Tt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = Zr(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var Gl = !1;
if (Be)
  try {
    var ot = {};
    Object.defineProperty(ot, "passive", {
      get: function () {
        Gl = !0;
      },
    }),
      window.addEventListener("test", ot, ot),
      window.removeEventListener("test", ot, ot);
  } catch {
    Gl = !1;
  }
function Qa(e, n, t, r, l, i, u, o, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, d);
  } catch (v) {
    this.onError(v);
  }
}
var wt = !1,
  Cr = null,
  xr = !1,
  Zl = null,
  $a = {
    onError: function (e) {
      (wt = !0), (Cr = e);
    },
  };
function Ka(e, n, t, r, l, i, u, o, s) {
  (wt = !1), (Cr = null), Qa.apply($a, arguments);
}
function Ya(e, n, t, r, l, i, u, o, s) {
  if ((Ka.apply(this, arguments), wt)) {
    if (wt) {
      var d = Cr;
      (wt = !1), (Cr = null);
    } else throw Error(y(198));
    xr || ((xr = !0), (Zl = d));
  }
}
function Tn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Xo(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function zu(e) {
  if (Tn(e) !== e) throw Error(y(188));
}
function Xa(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Tn(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return zu(l), e;
        if (i === r) return zu(l), n;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = l), (r = i);
    else {
      for (var u = !1, o = l.child; o; ) {
        if (o === t) {
          (u = !0), (t = l), (r = i);
          break;
        }
        if (o === r) {
          (u = !0), (r = l), (t = i);
          break;
        }
        o = o.sibling;
      }
      if (!u) {
        for (o = i.child; o; ) {
          if (o === t) {
            (u = !0), (t = i), (r = l);
            break;
          }
          if (o === r) {
            (u = !0), (r = i), (t = l);
            break;
          }
          o = o.sibling;
        }
        if (!u) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Go(e) {
  return (e = Xa(e)), e !== null ? Zo(e) : null;
}
function Zo(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Zo(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Jo = me.unstable_scheduleCallback,
  Pu = me.unstable_cancelCallback,
  Ga = me.unstable_shouldYield,
  Za = me.unstable_requestPaint,
  W = me.unstable_now,
  Ja = me.unstable_getCurrentPriorityLevel,
  Oi = me.unstable_ImmediatePriority,
  qo = me.unstable_UserBlockingPriority,
  Nr = me.unstable_NormalPriority,
  qa = me.unstable_LowPriority,
  bo = me.unstable_IdlePriority,
  Kr = null,
  Oe = null;
function ba(e) {
  if (Oe && typeof Oe.onCommitFiberRoot == "function")
    try {
      Oe.onCommitFiberRoot(Kr, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Pe = Math.clz32 ? Math.clz32 : tc,
  ec = Math.log,
  nc = Math.LN2;
function tc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ec(e) / nc) | 0)) | 0;
}
var bt = 64,
  er = 4194304;
function ht(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function _r(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    u = t & 268435455;
  if (u !== 0) {
    var o = u & ~l;
    o !== 0 ? (r = ht(o)) : ((i &= u), i !== 0 && (r = ht(i)));
  } else (u = t & ~l), u !== 0 ? (r = ht(u)) : i !== 0 && (r = ht(i));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Pe(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function rc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function lc(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var u = 31 - Pe(i),
      o = 1 << u,
      s = l[u];
    s === -1
      ? (!(o & t) || o & r) && (l[u] = rc(o, n))
      : s <= n && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function Jl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function es() {
  var e = bt;
  return (bt <<= 1), !(bt & 4194240) && (bt = 64), e;
}
function ml(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Qt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Pe(n)),
    (e[n] = t);
}
function ic(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Pe(t),
      i = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i);
  }
}
function Fi(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Pe(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var M = 0;
function ns(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ts,
  Ii,
  rs,
  ls,
  is,
  ql = !1,
  nr = [],
  en = null,
  nn = null,
  tn = null,
  Lt = new Map(),
  Mt = new Map(),
  Ze = [],
  uc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Tu(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      nn = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      Lt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Mt.delete(n.pointerId);
  }
}
function st(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      n !== null && ((n = Kt(n)), n !== null && Ii(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function oc(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (en = st(en, e, n, t, r, l)), !0;
    case "dragenter":
      return (nn = st(nn, e, n, t, r, l)), !0;
    case "mouseover":
      return (tn = st(tn, e, n, t, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Lt.set(i, st(Lt.get(i) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Mt.set(i, st(Mt.get(i) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function us(e) {
  var n = gn(e.target);
  if (n !== null) {
    var t = Tn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Xo(t)), n !== null)) {
          (e.blockedOn = n),
            is(e.priority, function () {
              rs(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function dr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = bl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (Yl = r), t.target.dispatchEvent(r), (Yl = null);
    } else return (n = Kt(t)), n !== null && Ii(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function Lu(e, n, t) {
  dr(e) && t.delete(n);
}
function sc() {
  (ql = !1),
    en !== null && dr(en) && (en = null),
    nn !== null && dr(nn) && (nn = null),
    tn !== null && dr(tn) && (tn = null),
    Lt.forEach(Lu),
    Mt.forEach(Lu);
}
function at(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    ql ||
      ((ql = !0),
      me.unstable_scheduleCallback(me.unstable_NormalPriority, sc)));
}
function Dt(e) {
  function n(l) {
    return at(l, e);
  }
  if (0 < nr.length) {
    at(nr[0], e);
    for (var t = 1; t < nr.length; t++) {
      var r = nr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    en !== null && at(en, e),
      nn !== null && at(nn, e),
      tn !== null && at(tn, e),
      Lt.forEach(n),
      Mt.forEach(n),
      t = 0;
    t < Ze.length;
    t++
  )
    (r = Ze[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ze.length && ((t = Ze[0]), t.blockedOn === null); )
    us(t), t.blockedOn === null && Ze.shift();
}
var Kn = Ke.ReactCurrentBatchConfig,
  zr = !0;
function ac(e, n, t, r) {
  var l = M,
    i = Kn.transition;
  Kn.transition = null;
  try {
    (M = 1), ji(e, n, t, r);
  } finally {
    (M = l), (Kn.transition = i);
  }
}
function cc(e, n, t, r) {
  var l = M,
    i = Kn.transition;
  Kn.transition = null;
  try {
    (M = 4), ji(e, n, t, r);
  } finally {
    (M = l), (Kn.transition = i);
  }
}
function ji(e, n, t, r) {
  if (zr) {
    var l = bl(e, n, t, r);
    if (l === null) xl(e, n, r, Pr, t), Tu(e, r);
    else if (oc(l, e, n, t, r)) r.stopPropagation();
    else if ((Tu(e, r), n & 4 && -1 < uc.indexOf(e))) {
      for (; l !== null; ) {
        var i = Kt(l);
        if (
          (i !== null && ts(i),
          (i = bl(e, n, t, r)),
          i === null && xl(e, n, r, Pr, t),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else xl(e, n, r, null, t);
  }
}
var Pr = null;
function bl(e, n, t, r) {
  if (((Pr = null), (e = Ri(r)), (e = gn(e)), e !== null))
    if (((n = Tn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Xo(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Pr = e), null;
}
function os(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ja()) {
        case Oi:
          return 1;
        case qo:
          return 4;
        case Nr:
        case qa:
          return 16;
        case bo:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qe = null,
  Ui = null,
  pr = null;
function ss() {
  if (pr) return pr;
  var e,
    n = Ui,
    t = n.length,
    r,
    l = "value" in qe ? qe.value : qe.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var u = t - e;
  for (r = 1; r <= u && n[t - r] === l[i - r]; r++);
  return (pr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function mr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function tr() {
  return !0;
}
function Mu() {
  return !1;
}
function he(e) {
  function n(t, r, l, i, u) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = u),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? tr
        : Mu),
      (this.isPropagationStopped = Mu),
      this
    );
  }
  return (
    A(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = tr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = tr));
      },
      persist: function () {},
      isPersistent: tr,
    }),
    n
  );
}
var tt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ai = he(tt),
  $t = A({}, tt, { view: 0, detail: 0 }),
  fc = he($t),
  vl,
  hl,
  ct,
  Yr = A({}, $t, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Vi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ct &&
            (ct && e.type === "mousemove"
              ? ((vl = e.screenX - ct.screenX), (hl = e.screenY - ct.screenY))
              : (hl = vl = 0),
            (ct = e)),
          vl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : hl;
    },
  }),
  Du = he(Yr),
  dc = A({}, Yr, { dataTransfer: 0 }),
  pc = he(dc),
  mc = A({}, $t, { relatedTarget: 0 }),
  yl = he(mc),
  vc = A({}, tt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hc = he(vc),
  yc = A({}, tt, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gc = he(yc),
  wc = A({}, tt, { data: 0 }),
  Ru = he(wc),
  kc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Sc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ec = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Cc(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Ec[e]) ? !!n[e] : !1;
}
function Vi() {
  return Cc;
}
var xc = A({}, $t, {
    key: function (e) {
      if (e.key) {
        var n = kc[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = mr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sc[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vi,
    charCode: function (e) {
      return e.type === "keypress" ? mr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? mr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Nc = he(xc),
  _c = A({}, Yr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ou = he(_c),
  zc = A({}, $t, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vi,
  }),
  Pc = he(zc),
  Tc = A({}, tt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lc = he(Tc),
  Mc = A({}, Yr, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Dc = he(Mc),
  Rc = [9, 13, 27, 32],
  Hi = Be && "CompositionEvent" in window,
  kt = null;
Be && "documentMode" in document && (kt = document.documentMode);
var Oc = Be && "TextEvent" in window && !kt,
  as = Be && (!Hi || (kt && 8 < kt && 11 >= kt)),
  Fu = " ",
  Iu = !1;
function cs(e, n) {
  switch (e) {
    case "keyup":
      return Rc.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function fs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Rn = !1;
function Fc(e, n) {
  switch (e) {
    case "compositionend":
      return fs(n);
    case "keypress":
      return n.which !== 32 ? null : ((Iu = !0), Fu);
    case "textInput":
      return (e = n.data), e === Fu && Iu ? null : e;
    default:
      return null;
  }
}
function Ic(e, n) {
  if (Rn)
    return e === "compositionend" || (!Hi && cs(e, n))
      ? ((e = ss()), (pr = Ui = qe = null), (Rn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return as && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var jc = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ju(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!jc[e.type] : n === "textarea";
}
function ds(e, n, t, r) {
  Wo(r),
    (n = Tr(n, "onChange")),
    0 < n.length &&
      ((t = new Ai("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var St = null,
  Rt = null;
function Uc(e) {
  Cs(e, 0);
}
function Xr(e) {
  var n = In(e);
  if (Io(n)) return e;
}
function Ac(e, n) {
  if (e === "change") return n;
}
var ps = !1;
if (Be) {
  var gl;
  if (Be) {
    var wl = "oninput" in document;
    if (!wl) {
      var Uu = document.createElement("div");
      Uu.setAttribute("oninput", "return;"),
        (wl = typeof Uu.oninput == "function");
    }
    gl = wl;
  } else gl = !1;
  ps = gl && (!document.documentMode || 9 < document.documentMode);
}
function Au() {
  St && (St.detachEvent("onpropertychange", ms), (Rt = St = null));
}
function ms(e) {
  if (e.propertyName === "value" && Xr(Rt)) {
    var n = [];
    ds(n, Rt, e, Ri(e)), Yo(Uc, n);
  }
}
function Vc(e, n, t) {
  e === "focusin"
    ? (Au(), (St = n), (Rt = t), St.attachEvent("onpropertychange", ms))
    : e === "focusout" && Au();
}
function Hc(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xr(Rt);
}
function Bc(e, n) {
  if (e === "click") return Xr(n);
}
function Wc(e, n) {
  if (e === "input" || e === "change") return Xr(n);
}
function Qc(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Le = typeof Object.is == "function" ? Object.is : Qc;
function Ot(e, n) {
  if (Le(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Fl.call(n, l) || !Le(e[l], n[l])) return !1;
  }
  return !0;
}
function Vu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hu(e, n) {
  var t = Vu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Vu(t);
  }
}
function vs(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? vs(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function hs() {
  for (var e = window, n = Er(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Er(e.document);
  }
  return n;
}
function Bi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function $c(e) {
  var n = hs(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    vs(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && Bi(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Hu(t, i));
        var u = Hu(t, r);
        l &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(n), e.extend(u.node, u.offset))
            : (n.setEnd(u.node, u.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Kc = Be && "documentMode" in document && 11 >= document.documentMode,
  On = null,
  ei = null,
  Et = null,
  ni = !1;
function Bu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  ni ||
    On == null ||
    On !== Er(r) ||
    ((r = On),
    "selectionStart" in r && Bi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Et && Ot(Et, r)) ||
      ((Et = r),
      (r = Tr(ei, "onSelect")),
      0 < r.length &&
        ((n = new Ai("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = On))));
}
function rr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var Fn = {
    animationend: rr("Animation", "AnimationEnd"),
    animationiteration: rr("Animation", "AnimationIteration"),
    animationstart: rr("Animation", "AnimationStart"),
    transitionend: rr("Transition", "TransitionEnd"),
  },
  kl = {},
  ys = {};
Be &&
  ((ys = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition);
function Gr(e) {
  if (kl[e]) return kl[e];
  if (!Fn[e]) return e;
  var n = Fn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in ys) return (kl[e] = n[t]);
  return e;
}
var gs = Gr("animationend"),
  ws = Gr("animationiteration"),
  ks = Gr("animationstart"),
  Ss = Gr("transitionend"),
  Es = new Map(),
  Wu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function fn(e, n) {
  Es.set(e, n), Pn(n, [e]);
}
for (var Sl = 0; Sl < Wu.length; Sl++) {
  var El = Wu[Sl],
    Yc = El.toLowerCase(),
    Xc = El[0].toUpperCase() + El.slice(1);
  fn(Yc, "on" + Xc);
}
fn(gs, "onAnimationEnd");
fn(ws, "onAnimationIteration");
fn(ks, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(Ss, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
Pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var yt =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Gc = new Set("cancel close invalid load scroll toggle".split(" ").concat(yt));
function Qu(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), Ya(r, n, void 0, e), (e.currentTarget = null);
}
function Cs(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var u = r.length - 1; 0 <= u; u--) {
          var o = r[u],
            s = o.instance,
            d = o.currentTarget;
          if (((o = o.listener), s !== i && l.isPropagationStopped())) break e;
          Qu(l, o, d), (i = s);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((o = r[u]),
            (s = o.instance),
            (d = o.currentTarget),
            (o = o.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Qu(l, o, d), (i = s);
        }
    }
  }
  if (xr) throw ((e = Zl), (xr = !1), (Zl = null), e);
}
function R(e, n) {
  var t = n[ui];
  t === void 0 && (t = n[ui] = new Set());
  var r = e + "__bubble";
  t.has(r) || (xs(n, e, 2, !1), t.add(r));
}
function Cl(e, n, t) {
  var r = 0;
  n && (r |= 4), xs(t, e, r, n);
}
var lr = "_reactListening" + Math.random().toString(36).slice(2);
function Ft(e) {
  if (!e[lr]) {
    (e[lr] = !0),
      Mo.forEach(function (t) {
        t !== "selectionchange" && (Gc.has(t) || Cl(t, !1, e), Cl(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[lr] || ((n[lr] = !0), Cl("selectionchange", !1, n));
  }
}
function xs(e, n, t, r) {
  switch (os(n)) {
    case 1:
      var l = ac;
      break;
    case 4:
      l = cc;
      break;
    default:
      l = ji;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !Gl ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function xl(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var s = u.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = u.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            u = u.return;
          }
        for (; o !== null; ) {
          if (((u = gn(o)), u === null)) return;
          if (((s = u.tag), s === 5 || s === 6)) {
            r = i = u;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  Yo(function () {
    var d = i,
      v = Ri(t),
      m = [];
    e: {
      var p = Es.get(e);
      if (p !== void 0) {
        var g = Ai,
          w = e;
        switch (e) {
          case "keypress":
            if (mr(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = Nc;
            break;
          case "focusin":
            (w = "focus"), (g = yl);
            break;
          case "focusout":
            (w = "blur"), (g = yl);
            break;
          case "beforeblur":
          case "afterblur":
            g = yl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Du;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = pc;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Pc;
            break;
          case gs:
          case ws:
          case ks:
            g = hc;
            break;
          case Ss:
            g = Lc;
            break;
          case "scroll":
            g = fc;
            break;
          case "wheel":
            g = Dc;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = gc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ou;
        }
        var k = (n & 4) !== 0,
          F = !k && e === "scroll",
          c = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var a = d, f; a !== null; ) {
          f = a;
          var h = f.stateNode;
          if (
            (f.tag === 5 &&
              h !== null &&
              ((f = h),
              c !== null && ((h = Tt(a, c)), h != null && k.push(It(a, h, f)))),
            F)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((p = new g(p, w, null, t, v)), m.push({ event: p, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            t !== Yl &&
            (w = t.relatedTarget || t.fromElement) &&
            (gn(w) || w[We]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            v.window === v
              ? v
              : (p = v.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = t.relatedTarget || t.toElement),
              (g = d),
              (w = w ? gn(w) : null),
              w !== null &&
                ((F = Tn(w)), w !== F || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = d)),
          g !== w)
        ) {
          if (
            ((k = Du),
            (h = "onMouseLeave"),
            (c = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Ou),
              (h = "onPointerLeave"),
              (c = "onPointerEnter"),
              (a = "pointer")),
            (F = g == null ? p : In(g)),
            (f = w == null ? p : In(w)),
            (p = new k(h, a + "leave", g, t, v)),
            (p.target = F),
            (p.relatedTarget = f),
            (h = null),
            gn(v) === d &&
              ((k = new k(c, a + "enter", w, t, v)),
              (k.target = f),
              (k.relatedTarget = F),
              (h = k)),
            (F = h),
            g && w)
          )
            n: {
              for (k = g, c = w, a = 0, f = k; f; f = Ln(f)) a++;
              for (f = 0, h = c; h; h = Ln(h)) f++;
              for (; 0 < a - f; ) (k = Ln(k)), a--;
              for (; 0 < f - a; ) (c = Ln(c)), f--;
              for (; a--; ) {
                if (k === c || (c !== null && k === c.alternate)) break n;
                (k = Ln(k)), (c = Ln(c));
              }
              k = null;
            }
          else k = null;
          g !== null && $u(m, p, g, k, !1),
            w !== null && F !== null && $u(m, F, w, k, !0);
        }
      }
      e: {
        if (
          ((p = d ? In(d) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var E = Ac;
        else if (ju(p))
          if (ps) E = Wc;
          else {
            E = Hc;
            var x = Vc;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Bc);
        if (E && (E = E(e, d))) {
          ds(m, E, t, v);
          break e;
        }
        x && x(e, p, d),
          e === "focusout" &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === "number" &&
            Bl(p, "number", p.value);
      }
      switch (((x = d ? In(d) : window), e)) {
        case "focusin":
          (ju(x) || x.contentEditable === "true") &&
            ((On = x), (ei = d), (Et = null));
          break;
        case "focusout":
          Et = ei = On = null;
          break;
        case "mousedown":
          ni = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ni = !1), Bu(m, t, v);
          break;
        case "selectionchange":
          if (Kc) break;
        case "keydown":
        case "keyup":
          Bu(m, t, v);
      }
      var N;
      if (Hi)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Rn
          ? cs(e, t) && (_ = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (as &&
          t.locale !== "ko" &&
          (Rn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Rn && (N = ss())
            : ((qe = v),
              (Ui = "value" in qe ? qe.value : qe.textContent),
              (Rn = !0))),
        (x = Tr(d, _)),
        0 < x.length &&
          ((_ = new Ru(_, e, null, t, v)),
          m.push({ event: _, listeners: x }),
          N ? (_.data = N) : ((N = fs(t)), N !== null && (_.data = N)))),
        (N = Oc ? Fc(e, t) : Ic(e, t)) &&
          ((d = Tr(d, "onBeforeInput")),
          0 < d.length &&
            ((v = new Ru("onBeforeInput", "beforeinput", null, t, v)),
            m.push({ event: v, listeners: d }),
            (v.data = N)));
    }
    Cs(m, n);
  });
}
function It(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Tr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Tt(e, t)),
      i != null && r.unshift(It(e, i, l)),
      (i = Tt(e, n)),
      i != null && r.push(It(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function $u(e, n, t, r, l) {
  for (var i = n._reactName, u = []; t !== null && t !== r; ) {
    var o = t,
      s = o.alternate,
      d = o.stateNode;
    if (s !== null && s === r) break;
    o.tag === 5 &&
      d !== null &&
      ((o = d),
      l
        ? ((s = Tt(t, i)), s != null && u.unshift(It(t, s, o)))
        : l || ((s = Tt(t, i)), s != null && u.push(It(t, s, o)))),
      (t = t.return);
  }
  u.length !== 0 && e.push({ event: n, listeners: u });
}
var Zc = /\r\n?/g,
  Jc = /\u0000|\uFFFD/g;
function Ku(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zc,
      `
`
    )
    .replace(Jc, "");
}
function ir(e, n, t) {
  if (((n = Ku(n)), Ku(e) !== n && t)) throw Error(y(425));
}
function Lr() {}
var ti = null,
  ri = null;
function li(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var ii = typeof setTimeout == "function" ? setTimeout : void 0,
  qc = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yu = typeof Promise == "function" ? Promise : void 0,
  bc =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yu < "u"
      ? function (e) {
          return Yu.resolve(null).then(e).catch(ef);
        }
      : ii;
function ef(e) {
  setTimeout(function () {
    throw e;
  });
}
function Nl(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Dt(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Dt(n);
}
function rn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function Xu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var rt = Math.random().toString(36).slice(2),
  Re = "__reactFiber$" + rt,
  jt = "__reactProps$" + rt,
  We = "__reactContainer$" + rt,
  ui = "__reactEvents$" + rt,
  nf = "__reactListeners$" + rt,
  tf = "__reactHandles$" + rt;
function gn(e) {
  var n = e[Re];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[We] || t[Re])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = Xu(e); e !== null; ) {
          if ((t = e[Re])) return t;
          e = Xu(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function Kt(e) {
  return (
    (e = e[Re] || e[We]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function In(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function Zr(e) {
  return e[jt] || null;
}
var oi = [],
  jn = -1;
function dn(e) {
  return { current: e };
}
function O(e) {
  0 > jn || ((e.current = oi[jn]), (oi[jn] = null), jn--);
}
function D(e, n) {
  jn++, (oi[jn] = e.current), (e.current = n);
}
var cn = {},
  te = dn(cn),
  se = dn(!1),
  Cn = cn;
function Zn(e, n) {
  var t = e.type.contextTypes;
  if (!t) return cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ae(e) {
  return (e = e.childContextTypes), e != null;
}
function Mr() {
  O(se), O(te);
}
function Gu(e, n, t) {
  if (te.current !== cn) throw Error(y(168));
  D(te, n), D(se, t);
}
function Ns(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Va(e) || "Unknown", l));
  return A({}, t, r);
}
function Dr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || cn),
    (Cn = te.current),
    D(te, e),
    D(se, se.current),
    !0
  );
}
function Zu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t
    ? ((e = Ns(e, n, Cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      O(se),
      O(te),
      D(te, e))
    : O(se),
    D(se, t);
}
var je = null,
  Jr = !1,
  _l = !1;
function _s(e) {
  je === null ? (je = [e]) : je.push(e);
}
function rf(e) {
  (Jr = !0), _s(e);
}
function pn() {
  if (!_l && je !== null) {
    _l = !0;
    var e = 0,
      n = M;
    try {
      var t = je;
      for (M = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (je = null), (Jr = !1);
    } catch (l) {
      throw (je !== null && (je = je.slice(e + 1)), Jo(Oi, pn), l);
    } finally {
      (M = n), (_l = !1);
    }
  }
  return null;
}
var Un = [],
  An = 0,
  Rr = null,
  Or = 0,
  ye = [],
  ge = 0,
  xn = null,
  Ae = 1,
  Ve = "";
function hn(e, n) {
  (Un[An++] = Or), (Un[An++] = Rr), (Rr = e), (Or = n);
}
function zs(e, n, t) {
  (ye[ge++] = Ae), (ye[ge++] = Ve), (ye[ge++] = xn), (xn = e);
  var r = Ae;
  e = Ve;
  var l = 32 - Pe(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var i = 32 - Pe(n) + l;
  if (30 < i) {
    var u = l - (l % 5);
    (i = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (l -= u),
      (Ae = (1 << (32 - Pe(n) + l)) | (t << l) | r),
      (Ve = i + e);
  } else (Ae = (1 << i) | (t << l) | r), (Ve = e);
}
function Wi(e) {
  e.return !== null && (hn(e, 1), zs(e, 1, 0));
}
function Qi(e) {
  for (; e === Rr; )
    (Rr = Un[--An]), (Un[An] = null), (Or = Un[--An]), (Un[An] = null);
  for (; e === xn; )
    (xn = ye[--ge]),
      (ye[ge] = null),
      (Ve = ye[--ge]),
      (ye[ge] = null),
      (Ae = ye[--ge]),
      (ye[ge] = null);
}
var pe = null,
  de = null,
  I = !1,
  ze = null;
function Ps(e, n) {
  var t = we(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function Ju(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (pe = e), (de = rn(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (pe = e), (de = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = xn !== null ? { id: Ae, overflow: Ve } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = we(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (pe = e),
            (de = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function si(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ai(e) {
  if (I) {
    var n = de;
    if (n) {
      var t = n;
      if (!Ju(e, n)) {
        if (si(e)) throw Error(y(418));
        n = rn(t.nextSibling);
        var r = pe;
        n && Ju(e, n)
          ? Ps(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (I = !1), (pe = e));
      }
    } else {
      if (si(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (I = !1), (pe = e);
    }
  }
}
function qu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  pe = e;
}
function ur(e) {
  if (e !== pe) return !1;
  if (!I) return qu(e), (I = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !li(e.type, e.memoizedProps))),
    n && (n = de))
  ) {
    if (si(e)) throw (Ts(), Error(y(418)));
    for (; n; ) Ps(e, n), (n = rn(n.nextSibling));
  }
  if ((qu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              de = rn(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      de = null;
    }
  } else de = pe ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ts() {
  for (var e = de; e; ) e = rn(e.nextSibling);
}
function Jn() {
  (de = pe = null), (I = !1);
}
function $i(e) {
  ze === null ? (ze = [e]) : ze.push(e);
}
var lf = Ke.ReactCurrentBatchConfig;
function ft(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (u) {
            var o = l.refs;
            u === null ? delete o[i] : (o[i] = u);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function or(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function bu(e) {
  var n = e._init;
  return n(e._payload);
}
function Ls(e) {
  function n(c, a) {
    if (e) {
      var f = c.deletions;
      f === null ? ((c.deletions = [a]), (c.flags |= 16)) : f.push(a);
    }
  }
  function t(c, a) {
    if (!e) return null;
    for (; a !== null; ) n(c, a), (a = a.sibling);
    return null;
  }
  function r(c, a) {
    for (c = new Map(); a !== null; )
      a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
    return c;
  }
  function l(c, a) {
    return (c = sn(c, a)), (c.index = 0), (c.sibling = null), c;
  }
  function i(c, a, f) {
    return (
      (c.index = f),
      e
        ? ((f = c.alternate),
          f !== null
            ? ((f = f.index), f < a ? ((c.flags |= 2), a) : f)
            : ((c.flags |= 2), a))
        : ((c.flags |= 1048576), a)
    );
  }
  function u(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function o(c, a, f, h) {
    return a === null || a.tag !== 6
      ? ((a = Rl(f, c.mode, h)), (a.return = c), a)
      : ((a = l(a, f)), (a.return = c), a);
  }
  function s(c, a, f, h) {
    var E = f.type;
    return E === Dn
      ? v(c, a, f.props.children, h, f.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Xe &&
            bu(E) === a.type))
      ? ((h = l(a, f.props)), (h.ref = ft(c, a, f)), (h.return = c), h)
      : ((h = Sr(f.type, f.key, f.props, null, c.mode, h)),
        (h.ref = ft(c, a, f)),
        (h.return = c),
        h);
  }
  function d(c, a, f, h) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== f.containerInfo ||
      a.stateNode.implementation !== f.implementation
      ? ((a = Ol(f, c.mode, h)), (a.return = c), a)
      : ((a = l(a, f.children || [])), (a.return = c), a);
  }
  function v(c, a, f, h, E) {
    return a === null || a.tag !== 7
      ? ((a = En(f, c.mode, h, E)), (a.return = c), a)
      : ((a = l(a, f)), (a.return = c), a);
  }
  function m(c, a, f) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Rl("" + a, c.mode, f)), (a.return = c), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case Zt:
          return (
            (f = Sr(a.type, a.key, a.props, null, c.mode, f)),
            (f.ref = ft(c, null, a)),
            (f.return = c),
            f
          );
        case Mn:
          return (a = Ol(a, c.mode, f)), (a.return = c), a;
        case Xe:
          var h = a._init;
          return m(c, h(a._payload), f);
      }
      if (vt(a) || ut(a))
        return (a = En(a, c.mode, f, null)), (a.return = c), a;
      or(c, a);
    }
    return null;
  }
  function p(c, a, f, h) {
    var E = a !== null ? a.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return E !== null ? null : o(c, a, "" + f, h);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Zt:
          return f.key === E ? s(c, a, f, h) : null;
        case Mn:
          return f.key === E ? d(c, a, f, h) : null;
        case Xe:
          return (E = f._init), p(c, a, E(f._payload), h);
      }
      if (vt(f) || ut(f)) return E !== null ? null : v(c, a, f, h, null);
      or(c, f);
    }
    return null;
  }
  function g(c, a, f, h, E) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (c = c.get(f) || null), o(a, c, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Zt:
          return (c = c.get(h.key === null ? f : h.key) || null), s(a, c, h, E);
        case Mn:
          return (c = c.get(h.key === null ? f : h.key) || null), d(a, c, h, E);
        case Xe:
          var x = h._init;
          return g(c, a, f, x(h._payload), E);
      }
      if (vt(h) || ut(h)) return (c = c.get(f) || null), v(a, c, h, E, null);
      or(a, h);
    }
    return null;
  }
  function w(c, a, f, h) {
    for (
      var E = null, x = null, N = a, _ = (a = 0), H = null;
      N !== null && _ < f.length;
      _++
    ) {
      N.index > _ ? ((H = N), (N = null)) : (H = N.sibling);
      var T = p(c, N, f[_], h);
      if (T === null) {
        N === null && (N = H);
        break;
      }
      e && N && T.alternate === null && n(c, N),
        (a = i(T, a, _)),
        x === null ? (E = T) : (x.sibling = T),
        (x = T),
        (N = H);
    }
    if (_ === f.length) return t(c, N), I && hn(c, _), E;
    if (N === null) {
      for (; _ < f.length; _++)
        (N = m(c, f[_], h)),
          N !== null &&
            ((a = i(N, a, _)), x === null ? (E = N) : (x.sibling = N), (x = N));
      return I && hn(c, _), E;
    }
    for (N = r(c, N); _ < f.length; _++)
      (H = g(N, c, _, f[_], h)),
        H !== null &&
          (e && H.alternate !== null && N.delete(H.key === null ? _ : H.key),
          (a = i(H, a, _)),
          x === null ? (E = H) : (x.sibling = H),
          (x = H));
    return (
      e &&
        N.forEach(function (Ce) {
          return n(c, Ce);
        }),
      I && hn(c, _),
      E
    );
  }
  function k(c, a, f, h) {
    var E = ut(f);
    if (typeof E != "function") throw Error(y(150));
    if (((f = E.call(f)), f == null)) throw Error(y(151));
    for (
      var x = (E = null), N = a, _ = (a = 0), H = null, T = f.next();
      N !== null && !T.done;
      _++, T = f.next()
    ) {
      N.index > _ ? ((H = N), (N = null)) : (H = N.sibling);
      var Ce = p(c, N, T.value, h);
      if (Ce === null) {
        N === null && (N = H);
        break;
      }
      e && N && Ce.alternate === null && n(c, N),
        (a = i(Ce, a, _)),
        x === null ? (E = Ce) : (x.sibling = Ce),
        (x = Ce),
        (N = H);
    }
    if (T.done) return t(c, N), I && hn(c, _), E;
    if (N === null) {
      for (; !T.done; _++, T = f.next())
        (T = m(c, T.value, h)),
          T !== null &&
            ((a = i(T, a, _)), x === null ? (E = T) : (x.sibling = T), (x = T));
      return I && hn(c, _), E;
    }
    for (N = r(c, N); !T.done; _++, T = f.next())
      (T = g(N, c, _, T.value, h)),
        T !== null &&
          (e && T.alternate !== null && N.delete(T.key === null ? _ : T.key),
          (a = i(T, a, _)),
          x === null ? (E = T) : (x.sibling = T),
          (x = T));
    return (
      e &&
        N.forEach(function (lt) {
          return n(c, lt);
        }),
      I && hn(c, _),
      E
    );
  }
  function F(c, a, f, h) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Dn &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case Zt:
          e: {
            for (var E = f.key, x = a; x !== null; ) {
              if (x.key === E) {
                if (((E = f.type), E === Dn)) {
                  if (x.tag === 7) {
                    t(c, x.sibling),
                      (a = l(x, f.props.children)),
                      (a.return = c),
                      (c = a);
                    break e;
                  }
                } else if (
                  x.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Xe &&
                    bu(E) === x.type)
                ) {
                  t(c, x.sibling),
                    (a = l(x, f.props)),
                    (a.ref = ft(c, x, f)),
                    (a.return = c),
                    (c = a);
                  break e;
                }
                t(c, x);
                break;
              } else n(c, x);
              x = x.sibling;
            }
            f.type === Dn
              ? ((a = En(f.props.children, c.mode, h, f.key)),
                (a.return = c),
                (c = a))
              : ((h = Sr(f.type, f.key, f.props, null, c.mode, h)),
                (h.ref = ft(c, a, f)),
                (h.return = c),
                (c = h));
          }
          return u(c);
        case Mn:
          e: {
            for (x = f.key; a !== null; ) {
              if (a.key === x)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === f.containerInfo &&
                  a.stateNode.implementation === f.implementation
                ) {
                  t(c, a.sibling),
                    (a = l(a, f.children || [])),
                    (a.return = c),
                    (c = a);
                  break e;
                } else {
                  t(c, a);
                  break;
                }
              else n(c, a);
              a = a.sibling;
            }
            (a = Ol(f, c.mode, h)), (a.return = c), (c = a);
          }
          return u(c);
        case Xe:
          return (x = f._init), F(c, a, x(f._payload), h);
      }
      if (vt(f)) return w(c, a, f, h);
      if (ut(f)) return k(c, a, f, h);
      or(c, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        a !== null && a.tag === 6
          ? (t(c, a.sibling), (a = l(a, f)), (a.return = c), (c = a))
          : (t(c, a), (a = Rl(f, c.mode, h)), (a.return = c), (c = a)),
        u(c))
      : t(c, a);
  }
  return F;
}
var qn = Ls(!0),
  Ms = Ls(!1),
  Fr = dn(null),
  Ir = null,
  Vn = null,
  Ki = null;
function Yi() {
  Ki = Vn = Ir = null;
}
function Xi(e) {
  var n = Fr.current;
  O(Fr), (e._currentValue = n);
}
function ci(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function Yn(e, n) {
  (Ir = e),
    (Ki = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (oe = !0), (e.firstContext = null));
}
function Se(e) {
  var n = e._currentValue;
  if (Ki !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Vn === null)) {
      if (Ir === null) throw Error(y(308));
      (Vn = e), (Ir.dependencies = { lanes: 0, firstContext: e });
    } else Vn = Vn.next = e;
  return n;
}
var wn = null;
function Gi(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function Ds(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), Gi(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Qe(e, r)
  );
}
function Qe(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var Ge = !1;
function Zi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Rs(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ln(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), L & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Qe(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), Gi(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Qe(e, t)
  );
}
function vr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Fi(e, t);
  }
}
function eo(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var u = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (l = i = u) : (i = i.next = u), (t = t.next);
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function jr(e, n, t, r) {
  var l = e.updateQueue;
  Ge = !1;
  var i = l.firstBaseUpdate,
    u = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var s = o,
      d = s.next;
    (s.next = null), u === null ? (i = d) : (u.next = d), (u = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (o = v.lastBaseUpdate),
      o !== u &&
        (o === null ? (v.firstBaseUpdate = d) : (o.next = d),
        (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (u = 0), (v = d = s = null), (o = i);
    do {
      var p = o.lane,
        g = o.eventTime;
      if ((r & p) === p) {
        v !== null &&
          (v = v.next =
            {
              eventTime: g,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var w = e,
            k = o;
          switch (((p = n), (g = t), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (p = typeof w == "function" ? w.call(g, m, p) : w),
                p == null)
              )
                break e;
              m = A({}, m, p);
              break e;
            case 2:
              Ge = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [o]) : p.push(o));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          v === null ? ((d = v = g), (s = m)) : (v = v.next = g),
          (u |= p);
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        (p = o),
          (o = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = v),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (u |= l.lane), (l = l.next);
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    (_n |= u), (e.lanes = u), (e.memoizedState = m);
  }
}
function no(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var Yt = {},
  Fe = dn(Yt),
  Ut = dn(Yt),
  At = dn(Yt);
function kn(e) {
  if (e === Yt) throw Error(y(174));
  return e;
}
function Ji(e, n) {
  switch ((D(At, n), D(Ut, e), D(Fe, Yt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : Ql(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = Ql(n, e));
  }
  O(Fe), D(Fe, n);
}
function bn() {
  O(Fe), O(Ut), O(At);
}
function Os(e) {
  kn(At.current);
  var n = kn(Fe.current),
    t = Ql(n, e.type);
  n !== t && (D(Ut, e), D(Fe, t));
}
function qi(e) {
  Ut.current === e && (O(Fe), O(Ut));
}
var j = dn(0);
function Ur(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var zl = [];
function bi() {
  for (var e = 0; e < zl.length; e++)
    zl[e]._workInProgressVersionPrimary = null;
  zl.length = 0;
}
var hr = Ke.ReactCurrentDispatcher,
  Pl = Ke.ReactCurrentBatchConfig,
  Nn = 0,
  U = null,
  $ = null,
  X = null,
  Ar = !1,
  Ct = !1,
  Vt = 0,
  uf = 0;
function b() {
  throw Error(y(321));
}
function eu(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Le(e[t], n[t])) return !1;
  return !0;
}
function nu(e, n, t, r, l, i) {
  if (
    ((Nn = i),
    (U = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (hr.current = e === null || e.memoizedState === null ? cf : ff),
    (e = t(r, l)),
    Ct)
  ) {
    i = 0;
    do {
      if (((Ct = !1), (Vt = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (X = $ = null),
        (n.updateQueue = null),
        (hr.current = df),
        (e = t(r, l));
    } while (Ct);
  }
  if (
    ((hr.current = Vr),
    (n = $ !== null && $.next !== null),
    (Nn = 0),
    (X = $ = U = null),
    (Ar = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function tu() {
  var e = Vt !== 0;
  return (Vt = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return X === null ? (U.memoizedState = X = e) : (X = X.next = e), X;
}
function Ee() {
  if ($ === null) {
    var e = U.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = $.next;
  var n = X === null ? U.memoizedState : X.next;
  if (n !== null) (X = n), ($ = e);
  else {
    if (e === null) throw Error(y(310));
    ($ = e),
      (e = {
        memoizedState: $.memoizedState,
        baseState: $.baseState,
        baseQueue: $.baseQueue,
        queue: $.queue,
        next: null,
      }),
      X === null ? (U.memoizedState = X = e) : (X = X.next = e);
  }
  return X;
}
function Ht(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Tl(e) {
  var n = Ee(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = $,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var u = l.next;
      (l.next = i.next), (i.next = u);
    }
    (r.baseQueue = l = i), (t.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var o = (u = null),
      s = null,
      d = i;
    do {
      var v = d.lane;
      if ((Nn & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var m = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        s === null ? ((o = s = m), (u = r)) : (s = s.next = m),
          (U.lanes |= v),
          (_n |= v);
      }
      d = d.next;
    } while (d !== null && d !== i);
    s === null ? (u = r) : (s.next = o),
      Le(r, n.memoizedState) || (oe = !0),
      (n.memoizedState = r),
      (n.baseState = u),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (U.lanes |= i), (_n |= i), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Ll(e) {
  var n = Ee(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var u = (l = l.next);
    do (i = e(i, u.action)), (u = u.next);
    while (u !== l);
    Le(i, n.memoizedState) || (oe = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function Fs() {}
function Is(e, n) {
  var t = U,
    r = Ee(),
    l = n(),
    i = !Le(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (oe = !0)),
    (r = r.queue),
    ru(As.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || i || (X !== null && X.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Bt(9, Us.bind(null, t, r, l, n), void 0, null),
      G === null)
    )
      throw Error(y(349));
    Nn & 30 || js(t, n, l);
  }
  return l;
}
function js(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = U.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (U.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function Us(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), Vs(n) && Hs(e);
}
function As(e, n, t) {
  return t(function () {
    Vs(n) && Hs(e);
  });
}
function Vs(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Le(e, t);
  } catch {
    return !0;
  }
}
function Hs(e) {
  var n = Qe(e, 1);
  n !== null && Te(n, e, 1, -1);
}
function to(e) {
  var n = De();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ht,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = af.bind(null, U, e)),
    [n.memoizedState, e]
  );
}
function Bt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = U.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (U.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function Bs() {
  return Ee().memoizedState;
}
function yr(e, n, t, r) {
  var l = De();
  (U.flags |= e),
    (l.memoizedState = Bt(1 | n, t, void 0, r === void 0 ? null : r));
}
function qr(e, n, t, r) {
  var l = Ee();
  r = r === void 0 ? null : r;
  var i = void 0;
  if ($ !== null) {
    var u = $.memoizedState;
    if (((i = u.destroy), r !== null && eu(r, u.deps))) {
      l.memoizedState = Bt(n, t, i, r);
      return;
    }
  }
  (U.flags |= e), (l.memoizedState = Bt(1 | n, t, i, r));
}
function ro(e, n) {
  return yr(8390656, 8, e, n);
}
function ru(e, n) {
  return qr(2048, 8, e, n);
}
function Ws(e, n) {
  return qr(4, 2, e, n);
}
function Qs(e, n) {
  return qr(4, 4, e, n);
}
function $s(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function Ks(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), qr(4, 4, $s.bind(null, n, e), t)
  );
}
function lu() {}
function Ys(e, n) {
  var t = Ee();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && eu(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Xs(e, n) {
  var t = Ee();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && eu(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Gs(e, n, t) {
  return Nn & 21
    ? (Le(t, n) || ((t = es()), (U.lanes |= t), (_n |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (oe = !0)), (e.memoizedState = t));
}
function of(e, n) {
  var t = M;
  (M = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Pl.transition;
  Pl.transition = {};
  try {
    e(!1), n();
  } finally {
    (M = t), (Pl.transition = r);
  }
}
function Zs() {
  return Ee().memoizedState;
}
function sf(e, n, t) {
  var r = on(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Js(e))
  )
    qs(n, t);
  else if (((t = Ds(e, n, t, r)), t !== null)) {
    var l = le();
    Te(t, e, r, l), bs(t, n, r);
  }
}
function af(e, n, t) {
  var r = on(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Js(e)) qs(n, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var u = n.lastRenderedState,
          o = i(u, t);
        if (((l.hasEagerState = !0), (l.eagerState = o), Le(o, u))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), Gi(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = Ds(e, n, l, r)),
      t !== null && ((l = le()), Te(t, e, r, l), bs(t, n, r));
  }
}
function Js(e) {
  var n = e.alternate;
  return e === U || (n !== null && n === U);
}
function qs(e, n) {
  Ct = Ar = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function bs(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Fi(e, t);
  }
}
var Vr = {
    readContext: Se,
    useCallback: b,
    useContext: b,
    useEffect: b,
    useImperativeHandle: b,
    useInsertionEffect: b,
    useLayoutEffect: b,
    useMemo: b,
    useReducer: b,
    useRef: b,
    useState: b,
    useDebugValue: b,
    useDeferredValue: b,
    useTransition: b,
    useMutableSource: b,
    useSyncExternalStore: b,
    useId: b,
    unstable_isNewReconciler: !1,
  },
  cf = {
    readContext: Se,
    useCallback: function (e, n) {
      return (De().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Se,
    useEffect: ro,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        yr(4194308, 4, $s.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return yr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return yr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = De();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = De();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = sf.bind(null, U, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = De();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: to,
    useDebugValue: lu,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = to(!1),
        n = e[0];
      return (e = of.bind(null, e[1])), (De().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = U,
        l = De();
      if (I) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), G === null)) throw Error(y(349));
        Nn & 30 || js(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (
        (l.queue = i),
        ro(As.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Bt(9, Us.bind(null, r, i, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = De(),
        n = G.identifierPrefix;
      if (I) {
        var t = Ve,
          r = Ae;
        (t = (r & ~(1 << (32 - Pe(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Vt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = uf++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  ff = {
    readContext: Se,
    useCallback: Ys,
    useContext: Se,
    useEffect: ru,
    useImperativeHandle: Ks,
    useInsertionEffect: Ws,
    useLayoutEffect: Qs,
    useMemo: Xs,
    useReducer: Tl,
    useRef: Bs,
    useState: function () {
      return Tl(Ht);
    },
    useDebugValue: lu,
    useDeferredValue: function (e) {
      var n = Ee();
      return Gs(n, $.memoizedState, e);
    },
    useTransition: function () {
      var e = Tl(Ht)[0],
        n = Ee().memoizedState;
      return [e, n];
    },
    useMutableSource: Fs,
    useSyncExternalStore: Is,
    useId: Zs,
    unstable_isNewReconciler: !1,
  },
  df = {
    readContext: Se,
    useCallback: Ys,
    useContext: Se,
    useEffect: ru,
    useImperativeHandle: Ks,
    useInsertionEffect: Ws,
    useLayoutEffect: Qs,
    useMemo: Xs,
    useReducer: Ll,
    useRef: Bs,
    useState: function () {
      return Ll(Ht);
    },
    useDebugValue: lu,
    useDeferredValue: function (e) {
      var n = Ee();
      return $ === null ? (n.memoizedState = e) : Gs(n, $.memoizedState, e);
    },
    useTransition: function () {
      var e = Ll(Ht)[0],
        n = Ee().memoizedState;
      return [e, n];
    },
    useMutableSource: Fs,
    useSyncExternalStore: Is,
    useId: Zs,
    unstable_isNewReconciler: !1,
  };
function Ne(e, n) {
  if (e && e.defaultProps) {
    (n = A({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function fi(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : A({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var br = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = le(),
      l = on(e),
      i = He(r, l);
    (i.payload = n),
      t != null && (i.callback = t),
      (n = ln(e, i, l)),
      n !== null && (Te(n, e, l, r), vr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = le(),
      l = on(e),
      i = He(r, l);
    (i.tag = 1),
      (i.payload = n),
      t != null && (i.callback = t),
      (n = ln(e, i, l)),
      n !== null && (Te(n, e, l, r), vr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = le(),
      r = on(e),
      l = He(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = ln(e, l, r)),
      n !== null && (Te(n, e, r, t), vr(n, e, r));
  },
};
function lo(e, n, t, r, l, i, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, u)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Ot(t, r) || !Ot(l, i)
      : !0
  );
}
function ea(e, n, t) {
  var r = !1,
    l = cn,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Se(i))
      : ((l = ae(n) ? Cn : te.current),
        (r = n.contextTypes),
        (i = (r = r != null) ? Zn(e, l) : cn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = br),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function io(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && br.enqueueReplaceState(n, n.state, null);
}
function di(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = {}), Zi(e);
  var i = n.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Se(i))
    : ((i = ae(n) ? Cn : te.current), (l.context = Zn(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && (fi(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && br.enqueueReplaceState(l, l.state, null),
      jr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function et(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Aa(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Ml(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function pi(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var pf = typeof WeakMap == "function" ? WeakMap : Map;
function na(e, n, t) {
  (t = He(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Br || ((Br = !0), (Ci = r)), pi(e, n);
    }),
    t
  );
}
function ta(e, n, t) {
  (t = He(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        pi(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        pi(e, n),
          typeof r != "function" &&
            (un === null ? (un = new Set([this])) : un.add(this));
        var u = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    t
  );
}
function uo(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pf();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = zf.bind(null, e, n, t)), n.then(e, e));
}
function oo(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function so(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = He(-1, 1)), (n.tag = 2), ln(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var mf = Ke.ReactCurrentOwner,
  oe = !1;
function re(e, n, t, r) {
  n.child = e === null ? Ms(n, null, t, r) : qn(n, e.child, t, r);
}
function ao(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return (
    Yn(n, l),
    (r = nu(e, n, t, r, i, l)),
    (t = tu()),
    e !== null && !oe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        $e(e, n, l))
      : (I && t && Wi(n), (n.flags |= 1), re(e, n, r, l), n.child)
  );
}
function co(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == "function" &&
      !du(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), ra(e, n, i, r, l))
      : ((e = Sr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var u = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Ot), t(u, r) && e.ref === n.ref)
    )
      return $e(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = sn(i, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function ra(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ot(i, r) && e.ref === n.ref)
      if (((oe = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (oe = !0);
      else return (n.lanes = e.lanes), $e(e, n, l);
  }
  return mi(e, n, t, r, l);
}
function la(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Bn, fe),
        (fe |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          D(Bn, fe),
          (fe |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        D(Bn, fe),
        (fe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t),
      D(Bn, fe),
      (fe |= r);
  return re(e, n, l, t), n.child;
}
function ia(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function mi(e, n, t, r, l) {
  var i = ae(t) ? Cn : te.current;
  return (
    (i = Zn(n, i)),
    Yn(n, l),
    (t = nu(e, n, t, r, i, l)),
    (r = tu()),
    e !== null && !oe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        $e(e, n, l))
      : (I && r && Wi(n), (n.flags |= 1), re(e, n, t, l), n.child)
  );
}
function fo(e, n, t, r, l) {
  if (ae(t)) {
    var i = !0;
    Dr(n);
  } else i = !1;
  if ((Yn(n, l), n.stateNode === null))
    gr(e, n), ea(n, t, r), di(n, t, r, l), (r = !0);
  else if (e === null) {
    var u = n.stateNode,
      o = n.memoizedProps;
    u.props = o;
    var s = u.context,
      d = t.contextType;
    typeof d == "object" && d !== null
      ? (d = Se(d))
      : ((d = ae(t) ? Cn : te.current), (d = Zn(n, d)));
    var v = t.getDerivedStateFromProps,
      m =
        typeof v == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((o !== r || s !== d) && io(n, u, r, d)),
      (Ge = !1);
    var p = n.memoizedState;
    (u.state = p),
      jr(n, r, u, l),
      (s = n.memoizedState),
      o !== r || p !== s || se.current || Ge
        ? (typeof v == "function" && (fi(n, t, v, r), (s = n.memoizedState)),
          (o = Ge || lo(n, t, o, r, p, s, d))
            ? (m ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (u.props = r),
          (u.state = s),
          (u.context = d),
          (r = o))
        : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (u = n.stateNode),
      Rs(e, n),
      (o = n.memoizedProps),
      (d = n.type === n.elementType ? o : Ne(n.type, o)),
      (u.props = d),
      (m = n.pendingProps),
      (p = u.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = Se(s))
        : ((s = ae(t) ? Cn : te.current), (s = Zn(n, s)));
    var g = t.getDerivedStateFromProps;
    (v =
      typeof g == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((o !== m || p !== s) && io(n, u, r, s)),
      (Ge = !1),
      (p = n.memoizedState),
      (u.state = p),
      jr(n, r, u, l);
    var w = n.memoizedState;
    o !== m || p !== w || se.current || Ge
      ? (typeof g == "function" && (fi(n, t, g, r), (w = n.memoizedState)),
        (d = Ge || lo(n, t, d, r, p, w, s) || !1)
          ? (v ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, w, s),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, w, s)),
            typeof u.componentDidUpdate == "function" && (n.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = w)),
        (u.props = r),
        (u.state = w),
        (u.context = s),
        (r = d))
      : (typeof u.componentDidUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return vi(e, n, t, r, i, l);
}
function vi(e, n, t, r, l, i) {
  ia(e, n);
  var u = (n.flags & 128) !== 0;
  if (!r && !u) return l && Zu(n, t, !1), $e(e, n, i);
  (r = n.stateNode), (mf.current = n);
  var o =
    u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && u
      ? ((n.child = qn(n, e.child, null, i)), (n.child = qn(n, null, o, i)))
      : re(e, n, o, i),
    (n.memoizedState = r.state),
    l && Zu(n, t, !0),
    n.child
  );
}
function ua(e) {
  var n = e.stateNode;
  n.pendingContext
    ? Gu(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && Gu(e, n.context, !1),
    Ji(e, n.containerInfo);
}
function po(e, n, t, r, l) {
  return Jn(), $i(l), (n.flags |= 256), re(e, n, t, r), n.child;
}
var hi = { dehydrated: null, treeContext: null, retryLane: 0 };
function yi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function oa(e, n, t) {
  var r = n.pendingProps,
    l = j.current,
    i = !1,
    u = (n.flags & 128) !== 0,
    o;
  if (
    ((o = u) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(j, l & 1),
    e === null)
  )
    return (
      ai(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (u = { mode: "hidden", children: u }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = u))
                : (i = tl(u, r, 0, null)),
              (e = En(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = yi(t)),
              (n.memoizedState = hi),
              e)
            : iu(n, u))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return vf(e, n, u, r, o, l, t);
  if (i) {
    (i = r.fallback), (u = n.mode), (l = e.child), (o = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(u & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = sn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (i = sn(o, i)) : ((i = En(i, u, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? yi(t)
          : {
              baseLanes: u.baseLanes | t,
              cachePool: null,
              transitions: u.transitions,
            }),
      (i.memoizedState = u),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = hi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = sn(i, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function iu(e, n) {
  return (
    (n = tl({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function sr(e, n, t, r) {
  return (
    r !== null && $i(r),
    qn(n, e.child, null, t),
    (e = iu(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function vf(e, n, t, r, l, i, u) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Ml(Error(y(422)))), sr(e, n, u, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((i = r.fallback),
        (l = n.mode),
        (r = tl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = En(i, l, u, null)),
        (i.flags |= 2),
        (r.return = n),
        (i.return = n),
        (r.sibling = i),
        (n.child = r),
        n.mode & 1 && qn(n, e.child, null, u),
        (n.child.memoizedState = yi(u)),
        (n.memoizedState = hi),
        i);
  if (!(n.mode & 1)) return sr(e, n, u, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (i = Error(y(419))), (r = Ml(i, r, void 0)), sr(e, n, u, r);
  }
  if (((o = (u & e.childLanes) !== 0), oe || o)) {
    if (((r = G), r !== null)) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | u) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Qe(e, l), Te(r, e, l, -1));
    }
    return fu(), (r = Ml(Error(y(421)))), sr(e, n, u, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Pf.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (de = rn(l.nextSibling)),
      (pe = n),
      (I = !0),
      (ze = null),
      e !== null &&
        ((ye[ge++] = Ae),
        (ye[ge++] = Ve),
        (ye[ge++] = xn),
        (Ae = e.id),
        (Ve = e.overflow),
        (xn = n)),
      (n = iu(n, r.children)),
      (n.flags |= 4096),
      n);
}
function mo(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), ci(e.return, n, t);
}
function Dl(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = l));
}
function sa(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((re(e, n, r.children, t), (r = j.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mo(e, t, n);
        else if (e.tag === 19) mo(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(j, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && Ur(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Dl(n, !1, l, t, i);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ur(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Dl(n, !0, t, null, i);
        break;
      case "together":
        Dl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function gr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function $e(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (_n |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = sn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = sn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function hf(e, n, t) {
  switch (n.tag) {
    case 3:
      ua(n), Jn();
      break;
    case 5:
      Os(n);
      break;
    case 1:
      ae(n.type) && Dr(n);
      break;
    case 4:
      Ji(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      D(Fr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(j, j.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? oa(e, n, t)
          : (D(j, j.current & 1),
            (e = $e(e, n, t)),
            e !== null ? e.sibling : null);
      D(j, j.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return sa(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(j, j.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), la(e, n, t);
  }
  return $e(e, n, t);
}
var aa, gi, ca, fa;
aa = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
gi = function () {};
ca = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), kn(Fe.current);
    var i = null;
    switch (t) {
      case "input":
        (l = Vl(e, l)), (r = Vl(e, r)), (i = []);
        break;
      case "select":
        (l = A({}, l, { value: void 0 })),
          (r = A({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Wl(e, l)), (r = Wl(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Lr);
    }
    $l(t, r);
    var u;
    t = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var o = l[d];
          for (u in o) o.hasOwnProperty(u) && (t || (t = {}), (t[u] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (zt.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (
        ((o = l?.[d]),
        r.hasOwnProperty(d) && s !== o && (s != null || o != null))
      )
        if (d === "style")
          if (o) {
            for (u in o)
              !o.hasOwnProperty(u) ||
                (s && s.hasOwnProperty(u)) ||
                (t || (t = {}), (t[u] = ""));
            for (u in s)
              s.hasOwnProperty(u) &&
                o[u] !== s[u] &&
                (t || (t = {}), (t[u] = s[u]));
          } else t || (i || (i = []), i.push(d, t)), (t = s);
        else
          d === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (o = o ? o.__html : void 0),
              s != null && o !== s && (i = i || []).push(d, s))
            : d === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(d, "" + s)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (zt.hasOwnProperty(d)
                ? (s != null && d === "onScroll" && R("scroll", e),
                  i || o === s || (i = []))
                : (i = i || []).push(d, s));
    }
    t && (i = i || []).push("style", t);
    var d = i;
    (n.updateQueue = d) && (n.flags |= 4);
  }
};
fa = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function dt(e, n) {
  if (!I)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ee(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function yf(e, n, t) {
  var r = n.pendingProps;
  switch ((Qi(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ee(n), null;
    case 1:
      return ae(n.type) && Mr(), ee(n), null;
    case 3:
      return (
        (r = n.stateNode),
        bn(),
        O(se),
        O(te),
        bi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ur(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), ze !== null && (_i(ze), (ze = null)))),
        gi(e, n),
        ee(n),
        null
      );
    case 5:
      qi(n);
      var l = kn(At.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        ca(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return ee(n), null;
        }
        if (((e = kn(Fe.current)), ur(n))) {
          (r = n.stateNode), (t = n.type);
          var i = n.memoizedProps;
          switch (((r[Re] = n), (r[jt] = i), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              R("cancel", r), R("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              R("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < yt.length; l++) R(yt[l], r);
              break;
            case "source":
              R("error", r);
              break;
            case "img":
            case "image":
            case "link":
              R("error", r), R("load", r);
              break;
            case "details":
              R("toggle", r);
              break;
            case "input":
              Eu(r, i), R("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                R("invalid", r);
              break;
            case "textarea":
              xu(r, i), R("invalid", r);
          }
          $l(t, i), (l = null);
          for (var u in i)
            if (i.hasOwnProperty(u)) {
              var o = i[u];
              u === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      ir(r.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      ir(r.textContent, o, e),
                    (l = ["children", "" + o]))
                : zt.hasOwnProperty(u) &&
                  o != null &&
                  u === "onScroll" &&
                  R("scroll", r);
            }
          switch (t) {
            case "input":
              Jt(r), Cu(r, i, !0);
              break;
            case "textarea":
              Jt(r), Nu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Lr);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (u = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ao(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = u.createElement(t, { is: r.is }))
                : ((e = u.createElement(t)),
                  t === "select" &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, t)),
            (e[Re] = n),
            (e[jt] = r),
            aa(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((u = Kl(t, r)), t)) {
              case "dialog":
                R("cancel", e), R("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                R("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < yt.length; l++) R(yt[l], e);
                l = r;
                break;
              case "source":
                R("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                R("error", e), R("load", e), (l = r);
                break;
              case "details":
                R("toggle", e), (l = r);
                break;
              case "input":
                Eu(e, r), (l = Vl(e, r)), R("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = A({}, r, { value: void 0 })),
                  R("invalid", e);
                break;
              case "textarea":
                xu(e, r), (l = Wl(e, r)), R("invalid", e);
                break;
              default:
                l = r;
            }
            $l(t, l), (o = l);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var s = o[i];
                i === "style"
                  ? Bo(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Vo(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && Pt(e, s)
                    : typeof s == "number" && Pt(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (zt.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && R("scroll", e)
                      : s != null && Ti(e, i, s, u));
              }
            switch (t) {
              case "input":
                Jt(e), Cu(e, r, !1);
                break;
              case "textarea":
                Jt(e), Nu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + an(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Wn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Lr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return ee(n), null;
    case 6:
      if (e && n.stateNode != null) fa(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (((t = kn(At.current)), kn(Fe.current), ur(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Re] = n),
            (i = r.nodeValue !== t) && ((e = pe), e !== null))
          )
            switch (e.tag) {
              case 3:
                ir(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ir(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Re] = n),
            (n.stateNode = r);
      }
      return ee(n), null;
    case 13:
      if (
        (O(j),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (I && de !== null && n.mode & 1 && !(n.flags & 128))
          Ts(), Jn(), (n.flags |= 98560), (i = !1);
        else if (((i = ur(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Re] = n;
          } else
            Jn(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          ee(n), (i = !1);
        } else ze !== null && (_i(ze), (ze = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || j.current & 1 ? K === 0 && (K = 3) : fu())),
          n.updateQueue !== null && (n.flags |= 4),
          ee(n),
          null);
    case 4:
      return (
        bn(), gi(e, n), e === null && Ft(n.stateNode.containerInfo), ee(n), null
      );
    case 10:
      return Xi(n.type._context), ee(n), null;
    case 17:
      return ae(n.type) && Mr(), ee(n), null;
    case 19:
      if ((O(j), (i = n.memoizedState), i === null)) return ee(n), null;
      if (((r = (n.flags & 128) !== 0), (u = i.rendering), u === null))
        if (r) dt(i, !1);
        else {
          if (K !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((u = Ur(e)), u !== null)) {
                for (
                  n.flags |= 128,
                    dt(i, !1),
                    r = u.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (u = i.alternate),
                    u === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = u.childLanes),
                        (i.lanes = u.lanes),
                        (i.child = u.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = u.memoizedProps),
                        (i.memoizedState = u.memoizedState),
                        (i.updateQueue = u.updateQueue),
                        (i.type = u.type),
                        (e = u.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return D(j, (j.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            W() > nt &&
            ((n.flags |= 128), (r = !0), dt(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ur(u)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              dt(i, !0),
              i.tail === null && i.tailMode === "hidden" && !u.alternate && !I)
            )
              return ee(n), null;
          } else
            2 * W() - i.renderingStartTime > nt &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), dt(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((u.sibling = n.child), (n.child = u))
          : ((t = i.last),
            t !== null ? (t.sibling = u) : (n.child = u),
            (i.last = u));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = W()),
          (n.sibling = null),
          (t = j.current),
          D(j, r ? (t & 1) | 2 : t & 1),
          n)
        : (ee(n), null);
    case 22:
    case 23:
      return (
        cu(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? fe & 1073741824 && (ee(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : ee(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function gf(e, n) {
  switch ((Qi(n), n.tag)) {
    case 1:
      return (
        ae(n.type) && Mr(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        bn(),
        O(se),
        O(te),
        bi(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return qi(n), null;
    case 13:
      if ((O(j), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        Jn();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return O(j), null;
    case 4:
      return bn(), null;
    case 10:
      return Xi(n.type._context), null;
    case 22:
    case 23:
      return cu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ar = !1,
  ne = !1,
  wf = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Hn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        V(e, n, r);
      }
    else t.current = null;
}
function wi(e, n, t) {
  try {
    t();
  } catch (r) {
    V(e, n, r);
  }
}
var vo = !1;
function kf(e, n) {
  if (((ti = zr), (e = hs()), Bi(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var u = 0,
            o = -1,
            s = -1,
            d = 0,
            v = 0,
            m = e,
            p = null;
          n: for (;;) {
            for (
              var g;
              m !== t || (l !== 0 && m.nodeType !== 3) || (o = u + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = u + r),
                m.nodeType === 3 && (u += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (p = m), (m = g);
            for (;;) {
              if (m === e) break n;
              if (
                (p === t && ++d === l && (o = u),
                p === i && ++v === r && (s = u),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = g;
          }
          t = o === -1 || s === -1 ? null : { start: o, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (ri = { focusedElem: e, selectionRange: t }, zr = !1, S = n; S !== null; )
    if (((n = S), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (S = e);
    else
      for (; S !== null; ) {
        n = S;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    F = w.memoizedState,
                    c = n.stateNode,
                    a = c.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? k : Ne(n.type, k),
                      F
                    );
                  c.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var f = n.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (h) {
          V(n, n.return, h);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (S = e);
          break;
        }
        S = n.return;
      }
  return (w = vo), (vo = !1), w;
}
function xt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && wi(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function el(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function ki(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function da(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), da(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Re], delete n[jt], delete n[ui], delete n[nf], delete n[tf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function pa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ho(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || pa(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Si(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Lr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Si(e, n, t), e = e.sibling; e !== null; ) Si(e, n, t), (e = e.sibling);
}
function Ei(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ei(e, n, t), e = e.sibling; e !== null; ) Ei(e, n, t), (e = e.sibling);
}
var Z = null,
  _e = !1;
function Ye(e, n, t) {
  for (t = t.child; t !== null; ) ma(e, n, t), (t = t.sibling);
}
function ma(e, n, t) {
  if (Oe && typeof Oe.onCommitFiberUnmount == "function")
    try {
      Oe.onCommitFiberUnmount(Kr, t);
    } catch {}
  switch (t.tag) {
    case 5:
      ne || Hn(t, n);
    case 6:
      var r = Z,
        l = _e;
      (Z = null),
        Ye(e, n, t),
        (Z = r),
        (_e = l),
        Z !== null &&
          (_e
            ? ((e = Z),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : Z.removeChild(t.stateNode));
      break;
    case 18:
      Z !== null &&
        (_e
          ? ((e = Z),
            (t = t.stateNode),
            e.nodeType === 8
              ? Nl(e.parentNode, t)
              : e.nodeType === 1 && Nl(e, t),
            Dt(e))
          : Nl(Z, t.stateNode));
      break;
    case 4:
      (r = Z),
        (l = _e),
        (Z = t.stateNode.containerInfo),
        (_e = !0),
        Ye(e, n, t),
        (Z = r),
        (_e = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ne &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            u = i.destroy;
          (i = i.tag),
            u !== void 0 && (i & 2 || i & 4) && wi(t, n, u),
            (l = l.next);
        } while (l !== r);
      }
      Ye(e, n, t);
      break;
    case 1:
      if (
        !ne &&
        (Hn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          V(t, n, o);
        }
      Ye(e, n, t);
      break;
    case 21:
      Ye(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((ne = (r = ne) || t.memoizedState !== null), Ye(e, n, t), (ne = r))
        : Ye(e, n, t);
      break;
    default:
      Ye(e, n, t);
  }
}
function yo(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new wf()),
      n.forEach(function (r) {
        var l = Tf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function xe(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          u = n,
          o = u;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (Z = o.stateNode), (_e = !1);
              break e;
            case 3:
              (Z = o.stateNode.containerInfo), (_e = !0);
              break e;
            case 4:
              (Z = o.stateNode.containerInfo), (_e = !0);
              break e;
          }
          o = o.return;
        }
        if (Z === null) throw Error(y(160));
        ma(i, u, l), (Z = null), (_e = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (d) {
        V(l, n, d);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) va(n, e), (n = n.sibling);
}
function va(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((xe(n, e), Me(e), r & 4)) {
        try {
          xt(3, e, e.return), el(3, e);
        } catch (k) {
          V(e, e.return, k);
        }
        try {
          xt(5, e, e.return);
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 1:
      xe(n, e), Me(e), r & 512 && t !== null && Hn(t, t.return);
      break;
    case 5:
      if (
        (xe(n, e),
        Me(e),
        r & 512 && t !== null && Hn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Pt(l, "");
        } catch (k) {
          V(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          u = t !== null ? t.memoizedProps : i,
          o = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && jo(l, i),
              Kl(o, u);
            var d = Kl(o, i);
            for (u = 0; u < s.length; u += 2) {
              var v = s[u],
                m = s[u + 1];
              v === "style"
                ? Bo(l, m)
                : v === "dangerouslySetInnerHTML"
                ? Vo(l, m)
                : v === "children"
                ? Pt(l, m)
                : Ti(l, v, m, d);
            }
            switch (o) {
              case "input":
                Hl(l, i);
                break;
              case "textarea":
                Uo(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Wn(l, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wn(l, !!i.multiple, i.defaultValue, !0)
                      : Wn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[jt] = i;
          } catch (k) {
            V(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((xe(n, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (xe(n, e), Me(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Dt(n.containerInfo);
        } catch (k) {
          V(e, e.return, k);
        }
      break;
    case 4:
      xe(n, e), Me(e);
      break;
    case 13:
      xe(n, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (su = W())),
        r & 4 && yo(e);
      break;
    case 22:
      if (
        ((v = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((ne = (d = ne) || v), xe(n, e), (ne = d)) : xe(n, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !v && e.mode & 1)
        )
          for (S = e, v = e.child; v !== null; ) {
            for (m = S = v; S !== null; ) {
              switch (((p = S), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xt(4, p, p.return);
                  break;
                case 1:
                  Hn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (w.props = n.memoizedProps),
                        (w.state = n.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      V(r, t, k);
                    }
                  }
                  break;
                case 5:
                  Hn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    wo(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (S = g)) : wo(m);
            }
            v = v.sibling;
          }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                (l = m.stateNode),
                  d
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = m.stateNode),
                      (s = m.memoizedProps.style),
                      (u =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (o.style.display = Ho("display", u)));
              } catch (k) {
                V(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (v === null)
              try {
                m.stateNode.nodeValue = d ? "" : m.memoizedProps;
              } catch (k) {
                V(e, e.return, k);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), (m = m.return);
          }
          v === m && (v = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      xe(n, e), Me(e), r & 4 && yo(e);
      break;
    case 21:
      break;
    default:
      xe(n, e), Me(e);
  }
}
function Me(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (pa(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Pt(l, ""), (r.flags &= -33));
          var i = ho(e);
          Ei(e, i, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            o = ho(e);
          Si(e, o, u);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Sf(e, n, t) {
  (S = e), ha(e);
}
function ha(e, n, t) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || ar;
      if (!u) {
        var o = l.alternate,
          s = (o !== null && o.memoizedState !== null) || ne;
        o = ar;
        var d = ne;
        if (((ar = u), (ne = s) && !d))
          for (S = l; S !== null; )
            (u = S),
              (s = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? ko(l)
                : s !== null
                ? ((s.return = u), (S = s))
                : ko(l);
        for (; i !== null; ) (S = i), ha(i), (i = i.sibling);
        (S = l), (ar = o), (ne = d);
      }
      go(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : go(e);
  }
}
function go(e) {
  for (; S !== null; ) {
    var n = S;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              ne || el(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !ne)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Ne(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = n.updateQueue;
              i !== null && no(n, i, r);
              break;
            case 3:
              var u = n.updateQueue;
              if (u !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                no(n, u, t);
              }
              break;
            case 5:
              var o = n.stateNode;
              if (t === null && n.flags & 4) {
                t = o;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var d = n.alternate;
                if (d !== null) {
                  var v = d.memoizedState;
                  if (v !== null) {
                    var m = v.dehydrated;
                    m !== null && Dt(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        ne || (n.flags & 512 && ki(n));
      } catch (p) {
        V(n, n.return, p);
      }
    }
    if (n === e) {
      S = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (S = t);
      break;
    }
    S = n.return;
  }
}
function wo(e) {
  for (; S !== null; ) {
    var n = S;
    if (n === e) {
      S = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (S = t);
      break;
    }
    S = n.return;
  }
}
function ko(e) {
  for (; S !== null; ) {
    var n = S;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            el(4, n);
          } catch (s) {
            V(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(n, l, s);
            }
          }
          var i = n.return;
          try {
            ki(n);
          } catch (s) {
            V(n, i, s);
          }
          break;
        case 5:
          var u = n.return;
          try {
            ki(n);
          } catch (s) {
            V(n, u, s);
          }
      }
    } catch (s) {
      V(n, n.return, s);
    }
    if (n === e) {
      S = null;
      break;
    }
    var o = n.sibling;
    if (o !== null) {
      (o.return = n.return), (S = o);
      break;
    }
    S = n.return;
  }
}
var Ef = Math.ceil,
  Hr = Ke.ReactCurrentDispatcher,
  uu = Ke.ReactCurrentOwner,
  ke = Ke.ReactCurrentBatchConfig,
  L = 0,
  G = null,
  Q = null,
  J = 0,
  fe = 0,
  Bn = dn(0),
  K = 0,
  Wt = null,
  _n = 0,
  nl = 0,
  ou = 0,
  Nt = null,
  ue = null,
  su = 0,
  nt = 1 / 0,
  Ie = null,
  Br = !1,
  Ci = null,
  un = null,
  cr = !1,
  be = null,
  Wr = 0,
  _t = 0,
  xi = null,
  wr = -1,
  kr = 0;
function le() {
  return L & 6 ? W() : wr !== -1 ? wr : (wr = W());
}
function on(e) {
  return e.mode & 1
    ? L & 2 && J !== 0
      ? J & -J
      : lf.transition !== null
      ? (kr === 0 && (kr = es()), kr)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : os(e.type))),
        e)
    : 1;
}
function Te(e, n, t, r) {
  if (50 < _t) throw ((_t = 0), (xi = null), Error(y(185)));
  Qt(e, t, r),
    (!(L & 2) || e !== G) &&
      (e === G && (!(L & 2) && (nl |= t), K === 4 && Je(e, J)),
      ce(e, r),
      t === 1 && L === 0 && !(n.mode & 1) && ((nt = W() + 500), Jr && pn()));
}
function ce(e, n) {
  var t = e.callbackNode;
  lc(e, n);
  var r = _r(e, e === G ? J : 0);
  if (r === 0)
    t !== null && Pu(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Pu(t), n === 1))
      e.tag === 0 ? rf(So.bind(null, e)) : _s(So.bind(null, e)),
        bc(function () {
          !(L & 6) && pn();
        }),
        (t = null);
    else {
      switch (ns(r)) {
        case 1:
          t = Oi;
          break;
        case 4:
          t = qo;
          break;
        case 16:
          t = Nr;
          break;
        case 536870912:
          t = bo;
          break;
        default:
          t = Nr;
      }
      t = xa(t, ya.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function ya(e, n) {
  if (((wr = -1), (kr = 0), L & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (Xn() && e.callbackNode !== t) return null;
  var r = _r(e, e === G ? J : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = Qr(e, r);
  else {
    n = r;
    var l = L;
    L |= 2;
    var i = wa();
    (G !== e || J !== n) && ((Ie = null), (nt = W() + 500), Sn(e, n));
    do
      try {
        Nf();
        break;
      } catch (o) {
        ga(e, o);
      }
    while (!0);
    Yi(),
      (Hr.current = i),
      (L = l),
      Q !== null ? (n = 0) : ((G = null), (J = 0), (n = K));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = Jl(e)), l !== 0 && ((r = l), (n = Ni(e, l)))), n === 1)
    )
      throw ((t = Wt), Sn(e, 0), Je(e, r), ce(e, W()), t);
    if (n === 6) Je(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Cf(l) &&
          ((n = Qr(e, r)),
          n === 2 && ((i = Jl(e)), i !== 0 && ((r = i), (n = Ni(e, i)))),
          n === 1))
      )
        throw ((t = Wt), Sn(e, 0), Je(e, r), ce(e, W()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          yn(e, ue, Ie);
          break;
        case 3:
          if (
            (Je(e, r), (r & 130023424) === r && ((n = su + 500 - W()), 10 < n))
          ) {
            if (_r(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              le(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ii(yn.bind(null, e, ue, Ie), n);
            break;
          }
          yn(e, ue, Ie);
          break;
        case 4:
          if ((Je(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - Pe(r);
            (i = 1 << u), (u = n[u]), u > l && (l = u), (r &= ~i);
          }
          if (
            ((r = l),
            (r = W() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ef(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ii(yn.bind(null, e, ue, Ie), r);
            break;
          }
          yn(e, ue, Ie);
          break;
        case 5:
          yn(e, ue, Ie);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return ce(e, W()), e.callbackNode === t ? ya.bind(null, e) : null;
}
function Ni(e, n) {
  var t = Nt;
  return (
    e.current.memoizedState.isDehydrated && (Sn(e, n).flags |= 256),
    (e = Qr(e, n)),
    e !== 2 && ((n = ue), (ue = t), n !== null && _i(n)),
    e
  );
}
function _i(e) {
  ue === null ? (ue = e) : ue.push.apply(ue, e);
}
function Cf(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Le(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function Je(e, n) {
  for (
    n &= ~ou,
      n &= ~nl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Pe(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function So(e) {
  if (L & 6) throw Error(y(327));
  Xn();
  var n = _r(e, 0);
  if (!(n & 1)) return ce(e, W()), null;
  var t = Qr(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = Jl(e);
    r !== 0 && ((n = r), (t = Ni(e, r)));
  }
  if (t === 1) throw ((t = Wt), Sn(e, 0), Je(e, n), ce(e, W()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    yn(e, ue, Ie),
    ce(e, W()),
    null
  );
}
function au(e, n) {
  var t = L;
  L |= 1;
  try {
    return e(n);
  } finally {
    (L = t), L === 0 && ((nt = W() + 500), Jr && pn());
  }
}
function zn(e) {
  be !== null && be.tag === 0 && !(L & 6) && Xn();
  var n = L;
  L |= 1;
  var t = ke.transition,
    r = M;
  try {
    if (((ke.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (ke.transition = t), (L = n), !(L & 6) && pn();
  }
}
function cu() {
  (fe = Bn.current), O(Bn);
}
function Sn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), qc(t)), Q !== null))
    for (t = Q.return; t !== null; ) {
      var r = t;
      switch ((Qi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Mr();
          break;
        case 3:
          bn(), O(se), O(te), bi();
          break;
        case 5:
          qi(r);
          break;
        case 4:
          bn();
          break;
        case 13:
          O(j);
          break;
        case 19:
          O(j);
          break;
        case 10:
          Xi(r.type._context);
          break;
        case 22:
        case 23:
          cu();
      }
      t = t.return;
    }
  if (
    ((G = e),
    (Q = e = sn(e.current, null)),
    (J = fe = n),
    (K = 0),
    (Wt = null),
    (ou = nl = _n = 0),
    (ue = Nt = null),
    wn !== null)
  ) {
    for (n = 0; n < wn.length; n++)
      if (((t = wn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var u = i.next;
          (i.next = l), (r.next = u);
        }
        t.pending = r;
      }
    wn = null;
  }
  return e;
}
function ga(e, n) {
  do {
    var t = Q;
    try {
      if ((Yi(), (hr.current = Vr), Ar)) {
        for (var r = U.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ar = !1;
      }
      if (
        ((Nn = 0),
        (X = $ = U = null),
        (Ct = !1),
        (Vt = 0),
        (uu.current = null),
        t === null || t.return === null)
      ) {
        (K = 1), (Wt = n), (Q = null);
        break;
      }
      e: {
        var i = e,
          u = t.return,
          o = t,
          s = n;
        if (
          ((n = J),
          (o.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var d = s,
            v = o,
            m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = v.alternate;
            p
              ? ((v.updateQueue = p.updateQueue),
                (v.memoizedState = p.memoizedState),
                (v.lanes = p.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var g = oo(u);
          if (g !== null) {
            (g.flags &= -257),
              so(g, u, o, i, n),
              g.mode & 1 && uo(i, d, n),
              (n = g),
              (s = d);
            var w = n.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(s), (n.updateQueue = k);
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              uo(i, d, n), fu();
              break e;
            }
            s = Error(y(426));
          }
        } else if (I && o.mode & 1) {
          var F = oo(u);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              so(F, u, o, i, n),
              $i(et(s, o));
            break e;
          }
        }
        (i = s = et(s, o)),
          K !== 4 && (K = 2),
          Nt === null ? (Nt = [i]) : Nt.push(i),
          (i = u);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var c = na(i, s, n);
              eo(i, c);
              break e;
            case 1:
              o = s;
              var a = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (un === null || !un.has(f))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var h = ta(i, o, n);
                eo(i, h);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Sa(t);
    } catch (E) {
      (n = E), Q === t && t !== null && (Q = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function wa() {
  var e = Hr.current;
  return (Hr.current = Vr), e === null ? Vr : e;
}
function fu() {
  (K === 0 || K === 3 || K === 2) && (K = 4),
    G === null || (!(_n & 268435455) && !(nl & 268435455)) || Je(G, J);
}
function Qr(e, n) {
  var t = L;
  L |= 2;
  var r = wa();
  (G !== e || J !== n) && ((Ie = null), Sn(e, n));
  do
    try {
      xf();
      break;
    } catch (l) {
      ga(e, l);
    }
  while (!0);
  if ((Yi(), (L = t), (Hr.current = r), Q !== null)) throw Error(y(261));
  return (G = null), (J = 0), K;
}
function xf() {
  for (; Q !== null; ) ka(Q);
}
function Nf() {
  for (; Q !== null && !Ga(); ) ka(Q);
}
function ka(e) {
  var n = Ca(e.alternate, e, fe);
  (e.memoizedProps = e.pendingProps),
    n === null ? Sa(e) : (Q = n),
    (uu.current = null);
}
function Sa(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = gf(t, n)), t !== null)) {
        (t.flags &= 32767), (Q = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (K = 6), (Q = null);
        return;
      }
    } else if (((t = yf(t, n, fe)), t !== null)) {
      Q = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      Q = n;
      return;
    }
    Q = n = e;
  } while (n !== null);
  K === 0 && (K = 5);
}
function yn(e, n, t) {
  var r = M,
    l = ke.transition;
  try {
    (ke.transition = null), (M = 1), _f(e, n, t, r);
  } finally {
    (ke.transition = l), (M = r);
  }
  return null;
}
function _f(e, n, t, r) {
  do Xn();
  while (be !== null);
  if (L & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (ic(e, i),
    e === G && ((Q = G = null), (J = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      cr ||
      ((cr = !0),
      xa(Nr, function () {
        return Xn(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = ke.transition), (ke.transition = null);
    var u = M;
    M = 1;
    var o = L;
    (L |= 4),
      (uu.current = null),
      kf(e, t),
      va(t, e),
      $c(ri),
      (zr = !!ti),
      (ri = ti = null),
      (e.current = t),
      Sf(t),
      Za(),
      (L = o),
      (M = u),
      (ke.transition = i);
  } else e.current = t;
  if (
    (cr && ((cr = !1), (be = e), (Wr = l)),
    (i = e.pendingLanes),
    i === 0 && (un = null),
    ba(t.stateNode),
    ce(e, W()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Br) throw ((Br = !1), (e = Ci), (Ci = null), e);
  return (
    Wr & 1 && e.tag !== 0 && Xn(),
    (i = e.pendingLanes),
    i & 1 ? (e === xi ? _t++ : ((_t = 0), (xi = e))) : (_t = 0),
    pn(),
    null
  );
}
function Xn() {
  if (be !== null) {
    var e = ns(Wr),
      n = ke.transition,
      t = M;
    try {
      if (((ke.transition = null), (M = 16 > e ? 16 : e), be === null))
        var r = !1;
      else {
        if (((e = be), (be = null), (Wr = 0), L & 6)) throw Error(y(331));
        var l = L;
        for (L |= 4, S = e.current; S !== null; ) {
          var i = S,
            u = i.child;
          if (S.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var s = 0; s < o.length; s++) {
                var d = o[s];
                for (S = d; S !== null; ) {
                  var v = S;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xt(8, v, i);
                  }
                  var m = v.child;
                  if (m !== null) (m.return = v), (S = m);
                  else
                    for (; S !== null; ) {
                      v = S;
                      var p = v.sibling,
                        g = v.return;
                      if ((da(v), v === d)) {
                        S = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (S = p);
                        break;
                      }
                      S = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var F = k.sibling;
                    (k.sibling = null), (k = F);
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && u !== null) (u.return = i), (S = u);
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xt(9, i, i.return);
                }
              var c = i.sibling;
              if (c !== null) {
                (c.return = i.return), (S = c);
                break e;
              }
              S = i.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          u = S;
          var f = u.child;
          if (u.subtreeFlags & 2064 && f !== null) (f.return = u), (S = f);
          else
            e: for (u = a; S !== null; ) {
              if (((o = S), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      el(9, o);
                  }
                } catch (E) {
                  V(o, o.return, E);
                }
              if (o === u) {
                S = null;
                break e;
              }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (S = h);
                break e;
              }
              S = o.return;
            }
        }
        if (
          ((L = l), pn(), Oe && typeof Oe.onPostCommitFiberRoot == "function")
        )
          try {
            Oe.onPostCommitFiberRoot(Kr, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = t), (ke.transition = n);
    }
  }
  return !1;
}
function Eo(e, n, t) {
  (n = et(t, n)),
    (n = na(e, n, 1)),
    (e = ln(e, n, 1)),
    (n = le()),
    e !== null && (Qt(e, 1, n), ce(e, n));
}
function V(e, n, t) {
  if (e.tag === 3) Eo(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Eo(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (un === null || !un.has(r)))
        ) {
          (e = et(t, e)),
            (e = ta(n, e, 1)),
            (n = ln(n, e, 1)),
            (e = le()),
            n !== null && (Qt(n, 1, e), ce(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function zf(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = le()),
    (e.pingedLanes |= e.suspendedLanes & t),
    G === e &&
      (J & t) === t &&
      (K === 4 || (K === 3 && (J & 130023424) === J && 500 > W() - su)
        ? Sn(e, 0)
        : (ou |= t)),
    ce(e, n);
}
function Ea(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = er), (er <<= 1), !(er & 130023424) && (er = 4194304))
      : (n = 1));
  var t = le();
  (e = Qe(e, n)), e !== null && (Qt(e, n, t), ce(e, t));
}
function Pf(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), Ea(e, t);
}
function Tf(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), Ea(e, t);
}
var Ca;
Ca = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || se.current) oe = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (oe = !1), hf(e, n, t);
      oe = !!(e.flags & 131072);
    }
  else (oe = !1), I && n.flags & 1048576 && zs(n, Or, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      gr(e, n), (e = n.pendingProps);
      var l = Zn(n, te.current);
      Yn(n, t), (l = nu(null, n, r, e, l, t));
      var i = tu();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            ae(r) ? ((i = !0), Dr(n)) : (i = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Zi(n),
            (l.updater = br),
            (n.stateNode = l),
            (l._reactInternals = n),
            di(n, r, e, t),
            (n = vi(null, n, r, !0, i, t)))
          : ((n.tag = 0), I && i && Wi(n), re(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (gr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Mf(r)),
          (e = Ne(r, e)),
          l)
        ) {
          case 0:
            n = mi(null, n, r, e, t);
            break e;
          case 1:
            n = fo(null, n, r, e, t);
            break e;
          case 11:
            n = ao(null, n, r, e, t);
            break e;
          case 14:
            n = co(null, n, r, Ne(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Ne(r, l)),
        mi(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Ne(r, l)),
        fo(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((ua(n), e === null)) throw Error(y(387));
        (r = n.pendingProps),
          (i = n.memoizedState),
          (l = i.element),
          Rs(e, n),
          jr(n, r, null, t);
        var u = n.memoizedState;
        if (((r = u.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (l = et(Error(y(423)), n)), (n = po(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = et(Error(y(424)), n)), (n = po(e, n, r, t, l));
            break e;
          } else
            for (
              de = rn(n.stateNode.containerInfo.firstChild),
                pe = n,
                I = !0,
                ze = null,
                t = Ms(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((Jn(), r === l)) {
            n = $e(e, n, t);
            break e;
          }
          re(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        Os(n),
        e === null && ai(n),
        (r = n.type),
        (l = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (u = l.children),
        li(r, l) ? (u = null) : i !== null && li(r, i) && (n.flags |= 32),
        ia(e, n),
        re(e, n, u, t),
        n.child
      );
    case 6:
      return e === null && ai(n), null;
    case 13:
      return oa(e, n, t);
    case 4:
      return (
        Ji(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = qn(n, null, r, t)) : re(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Ne(r, l)),
        ao(e, n, r, l, t)
      );
    case 7:
      return re(e, n, n.pendingProps, t), n.child;
    case 8:
      return re(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return re(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (i = n.memoizedProps),
          (u = l.value),
          D(Fr, r._currentValue),
          (r._currentValue = u),
          i !== null)
        )
          if (Le(i.value, u)) {
            if (i.children === l.children && !se.current) {
              n = $e(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                u = i.child;
                for (var s = o.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = He(-1, t & -t)), (s.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var v = d.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (d.pending = s);
                      }
                    }
                    (i.lanes |= t),
                      (s = i.alternate),
                      s !== null && (s.lanes |= t),
                      ci(i.return, t, n),
                      (o.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) u = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((u = i.return), u === null)) throw Error(y(341));
                (u.lanes |= t),
                  (o = u.alternate),
                  o !== null && (o.lanes |= t),
                  ci(u, t, n),
                  (u = i.sibling);
              } else u = i.child;
              if (u !== null) u.return = i;
              else
                for (u = i; u !== null; ) {
                  if (u === n) {
                    u = null;
                    break;
                  }
                  if (((i = u.sibling), i !== null)) {
                    (i.return = u.return), (u = i);
                    break;
                  }
                  u = u.return;
                }
              i = u;
            }
        re(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        Yn(n, t),
        (l = Se(l)),
        (r = r(l)),
        (n.flags |= 1),
        re(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Ne(r, n.pendingProps)),
        (l = Ne(r.type, l)),
        co(e, n, r, l, t)
      );
    case 15:
      return ra(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Ne(r, l)),
        gr(e, n),
        (n.tag = 1),
        ae(r) ? ((e = !0), Dr(n)) : (e = !1),
        Yn(n, t),
        ea(n, r, l),
        di(n, r, l, t),
        vi(null, n, r, !0, e, t)
      );
    case 19:
      return sa(e, n, t);
    case 22:
      return la(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function xa(e, n) {
  return Jo(e, n);
}
function Lf(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function we(e, n, t, r) {
  return new Lf(e, n, t, r);
}
function du(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Mf(e) {
  if (typeof e == "function") return du(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Mi)) return 11;
    if (e === Di) return 14;
  }
  return 2;
}
function sn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = we(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Sr(e, n, t, r, l, i) {
  var u = 2;
  if (((r = e), typeof e == "function")) du(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case Dn:
        return En(t.children, l, i, n);
      case Li:
        (u = 8), (l |= 8);
        break;
      case Il:
        return (
          (e = we(12, t, n, l | 2)), (e.elementType = Il), (e.lanes = i), e
        );
      case jl:
        return (e = we(13, t, n, l)), (e.elementType = jl), (e.lanes = i), e;
      case Ul:
        return (e = we(19, t, n, l)), (e.elementType = Ul), (e.lanes = i), e;
      case Oo:
        return tl(t, l, i, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Do:
              u = 10;
              break e;
            case Ro:
              u = 9;
              break e;
            case Mi:
              u = 11;
              break e;
            case Di:
              u = 14;
              break e;
            case Xe:
              (u = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = we(u, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = i), n
  );
}
function En(e, n, t, r) {
  return (e = we(7, e, r, n)), (e.lanes = t), e;
}
function tl(e, n, t, r) {
  return (
    (e = we(22, e, r, n)),
    (e.elementType = Oo),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Rl(e, n, t) {
  return (e = we(6, e, null, n)), (e.lanes = t), e;
}
function Ol(e, n, t) {
  return (
    (n = we(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Df(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ml(0)),
    (this.expirationTimes = ml(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ml(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function pu(e, n, t, r, l, i, u, o, s) {
  return (
    (e = new Df(e, n, t, o, s)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = we(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zi(i),
    e
  );
}
function Rf(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function Na(e) {
  if (!e) return cn;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (ae(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (ae(t)) return Ns(e, t, n);
  }
  return n;
}
function _a(e, n, t, r, l, i, u, o, s) {
  return (
    (e = pu(t, r, !0, e, l, i, u, o, s)),
    (e.context = Na(null)),
    (t = e.current),
    (r = le()),
    (l = on(t)),
    (i = He(r, l)),
    (i.callback = n ?? null),
    ln(t, i, l),
    (e.current.lanes = l),
    Qt(e, l, r),
    ce(e, r),
    e
  );
}
function rl(e, n, t, r) {
  var l = n.current,
    i = le(),
    u = on(l);
  return (
    (t = Na(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = He(i, u)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = ln(l, n, u)),
    e !== null && (Te(e, l, u, i), vr(e, l, u)),
    u
  );
}
function $r(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Co(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function mu(e, n) {
  Co(e, n), (e = e.alternate) && Co(e, n);
}
function Of() {
  return null;
}
var za =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vu(e) {
  this._internalRoot = e;
}
ll.prototype.render = vu.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  rl(e, n, null, null);
};
ll.prototype.unmount = vu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    zn(function () {
      rl(null, e, null, null);
    }),
      (n[We] = null);
  }
};
function ll(e) {
  this._internalRoot = e;
}
ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = ls();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < Ze.length && n !== 0 && n < Ze[t].priority; t++);
    Ze.splice(t, 0, e), t === 0 && us(e);
  }
};
function hu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function il(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function xo() {}
function Ff(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = $r(u);
        i.call(d);
      };
    }
    var u = _a(n, r, e, 0, null, !1, !1, "", xo);
    return (
      (e._reactRootContainer = u),
      (e[We] = u.current),
      Ft(e.nodeType === 8 ? e.parentNode : e),
      zn(),
      u
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var d = $r(s);
      o.call(d);
    };
  }
  var s = pu(e, 0, !1, null, null, !1, !1, "", xo);
  return (
    (e._reactRootContainer = s),
    (e[We] = s.current),
    Ft(e.nodeType === 8 ? e.parentNode : e),
    zn(function () {
      rl(n, s, t, r);
    }),
    s
  );
}
function ul(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var u = i;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var s = $r(u);
        o.call(s);
      };
    }
    rl(n, u, e, l);
  } else u = Ff(t, n, e, l, r);
  return $r(u);
}
ts = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = ht(n.pendingLanes);
        t !== 0 &&
          (Fi(n, t | 1), ce(n, W()), !(L & 6) && ((nt = W() + 500), pn()));
      }
      break;
    case 13:
      zn(function () {
        var r = Qe(e, 1);
        if (r !== null) {
          var l = le();
          Te(r, e, 1, l);
        }
      }),
        mu(e, 1);
  }
};
Ii = function (e) {
  if (e.tag === 13) {
    var n = Qe(e, 134217728);
    if (n !== null) {
      var t = le();
      Te(n, e, 134217728, t);
    }
    mu(e, 134217728);
  }
};
rs = function (e) {
  if (e.tag === 13) {
    var n = on(e),
      t = Qe(e, n);
    if (t !== null) {
      var r = le();
      Te(t, e, n, r);
    }
    mu(e, n);
  }
};
ls = function () {
  return M;
};
is = function (e, n) {
  var t = M;
  try {
    return (M = e), n();
  } finally {
    M = t;
  }
};
Xl = function (e, n, t) {
  switch (n) {
    case "input":
      if ((Hl(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = Zr(r);
            if (!l) throw Error(y(90));
            Io(r), Hl(r, l);
          }
        }
      }
      break;
    case "textarea":
      Uo(e, t);
      break;
    case "select":
      (n = t.value), n != null && Wn(e, !!t.multiple, n, !1);
  }
};
$o = au;
Ko = zn;
var If = { usingClientEntryPoint: !1, Events: [Kt, In, Zr, Wo, Qo, au] },
  pt = {
    findFiberByHostInstance: gn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  jf = {
    bundleType: pt.bundleType,
    version: pt.version,
    rendererPackageName: pt.rendererPackageName,
    rendererConfig: pt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ke.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Go(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: pt.findFiberByHostInstance || Of,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fr.isDisabled && fr.supportsFiber)
    try {
      (Kr = fr.inject(jf)), (Oe = fr);
    } catch {}
}
ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If;
ve.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hu(n)) throw Error(y(200));
  return Rf(e, n, null, t);
};
ve.createRoot = function (e, n) {
  if (!hu(e)) throw Error(y(299));
  var t = !1,
    r = "",
    l = za;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = pu(e, 1, !1, null, null, t, !1, r, l)),
    (e[We] = n.current),
    Ft(e.nodeType === 8 ? e.parentNode : e),
    new vu(n)
  );
};
ve.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Go(n)), (e = e === null ? null : e.stateNode), e;
};
ve.flushSync = function (e) {
  return zn(e);
};
ve.hydrate = function (e, n, t) {
  if (!il(n)) throw Error(y(200));
  return ul(null, e, n, !0, t);
};
ve.hydrateRoot = function (e, n, t) {
  if (!hu(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = "",
    u = za;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
    (n = _a(n, null, e, 1, t ?? null, l, !1, i, u)),
    (e[We] = n.current),
    Ft(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new ll(n);
};
ve.render = function (e, n, t) {
  if (!il(n)) throw Error(y(200));
  return ul(null, e, n, !1, t);
};
ve.unmountComponentAtNode = function (e) {
  if (!il(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (zn(function () {
        ul(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[We] = null);
        });
      }),
      !0)
    : !1;
};
ve.unstable_batchedUpdates = au;
ve.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!il(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return ul(e, n, t, !1, r);
};
ve.version = "18.3.1-next-f1338f8080-20240426";
function Pa() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pa);
    } catch (e) {
      console.error(e);
    }
}
Pa(), (Po.exports = ve);
var Uf = Po.exports,
  Ta,
  La,
  No = Uf;
(La = No.createRoot), (Ta = No.hydrateRoot);
const yu = ({ value: e, name: n, hydrate: t = !0 }) => {
  if (!e) return null;
  const r = t ? "astro-slot" : "astro-static-slot";
  return Ue.createElement(r, {
    name: n,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: { __html: e },
  });
};
yu.shouldComponentUpdate = () => !1;
function Af(e) {
  for (const n in e) if (n.startsWith("__reactContainer")) return n;
}
function Ma(e) {
  let n = {};
  for (const t of e.attributes) n[t.name] = t.value;
  return e.firstChild === null
    ? Ue.createElement(e.localName, n)
    : Ue.createElement(
        e.localName,
        n,
        Array.from(e.childNodes)
          .map((t) =>
            t.nodeType === Node.TEXT_NODE
              ? t.data
              : t.nodeType === Node.ELEMENT_NODE
              ? Ma(t)
              : void 0
          )
          .filter((t) => !!t)
      );
}
function Vf(e, n) {
  if (n && e) {
    let t = [],
      r = document.createElement("template");
    r.innerHTML = e;
    for (let l of r.content.children) t.push(Ma(l));
    return t;
  } else return e ? Ue.createElement(yu, { value: e }) : void 0;
}
let _o = new WeakMap();
const zo = (e, n) => {
    let t = _o.get(e);
    return t || ((t = n()), _o.set(e, t)), t;
  },
  Bf =
    (e) =>
    (n, t, { default: r, ...l }, { client: i }) => {
      if (!e.hasAttribute("ssr")) return;
      const u = e.getAttribute("data-action-key"),
        o = e.getAttribute("data-action-name"),
        s = e.getAttribute("data-action-result"),
        d = u && o && s ? [JSON.parse(s), u, o] : void 0,
        v = { identifierPrefix: e.getAttribute("prefix"), formState: d };
      for (const [g, w] of Object.entries(l))
        t[g] = Ue.createElement(yu, { value: w, name: g });
      const m = Ue.createElement(
          n,
          t,
          Vf(r, e.hasAttribute("data-react-children"))
        ),
        p = Af(e);
      if ((p && delete e[p], i === "only"))
        return Ue.startTransition(() => {
          zo(e, () => {
            const w = La(e);
            return (
              e.addEventListener("astro:unmount", () => w.unmount(), {
                once: !0,
              }),
              w
            );
          }).render(m);
        });
      Ue.startTransition(() => {
        zo(e, () => {
          const w = Ta(e, m, v);
          return (
            e.addEventListener("astro:unmount", () => w.unmount(), {
              once: !0,
            }),
            w
          );
        }).render(m);
      });
    };
export { Bf as default };
