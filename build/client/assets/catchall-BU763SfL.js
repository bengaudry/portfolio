import { a as v, p as d, w as jo } from "./chunk-JZWAC4HX-CdAuOiwy.js"
import { g as Bo, b as Io, c as Ro } from "./i18nInstance-tIEe1TfV.js"
const Lo = (t, e, i, n) => {
		const s = [i, { code: e, ...(n || {}) }]
		if (t?.services?.logger?.forward)
			return t.services.logger.forward(s, "warn", "react-i18next::", !0)
		;(at(s[0]) && (s[0] = `react-i18next:: ${s[0]}`),
			t?.services?.logger?.warn
				? t.services.logger.warn(...s)
				: console?.warn && console.warn(...s))
	},
	Bi = {},
	Pe = (t, e, i, n) => {
		;(at(i) && Bi[i]) || (at(i) && (Bi[i] = new Date()), Lo(t, e, i, n))
	},
	Xn = (t, e) => () => {
		if (t.isInitialized) e()
		else {
			const i = () => {
				;(setTimeout(() => {
					t.off("initialized", i)
				}, 0),
					e())
			}
			t.on("initialized", i)
		}
	},
	Me = (t, e, i) => {
		t.loadNamespaces(e, Xn(t, i))
	},
	Ii = (t, e, i, n) => {
		if (
			(at(i) && (i = [i]),
			t.options.preload && t.options.preload.indexOf(e) > -1)
		)
			return Me(t, i, n)
		;(i.forEach((s) => {
			t.options.ns.indexOf(s) < 0 && t.options.ns.push(s)
		}),
			t.loadLanguages(e, Xn(t, n)))
	},
	ko = (t, e, i = {}) =>
		!e.languages || !e.languages.length
			? (Pe(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
					languages: e.languages
				}),
				!0)
			: e.hasLoadedNamespace(t, {
					lng: i.lng,
					precheck: (n, s) => {
						if (
							i.bindI18n &&
							i.bindI18n.indexOf("languageChanging") > -1 &&
							n.services.backendConnector.backend &&
							n.isLanguageChangingTo &&
							!s(n.isLanguageChangingTo, t)
						)
							return !1
					}
				}),
	at = (t) => typeof t == "string",
	Fo = (t) => typeof t == "object" && t !== null,
	No = v.createContext()
class Oo {
	constructor() {
		this.usedNamespaces = {}
	}
	addUsedNamespaces(e) {
		e.forEach((i) => {
			this.usedNamespaces[i] || (this.usedNamespaces[i] = !0)
		})
	}
	getUsedNamespaces() {
		return Object.keys(this.usedNamespaces)
	}
}
const Uo = (t, e) => {
		const i = v.useRef()
		return (
			v.useEffect(() => {
				i.current = t
			}, [t, e]),
			i.current
		)
	},
	_n = (t, e, i, n) => t.getFixedT(e, i, n),
	Qo = (t, e, i, n) => v.useCallback(_n(t, e, i, n), [t, e, i, n]),
	$ = (t, e = {}) => {
		const { i18n: i } = e,
			{ i18n: n, defaultNS: s } = v.useContext(No) || {},
			r = i || n || Bo()
		if ((r && !r.reportNamespaces && (r.reportNamespaces = new Oo()), !r)) {
			Pe(
				r,
				"NO_I18NEXT_INSTANCE",
				"useTranslation: You will need to pass in an i18next instance by using initReactI18next"
			)
			const w = (S, P) =>
					at(P)
						? P
						: Fo(P) && at(P.defaultValue)
							? P.defaultValue
							: Array.isArray(S)
								? S[S.length - 1]
								: S,
				x = [w, {}, !1]
			return ((x.t = w), (x.i18n = {}), (x.ready = !1), x)
		}
		r.options.react?.wait &&
			Pe(
				r,
				"DEPRECATED_OPTION",
				"useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
			)
		const o = { ...Io(), ...r.options.react, ...e },
			{ useSuspense: a, keyPrefix: c } = o
		let u = s || r.options?.defaultNS
		;((u = at(u) ? [u] : u || ["translation"]),
			r.reportNamespaces.addUsedNamespaces?.(u))
		const l =
				(r.isInitialized || r.initializedStoreOnce) &&
				u.every((w) => ko(w, r, o)),
			h = Qo(r, e.lng || null, o.nsMode === "fallback" ? u : u[0], c),
			f = () => h,
			A = () =>
				_n(r, e.lng || null, o.nsMode === "fallback" ? u : u[0], c),
			[m, C] = v.useState(f)
		let K = u.join()
		e.lng && (K = `${e.lng}${K}`)
		const p = Uo(K),
			y = v.useRef(!0)
		;(v.useEffect(() => {
			const { bindI18n: w, bindI18nStore: x } = o
			;((y.current = !0),
				!l &&
					!a &&
					(e.lng
						? Ii(r, e.lng, u, () => {
								y.current && C(A)
							})
						: Me(r, u, () => {
								y.current && C(A)
							})),
				l && p && p !== K && y.current && C(A))
			const S = () => {
				y.current && C(A)
			}
			return (
				w && r?.on(w, S),
				x && r?.store.on(x, S),
				() => {
					;((y.current = !1),
						r && w && w?.split(" ").forEach((P) => r.off(P, S)),
						x &&
							r &&
							x.split(" ").forEach((P) => r.store.off(P, S)))
				}
			)
		}, [r, K]),
			v.useEffect(() => {
				y.current && l && C(f)
			}, [r, c, l]))
		const g = [m, r, l]
		if (((g.t = m), (g.i18n = r), (g.ready = l), l || (!l && !a))) return g
		throw new Promise((w) => {
			e.lng ? Ii(r, e.lng, u, () => w()) : Me(r, u, () => w())
		})
	},
	Go = "_App_1q905_1",
	Yo = { App: Go },
	qn = v.createContext({})
function Wo(t) {
	const e = v.useRef(null)
	return (e.current === null && (e.current = t()), e.current)
}
const qe = typeof window < "u",
	Ho = qe ? v.useLayoutEffect : v.useEffect,
	Ze = v.createContext(null)
function $e(t, e) {
	t.indexOf(e) === -1 && t.push(e)
}
function ti(t, e) {
	const i = t.indexOf(e)
	i > -1 && t.splice(i, 1)
}
const J = (t, e, i) => (i > e ? e : i < t ? t : i)
let ei = () => {}
const X = {},
	Zn = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
function $n(t) {
	return typeof t == "object" && t !== null
}
const ts = (t) => /^0[^.\s]+$/u.test(t)
function ii(t) {
	let e
	return () => (e === void 0 && (e = t()), e)
}
const Y = (t) => t,
	zo = (t, e) => (i) => e(t(i)),
	Gt = (...t) => t.reduce(zo),
	kt = (t, e, i) => {
		const n = e - t
		return n === 0 ? 1 : (i - t) / n
	}
class ni {
	constructor() {
		this.subscriptions = []
	}
	add(e) {
		return ($e(this.subscriptions, e), () => ti(this.subscriptions, e))
	}
	notify(e, i, n) {
		const s = this.subscriptions.length
		if (s)
			if (s === 1) this.subscriptions[0](e, i, n)
			else
				for (let r = 0; r < s; r++) {
					const o = this.subscriptions[r]
					o && o(e, i, n)
				}
	}
	getSize() {
		return this.subscriptions.length
	}
	clear() {
		this.subscriptions.length = 0
	}
}
const H = (t) => t * 1e3,
	G = (t) => t / 1e3
function es(t, e) {
	return e ? t * (1e3 / e) : 0
}
const is = (t, e, i) =>
		(((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t,
	Jo = 1e-7,
	Xo = 12
function _o(t, e, i, n, s) {
	let r,
		o,
		a = 0
	do ((o = e + (i - e) / 2), (r = is(o, n, s) - t), r > 0 ? (i = o) : (e = o))
	while (Math.abs(r) > Jo && ++a < Xo)
	return o
}
function Yt(t, e, i, n) {
	if (t === e && i === n) return Y
	const s = (r) => _o(r, 0, 1, t, i)
	return (r) => (r === 0 || r === 1 ? r : is(s(r), e, n))
}
const ns = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
	ss = (t) => (e) => 1 - t(1 - e),
	os = Yt(0.33, 1.53, 0.69, 0.99),
	si = ss(os),
	rs = ns(si),
	as = (t) =>
		(t *= 2) < 1 ? 0.5 * si(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
	oi = (t) => 1 - Math.sin(Math.acos(t)),
	cs = ss(oi),
	ls = ns(oi),
	qo = Yt(0.42, 0, 1, 1),
	Zo = Yt(0, 0, 0.58, 1),
	us = Yt(0.42, 0, 0.58, 1),
	$o = (t) => Array.isArray(t) && typeof t[0] != "number",
	hs = (t) => Array.isArray(t) && typeof t[0] == "number",
	tr = {
		linear: Y,
		easeIn: qo,
		easeInOut: us,
		easeOut: Zo,
		circIn: oi,
		circInOut: ls,
		circOut: cs,
		backIn: si,
		backInOut: rs,
		backOut: os,
		anticipate: as
	},
	er = (t) => typeof t == "string",
	Ri = (t) => {
		if (hs(t)) {
			ei(t.length === 4)
			const [e, i, n, s] = t
			return Yt(e, i, n, s)
		} else if (er(t)) return tr[t]
		return t
	},
	Jt = [
		"setup",
		"read",
		"resolveKeyframes",
		"preUpdate",
		"update",
		"preRender",
		"render",
		"postRender"
	]
function ir(t, e) {
	let i = new Set(),
		n = new Set(),
		s = !1,
		r = !1
	const o = new WeakSet()
	let a = { delta: 0, timestamp: 0, isProcessing: !1 }
	function c(l) {
		;(o.has(l) && (u.schedule(l), t()), l(a))
	}
	const u = {
		schedule: (l, h = !1, f = !1) => {
			const m = f && s ? i : n
			return (h && o.add(l), m.has(l) || m.add(l), l)
		},
		cancel: (l) => {
			;(n.delete(l), o.delete(l))
		},
		process: (l) => {
			if (((a = l), s)) {
				r = !0
				return
			}
			;((s = !0),
				([i, n] = [n, i]),
				i.forEach(c),
				i.clear(),
				(s = !1),
				r && ((r = !1), u.process(l)))
		}
	}
	return u
}
const nr = 40
function fs(t, e) {
	let i = !1,
		n = !0
	const s = { delta: 0, timestamp: 0, isProcessing: !1 },
		r = () => (i = !0),
		o = Jt.reduce((g, w) => ((g[w] = ir(r)), g), {}),
		{
			setup: a,
			read: c,
			resolveKeyframes: u,
			preUpdate: l,
			update: h,
			preRender: f,
			render: A,
			postRender: m
		} = o,
		C = () => {
			const g = X.useManualTiming ? s.timestamp : performance.now()
			;((i = !1),
				X.useManualTiming ||
					(s.delta = n
						? 1e3 / 60
						: Math.max(Math.min(g - s.timestamp, nr), 1)),
				(s.timestamp = g),
				(s.isProcessing = !0),
				a.process(s),
				c.process(s),
				u.process(s),
				l.process(s),
				h.process(s),
				f.process(s),
				A.process(s),
				m.process(s),
				(s.isProcessing = !1),
				i && e && ((n = !1), t(C)))
		},
		K = () => {
			;((i = !0), (n = !0), s.isProcessing || t(C))
		}
	return {
		schedule: Jt.reduce((g, w) => {
			const x = o[w]
			return (
				(g[w] = (S, P = !1, E = !1) => (i || K(), x.schedule(S, P, E))),
				g
			)
		}, {}),
		cancel: (g) => {
			for (let w = 0; w < Jt.length; w++) o[Jt[w]].cancel(g)
		},
		state: s,
		steps: o
	}
}
const {
	schedule: M,
	cancel: q,
	state: I,
	steps: le
} = fs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Y, !0)
let qt
function sr() {
	qt = void 0
}
const F = {
		now: () => (
			qt === void 0 &&
				F.set(
					I.isProcessing || X.useManualTiming
						? I.timestamp
						: performance.now()
				),
			qt
		),
		set: (t) => {
			;((qt = t), queueMicrotask(sr))
		}
	},
	ds = (t) => (e) => typeof e == "string" && e.startsWith(t),
	ri = ds("--"),
	or = ds("var(--"),
	ai = (t) => (or(t) ? rr.test(t.split("/*")[0].trim()) : !1),
	rr =
		/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
	Tt = {
		test: (t) => typeof t == "number",
		parse: parseFloat,
		transform: (t) => t
	},
	Ft = { ...Tt, transform: (t) => J(0, 1, t) },
	Xt = { ...Tt, default: 1 },
	Vt = (t) => Math.round(t * 1e5) / 1e5,
	ci = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
function ar(t) {
	return t == null
}
const cr =
		/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
	li = (t, e) => (i) =>
		!!(
			(typeof i == "string" && cr.test(i) && i.startsWith(t)) ||
			(e && !ar(i) && Object.prototype.hasOwnProperty.call(i, e))
		),
	As = (t, e, i) => (n) => {
		if (typeof n != "string") return n
		const [s, r, o, a] = n.match(ci)
		return {
			[t]: parseFloat(s),
			[e]: parseFloat(r),
			[i]: parseFloat(o),
			alpha: a !== void 0 ? parseFloat(a) : 1
		}
	},
	lr = (t) => J(0, 255, t),
	ue = { ...Tt, transform: (t) => Math.round(lr(t)) },
	ot = {
		test: li("rgb", "red"),
		parse: As("red", "green", "blue"),
		transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
			"rgba(" +
			ue.transform(t) +
			", " +
			ue.transform(e) +
			", " +
			ue.transform(i) +
			", " +
			Vt(Ft.transform(n)) +
			")"
	}
function ur(t) {
	let e = "",
		i = "",
		n = "",
		s = ""
	return (
		t.length > 5
			? ((e = t.substring(1, 3)),
				(i = t.substring(3, 5)),
				(n = t.substring(5, 7)),
				(s = t.substring(7, 9)))
			: ((e = t.substring(1, 2)),
				(i = t.substring(2, 3)),
				(n = t.substring(3, 4)),
				(s = t.substring(4, 5)),
				(e += e),
				(i += i),
				(n += n),
				(s += s)),
		{
			red: parseInt(e, 16),
			green: parseInt(i, 16),
			blue: parseInt(n, 16),
			alpha: s ? parseInt(s, 16) / 255 : 1
		}
	)
}
const be = { test: li("#"), parse: ur, transform: ot.transform },
	Wt = (t) => ({
		test: (e) =>
			typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
		parse: parseFloat,
		transform: (e) => `${e}${t}`
	}),
	_ = Wt("deg"),
	z = Wt("%"),
	T = Wt("px"),
	hr = Wt("vh"),
	fr = Wt("vw"),
	Li = {
		...z,
		parse: (t) => z.parse(t) / 100,
		transform: (t) => z.transform(t * 100)
	},
	At = {
		test: li("hsl", "hue"),
		parse: As("hue", "saturation", "lightness"),
		transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
			"hsla(" +
			Math.round(t) +
			", " +
			z.transform(Vt(e)) +
			", " +
			z.transform(Vt(i)) +
			", " +
			Vt(Ft.transform(n)) +
			")"
	},
	j = {
		test: (t) => ot.test(t) || be.test(t) || At.test(t),
		parse: (t) =>
			ot.test(t) ? ot.parse(t) : At.test(t) ? At.parse(t) : be.parse(t),
		transform: (t) =>
			typeof t == "string"
				? t
				: t.hasOwnProperty("red")
					? ot.transform(t)
					: At.transform(t),
		getAnimatableNone: (t) => {
			const e = j.parse(t)
			return ((e.alpha = 0), j.transform(e))
		}
	},
	dr =
		/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
function Ar(t) {
	return (
		isNaN(t) &&
		typeof t == "string" &&
		(t.match(ci)?.length || 0) + (t.match(dr)?.length || 0) > 0
	)
}
const ms = "number",
	ps = "color",
	mr = "var",
	pr = "var(",
	ki = "${}",
	gr =
		/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
function Nt(t) {
	const e = t.toString(),
		i = [],
		n = { color: [], number: [], var: [] },
		s = []
	let r = 0
	const a = e
		.replace(
			gr,
			(c) => (
				j.test(c)
					? (n.color.push(r), s.push(ps), i.push(j.parse(c)))
					: c.startsWith(pr)
						? (n.var.push(r), s.push(mr), i.push(c))
						: (n.number.push(r), s.push(ms), i.push(parseFloat(c))),
				++r,
				ki
			)
		)
		.split(ki)
	return { values: i, split: a, indexes: n, types: s }
}
function gs(t) {
	return Nt(t).values
}
function Ks(t) {
	const { split: e, types: i } = Nt(t),
		n = e.length
	return (s) => {
		let r = ""
		for (let o = 0; o < n; o++)
			if (((r += e[o]), s[o] !== void 0)) {
				const a = i[o]
				a === ms
					? (r += Vt(s[o]))
					: a === ps
						? (r += j.transform(s[o]))
						: (r += s[o])
			}
		return r
	}
}
const Kr = (t) =>
	typeof t == "number" ? 0 : j.test(t) ? j.getAnimatableNone(t) : t
function yr(t) {
	const e = gs(t)
	return Ks(t)(e.map(Kr))
}
const Z = { test: Ar, parse: gs, createTransformer: Ks, getAnimatableNone: yr }
function he(t, e, i) {
	return (
		i < 0 && (i += 1),
		i > 1 && (i -= 1),
		i < 1 / 6
			? t + (e - t) * 6 * i
			: i < 1 / 2
				? e
				: i < 2 / 3
					? t + (e - t) * (2 / 3 - i) * 6
					: t
	)
}
function Cr({ hue: t, saturation: e, lightness: i, alpha: n }) {
	;((t /= 360), (e /= 100), (i /= 100))
	let s = 0,
		r = 0,
		o = 0
	if (!e) s = r = o = i
	else {
		const a = i < 0.5 ? i * (1 + e) : i + e - i * e,
			c = 2 * i - a
		;((s = he(c, a, t + 1 / 3)),
			(r = he(c, a, t)),
			(o = he(c, a, t - 1 / 3)))
	}
	return {
		red: Math.round(s * 255),
		green: Math.round(r * 255),
		blue: Math.round(o * 255),
		alpha: n
	}
}
function ee(t, e) {
	return (i) => (i > 0 ? e : t)
}
const b = (t, e, i) => t + (e - t) * i,
	fe = (t, e, i) => {
		const n = t * t,
			s = i * (e * e - n) + n
		return s < 0 ? 0 : Math.sqrt(s)
	},
	vr = [be, ot, At],
	xr = (t) => vr.find((e) => e.test(t))
function Fi(t) {
	const e = xr(t)
	if (!e) return !1
	let i = e.parse(t)
	return (e === At && (i = Cr(i)), i)
}
const Ni = (t, e) => {
		const i = Fi(t),
			n = Fi(e)
		if (!i || !n) return ee(t, e)
		const s = { ...i }
		return (r) => (
			(s.red = fe(i.red, n.red, r)),
			(s.green = fe(i.green, n.green, r)),
			(s.blue = fe(i.blue, n.blue, r)),
			(s.alpha = b(i.alpha, n.alpha, r)),
			ot.transform(s)
		)
	},
	Ve = new Set(["none", "hidden"])
function Tr(t, e) {
	return Ve.has(t) ? (i) => (i <= 0 ? t : e) : (i) => (i >= 1 ? e : t)
}
function wr(t, e) {
	return (i) => b(t, e, i)
}
function ui(t) {
	return typeof t == "number"
		? wr
		: typeof t == "string"
			? ai(t)
				? ee
				: j.test(t)
					? Ni
					: Pr
			: Array.isArray(t)
				? ys
				: typeof t == "object"
					? j.test(t)
						? Ni
						: Sr
					: ee
}
function ys(t, e) {
	const i = [...t],
		n = i.length,
		s = t.map((r, o) => ui(r)(r, e[o]))
	return (r) => {
		for (let o = 0; o < n; o++) i[o] = s[o](r)
		return i
	}
}
function Sr(t, e) {
	const i = { ...t, ...e },
		n = {}
	for (const s in i)
		t[s] !== void 0 && e[s] !== void 0 && (n[s] = ui(t[s])(t[s], e[s]))
	return (s) => {
		for (const r in n) i[r] = n[r](s)
		return i
	}
}
function Er(t, e) {
	const i = [],
		n = { color: 0, var: 0, number: 0 }
	for (let s = 0; s < e.values.length; s++) {
		const r = e.types[s],
			o = t.indexes[r][n[r]],
			a = t.values[o] ?? 0
		;((i[s] = a), n[r]++)
	}
	return i
}
const Pr = (t, e) => {
	const i = Z.createTransformer(e),
		n = Nt(t),
		s = Nt(e)
	return n.indexes.var.length === s.indexes.var.length &&
		n.indexes.color.length === s.indexes.color.length &&
		n.indexes.number.length >= s.indexes.number.length
		? (Ve.has(t) && !s.values.length) || (Ve.has(e) && !n.values.length)
			? Tr(t, e)
			: Gt(ys(Er(n, s), s.values), i)
		: ee(t, e)
}
function Cs(t, e, i) {
	return typeof t == "number" && typeof e == "number" && typeof i == "number"
		? b(t, e, i)
		: ui(t)(t, e)
}
const Mr = (t) => {
		const e = ({ timestamp: i }) => t(i)
		return {
			start: (i = !0) => M.update(e, i),
			stop: () => q(e),
			now: () => (I.isProcessing ? I.timestamp : F.now())
		}
	},
	vs = (t, e, i = 10) => {
		let n = ""
		const s = Math.max(Math.round(e / i), 2)
		for (let r = 0; r < s; r++)
			n += Math.round(t(r / (s - 1)) * 1e4) / 1e4 + ", "
		return `linear(${n.substring(0, n.length - 2)})`
	},
	ie = 2e4
function hi(t) {
	let e = 0
	const i = 50
	let n = t.next(e)
	for (; !n.done && e < ie; ) ((e += i), (n = t.next(e)))
	return e >= ie ? 1 / 0 : e
}
function br(t, e = 100, i) {
	const n = i({ ...t, keyframes: [0, e] }),
		s = Math.min(hi(n), ie)
	return {
		type: "keyframes",
		ease: (r) => n.next(s * r).value / e,
		duration: G(s)
	}
}
const Vr = 5
function xs(t, e, i) {
	const n = Math.max(e - Vr, 0)
	return es(i - t(n), e - n)
}
const V = {
		stiffness: 100,
		damping: 10,
		mass: 1,
		velocity: 0,
		duration: 800,
		bounce: 0.3,
		visualDuration: 0.3,
		restSpeed: { granular: 0.01, default: 2 },
		restDelta: { granular: 0.005, default: 0.5 },
		minDuration: 0.01,
		maxDuration: 10,
		minDamping: 0.05,
		maxDamping: 1
	},
	de = 0.001
function Dr({
	duration: t = V.duration,
	bounce: e = V.bounce,
	velocity: i = V.velocity,
	mass: n = V.mass
}) {
	let s,
		r,
		o = 1 - e
	;((o = J(V.minDamping, V.maxDamping, o)),
		(t = J(V.minDuration, V.maxDuration, G(t))),
		o < 1
			? ((s = (u) => {
					const l = u * o,
						h = l * t,
						f = l - i,
						A = De(u, o),
						m = Math.exp(-h)
					return de - (f / A) * m
				}),
				(r = (u) => {
					const h = u * o * t,
						f = h * i + i,
						A = Math.pow(o, 2) * Math.pow(u, 2) * t,
						m = Math.exp(-h),
						C = De(Math.pow(u, 2), o)
					return ((-s(u) + de > 0 ? -1 : 1) * ((f - A) * m)) / C
				}))
			: ((s = (u) => {
					const l = Math.exp(-u * t),
						h = (u - i) * t + 1
					return -de + l * h
				}),
				(r = (u) => {
					const l = Math.exp(-u * t),
						h = (i - u) * (t * t)
					return l * h
				})))
	const a = 5 / t,
		c = Br(s, r, a)
	if (((t = H(t)), isNaN(c)))
		return { stiffness: V.stiffness, damping: V.damping, duration: t }
	{
		const u = Math.pow(c, 2) * n
		return { stiffness: u, damping: o * 2 * Math.sqrt(n * u), duration: t }
	}
}
const jr = 12
function Br(t, e, i) {
	let n = i
	for (let s = 1; s < jr; s++) n = n - t(n) / e(n)
	return n
}
function De(t, e) {
	return t * Math.sqrt(1 - e * e)
}
const Ir = ["duration", "bounce"],
	Rr = ["stiffness", "damping", "mass"]
function Oi(t, e) {
	return e.some((i) => t[i] !== void 0)
}
function Lr(t) {
	let e = {
		velocity: V.velocity,
		stiffness: V.stiffness,
		damping: V.damping,
		mass: V.mass,
		isResolvedFromDuration: !1,
		...t
	}
	if (!Oi(t, Rr) && Oi(t, Ir))
		if (t.visualDuration) {
			const i = t.visualDuration,
				n = (2 * Math.PI) / (i * 1.2),
				s = n * n,
				r = 2 * J(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s)
			e = { ...e, mass: V.mass, stiffness: s, damping: r }
		} else {
			const i = Dr(t)
			;((e = { ...e, ...i, mass: V.mass }),
				(e.isResolvedFromDuration = !0))
		}
	return e
}
function ne(t = V.visualDuration, e = V.bounce) {
	const i =
		typeof t != "object"
			? { visualDuration: t, keyframes: [0, 1], bounce: e }
			: t
	let { restSpeed: n, restDelta: s } = i
	const r = i.keyframes[0],
		o = i.keyframes[i.keyframes.length - 1],
		a = { done: !1, value: r },
		{
			stiffness: c,
			damping: u,
			mass: l,
			duration: h,
			velocity: f,
			isResolvedFromDuration: A
		} = Lr({ ...i, velocity: -G(i.velocity || 0) }),
		m = f || 0,
		C = u / (2 * Math.sqrt(c * l)),
		K = o - r,
		p = G(Math.sqrt(c / l)),
		y = Math.abs(K) < 5
	;(n || (n = y ? V.restSpeed.granular : V.restSpeed.default),
		s || (s = y ? V.restDelta.granular : V.restDelta.default))
	let g
	if (C < 1) {
		const x = De(p, C)
		g = (S) => {
			const P = Math.exp(-C * p * S)
			return (
				o -
				P *
					(((m + C * p * K) / x) * Math.sin(x * S) +
						K * Math.cos(x * S))
			)
		}
	} else if (C === 1) g = (x) => o - Math.exp(-p * x) * (K + (m + p * K) * x)
	else {
		const x = p * Math.sqrt(C * C - 1)
		g = (S) => {
			const P = Math.exp(-C * p * S),
				E = Math.min(x * S, 300)
			return (
				o -
				(P * ((m + C * p * K) * Math.sinh(E) + x * K * Math.cosh(E))) /
					x
			)
		}
	}
	const w = {
		calculatedDuration: (A && h) || null,
		next: (x) => {
			const S = g(x)
			if (A) a.done = x >= h
			else {
				let P = x === 0 ? m : 0
				C < 1 && (P = x === 0 ? H(m) : xs(g, x, S))
				const E = Math.abs(P) <= n,
					k = Math.abs(o - S) <= s
				a.done = E && k
			}
			return ((a.value = a.done ? o : S), a)
		},
		toString: () => {
			const x = Math.min(hi(w), ie),
				S = vs((P) => w.next(x * P).value, x, 30)
			return x + "ms " + S
		},
		toTransition: () => {}
	}
	return w
}
ne.applyToOptions = (t) => {
	const e = br(t, 100, ne)
	return (
		(t.ease = e.ease),
		(t.duration = H(e.duration)),
		(t.type = "keyframes"),
		t
	)
}
function je({
	keyframes: t,
	velocity: e = 0,
	power: i = 0.8,
	timeConstant: n = 325,
	bounceDamping: s = 10,
	bounceStiffness: r = 500,
	modifyTarget: o,
	min: a,
	max: c,
	restDelta: u = 0.5,
	restSpeed: l
}) {
	const h = t[0],
		f = { done: !1, value: h },
		A = (E) => (a !== void 0 && E < a) || (c !== void 0 && E > c),
		m = (E) =>
			a === void 0
				? c
				: c === void 0 || Math.abs(a - E) < Math.abs(c - E)
					? a
					: c
	let C = i * e
	const K = h + C,
		p = o === void 0 ? K : o(K)
	p !== K && (C = p - h)
	const y = (E) => -C * Math.exp(-E / n),
		g = (E) => p + y(E),
		w = (E) => {
			const k = y(E),
				N = g(E)
			;((f.done = Math.abs(k) <= u), (f.value = f.done ? p : N))
		}
	let x, S
	const P = (E) => {
		A(f.value) &&
			((x = E),
			(S = ne({
				keyframes: [f.value, m(f.value)],
				velocity: xs(g, E, f.value),
				damping: s,
				stiffness: r,
				restDelta: u,
				restSpeed: l
			})))
	}
	return (
		P(0),
		{
			calculatedDuration: null,
			next: (E) => {
				let k = !1
				return (
					!S && x === void 0 && ((k = !0), w(E), P(E)),
					x !== void 0 && E >= x ? S.next(E - x) : (!k && w(E), f)
				)
			}
		}
	)
}
function kr(t, e, i) {
	const n = [],
		s = i || X.mix || Cs,
		r = t.length - 1
	for (let o = 0; o < r; o++) {
		let a = s(t[o], t[o + 1])
		if (e) {
			const c = Array.isArray(e) ? e[o] || Y : e
			a = Gt(c, a)
		}
		n.push(a)
	}
	return n
}
function Fr(t, e, { clamp: i = !0, ease: n, mixer: s } = {}) {
	const r = t.length
	if ((ei(r === e.length), r === 1)) return () => e[0]
	if (r === 2 && e[0] === e[1]) return () => e[1]
	const o = t[0] === t[1]
	t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()))
	const a = kr(e, n, s),
		c = a.length,
		u = (l) => {
			if (o && l < t[0]) return e[0]
			let h = 0
			if (c > 1) for (; h < t.length - 2 && !(l < t[h + 1]); h++);
			const f = kt(t[h], t[h + 1], l)
			return a[h](f)
		}
	return i ? (l) => u(J(t[0], t[r - 1], l)) : u
}
function Nr(t, e) {
	const i = t[t.length - 1]
	for (let n = 1; n <= e; n++) {
		const s = kt(0, e, n)
		t.push(b(i, 1, s))
	}
}
function Or(t) {
	const e = [0]
	return (Nr(e, t.length - 1), e)
}
function Ur(t, e) {
	return t.map((i) => i * e)
}
function Qr(t, e) {
	return t.map(() => e || us).splice(0, t.length - 1)
}
function Dt({
	duration: t = 300,
	keyframes: e,
	times: i,
	ease: n = "easeInOut"
}) {
	const s = $o(n) ? n.map(Ri) : Ri(n),
		r = { done: !1, value: e[0] },
		o = Ur(i && i.length === e.length ? i : Or(e), t),
		a = Fr(o, e, { ease: Array.isArray(s) ? s : Qr(e, s) })
	return {
		calculatedDuration: t,
		next: (c) => ((r.value = a(c)), (r.done = c >= t), r)
	}
}
const Gr = (t) => t !== null
function fi(t, { repeat: e, repeatType: i = "loop" }, n, s = 1) {
	const r = t.filter(Gr),
		a = s < 0 || (e && i !== "loop" && e % 2 === 1) ? 0 : r.length - 1
	return !a || n === void 0 ? r[a] : n
}
const Yr = { decay: je, inertia: je, tween: Dt, keyframes: Dt, spring: ne }
function Ts(t) {
	typeof t.type == "string" && (t.type = Yr[t.type])
}
class di {
	constructor() {
		this.updateFinished()
	}
	get finished() {
		return this._finished
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e
		})
	}
	notifyFinished() {
		this.resolve()
	}
	then(e, i) {
		return this.finished.then(e, i)
	}
}
const Wr = (t) => t / 100
class Ai extends di {
	constructor(e) {
		;(super(),
			(this.state = "idle"),
			(this.startTime = null),
			(this.isStopped = !1),
			(this.currentTime = 0),
			(this.holdTime = null),
			(this.playbackSpeed = 1),
			(this.stop = () => {
				const { motionValue: i } = this.options
				;(i && i.updatedAt !== F.now() && this.tick(F.now()),
					(this.isStopped = !0),
					this.state !== "idle" &&
						(this.teardown(), this.options.onStop?.()))
			}),
			(this.options = e),
			this.initAnimation(),
			this.play(),
			e.autoplay === !1 && this.pause())
	}
	initAnimation() {
		const { options: e } = this
		Ts(e)
		const {
			type: i = Dt,
			repeat: n = 0,
			repeatDelay: s = 0,
			repeatType: r,
			velocity: o = 0
		} = e
		let { keyframes: a } = e
		const c = i || Dt
		c !== Dt &&
			typeof a[0] != "number" &&
			((this.mixKeyframes = Gt(Wr, Cs(a[0], a[1]))), (a = [0, 100]))
		const u = c({ ...e, keyframes: a })
		;(r === "mirror" &&
			(this.mirroredGenerator = c({
				...e,
				keyframes: [...a].reverse(),
				velocity: -o
			})),
			u.calculatedDuration === null && (u.calculatedDuration = hi(u)))
		const { calculatedDuration: l } = u
		;((this.calculatedDuration = l),
			(this.resolvedDuration = l + s),
			(this.totalDuration = this.resolvedDuration * (n + 1) - s),
			(this.generator = u))
	}
	updateTime(e) {
		const i = Math.round(e - this.startTime) * this.playbackSpeed
		this.holdTime !== null
			? (this.currentTime = this.holdTime)
			: (this.currentTime = i)
	}
	tick(e, i = !1) {
		const {
			generator: n,
			totalDuration: s,
			mixKeyframes: r,
			mirroredGenerator: o,
			resolvedDuration: a,
			calculatedDuration: c
		} = this
		if (this.startTime === null) return n.next(0)
		const {
			delay: u = 0,
			keyframes: l,
			repeat: h,
			repeatType: f,
			repeatDelay: A,
			type: m,
			onUpdate: C,
			finalKeyframe: K
		} = this.options
		;(this.speed > 0
			? (this.startTime = Math.min(this.startTime, e))
			: this.speed < 0 &&
				(this.startTime = Math.min(e - s / this.speed, this.startTime)),
			i ? (this.currentTime = e) : this.updateTime(e))
		const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
			y = this.playbackSpeed >= 0 ? p < 0 : p > s
		;((this.currentTime = Math.max(p, 0)),
			this.state === "finished" &&
				this.holdTime === null &&
				(this.currentTime = s))
		let g = this.currentTime,
			w = n
		if (h) {
			const E = Math.min(this.currentTime, s) / a
			let k = Math.floor(E),
				N = E % 1
			;(!N && E >= 1 && (N = 1),
				N === 1 && k--,
				(k = Math.min(k, h + 1)),
				!!(k % 2) &&
					(f === "reverse"
						? ((N = 1 - N), A && (N -= A / a))
						: f === "mirror" && (w = o)),
				(g = J(0, 1, N) * a))
		}
		const x = y ? { done: !1, value: l[0] } : w.next(g)
		r && (x.value = r(x.value))
		let { done: S } = x
		!y &&
			c !== null &&
			(S =
				this.playbackSpeed >= 0
					? this.currentTime >= s
					: this.currentTime <= 0)
		const P =
			this.holdTime === null &&
			(this.state === "finished" || (this.state === "running" && S))
		return (
			P && m !== je && (x.value = fi(l, this.options, K, this.speed)),
			C && C(x.value),
			P && this.finish(),
			x
		)
	}
	then(e, i) {
		return this.finished.then(e, i)
	}
	get duration() {
		return G(this.calculatedDuration)
	}
	get iterationDuration() {
		const { delay: e = 0 } = this.options || {}
		return this.duration + G(e)
	}
	get time() {
		return G(this.currentTime)
	}
	set time(e) {
		;((e = H(e)),
			(this.currentTime = e),
			this.startTime === null ||
			this.holdTime !== null ||
			this.playbackSpeed === 0
				? (this.holdTime = e)
				: this.driver &&
					(this.startTime =
						this.driver.now() - e / this.playbackSpeed),
			this.driver?.start(!1))
	}
	get speed() {
		return this.playbackSpeed
	}
	set speed(e) {
		this.updateTime(F.now())
		const i = this.playbackSpeed !== e
		;((this.playbackSpeed = e), i && (this.time = G(this.currentTime)))
	}
	play() {
		if (this.isStopped) return
		const { driver: e = Mr, startTime: i } = this.options
		;(this.driver || (this.driver = e((s) => this.tick(s))),
			this.options.onPlay?.())
		const n = this.driver.now()
		;(this.state === "finished"
			? (this.updateFinished(), (this.startTime = n))
			: this.holdTime !== null
				? (this.startTime = n - this.holdTime)
				: this.startTime || (this.startTime = i ?? n),
			this.state === "finished" &&
				this.speed < 0 &&
				(this.startTime += this.calculatedDuration),
			(this.holdTime = null),
			(this.state = "running"),
			this.driver.start())
	}
	pause() {
		;((this.state = "paused"),
			this.updateTime(F.now()),
			(this.holdTime = this.currentTime))
	}
	complete() {
		;(this.state !== "running" && this.play(),
			(this.state = "finished"),
			(this.holdTime = null))
	}
	finish() {
		;(this.notifyFinished(),
			this.teardown(),
			(this.state = "finished"),
			this.options.onComplete?.())
	}
	cancel() {
		;((this.holdTime = null),
			(this.startTime = 0),
			this.tick(0),
			this.teardown(),
			this.options.onCancel?.())
	}
	teardown() {
		;((this.state = "idle"),
			this.stopDriver(),
			(this.startTime = this.holdTime = null))
	}
	stopDriver() {
		this.driver && (this.driver.stop(), (this.driver = void 0))
	}
	sample(e) {
		return ((this.startTime = 0), this.tick(e, !0))
	}
	attachTimeline(e) {
		return (
			this.options.allowFlatten &&
				((this.options.type = "keyframes"),
				(this.options.ease = "linear"),
				this.initAnimation()),
			this.driver?.stop(),
			e.observe(this)
		)
	}
}
function Hr(t) {
	for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1])
}
const rt = (t) => (t * 180) / Math.PI,
	Be = (t) => {
		const e = rt(Math.atan2(t[1], t[0]))
		return Ie(e)
	},
	zr = {
		x: 4,
		y: 5,
		translateX: 4,
		translateY: 5,
		scaleX: 0,
		scaleY: 3,
		scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
		rotate: Be,
		rotateZ: Be,
		skewX: (t) => rt(Math.atan(t[1])),
		skewY: (t) => rt(Math.atan(t[2])),
		skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
	},
	Ie = (t) => ((t = t % 360), t < 0 && (t += 360), t),
	Ui = Be,
	Qi = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
	Gi = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
	Jr = {
		x: 12,
		y: 13,
		z: 14,
		translateX: 12,
		translateY: 13,
		translateZ: 14,
		scaleX: Qi,
		scaleY: Gi,
		scale: (t) => (Qi(t) + Gi(t)) / 2,
		rotateX: (t) => Ie(rt(Math.atan2(t[6], t[5]))),
		rotateY: (t) => Ie(rt(Math.atan2(-t[2], t[0]))),
		rotateZ: Ui,
		rotate: Ui,
		skewX: (t) => rt(Math.atan(t[4])),
		skewY: (t) => rt(Math.atan(t[1])),
		skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
	}
function Re(t) {
	return t.includes("scale") ? 1 : 0
}
function Le(t, e) {
	if (!t || t === "none") return Re(e)
	const i = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u)
	let n, s
	if (i) ((n = Jr), (s = i))
	else {
		const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u)
		;((n = zr), (s = a))
	}
	if (!s) return Re(e)
	const r = n[e],
		o = s[1].split(",").map(_r)
	return typeof r == "function" ? r(o) : o[r]
}
const Xr = (t, e) => {
	const { transform: i = "none" } = getComputedStyle(t)
	return Le(i, e)
}
function _r(t) {
	return parseFloat(t.trim())
}
const wt = [
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
		"skewY"
	],
	St = new Set(wt),
	Yi = (t) => t === Tt || t === T,
	qr = new Set(["x", "y", "z"]),
	Zr = wt.filter((t) => !qr.has(t))
function $r(t) {
	const e = []
	return (
		Zr.forEach((i) => {
			const n = t.getValue(i)
			n !== void 0 &&
				(e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
		}),
		e
	)
}
const ct = {
	width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
		t.max - t.min - parseFloat(e) - parseFloat(i),
	height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
		t.max - t.min - parseFloat(e) - parseFloat(i),
	top: (t, { top: e }) => parseFloat(e),
	left: (t, { left: e }) => parseFloat(e),
	bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
	right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
	x: (t, { transform: e }) => Le(e, "x"),
	y: (t, { transform: e }) => Le(e, "y")
}
ct.translateX = ct.x
ct.translateY = ct.y
const lt = new Set()
let ke = !1,
	Fe = !1,
	Ne = !1
function ws() {
	if (Fe) {
		const t = Array.from(lt).filter((n) => n.needsMeasurement),
			e = new Set(t.map((n) => n.element)),
			i = new Map()
		;(e.forEach((n) => {
			const s = $r(n)
			s.length && (i.set(n, s), n.render())
		}),
			t.forEach((n) => n.measureInitialState()),
			e.forEach((n) => {
				n.render()
				const s = i.get(n)
				s &&
					s.forEach(([r, o]) => {
						n.getValue(r)?.set(o)
					})
			}),
			t.forEach((n) => n.measureEndState()),
			t.forEach((n) => {
				n.suspendedScrollY !== void 0 &&
					window.scrollTo(0, n.suspendedScrollY)
			}))
	}
	;((Fe = !1), (ke = !1), lt.forEach((t) => t.complete(Ne)), lt.clear())
}
function Ss() {
	lt.forEach((t) => {
		;(t.readKeyframes(), t.needsMeasurement && (Fe = !0))
	})
}
function ta() {
	;((Ne = !0), Ss(), ws(), (Ne = !1))
}
class mi {
	constructor(e, i, n, s, r, o = !1) {
		;((this.state = "pending"),
			(this.isAsync = !1),
			(this.needsMeasurement = !1),
			(this.unresolvedKeyframes = [...e]),
			(this.onComplete = i),
			(this.name = n),
			(this.motionValue = s),
			(this.element = r),
			(this.isAsync = o))
	}
	scheduleResolve() {
		;((this.state = "scheduled"),
			this.isAsync
				? (lt.add(this),
					ke || ((ke = !0), M.read(Ss), M.resolveKeyframes(ws)))
				: (this.readKeyframes(), this.complete()))
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: e,
			name: i,
			element: n,
			motionValue: s
		} = this
		if (e[0] === null) {
			const r = s?.get(),
				o = e[e.length - 1]
			if (r !== void 0) e[0] = r
			else if (n && i) {
				const a = n.readValue(i, o)
				a != null && (e[0] = a)
			}
			;(e[0] === void 0 && (e[0] = o), s && r === void 0 && s.set(e[0]))
		}
		Hr(e)
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		;((this.state = "complete"),
			this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
			lt.delete(this))
	}
	cancel() {
		this.state === "scheduled" &&
			(lt.delete(this), (this.state = "pending"))
	}
	resume() {
		this.state === "pending" && this.scheduleResolve()
	}
}
const ea = (t) => t.startsWith("--")
function ia(t, e, i) {
	ea(e) ? t.style.setProperty(e, i) : (t.style[e] = i)
}
const na = ii(() => window.ScrollTimeline !== void 0),
	sa = {}
function oa(t, e) {
	const i = ii(t)
	return () => sa[e] ?? i()
}
const Es = oa(() => {
		try {
			document
				.createElement("div")
				.animate({ opacity: 0 }, { easing: "linear(0, 1)" })
		} catch {
			return !1
		}
		return !0
	}, "linearEasing"),
	bt = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
	Wi = {
		linear: "linear",
		ease: "ease",
		easeIn: "ease-in",
		easeOut: "ease-out",
		easeInOut: "ease-in-out",
		circIn: bt([0, 0.65, 0.55, 1]),
		circOut: bt([0.55, 0, 1, 0.45]),
		backIn: bt([0.31, 0.01, 0.66, -0.59]),
		backOut: bt([0.33, 1.53, 0.69, 0.99])
	}
function Ps(t, e) {
	if (t)
		return typeof t == "function"
			? Es()
				? vs(t, e)
				: "ease-out"
			: hs(t)
				? bt(t)
				: Array.isArray(t)
					? t.map((i) => Ps(i, e) || Wi.easeOut)
					: Wi[t]
}
function ra(
	t,
	e,
	i,
	{
		delay: n = 0,
		duration: s = 300,
		repeat: r = 0,
		repeatType: o = "loop",
		ease: a = "easeOut",
		times: c
	} = {},
	u = void 0
) {
	const l = { [e]: i }
	c && (l.offset = c)
	const h = Ps(a, s)
	Array.isArray(h) && (l.easing = h)
	const f = {
		delay: n,
		duration: s,
		easing: Array.isArray(h) ? "linear" : h,
		fill: "both",
		iterations: r + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	}
	return (u && (f.pseudoElement = u), t.animate(l, f))
}
function Ms(t) {
	return typeof t == "function" && "applyToOptions" in t
}
function aa({ type: t, ...e }) {
	return Ms(t) && Es()
		? t.applyToOptions(e)
		: (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e)
}
class ca extends di {
	constructor(e) {
		if ((super(), (this.finishedTime = null), (this.isStopped = !1), !e))
			return
		const {
			element: i,
			name: n,
			keyframes: s,
			pseudoElement: r,
			allowFlatten: o = !1,
			finalKeyframe: a,
			onComplete: c
		} = e
		;((this.isPseudoElement = !!r),
			(this.allowFlatten = o),
			(this.options = e),
			ei(typeof e.type != "string"))
		const u = aa(e)
		;((this.animation = ra(i, n, s, u, r)),
			u.autoplay === !1 && this.animation.pause(),
			(this.animation.onfinish = () => {
				if (((this.finishedTime = this.time), !r)) {
					const l = fi(s, this.options, a, this.speed)
					;(this.updateMotionValue
						? this.updateMotionValue(l)
						: ia(i, n, l),
						this.animation.cancel())
				}
				;(c?.(), this.notifyFinished())
			}))
	}
	play() {
		this.isStopped ||
			(this.animation.play(),
			this.state === "finished" && this.updateFinished())
	}
	pause() {
		this.animation.pause()
	}
	complete() {
		this.animation.finish?.()
	}
	cancel() {
		try {
			this.animation.cancel()
		} catch {}
	}
	stop() {
		if (this.isStopped) return
		this.isStopped = !0
		const { state: e } = this
		e === "idle" ||
			e === "finished" ||
			(this.updateMotionValue
				? this.updateMotionValue()
				: this.commitStyles(),
			this.isPseudoElement || this.cancel())
	}
	commitStyles() {
		this.isPseudoElement || this.animation.commitStyles?.()
	}
	get duration() {
		const e = this.animation.effect?.getComputedTiming?.().duration || 0
		return G(Number(e))
	}
	get iterationDuration() {
		const { delay: e = 0 } = this.options || {}
		return this.duration + G(e)
	}
	get time() {
		return G(Number(this.animation.currentTime) || 0)
	}
	set time(e) {
		;((this.finishedTime = null), (this.animation.currentTime = H(e)))
	}
	get speed() {
		return this.animation.playbackRate
	}
	set speed(e) {
		;(e < 0 && (this.finishedTime = null),
			(this.animation.playbackRate = e))
	}
	get state() {
		return this.finishedTime !== null
			? "finished"
			: this.animation.playState
	}
	get startTime() {
		return Number(this.animation.startTime)
	}
	set startTime(e) {
		this.animation.startTime = e
	}
	attachTimeline({ timeline: e, observe: i }) {
		return (
			this.allowFlatten &&
				this.animation.effect?.updateTiming({ easing: "linear" }),
			(this.animation.onfinish = null),
			e && na() ? ((this.animation.timeline = e), Y) : i(this)
		)
	}
}
const bs = { anticipate: as, backInOut: rs, circInOut: ls }
function la(t) {
	return t in bs
}
function ua(t) {
	typeof t.ease == "string" && la(t.ease) && (t.ease = bs[t.ease])
}
const Hi = 10
class ha extends ca {
	constructor(e) {
		;(ua(e),
			Ts(e),
			super(e),
			e.startTime && (this.startTime = e.startTime),
			(this.options = e))
	}
	updateMotionValue(e) {
		const {
			motionValue: i,
			onUpdate: n,
			onComplete: s,
			element: r,
			...o
		} = this.options
		if (!i) return
		if (e !== void 0) {
			i.set(e)
			return
		}
		const a = new Ai({ ...o, autoplay: !1 }),
			c = H(this.finishedTime ?? this.time)
		;(i.setWithVelocity(a.sample(c - Hi).value, a.sample(c).value, Hi),
			a.stop())
	}
}
const zi = (t, e) =>
	e === "zIndex"
		? !1
		: !!(
				typeof t == "number" ||
				Array.isArray(t) ||
				(typeof t == "string" &&
					(Z.test(t) || t === "0") &&
					!t.startsWith("url("))
			)
function fa(t) {
	const e = t[0]
	if (t.length === 1) return !0
	for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0
}
function da(t, e, i, n) {
	const s = t[0]
	if (s === null) return !1
	if (e === "display" || e === "visibility") return !0
	const r = t[t.length - 1],
		o = zi(s, e),
		a = zi(r, e)
	return !o || !a ? !1 : fa(t) || ((i === "spring" || Ms(i)) && n)
}
function Oe(t) {
	;((t.duration = 0), (t.type = "keyframes"))
}
const Aa = new Set(["opacity", "clipPath", "filter", "transform"]),
	ma = ii(() => Object.hasOwnProperty.call(Element.prototype, "animate"))
function pa(t) {
	const {
		motionValue: e,
		name: i,
		repeatDelay: n,
		repeatType: s,
		damping: r,
		type: o
	} = t
	if (!(e?.owner?.current instanceof HTMLElement)) return !1
	const { onUpdate: c, transformTemplate: u } = e.owner.getProps()
	return (
		ma() &&
		i &&
		Aa.has(i) &&
		(i !== "transform" || !u) &&
		!c &&
		!n &&
		s !== "mirror" &&
		r !== 0 &&
		o !== "inertia"
	)
}
const ga = 40
class Ka extends di {
	constructor({
		autoplay: e = !0,
		delay: i = 0,
		type: n = "keyframes",
		repeat: s = 0,
		repeatDelay: r = 0,
		repeatType: o = "loop",
		keyframes: a,
		name: c,
		motionValue: u,
		element: l,
		...h
	}) {
		;(super(),
			(this.stop = () => {
				;(this._animation &&
					(this._animation.stop(), this.stopTimeline?.()),
					this.keyframeResolver?.cancel())
			}),
			(this.createdAt = F.now()))
		const f = {
				autoplay: e,
				delay: i,
				type: n,
				repeat: s,
				repeatDelay: r,
				repeatType: o,
				name: c,
				motionValue: u,
				element: l,
				...h
			},
			A = l?.KeyframeResolver || mi
		;((this.keyframeResolver = new A(
			a,
			(m, C, K) => this.onKeyframesResolved(m, C, f, !K),
			c,
			u,
			l
		)),
			this.keyframeResolver?.scheduleResolve())
	}
	onKeyframesResolved(e, i, n, s) {
		this.keyframeResolver = void 0
		const {
			name: r,
			type: o,
			velocity: a,
			delay: c,
			isHandoff: u,
			onUpdate: l
		} = n
		;((this.resolvedAt = F.now()),
			da(e, r, o, a) ||
				((X.instantAnimations || !c) && l?.(fi(e, n, i)),
				(e[0] = e[e.length - 1]),
				Oe(n),
				(n.repeat = 0)))
		const f = {
				startTime: s
					? this.resolvedAt
						? this.resolvedAt - this.createdAt > ga
							? this.resolvedAt
							: this.createdAt
						: this.createdAt
					: void 0,
				finalKeyframe: i,
				...n,
				keyframes: e
			},
			A =
				!u && pa(f)
					? new ha({ ...f, element: f.motionValue.owner.current })
					: new Ai(f)
		;(A.finished.then(() => this.notifyFinished()).catch(Y),
			this.pendingTimeline &&
				((this.stopTimeline = A.attachTimeline(this.pendingTimeline)),
				(this.pendingTimeline = void 0)),
			(this._animation = A))
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished
	}
	then(e, i) {
		return this.finished.finally(e).then(() => {})
	}
	get animation() {
		return (
			this._animation || (this.keyframeResolver?.resume(), ta()),
			this._animation
		)
	}
	get duration() {
		return this.animation.duration
	}
	get iterationDuration() {
		return this.animation.iterationDuration
	}
	get time() {
		return this.animation.time
	}
	set time(e) {
		this.animation.time = e
	}
	get speed() {
		return this.animation.speed
	}
	get state() {
		return this.animation.state
	}
	set speed(e) {
		this.animation.speed = e
	}
	get startTime() {
		return this.animation.startTime
	}
	attachTimeline(e) {
		return (
			this._animation
				? (this.stopTimeline = this.animation.attachTimeline(e))
				: (this.pendingTimeline = e),
			() => this.stop()
		)
	}
	play() {
		this.animation.play()
	}
	pause() {
		this.animation.pause()
	}
	complete() {
		this.animation.complete()
	}
	cancel() {
		;(this._animation && this.animation.cancel(),
			this.keyframeResolver?.cancel())
	}
}
const ya = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
function Ca(t) {
	const e = ya.exec(t)
	if (!e) return [,]
	const [, i, n, s] = e
	return [`--${i ?? n}`, s]
}
function Vs(t, e, i = 1) {
	const [n, s] = Ca(t)
	if (!n) return
	const r = window.getComputedStyle(e).getPropertyValue(n)
	if (r) {
		const o = r.trim()
		return Zn(o) ? parseFloat(o) : o
	}
	return ai(s) ? Vs(s, e, i + 1) : s
}
function pi(t, e) {
	return t?.[e] ?? t?.default ?? t
}
const Ds = new Set([
		"width",
		"height",
		"top",
		"left",
		"right",
		"bottom",
		...wt
	]),
	va = { test: (t) => t === "auto", parse: (t) => t },
	js = (t) => (e) => e.test(t),
	Bs = [Tt, T, z, _, fr, hr, va],
	Ji = (t) => Bs.find(js(t))
function xa(t) {
	return typeof t == "number"
		? t === 0
		: t !== null
			? t === "none" || t === "0" || ts(t)
			: !0
}
const Ta = new Set(["brightness", "contrast", "saturate", "opacity"])
function wa(t) {
	const [e, i] = t.slice(0, -1).split("(")
	if (e === "drop-shadow") return t
	const [n] = i.match(ci) || []
	if (!n) return t
	const s = i.replace(n, "")
	let r = Ta.has(e) ? 1 : 0
	return (n !== i && (r *= 100), e + "(" + r + s + ")")
}
const Sa = /\b([a-z-]*)\(.*?\)/gu,
	Ue = {
		...Z,
		getAnimatableNone: (t) => {
			const e = t.match(Sa)
			return e ? e.map(wa).join(" ") : t
		}
	},
	Xi = { ...Tt, transform: Math.round },
	Ea = {
		rotate: _,
		rotateX: _,
		rotateY: _,
		rotateZ: _,
		scale: Xt,
		scaleX: Xt,
		scaleY: Xt,
		scaleZ: Xt,
		skew: _,
		skewX: _,
		skewY: _,
		distance: T,
		translateX: T,
		translateY: T,
		translateZ: T,
		x: T,
		y: T,
		z: T,
		perspective: T,
		transformPerspective: T,
		opacity: Ft,
		originX: Li,
		originY: Li,
		originZ: T
	},
	gi = {
		borderWidth: T,
		borderTopWidth: T,
		borderRightWidth: T,
		borderBottomWidth: T,
		borderLeftWidth: T,
		borderRadius: T,
		radius: T,
		borderTopLeftRadius: T,
		borderTopRightRadius: T,
		borderBottomRightRadius: T,
		borderBottomLeftRadius: T,
		width: T,
		maxWidth: T,
		height: T,
		maxHeight: T,
		top: T,
		right: T,
		bottom: T,
		left: T,
		padding: T,
		paddingTop: T,
		paddingRight: T,
		paddingBottom: T,
		paddingLeft: T,
		margin: T,
		marginTop: T,
		marginRight: T,
		marginBottom: T,
		marginLeft: T,
		backgroundPositionX: T,
		backgroundPositionY: T,
		...Ea,
		zIndex: Xi,
		fillOpacity: Ft,
		strokeOpacity: Ft,
		numOctaves: Xi
	},
	Pa = {
		...gi,
		color: j,
		backgroundColor: j,
		outlineColor: j,
		fill: j,
		stroke: j,
		borderColor: j,
		borderTopColor: j,
		borderRightColor: j,
		borderBottomColor: j,
		borderLeftColor: j,
		filter: Ue,
		WebkitFilter: Ue
	},
	Is = (t) => Pa[t]
function Rs(t, e) {
	let i = Is(t)
	return (
		i !== Ue && (i = Z),
		i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
	)
}
const Ma = new Set(["auto", "none", "0"])
function ba(t, e, i) {
	let n = 0,
		s
	for (; n < t.length && !s; ) {
		const r = t[n]
		;(typeof r == "string" &&
			!Ma.has(r) &&
			Nt(r).values.length &&
			(s = t[n]),
			n++)
	}
	if (s && i) for (const r of e) t[r] = Rs(i, s)
}
class Va extends mi {
	constructor(e, i, n, s, r) {
		super(e, i, n, s, r, !0)
	}
	readKeyframes() {
		const { unresolvedKeyframes: e, element: i, name: n } = this
		if (!i || !i.current) return
		super.readKeyframes()
		for (let c = 0; c < e.length; c++) {
			let u = e[c]
			if (typeof u == "string" && ((u = u.trim()), ai(u))) {
				const l = Vs(u, i.current)
				;(l !== void 0 && (e[c] = l),
					c === e.length - 1 && (this.finalKeyframe = u))
			}
		}
		if ((this.resolveNoneKeyframes(), !Ds.has(n) || e.length !== 2)) return
		const [s, r] = e,
			o = Ji(s),
			a = Ji(r)
		if (o !== a)
			if (Yi(o) && Yi(a))
				for (let c = 0; c < e.length; c++) {
					const u = e[c]
					typeof u == "string" && (e[c] = parseFloat(u))
				}
			else ct[n] && (this.needsMeasurement = !0)
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes: e, name: i } = this,
			n = []
		for (let s = 0; s < e.length; s++)
			(e[s] === null || xa(e[s])) && n.push(s)
		n.length && ba(e, n, i)
	}
	measureInitialState() {
		const { element: e, unresolvedKeyframes: i, name: n } = this
		if (!e || !e.current) return
		;(n === "height" && (this.suspendedScrollY = window.pageYOffset),
			(this.measuredOrigin = ct[n](
				e.measureViewportBox(),
				window.getComputedStyle(e.current)
			)),
			(i[0] = this.measuredOrigin))
		const s = i[i.length - 1]
		s !== void 0 && e.getValue(n, s).jump(s, !1)
	}
	measureEndState() {
		const { element: e, name: i, unresolvedKeyframes: n } = this
		if (!e || !e.current) return
		const s = e.getValue(i)
		s && s.jump(this.measuredOrigin, !1)
		const r = n.length - 1,
			o = n[r]
		;((n[r] = ct[i](
			e.measureViewportBox(),
			window.getComputedStyle(e.current)
		)),
			o !== null &&
				this.finalKeyframe === void 0 &&
				(this.finalKeyframe = o),
			this.removedTransforms?.length &&
				this.removedTransforms.forEach(([a, c]) => {
					e.getValue(a).set(c)
				}),
			this.resolveNoneKeyframes())
	}
}
function Ls(t, e, i) {
	if (t instanceof EventTarget) return [t]
	if (typeof t == "string") {
		const s = document.querySelectorAll(t)
		return s ? Array.from(s) : []
	}
	return Array.from(t)
}
const ks = (t, e) => (e && typeof t == "number" ? e.transform(t) : t)
function Da(t) {
	return $n(t) && "offsetHeight" in t
}
const _i = 30,
	ja = (t) => !isNaN(parseFloat(t))
class Ba {
	constructor(e, i = {}) {
		;((this.canTrackVelocity = null),
			(this.events = {}),
			(this.updateAndNotify = (n) => {
				const s = F.now()
				if (
					(this.updatedAt !== s && this.setPrevFrameValue(),
					(this.prev = this.current),
					this.setCurrent(n),
					this.current !== this.prev &&
						(this.events.change?.notify(this.current),
						this.dependents))
				)
					for (const r of this.dependents) r.dirty()
			}),
			(this.hasAnimated = !1),
			this.setCurrent(e),
			(this.owner = i.owner))
	}
	setCurrent(e) {
		;((this.current = e),
			(this.updatedAt = F.now()),
			this.canTrackVelocity === null &&
				e !== void 0 &&
				(this.canTrackVelocity = ja(this.current)))
	}
	setPrevFrameValue(e = this.current) {
		;((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt))
	}
	onChange(e) {
		return this.on("change", e)
	}
	on(e, i) {
		this.events[e] || (this.events[e] = new ni())
		const n = this.events[e].add(i)
		return e === "change"
			? () => {
					;(n(),
						M.read(() => {
							this.events.change.getSize() || this.stop()
						}))
				}
			: n
	}
	clearListeners() {
		for (const e in this.events) this.events[e].clear()
	}
	attach(e, i) {
		;((this.passiveEffect = e), (this.stopPassiveEffect = i))
	}
	set(e) {
		this.passiveEffect
			? this.passiveEffect(e, this.updateAndNotify)
			: this.updateAndNotify(e)
	}
	setWithVelocity(e, i, n) {
		;(this.set(i),
			(this.prev = void 0),
			(this.prevFrameValue = e),
			(this.prevUpdatedAt = this.updatedAt - n))
	}
	jump(e, i = !0) {
		;(this.updateAndNotify(e),
			(this.prev = e),
			(this.prevUpdatedAt = this.prevFrameValue = void 0),
			i && this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect())
	}
	dirty() {
		this.events.change?.notify(this.current)
	}
	addDependent(e) {
		;(this.dependents || (this.dependents = new Set()),
			this.dependents.add(e))
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e)
	}
	get() {
		return this.current
	}
	getPrevious() {
		return this.prev
	}
	getVelocity() {
		const e = F.now()
		if (
			!this.canTrackVelocity ||
			this.prevFrameValue === void 0 ||
			e - this.updatedAt > _i
		)
			return 0
		const i = Math.min(this.updatedAt - this.prevUpdatedAt, _i)
		return es(parseFloat(this.current) - parseFloat(this.prevFrameValue), i)
	}
	start(e) {
		return (
			this.stop(),
			new Promise((i) => {
				;((this.hasAnimated = !0),
					(this.animation = e(i)),
					this.events.animationStart &&
						this.events.animationStart.notify())
			}).then(() => {
				;(this.events.animationComplete &&
					this.events.animationComplete.notify(),
					this.clearAnimation())
			})
		)
	}
	stop() {
		;(this.animation &&
			(this.animation.stop(),
			this.events.animationCancel &&
				this.events.animationCancel.notify()),
			this.clearAnimation())
	}
	isAnimating() {
		return !!this.animation
	}
	clearAnimation() {
		delete this.animation
	}
	destroy() {
		;(this.dependents?.clear(),
			this.events.destroy?.notify(),
			this.clearListeners(),
			this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect())
	}
}
function Ct(t, e) {
	return new Ba(t, e)
}
const { schedule: Ki } = fs(queueMicrotask, !1),
	W = { x: !1, y: !1 }
function Fs() {
	return W.x || W.y
}
function Ia(t) {
	return t === "x" || t === "y"
		? W[t]
			? null
			: ((W[t] = !0),
				() => {
					W[t] = !1
				})
		: W.x || W.y
			? null
			: ((W.x = W.y = !0),
				() => {
					W.x = W.y = !1
				})
}
function Ns(t, e) {
	const i = Ls(t),
		n = new AbortController(),
		s = { passive: !0, ...e, signal: n.signal }
	return [i, s, () => n.abort()]
}
function qi(t) {
	return !(t.pointerType === "touch" || Fs())
}
function Ra(t, e, i = {}) {
	const [n, s, r] = Ns(t, i),
		o = (a) => {
			if (!qi(a)) return
			const { target: c } = a,
				u = e(c, a)
			if (typeof u != "function" || !c) return
			const l = (h) => {
				qi(h) && (u(h), c.removeEventListener("pointerleave", l))
			}
			c.addEventListener("pointerleave", l, s)
		}
	return (
		n.forEach((a) => {
			a.addEventListener("pointerenter", o, s)
		}),
		r
	)
}
const Os = (t, e) => (e ? (t === e ? !0 : Os(t, e.parentElement)) : !1),
	yi = (t) =>
		t.pointerType === "mouse"
			? typeof t.button != "number" || t.button <= 0
			: t.isPrimary !== !1,
	La = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
function ka(t) {
	return La.has(t.tagName) || t.tabIndex !== -1
}
const Zt = new WeakSet()
function Zi(t) {
	return (e) => {
		e.key === "Enter" && t(e)
	}
}
function Ae(t, e) {
	t.dispatchEvent(
		new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
	)
}
const Fa = (t, e) => {
	const i = t.currentTarget
	if (!i) return
	const n = Zi(() => {
		if (Zt.has(i)) return
		Ae(i, "down")
		const s = Zi(() => {
				Ae(i, "up")
			}),
			r = () => Ae(i, "cancel")
		;(i.addEventListener("keyup", s, e), i.addEventListener("blur", r, e))
	})
	;(i.addEventListener("keydown", n, e),
		i.addEventListener(
			"blur",
			() => i.removeEventListener("keydown", n),
			e
		))
}
function $i(t) {
	return yi(t) && !Fs()
}
function Na(t, e, i = {}) {
	const [n, s, r] = Ns(t, i),
		o = (a) => {
			const c = a.currentTarget
			if (!$i(a)) return
			Zt.add(c)
			const u = e(c, a),
				l = (A, m) => {
					;(window.removeEventListener("pointerup", h),
						window.removeEventListener("pointercancel", f),
						Zt.has(c) && Zt.delete(c),
						$i(A) && typeof u == "function" && u(A, { success: m }))
				},
				h = (A) => {
					l(
						A,
						c === window ||
							c === document ||
							i.useGlobalTarget ||
							Os(c, A.target)
					)
				},
				f = (A) => {
					l(A, !1)
				}
			;(window.addEventListener("pointerup", h, s),
				window.addEventListener("pointercancel", f, s))
		}
	return (
		n.forEach((a) => {
			;((i.useGlobalTarget ? window : a).addEventListener(
				"pointerdown",
				o,
				s
			),
				Da(a) &&
					(a.addEventListener("focus", (u) => Fa(u, s)),
					!ka(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)))
		}),
		r
	)
}
function Us(t) {
	return $n(t) && "ownerSVGElement" in t
}
function Oa(t) {
	return Us(t) && t.tagName === "svg"
}
const R = (t) => !!(t && t.getVelocity),
	Ua = [...Bs, j, Z],
	Qa = (t) => Ua.find(js(t)),
	Qs = v.createContext({
		transformPagePoint: (t) => t,
		isStatic: !1,
		reducedMotion: "never"
	})
function Ga(t = !0) {
	const e = v.useContext(Ze)
	if (e === null) return [!0, null]
	const { isPresent: i, onExitComplete: n, register: s } = e,
		r = v.useId()
	v.useEffect(() => {
		if (t) return s(r)
	}, [t])
	const o = v.useCallback(() => t && n && n(r), [r, n, t])
	return !i && n ? [!1, o] : [!0]
}
const Gs = v.createContext({ strict: !1 }),
	tn = {
		animation: [
			"animate",
			"variants",
			"whileHover",
			"whileTap",
			"exit",
			"whileInView",
			"whileFocus",
			"whileDrag"
		],
		exit: ["exit"],
		drag: ["drag", "dragControls"],
		focus: ["whileFocus"],
		hover: ["whileHover", "onHoverStart", "onHoverEnd"],
		tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
		pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
		inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
		layout: ["layout", "layoutId"]
	},
	vt = {}
for (const t in tn) vt[t] = { isEnabled: (e) => tn[t].some((i) => !!e[i]) }
function Ya(t) {
	for (const e in t) vt[e] = { ...vt[e], ...t[e] }
}
const Wa = new Set([
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
	"viewport"
])
function se(t) {
	return (
		t.startsWith("while") ||
		(t.startsWith("drag") && t !== "draggable") ||
		t.startsWith("layout") ||
		t.startsWith("onTap") ||
		t.startsWith("onPan") ||
		t.startsWith("onLayout") ||
		Wa.has(t)
	)
}
let Ys = (t) => !se(t)
function Ha(t) {
	typeof t == "function" && (Ys = (e) => (e.startsWith("on") ? !se(e) : t(e)))
}
try {
	Ha(require("@emotion/is-prop-valid").default)
} catch {}
function za(t, e, i) {
	const n = {}
	for (const s in t)
		(s === "values" && typeof t.values == "object") ||
			((Ys(s) ||
				(i === !0 && se(s)) ||
				(!e && !se(s)) ||
				(t.draggable && s.startsWith("onDrag"))) &&
				(n[s] = t[s]))
	return n
}
const re = v.createContext({})
function ae(t) {
	return t !== null && typeof t == "object" && typeof t.start == "function"
}
function Ot(t) {
	return typeof t == "string" || Array.isArray(t)
}
const Ci = [
		"animate",
		"whileInView",
		"whileFocus",
		"whileHover",
		"whileTap",
		"whileDrag",
		"exit"
	],
	vi = ["initial", ...Ci]
function ce(t) {
	return ae(t.animate) || vi.some((e) => Ot(t[e]))
}
function Ws(t) {
	return !!(ce(t) || t.variants)
}
function Ja(t, e) {
	if (ce(t)) {
		const { initial: i, animate: n } = t
		return {
			initial: i === !1 || Ot(i) ? i : void 0,
			animate: Ot(n) ? n : void 0
		}
	}
	return t.inherit !== !1 ? e : {}
}
function Xa(t) {
	const { initial: e, animate: i } = Ja(t, v.useContext(re))
	return v.useMemo(() => ({ initial: e, animate: i }), [en(e), en(i)])
}
function en(t) {
	return Array.isArray(t) ? t.join(" ") : t
}
const Ut = {}
function _a(t) {
	for (const e in t) ((Ut[e] = t[e]), ri(e) && (Ut[e].isCSSVariable = !0))
}
function Hs(t, { layout: e, layoutId: i }) {
	return (
		St.has(t) ||
		t.startsWith("origin") ||
		((e || i !== void 0) && (!!Ut[t] || t === "opacity"))
	)
}
const qa = {
		x: "translateX",
		y: "translateY",
		z: "translateZ",
		transformPerspective: "perspective"
	},
	Za = wt.length
function $a(t, e, i) {
	let n = "",
		s = !0
	for (let r = 0; r < Za; r++) {
		const o = wt[r],
			a = t[o]
		if (a === void 0) continue
		let c = !0
		if (
			(typeof a == "number"
				? (c = a === (o.startsWith("scale") ? 1 : 0))
				: (c = parseFloat(a) === 0),
			!c || i)
		) {
			const u = ks(a, gi[o])
			if (!c) {
				s = !1
				const l = qa[o] || o
				n += `${l}(${u}) `
			}
			i && (e[o] = u)
		}
	}
	return ((n = n.trim()), i ? (n = i(e, s ? "" : n)) : s && (n = "none"), n)
}
function xi(t, e, i) {
	const { style: n, vars: s, transformOrigin: r } = t
	let o = !1,
		a = !1
	for (const c in e) {
		const u = e[c]
		if (St.has(c)) {
			o = !0
			continue
		} else if (ri(c)) {
			s[c] = u
			continue
		} else {
			const l = ks(u, gi[c])
			c.startsWith("origin") ? ((a = !0), (r[c] = l)) : (n[c] = l)
		}
	}
	if (
		(e.transform ||
			(o || i
				? (n.transform = $a(e, t.transform, i))
				: n.transform && (n.transform = "none")),
		a)
	) {
		const { originX: c = "50%", originY: u = "50%", originZ: l = 0 } = r
		n.transformOrigin = `${c} ${u} ${l}`
	}
}
const Ti = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function zs(t, e, i) {
	for (const n in e) !R(e[n]) && !Hs(n, i) && (t[n] = e[n])
}
function tc({ transformTemplate: t }, e) {
	return v.useMemo(() => {
		const i = Ti()
		return (xi(i, e, t), Object.assign({}, i.vars, i.style))
	}, [e])
}
function ec(t, e) {
	const i = t.style || {},
		n = {}
	return (zs(n, i, t), Object.assign(n, tc(t, e)), n)
}
function ic(t, e) {
	const i = {},
		n = ec(t, e)
	return (
		t.drag &&
			t.dragListener !== !1 &&
			((i.draggable = !1),
			(n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none"),
			(n.touchAction =
				t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
		t.tabIndex === void 0 &&
			(t.onTap || t.onTapStart || t.whileTap) &&
			(i.tabIndex = 0),
		(i.style = n),
		i
	)
}
const nc = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
	sc = { offset: "strokeDashoffset", array: "strokeDasharray" }
function oc(t, e, i = 1, n = 0, s = !0) {
	t.pathLength = 1
	const r = s ? nc : sc
	t[r.offset] = T.transform(-n)
	const o = T.transform(e),
		a = T.transform(i)
	t[r.array] = `${o} ${a}`
}
function Js(
	t,
	{
		attrX: e,
		attrY: i,
		attrScale: n,
		pathLength: s,
		pathSpacing: r = 1,
		pathOffset: o = 0,
		...a
	},
	c,
	u,
	l
) {
	if ((xi(t, a, u), c)) {
		t.style.viewBox && (t.attrs.viewBox = t.style.viewBox)
		return
	}
	;((t.attrs = t.style), (t.style = {}))
	const { attrs: h, style: f } = t
	;(h.transform && ((f.transform = h.transform), delete h.transform),
		(f.transform || h.transformOrigin) &&
			((f.transformOrigin = h.transformOrigin ?? "50% 50%"),
			delete h.transformOrigin),
		f.transform &&
			((f.transformBox = l?.transformBox ?? "fill-box"),
			delete h.transformBox),
		e !== void 0 && (h.x = e),
		i !== void 0 && (h.y = i),
		n !== void 0 && (h.scale = n),
		s !== void 0 && oc(h, s, r, o, !1))
}
const Xs = () => ({ ...Ti(), attrs: {} }),
	_s = (t) => typeof t == "string" && t.toLowerCase() === "svg"
function rc(t, e, i, n) {
	const s = v.useMemo(() => {
		const r = Xs()
		return (
			Js(r, e, _s(n), t.transformTemplate, t.style),
			{ ...r.attrs, style: { ...r.style } }
		)
	}, [e])
	if (t.style) {
		const r = {}
		;(zs(r, t.style, t), (s.style = { ...r, ...s.style }))
	}
	return s
}
const ac = [
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
	"view"
]
function wi(t) {
	return typeof t != "string" || t.includes("-")
		? !1
		: !!(ac.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function cc(t, e, i, { latestValues: n }, s, r = !1) {
	const a = (wi(t) ? rc : ic)(e, n, s, t),
		c = za(e, typeof t == "string", r),
		u = t !== v.Fragment ? { ...c, ...a, ref: i } : {},
		{ children: l } = e,
		h = v.useMemo(() => (R(l) ? l.get() : l), [l])
	return v.createElement(t, { ...u, children: h })
}
function nn(t) {
	const e = [{}, {}]
	return (
		t?.values.forEach((i, n) => {
			;((e[0][n] = i.get()), (e[1][n] = i.getVelocity()))
		}),
		e
	)
}
function Si(t, e, i, n) {
	if (typeof e == "function") {
		const [s, r] = nn(n)
		e = e(i !== void 0 ? i : t.custom, s, r)
	}
	if (
		(typeof e == "string" && (e = t.variants && t.variants[e]),
		typeof e == "function")
	) {
		const [s, r] = nn(n)
		e = e(i !== void 0 ? i : t.custom, s, r)
	}
	return e
}
function $t(t) {
	return R(t) ? t.get() : t
}
function lc({ scrapeMotionValuesFromProps: t, createRenderState: e }, i, n, s) {
	return { latestValues: uc(i, n, s, t), renderState: e() }
}
function uc(t, e, i, n) {
	const s = {},
		r = n(t, {})
	for (const f in r) s[f] = $t(r[f])
	let { initial: o, animate: a } = t
	const c = ce(t),
		u = Ws(t)
	e &&
		u &&
		!c &&
		t.inherit !== !1 &&
		(o === void 0 && (o = e.initial), a === void 0 && (a = e.animate))
	let l = i ? i.initial === !1 : !1
	l = l || o === !1
	const h = l ? a : o
	if (h && typeof h != "boolean" && !ae(h)) {
		const f = Array.isArray(h) ? h : [h]
		for (let A = 0; A < f.length; A++) {
			const m = Si(t, f[A])
			if (m) {
				const { transitionEnd: C, transition: K, ...p } = m
				for (const y in p) {
					let g = p[y]
					if (Array.isArray(g)) {
						const w = l ? g.length - 1 : 0
						g = g[w]
					}
					g !== null && (s[y] = g)
				}
				for (const y in C) s[y] = C[y]
			}
		}
	}
	return s
}
const qs = (t) => (e, i) => {
	const n = v.useContext(re),
		s = v.useContext(Ze),
		r = () => lc(t, e, n, s)
	return i ? r() : Wo(r)
}
function Ei(t, e, i) {
	const { style: n } = t,
		s = {}
	for (const r in n)
		(R(n[r]) ||
			(e.style && R(e.style[r])) ||
			Hs(r, t) ||
			i?.getValue(r)?.liveStyle !== void 0) &&
			(s[r] = n[r])
	return s
}
const hc = qs({ scrapeMotionValuesFromProps: Ei, createRenderState: Ti })
function Zs(t, e, i) {
	const n = Ei(t, e, i)
	for (const s in t)
		if (R(t[s]) || R(e[s])) {
			const r =
				wt.indexOf(s) !== -1
					? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
					: s
			n[r] = t[s]
		}
	return n
}
const fc = qs({ scrapeMotionValuesFromProps: Zs, createRenderState: Xs }),
	dc = Symbol.for("motionComponentSymbol")
function mt(t) {
	return (
		t &&
		typeof t == "object" &&
		Object.prototype.hasOwnProperty.call(t, "current")
	)
}
function Ac(t, e, i) {
	return v.useCallback(
		(n) => {
			;(n && t.onMount && t.onMount(n),
				e && (n ? e.mount(n) : e.unmount()),
				i && (typeof i == "function" ? i(n) : mt(i) && (i.current = n)))
		},
		[e]
	)
}
const Pi = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
	mc = "framerAppearId",
	$s = "data-" + Pi(mc),
	to = v.createContext({})
function pc(t, e, i, n, s) {
	const { visualElement: r } = v.useContext(re),
		o = v.useContext(Gs),
		a = v.useContext(Ze),
		c = v.useContext(Qs).reducedMotion,
		u = v.useRef(null)
	;((n = n || o.renderer),
		!u.current &&
			n &&
			(u.current = n(t, {
				visualState: e,
				parent: r,
				props: i,
				presenceContext: a,
				blockInitialAnimation: a ? a.initial === !1 : !1,
				reducedMotionConfig: c
			})))
	const l = u.current,
		h = v.useContext(to)
	l &&
		!l.projection &&
		s &&
		(l.type === "html" || l.type === "svg") &&
		gc(u.current, i, s, h)
	const f = v.useRef(!1)
	v.useInsertionEffect(() => {
		l && f.current && l.update(i, a)
	})
	const A = i[$s],
		m = v.useRef(
			!!A &&
				!window.MotionHandoffIsComplete?.(A) &&
				window.MotionHasOptimisedAnimation?.(A)
		)
	return (
		Ho(() => {
			l &&
				((f.current = !0),
				(window.MotionIsMounted = !0),
				l.updateFeatures(),
				l.scheduleRenderMicrotask(),
				m.current &&
					l.animationState &&
					l.animationState.animateChanges())
		}),
		v.useEffect(() => {
			l &&
				(!m.current &&
					l.animationState &&
					l.animationState.animateChanges(),
				m.current &&
					(queueMicrotask(() => {
						window.MotionHandoffMarkAsComplete?.(A)
					}),
					(m.current = !1)),
				(l.enteringChildren = void 0))
		}),
		l
	)
}
function gc(t, e, i, n) {
	const {
		layoutId: s,
		layout: r,
		drag: o,
		dragConstraints: a,
		layoutScroll: c,
		layoutRoot: u,
		layoutCrossfade: l
	} = e
	;((t.projection = new i(
		t.latestValues,
		e["data-framer-portal-id"] ? void 0 : eo(t.parent)
	)),
		t.projection.setOptions({
			layoutId: s,
			layout: r,
			alwaysMeasureLayout: !!o || (a && mt(a)),
			visualElement: t,
			animationType: typeof r == "string" ? r : "both",
			initialPromotionConfig: n,
			crossfade: l,
			layoutScroll: c,
			layoutRoot: u
		}))
}
function eo(t) {
	if (t) return t.options.allowProjection !== !1 ? t.projection : eo(t.parent)
}
function me(t, { forwardMotionProps: e = !1 } = {}, i, n) {
	i && Ya(i)
	const s = wi(t) ? fc : hc
	function r(a, c) {
		let u
		const l = { ...v.useContext(Qs), ...a, layoutId: Kc(a) },
			{ isStatic: h } = l,
			f = Xa(a),
			A = s(a, h)
		if (!h && qe) {
			yc()
			const m = Cc(l)
			;((u = m.MeasureLayout),
				(f.visualElement = pc(t, A, l, n, m.ProjectionNode)))
		}
		return d.jsxs(re.Provider, {
			value: f,
			children: [
				u && f.visualElement
					? d.jsx(u, { visualElement: f.visualElement, ...l })
					: null,
				cc(t, a, Ac(A, f.visualElement, c), A, h, e)
			]
		})
	}
	r.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`
	const o = v.forwardRef(r)
	return ((o[dc] = t), o)
}
function Kc({ layoutId: t }) {
	const e = v.useContext(qn).id
	return e && t !== void 0 ? e + "-" + t : t
}
function yc(t, e) {
	v.useContext(Gs).strict
}
function Cc(t) {
	const { drag: e, layout: i } = vt
	if (!e && !i) return {}
	const n = { ...e, ...i }
	return {
		MeasureLayout:
			e?.isEnabled(t) || i?.isEnabled(t) ? n.MeasureLayout : void 0,
		ProjectionNode: n.ProjectionNode
	}
}
function vc(t, e) {
	if (typeof Proxy > "u") return me
	const i = new Map(),
		n = (r, o) => me(r, o, t, e),
		s = (r, o) => n(r, o)
	return new Proxy(s, {
		get: (r, o) =>
			o === "create"
				? n
				: (i.has(o) || i.set(o, me(o, void 0, t, e)), i.get(o))
	})
}
function io({ top: t, left: e, right: i, bottom: n }) {
	return { x: { min: e, max: i }, y: { min: t, max: n } }
}
function xc({ x: t, y: e }) {
	return { top: e.min, right: t.max, bottom: e.max, left: t.min }
}
function Tc(t, e) {
	if (!e) return t
	const i = e({ x: t.left, y: t.top }),
		n = e({ x: t.right, y: t.bottom })
	return { top: i.y, left: i.x, bottom: n.y, right: n.x }
}
function pe(t) {
	return t === void 0 || t === 1
}
function Qe({ scale: t, scaleX: e, scaleY: i }) {
	return !pe(t) || !pe(e) || !pe(i)
}
function nt(t) {
	return (
		Qe(t) ||
		no(t) ||
		t.z ||
		t.rotate ||
		t.rotateX ||
		t.rotateY ||
		t.skewX ||
		t.skewY
	)
}
function no(t) {
	return sn(t.x) || sn(t.y)
}
function sn(t) {
	return t && t !== "0%"
}
function oe(t, e, i) {
	const n = t - i,
		s = e * n
	return i + s
}
function on(t, e, i, n, s) {
	return (s !== void 0 && (t = oe(t, s, n)), oe(t, i, n) + e)
}
function Ge(t, e = 0, i = 1, n, s) {
	;((t.min = on(t.min, e, i, n, s)), (t.max = on(t.max, e, i, n, s)))
}
function so(t, { x: e, y: i }) {
	;(Ge(t.x, e.translate, e.scale, e.originPoint),
		Ge(t.y, i.translate, i.scale, i.originPoint))
}
const rn = 0.999999999999,
	an = 1.0000000000001
function wc(t, e, i, n = !1) {
	const s = i.length
	if (!s) return
	e.x = e.y = 1
	let r, o
	for (let a = 0; a < s; a++) {
		;((r = i[a]), (o = r.projectionDelta))
		const { visualElement: c } = r.options
		;(c && c.props.style && c.props.style.display === "contents") ||
			(n &&
				r.options.layoutScroll &&
				r.scroll &&
				r !== r.root &&
				gt(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
			o && ((e.x *= o.x.scale), (e.y *= o.y.scale), so(t, o)),
			n && nt(r.latestValues) && gt(t, r.latestValues))
	}
	;(e.x < an && e.x > rn && (e.x = 1), e.y < an && e.y > rn && (e.y = 1))
}
function pt(t, e) {
	;((t.min = t.min + e), (t.max = t.max + e))
}
function cn(t, e, i, n, s = 0.5) {
	const r = b(t.min, t.max, s)
	Ge(t, e, i, r, n)
}
function gt(t, e) {
	;(cn(t.x, e.x, e.scaleX, e.scale, e.originX),
		cn(t.y, e.y, e.scaleY, e.scale, e.originY))
}
function oo(t, e) {
	return io(Tc(t.getBoundingClientRect(), e))
}
function Sc(t, e, i) {
	const n = oo(t, i),
		{ scroll: s } = e
	return (s && (pt(n.x, s.offset.x), pt(n.y, s.offset.y)), n)
}
const ln = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	Kt = () => ({ x: ln(), y: ln() }),
	un = () => ({ min: 0, max: 0 }),
	D = () => ({ x: un(), y: un() }),
	Ye = { current: null },
	ro = { current: !1 }
function Ec() {
	if (((ro.current = !0), !!qe))
		if (window.matchMedia) {
			const t = window.matchMedia("(prefers-reduced-motion)"),
				e = () => (Ye.current = t.matches)
			;(t.addEventListener("change", e), e())
		} else Ye.current = !1
}
const Pc = new WeakMap()
function Mc(t, e, i) {
	for (const n in e) {
		const s = e[n],
			r = i[n]
		if (R(s)) t.addValue(n, s)
		else if (R(r)) t.addValue(n, Ct(s, { owner: t }))
		else if (r !== s)
			if (t.hasValue(n)) {
				const o = t.getValue(n)
				o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s)
			} else {
				const o = t.getStaticValue(n)
				t.addValue(n, Ct(o !== void 0 ? o : s, { owner: t }))
			}
	}
	for (const n in i) e[n] === void 0 && t.removeValue(n)
	return e
}
const hn = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
]
class bc {
	scrapeMotionValuesFromProps(e, i, n) {
		return {}
	}
	constructor(
		{
			parent: e,
			props: i,
			presenceContext: n,
			reducedMotionConfig: s,
			blockInitialAnimation: r,
			visualState: o
		},
		a = {}
	) {
		;((this.current = null),
			(this.children = new Set()),
			(this.isVariantNode = !1),
			(this.isControllingVariants = !1),
			(this.shouldReduceMotion = null),
			(this.values = new Map()),
			(this.KeyframeResolver = mi),
			(this.features = {}),
			(this.valueSubscriptions = new Map()),
			(this.prevMotionValues = {}),
			(this.events = {}),
			(this.propEventSubscriptions = {}),
			(this.notifyUpdate = () =>
				this.notify("Update", this.latestValues)),
			(this.render = () => {
				this.current &&
					(this.triggerBuild(),
					this.renderInstance(
						this.current,
						this.renderState,
						this.props.style,
						this.projection
					))
			}),
			(this.renderScheduledAt = 0),
			(this.scheduleRender = () => {
				const f = F.now()
				this.renderScheduledAt < f &&
					((this.renderScheduledAt = f),
					M.render(this.render, !1, !0))
			}))
		const { latestValues: c, renderState: u } = o
		;((this.latestValues = c),
			(this.baseTarget = { ...c }),
			(this.initialValues = i.initial ? { ...c } : {}),
			(this.renderState = u),
			(this.parent = e),
			(this.props = i),
			(this.presenceContext = n),
			(this.depth = e ? e.depth + 1 : 0),
			(this.reducedMotionConfig = s),
			(this.options = a),
			(this.blockInitialAnimation = !!r),
			(this.isControllingVariants = ce(i)),
			(this.isVariantNode = Ws(i)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(e && e.current)))
		const { willChange: l, ...h } = this.scrapeMotionValuesFromProps(
			i,
			{},
			this
		)
		for (const f in h) {
			const A = h[f]
			c[f] !== void 0 && R(A) && A.set(c[f])
		}
	}
	mount(e) {
		;((this.current = e),
			Pc.set(e, this),
			this.projection &&
				!this.projection.instance &&
				this.projection.mount(e),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree =
					this.parent.addVariantChild(this)),
			this.values.forEach((i, n) => this.bindToMotionValue(n, i)),
			ro.current || Ec(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === "never"
					? !1
					: this.reducedMotionConfig === "always"
						? !0
						: Ye.current),
			this.parent?.addChild(this),
			this.update(this.props, this.presenceContext))
	}
	unmount() {
		;(this.projection && this.projection.unmount(),
			q(this.notifyUpdate),
			q(this.render),
			this.valueSubscriptions.forEach((e) => e()),
			this.valueSubscriptions.clear(),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent?.removeChild(this))
		for (const e in this.events) this.events[e].clear()
		for (const e in this.features) {
			const i = this.features[e]
			i && (i.unmount(), (i.isMounted = !1))
		}
		this.current = null
	}
	addChild(e) {
		;(this.children.add(e),
			this.enteringChildren ?? (this.enteringChildren = new Set()),
			this.enteringChildren.add(e))
	}
	removeChild(e) {
		;(this.children.delete(e),
			this.enteringChildren && this.enteringChildren.delete(e))
	}
	bindToMotionValue(e, i) {
		this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)()
		const n = St.has(e)
		n && this.onBindTransform && this.onBindTransform()
		const s = i.on("change", (o) => {
			;((this.latestValues[e] = o),
				this.props.onUpdate && M.preRender(this.notifyUpdate),
				n && this.projection && (this.projection.isTransformDirty = !0),
				this.scheduleRender())
		})
		let r
		;(window.MotionCheckAppearSync &&
			(r = window.MotionCheckAppearSync(this, e, i)),
			this.valueSubscriptions.set(e, () => {
				;(s(), r && r(), i.owner && i.stop())
			}))
	}
	sortNodePosition(e) {
		return !this.current ||
			!this.sortInstanceNodePosition ||
			this.type !== e.type
			? 0
			: this.sortInstanceNodePosition(this.current, e.current)
	}
	updateFeatures() {
		let e = "animation"
		for (e in vt) {
			const i = vt[e]
			if (!i) continue
			const { isEnabled: n, Feature: s } = i
			if (
				(!this.features[e] &&
					s &&
					n(this.props) &&
					(this.features[e] = new s(this)),
				this.features[e])
			) {
				const r = this.features[e]
				r.isMounted ? r.update() : (r.mount(), (r.isMounted = !0))
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props)
	}
	measureViewportBox() {
		return this.current
			? this.measureInstanceViewportBox(this.current, this.props)
			: D()
	}
	getStaticValue(e) {
		return this.latestValues[e]
	}
	setStaticValue(e, i) {
		this.latestValues[e] = i
	}
	update(e, i) {
		;((e.transformTemplate || this.props.transformTemplate) &&
			this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = e),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = i))
		for (let n = 0; n < hn.length; n++) {
			const s = hn[n]
			this.propEventSubscriptions[s] &&
				(this.propEventSubscriptions[s](),
				delete this.propEventSubscriptions[s])
			const r = "on" + s,
				o = e[r]
			o && (this.propEventSubscriptions[s] = this.on(s, o))
		}
		;((this.prevMotionValues = Mc(
			this,
			this.scrapeMotionValuesFromProps(e, this.prevProps, this),
			this.prevMotionValues
		)),
			this.handleChildMotionValue && this.handleChildMotionValue())
	}
	getProps() {
		return this.props
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0
	}
	getDefaultTransition() {
		return this.props.transition
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint
	}
	getClosestVariantNode() {
		return this.isVariantNode
			? this
			: this.parent
				? this.parent.getClosestVariantNode()
				: void 0
	}
	addVariantChild(e) {
		const i = this.getClosestVariantNode()
		if (i)
			return (
				i.variantChildren && i.variantChildren.add(e),
				() => i.variantChildren.delete(e)
			)
	}
	addValue(e, i) {
		const n = this.values.get(e)
		i !== n &&
			(n && this.removeValue(e),
			this.bindToMotionValue(e, i),
			this.values.set(e, i),
			(this.latestValues[e] = i.get()))
	}
	removeValue(e) {
		this.values.delete(e)
		const i = this.valueSubscriptions.get(e)
		;(i && (i(), this.valueSubscriptions.delete(e)),
			delete this.latestValues[e],
			this.removeValueFromRenderState(e, this.renderState))
	}
	hasValue(e) {
		return this.values.has(e)
	}
	getValue(e, i) {
		if (this.props.values && this.props.values[e])
			return this.props.values[e]
		let n = this.values.get(e)
		return (
			n === void 0 &&
				i !== void 0 &&
				((n = Ct(i === null ? void 0 : i, { owner: this })),
				this.addValue(e, n)),
			n
		)
	}
	readValue(e, i) {
		let n =
			this.latestValues[e] !== void 0 || !this.current
				? this.latestValues[e]
				: (this.getBaseTargetFromProps(this.props, e) ??
					this.readValueFromInstance(this.current, e, this.options))
		return (
			n != null &&
				(typeof n == "string" && (Zn(n) || ts(n))
					? (n = parseFloat(n))
					: !Qa(n) && Z.test(i) && (n = Rs(e, i)),
				this.setBaseTarget(e, R(n) ? n.get() : n)),
			R(n) ? n.get() : n
		)
	}
	setBaseTarget(e, i) {
		this.baseTarget[e] = i
	}
	getBaseTarget(e) {
		const { initial: i } = this.props
		let n
		if (typeof i == "string" || typeof i == "object") {
			const r = Si(this.props, i, this.presenceContext?.custom)
			r && (n = r[e])
		}
		if (i && n !== void 0) return n
		const s = this.getBaseTargetFromProps(this.props, e)
		return s !== void 0 && !R(s)
			? s
			: this.initialValues[e] !== void 0 && n === void 0
				? void 0
				: this.baseTarget[e]
	}
	on(e, i) {
		return (
			this.events[e] || (this.events[e] = new ni()),
			this.events[e].add(i)
		)
	}
	notify(e, ...i) {
		this.events[e] && this.events[e].notify(...i)
	}
	scheduleRenderMicrotask() {
		Ki.render(this.render)
	}
}
class ao extends bc {
	constructor() {
		;(super(...arguments), (this.KeyframeResolver = Va))
	}
	sortInstanceNodePosition(e, i) {
		return e.compareDocumentPosition(i) & 2 ? 1 : -1
	}
	getBaseTargetFromProps(e, i) {
		return e.style ? e.style[i] : void 0
	}
	removeValueFromRenderState(e, { vars: i, style: n }) {
		;(delete i[e], delete n[e])
	}
	handleChildMotionValue() {
		this.childSubscription &&
			(this.childSubscription(), delete this.childSubscription)
		const { children: e } = this.props
		R(e) &&
			(this.childSubscription = e.on("change", (i) => {
				this.current && (this.current.textContent = `${i}`)
			}))
	}
}
function co(t, { style: e, vars: i }, n, s) {
	const r = t.style
	let o
	for (o in e) r[o] = e[o]
	s?.applyProjectionStyles(r, n)
	for (o in i) r.setProperty(o, i[o])
}
function Vc(t) {
	return window.getComputedStyle(t)
}
class Dc extends ao {
	constructor() {
		;(super(...arguments), (this.type = "html"), (this.renderInstance = co))
	}
	readValueFromInstance(e, i) {
		if (St.has(i)) return this.projection?.isProjecting ? Re(i) : Xr(e, i)
		{
			const n = Vc(e),
				s = (ri(i) ? n.getPropertyValue(i) : n[i]) || 0
			return typeof s == "string" ? s.trim() : s
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: i }) {
		return oo(e, i)
	}
	build(e, i, n) {
		xi(e, i, n.transformTemplate)
	}
	scrapeMotionValuesFromProps(e, i, n) {
		return Ei(e, i, n)
	}
}
const lo = new Set([
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
	"lengthAdjust"
])
function jc(t, e, i, n) {
	co(t, e, void 0, n)
	for (const s in e.attrs) t.setAttribute(lo.has(s) ? s : Pi(s), e.attrs[s])
}
class Bc extends ao {
	constructor() {
		;(super(...arguments),
			(this.type = "svg"),
			(this.isSVGTag = !1),
			(this.measureInstanceViewportBox = D))
	}
	getBaseTargetFromProps(e, i) {
		return e[i]
	}
	readValueFromInstance(e, i) {
		if (St.has(i)) {
			const n = Is(i)
			return (n && n.default) || 0
		}
		return ((i = lo.has(i) ? i : Pi(i)), e.getAttribute(i))
	}
	scrapeMotionValuesFromProps(e, i, n) {
		return Zs(e, i, n)
	}
	build(e, i, n) {
		Js(e, i, this.isSVGTag, n.transformTemplate, n.style)
	}
	renderInstance(e, i, n, s) {
		jc(e, i, n, s)
	}
	mount(e) {
		;((this.isSVGTag = _s(e.tagName)), super.mount(e))
	}
}
const Ic = (t, e) =>
	wi(t) ? new Bc(e) : new Dc(e, { allowProjection: t !== v.Fragment })
function yt(t, e, i) {
	const n = t.getProps()
	return Si(n, e, i !== void 0 ? i : n.custom, t)
}
const We = (t) => Array.isArray(t)
function Rc(t, e, i) {
	t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, Ct(i))
}
function Lc(t) {
	return We(t) ? t[t.length - 1] || 0 : t
}
function kc(t, e) {
	const i = yt(t, e)
	let { transitionEnd: n = {}, transition: s = {}, ...r } = i || {}
	r = { ...r, ...n }
	for (const o in r) {
		const a = Lc(r[o])
		Rc(t, o, a)
	}
}
function Fc(t) {
	return !!(R(t) && t.add)
}
function He(t, e) {
	const i = t.getValue("willChange")
	if (Fc(i)) return i.add(e)
	if (!i && X.WillChange) {
		const n = new X.WillChange("auto")
		;(t.addValue("willChange", n), n.add(e))
	}
}
function uo(t) {
	return t.props[$s]
}
const Nc = (t) => t !== null
function Oc(t, { repeat: e, repeatType: i = "loop" }, n) {
	const s = t.filter(Nc),
		r = e && i !== "loop" && e % 2 === 1 ? 0 : s.length - 1
	return s[r]
}
const Uc = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
	Qc = (t) => ({
		type: "spring",
		stiffness: 550,
		damping: t === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10
	}),
	Gc = { type: "keyframes", duration: 0.8 },
	Yc = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	Wc = (t, { keyframes: e }) =>
		e.length > 2
			? Gc
			: St.has(t)
				? t.startsWith("scale")
					? Qc(e[1])
					: Uc
				: Yc
function Hc({
	when: t,
	delay: e,
	delayChildren: i,
	staggerChildren: n,
	staggerDirection: s,
	repeat: r,
	repeatType: o,
	repeatDelay: a,
	from: c,
	elapsed: u,
	...l
}) {
	return !!Object.keys(l).length
}
const Mi =
	(t, e, i, n = {}, s, r) =>
	(o) => {
		const a = pi(n, t) || {},
			c = a.delay || n.delay || 0
		let { elapsed: u = 0 } = n
		u = u - H(c)
		const l = {
			keyframes: Array.isArray(i) ? i : [null, i],
			ease: "easeOut",
			velocity: e.getVelocity(),
			...a,
			delay: -u,
			onUpdate: (f) => {
				;(e.set(f), a.onUpdate && a.onUpdate(f))
			},
			onComplete: () => {
				;(o(), a.onComplete && a.onComplete())
			},
			name: t,
			motionValue: e,
			element: r ? void 0 : s
		}
		;(Hc(a) || Object.assign(l, Wc(t, l)),
			l.duration && (l.duration = H(l.duration)),
			l.repeatDelay && (l.repeatDelay = H(l.repeatDelay)),
			l.from !== void 0 && (l.keyframes[0] = l.from))
		let h = !1
		if (
			((l.type === !1 || (l.duration === 0 && !l.repeatDelay)) &&
				(Oe(l), l.delay === 0 && (h = !0)),
			(X.instantAnimations || X.skipAnimations) &&
				((h = !0), Oe(l), (l.delay = 0)),
			(l.allowFlatten = !a.type && !a.ease),
			h && !r && e.get() !== void 0)
		) {
			const f = Oc(l.keyframes, a)
			if (f !== void 0) {
				M.update(() => {
					;(l.onUpdate(f), l.onComplete())
				})
				return
			}
		}
		return a.isSync ? new Ai(l) : new Ka(l)
	}
function zc({ protectedKeys: t, needsAnimating: e }, i) {
	const n = t.hasOwnProperty(i) && e[i] !== !0
	return ((e[i] = !1), n)
}
function ho(t, e, { delay: i = 0, transitionOverride: n, type: s } = {}) {
	let { transition: r = t.getDefaultTransition(), transitionEnd: o, ...a } = e
	n && (r = n)
	const c = [],
		u = s && t.animationState && t.animationState.getState()[s]
	for (const l in a) {
		const h = t.getValue(l, t.latestValues[l] ?? null),
			f = a[l]
		if (f === void 0 || (u && zc(u, l))) continue
		const A = { delay: i, ...pi(r || {}, l) },
			m = h.get()
		if (
			m !== void 0 &&
			!h.isAnimating &&
			!Array.isArray(f) &&
			f === m &&
			!A.velocity
		)
			continue
		let C = !1
		if (window.MotionHandoffAnimation) {
			const p = uo(t)
			if (p) {
				const y = window.MotionHandoffAnimation(p, l, M)
				y !== null && ((A.startTime = y), (C = !0))
			}
		}
		;(He(t, l),
			h.start(
				Mi(
					l,
					h,
					f,
					t.shouldReduceMotion && Ds.has(l) ? { type: !1 } : A,
					t,
					C
				)
			))
		const K = h.animation
		K && c.push(K)
	}
	return (
		o &&
			Promise.all(c).then(() => {
				M.update(() => {
					o && kc(t, o)
				})
			}),
		c
	)
}
function fo(t, e, i, n = 0, s = 1) {
	const r = Array.from(t)
			.sort((u, l) => u.sortNodePosition(l))
			.indexOf(e),
		o = t.size,
		a = (o - 1) * n
	return typeof i == "function" ? i(r, o) : s === 1 ? r * n : a - r * n
}
function ze(t, e, i = {}) {
	const n = yt(t, e, i.type === "exit" ? t.presenceContext?.custom : void 0)
	let { transition: s = t.getDefaultTransition() || {} } = n || {}
	i.transitionOverride && (s = i.transitionOverride)
	const r = n ? () => Promise.all(ho(t, n, i)) : () => Promise.resolve(),
		o =
			t.variantChildren && t.variantChildren.size
				? (c = 0) => {
						const {
							delayChildren: u = 0,
							staggerChildren: l,
							staggerDirection: h
						} = s
						return Jc(t, e, c, u, l, h, i)
					}
				: () => Promise.resolve(),
		{ when: a } = s
	if (a) {
		const [c, u] = a === "beforeChildren" ? [r, o] : [o, r]
		return c().then(() => u())
	} else return Promise.all([r(), o(i.delay)])
}
function Jc(t, e, i = 0, n = 0, s = 0, r = 1, o) {
	const a = []
	for (const c of t.variantChildren)
		(c.notify("AnimationStart", e),
			a.push(
				ze(c, e, {
					...o,
					delay:
						i +
						(typeof n == "function" ? 0 : n) +
						fo(t.variantChildren, c, n, s, r)
				}).then(() => c.notify("AnimationComplete", e))
			))
	return Promise.all(a)
}
function Xc(t, e, i = {}) {
	t.notify("AnimationStart", e)
	let n
	if (Array.isArray(e)) {
		const s = e.map((r) => ze(t, r, i))
		n = Promise.all(s)
	} else if (typeof e == "string") n = ze(t, e, i)
	else {
		const s = typeof e == "function" ? yt(t, e, i.custom) : e
		n = Promise.all(ho(t, s, i))
	}
	return n.then(() => {
		t.notify("AnimationComplete", e)
	})
}
function Ao(t, e) {
	if (!Array.isArray(e)) return !1
	const i = e.length
	if (i !== t.length) return !1
	for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1
	return !0
}
const _c = vi.length
function mo(t) {
	if (!t) return
	if (!t.isControllingVariants) {
		const i = t.parent ? mo(t.parent) || {} : {}
		return (t.props.initial !== void 0 && (i.initial = t.props.initial), i)
	}
	const e = {}
	for (let i = 0; i < _c; i++) {
		const n = vi[i],
			s = t.props[n]
		;(Ot(s) || s === !1) && (e[n] = s)
	}
	return e
}
const qc = [...Ci].reverse(),
	Zc = Ci.length
function $c(t) {
	return (e) =>
		Promise.all(e.map(({ animation: i, options: n }) => Xc(t, i, n)))
}
function tl(t) {
	let e = $c(t),
		i = fn(),
		n = !0
	const s = (c) => (u, l) => {
		const h = yt(t, l, c === "exit" ? t.presenceContext?.custom : void 0)
		if (h) {
			const { transition: f, transitionEnd: A, ...m } = h
			u = { ...u, ...m, ...A }
		}
		return u
	}
	function r(c) {
		e = c(t)
	}
	function o(c) {
		const { props: u } = t,
			l = mo(t.parent) || {},
			h = [],
			f = new Set()
		let A = {},
			m = 1 / 0
		for (let K = 0; K < Zc; K++) {
			const p = qc[K],
				y = i[p],
				g = u[p] !== void 0 ? u[p] : l[p],
				w = Ot(g),
				x = p === c ? y.isActive : null
			x === !1 && (m = K)
			let S = g === l[p] && g !== u[p] && w
			if (
				(S && n && t.manuallyAnimateOnMount && (S = !1),
				(y.protectedKeys = { ...A }),
				(!y.isActive && x === null) ||
					(!g && !y.prevProp) ||
					ae(g) ||
					typeof g == "boolean")
			)
				continue
			const P = el(y.prevProp, g)
			let E = P || (p === c && y.isActive && !S && w) || (K > m && w),
				k = !1
			const N = Array.isArray(g) ? g : [g]
			let ht = N.reduce(s(p), {})
			x === !1 && (ht = {})
			const { prevResolvedValues: Vi = {} } = y,
				Vo = { ...Vi, ...ht },
				Di = (B) => {
					;((E = !0),
						f.has(B) && ((k = !0), f.delete(B)),
						(y.needsAnimating[B] = !0))
					const O = t.getValue(B)
					O && (O.liveStyle = !1)
				}
			for (const B in Vo) {
				const O = ht[B],
					et = Vi[B]
				if (A.hasOwnProperty(B)) continue
				let ft = !1
				;(We(O) && We(et) ? (ft = !Ao(O, et)) : (ft = O !== et),
					ft
						? O != null
							? Di(B)
							: f.add(B)
						: O !== void 0 && f.has(B)
							? Di(B)
							: (y.protectedKeys[B] = !0))
			}
			;((y.prevProp = g),
				(y.prevResolvedValues = ht),
				y.isActive && (A = { ...A, ...ht }),
				n && t.blockInitialAnimation && (E = !1))
			const ji = S && P
			E &&
				(!ji || k) &&
				h.push(
					...N.map((B) => {
						const O = { type: p }
						if (
							typeof B == "string" &&
							n &&
							!ji &&
							t.manuallyAnimateOnMount &&
							t.parent
						) {
							const { parent: et } = t,
								ft = yt(et, B)
							if (et.enteringChildren && ft) {
								const { delayChildren: Do } =
									ft.transition || {}
								O.delay = fo(et.enteringChildren, t, Do)
							}
						}
						return { animation: B, options: O }
					})
				)
		}
		if (f.size) {
			const K = {}
			if (typeof u.initial != "boolean") {
				const p = yt(
					t,
					Array.isArray(u.initial) ? u.initial[0] : u.initial
				)
				p && p.transition && (K.transition = p.transition)
			}
			;(f.forEach((p) => {
				const y = t.getBaseTarget(p),
					g = t.getValue(p)
				;(g && (g.liveStyle = !0), (K[p] = y ?? null))
			}),
				h.push({ animation: K }))
		}
		let C = !!h.length
		return (
			n &&
				(u.initial === !1 || u.initial === u.animate) &&
				!t.manuallyAnimateOnMount &&
				(C = !1),
			(n = !1),
			C ? e(h) : Promise.resolve()
		)
	}
	function a(c, u) {
		if (i[c].isActive === u) return Promise.resolve()
		;(t.variantChildren?.forEach((h) => h.animationState?.setActive(c, u)),
			(i[c].isActive = u))
		const l = o(c)
		for (const h in i) i[h].protectedKeys = {}
		return l
	}
	return {
		animateChanges: o,
		setActive: a,
		setAnimateFunction: r,
		getState: () => i,
		reset: () => {
			;((i = fn()), (n = !0))
		}
	}
}
function el(t, e) {
	return typeof e == "string" ? e !== t : Array.isArray(e) ? !Ao(e, t) : !1
}
function it(t = !1) {
	return {
		isActive: t,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	}
}
function fn() {
	return {
		animate: it(!0),
		whileInView: it(),
		whileHover: it(),
		whileTap: it(),
		whileDrag: it(),
		whileFocus: it(),
		exit: it()
	}
}
class tt {
	constructor(e) {
		;((this.isMounted = !1), (this.node = e))
	}
	update() {}
}
class il extends tt {
	constructor(e) {
		;(super(e), e.animationState || (e.animationState = tl(e)))
	}
	updateAnimationControlsSubscription() {
		const { animate: e } = this.node.getProps()
		ae(e) && (this.unmountControls = e.subscribe(this.node))
	}
	mount() {
		this.updateAnimationControlsSubscription()
	}
	update() {
		const { animate: e } = this.node.getProps(),
			{ animate: i } = this.node.prevProps || {}
		e !== i && this.updateAnimationControlsSubscription()
	}
	unmount() {
		;(this.node.animationState.reset(), this.unmountControls?.())
	}
}
let nl = 0
class sl extends tt {
	constructor() {
		;(super(...arguments), (this.id = nl++))
	}
	update() {
		if (!this.node.presenceContext) return
		const { isPresent: e, onExitComplete: i } = this.node.presenceContext,
			{ isPresent: n } = this.node.prevPresenceContext || {}
		if (!this.node.animationState || e === n) return
		const s = this.node.animationState.setActive("exit", !e)
		i &&
			!e &&
			s.then(() => {
				i(this.id)
			})
	}
	mount() {
		const { register: e, onExitComplete: i } =
			this.node.presenceContext || {}
		;(i && i(this.id), e && (this.unmount = e(this.id)))
	}
	unmount() {}
}
const ol = { animation: { Feature: il }, exit: { Feature: sl } }
function Qt(t, e, i, n = { passive: !0 }) {
	return (t.addEventListener(e, i, n), () => t.removeEventListener(e, i))
}
function Ht(t) {
	return { point: { x: t.pageX, y: t.pageY } }
}
const rl = (t) => (e) => yi(e) && t(e, Ht(e))
function jt(t, e, i, n) {
	return Qt(t, e, rl(i), n)
}
const po = 1e-4,
	al = 1 - po,
	cl = 1 + po,
	go = 0.01,
	ll = 0 - go,
	ul = 0 + go
function L(t) {
	return t.max - t.min
}
function hl(t, e, i) {
	return Math.abs(t - e) <= i
}
function dn(t, e, i, n = 0.5) {
	;((t.origin = n),
		(t.originPoint = b(e.min, e.max, t.origin)),
		(t.scale = L(i) / L(e)),
		(t.translate = b(i.min, i.max, t.origin) - t.originPoint),
		((t.scale >= al && t.scale <= cl) || isNaN(t.scale)) && (t.scale = 1),
		((t.translate >= ll && t.translate <= ul) || isNaN(t.translate)) &&
			(t.translate = 0))
}
function Bt(t, e, i, n) {
	;(dn(t.x, e.x, i.x, n ? n.originX : void 0),
		dn(t.y, e.y, i.y, n ? n.originY : void 0))
}
function An(t, e, i) {
	;((t.min = i.min + e.min), (t.max = t.min + L(e)))
}
function fl(t, e, i) {
	;(An(t.x, e.x, i.x), An(t.y, e.y, i.y))
}
function mn(t, e, i) {
	;((t.min = e.min - i.min), (t.max = t.min + L(e)))
}
function It(t, e, i) {
	;(mn(t.x, e.x, i.x), mn(t.y, e.y, i.y))
}
function Q(t) {
	return [t("x"), t("y")]
}
const Ko = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
	pn = (t, e) => Math.abs(t - e)
function dl(t, e) {
	const i = pn(t.x, e.x),
		n = pn(t.y, e.y)
	return Math.sqrt(i ** 2 + n ** 2)
}
class yo {
	constructor(
		e,
		i,
		{
			transformPagePoint: n,
			contextWindow: s = window,
			dragSnapToOrigin: r = !1,
			distanceThreshold: o = 3
		} = {}
	) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.contextWindow = window),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
				const f = Ke(this.lastMoveEventInfo, this.history),
					A = this.startEvent !== null,
					m = dl(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold
				if (!A && !m) return
				const { point: C } = f,
					{ timestamp: K } = I
				this.history.push({ ...C, timestamp: K })
				const { onStart: p, onMove: y } = this.handlers
				;(A ||
					(p && p(this.lastMoveEvent, f),
					(this.startEvent = this.lastMoveEvent)),
					y && y(this.lastMoveEvent, f))
			}),
			(this.handlePointerMove = (f, A) => {
				;((this.lastMoveEvent = f),
					(this.lastMoveEventInfo = ge(A, this.transformPagePoint)),
					M.update(this.updatePoint, !0))
			}),
			(this.handlePointerUp = (f, A) => {
				this.end()
				const {
					onEnd: m,
					onSessionEnd: C,
					resumeAnimation: K
				} = this.handlers
				if (
					(this.dragSnapToOrigin && K && K(),
					!(this.lastMoveEvent && this.lastMoveEventInfo))
				)
					return
				const p = Ke(
					f.type === "pointercancel"
						? this.lastMoveEventInfo
						: ge(A, this.transformPagePoint),
					this.history
				)
				;(this.startEvent && m && m(f, p), C && C(f, p))
			}),
			!yi(e))
		)
			return
		;((this.dragSnapToOrigin = r),
			(this.handlers = i),
			(this.transformPagePoint = n),
			(this.distanceThreshold = o),
			(this.contextWindow = s || window))
		const a = Ht(e),
			c = ge(a, this.transformPagePoint),
			{ point: u } = c,
			{ timestamp: l } = I
		this.history = [{ ...u, timestamp: l }]
		const { onSessionStart: h } = i
		;(h && h(e, Ke(c, this.history)),
			(this.removeListeners = Gt(
				jt(this.contextWindow, "pointermove", this.handlePointerMove),
				jt(this.contextWindow, "pointerup", this.handlePointerUp),
				jt(this.contextWindow, "pointercancel", this.handlePointerUp)
			)))
	}
	updateHandlers(e) {
		this.handlers = e
	}
	end() {
		;(this.removeListeners && this.removeListeners(), q(this.updatePoint))
	}
}
function ge(t, e) {
	return e ? { point: e(t.point) } : t
}
function gn(t, e) {
	return { x: t.x - e.x, y: t.y - e.y }
}
function Ke({ point: t }, e) {
	return {
		point: t,
		delta: gn(t, Co(e)),
		offset: gn(t, Al(e)),
		velocity: ml(e, 0.1)
	}
}
function Al(t) {
	return t[0]
}
function Co(t) {
	return t[t.length - 1]
}
function ml(t, e) {
	if (t.length < 2) return { x: 0, y: 0 }
	let i = t.length - 1,
		n = null
	const s = Co(t)
	for (; i >= 0 && ((n = t[i]), !(s.timestamp - n.timestamp > H(e))); ) i--
	if (!n) return { x: 0, y: 0 }
	const r = G(s.timestamp - n.timestamp)
	if (r === 0) return { x: 0, y: 0 }
	const o = { x: (s.x - n.x) / r, y: (s.y - n.y) / r }
	return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o)
}
function pl(t, { min: e, max: i }, n) {
	return (
		e !== void 0 && t < e
			? (t = n ? b(e, t, n.min) : Math.max(t, e))
			: i !== void 0 &&
				t > i &&
				(t = n ? b(i, t, n.max) : Math.min(t, i)),
		t
	)
}
function Kn(t, e, i) {
	return {
		min: e !== void 0 ? t.min + e : void 0,
		max: i !== void 0 ? t.max + i - (t.max - t.min) : void 0
	}
}
function gl(t, { top: e, left: i, bottom: n, right: s }) {
	return { x: Kn(t.x, i, s), y: Kn(t.y, e, n) }
}
function yn(t, e) {
	let i = e.min - t.min,
		n = e.max - t.max
	return (
		e.max - e.min < t.max - t.min && ([i, n] = [n, i]),
		{ min: i, max: n }
	)
}
function Kl(t, e) {
	return { x: yn(t.x, e.x), y: yn(t.y, e.y) }
}
function yl(t, e) {
	let i = 0.5
	const n = L(t),
		s = L(e)
	return (
		s > n
			? (i = kt(e.min, e.max - n, t.min))
			: n > s && (i = kt(t.min, t.max - s, e.min)),
		J(0, 1, i)
	)
}
function Cl(t, e) {
	const i = {}
	return (
		e.min !== void 0 && (i.min = e.min - t.min),
		e.max !== void 0 && (i.max = e.max - t.min),
		i
	)
}
const Je = 0.35
function vl(t = Je) {
	return (
		t === !1 ? (t = 0) : t === !0 && (t = Je),
		{ x: Cn(t, "left", "right"), y: Cn(t, "top", "bottom") }
	)
}
function Cn(t, e, i) {
	return { min: vn(t, e), max: vn(t, i) }
}
function vn(t, e) {
	return typeof t == "number" ? t : t[e] || 0
}
const xl = new WeakMap()
class Tl {
	constructor(e) {
		;((this.openDragLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = D()),
			(this.latestPointerEvent = null),
			(this.latestPanInfo = null),
			(this.visualElement = e))
	}
	start(e, { snapToCursor: i = !1, distanceThreshold: n } = {}) {
		const { presenceContext: s } = this.visualElement
		if (s && s.isPresent === !1) return
		const r = (h) => {
				const { dragSnapToOrigin: f } = this.getProps()
				;(f ? this.pauseAnimation() : this.stopAnimation(),
					i && this.snapToCursor(Ht(h).point))
			},
			o = (h, f) => {
				const {
					drag: A,
					dragPropagation: m,
					onDragStart: C
				} = this.getProps()
				if (
					A &&
					!m &&
					(this.openDragLock && this.openDragLock(),
					(this.openDragLock = Ia(A)),
					!this.openDragLock)
				)
					return
				;((this.latestPointerEvent = h),
					(this.latestPanInfo = f),
					(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked =
							!0),
						(this.visualElement.projection.target = void 0)),
					Q((p) => {
						let y = this.getAxisMotionValue(p).get() || 0
						if (z.test(y)) {
							const { projection: g } = this.visualElement
							if (g && g.layout) {
								const w = g.layout.layoutBox[p]
								w && (y = L(w) * (parseFloat(y) / 100))
							}
						}
						this.originPoint[p] = y
					}),
					C && M.postRender(() => C(h, f)),
					He(this.visualElement, "transform"))
				const { animationState: K } = this.visualElement
				K && K.setActive("whileDrag", !0)
			},
			a = (h, f) => {
				;((this.latestPointerEvent = h), (this.latestPanInfo = f))
				const {
					dragPropagation: A,
					dragDirectionLock: m,
					onDirectionLock: C,
					onDrag: K
				} = this.getProps()
				if (!A && !this.openDragLock) return
				const { offset: p } = f
				if (m && this.currentDirection === null) {
					;((this.currentDirection = wl(p)),
						this.currentDirection !== null &&
							C &&
							C(this.currentDirection))
					return
				}
				;(this.updateAxis("x", f.point, p),
					this.updateAxis("y", f.point, p),
					this.visualElement.render(),
					K && K(h, f))
			},
			c = (h, f) => {
				;((this.latestPointerEvent = h),
					(this.latestPanInfo = f),
					this.stop(h, f),
					(this.latestPointerEvent = null),
					(this.latestPanInfo = null))
			},
			u = () =>
				Q(
					(h) =>
						this.getAnimationState(h) === "paused" &&
						this.getAxisMotionValue(h).animation?.play()
				),
			{ dragSnapToOrigin: l } = this.getProps()
		this.panSession = new yo(
			e,
			{
				onSessionStart: r,
				onStart: o,
				onMove: a,
				onSessionEnd: c,
				resumeAnimation: u
			},
			{
				transformPagePoint: this.visualElement.getTransformPagePoint(),
				dragSnapToOrigin: l,
				distanceThreshold: n,
				contextWindow: Ko(this.visualElement)
			}
		)
	}
	stop(e, i) {
		const n = e || this.latestPointerEvent,
			s = i || this.latestPanInfo,
			r = this.isDragging
		if ((this.cancel(), !r || !s || !n)) return
		const { velocity: o } = s
		this.startAnimation(o)
		const { onDragEnd: a } = this.getProps()
		a && M.postRender(() => a(n, s))
	}
	cancel() {
		this.isDragging = !1
		const { projection: e, animationState: i } = this.visualElement
		;(e && (e.isAnimationBlocked = !1),
			this.panSession && this.panSession.end(),
			(this.panSession = void 0))
		const { dragPropagation: n } = this.getProps()
		;(!n &&
			this.openDragLock &&
			(this.openDragLock(), (this.openDragLock = null)),
			i && i.setActive("whileDrag", !1))
	}
	updateAxis(e, i, n) {
		const { drag: s } = this.getProps()
		if (!n || !_t(e, s, this.currentDirection)) return
		const r = this.getAxisMotionValue(e)
		let o = this.originPoint[e] + n[e]
		;(this.constraints &&
			this.constraints[e] &&
			(o = pl(o, this.constraints[e], this.elastic[e])),
			r.set(o))
	}
	resolveConstraints() {
		const { dragConstraints: e, dragElastic: i } = this.getProps(),
			n =
				this.visualElement.projection &&
				!this.visualElement.projection.layout
					? this.visualElement.projection.measure(!1)
					: this.visualElement.projection?.layout,
			s = this.constraints
		;(e && mt(e)
			? this.constraints ||
				(this.constraints = this.resolveRefConstraints())
			: e && n
				? (this.constraints = gl(n.layoutBox, e))
				: (this.constraints = !1),
			(this.elastic = vl(i)),
			s !== this.constraints &&
				n &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				Q((r) => {
					this.constraints !== !1 &&
						this.getAxisMotionValue(r) &&
						(this.constraints[r] = Cl(
							n.layoutBox[r],
							this.constraints[r]
						))
				}))
	}
	resolveRefConstraints() {
		const { dragConstraints: e, onMeasureDragConstraints: i } =
			this.getProps()
		if (!e || !mt(e)) return !1
		const n = e.current,
			{ projection: s } = this.visualElement
		if (!s || !s.layout) return !1
		const r = Sc(n, s.root, this.visualElement.getTransformPagePoint())
		let o = Kl(s.layout.layoutBox, r)
		if (i) {
			const a = i(xc(o))
			;((this.hasMutatedConstraints = !!a), a && (o = io(a)))
		}
		return o
	}
	startAnimation(e) {
		const {
				drag: i,
				dragMomentum: n,
				dragElastic: s,
				dragTransition: r,
				dragSnapToOrigin: o,
				onDragTransitionEnd: a
			} = this.getProps(),
			c = this.constraints || {},
			u = Q((l) => {
				if (!_t(l, i, this.currentDirection)) return
				let h = (c && c[l]) || {}
				o && (h = { min: 0, max: 0 })
				const f = s ? 200 : 1e6,
					A = s ? 40 : 1e7,
					m = {
						type: "inertia",
						velocity: n ? e[l] : 0,
						bounceStiffness: f,
						bounceDamping: A,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...r,
						...h
					}
				return this.startAxisValueAnimation(l, m)
			})
		return Promise.all(u).then(a)
	}
	startAxisValueAnimation(e, i) {
		const n = this.getAxisMotionValue(e)
		return (
			He(this.visualElement, e),
			n.start(Mi(e, n, 0, i, this.visualElement, !1))
		)
	}
	stopAnimation() {
		Q((e) => this.getAxisMotionValue(e).stop())
	}
	pauseAnimation() {
		Q((e) => this.getAxisMotionValue(e).animation?.pause())
	}
	getAnimationState(e) {
		return this.getAxisMotionValue(e).animation?.state
	}
	getAxisMotionValue(e) {
		const i = `_drag${e.toUpperCase()}`,
			n = this.visualElement.getProps(),
			s = n[i]
		return (
			s ||
			this.visualElement.getValue(
				e,
				(n.initial ? n.initial[e] : void 0) || 0
			)
		)
	}
	snapToCursor(e) {
		Q((i) => {
			const { drag: n } = this.getProps()
			if (!_t(i, n, this.currentDirection)) return
			const { projection: s } = this.visualElement,
				r = this.getAxisMotionValue(i)
			if (s && s.layout) {
				const { min: o, max: a } = s.layout.layoutBox[i]
				r.set(e[i] - b(o, a, 0.5))
			}
		})
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return
		const { drag: e, dragConstraints: i } = this.getProps(),
			{ projection: n } = this.visualElement
		if (!mt(i) || !n || !this.constraints) return
		this.stopAnimation()
		const s = { x: 0, y: 0 }
		Q((o) => {
			const a = this.getAxisMotionValue(o)
			if (a && this.constraints !== !1) {
				const c = a.get()
				s[o] = yl({ min: c, max: c }, this.constraints[o])
			}
		})
		const { transformTemplate: r } = this.visualElement.getProps()
		;((this.visualElement.current.style.transform = r ? r({}, "") : "none"),
			n.root && n.root.updateScroll(),
			n.updateLayout(),
			this.resolveConstraints(),
			Q((o) => {
				if (!_t(o, e, null)) return
				const a = this.getAxisMotionValue(o),
					{ min: c, max: u } = this.constraints[o]
				a.set(b(c, u, s[o]))
			}))
	}
	addListeners() {
		if (!this.visualElement.current) return
		xl.set(this.visualElement, this)
		const e = this.visualElement.current,
			i = jt(e, "pointerdown", (c) => {
				const { drag: u, dragListener: l = !0 } = this.getProps()
				u && l && this.start(c)
			}),
			n = () => {
				const { dragConstraints: c } = this.getProps()
				mt(c) &&
					c.current &&
					(this.constraints = this.resolveRefConstraints())
			},
			{ projection: s } = this.visualElement,
			r = s.addEventListener("measure", n)
		;(s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
			M.read(n))
		const o = Qt(window, "resize", () =>
				this.scalePositionWithinConstraints()
			),
			a = s.addEventListener(
				"didUpdate",
				({ delta: c, hasLayoutChanged: u }) => {
					this.isDragging &&
						u &&
						(Q((l) => {
							const h = this.getAxisMotionValue(l)
							h &&
								((this.originPoint[l] += c[l].translate),
								h.set(h.get() + c[l].translate))
						}),
						this.visualElement.render())
				}
			)
		return () => {
			;(o(), i(), r(), a && a())
		}
	}
	getProps() {
		const e = this.visualElement.getProps(),
			{
				drag: i = !1,
				dragDirectionLock: n = !1,
				dragPropagation: s = !1,
				dragConstraints: r = !1,
				dragElastic: o = Je,
				dragMomentum: a = !0
			} = e
		return {
			...e,
			drag: i,
			dragDirectionLock: n,
			dragPropagation: s,
			dragConstraints: r,
			dragElastic: o,
			dragMomentum: a
		}
	}
}
function _t(t, e, i) {
	return (e === !0 || e === t) && (i === null || i === t)
}
function wl(t, e = 10) {
	let i = null
	return (Math.abs(t.y) > e ? (i = "y") : Math.abs(t.x) > e && (i = "x"), i)
}
class Sl extends tt {
	constructor(e) {
		;(super(e),
			(this.removeGroupControls = Y),
			(this.removeListeners = Y),
			(this.controls = new Tl(e)))
	}
	mount() {
		const { dragControls: e } = this.node.getProps()
		;(e && (this.removeGroupControls = e.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || Y))
	}
	unmount() {
		;(this.removeGroupControls(), this.removeListeners())
	}
}
const xn = (t) => (e, i) => {
	t && M.postRender(() => t(e, i))
}
class El extends tt {
	constructor() {
		;(super(...arguments), (this.removePointerDownListener = Y))
	}
	onPointerDown(e) {
		this.session = new yo(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: Ko(this.node)
		})
	}
	createPanHandlers() {
		const {
			onPanSessionStart: e,
			onPanStart: i,
			onPan: n,
			onPanEnd: s
		} = this.node.getProps()
		return {
			onSessionStart: xn(e),
			onStart: xn(i),
			onMove: n,
			onEnd: (r, o) => {
				;(delete this.session, s && M.postRender(() => s(r, o)))
			}
		}
	}
	mount() {
		this.removePointerDownListener = jt(
			this.node.current,
			"pointerdown",
			(e) => this.onPointerDown(e)
		)
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers())
	}
	unmount() {
		;(this.removePointerDownListener(), this.session && this.session.end())
	}
}
const te = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
function Tn(t, e) {
	return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100
}
const Et = {
		correct: (t, e) => {
			if (!e.target) return t
			if (typeof t == "string")
				if (T.test(t)) t = parseFloat(t)
				else return t
			const i = Tn(t, e.target.x),
				n = Tn(t, e.target.y)
			return `${i}% ${n}%`
		}
	},
	Pl = {
		correct: (t, { treeScale: e, projectionDelta: i }) => {
			const n = t,
				s = Z.parse(t)
			if (s.length > 5) return n
			const r = Z.createTransformer(t),
				o = typeof s[0] != "number" ? 1 : 0,
				a = i.x.scale * e.x,
				c = i.y.scale * e.y
			;((s[0 + o] /= a), (s[1 + o] /= c))
			const u = b(a, c, 0.5)
			return (
				typeof s[2 + o] == "number" && (s[2 + o] /= u),
				typeof s[3 + o] == "number" && (s[3 + o] /= u),
				r(s)
			)
		}
	}
let ye = !1
class Ml extends v.Component {
	componentDidMount() {
		const {
				visualElement: e,
				layoutGroup: i,
				switchLayoutGroup: n,
				layoutId: s
			} = this.props,
			{ projection: r } = e
		;(_a(bl),
			r &&
				(i.group && i.group.add(r),
				n && n.register && s && n.register(r),
				ye && r.root.didUpdate(),
				r.addEventListener("animationComplete", () => {
					this.safeToRemove()
				}),
				r.setOptions({
					...r.options,
					onExitComplete: () => this.safeToRemove()
				})),
			(te.hasEverUpdated = !0))
	}
	getSnapshotBeforeUpdate(e) {
		const {
				layoutDependency: i,
				visualElement: n,
				drag: s,
				isPresent: r
			} = this.props,
			{ projection: o } = n
		return (
			o &&
				((o.isPresent = r),
				(ye = !0),
				s ||
				e.layoutDependency !== i ||
				i === void 0 ||
				e.isPresent !== r
					? o.willUpdate()
					: this.safeToRemove(),
				e.isPresent !== r &&
					(r
						? o.promote()
						: o.relegate() ||
							M.postRender(() => {
								const a = o.getStack()
								;(!a || !a.members.length) &&
									this.safeToRemove()
							}))),
			null
		)
	}
	componentDidUpdate() {
		const { projection: e } = this.props.visualElement
		e &&
			(e.root.didUpdate(),
			Ki.postRender(() => {
				!e.currentAnimation && e.isLead() && this.safeToRemove()
			}))
	}
	componentWillUnmount() {
		const {
				visualElement: e,
				layoutGroup: i,
				switchLayoutGroup: n
			} = this.props,
			{ projection: s } = e
		;((ye = !0),
			s &&
				(s.scheduleCheckAfterUnmount(),
				i && i.group && i.group.remove(s),
				n && n.deregister && n.deregister(s)))
	}
	safeToRemove() {
		const { safeToRemove: e } = this.props
		e && e()
	}
	render() {
		return null
	}
}
function vo(t) {
	const [e, i] = Ga(),
		n = v.useContext(qn)
	return d.jsx(Ml, {
		...t,
		layoutGroup: n,
		switchLayoutGroup: v.useContext(to),
		isPresent: e,
		safeToRemove: i
	})
}
const bl = {
	borderRadius: {
		...Et,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: Et,
	borderTopRightRadius: Et,
	borderBottomLeftRadius: Et,
	borderBottomRightRadius: Et,
	boxShadow: Pl
}
function Vl(t, e, i) {
	const n = R(t) ? t : Ct(t)
	return (n.start(Mi("", n, e, i)), n.animation)
}
const Dl = (t, e) => t.depth - e.depth
class jl {
	constructor() {
		;((this.children = []), (this.isDirty = !1))
	}
	add(e) {
		;($e(this.children, e), (this.isDirty = !0))
	}
	remove(e) {
		;(ti(this.children, e), (this.isDirty = !0))
	}
	forEach(e) {
		;(this.isDirty && this.children.sort(Dl),
			(this.isDirty = !1),
			this.children.forEach(e))
	}
}
function Bl(t, e) {
	const i = F.now(),
		n = ({ timestamp: s }) => {
			const r = s - i
			r >= e && (q(n), t(r - e))
		}
	return (M.setup(n, !0), () => q(n))
}
const xo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
	Il = xo.length,
	wn = (t) => (typeof t == "string" ? parseFloat(t) : t),
	Sn = (t) => typeof t == "number" || T.test(t)
function Rl(t, e, i, n, s, r) {
	s
		? ((t.opacity = b(0, i.opacity ?? 1, Ll(n))),
			(t.opacityExit = b(e.opacity ?? 1, 0, kl(n))))
		: r && (t.opacity = b(e.opacity ?? 1, i.opacity ?? 1, n))
	for (let o = 0; o < Il; o++) {
		const a = `border${xo[o]}Radius`
		let c = En(e, a),
			u = En(i, a)
		if (c === void 0 && u === void 0) continue
		;(c || (c = 0),
			u || (u = 0),
			c === 0 || u === 0 || Sn(c) === Sn(u)
				? ((t[a] = Math.max(b(wn(c), wn(u), n), 0)),
					(z.test(u) || z.test(c)) && (t[a] += "%"))
				: (t[a] = u))
	}
	;(e.rotate || i.rotate) && (t.rotate = b(e.rotate || 0, i.rotate || 0, n))
}
function En(t, e) {
	return t[e] !== void 0 ? t[e] : t.borderRadius
}
const Ll = To(0, 0.5, cs),
	kl = To(0.5, 0.95, Y)
function To(t, e, i) {
	return (n) => (n < t ? 0 : n > e ? 1 : i(kt(t, e, n)))
}
function Pn(t, e) {
	;((t.min = e.min), (t.max = e.max))
}
function U(t, e) {
	;(Pn(t.x, e.x), Pn(t.y, e.y))
}
function Mn(t, e) {
	;((t.translate = e.translate),
		(t.scale = e.scale),
		(t.originPoint = e.originPoint),
		(t.origin = e.origin))
}
function bn(t, e, i, n, s) {
	return (
		(t -= e),
		(t = oe(t, 1 / i, n)),
		s !== void 0 && (t = oe(t, 1 / s, n)),
		t
	)
}
function Fl(t, e = 0, i = 1, n = 0.5, s, r = t, o = t) {
	if (
		(z.test(e) &&
			((e = parseFloat(e)), (e = b(o.min, o.max, e / 100) - o.min)),
		typeof e != "number")
	)
		return
	let a = b(r.min, r.max, n)
	;(t === r && (a -= e),
		(t.min = bn(t.min, e, i, a, s)),
		(t.max = bn(t.max, e, i, a, s)))
}
function Vn(t, e, [i, n, s], r, o) {
	Fl(t, e[i], e[n], e[s], e.scale, r, o)
}
const Nl = ["x", "scaleX", "originX"],
	Ol = ["y", "scaleY", "originY"]
function Dn(t, e, i, n) {
	;(Vn(t.x, e, Nl, i ? i.x : void 0, n ? n.x : void 0),
		Vn(t.y, e, Ol, i ? i.y : void 0, n ? n.y : void 0))
}
function jn(t) {
	return t.translate === 0 && t.scale === 1
}
function wo(t) {
	return jn(t.x) && jn(t.y)
}
function Bn(t, e) {
	return t.min === e.min && t.max === e.max
}
function Ul(t, e) {
	return Bn(t.x, e.x) && Bn(t.y, e.y)
}
function In(t, e) {
	return (
		Math.round(t.min) === Math.round(e.min) &&
		Math.round(t.max) === Math.round(e.max)
	)
}
function So(t, e) {
	return In(t.x, e.x) && In(t.y, e.y)
}
function Rn(t) {
	return L(t.x) / L(t.y)
}
function Ln(t, e) {
	return (
		t.translate === e.translate &&
		t.scale === e.scale &&
		t.originPoint === e.originPoint
	)
}
class Ql {
	constructor() {
		this.members = []
	}
	add(e) {
		;($e(this.members, e), e.scheduleRender())
	}
	remove(e) {
		if (
			(ti(this.members, e),
			e === this.prevLead && (this.prevLead = void 0),
			e === this.lead)
		) {
			const i = this.members[this.members.length - 1]
			i && this.promote(i)
		}
	}
	relegate(e) {
		const i = this.members.findIndex((s) => e === s)
		if (i === 0) return !1
		let n
		for (let s = i; s >= 0; s--) {
			const r = this.members[s]
			if (r.isPresent !== !1) {
				n = r
				break
			}
		}
		return n ? (this.promote(n), !0) : !1
	}
	promote(e, i) {
		const n = this.lead
		if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
			;(n.instance && n.scheduleRender(),
				e.scheduleRender(),
				(e.resumeFrom = n),
				i && (e.resumeFrom.preserveOpacity = !0),
				n.snapshot &&
					((e.snapshot = n.snapshot),
					(e.snapshot.latestValues =
						n.animationValues || n.latestValues)),
				e.root && e.root.isUpdating && (e.isLayoutDirty = !0))
			const { crossfade: s } = e.options
			s === !1 && n.hide()
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			const { options: i, resumingFrom: n } = e
			;(i.onExitComplete && i.onExitComplete(),
				n && n.options.onExitComplete && n.options.onExitComplete())
		})
	}
	scheduleRender() {
		this.members.forEach((e) => {
			e.instance && e.scheduleRender(!1)
		})
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
	}
}
function Gl(t, e, i) {
	let n = ""
	const s = t.x.translate / e.x,
		r = t.y.translate / e.y,
		o = i?.z || 0
	if (
		((s || r || o) && (n = `translate3d(${s}px, ${r}px, ${o}px) `),
		(e.x !== 1 || e.y !== 1) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
		i)
	) {
		const {
			transformPerspective: u,
			rotate: l,
			rotateX: h,
			rotateY: f,
			skewX: A,
			skewY: m
		} = i
		;(u && (n = `perspective(${u}px) ${n}`),
			l && (n += `rotate(${l}deg) `),
			h && (n += `rotateX(${h}deg) `),
			f && (n += `rotateY(${f}deg) `),
			A && (n += `skewX(${A}deg) `),
			m && (n += `skewY(${m}deg) `))
	}
	const a = t.x.scale * e.x,
		c = t.y.scale * e.y
	return ((a !== 1 || c !== 1) && (n += `scale(${a}, ${c})`), n || "none")
}
const Ce = ["", "X", "Y", "Z"],
	Yl = 1e3
let Wl = 0
function ve(t, e, i, n) {
	const { latestValues: s } = e
	s[t] && ((i[t] = s[t]), e.setStaticValue(t, 0), n && (n[t] = 0))
}
function Eo(t) {
	if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return
	const { visualElement: e } = t.options
	if (!e) return
	const i = uo(e)
	if (window.MotionHasOptimisedAnimation(i, "transform")) {
		const { layout: s, layoutId: r } = t.options
		window.MotionCancelOptimisedAnimation(i, "transform", M, !(s || r))
	}
	const { parent: n } = t
	n && !n.hasCheckedOptimisedAppear && Eo(n)
}
function Po({
	attachResizeListener: t,
	defaultParent: e,
	measureScroll: i,
	checkIsScrollRoot: n,
	resetTransform: s
}) {
	return class {
		constructor(o = {}, a = e?.()) {
			;((this.id = Wl++),
				(this.animationId = 0),
				(this.animationCommitId = 0),
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
					this.isUpdating &&
						((this.isUpdating = !1), this.clearAllSnapshots())
				}),
				(this.updateProjection = () => {
					;((this.projectionUpdateScheduled = !1),
						this.nodes.forEach(Jl),
						this.nodes.forEach(Zl),
						this.nodes.forEach($l),
						this.nodes.forEach(Xl))
				}),
				(this.resolvedRelativeTargetAt = 0),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.latestValues = o),
				(this.root = a ? a.root || a : this),
				(this.path = a ? [...a.path, a] : []),
				(this.parent = a),
				(this.depth = a ? a.depth + 1 : 0))
			for (let c = 0; c < this.path.length; c++)
				this.path[c].shouldResetTransform = !0
			this.root === this && (this.nodes = new jl())
		}
		addEventListener(o, a) {
			return (
				this.eventHandlers.has(o) ||
					this.eventHandlers.set(o, new ni()),
				this.eventHandlers.get(o).add(a)
			)
		}
		notifyListeners(o, ...a) {
			const c = this.eventHandlers.get(o)
			c && c.notify(...a)
		}
		hasListeners(o) {
			return this.eventHandlers.has(o)
		}
		mount(o) {
			if (this.instance) return
			;((this.isSVG = Us(o) && !Oa(o)), (this.instance = o))
			const { layoutId: a, layout: c, visualElement: u } = this.options
			if (
				(u && !u.current && u.mount(o),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				this.root.hasTreeAnimated &&
					(c || a) &&
					(this.isLayoutDirty = !0),
				t)
			) {
				let l,
					h = 0
				const f = () => (this.root.updateBlockedByResize = !1)
				;(M.read(() => {
					h = window.innerWidth
				}),
					t(o, () => {
						const A = window.innerWidth
						A !== h &&
							((h = A),
							(this.root.updateBlockedByResize = !0),
							l && l(),
							(l = Bl(f, 250)),
							te.hasAnimatedSinceResize &&
								((te.hasAnimatedSinceResize = !1),
								this.nodes.forEach(Nn)))
					}))
			}
			;(a && this.root.registerSharedNode(a, this),
				this.options.animate !== !1 &&
					u &&
					(a || c) &&
					this.addEventListener(
						"didUpdate",
						({
							delta: l,
							hasLayoutChanged: h,
							hasRelativeLayoutChanged: f,
							layout: A
						}) => {
							if (this.isTreeAnimationBlocked()) {
								;((this.target = void 0),
									(this.relativeTarget = void 0))
								return
							}
							const m =
									this.options.transition ||
									u.getDefaultTransition() ||
									su,
								{
									onLayoutAnimationStart: C,
									onLayoutAnimationComplete: K
								} = u.getProps(),
								p =
									!this.targetLayout ||
									!So(this.targetLayout, A),
								y = !h && f
							if (
								this.options.layoutRoot ||
								this.resumeFrom ||
								y ||
								(h && (p || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0))
								const g = {
									...pi(m, "layout"),
									onPlay: C,
									onComplete: K
								}
								;((u.shouldReduceMotion ||
									this.options.layoutRoot) &&
									((g.delay = 0), (g.type = !1)),
									this.startAnimation(g),
									this.setAnimationOrigin(l, y))
							} else
								(h || Nn(this),
									this.isLead() &&
										this.options.onExitComplete &&
										this.options.onExitComplete())
							this.targetLayout = A
						}
					))
		}
		unmount() {
			;(this.options.layoutId && this.willUpdate(),
				this.root.nodes.remove(this))
			const o = this.getStack()
			;(o && o.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				this.eventHandlers.clear(),
				q(this.updateProjection))
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize
		}
		isTreeAnimationBlocked() {
			return (
				this.isAnimationBlocked ||
				(this.parent && this.parent.isTreeAnimationBlocked()) ||
				!1
			)
		}
		startUpdate() {
			this.isUpdateBlocked() ||
				((this.isUpdating = !0),
				this.nodes && this.nodes.forEach(tu),
				this.animationId++)
		}
		getTransformTemplate() {
			const { visualElement: o } = this.options
			return o && o.getProps().transformTemplate
		}
		willUpdate(o = !0) {
			if (
				((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
			) {
				this.options.onExitComplete && this.options.onExitComplete()
				return
			}
			if (
				(window.MotionCancelOptimisedAnimation &&
					!this.hasCheckedOptimisedAppear &&
					Eo(this),
				!this.root.isUpdating && this.root.startUpdate(),
				this.isLayoutDirty)
			)
				return
			this.isLayoutDirty = !0
			for (let l = 0; l < this.path.length; l++) {
				const h = this.path[l]
				;((h.shouldResetTransform = !0),
					h.updateScroll("snapshot"),
					h.options.layoutRoot && h.willUpdate(!1))
			}
			const { layoutId: a, layout: c } = this.options
			if (a === void 0 && !c) return
			const u = this.getTransformTemplate()
			;((this.prevTransformTemplateValue = u
				? u(this.latestValues, "")
				: void 0),
				this.updateSnapshot(),
				o && this.notifyListeners("willUpdate"))
		}
		update() {
			if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
				;(this.unblockUpdate(),
					this.clearAllSnapshots(),
					this.nodes.forEach(kn))
				return
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(Fn)
				return
			}
			;((this.animationCommitId = this.animationId),
				this.isUpdating
					? ((this.isUpdating = !1),
						this.nodes.forEach(ql),
						this.nodes.forEach(Hl),
						this.nodes.forEach(zl))
					: this.nodes.forEach(Fn),
				this.clearAllSnapshots())
			const a = F.now()
			;((I.delta = J(0, 1e3 / 60, a - I.timestamp)),
				(I.timestamp = a),
				(I.isProcessing = !0),
				le.update.process(I),
				le.preRender.process(I),
				le.render.process(I),
				(I.isProcessing = !1))
		}
		didUpdate() {
			this.updateScheduled ||
				((this.updateScheduled = !0), Ki.read(this.scheduleUpdate))
		}
		clearAllSnapshots() {
			;(this.nodes.forEach(_l), this.sharedNodes.forEach(eu))
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled ||
				((this.projectionUpdateScheduled = !0),
				M.preRender(this.updateProjection, !1, !0))
		}
		scheduleCheckAfterUnmount() {
			M.postRender(() => {
				this.isLayoutDirty
					? this.root.didUpdate()
					: this.root.checkUpdateFailed()
			})
		}
		updateSnapshot() {
			this.snapshot ||
				!this.instance ||
				((this.snapshot = this.measure()),
				this.snapshot &&
					!L(this.snapshot.measuredBox.x) &&
					!L(this.snapshot.measuredBox.y) &&
					(this.snapshot = void 0))
		}
		updateLayout() {
			if (
				!this.instance ||
				(this.updateScroll(),
				!(this.options.alwaysMeasureLayout && this.isLead()) &&
					!this.isLayoutDirty)
			)
				return
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let c = 0; c < this.path.length; c++)
					this.path[c].updateScroll()
			const o = this.layout
			;((this.layout = this.measure(!1)),
				(this.layoutCorrected = D()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners("measure", this.layout.layoutBox))
			const { visualElement: a } = this.options
			a &&
				a.notify(
					"LayoutMeasure",
					this.layout.layoutBox,
					o ? o.layoutBox : void 0
				)
		}
		updateScroll(o = "measure") {
			let a = !!(this.options.layoutScroll && this.instance)
			if (
				(this.scroll &&
					this.scroll.animationId === this.root.animationId &&
					this.scroll.phase === o &&
					(a = !1),
				a && this.instance)
			) {
				const c = n(this.instance)
				this.scroll = {
					animationId: this.root.animationId,
					phase: o,
					isRoot: c,
					offset: i(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : c
				}
			}
		}
		resetTransform() {
			if (!s) return
			const o =
					this.isLayoutDirty ||
					this.shouldResetTransform ||
					this.options.alwaysMeasureLayout,
				a = this.projectionDelta && !wo(this.projectionDelta),
				c = this.getTransformTemplate(),
				u = c ? c(this.latestValues, "") : void 0,
				l = u !== this.prevTransformTemplateValue
			o &&
				this.instance &&
				(a || nt(this.latestValues) || l) &&
				(s(this.instance, u),
				(this.shouldResetTransform = !1),
				this.scheduleRender())
		}
		measure(o = !0) {
			const a = this.measurePageBox()
			let c = this.removeElementScroll(a)
			return (
				o && (c = this.removeTransform(c)),
				ou(c),
				{
					animationId: this.root.animationId,
					measuredBox: a,
					layoutBox: c,
					latestValues: {},
					source: this.id
				}
			)
		}
		measurePageBox() {
			const { visualElement: o } = this.options
			if (!o) return D()
			const a = o.measureViewportBox()
			if (!(this.scroll?.wasRoot || this.path.some(ru))) {
				const { scroll: u } = this.root
				u && (pt(a.x, u.offset.x), pt(a.y, u.offset.y))
			}
			return a
		}
		removeElementScroll(o) {
			const a = D()
			if ((U(a, o), this.scroll?.wasRoot)) return a
			for (let c = 0; c < this.path.length; c++) {
				const u = this.path[c],
					{ scroll: l, options: h } = u
				u !== this.root &&
					l &&
					h.layoutScroll &&
					(l.wasRoot && U(a, o),
					pt(a.x, l.offset.x),
					pt(a.y, l.offset.y))
			}
			return a
		}
		applyTransform(o, a = !1) {
			const c = D()
			U(c, o)
			for (let u = 0; u < this.path.length; u++) {
				const l = this.path[u]
				;(!a &&
					l.options.layoutScroll &&
					l.scroll &&
					l !== l.root &&
					gt(c, { x: -l.scroll.offset.x, y: -l.scroll.offset.y }),
					nt(l.latestValues) && gt(c, l.latestValues))
			}
			return (nt(this.latestValues) && gt(c, this.latestValues), c)
		}
		removeTransform(o) {
			const a = D()
			U(a, o)
			for (let c = 0; c < this.path.length; c++) {
				const u = this.path[c]
				if (!u.instance || !nt(u.latestValues)) continue
				Qe(u.latestValues) && u.updateSnapshot()
				const l = D(),
					h = u.measurePageBox()
				;(U(l, h),
					Dn(
						a,
						u.latestValues,
						u.snapshot ? u.snapshot.layoutBox : void 0,
						l
					))
			}
			return (nt(this.latestValues) && Dn(a, this.latestValues), a)
		}
		setTargetDelta(o) {
			;((this.targetDelta = o),
				this.root.scheduleUpdateProjection(),
				(this.isProjectionDirty = !0))
		}
		setOptions(o) {
			this.options = {
				...this.options,
				...o,
				crossfade: o.crossfade !== void 0 ? o.crossfade : !0
			}
		}
		clearMeasurements() {
			;((this.scroll = void 0),
				(this.layout = void 0),
				(this.snapshot = void 0),
				(this.prevTransformTemplateValue = void 0),
				(this.targetDelta = void 0),
				(this.target = void 0),
				(this.isLayoutDirty = !1))
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent &&
				this.relativeParent.resolvedRelativeTargetAt !== I.timestamp &&
				this.relativeParent.resolveTargetDelta(!0)
		}
		resolveTargetDelta(o = !1) {
			const a = this.getLead()
			;(this.isProjectionDirty ||
				(this.isProjectionDirty = a.isProjectionDirty),
				this.isTransformDirty ||
					(this.isTransformDirty = a.isTransformDirty),
				this.isSharedProjectionDirty ||
					(this.isSharedProjectionDirty = a.isSharedProjectionDirty))
			const c = !!this.resumingFrom || this !== a
			if (
				!(
					o ||
					(c && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					this.parent?.isProjectionDirty ||
					this.attemptToResolveRelativeTarget ||
					this.root.updateBlockedByResize
				)
			)
				return
			const { layout: l, layoutId: h } = this.options
			if (!(!this.layout || !(l || h))) {
				if (
					((this.resolvedRelativeTargetAt = I.timestamp),
					!this.targetDelta && !this.relativeTarget)
				) {
					const f = this.getClosestProjectingParent()
					f && f.layout && this.animationProgress !== 1
						? ((this.relativeParent = f),
							this.forceRelativeParentToResolveTarget(),
							(this.relativeTarget = D()),
							(this.relativeTargetOrigin = D()),
							It(
								this.relativeTargetOrigin,
								this.layout.layoutBox,
								f.layout.layoutBox
							),
							U(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0)
				}
				if (
					!(!this.relativeTarget && !this.targetDelta) &&
					(this.target ||
						((this.target = D()),
						(this.targetWithTransforms = D())),
					this.relativeTarget &&
					this.relativeTargetOrigin &&
					this.relativeParent &&
					this.relativeParent.target
						? (this.forceRelativeParentToResolveTarget(),
							fl(
								this.target,
								this.relativeTarget,
								this.relativeParent.target
							))
						: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(
											this.layout.layoutBox
										))
									: U(this.target, this.layout.layoutBox),
								so(this.target, this.targetDelta))
							: U(this.target, this.layout.layoutBox),
					this.attemptToResolveRelativeTarget)
				) {
					this.attemptToResolveRelativeTarget = !1
					const f = this.getClosestProjectingParent()
					f &&
					!!f.resumingFrom == !!this.resumingFrom &&
					!f.options.layoutScroll &&
					f.target &&
					this.animationProgress !== 1
						? ((this.relativeParent = f),
							this.forceRelativeParentToResolveTarget(),
							(this.relativeTarget = D()),
							(this.relativeTargetOrigin = D()),
							It(
								this.relativeTargetOrigin,
								this.target,
								f.target
							),
							U(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0)
				}
			}
		}
		getClosestProjectingParent() {
			if (
				!(
					!this.parent ||
					Qe(this.parent.latestValues) ||
					no(this.parent.latestValues)
				)
			)
				return this.parent.isProjecting()
					? this.parent
					: this.parent.getClosestProjectingParent()
		}
		isProjecting() {
			return !!(
				(this.relativeTarget ||
					this.targetDelta ||
					this.options.layoutRoot) &&
				this.layout
			)
		}
		calcProjection() {
			const o = this.getLead(),
				a = !!this.resumingFrom || this !== o
			let c = !0
			if (
				((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
					(c = !1),
				a &&
					(this.isSharedProjectionDirty || this.isTransformDirty) &&
					(c = !1),
				this.resolvedRelativeTargetAt === I.timestamp && (c = !1),
				c)
			)
				return
			const { layout: u, layoutId: l } = this.options
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating ||
					(this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(u || l))
			)
				return
			U(this.layoutCorrected, this.layout.layoutBox)
			const h = this.treeScale.x,
				f = this.treeScale.y
			;(wc(this.layoutCorrected, this.treeScale, this.path, a),
				o.layout &&
					!o.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					((o.target = o.layout.layoutBox),
					(o.targetWithTransforms = D())))
			const { target: A } = o
			if (!A) {
				this.prevProjectionDelta &&
					(this.createProjectionDeltas(), this.scheduleRender())
				return
			}
			;(!this.projectionDelta || !this.prevProjectionDelta
				? this.createProjectionDeltas()
				: (Mn(this.prevProjectionDelta.x, this.projectionDelta.x),
					Mn(this.prevProjectionDelta.y, this.projectionDelta.y)),
				Bt(
					this.projectionDelta,
					this.layoutCorrected,
					A,
					this.latestValues
				),
				(this.treeScale.x !== h ||
					this.treeScale.y !== f ||
					!Ln(this.projectionDelta.x, this.prevProjectionDelta.x) ||
					!Ln(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners("projectionUpdate", A)))
		}
		hide() {
			this.isVisible = !1
		}
		show() {
			this.isVisible = !0
		}
		scheduleRender(o = !0) {
			if ((this.options.visualElement?.scheduleRender(), o)) {
				const a = this.getStack()
				a && a.scheduleRender()
			}
			this.resumingFrom &&
				!this.resumingFrom.instance &&
				(this.resumingFrom = void 0)
		}
		createProjectionDeltas() {
			;((this.prevProjectionDelta = Kt()),
				(this.projectionDelta = Kt()),
				(this.projectionDeltaWithTransform = Kt()))
		}
		setAnimationOrigin(o, a = !1) {
			const c = this.snapshot,
				u = c ? c.latestValues : {},
				l = { ...this.latestValues },
				h = Kt()
			;((!this.relativeParent ||
				!this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !a))
			const f = D(),
				A = c ? c.source : void 0,
				m = this.layout ? this.layout.source : void 0,
				C = A !== m,
				K = this.getStack(),
				p = !K || K.members.length <= 1,
				y = !!(
					C &&
					!p &&
					this.options.crossfade === !0 &&
					!this.path.some(nu)
				)
			this.animationProgress = 0
			let g
			;((this.mixTargetDelta = (w) => {
				const x = w / 1e3
				;(On(h.x, o.x, x),
					On(h.y, o.y, x),
					this.setTargetDelta(h),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						(It(
							f,
							this.layout.layoutBox,
							this.relativeParent.layout.layoutBox
						),
						iu(
							this.relativeTarget,
							this.relativeTargetOrigin,
							f,
							x
						),
						g &&
							Ul(this.relativeTarget, g) &&
							(this.isProjectionDirty = !1),
						g || (g = D()),
						U(g, this.relativeTarget)),
					C &&
						((this.animationValues = l),
						Rl(l, u, this.latestValues, x, y, p)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = x))
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0))
		}
		startAnimation(o) {
			;(this.notifyListeners("animationStart"),
				this.currentAnimation?.stop(),
				this.resumingFrom?.currentAnimation?.stop(),
				this.pendingAnimation &&
					(q(this.pendingAnimation),
					(this.pendingAnimation = void 0)),
				(this.pendingAnimation = M.update(() => {
					;((te.hasAnimatedSinceResize = !0),
						this.motionValue || (this.motionValue = Ct(0)),
						(this.currentAnimation = Vl(
							this.motionValue,
							[0, 1e3],
							{
								...o,
								velocity: 0,
								isSync: !0,
								onUpdate: (a) => {
									;(this.mixTargetDelta(a),
										o.onUpdate && o.onUpdate(a))
								},
								onStop: () => {},
								onComplete: () => {
									;(o.onComplete && o.onComplete(),
										this.completeAnimation())
								}
							}
						)),
						this.resumingFrom &&
							(this.resumingFrom.currentAnimation =
								this.currentAnimation),
						(this.pendingAnimation = void 0))
				})))
		}
		completeAnimation() {
			this.resumingFrom &&
				((this.resumingFrom.currentAnimation = void 0),
				(this.resumingFrom.preserveOpacity = void 0))
			const o = this.getStack()
			;(o && o.exitAnimationComplete(),
				(this.resumingFrom =
					this.currentAnimation =
					this.animationValues =
						void 0),
				this.notifyListeners("animationComplete"))
		}
		finishAnimation() {
			;(this.currentAnimation &&
				(this.mixTargetDelta && this.mixTargetDelta(Yl),
				this.currentAnimation.stop()),
				this.completeAnimation())
		}
		applyTransformsToTarget() {
			const o = this.getLead()
			let {
				targetWithTransforms: a,
				target: c,
				layout: u,
				latestValues: l
			} = o
			if (!(!a || !c || !u)) {
				if (
					this !== o &&
					this.layout &&
					u &&
					Mo(
						this.options.animationType,
						this.layout.layoutBox,
						u.layoutBox
					)
				) {
					c = this.target || D()
					const h = L(this.layout.layoutBox.x)
					;((c.x.min = o.target.x.min), (c.x.max = c.x.min + h))
					const f = L(this.layout.layoutBox.y)
					;((c.y.min = o.target.y.min), (c.y.max = c.y.min + f))
				}
				;(U(a, c),
					gt(a, l),
					Bt(
						this.projectionDeltaWithTransform,
						this.layoutCorrected,
						a,
						l
					))
			}
		}
		registerSharedNode(o, a) {
			;(this.sharedNodes.has(o) || this.sharedNodes.set(o, new Ql()),
				this.sharedNodes.get(o).add(a))
			const u = a.options.initialPromotionConfig
			a.promote({
				transition: u ? u.transition : void 0,
				preserveFollowOpacity:
					u && u.shouldPreserveFollowOpacity
						? u.shouldPreserveFollowOpacity(a)
						: void 0
			})
		}
		isLead() {
			const o = this.getStack()
			return o ? o.lead === this : !0
		}
		getLead() {
			const { layoutId: o } = this.options
			return o ? this.getStack()?.lead || this : this
		}
		getPrevLead() {
			const { layoutId: o } = this.options
			return o ? this.getStack()?.prevLead : void 0
		}
		getStack() {
			const { layoutId: o } = this.options
			if (o) return this.root.sharedNodes.get(o)
		}
		promote({
			needsReset: o,
			transition: a,
			preserveFollowOpacity: c
		} = {}) {
			const u = this.getStack()
			;(u && u.promote(this, c),
				o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				a && this.setOptions({ transition: a }))
		}
		relegate() {
			const o = this.getStack()
			return o ? o.relegate(this) : !1
		}
		resetSkewAndRotation() {
			const { visualElement: o } = this.options
			if (!o) return
			let a = !1
			const { latestValues: c } = o
			if (
				((c.z ||
					c.rotate ||
					c.rotateX ||
					c.rotateY ||
					c.rotateZ ||
					c.skewX ||
					c.skewY) &&
					(a = !0),
				!a)
			)
				return
			const u = {}
			c.z && ve("z", o, u, this.animationValues)
			for (let l = 0; l < Ce.length; l++)
				(ve(`rotate${Ce[l]}`, o, u, this.animationValues),
					ve(`skew${Ce[l]}`, o, u, this.animationValues))
			o.render()
			for (const l in u)
				(o.setStaticValue(l, u[l]),
					this.animationValues && (this.animationValues[l] = u[l]))
			o.scheduleRender()
		}
		applyProjectionStyles(o, a) {
			if (!this.instance || this.isSVG) return
			if (!this.isVisible) {
				o.visibility = "hidden"
				return
			}
			const c = this.getTransformTemplate()
			if (this.needsReset) {
				;((this.needsReset = !1),
					(o.visibility = ""),
					(o.opacity = ""),
					(o.pointerEvents = $t(a?.pointerEvents) || ""),
					(o.transform = c ? c(this.latestValues, "") : "none"))
				return
			}
			const u = this.getLead()
			if (!this.projectionDelta || !this.layout || !u.target) {
				;(this.options.layoutId &&
					((o.opacity =
						this.latestValues.opacity !== void 0
							? this.latestValues.opacity
							: 1),
					(o.pointerEvents = $t(a?.pointerEvents) || "")),
					this.hasProjected &&
						!nt(this.latestValues) &&
						((o.transform = c ? c({}, "") : "none"),
						(this.hasProjected = !1)))
				return
			}
			o.visibility = ""
			const l = u.animationValues || u.latestValues
			this.applyTransformsToTarget()
			let h = Gl(this.projectionDeltaWithTransform, this.treeScale, l)
			;(c && (h = c(l, h)), (o.transform = h))
			const { x: f, y: A } = this.projectionDelta
			;((o.transformOrigin = `${f.origin * 100}% ${A.origin * 100}% 0`),
				u.animationValues
					? (o.opacity =
							u === this
								? (l.opacity ?? this.latestValues.opacity ?? 1)
								: this.preserveOpacity
									? this.latestValues.opacity
									: l.opacityExit)
					: (o.opacity =
							u === this
								? l.opacity !== void 0
									? l.opacity
									: ""
								: l.opacityExit !== void 0
									? l.opacityExit
									: 0))
			for (const m in Ut) {
				if (l[m] === void 0) continue
				const { correct: C, applyTo: K, isCSSVariable: p } = Ut[m],
					y = h === "none" ? l[m] : C(l[m], u)
				if (K) {
					const g = K.length
					for (let w = 0; w < g; w++) o[K[w]] = y
				} else
					p
						? (this.options.visualElement.renderState.vars[m] = y)
						: (o[m] = y)
			}
			this.options.layoutId &&
				(o.pointerEvents =
					u === this ? $t(a?.pointerEvents) || "" : "none")
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0
		}
		resetTree() {
			;(this.root.nodes.forEach((o) => o.currentAnimation?.stop()),
				this.root.nodes.forEach(kn),
				this.root.sharedNodes.clear())
		}
	}
}
function Hl(t) {
	t.updateLayout()
}
function zl(t) {
	const e = t.resumeFrom?.snapshot || t.snapshot
	if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
		const { layoutBox: i, measuredBox: n } = t.layout,
			{ animationType: s } = t.options,
			r = e.source !== t.layout.source
		s === "size"
			? Q((l) => {
					const h = r ? e.measuredBox[l] : e.layoutBox[l],
						f = L(h)
					;((h.min = i[l].min), (h.max = h.min + f))
				})
			: Mo(s, e.layoutBox, i) &&
				Q((l) => {
					const h = r ? e.measuredBox[l] : e.layoutBox[l],
						f = L(i[l])
					;((h.max = h.min + f),
						t.relativeTarget &&
							!t.currentAnimation &&
							((t.isProjectionDirty = !0),
							(t.relativeTarget[l].max =
								t.relativeTarget[l].min + f)))
				})
		const o = Kt()
		Bt(o, i, e.layoutBox)
		const a = Kt()
		r
			? Bt(a, t.applyTransform(n, !0), e.measuredBox)
			: Bt(a, i, e.layoutBox)
		const c = !wo(o)
		let u = !1
		if (!t.resumeFrom) {
			const l = t.getClosestProjectingParent()
			if (l && !l.resumeFrom) {
				const { snapshot: h, layout: f } = l
				if (h && f) {
					const A = D()
					It(A, e.layoutBox, h.layoutBox)
					const m = D()
					;(It(m, i, f.layoutBox),
						So(A, m) || (u = !0),
						l.options.layoutRoot &&
							((t.relativeTarget = m),
							(t.relativeTargetOrigin = A),
							(t.relativeParent = l)))
				}
			}
		}
		t.notifyListeners("didUpdate", {
			layout: i,
			snapshot: e,
			delta: a,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: u
		})
	} else if (t.isLead()) {
		const { onExitComplete: i } = t.options
		i && i()
	}
	t.options.transition = void 0
}
function Jl(t) {
	t.parent &&
		(t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
		t.isSharedProjectionDirty ||
			(t.isSharedProjectionDirty = !!(
				t.isProjectionDirty ||
				t.parent.isProjectionDirty ||
				t.parent.isSharedProjectionDirty
			)),
		t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function Xl(t) {
	t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function _l(t) {
	t.clearSnapshot()
}
function kn(t) {
	t.clearMeasurements()
}
function Fn(t) {
	t.isLayoutDirty = !1
}
function ql(t) {
	const { visualElement: e } = t.options
	;(e &&
		e.getProps().onBeforeLayoutMeasure &&
		e.notify("BeforeLayoutMeasure"),
		t.resetTransform())
}
function Nn(t) {
	;(t.finishAnimation(),
		(t.targetDelta = t.relativeTarget = t.target = void 0),
		(t.isProjectionDirty = !0))
}
function Zl(t) {
	t.resolveTargetDelta()
}
function $l(t) {
	t.calcProjection()
}
function tu(t) {
	t.resetSkewAndRotation()
}
function eu(t) {
	t.removeLeadSnapshot()
}
function On(t, e, i) {
	;((t.translate = b(e.translate, 0, i)),
		(t.scale = b(e.scale, 1, i)),
		(t.origin = e.origin),
		(t.originPoint = e.originPoint))
}
function Un(t, e, i, n) {
	;((t.min = b(e.min, i.min, n)), (t.max = b(e.max, i.max, n)))
}
function iu(t, e, i, n) {
	;(Un(t.x, e.x, i.x, n), Un(t.y, e.y, i.y, n))
}
function nu(t) {
	return t.animationValues && t.animationValues.opacityExit !== void 0
}
const su = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	Qn = (t) =>
		typeof navigator < "u" &&
		navigator.userAgent &&
		navigator.userAgent.toLowerCase().includes(t),
	Gn = Qn("applewebkit/") && !Qn("chrome/") ? Math.round : Y
function Yn(t) {
	;((t.min = Gn(t.min)), (t.max = Gn(t.max)))
}
function ou(t) {
	;(Yn(t.x), Yn(t.y))
}
function Mo(t, e, i) {
	return (
		t === "position" || (t === "preserve-aspect" && !hl(Rn(e), Rn(i), 0.2))
	)
}
function ru(t) {
	return t !== t.root && t.scroll?.wasRoot
}
const au = Po({
		attachResizeListener: (t, e) => Qt(t, "resize", e),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop
		}),
		checkIsScrollRoot: () => !0
	}),
	xe = { current: void 0 },
	bo = Po({
		measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
		defaultParent: () => {
			if (!xe.current) {
				const t = new au({})
				;(t.mount(window),
					t.setOptions({ layoutScroll: !0 }),
					(xe.current = t))
			}
			return xe.current
		},
		resetTransform: (t, e) => {
			t.style.transform = e !== void 0 ? e : "none"
		},
		checkIsScrollRoot: (t) =>
			window.getComputedStyle(t).position === "fixed"
	}),
	cu = {
		pan: { Feature: El },
		drag: { Feature: Sl, ProjectionNode: bo, MeasureLayout: vo }
	}
function Wn(t, e, i) {
	const { props: n } = t
	t.animationState &&
		n.whileHover &&
		t.animationState.setActive("whileHover", i === "Start")
	const s = "onHover" + i,
		r = n[s]
	r && M.postRender(() => r(e, Ht(e)))
}
class lu extends tt {
	mount() {
		const { current: e } = this.node
		e &&
			(this.unmount = Ra(
				e,
				(i, n) => (
					Wn(this.node, n, "Start"),
					(s) => Wn(this.node, s, "End")
				)
			))
	}
	unmount() {}
}
class uu extends tt {
	constructor() {
		;(super(...arguments), (this.isActive = !1))
	}
	onFocus() {
		let e = !1
		try {
			e = this.node.current.matches(":focus-visible")
		} catch {
			e = !0
		}
		!e ||
			!this.node.animationState ||
			(this.node.animationState.setActive("whileFocus", !0),
			(this.isActive = !0))
	}
	onBlur() {
		!this.isActive ||
			!this.node.animationState ||
			(this.node.animationState.setActive("whileFocus", !1),
			(this.isActive = !1))
	}
	mount() {
		this.unmount = Gt(
			Qt(this.node.current, "focus", () => this.onFocus()),
			Qt(this.node.current, "blur", () => this.onBlur())
		)
	}
	unmount() {}
}
function Hn(t, e, i) {
	const { props: n } = t
	if (t.current instanceof HTMLButtonElement && t.current.disabled) return
	t.animationState &&
		n.whileTap &&
		t.animationState.setActive("whileTap", i === "Start")
	const s = "onTap" + (i === "End" ? "" : i),
		r = n[s]
	r && M.postRender(() => r(e, Ht(e)))
}
class hu extends tt {
	mount() {
		const { current: e } = this.node
		e &&
			(this.unmount = Na(
				e,
				(i, n) => (
					Hn(this.node, n, "Start"),
					(s, { success: r }) =>
						Hn(this.node, s, r ? "End" : "Cancel")
				),
				{ useGlobalTarget: this.node.props.globalTapTarget }
			))
	}
	unmount() {}
}
const Xe = new WeakMap(),
	Te = new WeakMap(),
	fu = (t) => {
		const e = Xe.get(t.target)
		e && e(t)
	},
	du = (t) => {
		t.forEach(fu)
	}
function Au({ root: t, ...e }) {
	const i = t || document
	Te.has(i) || Te.set(i, {})
	const n = Te.get(i),
		s = JSON.stringify(e)
	return (
		n[s] || (n[s] = new IntersectionObserver(du, { root: t, ...e })),
		n[s]
	)
}
function mu(t, e, i) {
	const n = Au(e)
	return (
		Xe.set(t, i),
		n.observe(t),
		() => {
			;(Xe.delete(t), n.unobserve(t))
		}
	)
}
const pu = { some: 0, all: 1 }
class gu extends tt {
	constructor() {
		;(super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1))
	}
	startObserver() {
		this.unmount()
		const { viewport: e = {} } = this.node.getProps(),
			{ root: i, margin: n, amount: s = "some", once: r } = e,
			o = {
				root: i ? i.current : void 0,
				rootMargin: n,
				threshold: typeof s == "number" ? s : pu[s]
			},
			a = (c) => {
				const { isIntersecting: u } = c
				if (
					this.isInView === u ||
					((this.isInView = u), r && !u && this.hasEnteredView)
				)
					return
				;(u && (this.hasEnteredView = !0),
					this.node.animationState &&
						this.node.animationState.setActive("whileInView", u))
				const { onViewportEnter: l, onViewportLeave: h } =
						this.node.getProps(),
					f = u ? l : h
				f && f(c)
			}
		return mu(this.node.current, o, a)
	}
	mount() {
		this.startObserver()
	}
	update() {
		if (typeof IntersectionObserver > "u") return
		const { props: e, prevProps: i } = this.node
		;["amount", "margin", "root"].some(Ku(e, i)) && this.startObserver()
	}
	unmount() {}
}
function Ku({ viewport: t = {} }, { viewport: e = {} } = {}) {
	return (i) => t[i] !== e[i]
}
const yu = {
		inView: { Feature: gu },
		tap: { Feature: hu },
		focus: { Feature: uu },
		hover: { Feature: lu }
	},
	Cu = { layout: { ProjectionNode: bo, MeasureLayout: vo } },
	vu = { ...ol, ...yu, ...cu, ...Cu },
	xt = vc(vu, Ic),
	xu = { some: 0, all: 1 }
function Tu(t, e, { root: i, margin: n, amount: s = "some" } = {}) {
	const r = Ls(t),
		o = new WeakMap(),
		a = (u) => {
			u.forEach((l) => {
				const h = o.get(l.target)
				if (l.isIntersecting !== !!h)
					if (l.isIntersecting) {
						const f = e(l.target, l)
						typeof f == "function"
							? o.set(l.target, f)
							: c.unobserve(l.target)
					} else typeof h == "function" && (h(l), o.delete(l.target))
			})
		},
		c = new IntersectionObserver(a, {
			root: i,
			rootMargin: n,
			threshold: typeof s == "number" ? s : xu[s]
		})
	return (r.forEach((u) => c.observe(u)), () => c.disconnect())
}
function bi(
	t,
	{ root: e, margin: i, amount: n, once: s = !1, initial: r = !1 } = {}
) {
	const [o, a] = v.useState(r)
	return (
		v.useEffect(() => {
			if (!t.current || (s && o)) return
			const c = () => (a(!0), s ? void 0 : () => a(!1)),
				u = { root: (e && e.current) || void 0, margin: i, amount: n }
			return Tu(t.current, c, u)
		}, [e, t, i, s, n]),
		o
	)
}
const wu = "_List_1ylxw_1",
	Su = "_RoundedSquare_1ylxw_6",
	Eu = "_TitleContainer_1ylxw_17",
	Pu = "_Title_1ylxw_17",
	Mu = "_ListItem_1ylxw_35",
	bu = "_ListItemsContainer_1ylxw_48",
	st = {
		List: wu,
		RoundedSquare: Su,
		TitleContainer: Eu,
		Title: Pu,
		ListItem: Mu,
		ListItemsContainer: bu
	}
function Vu({ title: t, iconUrl: e }) {
	return d.jsxs("div", {
		className: st.ListItem,
		children: [
			e && d.jsx("img", { src: e, height: 16 }),
			d.jsx("p", { children: t })
		]
	})
}
function Du({ children: t }) {
	return d.jsx("div", { className: st.ListItemsContainer, children: t })
}
function Rt({
	title: t,
	iconUrl: e,
	children: i,
	items: n,
	linksTo: s,
	className: r
}) {
	const o = v.useRef(null),
		a = bi(o, { once: !0, margin: "-50px" }),
		c = [st.List]
	r && c.push(r)
	const u = () =>
		n ? d.jsx(Du, { children: n.map((l, h) => d.jsx(Vu, { ...l }, h)) }) : i
	return d.jsxs(xt.div, {
		ref: o,
		className: c.join(" "),
		initial: { opacity: 0, scaleX: 0.9 },
		animate: a ? { opacity: 1, scaleX: 1, originX: 0 } : {},
		transition: { duration: 0.6, ease: "easeOut" },
		children: [
			d.jsx("div", { className: st.RoundedSquare }),
			d.jsxs("div", {
				className: st.TitleContainer,
				children: [
					e && d.jsx("img", { height: 32, src: e }),
					s
						? d.jsx("a", {
								href: s,
								target: "_blank",
								rel: "noopener noreferrer",
								className: st.Title,
								children: t
							})
						: d.jsx("span", { className: st.Title, children: t })
				]
			}),
			d.jsx(u, {})
		]
	})
}
const ju = "_ResponsiveWrapper_19wj5_1",
	Bu = "_WithMargin_19wj5_8",
	Iu = "_WithBorder_19wj5_12",
	Ru = "_First_19wj5_20",
	Lu = "_Last_19wj5_32",
	Pt = {
		ResponsiveWrapper: ju,
		WithMargin: Bu,
		WithBorder: Iu,
		First: Ru,
		Last: Lu
	}
function ut({
	children: t,
	isFirst: e,
	isLast: i,
	className: n,
	withBorder: s,
	withMargin: r,
	style: o
}) {
	const a = [Pt.ResponsiveWrapper]
	return (
		r && a.push(Pt.WithMargin),
		s && a.push(Pt.WithBorder),
		e && a.push(Pt.First),
		i && a.push(Pt.Last),
		n && a.push(n),
		d.jsx("div", { className: a.join(" "), style: o, children: t })
	)
}
const ku = "_Rhombus_1ieh4_1",
	Fu = { Rhombus: ku }
function Nu(t) {
	const e = [Fu.Rhombus],
		{ className: i, isInView: n, ...s } = t
	return (
		i && e.push(i),
		d.jsx(xt.div, {
			className: e.join(" "),
			...s,
			initial: { opacity: 0, transform: "scale(0.8) rotate(-45deg)" },
			animate: n ? { opacity: 1, transform: "scale(1) rotate(0)" } : {},
			transition: { duration: 0.6, ease: "easeInOut" }
		})
	)
}
const Ou = "_SectionTitle_1tpra_1",
	Uu = "_Rhombus_1tpra_5",
	zn = { SectionTitle: Ou, Rhombus: Uu }
function zt({ title: t }) {
	const e = v.useRef(null),
		i = bi(e, { once: !0, margin: "-50px" })
	return d.jsxs(xt.div, {
		ref: e,
		className: zn.SectionTitle,
		children: [
			d.jsx(Nu, { className: zn.Rhombus, isInView: i }),
			d.jsx(xt.h2, {
				initial: { opacity: 0, x: -20 },
				animate: i ? { opacity: 1, x: 0 } : {},
				transition: { duration: 0.6, ease: "easeOut" },
				children: t
			})
		]
	})
}
const Qu = "_About_ksbt8_1",
	Gu = { About: Qu }
function Yu() {
	const { t } = $(),
		e = v.useRef(null),
		i = bi(e, { once: !0, margin: "-50px" })
	return d.jsx("section", {
		ref: e,
		className: Gu.About,
		children: d.jsxs(ut, {
			withBorder: !0,
			isFirst: !0,
			style: { paddingBottom: 0 },
			children: [
				d.jsx(zt, { title: t("about.title") }),
				t("about.content")
					.split(
						`
`
					)
					.map((n, s) =>
						d.jsxs(
							xt.p,
							{
								initial: { opacity: 0, x: -20 },
								animate: i ? { opacity: 1, x: 0 } : {},
								transition: { duration: 0.6, delay: 0.3 * s },
								style: {
									display: "flex",
									gap: "1rem",
									marginTop: 12
								},
								children: [
									d.jsx("span", { children: "$" }),
									d.jsx("span", { children: n })
								]
							},
							n
						)
					)
			]
		})
	})
}
const Wu = {},
	_e = "bengaudry@etu.univ-lyon1.fr"
function Hu() {
	const { t } = $()
	return d.jsx("section", {
		className: Wu.Contact,
		children: d.jsxs(ut, {
			withMargin: !0,
			withBorder: !0,
			isLast: !0,
			children: [
				d.jsx(zt, { title: t("contact.title") }),
				d.jsx("p", { children: t("contact.contactMe") }),
				d.jsx("a", { href: `mailto:${_e}`, children: _e })
			]
		})
	})
}
const zu = "_Footer_qjila_1",
	Ju = { Footer: zu }
function Xu() {
	return d.jsx("footer", {
		className: Ju.Footer,
		children: d.jsx(ut, {
			withMargin: !0,
			children: d.jsxs("div", {
				className: "content-center",
				children: [
					d.jsxs("p", {
						children: ["© Ben Gaudry - ", new Date().getFullYear()]
					}),
					d.jsxs("p", {
						children: [
							"Icons by",
							" ",
							d.jsx("a", {
								target: "_blank",
								href: "https://icons8.com",
								children: "Icons8"
							})
						]
					})
				]
			})
		})
	})
}
const _u = "_HeroTitle_1mqw5_1",
	qu = { HeroTitle: _u }
function Zu() {
	const [t, e] = v.useState(!0)
	return (
		v.useEffect(() => {
			const i = setInterval(() => {
				e((n) => !n)
			}, 800)
			return () => clearInterval(i)
		}, []),
		d.jsxs("h1", {
			className: qu.HeroTitle,
			children: [
				d.jsx("span", { children: "Ben Gaudry" }),
				t && d.jsx("span", { children: "_" })
			]
		})
	)
}
const $u = "_SocialMediaLink_1n8rs_1",
	th = { SocialMediaLink: $u },
	eh =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAG+mVYSWZJSSoACAAAAAAADgAAAAkA/gAEAAEAAAABAAAAAAEEAAEAAAAAAQAAAQEEAAEAAAAAAQAAAgEDAAMAAACAAAAAAwEDAAEAAAAGAAAABgEDAAEAAAAGAAAAFQEDAAEAAAADAAAAAQIEAAEAAACGAAAAAgIEAAEAAABzBgAAAAAAAAgACAAIAP/Y/+AAEEpGSUYAAQEAAAEAAQAA/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBAAEAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9kAI7P9TwAAAAFzUkdCAdnJLH8AAAAEZ0FNQQAAsY8L/GEFAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfqAgUVODeD2kl5AAABpklEQVRo3u2ZO0vDUBiGn88LLtKqiKM46E9wFMcKtugquDo6qD/ARcWpP8RJULupVRz7C1x0EvFO01F8XTpISZqkpe0JnhcyJHlzkifnu+QCXl5eHUnSmqSqpIYGr4aka0mltBDHcleHYddsYTMBnDoeMCUzO/+7YSjEtJOByN9NMiMBMO44SGBmuTgQZaEYmZnFhVYm9W9BnoENYLq5bAKvrjbCdipENM6+K0nVapfseTOrt/jzwFfWkn05ZNuSE1Us5Yy8AXtApbleAMrAzKBnxPcR30dcALEIpfTcNXvRLDAG5IBFYB9470sfSXJMG8+LpJWYc09IqnTSR/oJMp/wRo5Iuu1pQ2wNo7Bjojwpo2IOuAdGna5akoZjcvEROHG2aknalvQEfEt6kLTVxl5xNdnXI4YtRvgXXE32m4hhqxH+vJPJLukDmAzZ9WlmUyF+A3568qzVJUhX4/pnLQ/iQTyIB/EgHqQHn4P8V5RBhFYjA9ddTwJSywBILQlIOQMg5VgQMzsDjhyGODCzizSvvEVJV5ICB/6tB5IuJa3i5eXVkX4Bv2dEkXLEY5QAAAAASUVORK5CYII=",
	ih =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAG+mVYSWZJSSoACAAAAAAADgAAAAkA/gAEAAEAAAABAAAAAAEEAAEAAAAAAQAAAQEEAAEAAAAAAQAAAgEDAAMAAACAAAAAAwEDAAEAAAAGAAAABgEDAAEAAAAGAAAAFQEDAAEAAAADAAAAAQIEAAEAAACGAAAAAgIEAAEAAABzBgAAAAAAAAgACAAIAP/Y/+AAEEpGSUYAAQEAAAEAAQAA/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBAAEAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9kAI7P9TwAAAAFzUkdCAdnJLH8AAAAEZ0FNQQAAsY8L/GEFAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfqAgUVOAA7Z+x2AAAEYElEQVR42u2azWtdRRjGn7lE2mLaJqlapYK2kKSGehObamOsH4hfLdZV6U5BqcUPqAiirkRQFKWNVl3oTvwLBFeiGGujSXSRhoJQKr1GC2rVhNA0TaDNz0VncQn33s7MOWfOLZ4Hzu6d9+OZmTPv+85IBQoUKFDg/wsTwwiwWdJ9knoldUm6WVK7pFYrMidpWtKUpBOSJiV9a4w5ccUyC/QBQ8BpwvE7cAjovVKCNsBuYJT08QPwKGCaNfg7gJ/IHuPAtmYKfBXwIXCReLgIHAZW5h18NzBJfpgAOvMKfjvwD/ljGtgRO/idwDzNg3PAI1HyAGBA0teSrm6y//B5SQ8ZY0YyIwDoljQmqa1JT+JpSQPGmJOpEwCsssGXG4gNSzoqaUDSvZJWpBTYgqQjksYlDUp6oIHshKRBY8xC2vv+I4e9+GSV/HrgNeCvBHv7T+BFYG2V3j0O497PIslxOee7aoxtBz4LCP5ToK2Gvk6HsReAralsAZt6/ijJJftqM8bM1tFzQFKP3UaTks7YPStJ6yRda4ulAUk/G2M+qKOnvWpcI4zZrUDS2d/tMWstEY7gFg9/dqZh0Kew6YhAwFoPf76/nL7S5UpauyRdcV2Eo67dQ3YQKAcTIOkJT+f6IhCwyVP+8SQE7PVZnZJmY2Ti9nPF3tC91u15bL0TsRY55OlbZ4iRZzwMTAErIhKwEvjNw7/9IVvApw/3pjFmMVon91Ka+5bHkN4Qlr9xZHcBWJ1DP6LV2nbBVyErYKOjL8PGmLPR+/nGzNkCKdHJ0YiANY7Kj+dY/rraXhNCQKuj8j9yJMDV9uoQAlx7Bc3Zp3f0sREB847K1+cY2A2OcudCCJhxVJ7nJUW/o9xMCAEVR+X3AOtyOAavkeTaDq+EEPCLo/IWSS/lMPsvW9suOBnC8NMeqeZ5YEvE2S97JEEAT4UY2eJZcEwBGyIEf6O9NvfBLaHGTnkaOm0vTrIKvh/41dOnSpJ+wBeePm6QdMQ+jOhIMfAO4D1Jo5Ju8hz+eRLDtyXo6c8CHwMDQCnAdgm4E/jE6gpFOSn7YzWUzgAH7GXJWQcn/gX2edjcb8ckxUgay++xGoqXgLftLHU5/JTGfRom9tHFWAoE7EqDAGMDqIXXq7bKYh2ZJdtd9rXbZ294QjGa5t/39jpXY4vA9VbmuTqODCew+2Vg8BeA/rSPoMN1jL1SJfOGnfFqvJrA5vOBBAxl1Yg8VsPY8eqna3a1vGuPwmeT1AnAw4HvhrJp0Nqb2VrvgvZlZG+bZ/B/Z/5oCthhc//lx2I5A1v9HsHPA4OxipEH7cOk5YnPC8seM1yVZDl6EDAH3B+7Hr/bLrlaJ0PFXlwsJvkbOxJwBrgrl3YMsMnhoWSWBEwAG5PEUEoy2BhzStJ2SUOSliJyvyTpoC69CKuoGQBsBY5GWAHjWZbcaaTNu4CRDAj4LpUnLxHJuNVeY/ck0NEDHIzZbsuKjFKMMQUKFChQoIAf/gMUN4rNDnTMWwAAAABJRU5ErkJggg==",
	nh =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAG+mVYSWZJSSoACAAAAAAADgAAAAkA/gAEAAEAAAABAAAAAAEEAAEAAAAAAQAAAQEEAAEAAAAAAQAAAgEDAAMAAACAAAAAAwEDAAEAAAAGAAAABgEDAAEAAAAGAAAAFQEDAAEAAAADAAAAAQIEAAEAAACGAAAAAgIEAAEAAABzBgAAAAAAAAgACAAIAP/Y/+AAEEpGSUYAAQEAAAEAAQAA/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBAAEAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9kAI7P9TwAAAAFzUkdCAdnJLH8AAAAEZ0FNQQAAsY8L/GEFAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfqAgUVOQgsp1UFAAACNElEQVRo3u3aT2vUQBjH8d8srBc92u1WPSlShJ6sr6OmnsQXIPgCxHdQa/tmup49CCIe1INdW7X1D6L0Bch6UevXQ6c0ZKfZ2fzbGckDgZCEzHw2mXmebCK10UYbeWF8DgLOSErscl3SJUlna+rTT0nfJb2WNJC0ZYz5VfqswC3gE7OLj8BqGUAH2CCcWAc6RSCbhBcPi9xOoUbiNdjtwN6VdCXQCeqzpGvZCcB1zyUBIyTpsqSV7EYXZDWCtJH4QJYjgNzwgSxEALnoM9iJoiQxxky6Iv9HeMzjH4Beje33bBu5URZy3MDbOjDAvD03kzBlIXPAtl1/ByxUfCWG6XPXBrH7K8c4EH2fvpSCVI05DdEIxIF5XwSTh2gMUhaTQexmEY1CimJ8EI1DpsX4IqbtS1WZ3aTKnUVJT4B5R8f6kp5KWrKb/kg6bDyze/zCw9T6F+C2zQcXgDvAV7vvDbBj17eBuZneWg5Ezy4vck7zDDifyeJOTFPT7xgi/bgM3LOgkV2eA3eB7iklyTCLmUVC7FdZmjQCsQ1XgshgxiqFOovG3ExcEjNW9sRcxveaKuODfbBqn9lDCxdkFEG/f/hADiKAHPhAXkUAeekDGUQAeewza3Ul7Ui6GihiT9KSMeZ37hWxBzwI9f9DSfeziEmJ6VGAb6vWimTYjn0BGUL8BdYKvQxNgRJgf4aIPWDF51nbB9OVdFNHb4qWdfTBwLmaxsFI0jedfDAwmGpMtNFGG874B1wqhZxHcwqrAAAAAElFTkSuQmCC"
function we({ name: t }) {
	let e = "",
		i = ""
	return (
		t === "linkedin" &&
			((i = "https://www.linkedin.com/in/ben-gaudry-4702932a5/"),
			(e = eh)),
		t === "github" && ((i = "https://github.com/bengaudry"), (e = ih)),
		t === "mail" && ((i = `mailto:${_e}`), (e = nh)),
		d.jsx("a", {
			className: th.SocialMediaLink,
			href: i,
			target: "_blank",
			rel: "noopener noreferrer",
			children: d.jsx("img", { height: 36, width: 36, src: e })
		})
	)
}
const sh = "_LangSelector_1kxpu_1",
	oh = "_separator_1kxpu_12",
	rh = "_button_1kxpu_18",
	ah = "_active_1kxpu_30",
	dt = { LangSelector: sh, separator: oh, button: rh, active: ah }
function ch() {
	const { i18n: t } = $(),
		e = t.language || "fr",
		i = (n) => {
			Ro(n)
			const s = window.location.pathname,
				r = /^\/[a-z]{2}(\/|$)/i,
				o = "/" + n,
				a = r.test(s) ? s.replace(r, o) : o
			window.history.replaceState(
				null,
				"",
				a + window.location.search + window.location.hash
			)
		}
	return d.jsxs("div", {
		className: dt.LangSelector,
		children: [
			d.jsx("button", {
				onClick: () => i("en"),
				className: [dt.button, e === "en" ? dt.active : ""].join(" "),
				children: "EN"
			}),
			d.jsx("span", { className: dt.separator, children: "/" }),
			d.jsx("button", {
				onClick: () => i("fr"),
				className: [dt.button, e === "fr" ? dt.active : ""].join(" "),
				children: "FR"
			})
		]
	})
}
function lh() {
	return null
}
const uh = "/assets/me-B0pvD2G5.jpg",
	hh = "/assets/icons8-location-94-9gVjj6s8.png",
	fh = "_Hero_1eihs_1",
	dh = "_InnerWrapper_1eihs_33",
	Ah = "_Picture_1eihs_42",
	mh = "_SocialMediaLinksWrapper_1eihs_50",
	ph = "_Location_1eihs_57",
	Mt = {
		Hero: fh,
		InnerWrapper: dh,
		Picture: Ah,
		SocialMediaLinksWrapper: mh,
		Location: ph
	}
function gh() {
	const { t } = $()
	return d.jsx(xt.section, {
		initial: { opacity: 0, y: 20, scale: 0.9 },
		animate: { opacity: 1, y: 0, scale: 1 },
		transition: { duration: 0.6 },
		className: Mt.Hero,
		children: d.jsxs(ut, {
			withMargin: !0,
			className: Mt.InnerWrapper,
			children: [
				d.jsx(ch, {}),
				d.jsx("img", {
					src: uh,
					className: Mt.Picture,
					width: 480,
					height: 480
				}),
				d.jsx(Zu, {}),
				d.jsxs("p", {
					className: Mt.Location,
					children: [
						d.jsx("img", { src: hh, height: 24, width: 24 }),
						d.jsx("u", { children: "Lyon, France" })
					]
				}),
				d.jsx("p", { children: t("hero.presentation") }),
				d.jsxs("div", {
					className: Mt.SocialMediaLinksWrapper,
					children: [
						d.jsx(we, { name: "linkedin" }),
						d.jsx(we, { name: "github" }),
						d.jsx(we, { name: "mail" }),
						d.jsx(lh, {})
					]
				})
			]
		})
	})
}
const Kh =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHpklEQVR42u2bTWxcVxXHf+fe+8aO6q8YJJqPCqkEIUTiGGIEiEgBIZUs4lAUmW3VTcMKNkU0UCnJgqaiK1jBCrqti4KcRDgVCFylolITKjtFFVIWLNI0SBA7cQzuvHn3sHh3JjPj+fbMm5HVKx2NZua9e885938+3n3nCHWGzmFlngRAD7Efy0mEoyhTwH5gBLC0O6TJ/0onIwEeArcRllGuoSzIMh9Uy9KUHQ2/Cage5gs4foByCsMnkMBgZ0z2fkggBTz/wfA6Cb+Qd3m/XK66ClAwAh5Av8KPUV7EMoIHPD5MbZCm+9ifoUF0EAwGAyQ8RHlZ3uFn1TJWKKD4hx5lNwmvYpklATwFBNsCePtpAvVmShAcFkhY4L88I8uslStBymHPMcYpcBnH14m7LHgrStCe4SIhwlHgLYRZrrFWNAdREOYwANzl90ScoEAMRE1g1g7LRcsUJJiQ1rxC0ZKpSZvzS5i/nnpjHBExl3mcpwGYx0vRQ+oxzpDjJeK6wqeCCxazDVz4BmIJhK3oDPDp3EmYpRaHBSIceX4iS1zQs5gUAd/is8C7CMNoSZvlk3sMBgvEPABWgDtAoW3wC8cx7A5IktIKguBZRVnswBgcsBdhCsdY8F0e2aJORVCUTYRp/sit1Ac8xa9wnCZPEsSsFN5hSFjD8wpDvCpX0vja0UZ9m3ewzFAoY/DRGtflKl/uEADCcfbheQZ4HsMESVBsJQITclgK/Fre4PuiJ9lLnpsYJvEVu5LOaxE8t1BOySIrVfmCtOUDjmD5FG9j+VIdBfyNf/FVbpC06QO0PL7rcaYw/A7hAEkNmQyC5x4FDhnyfIcck4DHBr9vAYPiAGEVz9OyyIoeISpPKAR8K0Tx80l8af569GTlPS2SFjdFjxDJIisI30VYwwEWLVtDAE+OSSJOGiKOlQSuZMaTQzD8XK7yd32OSG4Qy3aDlWlC24uuKjeI9TkiucJ7CK8EGSoVX5TVccxgOYgALmROJlwQYVEeMMRvFQx7aufSbY9mCOjG2EOiYHD8BmUdh8WgJfkcBgEsBw2GJzABGuUaigBhWea5K+Dl/KP0cdsIqCe86Y78cj6YxkU+RFgmtwXhEvjYb7CMbGHKBfu33K3IFLsxXAMFuG6mf4Fny11ckKla2ZZRUwX9akrt/WwXFZABAip4Nvi68lmsaciQpfsjIwS05HMMDXe/Nwoo3+3qtXq1XgMZTcPdMD1gKCsTKF+vAepMQ4hkDcmsTc42MwGzAxRgOjWBXjEkDdaS7BVu+gLJejvi+qGARhDp1Y64OtQrxLVtAqZ/NtnTsNuWCTh2TiLkBikKZK2AbUUB1yObzDIKNM0DbMaZmasTCVwPEdBxFOilE3Q10u5eOcGOTaAPiUmmJteXKJC1ArYVBXaKAjo2gZ3yONxxFOi2V55r4UBkbqc/Drs6u9Krh6GPE6FBTYRqKXugEqFePg1mqXDbOBJknwhl7XOEATsRihociESDdiK0Uw5EPk6EGKD3Am6A1msaBXYSAgbmvUA/3g22bQKObF5VuRrfe6UAN0hRwGZocgMXBfrxbrChCUiooKqNgDQXPNfFMuasFFDkOQr1QLV9TmKwrG+xj2JHgOVxAJEuKiCjKFDiWdgTXo9JjfqHdYPhNhFbq6jSkuNp/QN79CxGz3aJPdt7n1PkV99gL4ZpEmpXwRluGxw3GSYtjKyEfsIYo8Czch7PbJfYy8IEZrGhrO9ZxhgBklJpnAmyDgOOmwbDUmBMquBoiFF28SO9ykGZIdbrRKpI22Vz2oEJtGl0CqKK6HUimSHWKxxiiOfJo6VK93KEpxXES4ZhFshzL5SUapmNCB7IMcEuLuqbTMkMsUhamKyKqGJaIQifq5imqfBq5T0tkgioCCozxPonDjPKRSIm0CBLOfxzCDH38FwycpQ7GOYZLaupLUIlQsijDHEAy5K+yU/1z+xXEBFUBN8iJSJ4OU2MbVgw7eU0ccU9rZEqiC7xhC7xIkMsMcRnyKMVUSCVzTOK4HhNnuKOqCK8zQHSholdFGq0nRTL2YeBDdaBFZQ7CHGbhxNCjuNE7K6o5ddQlh+zSp7F0EzRDv4jhL3AFI8xyiZUlOM/uk5xKJ5N8kzzDW6JvoaV75HoX3mBcS5wnwJSIykt9gpZLLltOKxi32F5N4CU/dbpKVQC5IEkxK9avUNKgTEcDzgjX+NlVUyKgPmgqU9zkQlmWSNG6p7PpK1NEqg1oSW0qgjDmFCrvXV4lE186dp25tcScqXONTETRNznMv8MTVNz+LRlRsNNf2GccS4xylHuUwj+srsng8MNEh4PbHY5FdbQPziOY523EE4wzf1ismRKWdM5RL7JGhuc5H8sMIkLkaFQo5mic2p2JNa9dRRDgRzCJI4NFhBOyBdZ41zqxKmGiypGJLTOvscLCGcYYYyN4FRSfW6vdTZH48bJ/DZ3W0LrrMPwGLDBQzwvyUEuVMtILVaK5iCC6g0+zzA/BE4xxCdxJUdDx+0TtokCOu1LKaInR9rM9xH/Rnmdj/ilHOH9crmqT81r86JYkdA+/w/2oaF93nMY2AeMhvSis7P6ZhljezufAOtIaJ/3XMNwST4X2udDpKt16/8BrLC3D60JwGUAAAAASUVORK5CYII=",
	yh = "/assets/studyswipe-screenshot-CJRSBR_J.png",
	Ch = "/assets/studyswipe-icon-5h8C_YWi.png",
	vh = "_ProjectItem_o33ij_1",
	xh = "_ProjectPicture_o33ij_7",
	Th = "_ProjectLinks_o33ij_27",
	wh = "_ProjectStatePill_o33ij_57",
	Lt = {
		ProjectItem: vh,
		ProjectPicture: xh,
		ProjectLinks: Th,
		ProjectStatePill: wh
	}
function Sh({ state: t }) {
	const { t: e } = $(),
		i = [Lt.ProjectStatePill]
	return d.jsxs("div", {
		"aria-label": t,
		className: i.join(" "),
		children: [
			d.jsx("span", {}),
			d.jsx("span", { children: e("common." + t) })
		]
	})
}
function Jn({
	title: t,
	description: e,
	imgSrc: i,
	iconSrc: n,
	state: s,
	link: r,
	repoUrl: o
}) {
	return d.jsx(Rt, {
		className: Lt.ProjectItem,
		title: t,
		iconUrl: n,
		children: d.jsxs("article", {
			children: [
				d.jsx("a", {
					href: r,
					target: "_blank",
					rel: "noopener noreferrer",
					children: d.jsx("img", {
						src: i,
						className: Lt.ProjectPicture,
						alt: `${t} screenshot`
					})
				}),
				d.jsxs("div", {
					children: [
						d.jsx("p", { children: e }),
						d.jsxs("div", {
							className: Lt.ProjectLinks,
							children: [
								d.jsx(Sh, { state: s }),
								o &&
									d.jsx("a", {
										href: o,
										target: "_blank",
										rel: "noopener noreferrer",
										children: d.jsx("img", {
											height: 24,
											width: 24,
											alt: "Github repository",
											src: "https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff"
										})
									})
							]
						})
					]
				})
			]
		})
	})
}
function Eh() {
	const { t } = $()
	return d.jsx("section", {
		className: Lt.Projects,
		children: d.jsxs(ut, {
			withMargin: !0,
			withBorder: !0,
			children: [
				d.jsx(zt, { title: t("projects.title") }),
				d.jsx(Jn, {
					title: "Split Tabs",
					state: "active",
					description: t("projects.split-tabs.description"),
					imgSrc: "https://addons.mozilla.org/user-media/previews/full/322/322418.png?modified=1748884796",
					iconSrc: Kh,
					link: "https://addons.mozilla.org/firefox/addon/split-tabs",
					repoUrl: "https://github.com/bengaudry/split-tabs"
				}),
				d.jsx(Jn, {
					title: "Studyswipe",
					state: "active",
					description: t("projects.studyswipe.description"),
					imgSrc: yh,
					iconSrc: Ch,
					link: "https://studyswipe.vercel.app"
				})
			]
		})
	})
}
const Ph = {},
	Se = {
		"front-end": {
			iconUrl:
				"https://img.icons8.com/?size=100&id=i1DTRHrbIVcm&format=png&color=000000",
			items: [
				{
					title: "HTML",
					iconUrl:
						"https://img.icons8.com/?size=32&id=23028&format=png&color=000000"
				},
				{
					title: "CSS",
					iconUrl:
						"https://img.icons8.com/?size=32&id=38272&format=png&color=000000"
				},
				{
					title: "React",
					iconUrl:
						"https://img.icons8.com/?size=32&id=35989&format=png&color=000000"
				},
				{
					title: "TypeScript",
					iconUrl:
						"https://img.icons8.com/?size=32&id=cHBUT9SmrD2V&format=png&color=000000"
				},
				{
					title: "TailwindCSS",
					iconUrl:
						"https://img.icons8.com/?size=32&id=UpSCHTwpywad&format=png&color=000000"
				},
				{ title: "Alpine.js" }
			]
		},
		"back-end": {
			iconUrl:
				"https://img.icons8.com/?size=100&id=Wy3XKG1CjyKf&format=png&color=000000",
			items: [
				{
					title: "Next.JS",
					iconUrl:
						"https://img.icons8.com/?size=32&id=yUdJlcKanVbh&format=png&color=000000"
				},
				{
					title: "Prisma",
					iconUrl:
						"https://img.icons8.com/?size=32&id=aqb9SdV9P8oC&format=png&color=000000"
				},
				{
					title: "Firebase",
					iconUrl:
						"https://img.icons8.com/?size=32&id=5pr1cz6sq9qI&format=png&color=000000"
				},
				{
					title: "Supabase",
					iconUrl:
						"https://img.icons8.com/?size=32&id=WOIMvKUjwCRp&format=png&color=000000"
				},
				{
					title: "NodeJS",
					iconUrl:
						"https://img.icons8.com/?size=32&id=FQlr_bFSqEdG&format=png&color=000000"
				},
				{
					title: "Oracle SQL",
					iconUrl:
						"https://img.icons8.com/?size=32&id=8305&format=png&color=000000"
				}
			]
		},
		tools: {
			iconUrl:
				"https://img.icons8.com/?size=100&id=8ODuhw2BOSHc&format=png&color=000000",
			items: [
				{
					title: "Git",
					iconUrl:
						"https://img.icons8.com/?size=32&id=38389&format=png&color=000000"
				},
				{
					title: "Figma",
					iconUrl:
						"https://img.icons8.com/?size=32&id=amXjtNWVYSKP&format=png&color=000000"
				},
				{
					title: "Canva",
					iconUrl:
						"https://img.icons8.com/?size=32&id=jGpsTXAr6PAK&format=png&color=000000"
				},
				{
					title: "VS Code",
					iconUrl:
						"https://img.icons8.com/?size=32&id=SNeRmWiOLnK7&format=png&color=000000"
				},
				{
					title: "Github",
					iconUrl:
						"https://img.icons8.com/?size=32&id=62856&format=png&color=000000"
				},
				{
					title: "Notion",
					iconUrl:
						"https://img.icons8.com/?size=32&id=F6H2fsqXKBwH&format=png&color=000000"
				},
				{ title: "Vercel" }
			]
		},
		others: {
			iconUrl:
				"https://img.icons8.com/?size=100&id=dsj11frDp0rw&format=png&color=000000",
			items: [
				{
					title: "Java",
					iconUrl:
						"https://img.icons8.com/?size=32&id=2572&format=png&color=000000"
				},
				{
					title: "Python",
					iconUrl:
						"https://img.icons8.com/?size=32&id=12592&format=png&color=000000"
				},
				{ title: "C" },
				{
					title: "ARM",
					iconUrl:
						"https://img.icons8.com/?size=32&id=9134&format=png&color=000000"
				},
				{
					title: "React Native",
					iconUrl:
						"https://img.icons8.com/?size=32&id=35989&format=png&color=000000"
				}
			]
		}
	}
function Mh() {
	const { t } = $()
	return d.jsx("section", {
		className: Ph.Skills,
		children: d.jsxs(ut, {
			withMargin: !0,
			withBorder: !0,
			children: [
				d.jsx(zt, { title: t("skills.title") }),
				Object.keys(Se).map((e) =>
					d.jsx(
						Rt,
						{
							title: t("skills." + e),
							iconUrl: Se[e].iconUrl,
							items: Se[e].items
						},
						e
					)
				)
			]
		})
	})
}
const bh = {}
function Ee({ location: t, startYear: e, endYear: i, description: n }) {
	return d.jsxs("div", {
		children: [
			d.jsxs("span", { children: [t, " · ", e, i && "-" + i] }),
			d.jsx("p", { children: n })
		]
	})
}
function Vh() {
	const { t } = $()
	return d.jsx("section", {
		className: bh.Education,
		children: d.jsxs(ut, {
			withBorder: !0,
			children: [
				d.jsx(zt, { title: t("education.title") }),
				d.jsx(Rt, {
					title: "Lycée Honoré d'Urfé",
					iconUrl:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5QdfYckL1V-5wGYoR84oCtw9Y37yq0Bu0w&s",
					children: d.jsx(Ee, {
						location: "Saint-Etienne",
						startYear: 2020,
						endYear: 2023,
						description:
							"Baccalauréat général spécialités Mathématiques, Physique-Chimie et Anglais monde contemporain, mention Bien."
					})
				}),
				d.jsx(Rt, {
					title: "Université Grenoble Alpes",
					linksTo: "https://www.univ-grenoble-alpes.fr/",
					iconUrl:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXxUySnD6gMiW5fa-7QML3b_2loN0ajH09A&s",
					children: d.jsx(Ee, {
						location: "Grenoble",
						startYear: 2023,
						endYear: 2025,
						description:
							"Prépa intégrée de Polytech Grenoble à l'UGA en spécialisation informatique et mathématiques"
					})
				}),
				d.jsx(Rt, {
					title: "Polytech Lyon",
					linksTo: "https://polytech.univ-lyon1.fr/",
					iconUrl:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRODzZ0NqirXYQ9V-cR5P59JFGT5FoMUi0g&s",
					children: d.jsx(Ee, {
						location: "Villeurbanne",
						startYear: 2025,
						description:
							"Diplôme d'ingénieur spécialité informatique."
					})
				})
			]
		})
	})
}
function Dh() {
	return d.jsxs("div", {
		className: Yo.App,
		children: [
			d.jsx(gh, {}),
			d.jsx(Yu, {}),
			d.jsx(Vh, {}),
			d.jsx(Mh, {}),
			d.jsx(Eh, {}),
			d.jsx(Hu, {}),
			d.jsx(Xu, {})
		]
	})
}
const Lh = jo(function () {
	return d.jsx(Dh, {})
})
export { Lh as default }
