var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }))
    return e
  },
  c = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n
    )
  )
;(function () {
  let e = document.createElement(`link`).relList
  if (e && e.supports && e.supports(`modulepreload`)) return
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e)
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(e) {
    let t = {}
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    )
  }
  function n(e) {
    if (e.ep) return
    e.ep = !0
    let n = t(e)
    fetch(e.href, n)
  }
})()
var l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null)
    }
    var h = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {}
    function v(e, t, n) {
      ;((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h))
    }
    ;((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`
          )
        this.updater.enqueueSetState(this, e, t, `setState`)
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`)
      }))
    function y() {}
    y.prototype = v.prototype
    function b(e, t, n) {
      ;((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h))
    }
    var x = (b.prototype = new y())
    ;((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0))
    var ee = Array.isArray
    function S() {}
    var C = { H: null, A: null, T: null, S: null },
      te = Object.prototype.hasOwnProperty
    function ne(e, n, r) {
      var i = r.ref
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      }
    }
    function re(e, t) {
      return ne(e.type, t, e.props)
    }
    function w(e) {
      return typeof e == `object` && !!e && e.$$typeof === t
    }
    function ie(e) {
      var t = { "=": `=0`, ":": `=2` }
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e]
        })
      )
    }
    var ae = /\/+/g
    function oe(e, t) {
      return typeof e == `object` && e && e.key != null
        ? ie(`` + e.key)
        : t.toString(36)
    }
    function se(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value
        case `rejected`:
          throw e.reason
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(S, S)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t))
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t))
                  }
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value
            case `rejected`:
              throw e.reason
          }
      }
      throw e
    }
    function ce(e, r, i, a, o) {
      var s = typeof e
      ;(s === `undefined` || s === `boolean`) && (e = null)
      var c = !1
      if (e === null) c = !0
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0
            break
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0
                break
              case d:
                return ((c = e._init), ce(c(e._payload), r, i, a, o))
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + oe(e, 0) : a),
          ee(o)
            ? ((i = ``),
              c != null && (i = c.replace(ae, `$&/`) + `/`),
              ce(o, r, i, ``, function (e) {
                return e
              }))
            : o != null &&
              (w(o) &&
                (o = re(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(ae, `$&/`) + `/`) +
                    c
                )),
              r.push(o)),
          1
        )
      c = 0
      var l = a === `` ? `.` : a + `:`
      if (ee(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + oe(a, u)), (c += ce(a, r, i, s, o)))
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + oe(a, u++)), (c += ce(a, r, i, s, o)))
      else if (s === `object`) {
        if (typeof e.then == `function`) return ce(se(e), r, i, a, o)
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`
          )
        )
      }
      return c
    }
    function le(e, t, n) {
      if (e == null) return e
      var r = [],
        i = 0
      return (
        ce(e, r, ``, ``, function (e) {
          return t.call(n, e, i++)
        }),
        r
      )
    }
    function ue(e) {
      if (e._status === -1) {
        var t = e._result
        ;((t = t()),
          t.then(
            function (t) {
              ;(e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t))
            },
            function (t) {
              ;(e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t))
            }
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)))
      }
      if (e._status === 1) return e._result.default
      throw e._result
    }
    var T =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                })
                if (!window.dispatchEvent(t)) return
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e)
                return
              }
              console.error(e)
            },
      E = {
        map: le,
        forEach: function (e, t, n) {
          le(
            e,
            function () {
              t.apply(this, arguments)
            },
            n
          )
        },
        count: function (e) {
          var t = 0
          return (
            le(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            le(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!w(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`
            )
          return e
        },
      }
    ;((e.Activity = f),
      (e.Children = E),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return C.H.useMemoCache(e)
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments)
        }
      }),
      (e.cacheSignal = function () {
        return null
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`
          )
        var r = g({}, e.props),
          i = e.key
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !te.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a])
        var a = arguments.length - 2
        if (a === 1) r.children = n
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2]
          r.children = o
        }
        return ne(e.type, i, r)
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        )
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            te.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r])
        var o = arguments.length - 2
        if (o === 1) i.children = n
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2]
          i.children = s
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r])
        return ne(e, a, i)
      }),
      (e.createRef = function () {
        return { current: null }
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e }
      }),
      (e.isValidElement = w),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: ue }
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t }
      }),
      (e.startTransition = function (e) {
        var t = C.T,
          n = {}
        C.T = n
        try {
          var r = e(),
            i = C.S
          ;(i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(S, T))
        } catch (e) {
          T(e)
        } finally {
          ;(t !== null && n.types !== null && (t.types = n.types), (C.T = t))
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return C.H.useCacheRefresh()
      }),
      (e.use = function (e) {
        return C.H.use(e)
      }),
      (e.useActionState = function (e, t, n) {
        return C.H.useActionState(e, t, n)
      }),
      (e.useCallback = function (e, t) {
        return C.H.useCallback(e, t)
      }),
      (e.useContext = function (e) {
        return C.H.useContext(e)
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return C.H.useDeferredValue(e, t)
      }),
      (e.useEffect = function (e, t) {
        return C.H.useEffect(e, t)
      }),
      (e.useEffectEvent = function (e) {
        return C.H.useEffectEvent(e)
      }),
      (e.useId = function () {
        return C.H.useId()
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return C.H.useImperativeHandle(e, t, n)
      }),
      (e.useInsertionEffect = function (e, t) {
        return C.H.useInsertionEffect(e, t)
      }),
      (e.useLayoutEffect = function (e, t) {
        return C.H.useLayoutEffect(e, t)
      }),
      (e.useMemo = function (e, t) {
        return C.H.useMemo(e, t)
      }),
      (e.useOptimistic = function (e, t) {
        return C.H.useOptimistic(e, t)
      }),
      (e.useReducer = function (e, t, n) {
        return C.H.useReducer(e, t, n)
      }),
      (e.useRef = function (e) {
        return C.H.useRef(e)
      }),
      (e.useState = function (e) {
        return C.H.useState(e)
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return C.H.useSyncExternalStore(e, t, n)
      }),
      (e.useTransition = function () {
        return C.H.useTransition()
      }),
      (e.version = `19.2.8`))
  }),
  u = o((e, t) => {
    t.exports = l()
  }),
  d = o((e) => {
    function t(e, t) {
      var n = e.length
      e.push(t)
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r]
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r))
        else break a
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0]
    }
    function r(e) {
      if (e.length === 0) return null
      var t = e[0],
        n = e.pop()
      if (n !== t) {
        e[0] = n
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l]
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s))
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l))
          else break a
        }
      }
      return t
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex
      return n === 0 ? e.id - t.id : n
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance
      e.unstable_now = function () {
        return a.now()
      }
    } else {
      var o = Date,
        s = o.now()
      e.unstable_now = function () {
        return o.now() - s
      }
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l)
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i))
        else break
        i = n(l)
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), ee || ((ee = !0), w()))
        else {
          var t = n(l)
          t !== null && oe(x, t.startTime - e)
        }
    }
    var ee = !1,
      S = -1,
      C = 5,
      te = -1
    function ne() {
      return g ? !0 : !(e.unstable_now() - te < C)
    }
    function re() {
      if (((g = !1), ee)) {
        var t = e.unstable_now()
        te = t
        var i = !0
        try {
          a: {
            ;((m = !1), h && ((h = !1), v(S), (S = -1)), (p = !0))
            var a = f
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && ne());
                ) {
                  var o = d.callback
                  if (typeof o == `function`) {
                    ;((d.callback = null), (f = d.priorityLevel))
                    var s = o(d.expirationTime <= t)
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ;((d.callback = s), b(t), (i = !0))
                      break b
                    }
                    ;(d === n(c) && r(c), b(t))
                  } else r(c)
                  d = n(c)
                }
                if (d !== null) i = !0
                else {
                  var u = n(l)
                  ;(u !== null && oe(x, u.startTime - t), (i = !1))
                }
              }
              break a
            } finally {
              ;((d = null), (f = a), (p = !1))
            }
            i = void 0
          }
        } finally {
          i ? w() : (ee = !1)
        }
      }
    }
    var w
    if (typeof y == `function`)
      w = function () {
        y(re)
      }
    else if (typeof MessageChannel < `u`) {
      var ie = new MessageChannel(),
        ae = ie.port2
      ;((ie.port1.onmessage = re),
        (w = function () {
          ae.postMessage(null)
        }))
    } else
      w = function () {
        _(re, 0)
      }
    function oe(t, n) {
      S = _(function () {
        t(e.unstable_now())
      }, n)
    }
    ;((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`
            )
          : (C = 0 < e ? Math.floor(1e3 / e) : 5)
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3
            break
          default:
            t = f
        }
        var n = f
        f = t
        try {
          return e()
        } finally {
          f = n
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break
          default:
            e = 3
        }
        var n = f
        f = e
        try {
          return t()
        } finally {
          f = n
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now()
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1
            break
          case 2:
            s = 250
            break
          case 5:
            s = 1073741823
            break
          case 4:
            s = 1e4
            break
          default:
            s = 5e3
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(S), (S = -1)) : (h = !0), oe(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), ee || ((ee = !0), w()))),
          r
        )
      }),
      (e.unstable_shouldYield = ne),
      (e.unstable_wrapCallback = function (e) {
        var t = f
        return function () {
          var n = f
          f = t
          try {
            return e.apply(this, arguments)
          } finally {
            f = n
          }
        }
      }))
  }),
  f = o((e, t) => {
    t.exports = d()
  }),
  p = o((e) => {
    var t = u()
    function n(e) {
      var t = `https://react.dev/errors/` + e
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1])
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n])
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      )
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522))
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`)
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      }
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
    function c(e, t) {
      if (e === `font`) return ``
      if (typeof t == `string`) return t === `use-credentials` ? t : ``
    }
    ;((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299))
        return o(e, t, null, r)
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p
        try {
          if (((s.T = null), (i.p = 2), e)) return e()
        } finally {
          ;((s.T = t), (i.p = n), i.d.f())
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t))
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e)
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o }
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              })
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin)
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              })
            }
          } else t ?? i.d.M(e)
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin)
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          })
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin)
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            })
          } else i.d.m(e)
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e)
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t)
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n)
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus()
      }),
      (e.version = `19.2.8`))
  }),
  m = o((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (e) {
          console.error(e)
        }
    }
    ;(n(), (t.exports = p()))
  }),
  h = o((e) => {
    var t = f(),
      n = u(),
      r = m()
    function i(e) {
      var t = `https://react.dev/errors/` + e
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1])
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n])
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      )
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      )
    }
    function o(e) {
      var t = e,
        n = e
      if (e.alternate) for (; t.return;) t = t.return
      else {
        e = t
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return))
        while (e)
      }
      return t.tag === 3 ? n : null
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated
      }
      return null
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated
      }
      return null
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188))
    }
    function d(e) {
      var t = e.alternate
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188))
        return t === e ? e : null
      }
      for (var n = e, r = t; ;) {
        var a = n.return
        if (a === null) break
        var s = a.alternate
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r
            continue
          }
          break
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return (l(a), e)
            if (s === r) return (l(a), t)
            s = s.sibling
          }
          throw Error(i(188))
        }
        if (n.return !== r.return) ((n = a), (r = s))
        else {
          for (var c = !1, u = a.child; u;) {
            if (u === n) {
              ;((c = !0), (n = a), (r = s))
              break
            }
            if (u === r) {
              ;((c = !0), (r = a), (n = s))
              break
            }
            u = u.sibling
          }
          if (!c) {
            for (u = s.child; u;) {
              if (u === n) {
                ;((c = !0), (n = s), (r = a))
                break
              }
              if (u === r) {
                ;((c = !0), (r = s), (n = a))
                break
              }
              u = u.sibling
            }
            if (!c) throw Error(i(189))
          }
        }
        if (n.alternate !== r) throw Error(i(190))
      }
      if (n.tag !== 3) throw Error(i(188))
      return n.stateNode.current === n ? e : t
    }
    function p(e) {
      var t = e.tag
      if (t === 5 || t === 26 || t === 27 || t === 6) return e
      for (e = e.child; e !== null;) {
        if (((t = p(e)), t !== null)) return t
        e = e.sibling
      }
      return null
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      ee = Symbol.for(`react.consumer`),
      S = Symbol.for(`react.context`),
      C = Symbol.for(`react.forward_ref`),
      te = Symbol.for(`react.suspense`),
      ne = Symbol.for(`react.suspense_list`),
      re = Symbol.for(`react.memo`),
      w = Symbol.for(`react.lazy`),
      ie = Symbol.for(`react.activity`),
      ae = Symbol.for(`react.memo_cache_sentinel`),
      oe = Symbol.iterator
    function se(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (oe && e[oe]) || e[`@@iterator`]),
          typeof e == `function` ? e : null)
    }
    var ce = Symbol.for(`react.client.reference`)
    function le(e) {
      if (e == null) return null
      if (typeof e == `function`)
        return e.$$typeof === ce ? null : e.displayName || e.name || null
      if (typeof e == `string`) return e
      switch (e) {
        case y:
          return `Fragment`
        case x:
          return `Profiler`
        case b:
          return `StrictMode`
        case te:
          return `Suspense`
        case ne:
          return `SuspenseList`
        case ie:
          return `Activity`
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`
          case S:
            return e.displayName || `Context`
          case ee:
            return (e._context.displayName || `Context`) + `.Consumer`
          case C:
            var t = e.render
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            )
          case re:
            return (
              (t = e.displayName || null),
              t === null ? le(e.type) || `Memo` : t
            )
          case w:
            ;((t = e._payload), (e = e._init))
            try {
              return le(e(t))
            } catch {}
        }
      return null
    }
    var ue = Array.isArray,
      T = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      E = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      de = { pending: !1, data: null, method: null, action: null },
      fe = [],
      pe = -1
    function me(e) {
      return { current: e }
    }
    function D(e) {
      0 > pe || ((e.current = fe[pe]), (fe[pe] = null), pe--)
    }
    function O(e, t) {
      ;(pe++, (fe[pe] = e.current), (e.current = t))
    }
    var he = me(null),
      ge = me(null),
      _e = me(null),
      ve = me(null)
    function ye(e, t) {
      switch ((O(_e, t), O(ge, e), O(he, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0
          break
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = Vd(t)), (e = Hd(t, e)))
          else
            switch (e) {
              case `svg`:
                e = 1
                break
              case `math`:
                e = 2
                break
              default:
                e = 0
            }
      }
      ;(D(he), O(he, e))
    }
    function be() {
      ;(D(he), D(ge), D(_e))
    }
    function xe(e) {
      e.memoizedState !== null && O(ve, e)
      var t = he.current,
        n = Hd(t, e.type)
      t !== n && (O(ge, e), O(he, n))
    }
    function Se(e) {
      ;(ge.current === e && (D(he), D(ge)),
        ve.current === e && (D(ve), (Qf._currentValue = de)))
    }
    var Ce, we
    function Te(e) {
      if (Ce === void 0)
        try {
          throw Error()
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/)
          ;((Ce = (t && t[1]) || ``),
            (we =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``))
        }
      return (
        `
` +
        Ce +
        e +
        we
      )
    }
    var Ee = !1
    function De(e, t) {
      if (!e || Ee) return ``
      Ee = !0
      var n = Error.prepareStackTrace
      Error.prepareStackTrace = void 0
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error()
                }
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error()
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, [])
                  } catch (e) {
                    var r = e
                  }
                  Reflect.construct(e, [], n)
                } else {
                  try {
                    n.call()
                  } catch (e) {
                    r = e
                  }
                  e.call(n.prototype)
                }
              } else {
                try {
                  throw Error()
                } catch (e) {
                  r = e
                }
                ;(n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {})
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack]
            }
            return [null, null]
          },
        }
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`
        )
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          })
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1]
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`)
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
            i++
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `)
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    )
                  }
                while (1 <= r && 0 <= i)
              break
            }
        }
      } finally {
        ;((Ee = !1), (Error.prepareStackTrace = n))
      }
      return (n = e ? e.displayName || e.name : ``) ? Te(n) : ``
    }
    function Oe(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Te(e.type)
        case 16:
          return Te(`Lazy`)
        case 13:
          return e.child !== t && t !== null
            ? Te(`Suspense Fallback`)
            : Te(`Suspense`)
        case 19:
          return Te(`SuspenseList`)
        case 0:
        case 15:
          return De(e.type, !1)
        case 11:
          return De(e.type.render, !1)
        case 1:
          return De(e.type, !0)
        case 31:
          return Te(`Activity`)
        default:
          return ``
      }
    }
    function ke(e) {
      try {
        var t = ``,
          n = null
        do ((t += Oe(e, n)), (n = e), (e = e.return))
        while (e)
        return t
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        )
      }
    }
    var Ae = Object.prototype.hasOwnProperty,
      je = t.unstable_scheduleCallback,
      Me = t.unstable_cancelCallback,
      Ne = t.unstable_shouldYield,
      Pe = t.unstable_requestPaint,
      Fe = t.unstable_now,
      Ie = t.unstable_getCurrentPriorityLevel,
      Le = t.unstable_ImmediatePriority,
      Re = t.unstable_UserBlockingPriority,
      ze = t.unstable_NormalPriority,
      Be = t.unstable_LowPriority,
      Ve = t.unstable_IdlePriority,
      He = t.log,
      Ue = t.unstable_setDisableYieldValue,
      We = null,
      Ge = null
    function Ke(e) {
      if (
        (typeof He == `function` && Ue(e),
        Ge && typeof Ge.setStrictMode == `function`)
      )
        try {
          Ge.setStrictMode(We, e)
        } catch {}
    }
    var qe = Math.clz32 ? Math.clz32 : Xe,
      Je = Math.log,
      Ye = Math.LN2
    function Xe(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Je(e) / Ye) | 0)) | 0)
    }
    var Ze = 256,
      Qe = 262144,
      $e = 4194304
    function et(e) {
      var t = e & 42
      if (t !== 0) return t
      switch (e & -e) {
        case 1:
          return 1
        case 2:
          return 2
        case 4:
          return 4
        case 8:
          return 8
        case 16:
          return 16
        case 32:
          return 32
        case 64:
          return 64
        case 128:
          return 128
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
          return e & 261888
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560
        case 67108864:
          return 67108864
        case 134217728:
          return 134217728
        case 268435456:
          return 268435456
        case 536870912:
          return 536870912
        case 1073741824:
          return 0
        default:
          return e
      }
    }
    function tt(e, t, n) {
      var r = e.pendingLanes
      if (r === 0) return 0
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes
      e = e.warmLanes
      var s = r & 134217727
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = et(n)))
                : (i = et(o))
              : (i = et(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = et(n)))
                  : (i = et(o)))
              : (i = et(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      )
    }
    function nt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function rt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250
        case 16:
        case 32:
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
          return t + 5e3
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1
        default:
          return -1
      }
    }
    function it() {
      var e = $e
      return (($e <<= 1), !($e & 62914560) && ($e = 4194304), e)
    }
    function at(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e)
      return t
    }
    function ot(e, t) {
      ;((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)))
    }
    function st(e, t, n, r, i, a) {
      var o = e.pendingLanes
      ;((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0))
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates
      for (n = o & ~n; 0 < n;) {
        var u = 31 - qe(n),
          d = 1 << u
        ;((s[u] = 0), (c[u] = -1))
        var f = l[u]
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u]
            p !== null && (p.lane &= -536870913)
          }
        n &= ~d
      }
      ;(r !== 0 && ct(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)))
    }
    function ct(e, t, n) {
      ;((e.pendingLanes |= t), (e.suspendedLanes &= ~t))
      var r = 31 - qe(t)
      ;((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)))
    }
    function lt(e, t) {
      var n = (e.entangledLanes |= t)
      for (e = e.entanglements; n;) {
        var r = 31 - qe(n),
          i = 1 << r
        ;((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i))
      }
    }
    function ut(e, t) {
      var n = t & -t
      return (
        (n = n & 42 ? 1 : dt(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      )
    }
    function dt(e) {
      switch (e) {
        case 2:
          e = 1
          break
        case 8:
          e = 4
          break
        case 32:
          e = 16
          break
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
          e = 128
          break
        case 268435456:
          e = 134217728
          break
        default:
          e = 0
      }
      return e
    }
    function ft(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      )
    }
    function pt() {
      var e = E.p
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e
    }
    function mt(e, t) {
      var n = E.p
      try {
        return ((E.p = e), t())
      } finally {
        E.p = n
      }
    }
    var ht = Math.random().toString(36).slice(2),
      gt = `__reactFiber$` + ht,
      _t = `__reactProps$` + ht,
      vt = `__reactContainer$` + ht,
      yt = `__reactEvents$` + ht,
      bt = `__reactListeners$` + ht,
      xt = `__reactHandles$` + ht,
      St = `__reactResources$` + ht,
      Ct = `__reactMarker$` + ht
    function wt(e) {
      ;(delete e[gt], delete e[_t], delete e[yt], delete e[bt], delete e[xt])
    }
    function Tt(e) {
      var t = e[gt]
      if (t) return t
      for (var n = e.parentNode; n;) {
        if ((t = n[vt] || n[gt])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = df(e); e !== null;) {
              if ((n = e[gt])) return n
              e = df(e)
            }
          return t
        }
        ;((e = n), (n = e.parentNode))
      }
      return null
    }
    function Et(e) {
      if ((e = e[gt] || e[vt])) {
        var t = e.tag
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e
      }
      return null
    }
    function Dt(e) {
      var t = e.tag
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode
      throw Error(i(33))
    }
    function Ot(e) {
      var t = e[St]
      return (
        (t ||= e[St] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      )
    }
    function kt(e) {
      e[Ct] = !0
    }
    var At = new Set(),
      jt = {}
    function Mt(e, t) {
      ;(Nt(e, t), Nt(e + `Capture`, t))
    }
    function Nt(e, t) {
      for (jt[e] = t, e = 0; e < t.length; e++) At.add(t[e])
    }
    var Pt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`
      ),
      Ft = {},
      It = {}
    function Lt(e) {
      return Ae.call(It, e)
        ? !0
        : Ae.call(Ft, e)
          ? !1
          : Pt.test(e)
            ? (It[e] = !0)
            : ((Ft[e] = !0), !1)
    }
    function Rt(e, t, n) {
      if (Lt(t))
        if (n === null) e.removeAttribute(t)
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t)
              return
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5)
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t)
                return
              }
          }
          e.setAttribute(t, `` + n)
        }
    }
    function zt(e, t, n) {
      if (n === null) e.removeAttribute(t)
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t)
            return
        }
        e.setAttribute(t, `` + n)
      }
    }
    function Bt(e, t, n, r) {
      if (r === null) e.removeAttribute(n)
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n)
            return
        }
        e.setAttributeNS(t, n, `` + r)
      }
    }
    function Vt(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e
        case `object`:
          return e
        default:
          return ``
      }
    }
    function Ht(e) {
      var t = e.type
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      )
    }
    function Ut(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this)
            },
            set: function (e) {
              ;((n = `` + e), a.call(this, e))
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n
            },
            setValue: function (e) {
              n = `` + e
            },
            stopTracking: function () {
              ;((e._valueTracker = null), delete e[t])
            },
          }
        )
      }
    }
    function Wt(e) {
      if (!e._valueTracker) {
        var t = Ht(e) ? `checked` : `value`
        e._valueTracker = Ut(e, t, `` + e[t])
      }
    }
    function Gt(e) {
      if (!e) return !1
      var t = e._valueTracker
      if (!t) return !0
      var n = t.getValue(),
        r = ``
      return (
        e && (r = Ht(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      )
    }
    function Kt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null
      try {
        return e.activeElement || e.body
      } catch {
        return e.body
      }
    }
    var qt = /[\n"\\]/g
    function Jt(e) {
      return e.replace(qt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `
      })
    }
    function Yt(e, t, n, r, i, a, o, s) {
      ;((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + Vt(t))
            : e.value !== `` + Vt(t) && (e.value = `` + Vt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Zt(e, o, Vt(n))
          : Zt(e, o, Vt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + Vt(s))
          : e.removeAttribute(`name`))
    }
    function Xt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Wt(e)
          return
        }
        ;((n = n == null ? `` : `` + Vt(n)),
          (t = t == null ? n : `` + Vt(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t))
      }
      ;((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Wt(e))
    }
    function Zt(e, t, n) {
      ;(t === `number` && Kt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n)
    }
    function Qt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {}
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0))
      } else {
        for (n = `` + Vt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ;((e[i].selected = !0), r && (e[i].defaultSelected = !0))
            return
          }
          t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
      }
    }
    function $t(e, t, n) {
      if (
        t != null &&
        ((t = `` + Vt(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t)
        return
      }
      e.defaultValue = n == null ? `` : `` + Vt(n)
    }
    function en(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92))
          if (ue(r)) {
            if (1 < r.length) throw Error(i(93))
            r = r[0]
          }
          n = r
        }
        ;((n ??= ``), (t = n))
      }
      ;((n = Vt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Wt(e))
    }
    function tn(e, t) {
      if (t) {
        var n = e.firstChild
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t
          return
        }
      }
      e.textContent = t
    }
    var nn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `
      )
    )
    function rn(e, t, n) {
      var r = t.indexOf(`--`) === 0
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || nn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`)
    }
    function an(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62))
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``))
        for (var a in t)
          ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && rn(e, a, r))
      } else for (var o in t) t.hasOwnProperty(o) && rn(e, o, t[o])
    }
    function on(e) {
      if (e.indexOf(`-`) === -1) return !1
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1
        default:
          return !0
      }
    }
    var sn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      cn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
    function ln(e) {
      return cn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e
    }
    function un() {}
    var dn = null
    function fn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      )
    }
    var pn = null,
      mn = null
    function hn(e) {
      var t = Et(e)
      if (t && (e = t.stateNode)) {
        var n = e[_t] || null
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Yt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode
              for (
                n = n.querySelectorAll(
                  `input[name="` + Jt(`` + t) + `"][type="radio"]`
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t]
                if (r !== e && r.form === e.form) {
                  var a = r[_t] || null
                  if (!a) throw Error(i(90))
                  Yt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name
                  )
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && Gt(r))
            }
            break a
          case `textarea`:
            $t(e, n.value, n.defaultValue)
            break a
          case `select`:
            ;((t = n.value), t != null && Qt(e, !!n.multiple, t, !1))
        }
      }
    }
    var gn = !1
    function _n(e, t, n) {
      if (gn) return e(t, n)
      gn = !0
      try {
        return e(t)
      } finally {
        if (
          ((gn = !1),
          (pn !== null || mn !== null) &&
            (bu(), pn && ((t = pn), (e = mn), (mn = pn = null), hn(t), e)))
        )
          for (t = 0; t < e.length; t++) hn(e[t])
      }
    }
    function vn(e, t) {
      var n = e.stateNode
      if (n === null) return null
      var r = n[_t] || null
      if (r === null) return null
      n = r[t]
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ;((r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === `button` ||
              e === `input` ||
              e === `select` ||
              e === `textarea`
            ))),
            (e = !r))
          break a
        default:
          e = !1
      }
      if (e) return null
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n))
      return n
    }
    var yn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      bn = !1
    if (yn)
      try {
        var xn = {}
        ;(Object.defineProperty(xn, "passive", {
          get: function () {
            bn = !0
          },
        }),
          window.addEventListener(`test`, xn, xn),
          window.removeEventListener(`test`, xn, xn))
      } catch {
        bn = !1
      }
    var Sn = null,
      Cn = null,
      wn = null
    function Tn() {
      if (wn) return wn
      var e,
        t = Cn,
        n = t.length,
        r,
        i = `value` in Sn ? Sn.value : Sn.textContent,
        a = i.length
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (wn = i.slice(e, 1 < r ? 1 - r : void 0))
    }
    function En(e) {
      var t = e.keyCode
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      )
    }
    function Dn() {
      return !0
    }
    function On() {
      return !1
    }
    function kn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]))
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Dn
            : On),
          (this.isPropagationStopped = On),
          this
        )
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0
            var e = this.nativeEvent
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Dn))
          },
          stopPropagation: function () {
            var e = this.nativeEvent
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Dn))
          },
          persist: function () {},
          isPersistent: Dn,
        }),
        t
      )
    }
    var An = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      jn = kn(An),
      Mn = h({}, An, { view: 0, detail: 0 }),
      Nn = kn(Mn),
      Pn,
      Fn,
      In,
      Ln = h({}, Mn, {
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
        getModifierState: Jn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== In &&
                (In && e.type === `mousemove`
                  ? ((Pn = e.screenX - In.screenX),
                    (Fn = e.screenY - In.screenY))
                  : (Fn = Pn = 0),
                (In = e)),
              Pn)
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Fn
        },
      }),
      Rn = kn(Ln),
      zn = kn(h({}, Ln, { dataTransfer: 0 })),
      Bn = kn(h({}, Mn, { relatedTarget: 0 })),
      Vn = kn(
        h({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      Hn = kn(
        h({}, An, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData
          },
        })
      ),
      Un = kn(h({}, An, { data: 0 })),
      Wn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Gn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Kn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      }
    function qn(e) {
      var t = this.nativeEvent
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Kn[e])
          ? !!t[e]
          : !1
    }
    function Jn() {
      return qn
    }
    var Yn = kn(
        h({}, Mn, {
          key: function (e) {
            if (e.key) {
              var t = Wn[e.key] || e.key
              if (t !== `Unidentified`) return t
            }
            return e.type === `keypress`
              ? ((e = En(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Gn[e.keyCode] || `Unidentified`
                : ``
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Jn,
          charCode: function (e) {
            return e.type === `keypress` ? En(e) : 0
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
          },
          which: function (e) {
            return e.type === `keypress`
              ? En(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0
          },
        })
      ),
      Xn = kn(
        h({}, Ln, {
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
        })
      ),
      Zn = kn(
        h({}, Mn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Jn,
        })
      ),
      Qn = kn(h({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      $n = kn(
        h({}, Ln, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0
          },
          deltaZ: 0,
          deltaMode: 0,
        })
      ),
      er = kn(h({}, An, { newState: 0, oldState: 0 })),
      tr = [9, 13, 27, 32],
      nr = yn && `CompositionEvent` in window,
      rr = null
    yn && `documentMode` in document && (rr = document.documentMode)
    var ir = yn && `TextEvent` in window && !rr,
      ar = yn && (!nr || (rr && 8 < rr && 11 >= rr)),
      or = ` `,
      sr = !1
    function cr(e, t) {
      switch (e) {
        case `keyup`:
          return tr.indexOf(t.keyCode) !== -1
        case `keydown`:
          return t.keyCode !== 229
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0
        default:
          return !1
      }
    }
    function lr(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      )
    }
    var ur = !1
    function dr(e, t) {
      switch (e) {
        case `compositionend`:
          return lr(t)
        case `keypress`:
          return t.which === 32 ? ((sr = !0), or) : null
        case `textInput`:
          return ((e = t.data), e === or && sr ? null : e)
        default:
          return null
      }
    }
    function fr(e, t) {
      if (ur)
        return e === `compositionend` || (!nr && cr(e, t))
          ? ((e = Tn()), (wn = Cn = Sn = null), (ur = !1), e)
          : null
      switch (e) {
        case `paste`:
          return null
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char
            if (t.which) return String.fromCharCode(t.which)
          }
          return null
        case `compositionend`:
          return ar && t.locale !== `ko` ? null : t.data
        default:
          return null
      }
    }
    var pr = {
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
    }
    function mr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return t === `input` ? !!pr[e.type] : t === `textarea`
    }
    function hr(e, t, n, r) {
      ;(pn ? (mn ? mn.push(r) : (mn = [r])) : (pn = r),
        (t = Ed(t, `onChange`)),
        0 < t.length &&
          ((n = new jn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })))
    }
    var gr = null,
      _r = null
    function vr(e) {
      yd(e, 0)
    }
    function yr(e) {
      if (Gt(Dt(e))) return e
    }
    function br(e, t) {
      if (e === `change`) return t
    }
    var xr = !1
    if (yn) {
      var Sr
      if (yn) {
        var Cr = `oninput` in document
        if (!Cr) {
          var wr = document.createElement(`div`)
          ;(wr.setAttribute(`oninput`, `return;`),
            (Cr = typeof wr.oninput == `function`))
        }
        Sr = Cr
      } else Sr = !1
      xr = Sr && (!document.documentMode || 9 < document.documentMode)
    }
    function Tr() {
      gr && (gr.detachEvent(`onpropertychange`, Er), (_r = gr = null))
    }
    function Er(e) {
      if (e.propertyName === `value` && yr(_r)) {
        var t = []
        ;(hr(t, _r, e, fn(e)), _n(vr, t))
      }
    }
    function Dr(e, t, n) {
      e === `focusin`
        ? (Tr(), (gr = t), (_r = n), gr.attachEvent(`onpropertychange`, Er))
        : e === `focusout` && Tr()
    }
    function Or(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return yr(_r)
    }
    function kr(e, t) {
      if (e === `click`) return yr(t)
    }
    function Ar(e, t) {
      if (e === `input` || e === `change`) return yr(t)
    }
    function jr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t)
    }
    var Mr = typeof Object.is == `function` ? Object.is : jr
    function Nr(e, t) {
      if (Mr(e, t)) return !0
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1
      var n = Object.keys(e),
        r = Object.keys(t)
      if (n.length !== r.length) return !1
      for (r = 0; r < n.length; r++) {
        var i = n[r]
        if (!Ae.call(t, i) || !Mr(e[i], t[i])) return !1
      }
      return !0
    }
    function Pr(e) {
      for (; e && e.firstChild;) e = e.firstChild
      return e
    }
    function Fr(e, t) {
      var n = Pr(e)
      e = 0
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e }
          e = r
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling
              break a
            }
            n = n.parentNode
          }
          n = void 0
        }
        n = Pr(n)
      }
    }
    function Ir(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Ir(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1
    }
    function Lr(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window
      for (var t = Kt(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`
        } catch {
          n = !1
        }
        if (n) e = t.contentWindow
        else break
        t = Kt(e.document)
      }
      return t
    }
    function Rr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      )
    }
    var zr = yn && `documentMode` in document && 11 >= document.documentMode,
      Br = null,
      Vr = null,
      Hr = null,
      Ur = !1
    function Wr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
      Ur ||
        Br == null ||
        Br !== Kt(r) ||
        ((r = Br),
        `selectionStart` in r && Rr(r)
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
        (Hr && Nr(Hr, r)) ||
          ((Hr = r),
          (r = Ed(Vr, `onSelect`)),
          0 < r.length &&
            ((t = new jn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Br))))
    }
    function Gr(e, t) {
      var n = {}
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      )
    }
    var Kr = {
        animationend: Gr(`Animation`, `AnimationEnd`),
        animationiteration: Gr(`Animation`, `AnimationIteration`),
        animationstart: Gr(`Animation`, `AnimationStart`),
        transitionrun: Gr(`Transition`, `TransitionRun`),
        transitionstart: Gr(`Transition`, `TransitionStart`),
        transitioncancel: Gr(`Transition`, `TransitionCancel`),
        transitionend: Gr(`Transition`, `TransitionEnd`),
      },
      qr = {},
      Jr = {}
    yn &&
      ((Jr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Kr.animationend.animation,
        delete Kr.animationiteration.animation,
        delete Kr.animationstart.animation),
      `TransitionEvent` in window || delete Kr.transitionend.transition)
    function Yr(e) {
      if (qr[e]) return qr[e]
      if (!Kr[e]) return e
      var t = Kr[e],
        n
      for (n in t) if (t.hasOwnProperty(n) && n in Jr) return (qr[e] = t[n])
      return e
    }
    var Xr = Yr(`animationend`),
      Zr = Yr(`animationiteration`),
      Qr = Yr(`animationstart`),
      $r = Yr(`transitionrun`),
      ei = Yr(`transitionstart`),
      ti = Yr(`transitioncancel`),
      k = Yr(`transitionend`),
      ni = new Map(),
      ri =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `
        )
    ri.push(`scrollEnd`)
    function ii(e, t) {
      ;(ni.set(e, t), Mt(t, [e]))
    }
    var ai =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                })
                if (!window.dispatchEvent(t)) return
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e)
                return
              }
              console.error(e)
            },
      oi = [],
      si = 0,
      ci = 0
    function li() {
      for (var e = si, t = (ci = si = 0); t < e;) {
        var n = oi[t]
        oi[t++] = null
        var r = oi[t]
        oi[t++] = null
        var i = oi[t]
        oi[t++] = null
        var a = oi[t]
        if (((oi[t++] = null), r !== null && i !== null)) {
          var o = r.pending
          ;(o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i))
        }
        a !== 0 && pi(n, i, a)
      }
    }
    function ui(e, t, n, r) {
      ;((oi[si++] = e),
        (oi[si++] = t),
        (oi[si++] = n),
        (oi[si++] = r),
        (ci |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r))
    }
    function di(e, t, n, r) {
      return (ui(e, t, n, r), mi(e))
    }
    function fi(e, t) {
      return (ui(e, null, null, t), mi(e))
    }
    function pi(e, t, n) {
      e.lanes |= n
      var r = e.alternate
      r !== null && (r.lanes |= n)
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return))
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - qe(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null
    }
    function mi(e) {
      if (50 < du) throw ((du = 0), (fu = null), Error(i(185)))
      for (var t = e.return; t !== null;) ((e = t), (t = e.return))
      return e.tag === 3 ? e.stateNode : null
    }
    var hi = {}
    function gi(e, t, n, r) {
      ;((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null))
    }
    function _i(e, t, n, r) {
      return new gi(e, t, n, r)
    }
    function vi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent))
    }
    function yi(e, t) {
      var n = e.alternate
      return (
        n === null
          ? ((n = _i(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      )
    }
    function bi(e, t) {
      e.flags &= 65011714
      var n = e.alternate
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      )
    }
    function xi(e, t, n, r, a, o) {
      var s = 0
      if (((r = e), typeof e == `function`)) vi(e) && (s = 1)
      else if (typeof e == `string`)
        s = Uf(e, n, he.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5
      else
        a: switch (e) {
          case ie:
            return (
              (e = _i(31, n, t, a)),
              (e.elementType = ie),
              (e.lanes = o),
              e
            )
          case y:
            return Si(n.children, a, o, t)
          case b:
            ;((s = 8), (a |= 24))
            break
          case x:
            return (
              (e = _i(12, n, t, a | 2)),
              (e.elementType = x),
              (e.lanes = o),
              e
            )
          case te:
            return (
              (e = _i(13, n, t, a)),
              (e.elementType = te),
              (e.lanes = o),
              e
            )
          case ne:
            return (
              (e = _i(19, n, t, a)),
              (e.elementType = ne),
              (e.lanes = o),
              e
            )
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case S:
                  s = 10
                  break a
                case ee:
                  s = 9
                  break a
                case C:
                  s = 11
                  break a
                case re:
                  s = 14
                  break a
                case w:
                  ;((s = 16), (r = null))
                  break a
              }
            ;((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null))
        }
      return (
        (t = _i(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      )
    }
    function Si(e, t, n, r) {
      return ((e = _i(7, e, r, t)), (e.lanes = n), e)
    }
    function Ci(e, t, n) {
      return ((e = _i(6, e, null, t)), (e.lanes = n), e)
    }
    function wi(e) {
      var t = _i(18, null, null, 0)
      return ((t.stateNode = e), t)
    }
    function Ti(e, t, n) {
      return (
        (t = _i(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      )
    }
    var Ei = new WeakMap()
    function Di(e, t) {
      if (typeof e == `object` && e) {
        var n = Ei.get(e)
        return n === void 0
          ? ((t = { value: e, source: t, stack: ke(t) }), Ei.set(e, t), t)
          : n
      }
      return { value: e, source: t, stack: ke(t) }
    }
    var Oi = [],
      ki = 0,
      Ai = null,
      ji = 0,
      Mi = [],
      Ni = 0,
      Pi = null,
      Fi = 1,
      Ii = ``
    function A(e, t) {
      ;((Oi[ki++] = ji), (Oi[ki++] = Ai), (Ai = e), (ji = t))
    }
    function Li(e, t, n) {
      ;((Mi[Ni++] = Fi), (Mi[Ni++] = Ii), (Mi[Ni++] = Pi), (Pi = e))
      var r = Fi
      e = Ii
      var i = 32 - qe(r) - 1
      ;((r &= ~(1 << i)), (n += 1))
      var a = 32 - qe(t) + i
      if (30 < a) {
        var o = i - (i % 5)
        ;((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Fi = (1 << (32 - qe(t) + i)) | (n << i) | r),
          (Ii = a + e))
      } else ((Fi = (1 << a) | (n << i) | r), (Ii = e))
    }
    function Ri(e) {
      e.return !== null && (A(e, 1), Li(e, 1, 0))
    }
    function zi(e) {
      for (; e === Ai;)
        ((Ai = Oi[--ki]), (Oi[ki] = null), (ji = Oi[--ki]), (Oi[ki] = null))
      for (; e === Pi;)
        ((Pi = Mi[--Ni]),
          (Mi[Ni] = null),
          (Ii = Mi[--Ni]),
          (Mi[Ni] = null),
          (Fi = Mi[--Ni]),
          (Mi[Ni] = null))
    }
    function Bi(e, t) {
      ;((Mi[Ni++] = Fi),
        (Mi[Ni++] = Ii),
        (Mi[Ni++] = Pi),
        (Fi = t.id),
        (Ii = t.overflow),
        (Pi = e))
    }
    var Vi = null,
      j = null,
      M = !1,
      Hi = null,
      Ui = !1,
      Wi = Error(i(519))
    function Gi(e) {
      throw (
        Zi(
          Di(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``
              )
            ),
            e
          )
        ),
        Wi
      )
    }
    function Ki(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps
      switch (((t[gt] = e), (t[_t] = r), n)) {
        case `dialog`:
          ;(Q(`cancel`, t), Q(`close`, t))
          break
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t)
          break
        case `video`:
        case `audio`:
          for (n = 0; n < _d.length; n++) Q(_d[n], t)
          break
        case `source`:
          Q(`error`, t)
          break
        case `img`:
        case `image`:
        case `link`:
          ;(Q(`error`, t), Q(`load`, t))
          break
        case `details`:
          Q(`toggle`, t)
          break
        case `input`:
          ;(Q(`invalid`, t),
            Xt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0
            ))
          break
        case `select`:
          Q(`invalid`, t)
          break
        case `textarea`:
          ;(Q(`invalid`, t), en(t, r.value, r.defaultValue, r.children))
      }
      ;((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Md(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = un),
            (t = !0))
          : (t = !1),
        t || Gi(e, !0))
    }
    function qi(e) {
      for (Vi = e.return; Vi;)
        switch (Vi.tag) {
          case 5:
          case 31:
          case 13:
            Ui = !1
            return
          case 27:
          case 3:
            Ui = !0
            return
          default:
            Vi = Vi.return
        }
    }
    function Ji(e) {
      if (e !== Vi) return !1
      if (!M) return (qi(e), (M = !0), !1)
      var t = e.tag,
        n
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              !(n !== `form` && n !== `button`) ||
              Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && j && Gi(e),
        qi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317))
        j = uf(e)
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317))
        j = uf(e)
      } else
        t === 27
          ? ((t = j), Zd(e.type) ? ((e = lf), (lf = null), (j = e)) : (j = t))
          : (j = Vi ? cf(e.stateNode.nextSibling) : null)
      return !0
    }
    function Yi() {
      ;((j = Vi = null), (M = !1))
    }
    function Xi() {
      var e = Hi
      return (
        e !== null &&
          (Ql === null ? (Ql = e) : Ql.push.apply(Ql, e), (Hi = null)),
        e
      )
    }
    function Zi(e) {
      Hi === null ? (Hi = [e]) : Hi.push(e)
    }
    var Qi = me(null),
      $i = null,
      ea = null
    function ta(e, t, n) {
      ;(O(Qi, t._currentValue), (t._currentValue = n))
    }
    function na(e) {
      ;((e._currentValue = Qi.current), D(Qi))
    }
    function ra(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break
        e = e.return
      }
    }
    function ia(e, t, n, r) {
      var a = e.child
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies
        if (o !== null) {
          var s = a.child
          o = o.firstContext
          a: for (; o !== null;) {
            var c = o
            o = a
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ;((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  ra(o.return, n, e),
                  r || (s = null))
                break a
              }
            o = c.next
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341))
          ;((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            ra(s, n, e),
            (s = null))
        } else s = a.child
        if (s !== null) s.return = a
        else
          for (s = a; s !== null;) {
            if (s === e) {
              s = null
              break
            }
            if (((a = s.sibling), a !== null)) {
              ;((a.return = s.return), (s = a))
              break
            }
            s = s.return
          }
        a = s
      }
    }
    function aa(e, t, n, r) {
      e = null
      for (var a = t, o = !1; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = !0
          else if (a.flags & 262144) break
        }
        if (a.tag === 10) {
          var s = a.alternate
          if (s === null) throw Error(i(387))
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type
            Mr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c))
          }
        } else if (a === ve.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387))
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf))
        }
        a = a.return
      }
      ;(e !== null && ia(t, e, n, r), (t.flags |= 262144))
    }
    function oa(e) {
      for (e = e.firstContext; e !== null;) {
        if (!Mr(e.context._currentValue, e.memoizedValue)) return !0
        e = e.next
      }
      return !1
    }
    function sa(e) {
      ;(($i = e),
        (ea = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null))
    }
    function ca(e) {
      return ua($i, e)
    }
    function la(e, t) {
      return ($i === null && sa(e), ua(e, t))
    }
    function ua(e, t) {
      var n = t._currentValue
      if (((t = { context: t, memoizedValue: n, next: null }), ea === null)) {
        if (e === null) throw Error(i(308))
        ;((ea = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288))
      } else ea = ea.next = t
      return n
    }
    var da =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n)
                  },
                })
              this.abort = function () {
                ;((t.aborted = !0),
                  e.forEach(function (e) {
                    return e()
                  }))
              }
            },
      fa = t.unstable_scheduleCallback,
      pa = t.unstable_NormalPriority,
      N = {
        $$typeof: S,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      }
    function ma() {
      return { controller: new da(), data: new Map(), refCount: 0 }
    }
    function ha(e) {
      ;(e.refCount--,
        e.refCount === 0 &&
          fa(pa, function () {
            e.controller.abort()
          }))
    }
    var ga = null,
      _a = 0,
      va = 0,
      ya = null
    function ba(e, t) {
      if (ga === null) {
        var n = (ga = [])
        ;((_a = 0),
          (va = dd()),
          (ya = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e)
            },
          }))
      }
      return (_a++, t.then(xa, xa), t)
    }
    function xa() {
      if (--_a === 0 && ga !== null) {
        ya !== null && (ya.status = `fulfilled`)
        var e = ga
        ;((ga = null), (va = 0), (ya = null))
        for (var t = 0; t < e.length; t++) (0, e[t])()
      }
    }
    function Sa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e)
          },
        }
      return (
        e.then(
          function () {
            ;((r.status = `fulfilled`), (r.value = t))
            for (var e = 0; e < n.length; e++) (0, n[e])(t)
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0)
          }
        ),
        r
      )
    }
    var Ca = T.S
    T.S = function (e, t) {
      ;((tu = Fe()),
        typeof t == `object` && t && typeof t.then == `function` && ba(e, t),
        Ca !== null && Ca(e, t))
    }
    var wa = me(null)
    function Ta() {
      var e = wa.current
      return e === null ? G.pooledCache : e
    }
    function Ea(e, t) {
      t === null ? O(wa, wa.current) : O(wa, t.pool)
    }
    function Da() {
      var e = Ta()
      return e === null ? null : { parent: N._currentValue, pool: e }
    }
    var Oa = Error(i(460)),
      ka = Error(i(474)),
      Aa = Error(i(542)),
      ja = { then: function () {} }
    function Ma(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`)
    }
    function Na(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(un, un), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value
        case `rejected`:
          throw ((e = t.reason), La(e), e)
        default:
          if (typeof t.status == `string`) t.then(un, un)
          else {
            if (((e = G), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482))
            ;((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t
                    ;((n.status = `fulfilled`), (n.value = e))
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t
                    ;((n.status = `rejected`), (n.reason = e))
                  }
                }
              ))
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value
            case `rejected`:
              throw ((e = t.reason), La(e), e)
          }
          throw ((Fa = t), Oa)
      }
    }
    function Pa(e) {
      try {
        var t = e._init
        return t(e._payload)
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Fa = e), Oa)
          : e
      }
    }
    var Fa = null
    function Ia() {
      if (Fa === null) throw Error(i(459))
      var e = Fa
      return ((Fa = null), e)
    }
    function La(e) {
      if (e === Oa || e === Aa) throw Error(i(483))
    }
    var Ra = null,
      za = 0
    function Ba(e) {
      var t = za
      return ((za += 1), Ra === null && (Ra = []), Na(Ra, e, t))
    }
    function Va(e, t) {
      ;((t = t.props.ref), (e.ref = t === void 0 ? null : t))
    }
    function Ha(e, t) {
      throw t.$$typeof === g
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e
            )
          ))
    }
    function Ua(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n)
        }
      }
      function n(n, r) {
        if (!e) return null
        for (; r !== null;) (t(n, r), (r = r.sibling))
        return null
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling))
        return t
      }
      function a(e, t) {
        return ((e = yi(e, t)), (e.index = 0), (e.sibling = null), e)
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        )
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t)
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = Ci(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t)
      }
      function l(e, t, n, r) {
        var i = n.type
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === w &&
                  Pa(i) === t.type))
            ? ((t = a(t, n.props)), Va(t, n), (t.return = e), t)
            : ((t = xi(n.type, n.key, n.props, null, e.mode, r)),
              Va(t, n),
              (t.return = e),
              t)
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Ti(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t)
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = Si(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t)
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = Ci(`` + t, e.mode, n)), (t.return = e), t)
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = xi(t.type, t.key, t.props, null, e.mode, n)),
                Va(n, t),
                (n.return = e),
                n
              )
            case v:
              return ((t = Ti(t, e.mode, n)), (t.return = e), t)
            case w:
              return ((t = Pa(t)), f(e, t, n))
          }
          if (ue(t) || se(t))
            return ((t = Si(t, e.mode, n, null)), (t.return = e), t)
          if (typeof t.then == `function`) return f(e, Ba(t), n)
          if (t.$$typeof === S) return f(e, la(e, t), n)
          Ha(e, t)
        }
        return null
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null
            case v:
              return n.key === i ? u(e, t, n, r) : null
            case w:
              return ((n = Pa(n)), p(e, t, n, r))
          }
          if (ue(n) || se(n)) return i === null ? d(e, t, n, r, null) : null
          if (typeof n.then == `function`) return p(e, t, Ba(n), r)
          if (n.$$typeof === S) return p(e, t, la(e, n), r)
          Ha(e, n)
        }
        return null
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i))
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              )
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              )
            case w:
              return ((r = Pa(r)), m(e, t, n, r, i))
          }
          if (ue(r) || se(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null))
          if (typeof r.then == `function`) return m(e, t, n, Ba(r), i)
          if (r.$$typeof === S) return m(e, t, n, la(t, r), i)
          Ha(t, r)
        }
        return null
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling)
          var _ = p(i, d, s[h], c)
          if (_ === null) {
            d === null && (d = g)
            break
          }
          ;(e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g))
        }
        if (h === s.length) return (n(i, d), M && A(i, h), l)
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)))
          return (M && A(i, h), l)
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)))
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e)
            }),
          M && A(i, h),
          l
        )
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151))
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling)
          var y = p(a, h, v.value, l)
          if (y === null) {
            h === null && (h = _)
            break
          }
          ;(e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _))
        }
        if (v.done) return (n(a, h), M && A(a, g), u)
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)))
          return (M && A(a, g), u)
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)))
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e)
            }),
          M && A(a, g),
          u
        )
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === y &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        ;(n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c))
                        break a
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === w &&
                        Pa(l) === r.type)
                    ) {
                      ;(n(e, r.sibling),
                        (c = a(r, o.props)),
                        Va(c, o),
                        (c.return = e),
                        (e = c))
                      break a
                    }
                    n(e, r)
                    break
                  } else t(e, r)
                  r = r.sibling
                }
                o.type === y
                  ? ((c = Si(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = xi(o.type, o.key, o.props, null, e.mode, c)),
                    Va(c, o),
                    (c.return = e),
                    (e = c))
              }
              return s(e)
            case v:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      ;(n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c))
                      break a
                    } else {
                      n(e, r)
                      break
                    }
                  else t(e, r)
                  r = r.sibling
                }
                ;((c = Ti(o, e.mode, c)), (c.return = e), (e = c))
              }
              return s(e)
            case w:
              return ((o = Pa(o)), b(e, r, o, c))
          }
          if (ue(o)) return h(e, r, o, c)
          if (se(o)) {
            if (((l = se(o)), typeof l != `function`)) throw Error(i(150))
            return ((o = l.call(o)), g(e, r, o, c))
          }
          if (typeof o.then == `function`) return b(e, r, Ba(o), c)
          if (o.$$typeof === S) return b(e, r, la(e, o), c)
          Ha(e, o)
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = Ci(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r)
      }
      return function (e, t, n, r) {
        try {
          za = 0
          var i = b(e, t, n, r)
          return ((Ra = null), i)
        } catch (t) {
          if (t === Oa || t === Aa) throw t
          var a = _i(29, t, null, e.mode)
          return ((a.lanes = r), (a.return = e), a)
        }
      }
    }
    var Wa = Ua(!0),
      Ga = Ua(!1),
      Ka = !1
    function qa(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      }
    }
    function Ja(e, t) {
      ;((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }))
    }
    function Ya(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null }
    }
    function Xa(e, t, n) {
      var r = e.updateQueue
      if (r === null) return null
      if (((r = r.shared), W & 2)) {
        var i = r.pending
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = mi(e)),
          pi(e, null, n),
          t
        )
      }
      return (ui(e, r, t, n), mi(e))
    }
    function Za(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes
        ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), lt(e, n))
      }
    }
    function Qa(e, t) {
      var n = e.updateQueue,
        r = e.alternate
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            }
            ;(a === null ? (i = a = o) : (a = a.next = o), (n = n.next))
          } while (n !== null)
          a === null ? (i = a = t) : (a = a.next = t)
        } else i = a = t
        ;((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n))
        return
      }
      ;((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t))
    }
    var $a = !1
    function eo() {
      if ($a) {
        var e = ya
        if (e !== null) throw e
      }
    }
    function to(e, t, n, r) {
      $a = !1
      var i = e.updateQueue
      Ka = !1
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending
      if (s !== null) {
        i.shared.pending = null
        var c = s,
          l = c.next
        ;((c.next = null), o === null ? (a = l) : (o.next = l), (o = c))
        var u = e.alternate
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)))
      }
      if (a !== null) {
        var d = i.baseState
        ;((o = 0), (u = l = c = null), (s = a))
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane
          if (p ? (q & f) === f : (r & f) === f) {
            ;(f !== 0 && f === va && ($a = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }))
            a: {
              var m = e,
                g = s
              f = t
              var _ = n
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f)
                    break a
                  }
                  d = m
                  break a
                case 3:
                  m.flags = (m.flags & -65537) | 128
                case 0:
                  if (
                    ((m = g.payload),
                    (f = typeof m == `function` ? m.call(_, d, f) : m),
                    f == null)
                  )
                    break a
                  d = h({}, d, f)
                  break a
                case 2:
                  Ka = !0
              }
            }
            ;((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)))
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f))
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break
            ;((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null))
          }
        } while (1)
        ;(u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Kl |= o),
          (e.lanes = o),
          (e.memoizedState = d))
      }
    }
    function no(e, t) {
      if (typeof e != `function`) throw Error(i(191, e))
      e.call(t)
    }
    function ro(e, t) {
      var n = e.callbacks
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) no(n[e], t)
    }
    var io = me(null),
      ao = me(0)
    function oo(e, t) {
      ;((e = Gl), O(ao, e), O(io, t), (Gl = e | t.baseLanes))
    }
    function so() {
      ;(O(ao, Gl), O(io, io.current))
    }
    function co() {
      ;((Gl = ao.current), D(io), D(ao))
    }
    var lo = me(null),
      uo = null
    function fo(e) {
      var t = e.alternate
      ;(O(P, P.current & 1),
        O(lo, e),
        uo === null &&
          (t === null || io.current !== null || t.memoizedState !== null) &&
          (uo = e))
    }
    function po(e) {
      ;(O(P, P.current), O(lo, e), uo === null && (uo = e))
    }
    function mo(e) {
      e.tag === 22
        ? (O(P, P.current), O(lo, e), uo === null && (uo = e))
        : ho(e)
    }
    function ho() {
      ;(O(P, P.current), O(lo, lo.current))
    }
    function go(e) {
      ;(D(lo), uo === e && (uo = null), D(P))
    }
    var P = me(0)
    function _o(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n)))
            return t
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t
        } else if (t.child !== null) {
          ;((t.child.return = t), (t = t.child))
          continue
        }
        if (t === e) break
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null
          t = t.return
        }
        ;((t.sibling.return = t.return), (t = t.sibling))
      }
      return null
    }
    var vo = 0,
      F = null,
      I = null,
      L = null,
      yo = !1,
      bo = !1,
      xo = !1,
      So = 0,
      Co = 0,
      wo = null,
      To = 0
    function R() {
      throw Error(i(321))
    }
    function Eo(e, t) {
      if (t === null) return !1
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Mr(e[n], t[n])) return !1
      return !0
    }
    function Do(e, t, n, r, i, a) {
      return (
        (vo = a),
        (F = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (T.H = e === null || e.memoizedState === null ? Us : Ws),
        (xo = !1),
        (a = n(r, i)),
        (xo = !1),
        bo && (a = ko(t, n, r, i)),
        Oo(e),
        a
      )
    }
    function Oo(e) {
      T.H = Hs
      var t = I !== null && I.next !== null
      if (((vo = 0), (L = I = F = null), (yo = !1), (Co = 0), (wo = null), t))
        throw Error(i(300))
      e === null || B || ((e = e.dependencies), e !== null && oa(e) && (B = !0))
    }
    function ko(e, t, n, r) {
      F = e
      var a = 0
      do {
        if ((bo && (wo = null), (Co = 0), (bo = !1), 25 <= a))
          throw Error(i(301))
        if (((a += 1), (L = I = null), e.updateQueue != null)) {
          var o = e.updateQueue
          ;((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0))
        }
        ;((T.H = Gs), (o = t(n, r)))
      } while (bo)
      return o
    }
    function Ao() {
      var e = T.H,
        t = e.useState()[0]
      return (
        (t = typeof t.then == `function` ? Io(t) : t),
        (e = e.useState()[0]),
        (I === null ? null : I.memoizedState) !== e && (F.flags |= 1024),
        t
      )
    }
    function jo() {
      var e = So !== 0
      return ((So = 0), e)
    }
    function Mo(e, t, n) {
      ;((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n))
    }
    function No(e) {
      if (yo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue
          ;(t !== null && (t.pending = null), (e = e.next))
        }
        yo = !1
      }
      ;((vo = 0), (L = I = F = null), (bo = !1), (Co = So = 0), (wo = null))
    }
    function Po() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      }
      return (L === null ? (F.memoizedState = L = e) : (L = L.next = e), L)
    }
    function z() {
      if (I === null) {
        var e = F.alternate
        e = e === null ? null : e.memoizedState
      } else e = I.next
      var t = L === null ? F.memoizedState : L.next
      if (t !== null) ((L = t), (I = e))
      else {
        if (e === null)
          throw F.alternate === null ? Error(i(467)) : Error(i(310))
        ;((I = e),
          (e = {
            memoizedState: I.memoizedState,
            baseState: I.baseState,
            baseQueue: I.baseQueue,
            queue: I.queue,
            next: null,
          }),
          L === null ? (F.memoizedState = L = e) : (L = L.next = e))
      }
      return L
    }
    function Fo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null }
    }
    function Io(e) {
      var t = Co
      return (
        (Co += 1),
        wo === null && (wo = []),
        (e = Na(wo, e, t)),
        (t = F),
        (L === null ? t.memoizedState : L.next) === null &&
          ((t = t.alternate),
          (T.H = t === null || t.memoizedState === null ? Us : Ws)),
        e
      )
    }
    function Lo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Io(e)
        if (e.$$typeof === S) return ca(e)
      }
      throw Error(i(438, String(e)))
    }
    function Ro(e) {
      var t = null,
        n = F.updateQueue
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = F.alternate
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice()
                }),
                index: 0,
              })))
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Fo()), (F.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ae
      return (t.index++, n)
    }
    function zo(e, t) {
      return typeof t == `function` ? t(e) : t
    }
    function Bo(e) {
      return Vo(z(), I, e)
    }
    function Vo(e, t, n) {
      var r = e.queue
      if (r === null) throw Error(i(311))
      r.lastRenderedReducer = n
      var a = e.baseQueue,
        o = r.pending
      if (o !== null) {
        if (a !== null) {
          var s = a.next
          ;((a.next = o.next), (o.next = s))
        }
        ;((t.baseQueue = a = o), (r.pending = null))
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o
      else {
        t = a.next
        var c = (s = null),
          l = null,
          u = t,
          d = !1
        do {
          var f = u.lane & -536870913
          if (f === u.lane ? (vo & f) === f : (q & f) === f) {
            var p = u.revertLane
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === va && (d = !0))
            else if ((vo & p) === p) {
              ;((u = u.next), p === va && (d = !0))
              continue
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (F.lanes |= p),
                (Kl |= p))
            ;((f = u.action),
              xo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)))
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (F.lanes |= f),
              (Kl |= f))
          u = u.next
        } while (u !== null && u !== t)
        if (
          (l === null ? (s = o) : (l.next = c),
          !Mr(o, e.memoizedState) && ((B = !0), d && ((n = ya), n !== null)))
        )
          throw n
        ;((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o))
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch])
    }
    function Ho(e) {
      var t = z(),
        n = t.queue
      if (n === null) throw Error(i(311))
      n.lastRenderedReducer = e
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState
      if (a !== null) {
        n.pending = null
        var s = (a = a.next)
        do ((o = e(o, s.action)), (s = s.next))
        while (s !== a)
        ;(Mr(o, t.memoizedState) || (B = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o))
      }
      return [o, r]
    }
    function Uo(e, t, n) {
      var r = F,
        a = z(),
        o = M
      if (o) {
        if (n === void 0) throw Error(i(407))
        n = n()
      } else n = t()
      var s = !Mr((I || a).memoizedState, n)
      if (
        (s && ((a.memoizedState = n), (B = !0)),
        (a = a.queue),
        ms(Ko.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (L !== null && L.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          ls(9, { destroy: void 0 }, Go.bind(null, r, a, n, t), null),
          G === null)
        )
          throw Error(i(349))
        o || vo & 127 || Wo(r, t, n)
      }
      return n
    }
    function Wo(e, t, n) {
      ;((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = F.updateQueue),
        t === null
          ? ((t = Fo()), (F.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)))
    }
    function Go(e, t, n, r) {
      ;((t.value = n), (t.getSnapshot = r), qo(t) && Jo(e))
    }
    function Ko(e, t, n) {
      return n(function () {
        qo(t) && Jo(e)
      })
    }
    function qo(e) {
      var t = e.getSnapshot
      e = e.value
      try {
        var n = t()
        return !Mr(e, n)
      } catch {
        return !0
      }
    }
    function Jo(e) {
      var t = fi(e, 2)
      t !== null && hu(t, e, 2)
    }
    function Yo(e) {
      var t = Po()
      if (typeof e == `function`) {
        var n = e
        if (((e = n()), xo)) {
          Ke(!0)
          try {
            n()
          } finally {
            Ke(!1)
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: zo,
          lastRenderedState: e,
        }),
        t
      )
    }
    function Xo(e, t, n, r) {
      return ((e.baseState = n), Vo(e, I, typeof r == `function` ? r : zo))
    }
    function Zo(e, t, n, r, a) {
      if (zs(e)) throw Error(i(485))
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e)
          },
        }
        ;(T.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Qo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)))
      }
    }
    function Qo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state
      if (t.isTransition) {
        var a = T.T,
          o = {}
        T.T = o
        try {
          var s = n(i, r),
            c = T.S
          ;(c !== null && c(o, s), $o(e, t, s))
        } catch (n) {
          ts(e, t, n)
        } finally {
          ;(a !== null && o.types !== null && (a.types = o.types), (T.T = a))
        }
      } else
        try {
          ;((a = n(i, r)), $o(e, t, a))
        } catch (n) {
          ts(e, t, n)
        }
    }
    function $o(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              es(e, t, n)
            },
            function (n) {
              return ts(e, t, n)
            }
          )
        : es(e, t, n)
    }
    function es(e, t, n) {
      ;((t.status = `fulfilled`),
        (t.value = n),
        ns(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Qo(e, n))))
    }
    function ts(e, t, n) {
      var r = e.pending
      if (((e.pending = null), r !== null)) {
        r = r.next
        do ((t.status = `rejected`), (t.reason = n), ns(t), (t = t.next))
        while (t !== r)
      }
      e.action = null
    }
    function ns(e) {
      e = e.listeners
      for (var t = 0; t < e.length; t++) (0, e[t])()
    }
    function rs(e, t) {
      return t
    }
    function is(e, t) {
      if (M) {
        var n = G.formState
        if (n !== null) {
          a: {
            var r = F
            if (M) {
              if (j) {
                b: {
                  for (var i = j, a = Ui; i.nodeType !== 8;) {
                    if (!a) {
                      i = null
                      break b
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null
                      break b
                    }
                  }
                  ;((a = i.data), (i = a === `F!` || a === `F` ? i : null))
                }
                if (i) {
                  ;((j = cf(i.nextSibling)), (r = i.data === `F!`))
                  break a
                }
              }
              Gi(r)
            }
            r = !1
          }
          r && (t = n[0])
        }
      }
      return (
        (n = Po()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rs,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Is.bind(null, F, r)),
        (r.dispatch = n),
        (r = Yo(!1)),
        (a = Rs.bind(null, F, !1, r.queue)),
        (r = Po()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Zo.bind(null, F, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      )
    }
    function as(e) {
      return os(z(), I, e)
    }
    function os(e, t, n) {
      if (
        ((t = Vo(e, t, rs)[0]),
        (e = Bo(zo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Io(t)
        } catch (e) {
          throw e === Oa ? Aa : e
        }
      else r = t
      t = z()
      var i = t.queue,
        a = i.dispatch
      return (
        n !== t.memoizedState &&
          ((F.flags |= 2048),
          ls(9, { destroy: void 0 }, ss.bind(null, i, n), null)),
        [r, a, e]
      )
    }
    function ss(e, t) {
      e.action = t
    }
    function cs(e) {
      var t = z(),
        n = I
      if (n !== null) return os(t, n, e)
      ;(z(), (t = t.memoizedState), (n = z()))
      var r = n.queue.dispatch
      return ((n.memoizedState = e), [t, r, !1])
    }
    function ls(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = F.updateQueue),
        t === null && ((t = Fo()), (F.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      )
    }
    function us() {
      return z().memoizedState
    }
    function ds(e, t, n, r) {
      var i = Po()
      ;((F.flags |= e),
        (i.memoizedState = ls(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r
        )))
    }
    function fs(e, t, n, r) {
      var i = z()
      r = r === void 0 ? null : r
      var a = i.memoizedState.inst
      I !== null && r !== null && Eo(r, I.memoizedState.deps)
        ? (i.memoizedState = ls(t, a, n, r))
        : ((F.flags |= e), (i.memoizedState = ls(1 | t, a, n, r)))
    }
    function ps(e, t) {
      ds(8390656, 8, e, t)
    }
    function ms(e, t) {
      fs(2048, 8, e, t)
    }
    function hs(e) {
      F.flags |= 4
      var t = F.updateQueue
      if (t === null) ((t = Fo()), (F.updateQueue = t), (t.events = [e]))
      else {
        var n = t.events
        n === null ? (t.events = [e]) : n.push(e)
      }
    }
    function gs(e) {
      var t = z().memoizedState
      return (
        hs({ ref: t, nextImpl: e }),
        function () {
          if (W & 2) throw Error(i(440))
          return t.impl.apply(void 0, arguments)
        }
      )
    }
    function _s(e, t) {
      return fs(4, 2, e, t)
    }
    function vs(e, t) {
      return fs(4, 4, e, t)
    }
    function ys(e, t) {
      if (typeof t == `function`) {
        e = e()
        var n = t(e)
        return function () {
          typeof n == `function` ? n() : t(null)
        }
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null
          }
        )
    }
    function bs(e, t, n) {
      ;((n = n == null ? null : n.concat([e])),
        fs(4, 4, ys.bind(null, t, e), n))
    }
    function xs() {}
    function Ss(e, t) {
      var n = z()
      t = t === void 0 ? null : t
      var r = n.memoizedState
      return t !== null && Eo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
    }
    function Cs(e, t) {
      var n = z()
      t = t === void 0 ? null : t
      var r = n.memoizedState
      if (t !== null && Eo(t, r[1])) return r[0]
      if (((r = e()), xo)) {
        Ke(!0)
        try {
          e()
        } finally {
          Ke(!1)
        }
      }
      return ((n.memoizedState = [r, t]), r)
    }
    function ws(e, t, n) {
      return n === void 0 || (vo & 1073741824 && !(q & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = mu()), (F.lanes |= e), (Kl |= e), n)
    }
    function Ts(e, t, n, r) {
      return Mr(n, t)
        ? n
        : io.current === null
          ? !(vo & 42) || (vo & 1073741824 && !(q & 261930))
            ? ((B = !0), (e.memoizedState = n))
            : ((e = mu()), (F.lanes |= e), (Kl |= e), t)
          : ((e = ws(e, n, r)), Mr(e, t) || (B = !0), e)
    }
    function Es(e, t, n, r, i) {
      var a = E.p
      E.p = a !== 0 && 8 > a ? a : 8
      var o = T.T,
        s = {}
      ;((T.T = s), Rs(e, !1, t, n))
      try {
        var c = i(),
          l = T.S
        ;(l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ls(e, t, Sa(c, r), pu(e))
            : Ls(e, t, r, pu(e)))
      } catch (n) {
        Ls(e, t, { then: function () {}, status: `rejected`, reason: n }, pu())
      } finally {
        ;((E.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (T.T = o))
      }
    }
    function Ds() {}
    function Os(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476))
      var a = ks(e).queue
      Es(
        e,
        a,
        t,
        de,
        n === null
          ? Ds
          : function () {
              return (As(e), n(r))
            }
      )
    }
    function ks(e) {
      var t = e.memoizedState
      if (t !== null) return t
      t = {
        memoizedState: de,
        baseState: de,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: zo,
          lastRenderedState: de,
        },
        next: null,
      }
      var n = {}
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: zo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      )
    }
    function As(e) {
      var t = ks(e)
      ;(t.next === null && (t = e.alternate.memoizedState),
        Ls(e, t.next.queue, {}, pu()))
    }
    function js() {
      return ca(Qf)
    }
    function Ms() {
      return z().memoizedState
    }
    function Ns() {
      return z().memoizedState
    }
    function Ps(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = pu()
            e = Ya(n)
            var r = Xa(t, e, n)
            ;(r !== null && (hu(r, t, n), Za(r, t, n)),
              (t = { cache: ma() }),
              (e.payload = t))
            return
        }
        t = t.return
      }
    }
    function Fs(e, t, n) {
      var r = pu()
      ;((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        zs(e)
          ? Bs(t, n)
          : ((n = di(e, t, n, r)), n !== null && (hu(n, e, r), Vs(n, t, r))))
    }
    function Is(e, t, n) {
      Ls(e, t, n, pu())
    }
    function Ls(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
      if (zs(e)) Bs(t, i)
      else {
        var a = e.alternate
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n)
            if (((i.hasEagerState = !0), (i.eagerState = s), Mr(s, o)))
              return (ui(e, t, i, 0), G === null && li(), !1)
          } catch {}
        if (((n = di(e, t, i, r)), n !== null))
          return (hu(n, e, r), Vs(n, t, r), !0)
      }
      return !1
    }
    function Rs(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: dd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        zs(e))
      ) {
        if (t) throw Error(i(479))
      } else ((t = di(e, n, r, 2)), t !== null && hu(t, e, 2))
    }
    function zs(e) {
      var t = e.alternate
      return e === F || (t !== null && t === F)
    }
    function Bs(e, t) {
      bo = yo = !0
      var n = e.pending
      ;(n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t))
    }
    function Vs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes
        ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), lt(e, n))
      }
    }
    var Hs = {
      readContext: ca,
      use: Lo,
      useCallback: R,
      useContext: R,
      useEffect: R,
      useImperativeHandle: R,
      useLayoutEffect: R,
      useInsertionEffect: R,
      useMemo: R,
      useReducer: R,
      useRef: R,
      useState: R,
      useDebugValue: R,
      useDeferredValue: R,
      useTransition: R,
      useSyncExternalStore: R,
      useId: R,
      useHostTransitionStatus: R,
      useFormState: R,
      useActionState: R,
      useOptimistic: R,
      useMemoCache: R,
      useCacheRefresh: R,
    }
    Hs.useEffectEvent = R
    var Us = {
        readContext: ca,
        use: Lo,
        useCallback: function (e, t) {
          return ((Po().memoizedState = [e, t === void 0 ? null : t]), e)
        },
        useContext: ca,
        useEffect: ps,
        useImperativeHandle: function (e, t, n) {
          ;((n = n == null ? null : n.concat([e])),
            ds(4194308, 4, ys.bind(null, t, e), n))
        },
        useLayoutEffect: function (e, t) {
          return ds(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
          ds(4, 2, e, t)
        },
        useMemo: function (e, t) {
          var n = Po()
          t = t === void 0 ? null : t
          var r = e()
          if (xo) {
            Ke(!0)
            try {
              e()
            } finally {
              Ke(!1)
            }
          }
          return ((n.memoizedState = [r, t]), r)
        },
        useReducer: function (e, t, n) {
          var r = Po()
          if (n !== void 0) {
            var i = n(t)
            if (xo) {
              Ke(!0)
              try {
                n(t)
              } finally {
                Ke(!1)
              }
            }
          } else i = t
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Fs.bind(null, F, e)),
            [r.memoizedState, e]
          )
        },
        useRef: function (e) {
          var t = Po()
          return ((e = { current: e }), (t.memoizedState = e))
        },
        useState: function (e) {
          e = Yo(e)
          var t = e.queue,
            n = Is.bind(null, F, t)
          return ((t.dispatch = n), [e.memoizedState, n])
        },
        useDebugValue: xs,
        useDeferredValue: function (e, t) {
          return ws(Po(), e, t)
        },
        useTransition: function () {
          var e = Yo(!1)
          return (
            (e = Es.bind(null, F, e.queue, !0, !1)),
            (Po().memoizedState = e),
            [!1, e]
          )
        },
        useSyncExternalStore: function (e, t, n) {
          var r = F,
            a = Po()
          if (M) {
            if (n === void 0) throw Error(i(407))
            n = n()
          } else {
            if (((n = t()), G === null)) throw Error(i(349))
            q & 127 || Wo(r, t, n)
          }
          a.memoizedState = n
          var o = { value: n, getSnapshot: t }
          return (
            (a.queue = o),
            ps(Ko.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            ls(9, { destroy: void 0 }, Go.bind(null, r, o, n, t), null),
            n
          )
        },
        useId: function () {
          var e = Po(),
            t = G.identifierPrefix
          if (M) {
            var n = Ii,
              r = Fi
            ;((n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = So++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`))
          } else ((n = To++), (t = `_` + t + `r_` + n.toString(32) + `_`))
          return (e.memoizedState = t)
        },
        useHostTransitionStatus: js,
        useFormState: is,
        useActionState: is,
        useOptimistic: function (e) {
          var t = Po()
          t.memoizedState = t.baseState = e
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          }
          return (
            (t.queue = n),
            (t = Rs.bind(null, F, !0, n)),
            (n.dispatch = t),
            [e, t]
          )
        },
        useMemoCache: Ro,
        useCacheRefresh: function () {
          return (Po().memoizedState = Ps.bind(null, F))
        },
        useEffectEvent: function (e) {
          var t = Po(),
            n = { impl: e }
          return (
            (t.memoizedState = n),
            function () {
              if (W & 2) throw Error(i(440))
              return n.impl.apply(void 0, arguments)
            }
          )
        },
      },
      Ws = {
        readContext: ca,
        use: Lo,
        useCallback: Ss,
        useContext: ca,
        useEffect: ms,
        useImperativeHandle: bs,
        useInsertionEffect: _s,
        useLayoutEffect: vs,
        useMemo: Cs,
        useReducer: Bo,
        useRef: us,
        useState: function () {
          return Bo(zo)
        },
        useDebugValue: xs,
        useDeferredValue: function (e, t) {
          return Ts(z(), I.memoizedState, e, t)
        },
        useTransition: function () {
          var e = Bo(zo)[0],
            t = z().memoizedState
          return [typeof e == `boolean` ? e : Io(e), t]
        },
        useSyncExternalStore: Uo,
        useId: Ms,
        useHostTransitionStatus: js,
        useFormState: as,
        useActionState: as,
        useOptimistic: function (e, t) {
          return Xo(z(), I, e, t)
        },
        useMemoCache: Ro,
        useCacheRefresh: Ns,
      }
    Ws.useEffectEvent = gs
    var Gs = {
      readContext: ca,
      use: Lo,
      useCallback: Ss,
      useContext: ca,
      useEffect: ms,
      useImperativeHandle: bs,
      useInsertionEffect: _s,
      useLayoutEffect: vs,
      useMemo: Cs,
      useReducer: Ho,
      useRef: us,
      useState: function () {
        return Ho(zo)
      },
      useDebugValue: xs,
      useDeferredValue: function (e, t) {
        var n = z()
        return I === null ? ws(n, e, t) : Ts(n, I.memoizedState, e, t)
      },
      useTransition: function () {
        var e = Ho(zo)[0],
          t = z().memoizedState
        return [typeof e == `boolean` ? e : Io(e), t]
      },
      useSyncExternalStore: Uo,
      useId: Ms,
      useHostTransitionStatus: js,
      useFormState: cs,
      useActionState: cs,
      useOptimistic: function (e, t) {
        var n = z()
        return I === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Xo(n, I, e, t)
      },
      useMemoCache: Ro,
      useCacheRefresh: Ns,
    }
    Gs.useEffectEvent = gs
    function Ks(e, t, n, r) {
      ;((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n))
    }
    var qs = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals
        var r = pu(),
          i = Ya(r)
        ;((i.payload = t),
          n != null && (i.callback = n),
          (t = Xa(e, i, r)),
          t !== null && (hu(t, e, r), Za(t, e, r)))
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals
        var r = pu(),
          i = Ya(r)
        ;((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Xa(e, i, r)),
          t !== null && (hu(t, e, r), Za(t, e, r)))
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals
        var n = pu(),
          r = Ya(n)
        ;((r.tag = 2),
          t != null && (r.callback = t),
          (t = Xa(e, r, n)),
          t !== null && (hu(t, e, n), Za(t, e, n)))
      },
    }
    function Js(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Nr(n, r) || !Nr(i, a)
            : !0
      )
    }
    function Ys(e, t, n, r) {
      ;((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && qs.enqueueReplaceState(t, t.state, null))
    }
    function Xs(e, t) {
      var n = t
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r])
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e))
          n[i] === void 0 && (n[i] = e[i])
      return n
    }
    function Zs(e) {
      ai(e)
    }
    function Qs(e) {
      console.error(e)
    }
    function $s(e) {
      ai(e)
    }
    function ec(e, t) {
      try {
        var n = e.onUncaughtError
        n(t.value, { componentStack: t.stack })
      } catch (e) {
        setTimeout(function () {
          throw e
        })
      }
    }
    function tc(e, t, n) {
      try {
        var r = e.onCaughtError
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        })
      } catch (e) {
        setTimeout(function () {
          throw e
        })
      }
    }
    function nc(e, t, n) {
      return (
        (n = Ya(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          ec(e, t)
        }),
        n
      )
    }
    function rc(e) {
      return ((e = Ya(e)), (e.tag = 3), e)
    }
    function ic(e, t, n, r) {
      var i = n.type.getDerivedStateFromError
      if (typeof i == `function`) {
        var a = r.value
        ;((e.payload = function () {
          return i(a)
        }),
          (e.callback = function () {
            tc(t, n, r)
          }))
      }
      var o = n.stateNode
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          ;(tc(t, n, r),
            typeof i != `function` &&
              (iu === null ? (iu = new Set([this])) : iu.add(this)))
          var e = r.stack
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          })
        })
    }
    function ac(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && aa(t, n, a, !0),
          (n = lo.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                uo === null ? Du() : n.alternate === null && Y === 0 && (Y = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === ja
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Gu(e, r, a)),
                !1
              )
            case 22:
              return (
                (n.flags |= 65536),
                r === ja
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Gu(e, r, a)),
                !1
              )
          }
          throw Error(i(435, n.tag))
        }
        return (Gu(e, r, a), Du(), !1)
      }
      if (M)
        return (
          (t = lo.current),
          t === null
            ? (r !== Wi && ((t = Error(i(423), { cause: r })), Zi(Di(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = Di(r, n)),
              (a = nc(e.stateNode, r, a)),
              Qa(e, a),
              Y !== 4 && (Y = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Wi && ((e = Error(i(422), { cause: r })), Zi(Di(e, n)))),
          !1
        )
      var o = Error(i(520), { cause: r })
      if (
        ((o = Di(o, n)),
        Zl === null ? (Zl = [o]) : Zl.push(o),
        Y !== 4 && (Y = 2),
        t === null)
      )
        return !0
      ;((r = Di(r, n)), (n = t))
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = nc(n.stateNode, r, e)),
              Qa(n, e),
              !1
            )
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (iu === null || !iu.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = rc(a)),
                ic(a, e, n, r),
                Qa(n, a),
                !1
              )
        }
        n = n.return
      } while (n !== null)
      return !1
    }
    var oc = Error(i(461)),
      B = !1
    function sc(e, t, n, r) {
      t.child = e === null ? Ga(t, null, n, r) : Wa(t, e.child, n, r)
    }
    function cc(e, t, n, r, i) {
      n = n.render
      var a = t.ref
      if (`ref` in r) {
        var o = {}
        for (var s in r) s !== `ref` && (o[s] = r[s])
      } else o = r
      return (
        sa(t),
        (r = Do(e, t, n, o, a, i)),
        (s = jo()),
        e !== null && !B
          ? (Mo(e, t, i), Mc(e, t, i))
          : (M && s && Ri(t), (t.flags |= 1), sc(e, t, r, i), t.child)
      )
    }
    function lc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type
        return typeof a == `function` &&
          !vi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), uc(e, t, a, r, i))
          : ((e = xi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e))
      }
      if (((a = e.child), !Nc(e, i))) {
        var o = a.memoizedProps
        if (
          ((n = n.compare),
          (n = n === null ? Nr : n),
          n(o, r) && e.ref === t.ref)
        )
          return Mc(e, t, i)
      }
      return (
        (t.flags |= 1),
        (e = yi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      )
    }
    function uc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps
        if (Nr(a, r) && e.ref === t.ref)
          if (((B = !1), (t.pendingProps = r = a), Nc(e, i)))
            e.flags & 131072 && (B = !0)
          else return ((t.lanes = e.lanes), Mc(e, t, i))
      }
      return vc(e, t, n, r, i)
    }
    function dc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling))
            r = i & ~a
          } else ((r = 0), (t.child = null))
          return pc(e, t, a, n, r)
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Ea(t, a === null ? null : a.cachePool),
            a === null ? so() : oo(t, a),
            mo(t))
        else
          return (
            (r = t.lanes = 536870912),
            pc(e, t, a === null ? n : a.baseLanes | n, n, r)
          )
      } else
        a === null
          ? (e !== null && Ea(t, null), so(), ho(t))
          : (Ea(t, a.cachePool), oo(t, a), ho(t), (t.memoizedState = null))
      return (sc(e, t, i, n), t.child)
    }
    function fc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      )
    }
    function pc(e, t, n, r, i) {
      var a = Ta()
      return (
        (a = a === null ? null : { parent: N._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Ea(t, null),
        so(),
        mo(t),
        e !== null && aa(e, t, r, !0),
        (t.childLanes = i),
        null
      )
    }
    function mc(e, t) {
      return (
        (t = Dc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      )
    }
    function hc(e, t, n) {
      return (
        Wa(t, e.child, null, n),
        (e = mc(t, t.pendingProps)),
        (e.flags |= 2),
        go(t),
        (t.memoizedState = null),
        e
      )
    }
    function gc(e, t, n) {
      var r = t.pendingProps,
        a = (t.flags & 128) != 0
      if (((t.flags &= -129), e === null)) {
        if (M) {
          if (r.mode === `hidden`)
            return ((e = mc(t, r)), (t.lanes = 536870912), fc(null, e))
          if (
            (po(t),
            (e = j)
              ? ((e = rf(e, Ui)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Pi === null ? null : { id: Fi, overflow: Ii },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Vi = t),
                  (j = null)))
              : (e = null),
            e === null)
          )
            throw Gi(t)
          return ((t.lanes = 536870912), null)
        }
        return mc(t, r)
      }
      var o = e.memoizedState
      if (o !== null) {
        var s = o.dehydrated
        if ((po(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = hc(e, t, n)))
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null))
          else throw Error(i(558))
        else if (
          (B || aa(e, t, n, !1), (a = (n & e.childLanes) !== 0), B || a)
        ) {
          if (
            ((r = G),
            r !== null && ((s = ut(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), fi(e, s), hu(r, e, s), oc)
          ;(Du(), (t = hc(e, t, n)))
        } else
          ((e = o.treeContext),
            (j = cf(s.nextSibling)),
            (Vi = t),
            (M = !0),
            (Hi = null),
            (Ui = !1),
            e !== null && Bi(t, e),
            (t = mc(t, r)),
            (t.flags |= 4096))
        return t
      }
      return (
        (e = yi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      )
    }
    function _c(e, t) {
      var n = t.ref
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816)
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284))
        ;(e === null || e.ref !== n) && (t.flags |= 4194816)
      }
    }
    function vc(e, t, n, r, i) {
      return (
        sa(t),
        (n = Do(e, t, n, r, void 0, i)),
        (r = jo()),
        e !== null && !B
          ? (Mo(e, t, i), Mc(e, t, i))
          : (M && r && Ri(t), (t.flags |= 1), sc(e, t, n, i), t.child)
      )
    }
    function yc(e, t, n, r, i, a) {
      return (
        sa(t),
        (t.updateQueue = null),
        (n = ko(t, r, n, i)),
        Oo(e),
        (r = jo()),
        e !== null && !B
          ? (Mo(e, t, a), Mc(e, t, a))
          : (M && r && Ri(t), (t.flags |= 1), sc(e, t, n, a), t.child)
      )
    }
    function bc(e, t, n, r, i) {
      if ((sa(t), t.stateNode === null)) {
        var a = hi,
          o = n.contextType
        ;(typeof o == `object` && o && (a = ca(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = qs),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          qa(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? ca(o) : hi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Ks(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && qs.enqueueReplaceState(a, a.state, null),
            to(t, r, a, i),
            eo(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0))
      } else if (e === null) {
        a = t.stateNode
        var s = t.memoizedProps,
          c = Xs(n, s)
        a.props = c
        var l = a.context,
          u = n.contextType
        ;((o = hi), typeof u == `object` && u && (o = ca(u)))
        var d = n.getDerivedStateFromProps
        ;((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Ys(t, a, r, o)),
          (Ka = !1))
        var f = t.memoizedState
        ;((a.state = f),
          to(t, r, a, i),
          eo(),
          (l = t.memoizedState),
          s || f !== l || Ka
            ? (typeof d == `function` &&
                (Ks(t, n, d, r), (l = t.memoizedState)),
              (c = Ka || Js(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)))
      } else {
        ;((a = t.stateNode),
          Ja(e, t),
          (o = t.memoizedProps),
          (u = Xs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = hi),
          typeof l == `object` && l && (c = ca(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Ys(t, a, r, c)),
          (Ka = !1),
          (f = t.memoizedState),
          (a.state = f),
          to(t, r, a, i),
          eo())
        var p = t.memoizedState
        o !== d ||
        f !== p ||
        Ka ||
        (e !== null && e.dependencies !== null && oa(e.dependencies))
          ? (typeof s == `function` && (Ks(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ka ||
              Js(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && oa(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1))
      }
      return (
        (a = r),
        _c(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Wa(t, e.child, null, i)),
                (t.child = Wa(t, null, n, i)))
              : sc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Mc(e, t, i)),
        e
      )
    }
    function xc(e, t, n, r) {
      return (Yi(), (t.flags |= 256), sc(e, t, n, r), t.child)
    }
    var Sc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    }
    function Cc(e) {
      return { baseLanes: e, cachePool: Da() }
    }
    function wc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Yl), e)
    }
    function Tc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = (t.flags & 128) != 0,
        s
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null ? !1 : (P.current & 2) != 0),
        s && ((a = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (M) {
          if (
            (a ? fo(t) : ho(t),
            (e = j)
              ? ((e = rf(e, Ui)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Pi === null ? null : { id: Fi, overflow: Ii },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Vi = t),
                  (j = null)))
              : (e = null),
            e === null)
          )
            throw Gi(t)
          return (of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null)
        }
        var c = r.children
        return (
          (r = r.fallback),
          a
            ? (ho(t),
              (a = t.mode),
              (c = Dc({ mode: `hidden`, children: c }, a)),
              (r = Si(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = Cc(n)),
              (r.childLanes = wc(e, s, n)),
              (t.memoizedState = Sc),
              fc(null, r))
            : (fo(t), Ec(t, c))
        )
      }
      var l = e.memoizedState
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (fo(t), (t.flags &= -257), (t = Oc(e, t, n)))
            : t.memoizedState === null
              ? (ho(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Dc({ mode: `visible`, children: r.children }, a)),
                (c = Si(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Wa(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = Cc(n)),
                (r.childLanes = wc(e, s, n)),
                (t.memoizedState = Sc),
                (t = fc(null, r)))
              : (ho(t), (t.child = e.child), (t.flags |= 128), (t = null))
        else if ((fo(t), of(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst
          ;((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Zi({ value: r, source: null, stack: null }),
            (t = Oc(e, t, n)))
        } else if (
          (B || aa(e, t, n, !1), (s = (n & e.childLanes) !== 0), B || s)
        ) {
          if (
            ((s = G),
            s !== null && ((r = ut(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), fi(e, r), hu(s, e, r), oc)
          ;(af(c) || Du(), (t = Oc(e, t, n)))
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (j = cf(c.nextSibling)),
              (Vi = t),
              (M = !0),
              (Hi = null),
              (Ui = !1),
              e !== null && Bi(t, e),
              (t = Ec(t, r.children)),
              (t.flags |= 4096))
        return t
      }
      return a
        ? (ho(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = yi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = Si(c, a, n, null)), (c.flags |= 2))
            : (c = yi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          fc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = Cc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = Da())
                : ((l = N._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = wc(e, s, n)),
          (t.memoizedState = Sc),
          fc(e.child, r))
        : (fo(t),
          (n = e.child),
          (e = n.sibling),
          (n = yi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n)
    }
    function Ec(e, t) {
      return (
        (t = Dc({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      )
    }
    function Dc(e, t) {
      return ((e = _i(22, e, null, t)), (e.lanes = 0), e)
    }
    function Oc(e, t, n) {
      return (
        Wa(t, e.child, null, n),
        (e = Ec(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      )
    }
    function kc(e, t, n) {
      e.lanes |= t
      var r = e.alternate
      ;(r !== null && (r.lanes |= t), ra(e.return, t, n))
    }
    function Ac(e, t, n, r, i, a) {
      var o = e.memoizedState
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a))
    }
    function jc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail
      r = r.children
      var o = P.current,
        s = (o & 2) != 0
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        O(P, o),
        sc(e, t, r, n),
        (r = M ? ji : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && kc(e, n, t)
          else if (e.tag === 19) kc(e, n, t)
          else if (e.child !== null) {
            ;((e.child.return = e), (e = e.child))
            continue
          }
          if (e === t) break a
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a
            e = e.return
          }
          ;((e.sibling.return = e.return), (e = e.sibling))
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null;)
            ((e = n.alternate),
              e !== null && _o(e) === null && (i = n),
              (n = n.sibling))
          ;((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Ac(t, !1, i, n, a, r))
          break
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && _o(e) === null)) {
              t.child = i
              break
            }
            ;((e = i.sibling), (i.sibling = n), (n = i), (i = e))
          }
          Ac(t, !0, n, null, a, r)
          break
        case `together`:
          Ac(t, !1, null, null, void 0, r)
          break
        default:
          t.memoizedState = null
      }
      return t.child
    }
    function Mc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Kl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((aa(e, t, n, !1), (n & t.childLanes) === 0)) return null
        } else return null
      if (e !== null && t.child !== e.child) throw Error(i(153))
      if (t.child !== null) {
        for (
          e = t.child, n = yi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = yi(e, e.pendingProps)),
            (n.return = t))
        n.sibling = null
      }
      return t.child
    }
    function Nc(e, t) {
      return (e.lanes & t) === 0
        ? ((e = e.dependencies), !!(e !== null && oa(e)))
        : !0
    }
    function Pc(e, t, n) {
      switch (t.tag) {
        case 3:
          ;(ye(t, t.stateNode.containerInfo),
            ta(t, N, e.memoizedState.cache),
            Yi())
          break
        case 27:
        case 5:
          xe(t)
          break
        case 4:
          ye(t, t.stateNode.containerInfo)
          break
        case 10:
          ta(t, t.type, t.memoizedProps.value)
          break
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), po(t), null)
          break
        case 13:
          var r = t.memoizedState
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (fo(t), (e = Mc(e, t, n)), e === null ? null : e.sibling)
                : Tc(e, t, n)
              : (fo(t), (t.flags |= 128), null)
          fo(t)
          break
        case 19:
          var i = (e.flags & 128) != 0
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (aa(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return jc(e, t, n)
            t.flags |= 128
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            O(P, P.current),
            r)
          )
            break
          return null
        case 22:
          return ((t.lanes = 0), dc(e, t, n, t.pendingProps))
        case 24:
          ta(t, N, e.memoizedState.cache)
      }
      return Mc(e, t, n)
    }
    function Fc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) B = !0
        else {
          if (!Nc(e, n) && !(t.flags & 128)) return ((B = !1), Pc(e, t, n))
          B = !!(e.flags & 131072)
        }
      else ((B = !1), M && t.flags & 1048576 && Li(t, ji, t.index))
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps
            if (((e = Pa(t.elementType)), (t.type = e), typeof e == `function`))
              vi(e)
                ? ((r = Xs(e, r)), (t.tag = 1), (t = bc(null, t, e, r, n)))
                : ((t.tag = 0), (t = vc(null, t, e, r, n)))
            else {
              if (e != null) {
                var a = e.$$typeof
                if (a === C) {
                  ;((t.tag = 11), (t = cc(null, t, e, r, n)))
                  break a
                } else if (a === re) {
                  ;((t.tag = 14), (t = lc(null, t, e, r, n)))
                  break a
                }
              }
              throw ((t = le(e) || e), Error(i(306, t, ``)))
            }
          }
          return t
        case 0:
          return vc(e, t, t.type, t.pendingProps, n)
        case 1:
          return ((r = t.type), (a = Xs(r, t.pendingProps)), bc(e, t, r, a, n))
        case 3:
          a: {
            if ((ye(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387))
            r = t.pendingProps
            var o = t.memoizedState
            ;((a = o.element), Ja(e, t), to(t, r, null, n))
            var s = t.memoizedState
            if (
              ((r = s.cache),
              ta(t, N, r),
              r !== o.cache && ia(t, [N], n, !0),
              eo(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = xc(e, t, r, n)
                break a
              } else if (r !== a) {
                ;((a = Di(Error(i(424)), t)), Zi(a), (t = xc(e, t, r, n)))
                break a
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body
                    break
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e
                }
                for (
                  j = cf(e.firstChild),
                    Vi = t,
                    M = !0,
                    Hi = null,
                    Ui = !0,
                    n = Ga(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling))
              }
            else {
              if ((Yi(), r === a)) {
                t = Mc(e, t, n)
                break a
              }
              sc(e, t, r, n)
            }
            t = t.child
          }
          return t
        case 26:
          return (
            _c(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : M ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(_e.current).createElement(n)),
                  (r[gt] = t),
                  (r[_t] = e),
                  Pd(r, n, e),
                  kt(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState
                )),
            null
          )
        case 27:
          return (
            xe(t),
            e === null &&
              M &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, _e.current)),
              (Vi = t),
              (Ui = !0),
              (a = j),
              Zd(t.type) ? ((lf = a), (j = cf(r.firstChild))) : (j = a)),
            sc(e, t, t.pendingProps.children, n),
            _c(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          )
        case 5:
          return (
            e === null &&
              M &&
              ((a = r = j) &&
                ((r = tf(r, t.type, t.pendingProps, Ui)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (Vi = t),
                    (j = cf(r.firstChild)),
                    (Ui = !1),
                    (a = !0))),
              a || Gi(t)),
            xe(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Ud(a, o) ? (r = null) : s !== null && Ud(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = Do(e, t, Ao, null, null, n)), (Qf._currentValue = a)),
            _c(e, t),
            sc(e, t, r, n),
            t.child
          )
        case 6:
          return (
            e === null &&
              M &&
              ((e = n = j) &&
                ((n = nf(n, t.pendingProps, Ui)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Vi = t), (j = null), (e = !0))),
              e || Gi(t)),
            null
          )
        case 13:
          return Tc(e, t, n)
        case 4:
          return (
            ye(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Wa(t, null, r, n)) : sc(e, t, r, n),
            t.child
          )
        case 11:
          return cc(e, t, t.type, t.pendingProps, n)
        case 7:
          return (sc(e, t, t.pendingProps, n), t.child)
        case 8:
          return (sc(e, t, t.pendingProps.children, n), t.child)
        case 12:
          return (sc(e, t, t.pendingProps.children, n), t.child)
        case 10:
          return (
            (r = t.pendingProps),
            ta(t, t.type, r.value),
            sc(e, t, r.children, n),
            t.child
          )
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            sa(t),
            (a = ca(a)),
            (r = r(a)),
            (t.flags |= 1),
            sc(e, t, r, n),
            t.child
          )
        case 14:
          return lc(e, t, t.type, t.pendingProps, n)
        case 15:
          return uc(e, t, t.type, t.pendingProps, n)
        case 19:
          return jc(e, t, n)
        case 31:
          return gc(e, t, n)
        case 22:
          return dc(e, t, n, t.pendingProps)
        case 24:
          return (
            sa(t),
            (r = ca(N)),
            e === null
              ? ((a = Ta()),
                a === null &&
                  ((a = G),
                  (o = ma()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                qa(t),
                ta(t, N, a))
              : ((e.lanes & n) !== 0 && (Ja(e, t), to(t, null, null, n), eo()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    ta(t, N, r),
                    r !== a.cache && ia(t, [N], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    ta(t, N, r))),
            sc(e, t, t.pendingProps.children, n),
            t.child
          )
        case 29:
          throw t.pendingProps
      }
      throw Error(i(156, t.tag))
    }
    function Ic(e) {
      e.flags |= 4
    }
    function Lc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192
          else if (wu()) e.flags |= 8192
          else throw ((Fa = ja), ka)
      } else e.flags &= -16777217
    }
    function Rc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217
      else if (((e.flags |= 16777216), !Wf(t)))
        if (wu()) e.flags |= 8192
        else throw ((Fa = ja), ka)
    }
    function zc(e, t) {
      ;(t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : it()), (e.lanes |= t), (Xl |= t)))
    }
    function Bc(e, t) {
      if (!M)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail
            for (var n = null; t !== null;)
              (t.alternate !== null && (n = t), (t = t.sibling))
            n === null ? (e.tail = null) : (n.sibling = null)
            break
          case `collapsed`:
            n = e.tail
            for (var r = null; n !== null;)
              (n.alternate !== null && (r = n), (n = n.sibling))
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null)
        }
    }
    function V(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling))
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling))
      return ((e.subtreeFlags |= r), (e.childLanes = n), t)
    }
    function Vc(e, t, n) {
      var r = t.pendingProps
      switch ((zi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (V(t), null)
        case 1:
          return (V(t), null)
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            na(N),
            be(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ji(t)
                ? Ic(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Xi())),
            V(t),
            null
          )
        case 26:
          var a = t.type,
            o = t.memoizedState
          return (
            e === null
              ? (Ic(t),
                o === null ? (V(t), Lc(t, a, null, r, n)) : (V(t), Rc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (V(t), (t.flags &= -16777217))
                  : (Ic(t), V(t), Rc(t, o))
                : ((e = e.memoizedProps),
                  e !== r && Ic(t),
                  V(t),
                  Lc(t, a, e, r, n)),
            null
          )
        case 27:
          if (
            (Se(t),
            (n = _e.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Ic(t)
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166))
              return (V(t), null)
            }
            ;((e = he.current),
              Ji(t) ? Ki(t, e) : ((e = ff(a, r, n)), (t.stateNode = e), Ic(t)))
          }
          return (V(t), null)
        case 5:
          if ((Se(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Ic(t)
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166))
              return (V(t), null)
            }
            if (((o = he.current), Ji(t))) Ki(t, o)
            else {
              var s = Bd(_e.current)
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a)
                  break
                case 2:
                  o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a)
                  break
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a)
                      break
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a
                      )
                      break
                    case `script`:
                      ;((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)))
                      break
                    case `select`:
                      ;((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size))
                      break
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a)
                  }
              }
              ;((o[gt] = t), (o[_t] = r))
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode)
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ;((s.child.return = s), (s = s.child))
                  continue
                }
                if (s === t) break a
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a
                  s = s.return
                }
                ;((s.sibling.return = s.return), (s = s.sibling))
              }
              t.stateNode = o
              a: switch ((Pd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus
                  break a
                case `img`:
                  r = !0
                  break a
                default:
                  r = !1
              }
              r && Ic(t)
            }
          }
          return (
            V(t),
            Lc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n
            ),
            null
          )
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Ic(t)
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166))
            if (((e = _e.current), Ji(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = Vi),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps
                }
              ;((e[gt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Md(e.nodeValue, n)
                )),
                e || Gi(t, !0))
            } else
              ((e = Bd(e).createTextNode(r)), (e[gt] = t), (t.stateNode = e))
          }
          return (V(t), null)
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Ji(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318))
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557))
                e[gt] = t
              } else
                (Yi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4))
              ;(V(t), (e = !1))
            } else
              ((n = Xi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0))
            if (!e) return t.flags & 256 ? (go(t), t) : (go(t), null)
            if (t.flags & 128) throw Error(i(558))
          }
          return (V(t), null)
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Ji(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318))
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317))
                a[gt] = t
              } else
                (Yi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4))
              ;(V(t), (a = !1))
            } else
              ((a = Xi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0))
            if (!a) return t.flags & 256 ? (go(t), t) : (go(t), null)
          }
          return (
            go(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                zc(t, t.updateQueue),
                V(t),
                null)
          )
        case 4:
          return (be(), e === null && Sd(t.stateNode.containerInfo), V(t), null)
        case 10:
          return (na(t.type), V(t), null)
        case 19:
          if ((D(P), (r = t.memoizedState), r === null)) return (V(t), null)
          if (((a = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (a) Bc(r, !1)
            else {
              if (Y !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = _o(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Bc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        zc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (bi(n, e), (n = n.sibling))
                    return (
                      O(P, (P.current & 1) | 2),
                      M && A(t, r.treeForkCount),
                      t.child
                    )
                  }
                  e = e.sibling
                }
              r.tail !== null &&
                Fe() > nu &&
                ((t.flags |= 128), (a = !0), Bc(r, !1), (t.lanes = 4194304))
            }
          else {
            if (!a)
              if (((e = _o(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  zc(t, e),
                  Bc(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !M)
                )
                  return (V(t), null)
              } else
                2 * Fe() - r.renderingStartTime > nu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Bc(r, !1), (t.lanes = 4194304))
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o))
          }
          return r.tail === null
            ? (V(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Fe()),
              (e.sibling = null),
              (n = P.current),
              O(P, a ? (n & 1) | 2 : n & 1),
              M && A(t, r.treeForkCount),
              e)
        case 22:
        case 23:
          return (
            go(t),
            co(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (V(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : V(t),
            (n = t.updateQueue),
            n !== null && zc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && D(wa),
            null
          )
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            na(N),
            V(t),
            null
          )
        case 25:
          return null
        case 30:
          return null
      }
      throw Error(i(156, t.tag))
    }
    function Hc(e, t) {
      switch ((zi(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          )
        case 3:
          return (
            na(N),
            be(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          )
        case 26:
        case 27:
        case 5:
          return (Se(t), null)
        case 31:
          if (t.memoizedState !== null) {
            if ((go(t), t.alternate === null)) throw Error(i(340))
            Yi()
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          )
        case 13:
          if (
            (go(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340))
            Yi()
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          )
        case 19:
          return (D(P), null)
        case 4:
          return (be(), null)
        case 10:
          return (na(t.type), null)
        case 22:
        case 23:
          return (
            go(t),
            co(),
            e !== null && D(wa),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          )
        case 24:
          return (na(N), null)
        case 25:
          return null
        default:
          return null
      }
    }
    function Uc(e, t) {
      switch ((zi(t), t.tag)) {
        case 3:
          ;(na(N), be())
          break
        case 26:
        case 27:
        case 5:
          Se(t)
          break
        case 4:
          be()
          break
        case 31:
          t.memoizedState !== null && go(t)
          break
        case 13:
          go(t)
          break
        case 19:
          D(P)
          break
        case 10:
          na(t.type)
          break
        case 22:
        case 23:
          ;(go(t), co(), e !== null && D(wa))
          break
        case 24:
          na(N)
      }
    }
    function Wc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect
        if (r !== null) {
          var i = r.next
          n = i
          do {
            if ((n.tag & e) === e) {
              r = void 0
              var a = n.create,
                o = n.inst
              ;((r = a()), (o.destroy = r))
            }
            n = n.next
          } while (n !== i)
        }
      } catch (e) {
        Z(t, t.return, e)
      }
    }
    function Gc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect
        if (i !== null) {
          var a = i.next
          r = a
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy
              if (s !== void 0) {
                ;((o.destroy = void 0), (i = t))
                var c = n,
                  l = s
                try {
                  l()
                } catch (e) {
                  Z(i, c, e)
                }
              }
            }
            r = r.next
          } while (r !== a)
        }
      } catch (e) {
        Z(t, t.return, e)
      }
    }
    function Kc(e) {
      var t = e.updateQueue
      if (t !== null) {
        var n = e.stateNode
        try {
          ro(t, n)
        } catch (t) {
          Z(e, e.return, t)
        }
      }
    }
    function qc(e, t, n) {
      ;((n.props = Xs(e.type, e.memoizedProps)), (n.state = e.memoizedState))
      try {
        n.componentWillUnmount()
      } catch (n) {
        Z(e, t, n)
      }
    }
    function Jc(e, t) {
      try {
        var n = e.ref
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode
              break
            case 30:
              r = e.stateNode
              break
            default:
              r = e.stateNode
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r)
        }
      } catch (n) {
        Z(e, t, n)
      }
    }
    function Yc(e, t) {
      var n = e.ref,
        r = e.refCleanup
      if (n !== null)
        if (typeof r == `function`)
          try {
            r()
          } catch (n) {
            Z(e, t, n)
          } finally {
            ;((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null))
          }
        else if (typeof n == `function`)
          try {
            n(null)
          } catch (n) {
            Z(e, t, n)
          }
        else n.current = null
    }
    function Xc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus()
            break a
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet)
        }
      } catch (t) {
        Z(e, e.return, t)
      }
    }
    function Zc(e, t, n) {
      try {
        var r = e.stateNode
        ;(Fd(r, e.type, n, t), (r[_t] = t))
      } catch (t) {
        Z(e, e.return, t)
      }
    }
    function Qc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Zd(e.type)) ||
        e.tag === 4
      )
    }
    function $c(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Qc(e.return)) return null
          e = e.return
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Zd(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a
          ;((e.child.return = e), (e = e.child))
        }
        if (!(e.flags & 2)) return e.stateNode
      }
    }
    function el(e, t, n) {
      var r = e.tag
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = un)))
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (el(e, t, n), e = e.sibling; e !== null;)
          (el(e, t, n), (e = e.sibling))
    }
    function tl(e, t, n) {
      var r = e.tag
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e))
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (tl(e, t, n), e = e.sibling; e !== null;)
          (tl(e, t, n), (e = e.sibling))
    }
    function nl(e) {
      var t = e.stateNode,
        n = e.memoizedProps
      try {
        for (var r = e.type, i = t.attributes; i.length;)
          t.removeAttributeNode(i[0])
        ;(Pd(t, r, n), (t[gt] = e), (t[_t] = n))
      } catch (t) {
        Z(e, e.return, t)
      }
    }
    var rl = !1,
      H = !1,
      il = !1,
      al = typeof WeakSet == `function` ? WeakSet : Set,
      ol = null
    function sl(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Lr(e)), Rr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd }
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window
            var r = n.getSelection && n.getSelection()
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode
              var a = r.anchorOffset,
                o = r.focusNode
              r = r.focusOffset
              try {
                ;(n.nodeType, o.nodeType)
              } catch {
                n = null
                break a
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m))
                for (;;) {
                  if (f === e) break b
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break
                  ;((f = p), (p = f.parentNode))
                }
                f = m
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l }
            } else n = null
          }
        n ||= { start: 0, end: 0 }
      } else n = null
      for (
        zd = { focusedElem: e, selectionRange: n }, sp = !1, ol = t;
        ol !== null;
      )
        if (((t = ol), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (ol = e))
        else
          for (; ol !== null;) {
            switch (((t = ol), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    ((a = e[n]), (a.ref.impl = a.nextImpl))
                break
              case 11:
              case 15:
                break
              case 1:
                if (e & 1024 && o !== null) {
                  ;((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode))
                  try {
                    var h = Xs(n.type, a)
                    ;((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e))
                  } catch (e) {
                    Z(n, n.return, e)
                  }
                }
                break
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    ef(e)
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e)
                        break
                      default:
                        e.textContent = ``
                    }
                }
                break
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break
              default:
                if (e & 1024) throw Error(i(163))
            }
            if (((e = t.sibling), e !== null)) {
              ;((e.return = t.return), (ol = e))
              break
            }
            ol = t.return
          }
    }
    function cl(e, t, n) {
      var r = n.flags
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ;(Sl(e, n), r & 4 && Wc(5, n))
          break
        case 1:
          if ((Sl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount()
              } catch (e) {
                Z(n, n.return, e)
              }
            else {
              var i = Xs(n.type, t.memoizedProps)
              t = t.memoizedState
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate
                )
              } catch (e) {
                Z(n, n.return, e)
              }
            }
          ;(r & 64 && Kc(n), r & 512 && Jc(n, n.return))
          break
        case 3:
          if ((Sl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode
                  break
                case 1:
                  t = n.child.stateNode
              }
            try {
              ro(e, t)
            } catch (e) {
              Z(n, n.return, e)
            }
          }
          break
        case 27:
          t === null && r & 4 && nl(n)
        case 26:
        case 5:
          ;(Sl(e, n), t === null && r & 4 && Xc(n), r & 512 && Jc(n, n.return))
          break
        case 12:
          Sl(e, n)
          break
        case 31:
          ;(Sl(e, n), r & 4 && pl(e, n))
          break
        case 13:
          ;(Sl(e, n),
            r & 4 && ml(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Ju.bind(null, n)), sf(e, n)))))
          break
        case 22:
          if (((r = n.memoizedState !== null || rl), !r)) {
            ;((t = (t !== null && t.memoizedState !== null) || H), (i = rl))
            var a = H
            ;((rl = r),
              (H = t) && !a ? wl(e, n, (n.subtreeFlags & 8772) != 0) : Sl(e, n),
              (rl = i),
              (H = a))
          }
          break
        case 30:
          break
        default:
          Sl(e, n)
      }
    }
    function ll(e) {
      var t = e.alternate
      ;(t !== null && ((e.alternate = null), ll(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && wt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null))
    }
    var U = null,
      ul = !1
    function dl(e, t, n) {
      for (n = n.child; n !== null;) (fl(e, t, n), (n = n.sibling))
    }
    function fl(e, t, n) {
      if (Ge && typeof Ge.onCommitFiberUnmount == `function`)
        try {
          Ge.onCommitFiberUnmount(We, n)
        } catch {}
      switch (n.tag) {
        case 26:
          ;(H || Yc(n, t),
            dl(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)))
          break
        case 27:
          H || Yc(n, t)
          var r = U,
            i = ul
          ;(Zd(n.type) && ((U = n.stateNode), (ul = !1)),
            dl(e, t, n),
            pf(n.stateNode),
            (U = r),
            (ul = i))
          break
        case 5:
          H || Yc(n, t)
        case 6:
          if (
            ((r = U),
            (i = ul),
            (U = null),
            dl(e, t, n),
            (U = r),
            (ul = i),
            U !== null)
          )
            if (ul)
              try {
                ;(U.nodeType === 9
                  ? U.body
                  : U.nodeName === `HTML`
                    ? U.ownerDocument.body
                    : U
                ).removeChild(n.stateNode)
              } catch (e) {
                Z(n, t, e)
              }
            else
              try {
                U.removeChild(n.stateNode)
              } catch (e) {
                Z(n, t, e)
              }
          break
        case 18:
          U !== null &&
            (ul
              ? ((e = U),
                Qd(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode
                ),
                Np(e))
              : Qd(U, n.stateNode))
          break
        case 4:
          ;((r = U),
            (i = ul),
            (U = n.stateNode.containerInfo),
            (ul = !0),
            dl(e, t, n),
            (U = r),
            (ul = i))
          break
        case 0:
        case 11:
        case 14:
        case 15:
          ;(Gc(2, n, t), H || Gc(4, n, t), dl(e, t, n))
          break
        case 1:
          ;(H ||
            (Yc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && qc(n, t, r)),
            dl(e, t, n))
          break
        case 21:
          dl(e, t, n)
          break
        case 22:
          ;((H = (r = H) || n.memoizedState !== null), dl(e, t, n), (H = r))
          break
        default:
          dl(e, t, n)
      }
    }
    function pl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated
        try {
          Np(e)
        } catch (e) {
          Z(t, t.return, e)
        }
      }
    }
    function ml(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e)
        } catch (e) {
          Z(t, t.return, e)
        }
    }
    function hl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode
          return (t === null && (t = e.stateNode = new al()), t)
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new al()),
            t
          )
        default:
          throw Error(i(435, e.tag))
      }
    }
    function gl(e, t) {
      var n = hl(e)
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t)
          var r = Yu.bind(null, e, t)
          t.then(r, r)
        }
      })
    }
    function _l(e, t) {
      var n = t.deletions
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s
          a: for (; c !== null;) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  ;((U = c.stateNode), (ul = !1))
                  break a
                }
                break
              case 5:
                ;((U = c.stateNode), (ul = !1))
                break a
              case 3:
              case 4:
                ;((U = c.stateNode.containerInfo), (ul = !0))
                break a
            }
            c = c.return
          }
          if (U === null) throw Error(i(160))
          ;(fl(o, s, a),
            (U = null),
            (ul = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null))
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null;) (yl(t, e), (t = t.sibling))
    }
    var vl = null
    function yl(e, t) {
      var n = e.alternate,
        r = e.flags
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ;(_l(t, e),
            bl(e),
            r & 4 && (Gc(3, e, e.return), Wc(3, e), Gc(5, e, e.return)))
          break
        case 1:
          ;(_l(t, e),
            bl(e),
            r & 512 && (H || n === null || Yc(n, n.return)),
            r & 64 &&
              rl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))))
          break
        case 26:
          var a = vl
          if (
            (_l(t, e),
            bl(e),
            r & 512 && (H || n === null || Yc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ;((r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a))
                    b: switch (r) {
                      case `title`:
                        ;((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[Ct] ||
                            o[gt] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`)
                            )),
                          Pd(o, r, n),
                          (o[gt] = e),
                          kt(o),
                          (r = o))
                        break a
                      case `link`:
                        var s = Vf(`link`, `href`, a).get(r + (n.href || ``))
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1)
                              break b
                            }
                        }
                        ;((o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o))
                        break
                      case `meta`:
                        if (
                          (s = Vf(`meta`, `content`, a).get(
                            r + (n.content || ``)
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1)
                              break b
                            }
                        }
                        ;((o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o))
                        break
                      default:
                        throw Error(i(468, r))
                    }
                    ;((o[gt] = e), kt(o), (r = o))
                  }
                  e.stateNode = r
                } else Hf(a, e.type, e.stateNode)
              else e.stateNode = If(a, r, e.memoizedProps)
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  Zc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Hf(a, e.type, e.stateNode)
                    : If(a, r, e.memoizedProps))
          }
          break
        case 27:
          ;(_l(t, e),
            bl(e),
            r & 512 && (H || n === null || Yc(n, n.return)),
            n !== null && r & 4 && Zc(e, e.memoizedProps, n.memoizedProps))
          break
        case 5:
          if (
            (_l(t, e),
            bl(e),
            r & 512 && (H || n === null || Yc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode
            try {
              tn(a, ``)
            } catch (t) {
              Z(e, e.return, t)
            }
          }
          ;(r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Zc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (il = !0))
          break
        case 6:
          if ((_l(t, e), bl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162))
            ;((r = e.memoizedProps), (n = e.stateNode))
            try {
              n.nodeValue = r
            } catch (t) {
              Z(e, e.return, t)
            }
          }
          break
        case 3:
          if (
            ((Bf = null),
            (a = vl),
            (vl = gf(t.containerInfo)),
            _l(t, e),
            (vl = a),
            bl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo)
            } catch (t) {
              Z(e, e.return, t)
            }
          il && ((il = !1), xl(e))
          break
        case 4:
          ;((r = vl),
            (vl = gf(e.stateNode.containerInfo)),
            _l(t, e),
            bl(e),
            (vl = r))
          break
        case 12:
          ;(_l(t, e), bl(e))
          break
        case 31:
          ;(_l(t, e),
            bl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), gl(e, r))))
          break
        case 13:
          ;(_l(t, e),
            bl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              (eu = Fe()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), gl(e, r))))
          break
        case 22:
          a = e.memoizedState !== null
          var l = n !== null && n.memoizedState !== null,
            u = rl,
            d = H
          if (
            ((rl = u || a),
            (H = d || l),
            _l(t, e),
            (H = d),
            (rl = u),
            bl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || rl || H || Cl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`))
                    else {
                      c = l.stateNode
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim()
                    }
                  } catch (e) {
                    Z(l, l.return, e)
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps
                  } catch (e) {
                    Z(l, l.return, e)
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t
                  try {
                    var m = l.stateNode
                    a ? $d(m, !0) : $d(l.stateNode, !1)
                  } catch (e) {
                    Z(l, l.return, e)
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ;((t.child.return = t), (t = t.child))
                continue
              }
              if (t === e) break a
              for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break a
                ;(n === t && (n = null), (t = t.return))
              }
              ;(n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling))
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), gl(e, n))))
          break
        case 19:
          ;(_l(t, e),
            bl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), gl(e, r))))
          break
        case 30:
          break
        case 21:
          break
        default:
          ;(_l(t, e), bl(e))
      }
    }
    function bl(e) {
      var t = e.flags
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Qc(r)) {
              n = r
              break
            }
            r = r.return
          }
          if (n == null) throw Error(i(160))
          switch (n.tag) {
            case 27:
              var a = n.stateNode
              tl(e, $c(e), a)
              break
            case 5:
              var o = n.stateNode
              ;(n.flags & 32 && (tn(o, ``), (n.flags &= -33)), tl(e, $c(e), o))
              break
            case 3:
            case 4:
              var s = n.stateNode.containerInfo
              el(e, $c(e), s)
              break
            default:
              throw Error(i(161))
          }
        } catch (t) {
          Z(e, e.return, t)
        }
        e.flags &= -3
      }
      t & 4096 && (e.flags &= -4097)
    }
    function xl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e
          ;(xl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling))
        }
    }
    function Sl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (cl(e, t.alternate, t), (t = t.sibling))
    }
    function Cl(e) {
      for (e = e.child; e !== null;) {
        var t = e
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ;(Gc(4, t, t.return), Cl(t))
            break
          case 1:
            Yc(t, t.return)
            var n = t.stateNode
            ;(typeof n.componentWillUnmount == `function` && qc(t, t.return, n),
              Cl(t))
            break
          case 27:
            pf(t.stateNode)
          case 26:
          case 5:
            ;(Yc(t, t.return), Cl(t))
            break
          case 22:
            t.memoizedState === null && Cl(t)
            break
          case 30:
            Cl(t)
            break
          default:
            Cl(t)
        }
        e = e.sibling
      }
    }
    function wl(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            ;(wl(i, a, n), Wc(4, a))
            break
          case 1:
            if (
              (wl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount()
              } catch (e) {
                Z(r, r.return, e)
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode
              try {
                var c = i.shared.hiddenCallbacks
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    no(c[i], s)
              } catch (e) {
                Z(r, r.return, e)
              }
            }
            ;(n && o & 64 && Kc(a), Jc(a, a.return))
            break
          case 27:
            nl(a)
          case 26:
          case 5:
            ;(wl(i, a, n), n && r === null && o & 4 && Xc(a), Jc(a, a.return))
            break
          case 12:
            wl(i, a, n)
            break
          case 31:
            ;(wl(i, a, n), n && o & 4 && pl(i, a))
            break
          case 13:
            ;(wl(i, a, n), n && o & 4 && ml(i, a))
            break
          case 22:
            ;(a.memoizedState === null && wl(i, a, n), Jc(a, a.return))
            break
          case 30:
            break
          default:
            wl(i, a, n)
        }
        t = t.sibling
      }
    }
    function Tl(e, t) {
      var n = null
      ;(e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ha(n)))
    }
    function El(e, t) {
      ;((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ha(e)))
    }
    function Dl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) (Ol(e, t, n, r), (t = t.sibling))
    }
    function Ol(e, t, n, r) {
      var i = t.flags
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ;(Dl(e, t, n, r), i & 2048 && Wc(9, t))
          break
        case 1:
          Dl(e, t, n, r)
          break
        case 3:
          ;(Dl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ha(e))))
          break
        case 12:
          if (i & 2048) {
            ;(Dl(e, t, n, r), (e = t.stateNode))
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0
                )
            } catch (e) {
              Z(t, t.return, e)
            }
          } else Dl(e, t, n, r)
          break
        case 31:
          Dl(e, t, n, r)
          break
        case 13:
          Dl(e, t, n, r)
          break
        case 23:
          break
        case 22:
          ;((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Dl(e, t, n, r)
                : ((a._visibility |= 2),
                  kl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? Dl(e, t, n, r)
                : Al(e, t),
            i & 2048 && Tl(o, t))
          break
        case 24:
          ;(Dl(e, t, n, r), i & 2048 && El(t.alternate, t))
          break
        default:
          Dl(e, t, n, r)
      }
    }
    function kl(e, t, n, r, i) {
      for (
        i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child;
        t !== null;
      ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            ;(kl(a, o, s, c, i), Wc(8, o))
            break
          case 23:
            break
          case 22:
            var u = o.stateNode
            ;(o.memoizedState === null
              ? ((u._visibility |= 2), kl(a, o, s, c, i))
              : u._visibility & 2
                ? kl(a, o, s, c, i)
                : Al(a, o),
              i && l & 2048 && Tl(o.alternate, o))
            break
          case 24:
            ;(kl(a, o, s, c, i), i && l & 2048 && El(o.alternate, o))
            break
          default:
            kl(a, o, s, c, i)
        }
        t = t.sibling
      }
    }
    function Al(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags
          switch (r.tag) {
            case 22:
              ;(Al(n, r), i & 2048 && Tl(r.alternate, r))
              break
            case 24:
              ;(Al(n, r), i & 2048 && El(r.alternate, r))
              break
            default:
              Al(n, r)
          }
          t = t.sibling
        }
    }
    var jl = 8192
    function Ml(e, t, n) {
      if (e.subtreeFlags & jl)
        for (e = e.child; e !== null;) (Nl(e, t, n), (e = e.sibling))
    }
    function Nl(e, t, n) {
      switch (e.tag) {
        case 26:
          ;(Ml(e, t, n),
            e.flags & jl &&
              e.memoizedState !== null &&
              Gf(n, vl, e.memoizedState, e.memoizedProps))
          break
        case 5:
          Ml(e, t, n)
          break
        case 3:
        case 4:
          var r = vl
          ;((vl = gf(e.stateNode.containerInfo)), Ml(e, t, n), (vl = r))
          break
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = jl), (jl = 16777216), Ml(e, t, n), (jl = r))
              : Ml(e, t, n))
          break
        default:
          Ml(e, t, n)
      }
    }
    function Pl(e) {
      var t = e.alternate
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null
        do ((t = e.sibling), (e.sibling = null), (e = t))
        while (e !== null)
      }
    }
    function Fl(e) {
      var t = e.deletions
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;((ol = r), Rl(r, e))
          }
        Pl(e)
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;) (Il(e), (e = e.sibling))
    }
    function Il(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ;(Fl(e), e.flags & 2048 && Gc(9, e, e.return))
          break
        case 3:
          Fl(e)
          break
        case 12:
          Fl(e)
          break
        case 22:
          var t = e.stateNode
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Ll(e))
            : Fl(e)
          break
        default:
          Fl(e)
      }
    }
    function Ll(e) {
      var t = e.deletions
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;((ol = r), Rl(r, e))
          }
        Pl(e)
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            ;(Gc(8, t, t.return), Ll(t))
            break
          case 22:
            ;((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Ll(t)))
            break
          default:
            Ll(t)
        }
        e = e.sibling
      }
    }
    function Rl(e, t) {
      for (; ol !== null;) {
        var n = ol
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Gc(8, n, t)
            break
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool
              r != null && r.refCount++
            }
            break
          case 24:
            ha(n.memoizedState.cache)
        }
        if (((r = n.child), r !== null)) ((r.return = n), (ol = r))
        else
          a: for (n = e; ol !== null;) {
            r = ol
            var i = r.sibling,
              a = r.return
            if ((ll(r), r === n)) {
              ol = null
              break a
            }
            if (i !== null) {
              ;((i.return = a), (ol = i))
              break a
            }
            ol = a
          }
      }
    }
    var zl = {
        getCacheForType: function (e) {
          var t = ca(N),
            n = t.data.get(e)
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n)
        },
        cacheSignal: function () {
          return ca(N).controller.signal
        },
      },
      Bl = typeof WeakMap == `function` ? WeakMap : Map,
      W = 0,
      G = null,
      K = null,
      q = 0,
      J = 0,
      Vl = null,
      Hl = !1,
      Ul = !1,
      Wl = !1,
      Gl = 0,
      Y = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = 0,
      Zl = null,
      Ql = null,
      $l = !1,
      eu = 0,
      tu = 0,
      nu = 1 / 0,
      ru = null,
      iu = null,
      X = 0,
      au = null,
      ou = null,
      su = 0,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = null
    function pu() {
      return W & 2 && q !== 0 ? q & -q : T.T === null ? pt() : dd()
    }
    function mu() {
      if (Yl === 0)
        if (!(q & 536870912) || M) {
          var e = Qe
          ;((Qe <<= 1), !(Qe & 3932160) && (Qe = 262144), (Yl = e))
        } else Yl = 536870912
      return ((e = lo.current), e !== null && (e.flags |= 32), Yl)
    }
    function hu(e, t, n) {
      ;(((e === G && (J === 2 || J === 9)) || e.cancelPendingCommit !== null) &&
        (Su(e, 0), yu(e, q, Yl, !1)),
        ot(e, n),
        (!(W & 2) || e !== G) &&
          (e === G && (!(W & 2) && (ql |= n), Y === 4 && yu(e, q, Yl, !1)),
          rd(e)))
    }
    function gu(e, t, n) {
      if (W & 6) throw Error(i(327))
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || nt(e, t),
        a = r ? Au(e, t) : Ou(e, t, !0),
        o = r
      do {
        if (a === 0) {
          Ul && !r && yu(e, t, 0, !1)
          break
        } else {
          if (((n = e.current.alternate), o && !vu(n))) {
            ;((a = Ou(e, t, !1)), (o = !1))
            continue
          }
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s))
            if (s !== 0) {
              t = s
              a: {
                var c = e
                a = Zl
                var l = c.current.memoizedState.isDehydrated
                if (
                  (l && (Su(c, s).flags |= 256), (s = Ou(c, s, !1)), s !== 2)
                ) {
                  if (Wl && !l) {
                    ;((c.errorRecoveryDisabledLanes |= o), (ql |= o), (a = 4))
                    break a
                  }
                  ;((o = Ql),
                    (Ql = a),
                    o !== null &&
                      (Ql === null ? (Ql = o) : Ql.push.apply(Ql, o)))
                }
                a = s
              }
              if (((o = !1), a !== 2)) continue
            }
          }
          if (a === 1) {
            ;(Su(e, 0), yu(e, t, 0, !0))
            break
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345))
              case 4:
                if ((t & 4194048) !== t) break
              case 6:
                yu(r, t, Yl, !Hl)
                break a
              case 2:
                Ql = null
                break
              case 3:
              case 5:
                break
              default:
                throw Error(i(329))
            }
            if ((t & 62914560) === t && ((a = eu + 300 - Fe()), 10 < a)) {
              if ((yu(r, t, Yl, !Hl), tt(r, 0, !0) !== 0)) break a
              ;((su = t),
                (r.timeoutHandle = Kd(
                  _u.bind(
                    null,
                    r,
                    n,
                    Ql,
                    ru,
                    $l,
                    t,
                    Yl,
                    ql,
                    Xl,
                    Hl,
                    o,
                    `Throttled`,
                    -0,
                    0
                  ),
                  a
                )))
              break a
            }
            _u(r, n, Ql, ru, $l, t, Yl, ql, Xl, Hl, o, null, -0, 0)
          }
        }
        break
      } while (1)
      rd(e)
    }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        ;((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: un,
        }),
          Nl(t, a, d))
        var m =
          (a & 62914560) === a ? eu - Fe() : (a & 4194048) === a ? tu - Fe() : 0
        if (((m = qf(d, m)), m !== null)) {
          ;((su = a),
            (e.cancelPendingCommit = m(
              Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)
            )),
            yu(e, a, o, !l))
          return
        }
      }
      Lu(e, t, a, n, r, i, o, s, c)
    }
    function vu(e) {
      for (var t = e; ;) {
        var n = t.tag
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot
            i = i.value
            try {
              if (!Mr(a(), i)) return !1
            } catch {
              return !1
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n))
        else {
          if (t === e) break
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0
            t = t.return
          }
          ;((t.sibling.return = t.return), (t = t.sibling))
        }
      }
      return !0
    }
    function yu(e, t, n, r) {
      ;((t &= ~Jl),
        (t &= ~ql),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes))
      for (var i = t; 0 < i;) {
        var a = 31 - qe(i),
          o = 1 << a
        ;((r[a] = -1), (i &= ~o))
      }
      n !== 0 && ct(e, n, t)
    }
    function bu() {
      return W & 6 ? !0 : (id(0, !1), !1)
    }
    function xu() {
      if (K !== null) {
        if (J === 0) var e = K.return
        else ((e = K), (ea = $i = null), No(e), (Ra = null), (za = 0), (e = K))
        for (; e !== null;) (Uc(e.alternate, e), (e = e.return))
        K = null
      }
    }
    function Su(e, t) {
      var n = e.timeoutHandle
      ;(n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (su = 0),
        xu(),
        (G = e),
        (K = n = yi(e.current, null)),
        (q = t),
        (J = 0),
        (Vl = null),
        (Hl = !1),
        (Ul = nt(e, t)),
        (Wl = !1),
        (Xl = Yl = Jl = ql = Kl = Y = 0),
        (Ql = Zl = null),
        ($l = !1),
        t & 8 && (t |= t & 32))
      var r = e.entangledLanes
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - qe(r),
            a = 1 << i
          ;((t |= e[i]), (r &= ~a))
        }
      return ((Gl = t), li(), n)
    }
    function Cu(e, t) {
      ;((F = null),
        (T.H = Hs),
        t === Oa || t === Aa
          ? ((t = Ia()), (J = 3))
          : t === ka
            ? ((t = Ia()), (J = 4))
            : (J =
                t === oc
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (Vl = t),
        K === null && ((Y = 1), ec(e, Di(t, e.current))))
    }
    function wu() {
      var e = lo.current
      return e === null
        ? !0
        : (q & 4194048) === q
          ? uo === null
          : (q & 62914560) === q || q & 536870912
            ? e === uo
            : !1
    }
    function Tu() {
      var e = T.H
      return ((T.H = Hs), e === null ? Hs : e)
    }
    function Eu() {
      var e = T.A
      return ((T.A = zl), e)
    }
    function Du() {
      ;((Y = 4),
        Hl || ((q & 4194048) !== q && lo.current !== null) || (Ul = !0),
        (!(Kl & 134217727) && !(ql & 134217727)) ||
          G === null ||
          yu(G, q, Yl, !1))
    }
    function Ou(e, t, n) {
      var r = W
      W |= 2
      var i = Tu(),
        a = Eu()
      ;((G !== e || q !== t) && ((ru = null), Su(e, t)), (t = !1))
      var o = Y
      a: do
        try {
          if (J !== 0 && K !== null) {
            var s = K,
              c = Vl
            switch (J) {
              case 8:
                ;(xu(), (o = 6))
                break a
              case 3:
              case 2:
              case 9:
              case 6:
                lo.current === null && (t = !0)
                var l = J
                if (((J = 0), (Vl = null), Pu(e, s, c, l), n && Ul)) {
                  o = 0
                  break a
                }
                break
              default:
                ;((l = J), (J = 0), (Vl = null), Pu(e, s, c, l))
            }
          }
          ;(ku(), (o = Y))
          break
        } catch (t) {
          Cu(e, t)
        }
      while (1)
      return (
        t && e.shellSuspendCounter++,
        (ea = $i = null),
        (W = r),
        (T.H = i),
        (T.A = a),
        K === null && ((G = null), (q = 0), li()),
        o
      )
    }
    function ku() {
      for (; K !== null;) Mu(K)
    }
    function Au(e, t) {
      var n = W
      W |= 2
      var r = Tu(),
        a = Eu()
      G !== e || q !== t
        ? ((ru = null), (nu = Fe() + 500), Su(e, t))
        : (Ul = nt(e, t))
      a: do
        try {
          if (J !== 0 && K !== null) {
            t = K
            var o = Vl
            b: switch (J) {
              case 1:
                ;((J = 0), (Vl = null), Pu(e, t, o, 1))
                break
              case 2:
              case 9:
                if (Ma(o)) {
                  ;((J = 0), (Vl = null), Nu(t))
                  break
                }
                ;((t = function () {
                  ;((J !== 2 && J !== 9) || G !== e || (J = 7), rd(e))
                }),
                  o.then(t, t))
                break a
              case 3:
                J = 7
                break a
              case 4:
                J = 5
                break a
              case 7:
                Ma(o)
                  ? ((J = 0), (Vl = null), Nu(t))
                  : ((J = 0), (Vl = null), Pu(e, t, o, 7))
                break
              case 5:
                var s = null
                switch (K.tag) {
                  case 26:
                    s = K.memoizedState
                  case 5:
                  case 27:
                    var c = K
                    if (s ? Wf(s) : c.stateNode.complete) {
                      ;((J = 0), (Vl = null))
                      var l = c.sibling
                      if (l !== null) K = l
                      else {
                        var u = c.return
                        u === null ? (K = null) : ((K = u), Fu(u))
                      }
                      break b
                    }
                }
                ;((J = 0), (Vl = null), Pu(e, t, o, 5))
                break
              case 6:
                ;((J = 0), (Vl = null), Pu(e, t, o, 6))
                break
              case 8:
                ;(xu(), (Y = 6))
                break a
              default:
                throw Error(i(462))
            }
          }
          ju()
          break
        } catch (t) {
          Cu(e, t)
        }
      while (1)
      return (
        (ea = $i = null),
        (T.H = r),
        (T.A = a),
        (W = n),
        K === null ? ((G = null), (q = 0), li(), Y) : 0
      )
    }
    function ju() {
      for (; K !== null && !Ne();) Mu(K)
    }
    function Mu(e) {
      var t = Fc(e.alternate, e, Gl)
      ;((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (K = t))
    }
    function Nu(e) {
      var t = e,
        n = t.alternate
      switch (t.tag) {
        case 15:
        case 0:
          t = yc(n, t, t.pendingProps, t.type, void 0, q)
          break
        case 11:
          t = yc(n, t, t.pendingProps, t.type.render, t.ref, q)
          break
        case 5:
          No(t)
        default:
          ;(Uc(n, t), (t = K = bi(t, Gl)), (t = Fc(n, t, Gl)))
      }
      ;((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (K = t))
    }
    function Pu(e, t, n, r) {
      ;((ea = $i = null), No(t), (Ra = null), (za = 0))
      var i = t.return
      try {
        if (ac(e, i, t, n, q)) {
          ;((Y = 1), ec(e, Di(n, e.current)), (K = null))
          return
        }
      } catch (t) {
        if (i !== null) throw ((K = i), t)
        ;((Y = 1), ec(e, Di(n, e.current)), (K = null))
        return
      }
      t.flags & 32768
        ? (M || r === 1
            ? (e = !0)
            : Ul || q & 536870912
              ? (e = !1)
              : ((Hl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = lo.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Iu(t, e))
        : Fu(t)
    }
    function Fu(e) {
      var t = e
      do {
        if (t.flags & 32768) {
          Iu(t, Hl)
          return
        }
        e = t.return
        var n = Vc(t.alternate, t, Gl)
        if (n !== null) {
          K = n
          return
        }
        if (((t = t.sibling), t !== null)) {
          K = t
          return
        }
        K = t = e
      } while (t !== null)
      Y === 0 && (Y = 5)
    }
    function Iu(e, t) {
      do {
        var n = Hc(e.alternate, e)
        if (n !== null) {
          ;((n.flags &= 32767), (K = n))
          return
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          K = e
          return
        }
        K = e = n
      } while (e !== null)
      ;((Y = 6), (K = null))
    }
    function Lu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null
      do Hu()
      while (X !== 0)
      if (W & 6) throw Error(i(327))
      if (t !== null) {
        if (t === e.current) throw Error(i(177))
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ci),
          st(e, n, o, s, c, l),
          e === G && ((K = G = null), (q = 0)),
          (ou = t),
          (au = e),
          (su = n),
          (cu = o),
          (lu = a),
          (uu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Xu(ze, function () {
                return (Uu(), null)
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          ;((r = T.T), (T.T = null), (a = E.p), (E.p = 2), (s = W), (W |= 4))
          try {
            sl(e, t, n)
          } finally {
            ;((W = s), (E.p = a), (T.T = r))
          }
        }
        ;((X = 1), Ru(), zu(), Bu())
      }
    }
    function Ru() {
      if (X === 1) {
        X = 0
        var e = au,
          t = ou,
          n = (t.flags & 13878) != 0
        if (t.subtreeFlags & 13878 || n) {
          ;((n = T.T), (T.T = null))
          var r = E.p
          E.p = 2
          var i = W
          W |= 4
          try {
            yl(t, e)
            var a = zd,
              o = Lr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Ir(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Rr(s)) {
                var l = c.start,
                  u = c.end
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)))
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m)
                    !p.extend && h > g && ((o = g), (g = h), (h = o))
                    var _ = Fr(s, h),
                      v = Fr(s, g)
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange()
                      ;(y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)))
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop })
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s]
                ;((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top))
              }
            }
            ;((sp = !!Rd), (zd = Rd = null))
          } finally {
            ;((W = i), (E.p = r), (T.T = n))
          }
        }
        ;((e.current = t), (X = 2))
      }
    }
    function zu() {
      if (X === 2) {
        X = 0
        var e = au,
          t = ou,
          n = (t.flags & 8772) != 0
        if (t.subtreeFlags & 8772 || n) {
          ;((n = T.T), (T.T = null))
          var r = E.p
          E.p = 2
          var i = W
          W |= 4
          try {
            cl(e, t.alternate, t)
          } finally {
            ;((W = i), (E.p = r), (T.T = n))
          }
        }
        X = 3
      }
    }
    function Bu() {
      if (X === 4 || X === 3) {
        ;((X = 0), Pe())
        var e = au,
          t = ou,
          n = su,
          r = uu
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (X = 5)
          : ((X = 0), (ou = au = null), Vu(e, e.pendingLanes))
        var i = e.pendingLanes
        if (
          (i === 0 && (iu = null),
          ft(n),
          (t = t.stateNode),
          Ge && typeof Ge.onCommitFiberRoot == `function`)
        )
          try {
            Ge.onCommitFiberRoot(We, t, void 0, (t.current.flags & 128) == 128)
          } catch {}
        if (r !== null) {
          ;((t = T.T), (i = E.p), (E.p = 2), (T.T = null))
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o]
              a(s.value, { componentStack: s.stack })
            }
          } finally {
            ;((T.T = t), (E.p = i))
          }
        }
        ;(su & 3 && Hu(),
          rd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === fu
              ? du++
              : ((du = 0), (fu = e))
            : (du = 0),
          id(0, !1))
      }
    }
    function Vu(e, t) {
      ;(e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ha(t)))
    }
    function Hu() {
      return (Ru(), zu(), Bu(), Uu())
    }
    function Uu() {
      if (X !== 5) return !1
      var e = au,
        t = cu
      cu = 0
      var n = ft(su),
        r = T.T,
        a = E.p
      try {
        ;((E.p = 32 > n ? 32 : n), (T.T = null), (n = lu), (lu = null))
        var o = au,
          s = su
        if (((X = 0), (ou = au = null), (su = 0), W & 6)) throw Error(i(331))
        var c = W
        if (
          ((W |= 4),
          Il(o.current),
          Ol(o, o.current, s, n),
          (W = c),
          id(0, !1),
          Ge && typeof Ge.onPostCommitFiberRoot == `function`)
        )
          try {
            Ge.onPostCommitFiberRoot(We, o)
          } catch {}
        return !0
      } finally {
        ;((E.p = a), (T.T = r), Vu(e, t))
      }
    }
    function Wu(e, t, n) {
      ;((t = Di(n, t)),
        (t = nc(e.stateNode, t, 2)),
        (e = Xa(e, t, 2)),
        e !== null && (ot(e, 2), rd(e)))
    }
    function Z(e, t, n) {
      if (e.tag === 3) Wu(e, e, n)
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Wu(t, e, n)
            break
          } else if (t.tag === 1) {
            var r = t.stateNode
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (iu === null || !iu.has(r)))
            ) {
              ;((e = Di(n, e)),
                (n = rc(2)),
                (r = Xa(t, n, 2)),
                r !== null && (ic(n, r, t, e), ot(r, 2), rd(r)))
              break
            }
          }
          t = t.return
        }
    }
    function Gu(e, t, n) {
      var r = e.pingCache
      if (r === null) {
        r = e.pingCache = new Bl()
        var i = new Set()
        r.set(t, i)
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)))
      i.has(n) ||
        ((Wl = !0), i.add(n), (e = Ku.bind(null, e, t, n)), t.then(e, e))
    }
    function Ku(e, t, n) {
      var r = e.pingCache
      ;(r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        G === e &&
          (q & n) === n &&
          (Y === 4 || (Y === 3 && (q & 62914560) === q && 300 > Fe() - eu)
            ? !(W & 2) && Su(e, 0)
            : (Jl |= n),
          Xl === q && (Xl = 0)),
        rd(e))
    }
    function qu(e, t) {
      ;(t === 0 && (t = it()), (e = fi(e, t)), e !== null && (ot(e, t), rd(e)))
    }
    function Ju(e) {
      var t = e.memoizedState,
        n = 0
      ;(t !== null && (n = t.retryLane), qu(e, n))
    }
    function Yu(e, t) {
      var n = 0
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState
          a !== null && (n = a.retryLane)
          break
        case 19:
          r = e.stateNode
          break
        case 22:
          r = e.stateNode._retryCache
          break
        default:
          throw Error(i(314))
      }
      ;(r !== null && r.delete(t), qu(e, n))
    }
    function Xu(e, t) {
      return je(e, t)
    }
    var Zu = null,
      Qu = null,
      $u = !1,
      ed = !1,
      td = !1,
      nd = 0
    function rd(e) {
      ;(e !== Qu &&
        e.next === null &&
        (Qu === null ? (Zu = Qu = e) : (Qu = Qu.next = e)),
        (ed = !0),
        $u || (($u = !0), ud()))
    }
    function id(e, t) {
      if (!td && ed) {
        td = !0
        do
          for (var n = !1, r = Zu; r !== null;) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes
                if (i === 0) var a = 0
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes
                  ;((a = (1 << (31 - qe(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0))
                }
                a !== 0 && ((n = !0), ld(r, a))
              } else
                ((a = q),
                  (a = tt(
                    r,
                    r === G ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1
                  )),
                  !(a & 3) || nt(r, a) || ((n = !0), ld(r, a)))
            r = r.next
          }
        while (n)
        td = !1
      }
    }
    function ad() {
      od()
    }
    function od() {
      ed = $u = !1
      var e = 0
      nd !== 0 && Gd() && (e = nd)
      for (var t = Fe(), n = null, r = Zu; r !== null;) {
        var i = r.next,
          a = sd(r, t)
        ;(a === 0
          ? ((r.next = null),
            n === null ? (Zu = i) : (n.next = i),
            i === null && (Qu = n))
          : ((n = r), (e !== 0 || a & 3) && (ed = !0)),
          (r = i))
      }
      ;((X !== 0 && X !== 5) || id(e, !1), nd !== 0 && (nd = 0))
    }
    function sd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - qe(a),
          s = 1 << o,
          c = i[o]
        ;(c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = rt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s))
      }
      if (
        ((t = G),
        (n = q),
        (n = tt(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (J === 2 || J === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Me(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        )
      if (!(n & 3) || nt(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t
        switch ((r !== null && Me(r), ft(n))) {
          case 2:
          case 8:
            n = Re
            break
          case 32:
            n = ze
            break
          case 268435456:
            n = Ve
            break
          default:
            n = ze
        }
        return (
          (r = cd.bind(null, e)),
          (n = je(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        )
      }
      return (
        r !== null && r !== null && Me(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      )
    }
    function cd(e, t) {
      if (X !== 0 && X !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null)
      var n = e.callbackNode
      if (Hu() && e.callbackNode !== n) return null
      var r = q
      return (
        (r = tt(
          e,
          e === G ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        r === 0
          ? null
          : (gu(e, r, t),
            sd(e, Fe()),
            e.callbackNode != null && e.callbackNode === n
              ? cd.bind(null, e)
              : null)
      )
    }
    function ld(e, t) {
      if (Hu()) return null
      gu(e, t, !0)
    }
    function ud() {
      Yd(function () {
        W & 6 ? je(Le, ad) : od()
      })
    }
    function dd() {
      if (nd === 0) {
        var e = va
        ;(e === 0 && ((e = Ze), (Ze <<= 1), !(Ze & 261888) && (Ze = 256)),
          (nd = e))
      }
      return nd
    }
    function fd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : ln(`` + e)
    }
    function pd(e, t) {
      var n = t.ownerDocument.createElement(`input`)
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      )
    }
    function md(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[_t] || null).action),
          o = r.submitter
        o &&
          ((t = (t = o[_t] || null)
            ? fd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)))
        var s = new jn(`action`, `action`, null, r, i)
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (nd !== 0) {
                    var e = o ? pd(i, o) : new FormData(i)
                    Os(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e
                    )
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? pd(i, o) : new FormData(i)),
                    Os(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e
                    ))
              },
              currentTarget: i,
            },
          ],
        })
      }
    }
    for (var hd = 0; hd < ri.length; hd++) {
      var gd = ri[hd]
      ii(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)))
    }
    ;(ii(Xr, `onAnimationEnd`),
      ii(Zr, `onAnimationIteration`),
      ii(Qr, `onAnimationStart`),
      ii(`dblclick`, `onDoubleClick`),
      ii(`focusin`, `onFocus`),
      ii(`focusout`, `onBlur`),
      ii($r, `onTransitionRun`),
      ii(ei, `onTransitionStart`),
      ii(ti, `onTransitionCancel`),
      ii(k, `onTransitionEnd`),
      Nt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Nt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Nt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Nt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Mt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `
        )
      ),
      Mt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `
        )
      ),
      Mt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Mt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `)
      ),
      Mt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `)
      ),
      Mt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `)
      ))
    var _d =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `
        ),
      vd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(_d)
      )
    function yd(e, t) {
      t = (t & 4) != 0
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event
        r = r.listeners
        a: {
          var a = void 0
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a
              ;((a = s), (i.currentTarget = l))
              try {
                a(i)
              } catch (e) {
                ai(e)
              }
              ;((i.currentTarget = null), (a = c))
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a
              ;((a = s), (i.currentTarget = l))
              try {
                a(i)
              } catch (e) {
                ai(e)
              }
              ;((i.currentTarget = null), (a = c))
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[yt]
      n === void 0 && (n = t[yt] = new Set())
      var r = e + `__bubble`
      n.has(r) || (Cd(t, e, 2, !1), n.add(r))
    }
    function bd(e, t, n) {
      var r = 0
      ;(t && (r |= 4), Cd(n, e, r, t))
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2)
    function Sd(e) {
      if (!e[xd]) {
        ;((e[xd] = !0),
          At.forEach(function (t) {
            t !== `selectionchange` && (vd.has(t) || bd(t, !1, e), bd(t, !0, e))
          }))
        var t = e.nodeType === 9 ? e : e.ownerDocument
        t === null || t[xd] || ((t[xd] = !0), bd(`selectionchange`, !1, t))
      }
    }
    function Cd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp
          break
        case 8:
          i = lp
          break
        default:
          i = up
      }
      ;((n = i.bind(null, t, n, e)),
        (i = void 0),
        !bn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }))
    }
    function wd(e, t, n, r, i) {
      var a = r
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return
          var s = r.tag
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo
            if (c === i) break
            if (s === 4)
              for (s = r.return; s !== null;) {
                var l = s.tag
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return
                s = s.return
              }
            for (; c !== null;) {
              if (((s = Tt(c)), s === null)) return
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s
                continue a
              }
              c = c.parentNode
            }
          }
          r = r.return
        }
      _n(function () {
        var r = a,
          i = fn(n),
          s = []
        a: {
          var c = ni.get(e)
          if (c !== void 0) {
            var l = jn,
              u = e
            switch (e) {
              case `keypress`:
                if (En(n) === 0) break a
              case `keydown`:
              case `keyup`:
                l = Yn
                break
              case `focusin`:
                ;((u = `focus`), (l = Bn))
                break
              case `focusout`:
                ;((u = `blur`), (l = Bn))
                break
              case `beforeblur`:
              case `afterblur`:
                l = Bn
                break
              case `click`:
                if (n.button === 2) break a
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Rn
                break
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = zn
                break
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Zn
                break
              case Xr:
              case Zr:
              case Qr:
                l = Vn
                break
              case k:
                l = Qn
                break
              case `scroll`:
              case `scrollend`:
                l = Nn
                break
              case `wheel`:
                l = $n
                break
              case `copy`:
              case `cut`:
              case `paste`:
                l = Hn
                break
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Xn
                break
              case `toggle`:
              case `beforetoggle`:
                l = er
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c
            d = []
            for (var m = r, h; m !== null;) {
              var g = m
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = vn(m, p)), g != null && d.push(Td(m, g, h))),
                f)
              )
                break
              m = m.return
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }))
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== dn &&
                (u = n.relatedTarget || n.fromElement) &&
                (Tt(u) || u[vt]))
            )
              break a
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? Tt(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Rn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Xn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : Dt(l)),
                (h = u == null ? c : Dt(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                Tt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++
                  g = 0
                  for (var _ = m; _; _ = d(_)) g++
                  for (; 0 < h - g;) ((p = d(p)), h--)
                  for (; 0 < g - h;) ((m = d(m)), g--)
                  for (; h--;) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p
                      break b
                    }
                    ;((p = d(p)), (m = d(m)))
                  }
                  d = null
                }
              else d = null
              ;(l !== null && Od(s, c, l, d, !1),
                u !== null && f !== null && Od(s, f, u, d, !0))
            }
          }
          a: {
            if (
              ((c = r ? Dt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = br
            else if (mr(c))
              if (xr) v = Ar
              else {
                v = Or
                var y = Dr
              }
            else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && on(r.elementType) && (v = br)
                  : (v = kr))
            if ((v &&= v(e, r))) {
              hr(s, v, n, i)
              break a
            }
            ;(y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Zt(c, `number`, c.value))
          }
          switch (((y = r ? Dt(r) : window), e)) {
            case `focusin`:
              ;(mr(y) || y.contentEditable === `true`) &&
                ((Br = y), (Vr = r), (Hr = null))
              break
            case `focusout`:
              Hr = Vr = Br = null
              break
            case `mousedown`:
              Ur = !0
              break
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ;((Ur = !1), Wr(s, n, i))
              break
            case `selectionchange`:
              if (zr) break
            case `keydown`:
            case `keyup`:
              Wr(s, n, i)
          }
          var b
          if (nr)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`
                  break b
                case `compositionend`:
                  x = `onCompositionEnd`
                  break b
                case `compositionupdate`:
                  x = `onCompositionUpdate`
                  break b
              }
              x = void 0
            }
          else
            ur
              ? cr(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`)
          ;(x &&
            (ar &&
              n.locale !== `ko` &&
              (ur || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && ur && (b = Tn())
                : ((Sn = i),
                  (Cn = `value` in Sn ? Sn.value : Sn.textContent),
                  (ur = !0))),
            (y = Ed(r, x)),
            0 < y.length &&
              ((x = new Un(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = lr(n)), b !== null && (x.data = b)))),
            (b = ir ? dr(e, n) : fr(e, n)) &&
              ((x = Ed(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Un(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            md(s, e, r, n, i))
        }
        yd(s, t)
      })
    }
    function Td(e, t, n) {
      return { instance: e, listener: t, currentTarget: n }
    }
    function Ed(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = vn(e, n)),
            i != null && r.unshift(Td(e, i, a)),
            (i = vn(e, t)),
            i != null && r.push(Td(e, i, a))),
          e.tag === 3)
        )
          return r
        e = e.return
      }
      return []
    }
    function Dd(e) {
      if (e === null) return null
      do e = e.return
      while (e && e.tag !== 5 && e.tag !== 27)
      return e || null
    }
    function Od(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode
        if (((s = s.tag), c !== null && c === r)) break
        ;((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = vn(n, a)), l != null && o.unshift(Td(n, l, c)))
            : i || ((l = vn(n, a)), l != null && o.push(Td(n, l, c)))),
          (n = n.return))
      }
      o.length !== 0 && e.push({ event: t, listeners: o })
    }
    var kd = /\r\n?/g,
      Ad = /\u0000|\uFFFD/g
    function jd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          kd,
          `
`
        )
        .replace(Ad, ``)
    }
    function Md(e, t) {
      return ((t = jd(t)), jd(e) === t)
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || tn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              tn(e, `` + r)
          break
        case `className`:
          zt(e, `class`, r)
          break
        case `tabIndex`:
          zt(e, `tabindex`, r)
          break
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          zt(e, n, r)
          break
        case `style`:
          an(e, r, o)
          break
        case `data`:
          if (t !== `object`) {
            zt(e, `data`, r)
            break
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n)
            break
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n)
            break
          }
          ;((r = ln(`` + r)), e.setAttribute(n, r))
          break
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`
            )
            break
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null)))
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n)
            break
          }
          ;((r = ln(`` + r)), e.setAttribute(n, r))
          break
        case `onClick`:
          r != null && (e.onclick = un)
          break
        case `onScroll`:
          r != null && Q(`scroll`, e)
          break
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e)
          break
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61))
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60))
              e.innerHTML = n
            }
          }
          break
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`
          break
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`
          break
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break
        case `autoFocus`:
          break
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`)
            break
          }
          ;((n = ln(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n))
          break
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n)
          break
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n)
          break
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n)
          break
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n)
          break
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r)
          break
        case `popover`:
          ;(Q(`beforetoggle`, e), Q(`toggle`, e), Rt(e, `popover`, r))
          break
        case `xlinkActuate`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r)
          break
        case `xlinkArcrole`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r)
          break
        case `xlinkRole`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r)
          break
        case `xlinkShow`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r)
          break
        case `xlinkTitle`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r)
          break
        case `xlinkType`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r)
          break
        case `xmlBase`:
          Bt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r)
          break
        case `xmlLang`:
          Bt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r)
          break
        case `xmlSpace`:
          Bt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r)
          break
        case `is`:
          Rt(e, `is`, r)
          break
        case `innerText`:
        case `textContent`:
          break
        default:
          ;(!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = sn.get(n) || n), Rt(e, n, r))
      }
    }
    function Nd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          an(e, r, o)
          break
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61))
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60))
              e.innerHTML = n
            }
          }
          break
        case `children`:
          typeof r == `string`
            ? tn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && tn(e, `` + r)
          break
        case `onScroll`:
          r != null && Q(`scroll`, e)
          break
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e)
          break
        case `onClick`:
          r != null && (e.onclick = un)
          break
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break
        case `innerText`:
        case `textContent`:
          break
        default:
          if (!jt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[_t] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                ;(typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a))
                break a
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : Rt(e, n, r)
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break
        case `img`:
          ;(Q(`error`, e), Q(`load`, e))
          var r = !1,
            a = !1,
            o
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o]
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0
                    break
                  case `srcSet`:
                    a = !0
                    break
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t))
                  default:
                    $(e, t, o, s, n, null)
                }
            }
          ;(a && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null))
          return
        case `input`:
          Q(`invalid`, e)
          var c = (o = s = a = null),
            l = null,
            u = null
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r]
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d
                    break
                  case `type`:
                    s = d
                    break
                  case `checked`:
                    l = d
                    break
                  case `defaultChecked`:
                    u = d
                    break
                  case `value`:
                    o = d
                    break
                  case `defaultValue`:
                    c = d
                    break
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t))
                    break
                  default:
                    $(e, t, r, d, n, null)
                }
            }
          Xt(e, o, c, l, u, s, a, !1)
          return
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c
                  break
                case `defaultValue`:
                  s = c
                  break
                case `multiple`:
                  r = c
                default:
                  $(e, t, a, c, n, null)
              }
          ;((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Qt(e, !!r, n, !0) : Qt(e, !!r, t, !1))
          return
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c
                  break
                case `defaultValue`:
                  a = c
                  break
                case `children`:
                  o = c
                  break
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91))
                  break
                default:
                  $(e, t, s, c, n, null)
              }
          en(e, r, a, o)
          return
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`
                  break
                default:
                  $(e, t, l, r, n, null)
              }
          return
        case `dialog`:
          ;(Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e))
          break
        case `iframe`:
        case `object`:
          Q(`load`, e)
          break
        case `video`:
        case `audio`:
          for (r = 0; r < _d.length; r++) Q(_d[r], e)
          break
        case `image`:
          ;(Q(`error`, e), Q(`load`, e))
          break
        case `details`:
          Q(`toggle`, e)
          break
        case `embed`:
        case `source`:
        case `link`:
          ;(Q(`error`, e), Q(`load`, e))
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t))
                default:
                  $(e, t, u, r, n, null)
              }
          return
        default:
          if (on(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0))
            return
          }
      }
      for (c in n)
        n.hasOwnProperty(c) && ((r = n[c]), r != null && $(e, t, c, r, n, null))
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null
          for (m in n) {
            var f = n[m]
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break
                case `value`:
                  break
                case `defaultValue`:
                  l = f
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f)
              }
          }
          for (var p in r) {
            var m = r[p]
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m
                  break
                case `name`:
                  a = m
                  break
                case `checked`:
                  u = m
                  break
                case `defaultChecked`:
                  d = m
                  break
                case `value`:
                  s = m
                  break
                case `defaultValue`:
                  c = m
                  break
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t))
                  break
                default:
                  m !== f && $(e, t, p, m, r, f)
              }
          }
          Yt(e, s, c, l, u, d, o, a)
          return
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break
                case `multiple`:
                  m = l
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l)
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o
                  break
                case `defaultValue`:
                  c = o
                  break
                case `multiple`:
                  s = o
                default:
                  o !== l && $(e, t, a, o, r, l)
              }
          ;((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? Qt(e, !!n, n ? [] : ``, !1) : Qt(e, !!n, t, !0))
              : Qt(e, !!n, p, !1))
          return
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break
                case `children`:
                  break
                default:
                  $(e, t, c, null, r, a)
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a
                  break
                case `defaultValue`:
                  m = a
                  break
                case `children`:
                  break
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91))
                  break
                default:
                  a !== o && $(e, t, s, a, r, o)
              }
          $t(e, p, m)
          return
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1
                  break
                default:
                  $(e, t, h, null, r, p)
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`
                  break
                default:
                  $(e, t, l, p, r, m)
              }
          return
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                $(e, t, g, null, r, p))
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t))
                  break
                default:
                  $(e, t, u, p, r, m)
              }
          return
        default:
          if (on(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p))
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m))
            return
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            $(e, t, v, null, r, p))
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            $(e, t, f, p, r, m))
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0
        default:
          return !1
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime
              if (l > s) break
              var u = c.transferSize,
                d = c.initiatorType
              u &&
                Id(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))))
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break
          }
        }
        if (0 < e) return t / e / 1e6
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5
    }
    var Rd = null,
      zd = null
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1
        case `http://www.w3.org/1998/Math/MathML`:
          return 2
        default:
          return 0
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1
          case `math`:
            return 2
          default:
            return 0
        }
      return e === 1 && t === `foreignObject` ? 0 : e
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      )
    }
    var Wd = null
    function Gd() {
      var e = window.event
      return e && e.type === `popstate`
        ? e === Wd
          ? !1
          : ((Wd = e), !0)
        : ((Wd = null), !1)
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : function (e) {
                return Jd.resolve(null).then(e).catch(Xd)
              }
    function Xd(e) {
      setTimeout(function () {
        throw e
      })
    }
    function Zd(e) {
      return e === `head`
    }
    function Qd(e, t) {
      var n = t,
        r = 0
      do {
        var i = n.nextSibling
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              ;(e.removeChild(i), Np(t))
              return
            }
            r--
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++
          else if (n === `html`) pf(e.ownerDocument.documentElement)
          else if (n === `head`) {
            ;((n = e.ownerDocument.head), pf(n))
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName
              ;(a[Ct] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o))
            }
          } else n === `body` && pf(e.ownerDocument.body)
        n = i
      } while (n)
      Np(t)
    }
    function $d(e, t) {
      var n = e
      e = 0
      do {
        var r = n.nextSibling
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break
            e--
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++
        n = r
      } while (n)
    }
    function ef(e) {
      var t = e.firstChild
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            ;(ef(n), wt(n))
            continue
          case `SCRIPT`:
          case `STYLE`:
            continue
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue
        }
        e.removeChild(n)
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e
          } else return e
        else if (!e[Ct])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break
              return e
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break
              return e
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break
              return e
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break
              return e
            default:
              return e
          }
        if (((e = cf(e.nextSibling)), e === null)) break
      }
      return null
    }
    function nf(e, t, n) {
      if (t === ``) return null
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null
      return e
    }
    function rf(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null
      return e
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`
    }
    function of(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      )
    }
    function sf(e, t) {
      var n = e.ownerDocument
      if (e.data === `$~`) e._reactRetry = t
      else if (e.data !== `$?` || n.readyState !== `loading`) t()
      else {
        var r = function () {
          ;(t(), n.removeEventListener(`DOMContentLoaded`, r))
        }
        ;(n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r))
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType
        if (t === 1 || t === 3) break
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break
          if (t === `/$` || t === `/&`) return null
        }
      }
      return e
    }
    var lf = null
    function uf(e) {
      e = e.nextSibling
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling)
            t--
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++
        }
        e = e.nextSibling
      }
      return null
    }
    function df(e) {
      e = e.previousSibling
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e
            t--
          } else (n !== `/$` && n !== `/&`) || t++
        }
        e = e.previousSibling
      }
      return null
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452))
          return e
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453))
          return e
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454))
          return e
        default:
          throw Error(i(451))
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0])
      wt(e)
    }
    var mf = new Map(),
      hf = new Set()
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument
    }
    var _f = E.d
    E.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of }
    function vf() {
      var e = _f.f(),
        t = bu()
      return e || t
    }
    function yf(e) {
      var t = Et(e)
      t !== null && t.tag === 5 && t.type === `form` ? As(t) : _f.r(e)
    }
    var bf = typeof document > `u` ? null : document
    function xf(e, t, n) {
      var r = bf
      if (r && typeof t == `string` && t) {
        var i = Jt(t)
        ;((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Pd(t, `link`, e),
              kt(t),
              r.head.appendChild(t))))
      }
    }
    function Sf(e) {
      ;(_f.D(e), xf(`dns-prefetch`, e, null))
    }
    function Cf(e, t) {
      ;(_f.C(e, t), xf(`preconnect`, e, t))
    }
    function wf(e, t, n) {
      _f.L(e, t, n)
      var r = bf
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Jt(t) + `"]`
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Jt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Jt(n.imageSizes) + `"]`))
          : (i += `[href="` + Jt(e) + `"]`)
        var a = i
        switch (t) {
          case `style`:
            a = Af(e)
            break
          case `script`:
            a = Pf(e)
        }
        mf.has(a) ||
          ((e = h(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)),
            Pd(t, `link`, e),
            kt(t),
            r.head.appendChild(t)))
      }
    }
    function Tf(e, t) {
      _f.m(e, t)
      var n = bf
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Jt(r) +
            `"][href="` +
            Jt(e) +
            `"]`,
          a = i
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e)
        }
        if (
          !mf.has(a) &&
          ((e = h({ rel: `modulepreload`, href: e }, t)),
          mf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return
          }
          ;((r = n.createElement(`link`)),
            Pd(r, `link`, e),
            kt(r),
            n.head.appendChild(r))
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n)
      var r = bf
      if (r && e) {
        var i = Ot(r).hoistableStyles,
          a = Af(e)
        t ||= `default`
        var o = i.get(a)
        if (!o) {
          var s = { loading: 0, preload: null }
          if ((o = r.querySelector(jf(a)))) s.loading = 5
          else {
            ;((e = h({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = mf.get(a)) && Rf(e, n))
            var c = (o = r.createElement(`link`))
            ;(kt(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ;((c.onload = e), (c.onerror = t))
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2
              }),
              (s.loading |= 4),
              Lf(o, t, r))
          }
          ;((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o))
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t)
      var n = bf
      if (n && e) {
        var r = Ot(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i)
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            kt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a))
      }
    }
    function Of(e, t) {
      _f.M(e, t)
      var n = bf
      if (n && e) {
        var r = Ot(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i)
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            kt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a))
      }
    }
    function kf(e, t, n, r) {
      var a = (a = _e.current) ? gf(a) : null
      if (!a) throw Error(i(446))
      switch (e) {
        case `meta`:
        case `title`:
          return null
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = Ot(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null }
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href)
            var o = Ot(a).hoistableStyles,
              s = o.get(e)
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(jf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  o || Nf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``))
            return s
          }
          if (t && r !== null) throw Error(i(529, ``))
          return null
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = Ot(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          )
        default:
          throw Error(i(444, e))
      }
    }
    function Af(e) {
      return `href="` + Jt(e) + `"`
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`
    }
    function Mf(e) {
      return h({}, e, { "data-precedence": e.precedence, precedence: null })
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1)
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2)
          }),
          Pd(t, `link`, n),
          kt(t),
          e.head.appendChild(t))
    }
    function Pf(e) {
      return `[src="` + Jt(e) + `"]`
    }
    function Ff(e) {
      return `script[async]` + e
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Jt(n.href) + `"]`)
            if (r) return ((t.instance = r), kt(r), r)
            var a = h({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            })
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              kt(r),
              Pd(r, `style`, a),
              Lf(r, n.precedence, e),
              (t.instance = r)
            )
          case `stylesheet`:
            a = Af(n.href)
            var o = e.querySelector(jf(a))
            if (o) return ((t.state.loading |= 4), (t.instance = o), kt(o), o)
            ;((r = Mf(n)),
              (a = mf.get(a)) && Rf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              kt(o))
            var s = o
            return (
              (s._p = new Promise(function (e, t) {
                ;((s.onload = e), (s.onerror = t))
              })),
              Pd(o, `link`, r),
              (t.state.loading |= 4),
              Lf(o, n.precedence, e),
              (t.instance = o)
            )
          case `script`:
            return (
              (o = Pf(n.src)),
              (a = e.querySelector(Ff(o)))
                ? ((t.instance = a), kt(a), a)
                : ((r = n),
                  (a = mf.get(o)) && ((r = h({}, n)), zf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  kt(a),
                  Pd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            )
          case `void`:
            return null
          default:
            throw Error(i(443, t.type))
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e))
      return t.instance
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o]
        if (s.dataset.precedence === t) a = s
        else if (a !== i) break
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild))
    }
    function Rf(e, t) {
      ;((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title))
    }
    function zf(e, t) {
      ;((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity))
    }
    var Bf = null
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map())
        i.set(n, r)
      } else ((i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)))
      if (r.has(e)) return r
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i]
        if (
          !(
            a[Ct] ||
            a[gt] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``
          o = e + o
          var s = r.get(o)
          s ? s.push(a) : r.set(o, [a])
        }
      }
      return r
    }
    function Hf(e, t, n) {
      ;((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null
        ))
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1
      switch (e) {
        case `meta`:
        case `title`:
          return !0
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break
          return !0
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              )
            default:
              return !0
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0
      }
      return !1
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3))
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i))
          if (a) {
            ;((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              kt(a))
            return
          }
          ;((a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            kt(a))
          var o = a
          ;((o._p = new Promise(function (e, t) {
            ;((o.onload = e), (o.onerror = t))
          })),
            Pd(a, `link`, r),
            (n.instance = a))
        }
        ;(e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)))
      }
    }
    var Kf = 0
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend
                  ;((e.unsuspend = null), t())
                }
              }, 6e4 + t)
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld())
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend
                    ;((e.unsuspend = null), t())
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t
              )
              return (
                (e.unsuspend = n),
                function () {
                  ;((e.unsuspend = null), clearTimeout(r), clearTimeout(i))
                }
              )
            }
          : null
      )
    }
    function Jf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Xf(this, this.stylesheets)
        else if (this.unsuspend) {
          var e = this.unsuspend
          ;((this.unsuspend = null), e())
        }
      }
    }
    var Yf = null
    function Xf(e, t) {
      ;((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Yf = new Map()),
          t.forEach(Zf, e),
          (Yf = null),
          Jf.call(e)))
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e)
        if (n) var r = n.get(null)
        else {
          ;((n = new Map()), Yf.set(e, n))
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a]
            ;(o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o))
          }
          r && n.set(null, r)
        }
        ;((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4))
      }
    }
    var Qf = {
      $$typeof: S,
      Provider: null,
      Consumer: null,
      _currentValue: de,
      _currentValue2: de,
      _threadCount: 0,
    }
    function $f(e, t, n, r, i, a, o, s, c) {
      ;((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = at(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = at(0)),
        (this.hiddenUpdates = at(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()))
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = _i(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ma()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        qa(a),
        e
      )
    }
    function tp(e) {
      return e ? ((e = hi), e) : hi
    }
    function np(e, t, n, r, i, a) {
      ;((i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ya(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Xa(e, r, t)),
        n !== null && (hu(n, e, t), Za(n, e, t)))
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane
        e.retryLane = n !== 0 && n < t ? n : t
      }
    }
    function ip(e, t) {
      ;(rp(e, t), (e = e.alternate) && rp(e, t))
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = fi(e, 67108864)
        ;(t !== null && hu(t, e, 67108864), ip(e, 67108864))
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = pu()
        t = dt(t)
        var n = fi(e, t)
        ;(n !== null && hu(n, e, t), ip(e, t))
      }
    }
    var sp = !0
    function cp(e, t, n, r) {
      var i = T.T
      T.T = null
      var a = E.p
      try {
        ;((E.p = 2), up(e, t, n, r))
      } finally {
        ;((E.p = a), (T.T = i))
      }
    }
    function lp(e, t, n, r) {
      var i = T.T
      T.T = null
      var a = E.p
      try {
        ;((E.p = 8), up(e, t, n, r))
      } finally {
        ;((E.p = a), (T.T = i))
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r)
        if (i === null) (wd(e, t, r, fp, n), Cp(e, r))
        else if (Tp(i, e, t, n, r)) r.stopPropagation()
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null;) {
            var a = Et(i)
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = et(a.pendingLanes)
                    if (o !== 0) {
                      var s = a
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - qe(o))
                        ;((s.entanglements[1] |= c), (o &= ~c))
                      }
                      ;(rd(a), !(W & 6) && ((nu = Fe() + 500), id(0, !1)))
                    }
                  }
                  break
                case 31:
                case 13:
                  ;((s = fi(a, 2)), s !== null && hu(s, a, 2), bu(), ip(a, 2))
              }
            if (((a = dp(r)), a === null && wd(e, t, r, fp, n), a === i)) break
            i = a
          }
          i !== null && r.stopPropagation()
        } else wd(e, t, r, null, n)
      }
    }
    function dp(e) {
      return ((e = fn(e)), pp(e))
    }
    var fp = null
    function pp(e) {
      if (((fp = null), (e = Tt(e)), e !== null)) {
        var t = o(e)
        if (t === null) e = null
        else {
          var n = t.tag
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e
            e = null
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e
            e = null
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null
            e = null
          } else t !== e && (e = null)
        }
      }
      return ((fp = e), null)
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8
        case `message`:
          switch (Ie()) {
            case Le:
              return 2
            case Re:
              return 8
            case ze:
            case Be:
              return 32
            case Ve:
              return 268435456
            default:
              return 32
          }
        default:
          return 32
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `
        )
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null
          break
        case `dragenter`:
        case `dragleave`:
          _p = null
          break
        case `mouseover`:
        case `mouseout`:
          vp = null
          break
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId)
          break
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId)
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Et(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e)
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((gp = wp(gp, e, t, n, r, i)), !0)
        case `dragenter`:
          return ((_p = wp(_p, e, t, n, r, i)), !0)
        case `mouseover`:
          return ((vp = wp(vp, e, t, n, r, i)), !0)
        case `pointerover`:
          var a = i.pointerId
          return (yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0)
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)),
            !0
          )
      }
      return !1
    }
    function Ep(e) {
      var t = Tt(e.target)
      if (t !== null) {
        var n = o(t)
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ;((e.blockedOn = t),
                mt(e.priority, function () {
                  op(n)
                }))
              return
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ;((e.blockedOn = t),
                mt(e.priority, function () {
                  op(n)
                }))
              return
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
            return
          }
        }
      }
      e.blockedOn = null
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = dp(e.nativeEvent)
        if (n === null) {
          n = e.nativeEvent
          var r = new n.constructor(n.type, n)
          ;((dn = r), n.target.dispatchEvent(r), (dn = null))
        } else return ((t = Et(n)), t !== null && ap(t), (e.blockedOn = n), !1)
        t.shift()
      }
      return !0
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t)
    }
    function kp() {
      ;((hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op))
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp ||
          ((hp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)))
    }
    var jp = null
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null)
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2]
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue
              break
            }
            var a = Et(n)
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Os(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i
              ))
          }
        }))
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e)
      }
      ;(gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t))
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n]
        r.blockedOn === e && (r.blockedOn = null)
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null);)
        (Ep(n), n.blockedOn === null && xp.shift())
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[_t] || null
          if (typeof a == `function`) o || Mp(n)
          else if (o) {
            var s = null
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[_t] || null))) s = o.formAction
              else if (pp(i) !== null) continue
            } else s = o.action
            ;(typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Mp(n))
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e)
              })
            },
            focusReset: `manual`,
            scroll: `manual`,
          })
      }
      function t() {
        ;(i !== null && (i(), (i = null)), r || setTimeout(n, 20))
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            })
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ;((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)))
          }
        )
      }
    }
    function Fp(e) {
      this._internalRoot = e
    }
    ;((Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot
        if (t === null) throw Error(i(409))
        var n = t.current
        np(n, pu(), e, t, null, null)
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot
          if (e !== null) {
            this._internalRoot = null
            var t = e.containerInfo
            ;(np(e.current, 2, null, e, null, null), bu(), (t[vt] = null))
          }
        }))
    function Ip(e) {
      this._internalRoot = e
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = pt()
        e = { blockedOn: null, target: e, priority: t }
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        ;(xp.splice(n, 0, e), n === 0 && Ep(e))
      }
    }
    var Lp = n.version
    if (Lp !== `19.2.8`) throw Error(i(527, Lp, `19.2.8`))
    E.findDOMNode = function (e) {
      var t = e._reactInternals
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)))
      return (
        (e = d(t)),
        (e = e === null ? null : p(e)),
        (e = e === null ? null : e.stateNode),
        e
      )
    }
    var Rp = {
      bundleType: 0,
      version: `19.2.8`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: T,
      reconcilerVersion: `19.2.8`,
    }
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          ;((We = zp.inject(Rp)), (Ge = zp))
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299))
      var n = !1,
        r = ``,
        o = Zs,
        s = Qs,
        c = $s
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ep(e, 1, !1, null, null, n, r, null, o, s, c, Pp)),
        (e[vt] = t.current),
        Sd(e),
        new Fp(t)
      )
    }
  }),
  g = o((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (e) {
          console.error(e)
        }
    }
    ;(n(), (t.exports = h()))
  }),
  _ = `modulepreload`,
  v = function (e) {
    return `/` + e
  },
  y = {},
  b = function (e, t, n) {
    let r = Promise.resolve()
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`)
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e })
            )
          )
        )
      }
      function s(e) {
        return import.meta.resolve
          ? import.meta.resolve(e)
          : new URL(e, import.meta.url).href
      }
      r = o(
        t.map((t) => {
          if (((t = v(t, n)), (t = s(t)), t in y)) return
          y[t] = !0
          let r = t.endsWith(`.css`)
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n]
            if (i.href === t && (!r || i.rel === `stylesheet`)) return
          }
          let i = document.createElement(`link`)
          if (
            ((i.rel = r ? `stylesheet` : _),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              ;(i.addEventListener(`load`, e),
                i.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`))
                ))
            })
        })
      )
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 })
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason)
      return e().catch(i)
    })
  },
  x = c(u(), 1),
  ee = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,
  S = /^[\\/]{2}/
function C(e, t) {
  return t + e.replace(/\\/g, `/`)
}
var te = `popstate`
function ne(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `pathname` in e &&
    `search` in e &&
    `hash` in e &&
    `state` in e &&
    `key` in e
  )
}
function re(e = {}) {
  function t(e, t) {
    let n = t.state?.masked,
      { pathname: r, search: i, hash: a } = n || e.location
    return se(
      ``,
      { pathname: r, search: i, hash: a },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
      n
        ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash,
          }
        : void 0
    )
  }
  function n(e, t) {
    return typeof t == `string` ? t : ce(t)
  }
  return ue(t, n, null, e)
}
function w(e, t) {
  if (e === !1 || e == null) throw Error(t)
}
function ie(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t)
    try {
      throw Error(t)
    } catch {}
  }
}
function ae() {
  return Math.random().toString(36).substring(2, 10)
}
function oe(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
    masked: e.mask
      ? { pathname: e.pathname, search: e.search, hash: e.hash }
      : void 0,
  }
}
function se(e, t, n = null, r, i) {
  return {
    pathname: typeof e == `string` ? e : e.pathname,
    search: ``,
    hash: ``,
    ...(typeof t == `string` ? le(t) : t),
    state: n,
    key: (t && t.key) || r || ae(),
    mask: i,
  }
}
function ce({ pathname: e = `/`, search: t = ``, hash: n = `` }) {
  return (
    t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
  )
}
function le(e) {
  let t = {}
  if (e) {
    let n = e.indexOf(`#`)
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)))
    let r = e.indexOf(`?`)
    ;(r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e))
  }
  return t
}
function ue(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = `POP`,
    c = null,
    l = u()
  l ?? ((l = 0), o.replaceState({ ...o.state, idx: l }, ``))
  function u() {
    return (o.state || { idx: null }).idx
  }
  function d() {
    s = `POP`
    let e = u(),
      t = e == null ? null : e - l
    ;((l = e), c && c({ action: s, location: h.location, delta: t }))
  }
  function f(e, t) {
    s = `PUSH`
    let r = ne(e) ? e : se(h.location, e, t)
    ;(n && n(r, e), (l = u() + 1))
    let d = oe(r, l),
      f = h.createHref(r.mask || r)
    try {
      o.pushState(d, ``, f)
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e
      i.location.assign(f)
    }
    a && c && c({ action: s, location: h.location, delta: 1 })
  }
  function p(e, t) {
    s = `REPLACE`
    let r = ne(e) ? e : se(h.location, e, t)
    ;(n && n(r, e), (l = u()))
    let i = oe(r, l),
      d = h.createHref(r.mask || r)
    ;(o.replaceState(i, ``, d),
      a && c && c({ action: s, location: h.location, delta: 0 }))
  }
  function m(e) {
    return T(i, e)
  }
  let h = {
    get action() {
      return s
    },
    get location() {
      return e(i, o)
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`)
      return (
        i.addEventListener(te, d),
        (c = e),
        () => {
          ;(i.removeEventListener(te, d), (c = null))
        }
      )
    },
    createHref(e) {
      return t(i, e)
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e)
      return { pathname: t.pathname, search: t.search, hash: t.hash }
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e)
    },
  }
  return h
}
function T(e, t, n = !1) {
  let r = `http://localhost`
  ;(e &&
    (r = e.location.origin === `null` ? e.location.href : e.location.origin),
    w(r, `No window.location.(origin|href) available to create URL`))
  let i = typeof t == `string` ? t : ce(t)
  return (
    (i = i.replace(/ $/, `%20`)),
    !n && S.test(i) && (i = r + i),
    new URL(i, r)
  )
}
function E(e, t, n = `/`) {
  return de(e, t, n, !1)
}
function de(e, t, n, r, i) {
  let a = ke((typeof t == `string` ? le(t) : t).pathname || `/`, n)
  if (a == null) return null
  let o = i ?? pe(e),
    s = null,
    c = Oe(a)
  for (let e = 0; s == null && e < o.length; ++e) s = we(o[e], c, r)
  return s
}
function fe(e, t) {
  let { route: n, pathname: r, params: i } = e
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    loaderData: t[n.id],
    handle: n.handle,
  }
}
function pe(e) {
  let t = me(e)
  return (O(t), t)
}
function me(e, t = [], n = [], r = ``, i = !1) {
  let a = (e, a, o = i, s) => {
    let c = {
      relativePath: s === void 0 ? e.path || `` : s,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: a,
      route: e,
    }
    if (c.relativePath.startsWith(`/`)) {
      if (!c.relativePath.startsWith(r) && o) return
      ;(w(
        c.relativePath.startsWith(r),
        `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (c.relativePath = c.relativePath.slice(r.length)))
    }
    let l = Le([r, c.relativePath]),
      u = n.concat(c)
    ;(e.children &&
      e.children.length > 0 &&
      (w(
        e.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${l}".`
      ),
      me(e.children, t, u, l, o)),
      !(e.path == null && !e.index) &&
        t.push({
          path: l,
          score: Se(l, e.index),
          routesMeta: u.map((e, t) => {
            let [n, r] = De(e.relativePath, e.caseSensitive, t === u.length - 1)
            return { ...e, matcher: n, compiledParams: r }
          }),
        }))
  }
  return (
    e.forEach((e, t) => {
      if (e.path === `` || !e.path?.includes(`?`)) a(e, t)
      else for (let n of D(e.path)) a(e, t, !0, n)
    }),
    t
  )
}
function D(e) {
  let t = e.split(`/`)
  if (t.length === 0) return []
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``)
  if (r.length === 0) return i ? [a, ``] : [a]
  let o = D(r.join(`/`)),
    s = []
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  )
}
function O(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? Ce(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex)
        )
      : t.score - e.score
  )
}
var he = /^:[\w-]+$/,
  ge = 3,
  _e = 2,
  ve = 1,
  ye = 10,
  be = -2,
  xe = (e) => e === `*`
function Se(e, t) {
  let n = e.split(`/`),
    r = n.length
  return (
    n.some(xe) && (r += be),
    t && (r += _e),
    n
      .filter((e) => !xe(e))
      .reduce((e, t) => e + (he.test(t) ? ge : t === `` ? ve : ye), r)
  )
}
function Ce(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function we(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = []
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
      d =
        s.matcher && s.compiledParams
          ? Ee(u, l, s.matcher, s.compiledParams)
          : Te(u, l),
      f = s.route
    if (
      (!d &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Te(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l
        )),
      !d)
    )
      return null
    ;(Object.assign(i, d.params),
      o.push({
        params: i,
        pathname: Le([a, d.pathname]),
        pathnameBase: ze(Le([a, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== `/` && (a = Le([a, d.pathnameBase])))
  }
  return o
}
function Te(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = De(e.path, e.caseSensitive, e.end)
  return Ee(e, t, n, r)
}
function Ee(e, t, n, r) {
  let i = t.match(n)
  if (!i) return null
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1)
  return {
    params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
      if (t === `*`) {
        let e = s[r] || ``
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`)
      }
      let i = s[r]
      return (
        n && !i ? (e[t] = void 0) : (e[t] = (i || ``).replace(/%2F/g, `/`)),
        e
      )
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  }
}
function De(e, t = !1, n = !0) {
  ie(
    e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`
  )
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
          if ((r.push({ paramName: t, isOptional: n != null }), n)) {
            let t = a.charAt(i + e.length)
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`
          }
          return `/([^\\/]+)`
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`)
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  )
}
function Oe(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`)
  } catch (t) {
    return (
      ie(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    )
  }
}
function ke(e, t) {
  if (t === `/`) return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== `/` ? null : e.slice(n) || `/`
}
function Ae(e, t = `/`) {
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? le(e) : e,
    a
  return (
    n
      ? ((n = Ie(n)),
        (a = n.startsWith(`/`) ? je(n.substring(1), `/`) : je(n, t)))
      : (a = t),
    { pathname: a, search: Be(r), hash: Ve(i) }
  )
}
function je(e, t) {
  let n = Re(t).split(`/`)
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e)
    }),
    n.length > 1 ? n.join(`/`) : `/`
  )
}
function Me(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function Ne(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0)
  )
}
function Pe(e) {
  let t = Ne(e)
  return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase))
}
function Fe(e, t, n, r = !1) {
  let i
  typeof e == `string`
    ? (i = le(e))
    : ((i = { ...e }),
      w(
        !i.pathname || !i.pathname.includes(`?`),
        Me(`?`, `pathname`, `search`, i)
      ),
      w(
        !i.pathname || !i.pathname.includes(`#`),
        Me(`#`, `pathname`, `hash`, i)
      ),
      w(!i.search || !i.search.includes(`#`), Me(`#`, `search`, `hash`, i)))
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s
  if (o == null) s = n
  else {
    let e = t.length - 1
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`)
      for (; t[0] === `..`;) (t.shift(), --e)
      i.pathname = t.join(`/`)
    }
    s = e >= 0 ? t[e] : `/`
  }
  let c = Ae(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`)
  return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c)
}
var Ie = (e) => e.replace(/[\\/]{2,}/g, `/`),
  Le = (e) => Ie(e.join(`/`)),
  Re = (e) => e.replace(/\/+$/, ``),
  ze = (e) => Re(e).replace(/^\/*/, `/`),
  Be = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  Ve = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e),
  He = class {
    constructor(e, t, n, r = !1) {
      ;((this.status = e),
        (this.statusText = t || ``),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n))
    }
  }
function Ue(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  )
}
function We(e) {
  return Le(e.map((e) => e.route.path).filter(Boolean)) || `/`
}
var Ge =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0
function Ke(e, t) {
  let n = e
  if (typeof n != `string` || !ee.test(n))
    return { absoluteURL: void 0, isExternal: !1, to: n }
  let r = n,
    i = !1
  if (Ge)
    try {
      let e = new URL(window.location.href),
        r = S.test(n) ? new URL(C(n, e.protocol)) : new URL(n),
        a = ke(r.pathname, t)
      r.origin === e.origin && a != null
        ? (n = a + r.search + r.hash)
        : (i = !0)
    } catch {
      ie(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      )
    }
  return { absoluteURL: r, isExternal: i, to: n }
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)
var qe = [`POST`, `PUT`, `PATCH`, `DELETE`]
new Set(qe)
var Je = [`GET`, ...qe]
new Set(Je)
var Ye = [
  `about:`,
  `blob:`,
  `chrome:`,
  `chrome-untrusted:`,
  `content:`,
  `data:`,
  `devtools:`,
  `file:`,
  `filesystem:`,
  `javascript:`,
]
function Xe(e) {
  try {
    return Ye.includes(new URL(e).protocol)
  } catch {
    return !1
  }
}
var Ze = x.createContext(null)
Ze.displayName = `DataRouter`
var Qe = x.createContext(null)
Qe.displayName = `DataRouterState`
var $e = x.createContext(!1)
function et() {
  return x.useContext($e)
}
var tt = x.createContext({ isTransitioning: !1 })
tt.displayName = `ViewTransition`
var nt = x.createContext(new Map())
nt.displayName = `Fetchers`
var rt = x.createContext(null)
rt.displayName = `Await`
var it = x.createContext(null)
it.displayName = `Navigation`
var at = x.createContext(null)
at.displayName = `Location`
var ot = x.createContext({ outlet: null, matches: [], isDataRoute: !1 })
ot.displayName = `Route`
var st = x.createContext(null)
st.displayName = `RouteError`
var ct = `REACT_ROUTER_ERROR`,
  lt = `REDIRECT`,
  ut = `ROUTE_ERROR_RESPONSE`
function dt(e) {
  if (e.startsWith(`${ct}:${lt}:{`))
    try {
      let t = JSON.parse(e.slice(28))
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string` &&
        typeof t.location == `string` &&
        typeof t.reloadDocument == `boolean` &&
        typeof t.replace == `boolean`
      )
        return t
    } catch {}
}
function ft(e) {
  if (e.startsWith(`${ct}:${ut}:{`))
    try {
      let t = JSON.parse(e.slice(40))
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string`
      )
        return new He(t.status, t.statusText, t.data)
    } catch {}
}
function pt(e, { relative: t } = {}) {
  w(mt(), `useHref() may be used only in the context of a <Router> component.`)
  let { basename: n, navigator: r } = x.useContext(it),
    { hash: i, pathname: a, search: o } = St(e, { relative: t }),
    s = a
  return (
    n !== `/` && (s = a === `/` ? n : Le([n, a])),
    r.createHref({ pathname: s, search: o, hash: i })
  )
}
function mt() {
  return x.useContext(at) != null
}
function ht() {
  return (
    w(
      mt(),
      `useLocation() may be used only in the context of a <Router> component.`
    ),
    x.useContext(at).location
  )
}
var gt = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`
function _t(e) {
  x.useContext(it).static || x.useLayoutEffect(e)
}
function vt() {
  let { isDataRoute: e } = x.useContext(ot)
  return e ? Vt() : yt()
}
function yt() {
  w(
    mt(),
    `useNavigate() may be used only in the context of a <Router> component.`
  )
  let e = x.useContext(Ze),
    { basename: t, navigator: n } = x.useContext(it),
    { matches: r } = x.useContext(ot),
    { pathname: i } = ht(),
    a = JSON.stringify(Pe(r)),
    o = x.useRef(!1)
  return (
    _t(() => {
      o.current = !0
    }),
    x.useCallback(
      (r, s = {}) => {
        if ((ie(o.current, gt), !o.current)) return
        if (typeof r == `number`) {
          n.go(r)
          return
        }
        let c = Fe(r, JSON.parse(a), i, s.relative === `path`)
        ;(e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : Le([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s))
      },
      [t, n, a, i, e]
    )
  )
}
var bt = x.createContext(null)
function xt(e) {
  let t = x.useContext(ot).outlet
  return x.useMemo(
    () => t && x.createElement(bt.Provider, { value: e }, t),
    [t, e]
  )
}
function St(e, { relative: t } = {}) {
  let { matches: n } = x.useContext(ot),
    { pathname: r } = ht(),
    i = JSON.stringify(Pe(n))
  return x.useMemo(() => Fe(e, JSON.parse(i), r, t === `path`), [e, i, r, t])
}
function Ct(e, t) {
  return wt(e, t)
}
function wt(e, t, n) {
  w(
    mt(),
    `useRoutes() may be used only in the context of a <Router> component.`
  )
  let { navigator: r } = x.useContext(it),
    { matches: i } = x.useContext(ot),
    a = i[i.length - 1],
    o = a ? a.params : {},
    s = a ? a.pathname : `/`,
    c = a ? a.pathnameBase : `/`,
    l = a && a.route
  {
    let e = (l && l.path) || ``
    Ut(
      s,
      !l || e.endsWith(`*`) || e.endsWith(`*?`),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`
    )
  }
  let u = ht(),
    d
  if (t) {
    let e = typeof t == `string` ? le(t) : t
    ;(w(
      c === `/` || e.pathname?.startsWith(c),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`
    ),
      (d = e))
  } else d = u
  let f = d.pathname || `/`,
    p = f
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`)
    p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`)
  }
  let m =
    n && n.state.matches.length
      ? n.state.matches.map((e) =>
          Object.assign(e, { route: n.manifest[e.route.id] || e.route })
        )
      : E(e, { pathname: p })
  ;(ie(
    l || m != null,
    `No routes matched location "${d.pathname}${d.search}${d.hash}" `
  ),
    ie(
      m == null ||
        m[m.length - 1].route.element !== void 0 ||
        m[m.length - 1].route.Component !== void 0 ||
        m[m.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ))
  let h = jt(
    m &&
      m.map((e) =>
        Object.assign({}, e, {
          params: Object.assign({}, o, e.params),
          pathname: Le([
            c,
            r.encodeLocation
              ? r.encodeLocation(
                  e.pathname
                    .replace(/%/g, `%25`)
                    .replace(/\?/g, `%3F`)
                    .replace(/#/g, `%23`)
                ).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === `/`
              ? c
              : Le([
                  c,
                  r.encodeLocation
                    ? r.encodeLocation(
                        e.pathnameBase
                          .replace(/%/g, `%25`)
                          .replace(/\?/g, `%3F`)
                          .replace(/#/g, `%23`)
                      ).pathname
                    : e.pathnameBase,
                ]),
        })
      ),
    i,
    n
  )
  return t && h
    ? x.createElement(
        at.Provider,
        {
          value: {
            location: {
              pathname: `/`,
              search: ``,
              hash: ``,
              state: null,
              key: `default`,
              mask: void 0,
              ...d,
            },
            navigationType: `POP`,
          },
        },
        h
      )
    : h
}
function Tt() {
  let e = Bt(),
    t = Ue(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = `rgba(200,200,200, 0.5)`,
    i = { padding: `0.5rem`, backgroundColor: r },
    a = { padding: `2px 4px`, backgroundColor: r },
    o = null
  return (
    console.error(`Error handled by React Router default ErrorBoundary:`, e),
    (o = x.createElement(
      x.Fragment,
      null,
      x.createElement(`p`, null, `💿 Hey developer 👋`),
      x.createElement(
        `p`,
        null,
        `You can provide a way better UX than this when your app throws errors by providing your own `,
        x.createElement(`code`, { style: a }, `ErrorBoundary`),
        ` or`,
        ` `,
        x.createElement(`code`, { style: a }, `errorElement`),
        ` prop on your route.`
      )
    )),
    x.createElement(
      x.Fragment,
      null,
      x.createElement(`h2`, null, `Unexpected Application Error!`),
      x.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
      n ? x.createElement(`pre`, { style: i }, n) : null,
      o
    )
  )
}
var Et = x.createElement(Tt, null),
  Dt = class extends x.Component {
    constructor(e) {
      ;(super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }))
    }
    static getDerivedStateFromError(e) {
      return { error: e }
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          }
    }
    componentDidCatch(e, t) {
      this.props.onError
        ? this.props.onError(e, t)
        : console.error(
            `React Router caught the following error during render`,
            e
          )
    }
    render() {
      let e = this.state.error
      if (
        this.context &&
        typeof e == `object` &&
        e &&
        `digest` in e &&
        typeof e.digest == `string`
      ) {
        let t = ft(e.digest)
        t && (e = t)
      }
      let t =
        e === void 0
          ? this.props.children
          : x.createElement(
              ot.Provider,
              { value: this.props.routeContext },
              x.createElement(st.Provider, {
                value: e,
                children: this.props.component,
              })
            )
      return this.context ? x.createElement(kt, { error: e }, t) : t
    }
  }
Dt.contextType = $e
var Ot = new WeakMap()
function kt({ children: e, error: t }) {
  let { basename: n } = x.useContext(it)
  if (
    typeof t == `object` &&
    t &&
    `digest` in t &&
    typeof t.digest == `string`
  ) {
    let e = dt(t.digest)
    if (e) {
      let r = Ot.get(t)
      if (r) throw r
      let i = Ke(e.location, n),
        a = i.absoluteURL || i.to
      if (Xe(a)) throw Error(`Invalid redirect location`)
      if (Ge && !Ot.get(t))
        if (i.isExternal || e.reloadDocument) window.location.href = a
        else {
          let n = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, {
              replace: e.replace,
            })
          )
          throw (Ot.set(t, n), n)
        }
      return x.createElement(`meta`, {
        httpEquiv: `refresh`,
        content: `0;url=${a}`,
      })
    }
  }
  return e
}
function At({ routeContext: e, match: t, children: n }) {
  let r = x.useContext(Ze)
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    x.createElement(ot.Provider, { value: e }, n)
  )
}
function jt(e, t = [], n) {
  let r = n?.state
  if (e == null) {
    if (!r) return null
    if (r.errors) e = r.matches
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches
    else return null
  }
  let i = e,
    a = r?.errors
  if (a != null) {
    let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0)
    ;(w(
      e >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`
    ),
      (i = i.slice(0, Math.min(i.length, e + 1))))
  }
  let o = !1,
    s = -1
  if (n && r) {
    o = r.renderFallback
    for (let e = 0; e < i.length; e++) {
      let t = i[e]
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: a } = r,
          c =
            t.route.loader &&
            !e.hasOwnProperty(t.route.id) &&
            (!a || a[t.route.id] === void 0)
        if (t.route.lazy || c) {
          ;(n.isStatic && (o = !0), (i = s >= 0 ? i.slice(0, s + 1) : [i[0]]))
          break
        }
      }
    }
  }
  let c = n?.onError,
    l =
      r && c
        ? (e, t) => {
            c(e, {
              location: r.location,
              params: r.matches?.[0]?.params ?? {},
              pattern: We(r.matches),
              errorInfo: t,
            })
          }
        : void 0
  return i.reduceRight((e, n, c) => {
    let u,
      d = !1,
      f = null,
      p = null
    r &&
      ((u = a && n.route.id ? a[n.route.id] : void 0),
      (f = n.route.errorElement || Et),
      o &&
        (s < 0 && c === 0
          ? (Ut(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (d = !0),
            (p = null))
          : s === c &&
            ((d = !0), (p = n.route.hydrateFallbackElement || null))))
    let m = t.concat(i.slice(0, c + 1)),
      h = () => {
        let t
        return (
          (t = u
            ? f
            : d
              ? p
              : n.route.Component
                ? x.createElement(n.route.Component, null)
                : n.route.element
                  ? n.route.element
                  : e),
          x.createElement(At, {
            match: n,
            routeContext: { outlet: e, matches: m, isDataRoute: r != null },
            children: t,
          })
        )
      }
    return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0)
      ? x.createElement(Dt, {
          location: r.location,
          revalidation: r.revalidation,
          component: f,
          error: u,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          onError: l,
        })
      : h()
  }, null)
}
function Mt(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Nt(e) {
  let t = x.useContext(Ze)
  return (w(t, Mt(e)), t)
}
function Pt(e) {
  let t = x.useContext(Qe)
  return (w(t, Mt(e)), t)
}
function Ft(e) {
  let t = x.useContext(ot)
  return (w(t, Mt(e)), t)
}
function It(e) {
  let t = Ft(e),
    n = t.matches[t.matches.length - 1]
  return (
    w(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  )
}
function Lt() {
  return It(`useRouteId`)
}
function Rt() {
  let e = Pt(`useNavigation`)
  return x.useMemo(() => {
    let { matches: t, historyAction: n, ...r } = e.navigation
    return r
  }, [e.navigation])
}
function zt() {
  let { matches: e, loaderData: t } = Pt(`useMatches`)
  return x.useMemo(() => e.map((e) => fe(e, t)), [e, t])
}
function Bt() {
  let e = x.useContext(st),
    t = Pt(`useRouteError`),
    n = It(`useRouteError`)
  return e === void 0 ? t.errors?.[n] : e
}
function Vt() {
  let { router: e } = Nt(`useNavigate`),
    t = It(`useNavigate`),
    n = x.useRef(!1)
  return (
    _t(() => {
      n.current = !0
    }),
    x.useCallback(
      async (r, i = {}) => {
        ;(ie(n.current, gt),
          n.current &&
            (typeof r == `number`
              ? await e.navigate(r)
              : await e.navigate(r, { fromRouteId: t, ...i })))
      },
      [e, t]
    )
  )
}
var Ht = {}
function Ut(e, t, n) {
  !t && !Ht[e] && ((Ht[e] = !0), ie(!1, n))
}
x.memo(Wt)
function Wt({
  routes: e,
  manifest: t,
  future: n,
  state: r,
  isStatic: i,
  onError: a,
}) {
  return wt(e, void 0, {
    manifest: t,
    state: r,
    isStatic: i,
    onError: a,
    future: n,
  })
}
function Gt(e) {
  return xt(e.context)
}
function Kt(e) {
  w(
    !1,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
  )
}
function qt({
  basename: e = `/`,
  children: t = null,
  location: n,
  navigationType: r = `POP`,
  navigator: i,
  static: a = !1,
  useTransitions: o,
}) {
  w(
    !mt(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
  )
  let s = e.replace(/^\/*/, `/`),
    c = x.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        useTransitions: o,
        future: {},
      }),
      [s, i, a, o]
    )
  typeof n == `string` && (n = le(n))
  let {
      pathname: l = `/`,
      search: u = ``,
      hash: d = ``,
      state: f = null,
      key: p = `default`,
      mask: m,
    } = n,
    h = x.useMemo(() => {
      let e = ke(l, s)
      return e == null
        ? null
        : {
            location: {
              pathname: e,
              search: u,
              hash: d,
              state: f,
              key: p,
              mask: m,
            },
            navigationType: r,
          }
    }, [s, l, u, d, f, p, r, m])
  return (
    ie(
      h != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    h == null
      ? null
      : x.createElement(
          it.Provider,
          { value: c },
          x.createElement(at.Provider, { children: t, value: h })
        )
  )
}
function Jt({ children: e, location: t }) {
  return Ct(Yt(e), t)
}
x.Component
function Yt(e, t = []) {
  let n = []
  return (
    x.Children.forEach(e, (e, r) => {
      if (!x.isValidElement(e)) return
      let i = [...t, r]
      if (e.type === x.Fragment) {
        n.push.apply(n, Yt(e.props.children, i))
        return
      }
      ;(w(
        e.type === Kt,
        `[${typeof e.type == `string` ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        w(
          !e.props.index || !e.props.children,
          `An index route cannot have child routes.`
        ))
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        middleware: e.props.middleware,
        loader: e.props.loader,
        action: e.props.action,
        hydrateFallbackElement: e.props.hydrateFallbackElement,
        HydrateFallback: e.props.HydrateFallback,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary:
          e.props.hasErrorBoundary === !0 ||
          e.props.ErrorBoundary != null ||
          e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      }
      ;(e.props.children && (a.children = Yt(e.props.children, i)), n.push(a))
    }),
    n
  )
}
var Xt = `get`,
  Zt = `application/x-www-form-urlencoded`
function Qt(e) {
  return typeof HTMLElement < `u` && e instanceof HTMLElement
}
function $t(e) {
  return Qt(e) && e.tagName.toLowerCase() === `button`
}
function en(e) {
  return Qt(e) && e.tagName.toLowerCase() === `form`
}
function tn(e) {
  return Qt(e) && e.tagName.toLowerCase() === `input`
}
function nn(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function rn(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !nn(e)
}
var an = null
function on() {
  if (an === null)
    try {
      ;(new FormData(document.createElement(`form`), 0), (an = !1))
    } catch {
      an = !0
    }
  return an
}
var sn = new Set([
  `application/x-www-form-urlencoded`,
  `multipart/form-data`,
  `text/plain`,
])
function cn(e) {
  return e != null && !sn.has(e)
    ? (ie(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zt}"`
      ),
      null)
    : e
}
function ln(e, t) {
  let n, r, i, a, o
  if (en(e)) {
    let o = e.getAttribute(`action`)
    ;((r = o ? ke(o, t) : null),
      (n = e.getAttribute(`method`) || Xt),
      (i = cn(e.getAttribute(`enctype`)) || Zt),
      (a = new FormData(e)))
  } else if ($t(e) || (tn(e) && (e.type === `submit` || e.type === `image`))) {
    let o = e.form
    if (o == null)
      throw Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`
      )
    let s = e.getAttribute(`formaction`) || o.getAttribute(`action`)
    if (
      ((r = s ? ke(s, t) : null),
      (n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || Xt),
      (i =
        cn(e.getAttribute(`formenctype`)) ||
        cn(o.getAttribute(`enctype`)) ||
        Zt),
      (a = new FormData(o, e)),
      !on())
    ) {
      let { name: t, type: n, value: r } = e
      if (n === `image`) {
        let e = t ? `${t}.` : ``
        ;(a.append(`${e}x`, `0`), a.append(`${e}y`, `0`))
      } else t && a.append(t, r)
    }
  } else if (Qt(e))
    throw Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
    )
  else ((n = Xt), (r = null), (i = Zt), (o = e))
  return (
    a && i === `text/plain` && ((o = a), (a = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
  )
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)
var un = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  dn = /[&><\u2028\u2029]/g
function fn(e) {
  return e.replace(dn, (e) => un[e])
}
function pn(e, t) {
  if (e === !1 || e == null) throw Error(t)
}
function mn(e, t, n, r) {
  let i =
    typeof e == `string`
      ? new URL(
          e,
          typeof window > `u` ? `server://singlefetch/` : window.location.origin
        )
      : e
  return (
    n
      ? i.pathname.endsWith(`/`)
        ? (i.pathname = `${i.pathname}_.${r}`)
        : (i.pathname = `${i.pathname}.${r}`)
      : i.pathname === `/`
        ? (i.pathname = `_root.${r}`)
        : t && ke(i.pathname, t) === `/`
          ? (i.pathname = `${Re(t)}/_root.${r}`)
          : (i.pathname = `${Re(i.pathname)}.${r}`),
    i
  )
}
async function hn(e, t) {
  if (e.id in t) return t[e.id]
  try {
    let n = await b(() => import(e.module), [])
    return ((t[e.id] = n), n)
  } catch (t) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(t),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    )
  }
}
function gn(e) {
  return e != null && typeof e.page == `string`
}
function _n(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === `preload` &&
        typeof e.imageSrcSet == `string` &&
        typeof e.imageSizes == `string`
      : typeof e.rel == `string` && typeof e.href == `string`
}
async function vn(e, t, n) {
  return Cn(
    (
      await Promise.all(
        e.map(async (e) => {
          let r = t.routes[e.route.id]
          if (r) {
            let e = await hn(r, n)
            return e.links ? e.links() : []
          }
          return []
        })
      )
    )
      .flat(1)
      .filter(_n)
      .filter((e) => e.rel === `stylesheet` || e.rel === `preload`)
      .map((e) =>
        e.rel === `stylesheet`
          ? { ...e, rel: `prefetch`, as: `style` }
          : { ...e, rel: `prefetch` }
      )
  )
}
function yn(e, t, n, r, i, a) {
  let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
    s = (e, t) =>
      n[t].pathname !== e.pathname ||
      (n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`])
  return a === `assets`
    ? t.filter((e, t) => o(e, t) || s(e, t))
    : a === `data`
      ? t.filter((t, a) => {
          let c = r.routes[t.route.id]
          if (!c || !c.hasLoader) return !1
          if (o(t, a) || s(t, a)) return !0
          if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin
              ),
              currentParams: n[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            })
            if (typeof r == `boolean`) return r
          }
          return !0
        })
      : []
}
function bn(e, t, { includeHydrateFallback: n } = {}) {
  return xn(
    e
      .map((e) => {
        let r = t.routes[e.route.id]
        if (!r) return []
        let i = [r.module]
        return (
          r.clientActionModule && (i = i.concat(r.clientActionModule)),
          r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
          n &&
            r.hydrateFallbackModule &&
            (i = i.concat(r.hydrateFallbackModule)),
          r.imports && (i = i.concat(r.imports)),
          i
        )
      })
      .flat(1)
  )
}
function xn(e) {
  return [...new Set(e)]
}
function Sn(e) {
  let t = {},
    n = Object.keys(e).sort()
  for (let r of n) t[r] = e[r]
  return t
}
function Cn(e, t) {
  let n = new Set(),
    r = new Set(t)
  return e.reduce((e, i) => {
    if (t && !gn(i) && i.as === `script` && i.href && r.has(i.href)) return e
    let a = JSON.stringify(Sn(i))
    return (n.has(a) || (n.add(a), e.push({ key: a, link: i })), e)
  }, [])
}
function wn() {
  let e = x.useContext(Ze)
  return (
    pn(
      e,
      `You must render this element inside a <DataRouterContext.Provider> element`
    ),
    e
  )
}
function Tn() {
  let e = x.useContext(Qe)
  return (
    pn(
      e,
      `You must render this element inside a <DataRouterStateContext.Provider> element`
    ),
    e
  )
}
var En = x.createContext(void 0)
En.displayName = `FrameworkContext`
function Dn() {
  let e = x.useContext(En)
  return (
    pn(e, `You must render this element inside a <HydratedRouter> element`),
    e
  )
}
function On(e, t) {
  let n = x.useContext(En),
    [r, i] = x.useState(!1),
    [a, o] = x.useState(!1),
    {
      onFocus: s,
      onBlur: c,
      onMouseEnter: l,
      onMouseLeave: u,
      onTouchStart: d,
    } = t,
    f = x.useRef(null)
  ;(x.useEffect(() => {
    if ((e === `render` && o(!0), e === `viewport`)) {
      let e = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            o(e.isIntersecting)
          })
        },
        { threshold: 0.5 }
      )
      return (
        f.current && e.observe(f.current),
        () => {
          e.disconnect()
        }
      )
    }
  }, [e]),
    x.useEffect(() => {
      if (r) {
        let e = setTimeout(() => {
          o(!0)
        }, 100)
        return () => {
          clearTimeout(e)
        }
      }
    }, [r]))
  let p = () => {
      i(!0)
    },
    m = () => {
      ;(i(!1), o(!1))
    }
  return n
    ? e === `intent`
      ? [
          a,
          f,
          {
            onFocus: kn(s, p),
            onBlur: kn(c, m),
            onMouseEnter: kn(l, p),
            onMouseLeave: kn(u, m),
            onTouchStart: kn(d, p),
          },
        ]
      : [a, f, {}]
    : [!1, f, {}]
}
function kn(e, t) {
  return (n) => {
    ;(e && e(n), n.defaultPrevented || t(n))
  }
}
function An({ page: e, ...t }) {
  let n = et(),
    { nonce: r } = Dn(),
    { router: i } = wn(),
    a = x.useMemo(() => E(i.routes, e, i.basename), [i.routes, e, i.basename])
  return a
    ? (t.nonce == null && r && (t = { ...t, nonce: r }),
      n
        ? x.createElement(Mn, { page: e, matches: a, ...t })
        : x.createElement(Nn, { page: e, matches: a, ...t }))
    : null
}
function jn(e) {
  let { manifest: t, routeModules: n } = Dn(),
    [r, i] = x.useState([])
  return (
    x.useEffect(() => {
      let r = !1
      return (
        vn(e, t, n).then((e) => {
          r || i(e)
        }),
        () => {
          r = !0
        }
      )
    }, [e, t, n]),
    r
  )
}
function Mn({ page: e, matches: t, ...n }) {
  let r = ht(),
    { future: i } = Dn(),
    { basename: a } = wn(),
    o = x.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return []
      let n = mn(e, a, i.v8_trailingSlashAwareDataRequests, `rsc`),
        o = !1,
        s = []
      for (let e of t)
        typeof e.route.shouldRevalidate == `function`
          ? (o = !0)
          : s.push(e.route.id)
      return (
        o && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
        [n.pathname + n.search]
      )
    }, [a, i.v8_trailingSlashAwareDataRequests, e, r, t])
  return x.createElement(
    x.Fragment,
    null,
    o.map((e) =>
      x.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      })
    )
  )
}
function Nn({ page: e, matches: t, ...n }) {
  let r = ht(),
    { future: i, manifest: a, routeModules: o } = Dn(),
    { basename: s } = wn(),
    { loaderData: c, matches: l } = Tn(),
    u = x.useMemo(() => yn(e, t, l, a, r, `data`), [e, t, l, a, r]),
    d = x.useMemo(() => yn(e, t, l, a, r, `assets`), [e, t, l, a, r]),
    f = x.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return []
      let n = new Set(),
        l = !1
      if (
        (t.forEach((e) => {
          let t = a.routes[e.route.id]
          !t ||
            !t.hasLoader ||
            ((!u.some((t) => t.route.id === e.route.id) &&
              e.route.id in c &&
              o[e.route.id]?.shouldRevalidate) ||
            t.hasClientLoader
              ? (l = !0)
              : n.add(e.route.id))
        }),
        n.size === 0)
      )
        return []
      let d = mn(e, s, i.v8_trailingSlashAwareDataRequests, `data`)
      return (
        l &&
          n.size > 0 &&
          d.searchParams.set(
            `_routes`,
            t
              .filter((e) => n.has(e.route.id))
              .map((e) => e.route.id)
              .join(`,`)
          ),
        [d.pathname + d.search]
      )
    }, [s, i.v8_trailingSlashAwareDataRequests, c, r, a, u, t, e, o]),
    p = x.useMemo(() => bn(d, a), [d, a]),
    m = jn(d)
  return x.createElement(
    x.Fragment,
    null,
    f.map((e) =>
      x.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      })
    ),
    p.map((e) =>
      x.createElement(`link`, { key: e, rel: `modulepreload`, href: e, ...n })
    ),
    m.map(({ key: e, link: t }) =>
      x.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin,
      })
    )
  )
}
function Pn(...e) {
  return (t) => {
    e.forEach((e) => {
      typeof e == `function` ? e(t) : e != null && (e.current = t)
    })
  }
}
x.Component
var Fn =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0
try {
  Fn && (window.__reactRouterVersion = `7.18.1`)
} catch {}
function In({ basename: e, children: t, useTransitions: n, window: r }) {
  let i = x.useRef()
  i.current ??= re({ window: r, v5Compat: !0 })
  let a = i.current,
    [o, s] = x.useState({ action: a.action, location: a.location }),
    c = x.useCallback(
      (e) => {
        n === !1 ? s(e) : x.startTransition(() => s(e))
      },
      [n]
    )
  return (
    x.useLayoutEffect(() => a.listen(c), [a, c]),
    x.createElement(qt, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: a,
      useTransitions: n,
    })
  )
}
function Ln({ basename: e, children: t, history: n, useTransitions: r }) {
  let [i, a] = x.useState({ action: n.action, location: n.location }),
    o = x.useCallback(
      (e) => {
        r === !1 ? a(e) : x.startTransition(() => a(e))
      },
      [r]
    )
  return (
    x.useLayoutEffect(() => n.listen(o), [n, o]),
    x.createElement(qt, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: n,
      useTransitions: r,
    })
  )
}
Ln.displayName = `unstable_HistoryRouter`
var Rn = x.forwardRef(function (
  {
    onClick: e,
    discover: t = `render`,
    prefetch: n = `none`,
    relative: r,
    reloadDocument: i,
    replace: a,
    mask: o,
    state: s,
    target: c,
    to: l,
    preventScrollReset: u,
    viewTransition: d,
    defaultShouldRevalidate: f,
    ...p
  },
  m
) {
  let { basename: h, navigator: g, useTransitions: _ } = x.useContext(it),
    v = typeof l == `string` && ee.test(l),
    y = Ke(l, h)
  l = y.to
  let b = pt(l, { relative: r }),
    S = ht(),
    C = null
  if (o) {
    let e = Fe(o, [], S.mask ? S.mask.pathname : `/`, !0)
    ;(h !== `/` && (e.pathname = e.pathname === `/` ? h : Le([h, e.pathname])),
      (C = g.createHref(e)))
  }
  let [te, ne, re] = On(n, p),
    w = Gn(l, {
      replace: a,
      mask: o,
      state: s,
      target: c,
      preventScrollReset: u,
      relative: r,
      viewTransition: d,
      defaultShouldRevalidate: f,
      useTransitions: _,
    })
  function ie(t) {
    ;(e && e(t), t.defaultPrevented || w(t))
  }
  let ae = !(y.isExternal || i),
    oe = x.createElement(`a`, {
      ...p,
      ...re,
      href: (ae ? C : void 0) || y.absoluteURL || b,
      onClick: ae ? ie : e,
      ref: Pn(m, ne),
      target: c,
      "data-discover": !v && t === `render` ? `true` : void 0,
    })
  return te && !v
    ? x.createElement(x.Fragment, null, oe, x.createElement(An, { page: b }))
    : oe
})
Rn.displayName = `Link`
var zn = x.forwardRef(function (
  {
    "aria-current": e = `page`,
    caseSensitive: t = !1,
    className: n = ``,
    end: r = !1,
    style: i,
    to: a,
    viewTransition: o,
    children: s,
    ...c
  },
  l
) {
  let u = St(a, { relative: c.relative }),
    d = ht(),
    f = x.useContext(Qe),
    { navigator: p, basename: m } = x.useContext(it),
    h = f != null && tr(u) && o === !0,
    g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname,
    _ = d.pathname,
    v =
      f && f.navigation && f.navigation.location
        ? f.navigation.location.pathname
        : null
  ;(t ||
    ((_ = _.toLowerCase()),
    (v = v ? v.toLowerCase() : null),
    (g = g.toLowerCase())),
    v && m && (v = ke(v, m) || v))
  let y = g !== `/` && g.endsWith(`/`) ? g.length - 1 : g.length,
    b = _ === g || (!r && _.startsWith(g) && _.charAt(y) === `/`),
    ee =
      v != null &&
      (v === g || (!r && v.startsWith(g) && v.charAt(g.length) === `/`)),
    S = { isActive: b, isPending: ee, isTransitioning: h },
    C = b ? e : void 0,
    te
  te =
    typeof n == `function`
      ? n(S)
      : [
          n,
          b ? `active` : null,
          ee ? `pending` : null,
          h ? `transitioning` : null,
        ]
          .filter(Boolean)
          .join(` `)
  let ne = typeof i == `function` ? i(S) : i
  return x.createElement(
    Rn,
    {
      ...c,
      "aria-current": C,
      className: te,
      ref: l,
      style: ne,
      to: a,
      viewTransition: o,
    },
    typeof s == `function` ? s(S) : s
  )
})
zn.displayName = `NavLink`
var Bn = x.forwardRef(
  (
    {
      discover: e = `render`,
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: a,
      method: o = Xt,
      action: s,
      onSubmit: c,
      relative: l,
      preventScrollReset: u,
      viewTransition: d,
      defaultShouldRevalidate: f,
      ...p
    },
    m
  ) => {
    let { useTransitions: h } = x.useContext(it),
      g = Jn(),
      _ = Yn(s, { relative: l }),
      v = o.toLowerCase() === `get` ? `get` : `post`,
      y = typeof s == `string` && ee.test(s)
    return x.createElement(`form`, {
      ref: m,
      method: v,
      action: _,
      onSubmit: r
        ? c
        : (e) => {
            if ((c && c(e), e.defaultPrevented)) return
            e.preventDefault()
            let r = e.nativeEvent.submitter,
              s = r?.getAttribute(`formmethod`) || o,
              p = () =>
                g(r || e.currentTarget, {
                  fetcherKey: t,
                  method: s,
                  navigate: n,
                  replace: i,
                  state: a,
                  relative: l,
                  preventScrollReset: u,
                  viewTransition: d,
                  defaultShouldRevalidate: f,
                })
            h && n !== !1 ? x.startTransition(() => p()) : p()
          },
      ...p,
      "data-discover": !y && e === `render` ? `true` : void 0,
    })
  }
)
Bn.displayName = `Form`
function Vn({ getKey: e, storageKey: t, ...n }) {
  let r = x.useContext(En),
    { basename: i } = x.useContext(it),
    a = ht(),
    o = zt()
  $n({ getKey: e, storageKey: t })
  let s = x.useMemo(() => {
    if (!r || !e) return null
    let t = Qn(a, o, i, e)
    return t === a.key ? null : t
  }, [])
  if (!r || r.isSpaMode) return null
  let c = ((e, t) => {
    if (!window.history.state || !window.history.state.key) {
      let e = Math.random().toString(32).slice(2)
      window.history.replaceState({ key: e }, ``)
    }
    try {
      let n = JSON.parse(sessionStorage.getItem(e) || `{}`)[
        t || window.history.state.key
      ]
      typeof n == `number` && window.scrollTo(0, n)
    } catch (t) {
      ;(console.error(t), sessionStorage.removeItem(e))
    }
  }).toString()
  return (
    n.nonce == null && r?.nonce && (n.nonce = r.nonce),
    x.createElement(`script`, {
      ...n,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: `(${c})(${fn(JSON.stringify(t || Xn))}, ${fn(JSON.stringify(s))})`,
      },
    })
  )
}
Vn.displayName = `ScrollRestoration`
function Hn(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Un(e) {
  let t = x.useContext(Ze)
  return (w(t, Hn(e)), t)
}
function Wn(e) {
  let t = x.useContext(Qe)
  return (w(t, Hn(e)), t)
}
function Gn(
  e,
  {
    target: t,
    replace: n,
    mask: r,
    state: i,
    preventScrollReset: a,
    relative: o,
    viewTransition: s,
    defaultShouldRevalidate: c,
    useTransitions: l,
  } = {}
) {
  let u = vt(),
    d = ht(),
    f = St(e, { relative: o })
  return x.useCallback(
    (p) => {
      if (rn(p, t)) {
        p.preventDefault()
        let t = n === void 0 ? ce(d) === ce(f) : n,
          m = () =>
            u(e, {
              replace: t,
              mask: r,
              state: i,
              preventScrollReset: a,
              relative: o,
              viewTransition: s,
              defaultShouldRevalidate: c,
            })
        l ? x.startTransition(() => m()) : m()
      }
    },
    [d, u, f, n, r, i, t, e, a, o, s, c, l]
  )
}
var Kn = 0,
  qn = () => `__${String(++Kn)}__`
function Jn() {
  let { router: e } = Un(`useSubmit`),
    { basename: t } = x.useContext(it),
    n = Lt(),
    r = e.fetch,
    i = e.navigate
  return x.useCallback(
    async (e, a = {}) => {
      let { action: o, method: s, encType: c, formData: l, body: u } = ln(e, t)
      if (a.navigate === !1) {
        let e = a.fetcherKey || qn()
        await r(e, n, a.action || o, {
          defaultShouldRevalidate: a.defaultShouldRevalidate,
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: u,
          formMethod: a.method || s,
          formEncType: a.encType || c,
          flushSync: a.flushSync,
        })
      } else
        await i(a.action || o, {
          defaultShouldRevalidate: a.defaultShouldRevalidate,
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: u,
          formMethod: a.method || s,
          formEncType: a.encType || c,
          replace: a.replace,
          state: a.state,
          fromRouteId: n,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        })
    },
    [r, i, t, n]
  )
}
function Yn(e, { relative: t } = {}) {
  let { basename: n } = x.useContext(it),
    r = x.useContext(ot)
  w(r, `useFormAction must be used inside a RouteContext`)
  let [i] = r.matches.slice(-1),
    a = { ...St(e || `.`, { relative: t }) },
    o = ht()
  if (e == null) {
    a.search = o.search
    let e = new URLSearchParams(a.search),
      t = e.getAll(`index`)
    if (t.some((e) => e === ``)) {
      ;(e.delete(`index`),
        t.filter((e) => e).forEach((t) => e.append(`index`, t)))
      let n = e.toString()
      a.search = n ? `?${n}` : ``
    }
  }
  return (
    (!e || e === `.`) &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : Le([n, a.pathname])),
    ce(a)
  )
}
var Xn = `react-router-scroll-positions`,
  Zn = {}
function Qn(e, t, n, r) {
  let i = null
  return (
    r &&
      (i = r(
        n === `/` ? e : { ...e, pathname: ke(e.pathname, n) || e.pathname },
        t
      )),
    (i ??= e.key),
    i
  )
}
function $n({ getKey: e, storageKey: t } = {}) {
  let { router: n } = Un(`useScrollRestoration`),
    { restoreScrollPosition: r, preventScrollReset: i } =
      Wn(`useScrollRestoration`),
    { basename: a } = x.useContext(it),
    o = ht(),
    s = zt(),
    c = Rt()
  ;(x.useEffect(
    () => (
      (window.history.scrollRestoration = `manual`),
      () => {
        window.history.scrollRestoration = `auto`
      }
    ),
    []
  ),
    er(
      x.useCallback(() => {
        if (c.state === `idle`) {
          let t = Qn(o, s, a, e)
          Zn[t] = window.scrollY
        }
        try {
          sessionStorage.setItem(t || Xn, JSON.stringify(Zn))
        } catch (e) {
          ie(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`
          )
        }
        window.history.scrollRestoration = `auto`
      }, [c.state, e, a, o, s, t])
    ),
    typeof document < `u` &&
      (x.useLayoutEffect(() => {
        try {
          let e = sessionStorage.getItem(t || Xn)
          e && (Zn = JSON.parse(e))
        } catch {}
      }, [t]),
      x.useLayoutEffect(() => {
        let t = n?.enableScrollRestoration(
          Zn,
          () => window.scrollY,
          e ? (t, n) => Qn(t, n, a, e) : void 0
        )
        return () => t && t()
      }, [n, a, e]),
      x.useLayoutEffect(() => {
        if (r !== !1) {
          if (typeof r == `number`) {
            window.scrollTo(0, r)
            return
          }
          try {
            if (o.hash) {
              let e = document.getElementById(
                decodeURIComponent(o.hash.slice(1))
              )
              if (e) {
                e.scrollIntoView()
                return
              }
            }
          } catch {
            ie(
              !1,
              `"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`
            )
          }
          i !== !0 && window.scrollTo(0, 0)
        }
      }, [o, r, i])))
}
function er(e, t) {
  let { capture: n } = t || {}
  x.useEffect(() => {
    let t = n == null ? void 0 : { capture: n }
    return (
      window.addEventListener(`pagehide`, e, t),
      () => {
        window.removeEventListener(`pagehide`, e, t)
      }
    )
  }, [e, n])
}
function tr(e, { relative: t } = {}) {
  let n = x.useContext(tt)
  w(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  )
  let { basename: r } = Un(`useViewTransitionState`),
    i = St(e, { relative: t })
  if (!n.isTransitioning) return !1
  let a = ke(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = ke(n.nextLocation.pathname, r) || n.nextLocation.pathname
  return Te(i.pathname, o) != null || Te(i.pathname, a) != null
}
var nr = o((e, t) => {
    var n = 11,
      r = 1 / (n - 1),
      i = typeof Float32Array == `function`
    function a(e, t) {
      return 1 - 3 * t + 3 * e
    }
    function o(e, t) {
      return 3 * t - 6 * e
    }
    function s(e) {
      return 3 * e
    }
    function c(e, t, n) {
      return ((a(t, n) * e + o(t, n)) * e + s(t)) * e
    }
    function l(e, t, n) {
      return 3 * a(t, n) * e * e + 2 * o(t, n) * e + s(t)
    }
    function u(e, t, n, r, i) {
      var a,
        o,
        s = 0
      do
        ((o = t + (n - t) / 2), (a = c(o, r, i) - e), a > 0 ? (n = o) : (t = o))
      while (Math.abs(a) > 1e-7 && ++s < 10)
      return o
    }
    function d(e, t, n, r) {
      for (var i = 0; i < 4; ++i) {
        var a = l(t, n, r)
        if (a === 0) return t
        var o = c(t, n, r) - e
        t -= o / a
      }
      return t
    }
    function f(e) {
      return e
    }
    t.exports = function (e, t, a, o) {
      if (!(0 <= e && e <= 1 && 0 <= a && a <= 1))
        throw Error(`bezier x values must be in [0, 1] range`)
      if (e === t && a === o) return f
      for (var s = i ? new Float32Array(n) : Array(n), p = 0; p < n; ++p)
        s[p] = c(p * r, e, a)
      function m(t) {
        for (var i = 0, o = 1, c = n - 1; o !== c && s[o] <= t; ++o) i += r
        --o
        var f = (t - s[o]) / (s[o + 1] - s[o]),
          p = i + f * r,
          m = l(p, e, a)
        return m >= 0.001 ? d(t, p, e, a) : m === 0 ? p : u(t, i, i + r, e, a)
      }
      return function (e) {
        return e === 0 ? 0 : e === 1 ? 1 : c(m(e), t, o)
      }
    }
  }),
  rr = c(g(), 1),
  ir = c(nr()),
  ar = function (e) {
    ;((this.startX = e.startX),
      (this.startY = e.startY),
      (this.endX = e.endX),
      (this.endY = e.endY),
      (this.totalX = this.endX - this.startX),
      (this.totalY = this.endY - this.startY),
      (this.startMultiplierX = e.startMultiplierX || 1),
      (this.endMultiplierX = e.endMultiplierX || 1),
      (this.startMultiplierY = e.startMultiplierY || 1),
      (this.endMultiplierY = e.endMultiplierY || 1))
  }
function or() {
  return (
    (or =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }),
    or.apply(this, arguments)
  )
}
var sr
;(function (e) {
  ;((e.speed = `speed`),
    (e.translateX = `translateX`),
    (e.translateY = `translateY`),
    (e.rotate = `rotate`),
    (e.rotateX = `rotateX`),
    (e.rotateY = `rotateY`),
    (e.rotateZ = `rotateZ`),
    (e.scale = `scale`),
    (e.scaleX = `scaleX`),
    (e.scaleY = `scaleY`),
    (e.scaleZ = `scaleZ`),
    (e.opacity = `opacity`))
})((sr ||= {}))
var cr
;(function (e) {
  ;((e.px = `px`), (e[`%`] = `%`), (e.vh = `vh`), (e.vw = `vw`))
})((cr ||= {}))
var lr
;(function (e) {
  ;((e.deg = `deg`), (e.turn = `turn`), (e.rad = `rad`))
})((lr ||= {}))
var ur
;(function (e) {
  e[``] = ``
})((ur ||= {}))
var dr
;(function (e) {
  ;((e.vertical = `vertical`), (e.horizontal = `horizontal`))
})((dr ||= {}))
var fr
;(function (e) {
  ;((e.ease = `ease`),
    (e.easeIn = `easeIn`),
    (e.easeOut = `easeOut`),
    (e.easeInOut = `easeInOut`),
    (e.easeInQuad = `easeInQuad`),
    (e.easeInCubic = `easeInCubic`),
    (e.easeInQuart = `easeInQuart`),
    (e.easeInQuint = `easeInQuint`),
    (e.easeInSine = `easeInSine`),
    (e.easeInExpo = `easeInExpo`),
    (e.easeInCirc = `easeInCirc`),
    (e.easeOutQuad = `easeOutQuad`),
    (e.easeOutCubic = `easeOutCubic`),
    (e.easeOutQuart = `easeOutQuart`),
    (e.easeOutQuint = `easeOutQuint`),
    (e.easeOutSine = `easeOutSine`),
    (e.easeOutExpo = `easeOutExpo`),
    (e.easeOutCirc = `easeOutCirc`),
    (e.easeInOutQuad = `easeInOutQuad`),
    (e.easeInOutCubic = `easeInOutCubic`),
    (e.easeInOutQuart = `easeInOutQuart`),
    (e.easeInOutQuint = `easeInOutQuint`),
    (e.easeInOutSine = `easeInOutSine`),
    (e.easeInOutExpo = `easeInOutExpo`),
    (e.easeInOutCirc = `easeInOutCirc`),
    (e.easeInBack = `easeInBack`),
    (e.easeOutBack = `easeOutBack`),
    (e.easeInOutBack = `easeInOutBack`))
})((fr ||= {}))
var pr = 0
function mr() {
  return (++pr, pr)
}
var hr = (function () {
    function e(e) {
      var t = e.el.getBoundingClientRect()
      if (e.view.scrollContainer) {
        var n = e.view.scrollContainer.getBoundingClientRect()
        t = or({}, t, {
          top: t.top - n.top,
          right: t.right - n.left,
          bottom: t.bottom - n.top,
          left: t.left - n.left,
        })
      }
      ;((this.height = e.el.offsetHeight),
        (this.width = e.el.offsetWidth),
        (this.left = t.left),
        (this.right = t.right),
        (this.top = t.top),
        (this.bottom = t.bottom),
        e.rootMargin && this._setRectWithRootMargin(e.rootMargin))
    }
    var t = e.prototype
    return (
      (t._setRectWithRootMargin = function (e) {
        var t = e.top + e.bottom,
          n = e.left + e.right
        ;((this.top -= e.top),
          (this.right += e.right),
          (this.bottom += e.bottom),
          (this.left -= e.left),
          (this.height += t),
          (this.width += n))
      }),
      e
    )
  })(),
  gr = [ur[``], cr.px, cr[`%`], cr.vh, cr.vw, lr.deg, lr.turn, lr.rad]
function _r(e, t) {
  t === void 0 && (t = cr[`%`])
  var n = { value: 0, unit: t }
  if (e === void 0) return n
  if (!(typeof e == `number` || typeof e == `string`))
    throw Error(
      `Invalid value provided. Must provide a value as a string or number`
    )
  if (
    ((e = String(e)),
    (n.value = parseFloat(e)),
    (n.unit = e.match(/[\d.\-+]*\s*(.*)/)[1] || t),
    !gr.includes(n.unit))
  )
    throw Error(`Invalid unit provided.`)
  return n
}
var vr = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeInSine: [0.47, 0, 0.745, 0.715],
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeOutSine: [0.39, 0.575, 0.565, 1],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeOutCirc: [0.075, 0.82, 0.165, 1],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
  easeInOutExpo: [1, 0, 0, 1],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
}
function yr(e) {
  if (Array.isArray(e)) return (0, ir.default)(e[0], e[1], e[2], e[3])
  if (typeof e == `string` && vr[e] !== void 0) {
    var t = vr[e]
    return (0, ir.default)(t[0], t[1], t[2], t[3])
  }
}
var br = Object.values(sr),
  xr = {
    speed: `px`,
    translateX: `%`,
    translateY: `%`,
    rotate: `deg`,
    rotateX: `deg`,
    rotateY: `deg`,
    rotateZ: `deg`,
    scale: ``,
    scaleX: ``,
    scaleY: ``,
    scaleZ: ``,
    opacity: ``,
  }
function Sr(e, t) {
  var n = {}
  return (
    br.forEach(function (r) {
      var i = xr[r]
      if (typeof e?.[r] == `number`) {
        var a = e?.[r],
          o = (a || 0) * 10 + `px`,
          s = (a || 0) * -10 + `px`,
          c = _r(o),
          l = _r(s),
          u = { start: c.value, end: l.value, unit: c.unit }
        ;(t === dr.vertical && (n.translateY = u),
          t === dr.horizontal && (n.translateX = u))
      }
      if (Array.isArray(e?.[r])) {
        var d = e?.[r]
        if (d[0] !== void 0 && d[1] !== void 0) {
          var f = _r(d?.[0], i),
            p = _r(d?.[1], i),
            m = yr(d?.[2])
          if (
            ((n[r] = { start: f.value, end: p.value, unit: f.unit, easing: m }),
            f.unit !== p.unit)
          )
            throw Error(
              `Must provide matching units for the min and max offset values of each axis.`
            )
        }
      }
    }),
    n
  )
}
function Cr(e, t, n, r) {
  var i = (n - e) / t
  return (r && (i = r(i)), i)
}
function wr(e, t, n) {
  return n >= e && n <= t
}
function Tr(e, t, n, r, i) {
  return ((n - t) * (e - r)) / (i - r) + t
}
function Er(e, t) {
  return {
    value: Tr(
      typeof e.easing == `function` ? e.easing(t) : t,
      e?.start || 0,
      e?.end || 0,
      0,
      1
    ),
    unit: e?.unit,
  }
}
var Dr = Object.values(sr).filter(function (e) {
  return e !== `opacity`
})
function Or(e, t) {
  var n = `transform` + (Object.keys(t).includes(`opacity`) ? `,opacity` : ``)
  e.style.willChange = n
}
function kr(e, t, n) {
  if (n) {
    var r = jr(e, t),
      i = Ar(e, t)
    ;((n.style.transform = r), (n.style.opacity = i))
  }
}
function Ar(e, t) {
  var n = e.opacity && Er(e.opacity, t)
  return n === void 0 || n.value === void 0 || n.unit === void 0
    ? ``
    : `` + n.value
}
function jr(e, t) {
  return Dr.reduce(function (n, r) {
    var i = e[r] && Er(e[r], t)
    return i === void 0 || i.value === void 0 || i.unit === void 0
      ? n
      : n + (r + `(` + i.value + i.unit + `)`)
  }, ``)
}
function Mr(e) {
  var t = e.el
  t && ((t.style.transform = ``), (t.style.opacity = ``))
}
function Nr(e, t, n, r) {
  var i = e.top - t.height,
    a = e.left - t.width,
    o = e.bottom,
    s = e.right
  return (
    (a += n.x),
    (s += n.x),
    (i += n.y),
    (o += n.y),
    r &&
      (n.y + e.top < t.height && (i = 0),
      n.x + e.left < t.width && (a = 0),
      o > t.scrollHeight - t.height && (o = t.scrollHeight - t.height),
      s > t.scrollWidth - t.width && (s = t.scrollWidth - t.width)),
    new ar({ startX: a, startY: i, endX: s, endY: o })
  )
}
function Pr(e, t, n) {
  var r = t > e,
    i = n + (Math.abs(e) + Math.abs(t)) * (r ? -1 : 1)
  return Math.max(n / i, 1)
}
function Fr(e, t) {
  var n = e.start,
    r = e.end,
    i = e.unit
  if (i === `%`) {
    var a = t / 100
    ;((n *= a), (r *= a))
  }
  if (i === `vw`) {
    var o = n / 100,
      s = r / 100
    ;((n = window.innerWidth * o), (r = window.innerWidth * s))
  }
  if (i === `vh`) {
    var c = n / 100,
      l = r / 100
    ;((n = window.innerHeight * c), (r = window.innerHeight * l))
  }
  return { start: n, end: r }
}
var Ir = { start: 0, end: 0, unit: `` }
function Lr(e, t, n, r, i, a) {
  var o = n.translateX || Ir,
    s = n.translateY || Ir,
    c = Fr(o, e.width),
    l = c.start,
    u = c.end,
    d = Fr(s, e.height),
    f = d.start,
    p = d.end,
    m = e.top - t.height,
    h = e.left - t.width,
    g = e.bottom,
    _ = e.right,
    v = 1,
    y = 1
  i === dr.vertical && ((v = Pr(f, p, t.height + e.height)), (y = v))
  var b = 1,
    x = 1
  if (
    (i === dr.horizontal && ((b = Pr(l, u, t.width + e.width)), (x = b)),
    f < 0 && (m += f * v),
    p > 0 && (g += p * y),
    l < 0 && (h += l * b),
    u > 0 && (_ += u * x),
    (h += r.x),
    (_ += r.x),
    (m += r.y),
    (g += r.y),
    a)
  ) {
    var ee = r.y + e.top < t.height,
      S = r.x + e.left < t.width,
      C = r.y + e.bottom > t.scrollHeight - t.height,
      te = r.x + e.right > t.scrollWidth - t.height
    if (
      (ee && C && ((v = 1), (y = 1), (m = 0), (g = t.scrollHeight - t.height)),
      S && te && ((b = 1), (x = 1), (h = 0), (_ = t.scrollWidth - t.width)),
      !ee &&
        C &&
        ((m = e.top - t.height + r.y),
        (g = t.scrollHeight - t.height),
        (v = Pr(f, p, g - m)),
        (y = 1),
        f < 0 && (m += f * v)),
      !S &&
        te &&
        ((h = e.left - t.width + r.x),
        (_ = t.scrollWidth - t.width),
        (b = Pr(l, u, _ - h)),
        (x = 1),
        l < 0 && (h += l * b)),
      ee && !C)
    ) {
      ;((m = 0), (g = e.bottom + r.y))
      var ne = g - m
      ;((v = 1), (y = Pr(f, p, ne)), p > 0 && (g += p * y))
    }
    if (S && !te) {
      ;((h = 0), (_ = e.right + r.x))
      var re = _ - h
      ;((b = 1), (x = Pr(l, u, re)), u > 0 && (_ += u * x))
    }
  }
  return new ar({
    startX: h,
    startY: m,
    endX: _,
    endY: g,
    startMultiplierX: b,
    endMultiplierX: x,
    startMultiplierY: v,
    endMultiplierY: y,
  })
}
function Rr(e, t) {
  var n = or({}, e)
  return (
    (n.translateX &&= or({}, e.translateX, {
      start: n.translateX.start * t.startMultiplierX,
      end: n.translateX.end * t.endMultiplierX,
    })),
    (n.translateY &&= or({}, e.translateY, {
      start: n.translateY.start * t.startMultiplierY,
      end: n.translateY.end * t.endMultiplierY,
    })),
    n
  )
}
function zr(e, t, n) {
  return e.rootMargin || e.targetElement || e.shouldDisableScalingTranslations
    ? !1
    : !!(
        (t.translateX && n === dr.horizontal) ||
        (t.translateY && n === dr.vertical)
      )
}
var Br = function (e, t, n) {
    return Math.min(Math.max(e, t), n)
  },
  Vr = (function () {
    function e(e) {
      ;((this.el = e.el),
        (this.props = e.props),
        (this.scrollAxis = e.scrollAxis),
        (this.disabledParallaxController = e.disabledParallaxController || !1),
        (this.id = mr()),
        (this.effects = Sr(this.props, this.scrollAxis)),
        (this.isInView = null),
        (this.progress = 0),
        this._setElementEasing(e.props.easing),
        Or(e.el, this.effects))
    }
    var t = e.prototype
    return (
      (t.updateProps = function (e) {
        return (
          (this.props = or({}, this.props, e)),
          (this.effects = Sr(e, this.scrollAxis)),
          this._setElementEasing(e.easing),
          this
        )
      }),
      (t.setCachedAttributes = function (e, t) {
        ;(Mr(this),
          (this.rect = new hr({
            el: this.props.targetElement || this.el,
            rootMargin: this.props.rootMargin,
            view: e,
          })))
        var n = zr(this.props, this.effects, this.scrollAxis)
        return typeof this.props.startScroll == `number` &&
          typeof this.props.endScroll == `number`
          ? ((this.limits = new ar({
              startX: this.props.startScroll,
              startY: this.props.startScroll,
              endX: this.props.endScroll,
              endY: this.props.endScroll,
            })),
            this._setElementStyles(),
            this)
          : (n
              ? ((this.limits = Lr(
                  this.rect,
                  e,
                  this.effects,
                  t,
                  this.scrollAxis,
                  this.props.shouldAlwaysCompleteAnimation
                )),
                (this.scaledEffects = Rr(this.effects, this.limits)))
              : (this.limits = Nr(
                  this.rect,
                  e,
                  t,
                  this.props.shouldAlwaysCompleteAnimation
                )),
            this._setElementStyles(),
            this)
      }),
      (t._updateElementIsInView = function (e) {
        var t = this.isInView === null
        ;(e !== this.isInView &&
          (e
            ? this.props.onEnter && this.props.onEnter(this)
            : t ||
              (this._setFinalProgress(),
              this._setElementStyles(),
              this.props.onExit && this.props.onExit(this))),
          (this.isInView = e))
      }),
      (t._setFinalProgress = function () {
        var e = Br(Math.round(this.progress), 0, 1)
        this._updateElementProgress(e)
      }),
      (t._setElementStyles = function () {
        this.props.disabled ||
          this.disabledParallaxController ||
          kr(this.scaledEffects || this.effects, this.progress, this.el)
      }),
      (t._updateElementProgress = function (e) {
        ;((this.progress = e),
          this.props.onProgressChange &&
            this.props.onProgressChange(this.progress),
          this.props.onChange && this.props.onChange(this))
      }),
      (t._setElementEasing = function (e) {
        this.easing = yr(e)
      }),
      (t.updateElementOptions = function (e) {
        ;((this.scrollAxis = e.scrollAxis),
          (this.disabledParallaxController =
            e.disabledParallaxController || !1))
      }),
      (t.updatePosition = function (e) {
        if (!this.limits) return this
        var t = this.scrollAxis === dr.vertical,
          n = this.isInView === null,
          r = t ? this.limits.startY : this.limits.startX,
          i = t ? this.limits.endY : this.limits.endX,
          a = t ? this.limits.totalY : this.limits.totalX,
          o = t ? e.y : e.x,
          s = wr(r, i, o)
        if ((this._updateElementIsInView(s), s)) {
          var c = Cr(r, a, o, this.easing)
          ;(this._updateElementProgress(c), this._setElementStyles())
        } else
          n &&
            ((this.progress = Br(Math.round(Cr(r, a, o, this.easing)), 0, 1)),
            this._setElementStyles())
        return this
      }),
      e
    )
  })(),
  Hr = (function () {
    function e(e) {
      ;((this.scrollContainer = e.scrollContainer),
        (this.width = e.width),
        (this.height = e.height),
        (this.scrollHeight = e.scrollHeight),
        (this.scrollWidth = e.scrollWidth))
    }
    var t = e.prototype
    return (
      (t.hasChanged = function (e) {
        return (
          e.width !== this.width ||
          e.height !== this.height ||
          e.scrollWidth !== this.scrollWidth ||
          e.scrollHeight !== this.scrollHeight
        )
      }),
      (t.setSize = function (e) {
        return (
          (this.width = e.width),
          (this.height = e.height),
          (this.scrollHeight = e.scrollHeight),
          (this.scrollWidth = e.scrollWidth),
          this
        )
      }),
      e
    )
  })(),
  Ur = (function () {
    function e(e, t) {
      ;((this.x = e), (this.y = t), (this.dx = 0), (this.dy = 0))
    }
    var t = e.prototype
    return (
      (t.setScroll = function (e, t) {
        return (
          (this.dx = e - this.x),
          (this.dy = t - this.y),
          (this.x = e),
          (this.y = t),
          this
        )
      }),
      e
    )
  })()
function Wr() {
  var e = !1
  try {
    var t = Object.defineProperty({}, "passive", {
      get: function () {
        return ((e = !0), !0)
      },
    })
    ;(window.addEventListener(`test`, null, t),
      window.removeEventListener(`test`, null, t))
  } catch {}
  return e
}
var Gr = (function () {
  function e(e) {
    var t = e.scrollAxis,
      n = t === void 0 ? dr.vertical : t,
      r = e.scrollContainer,
      i = e.disabled,
      a = i !== void 0 && i
    ;((this.disabled = a),
      (this.scrollAxis = n),
      (this.elements = []),
      (this._hasScrollContainer = !!r),
      (this.viewEl = r ?? window))
    var o = this._getScrollPosition(),
      s = o[0],
      c = o[1]
    ;((this.scroll = new Ur(s, c)),
      (this.view = new Hr({
        width: 0,
        height: 0,
        scrollWidth: 0,
        scrollHeight: 0,
        scrollContainer: this._hasScrollContainer ? r : void 0,
      })),
      (this._ticking = !1),
      (this._supportsPassive = Wr()),
      this._bindAllMethods(),
      !this.disabled &&
        (this._addListeners(this.viewEl),
        this._addResizeObserver(),
        this._setViewSize()))
  }
  e.init = function (t) {
    if (!(typeof window < `u`))
      throw Error(
        `Looks like ParallaxController.init() was called on the server. This method must be called on the client.`
      )
    return new e(t)
  }
  var t = e.prototype
  return (
    (t._bindAllMethods = function () {
      var e = this
      ;[
        `_addListeners`,
        `_removeListeners`,
        `_getScrollPosition`,
        `_handleScroll`,
        `_handleUpdateCache`,
        `_updateAllElements`,
        `_updateElementPosition`,
        `_setViewSize`,
        `_addResizeObserver`,
        `_checkIfViewHasChanged`,
        `_getViewParams`,
        `getElements`,
        `createElement`,
        `removeElementById`,
        `resetElementStyles`,
        `updateElementPropsById`,
        `update`,
        `updateScrollContainer`,
        `destroy`,
      ].forEach(function (t) {
        e[t] = e[t].bind(e)
      })
    }),
    (t._addListeners = function (e) {
      ;(e.addEventListener(
        `scroll`,
        this._handleScroll,
        this._supportsPassive ? { passive: !0 } : !1
      ),
        window.addEventListener(`resize`, this._handleUpdateCache, !1),
        window.addEventListener(`blur`, this._handleUpdateCache, !1),
        window.addEventListener(`focus`, this._handleUpdateCache, !1),
        window.addEventListener(`load`, this._handleUpdateCache, !1))
    }),
    (t._removeListeners = function (e) {
      var t
      ;(e.removeEventListener(`scroll`, this._handleScroll, !1),
        window.removeEventListener(`resize`, this._handleUpdateCache, !1),
        window.removeEventListener(`blur`, this._handleUpdateCache, !1),
        window.removeEventListener(`focus`, this._handleUpdateCache, !1),
        window.removeEventListener(`load`, this._handleUpdateCache, !1),
        (t = this._resizeObserver) == null || t.disconnect())
    }),
    (t._addResizeObserver = function () {
      var e = this
      try {
        var t = this._hasScrollContainer
          ? this.viewEl
          : document.documentElement
        ;((this._resizeObserver = new ResizeObserver(function () {
          return e.update()
        })),
          this._resizeObserver.observe(t))
      } catch {
        console.warn(
          `Failed to create the resize observer in the ParallaxContoller`
        )
      }
    }),
    (t._getScrollPosition = function () {
      return [
        this._hasScrollContainer ? this.viewEl.scrollLeft : window.pageXOffset,
        this._hasScrollContainer ? this.viewEl.scrollTop : window.pageYOffset,
      ]
    }),
    (t._handleScroll = function () {
      var e = this._getScrollPosition(),
        t = e[0],
        n = e[1]
      ;(this.scroll.setScroll(t, n),
        !this._ticking &&
          this.elements?.length > 0 &&
          ((this._ticking = !0),
          window.requestAnimationFrame(this._updateAllElements)))
    }),
    (t._handleUpdateCache = function () {
      ;(this._setViewSize(), this._updateAllElements({ updateCache: !0 }))
    }),
    (t._updateAllElements = function (e) {
      var t = this,
        n = (e === void 0 ? {} : e).updateCache
      ;(this.elements &&
        this.elements.forEach(function (e) {
          ;(n && e.setCachedAttributes(t.view, t.scroll),
            t._updateElementPosition(e))
        }),
        (this._ticking = !1))
    }),
    (t._updateElementPosition = function (e) {
      e.props.disabled || this.disabled || e.updatePosition(this.scroll)
    }),
    (t._getViewParams = function () {
      if (this._hasScrollContainer) {
        var e = this.viewEl.offsetWidth,
          t = this.viewEl.offsetHeight,
          n = this.viewEl.scrollHeight,
          r = this.viewEl.scrollWidth
        return this.view.setSize({
          width: e,
          height: t,
          scrollHeight: n,
          scrollWidth: r,
        })
      }
      var i = document.documentElement
      return {
        width: window.innerWidth || i.clientWidth,
        height: window.innerHeight || i.clientHeight,
        scrollHeight: i.scrollHeight,
        scrollWidth: i.scrollWidth,
      }
    }),
    (t._setViewSize = function () {
      return this.view.setSize(this._getViewParams())
    }),
    (t._checkIfViewHasChanged = function () {
      return this.view.hasChanged(this._getViewParams())
    }),
    (t.getElements = function () {
      return this.elements
    }),
    (t.createElement = function (e) {
      var t = new Vr(
        or({}, e, {
          scrollAxis: this.scrollAxis,
          disabledParallaxController: this.disabled,
        })
      )
      return (
        t.setCachedAttributes(this.view, this.scroll),
        (this.elements = this.elements ? [].concat(this.elements, [t]) : [t]),
        this._updateElementPosition(t),
        this._checkIfViewHasChanged() && this.update(),
        t
      )
    }),
    (t.removeElementById = function (e) {
      this.elements &&= this.elements.filter(function (t) {
        return t.id !== e
      })
    }),
    (t.updateElementPropsById = function (e, t) {
      ;((this.elements &&= this.elements.map(function (n) {
        return n.id === e ? n.updateProps(t) : n
      })),
        this.update())
    }),
    (t.resetElementStyles = function (e) {
      Mr(e)
    }),
    (t.update = function () {
      var e = this._getScrollPosition(),
        t = e[0],
        n = e[1]
      ;(this.scroll.setScroll(t, n),
        this._setViewSize(),
        this._updateAllElements({ updateCache: !0 }))
    }),
    (t.updateScrollContainer = function (e) {
      ;(this._removeListeners(this.viewEl),
        (this.viewEl = e),
        (this._hasScrollContainer = !!e),
        (this.view = new Hr({
          width: 0,
          height: 0,
          scrollWidth: 0,
          scrollHeight: 0,
          scrollContainer: e,
        })),
        this._setViewSize(),
        this._addListeners(this.viewEl),
        this._updateAllElements({ updateCache: !0 }))
    }),
    (t.disableParallaxController = function () {
      ;((this.disabled = !0),
        this._removeListeners(this.viewEl),
        this.elements &&
          this.elements.forEach(function (e) {
            return Mr(e)
          }))
    }),
    (t.enableParallaxController = function () {
      var e = this
      ;((this.disabled = !1),
        this.elements &&
          this.elements.forEach(function (t) {
            return t.updateElementOptions({
              disabledParallaxController: !1,
              scrollAxis: e.scrollAxis,
            })
          }),
        this._addListeners(this.viewEl),
        this._addResizeObserver(),
        this._setViewSize())
    }),
    (t.disableAllElements = function () {
      ;(console.warn(`deprecated: use disableParallaxController() instead`),
        (this.elements &&= this.elements.map(function (e) {
          return e.updateProps({ disabled: !0 })
        })),
        this.update())
    }),
    (t.enableAllElements = function () {
      ;(console.warn(`deprecated: use enableParallaxController() instead`),
        (this.elements &&= this.elements.map(function (e) {
          return e.updateProps({ disabled: !1 })
        })),
        this.update())
    }),
    (t.destroy = function () {
      ;(this._removeListeners(this.viewEl),
        this.elements &&
          this.elements.forEach(function (e) {
            return Mr(e)
          }),
        (this.elements = void 0))
    }),
    e
  )
})()
function Kr(e) {
  return (Object.keys(e).forEach((t) => e[t] === void 0 && delete e[t]), e)
}
function qr(e) {
  let {
    disabled: t,
    easing: n,
    endScroll: r,
    onChange: i,
    onEnter: a,
    onExit: o,
    onProgressChange: s,
    opacity: c,
    rootMargin: l,
    rotate: u,
    rotateX: d,
    rotateY: f,
    rotateZ: p,
    scale: m,
    scaleX: h,
    scaleY: g,
    scaleZ: _,
    shouldAlwaysCompleteAnimation: v,
    shouldDisableScalingTranslations: y,
    speed: b,
    startScroll: x,
    targetElement: ee,
    translateX: S,
    translateY: C,
    ...te
  } = e
  return {
    parallaxProps: Kr({
      disabled: t,
      easing: n,
      endScroll: r,
      onChange: i,
      onEnter: a,
      onExit: o,
      onProgressChange: s,
      opacity: c,
      rootMargin: l,
      rotate: u,
      rotateX: d,
      rotateY: f,
      rotateZ: p,
      scale: m,
      scaleX: h,
      scaleY: g,
      scaleZ: _,
      shouldAlwaysCompleteAnimation: v,
      shouldDisableScalingTranslations: y,
      speed: b,
      startScroll: x,
      targetElement: ee,
      translateX: S,
      translateY: C,
    }),
    rest: te,
  }
}
function Jr(e) {
  ;(0, x.useEffect)(() => {
    let t = typeof window > `u`,
      n = e instanceof Gr
    if (!t && !e && !n)
      throw Error(
        `Must wrap your application's <Parallax /> components in a <ParallaxProvider />.`
      )
  }, [e])
}
var Yr = x.createContext(null)
function Xr() {
  let e = (0, x.useContext)(Yr)
  if (typeof window > `u`) return null
  if (!e)
    throw Error(
      "Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>"
    )
  return e
}
function Zr(e) {
  let t = Xr(),
    n = (0, x.useRef)(null),
    { parallaxProps: r } = qr(e)
  Jr(t)
  let [i, a] = (0, x.useState)()
  return (
    (0, x.useEffect)(() => {
      let e
      if (n.current instanceof HTMLElement) {
        let i = { el: n.current, props: r }
        ;((e = t?.createElement(i)), a(e))
      } else
        throw Error(
          `You must assign the ref returned by the useParallax() hook to an HTML Element.`
        )
      return () => {
        e && t?.removeElementById(e.id)
      }
    }, []),
    (0, x.useEffect)(() => {
      i &&
        (e.disabled && t?.resetElementStyles(i),
        t?.updateElementPropsById(i.id, r))
    }, [
      e.disabled,
      e.easing,
      e.endScroll,
      e.onChange,
      e.onEnter,
      e.onExit,
      e.onProgressChange,
      e.opacity,
      e.rootMargin,
      e.rotate,
      e.rotateX,
      e.rotateY,
      e.rotateZ,
      e.scale,
      e.scaleX,
      e.scaleY,
      e.scaleZ,
      e.shouldAlwaysCompleteAnimation,
      e.shouldDisableScalingTranslations,
      e.speed,
      e.startScroll,
      e.targetElement,
      e.translateX,
      e.translateY,
    ]),
    { ref: n, controller: t, element: i }
  )
}
function Qr(e) {
  let { parallaxProps: t, rest: n } = qr(e),
    { ref: r } = Zr(t)
  return x.createElement(`div`, { ref: r, ...n }, e.children)
}
var $r = (e) => (typeof window > `u` ? null : Gr.init(e))
function ei(e) {
  let t = (0, x.useRef)(null)
  return (
    (t.current ||= $r({
      scrollAxis: e.scrollAxis || dr.vertical,
      scrollContainer: e.scrollContainer,
      disabled: e.isDisabled,
    })),
    (0, x.useEffect)(() => {
      e.scrollContainer &&
        t.current &&
        t.current.updateScrollContainer(e.scrollContainer)
    }, [e.scrollContainer]),
    (0, x.useEffect)(() => {
      ;(e.isDisabled && t.current && t.current.disableParallaxController(),
        !e.isDisabled && t.current && t.current.enableParallaxController())
    }, [e.isDisabled]),
    (0, x.useEffect)(
      () => () => {
        var e
        t == null || (e = t.current) == null || e.destroy()
      },
      []
    ),
    x.createElement(Yr.Provider, { value: t.current }, e.children)
  )
}
var ti = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`)
    function r(e, n, r) {
      var i = null
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a])
      else r = n
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      )
    }
    ;((e.Fragment = n), (e.jsx = r), (e.jsxs = r))
  }),
  k = o((e, t) => {
    t.exports = ti()
  })(),
  ni = () =>
    (0, k.jsxs)(`svg`, {
      width: `168`,
      height: `222`,
      viewBox: `0 0 168 222`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M150.676 149.944C150.676 149.944 150.676 95.2848 145.817 80.7091C144.242 75.984 136.222 74.5697 131.242 74.6359C95.9386 75.1054 49.2535 95.2847 41.3583 84.353C34.393 74.7087 31.0339 60.6676 31.0339 60.6676C27.1948 107.439 28.4195 131.621 33.4631 173.022M150.676 149.944C150.676 149.944 154.2 158.78 154.32 156.017C154.927 142.048 174.417 99.9236 164.644 67.348C160.274 52.7805 156.935 38.9654 143.388 27.8723C138.447 23.8263 131.99 23.7226 129.42 19.3698C116.972 -1.71123 74.7595 -1.28735 59.5779 4.1868C44.3963 9.66096 47.5333 9.09244 43.7876 10.8673C23.2094 20.6182 10.5012 35.9088 6.74111 58.2383C5.61615 64.9188 6.87653 66.8568 4.91915 69.7773C-10.9552 93.4629 26.0339 148.128 33.4631 173.022M150.676 149.944C150.676 149.944 151.016 176.706 143.388 189.419C132.456 207.639 115.451 221 99.661 221C72.7505 221 57.1486 211.89 43.7876 193.671C37.755 185.444 33.4631 173.022 33.4631 173.022M63.8291 180.31C59.6721 176.781 56.5413 171.2 56.5413 166.949C56.5413 162.824 69.112 152.77 80.4032 144.063C80.5846 143.923 80.875 144.181 80.7655 144.382C79.7411 146.266 78.1251 150.14 80.2268 152.98C82.4577 155.994 85.2259 154.679 88.7293 156.017C93.0938 157.683 91.9595 158.8 96.6244 159.053C101.946 159.342 101.824 157.481 106.949 156.017C111.2 154.802 117.565 154.752 116.666 151.158C115.451 146.3 111.2 143.263 111.2 143.263M96.6244 171.2C101.642 171.368 105.992 169.604 111.2 169.985C115.547 170.303 120.138 170.781 122.444 171.032C123.159 171.109 123.539 171.876 123.126 172.465C120.507 176.199 111.673 186.884 96.6244 186.383C84.6536 185.984 71.7096 177.838 66.6013 171.32C66.1394 170.73 66.5363 169.91 67.283 169.856C69.6975 169.682 74.5528 169.392 80.2268 169.378C85.1331 169.366 92.2523 171.053 96.6244 171.2Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M109.985 103.18C109.985 103.18 127.525 98.4286 135.493 103.18C140.424 106.12 142.781 112.897 142.781 112.897M80.8341 101.358C80.8341 101.358 65.0266 96.9612 56.5413 100.143C50.5412 102.393 45.0022 109.253 45.0022 109.253M122.739 112.897C116.164 113.434 107.991 120.002 108.673 120.188C108.736 120.205 108.803 120.185 108.868 120.185H123.954H135.379C135.455 120.185 135.547 120.188 135.585 120.123C136.029 119.354 128.753 112.406 122.739 112.897ZM66.8657 112.897C70.7963 112.827 76.4777 115.71 79.6591 117.528C80.4741 117.994 80.2055 119.165 79.2708 119.252C71.3152 119.99 64.3362 120.015 55.9949 119.225C55.0959 119.14 54.8001 118.036 55.5547 117.54C58.2554 115.766 63.1027 112.964 66.8657 112.897Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  ri = () =>
    (0, k.jsxs)(`svg`, {
      width: `167`,
      height: `173`,
      viewBox: `0 0 167 173`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M40.3583 83.353C33.393 73.7087 30.0339 59.6676 30.0339 59.6676C26.1948 106.439 27.4195 130.621 32.4631 172.022C25.0339 147.128 -11.9552 92.4628 3.91915 68.7773C5.87653 65.8568 4.61615 63.9188 5.74111 57.2383C9.50125 34.9088 22.2094 19.6182 42.7876 9.86732C46.5333 8.09244 43.3963 8.66096 58.5779 3.1868C73.7595 -2.28735 115.972 -2.71123 128.42 18.3698C130.99 22.7226 137.447 22.8263 142.388 26.8723C155.935 37.9654 159.274 51.7805 163.644 66.3481C173.417 98.9236 153.927 141.048 153.32 155.017C153.2 157.78 149.676 148.944 149.676 148.944C149.676 148.944 149.676 94.2848 144.817 79.7091C143.242 74.984 135.222 73.5697 130.242 73.6359C94.9386 74.1054 48.2535 94.2847 40.3583 83.353Z`,
          fill: `#083344`,
        }),
        (0, k.jsx)(`path`, {
          d: `M121.739 111.897C115.164 112.434 106.991 119.002 107.673 119.188C107.736 119.205 107.803 119.185 107.868 119.185H122.954H134.379L134.39 119.185C134.463 119.185 134.549 119.185 134.585 119.123C135.029 118.354 127.753 111.406 121.739 111.897Z`,
          fill: `#083344`,
        }),
        (0, k.jsx)(`path`, {
          d: `M65.8657 111.897C69.7963 111.827 75.4777 114.71 78.6591 116.528C79.4741 116.994 79.2056 118.165 78.2708 118.252C70.3152 118.99 63.3362 119.015 54.9949 118.225C54.096 118.14 53.8001 117.036 54.5548 116.54C57.2554 114.766 62.1028 111.964 65.8657 111.897Z`,
          fill: `#083344`,
        }),
      ],
    }),
  ii = () =>
    (0, k.jsxs)(`svg`, {
      width: `100`,
      height: `100`,
      viewBox: `0 0 100 100`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`circle`, {
          cx: `50`,
          cy: `50`,
          r: `49.5`,
          fill: `#075985`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M79.8358 38.7072C57.0631 36.4098 42.6793 36.4433 19.1561 38.7341C17.1059 38.9338 15.3625 40.3781 14.9195 42.3897C13.6469 48.1681 13.7393 52.4393 14.9248 58.1727C15.3669 60.3109 17.2399 61.8402 19.4198 61.9647C42.5743 63.2862 56.9416 63.3967 79.7469 61.9823C81.9038 61.8485 83.7579 60.3369 84.1828 58.218C85.327 52.5124 85.2359 48.2583 84.121 42.5413C83.7146 40.4571 81.9486 38.9203 79.8358 38.7072Z`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M18.7636 57.1701C17.8044 51.4624 17.6959 48.0391 18.742 42.7939C18.8343 42.3312 19.2432 42 19.715 42H22.6403C23.1522 42 23.5821 42.3879 23.6319 42.8974C24.1332 48.0283 24.1152 51.4291 23.6224 57.0892C23.5776 57.6041 23.1453 58 22.6285 58H19.7462C19.2604 58 18.8441 57.6491 18.7636 57.1701Z`,
          fill: `#ECFEFF`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M76.7636 57.1701C75.8044 51.4624 75.6959 48.0391 76.742 42.7939C76.8343 42.3312 77.2432 42 77.715 42H80.6403C81.1522 42 81.5821 42.3879 81.6319 42.8974C82.1332 48.0283 82.1152 51.4291 81.6224 57.0892C81.5776 57.6041 81.1453 58 80.6285 58H77.7462C77.2604 58 76.8441 57.6491 76.7636 57.1701Z`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
        }),
        (0, k.jsx)(`path`, {
          d: `M47.7871 59.1372C46.7984 51.8396 46.6855 47.5337 47.7675 40.8336C47.8451 40.3525 48.2624 40 48.7497 40H51.6213C52.1412 40 52.5748 40.4001 52.6159 40.9183C53.1386 47.5097 53.1201 51.7948 52.6077 59.0713C52.5709 59.5939 52.1355 60 51.6116 60H48.7757C48.2771 60 47.8541 59.6313 47.7871 59.1372Z`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
        }),
        (0, k.jsx)(`path`, {
          d: `M57.782 58.644C56.7997 51.7454 56.6878 47.6602 57.7618 41.3252C57.8427 40.848 58.2582 40.5 58.7422 40.5H61.6254C62.1435 40.5 62.5764 40.8976 62.6193 41.414C63.1374 47.6393 63.119 51.7035 62.6109 58.575C62.5723 59.0959 62.1376 59.5 61.6152 59.5H58.7694C58.2735 59.5 57.8519 59.135 57.782 58.644Z`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
        }),
        (0, k.jsx)(`path`, {
          d: `M37.782 58.644C36.7997 51.7454 36.6878 47.6602 37.7618 41.3252C37.8427 40.848 38.2582 40.5 38.7422 40.5H41.6254C42.1435 40.5 42.5764 40.8976 42.6193 41.414C43.1374 47.6393 43.119 51.7035 42.6109 58.575C42.5723 59.0959 42.1376 59.5 41.6152 59.5H38.7694C38.2735 59.5 37.8519 59.135 37.782 58.644Z`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
        }),
        (0, k.jsx)(`path`, {
          d: `M27.7763 58.1517C26.8012 51.6511 26.6903 47.7866 27.7557 41.8159C27.8401 41.3431 28.2537 41 28.7341 41H31.6298C32.1461 41 32.5781 41.3948 32.6231 41.9091C33.1361 47.769 33.1179 51.6121 32.6143 58.0791C32.5739 58.5983 32.1399 59 31.6191 59H28.7624C28.2696 59 27.8495 58.6391 27.7763 58.1517Z`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
        }),
        (0, k.jsx)(`path`, {
          d: `M67.7763 58.1517C66.8012 51.6511 66.6903 47.7866 67.7557 41.8159C67.8401 41.3431 68.2537 41 68.7341 41H71.6298C72.1461 41 72.5781 41.3948 72.6231 41.9091C73.1361 47.769 73.1179 51.6121 72.6143 58.0791C72.5739 58.5983 72.1399 59 71.6191 59H68.7624C68.2696 59 67.8495 58.6391 67.7763 58.1517Z`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
        }),
        (0, k.jsx)(`path`, {
          d: `M12 48C12 49.5192 12 50.476 12 52`,
          stroke: `#ECFEFF`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M87 48C87 49.5192 87 50.476 87 52`,
          stroke: `#ECFEFF`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  ai = () =>
    (0, k.jsxs)(`svg`, {
      width: `100`,
      height: `100`,
      viewBox: `0 0 100 100`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`circle`, {
          cx: `50`,
          cy: `50`,
          r: `49.5`,
          fill: `#7F1D1D`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M35.0226 28.8459C28.8785 29.1926 22.2943 33.9734 18.6576 35.2552C15.021 36.5371 11.8146 44.7427 15.9301 48.074C19.4559 50.928 20.4986 55.263 23.2035 56.6199C28.5328 59.2934 34.1761 55.7763 40.9322 58.3291C47.9746 60.9901 52.4346 54.8742 60.0247 54.9107C65.2216 54.9358 68.0547 57.2552 73.2076 56.6199C78.8015 55.9303 88.3294 53.1904 86.845 48.074C85.4813 43.3736 88.2088 38.6736 85.4813 35.2552C80.4883 28.9976 75.869 30.7414 68.6617 28.8459C62.5524 27.2391 60.4792 25 54.5696 25C45.1441 25.0001 41.1667 28.4991 35.0226 28.8459Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M64.1276 69.0612L71.5939 62.8387C72.4128 62.1562 73.5888 63.0579 73.142 64.0259L70.7159 69.2831C70.5427 69.6583 70.6182 70.1013 70.9058 70.398L72.4351 71.9761C72.8349 72.3886 72.8058 73.0523 72.3714 73.4282L64.6419 80.1174C63.7598 80.8808 62.5071 79.7728 63.1571 78.8041L66.6778 73.5567C66.983 73.1018 66.8655 72.4861 66.4142 72.1756L64.2011 70.6532C63.6553 70.2779 63.6188 69.4852 64.1276 69.0612Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M39.2155 66V67.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M45.2285 67V68.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M53.6465 66V67.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M59 64V65.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M35.6078 71V72.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M41.6207 73V74.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M48.8362 72V73.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M56.0517 72V73.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M32 66V67.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M52.444 78V79.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M46.431 77V78.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M22.5 39L20 45.5`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M31 34L24 52`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M39 32L30.5 53.5`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M48 30L38.5 53.5`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M56 30L45.5 54.5`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M63 31L54.5 52`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M69.5 33L62.5 50.5`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M76 34L69.5 51.5`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M81 37L76 51.5`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M83 46.5L81.5 50`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  oi = () =>
    (0, k.jsxs)(`svg`, {
      width: `100`,
      height: `100`,
      viewBox: `0 0 100 100`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`circle`, {
          cx: `50`,
          cy: `50`,
          r: `49.5`,
          fill: `#78350F`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M23 38.5774C23 38.5774 26.2741 33.8839 29.5 33.0774C33.5 32.0774 34 23.0773 39.5 24.0774C44.3487 24.9591 45.4243 29.2471 50 31.0774C55 33.0774 51.8213 42.2202 55 48.5774C57.5 53.5774 55 59.5774 58.5 62.0774C60.8621 63.7646 60.0806 65.9735 62.5 67.5774C65.0733 69.2833 68 69.0774 70 71.5774C71.7337 73.7445 71 75.5774 74.5 75.5774C76.5 75.5774 77.5 75.5774 77.5 75.5774`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  si = () =>
    (0, k.jsxs)(`svg`, {
      width: `196`,
      height: `203`,
      viewBox: `0 0 196 203`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`circle`, {
          cx: `43`,
          cy: `138`,
          r: `29.5`,
          fill: `#075985`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M59.4905 131.085C47.0627 129.891 38.6941 129.911 25.8532 131.111C23.8022 131.302 22.0317 132.743 21.6898 134.775C21.2937 137.128 21.3136 139.133 21.688 141.462C22.0346 143.618 23.9364 145.141 26.1166 145.261C38.6822 145.949 47.0179 146.004 59.4022 145.277C61.5595 145.15 63.4426 143.642 63.7598 141.505C64.1009 139.206 64.0712 137.226 63.7173 134.921C63.3951 132.822 61.6043 131.288 59.4905 131.085Z`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M24.2034 141.971C23.6976 138.856 23.6416 136.864 24.1836 133.994C24.2711 133.53 24.6809 133.2 25.1526 133.2H26.224C26.7359 133.2 27.1663 133.587 27.2132 134.097C27.4687 136.871 27.4587 138.838 27.2045 141.89C27.1616 142.405 26.729 142.8 26.2122 142.8H25.1838C24.698 142.8 24.2813 142.45 24.2034 141.971Z`,
          fill: `#ECFEFF`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M59.0035 141.971C58.4977 138.856 58.4416 136.864 58.9836 133.994C59.0711 133.53 59.4809 133.2 59.9527 133.2H61.0241C61.536 133.2 61.9663 133.587 62.0133 134.097C62.2687 136.871 62.2588 138.838 62.0045 141.89C61.9616 142.405 61.5291 142.8 61.0122 142.8H59.9838C59.4981 142.8 59.0813 142.45 59.0035 141.971Z`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
        }),
        (0, k.jsx)(`path`, {
          d: `M41.6262 143.138C41.0917 139.085 41.0316 136.561 41.6079 132.833C41.6823 132.351 42.0999 132 42.5872 132H43.6049C44.1248 132 44.5586 132.399 44.5979 132.917C44.8737 136.557 44.8633 139.062 44.5902 143.073C44.5546 143.595 44.1191 144 43.5952 144H42.6133C42.1146 144 41.6914 143.632 41.6262 143.138Z`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
        }),
        (0, k.jsx)(`path`, {
          d: `M47.6212 142.845C47.093 139.028 47.0337 136.637 47.6024 133.125C47.6798 132.647 48.0958 132.3 48.5797 132.3H49.609C50.1271 132.3 50.5603 132.697 50.6012 133.213C50.8726 136.636 50.8623 139.006 50.5933 142.776C50.5561 143.297 50.1212 143.7 49.5988 143.7H48.6069C48.111 143.7 47.6892 143.337 47.6212 142.845Z`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
        }),
        (0, k.jsx)(`path`, {
          d: `M35.6212 142.845C35.093 139.028 35.0337 136.637 35.6024 133.125C35.6798 132.647 36.0958 132.3 36.5797 132.3H37.609C38.1271 132.3 38.5603 132.697 38.6012 133.213C38.8726 136.636 38.8623 139.006 38.5933 142.776C38.5561 143.297 38.1212 143.7 37.5988 143.7H36.6069C36.111 143.7 35.6892 143.337 35.6212 142.845Z`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
        }),
        (0, k.jsx)(`path`, {
          d: `M29.6157 142.553C29.0944 138.971 29.0361 136.713 29.5966 133.416C29.6771 132.942 30.0912 132.6 30.5716 132.6H31.6134C32.1297 132.6 32.562 132.994 32.6048 133.508C32.8714 136.714 32.8612 138.95 32.5966 142.48C32.5577 142.999 32.1235 143.4 31.6028 143.4H30.6C30.1071 143.4 29.6867 143.04 29.6157 142.553Z`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
        }),
        (0, k.jsx)(`path`, {
          d: `M53.6157 142.553C53.0944 138.971 53.0361 136.713 53.5966 133.416C53.6771 132.942 54.0912 132.6 54.5716 132.6H55.6134C56.1297 132.6 56.562 132.994 56.6048 133.508C56.8714 136.714 56.8612 138.95 56.5966 142.48C56.5577 142.999 56.1235 143.4 55.6028 143.4H54.6C54.1071 143.4 53.6867 143.04 53.6157 142.553Z`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
        }),
        (0, k.jsx)(`path`, {
          d: `M20.2 136.8C20.2 137.712 20.2 138.286 20.2 139.2`,
          stroke: `#ECFEFF`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M65.2 136.8C65.2 137.712 65.2 138.286 65.2 139.2`,
          stroke: `#ECFEFF`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`rect`, {
          y: `173`,
          width: `83`,
          height: `30`,
          rx: `4`,
          fill: `#075985`,
        }),
        (0, k.jsx)(`path`, {
          d: `M11.5156 192.18V193H5.11719V192.18H11.5156ZM5.40625 181.625V193H4.44531V181.625H5.40625ZM10.7188 186.727V187.547H5.11719V186.727H10.7188ZM11.4766 181.625V182.453H5.11719V181.625H11.4766ZM13.7031 184.547L15.9844 187.961L18.2734 184.547H19.3828L16.5156 188.688L19.5 193H18.4062L15.9922 189.43L13.5859 193H12.4922L15.4766 188.688L12.6094 184.547H13.7031ZM22.0625 181V193H21.1328V181H22.0625ZM21.8516 188.25L21.4375 188.016C21.4688 187.516 21.5703 187.047 21.7422 186.609C21.9141 186.172 22.1458 185.786 22.4375 185.453C22.7344 185.12 23.0807 184.859 23.4766 184.672C23.8776 184.484 24.3203 184.391 24.8047 184.391C25.2266 184.391 25.6042 184.448 25.9375 184.562C26.2708 184.677 26.5547 184.859 26.7891 185.109C27.0234 185.359 27.2005 185.68 27.3203 186.07C27.4453 186.461 27.5078 186.938 27.5078 187.5V193H26.5703V187.492C26.5703 186.909 26.4896 186.453 26.3281 186.125C26.1667 185.792 25.9375 185.555 25.6406 185.414C25.3438 185.273 24.9922 185.203 24.5859 185.203C24.138 185.203 23.7448 185.302 23.4062 185.5C23.0729 185.693 22.7917 185.945 22.5625 186.258C22.3385 186.565 22.1667 186.896 22.0469 187.25C21.9271 187.599 21.862 187.932 21.8516 188.25ZM35.0547 191.484V187.125C35.0547 186.724 34.9714 186.378 34.8047 186.086C34.638 185.794 34.3932 185.57 34.0703 185.414C33.7474 185.258 33.349 185.18 32.875 185.18C32.4375 185.18 32.0469 185.258 31.7031 185.414C31.3646 185.565 31.0964 185.771 30.8984 186.031C30.7057 186.286 30.6094 186.57 30.6094 186.883L29.6719 186.875C29.6719 186.557 29.75 186.25 29.9062 185.953C30.0625 185.656 30.2839 185.391 30.5703 185.156C30.8568 184.922 31.1979 184.737 31.5938 184.602C31.9948 184.461 32.4349 184.391 32.9141 184.391C33.5182 184.391 34.0495 184.492 34.5078 184.695C34.9714 184.898 35.3333 185.203 35.5938 185.609C35.8542 186.016 35.9844 186.526 35.9844 187.141V191.227C35.9844 191.518 36.0052 191.82 36.0469 192.133C36.0938 192.445 36.1589 192.703 36.2422 192.906V193H35.25C35.1875 192.812 35.138 192.578 35.1016 192.297C35.0703 192.01 35.0547 191.74 35.0547 191.484ZM35.2734 188.078L35.2891 188.797H33.4531C32.974 188.797 32.5443 188.841 32.1641 188.93C31.7891 189.013 31.4714 189.138 31.2109 189.305C30.9505 189.466 30.75 189.661 30.6094 189.891C30.474 190.12 30.4062 190.38 30.4062 190.672C30.4062 190.974 30.4818 191.25 30.6328 191.5C30.7891 191.75 31.0078 191.951 31.2891 192.102C31.5755 192.247 31.9141 192.32 32.3047 192.32C32.8255 192.32 33.2839 192.224 33.6797 192.031C34.0807 191.839 34.4115 191.586 34.6719 191.273C34.9323 190.961 35.1068 190.62 35.1953 190.25L35.6016 190.789C35.5339 191.049 35.4089 191.318 35.2266 191.594C35.0495 191.865 34.8177 192.12 34.5312 192.359C34.2448 192.594 33.9062 192.786 33.5156 192.938C33.1302 193.083 32.6927 193.156 32.2031 193.156C31.651 193.156 31.1693 193.052 30.7578 192.844C30.3516 192.635 30.0339 192.352 29.8047 191.992C29.5807 191.628 29.4688 191.216 29.4688 190.758C29.4688 190.341 29.5573 189.969 29.7344 189.641C29.9115 189.307 30.1667 189.026 30.5 188.797C30.8385 188.562 31.2448 188.385 31.7188 188.266C32.1979 188.141 32.7344 188.078 33.3281 188.078H35.2734ZM43.9062 191.047V184.547H44.8438V193H43.9453L43.9062 191.047ZM44.0781 189.484L44.5625 189.469C44.5625 190 44.5 190.49 44.375 190.938C44.25 191.385 44.0547 191.776 43.7891 192.109C43.5234 192.443 43.1797 192.701 42.7578 192.883C42.3359 193.065 41.8281 193.156 41.2344 193.156C40.8229 193.156 40.4453 193.099 40.1016 192.984C39.763 192.865 39.4714 192.677 39.2266 192.422C38.9818 192.167 38.7917 191.836 38.6562 191.43C38.526 191.023 38.4609 190.531 38.4609 189.953V184.547H39.3906V189.969C39.3906 190.422 39.4401 190.799 39.5391 191.102C39.6432 191.404 39.7839 191.646 39.9609 191.828C40.1432 192.01 40.3516 192.141 40.5859 192.219C40.8203 192.297 41.0729 192.336 41.3438 192.336C42.0312 192.336 42.5729 192.203 42.9688 191.938C43.3698 191.672 43.6536 191.323 43.8203 190.891C43.9922 190.453 44.0781 189.984 44.0781 189.484ZM52.3516 190.844C52.3516 190.615 52.2943 190.388 52.1797 190.164C52.0651 189.94 51.8438 189.734 51.5156 189.547C51.1927 189.359 50.7161 189.201 50.0859 189.07C49.6172 188.966 49.1979 188.849 48.8281 188.719C48.4635 188.589 48.1562 188.432 47.9062 188.25C47.6562 188.068 47.4661 187.849 47.3359 187.594C47.2057 187.339 47.1406 187.036 47.1406 186.688C47.1406 186.375 47.2083 186.081 47.3438 185.805C47.4844 185.523 47.6823 185.279 47.9375 185.07C48.1979 184.857 48.5104 184.69 48.875 184.57C49.2448 184.451 49.6589 184.391 50.1172 184.391C50.7682 184.391 51.3255 184.503 51.7891 184.727C52.2578 184.945 52.6146 185.245 52.8594 185.625C53.1094 186.005 53.2344 186.435 53.2344 186.914H52.3047C52.3047 186.622 52.2188 186.346 52.0469 186.086C51.8802 185.826 51.6328 185.612 51.3047 185.445C50.9818 185.279 50.5859 185.195 50.1172 185.195C49.6328 185.195 49.2396 185.268 48.9375 185.414C48.6354 185.56 48.4141 185.745 48.2734 185.969C48.138 186.193 48.0703 186.424 48.0703 186.664C48.0703 186.852 48.099 187.023 48.1562 187.18C48.2188 187.331 48.3281 187.471 48.4844 187.602C48.6458 187.732 48.875 187.854 49.1719 187.969C49.4688 188.083 49.8542 188.195 50.3281 188.305C51.0104 188.456 51.5677 188.641 52 188.859C52.4375 189.073 52.7604 189.339 52.9688 189.656C53.1771 189.969 53.2812 190.349 53.2812 190.797C53.2812 191.146 53.2083 191.466 53.0625 191.758C52.9167 192.044 52.7057 192.292 52.4297 192.5C52.1589 192.708 51.8307 192.87 51.4453 192.984C51.0651 193.099 50.638 193.156 50.1641 193.156C49.4505 193.156 48.8464 193.039 48.3516 192.805C47.862 192.565 47.4896 192.253 47.2344 191.867C46.9844 191.477 46.8594 191.062 46.8594 190.625H47.7891C47.8203 191.062 47.9583 191.409 48.2031 191.664C48.4479 191.914 48.7474 192.091 49.1016 192.195C49.4609 192.299 49.8151 192.352 50.1641 192.352C50.6432 192.352 51.0443 192.281 51.3672 192.141C51.6901 192 51.9349 191.815 52.1016 191.586C52.2682 191.357 52.3516 191.109 52.3516 190.844ZM58.5938 184.547V185.312H54.3594V184.547H58.5938ZM55.9141 182.375H56.8438V190.945C56.8438 191.336 56.8958 191.63 57 191.828C57.1042 192.026 57.2396 192.159 57.4062 192.227C57.5729 192.294 57.7526 192.328 57.9453 192.328C58.0859 192.328 58.2214 192.32 58.3516 192.305C58.4818 192.284 58.599 192.263 58.7031 192.242L58.7422 193.031C58.6276 193.068 58.4792 193.096 58.2969 193.117C58.1146 193.143 57.9323 193.156 57.75 193.156C57.3906 193.156 57.0729 193.091 56.7969 192.961C56.5208 192.826 56.3047 192.596 56.1484 192.273C55.9922 191.945 55.9141 191.5 55.9141 190.938V182.375ZM61.5938 184.547V193H60.6641V184.547H61.5938ZM60.5 182.102C60.5 181.924 60.5547 181.776 60.6641 181.656C60.7786 181.531 60.9349 181.469 61.1328 181.469C61.3307 181.469 61.487 181.531 61.6016 181.656C61.7214 181.776 61.7812 181.924 61.7812 182.102C61.7812 182.273 61.7214 182.422 61.6016 182.547C61.487 182.667 61.3307 182.727 61.1328 182.727C60.9349 182.727 60.7786 182.667 60.6641 182.547C60.5547 182.422 60.5 182.273 60.5 182.102ZM63.6328 188.906V188.648C63.6328 188.034 63.7214 187.466 63.8984 186.945C64.0755 186.424 64.3281 185.974 64.6562 185.594C64.9896 185.214 65.388 184.919 65.8516 184.711C66.3151 184.497 66.8307 184.391 67.3984 184.391C67.9714 184.391 68.4896 184.497 68.9531 184.711C69.4167 184.919 69.8151 185.214 70.1484 185.594C70.4818 185.974 70.737 186.424 70.9141 186.945C71.0911 187.466 71.1797 188.034 71.1797 188.648V188.906C71.1797 189.521 71.0911 190.089 70.9141 190.609C70.737 191.125 70.4818 191.573 70.1484 191.953C69.8203 192.333 69.4245 192.63 68.9609 192.844C68.4974 193.052 67.9818 193.156 67.4141 193.156C66.8411 193.156 66.3229 193.052 65.8594 192.844C65.3958 192.63 64.9974 192.333 64.6641 191.953C64.3307 191.573 64.0755 191.125 63.8984 190.609C63.7214 190.089 63.6328 189.521 63.6328 188.906ZM64.5625 188.648V188.906C64.5625 189.37 64.625 189.81 64.75 190.227C64.875 190.638 65.0573 191.005 65.2969 191.328C65.5365 191.646 65.8333 191.896 66.1875 192.078C66.5417 192.26 66.9505 192.352 67.4141 192.352C67.8724 192.352 68.276 192.26 68.625 192.078C68.9792 191.896 69.276 191.646 69.5156 191.328C69.7552 191.005 69.9349 190.638 70.0547 190.227C70.1797 189.81 70.2422 189.37 70.2422 188.906V188.648C70.2422 188.19 70.1797 187.755 70.0547 187.344C69.9349 186.932 69.7526 186.565 69.5078 186.242C69.2682 185.919 68.9714 185.664 68.6172 185.477C68.263 185.289 67.8568 185.195 67.3984 185.195C66.9401 185.195 66.5339 185.289 66.1797 185.477C65.8307 185.664 65.5339 185.919 65.2891 186.242C65.0495 186.565 64.8672 186.932 64.7422 187.344C64.6224 187.755 64.5625 188.19 64.5625 188.648ZM74.0469 186.352V193H73.1172V184.547H74.0078L74.0469 186.352ZM73.8359 188.25L73.4219 188.016C73.4531 187.516 73.5547 187.047 73.7266 186.609C73.8984 186.172 74.1302 185.786 74.4219 185.453C74.7188 185.12 75.0651 184.859 75.4609 184.672C75.862 184.484 76.3047 184.391 76.7891 184.391C77.2109 184.391 77.5885 184.448 77.9219 184.562C78.2552 184.677 78.5391 184.859 78.7734 185.109C79.0078 185.359 79.1849 185.68 79.3047 186.07C79.4297 186.461 79.4922 186.938 79.4922 187.5V193H78.5547V187.492C78.5547 186.909 78.474 186.453 78.3125 186.125C78.151 185.792 77.9219 185.555 77.625 185.414C77.3281 185.273 76.9766 185.203 76.5703 185.203C76.1224 185.203 75.7292 185.302 75.3906 185.5C75.0573 185.693 74.776 185.945 74.5469 186.258C74.3229 186.565 74.151 186.896 74.0312 187.25C73.9115 187.599 73.8464 187.932 73.8359 188.25Z`,
          fill: `white`,
        }),
        (0, k.jsx)(`circle`, {
          cx: `160`,
          cy: `138`,
          r: `29.5`,
          fill: `#78350F`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M144 131.146C144 131.146 145.964 128.33 147.9 127.846C150.3 127.246 150.6 121.846 153.9 122.446C156.809 122.975 157.455 125.548 160.2 126.646C163.2 127.846 161.293 133.332 163.2 137.146C164.7 140.146 163.2 143.746 165.3 145.246C166.717 146.259 166.248 147.584 167.7 148.546C169.244 149.57 171 149.446 172.2 150.946C173.24 152.247 172.8 153.346 174.9 153.346C176.1 153.346 176.7 153.346 176.7 153.346`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`rect`, {
          x: `123`,
          y: `173`,
          width: `73`,
          height: `30`,
          rx: `4`,
          fill: `#78350F`,
        }),
        (0, k.jsx)(`path`, {
          d: `M127.617 181.625V193H126.656V181.625H127.617ZM131.422 186.352V193H130.492V184.547H131.383L131.422 186.352ZM131.211 188.25L130.797 188.016C130.828 187.516 130.93 187.047 131.102 186.609C131.273 186.172 131.505 185.786 131.797 185.453C132.094 185.12 132.44 184.859 132.836 184.672C133.237 184.484 133.68 184.391 134.164 184.391C134.586 184.391 134.964 184.448 135.297 184.562C135.63 184.677 135.914 184.859 136.148 185.109C136.383 185.359 136.56 185.68 136.68 186.07C136.805 186.461 136.867 186.938 136.867 187.5V193H135.93V187.492C135.93 186.909 135.849 186.453 135.688 186.125C135.526 185.792 135.297 185.555 135 185.414C134.703 185.273 134.352 185.203 133.945 185.203C133.497 185.203 133.104 185.302 132.766 185.5C132.432 185.693 132.151 185.945 131.922 186.258C131.698 186.565 131.526 186.896 131.406 187.25C131.286 187.599 131.221 187.932 131.211 188.25ZM142.555 193.156C142.003 193.156 141.495 193.055 141.031 192.852C140.573 192.648 140.172 192.362 139.828 191.992C139.49 191.622 139.227 191.185 139.039 190.68C138.857 190.169 138.766 189.612 138.766 189.008V188.672C138.766 188.021 138.862 187.432 139.055 186.906C139.247 186.38 139.513 185.93 139.852 185.555C140.19 185.18 140.576 184.893 141.008 184.695C141.445 184.492 141.904 184.391 142.383 184.391C142.919 184.391 143.396 184.487 143.812 184.68C144.229 184.867 144.578 185.135 144.859 185.484C145.146 185.828 145.362 186.237 145.508 186.711C145.654 187.18 145.727 187.698 145.727 188.266V188.836H139.328V188.039H144.797V187.93C144.786 187.456 144.69 187.013 144.508 186.602C144.331 186.185 144.065 185.846 143.711 185.586C143.357 185.326 142.914 185.195 142.383 185.195C141.987 185.195 141.622 185.279 141.289 185.445C140.961 185.612 140.677 185.852 140.438 186.164C140.203 186.471 140.021 186.839 139.891 187.266C139.766 187.688 139.703 188.156 139.703 188.672V189.008C139.703 189.477 139.771 189.914 139.906 190.32C140.047 190.721 140.245 191.076 140.5 191.383C140.76 191.69 141.068 191.93 141.422 192.102C141.776 192.273 142.167 192.359 142.594 192.359C143.094 192.359 143.536 192.268 143.922 192.086C144.307 191.898 144.654 191.604 144.961 191.203L145.547 191.656C145.365 191.927 145.135 192.177 144.859 192.406C144.589 192.635 144.263 192.818 143.883 192.953C143.503 193.089 143.06 193.156 142.555 193.156ZM149.172 193H148.242V183.5C148.242 182.922 148.341 182.435 148.539 182.039C148.742 181.643 149.029 181.344 149.398 181.141C149.773 180.938 150.219 180.836 150.734 180.836C150.896 180.836 151.062 180.846 151.234 180.867C151.406 180.883 151.573 180.917 151.734 180.969L151.664 181.758C151.534 181.721 151.401 181.698 151.266 181.688C151.135 181.672 150.982 181.664 150.805 181.664C150.466 181.664 150.174 181.737 149.93 181.883C149.685 182.023 149.497 182.229 149.367 182.5C149.237 182.771 149.172 183.104 149.172 183.5V193ZM151.625 184.547V185.312H146.844V184.547H151.625ZM153.711 193H152.781V183.656C152.781 183.047 152.893 182.534 153.117 182.117C153.341 181.695 153.661 181.378 154.078 181.164C154.5 180.945 155 180.836 155.578 180.836C155.932 180.836 156.289 180.875 156.648 180.953C157.008 181.031 157.37 181.146 157.734 181.297L157.578 182.109C157.307 181.99 157.018 181.891 156.711 181.812C156.409 181.734 156.052 181.695 155.641 181.695C155.005 181.695 154.523 181.862 154.195 182.195C153.872 182.529 153.711 183.016 153.711 183.656V193ZM155.688 184.547V185.312H151.375V184.547H155.688ZM158.242 184.547V193H157.312V184.547H158.242ZM163.938 192.352C164.333 192.352 164.703 192.279 165.047 192.133C165.396 191.982 165.682 191.76 165.906 191.469C166.135 191.172 166.266 190.81 166.297 190.383H167.188C167.161 190.919 166.997 191.398 166.695 191.82C166.398 192.237 166.008 192.565 165.523 192.805C165.044 193.039 164.516 193.156 163.938 193.156C163.349 193.156 162.828 193.049 162.375 192.836C161.927 192.622 161.552 192.326 161.25 191.945C160.948 191.56 160.719 191.112 160.562 190.602C160.411 190.086 160.336 189.531 160.336 188.938V188.609C160.336 188.016 160.411 187.464 160.562 186.953C160.719 186.438 160.948 185.99 161.25 185.609C161.552 185.224 161.927 184.924 162.375 184.711C162.823 184.497 163.341 184.391 163.93 184.391C164.534 184.391 165.076 184.513 165.555 184.758C166.039 185.003 166.424 185.349 166.711 185.797C167.003 186.245 167.161 186.776 167.188 187.391H166.297C166.271 186.938 166.151 186.547 165.938 186.219C165.724 185.891 165.443 185.638 165.094 185.461C164.745 185.284 164.357 185.195 163.93 185.195C163.451 185.195 163.042 185.289 162.703 185.477C162.365 185.659 162.089 185.911 161.875 186.234C161.667 186.552 161.513 186.917 161.414 187.328C161.315 187.734 161.266 188.161 161.266 188.609V188.938C161.266 189.391 161.312 189.823 161.406 190.234C161.505 190.641 161.659 191.003 161.867 191.32C162.081 191.638 162.357 191.891 162.695 192.078C163.039 192.26 163.453 192.352 163.938 192.352ZM174.211 191.484V187.125C174.211 186.724 174.128 186.378 173.961 186.086C173.794 185.794 173.549 185.57 173.227 185.414C172.904 185.258 172.505 185.18 172.031 185.18C171.594 185.18 171.203 185.258 170.859 185.414C170.521 185.565 170.253 185.771 170.055 186.031C169.862 186.286 169.766 186.57 169.766 186.883L168.828 186.875C168.828 186.557 168.906 186.25 169.062 185.953C169.219 185.656 169.44 185.391 169.727 185.156C170.013 184.922 170.354 184.737 170.75 184.602C171.151 184.461 171.591 184.391 172.07 184.391C172.674 184.391 173.206 184.492 173.664 184.695C174.128 184.898 174.49 185.203 174.75 185.609C175.01 186.016 175.141 186.526 175.141 187.141V191.227C175.141 191.518 175.161 191.82 175.203 192.133C175.25 192.445 175.315 192.703 175.398 192.906V193H174.406C174.344 192.812 174.294 192.578 174.258 192.297C174.227 192.01 174.211 191.74 174.211 191.484ZM174.43 188.078L174.445 188.797H172.609C172.13 188.797 171.701 188.841 171.32 188.93C170.945 189.013 170.628 189.138 170.367 189.305C170.107 189.466 169.906 189.661 169.766 189.891C169.63 190.12 169.562 190.38 169.562 190.672C169.562 190.974 169.638 191.25 169.789 191.5C169.945 191.75 170.164 191.951 170.445 192.102C170.732 192.247 171.07 192.32 171.461 192.32C171.982 192.32 172.44 192.224 172.836 192.031C173.237 191.839 173.568 191.586 173.828 191.273C174.089 190.961 174.263 190.62 174.352 190.25L174.758 190.789C174.69 191.049 174.565 191.318 174.383 191.594C174.206 191.865 173.974 192.12 173.688 192.359C173.401 192.594 173.062 192.786 172.672 192.938C172.286 193.083 171.849 193.156 171.359 193.156C170.807 193.156 170.326 193.052 169.914 192.844C169.508 192.635 169.19 192.352 168.961 191.992C168.737 191.628 168.625 191.216 168.625 190.758C168.625 190.341 168.714 189.969 168.891 189.641C169.068 189.307 169.323 189.026 169.656 188.797C169.995 188.562 170.401 188.385 170.875 188.266C171.354 188.141 171.891 188.078 172.484 188.078H174.43ZM180.766 192.352C181.161 192.352 181.531 192.279 181.875 192.133C182.224 191.982 182.51 191.76 182.734 191.469C182.964 191.172 183.094 190.81 183.125 190.383H184.016C183.99 190.919 183.826 191.398 183.523 191.82C183.227 192.237 182.836 192.565 182.352 192.805C181.872 193.039 181.344 193.156 180.766 193.156C180.177 193.156 179.656 193.049 179.203 192.836C178.755 192.622 178.38 192.326 178.078 191.945C177.776 191.56 177.547 191.112 177.391 190.602C177.24 190.086 177.164 189.531 177.164 188.938V188.609C177.164 188.016 177.24 187.464 177.391 186.953C177.547 186.438 177.776 185.99 178.078 185.609C178.38 185.224 178.755 184.924 179.203 184.711C179.651 184.497 180.169 184.391 180.758 184.391C181.362 184.391 181.904 184.513 182.383 184.758C182.867 185.003 183.253 185.349 183.539 185.797C183.831 186.245 183.99 186.776 184.016 187.391H183.125C183.099 186.938 182.979 186.547 182.766 186.219C182.552 185.891 182.271 185.638 181.922 185.461C181.573 185.284 181.185 185.195 180.758 185.195C180.279 185.195 179.87 185.289 179.531 185.477C179.193 185.659 178.917 185.911 178.703 186.234C178.495 186.552 178.341 186.917 178.242 187.328C178.143 187.734 178.094 188.161 178.094 188.609V188.938C178.094 189.391 178.141 189.823 178.234 190.234C178.333 190.641 178.487 191.003 178.695 191.32C178.909 191.638 179.185 191.891 179.523 192.078C179.867 192.26 180.281 192.352 180.766 192.352ZM188.406 192.156L191.039 184.547H192.047L188.469 194.359C188.396 194.552 188.302 194.766 188.188 195C188.078 195.234 187.932 195.458 187.75 195.672C187.573 195.891 187.349 196.068 187.078 196.203C186.812 196.344 186.487 196.414 186.102 196.414C186.003 196.414 185.875 196.401 185.719 196.375C185.568 196.354 185.458 196.333 185.391 196.312L185.383 195.523C185.44 195.539 185.523 195.552 185.633 195.562C185.742 195.573 185.818 195.578 185.859 195.578C186.198 195.578 186.482 195.521 186.711 195.406C186.945 195.292 187.141 195.12 187.297 194.891C187.453 194.667 187.591 194.385 187.711 194.047L188.406 192.156ZM185.945 184.547L188.641 191.805L188.891 192.781L188.211 193.164L184.93 184.547H185.945Z`,
          fill: `white`,
        }),
        (0, k.jsx)(`circle`, {
          cx: `99`,
          cy: `30`,
          r: `29.5`,
          fill: `#7F1D1D`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M90.0134 17.3075C86.327 17.5156 82.3765 20.384 80.1945 21.1531C78.0125 21.9222 76.0887 26.8456 78.558 28.8444C80.6734 30.5568 81.2991 33.1578 82.922 33.972C86.1196 35.5761 89.5055 33.4658 93.5592 34.9975C97.7847 36.594 100.461 32.9245 105.015 32.9464C108.133 32.9615 109.833 34.3531 112.924 33.972C116.281 33.5582 121.998 31.9142 121.107 28.8444C120.289 26.0242 121.925 23.2042 120.289 21.1531C117.293 17.3986 114.521 18.4449 110.197 17.3075C106.531 16.3435 105.287 15 101.742 15C96.0864 15 93.6999 17.0994 90.0134 17.3075Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M107.882 41.0989L110.594 38.8387C111.413 38.1562 112.589 39.0579 112.142 40.0259L111.544 41.3208C111.371 41.696 111.447 42.1391 111.734 42.4358L112.166 42.8818C112.566 43.2943 112.537 43.958 112.103 44.3339L110.042 46.1174C109.16 46.8808 107.907 45.7728 108.557 44.8041L108.786 44.4623C109.092 44.0075 108.974 43.3917 108.523 43.0813L107.955 42.691C107.41 42.3156 107.373 41.523 107.882 41.0989Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M92.5293 39.6V40.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M96.1372 40.2V41.1`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M101.188 39.6V40.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M104.4 38.4V39.3`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M90.3645 42.6V43.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M93.9724 43.8V44.7`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M98.3018 43.2V44.1`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M102.631 43.2V44.1`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M88.2 39.6V40.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M100.466 46.8V47.7`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M96.8586 46.2V47.1`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M82.5 23.4L81 27.3`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M87.5999 20.4L83.3999 31.2`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M92.4 19.2L87.3 32.1`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M97.8001 18L92.1001 32.1`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M102.6 18L96.3 32.7`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M106.8 18.6L101.7 31.2`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M110.7 19.8L106.5 30.3`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M114.6 20.4L110.7 30.9`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M117.6 22.2L114.6 30.9`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M118.8 27.9L117.9 30`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`rect`, {
          x: `63`,
          y: `64`,
          width: `71`,
          height: `30`,
          rx: `4`,
          fill: `#7F1D1D`,
        }),
        (0, k.jsx)(`path`, {
          d: `M74.5312 80.4531H75.4922C75.4141 81.2188 75.2031 81.8802 74.8594 82.4375C74.5156 82.9896 74.0469 83.4141 73.4531 83.7109C72.8594 84.0078 72.1432 84.1562 71.3047 84.1562C70.6589 84.1562 70.0729 84.0339 69.5469 83.7891C69.026 83.5443 68.5781 83.1979 68.2031 82.75C67.8281 82.2969 67.5391 81.7552 67.3359 81.125C67.1328 80.4948 67.0312 79.7943 67.0312 79.0234V77.6016C67.0312 76.8307 67.1328 76.1328 67.3359 75.5078C67.5391 74.8776 67.8307 74.3359 68.2109 73.8828C68.5911 73.4297 69.0469 73.0807 69.5781 72.8359C70.1094 72.5911 70.7083 72.4688 71.375 72.4688C72.1823 72.4688 72.8802 72.6172 73.4688 72.9141C74.0573 73.2057 74.5208 73.6276 74.8594 74.1797C75.2031 74.7318 75.4141 75.3984 75.4922 76.1797H74.5312C74.4583 75.5651 74.2969 75.0443 74.0469 74.6172C73.7969 74.1901 73.4505 73.8646 73.0078 73.6406C72.5703 73.4115 72.026 73.2969 71.375 73.2969C70.8438 73.2969 70.3698 73.3984 69.9531 73.6016C69.5365 73.8047 69.1823 74.0964 68.8906 74.4766C68.599 74.8516 68.375 75.3021 68.2188 75.8281C68.0677 76.3542 67.9922 76.9401 67.9922 77.5859V79.0234C67.9922 79.6484 68.0651 80.224 68.2109 80.75C68.3568 81.276 68.5703 81.7318 68.8516 82.1172C69.138 82.5026 69.487 82.8021 69.8984 83.0156C70.3099 83.2292 70.7786 83.3359 71.3047 83.3359C71.9766 83.3359 72.5365 83.2292 72.9844 83.0156C73.4375 82.7969 73.7891 82.474 74.0391 82.0469C74.2891 81.6198 74.4531 81.0885 74.5312 80.4531ZM80.125 83.1562L82.7578 75.5469H83.7656L80.1875 85.3594C80.1146 85.5521 80.0208 85.7656 79.9062 86C79.7969 86.2344 79.651 86.4583 79.4688 86.6719C79.2917 86.8906 79.0677 87.0677 78.7969 87.2031C78.5312 87.3438 78.2057 87.4141 77.8203 87.4141C77.7214 87.4141 77.5938 87.401 77.4375 87.375C77.2865 87.3542 77.1771 87.3333 77.1094 87.3125L77.1016 86.5234C77.1589 86.5391 77.2422 86.5521 77.3516 86.5625C77.4609 86.5729 77.5365 86.5781 77.5781 86.5781C77.9167 86.5781 78.2005 86.5208 78.4297 86.4062C78.6641 86.2917 78.8594 86.1198 79.0156 85.8906C79.1719 85.6667 79.3099 85.3854 79.4297 85.0469L80.125 83.1562ZM77.6641 75.5469L80.3594 82.8047L80.6094 83.7812L79.9297 84.1641L76.6484 75.5469H77.6641ZM86.1562 77.3516V84H85.2266V75.5469H86.1172L86.1562 77.3516ZM85.9453 79.25L85.5312 79.0156C85.5625 78.5156 85.6641 78.0469 85.8359 77.6094C86.0078 77.1719 86.2396 76.7865 86.5312 76.4531C86.8281 76.1198 87.1745 75.8594 87.5703 75.6719C87.9714 75.4844 88.4141 75.3906 88.8984 75.3906C89.3203 75.3906 89.6979 75.4479 90.0312 75.5625C90.3646 75.6771 90.6484 75.8594 90.8828 76.1094C91.1172 76.3594 91.2943 76.6797 91.4141 77.0703C91.5391 77.4609 91.6016 77.9375 91.6016 78.5V84H90.6641V78.4922C90.6641 77.9089 90.5833 77.4531 90.4219 77.125C90.2604 76.7917 90.0312 76.5547 89.7344 76.4141C89.4375 76.2734 89.0859 76.2031 88.6797 76.2031C88.2318 76.2031 87.8385 76.3021 87.5 76.5C87.1667 76.6927 86.8854 76.9453 86.6562 77.2578C86.4323 77.5651 86.2604 77.8958 86.1406 78.25C86.0208 78.599 85.9557 78.9323 85.9453 79.25ZM95.0625 75.5469V84H94.1328V75.5469H95.0625ZM93.9688 73.1016C93.9688 72.9245 94.0234 72.776 94.1328 72.6562C94.2474 72.5312 94.4036 72.4688 94.6016 72.4688C94.7995 72.4688 94.9557 72.5312 95.0703 72.6562C95.1901 72.776 95.25 72.9245 95.25 73.1016C95.25 73.2734 95.1901 73.4219 95.0703 73.5469C94.9557 73.6667 94.7995 73.7266 94.6016 73.7266C94.4036 73.7266 94.2474 73.6667 94.1328 73.5469C94.0234 73.4219 93.9688 73.2734 93.9688 73.1016ZM100.734 83.3516C101.13 83.3516 101.5 83.2786 101.844 83.1328C102.193 82.9818 102.479 82.7604 102.703 82.4688C102.932 82.1719 103.062 81.8099 103.094 81.3828H103.984C103.958 81.9193 103.794 82.3984 103.492 82.8203C103.195 83.237 102.805 83.5651 102.32 83.8047C101.841 84.0391 101.312 84.1562 100.734 84.1562C100.146 84.1562 99.625 84.0495 99.1719 83.8359C98.724 83.6224 98.349 83.3255 98.0469 82.9453C97.7448 82.5599 97.5156 82.112 97.3594 81.6016C97.2083 81.0859 97.1328 80.5312 97.1328 79.9375V79.6094C97.1328 79.0156 97.2083 78.4635 97.3594 77.9531C97.5156 77.4375 97.7448 76.9896 98.0469 76.6094C98.349 76.224 98.724 75.9245 99.1719 75.7109C99.6198 75.4974 100.138 75.3906 100.727 75.3906C101.331 75.3906 101.872 75.513 102.352 75.7578C102.836 76.0026 103.221 76.349 103.508 76.7969C103.799 77.2448 103.958 77.776 103.984 78.3906H103.094C103.068 77.9375 102.948 77.5469 102.734 77.2188C102.521 76.8906 102.24 76.638 101.891 76.4609C101.542 76.2839 101.154 76.1953 100.727 76.1953C100.247 76.1953 99.8385 76.2891 99.5 76.4766C99.1615 76.6589 98.8854 76.9115 98.6719 77.2344C98.4635 77.5521 98.3099 77.9167 98.2109 78.3281C98.112 78.7344 98.0625 79.1615 98.0625 79.6094V79.9375C98.0625 80.3906 98.1094 80.8229 98.2031 81.2344C98.3021 81.6406 98.4557 82.0026 98.6641 82.3203C98.8776 82.638 99.1536 82.8906 99.4922 83.0781C99.8359 83.2604 100.25 83.3516 100.734 83.3516ZM106.906 75.5469V84H105.977V75.5469H106.906ZM105.812 73.1016C105.812 72.9245 105.867 72.776 105.977 72.6562C106.091 72.5312 106.247 72.4688 106.445 72.4688C106.643 72.4688 106.799 72.5312 106.914 72.6562C107.034 72.776 107.094 72.9245 107.094 73.1016C107.094 73.2734 107.034 73.4219 106.914 73.5469C106.799 73.6667 106.643 73.7266 106.445 73.7266C106.247 73.7266 106.091 73.6667 105.977 73.5469C105.867 73.4219 105.812 73.2734 105.812 73.1016ZM114.523 81.8438C114.523 81.6146 114.466 81.388 114.352 81.1641C114.237 80.9401 114.016 80.7344 113.688 80.5469C113.365 80.3594 112.888 80.2005 112.258 80.0703C111.789 79.9661 111.37 79.849 111 79.7188C110.635 79.5885 110.328 79.4323 110.078 79.25C109.828 79.0677 109.638 78.849 109.508 78.5938C109.378 78.3385 109.312 78.0365 109.312 77.6875C109.312 77.375 109.38 77.0807 109.516 76.8047C109.656 76.5234 109.854 76.2786 110.109 76.0703C110.37 75.8568 110.682 75.6901 111.047 75.5703C111.417 75.4505 111.831 75.3906 112.289 75.3906C112.94 75.3906 113.497 75.5026 113.961 75.7266C114.43 75.9453 114.786 76.2448 115.031 76.625C115.281 77.0052 115.406 77.4349 115.406 77.9141H114.477C114.477 77.6224 114.391 77.3464 114.219 77.0859C114.052 76.8255 113.805 76.612 113.477 76.4453C113.154 76.2786 112.758 76.1953 112.289 76.1953C111.805 76.1953 111.411 76.2682 111.109 76.4141C110.807 76.5599 110.586 76.7448 110.445 76.9688C110.31 77.1927 110.242 77.4245 110.242 77.6641C110.242 77.8516 110.271 78.0234 110.328 78.1797C110.391 78.3307 110.5 78.4714 110.656 78.6016C110.818 78.7318 111.047 78.8542 111.344 78.9688C111.641 79.0833 112.026 79.1953 112.5 79.3047C113.182 79.4557 113.74 79.6406 114.172 79.8594C114.609 80.0729 114.932 80.3385 115.141 80.6562C115.349 80.9688 115.453 81.349 115.453 81.7969C115.453 82.1458 115.38 82.4661 115.234 82.7578C115.089 83.0443 114.878 83.2917 114.602 83.5C114.331 83.7083 114.003 83.8698 113.617 83.9844C113.237 84.099 112.81 84.1562 112.336 84.1562C111.622 84.1562 111.018 84.0391 110.523 83.8047C110.034 83.5651 109.661 83.2526 109.406 82.8672C109.156 82.4766 109.031 82.0625 109.031 81.625H109.961C109.992 82.0625 110.13 82.4089 110.375 82.6641C110.62 82.9141 110.919 83.0911 111.273 83.1953C111.633 83.2995 111.987 83.3516 112.336 83.3516C112.815 83.3516 113.216 83.2812 113.539 83.1406C113.862 83 114.107 82.8151 114.273 82.5859C114.44 82.3568 114.523 82.1094 114.523 81.8438ZM118.453 77.2969V84H117.516V75.5469H118.414L118.453 77.2969ZM118.281 79.25L117.828 79.0156C117.859 78.5156 117.953 78.0469 118.109 77.6094C118.271 77.1719 118.495 76.7865 118.781 76.4531C119.068 76.1198 119.411 75.8594 119.812 75.6719C120.214 75.4844 120.669 75.3906 121.18 75.3906C121.591 75.3906 121.964 75.4479 122.297 75.5625C122.635 75.6719 122.922 75.8464 123.156 76.0859C123.396 76.3203 123.581 76.6276 123.711 77.0078C123.841 77.388 123.906 77.8438 123.906 78.375V84H122.977V78.4062C122.977 77.8438 122.888 77.4036 122.711 77.0859C122.539 76.7682 122.297 76.5417 121.984 76.4062C121.677 76.2708 121.32 76.2031 120.914 76.2031C120.435 76.2031 120.029 76.3021 119.695 76.5C119.367 76.6927 119.099 76.9453 118.891 77.2578C118.688 77.5651 118.536 77.8958 118.438 78.25C118.339 78.599 118.286 78.9323 118.281 79.25ZM123.898 78.5156L123.273 78.5312C123.299 78.1198 123.393 77.7266 123.555 77.3516C123.721 76.9766 123.948 76.6432 124.234 76.3516C124.521 76.0547 124.862 75.8203 125.258 75.6484C125.659 75.4766 126.109 75.3906 126.609 75.3906C127.047 75.3906 127.438 75.4505 127.781 75.5703C128.125 75.6849 128.414 75.8698 128.648 76.125C128.888 76.375 129.07 76.6953 129.195 77.0859C129.32 77.4766 129.383 77.9453 129.383 78.4922V84H128.445V78.4844C128.445 77.8854 128.357 77.4219 128.18 77.0938C128.008 76.7604 127.768 76.5286 127.461 76.3984C127.154 76.2682 126.794 76.2031 126.383 76.2031C125.977 76.2083 125.62 76.2839 125.312 76.4297C125.005 76.5703 124.747 76.7578 124.539 76.9922C124.336 77.2214 124.18 77.4688 124.07 77.7344C123.966 78 123.909 78.2604 123.898 78.5156Z`,
          fill: `white`,
        }),
      ],
    }),
  ci = () =>
    (0, k.jsxs)(`svg`, {
      width: `220`,
      height: `220`,
      viewBox: `0 -10 270 270`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M92.6638 243.305V188.974C92.6638 186.073 91.8118 183.263 90.2698 180.796C83.0662 169.274 61.7113 132.814 55.5768 96.354C47.4671 48.1547 70.4088 0.83564 129.75 1.00043C183.701 1.15025 210.9 48.1455 203.924 96.5184C197.976 137.761 177.721 169.448 169.928 180.386C167.979 183.121 166.837 186.349 166.837 189.697V243.305C166.837 251.421 160.195 258 152.002 258H107.499C99.3056 258 92.6638 251.421 92.6638 243.305Z`,
          stroke: `#164e63`,
          strokeWidth: `12`,
        }),
        (0, k.jsx)(`path`, {
          d: `M117.256 157.008C128.397 142.903 130.666 130.21 130.666 125.744C132.867 126.462 130.666 143.61 141.807 157.016C147.908 164.359 143.518 180.912 132.867 183.815C129.499 184.732 127.28 184.79 123.928 183.815C113.562 180.799 113.34 161.966 117.256 157.008Z`,
          stroke: `#164e63`,
          strokeWidth: `12`,
        }),
        (0, k.jsx)(`path`, {
          d: `M102.277 214.043C115.813 215.938 142.439 216.003 157.729 214.135C158.624 214.026 159.417 214.713 159.417 215.606V219.974C159.417 220.711 158.869 221.335 158.13 221.422C143.53 223.139 116.425 223.351 102.142 221.369C101.668 221.304 101.264 221.012 101.058 220.584C99.8873 218.154 99.685 216.624 100.894 214.653C101.181 214.186 101.73 213.967 102.277 214.043Z`,
          stroke: `#164e63`,
          strokeWidth: `12`,
        }),
        (0, k.jsx)(`path`, {
          d: `M102.584 228.806C116.202 230.925 142.535 230.992 157.698 228.868C158.603 228.741 159.417 229.432 159.417 230.337V234.726C159.417 235.439 158.906 236.049 158.196 236.161C143.837 238.434 116.794 238.555 102.264 236.109C101.724 236.018 101.289 235.635 101.136 235.114C100.548 233.112 100.401 231.688 100.995 229.739C101.198 229.072 101.89 228.698 102.584 228.806Z`,
          stroke: `#164e63`,
          strokeWidth: `12`,
        }),
      ],
    }),
  li = () =>
    (0, k.jsxs)(`svg`, {
      width: `32`,
      height: `36`,
      viewBox: `0 0 260 260`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M92.6638 243.305V188.974C92.6638 186.073 91.8118 183.263 90.2698 180.796C83.0662 169.274 61.7113 132.814 55.5768 96.354C47.4671 48.1547 70.4088 0.83564 129.75 1.00043C183.701 1.15025 210.9 48.1455 203.924 96.5184C197.976 137.761 177.721 169.448 169.928 180.386C167.979 183.121 166.837 186.349 166.837 189.697V243.305C166.837 251.421 160.195 258 152.002 258H107.499C99.3056 258 92.6638 251.421 92.6638 243.305Z`,
          stroke: `white`,
          strokeWidth: `4`,
        }),
        (0, k.jsx)(`path`, {
          d: `M117.256 157.008C128.397 142.903 130.666 130.21 130.666 125.744C132.867 126.462 130.666 143.61 141.807 157.016C147.908 164.359 143.518 180.912 132.867 183.815C129.499 184.732 127.28 184.79 123.928 183.815C113.562 180.799 113.34 161.966 117.256 157.008Z`,
          stroke: `white`,
          strokeWidth: `2`,
          className: `group-hover:fill-amber-200`,
        }),
        (0, k.jsx)(`path`, {
          d: `M102.277 214.043C115.813 215.938 142.439 216.003 157.729 214.135C158.624 214.026 159.417 214.713 159.417 215.606V219.974C159.417 220.711 158.869 221.335 158.13 221.422C143.53 223.139 116.425 223.351 102.142 221.369C101.668 221.304 101.264 221.012 101.058 220.584C99.8873 218.154 99.685 216.624 100.894 214.653C101.181 214.186 101.73 213.967 102.277 214.043Z`,
          stroke: `white`,
          strokeWidth: `2`,
        }),
        (0, k.jsx)(`path`, {
          d: `M102.584 228.806C116.202 230.925 142.535 230.992 157.698 228.868C158.603 228.741 159.417 229.432 159.417 230.337V234.726C159.417 235.439 158.906 236.049 158.196 236.161C143.837 238.434 116.794 238.555 102.264 236.109C101.724 236.018 101.289 235.635 101.136 235.114C100.548 233.112 100.401 231.688 100.995 229.739C101.198 229.072 101.89 228.698 102.584 228.806Z`,
          strokeWidth: `2`,
          stroke: `white`,
        }),
      ],
    }),
  ui = () =>
    (0, k.jsxs)(`svg`, {
      className: `color: white`,
      xmlns: `http://www.w3.org/2000/svg`,
      width: `24`,
      height: `24`,
      fill: `currentColor`,
      viewBox: `0 0 16 16`,
      children: [
        ` `,
        (0, k.jsx)(`path`, {
          d: `M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z`,
          fill: `white`,
        }),
        ` `,
      ],
    }),
  di = () =>
    (0, k.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      className: `h-5 w-5`,
      fill: `currentColor`,
      viewBox: `0 0 24 24`,
      children: (0, k.jsx)(`path`, {
        d: `M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z`,
      }),
    }),
  fi = () =>
    (0, k.jsx)(`svg`, {
      enableBackground: `new 0 0 141.732 141.732`,
      height: `20`,
      viewBox: `0 0 141.732 141.732`,
      width: `20`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, k.jsx)(`path`, {
        fill: `white`,
        d: `M57.217,63.271L20.853,99.637c-4.612,4.608-7.15,10.738-7.15,17.259c0,6.524,2.541,12.653,7.151,17.261   c4.609,4.608,10.74,7.148,17.259,7.15h0.002c6.52,0,12.648-2.54,17.257-7.15L91.738,97.79c7.484-7.484,9.261-18.854,4.573-28.188   l-7.984,7.985c0.992,4.667-0.443,9.568-3.831,12.957l-37.28,37.277l-0.026-0.023c-2.652,2.316-6.001,3.579-9.527,3.579   c-3.768,0-7.295-1.453-9.937-4.092c-2.681-2.68-4.13-6.259-4.093-10.078c0.036-3.476,1.301-6.773,3.584-9.39l-0.021-0.02   l0.511-0.515c0.067-0.071,0.137-0.144,0.206-0.211c0.021-0.021,0.043-0.044,0.064-0.062l0.123-0.125l36.364-36.366   c2.676-2.673,6.23-4.144,10.008-4.144c0.977,0,1.947,0.101,2.899,0.298l7.993-7.995c-3.36-1.676-7.097-2.554-10.889-2.554   C67.957,56.124,61.827,58.663,57.217,63.271 M127.809,24.337c0-6.52-2.541-12.65-7.15-17.258c-4.61-4.613-10.74-7.151-17.261-7.151   c-6.519,0-12.648,2.539-17.257,7.151L49.774,43.442c-7.479,7.478-9.26,18.84-4.585,28.17l7.646-7.646   c-0.877-4.368,0.358-8.964,3.315-12.356l-0.021-0.022l0.502-0.507c0.064-0.067,0.134-0.138,0.201-0.206   c0.021-0.02,0.04-0.04,0.062-0.06l0.126-0.127l36.363-36.364c2.675-2.675,6.231-4.147,10.014-4.147   c3.784,0,7.339,1.472,10.014,4.147c5.522,5.521,5.522,14.51,0,20.027L76.138,71.629l-0.026-0.026   c-2.656,2.317-5.999,3.581-9.526,3.581c-0.951,0-1.891-0.094-2.814-0.278l-7.645,7.645c3.369,1.681,7.107,2.563,10.907,2.563   c6.523,0,12.652-2.539,17.261-7.148l36.365-36.365C125.27,36.988,127.809,30.859,127.809,24.337`,
      }),
    }),
  pi = () =>
    (0, k.jsxs)(`svg`, {
      width: `109`,
      height: `102`,
      viewBox: `0 0 109 102`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M1.20146 24.8148C-2.86582 64.5562 56.0019 101 56.0019 101C56.0019 101 108.397 71.5348 108.397 24.8148C108.397 9.88548 98.487 0.50224 83.5705 1.12142C69.3867 1.71018 56.0018 24.8148 56.0018 24.8148C56.0018 24.8148 42.3911 2.29166 28.1629 1.12142C12.3594 -0.178389 2.81587 9.04037 1.20146 24.8148Z`,
          fill: `#500724`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M26.5881 56.8288H31.6282L36.6683 40.1577L45.5855 70.3983L52.1764 50.6256L57.2165 61.0935L68.8475 31.2406L73.8876 43.647H91.3341`,
          stroke: `#ECFEFF`,
        }),
      ],
    }),
  mi = () =>
    (0, k.jsxs)(`svg`, {
      width: `111`,
      height: `102`,
      viewBox: `0 0 111 102`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M42.4991 81.115C39.9054 91.4897 15.3213 79.9106 6.18738 91.4898C3.56728 94.8113 1 101 1 101H109.503C109.503 101 108.629 94.9338 106.909 91.4898C100.465 78.5858 81.1645 91.7876 71.462 81.115C62.8163 71.6049 78.0596 61.969 81.8367 49.5585C84.8627 39.616 83.6615 22.5199 78.3785 15.4082C73.0955 8.29651 68.5184 3.09403 59.7904 1.57522C47.3121 -0.596163 37.4948 3.39834 29.5306 13.2468C21.379 23.327 23.0175 33.2562 24.7755 46.1002C26.8539 61.2847 45.0928 70.7403 42.4991 81.115Z`,
          fill: `#431407`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M59.9984 13.7545V18.5359C59.9984 19.0882 59.5506 19.5359 58.9984 19.5359H55.3472C54.7949 19.5359 54.3472 19.9837 54.3472 20.5359V24.1871C54.3472 24.7394 54.7949 25.1871 55.3472 25.1871H58.9984C59.5506 25.1871 59.9984 25.6348 59.9984 26.1871V29.8383C59.9984 30.3906 60.4461 30.8383 60.9984 30.8383H65.2147C65.7669 30.8383 66.2147 30.3906 66.2147 29.8383V26.1871C66.2147 25.6348 66.6624 25.1871 67.2147 25.1871H71.431C71.9832 25.1871 72.431 24.7394 72.431 24.1871V20.5359C72.431 19.9837 71.9833 19.5359 71.431 19.5359H67.2147C66.6624 19.5359 66.2147 19.0882 66.2147 18.5359V13.7545C66.2147 13.2022 65.7669 12.7545 65.2147 12.7545H60.9984C60.4461 12.7545 59.9984 13.2022 59.9984 13.7545Z`,
          stroke: `#ECFEFF`,
        }),
      ],
    }),
  hi = () =>
    (0, k.jsxs)(`svg`, {
      width: `98`,
      height: `102`,
      viewBox: `0 0 98 102`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M6.65658 29.7921C15.7843 9.22138 34.7971 -2.48594 56.54 1.92473C71.3464 4.92828 79.5051 12.5955 87.4537 25.8111C96.9017 41.5198 99.9767 56.1231 92.3717 72.86C86.7729 85.1818 79.5984 91.0989 67.43 96.3845C46.3008 105.562 22.9163 101.029 10.1695 82.9936C-1.31541 66.7433 -1.45554 48.074 6.65658 29.7921Z`,
          fill: `#450A0A`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M59.6957 75.6377H77.5363C78.0885 75.6377 78.5363 76.0854 78.5363 76.6377V82.6087C78.5363 83.161 78.0885 83.6087 77.5363 83.6087H59.6957M59.6957 75.6377H20.116C19.5637 75.6377 19.116 76.0854 19.116 76.6377V82.6087C19.116 83.161 19.5637 83.6087 20.116 83.6087H59.6957M59.6957 75.6377V83.6087M61.145 78.5362L62.5942 77.087`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M62.2319 81.4347L65.8551 77.4492`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M65.1304 81.4347L68.7536 77.4492`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M68.7537 81.4347L72.3769 77.4492`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M71.6521 81.4347L75.2753 77.4492`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M74.9131 81.4348L76.7247 79.2609`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M56.4712 70.5047H48.8625M41.2538 70.5047H48.8625M48.8625 70.5047V46.2293M48.8625 46.2293C48.8625 46.2293 38.7184 42.4711 36.906 35.3598C35.5781 30.1496 37.9929 16.5192 37.9929 16.5192M48.8625 46.2293C48.8625 46.2293 59.3698 42.2438 60.819 35.3598C62.2683 28.4758 59.7321 16.5192 59.7321 16.5192M59.7321 16.5192C59.7321 16.5192 53.6082 19.0076 48.8625 19.0554C43.8383 19.106 37.9929 16.5192 37.9929 16.5192M59.7321 16.5192C50.4028 13.28 47.924 13.1569 37.9929 16.5192`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M82.5 79C82.5 79 89.1105 75.7288 89 72C88.9166 69.1851 89.1681 66.599 86.5 67.5C85.0551 67.9879 84.5126 68.971 85 70C85.3014 70.6363 85.849 70.7319 86.5 71C89.755 72.3403 91.5 63.5 91.5 63.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  gi = () =>
    (0, k.jsxs)(`svg`, {
      width: `107`,
      height: `82`,
      viewBox: `0 0 107 82`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      className: `group`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M1.85537 80.0489C0.500289 47.2561 2.32144 45.9887 3.14672 18.217C50.4977 14.2055 58.6258 15.2305 105.598 19.3971C105.627 49.5756 105.936 49.9051 105.598 80.0489C59.9944 81.8287 50.6211 80.9354 1.85537 80.0489Z`,
          fill: `#422006`,
        }),
        (0, k.jsx)(`path`, {
          d: `M36.5 1.9999C35.5073 7.60245 35.9032 10.7313 36.5 15.9455C39.0426 15.8485 38.9113 15.755 41.4668 15.7313C40.9177 12.8351 40.996 10.9731 41.5005 8.29891C49.5725 7.27791 54.566 7.34916 62.6376 8.29891C63.073 11.2319 62.6903 12.8316 62.261 16.0272C63.8896 16.1322 66.1808 16.1656 67.849 16.2965C68.8568 10.4684 68.6908 7.78827 67.849 1.95997C54.2242 0.52847 49.5935 0.774465 36.5 1.9999Z`,
          fill: `#422006`,
        }),
        (0, k.jsx)(`path`, {
          d: `M1.85537 80.0489C0.500289 47.2561 2.32144 45.9887 3.14672 18.217C50.4977 14.2055 58.6258 15.2305 105.598 19.3971C105.627 49.5756 105.936 49.9051 105.598 80.0489C59.9944 81.8287 50.6211 80.9354 1.85537 80.0489Z`,
          stroke: `#ECFEFF`,
          className: ``,
        }),
        (0, k.jsx)(`path`, {
          d: `M36.5 1.9999C35.5073 7.60245 35.9032 10.7313 36.5 15.9455C39.0426 15.8485 38.9113 15.755 41.4668 15.7313C40.9177 12.8351 40.996 10.9731 41.5005 8.29891C49.5725 7.27791 54.566 7.34916 62.6376 8.29891C63.073 11.2319 62.6903 12.8316 62.261 16.0272C63.8896 16.1322 66.1808 16.1656 67.849 16.2965C68.8568 10.4684 68.6908 7.78827 67.849 1.95997C54.2242 0.52847 49.5935 0.774465 36.5 1.9999Z`,
          stroke: `#ECFEFF`,
          className: ``,
        }),
        (0, k.jsx)(`path`, {
          d: `M98.9017 69.651C98.9017 69.651 96.3779 70.5361 95.0491 71.5636C93.9352 72.4248 92.5982 74.2079 92.5982 74.2079`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M99 67.5001C99 67.5001 96.175 68.2048 93.6468 70.0106C91.5274 71.5243 90.4999 73.5 90.4999 73.5`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  _i = () =>
    (0, k.jsxs)(`svg`, {
      width: `98`,
      height: `102`,
      viewBox: `0 0 98 102`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M6.65658 29.7921C15.7843 9.22138 34.7971 -2.48594 56.54 1.92473C71.3464 4.92828 79.5051 12.5955 87.4537 25.8111C96.9017 41.5198 99.9767 56.1231 92.3717 72.86C86.7729 85.1818 79.5984 91.0989 67.43 96.3845C46.3008 105.562 22.9163 101.029 10.1695 82.9936C-1.31541 66.7433 -1.45554 48.074 6.65658 29.7921Z`,
          fill: `#1E1B4B`,
        }),
        (0, k.jsx)(`path`, {
          d: `M77.2992 53.7898C62.5048 52.4786 56.35 33.8555 45.646 40.5431C34.942 47.2306 57.4446 69.2406 57.4446 69.2406C65.5523 66.0604 70.5696 62.4227 77.2992 53.7898Z`,
          fill: `#1E1B4B`,
        }),
        (0, k.jsx)(`path`, {
          d: `M61.0253 32.6245L65.3704 25.711M28.1123 66.6243C35.0183 68.6095 33.132 69.0478 43.3408 70.7791M28.1123 66.6243L20.5729 64.1137C19.0974 65.8281 16.9326 70.9404 17.3826 73.762M28.1123 66.6243C33.9426 59.5936 33.9259 47.5781 39.5 45.0001M43.3408 70.7791L47.4044 71.9153C48.0903 73.9773 47.1865 79.0279 45.7543 82.0114M43.3408 70.7791C45.3811 67.6759 47.1524 65.4607 47.536 62.5M23.7969 35.6639L19.2423 32.8592M31.7145 29.7344L27.7003 22.9136M21.5999 44.4916L17.3681 44.3016M70.4888 38.9018L75.3598 36.9786M77.2992 53.7898C62.5048 52.4786 56.35 33.8555 45.646 40.5431C34.942 47.2306 57.4446 69.2406 57.4446 69.2406M77.2992 53.7898C70.5696 62.4227 65.5523 66.0604 57.4446 69.2406M77.2992 53.7898L78.7817 52.3635C82.8429 53.0242 85.6955 55.9894 87.0556 57.8781M57.4446 69.2406L52.4614 71.3518C51.9755 75.5436 55.6489 80.0295 55.6489 80.0295M56.54 1.92473C34.7971 -2.48594 15.7843 9.22138 6.65658 29.7921C-1.45554 48.074 -1.31541 66.7433 10.1695 82.9936C22.9163 101.029 46.3008 105.562 67.43 96.3845C79.5984 91.0989 86.7729 85.1818 92.3717 72.86C99.9767 56.1231 96.9017 41.5198 87.4537 25.8111C79.5051 12.5955 71.3464 4.92828 56.54 1.92473Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  vi = () =>
    (0, k.jsxs)(`svg`, {
      width: `158`,
      height: `102`,
      viewBox: `0 0 158 102`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M6.65658 29.7921C15.7843 9.22138 34.7971 -2.48594 56.54 1.92473C71.3464 4.92828 79.5051 12.5955 87.4537 25.8111C96.9017 41.5198 99.9767 56.1231 92.3717 72.86C86.7729 85.1818 79.5984 91.0989 67.43 96.3845C46.3008 105.562 22.9163 101.029 10.1695 82.9936C-1.31541 66.7433 -1.45554 48.074 6.65658 29.7921Z`,
          fill: `#111827`,
        }),
        (0, k.jsx)(`path`, {
          d: `M66.6566 29.7921C75.7843 9.22138 94.7971 -2.48594 116.54 1.92473C131.346 4.92828 139.505 12.5955 147.454 25.8111C156.902 41.5198 159.977 56.1231 152.372 72.86C146.773 85.1818 139.598 91.0989 127.43 96.3845C106.301 105.562 82.9163 101.029 70.1695 82.9936C58.6846 66.7433 58.5445 48.074 66.6566 29.7921Z`,
          fill: `#111827`,
        }),
        (0, k.jsx)(`path`, {
          d: `M6.65658 29.7921C15.7843 9.22138 34.7971 -2.48594 56.54 1.92473C71.3464 4.92828 79.5051 12.5955 87.4537 25.8111C96.9017 41.5198 99.9767 56.1231 92.3717 72.86C86.7729 85.1818 79.5984 91.0989 67.43 96.3845C46.3008 105.562 22.9163 101.029 10.1695 82.9936C-1.31541 66.7433 -1.45554 48.074 6.65658 29.7921Z`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M66.6566 29.7921C75.7843 9.22138 94.7971 -2.48594 116.54 1.92473C131.346 4.92828 139.505 12.5955 147.454 25.8111C156.902 41.5198 159.977 56.1231 152.372 72.86C146.773 85.1818 139.598 91.0989 127.43 96.3845C106.301 105.562 82.9163 101.029 70.1695 82.9936C58.6846 66.7433 58.5445 48.074 66.6566 29.7921Z`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M30.8279 30.3188C32.1639 27.2332 34.9467 25.4771 38.129 26.1387C40.2961 26.5892 41.4903 27.7393 42.6537 29.7217C44.0365 32.078 44.4866 34.2685 43.3735 36.779C42.554 38.6273 41.5039 39.5148 39.7229 40.3077C38.8277 40.7062 37.9048 40.9324 37 40.987C34.7793 41.121 32.6677 40.2212 31.3421 38.299C29.6611 35.8615 29.6406 33.0611 30.8279 30.3188Z`,
          fill: `#111827`,
        }),
        (0, k.jsx)(`path`, {
          d: `M37 40.987C34.7793 41.121 32.6677 40.2212 31.3421 38.299C29.6611 35.8615 29.6406 33.0611 30.8279 30.3188C32.1639 27.2332 34.9467 25.4771 38.129 26.1387C40.2961 26.5892 41.4903 27.7393 42.6537 29.7217C44.0365 32.078 44.4866 34.2685 43.3735 36.779C42.554 38.6273 41.5039 39.5148 39.7229 40.3077C38.8277 40.7062 37.9048 40.9324 37 40.987ZM37 40.987V50.5M37 65.5L27.5 74M37 65.5L43.3735 74M37 65.5V50.5M37 50.5L48 53M37 50.5L26 53`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M109.135 61.9664C108.759 52.856 109.265 52.504 109.494 44.7885C122.649 43.6741 124.907 43.9588 137.956 45.1164C137.964 53.5005 138.05 53.592 137.956 61.9664C125.287 62.4609 122.683 62.2127 109.135 61.9664Z`,
          fill: `#111827`,
        }),
        (0, k.jsx)(`path`, {
          d: `M118.76 40.2831C118.484 41.8396 118.594 42.7089 118.76 44.1575C119.466 44.1305 119.43 44.1045 120.14 44.098C119.987 43.2934 120.009 42.776 120.149 42.0331C122.392 41.7495 123.779 41.7693 126.021 42.0331C126.142 42.8479 126.036 43.2924 125.917 44.1802C126.369 44.2093 127.006 44.2186 127.469 44.255C127.749 42.6358 127.703 41.8913 127.469 40.2721C123.684 39.8744 122.398 39.9427 118.76 40.2831Z`,
          fill: `#111827`,
        }),
        (0, k.jsx)(`path`, {
          d: `M109.135 61.9664C108.759 52.856 109.265 52.504 109.494 44.7885C122.649 43.6741 124.907 43.9588 137.956 45.1164C137.964 53.5005 138.05 53.592 137.956 61.9664C125.287 62.4609 122.683 62.2127 109.135 61.9664Z`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M118.76 40.2831C118.484 41.8396 118.594 42.7089 118.76 44.1575C119.466 44.1305 119.43 44.1045 120.14 44.098C119.987 43.2934 120.009 42.776 120.149 42.0331C122.392 41.7495 123.779 41.7693 126.021 42.0331C126.142 42.8479 126.036 43.2924 125.917 44.1802C126.369 44.2093 127.006 44.2186 127.469 44.255C127.749 42.6358 127.703 41.8913 127.469 40.2721C123.684 39.8744 122.398 39.9427 118.76 40.2831Z`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M136.096 59.0778C136.096 59.0778 135.395 59.3237 135.026 59.6092C134.716 59.8484 134.345 60.3438 134.345 60.3438`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M136.123 58.4801C136.123 58.4801 135.339 58.6759 134.636 59.1776C134.047 59.5981 133.762 60.147 133.762 60.147`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  yi = () =>
    (0, k.jsxs)(`svg`, {
      width: `271`,
      height: `312`,
      viewBox: `0 0 271 312`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M160.5 30C160.5 46.2924 147.292 59.5 131 59.5C114.708 59.5 101.5 46.2924 101.5 30C101.5 13.7076 114.708 0.5 131 0.5C147.292 0.5 160.5 13.7076 160.5 30Z`,
          fill: `#115E59`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M127.4 33.3L127.482 32.8069L127.4 33.3ZM134.05 34.3353L134.357 33.9407L134.357 33.9407L134.05 34.3353ZM137.375 39.8563L136.884 39.7617L137.375 39.8563ZM130.392 43.307L130.438 42.8091L130.392 43.307ZM124.74 39.8563L124.5 40.2949L124.74 39.8563ZM110.354 32.9465C110.158 32.7512 109.842 32.7512 109.646 32.9465C109.451 33.1418 109.451 33.4583 109.646 33.6536L110.354 32.9465ZM114.5 33.7804L114.652 33.3041L114.061 33.1155L114.002 33.7331L114.5 33.7804ZM114.2 34.5V35H114.293L114.38 34.9664L114.2 34.5ZM127.318 33.7932C128.844 34.0481 130.107 33.9287 131.1 33.9371C132.1 33.9455 132.898 34.0721 133.743 34.7298L134.357 33.9407C133.265 33.0912 132.213 32.9464 131.109 32.9371C129.998 32.9278 128.905 33.0445 127.482 32.8069L127.318 33.7932ZM133.743 34.7298C134.423 35.2595 135.329 35.9322 136.013 36.792C136.688 37.6405 137.104 38.6168 136.884 39.7617L137.866 39.9509C138.16 38.4202 137.579 37.1535 136.795 36.1692C136.021 35.1962 135.006 34.4462 134.357 33.9407L133.743 34.7298ZM136.884 39.7617C136.627 41.0959 135.778 41.9078 134.606 42.3718C133.411 42.8445 131.901 42.942 130.438 42.8091L130.347 43.805C131.892 43.9453 133.577 43.8542 134.974 43.3016C136.392 42.7404 137.53 41.6903 137.866 39.9509L136.884 39.7617ZM130.438 42.8091C129.308 42.7064 128.556 42.2256 127.78 41.5763C127.016 40.9374 126.17 40.0692 124.98 39.4177L124.5 40.2949C125.575 40.8834 126.28 41.6247 127.138 42.3432C127.984 43.0513 128.926 43.6758 130.347 43.805L130.438 42.8091ZM116.945 27.6722C118.555 28.6278 120.19 29.9586 121.948 31.1907C123.665 32.3942 125.481 33.4865 127.318 33.7932L127.482 32.8069C125.887 32.5405 124.232 31.5706 122.522 30.3718C120.852 29.2018 119.103 27.7902 117.455 26.8122L116.945 27.6722ZM124.98 39.4177C123.379 38.5413 121.742 37.3313 120.005 36.1587C118.291 35.0016 116.494 33.8919 114.652 33.3041L114.348 34.2567C116.043 34.7974 117.737 35.8343 119.445 36.9875C121.13 38.125 122.845 39.3887 124.5 40.2949L124.98 39.4177ZM114.042 33.9806C114.049 33.9966 114.05 34.0066 114.05 34.0104C114.05 34.0125 114.05 34.0138 114.05 34.0143C114.05 34.0145 114.049 34.0147 114.049 34.0148C114.049 34.0149 114.049 34.0149 114.049 34.0149C114.049 34.0149 114.049 34.015 114.049 34.0151C114.049 34.0151 114.049 34.0153 114.049 34.0155C114.049 34.0159 114.048 34.0169 114.046 34.0184C114.044 34.021 114.036 34.0274 114.02 34.0337L114.38 34.9664C114.946 34.7476 115.201 34.1358 114.958 33.5802L114.042 33.9806ZM114.2 34C114.116 34 113.853 33.9586 113.442 33.8668C113.054 33.78 112.585 33.6604 112.122 33.5311C111.66 33.4015 111.211 33.2641 110.864 33.1423C110.689 33.0811 110.548 33.0264 110.445 32.9807C110.393 32.9578 110.358 32.9401 110.336 32.9277C110.307 32.9112 110.324 32.9167 110.354 32.9465L109.646 33.6536C109.714 33.7209 109.792 33.7686 109.844 33.7982C109.904 33.832 109.971 33.8643 110.039 33.8947C110.177 33.9558 110.347 34.0206 110.533 34.0859C110.908 34.2173 111.378 34.3611 111.853 34.494C112.328 34.6271 112.815 34.7513 113.224 34.8427C113.61 34.9289 113.985 35 114.2 35V34ZM114.002 33.7331C113.985 33.9175 113.972 33.9575 113.963 33.9791C113.954 34.0007 113.935 34.0376 113.816 34.1798L114.584 34.8202C114.7 34.6814 114.813 34.5407 114.886 34.3638C114.96 34.1868 114.981 34.0076 114.998 33.8277L114.002 33.7331Z`,
          fill: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M131.3 33.3C131.3 33.3 132.753 32.4928 133.7 32.1C134.911 31.5976 135.595 31.8015 136.723 31.125C139.1 29.7 140.544 27.6531 142.954 26.0625C145.581 24.3285 145.7 23.7 145.7 23.7`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M149 28.8C149 28.8 144.274 31.413 140.9 34.2C139.722 35.1736 137.6 38.7 137.6 38.7`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M114.5 33.5999C113.954 31.1157 114.784 30.2791 116.9 27.2999C116.9 27.2999 117.734 26.7514 117.5 26.3999C116.9 25.4999 113.3 23.3999 113.3 23.3999`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M148.4 19.5C148.4 19.5 144.5 20.5584 144.5 21.9C144.5 23.1 146.68 24.1489 147.8 25.8C148.918 27.4483 149 30.3 150.2 30.3C152 30.3 154.7 28.5 154.7 28.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`rect`, {
          x: `87`,
          y: `68`,
          width: `88`,
          height: `30`,
          rx: `4`,
          fill: `#115E59`,
        }),
        (0, k.jsx)(`path`, {
          d: `M98.5312 84.4531H99.4922C99.4141 85.2188 99.2031 85.8802 98.8594 86.4375C98.5156 86.9896 98.0469 87.4141 97.4531 87.7109C96.8594 88.0078 96.1432 88.1562 95.3047 88.1562C94.6589 88.1562 94.0729 88.0339 93.5469 87.7891C93.026 87.5443 92.5781 87.1979 92.2031 86.75C91.8281 86.2969 91.5391 85.7552 91.3359 85.125C91.1328 84.4948 91.0312 83.7943 91.0312 83.0234V81.6016C91.0312 80.8307 91.1328 80.1328 91.3359 79.5078C91.5391 78.8776 91.8307 78.3359 92.2109 77.8828C92.5911 77.4297 93.0469 77.0807 93.5781 76.8359C94.1094 76.5911 94.7083 76.4688 95.375 76.4688C96.1823 76.4688 96.8802 76.6172 97.4688 76.9141C98.0573 77.2057 98.5208 77.6276 98.8594 78.1797C99.2031 78.7318 99.4141 79.3984 99.4922 80.1797H98.5312C98.4583 79.5651 98.2969 79.0443 98.0469 78.6172C97.7969 78.1901 97.4505 77.8646 97.0078 77.6406C96.5703 77.4115 96.026 77.2969 95.375 77.2969C94.8438 77.2969 94.3698 77.3984 93.9531 77.6016C93.5365 77.8047 93.1823 78.0964 92.8906 78.4766C92.599 78.8516 92.375 79.3021 92.2188 79.8281C92.0677 80.3542 91.9922 80.9401 91.9922 81.5859V83.0234C91.9922 83.6484 92.0651 84.224 92.2109 84.75C92.3568 85.276 92.5703 85.7318 92.8516 86.1172C93.138 86.5026 93.487 86.8021 93.8984 87.0156C94.3099 87.2292 94.7786 87.3359 95.3047 87.3359C95.9766 87.3359 96.5365 87.2292 96.9844 87.0156C97.4375 86.7969 97.7891 86.474 98.0391 86.0469C98.2891 85.6198 98.4531 85.0885 98.5312 84.4531ZM101.102 83.9062V83.6484C101.102 83.0339 101.19 82.4661 101.367 81.9453C101.544 81.4245 101.797 80.974 102.125 80.5938C102.458 80.2135 102.857 79.9193 103.32 79.7109C103.784 79.4974 104.299 79.3906 104.867 79.3906C105.44 79.3906 105.958 79.4974 106.422 79.7109C106.885 79.9193 107.284 80.2135 107.617 80.5938C107.951 80.974 108.206 81.4245 108.383 81.9453C108.56 82.4661 108.648 83.0339 108.648 83.6484V83.9062C108.648 84.5208 108.56 85.0885 108.383 85.6094C108.206 86.125 107.951 86.5729 107.617 86.9531C107.289 87.3333 106.893 87.6302 106.43 87.8438C105.966 88.0521 105.451 88.1562 104.883 88.1562C104.31 88.1562 103.792 88.0521 103.328 87.8438C102.865 87.6302 102.466 87.3333 102.133 86.9531C101.799 86.5729 101.544 86.125 101.367 85.6094C101.19 85.0885 101.102 84.5208 101.102 83.9062ZM102.031 83.6484V83.9062C102.031 84.3698 102.094 84.8099 102.219 85.2266C102.344 85.638 102.526 86.0052 102.766 86.3281C103.005 86.6458 103.302 86.8958 103.656 87.0781C104.01 87.2604 104.419 87.3516 104.883 87.3516C105.341 87.3516 105.745 87.2604 106.094 87.0781C106.448 86.8958 106.745 86.6458 106.984 86.3281C107.224 86.0052 107.404 85.638 107.523 85.2266C107.648 84.8099 107.711 84.3698 107.711 83.9062V83.6484C107.711 83.1901 107.648 82.7552 107.523 82.3438C107.404 81.9323 107.221 81.5651 106.977 81.2422C106.737 80.9193 106.44 80.6641 106.086 80.4766C105.732 80.2891 105.326 80.1953 104.867 80.1953C104.409 80.1953 104.003 80.2891 103.648 80.4766C103.299 80.6641 103.003 80.9193 102.758 81.2422C102.518 81.5651 102.336 81.9323 102.211 82.3438C102.091 82.7552 102.031 83.1901 102.031 83.6484ZM111.469 81.2969V88H110.531V79.5469H111.43L111.469 81.2969ZM111.297 83.25L110.844 83.0156C110.875 82.5156 110.969 82.0469 111.125 81.6094C111.286 81.1719 111.51 80.7865 111.797 80.4531C112.083 80.1198 112.427 79.8594 112.828 79.6719C113.229 79.4844 113.685 79.3906 114.195 79.3906C114.607 79.3906 114.979 79.4479 115.312 79.5625C115.651 79.6719 115.938 79.8464 116.172 80.0859C116.411 80.3203 116.596 80.6276 116.727 81.0078C116.857 81.388 116.922 81.8438 116.922 82.375V88H115.992V82.4062C115.992 81.8438 115.904 81.4036 115.727 81.0859C115.555 80.7682 115.312 80.5417 115 80.4062C114.693 80.2708 114.336 80.2031 113.93 80.2031C113.451 80.2031 113.044 80.3021 112.711 80.5C112.383 80.6927 112.115 80.9453 111.906 81.2578C111.703 81.5651 111.552 81.8958 111.453 82.25C111.354 82.599 111.302 82.9323 111.297 83.25ZM116.914 82.5156L116.289 82.5312C116.315 82.1198 116.409 81.7266 116.57 81.3516C116.737 80.9766 116.964 80.6432 117.25 80.3516C117.536 80.0547 117.878 79.8203 118.273 79.6484C118.674 79.4766 119.125 79.3906 119.625 79.3906C120.062 79.3906 120.453 79.4505 120.797 79.5703C121.141 79.6849 121.43 79.8698 121.664 80.125C121.904 80.375 122.086 80.6953 122.211 81.0859C122.336 81.4766 122.398 81.9453 122.398 82.4922V88H121.461V82.4844C121.461 81.8854 121.372 81.4219 121.195 81.0938C121.023 80.7604 120.784 80.5286 120.477 80.3984C120.169 80.2682 119.81 80.2031 119.398 80.2031C118.992 80.2083 118.635 80.2839 118.328 80.4297C118.021 80.5703 117.763 80.7578 117.555 80.9922C117.352 81.2214 117.195 81.4688 117.086 81.7344C116.982 82 116.924 82.2604 116.914 82.5156ZM125.656 81.2969V88H124.719V79.5469H125.617L125.656 81.2969ZM125.484 83.25L125.031 83.0156C125.062 82.5156 125.156 82.0469 125.312 81.6094C125.474 81.1719 125.698 80.7865 125.984 80.4531C126.271 80.1198 126.615 79.8594 127.016 79.6719C127.417 79.4844 127.872 79.3906 128.383 79.3906C128.794 79.3906 129.167 79.4479 129.5 79.5625C129.839 79.6719 130.125 79.8464 130.359 80.0859C130.599 80.3203 130.784 80.6276 130.914 81.0078C131.044 81.388 131.109 81.8438 131.109 82.375V88H130.18V82.4062C130.18 81.8438 130.091 81.4036 129.914 81.0859C129.742 80.7682 129.5 80.5417 129.188 80.4062C128.88 80.2708 128.523 80.2031 128.117 80.2031C127.638 80.2031 127.232 80.3021 126.898 80.5C126.57 80.6927 126.302 80.9453 126.094 81.2578C125.891 81.5651 125.74 81.8958 125.641 82.25C125.542 82.599 125.49 82.9323 125.484 83.25ZM131.102 82.5156L130.477 82.5312C130.503 82.1198 130.596 81.7266 130.758 81.3516C130.924 80.9766 131.151 80.6432 131.438 80.3516C131.724 80.0547 132.065 79.8203 132.461 79.6484C132.862 79.4766 133.312 79.3906 133.812 79.3906C134.25 79.3906 134.641 79.4505 134.984 79.5703C135.328 79.6849 135.617 79.8698 135.852 80.125C136.091 80.375 136.273 80.6953 136.398 81.0859C136.523 81.4766 136.586 81.9453 136.586 82.4922V88H135.648V82.4844C135.648 81.8854 135.56 81.4219 135.383 81.0938C135.211 80.7604 134.971 80.5286 134.664 80.3984C134.357 80.2682 133.997 80.2031 133.586 80.2031C133.18 80.2083 132.823 80.2839 132.516 80.4297C132.208 80.5703 131.951 80.7578 131.742 80.9922C131.539 81.2214 131.383 81.4688 131.273 81.7344C131.169 82 131.112 82.2604 131.102 82.5156ZM144.375 86.0469V79.5469H145.312V88H144.414L144.375 86.0469ZM144.547 84.4844L145.031 84.4688C145.031 85 144.969 85.4896 144.844 85.9375C144.719 86.3854 144.523 86.776 144.258 87.1094C143.992 87.4427 143.648 87.7005 143.227 87.8828C142.805 88.0651 142.297 88.1562 141.703 88.1562C141.292 88.1562 140.914 88.099 140.57 87.9844C140.232 87.8646 139.94 87.6771 139.695 87.4219C139.451 87.1667 139.26 86.8359 139.125 86.4297C138.995 86.0234 138.93 85.5312 138.93 84.9531V79.5469H139.859V84.9688C139.859 85.4219 139.909 85.7995 140.008 86.1016C140.112 86.4036 140.253 86.6458 140.43 86.8281C140.612 87.0104 140.82 87.1406 141.055 87.2188C141.289 87.2969 141.542 87.3359 141.812 87.3359C142.5 87.3359 143.042 87.2031 143.438 86.9375C143.839 86.6719 144.122 86.3229 144.289 85.8906C144.461 85.4531 144.547 84.9844 144.547 84.4844ZM148.688 81.3516V88H147.758V79.5469H148.648L148.688 81.3516ZM148.477 83.25L148.062 83.0156C148.094 82.5156 148.195 82.0469 148.367 81.6094C148.539 81.1719 148.771 80.7865 149.062 80.4531C149.359 80.1198 149.706 79.8594 150.102 79.6719C150.503 79.4844 150.945 79.3906 151.43 79.3906C151.852 79.3906 152.229 79.4479 152.562 79.5625C152.896 79.6771 153.18 79.8594 153.414 80.1094C153.648 80.3594 153.826 80.6797 153.945 81.0703C154.07 81.4609 154.133 81.9375 154.133 82.5V88H153.195V82.4922C153.195 81.9089 153.115 81.4531 152.953 81.125C152.792 80.7917 152.562 80.5547 152.266 80.4141C151.969 80.2734 151.617 80.2031 151.211 80.2031C150.763 80.2031 150.37 80.3021 150.031 80.5C149.698 80.6927 149.417 80.9453 149.188 81.2578C148.964 81.5651 148.792 81.8958 148.672 82.25C148.552 82.599 148.487 82.9323 148.477 83.25ZM157.594 79.5469V88H156.664V79.5469H157.594ZM156.5 77.1016C156.5 76.9245 156.555 76.776 156.664 76.6562C156.779 76.5312 156.935 76.4688 157.133 76.4688C157.331 76.4688 157.487 76.5312 157.602 76.6562C157.721 76.776 157.781 76.9245 157.781 77.1016C157.781 77.2734 157.721 77.4219 157.602 77.5469C157.487 77.6667 157.331 77.7266 157.133 77.7266C156.935 77.7266 156.779 77.6667 156.664 77.5469C156.555 77.4219 156.5 77.2734 156.5 77.1016ZM163.344 79.5469V80.3125H159.109V79.5469H163.344ZM160.664 77.375H161.594V85.9453C161.594 86.3359 161.646 86.6302 161.75 86.8281C161.854 87.026 161.99 87.1589 162.156 87.2266C162.323 87.2943 162.503 87.3281 162.695 87.3281C162.836 87.3281 162.971 87.3203 163.102 87.3047C163.232 87.2839 163.349 87.263 163.453 87.2422L163.492 88.0312C163.378 88.0677 163.229 88.0964 163.047 88.1172C162.865 88.1432 162.682 88.1562 162.5 88.1562C162.141 88.1562 161.823 88.0911 161.547 87.9609C161.271 87.8255 161.055 87.5964 160.898 87.2734C160.742 86.9453 160.664 86.5 160.664 85.9375V77.375ZM167.812 87.1562L170.445 79.5469H171.453L167.875 89.3594C167.802 89.5521 167.708 89.7656 167.594 90C167.484 90.2344 167.339 90.4583 167.156 90.6719C166.979 90.8906 166.755 91.0677 166.484 91.2031C166.219 91.3438 165.893 91.4141 165.508 91.4141C165.409 91.4141 165.281 91.401 165.125 91.375C164.974 91.3542 164.865 91.3333 164.797 91.3125L164.789 90.5234C164.846 90.5391 164.93 90.5521 165.039 90.5625C165.148 90.5729 165.224 90.5781 165.266 90.5781C165.604 90.5781 165.888 90.5208 166.117 90.4062C166.352 90.2917 166.547 90.1198 166.703 89.8906C166.859 89.6667 166.997 89.3854 167.117 89.0469L167.812 87.1562ZM165.352 79.5469L168.047 86.8047L168.297 87.7812L167.617 88.1641L164.336 79.5469H165.352Z`,
          fill: `white`,
        }),
        (0, k.jsx)(`circle`, {
          cx: `235`,
          cy: `212`,
          r: `29.5`,
          fill: `#115E59`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M236.36 209.6C236.497 208.329 236.36 206.676 236.36 205.153C236.36 202.135 236.046 197.388 236.046 197.388M236.36 209.6C236.07 212.295 236.046 216.8 236.046 216.8H234.934C234.934 216.8 235.133 208.668 235.133 206.6C235.133 203.3 235.133 203 235.133 203M236.36 209.6C237.723 209.595 240.144 208.806 241.3 208.1C242.457 207.394 243.7 205.153 243.7 205.153C243.7 205.153 241.07 203.669 239.2 204.8C237.367 205.909 237.28 207.8 236.36 209.6ZM236.046 197.388C236.046 197.388 237.149 196.451 236.788 194.918C236.471 193.573 234.934 192.8 234.934 192.8C234.934 192.8 234.583 194.093 234.563 195.271C234.543 196.448 236.046 197.388 236.046 197.388ZM236.046 197.388L235.133 203M235.133 203C235.133 203 234.543 199.567 233.2 198.8C231.586 197.878 229.6 198.5 229.6 198.5C229.6 198.5 230.195 200.918 231.7 201.8C233.079 202.608 235.133 203 235.133 203Z`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M223.125 225.212C223.125 225.212 225.664 223.43 227.472 222.652C231.283 221.011 233.632 221.92 237.98 221.188C239.067 221.005 240.192 221.844 240.154 222.652C240.116 223.459 239.119 223.553 238.342 223.749C236.893 224.115 233.919 223.737 231.458 225.212C230.336 225.885 228.922 227.407 228.922 227.407C228.922 227.407 230.317 228.139 231.458 228.139C233.994 228.139 236.005 227.7 238.705 226.676C239.745 226.281 241.3 225.5 241.3 225.5C241.3 225.5 243.902 223.354 245.351 222.988C245.9 222.85 246.348 222.645 246.8 222.988C247.516 223.53 246.076 225.183 246.076 225.183C246.076 225.183 243.519 227.225 240.878 228.871C237.833 230.769 235.762 231.767 232.183 231.797C230.322 231.813 228.941 231.769 227.11 231.432C225.117 231.064 222.4 229.968 222.4 229.968`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M229 221.832C229 221.832 229.276 220.075 230.071 219.256C231.857 217.415 235.429 217.415 235.429 217.415C235.429 217.415 239.92 217.182 242.2 218.6C244.034 219.741 244.9 222.8 244.9 222.8`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M238.3 208.1C239.421 206.676 239.935 206.1 241.9 205.7`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M231.4 199.7C232.567 200.004 232.77 200.43 233.5 201.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M235.6 194.9C235.836 195.239 235.901 195.437 235.9 195.8`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`rect`, {
          x: `208`,
          y: `249`,
          width: `54`,
          height: `30`,
          rx: `4`,
          fill: `#115E59`,
        }),
        (0, k.jsx)(`path`, {
          d: `M216 267.586L219.586 257.625H220.633L216.398 269H215.625L216 267.586ZM212.297 257.625L215.867 267.586L216.258 269H215.477L211.25 257.625H212.297ZM226.883 267.484V263.125C226.883 262.724 226.799 262.378 226.633 262.086C226.466 261.794 226.221 261.57 225.898 261.414C225.576 261.258 225.177 261.18 224.703 261.18C224.266 261.18 223.875 261.258 223.531 261.414C223.193 261.565 222.924 261.771 222.727 262.031C222.534 262.286 222.438 262.57 222.438 262.883L221.5 262.875C221.5 262.557 221.578 262.25 221.734 261.953C221.891 261.656 222.112 261.391 222.398 261.156C222.685 260.922 223.026 260.737 223.422 260.602C223.823 260.461 224.263 260.391 224.742 260.391C225.346 260.391 225.878 260.492 226.336 260.695C226.799 260.898 227.161 261.203 227.422 261.609C227.682 262.016 227.812 262.526 227.812 263.141V267.227C227.812 267.518 227.833 267.82 227.875 268.133C227.922 268.445 227.987 268.703 228.07 268.906V269H227.078C227.016 268.812 226.966 268.578 226.93 268.297C226.898 268.01 226.883 267.74 226.883 267.484ZM227.102 264.078L227.117 264.797H225.281C224.802 264.797 224.372 264.841 223.992 264.93C223.617 265.013 223.299 265.138 223.039 265.305C222.779 265.466 222.578 265.661 222.438 265.891C222.302 266.12 222.234 266.38 222.234 266.672C222.234 266.974 222.31 267.25 222.461 267.5C222.617 267.75 222.836 267.951 223.117 268.102C223.404 268.247 223.742 268.32 224.133 268.32C224.654 268.32 225.112 268.224 225.508 268.031C225.909 267.839 226.24 267.586 226.5 267.273C226.76 266.961 226.935 266.62 227.023 266.25L227.43 266.789C227.362 267.049 227.237 267.318 227.055 267.594C226.878 267.865 226.646 268.12 226.359 268.359C226.073 268.594 225.734 268.786 225.344 268.938C224.958 269.083 224.521 269.156 224.031 269.156C223.479 269.156 222.997 269.052 222.586 268.844C222.18 268.635 221.862 268.352 221.633 267.992C221.409 267.628 221.297 267.216 221.297 266.758C221.297 266.341 221.385 265.969 221.562 265.641C221.74 265.307 221.995 265.026 222.328 264.797C222.667 264.562 223.073 264.385 223.547 264.266C224.026 264.141 224.562 264.078 225.156 264.078H227.102ZM231.359 257V269H230.43V257H231.359ZM239.328 267.047V260.547H240.266V269H239.367L239.328 267.047ZM239.5 265.484L239.984 265.469C239.984 266 239.922 266.49 239.797 266.938C239.672 267.385 239.477 267.776 239.211 268.109C238.945 268.443 238.602 268.701 238.18 268.883C237.758 269.065 237.25 269.156 236.656 269.156C236.245 269.156 235.867 269.099 235.523 268.984C235.185 268.865 234.893 268.677 234.648 268.422C234.404 268.167 234.214 267.836 234.078 267.43C233.948 267.023 233.883 266.531 233.883 265.953V260.547H234.812V265.969C234.812 266.422 234.862 266.799 234.961 267.102C235.065 267.404 235.206 267.646 235.383 267.828C235.565 268.01 235.773 268.141 236.008 268.219C236.242 268.297 236.495 268.336 236.766 268.336C237.453 268.336 237.995 268.203 238.391 267.938C238.792 267.672 239.076 267.323 239.242 266.891C239.414 266.453 239.5 265.984 239.5 265.484ZM245.977 269.156C245.424 269.156 244.917 269.055 244.453 268.852C243.995 268.648 243.594 268.362 243.25 267.992C242.911 267.622 242.648 267.185 242.461 266.68C242.279 266.169 242.188 265.612 242.188 265.008V264.672C242.188 264.021 242.284 263.432 242.477 262.906C242.669 262.38 242.935 261.93 243.273 261.555C243.612 261.18 243.997 260.893 244.43 260.695C244.867 260.492 245.326 260.391 245.805 260.391C246.341 260.391 246.818 260.487 247.234 260.68C247.651 260.867 248 261.135 248.281 261.484C248.568 261.828 248.784 262.237 248.93 262.711C249.076 263.18 249.148 263.698 249.148 264.266V264.836H242.75V264.039H248.219V263.93C248.208 263.456 248.112 263.013 247.93 262.602C247.753 262.185 247.487 261.846 247.133 261.586C246.779 261.326 246.336 261.195 245.805 261.195C245.409 261.195 245.044 261.279 244.711 261.445C244.383 261.612 244.099 261.852 243.859 262.164C243.625 262.471 243.443 262.839 243.312 263.266C243.188 263.688 243.125 264.156 243.125 264.672V265.008C243.125 265.477 243.193 265.914 243.328 266.32C243.469 266.721 243.667 267.076 243.922 267.383C244.182 267.69 244.49 267.93 244.844 268.102C245.198 268.273 245.589 268.359 246.016 268.359C246.516 268.359 246.958 268.268 247.344 268.086C247.729 267.898 248.076 267.604 248.383 267.203L248.969 267.656C248.786 267.927 248.557 268.177 248.281 268.406C248.01 268.635 247.685 268.818 247.305 268.953C246.924 269.089 246.482 269.156 245.977 269.156ZM256.055 266.844C256.055 266.615 255.997 266.388 255.883 266.164C255.768 265.94 255.547 265.734 255.219 265.547C254.896 265.359 254.419 265.201 253.789 265.07C253.32 264.966 252.901 264.849 252.531 264.719C252.167 264.589 251.859 264.432 251.609 264.25C251.359 264.068 251.169 263.849 251.039 263.594C250.909 263.339 250.844 263.036 250.844 262.688C250.844 262.375 250.911 262.081 251.047 261.805C251.188 261.523 251.385 261.279 251.641 261.07C251.901 260.857 252.214 260.69 252.578 260.57C252.948 260.451 253.362 260.391 253.82 260.391C254.471 260.391 255.029 260.503 255.492 260.727C255.961 260.945 256.318 261.245 256.562 261.625C256.812 262.005 256.938 262.435 256.938 262.914H256.008C256.008 262.622 255.922 262.346 255.75 262.086C255.583 261.826 255.336 261.612 255.008 261.445C254.685 261.279 254.289 261.195 253.82 261.195C253.336 261.195 252.943 261.268 252.641 261.414C252.339 261.56 252.117 261.745 251.977 261.969C251.841 262.193 251.773 262.424 251.773 262.664C251.773 262.852 251.802 263.023 251.859 263.18C251.922 263.331 252.031 263.471 252.188 263.602C252.349 263.732 252.578 263.854 252.875 263.969C253.172 264.083 253.557 264.195 254.031 264.305C254.714 264.456 255.271 264.641 255.703 264.859C256.141 265.073 256.464 265.339 256.672 265.656C256.88 265.969 256.984 266.349 256.984 266.797C256.984 267.146 256.911 267.466 256.766 267.758C256.62 268.044 256.409 268.292 256.133 268.5C255.862 268.708 255.534 268.87 255.148 268.984C254.768 269.099 254.341 269.156 253.867 269.156C253.154 269.156 252.549 269.039 252.055 268.805C251.565 268.565 251.193 268.253 250.938 267.867C250.688 267.477 250.562 267.062 250.562 266.625H251.492C251.523 267.062 251.661 267.409 251.906 267.664C252.151 267.914 252.451 268.091 252.805 268.195C253.164 268.299 253.518 268.352 253.867 268.352C254.346 268.352 254.747 268.281 255.07 268.141C255.393 268 255.638 267.815 255.805 267.586C255.971 267.357 256.055 267.109 256.055 266.844Z`,
          fill: `white`,
        }),
        (0, k.jsx)(`circle`, {
          cx: `133`,
          cy: `246`,
          r: `29.5`,
          fill: `#115E59`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M114.08 243.812L125.883 250.674C126.02 250.753 126.185 250.764 126.331 250.702L151.783 239.834C152.179 239.665 152.191 239.109 151.803 238.923L139.199 232.895C139.072 232.835 138.926 232.83 138.795 232.883L114.143 242.916C113.758 243.073 113.721 243.603 114.08 243.812Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M113.5 245.1L125.5 252.243M152.2 241.5L126.7 252.345`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M113.5 246.9L125.5 254.043M152.2 243.3L126.7 254.145`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M113.5 248.7L125.5 255.843M152.2 245.1L126.7 255.945`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M113.5 250.5L125.596 257.7M152.2 246.9L126.805 257.7`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M113.5 252.3L125.596 259.5M152.2 248.7L126.7 259.545`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M113.5 254.1L125.596 261.3M152.2 250.5L126.7 261.345`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`rect`, {
          x: `96`,
          y: `282`,
          width: `74`,
          height: `30`,
          rx: `4`,
          fill: `#115E59`,
        }),
        (0, k.jsx)(`path`, {
          d: `M103.328 298.992L105.797 290.625H106.57L105.945 293.109L103.312 302H102.57L103.328 298.992ZM100.461 290.625L102.539 298.914L103.164 302H102.391L99.4766 290.625H100.461ZM109.898 298.914L111.945 290.625H112.93L110.023 302H109.25L109.898 298.914ZM106.656 290.625L109.094 298.992L109.844 302H109.102L106.523 293.109L105.891 290.625H106.656ZM113.805 297.906V297.648C113.805 297.034 113.893 296.466 114.07 295.945C114.247 295.424 114.5 294.974 114.828 294.594C115.161 294.214 115.56 293.919 116.023 293.711C116.487 293.497 117.003 293.391 117.57 293.391C118.143 293.391 118.661 293.497 119.125 293.711C119.589 293.919 119.987 294.214 120.32 294.594C120.654 294.974 120.909 295.424 121.086 295.945C121.263 296.466 121.352 297.034 121.352 297.648V297.906C121.352 298.521 121.263 299.089 121.086 299.609C120.909 300.125 120.654 300.573 120.32 300.953C119.992 301.333 119.596 301.63 119.133 301.844C118.669 302.052 118.154 302.156 117.586 302.156C117.013 302.156 116.495 302.052 116.031 301.844C115.568 301.63 115.169 301.333 114.836 300.953C114.503 300.573 114.247 300.125 114.07 299.609C113.893 299.089 113.805 298.521 113.805 297.906ZM114.734 297.648V297.906C114.734 298.37 114.797 298.81 114.922 299.227C115.047 299.638 115.229 300.005 115.469 300.328C115.708 300.646 116.005 300.896 116.359 301.078C116.714 301.26 117.122 301.352 117.586 301.352C118.044 301.352 118.448 301.26 118.797 301.078C119.151 300.896 119.448 300.646 119.688 300.328C119.927 300.005 120.107 299.638 120.227 299.227C120.352 298.81 120.414 298.37 120.414 297.906V297.648C120.414 297.19 120.352 296.755 120.227 296.344C120.107 295.932 119.924 295.565 119.68 295.242C119.44 294.919 119.143 294.664 118.789 294.477C118.435 294.289 118.029 294.195 117.57 294.195C117.112 294.195 116.706 294.289 116.352 294.477C116.003 294.664 115.706 294.919 115.461 295.242C115.221 295.565 115.039 295.932 114.914 296.344C114.794 296.755 114.734 297.19 114.734 297.648ZM124.219 294.945V302H123.289V293.547H124.195L124.219 294.945ZM127.211 293.484L127.188 294.344C127.083 294.328 126.982 294.315 126.883 294.305C126.784 294.294 126.677 294.289 126.562 294.289C126.156 294.289 125.799 294.365 125.492 294.516C125.19 294.661 124.935 294.867 124.727 295.133C124.518 295.393 124.359 295.701 124.25 296.055C124.141 296.404 124.078 296.779 124.062 297.18L123.719 297.312C123.719 296.76 123.776 296.247 123.891 295.773C124.005 295.299 124.18 294.885 124.414 294.531C124.654 294.172 124.953 293.893 125.312 293.695C125.677 293.492 126.104 293.391 126.594 293.391C126.714 293.391 126.831 293.401 126.945 293.422C127.065 293.438 127.154 293.458 127.211 293.484ZM129.609 290V302H128.68V290H129.609ZM134.914 293.547L130.961 297.469L129.281 299.094L129.141 298.18L130.492 296.719L133.734 293.547H134.914ZM134.102 302L130.57 297.609L131.086 296.805L135.227 302H134.102ZM137.562 290V302H136.633V290H137.562ZM139.602 297.906V297.648C139.602 297.034 139.69 296.466 139.867 295.945C140.044 295.424 140.297 294.974 140.625 294.594C140.958 294.214 141.357 293.919 141.82 293.711C142.284 293.497 142.799 293.391 143.367 293.391C143.94 293.391 144.458 293.497 144.922 293.711C145.385 293.919 145.784 294.214 146.117 294.594C146.451 294.974 146.706 295.424 146.883 295.945C147.06 296.466 147.148 297.034 147.148 297.648V297.906C147.148 298.521 147.06 299.089 146.883 299.609C146.706 300.125 146.451 300.573 146.117 300.953C145.789 301.333 145.393 301.63 144.93 301.844C144.466 302.052 143.951 302.156 143.383 302.156C142.81 302.156 142.292 302.052 141.828 301.844C141.365 301.63 140.966 301.333 140.633 300.953C140.299 300.573 140.044 300.125 139.867 299.609C139.69 299.089 139.602 298.521 139.602 297.906ZM140.531 297.648V297.906C140.531 298.37 140.594 298.81 140.719 299.227C140.844 299.638 141.026 300.005 141.266 300.328C141.505 300.646 141.802 300.896 142.156 301.078C142.51 301.26 142.919 301.352 143.383 301.352C143.841 301.352 144.245 301.26 144.594 301.078C144.948 300.896 145.245 300.646 145.484 300.328C145.724 300.005 145.904 299.638 146.023 299.227C146.148 298.81 146.211 298.37 146.211 297.906V297.648C146.211 297.19 146.148 296.755 146.023 296.344C145.904 295.932 145.721 295.565 145.477 295.242C145.237 294.919 144.94 294.664 144.586 294.477C144.232 294.289 143.826 294.195 143.367 294.195C142.909 294.195 142.503 294.289 142.148 294.477C141.799 294.664 141.503 294.919 141.258 295.242C141.018 295.565 140.836 295.932 140.711 296.344C140.591 296.755 140.531 297.19 140.531 297.648ZM154.227 300.484V296.125C154.227 295.724 154.143 295.378 153.977 295.086C153.81 294.794 153.565 294.57 153.242 294.414C152.919 294.258 152.521 294.18 152.047 294.18C151.609 294.18 151.219 294.258 150.875 294.414C150.536 294.565 150.268 294.771 150.07 295.031C149.878 295.286 149.781 295.57 149.781 295.883L148.844 295.875C148.844 295.557 148.922 295.25 149.078 294.953C149.234 294.656 149.456 294.391 149.742 294.156C150.029 293.922 150.37 293.737 150.766 293.602C151.167 293.461 151.607 293.391 152.086 293.391C152.69 293.391 153.221 293.492 153.68 293.695C154.143 293.898 154.505 294.203 154.766 294.609C155.026 295.016 155.156 295.526 155.156 296.141V300.227C155.156 300.518 155.177 300.82 155.219 301.133C155.266 301.445 155.331 301.703 155.414 301.906V302H154.422C154.359 301.812 154.31 301.578 154.273 301.297C154.242 301.01 154.227 300.74 154.227 300.484ZM154.445 297.078L154.461 297.797H152.625C152.146 297.797 151.716 297.841 151.336 297.93C150.961 298.013 150.643 298.138 150.383 298.305C150.122 298.466 149.922 298.661 149.781 298.891C149.646 299.12 149.578 299.38 149.578 299.672C149.578 299.974 149.654 300.25 149.805 300.5C149.961 300.75 150.18 300.951 150.461 301.102C150.747 301.247 151.086 301.32 151.477 301.32C151.997 301.32 152.456 301.224 152.852 301.031C153.253 300.839 153.583 300.586 153.844 300.273C154.104 299.961 154.279 299.62 154.367 299.25L154.773 299.789C154.706 300.049 154.581 300.318 154.398 300.594C154.221 300.865 153.99 301.12 153.703 301.359C153.417 301.594 153.078 301.786 152.688 301.938C152.302 302.083 151.865 302.156 151.375 302.156C150.823 302.156 150.341 302.052 149.93 301.844C149.523 301.635 149.206 301.352 148.977 300.992C148.753 300.628 148.641 300.216 148.641 299.758C148.641 299.341 148.729 298.969 148.906 298.641C149.083 298.307 149.339 298.026 149.672 297.797C150.01 297.562 150.417 297.385 150.891 297.266C151.37 297.141 151.906 297.078 152.5 297.078H154.445ZM163.156 300.359V290H164.094V302H163.219L163.156 300.359ZM157.289 297.859V297.695C157.289 297.039 157.365 296.448 157.516 295.922C157.667 295.391 157.883 294.938 158.164 294.562C158.451 294.182 158.794 293.893 159.195 293.695C159.596 293.492 160.049 293.391 160.555 293.391C161.049 293.391 161.487 293.471 161.867 293.633C162.247 293.794 162.573 294.026 162.844 294.328C163.12 294.63 163.341 294.99 163.508 295.406C163.68 295.823 163.805 296.286 163.883 296.797V298.883C163.82 299.362 163.706 299.802 163.539 300.203C163.372 300.599 163.151 300.945 162.875 301.242C162.599 301.534 162.266 301.76 161.875 301.922C161.49 302.078 161.044 302.156 160.539 302.156C160.039 302.156 159.589 302.052 159.188 301.844C158.786 301.635 158.445 301.341 158.164 300.961C157.883 300.576 157.667 300.12 157.516 299.594C157.365 299.068 157.289 298.49 157.289 297.859ZM158.227 297.695V297.859C158.227 298.354 158.276 298.812 158.375 299.234C158.474 299.656 158.625 300.023 158.828 300.336C159.031 300.648 159.289 300.893 159.602 301.07C159.914 301.247 160.284 301.336 160.711 301.336C161.247 301.336 161.698 301.234 162.062 301.031C162.427 300.823 162.719 300.549 162.938 300.211C163.156 299.867 163.315 299.492 163.414 299.086V296.656C163.352 296.38 163.26 296.099 163.141 295.812C163.021 295.526 162.857 295.263 162.648 295.023C162.445 294.779 162.185 294.583 161.867 294.438C161.555 294.286 161.174 294.211 160.727 294.211C160.294 294.211 159.922 294.299 159.609 294.477C159.297 294.654 159.036 294.901 158.828 295.219C158.625 295.531 158.474 295.898 158.375 296.32C158.276 296.742 158.227 297.201 158.227 297.695Z`,
          fill: `white`,
        }),
        (0, k.jsx)(`circle`, {
          cx: `30.703`,
          cy: `205.703`,
          r: `29.203`,
          fill: `#115E59`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M29.2179 194.416L29.1348 193.923L29.2179 194.416ZM22.9802 195.604L23.1472 196.075L23.1472 196.075L22.9802 195.604ZM15.7887 204.181L15.6285 204.655L15.7887 204.181ZM16.5969 204.181L16.6558 204.678L16.5969 204.181ZM20.6384 201.322L21.0272 201.637L21.0448 201.615L21.0598 201.591L20.6384 201.322ZM19.8301 202.956L20.3222 202.867L19.8301 202.956ZM21.0426 204.181L21.23 203.718L21.0426 204.181ZM22.6592 204.181L22.5838 203.687L22.5838 203.687L22.6592 204.181ZM27.1048 200.097L27.3142 200.551L27.319 200.549L27.1048 200.097ZM31 201.137L31.3662 201.477L31.3662 201.477L31 201.137ZM29.2179 204.218L28.7552 204.028L28.7491 204.043L28.7439 204.058L29.2179 204.218ZM29.1255 206.223L28.6694 206.428L28.6694 206.428L29.1255 206.223ZM31.8911 206.891L31.6137 206.475L31.8911 206.891ZM33.3763 204.812L33.8044 205.07L33.8044 205.07L33.3763 204.812ZM38.4356 199.911L38.5441 199.423L38.5441 199.423L38.4356 199.911ZM40.2664 202.176L40.6137 201.816L40.2664 202.176ZM42.5842 203.921L42.4801 204.41L42.5842 203.921ZM44.8533 203.364L44.4794 203.032L44.8533 203.364ZM44.8533 201.137L44.534 201.521L44.8533 201.137ZM22.6592 198.871L22.3305 198.495L22.3305 198.495L22.6592 198.871ZM25.6535 197.238L25.8618 197.693L25.6535 197.238ZM27.4566 197.292C27.7325 197.28 27.9468 197.047 27.9352 196.771C27.9236 196.495 27.6906 196.281 27.4147 196.293L27.4566 197.292ZM14.5761 199.28L14.3084 198.858L14.5761 199.28ZM12.8812 200.654L12.3999 200.518L12.8812 200.654ZM13.3637 202.139L13.7118 201.78L13.3637 202.139ZM35.1584 191.743C34.8877 191.322 34.8877 191.322 34.8877 191.322C34.8877 191.322 34.8877 191.322 34.8877 191.322C34.8877 191.322 34.8876 191.322 34.8874 191.323C34.8871 191.323 34.8866 191.323 34.8859 191.323C34.8844 191.324 34.8822 191.326 34.8791 191.328C34.8729 191.332 34.8634 191.338 34.8508 191.346C34.8256 191.362 34.7878 191.386 34.7386 191.416C34.6402 191.477 34.4962 191.566 34.3155 191.673C33.9539 191.888 33.4469 192.18 32.866 192.483C31.6892 193.097 30.2638 193.733 29.1348 193.923L29.3009 194.909C30.5968 194.691 32.1417 193.989 33.3289 193.369C33.9301 193.055 34.4536 192.755 34.8269 192.533C35.0138 192.421 35.1634 192.33 35.2667 192.265C35.3184 192.233 35.3585 192.208 35.386 192.191C35.3997 192.182 35.4102 192.175 35.4175 192.171C35.4211 192.168 35.4239 192.166 35.4259 192.165C35.4269 192.165 35.4276 192.164 35.4282 192.164C35.4285 192.163 35.4287 192.163 35.4289 192.163C35.429 192.163 35.429 192.163 35.4291 192.163C35.4292 192.163 35.4292 192.163 35.1584 191.743ZM29.1348 193.923C27.2438 194.241 25.4347 194.204 22.8133 195.133L23.1472 196.075C25.6638 195.184 27.2253 195.259 29.3009 194.909L29.1348 193.923ZM22.8133 195.133C21.7841 195.497 20.6719 196.019 19.8245 196.444C19.3991 196.658 19.037 196.849 18.7809 196.987C18.6529 197.056 18.5512 197.111 18.4812 197.15C18.4463 197.169 18.4192 197.184 18.4008 197.195C18.3915 197.2 18.3845 197.204 18.3796 197.207C18.3772 197.208 18.3753 197.209 18.374 197.21C18.3734 197.21 18.3729 197.21 18.3725 197.211C18.3723 197.211 18.3722 197.211 18.3721 197.211C18.372 197.211 18.3719 197.211 18.3719 197.211C18.3719 197.211 18.3718 197.211 18.6177 197.646C18.8635 198.082 18.8635 198.082 18.8635 198.082C18.8635 198.082 18.8635 198.082 18.8635 198.082C18.8635 198.082 18.8636 198.082 18.8637 198.082C18.8639 198.082 18.8643 198.081 18.8648 198.081C18.8657 198.081 18.8673 198.08 18.8694 198.078C18.8736 198.076 18.88 198.073 18.8886 198.068C18.9057 198.058 18.9314 198.044 18.9649 198.025C19.032 197.988 19.1305 197.934 19.2551 197.867C19.5045 197.733 19.858 197.546 20.2732 197.338C21.107 196.919 22.1761 196.419 23.1472 196.075L22.8133 195.133ZM18.6177 197.646C18.2388 197.32 18.2388 197.32 18.2388 197.32C18.2387 197.32 18.2387 197.32 18.2386 197.32C18.2385 197.32 18.2384 197.321 18.2381 197.321C18.2377 197.321 18.2371 197.322 18.2363 197.323C18.2347 197.325 18.2324 197.328 18.2293 197.331C18.2232 197.338 18.2141 197.349 18.2024 197.363C18.1788 197.39 18.1444 197.43 18.1006 197.482C18.013 197.585 17.8877 197.732 17.7369 197.912C17.4355 198.271 17.031 198.76 16.6198 199.274C16.2096 199.788 15.7885 200.333 15.4559 200.804C15.2899 201.039 15.1417 201.262 15.0268 201.458C14.9199 201.639 14.8142 201.842 14.771 202.023L15.7439 202.254C15.7438 202.255 15.7456 202.247 15.7519 202.231C15.7579 202.215 15.7669 202.194 15.7794 202.167C15.8048 202.113 15.8409 202.046 15.8886 201.965C15.984 201.803 16.1149 201.605 16.2731 201.38C16.5888 200.933 16.9956 200.406 17.4011 199.898C17.8057 199.392 18.2048 198.91 18.503 198.555C18.652 198.377 18.7757 198.231 18.8619 198.13C18.9051 198.079 18.9388 198.04 18.9618 198.013C18.9732 198 18.982 197.99 18.9878 197.983C18.9908 197.979 18.993 197.977 18.9944 197.975C18.9951 197.974 18.9957 197.974 18.996 197.973C18.9962 197.973 18.9963 197.973 18.9964 197.973C18.9965 197.973 18.9965 197.973 18.9965 197.973C18.9965 197.973 18.9965 197.973 18.6177 197.646ZM14.771 202.023C14.6693 202.451 14.5885 202.972 14.6635 203.446C14.7426 203.945 15.0112 204.446 15.6285 204.655L15.9488 203.708C15.7853 203.652 15.6911 203.541 15.6512 203.289C15.6072 203.012 15.6512 202.644 15.7439 202.254L14.771 202.023ZM15.6285 204.655C15.8147 204.718 15.9653 204.75 16.1553 204.739C16.2332 204.735 16.3123 204.724 16.3842 204.714C16.4608 204.703 16.545 204.691 16.6558 204.678L16.538 203.685C16.4137 203.7 16.3167 203.714 16.2444 203.724C16.1673 203.735 16.1299 203.739 16.1019 203.741C16.08 203.742 16.0616 203.746 15.9488 203.708L15.6285 204.655ZM16.6558 204.678C17.7787 204.545 18.8901 203.732 19.6676 203.04C20.0691 202.683 20.4071 202.334 20.6446 202.075C20.7636 201.945 20.858 201.837 20.9232 201.761C20.9559 201.723 20.9812 201.692 20.9987 201.671C21.0075 201.661 21.0143 201.652 21.0191 201.647C21.0215 201.644 21.0233 201.641 21.0247 201.64C21.0254 201.639 21.0259 201.638 21.0264 201.638C21.0266 201.637 21.0267 201.637 21.0269 201.637C21.027 201.637 21.0271 201.637 21.0271 201.637C21.0272 201.637 21.0272 201.637 20.6384 201.322C20.2496 201.008 20.2497 201.008 20.2497 201.008C20.2497 201.008 20.2497 201.008 20.2497 201.008C20.2498 201.008 20.2497 201.008 20.2497 201.008C20.2496 201.008 20.2494 201.008 20.249 201.009C20.2483 201.009 20.2471 201.011 20.2454 201.013C20.242 201.017 20.2367 201.024 20.2294 201.032C20.2148 201.05 20.1925 201.077 20.1632 201.111C20.1046 201.179 20.0178 201.279 19.9074 201.399C19.6861 201.641 19.3725 201.964 19.0028 202.293C18.238 202.974 17.3286 203.591 16.538 203.685L16.6558 204.678ZM20.6384 201.322C20.2854 200.968 20.2853 200.968 20.2852 200.968C20.2852 200.968 20.2851 200.969 20.285 200.969C20.2849 200.969 20.2847 200.969 20.2846 200.969C20.2843 200.969 20.2839 200.97 20.2834 200.97C20.2826 200.971 20.2815 200.972 20.2802 200.973C20.2776 200.976 20.2741 200.98 20.2698 200.984C20.2611 200.993 20.2493 201.005 20.2346 201.021C20.2054 201.052 20.165 201.096 20.1173 201.15C20.0227 201.259 19.8965 201.414 19.7733 201.595C19.6514 201.775 19.5236 201.993 19.4351 202.229C19.3479 202.461 19.2846 202.747 19.338 203.045L20.3222 202.867C20.3125 202.814 20.3187 202.72 20.3712 202.58C20.4224 202.444 20.5046 202.298 20.6005 202.157C20.6951 202.018 20.7947 201.895 20.8714 201.807C20.9094 201.764 20.941 201.729 20.9624 201.707C20.973 201.695 20.9811 201.687 20.9862 201.682C20.9887 201.679 20.9904 201.677 20.9913 201.677C20.9918 201.676 20.992 201.676 20.992 201.676C20.992 201.676 20.992 201.676 20.9919 201.676C20.9919 201.676 20.9918 201.676 20.9917 201.676C20.9917 201.676 20.9916 201.676 20.9916 201.676C20.9915 201.676 20.9915 201.676 20.6384 201.322ZM19.338 203.045C19.5056 203.976 20.1938 204.377 20.8552 204.645L21.23 203.718C20.6479 203.482 20.3942 203.268 20.3222 202.867L19.338 203.045ZM20.8552 204.645C21.6029 204.947 22.1913 204.758 22.7346 204.676L22.5838 203.687C21.8786 203.795 21.6546 203.889 21.23 203.718L20.8552 204.645ZM22.7346 204.676C24.1298 204.463 24.8129 203.507 25.3708 202.648C25.9516 201.754 26.4055 200.97 27.3142 200.551L26.8954 199.643C25.6696 200.208 25.0607 201.29 24.5322 202.103C23.981 202.952 23.5086 203.546 22.5838 203.687L22.7346 204.676ZM31.786 198.871C31.8408 198.946 31.8891 199.107 31.6577 199.515C31.4381 199.902 31.0586 200.339 30.6339 200.796L31.3662 201.477C31.7857 201.026 32.2429 200.511 32.5277 200.008C32.8007 199.526 33.0209 198.86 32.5903 198.277L31.786 198.871ZM30.6339 200.796C30.1186 201.35 29.6472 202.174 29.3149 202.825C29.1455 203.157 29.0063 203.456 28.9093 203.673C28.8607 203.781 28.8226 203.869 28.7964 203.93C28.7833 203.961 28.7732 203.985 28.7663 204.002C28.7628 204.01 28.7601 204.016 28.7583 204.021C28.7573 204.023 28.7566 204.025 28.7561 204.026C28.7558 204.027 28.7556 204.027 28.7555 204.028C28.7554 204.028 28.7553 204.028 28.7553 204.028C28.7552 204.028 28.7552 204.028 28.7552 204.028C28.7552 204.028 28.7552 204.028 29.2179 204.218C29.6806 204.407 29.6805 204.407 29.6805 204.407C29.6805 204.407 29.6805 204.407 29.6805 204.407C29.6805 204.407 29.6805 204.407 29.6806 204.407C29.6806 204.407 29.6807 204.407 29.6809 204.407C29.6812 204.406 29.6817 204.405 29.6824 204.403C29.6838 204.4 29.686 204.394 29.689 204.387C29.695 204.373 29.7041 204.351 29.7162 204.323C29.7402 204.266 29.776 204.184 29.8219 204.082C29.9137 203.876 30.0457 203.593 30.2056 203.279C30.532 202.64 30.9516 201.923 31.3662 201.477L30.6339 200.796ZM29.2179 204.218C28.7439 204.058 28.7439 204.059 28.7439 204.059C28.7439 204.059 28.7438 204.059 28.7438 204.059C28.7437 204.059 28.7437 204.059 28.7436 204.06C28.7435 204.06 28.7433 204.06 28.7431 204.061C28.7427 204.062 28.7423 204.064 28.7417 204.065C28.7405 204.069 28.739 204.073 28.7371 204.079C28.7334 204.091 28.7282 204.107 28.722 204.128C28.7095 204.169 28.6925 204.227 28.6735 204.298C28.6356 204.44 28.5887 204.639 28.5531 204.864C28.4861 205.288 28.4393 205.915 28.6694 206.428L29.5817 206.019C29.479 205.79 29.4784 205.415 29.5408 205.021C29.5697 204.838 29.6083 204.674 29.6398 204.556C29.6554 204.497 29.6691 204.45 29.6785 204.419C29.6832 204.404 29.6869 204.392 29.6892 204.385C29.6903 204.382 29.6912 204.379 29.6916 204.378C29.6918 204.377 29.6919 204.377 29.692 204.377C29.692 204.377 29.692 204.377 29.6919 204.377C29.6919 204.377 29.6919 204.377 29.6919 204.377C29.6919 204.377 29.6918 204.377 29.6918 204.377C29.6918 204.377 29.6918 204.377 29.2179 204.218ZM28.6694 206.428C28.9816 207.124 29.638 207.499 30.2802 207.628C30.9172 207.756 31.6361 207.662 32.1685 207.307L31.6137 206.475C31.3448 206.655 30.9083 206.734 30.4765 206.648C30.05 206.562 29.7243 206.337 29.5817 206.019L28.6694 206.428ZM32.1685 207.307C32.5577 207.048 32.8844 206.6 33.1383 206.202C33.387 205.812 33.6478 205.33 33.8044 205.07L32.9482 204.554C32.7373 204.903 32.55 205.264 32.2953 205.664C32.0458 206.055 31.8137 206.342 31.6137 206.475L32.1685 207.307ZM33.8044 205.07C33.9748 204.788 34.1124 204.522 34.2354 204.278C34.3608 204.029 34.4652 203.815 34.5808 203.606C34.8034 203.205 35.0493 202.861 35.468 202.531L34.8489 201.746C34.2956 202.182 33.9713 202.643 33.7063 203.121C33.5781 203.353 33.4593 203.596 33.3423 203.828C33.2228 204.066 33.0987 204.304 32.9482 204.554L33.8044 205.07ZM35.468 202.531C35.7577 202.303 36.0116 202.007 36.2363 201.734C36.4725 201.447 36.678 201.183 36.9054 200.949C37.3445 200.498 37.7534 200.271 38.327 200.399L38.5441 199.423C37.4792 199.186 36.7355 199.69 36.1886 200.252C35.9231 200.525 35.6774 200.839 35.464 201.098C35.2391 201.372 35.0452 201.591 34.8489 201.746L35.468 202.531ZM38.327 200.399C38.621 200.464 38.7792 200.562 38.8771 200.654C38.9785 200.749 39.0519 200.874 39.1263 201.057C39.1644 201.15 39.1984 201.248 39.2398 201.364C39.2795 201.476 39.3251 201.603 39.3804 201.732C39.4929 201.993 39.6514 202.277 39.9191 202.535L40.6137 201.816C40.4723 201.679 40.3792 201.523 40.299 201.336C40.2579 201.241 40.2218 201.141 40.1822 201.03C40.1443 200.923 40.1014 200.8 40.0527 200.68C39.9534 200.436 39.8134 200.162 39.563 199.926C39.3091 199.687 38.9772 199.519 38.5441 199.423L38.327 200.399ZM39.9191 202.535C40.1116 202.721 40.2808 202.904 40.4533 203.089C40.6222 203.27 40.7975 203.456 40.9858 203.627C41.3752 203.98 41.8278 204.271 42.4801 204.41L42.6882 203.432C42.2485 203.338 41.9497 203.151 41.657 202.886C41.5042 202.747 41.3558 202.59 41.1844 202.407C41.0165 202.227 40.8287 202.024 40.6137 201.816L39.9191 202.535ZM42.4801 204.41C43.3353 204.592 44.4431 204.579 45.2272 203.696L44.4794 203.032C44.0519 203.514 43.4081 203.585 42.6882 203.432L42.4801 204.41ZM45.2272 203.696C45.632 203.241 45.6993 202.575 45.666 202.081C45.6483 201.82 45.6002 201.565 45.5301 201.349C45.4689 201.16 45.3626 200.91 45.1726 200.752L44.534 201.521C44.4925 201.487 44.528 201.501 44.5789 201.658C44.6211 201.787 44.6556 201.96 44.6683 202.149C44.6957 202.555 44.6144 202.88 44.4794 203.032L45.2272 203.696ZM45.1726 200.752C44.3855 200.099 43.8453 199.504 43.5418 199.04C43.389 198.807 43.3102 198.628 43.2799 198.507C43.2477 198.379 43.2855 198.388 43.2487 198.443L42.4165 197.889C42.2311 198.167 42.2446 198.49 42.3101 198.751C42.3774 199.019 42.5184 199.303 42.7052 199.588C43.0809 200.162 43.6996 200.829 44.534 201.521L45.1726 200.752ZM43.2487 198.443C43.3842 198.24 43.9745 197.471 44.5514 196.727C44.8354 196.361 45.1103 196.009 45.3142 195.748C45.4161 195.618 45.5003 195.511 45.559 195.436C45.5883 195.398 45.6113 195.369 45.6269 195.349C45.6347 195.339 45.6407 195.332 45.6447 195.326C45.6467 195.324 45.6482 195.322 45.6492 195.321C45.6497 195.32 45.6501 195.32 45.6503 195.319C45.6505 195.319 45.6506 195.319 45.6506 195.319C45.6507 195.319 45.6507 195.319 45.6507 195.319C45.6507 195.319 45.6507 195.319 45.2575 195.01C44.8642 194.701 44.8642 194.701 44.8642 194.701C44.8641 194.701 44.8641 194.701 44.8641 194.701C44.864 194.701 44.8639 194.702 44.8638 194.702C44.8635 194.702 44.8631 194.703 44.8626 194.703C44.8616 194.705 44.86 194.707 44.858 194.709C44.854 194.714 44.848 194.722 44.8401 194.732C44.8244 194.752 44.8013 194.781 44.7719 194.819C44.7131 194.894 44.6287 195.002 44.5265 195.132C44.3221 195.394 44.0464 195.747 43.7614 196.114C43.2001 196.837 42.5779 197.646 42.4165 197.889L43.2487 198.443ZM20.6384 201.322C21.0598 201.591 21.0598 201.591 21.0598 201.591C21.0598 201.591 21.0597 201.592 21.0597 201.592C21.0597 201.592 21.0597 201.592 21.0598 201.591C21.0598 201.591 21.0599 201.591 21.0601 201.591C21.0604 201.59 21.061 201.59 21.0618 201.588C21.0634 201.586 21.0659 201.582 21.0694 201.577C21.0763 201.566 21.0868 201.55 21.1006 201.529C21.1284 201.487 21.1696 201.425 21.2225 201.347C21.3283 201.193 21.48 200.977 21.6629 200.734C22.0329 200.242 22.5134 199.662 22.9878 199.248L22.3305 198.495C21.7771 198.977 21.2471 199.623 20.8638 200.132C20.6699 200.39 20.5092 200.619 20.3968 200.783C20.3405 200.866 20.2961 200.932 20.2655 200.979C20.2503 201.002 20.2384 201.02 20.2303 201.033C20.2262 201.039 20.223 201.044 20.2208 201.047C20.2197 201.049 20.2188 201.05 20.2182 201.051C20.2179 201.052 20.2176 201.052 20.2174 201.053C20.2173 201.053 20.2172 201.053 20.2172 201.053C20.2171 201.053 20.2171 201.053 20.2171 201.053C20.2171 201.053 20.217 201.053 20.6384 201.322ZM22.9878 199.248C23.9844 198.379 24.5115 198.311 25.8618 197.693L25.4451 196.783C24.2279 197.341 23.4714 197.5 22.3305 198.495L22.9878 199.248ZM25.8618 197.693C26.2578 197.511 26.6601 197.41 26.9677 197.354C27.1202 197.326 27.2465 197.311 27.333 197.302C27.3761 197.297 27.4092 197.295 27.4304 197.293C27.441 197.293 27.4486 197.292 27.4531 197.292C27.4553 197.292 27.4567 197.292 27.4573 197.292C27.4576 197.292 27.4577 197.292 27.4576 197.292C27.4575 197.292 27.4574 197.292 27.4573 197.292C27.4572 197.292 27.4571 197.292 27.457 197.292C27.4569 197.292 27.4568 197.292 27.4568 197.292C27.4567 197.292 27.4566 197.292 27.4356 196.792C27.4147 196.293 27.4146 196.293 27.4145 196.293C27.4144 196.293 27.4143 196.293 27.4142 196.293C27.4141 196.293 27.4139 196.293 27.4137 196.293C27.4133 196.293 27.4129 196.293 27.4124 196.293C27.4114 196.293 27.4102 196.293 27.4088 196.293C27.406 196.293 27.4023 196.293 27.3978 196.293C27.3887 196.294 27.3763 196.295 27.3608 196.296C27.3299 196.298 27.2863 196.301 27.232 196.307C27.1236 196.318 26.9714 196.337 26.7898 196.37C26.429 196.435 25.9402 196.557 25.4451 196.783L25.8618 197.693ZM18.6177 197.646C18.4842 197.165 18.4841 197.165 18.4841 197.165C18.484 197.165 18.484 197.165 18.4839 197.165C18.4838 197.165 18.4836 197.165 18.4834 197.165C18.4829 197.165 18.4823 197.165 18.4816 197.165C18.4801 197.166 18.478 197.166 18.4753 197.167C18.4698 197.169 18.4619 197.171 18.4517 197.174C18.4313 197.179 18.4016 197.188 18.3635 197.199C18.2874 197.221 18.1777 197.254 18.0419 197.295C17.7704 197.379 17.3932 197.5 16.9698 197.65C16.1332 197.946 15.0783 198.37 14.3084 198.858L14.8439 199.702C15.5139 199.278 16.4797 198.884 17.3039 198.592C17.7109 198.448 18.0742 198.332 18.3355 198.251C18.466 198.211 18.5708 198.18 18.6426 198.159C18.6785 198.149 18.7061 198.141 18.7245 198.136C18.7337 198.133 18.7406 198.131 18.745 198.13C18.7473 198.129 18.7489 198.129 18.75 198.129C18.7505 198.128 18.7508 198.128 18.751 198.128C18.7511 198.128 18.7512 198.128 18.7512 198.128C18.7512 198.128 18.7512 198.128 18.7512 198.128C18.7512 198.128 18.7511 198.128 18.6177 197.646ZM14.3084 198.858C14.1634 198.95 14.007 199.031 13.8319 199.121C13.664 199.206 13.473 199.303 13.2952 199.413C12.9304 199.64 12.5559 199.964 12.3999 200.518L13.3625 200.789C13.4226 200.576 13.5614 200.425 13.8228 200.263C13.9582 200.179 14.1086 200.102 14.2875 200.011C14.4591 199.923 14.6546 199.822 14.8439 199.702L14.3084 198.858ZM12.3999 200.518C12.286 200.922 12.293 201.296 12.4223 201.647C12.547 201.986 12.7707 202.261 13.0156 202.498L13.7118 201.78C13.5188 201.593 13.4121 201.441 13.3606 201.301C13.3135 201.174 13.2981 201.017 13.3625 200.789L12.3999 200.518ZM13.0156 202.498C13.2498 202.725 13.5591 202.802 13.8039 202.828C14.0594 202.855 14.3259 202.835 14.5536 202.804C14.7848 202.773 14.9966 202.726 15.1492 202.687C15.2261 202.668 15.2892 202.651 15.3339 202.638C15.3563 202.631 15.3742 202.626 15.3869 202.622C15.3932 202.62 15.3983 202.619 15.402 202.617C15.4039 202.617 15.4054 202.616 15.4066 202.616C15.4072 202.616 15.4077 202.616 15.4081 202.615C15.4083 202.615 15.4085 202.615 15.4086 202.615C15.4087 202.615 15.4088 202.615 15.4089 202.615C15.409 202.615 15.4091 202.615 15.2575 202.139C15.1059 201.662 15.1059 201.662 15.106 201.662C15.106 201.662 15.1061 201.662 15.1062 201.662C15.1062 201.662 15.1063 201.662 15.1063 201.662C15.1064 201.662 15.1064 201.662 15.1063 201.662C15.1061 201.662 15.1055 201.662 15.1047 201.663C15.103 201.663 15.1 201.664 15.0958 201.665C15.0874 201.668 15.0741 201.672 15.0566 201.677C15.0214 201.687 14.9695 201.701 14.9054 201.718C14.7759 201.75 14.6019 201.788 14.4181 201.814C14.2308 201.839 14.053 201.848 13.9096 201.833C13.7556 201.817 13.7113 201.78 13.7118 201.78L13.0156 202.498ZM32.5903 198.277C32.3799 197.993 32.0347 197.955 31.8399 197.951C31.6089 197.947 31.3444 197.988 31.0797 198.047C30.5444 198.167 29.8973 198.388 29.2858 198.622C28.67 198.858 28.0716 199.113 27.6285 199.309C27.4066 199.408 27.2228 199.491 27.0942 199.55C27.0299 199.58 26.9794 199.604 26.9448 199.62C26.9274 199.628 26.9141 199.634 26.905 199.638C26.9004 199.641 26.8969 199.642 26.8945 199.643C26.8933 199.644 26.8924 199.644 26.8918 199.645C26.8914 199.645 26.8912 199.645 26.891 199.645C26.8909 199.645 26.8908 199.645 26.8908 199.645C26.8907 199.645 26.8906 199.645 27.1048 200.097C27.319 200.549 27.319 200.549 27.319 200.549C27.319 200.549 27.319 200.549 27.3191 200.549C27.3192 200.549 27.3193 200.549 27.3196 200.549C27.32 200.548 27.3208 200.548 27.3218 200.547C27.3238 200.547 27.3269 200.545 27.3311 200.543C27.3394 200.539 27.3519 200.533 27.3684 200.526C27.4013 200.51 27.4501 200.488 27.5124 200.459C27.6372 200.401 27.8164 200.32 28.0331 200.224C28.4673 200.032 29.0487 199.784 29.643 199.556C30.2418 199.327 30.8351 199.127 31.2985 199.023C31.5331 198.97 31.7074 198.949 31.8208 198.951C31.9704 198.954 31.875 198.992 31.786 198.871L32.5903 198.277Z`,
          fill: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M40.802 202.436C41.5808 201.067 41.895 200.555 43.4753 200.356`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M29.8118 203.03C31.5939 202.733 32.485 203.03 33.3761 203.932`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M25.3564 201.344C24.2828 199.897 23.431 199.54 21.495 200.06`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M17.0396 199.905C18.7515 199.56 19.4432 199.8 20.3069 201.093`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M14.6633 199.168C15.5196 199.758 16.017 200.059 15.9537 200.95`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M42.5842 204.218C44.8861 209.989 42.5842 216.693 42.5842 222.634`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M30.703 207.188C30.2483 212.713 31.2537 217.992 31.8911 223.822`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M21.495 204.515C20.4905 210.559 25.2948 218.693 25.3564 224.713`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M17.9307 203.921C16.491 209.055 19.9078 217.76 19.7129 223.525`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M14.0693 202.733C11.8942 207.712 14.6634 214.911 15.5545 220.257`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`rect`, {
          x: `2`,
          y: `243`,
          width: `57`,
          height: `30`,
          rx: `4`,
          fill: `#115E59`,
        }),
        (0, k.jsx)(`path`, {
          d: `M13.5312 259.453H14.4922C14.4141 260.219 14.2031 260.88 13.8594 261.438C13.5156 261.99 13.0469 262.414 12.4531 262.711C11.8594 263.008 11.1432 263.156 10.3047 263.156C9.65885 263.156 9.07292 263.034 8.54688 262.789C8.02604 262.544 7.57812 262.198 7.20312 261.75C6.82812 261.297 6.53906 260.755 6.33594 260.125C6.13281 259.495 6.03125 258.794 6.03125 258.023V256.602C6.03125 255.831 6.13281 255.133 6.33594 254.508C6.53906 253.878 6.83073 253.336 7.21094 252.883C7.59115 252.43 8.04688 252.081 8.57812 251.836C9.10938 251.591 9.70833 251.469 10.375 251.469C11.1823 251.469 11.8802 251.617 12.4688 251.914C13.0573 252.206 13.5208 252.628 13.8594 253.18C14.2031 253.732 14.4141 254.398 14.4922 255.18H13.5312C13.4583 254.565 13.2969 254.044 13.0469 253.617C12.7969 253.19 12.4505 252.865 12.0078 252.641C11.5703 252.411 11.026 252.297 10.375 252.297C9.84375 252.297 9.36979 252.398 8.95312 252.602C8.53646 252.805 8.18229 253.096 7.89062 253.477C7.59896 253.852 7.375 254.302 7.21875 254.828C7.06771 255.354 6.99219 255.94 6.99219 256.586V258.023C6.99219 258.648 7.0651 259.224 7.21094 259.75C7.35677 260.276 7.57031 260.732 7.85156 261.117C8.13802 261.503 8.48698 261.802 8.89844 262.016C9.3099 262.229 9.77865 262.336 10.3047 262.336C10.9766 262.336 11.5365 262.229 11.9844 262.016C12.4375 261.797 12.7891 261.474 13.0391 261.047C13.2891 260.62 13.4531 260.089 13.5312 259.453ZM16.1016 258.906V258.648C16.1016 258.034 16.1901 257.466 16.3672 256.945C16.5443 256.424 16.7969 255.974 17.125 255.594C17.4583 255.214 17.8568 254.919 18.3203 254.711C18.7839 254.497 19.2995 254.391 19.8672 254.391C20.4401 254.391 20.9583 254.497 21.4219 254.711C21.8854 254.919 22.2839 255.214 22.6172 255.594C22.9505 255.974 23.2057 256.424 23.3828 256.945C23.5599 257.466 23.6484 258.034 23.6484 258.648V258.906C23.6484 259.521 23.5599 260.089 23.3828 260.609C23.2057 261.125 22.9505 261.573 22.6172 261.953C22.2891 262.333 21.8932 262.63 21.4297 262.844C20.9661 263.052 20.4505 263.156 19.8828 263.156C19.3099 263.156 18.7917 263.052 18.3281 262.844C17.8646 262.63 17.4661 262.333 17.1328 261.953C16.7995 261.573 16.5443 261.125 16.3672 260.609C16.1901 260.089 16.1016 259.521 16.1016 258.906ZM17.0312 258.648V258.906C17.0312 259.37 17.0938 259.81 17.2188 260.227C17.3438 260.638 17.526 261.005 17.7656 261.328C18.0052 261.646 18.3021 261.896 18.6562 262.078C19.0104 262.26 19.4193 262.352 19.8828 262.352C20.3411 262.352 20.7448 262.26 21.0938 262.078C21.4479 261.896 21.7448 261.646 21.9844 261.328C22.224 261.005 22.4036 260.638 22.5234 260.227C22.6484 259.81 22.7109 259.37 22.7109 258.906V258.648C22.7109 258.19 22.6484 257.755 22.5234 257.344C22.4036 256.932 22.2214 256.565 21.9766 256.242C21.737 255.919 21.4401 255.664 21.0859 255.477C20.7318 255.289 20.3255 255.195 19.8672 255.195C19.4089 255.195 19.0026 255.289 18.6484 255.477C18.2995 255.664 18.0026 255.919 17.7578 256.242C17.5182 256.565 17.3359 256.932 17.2109 257.344C17.0911 257.755 17.0312 258.19 17.0312 258.648ZM26.5156 256.352V263H25.5859V254.547H26.4766L26.5156 256.352ZM26.3047 258.25L25.8906 258.016C25.9219 257.516 26.0234 257.047 26.1953 256.609C26.3672 256.172 26.599 255.786 26.8906 255.453C27.1875 255.12 27.5339 254.859 27.9297 254.672C28.3307 254.484 28.7734 254.391 29.2578 254.391C29.6797 254.391 30.0573 254.448 30.3906 254.562C30.724 254.677 31.0078 254.859 31.2422 255.109C31.4766 255.359 31.6536 255.68 31.7734 256.07C31.8984 256.461 31.9609 256.938 31.9609 257.5V263H31.0234V257.492C31.0234 256.909 30.9427 256.453 30.7812 256.125C30.6198 255.792 30.3906 255.555 30.0938 255.414C29.7969 255.273 29.4453 255.203 29.0391 255.203C28.5911 255.203 28.1979 255.302 27.8594 255.5C27.526 255.693 27.2448 255.945 27.0156 256.258C26.7917 256.565 26.6198 256.896 26.5 257.25C26.3802 257.599 26.3151 257.932 26.3047 258.25ZM37.5781 254.547V255.312H33.3438V254.547H37.5781ZM34.8984 252.375H35.8281V260.945C35.8281 261.336 35.8802 261.63 35.9844 261.828C36.0885 262.026 36.224 262.159 36.3906 262.227C36.5573 262.294 36.737 262.328 36.9297 262.328C37.0703 262.328 37.2057 262.32 37.3359 262.305C37.4661 262.284 37.5833 262.263 37.6875 262.242L37.7266 263.031C37.612 263.068 37.4635 263.096 37.2812 263.117C37.099 263.143 36.9167 263.156 36.7344 263.156C36.375 263.156 36.0573 263.091 35.7812 262.961C35.5052 262.826 35.2891 262.596 35.1328 262.273C34.9766 261.945 34.8984 261.5 34.8984 260.938V252.375ZM40.4688 255.945V263H39.5391V254.547H40.4453L40.4688 255.945ZM43.4609 254.484L43.4375 255.344C43.3333 255.328 43.2318 255.315 43.1328 255.305C43.0339 255.294 42.9271 255.289 42.8125 255.289C42.4062 255.289 42.0495 255.365 41.7422 255.516C41.4401 255.661 41.1849 255.867 40.9766 256.133C40.7682 256.393 40.6094 256.701 40.5 257.055C40.3906 257.404 40.3281 257.779 40.3125 258.18L39.9688 258.312C39.9688 257.76 40.026 257.247 40.1406 256.773C40.2552 256.299 40.4297 255.885 40.6641 255.531C40.9036 255.172 41.2031 254.893 41.5625 254.695C41.9271 254.492 42.3542 254.391 42.8438 254.391C42.9635 254.391 43.0807 254.401 43.1953 254.422C43.3151 254.438 43.4036 254.458 43.4609 254.484ZM44.2578 258.906V258.648C44.2578 258.034 44.3464 257.466 44.5234 256.945C44.7005 256.424 44.9531 255.974 45.2812 255.594C45.6146 255.214 46.013 254.919 46.4766 254.711C46.9401 254.497 47.4557 254.391 48.0234 254.391C48.5964 254.391 49.1146 254.497 49.5781 254.711C50.0417 254.919 50.4401 255.214 50.7734 255.594C51.1068 255.974 51.362 256.424 51.5391 256.945C51.7161 257.466 51.8047 258.034 51.8047 258.648V258.906C51.8047 259.521 51.7161 260.089 51.5391 260.609C51.362 261.125 51.1068 261.573 50.7734 261.953C50.4453 262.333 50.0495 262.63 49.5859 262.844C49.1224 263.052 48.6068 263.156 48.0391 263.156C47.4661 263.156 46.9479 263.052 46.4844 262.844C46.0208 262.63 45.6224 262.333 45.2891 261.953C44.9557 261.573 44.7005 261.125 44.5234 260.609C44.3464 260.089 44.2578 259.521 44.2578 258.906ZM45.1875 258.648V258.906C45.1875 259.37 45.25 259.81 45.375 260.227C45.5 260.638 45.6823 261.005 45.9219 261.328C46.1615 261.646 46.4583 261.896 46.8125 262.078C47.1667 262.26 47.5755 262.352 48.0391 262.352C48.4974 262.352 48.901 262.26 49.25 262.078C49.6042 261.896 49.901 261.646 50.1406 261.328C50.3802 261.005 50.5599 260.638 50.6797 260.227C50.8047 259.81 50.8672 259.37 50.8672 258.906V258.648C50.8672 258.19 50.8047 257.755 50.6797 257.344C50.5599 256.932 50.3776 256.565 50.1328 256.242C49.8932 255.919 49.5964 255.664 49.2422 255.477C48.888 255.289 48.4818 255.195 48.0234 255.195C47.5651 255.195 47.1589 255.289 46.8047 255.477C46.4557 255.664 46.1589 255.919 45.9141 256.242C45.6745 256.565 45.4922 256.932 45.3672 257.344C45.2474 257.755 45.1875 258.19 45.1875 258.648ZM54.7812 251V263H53.8516V251H54.7812Z`,
          fill: `white`,
        }),
        (0, k.jsx)(`path`, {
          d: `M59.5 85C59.5 101.292 46.2924 114.5 30 114.5C13.7076 114.5 0.5 101.292 0.5 85C0.5 68.7076 13.7076 55.5 30 55.5C46.2924 55.5 59.5 68.7076 59.5 85Z`,
          fill: `#115E59`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M22.4644 87.5287C22.4644 87.5287 16.1999 93.9717 16.2 96.7407C16.2 97.5648 16.8651 98.2371 17.6909 98.2371C18.7838 98.2371 20.6224 97.1936 21.706 97.742C22.8743 98.3331 23.6256 99.8777 24.2752 100.818C24.6391 101.345 25.3892 101.278 25.9142 100.911C27.3915 99.8777 30.1557 93.1811 30.1557 93.1811M29.0054 90.5745C29.0054 90.5745 31.1573 96.9726 33.3093 100.415C33.7271 101.083 34.5987 101.069 35.2785 100.868C36.8062 100.415 36.7197 97.6324 38.0548 96.9726C39.2123 96.4007 41.0024 98.7061 42.455 97.742C43.2106 97.2404 43.8 96.7565 43.8 95.8508C43.8 93.9717 38.3689 86.9918 38.3689 86.9918M41.2919 79.4168C41.2919 85.6117 36.3061 90.6336 30.1557 90.6336C24.0053 90.6336 19.0194 85.6117 19.0194 79.4168C19.0194 73.2219 24.0053 68.2 30.1557 68.2C36.3061 68.2 41.2919 73.2219 41.2919 79.4168Z`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M34.7354 73.7555C32.0354 70.7555 27.2667 71.1794 24.6242 75.2206C22.1216 79.0478 23.6354 83.6555 27.5354 85.4555`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M36.6 75.3999C37.5909 77.2761 37.7549 78.7519 37.2 80.7999C36.6728 82.7454 35.8801 83.8863 34.2 84.9999C32.7781 85.9424 31.7051 86.2489 30 86.1999`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`rect`, {
          y: `122`,
          width: `60`,
          height: `30`,
          rx: `4`,
          fill: `#115E59`,
        }),
        (0, k.jsx)(`path`, {
          d: `M4.42188 130.625H8.11719C8.90365 130.625 9.58594 130.753 10.1641 131.008C10.7422 131.263 11.1875 131.641 11.5 132.141C11.8177 132.635 11.9766 133.245 11.9766 133.969C11.9766 134.505 11.862 134.992 11.6328 135.43C11.4089 135.867 11.099 136.234 10.7031 136.531C10.3073 136.823 9.84896 137.023 9.32812 137.133L8.99219 137.258H5.04688L5.03125 136.438H8.33594C8.92969 136.438 9.42448 136.323 9.82031 136.094C10.2161 135.865 10.513 135.562 10.7109 135.188C10.9141 134.807 11.0156 134.401 11.0156 133.969C11.0156 133.453 10.9036 133.008 10.6797 132.633C10.4609 132.253 10.1354 131.961 9.70312 131.758C9.27083 131.555 8.74219 131.453 8.11719 131.453H5.38281V142H4.42188V130.625ZM11.4453 142L8.5 136.914L9.53125 136.906L12.4688 141.898V142H11.4453ZM17.6641 142.156C17.112 142.156 16.6042 142.055 16.1406 141.852C15.6823 141.648 15.2812 141.362 14.9375 140.992C14.599 140.622 14.3359 140.185 14.1484 139.68C13.9661 139.169 13.875 138.612 13.875 138.008V137.672C13.875 137.021 13.9714 136.432 14.1641 135.906C14.3568 135.38 14.6224 134.93 14.9609 134.555C15.2995 134.18 15.6849 133.893 16.1172 133.695C16.5547 133.492 17.013 133.391 17.4922 133.391C18.0286 133.391 18.5052 133.487 18.9219 133.68C19.3385 133.867 19.6875 134.135 19.9688 134.484C20.2552 134.828 20.4714 135.237 20.6172 135.711C20.763 136.18 20.8359 136.698 20.8359 137.266V137.836H14.4375V137.039H19.9062V136.93C19.8958 136.456 19.7995 136.013 19.6172 135.602C19.4401 135.185 19.1745 134.846 18.8203 134.586C18.4661 134.326 18.0234 134.195 17.4922 134.195C17.0964 134.195 16.7318 134.279 16.3984 134.445C16.0703 134.612 15.7865 134.852 15.5469 135.164C15.3125 135.471 15.1302 135.839 15 136.266C14.875 136.688 14.8125 137.156 14.8125 137.672V138.008C14.8125 138.477 14.8802 138.914 15.0156 139.32C15.1562 139.721 15.3542 140.076 15.6094 140.383C15.8698 140.69 16.1771 140.93 16.5312 141.102C16.8854 141.273 17.276 141.359 17.7031 141.359C18.2031 141.359 18.6458 141.268 19.0312 141.086C19.4167 140.898 19.763 140.604 20.0703 140.203L20.6562 140.656C20.474 140.927 20.2448 141.177 19.9688 141.406C19.6979 141.635 19.3724 141.818 18.9922 141.953C18.612 142.089 18.1693 142.156 17.6641 142.156ZM25.0234 140.023L27.0625 133.547H27.7188L27.3281 135.289L25.1953 142H24.5391L25.0234 140.023ZM22.9062 133.547L24.6953 140.062L25.0781 142H24.3984L21.9453 133.547H22.9062ZM30.2578 140.039L32 133.547H32.9609L30.5078 142H29.8359L30.2578 140.039ZM27.8516 133.547L29.8594 139.969L30.3672 142H29.7109L27.5312 135.281L27.1641 133.547H27.8516ZM39.8984 140.484V136.125C39.8984 135.724 39.8151 135.378 39.6484 135.086C39.4818 134.794 39.237 134.57 38.9141 134.414C38.5911 134.258 38.1927 134.18 37.7188 134.18C37.2812 134.18 36.8906 134.258 36.5469 134.414C36.2083 134.565 35.9401 134.771 35.7422 135.031C35.5495 135.286 35.4531 135.57 35.4531 135.883L34.5156 135.875C34.5156 135.557 34.5938 135.25 34.75 134.953C34.9062 134.656 35.1276 134.391 35.4141 134.156C35.7005 133.922 36.0417 133.737 36.4375 133.602C36.8385 133.461 37.2786 133.391 37.7578 133.391C38.362 133.391 38.8932 133.492 39.3516 133.695C39.8151 133.898 40.1771 134.203 40.4375 134.609C40.6979 135.016 40.8281 135.526 40.8281 136.141V140.227C40.8281 140.518 40.849 140.82 40.8906 141.133C40.9375 141.445 41.0026 141.703 41.0859 141.906V142H40.0938C40.0312 141.812 39.9818 141.578 39.9453 141.297C39.9141 141.01 39.8984 140.74 39.8984 140.484ZM40.1172 137.078L40.1328 137.797H38.2969C37.8177 137.797 37.388 137.841 37.0078 137.93C36.6328 138.013 36.3151 138.138 36.0547 138.305C35.7943 138.466 35.5938 138.661 35.4531 138.891C35.3177 139.12 35.25 139.38 35.25 139.672C35.25 139.974 35.3255 140.25 35.4766 140.5C35.6328 140.75 35.8516 140.951 36.1328 141.102C36.4193 141.247 36.7578 141.32 37.1484 141.32C37.6693 141.32 38.1276 141.224 38.5234 141.031C38.9245 140.839 39.2552 140.586 39.5156 140.273C39.776 139.961 39.9505 139.62 40.0391 139.25L40.4453 139.789C40.3776 140.049 40.2526 140.318 40.0703 140.594C39.8932 140.865 39.6615 141.12 39.375 141.359C39.0885 141.594 38.75 141.786 38.3594 141.938C37.974 142.083 37.5365 142.156 37.0469 142.156C36.4948 142.156 36.013 142.052 35.6016 141.844C35.1953 141.635 34.8776 141.352 34.6484 140.992C34.4245 140.628 34.3125 140.216 34.3125 139.758C34.3125 139.341 34.401 138.969 34.5781 138.641C34.7552 138.307 35.0104 138.026 35.3438 137.797C35.6823 137.562 36.0885 137.385 36.5625 137.266C37.0417 137.141 37.5781 137.078 38.1719 137.078H40.1172ZM44.2656 134.945V142H43.3359V133.547H44.2422L44.2656 134.945ZM47.2578 133.484L47.2344 134.344C47.1302 134.328 47.0286 134.315 46.9297 134.305C46.8307 134.294 46.724 134.289 46.6094 134.289C46.2031 134.289 45.8464 134.365 45.5391 134.516C45.237 134.661 44.9818 134.867 44.7734 135.133C44.5651 135.393 44.4062 135.701 44.2969 136.055C44.1875 136.404 44.125 136.779 44.1094 137.18L43.7656 137.312C43.7656 136.76 43.8229 136.247 43.9375 135.773C44.0521 135.299 44.2266 134.885 44.4609 134.531C44.7005 134.172 45 133.893 45.3594 133.695C45.724 133.492 46.151 133.391 46.6406 133.391C46.7604 133.391 46.8776 133.401 46.9922 133.422C47.112 133.438 47.2005 133.458 47.2578 133.484ZM54.0625 140.359V130H55V142H54.125L54.0625 140.359ZM48.1953 137.859V137.695C48.1953 137.039 48.2708 136.448 48.4219 135.922C48.5729 135.391 48.7891 134.938 49.0703 134.562C49.3568 134.182 49.7005 133.893 50.1016 133.695C50.5026 133.492 50.9557 133.391 51.4609 133.391C51.9557 133.391 52.3932 133.471 52.7734 133.633C53.1536 133.794 53.4792 134.026 53.75 134.328C54.026 134.63 54.2474 134.99 54.4141 135.406C54.5859 135.823 54.7109 136.286 54.7891 136.797V138.883C54.7266 139.362 54.612 139.802 54.4453 140.203C54.2786 140.599 54.0573 140.945 53.7812 141.242C53.5052 141.534 53.1719 141.76 52.7812 141.922C52.3958 142.078 51.9505 142.156 51.4453 142.156C50.9453 142.156 50.4948 142.052 50.0938 141.844C49.6927 141.635 49.3516 141.341 49.0703 140.961C48.7891 140.576 48.5729 140.12 48.4219 139.594C48.2708 139.068 48.1953 138.49 48.1953 137.859ZM49.1328 137.695V137.859C49.1328 138.354 49.1823 138.812 49.2812 139.234C49.3802 139.656 49.5312 140.023 49.7344 140.336C49.9375 140.648 50.1953 140.893 50.5078 141.07C50.8203 141.247 51.1901 141.336 51.6172 141.336C52.1536 141.336 52.6042 141.234 52.9688 141.031C53.3333 140.823 53.625 140.549 53.8438 140.211C54.0625 139.867 54.2214 139.492 54.3203 139.086V136.656C54.2578 136.38 54.1667 136.099 54.0469 135.812C53.9271 135.526 53.763 135.263 53.5547 135.023C53.3516 134.779 53.0911 134.583 52.7734 134.438C52.4609 134.286 52.0807 134.211 51.6328 134.211C51.2005 134.211 50.8281 134.299 50.5156 134.477C50.2031 134.654 49.9427 134.901 49.7344 135.219C49.5312 135.531 49.3802 135.898 49.2812 136.32C49.1823 136.742 49.1328 137.201 49.1328 137.695Z`,
          fill: `white`,
        }),
        (0, k.jsx)(`circle`, {
          cx: `238`,
          cy: `82`,
          r: `29.5`,
          fill: `#115E59`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M250.3 85.3L252.7 83.8`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M247.6 85.3001L249.7 84.1001`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M237.29 95.5792C237.29 95.5792 234.257 95.5425 232.378 95.957C230.372 96.3997 228.6 96.7125 227.467 97.8459C226.334 98.9793 251.268 99.2627 249.379 97.8459C248.289 97.0286 245.956 96.3997 244.09 95.957C242.361 95.5468 239.556 95.5792 239.556 95.5792M237.29 95.5792C237.29 95.5792 237.667 89.9123 237.565 86.8899C237.462 83.8676 238.234 65.7335 238.234 65.7335M237.29 95.5792H238.423H239.556M238.234 65.7335H227.089M238.234 65.7335H248.623M238.234 65.7335C238.234 65.7335 239.179 83.8676 239.179 86.1343C239.179 88.4011 239.556 95.5792 239.556 95.5792M238.234 65.7335V64.6001M227.089 65.7335L224.067 80.0896M227.089 65.7335L230.112 80.0896M248.623 65.7335C247.723 72.3226 247.151 75.505 245.979 80.0896M248.623 65.7335L250.135 72.9116L251.646 80.0896`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M249.007 86.5121C251.464 86.5121 254.29 84.7522 254.29 83.2857C254.29 82.0763 252.17 83.2236 249.007 83.2857C246.05 83.3438 243.519 82.1284 243.723 83.2857C244.034 85.0455 246.549 86.5121 249.007 86.5121Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M227.095 86.5121C229.552 86.5121 232.378 84.7522 232.378 83.2857C232.378 82.0763 230.258 83.2236 227.095 83.2857C224.138 83.3438 221.607 82.1284 221.812 83.2857C222.122 85.0455 224.637 86.5121 227.095 86.5121Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M228.1 85.6L230.5 83.8`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M223.3 84.1L223.6 83.8M225.4 85.3L226.9 84.1`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M245.8 84.7001L247 84.1001`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`rect`, {
          x: `205`,
          y: `120`,
          width: `66`,
          height: `30`,
          rx: `4`,
          fill: `#115E59`,
        }),
        (0, k.jsx)(`path`, {
          d: `M209.656 128.625V140H208.695V128.625H209.656ZM214.953 133.859V134.688H209.336V133.859H214.953ZM215.742 128.625V129.453H209.336V128.625H215.742ZM222.352 138.484V134.125C222.352 133.724 222.268 133.378 222.102 133.086C221.935 132.794 221.69 132.57 221.367 132.414C221.044 132.258 220.646 132.18 220.172 132.18C219.734 132.18 219.344 132.258 219 132.414C218.661 132.565 218.393 132.771 218.195 133.031C218.003 133.286 217.906 133.57 217.906 133.883L216.969 133.875C216.969 133.557 217.047 133.25 217.203 132.953C217.359 132.656 217.581 132.391 217.867 132.156C218.154 131.922 218.495 131.737 218.891 131.602C219.292 131.461 219.732 131.391 220.211 131.391C220.815 131.391 221.346 131.492 221.805 131.695C222.268 131.898 222.63 132.203 222.891 132.609C223.151 133.016 223.281 133.526 223.281 134.141V138.227C223.281 138.518 223.302 138.82 223.344 139.133C223.391 139.445 223.456 139.703 223.539 139.906V140H222.547C222.484 139.812 222.435 139.578 222.398 139.297C222.367 139.01 222.352 138.74 222.352 138.484ZM222.57 135.078L222.586 135.797H220.75C220.271 135.797 219.841 135.841 219.461 135.93C219.086 136.013 218.768 136.138 218.508 136.305C218.247 136.466 218.047 136.661 217.906 136.891C217.771 137.12 217.703 137.38 217.703 137.672C217.703 137.974 217.779 138.25 217.93 138.5C218.086 138.75 218.305 138.951 218.586 139.102C218.872 139.247 219.211 139.32 219.602 139.32C220.122 139.32 220.581 139.224 220.977 139.031C221.378 138.839 221.708 138.586 221.969 138.273C222.229 137.961 222.404 137.62 222.492 137.25L222.898 137.789C222.831 138.049 222.706 138.318 222.523 138.594C222.346 138.865 222.115 139.12 221.828 139.359C221.542 139.594 221.203 139.786 220.812 139.938C220.427 140.083 219.99 140.156 219.5 140.156C218.948 140.156 218.466 140.052 218.055 139.844C217.648 139.635 217.331 139.352 217.102 138.992C216.878 138.628 216.766 138.216 216.766 137.758C216.766 137.341 216.854 136.969 217.031 136.641C217.208 136.307 217.464 136.026 217.797 135.797C218.135 135.562 218.542 135.385 219.016 135.266C219.495 135.141 220.031 135.078 220.625 135.078H222.57ZM226.828 131.547V140H225.898V131.547H226.828ZM225.734 129.102C225.734 128.924 225.789 128.776 225.898 128.656C226.013 128.531 226.169 128.469 226.367 128.469C226.565 128.469 226.721 128.531 226.836 128.656C226.956 128.776 227.016 128.924 227.016 129.102C227.016 129.273 226.956 129.422 226.836 129.547C226.721 129.667 226.565 129.727 226.367 129.727C226.169 129.727 226.013 129.667 225.898 129.547C225.789 129.422 225.734 129.273 225.734 129.102ZM230.312 132.945V140H229.383V131.547H230.289L230.312 132.945ZM233.305 131.484L233.281 132.344C233.177 132.328 233.076 132.315 232.977 132.305C232.878 132.294 232.771 132.289 232.656 132.289C232.25 132.289 231.893 132.365 231.586 132.516C231.284 132.661 231.029 132.867 230.82 133.133C230.612 133.393 230.453 133.701 230.344 134.055C230.234 134.404 230.172 134.779 230.156 135.18L229.812 135.312C229.812 134.76 229.87 134.247 229.984 133.773C230.099 133.299 230.273 132.885 230.508 132.531C230.747 132.172 231.047 131.893 231.406 131.695C231.771 131.492 232.198 131.391 232.688 131.391C232.807 131.391 232.924 131.401 233.039 131.422C233.159 131.438 233.247 131.458 233.305 131.484ZM235.703 133.352V140H234.773V131.547H235.664L235.703 133.352ZM235.492 135.25L235.078 135.016C235.109 134.516 235.211 134.047 235.383 133.609C235.555 133.172 235.786 132.786 236.078 132.453C236.375 132.12 236.721 131.859 237.117 131.672C237.518 131.484 237.961 131.391 238.445 131.391C238.867 131.391 239.245 131.448 239.578 131.562C239.911 131.677 240.195 131.859 240.43 132.109C240.664 132.359 240.841 132.68 240.961 133.07C241.086 133.461 241.148 133.938 241.148 134.5V140H240.211V134.492C240.211 133.909 240.13 133.453 239.969 133.125C239.807 132.792 239.578 132.555 239.281 132.414C238.984 132.273 238.633 132.203 238.227 132.203C237.779 132.203 237.385 132.302 237.047 132.5C236.714 132.693 236.432 132.945 236.203 133.258C235.979 133.565 235.807 133.896 235.688 134.25C235.568 134.599 235.503 134.932 235.492 135.25ZM246.836 140.156C246.284 140.156 245.776 140.055 245.312 139.852C244.854 139.648 244.453 139.362 244.109 138.992C243.771 138.622 243.508 138.185 243.32 137.68C243.138 137.169 243.047 136.612 243.047 136.008V135.672C243.047 135.021 243.143 134.432 243.336 133.906C243.529 133.38 243.794 132.93 244.133 132.555C244.471 132.18 244.857 131.893 245.289 131.695C245.727 131.492 246.185 131.391 246.664 131.391C247.201 131.391 247.677 131.487 248.094 131.68C248.51 131.867 248.859 132.135 249.141 132.484C249.427 132.828 249.643 133.237 249.789 133.711C249.935 134.18 250.008 134.698 250.008 135.266V135.836H243.609V135.039H249.078V134.93C249.068 134.456 248.971 134.013 248.789 133.602C248.612 133.185 248.346 132.846 247.992 132.586C247.638 132.326 247.195 132.195 246.664 132.195C246.268 132.195 245.904 132.279 245.57 132.445C245.242 132.612 244.958 132.852 244.719 133.164C244.484 133.471 244.302 133.839 244.172 134.266C244.047 134.688 243.984 135.156 243.984 135.672V136.008C243.984 136.477 244.052 136.914 244.188 137.32C244.328 137.721 244.526 138.076 244.781 138.383C245.042 138.69 245.349 138.93 245.703 139.102C246.057 139.273 246.448 139.359 246.875 139.359C247.375 139.359 247.818 139.268 248.203 139.086C248.589 138.898 248.935 138.604 249.242 138.203L249.828 138.656C249.646 138.927 249.417 139.177 249.141 139.406C248.87 139.635 248.544 139.818 248.164 139.953C247.784 140.089 247.341 140.156 246.836 140.156ZM256.914 137.844C256.914 137.615 256.857 137.388 256.742 137.164C256.628 136.94 256.406 136.734 256.078 136.547C255.755 136.359 255.279 136.201 254.648 136.07C254.18 135.966 253.76 135.849 253.391 135.719C253.026 135.589 252.719 135.432 252.469 135.25C252.219 135.068 252.029 134.849 251.898 134.594C251.768 134.339 251.703 134.036 251.703 133.688C251.703 133.375 251.771 133.081 251.906 132.805C252.047 132.523 252.245 132.279 252.5 132.07C252.76 131.857 253.073 131.69 253.438 131.57C253.807 131.451 254.221 131.391 254.68 131.391C255.331 131.391 255.888 131.503 256.352 131.727C256.82 131.945 257.177 132.245 257.422 132.625C257.672 133.005 257.797 133.435 257.797 133.914H256.867C256.867 133.622 256.781 133.346 256.609 133.086C256.443 132.826 256.195 132.612 255.867 132.445C255.544 132.279 255.148 132.195 254.68 132.195C254.195 132.195 253.802 132.268 253.5 132.414C253.198 132.56 252.977 132.745 252.836 132.969C252.701 133.193 252.633 133.424 252.633 133.664C252.633 133.852 252.661 134.023 252.719 134.18C252.781 134.331 252.891 134.471 253.047 134.602C253.208 134.732 253.438 134.854 253.734 134.969C254.031 135.083 254.417 135.195 254.891 135.305C255.573 135.456 256.13 135.641 256.562 135.859C257 136.073 257.323 136.339 257.531 136.656C257.74 136.969 257.844 137.349 257.844 137.797C257.844 138.146 257.771 138.466 257.625 138.758C257.479 139.044 257.268 139.292 256.992 139.5C256.721 139.708 256.393 139.87 256.008 139.984C255.628 140.099 255.201 140.156 254.727 140.156C254.013 140.156 253.409 140.039 252.914 139.805C252.424 139.565 252.052 139.253 251.797 138.867C251.547 138.477 251.422 138.062 251.422 137.625H252.352C252.383 138.062 252.521 138.409 252.766 138.664C253.01 138.914 253.31 139.091 253.664 139.195C254.023 139.299 254.378 139.352 254.727 139.352C255.206 139.352 255.607 139.281 255.93 139.141C256.253 139 256.497 138.815 256.664 138.586C256.831 138.357 256.914 138.109 256.914 137.844ZM265.023 137.844C265.023 137.615 264.966 137.388 264.852 137.164C264.737 136.94 264.516 136.734 264.188 136.547C263.865 136.359 263.388 136.201 262.758 136.07C262.289 135.966 261.87 135.849 261.5 135.719C261.135 135.589 260.828 135.432 260.578 135.25C260.328 135.068 260.138 134.849 260.008 134.594C259.878 134.339 259.812 134.036 259.812 133.688C259.812 133.375 259.88 133.081 260.016 132.805C260.156 132.523 260.354 132.279 260.609 132.07C260.87 131.857 261.182 131.69 261.547 131.57C261.917 131.451 262.331 131.391 262.789 131.391C263.44 131.391 263.997 131.503 264.461 131.727C264.93 131.945 265.286 132.245 265.531 132.625C265.781 133.005 265.906 133.435 265.906 133.914H264.977C264.977 133.622 264.891 133.346 264.719 133.086C264.552 132.826 264.305 132.612 263.977 132.445C263.654 132.279 263.258 132.195 262.789 132.195C262.305 132.195 261.911 132.268 261.609 132.414C261.307 132.56 261.086 132.745 260.945 132.969C260.81 133.193 260.742 133.424 260.742 133.664C260.742 133.852 260.771 134.023 260.828 134.18C260.891 134.331 261 134.471 261.156 134.602C261.318 134.732 261.547 134.854 261.844 134.969C262.141 135.083 262.526 135.195 263 135.305C263.682 135.456 264.24 135.641 264.672 135.859C265.109 136.073 265.432 136.339 265.641 136.656C265.849 136.969 265.953 137.349 265.953 137.797C265.953 138.146 265.88 138.466 265.734 138.758C265.589 139.044 265.378 139.292 265.102 139.5C264.831 139.708 264.503 139.87 264.117 139.984C263.737 140.099 263.31 140.156 262.836 140.156C262.122 140.156 261.518 140.039 261.023 139.805C260.534 139.565 260.161 139.253 259.906 138.867C259.656 138.477 259.531 138.062 259.531 137.625H260.461C260.492 138.062 260.63 138.409 260.875 138.664C261.12 138.914 261.419 139.091 261.773 139.195C262.133 139.299 262.487 139.352 262.836 139.352C263.315 139.352 263.716 139.281 264.039 139.141C264.362 139 264.607 138.815 264.773 138.586C264.94 138.357 265.023 138.109 265.023 137.844Z`,
          fill: `white`,
        }),
      ],
    }),
  bi = () =>
    (0, k.jsxs)(`svg`, {
      width: `100`,
      height: `101`,
      viewBox: `0 0 100 101`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`circle`, {
          cx: `50`,
          cy: `50`,
          r: `49.5`,
          fill: `#115E59`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M47.5 31L47.417 30.5069L47.417 30.5069L47.5 31ZM37 33L37.1669 33.4713L37.1669 33.4713L37 33ZM24.8942 47.4383L24.7341 47.912L24.8942 47.4383ZM26.2547 47.4383L26.3136 47.9349L26.2547 47.4383ZM33.0579 42.6257L33.4468 42.94L33.4643 42.9183L33.4793 42.8948L33.0579 42.6257ZM31.6973 45.3758L32.1894 45.2872L31.6973 45.3758ZM33.7383 47.4383L33.9257 46.9748L33.7383 47.4383ZM36.4595 47.4383L36.3841 46.9441L36.3841 46.9441L36.4595 47.4383ZM43.9431 40.5631L44.1525 41.0172L44.1572 41.0149L43.9431 40.5631ZM50.5 42.3132L50.8661 42.6537L50.8661 42.6537L50.5 42.3132ZM47.5 47.5L47.0373 47.3105L47.0312 47.3253L47.0261 47.3406L47.5 47.5ZM47.3446 50.876L46.8884 51.0806L46.8884 51.0806L47.3446 50.876ZM52 52L51.7226 51.584L52 52ZM54.5 48.5L54.9281 48.7583L54.9281 48.7583L54.5 48.5ZM63.0165 40.2497L63.125 39.7616L63.125 39.7616L63.0165 40.2497ZM66.0984 44.0623L66.4457 43.7027L66.0984 44.0623ZM70 47L69.896 47.489L70 47ZM73.8197 46.0633L73.4458 45.7313L73.8197 46.0633ZM73.8197 42.3132L73.5004 42.698L73.8197 42.3132ZM36.4595 38.5L36.1309 38.1231L36.1309 38.1231L36.4595 38.5ZM41.5 35.7504L41.7083 36.205L41.5 35.7504ZM44.5209 35.4995C44.7968 35.4879 45.0111 35.2549 44.9995 34.979C44.9879 34.7031 44.7549 34.4888 44.479 34.5004L44.5209 35.4995ZM22.8531 39.1881L22.5854 38.7658L22.8531 39.1881ZM20 41.5L19.5187 41.3643L19.5187 41.3643L20 41.5ZM20.8122 44.0007L21.1603 43.6418L20.8122 44.0007ZM57.5 26.5C57.2292 26.0797 57.2292 26.0797 57.2292 26.0797C57.2292 26.0797 57.2292 26.0797 57.2291 26.0797C57.229 26.0798 57.2288 26.0799 57.2285 26.0801C57.2279 26.0805 57.227 26.0811 57.2257 26.0819C57.2231 26.0836 57.2191 26.0862 57.2137 26.0896C57.2029 26.0965 57.1866 26.1069 57.165 26.1206C57.1217 26.148 57.0574 26.1885 56.9737 26.2406C56.8064 26.3446 56.562 26.4945 56.2558 26.6768C55.6431 27.0415 54.784 27.5347 53.7993 28.049C51.8147 29.0853 49.3744 30.1772 47.417 30.5069L47.583 31.4931C49.7075 31.1352 52.2672 29.9772 54.2622 28.9354C55.2672 28.4106 56.1428 27.9078 56.7672 27.5361C57.0796 27.3502 57.3295 27.1969 57.5018 27.0898C57.5879 27.0362 57.6547 26.9942 57.7001 26.9654C57.7229 26.951 57.7403 26.9399 57.7521 26.9323C57.758 26.9285 57.7626 26.9256 57.7657 26.9236C57.7673 26.9226 57.7685 26.9218 57.7693 26.9213C57.7697 26.921 57.7701 26.9208 57.7703 26.9206C57.7704 26.9205 57.7706 26.9205 57.7706 26.9204C57.7707 26.9204 57.7708 26.9203 57.5 26.5ZM47.417 30.5069C44.1707 31.0537 41.2099 30.9782 36.833 32.5287L37.1669 33.4713C41.439 31.958 44.1521 32.0709 47.583 31.4931L47.417 30.5069ZM36.833 32.5287C35.1204 33.1354 33.2629 34.0056 31.8412 34.7194C31.1286 35.0772 30.522 35.3974 30.0932 35.6283C29.8788 35.7438 29.7087 35.837 29.592 35.9015C29.5336 35.9338 29.4885 35.9589 29.4579 35.976C29.4426 35.9845 29.4309 35.9911 29.423 35.9956C29.419 35.9978 29.416 35.9995 29.4139 36.0007C29.4128 36.0013 29.412 36.0017 29.4115 36.002C29.4112 36.0022 29.411 36.0023 29.4108 36.0024C29.4107 36.0024 29.4107 36.0025 29.4106 36.0025C29.4106 36.0025 29.4105 36.0026 29.6564 36.438C29.9022 36.8734 29.9022 36.8734 29.9022 36.8734C29.9022 36.8733 29.9022 36.8733 29.9022 36.8733C29.9023 36.8733 29.9025 36.8732 29.9027 36.8731C29.9031 36.8728 29.9037 36.8725 29.9046 36.872C29.9064 36.871 29.9091 36.8695 29.9128 36.8674C29.9201 36.8633 29.9311 36.8571 29.9457 36.8489C29.975 36.8326 30.0187 36.8082 30.0756 36.7768C30.1895 36.7138 30.3564 36.6224 30.5674 36.5087C30.9895 36.2814 31.5874 35.9657 32.2898 35.6131C33.6981 34.9061 35.5124 34.0574 37.1669 33.4713L36.833 32.5287ZM29.6564 36.438C29.2775 36.1116 29.2775 36.1117 29.2774 36.1117C29.2774 36.1118 29.2773 36.1119 29.2772 36.112C29.277 36.1122 29.2768 36.1125 29.2764 36.1129C29.2758 36.1137 29.2748 36.1148 29.2734 36.1164C29.2708 36.1194 29.2669 36.124 29.2618 36.1299C29.2516 36.1418 29.2364 36.1595 29.2167 36.1825C29.1773 36.2285 29.1196 36.296 29.0461 36.3823C28.899 36.555 28.6888 36.803 28.4355 37.1048C27.9292 37.7082 27.2502 38.5278 26.5603 39.3912C25.8713 40.2535 25.1674 41.1647 24.6133 41.9501C24.3366 42.3423 24.0929 42.7093 23.9061 43.0266C23.7274 43.3302 23.5733 43.6332 23.5136 43.8842L24.4864 44.1157C24.5085 44.023 24.5925 43.8319 24.7679 43.5339C24.9352 43.2497 25.1616 42.9076 25.4304 42.5265C25.9676 41.7651 26.6573 40.8717 27.3415 40.0154C28.0248 39.1602 28.6985 38.3472 29.2016 37.7475C29.4531 37.4478 29.6617 37.2017 29.8074 37.0307C29.8802 36.9451 29.9373 36.8784 29.9761 36.8331C29.9955 36.8104 30.0104 36.7932 30.0203 36.7816C30.0253 36.7758 30.029 36.7714 30.0315 36.7685C30.0328 36.7671 30.0337 36.766 30.0343 36.7653C30.0346 36.7649 30.0349 36.7647 30.035 36.7645C30.0351 36.7644 30.0351 36.7644 30.0352 36.7643C30.0352 36.7643 30.0352 36.7643 29.6564 36.438ZM23.5136 43.8842C23.3454 44.5909 23.222 45.4162 23.3376 46.1464C23.4574 46.9023 23.8499 47.6131 24.7341 47.912L25.0543 46.9647C24.6241 46.8192 24.4059 46.4984 24.3253 45.9899C24.2407 45.4558 24.3273 44.7841 24.4864 44.1157L23.5136 43.8842ZM24.7341 47.912C25.0224 48.0095 25.2307 48.0507 25.4931 48.0366C25.6072 48.0305 25.7261 48.0143 25.8489 47.997C25.9763 47.979 26.1225 47.9575 26.3136 47.9349L26.1959 46.9418C25.9912 46.9661 25.8323 46.9894 25.7091 47.0068C25.5812 47.0248 25.5038 47.0346 25.4397 47.0381C25.3455 47.0431 25.2693 47.0374 25.0543 46.9647L24.7341 47.912ZM26.3136 47.9349C28.0903 47.7242 29.8921 46.4234 31.1966 45.2623C31.8616 44.6704 32.4222 44.092 32.8165 43.6618C33.0139 43.4464 33.1702 43.2675 33.2777 43.1418C33.3315 43.0789 33.3731 43.0292 33.4016 42.9949C33.4159 42.9778 33.4268 42.9645 33.4344 42.9552C33.4382 42.9506 33.4411 42.947 33.4432 42.9445C33.4442 42.9432 33.445 42.9422 33.4456 42.9414C33.4459 42.9411 33.4462 42.9408 33.4464 42.9405C33.4465 42.9404 33.4466 42.9403 33.4466 42.9402C33.4467 42.9401 33.4468 42.94 33.0579 42.6257C32.6691 42.3113 32.6692 42.3113 32.6692 42.3112C32.6692 42.3112 32.6692 42.3112 32.6692 42.3112C32.6692 42.3112 32.6691 42.3113 32.669 42.3115C32.6687 42.3118 32.6682 42.3124 32.6675 42.3133C32.6661 42.315 32.6639 42.3178 32.6608 42.3216C32.6546 42.3291 32.645 42.3407 32.6323 42.3561C32.6067 42.3869 32.5682 42.4328 32.5177 42.4918C32.4168 42.6099 32.2681 42.7801 32.0793 42.9861C31.7012 43.3986 31.165 43.9517 30.5318 44.5153C29.24 45.6651 27.6402 46.7706 26.1959 46.9418L26.3136 47.9349ZM33.0579 42.6257C32.7049 42.2716 32.7048 42.2717 32.7047 42.2718C32.7047 42.2718 32.7046 42.2719 32.7045 42.272C32.7044 42.2721 32.7042 42.2723 32.704 42.2725C32.7036 42.2729 32.7031 42.2734 32.7025 42.274C32.7013 42.2752 32.6998 42.2767 32.6979 42.2787C32.6941 42.2825 32.6888 42.2879 32.6821 42.2947C32.6689 42.3084 32.6502 42.3278 32.6269 42.3525C32.5804 42.4018 32.5153 42.4726 32.4384 42.5609C32.2853 42.7367 32.082 42.9858 31.8843 43.2767C31.688 43.5658 31.4885 43.9088 31.3521 44.2719C31.2172 44.6312 31.1302 45.0473 31.2052 45.4643L32.1894 45.2872C32.1582 45.1136 32.1881 44.8905 32.2883 44.6234C32.3872 44.3601 32.5412 44.0894 32.7115 43.8387C32.8806 43.5898 33.0573 43.3729 33.1925 43.2176C33.2598 43.1404 33.3159 43.0794 33.3546 43.0383C33.374 43.0178 33.3889 43.0024 33.3985 42.9924C33.4034 42.9875 33.4069 42.9839 33.409 42.9817C33.4101 42.9807 33.4108 42.98 33.4111 42.9796C33.4113 42.9795 33.4113 42.9794 33.4113 42.9794C33.4113 42.9794 33.4113 42.9794 33.4112 42.9795C33.4112 42.9795 33.4111 42.9796 33.4111 42.9796C33.4111 42.9797 33.411 42.9797 33.0579 42.6257ZM31.2052 45.4643C31.4546 46.8507 32.4646 47.4628 33.5509 47.9019L33.9257 46.9748C32.9188 46.5678 32.3433 46.1424 32.1894 45.2872L31.2052 45.4643ZM33.5509 47.9019C34.6991 48.3661 35.5651 48.0806 36.5349 47.9326L36.3841 46.9441C35.2524 47.1167 34.7508 47.3083 33.9257 46.9748L33.5509 47.9019ZM36.5349 47.9326C38.7229 47.5989 39.8008 46.1135 40.7377 44.6711C41.6974 43.1937 42.5144 41.7726 44.1524 41.0171L43.7337 40.1091C41.7785 41.0107 40.8065 42.7294 39.8991 44.1264C38.9689 45.5584 38.1016 46.6821 36.3841 46.9441L36.5349 47.9326ZM52.0979 38.2971C52.3185 38.5957 52.3081 39.0393 51.9043 39.7517C51.5124 40.4432 50.8469 41.2059 50.1339 41.9727L50.8661 42.6537C51.5741 41.8924 52.3172 41.0514 52.7743 40.2448C53.2196 39.4591 53.4986 38.5101 52.9021 37.7028L52.0979 38.2971ZM50.1339 41.9727C49.3009 42.8684 48.525 44.2184 47.9677 45.3105C47.6858 45.8628 47.4539 46.3613 47.2924 46.7218C47.2115 46.9021 47.1482 47.0483 47.1048 47.1499C47.0832 47.2006 47.0665 47.2403 47.0551 47.2675C47.0495 47.2811 47.0451 47.2916 47.0421 47.2988C47.0406 47.3024 47.0395 47.3052 47.0387 47.3071C47.0383 47.3081 47.0379 47.3089 47.0377 47.3094C47.0376 47.3097 47.0375 47.3099 47.0374 47.3101C47.0374 47.3102 47.0374 47.3103 47.0374 47.3103C47.0373 47.3104 47.0373 47.3105 47.5 47.5C47.9627 47.6895 47.9627 47.6895 47.9627 47.6895C47.9627 47.6895 47.9627 47.6895 47.9627 47.6895C47.9627 47.6894 47.9627 47.6893 47.9628 47.6892C47.9629 47.6889 47.9631 47.6884 47.9634 47.6877C47.964 47.6863 47.9649 47.684 47.9662 47.6809C47.9688 47.6748 47.9727 47.6654 47.9779 47.6529C47.9883 47.628 48.004 47.5907 48.0246 47.5424C48.0658 47.4458 48.1268 47.3051 48.2049 47.1307C48.3613 46.7816 48.586 46.2989 48.8584 45.765C49.4098 44.6845 50.1339 43.4411 50.8661 42.6537L50.1339 41.9727ZM47.5 47.5C47.0261 47.3406 47.0261 47.3407 47.026 47.3408C47.026 47.3408 47.026 47.3409 47.0259 47.341C47.0259 47.3412 47.0258 47.3415 47.0257 47.3417C47.0255 47.3422 47.0253 47.3429 47.0251 47.3437C47.0245 47.3452 47.0239 47.3473 47.023 47.3498C47.0213 47.355 47.019 47.3621 47.0161 47.3712C47.0102 47.3894 47.0021 47.4152 46.9921 47.448C46.9721 47.5137 46.9447 47.6074 46.9138 47.7232C46.8523 47.9541 46.7762 48.2764 46.7184 48.6416C46.6072 49.3442 46.5447 50.3145 46.8884 51.0806L47.8008 50.6713C47.5844 50.1888 47.5996 49.4711 47.7061 48.7979C47.7572 48.4751 47.825 48.1875 47.8801 47.9806C47.9076 47.8774 47.9317 47.7952 47.9486 47.7396C47.9571 47.7118 47.9638 47.6907 47.9681 47.6771C47.9703 47.6703 47.9719 47.6653 47.9729 47.6624C47.9734 47.6609 47.9737 47.6599 47.9739 47.6594C47.974 47.6591 47.974 47.659 47.974 47.659C47.974 47.659 47.974 47.659 47.974 47.6591C47.974 47.6591 47.974 47.6592 47.974 47.6592C47.9739 47.6593 47.9739 47.6594 47.5 47.5ZM46.8884 51.0806C47.356 52.1229 48.348 52.7037 49.3554 52.9054C50.3575 53.1061 51.4712 52.9535 52.2774 52.416L51.7226 51.584C51.1799 51.9459 50.3487 52.0845 49.5517 51.9249C48.76 51.7664 48.0988 51.3355 47.8008 50.6713L46.8884 51.0806ZM52.2774 52.416C52.8679 52.0222 53.3855 51.323 53.8114 50.6553C54.2321 49.9959 54.6459 49.2259 54.9281 48.7583L54.0719 48.2416C53.7354 48.7992 53.3951 49.4485 52.9684 50.1175C52.5469 50.7782 52.1239 51.3164 51.7226 51.584L52.2774 52.416ZM54.9281 48.7583C55.2081 48.2942 55.4352 47.8564 55.641 47.4479C55.8493 47.0345 56.03 46.6633 56.2289 46.3047C56.618 45.603 57.0588 44.9844 57.8095 44.3926L57.1905 43.6073C56.305 44.3052 55.786 45.0414 55.3543 45.8197C55.1428 46.2012 54.9478 46.6012 54.7479 46.9979C54.5456 47.3995 54.3321 47.8105 54.0719 48.2416L54.9281 48.7583ZM57.8095 44.3926C58.2653 44.0333 58.6722 43.5611 59.0505 43.1013C59.4403 42.6274 59.8 42.1668 60.1959 41.7598C60.9718 40.9622 61.7745 40.4857 62.9079 40.7378L63.125 39.7616C61.5003 39.4003 60.3628 40.154 59.4791 41.0625C59.0451 41.5086 58.6452 42.0199 58.2782 42.466C57.8997 42.9261 57.5528 43.3217 57.1905 43.6073L57.8095 44.3926ZM62.9079 40.7378C63.4504 40.8584 63.776 41.0463 63.9941 41.2519C64.2157 41.4607 64.362 41.7208 64.4958 42.0498C64.5635 42.2164 64.6238 42.3894 64.6923 42.5823C64.7591 42.7706 64.8325 42.9746 64.9207 43.1796C65.0992 43.5945 65.3437 44.0286 65.7511 44.422L66.4457 43.7027C66.1645 43.4311 65.9855 43.1242 65.8394 42.7845C65.7653 42.6124 65.7013 42.4357 65.6347 42.2479C65.5697 42.0646 65.5005 41.8658 65.4221 41.6731C65.2635 41.2831 65.0506 40.8735 64.68 40.5242C64.3059 40.1716 63.8065 39.9132 63.125 39.7616L62.9079 40.7378ZM65.7511 44.422C66.0829 44.7424 66.374 45.057 66.6628 45.3664C66.948 45.6721 67.2339 45.9759 67.5387 46.2519C68.1612 46.8156 68.8705 47.2708 69.896 47.489L70.104 46.5109C69.2911 46.338 68.7357 45.9868 68.2099 45.5107C67.9406 45.2668 67.6816 44.9924 67.3938 44.6841C67.1097 44.3797 66.7999 44.0447 66.4457 43.7027L65.7511 44.422ZM69.896 47.489C71.2892 47.7854 72.9955 47.7445 74.1936 46.3953L73.4458 45.7313C72.6043 46.679 71.3621 46.7786 70.104 46.5109L69.896 47.489ZM74.1936 46.3953C74.7828 45.7317 74.9008 44.7278 74.8468 43.9264C74.8188 43.5108 74.7424 43.11 74.634 42.776C74.5344 42.469 74.3797 42.1282 74.1389 41.9284L73.5004 42.698C73.495 42.6935 73.5198 42.7144 73.5616 42.791C73.6005 42.8622 73.6426 42.9605 73.6828 43.0846C73.7633 43.3327 73.826 43.6516 73.8491 43.9937C73.8972 44.7078 73.7652 45.3716 73.4458 45.7313L74.1936 46.3953ZM74.1389 41.9284C72.7978 40.8157 71.8617 39.7893 71.3261 38.9711C71.0572 38.5604 70.9034 38.2234 70.8397 37.97C70.7741 37.7092 70.8203 37.6106 70.8342 37.5897L70.002 37.0352C69.7659 37.3895 69.771 37.8206 69.8699 38.2138C69.9706 38.6146 70.1867 39.0563 70.4895 39.5188C71.0973 40.4473 72.112 41.546 73.5004 42.698L74.1389 41.9284ZM70.8342 37.5897C71.0712 37.2339 72.0757 35.9257 73.0415 34.6814C73.52 34.0648 73.983 33.4717 74.3264 33.0325C74.4981 32.813 74.6398 32.632 74.7386 32.5059C74.7881 32.4429 74.8267 32.3936 74.853 32.36C74.8662 32.3433 74.8763 32.3304 74.883 32.3218C74.8864 32.3175 74.889 32.3142 74.8907 32.3121C74.8916 32.311 74.8922 32.3101 74.8926 32.3096C74.8928 32.3093 74.893 32.3091 74.8931 32.309C74.8932 32.3089 74.8932 32.3089 74.8932 32.3088C74.8933 32.3088 74.8933 32.3088 74.5 32C74.1067 31.6912 74.1067 31.6912 74.1067 31.6913C74.1067 31.6913 74.1066 31.6914 74.1066 31.6914C74.1065 31.6916 74.1063 31.6918 74.1061 31.6921C74.1056 31.6926 74.105 31.6935 74.1041 31.6946C74.1024 31.6968 74.0998 31.7001 74.0964 31.7044C74.0896 31.7131 74.0795 31.726 74.0663 31.7428C74.0399 31.7764 74.0011 31.8259 73.9516 31.889C73.8526 32.0154 73.7106 32.1967 73.5386 32.4165C73.1948 32.8562 72.731 33.4504 72.2516 34.0682C71.3014 35.2925 70.2649 36.6405 70.002 37.0352L70.8342 37.5897ZM33.0579 42.6257C33.4793 42.8948 33.4793 42.8948 33.4793 42.8949C33.4793 42.8949 33.4793 42.8949 33.4793 42.8949C33.4793 42.8948 33.4794 42.8948 33.4794 42.8947C33.4796 42.8945 33.4798 42.8941 33.4801 42.8936C33.4808 42.8926 33.4818 42.8909 33.4833 42.8886C33.4862 42.8841 33.4907 42.8772 33.4967 42.8679C33.5087 42.8493 33.5268 42.8215 33.5507 42.7853C33.5984 42.713 33.6688 42.6072 33.759 42.4753C33.9393 42.2113 34.1979 41.8434 34.5094 41.4293C35.1369 40.5953 35.9625 39.5968 36.7882 38.8768L36.1309 38.1231C35.2262 38.9121 34.3511 39.9764 33.7103 40.8281C33.3878 41.2568 33.1203 41.6374 32.9333 41.9112C32.8397 42.0481 32.7661 42.1586 32.7156 42.2352C32.6904 42.2735 32.6709 42.3034 32.6576 42.3239C32.6509 42.3342 32.6458 42.3421 32.6423 42.3476C32.6405 42.3503 32.6392 42.3525 32.6382 42.3539C32.6377 42.3547 32.6374 42.3553 32.6371 42.3557C32.6369 42.3559 32.6368 42.3561 32.6367 42.3563C32.6367 42.3563 32.6367 42.3564 32.6366 42.3564C32.6366 42.3565 32.6366 42.3565 33.0579 42.6257ZM36.7882 38.8768C38.5151 37.3708 39.4807 37.226 41.7083 36.205L41.2916 35.2959C39.1972 36.2559 38.0021 36.4913 36.1309 38.1231L36.7882 38.8768ZM41.7083 36.205C42.4088 35.8839 43.1155 35.7063 43.6514 35.6094C43.9181 35.5612 44.1395 35.5335 44.2926 35.518C44.3691 35.5102 44.4283 35.5055 44.4674 35.5028C44.4869 35.5014 44.5013 35.5006 44.5104 35.5001C44.5149 35.4998 44.5181 35.4997 44.5199 35.4996C44.5208 35.4995 44.5213 35.4995 44.5215 35.4995C44.5216 35.4995 44.5216 35.4995 44.5215 35.4995C44.5214 35.4995 44.5213 35.4995 44.5213 35.4995C44.5212 35.4995 44.5211 35.4995 44.5211 35.4995C44.521 35.4995 44.5209 35.4995 44.5 35C44.479 34.5004 44.4789 34.5004 44.4788 34.5004C44.4787 34.5004 44.4786 34.5004 44.4785 34.5004C44.4783 34.5004 44.4781 34.5004 44.4779 34.5004C44.4774 34.5005 44.4769 34.5005 44.4763 34.5005C44.475 34.5006 44.4733 34.5007 44.4713 34.5008C44.4673 34.5009 44.4619 34.5012 44.4551 34.5016C44.4414 34.5024 44.4222 34.5035 44.3978 34.5052C44.349 34.5086 44.2793 34.5142 44.1917 34.5231C44.0166 34.5409 43.7693 34.5719 43.4735 34.6254C42.8844 34.7318 42.0911 34.9294 41.2916 35.2959L41.7083 36.205ZM29.6564 36.438C29.5229 35.9561 29.5228 35.9561 29.5227 35.9561C29.5227 35.9562 29.5226 35.9562 29.5225 35.9562C29.5223 35.9563 29.522 35.9563 29.5217 35.9564C29.5211 35.9566 29.5202 35.9569 29.519 35.9572C29.5166 35.9578 29.5132 35.9588 29.5088 35.96C29.5 35.9625 29.487 35.9661 29.4702 35.9709C29.4365 35.9805 29.3873 35.9945 29.3239 36.0129C29.1972 36.0498 29.0143 36.1039 28.7874 36.1736C28.3338 36.3129 27.7037 36.5148 26.9967 36.7654C25.5926 37.263 23.8473 37.9656 22.5854 38.7658L23.1209 39.6103C24.2828 38.8735 25.9391 38.2011 27.3307 37.7079C28.0215 37.4631 28.6377 37.2657 29.081 37.1295C29.3026 37.0614 29.4807 37.0088 29.603 36.9732C29.6641 36.9555 29.7113 36.942 29.7429 36.933C29.7588 36.9285 29.7707 36.9252 29.7786 36.9229C29.7825 36.9218 29.7855 36.921 29.7873 36.9205C29.7883 36.9202 29.789 36.9201 29.7894 36.9199C29.7896 36.9199 29.7897 36.9198 29.7898 36.9198C29.7898 36.9198 29.7898 36.9198 29.7899 36.9198C29.7899 36.9198 29.7898 36.9198 29.6564 36.438ZM22.5854 38.7658C22.3262 38.9301 22.0495 39.0734 21.756 39.2236C21.4697 39.3701 21.162 39.5258 20.8772 39.7026C20.2984 40.0621 19.7485 40.5487 19.5187 41.3643L20.4812 41.6356C20.6152 41.1601 20.9293 40.8474 21.4048 40.5521C21.6472 40.4016 21.9142 40.266 22.2115 40.1138C22.5016 39.9654 22.8174 39.8027 23.1209 39.6103L22.5854 38.7658ZM19.5187 41.3643C19.3439 41.9847 19.3585 42.5402 19.548 43.0544C19.733 43.5565 20.0696 43.977 20.464 44.3596L21.1603 43.6418C20.8177 43.3095 20.5981 43.012 20.4863 42.7086C20.379 42.4173 20.356 42.08 20.4812 41.6356L19.5187 41.3643ZM20.464 44.3596C20.7781 44.6643 21.2082 44.7792 21.5893 44.8198C21.9811 44.8614 22.3994 44.8325 22.7689 44.7819C23.1419 44.7309 23.4855 44.6549 23.7345 44.5923C23.8595 44.5609 23.962 44.5325 24.034 44.5117C24.07 44.5013 24.0985 44.4928 24.1184 44.4867C24.1283 44.4837 24.1362 44.4813 24.1417 44.4795C24.1445 44.4787 24.1468 44.478 24.1484 44.4774C24.1492 44.4772 24.1499 44.477 24.1504 44.4768C24.1507 44.4767 24.1509 44.4766 24.1511 44.4766C24.1512 44.4765 24.1513 44.4765 24.1514 44.4765C24.1515 44.4765 24.1516 44.4764 24 44C23.8484 43.5235 23.8485 43.5235 23.8486 43.5234C23.8486 43.5234 23.8486 43.5234 23.8487 43.5234C23.8487 43.5234 23.8487 43.5234 23.8487 43.5234C23.8486 43.5234 23.8484 43.5235 23.8481 43.5236C23.8474 43.5238 23.8462 43.5242 23.8444 43.5247C23.8409 43.5258 23.8351 43.5276 23.8273 43.53C23.8117 43.5348 23.7878 43.5419 23.7566 43.5509C23.6942 43.5689 23.603 43.5942 23.4906 43.6225C23.2648 43.6793 22.959 43.7466 22.6334 43.7911C22.3042 43.8362 21.9747 43.8551 21.6951 43.8254C21.4047 43.7945 21.2396 43.7188 21.1603 43.6418L20.464 44.3596ZM52.9021 37.7028C52.6503 37.362 52.2197 37.2986 51.9072 37.2927C51.5586 37.286 51.1441 37.3484 50.7088 37.446C49.8324 37.6425 48.7614 38.0079 47.7365 38.3998C46.7072 38.7934 45.7057 39.2212 44.9629 39.5499C44.5911 39.7143 44.2833 39.8544 44.0681 39.9534C43.9605 40.003 43.8761 40.0422 43.8184 40.0692C43.7895 40.0827 43.7673 40.0932 43.7523 40.1003C43.7447 40.1038 43.739 40.1065 43.7351 40.1084C43.7331 40.1093 43.7316 40.11 43.7306 40.1105C43.7301 40.1107 43.7297 40.1109 43.7294 40.1111C43.7292 40.1111 43.7291 40.1112 43.729 40.1112C43.7289 40.1113 43.7289 40.1113 43.9431 40.5631C44.1572 41.0149 44.1572 41.0149 44.1573 41.0149C44.1573 41.0149 44.1574 41.0148 44.1574 41.0148C44.1576 41.0147 44.1579 41.0146 44.1584 41.0144C44.1592 41.014 44.1605 41.0134 44.1623 41.0125C44.1658 41.0108 44.1712 41.0083 44.1783 41.005C44.1926 40.9982 44.214 40.9882 44.242 40.9751C44.298 40.9489 44.3807 40.9104 44.4863 40.8618C44.6976 40.7645 45.0009 40.6265 45.3675 40.4643C46.1014 40.1396 47.0859 39.7192 48.0937 39.3338C49.1059 38.9467 50.123 38.6022 50.9276 38.4218C51.3329 38.3309 51.6571 38.2881 51.8882 38.2925C52.1554 38.2976 52.1454 38.3614 52.0979 38.2971L52.9021 37.7028Z`,
          fill: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M67 44.5C68.3109 42.1968 68.8399 41.3345 71.5 41`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M48.5 45.4999C51.5 44.9999 53 45.5 54.5 47.0196`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M41 42.6618C39.1928 40.226 37.7589 39.6252 34.5 40.5001`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M27 40.2395C29.8817 39.6587 31.0461 40.0634 32.5 42.2395`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M23 39C24.4414 39.9927 25.2787 40.4994 25.172 42`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M70 47.5C73.8748 57.2142 70 68.5 70 78.5`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M50 52.5C49.2346 61.7995 50.9271 70.687 52 80.5`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M34.5 48C32.8091 58.175 40.8963 71.8658 41 82`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M28.5 47C26.0765 55.6425 31.8281 70.2955 31.5 80`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M22 45C18.3386 53.3812 23 65.5 24.5 74.5`,
          stroke: `#ECFEFF`,
          strokeWidth: `0.5`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  xi = () =>
    (0, k.jsxs)(`svg`, {
      width: `100`,
      height: `100`,
      viewBox: `0 0 100 100`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M99.5 50C99.5 77.3381 77.3381 99.5 50 99.5C22.6619 99.5 0.5 77.3381 0.5 50C0.5 22.6619 22.6619 0.5 50 0.5C77.3381 0.5 99.5 22.6619 99.5 50Z`,
          fill: `#115E59`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M37.4408 54.2146C37.4408 54.2146 26.9999 64.9528 27 69.568C27 70.9415 28.1086 72.062 29.4849 72.062C31.3064 72.062 34.3708 70.3227 36.1768 71.2367C38.1239 72.222 39.3761 74.7962 40.4588 76.3636C41.0653 77.2415 42.3154 77.1307 43.1903 76.5187C45.6525 74.7962 50.2595 63.6352 50.2595 63.6352M48.3424 59.2909C48.3424 59.2909 51.929 69.9545 55.5156 75.691C56.2118 76.8047 57.6646 76.7822 58.7975 76.4462C61.3437 75.691 61.1995 71.0541 63.4248 69.9545C65.3539 69.0012 68.3374 72.8436 70.7584 71.2367C72.0177 70.4008 73 69.5942 73 68.0848C73 64.9528 63.9483 53.3198 63.9483 53.3198M68.82 40.6947C68.82 51.0195 60.5102 59.3894 50.2595 59.3894C40.0088 59.3894 31.699 51.0195 31.699 40.6947C31.699 30.3699 40.0088 22 50.2595 22C60.5102 22 68.82 30.3699 68.82 40.6947Z`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M57.8923 31.2592C53.3923 26.2592 45.4445 26.9656 41.0403 33.701C36.8693 40.0795 39.3923 47.7591 45.8923 50.7591`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M61 34C62.6516 37.127 62.9249 39.5867 62 43C61.1214 46.2425 59.8001 48.144 57 50C54.6302 51.5708 52.8419 52.0817 50 52`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  Si = () =>
    (0, k.jsxs)(`svg`, {
      width: `100`,
      height: `100`,
      viewBox: `0 0 100 100`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`path`, {
          d: `M99.5 50C99.5 77.3381 77.3381 99.5 50 99.5C22.6619 99.5 0.5 77.3381 0.5 50C0.5 22.6619 22.6619 0.5 50 0.5C77.3381 0.5 99.5 22.6619 99.5 50Z`,
          fill: `#115E59`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M44 55.5L44.0824 55.0068L44 55.5ZM55.0828 57.2253L55.3899 56.8308L55.0828 57.2253ZM60.6242 66.4271L60.1333 66.3325L60.1333 66.3325L60.6242 66.4271ZM48.9873 72.1783L49.0325 71.6803L48.9873 72.1783ZM39.5669 66.4271L39.3268 66.8657L39.3268 66.8657L39.5669 66.4271ZM15.3536 55.1464C15.1583 54.9512 14.8417 54.9512 14.6464 55.1464C14.4512 55.3417 14.4512 55.6583 14.6464 55.8536L15.3536 55.1464ZM22.5 56.3006L22.652 55.8243L22.0609 55.6357L22.0022 56.2533L22.5 56.3006ZM22.0002 57.5V58H22.0935L22.1805 57.9663L22.0002 57.5ZM43.9176 55.9932C46.4264 56.4122 48.4753 56.2142 50.1697 56.2284C51.8706 56.2427 53.2852 56.4597 54.7757 57.6199L55.3899 56.8308C53.6531 55.4788 51.9833 55.2436 50.1781 55.2284C48.3666 55.2132 46.4877 55.4086 44.0824 55.0068L43.9176 55.9932ZM54.7757 57.6199C55.8996 58.4947 57.4451 59.6416 58.6157 61.1123C59.7774 62.5718 60.5257 64.2957 60.1333 66.3325L61.1152 66.5217C61.582 64.0992 60.6679 62.0848 59.3982 60.4896C58.1374 58.9056 56.4826 57.6813 55.3899 56.8308L54.7757 57.6199ZM60.1333 66.3325C59.6788 68.6912 58.1682 70.1238 56.132 70.9295C54.0738 71.744 51.4988 71.9043 49.0325 71.6803L48.942 72.6762C51.4901 72.9077 54.24 72.7537 56.5 71.8594C58.7819 70.9564 60.5827 69.2856 61.1152 66.5217L60.1333 66.3325ZM49.0325 71.6803C47.0522 71.5004 45.7358 70.6512 44.4192 69.5494C43.115 68.458 41.752 67.0533 39.807 65.9885L39.3268 66.8657C41.1569 67.8676 42.3782 69.1453 43.7774 70.3163C45.1642 71.4768 46.6704 72.4698 48.942 72.6762L49.0325 71.6803ZM26.7448 45.8335C29.441 47.4337 32.2039 49.6786 35.1045 51.7115C37.9642 53.7157 40.937 55.4954 43.9176 55.9932L44.0824 55.0068C41.3434 54.5494 38.5314 52.8921 35.6785 50.8926C32.8665 48.9218 29.9892 46.5962 27.2552 44.9736L26.7448 45.8335ZM39.807 65.9885C37.1204 64.5179 34.3659 62.4833 31.4884 60.5406C28.6341 58.6136 25.6732 56.7883 22.652 55.8243L22.348 56.7769C25.2216 57.6938 28.0803 59.4462 30.9289 61.3694C33.7542 63.277 36.5858 65.3653 39.3268 66.8657L39.807 65.9885ZM22.0418 56.5008C22.1427 56.7315 22.0546 56.9428 21.8198 57.0336L22.1805 57.9663C22.9461 57.6702 23.2869 56.8525 22.9582 56.1004L22.0418 56.5008ZM22.0002 57C21.8157 57 21.3406 56.9211 20.664 56.7698C20.0102 56.6237 19.2221 56.4229 18.4475 56.206C17.6722 55.989 16.9176 55.7578 16.3296 55.5516C16.0348 55.4482 15.789 55.3537 15.6062 55.2725C15.5146 55.2318 15.4452 55.1973 15.3962 55.1696C15.3398 55.1377 15.3362 55.1291 15.3536 55.1464L14.6464 55.8536C14.7263 55.9334 14.8243 55.9951 14.9039 56.0401C14.9909 56.0893 15.0919 56.1383 15.2005 56.1865C15.418 56.2831 15.6919 56.3877 15.9987 56.4953C16.6138 56.711 17.3905 56.9485 18.1778 57.169C18.9658 57.3896 19.7714 57.595 20.4458 57.7458C21.0974 57.8914 21.6847 58 22.0002 58V57ZM22.0022 56.2533C21.9732 56.5591 21.9499 56.6722 21.9134 56.76C21.8768 56.8477 21.8128 56.9439 21.6161 57.1798L22.3842 57.8202C22.578 57.5877 22.7351 57.3877 22.8364 57.1446C22.9377 56.9015 22.9691 56.6492 22.9978 56.3479L22.0022 56.2533Z`,
          fill: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M50.5 55.5C50.5 55.5 52.922 54.1548 54.5 53.5C56.5175 52.6628 57.6577 53.0025 59.5385 51.875C63.5 49.5 65.9064 46.0886 69.9231 43.4375C74.3015 40.5477 74.5 39.5 74.5 39.5`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M80 48C80 48 72.1224 52.3548 66.5 57C64.5361 58.6225 61 64.5 61 64.5`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M22.4999 56C21.5901 51.8597 22.9738 50.4653 26.5 45.5C26.5 45.5 27.8905 44.5858 27.5 44C26.5 42.5 20.5 39 20.5 39`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M79 32.5C79 32.5 72.4999 34.264 72.5 36.5C72.5001 38.5 76.1334 40.2481 78 43C79.8634 45.7471 80 50.5 82 50.5C85 50.5 89.5 47.5 89.5 47.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  Ci = () =>
    (0, k.jsxs)(`svg`, {
      width: `100`,
      height: `100`,
      viewBox: `0 0 100 100`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`circle`, {
          cx: `50`,
          cy: `50`,
          r: `49.5`,
          fill: `#115E59`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M70.5 55.5L74.5 53`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M66 55.5L69.5 53.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M48.816 72.6318C48.816 72.6318 43.7613 72.5707 40.6305 73.2614C37.286 73.9993 34.3339 74.5207 32.445 76.4097C30.556 78.2987 72.1133 78.7709 68.965 76.4097C67.1488 75.0476 63.2601 73.9994 60.1498 73.2614C57.2688 72.5779 52.594 72.6318 52.594 72.6318M48.816 72.6318C48.816 72.6318 49.4457 63.1869 49.2743 58.1497C49.103 53.1124 50.3902 22.889 50.3902 22.889M48.816 72.6318H50.705H52.594M50.3902 22.889H31.8153M50.3902 22.889H67.7057M50.3902 22.889C50.3902 22.889 51.9643 53.1124 51.9643 56.8904C51.9643 60.6683 52.594 72.6318 52.594 72.6318M50.3902 22.889V21M31.8153 22.889L26.7781 46.8159M31.8153 22.889L36.8526 46.8159M67.7057 22.889C66.2054 33.8708 65.2516 39.1748 63.2981 46.8159M67.7057 22.889L70.2243 34.8524L72.743 46.8159`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M68.3446 57.5201C72.4405 57.5201 77.1501 54.5869 77.1501 52.1428C77.1501 50.1272 73.6169 52.0393 68.3445 52.1428C63.4172 52.2395 59.1984 50.2139 59.5391 52.1428C60.057 55.0758 64.2487 57.5201 68.3446 57.5201Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M31.8248 57.5201C35.9207 57.5201 40.6304 54.5869 40.6304 52.1428C40.6304 50.1272 37.0971 52.0393 31.8248 52.1428C26.8974 52.2395 22.6787 50.2139 23.0193 52.1428C23.5373 55.0758 27.729 57.5201 31.8248 57.5201Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M33.5 56L37.5 53`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M25.5 53.5L26 53M29 55.5L31.5 53.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M63 54.5L65 53.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  wi = () =>
    (0, k.jsxs)(`svg`, {
      width: `100`,
      height: `100`,
      viewBox: `0 0 100 100`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`circle`, {
          cx: `50`,
          cy: `50`,
          r: `49.5`,
          fill: `#115E59`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M52.2667 46C52.4943 43.8824 52.2667 41.1266 52.2667 38.5882C52.2667 33.5588 51.7437 25.6471 51.7437 25.6471M52.2667 46C51.7839 50.491 51.7437 58 51.7437 58H49.8894C49.8894 58 50.2222 44.4458 50.2222 41C50.2222 35.5 50.2222 35 50.2222 35M52.2667 46C54.5384 45.9909 58.5726 44.6765 60.5 43.5C62.4274 42.3235 64.5 38.5882 64.5 38.5882C64.5 38.5882 60.1164 36.1153 57 38C53.9441 39.8481 53.8 43 52.2667 46ZM51.7437 25.6471C51.7437 25.6471 53.5822 24.0851 52.9798 21.5294C52.4516 19.2879 49.8894 18 49.8894 18C49.8894 18 49.3044 20.1552 49.2713 22.1176C49.2383 24.0801 51.7437 25.6471 51.7437 25.6471ZM51.7437 25.6471L50.2222 35M50.2222 35C50.2222 35 49.2388 29.2784 47 28C44.3093 26.4635 41 27.5 41 27.5C41 27.5 41.9911 31.5297 44.5 33C46.798 34.3466 50.2222 35 50.2222 35Z`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M30.2078 72.0204C30.2078 72.0204 34.4405 69.0497 37.4543 67.7523C43.8049 65.0184 47.7202 66.5331 54.9666 65.3134C56.7783 65.0085 58.6534 66.4069 58.5899 67.7523C58.5264 69.0978 56.8647 69.2548 55.5705 69.5815C53.155 70.1912 48.1979 69.5621 44.0969 72.0204C42.2273 73.1411 39.8698 75.6788 39.8698 75.6788C39.8698 75.6788 42.1956 76.8981 44.0969 76.8981C48.324 76.8981 51.6755 76.1659 56.1744 74.4592C57.9083 73.8015 60.5 72.5 60.5 72.5C60.5 72.5 64.8364 68.9231 67.2519 68.3134C68.1671 68.0824 68.9128 67.7419 69.6674 68.3134C70.8606 69.217 68.4597 71.9718 68.4597 71.9718C68.4597 71.9718 64.1987 75.3744 59.7976 78.1177C54.7211 81.282 51.2705 82.9453 45.3046 82.9955C42.2029 83.0216 39.9017 82.9483 36.8504 82.3857C33.5288 81.7732 29 79.9469 29 79.9469`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M40 66.3865C40 66.3865 40.4605 63.4583 41.7857 62.0926C44.7619 59.0254 50.7143 59.0254 50.7143 59.0254C50.7143 59.0254 58.2008 58.6365 62 60.9999C65.0572 62.9017 66.5 68 66.5 68`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M55.5 43.5C57.3679 41.1265 58.2242 40.1672 61.5 39.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M44 29.5C45.9445 30.0058 46.2828 30.7167 47.5 32.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M51 21.5C51.394 22.0657 51.5008 22.3944 51.5 23`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  Ti = () =>
    (0, k.jsxs)(`svg`, {
      width: `100`,
      height: `100`,
      viewBox: `0 0 100 100`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, k.jsx)(`circle`, {
          cx: `50`,
          cy: `50`,
          r: `49.5`,
          fill: `#115E59`,
          stroke: `#ECFEFF`,
        }),
        (0, k.jsx)(`path`, {
          d: `M17.88 46.0116L38.2831 57.8739C38.4196 57.9532 38.5855 57.9635 38.7307 57.9015L81.9835 39.434C82.3791 39.2651 82.3909 38.7087 82.0029 38.5231L60.1994 28.0954C60.0724 28.0346 59.9257 28.0303 59.7952 28.0833L17.9429 45.1163C17.5582 45.2728 17.521 45.8029 17.88 46.0116Z`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M17.5 48.5L37.5 60.4048M82 42.5L39.5 60.5747`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M17.5 51.5L37.5 63.4048M82 45.5L39.5 63.5747`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M17.5 54.5L37.5 66.4048M82 48.5L39.5 66.5747`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M17.5 57.5L37.66 69.5M82 51.5L39.6757 69.5`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M17.5 60.5L37.66 72.5M82 54.5L39.5 72.5747`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
        (0, k.jsx)(`path`, {
          d: `M17.5 63.5L37.66 75.5M82 57.5L39.5 75.5747`,
          stroke: `#ECFEFF`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  Ei = (e) =>
    (0, k.jsx)(k.Fragment, {
      children: (0, k.jsx)(`footer`, {
        className: `w-full p-4 bg-slate-950 mt-40`,
        children: (0, k.jsxs)(`div`, {
          className: `w-3/4 lg:w-2/4 m-auto flex sm:justify-end justify-center`,
          children: [
            (0, k.jsx)(`div`, {
              className: `border-r-2 mr-2 pr-2`,
              children: (0, k.jsx)(`button`, {
                onClick: () => {
                  ;((document.documentElement.scrollTop = 0),
                    (document.body.scrollTop = 0))
                },
                type: `button`,
                className: `mx-2 border-2 mb-2 inline-block rounded-full p-3 text-xs font-medium  leading-normal text-white shadow-md `,
                children: (0, k.jsx)(`svg`, {
                  xmlns: `http://www.w3.org/2000/svg`,
                  viewBox: `0 0 448 512`,
                  height: `20`,
                  width: `20`,
                  children: (0, k.jsx)(`path`, {
                    fill: `currentColor`,
                    d: `M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z`,
                  }),
                }),
              }),
            }),
            (0, k.jsxs)(`div`, {
              className: `group flex relative`,
              children: [
                (0, k.jsx)(`button`, {
                  onClick: () => e.openModal(),
                  type: `button`,
                  className: `mx-2 border-2 mb-2 inline-block rounded-full p-3 text-xs font-medium  leading-normal text-white shadow-md `,
                  children: (0, k.jsx)(fi, {}),
                }),
                (0, k.jsx)(`span`, {
                  className: `whitespace-nowrap group-hover:opacity-100 transition-opacity bg-gray-800 px-6 py-1 font-mono text-lg text-white rounded-lg absolute left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 m-4 mx-auto`,
                  children: `Links & References`,
                }),
              ],
            }),
            (0, k.jsx)(`a`, {
              href: `https://www.linkedin.com/in/phajsihal/`,
              target: `_blank`,
              children: (0, k.jsx)(`button`, {
                type: `button`,
                className: `mx-2 border-2 mb-2 inline-block rounded-full p-3 text-xs font-medium  leading-normal text-white shadow-md `,
                children: (0, k.jsx)(di, {}),
              }),
            }),
            (0, k.jsx)(`a`, {
              href: `https://github.com/phajsi/burnout-spa`,
              target: `_blank`,
              children: (0, k.jsx)(`button`, {
                type: `button`,
                className: `mx-2 border-2 mb-2 inline-block rounded-full p-3 text-xs font-medium  leading-normal text-white shadow-md `,
                children: (0, k.jsx)(ui, {}),
              }),
            }),
          ],
        }),
      }),
    }),
  Di = (e) =>
    (0, k.jsxs)(`p`, {
      className: `text-base leading-relaxed text-cyan-100`,
      children: [
        (0, k.jsx)(`b`, { children: e.relates }),
        (0, k.jsx)(`br`, {}),
        (0, k.jsxs)(`a`, {
          href: e.link,
          target: `_blank`,
          className: `underline text-red-500`,
          children: [` `, `"`, e.title, `"`],
        }),
        ` `,
        `by `,
        e.author,
        ` (`,
        e.year,
        `)`,
      ],
    }),
  Oi = () => {
    let [e, t] = (0, x.useState)(!1)
    return { open: e, openModal: () => t(!0), closeModal: () => t(!1) }
  }
function ki({ open: e, onClose: t }) {
  let n = (0, x.useRef)(null)
  return (
    (0, x.useEffect)(
      () => (
        (document.body.style.overflow = e ? `hidden` : `unset`),
        () => {
          document.body.style.overflow = `unset`
        }
      ),
      [e]
    ),
    (0, x.useEffect)(() => {
      if (!e) return
      n.current?.focus()
      let r = (e) => {
        e.key === `Escape` && t()
      }
      return (
        document.addEventListener(`keydown`, r),
        () => document.removeEventListener(`keydown`, r)
      )
    }, [e, t]),
    e
      ? (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsx)(`div`, {
              className: `fixed inset-0 z-40 bg-black/60`,
              onClick: t,
              "aria-hidden": `true`,
            }),
            (0, k.jsx)(`div`, {
              role: `dialog`,
              "aria-modal": `true`,
              "aria-labelledby": `modal-title`,
              className: `fixed top-0 left-0 right-0 z-50 m-4 p-4 overflow-x-hidden sm:inset-0 h-[calc(100%-1rem)] max-h-full`,
              children: (0, k.jsx)(`div`, {
                className: `relative flex mx-auto w-full max-w-2xl max-h-full overflow-y-scroll bg-cyan-950 border-grey-100 border-2 rounded-md`,
                children: (0, k.jsxs)(`div`, {
                  className: `relative rounded-lg shadow`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      className: `sticky top-0 flex items-start justify-between p-4 border-b rounded-t border-gray-100 bg-cyan-950 shadow-md`,
                      children: [
                        (0, k.jsx)(`h3`, {
                          id: `modal-title`,
                          className: `text-xl font-semibold text-white`,
                          children: `Links & References`,
                        }),
                        (0, k.jsxs)(`button`, {
                          ref: n,
                          type: `button`,
                          className: `text-gray-400 bg-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-700 hover:text-white`,
                          onClick: t,
                          children: [
                            (0, k.jsx)(`svg`, {
                              "aria-hidden": `true`,
                              className: `w-5 h-5`,
                              fill: `currentColor`,
                              viewBox: `0 0 20 20`,
                              xmlns: `http://www.w3.org/2000/svg`,
                              children: (0, k.jsx)(`path`, {
                                fillRule: `evenodd`,
                                d: `M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z`,
                                clipRule: `evenodd`,
                              }),
                            }),
                            (0, k.jsx)(`span`, {
                              className: `sr-only`,
                              children: `Close modal`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `p-6 space-y-6`,
                      children: [
                        (0, k.jsx)(Di, {
                          relates: ` On Freudenberg and the origins of burnout as a terminology `,
                          link: `https://www.researchgate.net/publication/346586006_Herbert_J_Freudenberger_and_the_making_of_burnout_as_a_psychopathological_syndrome`,
                          title: `Herbert J. Freudenberger and the making of burnout as a psychopathological syndrome`,
                          author: `Fontes, Flavio`,
                          year: `2020`,
                        }),
                        (0, k.jsx)(`hr`, {}),
                        (0, k.jsx)(Di, {
                          relates: `Burnout on WHO's ICD-11`,
                          link: `https://icd.who.int/browse11/l-m/en#/http://id.who.int/icd/entity/129180281`,
                          title: `ICD-11 for Mortality and Morbidity Statistics`,
                          author: `ICD-11`,
                          year: `2023`,
                        }),
                        (0, k.jsx)(`hr`, {}),
                        (0, k.jsxs)(`p`, {
                          className: `text-base leading-relaxed text-cyan-100`,
                          children: [
                            (0, k.jsx)(`b`, {
                              children: `Christina Maslach and Burnout`,
                            }),
                            (0, k.jsx)(`br`, {}),
                            (0, k.jsx)(`a`, {
                              href: `https://www.youtube.com/watch?v=gRPBkCW0R5E`,
                              target: `_blank`,
                              className: `underline text-red-500`,
                              children: `TED Talk: Understanding Job Burnout by Dr. Christina Maslach`,
                            }),
                            ` `,
                            `(2018) and Dr. Christina Maslach's`,
                            ` `,
                            (0, k.jsx)(`a`, {
                              href: `https://psychology.berkeley.edu/people/christina-maslach`,
                              target: `_blank`,
                              className: `underline text-red-500`,
                              children: `page`,
                            }),
                            ` `,
                            `at Berkeley`,
                          ],
                        }),
                        (0, k.jsx)(`hr`, {}),
                        (0, k.jsx)(Di, {
                          relates: `On what Job Engagement is`,
                          link: `https://www.researchgate.net/publication/5396366_Early_Predictors_of_Job_Burnout_and_Engagement`,
                          title: `Early Predictors of Job Burnout and Engagement`,
                          author: `Maslach and Leiter`,
                          year: `2008`,
                        }),
                        (0, k.jsx)(`hr`, {}),
                        (0, k.jsx)(Di, {
                          relates: `On the Burnout Dimensions, Effects of Burnout, Areas of Worklife Scale and Personal Characteristics and Burnout`,
                          link: `https://onlinelibrary.wiley.com/doi/book/10.1002/9781118993811`,
                          title: `Understanding Burnout (CH. 3) on The Handbook of Stress and Health`,
                          author: `Maslach and Leiter`,
                          year: `2017`,
                        }),
                        (0, k.jsx)(`hr`, {}),
                        (0, k.jsx)(Di, {
                          relates: `On the effects of Job Engagement`,
                          link: `https://www.oreilly.com/library/view/accelerate/9781457191435/`,
                          title: `Accelerate (Chapter 10)`,
                          author: `Forsgren et al.`,
                          year: `2018`,
                        }),
                        (0, k.jsx)(`hr`, {}),
                        (0, k.jsx)(Di, {
                          relates: `On Job Demands in Tech`,
                          link: `https://www.oreilly.com/library/view/accelerate/9781457191435/`,
                          title: `Accelerate`,
                          author: `Forsgren et al.`,
                          year: `2018`,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        })
      : null
  )
}
var Ai = () =>
    (0, k.jsx)(`svg`, {
      width: `7`,
      height: `3`,
      viewBox: `0 0 7 3`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, k.jsx)(`path`, {
        d: `M5.5 1.5H1.5`,
        stroke: `#ECFEFF`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
      }),
    }),
  ji = {
    center_right_nav_div: ` md:flex md:my-auto md:max-h-max md:inset-y-0 md:right-0 `,
    nav_div: `hidden md:fixed relative z-10 md:py-4 md:px-10`,
    nav_ul: `text-neutral-200 font-normal md:leading-10 text-sm md:text-base ml-auto`,
    nav_li: `group flex items-center justify-end h-10 `,
    navA: `mx-2 px-4 group-hover:opacity-100 opacity-0 lg:opacity-60 transition-opacity top rounded-lg md:group-hover:bg-[#11455A]`,
  },
  Mi = () =>
    (0, k.jsxs)(k.Fragment, {
      children: [
        ` `,
        (0, k.jsxs)(`div`, {
          className: `block sm:hidden w-fit mx-auto mb-8 border-neutral-400 border-2 pt-1 pb-4 px-6 rounded-2xl`,
          children: [
            (0, k.jsx)(`p`, {
              className: `text-neutral-200 text-lg my-4`,
              children: (0, k.jsx)(`b`, { children: `On this page` }),
            }),
            (0, k.jsxs)(`ul`, {
              className: `text-neutral-200 font-normal leading-6`,
              children: [
                (0, k.jsx)(`li`, {
                  children: (0, k.jsx)(`a`, {
                    href: `#first_header`,
                    className: `hover:text-sky-300`,
                    children: `What is Burnout?`,
                  }),
                }),
                (0, k.jsx)(`li`, {
                  children: (0, k.jsx)(`a`, {
                    href: `#second_header`,
                    className: `hover:text-sky-300`,
                    children: `Areas Of Worklife Scale`,
                  }),
                }),
                (0, k.jsx)(`li`, {
                  children: (0, k.jsx)(`a`, {
                    href: `#third_header`,
                    className: `hover:text-sky-300`,
                    children: `Personal Characteristics`,
                  }),
                }),
                (0, k.jsx)(`li`, {
                  children: (0, k.jsx)(`a`, {
                    href: `#fourth_header`,
                    className: `hover:text-sky-300`,
                    children: `Job Demands In Tech`,
                  }),
                }),
              ],
            }),
          ],
        }),
        (0, k.jsx)(`div`, {
          className: `${ji.nav_div}${ji.center_right_nav_div}`,
          children: (0, k.jsxs)(`ul`, {
            className: `${ji.nav_ul}`,
            children: [
              (0, k.jsxs)(`li`, {
                className: `${ji.nav_li}`,
                children: [
                  (0, k.jsx)(`a`, {
                    href: `#intro`,
                    className: `${ji.navA}`,
                    children: `Intro`,
                  }),
                  (0, k.jsx)(Ai, {}),
                ],
              }),
              (0, k.jsxs)(`li`, {
                className: `${ji.nav_li}`,
                children: [
                  (0, k.jsx)(`a`, {
                    href: `#first_header`,
                    className: `${ji.navA}`,
                    children: `What is Burnout?`,
                  }),
                  (0, k.jsx)(Ai, {}),
                ],
              }),
              (0, k.jsxs)(`li`, {
                className: `${ji.nav_li}`,
                children: [
                  (0, k.jsx)(`a`, {
                    href: `#second_header`,
                    className: `${ji.navA}`,
                    children: `Areas Of Worklife Scale`,
                  }),
                  (0, k.jsx)(Ai, {}),
                ],
              }),
              (0, k.jsxs)(`li`, {
                className: `${ji.nav_li}`,
                children: [
                  (0, k.jsx)(`a`, {
                    href: `#third_header`,
                    className: `${ji.navA}`,
                    children: `Personal Characteristics`,
                  }),
                  (0, k.jsx)(Ai, {}),
                ],
              }),
              (0, k.jsxs)(`li`, {
                className: `${ji.nav_li}`,
                children: [
                  (0, k.jsx)(`a`, {
                    href: `#fourth_header`,
                    className: `${ji.navA}`,
                    children: `Job Demands In Tech`,
                  }),
                  (0, k.jsx)(Ai, {}),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  Ni = () =>
    (0, k.jsx)(`button`, {
      className: `py-8`,
      children: (0, k.jsxs)(`svg`, {
        width: `123`,
        height: `80`,
        viewBox: `0 0 123 80`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        children: [
          (0, k.jsxs)(`g`, {
            filter: `url(#filter0_d_204_155)`,
            children: [
              (0, k.jsx)(`rect`, {
                x: `10.5`,
                y: `6.5`,
                width: `101.5`,
                height: `59`,
                rx: `4.5`,
                fill: `#030617`,
                stroke: `#ECFEFF`,
              }),
              (0, k.jsx)(`path`, {
                d: `M45 46.913V24.9559C45 23.5405 46.43 22.573 47.7439 23.0994L73.6219 33.468C75.2609 34.1247 75.3069 36.4282 73.6954 37.1499L47.8174 48.7383C46.4943 49.3308 45 48.3627 45 46.913Z`,
                fill: `#ECFEFF`,
              }),
            ],
          }),
          (0, k.jsx)(`defs`, {
            children: (0, k.jsxs)(`filter`, {
              id: `filter0_d_204_155`,
              x: `0`,
              y: `0`,
              width: `122.5`,
              height: `80`,
              filterUnits: `userSpaceOnUse`,
              "color-interpolation-filters": `sRGB`,
              children: [
                (0, k.jsx)(`feFlood`, {
                  "flood-opacity": `0`,
                  result: `BackgroundImageFix`,
                }),
                (0, k.jsx)(`feColorMatrix`, {
                  in: `SourceAlpha`,
                  type: `matrix`,
                  values: `0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0`,
                  result: `hardAlpha`,
                }),
                (0, k.jsx)(`feOffset`, { dy: `4` }),
                (0, k.jsx)(`feGaussianBlur`, { stdDeviation: `5` }),
                (0, k.jsx)(`feComposite`, {
                  in2: `hardAlpha`,
                  operator: `out`,
                }),
                (0, k.jsx)(`feColorMatrix`, {
                  type: `matrix`,
                  values: `0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0`,
                }),
                (0, k.jsx)(`feBlend`, {
                  mode: `normal`,
                  in2: `BackgroundImageFix`,
                  result: `effect1_dropShadow_204_155`,
                }),
                (0, k.jsx)(`feBlend`, {
                  mode: `normal`,
                  in: `SourceGraphic`,
                  in2: `effect1_dropShadow_204_155`,
                  result: `shape`,
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  Pi = ({ icon: e, label: t, description: n, accentColor: r = `teal-800` }) =>
    (0, k.jsxs)(`div`, {
      className: `sm:flex my-24 items-center sm:my-12`,
      children: [
        (0, k.jsxs)(`div`, {
          className: `w-fit sm:mr-8 m-auto my-4 md:my-0`,
          children: [
            e,
            (0, k.jsx)(`h4`, {
              className: `bg-${r} mt-4 mx-auto p-2 rounded-md leading-4 w-min`,
              children: t,
            }),
          ],
        }),
        (0, k.jsx)(`div`, { children: n }),
      ],
    }),
  Fi = [
    {
      icon: (0, k.jsx)(ii, {}),
      label: `Exhaustion`,
      accentColor: `sky-800`,
      description: (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(`p`, {
            children: `Exhaustion represents the individual dimension of burnout. It relates to the feeling of being stressed at work, and of being overextended and depleted of emotional, mental and physical resources.`,
          }),
          (0, k.jsx)(`div`, {
            className: `border-2 rounded-md p-2 my-2 border-sky-800 bg-[#397A9D]`,
            children: `Typical signs of exhaustion are not being able to think straight, feeling fed up with work and just wanting to go home.`,
          }),
        ],
      }),
    },
    {
      icon: (0, k.jsx)(ai, {}),
      label: `Cynicism`,
      accentColor: `red-800`,
      description: (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(`p`, {
            children: `The component of cynicism or depersonalisation represents the interpersonal dimension of burnout. It involves detachment from various aspects of the job, often resulting in a negative or apathetic attitude.`,
          }),
          (0, k.jsx)(`div`, {
            className: `border-2 rounded-md p-2 my-2 border-red-800 bg-[#AD4949]`,
            children: `Typical feelings of cynicism are negativity or hostility towards the work and coworkers, only doing the bare minimum. Not seeing the value in the work anymore.`,
          }),
        ],
      }),
    },
    {
      icon: (0, k.jsx)(oi, {}),
      label: `Inefficacy`,
      accentColor: `amber-800`,
      description: (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(`p`, {
            children: `The inefficacy component of burnout represents the self-evaluation dimension. It refers to feelings of incompetence and a lack of achievement and productivity in one's work. It can also exacerbate feelings of Imposter Syndrome.`,
          }),
          (0, k.jsx)(`div`, {
            className: `border-2 rounded-md p-2 my-2 border-amber-800 bg-[#A8663E]`,
            children: `Typical feelings of inefficacy are feeling that there's no future, feeling stuck.`,
          }),
        ],
      }),
    },
  ],
  Ii = [
    {
      icon: (0, k.jsx)(Ti, {}),
      label: `Workload`,
      description: (0, k.jsxs)(`p`, {
        children: [
          `Having too much to do in too little time and with limited resources can lead to`,
          ` `,
          (0, k.jsx)(`span`, {
            className: `bg-sky-800 p-1 rounded-md leading-8`,
            children: `exhaustion.`,
          }),
          ` `,
          `It's not just the amount of work that matters, but also the quality of the work. Doing work that is outside the scope of one's job can be particularly draining. Work overload can deplete a person's energy, but with the chance to recover, the energy can be recharged keeping exhaustion at bay, without time to recover the exhaustion continues.`,
        ],
      }),
    },
    {
      icon: (0, k.jsx)(bi, {}),
      label: `Control`,
      description: (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(`p`, {
            children: `It is vital for job satisfaction and commitment that workers have the ability to influence decisions on how they perform their tasks, exercise professional autonomy, and access necessary resources to do their job effectively. Problematic aspects of job control arises when there is role conflict and role ambiguity.`,
          }),
          (0, k.jsx)(`br`, {}),
          (0, k.jsx)(`p`, {
            children: `In situations when workload increases, having greater clarity on what is expected, more control and access to resources on how to carry out tasks, can help balance out the increasing job demands and prevent exhaustion.`,
          }),
        ],
      }),
    },
    {
      icon: (0, k.jsx)(xi, {}),
      label: `Reward`,
      description: (0, k.jsxs)(`p`, {
        children: [
          `It is important to feel that the rewards we receive, whether they are monetary, social, or intrinsic, match our expectations. Research has found that inadequate rewards can make people more susceptible to burnout. Lack of recognition from those around us are associated with feelings of`,
          ` `,
          (0, k.jsx)(`span`, {
            className: `bg-amber-800 p-1 rounded-md leading-8`,
            children: `inefficacy`,
          }),
          `, and if we feel neglected by the organization's reward system, we may feel disconnected with it's values. On the other hand, acknowledging and rewarding good work has been identified as a direct, effective and inexpensive way to prevent burnout and increase engagement.`,
        ],
      }),
    },
    {
      icon: (0, k.jsx)(Si, {}),
      label: `Community`,
      description: (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsxs)(`p`, {
            children: [
              `The social interactions in the workplace, conflicts, mutual support, closeness and teamwork, all affect the social aspect of work.`,
              (0, k.jsx)(`br`, {}),
              `Two types of support at work have been identified: informal support from coworkers, which is closely related to feelings of efficacy, and supervisor support, which is linked to`,
              ` `,
              (0, k.jsx)(`span`, {
                className: `bg-sky-800 p-1 rounded-md leading-8`,
                children: `exhaustion`,
              }),
              `, reflecting the impact that supervisors have on workload. Social support in general is associated with higher engagement.`,
            ],
          }),
          (0, k.jsx)(`br`, {}),
          (0, k.jsx)(`p`, {
            children: `In addition, a sense of community in the workplace is important as well, as it has been found to alleviate feelings of inequality. Conversely, if workplace relationships become toxic, burnout is likely to occur.`,
          }),
        ],
      }),
    },
    {
      icon: (0, k.jsx)(Ci, {}),
      label: `Fairness`,
      description: (0, k.jsxs)(`p`, {
        children: [
          `The concept of fairness is closely linked to those of community and reward. The perception of fairness and equity in the decision-making process is important. Studies suggest that people value the fairness of the process when decisions are made. Feelings of injustice are strongly linked to the`,
          ` `,
          (0, k.jsx)(`span`, {
            className: `bg-sky-800 p-1 rounded-md leading-8`,
            children: `exhaustion`,
          }),
          ` `,
          `and`,
          ` `,
          (0, k.jsx)(`span`, {
            className: `bg-red-800 p-1 rounded-md leading-8`,
            children: `cynicism`,
          }),
          ` `,
          `dimensions, leading individuals to feel detached from the community. Conversely, when people are treated with respect and politeness and given a chance to present their arguments, they perceive decisions as fair, leading to a sense of community and preventing burnout.`,
        ],
      }),
    },
    {
      icon: (0, k.jsx)(wi, {}),
      label: `Values`,
      description: (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(`p`, {
            children: `Values refer to the ideals and motivations that guide individuals in their workplace. Value conflicts can arise when individuals are forced to choose between work they desire to do and the actual work, or when they are required to perform tasks that do not align with their own values. Individuals may also find themselves caught in the middle of conflicting values within their workplace.`,
          }),
          (0, k.jsx)(`br`, {}),
          (0, k.jsx)(`p`, {
            children: `Studies have revealed that value conflicts and work overload are the two primary factors that contribute to employees experiencing burnout.`,
          }),
        ],
      }),
    },
  ],
  A = {
    center: ` absolute top-2/3 right-0 translate-x-1/2 translate-y-1/2 text-center `,
    bold: `text-neutral-200`,
    h2: `mt-20 mb-8 mx-auto text-neutral-200 font-bold capitalize text-2xl underline underline-offset-4 w-fit`,
    content_container: `text-cyan-100 mx-4 mb-4 sm:w-3/4 sm:mx-auto md:w-2/4 place-items-center`,
    sub_header_container: `sm:mx-auto w-fit mx-4 md:w-2/4 text-neutral-200 font-bold capitalize leading-8`,
  }
function Li() {
  let { open: e, openModal: t, closeModal: n } = Oi()
  return (0, k.jsxs)(`div`, {
    className: `burnout`,
    children: [
      (0, k.jsx)(ki, { open: e, onClose: n }),
      (0, k.jsxs)(`header`, {
        className: `flex h-screen relative justify-center`,
        children: [
          (0, k.jsx)(Qr, {
            speed: 2,
            children: (0, k.jsx)(`div`, {
              className: `z-10 bg-cyan-800 h-32 w-80 ${A.center}`,
            }),
          }),
          (0, k.jsx)(Qr, {
            speed: 30,
            children: (0, k.jsx)(`div`, {
              className: `z-0 translate-y-48 ${A.center}`,
              children: (0, k.jsx)(ci, {}),
            }),
          }),
          (0, k.jsx)(Qr, {
            speed: -10,
            children: (0, k.jsx)(`h1`, {
              id: `intro`,
              className: `${A.center} text-neutral-200 font-bold capitalize w-max text-2xl sm:text-4xl font-mono underline z-20`,
              children: `Burnout in Tech`,
            }),
          }),
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: `${A.content_container} relative z-10 mt-12`,
        children: [
          (0, k.jsx)(`p`, {
            children: `In the 1960s and 1970s, a movement originated in the US to provide free medical treatment to individuals with no health insurance, the Free Clinic Movement.`,
          }),
          (0, k.jsx)(`br`, {}),
          (0, k.jsx)(`p`, {
            children: `These clinics were run by volunteers, a mix of nurses, doctors, and students, who worked after their regular workday ended. Due to the prevalence of drug-related issues during that time, the clinics often treated drug related illnesses, and at the time, the term "burnout" was used to describe the physical effects of chronic drug use.`,
          }),
          (0, k.jsx)(`br`, {}),
          (0, k.jsxs)(`p`, {
            children: [
              `A psychologist named Herbert Freudenberg, who worked in these clinics, observed that the workers were becoming depressed, apathetic, and agitated, leading to the popularization of the term`,
              ` `,
              (0, k.jsx)(`cite`, { children: `burnout syndrome` }),
              ` within the community of workers involved in the movement. Freudenberg later wrote several academic papers on this phenomenon.`,
            ],
          }),
        ],
      }),
      (0, k.jsx)(`hr`, {
        className: `w-48 sm:w-72 h-1 mx-auto bg-neutral-300 border-0 rounded my-10 `,
      }),
      (0, k.jsxs)(`div`, {
        className: `${A.content_container}`,
        children: [
          (0, k.jsx)(`p`, {
            children: (0, k.jsxs)(`b`, {
              className: `${A.bold}`,
              children: [
                `Hi there! `,
                (0, k.jsx)(`br`, {}),
                ` You might have come across this page because you have personally experienced burnout, are uncertain if how you’re feeling constitutes burnout or want to help someone that is suffering from burnout. You might even want to learn how to best prevent it.`,
              ],
            }),
          }),
          (0, k.jsx)(`br`, {}),
          (0, k.jsx)(`p`, {
            children: `I’ll do my best to share what I have discovered in my research, and hopefully you’ll understand burnout a little bit better 😊`,
          }),
          (0, k.jsx)(`br`, {}),
        ],
      }),
      (0, k.jsx)(Mi, {}),
      (0, k.jsxs)(`h2`, {
        id: `first_header`,
        className: `${A.h2}`,
        children: [` `, `What is Burnout?`, ` `],
      }),
      (0, k.jsxs)(`div`, {
        className: `${A.content_container}`,
        children: [
          (0, k.jsxs)(`p`, {
            children: [
              `Only recently has the World Health Organisation, WHO, added burnout to it’s characterisation system for illnesses, the ICD-11, in 2019. The WHO defines burnout as`,
              (0, k.jsx)(`blockquote`, {
                className: `p-4 my-4 border-l-4 border-gray-500 bg-cyan-800`,
                children: (0, k.jsx)(`p`, {
                  className: `text-base sm:text-xl italic font-medium leading-relaxed text-neutral-200`,
                  children: `a syndrome resulting from chronic workplace stress that has not been successfully managed`,
                }),
              }),
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `w-52 h-72 m-12 mx-auto`,
            children: (0, k.jsxs)(`div`, {
              className: `relative flex justify-center`,
              children: [
                (0, k.jsx)(Qr, {
                  speed: 10,
                  children: (0, k.jsx)(`div`, {
                    className: `${A.center} -z-10 mt-12`,
                    children: (0, k.jsx)(ri, {}),
                  }),
                }),
                (0, k.jsx)(Qr, {
                  speed: 7,
                  children: (0, k.jsx)(`div`, {
                    className: `${A.center} z-10`,
                    children: (0, k.jsx)(ni, {}),
                  }),
                }),
              ],
            }),
          }),
          (0, k.jsxs)(`p`, {
            children: [
              `One cannot talk about burnout without mentioning Christina Maslach, the pioneer researcher who has devoted her life to researching occupational burnout since the 70’s. The basis of her work laid the foundation for the WHO’s recognition of burnout as a workplace syndrome. Maslach defines burnout as`,
              (0, k.jsx)(`blockquote`, {
                className: `p-4 my-4 border-l-4 border-gray-500 bg-cyan-800`,
                children: (0, k.jsx)(`p`, {
                  className: `text-base sm:text-xl italic font-medium leading-relaxed text-neutral-200`,
                  children: `a psychological syndrome that involves a prolonged response to chronic situational stressors on the job`,
                }),
              }),
              ` `,
              `Her work led to the identification of the following three burnout dimensions:`,
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `w-fit m-auto my-8`,
            children: (0, k.jsx)(si, {}),
          }),
          (0, k.jsx)(`p`, {
            children: `One important point that arises from the definitions of burnout is that it only manifests in the workplace setting, highlighting the role of employers and organizations as essential factors in its development. Burnout being the consequence of a malfunctioning system.`,
          }),
          (0, k.jsx)(`br`, {}),
          (0, k.jsx)(`p`, {
            children: `Going through stressful periods at work, like working extra to meet a deadline, is unavoidable at times. However, burnout arises when this stress becomes a constant. It follows that to avoid burnout and help burnt out people, not only the individuals must be helped, but the workplace as well.`,
          }),
          (0, k.jsx)(`br`, {}),
          (0, k.jsxs)(`p`, {
            children: [
              `To not only focus on the negative, it is interesting to note that job engagement, defined as`,
              (0, k.jsx)(`blockquote`, {
                className: `p-4 my-4 border-l-4 border-gray-500 bg-cyan-800`,
                children: (0, k.jsx)(`p`, {
                  className: `text-base sm:text-xl italic font-medium leading-relaxed text-neutral-200`,
                  children: `an energetic state of involvement with personally fulfilling activities that enhance one's sense of professional efficacy`,
                }),
              }),
              `is considered as being the opposite state of burnout. Having engagement as a desired outcome in the workplace in the back of our minds, helps us think about the factors in the workplace that we should strive for, and that gives us energy and enjoyment.`,
            ],
          }),
        ],
      }),
      (0, k.jsxs)(`h3`, {
        id: `first_header_sub_1`,
        className: `${A.sub_header_container} mt-8 mb-4 text-2xl`,
        children: [`Burnout Dimensions`, ` `],
      }),
      (0, k.jsxs)(`div`, {
        className: `${A.content_container}`,
        children: [
          (0, k.jsx)(`p`, {
            children: `Many associate burnout with the feeling of being exhausted, not having the energy to accomplish basic tasks. But exhaustion is but one of the facets of burnout.`,
          }),
          Fi.map((e) => (0, k.jsx)(Pi, { ...e }, e.label)),
        ],
      }),
      (0, k.jsxs)(`h3`, {
        id: `first_header_sub_2`,
        className: `${A.sub_header_container} mt-8 mb-4 text-2xl`,
        children: [`Why is Burnout Bad?`, ` `],
      }),
      (0, k.jsx)(`div`, {
        className: `${A.content_container}`,
        children: (0, k.jsx)(`p`, {
          children: `Burnout acts as a mediator of both work and personal health outcomes.`,
        }),
      }),
      (0, k.jsx)(`h4`, {
        className: `${A.sub_header_container} text-xl`,
        children: `Health`,
      }),
      (0, k.jsxs)(`div`, {
        className: `${A.content_container}`,
        children: [
          (0, k.jsxs)(`p`, {
            children: [
              `The exhaustion dimension of burnout, being the closest related to stress is also the one most predictive of stress-related health outcomes. Exhaustion has been found to correlate with stress symptoms like `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `headaches`,
              }),
              `,`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `chronic fatigue`,
              }),
              `,`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `gastrointestinal disorders`,
              }),
              `,`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `muscle tension`,
              }),
              `,`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `hypertension`,
              }),
              `,`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `cold/flu episodes`,
              }),
              ` and`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `changes in sleep patterns`,
              }),
              `. Workload and exhaustion has also been found to correlate with`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `incidences of workplace injuries`,
              }),
              `, and burnout has been linked to unhealthy lifestyles like`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `smoking, alcohol and drug use`,
              }),
              `.`,
              ` `,
            ],
          }),
          (0, k.jsx)(`br`, {}),
          (0, k.jsxs)(`p`, {
            children: [
              `Mental health wise, burnout has been found to be predictive of`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `depression and anxiety`,
              }),
              `. A Finnish study on burnout found that 90 percent of the those with severe burnout reported having physical or mental diseases like`,
              ` `,
              (0, k.jsxs)(`b`, {
                className: `${A.bold}`,
                children: [` `, `musculoskeletal pain and depression`, ` `],
              }),
              `as the most common problems. Other research has also found burnout predictive of the emergence of`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `cardiovascular problems, type 2 diabetes`,
              }),
              ` `,
              `and a links between burnout and`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `inflammation biomarkers`,
              }),
              `.`,
            ],
          }),
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: `mx-2 sm:mx-auto mt-12 md:w-2/4 flex justify-between`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `group`,
            children: [
              (0, k.jsx)(hi, {}),
              (0, k.jsxs)(`ul`, {
                className: `group-hover:opacity-100 opacity-0 transition-opacity active:opacity-100 mt-4 text-cyan-100 border-2 border-red-950 rounded-md bg-[#6A3B3B] p-2 sm:text-sm text-xs whitespace-nowrap`,
                children: [
                  (0, k.jsx)(`li`, { children: `- smoking` }),
                  (0, k.jsx)(`li`, { children: `- alcohol use` }),
                  (0, k.jsx)(`li`, { children: `- drug use` }),
                ],
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `group`,
            children: [
              (0, k.jsx)(`div`, { children: (0, k.jsx)(mi, {}) }),
              (0, k.jsxs)(`ul`, {
                className: `group-hover:opacity-100 opacity-0 transition-opacity active:opacity-100 mt-4 text-cyan-100 border-2 border-orange-950 rounded-md bg-[#694339] p-2 sm:text-sm text-xs whitespace-nowrap`,
                children: [
                  (0, k.jsx)(`li`, { children: `- depression` }),
                  (0, k.jsx)(`li`, { children: `- anxiety` }),
                ],
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `group`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `sm:mx-8`,
                children: [(0, k.jsx)(pi, {}), ` `],
              }),
              (0, k.jsxs)(`ul`, {
                className: `mx-auto mt-4 p-2 
              group-hover:opacity-100 opacity-0 transition-all active:opacity-100
              text-cyan-100 border-2 border-pink-950 rounded-md bg-[#733950]
              sm:text-sm text-xs sm:whitespace-nowrap whitespace-break-spaces`,
                children: [
                  (0, k.jsx)(`li`, { children: `- headaches` }),
                  (0, k.jsx)(`li`, { children: `- chronic fatigue` }),
                  (0, k.jsx)(`li`, { children: `- gastrointestinal issues` }),
                  (0, k.jsx)(`li`, { children: `- muscle tension` }),
                  (0, k.jsx)(`li`, { children: `- hypertension` }),
                  (0, k.jsx)(`li`, { children: `- cold/flu episodes` }),
                  (0, k.jsx)(`li`, { children: `- sleep changes` }),
                  (0, k.jsx)(`li`, { children: `- workplace injuries` }),
                  (0, k.jsx)(`li`, { children: `- musculoskeletal pain` }),
                  (0, k.jsx)(`li`, { children: `- cardiovascular problems` }),
                  (0, k.jsx)(`li`, { children: `- type 2 diabetes` }),
                  (0, k.jsx)(`li`, { children: `- inflammation biomarkers` }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, k.jsx)(`h4`, {
        className: `${A.sub_header_container} text-xl`,
        children: `Work`,
      }),
      (0, k.jsxs)(`p`, {
        className: `${A.content_container}`,
        children: [
          `Burnout is associated with several forms of negative responses to work, including`,
          ` `,
          (0, k.jsx)(`b`, {
            className: `${A.bold}`,
            children: `job dissatisfaction, low commitment to the organization, absenteeism, intention to quit the job, and employee turnover`,
          }),
          `. Those experiencing burnout can also have a`,
          ` `,
          (0, k.jsx)(`b`, {
            className: `${A.bold}`,
            children: `negative impact on their colleagues by causing personal conflicts or disrupting job tasks`,
          }),
          `. `,
          (0, k.jsx)(`b`, {
            className: `${A.bold}`,
            children: `Poor job performance `,
          }),
          `is one of the most significant consequences of burnout in the workplace, which could have severe consequences in certain professions, even leading to fatal outcomes.`,
          ` `,
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: `w-fit mx-auto my-4 group align-center`,
        children: [
          (0, k.jsx)(`div`, {
            className: `w-fit mx-auto`,
            children: (0, k.jsx)(gi, {}),
          }),
          (0, k.jsxs)(`ul`, {
            className: `group-hover:opacity-100 opacity-0 transition-opacity active:opacity-100 mt-4 text-cyan-100 border-2 border-orange-950 rounded-md bg-[#684D38] p-2 sm:text-sm text-xs whitespace-nowrap`,
            children: [
              (0, k.jsx)(`li`, { children: `- job dissatisfaction` }),
              (0, k.jsx)(`li`, { children: `- low commitment` }),
              (0, k.jsx)(`li`, { children: `- absenteeism` }),
              (0, k.jsx)(`li`, { children: `- intention to quit` }),
              (0, k.jsx)(`li`, { children: `- employee turnover` }),
              (0, k.jsx)(`li`, { children: `- causing conflicts` }),
              (0, k.jsx)(`li`, { children: `- disrupting job tasks` }),
              (0, k.jsx)(`li`, { children: `- poor job performance` }),
            ],
          }),
        ],
      }),
      (0, k.jsx)(`h3`, {
        id: `first_header_sub_3`,
        className: `${A.sub_header_container} mt-8 mb-4 text-2xl`,
        children: `Job Engagement`,
      }),
      (0, k.jsx)(`p`, {
        className: `${A.content_container}`,
        children: `It is important to note that employee engagement, the opposite of burnout, is incredibly powerful and important for organisations thriving.`,
      }),
      (0, k.jsxs)(`div`, {
        className: `w-fit mx-auto my-4`,
        children: [(0, k.jsx)(_i, {}), ` `],
      }),
      (0, k.jsxs)(`p`, {
        className: `${A.content_container}`,
        children: [
          `Research into high performing organisations in software development has shown that`,
          ` `,
          (0, k.jsx)(`b`, {
            className: `${A.bold}`,
            children: `employee engagement and satisfaction`,
          }),
          ` `,
          `are indicative of`,
          ` `,
          (0, k.jsx)(`b`, {
            className: `${A.bold}`,
            children: `employee loyalty and identity`,
          }),
          `, they can`,
          ` `,
          (0, k.jsx)(`b`, {
            className: `${A.bold}`,
            children: `help reduce the likelihood of burnout`,
          }),
          ` `,
          `while`,
          ` `,
          (0, k.jsx)(`b`, {
            className: `${A.bold}`,
            children: `driving key organizational outcomes such as profitability, productivity, and market share.`,
          }),
          ` `,
          `Employees in high-performing teams were`,
          ` `,
          (0, k.jsx)(`b`, {
            className: `${A.bold}`,
            children: `twice as likely to recommend their organization to a friend as a great place to work.`,
          }),
        ],
      }),
      (0, k.jsxs)(`p`, {
        className: `${A.content_container}`,
        children: [
          `Moreover, employee engagement doesn't just benefit the workers; it drives business outcomes as well. Research has found`,
          ` `,
          (0, k.jsx)(`b`, {
            className: `${A.bold}`,
            children: `significant correlations between engagement and how well organizations collect and utilize customer feedback`,
          }),
          `, as well as the`,
          ` `,
          (0, k.jsx)(`b`, {
            className: `${A.bold}`,
            children: `ability of teams to visualize and understand the development process from start to finish.`,
          }),
          ` `,
          `Engagement is also linked to`,
          ` `,
          (0, k.jsx)(`b`, {
            className: `${A.bold}`,
            children: `how much employees align with their workplace's values and goals,`,
          }),
          ` `,
          `and`,
          ` `,
          (0, k.jsx)(`b`, {
            className: `${A.bold}`,
            children: `how much effort they're willing to put in to ensure the organization's success.`,
          }),
        ],
      }),
      (0, k.jsxs)(`h2`, {
        id: `second_header`,
        className: `${A.h2}`,
        children: [` `, `Areas of Worklife Scale`, ` `],
      }),
      (0, k.jsx)(`div`, {
        className: `w-fit m-auto my-8`,
        children: (0, k.jsx)(yi, {}),
      }),
      (0, k.jsx)(`p`, {
        className: `${A.content_container}`,
        children: `Maslach's research resulted in the identification of six key domains in worklife, as situational predictors of burnout. The key idea is that finding a good fit between the person and their job is essential. This model identifies areas of work that can impact a person's job satisfaction and engagement, or lead to burnout.`,
      }),
      (0, k.jsx)(`div`, {
        className: `${A.content_container}`,
        children: Ii.map((e) => (0, k.jsx)(Pi, { ...e }, e.label)),
      }),
      (0, k.jsx)(`div`, {
        className: `${A.content_container}`,
        children: (0, k.jsxs)(`p`, {
          children: [
            `While it may be difficult to get all worklife dimensions in perfect shape, it is neither necessary. These areas should be considered entry points for creating a better workplace. The organization can still be a good place to work even if it does not excel in all aspects. However, to prevent burnout, certain dimensions must be strong and well functioning.`,
            ` `,
          ],
        }),
      }),
      (0, k.jsx)(`h2`, {
        id: `third_header`,
        className: `${A.h2}`,
        children: `Personal Characteristics`,
      }),
      (0, k.jsx)(`div`, {
        className: `w-fit m-auto mb-8`,
        children: (0, k.jsx)(vi, {}),
      }),
      (0, k.jsxs)(`div`, {
        className: `${A.content_container}`,
        children: [
          (0, k.jsx)(`p`, {
            children: `We have established that the work environment plays an important role in the development of burnout. However, certain personal characteristics have also been found to correlate with burnout.`,
          }),
          ` `,
          (0, k.jsx)(`br`, {}),
          ` `,
          (0, k.jsxs)(`p`, {
            children: [
              ` `,
              `Age is one of those variables, as`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `younger employees `,
              }),
              ` tend to have higher rates of burnout compared to those over 30 or 40 years old. Gender has not been identified as a strong predictor of burnout, but males tend to score slightly higher on cynicism, while females tend to score higher on exhaustion. In terms of personality traits, individuals with `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: `Type A behavior `,
              }),
              ` `,
              `(competitive, impatient and aggressive) tend to have higher rates of burnout, and`,
              ` `,
              (0, k.jsx)(`b`, {
                className: `${A.bold}`,
                children: ` people high on neuroticism, `,
              }),
              `which is a trait from the Big Five personality dimensions, has also been closely linked to burnout. A person's home life is also important in their susceptibility to burnout. As those experiencing stress in their personal life are more vulnerable to developing burnout.`,
            ],
          }),
        ],
      }),
      (0, k.jsx)(`h2`, {
        id: `fourth_header`,
        className: `${A.h2}`,
        children: `Job demands in tech`,
      }),
      (0, k.jsx)(`div`, {
        className: `${A.content_container}`,
        children: (0, k.jsx)(`p`, {
          children: `Nicole Forsgren, Jez Humble, and Gene Kim, Kim is known for authoring The Phoenix Project, conducted a study on over 2000 organizations worldwide to identify the practices that result in high-performing tech organizations. The results of their research is compiled into the book Accelerate, which highlights the impact of Lean Software and DevOps on tech organizations.`,
        }),
      }),
      (0, k.jsxs)(`h3`, {
        id: `fourth_header_sub_1`,
        className: `${A.sub_header_container} mt-8 mb-4 text-2xl`,
        children: [`Lean Management Practices`, ` `],
      }),
      (0, k.jsxs)(`div`, {
        className: `${A.content_container}`,
        children: [
          (0, k.jsxs)(`p`, {
            children: [
              `According to the authors, Lean management practices have a strong positive influence on software delivery performance and team culture, while also reducing burnout and promoting a more generative culture. Practices such as`,
              ` `,
              (0, k.jsxs)(`b`, {
                className: `${A.bold}`,
                children: [
                  `limiting Work In Process, implementing visual management, providing feedback from production, and implementing lightweight change approval processes`,
                  ` `,
                ],
              }),
              ` `,
              `were found to contribute to these positive outcomes.`,
            ],
          }),
          (0, k.jsx)(`br`, {}),
          (0, k.jsx)(`p`, {
            children: `The core principles of Lean management involve granting employees the necessary time and resources to improve their work and creating an environment that supports experimentation, failure and learning, and which allows employees to make decisions that impact their jobs.`,
          }),
        ],
      }),
      (0, k.jsxs)(`h3`, {
        id: `fourth_header_sub_1`,
        className: `${A.sub_header_container} mt-8 mb-4 text-2xl`,
        children: [`Making work sustainable`, ` `],
      }),
      (0, k.jsx)(`div`, {
        className: `${A.content_container} mb-4`,
        children: (0, k.jsx)(`p`, {
          children: `Factors within organizations that strongly correlate with high levels of burnout were identified in the research, with suggestions for how to address these problems.`,
        }),
      }),
      (0, k.jsx)(`h3`, {
        className: `${A.sub_header_container}`,
        children: `Organizational culture`,
      }),
      (0, k.jsx)(`div`, {
        className: `${A.content_container} mb-4`,
        children: (0, k.jsx)(`p`, {
          children: `Organizational culture was found to predict software delivery performance and organizational performance. A power oriented culture, characterized by low cooperation, nontransparence and blaming have employees with strong feelings of burnout. Managers can counteract by creating a blame free environment, learn from failures and communicating shared sense of purpose, in that way transforming the culture into a generative one.`,
        }),
      }),
      (0, k.jsx)(`h3`, {
        className: `${A.sub_header_container}`,
        children: `Deployments`,
      }),
      (0, k.jsxs)(`div`, {
        className: `${A.content_container}  mb-4`,
        children: [
          (0, k.jsx)(`p`, {
            children: `A high correlation was found between deployment pain, which contributes to feelings of stress and lack of control, and poor IT performance, organizational performance and organizational culture. Systems should be designed to be deployed easily, be able to detect and tolerate failure and have loosely coupled architectures, so that it’s components can be updated easily. They should also be able to automatically reproduce the state of production systems from information in version control.`,
          }),
          (0, k.jsx)(`br`, {}),
          (0, k.jsx)(`p`, {
            children: `A 2020 survey of more than 500 software developers in North America examining the state of Big Code, which refers to the dramatic growth in the volume and complexity of code, found that 88% of teams admitted that evry release caused some anxiety. When asked about the emotions that code releases make them feel, there was a 50/50 response of satisfaction vs fear or anxiety.`,
          }),
        ],
      }),
      (0, k.jsx)(`h3`, {
        className: `${A.sub_header_container}`,
        children: `Leaders`,
      }),
      (0, k.jsx)(`div`, {
        className: `${A.content_container} mb-4`,
        children: (0, k.jsx)(`p`, {
          children: `Teams with effective leaders reported lower levels of burnout. These leaders are known for limiting work in process and removing roadblocks that hinders the team's progress.`,
        }),
      }),
      (0, k.jsx)(`h3`, {
        className: `${A.sub_header_container}`,
        children: `Skills Development`,
      }),
      (0, k.jsx)(`div`, {
        className: `${A.content_container} mb-4`,
        children: (0, k.jsx)(`p`, {
          children: `Organizations that prioritize the development of their teams' skills and abilities have better outcomes. Invest in training and providing adequate support and resources for acquiring new skills, are vital for the succesull adoption of DevOps practices that improve software delivery and performance.`,
        }),
      }),
      (0, k.jsx)(`h3`, {
        className: `${A.sub_header_container}`,
        children: `Organizational performance`,
      }),
      (0, k.jsx)(`div`, {
        className: `${A.content_container}`,
        children: (0, k.jsx)(`p`, {
          children: `Research shows that the implementation of Lean management and continuous delivery practices has a positive impact on software delivery performance, leading to an improvement in overall organizational performance.`,
        }),
      }),
      (0, k.jsxs)(`div`, {
        className: `w-fit m-auto my-8 self-center text-center`,
        children: [
          (0, k.jsx)(`h3`, {
            className: `text-neutral-200 font-bold capitalize leading-8 text-xl`,
            children: `Test what you have learned`,
          }),
          (0, k.jsx)(Rn, {
            to: `burnout-in-tech/intro`,
            children: (0, k.jsx)(Ni, {}),
          }),
        ],
      }),
      (0, k.jsx)(Ei, { openModal: t }),
    ],
  })
}
function Ri() {
  return (0, k.jsx)(`div`, {
    children: (0, k.jsxs)(Rn, {
      to: `burnout-in-tech`,
      children: [
        (0, k.jsx)(li, {}),
        (0, k.jsx)(`p`, { children: `Learn More` }),
      ],
    }),
  })
}
var zi = ({ text: e, href: t }) =>
    (0, k.jsx)(Rn, {
      className: `border-neutral-50 border-solid border-2 py-2 px-4 rounded-md text-neutral-50`,
      to: t,
      children: e,
    }),
  Bi = () =>
    (0, k.jsxs)(`main`, {
      className: `w-full flex flex-col items-center p-8`,
      children: [
        (0, k.jsx)(`h1`, {
          className: `text-neutral-200 font-bold capitalize w-max text-2xl sm:text-4xl font-mono underline`,
          children: `Introduction`,
        }),
        (0, k.jsxs)(`div`, {
          className: `flex gap-2`,
          children: [
            (0, k.jsx)(zi, { text: `Back`, href: `../burnout-in-tech` }),
            (0, k.jsx)(zi, { text: `Next`, href: `scene-1` }),
          ],
        }),
      ],
    }),
  Vi = () =>
    (0, k.jsxs)(`main`, {
      className: `w-full flex flex-col items-center p-8`,
      children: [
        (0, k.jsx)(`h1`, {
          className: `text-neutral-200 font-bold capitalize w-max text-2xl sm:text-4xl font-mono underline`,
          children: `Scene 1`,
        }),
        (0, k.jsxs)(`div`, {
          className: `flex gap-2`,
          children: [
            (0, k.jsx)(zi, { text: `Back`, href: `intro` }),
            (0, k.jsx)(zi, { text: `Next`, href: `scene-2` }),
          ],
        }),
      ],
    }),
  j = () =>
    (0, k.jsx)(`div`, {
      className: `min-h-screen bg-brand-teal/95 text-white font-sans`,
      children: (0, k.jsx)(Gt, {}),
    })
rr.createRoot(document.getElementById(`root`)).render(
  (0, k.jsx)(x.StrictMode, {
    children: (0, k.jsx)(ei, {
      children: (0, k.jsx)(
        () =>
          (0, k.jsx)(In, {
            children: (0, k.jsxs)(Jt, {
              children: [
                (0, k.jsx)(Kt, { path: `/`, element: (0, k.jsx)(Ri, {}) }),
                (0, k.jsx)(Kt, { index: !0, element: (0, k.jsx)(Ri, {}) }),
                (0, k.jsxs)(Kt, {
                  element: (0, k.jsx)(j, {}),
                  children: [
                    (0, k.jsx)(Kt, {
                      path: `burnout-in-tech`,
                      element: (0, k.jsx)(Li, {}),
                    }),
                    (0, k.jsx)(Kt, {
                      path: `burnout-in-tech/intro`,
                      element: (0, k.jsx)(Bi, {}),
                    }),
                    (0, k.jsx)(Kt, {
                      path: `burnout-in-tech/scene-1`,
                      element: (0, k.jsx)(Vi, {}),
                    }),
                  ],
                }),
              ],
            }),
          }),
        {}
      ),
    }),
  })
)
