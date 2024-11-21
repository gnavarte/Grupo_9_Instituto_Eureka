import { r as m } from "./index.DhYZZe0J.js";
function mr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Is = { exports: {} },
  ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gr = m,
  yr = Symbol.for("react.element"),
  vr = Symbol.for("react.fragment"),
  xr = Object.prototype.hasOwnProperty,
  Tr = gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Pr = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ns(t, e, n) {
  var s,
    i = {},
    o = null,
    r = null;
  n !== void 0 && (o = "" + n),
    e.key !== void 0 && (o = "" + e.key),
    e.ref !== void 0 && (r = e.ref);
  for (s in e) xr.call(e, s) && !Pr.hasOwnProperty(s) && (i[s] = e[s]);
  if (t && t.defaultProps)
    for (s in ((e = t.defaultProps), e)) i[s] === void 0 && (i[s] = e[s]);
  return {
    $$typeof: yr,
    type: t,
    key: o,
    ref: r,
    props: i,
    _owner: Tr.current,
  };
}
ee.Fragment = vr;
ee.jsx = Ns;
ee.jsxs = Ns;
Is.exports = ee;
var P = Is.exports;
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const br = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Us = (...t) =>
    t
      .filter((e, n, s) => !!e && e.trim() !== "" && s.indexOf(e) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var wr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sr = m.forwardRef(
  (
    {
      color: t = "currentColor",
      size: e = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: s,
      className: i = "",
      children: o,
      iconNode: r,
      ...a
    },
    l
  ) =>
    m.createElement(
      "svg",
      {
        ref: l,
        ...wr,
        width: e,
        height: e,
        stroke: t,
        strokeWidth: s ? (Number(n) * 24) / Number(e) : n,
        className: Us("lucide", i),
        ...a,
      },
      [
        ...r.map(([c, u]) => m.createElement(c, u)),
        ...(Array.isArray(o) ? o : [o]),
      ]
    )
);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jt = (t, e) => {
  const n = m.forwardRef(({ className: s, ...i }, o) =>
    m.createElement(Sr, {
      ref: o,
      iconNode: e,
      className: Us(`lucide-${br(t)}`, s),
      ...i,
    })
  );
  return (n.displayName = `${t}`), n;
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ar = jt("BellOff", [
  ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5", key: "o7mx20" }],
  ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7", key: "16f1lm" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cr = jt("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vr = jt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _r = jt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mr = jt("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Dr = "_calendar_11hen_1",
  Rr = "_calendar__square_11hen_13",
  Er = "_not__current_11hen_29",
  Lr = "_calendar__day_11hen_37",
  jr = "_calendar__day_number_11hen_49",
  kr = "_current_11hen_49",
  Fr = "_calendar__day__content_11hen_71",
  Br = "_calendar__day__courses_11hen_87",
  Or = "_calendar__course_11hen_109",
  Ir = "_calendar__course__title_11hen_127",
  W = {
    calendar: Dr,
    calendar__square: Rr,
    not__current: Er,
    calendar__day: Lr,
    calendar__day_number: jr,
    current: kr,
    calendar__day__content: Fr,
    calendar__day__courses: Br,
    calendar__course: Or,
    calendar__course__title: Ir,
  };
function nt(...t) {
  return t.filter(Boolean).join(" ");
}
const Ae = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  Ws = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  Nr = "_course__inspector__Wrapper_14v8w_1",
  Ur = "_course__inspector_14v8w_1",
  Wr = "_course__inspector__header_14v8w_69",
  Kr = "_course__inspector__close_14v8w_85",
  $r = "_course__inspector__title_14v8w_97",
  wt = {
    course__inspector__Wrapper: Nr,
    course__inspector: Ur,
    course__inspector__header: Wr,
    course__inspector__close: Kr,
    course__inspector__title: $r,
  };
function Gr(t) {
  if (typeof Proxy > "u") return t;
  const e = new Map(),
    n = (...s) => t(...s);
  return new Proxy(n, {
    get: (s, i) =>
      i === "create" ? t : (e.has(i) || e.set(i, t(i)), e.get(i)),
  });
}
function ne(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const Ce = (t) => Array.isArray(t);
function Ks(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
function Dt(t) {
  return typeof t == "string" || Array.isArray(t);
}
function wn(t) {
  const e = [{}, {}];
  return (
    t?.values.forEach((n, s) => {
      (e[0][s] = n.get()), (e[1][s] = n.getVelocity());
    }),
    e
  );
}
function We(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = wn(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (
    (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function")
  ) {
    const [i, o] = wn(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function se(t, e, n) {
  const s = t.getProps();
  return We(s, e, n !== void 0 ? n : s.custom, t);
}
const Ke = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  $e = ["initial", ...Ke],
  kt = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ct = new Set(kt),
  H = (t) => t * 1e3,
  Y = (t) => t / 1e3,
  zr = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Hr = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Yr = { type: "keyframes", duration: 0.8 },
  Xr = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  qr = (t, { keyframes: e }) =>
    e.length > 2
      ? Yr
      : ct.has(t)
      ? t.startsWith("scale")
        ? Hr(e[1])
        : zr
      : Xr;
function Ge(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const Zr = { skipAnimations: !1, useManualTiming: !1 },
  Jr = (t) => t !== null;
function ie(t, { repeat: e, repeatType: n = "loop" }, s) {
  const i = t.filter(Jr),
    o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return !o || s === void 0 ? i[o] : s;
}
const B = (t) => t;
function Qr(t) {
  let e = new Set(),
    n = new Set(),
    s = !1,
    i = !1;
  const o = new WeakSet();
  let r = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    o.has(c) && (l.schedule(c), t()), c(r);
  }
  const l = {
    schedule: (c, u = !1, h = !1) => {
      const f = h && s ? e : n;
      return u && o.add(c), f.has(c) || f.add(c), c;
    },
    cancel: (c) => {
      n.delete(c), o.delete(c);
    },
    process: (c) => {
      if (((r = c), s)) {
        i = !0;
        return;
      }
      (s = !0),
        ([e, n] = [n, e]),
        n.clear(),
        e.forEach(a),
        (s = !1),
        i && ((i = !1), l.process(c));
    },
  };
  return l;
}
const Nt = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  to = 40;
function $s(t, e) {
  let n = !1,
    s = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    r = Nt.reduce((y, x) => ((y[x] = Qr(o)), y), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: c,
      preRender: u,
      render: h,
      postRender: d,
    } = r,
    f = () => {
      const y = performance.now();
      (n = !1),
        (i.delta = s ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, to), 1)),
        (i.timestamp = y),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        u.process(i),
        h.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && e && ((s = !1), t(f));
    },
    p = () => {
      (n = !0), (s = !0), i.isProcessing || t(f);
    };
  return {
    schedule: Nt.reduce((y, x) => {
      const g = r[x];
      return (y[x] = (S, C = !1, b = !1) => (n || p(), g.schedule(S, C, b))), y;
    }, {}),
    cancel: (y) => {
      for (let x = 0; x < Nt.length; x++) r[Nt[x]].cancel(y);
    },
    state: i,
    steps: r,
  };
}
const {
    schedule: V,
    cancel: J,
    state: L,
    steps: de,
  } = $s(typeof requestAnimationFrame < "u" ? requestAnimationFrame : B, !0),
  Gs = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  eo = 1e-7,
  no = 12;
function so(t, e, n, s, i) {
  let o,
    r,
    a = 0;
  do (r = e + (n - e) / 2), (o = Gs(r, s, i) - t), o > 0 ? (n = r) : (e = r);
  while (Math.abs(o) > eo && ++a < no);
  return r;
}
function Ft(t, e, n, s) {
  if (t === e && n === s) return B;
  const i = (o) => so(o, 0, 1, t, n);
  return (o) => (o === 0 || o === 1 ? o : Gs(i(o), e, s));
}
const zs = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
  Hs = (t) => (e) => 1 - t(1 - e),
  Ys = Ft(0.33, 1.53, 0.69, 0.99),
  ze = Hs(Ys),
  Xs = zs(ze),
  qs = (t) =>
    (t *= 2) < 1 ? 0.5 * ze(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  He = (t) => 1 - Math.sin(Math.acos(t)),
  Zs = Hs(He),
  Js = zs(He),
  Qs = (t) => /^0[^.\s]+$/u.test(t);
function io(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
    ? t === "none" || t === "0" || Qs(t)
    : !0;
}
let Ve = B;
const ti = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  ei = (t) => (e) => typeof e == "string" && e.startsWith(t),
  ni = ei("--"),
  ro = ei("var(--"),
  Ye = (t) => (ro(t) ? oo.test(t.split("/*")[0].trim()) : !1),
  oo =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ao = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function lo(t) {
  const e = ao.exec(t);
  if (!e) return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
function si(t, e, n = 1) {
  const [s, i] = lo(t);
  if (!s) return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return ti(r) ? parseFloat(r) : r;
  }
  return Ye(i) ? si(i, e, n + 1) : i;
}
const Q = (t, e, n) => (n > e ? e : n < t ? t : n),
  Pt = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  Rt = { ...Pt, transform: (t) => Q(0, 1, t) },
  Ut = { ...Pt, default: 1 },
  Bt = (t) => ({
    test: (e) =>
      typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  Z = Bt("deg"),
  $ = Bt("%"),
  w = Bt("px"),
  co = Bt("vh"),
  uo = Bt("vw"),
  Sn = {
    ...$,
    parse: (t) => $.parse(t) / 100,
    transform: (t) => $.transform(t * 100),
  },
  ho = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  An = (t) => t === Pt || t === w,
  Cn = (t, e) => parseFloat(t.split(", ")[e]),
  Vn =
    (t, e) =>
    (n, { transform: s }) => {
      if (s === "none" || !s) return 0;
      const i = s.match(/^matrix3d\((.+)\)$/u);
      if (i) return Cn(i[1], e);
      {
        const o = s.match(/^matrix\((.+)\)$/u);
        return o ? Cn(o[1], t) : 0;
      }
    },
  fo = new Set(["x", "y", "z"]),
  po = kt.filter((t) => !fo.has(t));
function mo(t) {
  const e = [];
  return (
    po.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 &&
        (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
    }),
    e
  );
}
const mt = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: Vn(4, 13),
  y: Vn(5, 14),
};
mt.translateX = mt.x;
mt.translateY = mt.y;
const ii = (t) => (e) => e.test(t),
  go = { test: (t) => t === "auto", parse: (t) => t },
  ri = [Pt, w, $, Z, uo, co, go],
  _n = (t) => ri.find(ii(t)),
  at = new Set();
let _e = !1,
  Me = !1;
function oi() {
  if (Me) {
    const t = Array.from(at).filter((s) => s.needsMeasurement),
      e = new Set(t.map((s) => s.element)),
      n = new Map();
    e.forEach((s) => {
      const i = mo(s);
      i.length && (n.set(s, i), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      e.forEach((s) => {
        s.render();
        const i = n.get(s);
        i &&
          i.forEach(([o, r]) => {
            var a;
            (a = s.getValue(o)) === null || a === void 0 || a.set(r);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (Me = !1), (_e = !1), at.forEach((t) => t.complete()), at.clear();
}
function ai() {
  at.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Me = !0);
  });
}
function yo() {
  ai(), oi();
}
class Xe {
  constructor(e, n, s, i, o, r = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = n),
      (this.name = s),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = r);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (at.add(this), _e || ((_e = !0), V.read(ai), V.resolveKeyframes(oi)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n,
      element: s,
      motionValue: i,
    } = this;
    for (let o = 0; o < e.length; o++)
      if (e[o] === null)
        if (o === 0) {
          const r = i?.get(),
            a = e[e.length - 1];
          if (r !== void 0) e[0] = r;
          else if (s && n) {
            const l = s.readValue(n, a);
            l != null && (e[0] = l);
          }
          e[0] === void 0 && (e[0] = a), i && r === void 0 && i.set(e[0]);
        } else e[o] = e[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      at.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), at.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Vt = (t) => Math.round(t * 1e5) / 1e5,
  qe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function vo(t) {
  return t == null;
}
const xo =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ze = (t, e) => (n) =>
    !!(
      (typeof n == "string" && xo.test(n) && n.startsWith(t)) ||
      (e && !vo(n) && Object.prototype.hasOwnProperty.call(n, e))
    ),
  li = (t, e, n) => (s) => {
    if (typeof s != "string") return s;
    const [i, o, r, a] = s.match(qe);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(o),
      [n]: parseFloat(r),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  To = (t) => Q(0, 255, t),
  fe = { ...Pt, transform: (t) => Math.round(To(t)) },
  ot = {
    test: Ze("rgb", "red"),
    parse: li("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      "rgba(" +
      fe.transform(t) +
      ", " +
      fe.transform(e) +
      ", " +
      fe.transform(n) +
      ", " +
      Vt(Rt.transform(s)) +
      ")",
  };
function Po(t) {
  let e = "",
    n = "",
    s = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const De = { test: Ze("#"), parse: Po, transform: ot.transform },
  ut = {
    test: Ze("hsl", "hue"),
    parse: li("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      $.transform(Vt(e)) +
      ", " +
      $.transform(Vt(n)) +
      ", " +
      Vt(Rt.transform(s)) +
      ")",
  },
  k = {
    test: (t) => ot.test(t) || De.test(t) || ut.test(t),
    parse: (t) =>
      ot.test(t) ? ot.parse(t) : ut.test(t) ? ut.parse(t) : De.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
        ? ot.transform(t)
        : ut.transform(t),
  },
  bo =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function wo(t) {
  var e, n;
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (((e = t.match(qe)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((n = t.match(bo)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const ci = "number",
  ui = "color",
  So = "var",
  Ao = "var(",
  Mn = "${}",
  Co =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Et(t) {
  const e = t.toString(),
    n = [],
    s = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = e
    .replace(
      Co,
      (l) => (
        k.test(l)
          ? (s.color.push(o), i.push(ui), n.push(k.parse(l)))
          : l.startsWith(Ao)
          ? (s.var.push(o), i.push(So), n.push(l))
          : (s.number.push(o), i.push(ci), n.push(parseFloat(l))),
        ++o,
        Mn
      )
    )
    .split(Mn);
  return { values: n, split: a, indexes: s, types: i };
}
function hi(t) {
  return Et(t).values;
}
function di(t) {
  const { split: e, types: n } = Et(t),
    s = e.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (((o += e[r]), i[r] !== void 0)) {
        const a = n[r];
        a === ci
          ? (o += Vt(i[r]))
          : a === ui
          ? (o += k.transform(i[r]))
          : (o += i[r]);
      }
    return o;
  };
}
const Vo = (t) => (typeof t == "number" ? 0 : t);
function _o(t) {
  const e = hi(t);
  return di(t)(e.map(Vo));
}
const tt = {
    test: wo,
    parse: hi,
    createTransformer: di,
    getAnimatableNone: _o,
  },
  Mo = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Do(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [s] = n.match(qe) || [];
  if (!s) return t;
  const i = n.replace(s, "");
  let o = Mo.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const Ro = /\b([a-z-]*)\(.*?\)/gu,
  Re = {
    ...tt,
    getAnimatableNone: (t) => {
      const e = t.match(Ro);
      return e ? e.map(Do).join(" ") : t;
    },
  },
  Eo = {
    borderWidth: w,
    borderTopWidth: w,
    borderRightWidth: w,
    borderBottomWidth: w,
    borderLeftWidth: w,
    borderRadius: w,
    radius: w,
    borderTopLeftRadius: w,
    borderTopRightRadius: w,
    borderBottomRightRadius: w,
    borderBottomLeftRadius: w,
    width: w,
    maxWidth: w,
    height: w,
    maxHeight: w,
    top: w,
    right: w,
    bottom: w,
    left: w,
    padding: w,
    paddingTop: w,
    paddingRight: w,
    paddingBottom: w,
    paddingLeft: w,
    margin: w,
    marginTop: w,
    marginRight: w,
    marginBottom: w,
    marginLeft: w,
    backgroundPositionX: w,
    backgroundPositionY: w,
  },
  Lo = {
    rotate: Z,
    rotateX: Z,
    rotateY: Z,
    rotateZ: Z,
    scale: Ut,
    scaleX: Ut,
    scaleY: Ut,
    scaleZ: Ut,
    skew: Z,
    skewX: Z,
    skewY: Z,
    distance: w,
    translateX: w,
    translateY: w,
    translateZ: w,
    x: w,
    y: w,
    z: w,
    perspective: w,
    transformPerspective: w,
    opacity: Rt,
    originX: Sn,
    originY: Sn,
    originZ: w,
  },
  Dn = { ...Pt, transform: Math.round },
  Je = {
    ...Eo,
    ...Lo,
    zIndex: Dn,
    size: w,
    fillOpacity: Rt,
    strokeOpacity: Rt,
    numOctaves: Dn,
  },
  jo = {
    ...Je,
    color: k,
    backgroundColor: k,
    outlineColor: k,
    fill: k,
    stroke: k,
    borderColor: k,
    borderTopColor: k,
    borderRightColor: k,
    borderBottomColor: k,
    borderLeftColor: k,
    filter: Re,
    WebkitFilter: Re,
  },
  Qe = (t) => jo[t];
function fi(t, e) {
  let n = Qe(t);
  return (
    n !== Re && (n = tt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const ko = new Set(["auto", "none", "0"]);
function Fo(t, e, n) {
  let s = 0,
    i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    typeof o == "string" && !ko.has(o) && Et(o).values.length && (i = t[s]),
      s++;
  }
  if (i && n) for (const o of e) t[o] = fi(n, i);
}
class pi extends Xe {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let c = e[l];
      if (typeof c == "string" && ((c = c.trim()), Ye(c))) {
        const u = si(c, n.current);
        u !== void 0 && (e[l] = u),
          l === e.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !ho.has(s) || e.length !== 2)) return;
    const [i, o] = e,
      r = _n(i),
      a = _n(o);
    if (r !== a)
      if (An(r) && An(a))
        for (let l = 0; l < e.length; l++) {
          const c = e[l];
          typeof c == "string" && (e[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      s = [];
    for (let i = 0; i < e.length; i++) io(e[i]) && s.push(i);
    s.length && Fo(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = mt[s](
        e.measureViewportBox(),
        window.getComputedStyle(e.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    var e;
    const { element: n, name: s, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(s);
    o && o.jump(this.measuredOrigin, !1);
    const r = i.length - 1,
      a = i[r];
    (i[r] = mt[s](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((e = this.removedTransforms) === null || e === void 0) &&
        e.length &&
        this.removedTransforms.forEach(([l, c]) => {
          n.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function tn(t) {
  return typeof t == "function";
}
let Gt;
function Bo() {
  Gt = void 0;
}
const G = {
    now: () => (
      Gt === void 0 &&
        G.set(
          L.isProcessing || Zr.useManualTiming ? L.timestamp : performance.now()
        ),
      Gt
    ),
    set: (t) => {
      (Gt = t), queueMicrotask(Bo);
    },
  },
  Rn = (t, e) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (tt.test(t) || t === "0") &&
            !t.startsWith("url("))
        );
function Oo(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
}
function Io(t, e, n, s) {
  const i = t[0];
  if (i === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const o = t[t.length - 1],
    r = Rn(i, e),
    a = Rn(o, e);
  return !r || !a ? !1 : Oo(t) || ((n === "spring" || tn(n)) && s);
}
const No = 40;
class mi {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: s = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: r = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = G.now()),
      (this.options = {
        autoplay: e,
        delay: n,
        type: s,
        repeat: i,
        repeatDelay: o,
        repeatType: r,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > No
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && yo(), this._resolved;
  }
  onKeyframesResolved(e, n) {
    (this.resolvedAt = G.now()), (this.hasAttemptedResolve = !0);
    const {
      name: s,
      type: i,
      velocity: o,
      delay: r,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options;
    if (!c && !Io(e, s, i, o))
      if (r) this.options.duration = 0;
      else {
        l?.(ie(e, this.options, n)), a?.(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(e, n);
    u !== !1 &&
      ((this._resolved = { keyframes: e, finalKeyframe: n, ...u }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(e, n) {
    return this.currentFinishedPromise.then(e, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e;
    });
  }
}
function gi(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Uo = 5;
function yi(t, e, n) {
  const s = Math.max(e - Uo, 0);
  return gi(n - t(s), e - s);
}
const pe = 0.001,
  Wo = 0.01,
  Ko = 10,
  $o = 0.05,
  Go = 1;
function zo({
  duration: t = 800,
  bounce: e = 0.25,
  velocity: n = 0,
  mass: s = 1,
}) {
  let i,
    o,
    r = 1 - e;
  (r = Q($o, Go, r)),
    (t = Q(Wo, Ko, Y(t))),
    r < 1
      ? ((i = (c) => {
          const u = c * r,
            h = u * t,
            d = u - n,
            f = Ee(c, r),
            p = Math.exp(-h);
          return pe - (d / f) * p;
        }),
        (o = (c) => {
          const h = c * r * t,
            d = h * n + n,
            f = Math.pow(r, 2) * Math.pow(c, 2) * t,
            p = Math.exp(-h),
            v = Ee(Math.pow(c, 2), r);
          return ((-i(c) + pe > 0 ? -1 : 1) * ((d - f) * p)) / v;
        }))
      : ((i = (c) => {
          const u = Math.exp(-c * t),
            h = (c - n) * t + 1;
          return -pe + u * h;
        }),
        (o = (c) => {
          const u = Math.exp(-c * t),
            h = (n - c) * (t * t);
          return u * h;
        }));
  const a = 5 / t,
    l = Yo(i, o, a);
  if (((t = H(t)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: t };
  {
    const c = Math.pow(l, 2) * s;
    return { stiffness: c, damping: r * 2 * Math.sqrt(s * c), duration: t };
  }
}
const Ho = 12;
function Yo(t, e, n) {
  let s = n;
  for (let i = 1; i < Ho; i++) s = s - t(s) / e(s);
  return s;
}
function Ee(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Xo = ["duration", "bounce"],
  qo = ["stiffness", "damping", "mass"];
function En(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Zo(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!En(t, qo) && En(t, Xo)) {
    const n = zo(t);
    (e = { ...e, ...n, mass: 1 }), (e.isResolvedFromDuration = !0);
  }
  return e;
}
function vi({ keyframes: t, restDelta: e, restSpeed: n, ...s }) {
  const i = t[0],
    o = t[t.length - 1],
    r = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: h,
      isResolvedFromDuration: d,
    } = Zo({ ...s, velocity: -Y(s.velocity || 0) }),
    f = h || 0,
    p = l / (2 * Math.sqrt(a * c)),
    v = o - i,
    T = Y(Math.sqrt(a / c)),
    y = Math.abs(v) < 5;
  n || (n = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5);
  let x;
  if (p < 1) {
    const g = Ee(T, p);
    x = (S) => {
      const C = Math.exp(-p * T * S);
      return (
        o - C * (((f + p * T * v) / g) * Math.sin(g * S) + v * Math.cos(g * S))
      );
    };
  } else if (p === 1) x = (g) => o - Math.exp(-T * g) * (v + (f + T * v) * g);
  else {
    const g = T * Math.sqrt(p * p - 1);
    x = (S) => {
      const C = Math.exp(-p * T * S),
        b = Math.min(g * S, 300);
      return (
        o - (C * ((f + p * T * v) * Math.sinh(b) + g * v * Math.cosh(b))) / g
      );
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (g) => {
      const S = x(g);
      if (d) r.done = g >= u;
      else {
        let C = 0;
        p < 1 && (C = g === 0 ? H(f) : yi(x, g, S));
        const b = Math.abs(C) <= n,
          _ = Math.abs(o - S) <= e;
        r.done = b && _;
      }
      return (r.value = r.done ? o : S), r;
    },
  };
}
function Ln({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: r,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const h = t[0],
    d = { done: !1, value: h },
    f = (A) => (a !== void 0 && A < a) || (l !== void 0 && A > l),
    p = (A) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - A) < Math.abs(l - A)
        ? a
        : l;
  let v = n * e;
  const T = h + v,
    y = r === void 0 ? T : r(T);
  y !== T && (v = y - h);
  const x = (A) => -v * Math.exp(-A / s),
    g = (A) => y + x(A),
    S = (A) => {
      const D = x(A),
        j = g(A);
      (d.done = Math.abs(D) <= c), (d.value = d.done ? y : j);
    };
  let C, b;
  const _ = (A) => {
    f(d.value) &&
      ((C = A),
      (b = vi({
        keyframes: [d.value, p(d.value)],
        velocity: yi(g, A, d.value),
        damping: i,
        stiffness: o,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    _(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let D = !1;
        return (
          !b && C === void 0 && ((D = !0), S(A), _(A)),
          C !== void 0 && A >= C ? b.next(A - C) : (!D && S(A), d)
        );
      },
    }
  );
}
const Jo = Ft(0.42, 0, 1, 1),
  Qo = Ft(0, 0, 0.58, 1),
  xi = Ft(0.42, 0, 0.58, 1),
  ta = (t) => Array.isArray(t) && typeof t[0] != "number",
  en = (t) => Array.isArray(t) && typeof t[0] == "number",
  jn = {
    linear: B,
    easeIn: Jo,
    easeInOut: xi,
    easeOut: Qo,
    circIn: He,
    circInOut: Js,
    circOut: Zs,
    backIn: ze,
    backInOut: Xs,
    backOut: Ys,
    anticipate: qs,
  },
  kn = (t) => {
    if (en(t)) {
      Ve(t.length === 4);
      const [e, n, s, i] = t;
      return Ft(e, n, s, i);
    } else if (typeof t == "string") return Ve(jn[t] !== void 0), jn[t];
    return t;
  },
  ea = (t, e) => (n) => e(t(n)),
  X = (...t) => t.reduce(ea),
  gt = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s;
  },
  M = (t, e, n) => t + (e - t) * n;
function me(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
      ? e
      : n < 2 / 3
      ? t + (e - t) * (2 / 3 - n) * 6
      : t
  );
}
function na({ hue: t, saturation: e, lightness: n, alpha: s }) {
  (t /= 360), (e /= 100), (n /= 100);
  let i = 0,
    o = 0,
    r = 0;
  if (!e) i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - a;
    (i = me(l, a, t + 1 / 3)), (o = me(l, a, t)), (r = me(l, a, t - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s,
  };
}
function Yt(t, e) {
  return (n) => (n > 0 ? e : t);
}
const ge = (t, e, n) => {
    const s = t * t,
      i = n * (e * e - s) + s;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  sa = [De, ot, ut],
  ia = (t) => sa.find((e) => e.test(t));
function Fn(t) {
  const e = ia(t);
  if (!e) return !1;
  let n = e.parse(t);
  return e === ut && (n = na(n)), n;
}
const Bn = (t, e) => {
    const n = Fn(t),
      s = Fn(e);
    if (!n || !s) return Yt(t, e);
    const i = { ...n };
    return (o) => (
      (i.red = ge(n.red, s.red, o)),
      (i.green = ge(n.green, s.green, o)),
      (i.blue = ge(n.blue, s.blue, o)),
      (i.alpha = M(n.alpha, s.alpha, o)),
      ot.transform(i)
    );
  },
  Le = new Set(["none", "hidden"]);
function ra(t, e) {
  return Le.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
}
function oa(t, e) {
  return (n) => M(t, e, n);
}
function nn(t) {
  return typeof t == "number"
    ? oa
    : typeof t == "string"
    ? Ye(t)
      ? Yt
      : k.test(t)
      ? Bn
      : ca
    : Array.isArray(t)
    ? Ti
    : typeof t == "object"
    ? k.test(t)
      ? Bn
      : aa
    : Yt;
}
function Ti(t, e) {
  const n = [...t],
    s = n.length,
    i = t.map((o, r) => nn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++) n[r] = i[r](o);
    return n;
  };
}
function aa(t, e) {
  const n = { ...t, ...e },
    s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = nn(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s) n[o] = s[o](i);
    return n;
  };
}
function la(t, e) {
  var n;
  const s = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o],
      a = t.indexes[r][i[r]],
      l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    (s[o] = l), i[r]++;
  }
  return s;
}
const ca = (t, e) => {
  const n = tt.createTransformer(e),
    s = Et(t),
    i = Et(e);
  return s.indexes.var.length === i.indexes.var.length &&
    s.indexes.color.length === i.indexes.color.length &&
    s.indexes.number.length >= i.indexes.number.length
    ? (Le.has(t) && !i.values.length) || (Le.has(e) && !s.values.length)
      ? ra(t, e)
      : X(Ti(la(s, i), i.values), n)
    : Yt(t, e);
};
function Pi(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number"
    ? M(t, e, n)
    : nn(t)(t, e);
}
function ua(t, e, n) {
  const s = [],
    i = n || Pi,
    o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || B : e;
      a = X(l, a);
    }
    s.push(a);
  }
  return s;
}
function ha(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if ((Ve(o === e.length), o === 1)) return () => e[0];
  if (o === 2 && t[0] === t[1]) return () => e[1];
  t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const r = ua(e, s, i),
    a = r.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < t.length - 2 && !(c < t[u + 1]); u++);
      const h = gt(t[u], t[u + 1], c);
      return r[u](h);
    };
  return n ? (c) => l(Q(t[0], t[o - 1], c)) : l;
}
function da(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = gt(0, e, s);
    t.push(M(n, 1, i));
  }
}
function fa(t) {
  const e = [0];
  return da(e, t.length - 1), e;
}
function pa(t, e) {
  return t.map((n) => n * e);
}
function ma(t, e) {
  return t.map(() => e || xi).splice(0, t.length - 1);
}
function Xt({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: s = "easeInOut",
}) {
  const i = ta(s) ? s.map(kn) : kn(s),
    o = { done: !1, value: e[0] },
    r = pa(n && n.length === e.length ? n : fa(e), t),
    a = ha(r, e, { ease: Array.isArray(i) ? i : ma(e, i) });
  return {
    calculatedDuration: t,
    next: (l) => ((o.value = a(l)), (o.done = l >= t), o),
  };
}
const On = 2e4;
function ga(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < On; ) (e += n), (s = t.next(e));
  return e >= On ? 1 / 0 : e;
}
const ya = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: () => V.update(e, !0),
      stop: () => J(e),
      now: () => (L.isProcessing ? L.timestamp : G.now()),
    };
  },
  va = { decay: Ln, inertia: Ln, tween: Xt, keyframes: Xt, spring: vi },
  xa = (t) => t / 100;
class sn extends mi {
  constructor(e) {
    super(e),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options,
      r = i?.KeyframeResolver || Xe,
      a = (l, c) => this.onKeyframesResolved(l, c);
    (this.resolver = new r(o, a, n, s, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(e) {
    const {
        type: n = "keyframes",
        repeat: s = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: r = 0,
      } = this.options,
      a = tn(n) ? n : va[n] || Xt;
    let l, c;
    a !== Xt &&
      typeof e[0] != "number" &&
      ((l = X(xa, Pi(e[0], e[1]))), (e = [0, 100]));
    const u = a({ ...this.options, keyframes: e });
    o === "mirror" &&
      (c = a({ ...this.options, keyframes: [...e].reverse(), velocity: -r })),
      u.calculatedDuration === null && (u.calculatedDuration = ga(u));
    const { calculatedDuration: h } = u,
      d = h + i,
      f = d * (s + 1) - i;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: h,
      resolvedDuration: d,
      totalDuration: f,
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !e
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(e, n = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: A } = this.options;
      return { done: !0, value: A[A.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: r,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: u,
      resolvedDuration: h,
    } = s;
    if (this.startTime === null) return o.next(0);
    const {
      delay: d,
      repeat: f,
      repeatType: p,
      repeatDelay: v,
      onUpdate: T,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 &&
        (this.startTime = Math.min(e - u / this.speed, this.startTime)),
      n
        ? (this.currentTime = e)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(e - this.startTime) * this.speed);
    const y = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      x = this.speed >= 0 ? y < 0 : y > u;
    (this.currentTime = Math.max(y, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = u);
    let g = this.currentTime,
      S = o;
    if (f) {
      const A = Math.min(this.currentTime, u) / h;
      let D = Math.floor(A),
        j = A % 1;
      !j && A >= 1 && (j = 1),
        j === 1 && D--,
        (D = Math.min(D, f + 1)),
        !!(D % 2) &&
          (p === "reverse"
            ? ((j = 1 - j), v && (j -= v / h))
            : p === "mirror" && (S = r)),
        (g = Q(0, 1, j) * h);
    }
    const C = x ? { done: !1, value: l[0] } : S.next(g);
    a && (C.value = a(C.value));
    let { done: b } = C;
    !x &&
      c !== null &&
      (b = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const _ =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && b));
    return (
      _ && i !== void 0 && (C.value = ie(l, this.options, i)),
      T && T(C.value),
      _ && this.finish(),
      C
    );
  }
  get duration() {
    const { resolved: e } = this;
    return e ? Y(e.calculatedDuration) : 0;
  }
  get time() {
    return Y(this.currentTime);
  }
  set time(e) {
    (e = H(e)),
      (this.currentTime = e),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = e)
        : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    (this.playbackSpeed = e), n && (this.time = Y(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: e = ya, onPlay: n, startTime: s } = this.options;
    this.driver || (this.driver = e((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = s ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: e } = this.options;
    e && e();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return (this.startTime = 0), this.tick(e, !0);
  }
}
const Ta = new Set(["opacity", "clipPath", "filter", "transform"]),
  Pa = 10,
  ba = (t, e) => {
    let n = "";
    const s = Math.max(Math.round(e / Pa), 2);
    for (let i = 0; i < s; i++) n += t(gt(0, s - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function rn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const wa = { linearEasing: void 0 };
function Sa(t, e) {
  const n = rn(t);
  return () => {
    var s;
    return (s = wa[e]) !== null && s !== void 0 ? s : n();
  };
}
const qt = Sa(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function bi(t) {
  return !!(
    (typeof t == "function" && qt()) ||
    !t ||
    (typeof t == "string" && (t in je || qt())) ||
    en(t) ||
    (Array.isArray(t) && t.every(bi))
  );
}
const At = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  je = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: At([0, 0.65, 0.55, 1]),
    circOut: At([0.55, 0, 1, 0.45]),
    backIn: At([0.31, 0.01, 0.66, -0.59]),
    backOut: At([0.33, 1.53, 0.69, 0.99]),
  };
function wi(t, e) {
  if (t)
    return typeof t == "function" && qt()
      ? ba(t, e)
      : en(t)
      ? At(t)
      : Array.isArray(t)
      ? t.map((n) => wi(n, e) || je.easeOut)
      : je[t];
}
function Aa(
  t,
  e,
  n,
  {
    delay: s = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {}
) {
  const c = { [e]: n };
  l && (c.offset = l);
  const u = wi(a, i);
  return (
    Array.isArray(u) && (c.easing = u),
    t.animate(c, {
      delay: s,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: o + 1,
      direction: r === "reverse" ? "alternate" : "normal",
    })
  );
}
function In(t, e) {
  (t.timeline = e), (t.onfinish = null);
}
const Ca = rn(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Zt = 10,
  Va = 2e4;
function _a(t) {
  return tn(t.type) || t.type === "spring" || !bi(t.ease);
}
function Ma(t, e) {
  const n = new sn({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let s = { done: !1, value: t[0] };
  const i = [];
  let o = 0;
  for (; !s.done && o < Va; ) (s = n.sample(o)), i.push(s.value), (o += Zt);
  return { times: void 0, keyframes: i, duration: o - Zt, ease: "linear" };
}
const Si = { anticipate: qs, backInOut: Xs, circInOut: Js };
function Da(t) {
  return t in Si;
}
class Nn extends mi {
  constructor(e) {
    super(e);
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options;
    (this.resolver = new pi(
      o,
      (r, a) => this.onKeyframesResolved(r, a),
      n,
      s,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    var s;
    let {
      duration: i = 300,
      times: o,
      ease: r,
      type: a,
      motionValue: l,
      name: c,
      startTime: u,
    } = this.options;
    if (!(!((s = l.owner) === null || s === void 0) && s.current)) return !1;
    if (
      (typeof r == "string" && qt() && Da(r) && (r = Si[r]), _a(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: f,
          motionValue: p,
          element: v,
          ...T
        } = this.options,
        y = Ma(e, T);
      (e = y.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (i = y.duration),
        (o = y.times),
        (r = y.ease),
        (a = "keyframes");
    }
    const h = Aa(l.owner.current, c, e, {
      ...this.options,
      duration: i,
      times: o,
      ease: r,
    });
    return (
      (h.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (In(h, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (h.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(ie(e, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: h, duration: i, times: o, type: a, ease: r, keyframes: e }
    );
  }
  get duration() {
    const { resolved: e } = this;
    if (!e) return 0;
    const { duration: n } = e;
    return Y(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e) return 0;
    const { animation: n } = e;
    return Y(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: s } = n;
    s.currentTime = H(e);
  }
  get speed() {
    const { resolved: e } = this;
    if (!e) return 1;
    const { animation: n } = e;
    return n.playbackRate;
  }
  set speed(e) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: s } = n;
    s.playbackRate = e;
  }
  get state() {
    const { resolved: e } = this;
    if (!e) return "idle";
    const { animation: n } = e;
    return n.playState;
  }
  get startTime() {
    const { resolved: e } = this;
    if (!e) return null;
    const { animation: n } = e;
    return n.startTime;
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      const { resolved: n } = this;
      if (!n) return B;
      const { animation: s } = n;
      In(s, e);
    }
    return B;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: e } = this;
    if (!e) return;
    const { animation: n } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: e } = this;
    if (!e) return;
    const { animation: n } = e;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: e } = this;
    if (!e) return;
    const {
      animation: n,
      keyframes: s,
      duration: i,
      type: o,
      ease: r,
      times: a,
    } = e;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: c,
          onUpdate: u,
          onComplete: h,
          element: d,
          ...f
        } = this.options,
        p = new sn({
          ...f,
          keyframes: s,
          duration: i,
          type: o,
          ease: r,
          times: a,
          isGenerator: !0,
        }),
        v = H(this.time);
      c.setWithVelocity(p.sample(v - Zt).value, p.sample(v).value, Zt);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    const { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    const {
      motionValue: n,
      name: s,
      repeatDelay: i,
      repeatType: o,
      damping: r,
      type: a,
    } = e;
    return (
      Ca() &&
      s &&
      Ta.has(s) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      r !== 0 &&
      a !== "inertia"
    );
  }
}
const Ra = rn(() => window.ScrollTimeline !== void 0);
class Ea {
  constructor(e) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = e.filter(Boolean));
  }
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let s = 0; s < this.animations.length; s++) this.animations[s][e] = n;
  }
  attachTimeline(e, n) {
    const s = this.animations.map((i) =>
      Ra() && i.attachTimeline ? i.attachTimeline(e) : n(i)
    );
    return () => {
      s.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++)
      e = Math.max(e, this.animations[n].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function La({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: s,
  staggerDirection: i,
  repeat: o,
  repeatType: r,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
const on =
    (t, e, n, s = {}, i, o) =>
    (r) => {
      const a = Ge(s, t) || {},
        l = a.delay || s.delay || 0;
      let { elapsed: c = 0 } = s;
      c = c - H(l);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (d) => {
          e.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          r(), a.onComplete && a.onComplete();
        },
        name: t,
        motionValue: e,
        element: o ? void 0 : i,
      };
      La(a) || (u = { ...u, ...qr(t, u) }),
        u.duration && (u.duration = H(u.duration)),
        u.repeatDelay && (u.repeatDelay = H(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from);
      let h = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          ((u.duration = 0), u.delay === 0 && (h = !0)),
        h && !o && e.get() !== void 0)
      ) {
        const d = ie(u.keyframes, a);
        if (d !== void 0)
          return (
            V.update(() => {
              u.onUpdate(d), u.onComplete();
            }),
            new Ea([])
          );
      }
      return !o && Nn.supports(u) ? new Nn(u) : new sn(u);
    },
  ja = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
  ka = (t) => (Ce(t) ? t[t.length - 1] || 0 : t);
function an(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function ln(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class cn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return an(this.subscriptions, e), () => ln(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Un = 30,
  Fa = (t) => !isNaN(parseFloat(t));
class Ba {
  constructor(e, n = {}) {
    (this.version = "11.11.17"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s, i = !0) => {
        const o = G.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = n.owner);
  }
  setCurrent(e) {
    (this.current = e),
      (this.updatedAt = G.now()),
      this.canTrackVelocity === null &&
        e !== void 0 &&
        (this.canTrackVelocity = Fa(this.current));
  }
  setPrevFrameValue(e = this.current) {
    (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new cn());
    const s = this.events[e].add(n);
    return e === "change"
      ? () => {
          s(),
            V.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    (this.passiveEffect = e), (this.stopPassiveEffect = n);
  }
  set(e, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(e, n)
      : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(e, n = !0) {
    this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = G.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      e - this.updatedAt > Un
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Un);
    return gi(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Lt(t, e) {
  return new Ba(t, e);
}
function Oa(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Lt(n));
}
function Ia(t, e) {
  const n = se(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = ka(o[r]);
    Oa(t, r, a);
  }
}
const un = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Na = "framerAppearId",
  Ai = "data-" + un(Na);
function Ci(t) {
  return t.props[Ai];
}
const F = (t) => !!(t && t.getVelocity);
function Ua(t) {
  return !!(F(t) && t.add);
}
function ke(t, e) {
  const n = t.getValue("willChange");
  if (Ua(n)) return n.add(e);
}
function Wa({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return (e[n] = !1), s;
}
function Vi(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  var o;
  let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
  s && (r = s);
  const c = [],
    u = i && t.animationState && t.animationState.getState()[i];
  for (const h in l) {
    const d = t.getValue(
        h,
        (o = t.latestValues[h]) !== null && o !== void 0 ? o : null
      ),
      f = l[h];
    if (f === void 0 || (u && Wa(u, h))) continue;
    const p = { delay: n, ...Ge(r || {}, h) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const y = Ci(t);
      if (y) {
        const x = window.MotionHandoffAnimation(y, h, V);
        x !== null && ((p.startTime = x), (v = !0));
      }
    }
    ke(t, h),
      d.start(
        on(h, d, f, t.shouldReduceMotion && ct.has(h) ? { type: !1 } : p, t, v)
      );
    const T = d.animation;
    T && c.push(T);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        V.update(() => {
          a && Ia(t, a);
        });
      }),
    c
  );
}
function Fe(t, e, n = {}) {
  var s;
  const i = se(
    t,
    e,
    n.type === "exit"
      ? (s = t.presenceContext) === null || s === void 0
        ? void 0
        : s.custom
      : void 0
  );
  let { transition: o = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = i ? () => Promise.all(Vi(t, i, n)) : () => Promise.resolve(),
    a =
      t.variantChildren && t.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: h,
              staggerDirection: d,
            } = o;
            return Ka(t, e, u + c, h, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [r, a] : [a, r];
    return c().then(() => u());
  } else return Promise.all([r(), a(n.delay)]);
}
function Ka(t, e, n = 0, s = 0, i = 1, o) {
  const r = [],
    a = (t.variantChildren.size - 1) * s,
    l = i === 1 ? (c = 0) => c * s : (c = 0) => a - c * s;
  return (
    Array.from(t.variantChildren)
      .sort($a)
      .forEach((c, u) => {
        c.notify("AnimationStart", e),
          r.push(
            Fe(c, e, { ...o, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", e)
            )
          );
      }),
    Promise.all(r)
  );
}
function $a(t, e) {
  return t.sortNodePosition(e);
}
function Ga(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => Fe(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string") s = Fe(t, e, n);
  else {
    const i = typeof e == "function" ? se(t, e, n.custom) : e;
    s = Promise.all(Vi(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const za = $e.length;
function _i(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? _i(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < za; n++) {
    const s = $e[n],
      i = t.props[s];
    (Dt(i) || i === !1) && (e[s] = i);
  }
  return e;
}
const Ha = [...Ke].reverse(),
  Ya = Ke.length;
function Xa(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: s }) => Ga(t, n, s)));
}
function qa(t) {
  let e = Xa(t),
    n = Wn(),
    s = !0;
  const i = (l) => (c, u) => {
    var h;
    const d = se(
      t,
      u,
      l === "exit"
        ? (h = t.presenceContext) === null || h === void 0
          ? void 0
          : h.custom
        : void 0
    );
    if (d) {
      const { transition: f, transitionEnd: p, ...v } = d;
      c = { ...c, ...v, ...p };
    }
    return c;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: c } = t,
      u = _i(t.parent) || {},
      h = [],
      d = new Set();
    let f = {},
      p = 1 / 0;
    for (let T = 0; T < Ya; T++) {
      const y = Ha[T],
        x = n[y],
        g = c[y] !== void 0 ? c[y] : u[y],
        S = Dt(g),
        C = y === l ? x.isActive : null;
      C === !1 && (p = T);
      let b = g === u[y] && g !== c[y] && S;
      if (
        (b && s && t.manuallyAnimateOnMount && (b = !1),
        (x.protectedKeys = { ...f }),
        (!x.isActive && C === null) ||
          (!g && !x.prevProp) ||
          ne(g) ||
          typeof g == "boolean")
      )
        continue;
      const _ = Za(x.prevProp, g);
      let A = _ || (y === l && x.isActive && !b && S) || (T > p && S),
        D = !1;
      const j = Array.isArray(g) ? g : [g];
      let K = j.reduce(i(y), {});
      C === !1 && (K = {});
      const { prevResolvedValues: ce = {} } = x,
        bt = { ...ce, ...K },
        Ot = (E) => {
          (A = !0),
            d.has(E) && ((D = !0), d.delete(E)),
            (x.needsAnimating[E] = !0);
          const O = t.getValue(E);
          O && (O.liveStyle = !1);
        };
      for (const E in bt) {
        const O = K[E],
          ue = ce[E];
        if (f.hasOwnProperty(E)) continue;
        let he = !1;
        Ce(O) && Ce(ue) ? (he = !Ks(O, ue)) : (he = O !== ue),
          he
            ? O != null
              ? Ot(E)
              : d.add(E)
            : O !== void 0 && d.has(E)
            ? Ot(E)
            : (x.protectedKeys[E] = !0);
      }
      (x.prevProp = g),
        (x.prevResolvedValues = K),
        x.isActive && (f = { ...f, ...K }),
        s && t.blockInitialAnimation && (A = !1),
        A &&
          (!(b && _) || D) &&
          h.push(...j.map((E) => ({ animation: E, options: { type: y } })));
    }
    if (d.size) {
      const T = {};
      d.forEach((y) => {
        const x = t.getBaseTarget(y),
          g = t.getValue(y);
        g && (g.liveStyle = !0), (T[y] = x ?? null);
      }),
        h.push({ animation: T });
    }
    let v = !!h.length;
    return (
      s &&
        (c.initial === !1 || c.initial === c.animate) &&
        !t.manuallyAnimateOnMount &&
        (v = !1),
      (s = !1),
      v ? e(h) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = t.variantChildren) === null ||
      u === void 0 ||
      u.forEach((d) => {
        var f;
        return (f = d.animationState) === null || f === void 0
          ? void 0
          : f.setActive(l, c);
      }),
      (n[l].isActive = c);
    const h = r(l);
    for (const d in n) n[d].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = Wn()), (s = !0);
    },
  };
}
function Za(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Ks(e, t) : !1;
}
function st(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Wn() {
  return {
    animate: st(!0),
    whileInView: st(),
    whileHover: st(),
    whileTap: st(),
    whileDrag: st(),
    whileFocus: st(),
    exit: st(),
  };
}
class et {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
class Ja extends et {
  constructor(e) {
    super(e), e.animationState || (e.animationState = qa(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    ne(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(),
      (e = this.unmountControls) === null || e === void 0 || e.call(this);
  }
}
let Qa = 0;
class tl extends et {
  constructor() {
    super(...arguments), (this.id = Qa++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const el = { animation: { Feature: Ja }, exit: { Feature: tl } },
  Mi = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1;
function re(t, e = "page") {
  return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
}
const nl = (t) => (e) => Mi(e) && t(e, re(e));
function z(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
function q(t, e, n, s) {
  return z(t, e, nl(n), s);
}
const Kn = (t, e) => Math.abs(t - e);
function sl(t, e) {
  const n = Kn(t.x, e.x),
    s = Kn(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Di {
  constructor(
    e,
    n,
    { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = ve(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          f = sl(h.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !f) return;
        const { point: p } = h,
          { timestamp: v } = L;
        this.history.push({ ...p, timestamp: v });
        const { onStart: T, onMove: y } = this.handlers;
        d ||
          (T && T(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, h);
      }),
      (this.handlePointerMove = (h, d) => {
        (this.lastMoveEvent = h),
          (this.lastMoveEventInfo = ye(d, this.transformPagePoint)),
          V.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (h, d) => {
        this.end();
        const { onEnd: f, onSessionEnd: p, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const T = ve(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ye(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && f && f(h, T), p && p(h, T);
      }),
      !Mi(e))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = s),
      (this.contextWindow = i || window);
    const r = re(e),
      a = ye(r, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = L;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(e, ve(a, this.history)),
      (this.removeListeners = X(
        q(this.contextWindow, "pointermove", this.handlePointerMove),
        q(this.contextWindow, "pointerup", this.handlePointerUp),
        q(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), J(this.updatePoint);
  }
}
function ye(t, e) {
  return e ? { point: e(t.point) } : t;
}
function $n(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function ve({ point: t }, e) {
  return {
    point: t,
    delta: $n(t, Ri(e)),
    offset: $n(t, il(e)),
    velocity: rl(e, 0.1),
  };
}
function il(t) {
  return t[0];
}
function Ri(t) {
  return t[t.length - 1];
}
function rl(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    s = null;
  const i = Ri(t);
  for (; n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > H(e))); ) n--;
  if (!s) return { x: 0, y: 0 };
  const o = Y(i.timestamp - s.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function Ei(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? ((e = t), n) : !1;
  };
}
const Gn = Ei("dragHorizontal"),
  zn = Ei("dragVertical");
function Li(t) {
  let e = !1;
  if (t === "y") e = zn();
  else if (t === "x") e = Gn();
  else {
    const n = Gn(),
      s = zn();
    n && s
      ? (e = () => {
          n(), s();
        })
      : (n && n(), s && s());
  }
  return e;
}
function ji() {
  const t = Li(!0);
  return t ? (t(), !1) : !0;
}
function ht(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
const ki = 1e-4,
  ol = 1 - ki,
  al = 1 + ki,
  Fi = 0.01,
  ll = 0 - Fi,
  cl = 0 + Fi;
function I(t) {
  return t.max - t.min;
}
function ul(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Hn(t, e, n, s = 0.5) {
  (t.origin = s),
    (t.originPoint = M(e.min, e.max, t.origin)),
    (t.scale = I(n) / I(e)),
    (t.translate = M(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= ol && t.scale <= al) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= ll && t.translate <= cl) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function _t(t, e, n, s) {
  Hn(t.x, e.x, n.x, s ? s.originX : void 0),
    Hn(t.y, e.y, n.y, s ? s.originY : void 0);
}
function Yn(t, e, n) {
  (t.min = n.min + e.min), (t.max = t.min + I(e));
}
function hl(t, e, n) {
  Yn(t.x, e.x, n.x), Yn(t.y, e.y, n.y);
}
function Xn(t, e, n) {
  (t.min = e.min - n.min), (t.max = t.min + I(e));
}
function Mt(t, e, n) {
  Xn(t.x, e.x, n.x), Xn(t.y, e.y, n.y);
}
function dl(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? M(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? M(n, t, s.max) : Math.min(t, n)),
    t
  );
}
function qn(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function fl(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: qn(t.x, n, i), y: qn(t.y, e, s) };
}
function Zn(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function pl(t, e) {
  return { x: Zn(t.x, e.x), y: Zn(t.y, e.y) };
}
function ml(t, e) {
  let n = 0.5;
  const s = I(t),
    i = I(e);
  return (
    i > s
      ? (n = gt(e.min, e.max - s, t.min))
      : s > i && (n = gt(t.min, t.max - i, e.min)),
    Q(0, 1, n)
  );
}
function gl(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const Be = 0.35;
function yl(t = Be) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Be),
    { x: Jn(t, "left", "right"), y: Jn(t, "top", "bottom") }
  );
}
function Jn(t, e, n) {
  return { min: Qn(t, e), max: Qn(t, n) };
}
function Qn(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const ts = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  dt = () => ({ x: ts(), y: ts() }),
  es = () => ({ min: 0, max: 0 }),
  R = () => ({ x: es(), y: es() });
function U(t) {
  return [t("x"), t("y")];
}
function Bi({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function vl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function xl(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function xe(t) {
  return t === void 0 || t === 1;
}
function Oe({ scale: t, scaleX: e, scaleY: n }) {
  return !xe(t) || !xe(e) || !xe(n);
}
function it(t) {
  return (
    Oe(t) ||
    Oi(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function Oi(t) {
  return ns(t.x) || ns(t.y);
}
function ns(t) {
  return t && t !== "0%";
}
function Jt(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i;
}
function ss(t, e, n, s, i) {
  return i !== void 0 && (t = Jt(t, i, s)), Jt(t, n, s) + e;
}
function Ie(t, e = 0, n = 1, s, i) {
  (t.min = ss(t.min, e, n, s, i)), (t.max = ss(t.max, e, n, s, i));
}
function Ii(t, { x: e, y: n }) {
  Ie(t.x, e.translate, e.scale, e.originPoint),
    Ie(t.y, n.translate, n.scale, n.originPoint);
}
const is = 0.999999999999,
  rs = 1.0000000000001;
function Tl(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (r = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (s &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        pt(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), Ii(t, r)),
      s && it(o.latestValues) && pt(t, o.latestValues));
  }
  e.x < rs && e.x > is && (e.x = 1), e.y < rs && e.y > is && (e.y = 1);
}
function ft(t, e) {
  (t.min = t.min + e), (t.max = t.max + e);
}
function os(t, e, n, s, i = 0.5) {
  const o = M(t.min, t.max, i);
  Ie(t, e, n, o, s);
}
function pt(t, e) {
  os(t.x, e.x, e.scaleX, e.scale, e.originX),
    os(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Ni(t, e) {
  return Bi(xl(t.getBoundingClientRect(), e));
}
function Pl(t, e, n) {
  const s = Ni(t, n),
    { scroll: i } = e;
  return i && (ft(s.x, i.offset.x), ft(s.y, i.offset.y)), s;
}
const Ui = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  bl = new WeakMap();
class wl {
  constructor(e) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = R()),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const i = (u) => {
        const { dragSnapToOrigin: h } = this.getProps();
        h ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(re(u, "page").point);
      },
      o = (u, h) => {
        const { drag: d, dragPropagation: f, onDragStart: p } = this.getProps();
        if (
          d &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Li(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          U((T) => {
            let y = this.getAxisMotionValue(T).get() || 0;
            if ($.test(y)) {
              const { projection: x } = this.visualElement;
              if (x && x.layout) {
                const g = x.layout.layoutBox[T];
                g && (y = I(g) * (parseFloat(y) / 100));
              }
            }
            this.originPoint[T] = y;
          }),
          p && V.postRender(() => p(u, h)),
          ke(this.visualElement, "transform");
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      r = (u, h) => {
        const {
          dragPropagation: d,
          dragDirectionLock: f,
          onDirectionLock: p,
          onDrag: v,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: T } = h;
        if (f && this.currentDirection === null) {
          (this.currentDirection = Sl(T)),
            this.currentDirection !== null && p && p(this.currentDirection);
          return;
        }
        this.updateAxis("x", h.point, T),
          this.updateAxis("y", h.point, T),
          this.visualElement.render(),
          v && v(u, h);
      },
      a = (u, h) => this.stop(u, h),
      l = () =>
        U((u) => {
          var h;
          return (
            this.getAnimationState(u) === "paused" &&
            ((h = this.getAxisMotionValue(u).animation) === null || h === void 0
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Di(
      e,
      {
        onSessionStart: i,
        onStart: o,
        onMove: r,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: Ui(this.visualElement),
      }
    );
  }
  stop(e, n) {
    const s = this.isDragging;
    if ((this.cancel(), !s)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && V.postRender(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !Wt(e, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints &&
      this.constraints[e] &&
      (r = dl(r, this.constraints[e], this.elastic[e])),
      o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: s } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (e = this.visualElement.projection) === null || e === void 0
          ? void 0
          : e.layout,
      o = this.constraints;
    n && ht(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = fl(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = yl(s)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        U((r) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(r) &&
            (this.constraints[r] = gl(i.layoutBox[r], this.constraints[r]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !ht(e)) return !1;
    const s = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = Pl(s, i.root, this.visualElement.getTransformPagePoint());
    let r = pl(i.layout.layoutBox, o);
    if (n) {
      const a = n(vl(r));
      (this.hasMutatedConstraints = !!a), a && (r = Bi(a));
    }
    return r;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: s,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: r,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = U((u) => {
        if (!Wt(u, n, this.currentDirection)) return;
        let h = (l && l[u]) || {};
        r && (h = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          f = i ? 40 : 1e7,
          p = {
            type: "inertia",
            velocity: s ? e[u] : 0,
            bounceStiffness: d,
            bounceDamping: f,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...h,
          };
        return this.startAxisValueAnimation(u, p);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return (
      ke(this.visualElement, e), s.start(on(e, s, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    U((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    U((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      s = this.visualElement.getProps(),
      i = s[n];
    return (
      i ||
      this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    U((n) => {
      const { drag: s } = this.getProps();
      if (!Wt(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - M(r, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!ht(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    U((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = ml({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      U((r) => {
        if (!Wt(r, e, null)) return;
        const a = this.getAxisMotionValue(r),
          { min: l, max: c } = this.constraints[r];
        a.set(M(l, c, i[r]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    bl.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = q(e, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      s = () => {
        const { dragConstraints: l } = this.getProps();
        ht(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      V.read(s);
    const r = z(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (U((u) => {
              const h = this.getAxisMotionValue(u);
              h &&
                ((this.originPoint[u] += l[u].translate),
                h.set(h.get() + l[u].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: r = Be,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a,
    };
  }
}
function Wt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Sl(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n;
}
class Al extends et {
  constructor(e) {
    super(e),
      (this.removeGroupControls = B),
      (this.removeListeners = B),
      (this.controls = new wl(e));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || B);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const as = (t) => (e, n) => {
  t && V.postRender(() => t(e, n));
};
class Cl extends et {
  constructor() {
    super(...arguments), (this.removePointerDownListener = B);
  }
  onPointerDown(e) {
    this.session = new Di(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ui(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: s,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: as(e),
      onStart: as(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && V.postRender(() => i(o, r));
      },
    };
  }
  mount() {
    this.removePointerDownListener = q(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const oe = m.createContext(null);
function Vl() {
  const t = m.useContext(oe);
  if (t === null) return [!0, null];
  const { isPresent: e, onExitComplete: n, register: s } = t,
    i = m.useId();
  m.useEffect(() => s(i), []);
  const o = m.useCallback(() => n && n(i), [i, n]);
  return !e && n ? [!1, o] : [!0];
}
const hn = m.createContext({}),
  Wi = m.createContext({}),
  zt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ls(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const St = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (w.test(t)) t = parseFloat(t);
        else return t;
      const n = ls(t, e.target.x),
        s = ls(t, e.target.y);
      return `${n}% ${s}%`;
    },
  },
  _l = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = tt.parse(t);
      if (i.length > 5) return s;
      const o = tt.createTransformer(t),
        r = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      (i[0 + r] /= a), (i[1 + r] /= l);
      const c = M(a, l, 0.5);
      return (
        typeof i[2 + r] == "number" && (i[2 + r] /= c),
        typeof i[3 + r] == "number" && (i[3 + r] /= c),
        o(i)
      );
    },
  },
  Qt = {};
function Ml(t) {
  Object.assign(Qt, t);
}
const { schedule: dn, cancel: Du } = $s(queueMicrotask, !1);
class Dl extends m.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
        layoutId: i,
      } = this.props,
      { projection: o } = e;
    Ml(Rl),
      o &&
        (n.group && n.group.add(o),
        s && s.register && i && s.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (zt.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: s,
        drag: i,
        isPresent: o,
      } = this.props,
      r = s.projection;
    return (
      r &&
        ((r.isPresent = o),
        i || e.layoutDependency !== n || n === void 0
          ? r.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== o &&
          (o
            ? r.promote()
            : r.relegate() ||
              V.postRender(() => {
                const a = r.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      dn.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
      } = this.props,
      { projection: i } = e;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Ki(t) {
  const [e, n] = Vl(),
    s = m.useContext(hn);
  return P.jsx(Dl, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: m.useContext(Wi),
    isPresent: e,
    safeToRemove: n,
  });
}
const Rl = {
    borderRadius: {
      ...St,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: St,
    borderTopRightRadius: St,
    borderBottomLeftRadius: St,
    borderBottomRightRadius: St,
    boxShadow: _l,
  },
  $i = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  El = $i.length,
  cs = (t) => (typeof t == "string" ? parseFloat(t) : t),
  us = (t) => typeof t == "number" || w.test(t);
function Ll(t, e, n, s, i, o) {
  i
    ? ((t.opacity = M(0, n.opacity !== void 0 ? n.opacity : 1, jl(s))),
      (t.opacityExit = M(e.opacity !== void 0 ? e.opacity : 1, 0, kl(s))))
    : o &&
      (t.opacity = M(
        e.opacity !== void 0 ? e.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        s
      ));
  for (let r = 0; r < El; r++) {
    const a = `border${$i[r]}Radius`;
    let l = hs(e, a),
      c = hs(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || us(l) === us(c)
        ? ((t[a] = Math.max(M(cs(l), cs(c), s), 0)),
          ($.test(c) || $.test(l)) && (t[a] += "%"))
        : (t[a] = c);
  }
  (e.rotate || n.rotate) && (t.rotate = M(e.rotate || 0, n.rotate || 0, s));
}
function hs(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const jl = Gi(0, 0.5, Zs),
  kl = Gi(0.5, 0.95, B);
function Gi(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(gt(t, e, s)));
}
function ds(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function N(t, e) {
  ds(t.x, e.x), ds(t.y, e.y);
}
function fs(t, e) {
  (t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin);
}
function ps(t, e, n, s, i) {
  return (
    (t -= e), (t = Jt(t, 1 / n, s)), i !== void 0 && (t = Jt(t, 1 / i, s)), t
  );
}
function Fl(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (
    ($.test(e) && ((e = parseFloat(e)), (e = M(r.min, r.max, e / 100) - r.min)),
    typeof e != "number")
  )
    return;
  let a = M(o.min, o.max, s);
  t === o && (a -= e),
    (t.min = ps(t.min, e, n, a, i)),
    (t.max = ps(t.max, e, n, a, i));
}
function ms(t, e, [n, s, i], o, r) {
  Fl(t, e[n], e[s], e[i], e.scale, o, r);
}
const Bl = ["x", "scaleX", "originX"],
  Ol = ["y", "scaleY", "originY"];
function gs(t, e, n, s) {
  ms(t.x, e, Bl, n ? n.x : void 0, s ? s.x : void 0),
    ms(t.y, e, Ol, n ? n.y : void 0, s ? s.y : void 0);
}
function ys(t) {
  return t.translate === 0 && t.scale === 1;
}
function zi(t) {
  return ys(t.x) && ys(t.y);
}
function vs(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Il(t, e) {
  return vs(t.x, e.x) && vs(t.y, e.y);
}
function xs(t, e) {
  return (
    Math.round(t.min) === Math.round(e.min) &&
    Math.round(t.max) === Math.round(e.max)
  );
}
function Hi(t, e) {
  return xs(t.x, e.x) && xs(t.y, e.y);
}
function Ts(t) {
  return I(t.x) / I(t.y);
}
function Ps(t, e) {
  return (
    t.translate === e.translate &&
    t.scale === e.scale &&
    t.originPoint === e.originPoint
  );
}
class Nl {
  constructor() {
    this.members = [];
  }
  add(e) {
    an(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (ln(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      s.instance && s.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = s),
        n && (e.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ul(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x,
    o = t.y.translate / e.y,
    r = n?.z || 0;
  if (
    ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: u,
      rotateX: h,
      rotateY: d,
      skewX: f,
      skewY: p,
    } = n;
    c && (s = `perspective(${c}px) ${s}`),
      u && (s += `rotate(${u}deg) `),
      h && (s += `rotateX(${h}deg) `),
      d && (s += `rotateY(${d}deg) `),
      f && (s += `skewX(${f}deg) `),
      p && (s += `skewY(${p}deg) `);
  }
  const a = t.x.scale * e.x,
    l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const Wl = (t, e) => t.depth - e.depth;
class Kl {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    an(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    ln(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(Wl),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
function Ht(t) {
  const e = F(t) ? t.get() : t;
  return ja(e) ? e.toValue() : e;
}
function $l(t, e) {
  const n = G.now(),
    s = ({ timestamp: i }) => {
      const o = i - n;
      o >= e && (J(s), t(o - e));
    };
  return V.read(s, !0), () => J(s);
}
function Gl(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function zl(t, e, n) {
  const s = F(t) ? t : Lt(t);
  return s.start(on("", s, e, n)), s.animation;
}
const rt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Ct = typeof window < "u" && window.MotionDebug !== void 0,
  Te = ["", "X", "Y", "Z"],
  Hl = { visibility: "hidden" },
  bs = 1e3;
let Yl = 0;
function Pe(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && ((n[t] = i[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
}
function Yi(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = Ci(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", V, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && Yi(s);
}
function Xi({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i,
}) {
  return class {
    constructor(r = {}, a = e?.()) {
      (this.id = Yl++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Ct &&
              (rt.totalNodes =
                rt.resolvedTargetDeltas =
                rt.recalculatedProjection =
                  0),
            this.nodes.forEach(Zl),
            this.nodes.forEach(nc),
            this.nodes.forEach(sc),
            this.nodes.forEach(Jl),
            Ct && window.MotionDebug.record(rt);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = r),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Kl());
    }
    addEventListener(r, a) {
      return (
        this.eventHandlers.has(r) || this.eventHandlers.set(r, new cn()),
        this.eventHandlers.get(r).add(a)
      );
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Gl(r)), (this.instance = r);
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(r),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        t)
      ) {
        let h;
        const d = () => (this.root.updateBlockedByResize = !1);
        t(r, () => {
          (this.root.updateBlockedByResize = !0),
            h && h(),
            (h = $l(d, 250)),
            zt.hasAnimatedSinceResize &&
              ((zt.hasAnimatedSinceResize = !1), this.nodes.forEach(Ss));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: h,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: f,
              layout: p,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || u.getDefaultTransition() || lc,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: y } =
                  u.getProps(),
                x = !this.targetLayout || !Hi(this.targetLayout, p) || f,
                g = !d && f;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (d && (x || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(h, g);
                const S = { ...Ge(v, "layout"), onPlay: T, onComplete: y };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                d || Ss(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = p;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        J(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(ic),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Yi(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        (h.shouldResetTransform = !0),
          h.updateScroll("snapshot"),
          h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        r && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ws);
        return;
      }
      this.isUpdating || this.nodes.forEach(tc),
        (this.isUpdating = !1),
        this.nodes.forEach(ec),
        this.nodes.forEach(Xl),
        this.nodes.forEach(ql),
        this.clearAllSnapshots();
      const a = G.now();
      (L.delta = Q(0, 1e3 / 60, a - L.timestamp)),
        (L.timestamp = a),
        (L.isProcessing = !0),
        de.update.process(L),
        de.preRender.process(L),
        de.render.process(L),
        (L.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), dn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ql), this.sharedNodes.forEach(rc);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        V.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const r = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = R()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          r ? r.layoutBox : void 0
        );
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === r &&
          (a = !1),
        a)
      ) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const r =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !zi(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      r &&
        (a || it(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        r && (l = this.removeTransform(l)),
        cc(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var r;
      const { visualElement: a } = this.options;
      if (!a) return R();
      const l = a.measureViewportBox();
      if (
        !(
          ((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) ||
          this.path.some(uc)
        )
      ) {
        const { scroll: u } = this.root;
        u && (ft(l.x, u.offset.x), ft(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(r) {
      var a;
      const l = R();
      if ((N(l, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot))
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: h, options: d } = u;
        u !== this.root &&
          h &&
          d.layoutScroll &&
          (h.wasRoot && N(l, r), ft(l.x, h.offset.x), ft(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(r, a = !1) {
      const l = R();
      N(l, r);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          pt(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          it(u.latestValues) && pt(l, u.latestValues);
      }
      return it(this.latestValues) && pt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = R();
      N(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !it(c.latestValues)) continue;
        Oe(c.latestValues) && c.updateSnapshot();
        const u = R(),
          h = c.measurePageBox();
        N(u, h),
          gs(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return it(this.latestValues) && gs(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      (this.targetDelta = r),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== L.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          r ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: h, layoutId: d } = this.options;
      if (!(!this.layout || !(h || d))) {
        if (
          ((this.resolvedRelativeTargetAt = L.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1
            ? ((this.relativeParent = f),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = R()),
              (this.relativeTargetOrigin = R()),
              Mt(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                f.layout.layoutBox
              ),
              N(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = R()), (this.targetWithTransforms = R())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                hl(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : N(this.target, this.layout.layoutBox),
                Ii(this.target, this.targetDelta))
              : N(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const f = this.getClosestProjectingParent();
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = f),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = R()),
                (this.relativeTargetOrigin = R()),
                Mt(this.relativeTargetOrigin, this.target, f.target),
                N(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ct && rt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Oe(this.parent.latestValues) ||
          Oi(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var r;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((r = this.parent) === null || r === void 0) &&
            r.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === L.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: u, layoutId: h } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || h))
      )
        return;
      N(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      Tl(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = R()));
      const { target: p } = a;
      if (!p) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (fs(this.prevProjectionDelta.x, this.projectionDelta.x),
          fs(this.prevProjectionDelta.y, this.projectionDelta.y)),
        _t(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !Ps(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Ps(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)),
        Ct && rt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        r)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = dt()),
        (this.projectionDelta = dt()),
        (this.projectionDeltaWithTransform = dt());
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        h = dt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = R(),
        f = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        v = f !== p,
        T = this.getStack(),
        y = !T || T.members.length <= 1,
        x = !!(v && !y && this.options.crossfade === !0 && !this.path.some(ac));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        As(h.x, r.x, C),
          As(h.y, r.y, C),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Mt(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            oc(this.relativeTarget, this.relativeTargetOrigin, d, C),
            g && Il(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = R()),
            N(g, this.relativeTarget)),
          v &&
            ((this.animationValues = u), Ll(u, c, this.latestValues, C, x, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (J(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = V.update(() => {
          (zt.hasAnimatedSinceResize = !0),
            (this.currentAnimation = zl(0, bs, {
              ...r,
              onUpdate: (a) => {
                this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
              },
              onComplete: () => {
                r.onComplete && r.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const r = this.getStack();
      r && r.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(bs),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u,
      } = r;
      if (!(!a || !l || !c)) {
        if (
          this !== r &&
          this.layout &&
          c &&
          qi(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || R();
          const h = I(this.layout.layoutBox.x);
          (l.x.min = r.target.x.min), (l.x.max = l.x.min + h);
          const d = I(this.layout.layoutBox.y);
          (l.y.min = r.target.y.min), (l.y.max = l.y.min + d);
        }
        N(a, l),
          pt(a, u),
          _t(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Nl()),
        this.sharedNodes.get(r).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var r;
      const { layoutId: a } = this.options;
      return a
        ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var r;
      const { layoutId: a } = this.options;
      return a
        ? (r = this.getStack()) === null || r === void 0
          ? void 0
          : r.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let a = !1;
      const { latestValues: l } = r;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && Pe("z", r, c, this.animationValues);
      for (let u = 0; u < Te.length; u++)
        Pe(`rotate${Te[u]}`, r, c, this.animationValues),
          Pe(`skew${Te[u]}`, r, c, this.animationValues);
      r.render();
      for (const u in c)
        r.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Hl;
      const c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Ht(r?.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Ht(r?.pointerEvents) || "")),
          this.hasProjected &&
            !it(this.latestValues) &&
            ((v.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = Ul(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        u && (c.transform = u(d, c.transform));
      const { x: f, y: p } = this.projectionDelta;
      (c.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`),
        h.animationValues
          ? (c.opacity =
              h === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (c.opacity =
              h === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in Qt) {
        if (d[v] === void 0) continue;
        const { correct: T, applyTo: y } = Qt[v],
          x = c.transform === "none" ? d[v] : T(d[v], h);
        if (y) {
          const g = y.length;
          for (let S = 0; S < g; S++) c[y[S]] = x;
        } else c[v] = x;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = h === this ? Ht(r?.pointerEvents) || "" : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(ws),
        this.root.sharedNodes.clear();
    }
  };
}
function Xl(t) {
  t.updateLayout();
}
function ql(t) {
  var e;
  const n =
    ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout,
      { animationType: o } = t.options,
      r = n.source !== t.layout.source;
    o === "size"
      ? U((h) => {
          const d = r ? n.measuredBox[h] : n.layoutBox[h],
            f = I(d);
          (d.min = s[h].min), (d.max = d.min + f);
        })
      : qi(o, n.layoutBox, s) &&
        U((h) => {
          const d = r ? n.measuredBox[h] : n.layoutBox[h],
            f = I(s[h]);
          (d.max = d.min + f),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[h].max = t.relativeTarget[h].min + f));
        });
    const a = dt();
    _t(a, s, n.layoutBox);
    const l = dt();
    r ? _t(l, t.applyTransform(i, !0), n.measuredBox) : _t(l, s, n.layoutBox);
    const c = !zi(a);
    let u = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: f } = h;
        if (d && f) {
          const p = R();
          Mt(p, n.layoutBox, d.layoutBox);
          const v = R();
          Mt(v, s, f.layoutBox),
            Hi(p, v) || (u = !0),
            h.options.layoutRoot &&
              ((t.relativeTarget = v),
              (t.relativeTargetOrigin = p),
              (t.relativeParent = h));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function Zl(t) {
  Ct && rt.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Jl(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Ql(t) {
  t.clearSnapshot();
}
function ws(t) {
  t.clearMeasurements();
}
function tc(t) {
  t.isLayoutDirty = !1;
}
function ec(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function Ss(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function nc(t) {
  t.resolveTargetDelta();
}
function sc(t) {
  t.calcProjection();
}
function ic(t) {
  t.resetSkewAndRotation();
}
function rc(t) {
  t.removeLeadSnapshot();
}
function As(t, e, n) {
  (t.translate = M(e.translate, 0, n)),
    (t.scale = M(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function Cs(t, e, n, s) {
  (t.min = M(e.min, n.min, s)), (t.max = M(e.max, n.max, s));
}
function oc(t, e, n, s) {
  Cs(t.x, e.x, n.x, s), Cs(t.y, e.y, n.y, s);
}
function ac(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const lc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Vs = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  _s = Vs("applewebkit/") && !Vs("chrome/") ? Math.round : B;
function Ms(t) {
  (t.min = _s(t.min)), (t.max = _s(t.max));
}
function cc(t) {
  Ms(t.x), Ms(t.y);
}
function qi(t, e, n) {
  return (
    t === "position" || (t === "preserve-aspect" && !ul(Ts(e), Ts(n), 0.2))
  );
}
function uc(t) {
  var e;
  return (
    t !== t.root &&
    ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
  );
}
const hc = Xi({
    attachResizeListener: (t, e) => z(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  be = { current: void 0 },
  Zi = Xi({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!be.current) {
        const t = new hc({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (be.current = t);
      }
      return be.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  dc = {
    pan: { Feature: Cl },
    drag: { Feature: Al, ProjectionNode: Zi, MeasureLayout: Ki },
  };
function Ds(t, e) {
  const n = e ? "pointerenter" : "pointerleave",
    s = e ? "onHoverStart" : "onHoverEnd",
    i = (o, r) => {
      if (o.pointerType === "touch" || ji()) return;
      const a = t.getProps();
      t.animationState &&
        a.whileHover &&
        t.animationState.setActive("whileHover", e);
      const l = a[s];
      l && V.postRender(() => l(o, r));
    };
  return q(t.current, n, i, { passive: !t.getProps()[s] });
}
class fc extends et {
  mount() {
    this.unmount = X(Ds(this.node, !0), Ds(this.node, !1));
  }
  unmount() {}
}
class pc extends et {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = X(
      z(this.node.current, "focus", () => this.onFocus()),
      z(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Ji = (t, e) => (e ? (t === e ? !0 : Ji(t, e.parentElement)) : !1);
function we(t, e) {
  if (!e) return;
  const n = new PointerEvent("pointer" + t);
  e(n, re(n));
}
class mc extends et {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = B),
      (this.removeEndListeners = B),
      (this.removeAccessibleListeners = B),
      (this.startPointerPress = (e, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const s = this.node.getProps(),
          o = q(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: c,
                  onTapCancel: u,
                  globalTapTarget: h,
                } = this.node.getProps(),
                d = !h && !Ji(this.node.current, a.target) ? u : c;
              d && V.update(() => d(a, l));
            },
            { passive: !(s.onTap || s.onPointerUp) }
          ),
          r = q(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(s.onTapCancel || s.onPointerCancel),
          });
        (this.removeEndListeners = X(o, r)), this.startPress(e, n);
      }),
      (this.startAccessiblePress = () => {
        const e = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const r = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                we("up", (l, c) => {
                  const { onTap: u } = this.node.getProps();
                  u && V.postRender(() => u(l, c));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = z(this.node.current, "keyup", r)),
              we("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = z(this.node.current, "keydown", e),
          s = () => {
            this.isPressing && we("cancel", (o, r) => this.cancelPress(o, r));
          },
          i = z(this.node.current, "blur", s);
        this.removeAccessibleListeners = X(n, i);
      });
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: s, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      s && V.postRender(() => s(e, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !ji()
    );
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: s } = this.node.getProps();
    s && V.postRender(() => s(e, n));
  }
  mount() {
    const e = this.node.getProps(),
      n = q(
        e.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(e.onTapStart || e.onPointerStart) }
      ),
      s = z(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = X(n, s);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Ne = new WeakMap(),
  Se = new WeakMap(),
  gc = (t) => {
    const e = Ne.get(t.target);
    e && e(t);
  },
  yc = (t) => {
    t.forEach(gc);
  };
function vc({ root: t, ...e }) {
  const n = t || document;
  Se.has(n) || Se.set(n, {});
  const s = Se.get(n),
    i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(yc, { root: t, ...e })), s[i];
}
function xc(t, e, n) {
  const s = vc(e);
  return (
    Ne.set(t, n),
    s.observe(t),
    () => {
      Ne.delete(t), s.unobserve(t);
    }
  );
}
const Tc = { some: 0, all: 1 };
class Pc extends et {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = "some", once: o } = e,
      r = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == "number" ? i : Tc[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), o && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(),
          d = c ? u : h;
        d && d(l);
      };
    return xc(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(bc(e, n)) && this.startObserver();
  }
  unmount() {}
}
function bc({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const wc = {
    inView: { Feature: Pc },
    tap: { Feature: mc },
    focus: { Feature: pc },
    hover: { Feature: fc },
  },
  Sc = { layout: { ProjectionNode: Zi, MeasureLayout: Ki } },
  fn = m.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  }),
  ae = m.createContext({}),
  pn = typeof window < "u",
  Qi = pn ? m.useLayoutEffect : m.useEffect,
  tr = m.createContext({ strict: !1 });
function Ac(t, e, n, s, i) {
  var o, r;
  const { visualElement: a } = m.useContext(ae),
    l = m.useContext(tr),
    c = m.useContext(oe),
    u = m.useContext(fn).reducedMotion,
    h = m.useRef();
  (s = s || l.renderer),
    !h.current &&
      s &&
      (h.current = s(t, {
        visualState: e,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const d = h.current,
    f = m.useContext(Wi);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    Cc(h.current, n, i, f);
  const p = m.useRef(!1);
  m.useInsertionEffect(() => {
    d && p.current && d.update(n, c);
  });
  const v = n[Ai],
    T = m.useRef(
      !!v &&
        !(
          !((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(window, v)
        ) &&
        ((r = window.MotionHasOptimisedAnimation) === null || r === void 0
          ? void 0
          : r.call(window, v))
    );
  return (
    Qi(() => {
      d &&
        ((p.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        dn.render(d.render),
        T.current && d.animationState && d.animationState.animateChanges());
    }),
    m.useEffect(() => {
      d &&
        (!T.current && d.animationState && d.animationState.animateChanges(),
        T.current &&
          (queueMicrotask(() => {
            var y;
            (y = window.MotionHandoffMarkAsComplete) === null ||
              y === void 0 ||
              y.call(window, v);
          }),
          (T.current = !1)));
    }),
    d
  );
}
function Cc(t, e, n, s) {
  const {
    layoutId: i,
    layout: o,
    drag: r,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
  } = e;
  (t.projection = new n(
    t.latestValues,
    e["data-framer-portal-id"] ? void 0 : er(t.parent)
  )),
    t.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!r || (a && ht(a)),
      visualElement: t,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: s,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function er(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : er(t.parent);
}
function Vc(t, e, n) {
  return m.useCallback(
    (s) => {
      s && t.mount && t.mount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == "function" ? n(s) : ht(n) && (n.current = s));
    },
    [e]
  );
}
function le(t) {
  return ne(t.animate) || $e.some((e) => Dt(t[e]));
}
function nr(t) {
  return !!(le(t) || t.variants);
}
function _c(t, e) {
  if (le(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Dt(n) ? n : void 0,
      animate: Dt(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Mc(t) {
  const { initial: e, animate: n } = _c(t, m.useContext(ae));
  return m.useMemo(() => ({ initial: e, animate: n }), [Rs(e), Rs(n)]);
}
function Rs(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Es = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  yt = {};
for (const t in Es) yt[t] = { isEnabled: (e) => Es[t].some((n) => !!e[n]) };
function Dc(t) {
  for (const e in t) yt[e] = { ...yt[e], ...t[e] };
}
const Rc = Symbol.for("motionComponentSymbol");
function Ec({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: s,
  Component: i,
}) {
  t && Dc(t);
  function o(a, l) {
    let c;
    const u = { ...m.useContext(fn), ...a, layoutId: Lc(a) },
      { isStatic: h } = u,
      d = Mc(a),
      f = s(a, h);
    if (!h && pn) {
      jc();
      const p = kc(u);
      (c = p.MeasureLayout),
        (d.visualElement = Ac(i, f, u, e, p.ProjectionNode));
    }
    return P.jsxs(ae.Provider, {
      value: d,
      children: [
        c && d.visualElement
          ? P.jsx(c, { visualElement: d.visualElement, ...u })
          : null,
        n(i, a, Vc(f, d.visualElement, l), f, h, d.visualElement),
      ],
    });
  }
  const r = m.forwardRef(o);
  return (r[Rc] = i), r;
}
function Lc({ layoutId: t }) {
  const e = m.useContext(hn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function jc(t, e) {
  m.useContext(tr).strict;
}
function kc(t) {
  const { drag: e, layout: n } = yt;
  if (!e && !n) return {};
  const s = { ...e, ...n };
  return {
    MeasureLayout:
      e?.isEnabled(t) || n?.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
const Fc = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function mn(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(Fc.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function sr(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const o in n) t.style.setProperty(o, n[o]);
}
const ir = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function rr(t, e, n, s) {
  sr(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(ir.has(i) ? i : un(i), e.attrs[i]);
}
function or(t, { layout: e, layoutId: n }) {
  return (
    ct.has(t) ||
    t.startsWith("origin") ||
    ((e || n !== void 0) && (!!Qt[t] || t === "opacity"))
  );
}
function gn(t, e, n) {
  var s;
  const { style: i } = t,
    o = {};
  for (const r in i)
    (F(i[r]) ||
      (e.style && F(e.style[r])) ||
      or(r, t) ||
      ((s = n?.getValue(r)) === null || s === void 0 ? void 0 : s.liveStyle) !==
        void 0) &&
      (o[r] = i[r]);
  return o;
}
function ar(t, e, n) {
  const s = gn(t, e, n);
  for (const i in t)
    if (F(t[i]) || F(e[i])) {
      const o =
        kt.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      s[o] = t[i];
    }
  return s;
}
function yn(t) {
  const e = m.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
function Bc(
  { scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n },
  s,
  i,
  o
) {
  const r = { latestValues: Oc(s, i, o, t), renderState: e() };
  return n && (r.mount = (a) => n(s, a, r)), r;
}
const lr = (t) => (e, n) => {
  const s = m.useContext(ae),
    i = m.useContext(oe),
    o = () => Bc(t, e, s, i);
  return n ? o() : yn(o);
};
function Oc(t, e, n, s) {
  const i = {},
    o = s(t, {});
  for (const d in o) i[d] = Ht(o[d]);
  let { initial: r, animate: a } = t;
  const l = le(t),
    c = nr(t);
  e &&
    c &&
    !l &&
    t.inherit !== !1 &&
    (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const h = u ? a : r;
  if (h && typeof h != "boolean" && !ne(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let f = 0; f < d.length; f++) {
      const p = We(t, d[f]);
      if (p) {
        const { transitionEnd: v, transition: T, ...y } = p;
        for (const x in y) {
          let g = y[x];
          if (Array.isArray(g)) {
            const S = u ? g.length - 1 : 0;
            g = g[S];
          }
          g !== null && (i[x] = g);
        }
        for (const x in v) i[x] = v[x];
      }
    }
  }
  return i;
}
const vn = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  cr = () => ({ ...vn(), attrs: {} }),
  ur = (t, e) => (e && typeof t == "number" ? e.transform(t) : t),
  Ic = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Nc = kt.length;
function Uc(t, e, n) {
  let s = "",
    i = !0;
  for (let o = 0; o < Nc; o++) {
    const r = kt[o],
      a = t[r];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (r.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const c = ur(a, Je[r]);
      if (!l) {
        i = !1;
        const u = Ic[r] || r;
        s += `${u}(${c}) `;
      }
      n && (e[r] = c);
    }
  }
  return (s = s.trim()), n ? (s = n(e, i ? "" : s)) : i && (s = "none"), s;
}
function xn(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1,
    a = !1;
  for (const l in e) {
    const c = e[l];
    if (ct.has(l)) {
      r = !0;
      continue;
    } else if (ni(l)) {
      i[l] = c;
      continue;
    } else {
      const u = ur(c, Je[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = u)) : (s[l] = u);
    }
  }
  if (
    (e.transform ||
      (r || n
        ? (s.transform = Uc(e, t.transform, n))
        : s.transform && (s.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = o;
    s.transformOrigin = `${l} ${c} ${u}`;
  }
}
function Ls(t, e, n) {
  return typeof t == "string" ? t : w.transform(e + n * t);
}
function Wc(t, e, n) {
  const s = Ls(e, t.x, t.width),
    i = Ls(n, t.y, t.height);
  return `${s} ${i}`;
}
const Kc = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  $c = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Gc(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? Kc : $c;
  t[o.offset] = w.transform(-s);
  const r = w.transform(e),
    a = w.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Tn(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: s,
    originX: i,
    originY: o,
    pathLength: r,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  h
) {
  if ((xn(t, c, h), u)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: d, style: f, dimensions: p } = t;
  d.transform && (p && (f.transform = d.transform), delete d.transform),
    p &&
      (i !== void 0 || o !== void 0 || f.transform) &&
      (f.transformOrigin = Wc(
        p,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    e !== void 0 && (d.x = e),
    n !== void 0 && (d.y = n),
    s !== void 0 && (d.scale = s),
    r !== void 0 && Gc(d, r, a, l, !1);
}
const Pn = (t) => typeof t == "string" && t.toLowerCase() === "svg",
  zc = {
    useVisualState: lr({
      scrapeMotionValuesFromProps: ar,
      createRenderState: cr,
      onMount: (t, e, { renderState: n, latestValues: s }) => {
        V.read(() => {
          try {
            n.dimensions =
              typeof e.getBBox == "function"
                ? e.getBBox()
                : e.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          V.render(() => {
            Tn(n, s, Pn(e.tagName), t.transformTemplate), rr(e, n);
          });
      },
    }),
  },
  Hc = {
    useVisualState: lr({
      scrapeMotionValuesFromProps: gn,
      createRenderState: vn,
    }),
  };
function hr(t, e, n) {
  for (const s in e) !F(e[s]) && !or(s, n) && (t[s] = e[s]);
}
function Yc({ transformTemplate: t }, e) {
  return m.useMemo(() => {
    const n = vn();
    return xn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Xc(t, e) {
  const n = t.style || {},
    s = {};
  return hr(s, n, t), Object.assign(s, Yc(t, e)), s;
}
function qc(t, e) {
  const n = {},
    s = Xc(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((n.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (n.tabIndex = 0),
    (n.style = s),
    n
  );
}
const Zc = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function te(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    Zc.has(t)
  );
}
let dr = (t) => !te(t);
function Jc(t) {
  t && (dr = (e) => (e.startsWith("on") ? !te(e) : t(e)));
}
try {
  Jc(require("@emotion/is-prop-valid").default);
} catch {}
function Qc(t, e, n) {
  const s = {};
  for (const i in t)
    (i === "values" && typeof t.values == "object") ||
      ((dr(i) ||
        (n === !0 && te(i)) ||
        (!e && !te(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (s[i] = t[i]));
  return s;
}
function tu(t, e, n, s) {
  const i = m.useMemo(() => {
    const o = cr();
    return (
      Tn(o, e, Pn(s), t.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [e]);
  if (t.style) {
    const o = {};
    hr(o, t.style, t), (i.style = { ...o, ...i.style });
  }
  return i;
}
function eu(t = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const l = (mn(n) ? tu : qc)(s, o, r, n),
      c = Qc(s, typeof n == "string", t),
      u = n !== m.Fragment ? { ...c, ...l, ref: i } : {},
      { children: h } = s,
      d = m.useMemo(() => (F(h) ? h.get() : h), [h]);
    return m.createElement(n, { ...u, children: d });
  };
}
function nu(t, e) {
  return function (s, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const r = {
      ...(mn(s) ? zc : Hc),
      preloadedFeatures: t,
      useRender: eu(i),
      createVisualElement: e,
      Component: s,
    };
    return Ec(r);
  };
}
const Ue = { current: null },
  fr = { current: !1 };
function su() {
  if (((fr.current = !0), !!pn))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (Ue.current = t.matches);
      t.addListener(e), e();
    } else Ue.current = !1;
}
function iu(t, e, n) {
  for (const s in e) {
    const i = e[s],
      o = n[s];
    if (F(i)) t.addValue(s, i);
    else if (F(o)) t.addValue(s, Lt(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, Lt(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n) e[s] === void 0 && t.removeValue(s);
  return e;
}
const js = new WeakMap(),
  ru = [...ri, k, tt],
  ou = (t) => ru.find(ii(t)),
  ks = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class au {
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: s,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: r,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Xe),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = G.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), V.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: c } = r;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = le(n)),
      (this.isVariantNode = nr(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const d in h) {
      const f = h[d];
      l[d] !== void 0 && F(f) && f.set(l[d], !1);
    }
  }
  mount(e) {
    (this.current = e),
      js.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, s) => this.bindToMotionValue(s, n)),
      fr.current || su(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ue.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    js.delete(this.current),
      this.projection && this.projection.unmount(),
      J(this.notifyUpdate),
      J(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = ct.has(e),
      i = n.on("change", (a) => {
        (this.latestValues[e] = a),
          this.props.onUpdate && V.preRender(this.notifyUpdate),
          s && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let r;
    window.MotionCheckAppearSync &&
      (r = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
        i(), o(), r && r(), n.owner && n.stop();
      });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in yt) {
      const n = yt[e];
      if (!n) continue;
      const { isEnabled: s, Feature: i } = n;
      if (
        (!this.features[e] &&
          i &&
          s(this.props) &&
          (this.features[e] = new i(this)),
        this.features[e])
      ) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : R();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let s = 0; s < ks.length; s++) {
      const i = ks[s];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    (this.prevMotionValues = iu(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s &&
      (s && this.removeValue(e),
      this.bindToMotionValue(e, n),
      this.values.set(e, n),
      (this.latestValues[e] = n.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
        n !== void 0 &&
        ((s = Lt(n === null ? void 0 : n, { owner: this })),
        this.addValue(e, s)),
      s
    );
  }
  readValue(e, n) {
    var s;
    let i =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (s = this.getBaseTargetFromProps(this.props, e)) !== null &&
          s !== void 0
        ? s
        : this.readValueFromInstance(this.current, e, this.options);
    return (
      i != null &&
        (typeof i == "string" && (ti(i) || Qs(i))
          ? (i = parseFloat(i))
          : !ou(i) && tt.test(n) && (i = fi(e, n)),
        this.setBaseTarget(e, F(i) ? i.get() : i)),
      F(i) ? i.get() : i
    );
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var n;
    const { initial: s } = this.props;
    let i;
    if (typeof s == "string" || typeof s == "object") {
      const r = We(
        this.props,
        s,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      r && (i = r[e]);
    }
    if (s && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !F(o)
      ? o
      : this.initialValues[e] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new cn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class pr extends au {
  constructor() {
    super(...arguments), (this.KeyframeResolver = pi);
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
}
function lu(t) {
  return window.getComputedStyle(t);
}
class cu extends pr {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = sr);
  }
  readValueFromInstance(e, n) {
    if (ct.has(n)) {
      const s = Qe(n);
      return (s && s.default) || 0;
    } else {
      const s = lu(e),
        i = (ni(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Ni(e, n);
  }
  build(e, n, s) {
    xn(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return gn(e, n, s);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    F(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class uu extends pr {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = R);
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (ct.has(n)) {
      const s = Qe(n);
      return (s && s.default) || 0;
    }
    return (n = ir.has(n) ? n : un(n)), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return ar(e, n, s);
  }
  build(e, n, s) {
    Tn(e, n, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(e, n, s, i) {
    rr(e, n, s, i);
  }
  mount(e) {
    (this.isSVGTag = Pn(e.tagName)), super.mount(e);
  }
}
const hu = (t, e) =>
    mn(t) ? new uu(e) : new cu(e, { allowProjection: t !== m.Fragment }),
  du = nu({ ...el, ...wc, ...dc, ...Sc }, hu),
  Fs = Gr(du);
class fu extends m.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current;
      (s.height = n.offsetHeight || 0),
        (s.width = n.offsetWidth || 0),
        (s.top = n.offsetTop),
        (s.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function pu({ children: t, isPresent: e }) {
  const n = m.useId(),
    s = m.useRef(null),
    i = m.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = m.useContext(fn);
  return (
    m.useInsertionEffect(() => {
      const { width: r, height: a, top: l, left: c } = i.current;
      if (e || !s.current || !r || !a) return;
      s.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        o && (u.nonce = o),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [e]),
    P.jsx(fu, {
      isPresent: e,
      childRef: s,
      sizeRef: i,
      children: m.cloneElement(t, { ref: s }),
    })
  );
}
const mu = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: s,
  custom: i,
  presenceAffectsLayout: o,
  mode: r,
}) => {
  const a = yn(gu),
    l = m.useId(),
    c = m.useCallback(
      (h) => {
        a.set(h, !0);
        for (const d of a.values()) if (!d) return;
        s && s();
      },
      [a, s]
    ),
    u = m.useMemo(
      () => ({
        id: l,
        initial: e,
        isPresent: n,
        custom: i,
        onExitComplete: c,
        register: (h) => (a.set(h, !1), () => a.delete(h)),
      }),
      o ? [Math.random(), c] : [n, c]
    );
  return (
    m.useMemo(() => {
      a.forEach((h, d) => a.set(d, !1));
    }, [n]),
    m.useEffect(() => {
      !n && !a.size && s && s();
    }, [n]),
    r === "popLayout" && (t = P.jsx(pu, { isPresent: n, children: t })),
    P.jsx(oe.Provider, { value: u, children: t })
  );
};
function gu() {
  return new Map();
}
const Kt = (t) => t.key || "";
function Bs(t) {
  const e = [];
  return (
    m.Children.forEach(t, (n) => {
      m.isValidElement(n) && e.push(n);
    }),
    e
  );
}
const yu = ({
  children: t,
  exitBeforeEnter: e,
  custom: n,
  initial: s = !0,
  onExitComplete: i,
  presenceAffectsLayout: o = !0,
  mode: r = "sync",
}) => {
  const a = m.useMemo(() => Bs(t), [t]),
    l = a.map(Kt),
    c = m.useRef(!0),
    u = m.useRef(a),
    h = yn(() => new Map()),
    [d, f] = m.useState(a),
    [p, v] = m.useState(a);
  Qi(() => {
    (c.current = !1), (u.current = a);
    for (let x = 0; x < p.length; x++) {
      const g = Kt(p[x]);
      l.includes(g) ? h.delete(g) : h.get(g) !== !0 && h.set(g, !1);
    }
  }, [p, l.length, l.join("-")]);
  const T = [];
  if (a !== d) {
    let x = [...a];
    for (let g = 0; g < p.length; g++) {
      const S = p[g],
        C = Kt(S);
      l.includes(C) || (x.splice(g, 0, S), T.push(S));
    }
    r === "wait" && T.length && (x = T), v(Bs(x)), f(a);
    return;
  }
  const { forceRender: y } = m.useContext(hn);
  return P.jsx(P.Fragment, {
    children: p.map((x) => {
      const g = Kt(x),
        S = a === p || l.includes(g),
        C = () => {
          if (h.has(g)) h.set(g, !0);
          else return;
          let b = !0;
          h.forEach((_) => {
            _ || (b = !1);
          }),
            b && (y?.(), v(u.current), i && i());
        };
      return P.jsx(
        mu,
        {
          isPresent: S,
          initial: !c.current || s ? void 0 : !1,
          custom: S ? void 0 : n,
          presenceAffectsLayout: o,
          mode: r,
          onExitComplete: S ? void 0 : C,
          children: x,
        },
        g
      );
    }),
  });
};
function vu() {
  const [t, e] = m.useState([]),
    n = m.useCallback(
      (r) => {
        if (r) return t.some((a) => a.id === r.id);
      },
      [t]
    ),
    s = (r) => {
      e([...t, r]);
    },
    i = (r) => {
      r && e(t.filter((a) => a.id !== r.id));
    },
    o = (r) => {
      Notification.requestPermission().then((a) => {
        if (a === "granted") {
          const l = new Notification("Notificaciones activadas!", {
            body: `El curso ${r.title} tiene notificaciones activadas`,
            icon: "/favicon.ico",
          });
          (l.onclick = () => {
            window.focus();
          }),
            setTimeout(() => {
              l.close();
            }, 5e3),
            s(r);
        }
      });
    };
  return (
    m.useEffect(() => {
      const r = localStorage.getItem("courses");
      if (r)
        try {
          e(JSON.parse(r));
        } catch {
          localStorage.removeItem("courses"), e([]);
        }
    }, []),
    m.useEffect(() => {
      localStorage.setItem("courses", JSON.stringify(t));
    }, [t]),
    {
      addCourse: s,
      disableCourse: i,
      enableNotifications: o,
      isNotifications: n,
    }
  );
}
function xu({ open: t, onClose: e, course: n, removeCourse: s }) {
  const {
      addCourse: i,
      disableCourse: o,
      enableNotifications: r,
      isNotifications: a,
    } = vu(),
    l = a(n),
    [c, u] = m.useState(window.innerWidth < 768),
    h = () => {
      t
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset");
    };
  return (
    m.useEffect(() => {
      const d = () => {
        u(window.innerWidth < 768);
      };
      return (
        window.addEventListener("resize", d),
        h(),
        () => {
          (document.body.style.overflow = "unset"),
            window.removeEventListener("resize", d);
        }
      );
    }, []),
    m.useEffect(() => {
      h();
    }, [t]),
    P.jsx(yu, {
      children:
        t &&
        P.jsx(Fs.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: c ? { duration: 0.4 } : { duration: 0.2 },
          className: wt.course__inspector__Wrapper,
          children: P.jsxs(Fs.section, {
            initial: c ? { x: "-100%" } : { scale: 0.5 },
            animate: c ? { x: 0 } : { scale: 1 },
            exit: c ? { x: "-100%" } : { scale: 0.5 },
            transition: { duration: 0.2 },
            className: wt.course__inspector,
            children: [
              P.jsxs("section", {
                className: wt.course__inspector__header,
                children: [
                  P.jsx("h4", { children: "Detalles del curso" }),
                  P.jsx("button", {
                    className: wt.course__inspector__close,
                    onClick: e,
                    children: P.jsx(Mr, {}),
                  }),
                ],
              }),
              P.jsx("h5", {
                className: wt.course__inspector__title,
                style: { backgroundColor: n.color },
                children: n.title,
              }),
              P.jsxs("p", {
                className: "mt-2",
                children: [
                  P.jsx("b", { children: "Nivel:" }),
                  " ",
                  n.level,
                  P.jsx("br", {}),
                  P.jsx("b", { children: "Horas:" }),
                  " ",
                  n.duration * 7 * 24,
                  P.jsx("br", {}),
                  P.jsx("b", { children: "Inscripto desde:" }),
                  " ",
                  n.inscripted_at.toLocaleDateString(),
                ],
              }),
              P.jsx("p", {
                className: "mt-2",
                children: P.jsx("b", { children: "Horarios" }),
              }),
              P.jsx("ul", {
                children: n.classes.map((d) =>
                  P.jsxs(
                    "li",
                    {
                      children: [
                        "Todos los ",
                        P.jsx("b", { children: Ae[d.day] }),
                        " de ",
                        d.start_hour,
                        " a",
                        " ",
                        d.end_hour,
                      ],
                    },
                    d.day
                  )
                ),
              }),
              P.jsxs("section", {
                children: [
                  P.jsx("button", {
                    className: "btn btn-danger",
                    onClick: () => {
                      s(n), l && o(n), e();
                    },
                    children: "Anular inscripción",
                  }),
                  l
                    ? P.jsx("button", {
                        onClick: () => {
                          o(n);
                        },
                        className: "btn btn-primery",
                        children: P.jsx(Ar, {}),
                      })
                    : P.jsx("button", {
                        onClick: () => {
                          r(n);
                        },
                        className: "btn btn-primery",
                        children: P.jsx(Cr, {}),
                      }),
                ],
              }),
            ],
          }),
        }),
    })
  );
}
function Tu({
  year: t,
  month: e,
  courses: n,
  closeInspector: s,
  handleInspector: i,
  inspector: o,
  inspectorCourse: r,
}) {
  const [a, l] = m.useState(window.innerWidth < 1320),
    c = new Date(t, e, 1),
    u = new Date(t, e + 1, 0),
    h = (c.getDay() + 6) % 7,
    d = u.getDate(),
    f = new Date(t, e, 0).getDate(),
    p = Array.from({ length: h }, (b, _) => ({
      day: f - h + _ + 1,
      isPrevMonth: !0,
      month: e - 1,
      year: e === 0 ? t - 1 : t,
    })),
    v = Array.from({ length: d }, (b, _) => ({
      day: _ + 1,
      isCurrentMonth: !0,
      month: e,
      year: t,
    })),
    y = (7 - ((p.length + v.length) % 7)) % 7,
    x = Array.from({ length: y }, (b, _) => ({
      day: _ + 1,
      isNextMonth: !0,
      month: e + 1 > 11 ? 0 : e + 1,
      year: e === 11 ? t + 1 : t,
    })),
    g = (b) =>
      S(b)?.filter((A) => A.classes.some((D) => D.day === b.dayOfWeek)),
    S = (b) =>
      n?.filter((_) => {
        const A = new Date(b.year, b.month, b.day),
          D = new Date(A).getTime(),
          j = _.inscripted_at.getTime(),
          K = _.end_date.getTime();
        return D >= j && D <= K;
      }),
    C = [...p, ...v, ...x]
      .map((b) => {
        const A = new Date(b.year, b.month, b.day).getDay(),
          D = g({ ...b, dayOfWeek: A });
        return { ...b, courses: D, dayOfWeek: A };
      })
      .filter((b) => (a ? b.courses?.length : !0));
  return (
    m.useEffect(() => {
      const b = () => {
        l(window.innerWidth < 1320);
      };
      return (
        window.addEventListener("resize", b),
        () => {
          window.removeEventListener("resize", b);
        }
      );
    }, []),
    P.jsx("div", {
      children: P.jsx("div", {
        className: nt(W.calendar, W.loading),
        children: C.map(
          (
            {
              day: b,
              isPrevMonth: _,
              isCurrentMonth: A,
              isNextMonth: D,
              dayOfWeek: j,
              courses: K,
              ...ce
            },
            bt
          ) => {
            const Ot = bt < 7 && !a,
              bn = new Boolean(A),
              It = new Date(),
              E =
                It.getDate() === b &&
                It.getMonth() === e &&
                It.getFullYear() === t;
            return P.jsxs(
              "div",
              {
                className: nt(W.calendar__square, !bn && W.not__current),
                children: [
                  Ot &&
                    P.jsx("section", {
                      className: nt(W.calendar__day),
                      children: Ae[bt].slice(0, 3),
                    }),
                  P.jsxs("section", {
                    className: nt(W.calendar__day__content),
                    children: [
                      P.jsx("section", {
                        className: nt(W.calendar__day_number, E && W.current),
                        children: a ? `${Ae[j]} ${b} de ${Ws[e]}` : b,
                      }),
                      P.jsx("section", {
                        className: nt(W.calendar__day__courses),
                        children: K?.map((O) =>
                          P.jsx(
                            "button",
                            {
                              onClick: () => i(O),
                              style: { backgroundColor: O.color },
                              className: nt(W.calendar__course, "btn"),
                              children: P.jsx("section", {
                                className: W.calendar__course__title,
                                children: O.title,
                              }),
                            },
                            O.id
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              },
              bt
            );
          }
        ),
      }),
    })
  );
}
const Pu = "_calendar__wrapper_mhcyw_51",
  Os = { "calendar-loader": "_calendar-loader_mhcyw_1", calendar__wrapper: Pu };
var vt = 1e3,
  xt = vt * 60,
  Tt = xt * 60,
  lt = Tt * 24,
  bu = lt * 7,
  wu = lt * 365.25,
  Su = function (t, e) {
    e = e || {};
    var n = typeof t;
    if (n === "string" && t.length > 0) return Au(t);
    if (n === "number" && isFinite(t)) return e.long ? Vu(t) : Cu(t);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(t)
    );
  };
function Au(t) {
  if (((t = String(t)), !(t.length > 100))) {
    var e =
      /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        t
      );
    if (e) {
      var n = parseFloat(e[1]),
        s = (e[2] || "ms").toLowerCase();
      switch (s) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * wu;
        case "weeks":
        case "week":
        case "w":
          return n * bu;
        case "days":
        case "day":
        case "d":
          return n * lt;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * Tt;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * xt;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * vt;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return;
      }
    }
  }
}
function Cu(t) {
  var e = Math.abs(t);
  return e >= lt
    ? Math.round(t / lt) + "d"
    : e >= Tt
    ? Math.round(t / Tt) + "h"
    : e >= xt
    ? Math.round(t / xt) + "m"
    : e >= vt
    ? Math.round(t / vt) + "s"
    : t + "ms";
}
function Vu(t) {
  var e = Math.abs(t);
  return e >= lt
    ? $t(t, e, lt, "day")
    : e >= Tt
    ? $t(t, e, Tt, "hour")
    : e >= xt
    ? $t(t, e, xt, "minute")
    : e >= vt
    ? $t(t, e, vt, "second")
    : t + " ms";
}
function $t(t, e, n, s) {
  var i = e >= n * 1.5;
  return Math.round(t / n) + " " + s + (i ? "s" : "");
}
const _u = mr(Su);
function Eu() {
  const [t, e] = m.useState(!1),
    [n, s] = m.useState(null),
    [i, o] = m.useState(new Date().getFullYear()),
    [r, a] = m.useState(new Date().getMonth()),
    [l, c] = m.useState(!0),
    [u, h] = m.useState([]),
    d = () => {
      l || (r > 0 ? a(r - 1) : (a(11), o(i - 1)));
    },
    f = () => {
      l || (r < 11 ? a(r + 1) : (a(0), o(i + 1)));
    },
    p = async () => {
      const C = (
        await (await fetch("https://api.npoint.io/e6380499bc8081afcaa0")).json()
      ).courses;
      h(
        C.map((b) => {
          const _ = new Date(b.inscripted_at),
            A = _u(b.duration + "w"),
            D = new Date(_.getTime() + A);
          return { ...b, inscripted_at: _, end_date: D };
        })
      );
    },
    v = (g) => {
      t || (s(g), e(!0));
    },
    T = (g) => {
      h(u.filter((S) => S !== g));
    },
    y = () => {
      e(!1), s(null);
    },
    x = Ws[r];
  return (
    m.useEffect(() => {
      p().then(() => c(!1));
    }, []),
    P.jsxs(P.Fragment, {
      children: [
        P.jsx(xu, { open: t, onClose: y, course: n, removeCourse: T }),
        P.jsxs("div", {
          className: "container position-relative my-4",
          children: [
            l &&
              P.jsx("div", {
                className: Os["calendar-loader"],
                children: P.jsx("div", {
                  className: "spinner-border  text-primary",
                  role: "status",
                  children: P.jsx("span", {
                    className: "visually-hidden",
                    children: "Loading...",
                  }),
                }),
              }),
            P.jsxs("div", {
              className: "row",
              children: [
                P.jsxs("div", {
                  style: {
                    backgroundColor: "#f2f2dcE2",
                    backdropFilter: "blur(10px)",
                    zIndex: 10,
                  },
                  className:
                    "d-flex py-4 position-sticky top-0 bg-terciario w-100 justify-content-center align-items-center gap-4 my-4",
                  children: [
                    P.jsx("button", {
                      className: "btn mt-0",
                      onClick: d,
                      children: P.jsx(Vr, {}),
                    }),
                    P.jsxs("span", {
                      className: "text-center mt-0",
                      children: [
                        P.jsx("b", { children: x }),
                        " ",
                        P.jsx("br", {}),
                        " ",
                        i,
                      ],
                    }),
                    P.jsx("button", {
                      className: "btn mt-0",
                      onClick: f,
                      children: P.jsx(_r, {}),
                    }),
                  ],
                }),
                P.jsx("section", {
                  className: Os.calendar__wrapper,
                  children: P.jsx(Tu, {
                    year: i,
                    month: r,
                    loading: l,
                    courses: u,
                    inspector: t,
                    inspectorCourse: n,
                    handleInspector: v,
                    closeInspector: y,
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
export { Eu as CoursesContainer };