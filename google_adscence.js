(function() {
    var aa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                    a: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.a;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    for (var la = ea, ma = function(a, b) {
            a.prototype = aa(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Da = b.prototype
        }, na = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        }, oa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, pa = ["Number", "isNaN"], qa = 0; qa < pa.length - 1; qa++) {
        var ua = pa[qa];
        ua in oa || (oa[ua] = {});
        oa = oa[ua]
    }
    var va = pa[pa.length - 1],
        wa = oa[va],
        xa = wa ? wa : function(a) {
            return "number" === typeof a && isNaN(a)
        };
    xa != wa && null != xa && na(oa, va, {
        configurable: !0,
        writable: !0,
        value: xa
    });
    var l = this,
        ya = function(a) {
            return "string" == typeof a
        },
        q = function(a) {
            return "number" == typeof a
        },
        za = function() {},
        u = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        Aa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Ba = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Ca = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        Da = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Da = Ba : Da = Ca;
            return Da.apply(null, arguments)
        },
        Ea = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        La = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Da = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Ea = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var Ma = (new Date).getTime();
    var Na = document,
        w = window;
    var Oa = {
            "120x90": !0,
            "160x90": !0,
            "180x90": !0,
            "200x90": !0,
            "468x15": !0,
            "728x15": !0
        },
        Pa = function(a, b) {
            if (15 == b) {
                if (728 <= a) return 728;
                if (468 <= a) return 468
            } else if (90 == b) {
                if (200 <= a) return 200;
                if (180 <= a) return 180;
                if (160 <= a) return 160;
                if (120 <= a) return 120
            }
            return null
        };
    var Qa = function(a, b) {
            a = parseInt(a, 10);
            return isNaN(a) ? b : a
        },
        Ra = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/,
        Sa = function(a, b) {
            return a ? (a = a.match(Ra)) ? a[0] : b : b
        };
    var Ta = Qa("468", 0);
    var Ua = function(a, b) {
            for (var c = a.length, d = ya(a) ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        Va = function(a) {
            return Array.prototype.concat.apply([], arguments)
        };
    var Xa = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    var Za = function() {
        this.j = "";
        this.l = Ya
    };
    Za.prototype.da = !0;
    Za.prototype.O = function() {
        return this.j
    };
    var $a = function(a) {
            if (a instanceof Za && a.constructor === Za && a.l === Ya) return a.j;
            u(a);
            return "type_error:TrustedResourceUrl"
        },
        Ya = {};
    var ab = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        jb = function(a) {
            if (!bb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(cb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(db, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(fb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(gb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(hb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ib, "&#0;"));
            return a
        },
        cb = /&/g,
        db = /</g,
        fb = />/g,
        gb = /"/g,
        hb = /'/g,
        ib = /\x00/g,
        bb = /[\x00&<>"']/,
        kb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "<"
        },
        lb = {
            "'": "\\'"
        },
        mb = function(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        };
    var ob = function() {
        this.P = "";
        this.ta = nb
    };
    ob.prototype.da = !0;
    ob.prototype.O = function() {
        return this.P
    };
    var pb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        nb = {},
        qb = function(a) {
            var b = new ob;
            b.P = a;
            return b
        };
    qb("about:blank");
    var rb;
    a: {
        var sb = l.navigator;
        if (sb) {
            var tb = sb.userAgent;
            if (tb) {
                rb = tb;
                break a
            }
        }
        rb = ""
    }
    var x = function(a) {
        return -1 != rb.indexOf(a)
    };
    var vb = function(a) {
            ub();
            var b = new Za;
            b.j = a;
            return b
        },
        ub = za;
    var wb = function(a) {
        wb[" "](a);
        return a
    };
    wb[" "] = za;
    var y = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        wb(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        xb = function(a, b) {
            var c = [l.top],
                d = [],
                e = 0;
            b = b || 1024;
            for (var f; f = c[e++];) {
                a && !y(f) || d.push(f);
                try {
                    if (f.frames)
                        for (var g = f.frames.length, h = 0; h < g && c.length < b; ++h) c.push(f.frames[h])
                } catch (k) {}
            }
            return d
        },
        Lb = function(a, b) {
            var c = a.createElement("script");
            b = vb(b);
            c.src = $a(b);
            (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
        },
        z = function(a, b) {
            return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
        },
        Mb = function(a) {
            try {
                var b = new Uint32Array(1);
                a.crypto.getRandomValues(b);
                return b[0] / 65536 / 65536
            } catch (c) {
                return Math.random()
            }
        },
        Nb = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Ob = function(a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        },
        Pb = /^([0-9.]+)px$/,
        Qb = /^(-?[0-9.]{1,30})$/,
        Rb = function(a) {
            return Qb.test(a) && (a = Number(a), !isNaN(a)) ? a : null
        },
        Sb = function(a, b) {
            return b ? !/^false$/.test(a) : /^true$/.test(a)
        },
        Tb = function(a) {
            return (a = Pb.exec(a)) ? +a[1] : null
        };
    var Ub = function() {
            return "r20171206"
        },
        Vb = Sb("false", !1),
        Wb = Sb("false", !1),
        Xb = Sb("false", !1),
        Yb = Xb || !Wb;
    var Zb = function() {
        return Sa("", "googleads.g.doubleclick.net")
    };
    var $b = x("Opera"),
        ac = -1 != rb.toLowerCase().indexOf("webkit") && !x("Edge");
    var bc = function(a) {
        this.j = a || l.document || document
    };
    var cc = function() {
        var a = za;
        return function() {
            if (a) {
                var b = a;
                a = null;
                b()
            }
        }
    };
    var dc = function(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, void 0) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        ec = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, void 0) : a.detachEvent && a.detachEvent("on" + b, c)
        };
    var fc = function(a) {
            a = a || l;
            var b = a.context;
            if (!b) try {
                b = a.parent.context
            } catch (c) {}
            try {
                if (b && "pageViewId" in b && "canonicalUrl" in b) return b
            } catch (c) {}
            return null
        },
        gc = function(a) {
            a = a || fc();
            if (!a) return null;
            a = a.master;
            return y(a) ? a : null
        };
    var hc = function(a, b) {
        l.google_image_requests || (l.google_image_requests = []);
        var c = l.document.createElement("img");
        if (b) {
            var d = function(a) {
                b(a);
                ec(c, "load", d);
                ec(c, "error", d)
            };
            dc(c, "load", d);
            dc(c, "error", d)
        }
        c.src = a;
        l.google_image_requests.push(c)
    };
    var ic = Object.prototype.hasOwnProperty,
        jc = function(a, b) {
            for (var c in a) ic.call(a, c) && b.call(void 0, a[c], c, a)
        },
        kc = function(a) {
            return !(!a || !a.call) && "function" === typeof a
        },
        lc = function(a, b) {
            for (var c = 1, d = arguments.length; c < d; ++c) a.push(arguments[c])
        },
        mc = function(a, b) {
            if (a.indexOf) return a = a.indexOf(b), 0 < a || 0 === a;
            for (var c = 0; c < a.length; c++)
                if (a[c] === b) return !0;
            return !1
        },
        nc = function(a) {
            a = gc(fc(a)) || a;
            a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
        },
        oc = !!window.google_async_iframe_id,
        pc = oc && window.parent || window,
        qc = function() {
            if (oc && !y(pc)) {
                var a = "." + Na.domain;
                try {
                    for (; 2 < a.split(".").length && !y(pc);) Na.domain = a = a.substr(a.indexOf(".") + 1), pc = window.parent
                } catch (b) {}
                y(pc) || (pc = window)
            }
            return pc
        },
        rc = /(^| )adsbygoogle($| )/,
        sc = function(a) {
            a = Vb && a.google_top_window || a.top;
            return y(a) ? a : null
        };
    var B = function(a, b) {
            a = a.google_ad_modifications;
            return mc(a ? a.eids || [] : [], b)
        },
        C = function(a, b) {
            a = a.google_ad_modifications;
            return mc(a ? a.loeids || [] : [], b)
        },
        tc = function(a, b, c) {
            if (!a) return null;
            for (var d = 0; d < a.length; ++d)
                if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
            return null
        };
    var uc = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6
    };
    var vc = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return b
    };
    var wc = x("Safari") && !((x("Chrome") || x("CriOS")) && !x("Edge") || x("Coast") || x("Opera") || x("Edge") || x("Silk") || x("Android")) && !(x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod"));
    var xc = null,
        yc = null,
        zc = x("Gecko") && !(-1 != rb.toLowerCase().indexOf("webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge") || ac && !wc || $b || "function" == typeof l.btoa,
        Ac = function(a, b) {
            if (!xc) {
                xc = {};
                yc = {};
                for (var c = 0; 65 > c; c++) xc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), yc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
            }
            b = b ? yc : xc;
            c = [];
            for (var d = 0; d < a.length; d += 3) {
                var e = a[d],
                    f = d + 1 < a.length,
                    g = f ? a[d + 1] : 0,
                    h = d + 2 < a.length,
                    k = h ? a[d + 2] : 0,
                    m = e >> 2;
                e = (e & 3) << 4 | g >> 4;
                g = (g & 15) << 2 | k >> 6;
                k &= 63;
                h || (k = 64, f || (g = 64));
                c.push(b[m], b[e], b[g], b[k])
            }
            return c.join("")
        };
    var D = function() {},
        Bc = "function" == typeof Uint8Array,
        Dc = function(a, b, c) {
            a.j = null;
            b || (b = []);
            a.K = void 0;
            a.s = -1;
            a.l = b;
            a: {
                if (a.l.length) {
                    b = a.l.length - 1;
                    var d = a.l[b];
                    if (d && "object" == typeof d && "array" != u(d) && !(Bc && d instanceof Uint8Array)) {
                        a.v = b - a.s;
                        a.o = d;
                        break a
                    }
                }
                a.v = Number.MAX_VALUE
            }
            a.B = {};
            if (c)
                for (b = 0; b < c.length; b++)
                    if (d = c[b], d < a.v) d += a.s, a.l[d] = a.l[d] || Cc;
                    else {
                        var e = a.v + a.s;
                        a.l[e] || (a.o = a.l[e] = {});
                        a.o[d] = a.o[d] || Cc
                    }
        },
        Cc = [],
        F = function(a, b) {
            if (b < a.v) {
                b += a.s;
                var c = a.l[b];
                return c === Cc ? a.l[b] = [] : c
            }
            if (a.o) return c = a.o[b], c === Cc ? a.o[b] = [] : c
        },
        Ec = function(a, b) {
            if (b < a.v) {
                b += a.s;
                var c = a.l[b];
                return c === Cc ? a.l[b] = [] : c
            }
            c = a.o[b];
            return c === Cc ? a.o[b] = [] : c
        },
        Fc = function(a, b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                var d = F(a, c);
                d && (a.j[c] = new b(d))
            }
            return a.j[c]
        },
        Gc = function(a, b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                for (var d = Ec(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.j[c] = e
            }
            b = a.j[c];
            b == Cc && (b = a.j[c] = []);
            return b
        },
        Hc = function(a) {
            if (a.j)
                for (var b in a.j) {
                    var c = a.j[b];
                    if ("array" == u(c))
                        for (var d = 0; d < c.length; d++) c[d] && Hc(c[d]);
                    else c && Hc(c)
                }
        };
    D.prototype.toString = function() {
        Hc(this);
        return this.l.toString()
    };
    var bd = function(a) {
        Dc(this, a, ad)
    };
    La(bd, D);
    var ad = [4],
        cd = function(a) {
            Dc(this, a, null)
        };
    La(cd, D);
    var dd = function(a) {
        Dc(this, a, null)
    };
    La(dd, D);
    var fd = function(a) {
        Dc(this, a, ed)
    };
    La(fd, D);
    var ed = [6, 7, 9, 10];
    var hd = function(a) {
        Dc(this, a, gd)
    };
    La(hd, D);
    var gd = [1, 2, 5, 7],
        id = function(a) {
            Dc(this, a, null)
        };
    La(id, D);
    var kd = function(a) {
        Dc(this, a, jd)
    };
    La(kd, D);
    var jd = [2];
    var ld = function(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.line = b.line || -1;
        this.msg = b.message || "";
        this.file = b.file || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var md = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
        nd = function(a, b) {
            this.j = a;
            this.l = b
        },
        od = function(a, b, c) {
            this.url = a;
            this.j = b;
            this.ea = !!c;
            this.depth = q(void 0) ? void 0 : null
        };
    var pd = function() {
            this.o = "&";
            this.s = !1;
            this.l = {};
            this.v = 0;
            this.j = []
        },
        qd = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        sd = function(a, b, c, d, e) {
            var f = [];
            Nb(a, function(a, h) {
                (a = rd(a, b, c, d, e)) && f.push(h + "=" + a)
            });
            return f.join(b)
        },
        rd = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(rd(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(sd(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        td = function(a, b, c, d) {
            a.j.push(b);
            a.l[b] = qd(c, d)
        },
        vd = function(a, b, c, d) {
            b = b + "//" + c + d;
            var e = ud(a) - d.length - 0;
            if (0 > e) return "";
            a.j.sort(function(a, b) {
                return a - b
            });
            d = null;
            c = "";
            for (var f = 0; f < a.j.length; f++)
                for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
                    if (!e) {
                        d = null == d ? g : d;
                        break
                    }
                    var m = sd(h[k], a.o, ",$");
                    if (m) {
                        m = c + m;
                        if (e >= m.length) {
                            e -= m.length;
                            b += m;
                            c = a.o;
                            break
                        } else a.s && (c = e, m[c - 1] == a.o && --c, b += m.substr(0, c), c = a.o, e = 0);
                        d = null == d ? g : d
                    }
                }
            a = "";
            null != d && (a = c + "trn=" + d);
            return b + a + ""
        },
        ud = function(a) {
            var b = 1,
                c;
            for (c in a.l) b = c.length > b ? c.length : b;
            return 3997 - b - a.o.length - 1
        };
    var wd = function(a, b, c, d, e, f) {
        if ((d ? a.v : Math.random()) < (e || a.j)) try {
            if (c instanceof pd) var g = c;
            else g = new pd, Nb(c, function(a, b) {
                var c = g,
                    d = c.v++;
                a = qd(b, a);
                c.j.push(d);
                c.l[d] = a
            });
            var h = vd(g, a.s, a.l, a.o + b + "&");
            h && ("undefined" === typeof f ? hc(h, void 0) : hc(h, f))
        } catch (k) {}
    };
    var xd = function(a, b) {
        this.start = a < b ? a : b;
        this.j = a < b ? b : a
    };
    var yd = function(a, b) {
            this.j = b >= a ? new xd(a, b) : null
        },
        zd = function(a) {
            try {
                var b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10)
            } catch (c) {
                return null
            }
            if (0 <= b && 1E3 > b) return b;
            b = Math.floor(1E3 * Mb(a));
            try {
                return a.localStorage.setItem("google_experiment_mod", "" + b), b
            } catch (c) {
                return null
            }
        };
    var Ad = !1,
        Bd = null,
        Cd = function() {
            if (null === Bd) {
                Bd = "";
                try {
                    var a = "";
                    try {
                        a = l.top.location.hash
                    } catch (c) {
                        a = l.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        Bd = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return Bd
        },
        Dd = function(a, b) {
            var c;
            c = (c = Cd()) ? (c = c.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? c[0] : null : null;
            if (c) a = c;
            else if (Ad) a = null;
            else a: {
                if (!(1E-4 > Math.random()) && (c = Math.random(), c < b)) {
                    c = Mb(l);
                    a = a[Math.floor(c * a.length)];
                    break a
                }
                a = null
            }
            return a
        };
    var Ed = function() {
            var a = l.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
        },
        Fd = function() {
            var a = l.performance;
            return a && a.now ? a.now() : null
        };
    var Gd = function(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
        this.slotId = void 0
    };
    var Hd = l.performance,
        Id = !!(Hd && Hd.mark && Hd.measure && Hd.clearMarks),
        Jd = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            var a;
            if (a = Id) a = Cd(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        }),
        Ld = function() {
            var a = Kd;
            this.events = [];
            this.l = a || l;
            var b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = Jd() || (null != b ? b : 1 > Math.random())
        },
        Md = function(a) {
            a && Jd() && (Hd.clearMarks("goog_" + a.uniqueId + "_start"), Hd.clearMarks("goog_" + a.uniqueId + "_end"))
        };
    Ld.prototype.start = function(a, b) {
        if (!this.j) return null;
        var c = Fd() || Ed();
        a = new Gd(a, b, c);
        b = "goog_" + a.uniqueId + "_start";
        Jd() && Hd.mark(b);
        return a
    };
    var Pd = function() {
            var a = Nd;
            this.B = Od;
            this.s = !0;
            this.o = null;
            this.K = this.j;
            this.l = void 0 === a ? null : a;
            this.v = !1
        },
        Sd = function(a, b, c, d, e) {
            try {
                if (a.l && a.l.j) {
                    var f = a.l.start(b.toString(), 3);
                    var g = c();
                    var h = a.l;
                    c = f;
                    if (h.j && q(c.value)) {
                        var k = Fd() || Ed();
                        c.duration = k - c.value;
                        var m = "goog_" + c.uniqueId + "_end";
                        Jd() && Hd.mark(m);
                        h.j && h.events.push(c)
                    }
                } else g = c()
            } catch (n) {
                h = a.s;
                try {
                    Md(f), h = (e || a.K).call(a, b, new Qd(Rd(n), n.fileName, n.lineNumber), void 0, d)
                } catch (v) {
                    a.j(217, v)
                }
                if (!h) throw n;
            }
            return g
        },
        Td = function(a, b) {
            var c = G;
            return function(d) {
                for (var e = [], f = 0; f < arguments.length; ++f) e[f - 0] = arguments[f];
                return Sd(c, a, function() {
                    return b.apply(void 0, e)
                }, void 0, void 0)
            }
        };
    Pd.prototype.j = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new pd;
            f.s = !0;
            td(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new Qd(Rd(b), b.fileName, b.lineNumber));
            b.msg && td(f, 2, "msg", b.msg.substring(0, 512));
            b.file && td(f, 3, "file", b.file);
            0 < b.line && td(f, 4, "line", b.line);
            var g = b.meta || {};
            if (this.o) try {
                this.o(g)
            } catch (L) {}
            if (d) try {
                d(g)
            } catch (L) {}
            b = [g];
            f.j.push(5);
            f.l[5] = b;
            g = l;
            b = [];
            var h = null;
            do {
                d = g;
                if (y(d)) {
                    var k = d.location.href;
                    h = d.document && d.document.referrer || null
                } else k = h, h = null;
                b.push(new od(k || "", d));
                try {
                    g = d.parent
                } catch (L) {
                    g = null
                }
            } while (g && d != g);
            k = 0;
            for (var m = b.length - 1; k <= m; ++k) b[k].depth = m - k;
            d = l;
            if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
                for (k = 1; k < b.length; ++k) {
                    var n = b[k];
                    n.url || (n.url = d.location.ancestorOrigins[k - 1] || "", n.ea = !0)
                }
            var v = new od(l.location.href, l, !1);
            m = null;
            var r = b.length - 1;
            for (n = r; 0 <= n; --n) {
                var p = b[n];
                !m && md.test(p.url) && (m = p);
                if (p.url && !p.ea) {
                    v = p;
                    break
                }
            }
            p = null;
            var t = b.length && b[r].url;
            0 != v.depth && t && (p = b[r]);
            var A = new nd(v, p);
            A.l && td(f, 6, "top", A.l.url || "");
            td(f, 7, "url", A.j.url || "");
            wd(this.B, e, f, this.v, c)
        } catch (L) {
            try {
                wd(this.B, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Rd(L),
                    url: A.j.url
                }, this.v, c)
            } catch (Wa) {}
        }
        return this.s
    };
    var Rd = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        },
        Qd = function(a, b, c) {
            ld.call(this, Error(a), {
                message: a,
                file: void 0 === b ? "" : b,
                line: void 0 === c ? -1 : c
            })
        };
    ma(Qd, ld);
    var Od, G, Kd = qc(),
        Nd = new Ld,
        Ud = function(a) {
            null != a && (Kd.google_measure_js_timing = a);
            Kd.google_measure_js_timing || (a = Nd, a.j = !1, a.events != a.l.google_js_reporting_queue && (Jd() && Ua(a.events, Md), a.events.length = 0))
        };
    Od = new function() {
        var a = void 0 === a ? w : a;
        this.s = "http:" === a.location.protocol ? "http:" : "https:";
        this.l = "pagead2.googlesyndication.com";
        this.o = "/pagead/gen_204?id=";
        this.j = .01;
        this.v = Math.random()
    };
    G = new Pd;
    "complete" == Kd.document.readyState ? Ud() : Nd.j && dc(Kd, "load", function() {
        Ud()
    });
    var Xd = function() {
            var a = [Vd, Wd];
            G.o = function(b) {
                Ua(a, function(a) {
                    a(b)
                })
            }
        },
        Yd = function(a, b, c, d) {
            return Sd(G, a, c, d, b)
        },
        Zd = function(a, b) {
            return Td(a, b)
        },
        $d = G.j;
    var ae = null,
        be = function() {
            if (!ae) {
                for (var a = l, b = a, c = 0; a && a != a.parent;)
                    if (a = a.parent, c++, y(a)) b = a;
                    else break;
                ae = b
            }
            return ae
        };
    var ce = {
            m: "368226200",
            u: "368226201"
        },
        de = {
            m: "368226210",
            u: "368226211"
        },
        ee = {
            m: "38893301",
            I: "38893302",
            J: "38893303"
        },
        fe = {
            m: "38893311",
            I: "38893312",
            J: "38893313"
        },
        ge = {
            m: "4089040",
            V: "4089042"
        },
        he = {
            w: "20040067",
            m: "20040068",
            U: "1337"
        },
        ie = {
            m: "21060548",
            w: "21060549"
        },
        je = {
            m: "21060623",
            w: "21060624"
        },
        ke = {
            m: "62710010",
            VIEWPORT: "62710011"
        },
        le = {
            m: "62710013",
            VIEWPORT: "62710014"
        },
        me = {
            m: "201222021",
            A: "201222022"
        },
        ne = {
            m: "201222031",
            A: "201222032"
        },
        H = {
            m: "21060866",
            u: "21060867",
            L: "21060868",
            qa: "21060869",
            G: "21060870",
            H: "21060871"
        },
        oe = {
            m: "21060550",
            u: "21060551"
        },
        pe = {
            m: "332260000",
            D: "332260001",
            F: "332260002",
            C: "332260003"
        },
        qe = {
            m: "332260004",
            D: "332260005",
            F: "332260006",
            C: "332260007"
        },
        re = {
            m: "21060518",
            u: "21060519"
        },
        se = {
            m: "21060830",
            Y: "21060831",
            M: "21060832",
            X: "21060843",
            W: "21061122"
        },
        te = {
            m: "191880501",
            u: "191880502"
        },
        ue = {
            m: "21061394",
            u: "21061395"
        },
        ve = {
            m: "191880511",
            u: "191880512"
        };
    Ad = !1;
    var we = function(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        wd(Od, "ama", b, !0, .01, void 0)
    };
    var xe = function(a) {
        Dc(this, a, null)
    };
    La(xe, D);
    var ye = {
            google: 1,
            googlegroups: 1,
            gmail: 1,
            googlemail: 1,
            googleimages: 1,
            googleprint: 1
        },
        ze = /(corp|borg)\.google\.com:\d+$/,
        Ae = function() {
            var a = w.google_page_location || w.google_page_url;
            "EMPTY" == a && (a = w.google_page_url);
            if (Vb || !a) return !1;
            a = a.toString();
            0 == a.indexOf("http://") ? a = a.substring(7, a.length) : 0 == a.indexOf("https://") && (a = a.substring(8, a.length));
            var b = a.indexOf("/"); - 1 == b && (b = a.length);
            a = a.substring(0, b);
            if (ze.test(a)) return !1;
            a = a.split(".");
            b = !1;
            3 <= a.length && (b = a[a.length - 3] in ye);
            2 <= a.length && (b = b || a[a.length - 2] in ye);
            return b
        };
    var I = function(a) {
        a = a.document;
        return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
    };
    var Be = function(a, b) {
        Array.prototype.slice.call(a).forEach(b, void 0)
    };
    var Ce = function(a, b, c, d) {
        this.s = a;
        this.l = b;
        this.o = c;
        this.j = d
    };
    Ce.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.s,
            occurrenceIndex: this.l,
            paragraphIndex: this.o,
            ignoreMode: this.j
        })
    };
    var De = function(a, b) {
            if (null == a.j) return b;
            switch (a.j) {
                case 1:
                    return b.slice(1);
                case 2:
                    return b.slice(0, b.length - 1);
                case 3:
                    return b.slice(1, b.length - 1);
                case 0:
                    return b;
                default:
                    throw Error("Unknown ignore mode: " + a.j);
            }
        },
        Fe = function(a) {
            var b = [];
            Be(a.getElementsByTagName("p"), function(a) {
                100 <= Ee(a) && b.push(a)
            });
            return b
        },
        Ee = function(a) {
            if (3 == a.nodeType) return a.length;
            if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
            var b = 0;
            Be(a.childNodes, function(a) {
                b += Ee(a)
            });
            return b
        },
        Ge = function(a) {
            return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
        };
    var He = function(a) {
        var b = ["adsbygoogle-placeholder"];
        a = a.className ? a.className.split(/\s+/) : [];
        for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
        for (d = 0; d < b.length; ++d)
            if (!c[b[d]]) return !1;
        return !0
    };
    var Ie = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = mb(d.Fa);
            a[e] = d.value
        }
    };
    var Je = {
            1: 1,
            2: 2,
            3: 3,
            0: 0
        },
        Ke = function(a) {
            return null != a ? Je[a] : a
        },
        Le = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        };
    var Me = function(a, b) {
            if (!a) return !1;
            a = z(a, b);
            if (!a) return !1;
            a = a.cssFloat || a.styleFloat;
            return "left" == a || "right" == a
        },
        Ne = function(a) {
            for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
            return a ? a : null
        },
        Oe = function(a) {
            return !!a.nextSibling || !!a.parentNode && Oe(a.parentNode)
        };
    var Qe = function(a, b) {
            var c = Pe;
            this.j = l;
            this.v = a;
            this.s = b;
            this.o = c || null;
            this.l = !1
        },
        Se = function(a, b) {
            if (a.l) return !0;
            try {
                var c = a.j.localStorage.getItem("google_ama_settings");
                var d = c ? new xe(c ? JSON.parse(c) : null) : null
            } catch (g) {
                d = null
            }
            if (c = null !== d) d = F(d, 2), c = null == d ? !1 : d;
            if (c) return a = a.j.google_ama_state = a.j.google_ama_state || {}, a.eatf = !0;
            c = Gc(a.s, fd, 1);
            for (d = 0; d < c.length; d++) {
                var e = c[d];
                if (1 == F(e, 8)) {
                    var f = Fc(e, dd, 4);
                    if (f && 2 == F(f, 1) && Re(a, e, b)) return a.l = !0, a = a.j.google_ama_state = a.j.google_ama_state || {}, a.placement = d, !0
                }
            }
            return !1
        },
        Re = function(a, b, c) {
            if (1 != F(b, 8)) return !1;
            var d = Fc(b, bd, 1);
            if (!d) return !1;
            var e = F(d, 7);
            if (F(d, 1) || F(d, 3) || 0 < Ec(d, 4).length) {
                var f = F(d, 3),
                    g = F(d, 1),
                    h = Ec(d, 4);
                e = F(d, 2);
                var k = F(d, 5);
                d = Ke(F(d, 6));
                var m = "";
                g && (m += g);
                f && (m += "#" + Ge(f));
                if (h)
                    for (f = 0; f < h.length; f++) m += "." + Ge(h[f]);
                e = (h = m) ? new Ce(h, e, k, d) : null
            } else e = e ? new Ce(e, F(d, 2), F(d, 5), Ke(F(d, 6))) : null;
            if (!e) return !1;
            k = [];
            try {
                k = a.j.document.querySelectorAll(e.s)
            } catch (p) {}
            if (k.length) {
                h = k.length;
                if (0 < h) {
                    d = Array(h);
                    for (f = 0; f < h; f++) d[f] = k[f];
                    k = d
                } else k = [];
                k = De(e, k);
                q(e.l) && (h = e.l, 0 > h && (h += k.length), k = 0 <= h && h < k.length ? [k[h]] : []);
                if (q(e.o)) {
                    h = [];
                    for (d = 0; d < k.length; d++) f = Fe(k[d]), g = e.o, 0 > g && (g += f.length), 0 <= g && g < f.length && h.push(f[g]);
                    k = h
                }
                e = k
            } else e = [];
            if (0 == e.length) return !1;
            e = e[0];
            k = F(b, 2);
            k = Le[k];
            k = void 0 !== k ? k : null;
            if (!(h = null == k)) {
                a: {
                    h = a.j;
                    switch (k) {
                        case 0:
                            h = Me(Ne(e), h);
                            break a;
                        case 3:
                            h = Me(e, h);
                            break a;
                        case 2:
                            d = e.lastChild;
                            h = Me(d ? 1 == d.nodeType ? d : Ne(d) : null, h);
                            break a
                    }
                    h = !1
                }
                if (c = !h && !(!c && 2 == k && !Oe(e))) c = 1 == k || 2 == k ? e : e.parentNode,
                c = !(c && (1 != c.nodeType || "INS" != c.tagName || !He(c)) && 0 >= c.offsetWidth);h = !c
            }
            if (h) return !1;
            b = Fc(b, cd, 3);
            h = {};
            b && (h.la = F(b, 1), h.$ = F(b, 2), h.va = !!F(b, 3));
            var n;
            b = a.j;
            c = a.o;
            d = a.v;
            f = b.document;
            a = f.createElement("div");
            g = a.style;
            g.textAlign = "center";
            g.width = "100%";
            g.height = "auto";
            g.clear = h.va ? "both" : "none";
            h.ya && Ie(g, h.ya);
            f = f.createElement("ins");
            g = f.style;
            g.display = "block";
            g.margin = "auto";
            g.backgroundColor = "transparent";
            h.la && (g.marginTop = h.la);
            h.$ && (g.marginBottom = h.$);
            h.ua && Ie(g, h.ua);
            a.appendChild(f);
            f.setAttribute("data-ad-format", "auto");
            h = [];
            if (g = c && c.j) a.className = g.join(" ");
            f.className = "adsbygoogle";
            f.setAttribute("data-ad-client", d);
            h.length && f.setAttribute("data-ad-channel", h.join("+"));
            a: {
                try {
                    switch (k) {
                        case 0:
                            e.parentNode && e.parentNode.insertBefore(a, e);
                            break;
                        case 3:
                            var v = e.parentNode;
                            if (v) {
                                var r = e.nextSibling;
                                if (r && r.parentNode != v)
                                    for (; r && 8 == r.nodeType;) r = r.nextSibling;
                                v.insertBefore(a, r)
                            }
                            break;
                        case 1:
                            e.insertBefore(a, e.firstChild);
                            break;
                        case 2:
                            e.appendChild(a)
                    }
                    if (1 != e.nodeType ? 0 : "INS" == e.tagName && He(e)) e.style.display = "block";
                    f.setAttribute("data-adsbygoogle-status", "reserved");
                    v = {
                        element: f
                    };
                    (n = c && c.l) && (v.params = n);
                    (b.adsbygoogle = b.adsbygoogle || []).push(v)
                } catch (p) {
                    a && a.parentNode && a.parentNode.removeChild(a);
                    n = !1;
                    break a
                }
                n = !0
            }
            return n ? !0 : !1
        };
    var Ue = function() {
            this.l = new Te(this);
            this.j = 0
        },
        Ve = function(a) {
            if (0 != a.j) throw Error("Already resolved/rejected.");
        },
        Te = function(a) {
            this.j = a
        },
        We = function(a) {
            switch (a.j.j) {
                case 0:
                    break;
                case 1:
                    a.T && a.T(a.j.s);
                    break;
                case 2:
                    a.ka && a.ka(a.j.o);
                    break;
                default:
                    throw Error("Unhandled deferred state.");
            }
        };
    var Xe = function(a) {
            this.exception = a
        },
        Ye = function(a, b) {
            this.l = l;
            this.o = a;
            this.j = b
        };
    Ye.prototype.start = function() {
        this.s()
    };
    Ye.prototype.s = function() {
        try {
            switch (this.l.document.readyState) {
                case "complete":
                case "interactive":
                    Se(this.o, !0);
                    Ze(this);
                    break;
                default:
                    Se(this.o, !1) ? Ze(this) : this.l.setTimeout(Da(this.s, this), 100)
            }
        } catch (a) {
            Ze(this, a)
        }
    };
    var Ze = function(a, b) {
        try {
            var c = a.j,
                d = new Xe(b);
            Ve(c);
            c.j = 1;
            c.s = d;
            We(c.l)
        } catch (e) {
            a = a.j, b = e, Ve(a), a.j = 2, a.o = b, We(a.l)
        }
    };
    var $e = function(a) {
            we(a, {
                atf: 1
            })
        },
        af = function(a, b) {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            we(a, {
                atf: 0
            })
        };
    var bf = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledByReactiveTag = {};
        this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.debugCard = null;
        this.messageValidationEnabled = this.debugCardRequested = !1;
        this.adRegion = this.floatingAdsFillMessage = this.grappleTagStatusService = null
    };
    var Wd = function(a) {
            try {
                var b = l.google_ad_modifications;
                if (null != b) {
                    var c = Va(b.eids, b.loeids);
                    null != c && 0 < c.length && (a.eid = c.join(","))
                }
            } catch (d) {}
        },
        Vd = function(a) {
            a.shv = Ub()
        };
    G.s = !Vb;
    var cf = {
        9: "400",
        10: "100",
        11: "0.10",
        12: "0.05",
        13: "0.001",
        14: "320",
        15: "20",
        19: "0.01",
        22: "0.01",
        23: "0.2",
        24: "0.05",
        26: "0.1",
        27: "0.001",
        28: "0.001",
        29: "0.01",
        32: "0.02",
        34: "0.001",
        37: "0.0",
        39: "0.15",
        40: "0.15",
        41: "0.0",
        42: "0.001",
        43: "0.1",
        47: "0.01",
        48: "0.2",
        49: "0.2",
        51: "0.05",
        52: "0.02",
        54: "800",
        55: "40",
        56: "0.001",
        57: "0.001",
        58: "0.02",
        59: "0.1",
        60: "0.03",
        65: "0.02",
        66: "0.0",
        67: "0.04",
        70: "0.6",
        71: "700",
        72: "10",
        74: "0.03",
        75: "true",
        76: "0.004",
        77: "true",
        78: "0.1",
        79: "1200",
        80: "2",
        81: "0.02",
        82: "3",
        83: "1.0",
        84: "0",
        85: "100",
        86: "0.0",
        87: "0.0",
        89: "0.1",
        90: "0.1",
        91: "0.0",
        92: "0.02",
        93: "0.02",
        94: "true",
        95: "0.02"
    };
    var df = null,
        ef = function() {
            this.j = cf
        },
        J = function(a, b) {
            a = parseFloat(a.j[b]);
            return isNaN(a) ? 0 : a
        },
        ff = function() {
            df || (df = new ef);
            return df
        };
    var gf = new yd(0, 99),
        hf = new yd(300, 399),
        jf = new yd(400, 599),
        kf = new yd(700, 799),
        lf = new yd(800, 899);
    var dg = function(a) {
            var b = ff(),
                c = cg(a, kf, J(b, 71), J(b, 72), ["153762914", "153762975"]),
                d = "";
            "153762914" == c ? d = "153762530" : "153762975" == c && (d = "153762841");
            if (c) return {
                fa: c,
                ha: d
            };
            c = cg(a, kf, J(b, 71) + J(b, 72), J(b, 80), ["164692081", "165767636"]);
            "164692081" == c ? d = "166717794" : "165767636" == c && (d = "169062368");
            return {
                fa: c || "",
                ha: d
            }
        },
        eg = function(a) {
            var b = a.google_ad_modifications = a.google_ad_modifications || {};
            if (!b.plle) {
                b.plle = !0;
                var c = b.eids = b.eids || [];
                b = b.loeids = b.loeids || [];
                var d, e = ff();
                var f = dg(a);
                K(b, f.fa);
                K(c, f.ha);
                f = de;
                var g = cg(a, gf, J(e, 84), J(e, 85), [f.m, f.u]);
                K(b, g);
                var h = ce;
                g == f.m ? d = h.m : g == f.u ? d = h.u : d = "";
                K(c, d);
                f = ge;
                K(c, cg(a, jf, J(e, 9), J(e, 10), [f.m, f.V]));
                ab("") && K(b, "");
                f = ke;
                g = M(a, J(e, 11), [f.m, f.VIEWPORT]);
                f = Xa(f, function(a) {
                    return a == g
                });
                f = le[f];
                K(c, g);
                K(c, f);
                f = H;
                f = M(a, J(e, 12), [f.m, f.u, f.L, f.qa, f.G, f.H]);
                K(c, f);
                f || (f = oe, f = M(a, J(e, 58), [f.m, f.u]), K(c, f));
                f || (f = re, g = M(a, J(e, 56), [f.m, f.u]), K(c, g));
                f = he;
                g = M(a, J(e, 13), [f.w, f.m]);
                K(c, g);
                K(c, Dd([f.U], 0));
                f = ie;
                g = M(a, J(e, 60), [f.w, f.m]);
                K(c, g);
                g == ie.w && (f = je, g = M(a, J(e, 66), [f.w, f.m]), K(c, g));
                f = ne;
                g = cg(a, hf, J(e, 14), J(e, 15), [f.m, f.A]);
                K(b, g);
                h = me;
                g == f.m ? d = h.m : g == f.A ? d = h.A : d = "";
                K(c, d);
                f = qe;
                g = cg(a, lf, J(e, 54), J(e, 55), [f.m, f.D, f.F, f.C]);
                K(b, g);
                h = pe;
                g == f.m ? d = h.m : g == f.D ? d = h.D : g == f.F ? d = h.F : g == f.C ? d = h.C : d = "";
                K(c, d);
                f = fe;
                g = M(a, J(e, 70), [f.m, f.I, f.J]);
                K(b, g);
                h = ee;
                switch (g) {
                    case f.m:
                        d = h.m;
                        break;
                    case f.I:
                        d = h.I;
                        break;
                    case f.J:
                        d = h.J;
                        break;
                    default:
                        h = ""
                }
                K(c, d);
                if (Sb(e.j[77], !1) || Vb) f = se, g = M(a, J(e, 76), [f.m, f.Y, f.M, f.X]), K(c, g), g || (g = M(a, J(e, 83), [f.W]), K(c, g));
                f = te;
                g = M(a, J(e, 90), [f.m, f.u]);
                Sb(e.j[94], !1) && !g && (g = f.u);
                K(c, g);
                f = ue;
                g = M(a, J(e, 92), [f.m, f.u]);
                K(c, g);
                f = ve;
                g = M(a, J(e, 95), [f.m, f.u]);
                K(c, g)
            }
        },
        K = function(a, b) {
            b && a.push(b)
        },
        fg = function(a, b) {
            a = (a = (a = a.location && a.location.hash) && a.match(/google_plle=([\d,]+)/)) && a[1];
            return !!a && -1 != a.indexOf(b)
        },
        M = function(a, b, c) {
            for (var d = 0; d < c.length; d++)
                if (fg(a, c[d])) return c[d];
            return Dd(c, b)
        },
        cg = function(a, b, c, d, e) {
            for (var f = 0; f < e.length; f++)
                if (fg(a, e[f])) return e[f];
            f = new xd(c, c + d - 1);
            (d = 0 >= d || d % e.length) || (b = b.j, d = !(b.start <= f.start && b.j >= f.j));
            d ? c = null : (a = zd(a), c = null !== a && f.start <= a && f.j >= a ? e[(a - c) % e.length] : null);
            return c
        };
    var gg = function(a) {
        if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var hg = function(a, b, c) {
        var d = void 0 === d ? "" : d;
        var e = ["<iframe"],
            f;
        for (f in a) a.hasOwnProperty(f) && lc(e, f + "=" + a[f]);
        e.push('style="' + ("left:0;position:absolute;top:0;width:" + b + "px;height:" + c + "px;") + '"');
        e.push("></iframe>");
        a = a.id;
        b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent;";
        return ['<ins id="', a + "_expand", '" style="display:inline-table;', b, void 0 === d ? "" : d, '"><ins id="', a + "_anchor", '" style="display:block;', b, '">', e.join(" "), "</ins></ins>"].join("")
    };
    var ig = null;
    var N = function(a, b) {
        this.s = a;
        this.o = b
    };
    N.prototype.minWidth = function() {
        return this.s
    };
    N.prototype.height = function() {
        return this.o
    };
    N.prototype.j = function(a) {
        return 300 < a && 300 < this.o ? this.s : Math.min(1200, Math.round(a))
    };
    N.prototype.l = function(a) {
        return this.j(a) + "x" + this.height()
    };
    var jg = {
            rectangle: 1,
            horizontal: 2,
            vertical: 4
        },
        O = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            N.call(this, a, b);
            this.Ca = c;
            this.xa = d
        };
    ma(O, N);
    var kg = function(a) {
            return function(b) {
                return !!(b.Ca & a)
            }
        },
        lg = function(a, b) {
            N.call(this, a, b)
        };
    ma(lg, N);
    lg.prototype.j = function() {
        return this.minWidth()
    };
    var P = [new O(970, 90, 2), new O(728, 90, 2), new O(468, 60, 2), new O(336, 280, 1), new O(320, 100, 2), new O(320, 50, 2), new O(300, 600, 4), new O(300, 250, 1), new O(250, 250, 1), new O(234, 60, 2), new O(200, 200, 1), new O(180, 150, 1), new O(160, 600, 4), new O(125, 125, 1), new O(120, 600, 4), new O(120, 240, 4)],
        mg = [P[6], P[12], P[3], P[0], P[7], P[14], P[1], P[8], P[10], P[4], P[15], P[2], P[11], P[5], P[13], P[9]],
        ng = new O(120, 120, 1, !0),
        og = new O(120, 50, 2, !0);

    function pg(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = Tb(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }
    var qg = function(a, b) {
            try {
                var c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                var e = {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (f) {
                e = null
            }
            return (a = e) ? a.y : 0
        },
        rg = function(a, b) {
            do {
                var c = z(a, b);
                if (c && "fixed" == c.position) return !1
            } while (a = a.parentElement);
            return !0
        },
        sg = function(a) {
            var b = 0,
                c;
            for (c in jg) - 1 != a.indexOf(c) && (b |= jg[c]);
            return b
        },
        tg = function(a, b) {
            for (var c = I(b).clientWidth, d = 0; 100 > d && a; d++) {
                var e = z(a, b);
                if (e && "hidden" == e.overflowX && (e = Tb(e.width)) && e < c) return !0;
                a = a.parentElement
            }
            return !1
        },
        ug = function(a, b, c, d, e) {
            e = e || {};
            if ((Vb && a.google_top_window || a.top) != a) return e.google_fwr_non_expansion_reason = 3, !1;
            if (!(488 > I(a).clientWidth)) return e.google_fwr_non_expansion_reason = 4, !1;
            if (!(a.innerHeight >= a.innerWidth)) return e.google_fwr_non_expansion_reason = 5, !1;
            var f = I(a).clientWidth;
            return !f || (f - c) / f > d ? (e.google_fwr_non_expansion_reason = 6, !1) : tg(b.parentElement, a) ? (e.google_fwr_non_expansion_reason = 7, !1) : !0
        },
        vg = function(a) {
            for (var b = 0, c = 0; 100 > c && a; c++) b += a.offsetLeft + a.clientLeft - a.scrollLeft, a = a.offsetParent;
            return b
        },
        wg = function(a, b, c) {
            return {
                ga: Tb(a.paddingLeft) || 0,
                direction: a.direction,
                ba: b - c
            }
        },
        xg = function(a, b) {
            if (3 == b.nodeType) return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName)) return !1;
                try {
                    var c = z(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        },
        yg = function(a, b, c, d, e, f) {
            if (a = z(c, a)) {
                var g = wg(a, e, d);
                d = g.direction;
                a = g.ga;
                g = g.ba;
                f.google_ad_resize ? c = -1 * (g + a) + "px" : (c = vg(c) + a, c = "rtl" == d ? -1 * (g - c) + "px" : -1 * c + "px");
                "rtl" == d ? b.style.marginRight = c : b.style.marginLeft = c;
                b.style.width = e + "px";
                b.style.zIndex = 30
            }
        };
    var zg = function(a, b, c) {
            if (a.style) {
                var d = Tb(a.style[c]);
                if (d) return d
            }
            if (a = z(a, b))
                if (c = Tb(a[c])) return c;
            return null
        },
        Ag = function(a) {
            return function(b) {
                return b.minWidth() <= a
            }
        },
        Dg = function(a, b, c) {
            var d = a && Bg(c, b),
                e = Cg(b);
            return function(a) {
                return !(d && a.height() >= e)
            }
        },
        Bg = function(a, b) {
            return qg(a, b) < I(b).clientHeight - 100
        },
        Eg = function(a, b) {
            var c = Infinity;
            do {
                var d = zg(b, a, "height");
                d && (c = Math.min(c, d));
                (d = zg(b, a, "maxHeight")) && (c = Math.min(c, d))
            } while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        },
        Fg = function(a, b) {
            var c = zg(b, a, "height");
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = zg(b, a, "height");
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && Tb(b.style.height)) && (c = Math.min(c, d)), (d = zg(b, a, "maxHeight")) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        },
        Cg = function(a) {
            var b = a.google_unique_id;
            return C(a, ne.A) && 0 == ("number" === typeof b ? b : 0) ? 2 * I(a).clientHeight / 3 : 250
        };
    var Gg = /^(\d+)x(\d+)(|_[a-z]*)$/,
        Hg = function(a) {
            return C(a, "165767636")
        };
    var Q = function(a) {
            this.s = [];
            this.l = a || window;
            this.j = 0;
            this.o = null;
            this.ma = 0
        },
        Ig;
    Q.prototype.na = function(a, b) {
        0 != this.j || 0 != this.s.length || b && b != window ? this.v(a, b) : (this.j = 2, this.K(new Jg(a, window)))
    };
    Q.prototype.v = function(a, b) {
        this.s.push(new Jg(a, b || this.l));
        Kg(this)
    };
    Q.prototype.pa = function(a) {
        this.j = 1;
        if (a) {
            var b = Zd(188, Da(this.B, this, !0));
            this.o = this.l.setTimeout(b, a)
        }
    };
    Q.prototype.B = function(a) {
        a && ++this.ma;
        1 == this.j && (null != this.o && (this.l.clearTimeout(this.o), this.o = null), this.j = 0);
        Kg(this)
    };
    Q.prototype.ra = function() {
        return !(!window || !Array)
    };
    Q.prototype.oa = function() {
        return this.ma
    };
    var Kg = function(a) {
        var b = Zd(189, Da(a.sa, a));
        a.l.setTimeout(b, 0)
    };
    Q.prototype.sa = function() {
        if (0 == this.j && this.s.length) {
            var a = this.s.shift();
            this.j = 2;
            var b = Zd(190, Da(this.K, this, a));
            a.j.setTimeout(b, 0);
            Kg(this)
        }
    };
    Q.prototype.K = function(a) {
        this.j = 0;
        a.l()
    };
    var Lg = function(a) {
            try {
                return a.sz()
            } catch (b) {
                return !1
            }
        },
        Mg = function(a) {
            return !!a && ("object" === typeof a || "function" === typeof a) && Lg(a) && kc(a.nq) && kc(a.nqa) && kc(a.al) && kc(a.rl)
        },
        Ng = function() {
            if (Ig && Lg(Ig)) return Ig;
            var a = be(),
                b = a.google_jobrunner;
            return Mg(b) ? Ig = b : a.google_jobrunner = Ig = new Q(a)
        },
        Og = function(a, b) {
            Ng().nq(a, b)
        },
        Pg = function(a, b) {
            Ng().nqa(a, b)
        };
    Q.prototype.nq = Q.prototype.na;
    Q.prototype.nqa = Q.prototype.v;
    Q.prototype.al = Q.prototype.pa;
    Q.prototype.rl = Q.prototype.B;
    Q.prototype.sz = Q.prototype.ra;
    Q.prototype.tc = Q.prototype.oa;
    var Jg = function(a, b) {
        this.l = a;
        this.j = b
    };
    var Qg = function(a) {
            return function(b) {
                for (var c = a.length - 1; 0 <= c; --c)
                    if (!a[c](b)) return !1;
                return !0
            }
        },
        Rg = function(a, b, c) {
            for (var d = a.length, e = null, f = 0; f < d; ++f) {
                var g = a[f];
                if (b(g)) {
                    if (!c || c(g)) return g;
                    null === e && (e = g)
                }
            }
            return e
        };
    var R = function(a, b) {
        this.wa = a;
        this.R = b
    };
    var S = function(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, S) : this.stack = Error().stack || ""
    };
    ma(S, Error);
    var Sg = function(a) {
        return 0 == (a.error && a.meta && a.id ? a.msg || Rd(a.error) : Rd(a)).indexOf("TagError")
    };
    var Tg = function() {
        return !(x("iPad") || x("Android") && !x("Mobile") || x("Silk")) && (x("iPod") || x("iPhone") || x("Android") || x("IEMobile"))
    };
    var Wg = function(a, b, c, d, e) {
            16 == e.google_reactive_ad_format && (d.height = "");
            var f = a;
            a = Yd(247, $d, function() {
                var f = a;
                var h = Ug(f, b, c, d, e);
                if (h != f) {
                    var k = d.parentElement;
                    k && (e.gfwroml = d.style.marginLeft, e.gfwromr = d.style.marginRight, e.gfwrow = d.style.width, e.gfwroz = d.style.zIndex, yg(c, d, k, f, h, e), f = h)
                }
                return f
            });
            return Vg(a, b, c, d, e, f != a)
        },
        Ug = function(a, b, c, d, e) {
            e.google_full_width_responsive_allowed = !1;
            if ("false" == e.google_full_width_responsive && !Xg(c)) return e.google_fwr_non_expansion_reason = 1, a;
            if (!("auto" == b || 0 < (sg(b) & 3) && (Xg(c) || C(c, de.u) || C(c, de.m))) && 1 != e.google_ad_resize) return e.google_fwr_non_expansion_reason = 2, a;
            if (!ug(c, d, a, .3, e)) return a;
            var f = I(c).clientWidth,
                g = f - a;
            if (!f || 5 > g) return e.google_fwr_non_expansion_reason = f ? -10 > g ? 11 : 0 > g ? 14 : 0 == g ? 13 : 12 : 10, a;
            if (!Yg(d, c, e)) return e.google_fwr_non_expansion_reason = 9, a;
            e.google_full_width_responsive_allowed = !0;
            return "auto" == b || 0 < (sg(b) & 3) && (Xg(c) || C(c, de.u)) ? f : (e.google_fwr_non_expansion_reason = 15, a)
        },
        Vg = function(a, b, c, d, e, f) {
            var g = "auto" == b ? .25 >= a / Math.min(1200, I(c).clientWidth) ? 4 : 3 : sg(b);
            e.google_responsive_formats = g;
            var h = Tg() && !Bg(d, c) && Yg(d, c, e),
                k = Tg() && Bg(d, c) && (C(c, ne.A) || C(c, ne.m)) && Yg(d, c, e) && C(c, ne.A),
                m = (h ? mg : P).slice(0);
            m = Va(m, Zg(c));
            var n = 488 > I(c).clientWidth;
            n = [Ag(a), $g(n), Dg(n, c, d), kg(g)];
            var v = [function(a) {
                return !a.xa
            }];
            if (h || k) {
                var r = h ? Eg(c, d) : Fg(c, d);
                v.push(function(a) {
                    return a.height() <= r
                })
            }
            var p = Rg(m, Qg(n), Qg(v));
            if (!p) throw new S("No slot size for availableWidth=" + a);
            p = Yd(248, $d, function() {
                a: {
                    var b = p;
                    if (f) {
                        if (e.gfwrnh) {
                            var g = Tb(e.gfwrnh);
                            if (g) {
                                b = new lg(a, g);
                                break a
                            }
                        }
                        if (Bg(d, c)) b = new lg(a, b.height());
                        else {
                            b = a / 1.2;
                            g = Eg(c, d);
                            g = Math.min(b, g);
                            if (g < .5 * b || 100 > g) g = b;
                            b = new lg(a, Math.floor(g))
                        }
                    }
                }
                return b
            });
            return new R(ah(b, g), p)
        },
        Yg = function(a, b, c) {
            var d = c.google_safe_for_responsive_override;
            return null != d ? d : c.google_safe_for_responsive_override = rg(a, b)
        },
        ah = function(a, b) {
            if ("auto" == a) return 1;
            switch (b) {
                case 2:
                    return 2;
                case 1:
                    return 3;
                case 4:
                    return 4;
                case 3:
                    return 5;
                case 6:
                    return 6;
                case 5:
                    return 7;
                case 7:
                    return 8
            }
            throw Error("bad mask");
        },
        $g = function(a) {
            return function(b) {
                return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
            }
        },
        Xg = function(a) {
            return a.location && "#google_full_width_responsive_preview" == a.location.hash
        },
        Zg = function(a) {
            var b = [],
                c = C(a, qe.C);
            (C(a, qe.D) || c) && b.push(ng);
            (C(a, qe.F) || c) && b.push(og);
            return b
        };
    var bh = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"],
        T = {},
        ch = (T.image_stacked = 1 / 1.91, T.image_sidebyside = 1 / 3.82, T.mobile_banner_image_sidebyside = 1 / 3.82, T.pub_control_image_stacked = 1 / 1.91, T.pub_control_image_sidebyside = 1 / 3.82, T.pub_control_image_card_stacked = 1 / 1.91, T.pub_control_image_card_sidebyside = 1 / 3.74, T.pub_control_text = 0, T.pub_control_text_card = 0, T),
        U = {},
        dh = (U.image_stacked = 80, U.image_sidebyside = 0, U.mobile_banner_image_sidebyside = 0, U.pub_control_image_stacked = 80, U.pub_control_image_sidebyside = 0, U.pub_control_image_card_stacked = 85, U.pub_control_image_card_sidebyside = 0, U.pub_control_text = 80, U.pub_control_text_card = 80, U),
        eh = {},
        fh = (eh.pub_control_image_stacked = 100, eh.pub_control_image_sidebyside = 200, eh.pub_control_image_card_stacked = 150, eh.pub_control_image_card_sidebyside = 250, eh.pub_control_text = 100, eh.pub_control_text_card = 150, eh),
        gh = function(a, b) {
            N.call(this, a, b)
        };
    ma(gh, N);
    gh.prototype.j = function(a) {
        return Math.min(1200, Math.round(a))
    };
    var hh = function(a) {
        var b = 0;
        jc(bh, function(c) {
            null != a[c] && ++b
        });
        if (0 === b) return !1;
        if (b === bh.length) return !0;
        throw new S("Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.");
    };

    function ih(a) {
        return 1200 <= a ? new gh(1200, 600) : 850 <= a ? new gh(a, Math.floor(.5 * a)) : 550 <= a ? new gh(a, Math.floor(.6 * a)) : 468 <= a ? new gh(a, Math.floor(.7 * a)) : new gh(a, Math.floor(3.44 * a))
    }

    function jh(a, b) {
        if (0 >= a) throw new S("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function kh(a, b, c, d) {
        a.google_content_recommendation_ui_type = b;
        a.google_content_recommendation_columns_num = c;
        a.google_content_recommendation_rows_num = d
    };
    var lh = {
            "image-top": function(a) {
                return 600 >= a ? 284 + .414 * (a - 250) : 429
            },
            "image-middle": function(a) {
                return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
            },
            "image-side": function(a) {
                return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
            },
            "text-only": function(a) {
                return 500 >= a ? 187 - .228 * (a - 250) : 130
            },
            "in-article": function(a) {
                return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
            }
        },
        mh = function(a, b) {
            N.call(this, a, b)
        };
    ma(mh, N);
    mh.prototype.j = function() {
        return Math.min(1200, this.minWidth())
    };
    var V = function(a, b) {
        N.call(this, a, b)
    };
    ma(V, N);
    V.prototype.j = function() {
        return this.minWidth()
    };
    V.prototype.l = function(a) {
        return N.prototype.l.call(this, a) + "_0ads_al"
    };
    var nh = [new V(728, 15), new V(468, 15), new V(200, 90), new V(180, 90), new V(160, 90), new V(120, 90)];
    var oh = function(a) {
        var b = a.google_ad_format;
        if ("autorelaxed" == b) return hh(a) ? 9 : 5;
        if ("auto" == b || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b)) return 1;
        if ("link" == b) return 4;
        if ("fluid" == b) return 8
    };
    var ph = function(a, b) {
        var c = sc(b);
        if (c) {
            c = I(c).clientWidth;
            var d = z(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" != d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var qh = function(a, b, c) {
        c || (c = Yb ? "https" : "http");
        l.location && "https:" == l.location.protocol && "http" == c && (c = "https");
        return [c, "://", a, b].join("")
    };
    var sh = function(a) {
        var b = this;
        this.j = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {},
            upd: function(a, d) {
                var c = rh("rx", a);
                a: {
                    if (a && (a = a.match("dt=([^&]+)")) && 2 == a.length) {
                        a = a[1];
                        break a
                    }
                    a = ""
                }
                a = (new Date).getTime() - a;
                c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= a ? "M" : 0 <= a ? a : "-M"));
                b.set(d, c);
                return c
            }
        });
        this.l = a.google_iframe_oncopy
    };
    sh.prototype.set = function(a, b) {
        var c = this;
        this.l.handlers[a] = b;
        this.j.addEventListener && this.j.addEventListener("load", function() {
            var b = c.j.document.getElementById(a);
            try {
                var e = b.contentWindow.document;
                if (b.onload && e && (!e.body || !e.body.firstChild)) b.onload()
            } catch (f) {}
        }, !1)
    };
    var rh = function(a, b) {
            var c = new RegExp("\\b" + a + "=(\\d+)"),
                d = c.exec(b);
            d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
            return b
        },
        th = jb("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
    var uh = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        vh = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        wh = function() {},
        yh = function(a, b, c) {
            switch (typeof b) {
                case "string":
                    xh(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "undefined":
                    c.push("null");
                    break;
                case "object":
                    if (null == b) {
                        c.push("null");
                        break
                    }
                    if (b instanceof Array || void 0 != b.length && b.splice) {
                        var d = b.length;
                        c.push("[");
                        for (var e = "", f = 0; f < d; f++) c.push(e), yh(a, b[f], c), e = ",";
                        c.push("]");
                        break
                    }
                    c.push("{");
                    d = "";
                    for (e in b) b.hasOwnProperty(e) && (f = b[e], "function" != typeof f && (c.push(d), xh(e, c), c.push(":"), yh(a, f, c), d = ","));
                    c.push("}");
                    break;
                case "function":
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        },
        xh = function(a, b) {
            b.push('"');
            b.push(a.replace(vh, function(a) {
                if (a in uh) return uh[a];
                var b = a.charCodeAt(0),
                    c = "\\u";
                16 > b ? c += "000" : 256 > b ? c += "00" : 4096 > b && (c += "0");
                return uh[a] = c + b.toString(16)
            }));
            b.push('"')
        };
    var zh = {},
        Ah = (zh.google_ad_modifications = !0, zh.google_analytics_domain_name = !0, zh.google_analytics_uacct = !0, zh),
        Bh = function(a) {
            try {
                if (l.JSON && l.JSON.stringify && l.encodeURIComponent) {
                    var b = function() {
                        return this
                    };
                    if (Object.prototype.hasOwnProperty("toJSON")) {
                        var c = Object.prototype.toJSON;
                        Object.prototype.toJSON = b
                    }
                    if (Array.prototype.hasOwnProperty("toJSON")) {
                        var d = Array.prototype.toJSON;
                        Array.prototype.toJSON = b
                    }
                    var e = l.encodeURIComponent(l.JSON.stringify(a));
                    try {
                        var f = zc ? l.btoa(e) : Ac(vc(e), void 0)
                    } catch (g) {
                        f = "#" + Ac(vc(e), !0)
                    }
                    c && (Object.prototype.toJSON = c);
                    d && (Array.prototype.toJSON = d);
                    return f
                }
            } catch (g) {
                G.j(237, g, void 0, void 0)
            }
            return ""
        },
        Ch = function(a) {
            a.google_page_url && (a.google_page_url = String(a.google_page_url));
            var b = [];
            jc(a, function(a, d) {
                if (null != a) {
                    try {
                        var c = [];
                        yh(new wh, a, c);
                        var f = c.join("")
                    } catch (g) {}
                    f && (f = f.replace(/\//g, "\\$&"), lc(b, d, "=", f, ";"))
                }
            });
            return b.join("")
        };
    var Fh = function() {
            var a = l;
            this.l = a = void 0 === a ? l : a;
            this.v = "https://securepubads.g.doubleclick.net/static/3p_cookie.html";
            this.j = 2;
            this.o = [];
            this.s = !1;
            a: {
                a = xb(!1, 50);b: {
                    try {
                        var b = l.parent;
                        if (b && b != l) {
                            var c = b;
                            break b
                        }
                    } catch (g) {}
                    c = null
                }
                c && a.unshift(c);a.unshift(l);
                var d;
                for (c = 0; c < a.length; ++c) try {
                    var e = a[c],
                        f = Dh(e);
                    if (f) {
                        this.j = Eh(f);
                        if (2 != this.j) break a;
                        !d && y(e) && (d = e)
                    }
                } catch (g) {}
                this.l = d || this.l
            }
        },
        Hh = function(a) {
            if (2 != Gh(a)) {
                for (var b = 1 == Gh(a), c = 0; c < a.o.length; c++) try {
                    a.o[c](b)
                } catch (d) {}
                a.o = []
            }
        },
        Ih = function(a) {
            var b = Dh(a.l);
            b && 2 == a.j && (a.j = Eh(b))
        },
        Gh = function(a) {
            Ih(a);
            return a.j
        },
        Kh = function(a) {
            var b = Jh;
            b.o.push(a);
            if (2 != b.j) Hh(b);
            else if (b.s || (dc(b.l, "message", function(a) {
                    var c = Dh(b.l);
                    if (c && a.source == c && 2 == b.j) {
                        switch (a.data) {
                            case "3p_cookie_yes":
                                b.j = 1;
                                break;
                            case "3p_cookie_no":
                                b.j = 0
                        }
                        Hh(b)
                    }
                }), b.s = !0), Dh(b.l)) Hh(b);
            else {
                a = (new bc(b.l.document)).j.createElement("IFRAME");
                a.src = b.v;
                a.name = "detect_3p_cookie";
                a.style.visibility = "hidden";
                a.style.display = "none";
                a.onload = function() {
                    Ih(b);
                    Hh(b)
                };
                try {
                    b.l.document.body.appendChild(a)
                } catch (c) {}
            }
        },
        Lh = function(a, b) {
            try {
                return !!a.frames[b]
            } catch (c) {
                return !1
            }
        },
        Dh = function(a) {
            return a.frames[wb("detect_3p_cookie")] || null
        },
        Eh = function(a) {
            return Lh(a, "3p_cookie_yes") ? 1 : Lh(a, "3p_cookie_no") ? 0 : 2
        };
    var Mh = function(a, b, c, d) {
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        e.rel = c; - 1 != c.toLowerCase().indexOf("stylesheet") ? b = $a(b) : b instanceof Za ? b = $a(b) : b instanceof ob ? b instanceof ob && b.constructor === ob && b.ta === nb ? b = b.P : (u(b), b = "type_error:SafeUrl") : (b instanceof ob || (b = b.da ? b.O() : String(b), pb.test(b) || (b = "about:invalid#zClosurez"), b = qb(b)), b = b.O());
        e.href = b;
        d && "preload" == c && (e.as = d);
        (a = a.getElementsByTagName("head")[0]) && a.appendChild(e)
    };
    var Nh = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Oh = /\.(cn|com\.bi|do|sl)$/,
        Ph = function(a) {
            return Nh.test(a) && !Oh.test(a)
        },
        Qh = l,
        Jh, Rh = function(a) {
            a = "https://" + ("adservice" + a + "/adsid/integrator.js");
            var b = ["domain=" + encodeURIComponent(l.location.hostname)];
            W[3] >= +new Date && b.push("adsid=" + encodeURIComponent(W[1]));
            return a + "?" + b.join("&")
        },
        W, X, Sh = function() {
            Qh = l;
            W = Qh.googleToken = Qh.googleToken || {};
            var a = +new Date;
            W[1] && W[3] > a && 0 < W[2] || (W[1] = "", W[2] = -1, W[3] = -1, W[4] = "", W[6] = "");
            X = Qh.googleIMState = Qh.googleIMState || {};
            Ph(X[1]) || (X[1] = ".google.com");
            "array" == u(X[5]) || (X[5] = []);
            "boolean" == typeof X[6] || (X[6] = !1);
            "array" == u(X[7]) || (X[7] = []);
            q(X[8]) || (X[8] = 0)
        },
        Y = {
            N: function() {
                return 0 < X[8]
            },
            za: function() {
                X[8]++
            },
            Aa: function() {
                0 < X[8] && X[8]--
            },
            Ba: function() {
                X[8] = 0
            },
            Ga: function() {
                return !1
            },
            ca: function() {
                return X[5]
            },
            aa: function(a) {
                try {
                    a()
                } catch (b) {
                    l.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            ia: function() {
                if (!Y.N()) {
                    var a = l.document,
                        b = function(b) {
                            var c = Rh(b);
                            Mh(a, c, "preload", "script");
                            b = a.createElement("script");
                            b.type = "text/javascript";
                            b.onerror = function() {
                                return l.processGoogleToken({}, 2)
                            };
                            c = vb(c);
                            b.src = $a(c);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(b), Y.za()
                            } catch (g) {}
                        },
                        c = X[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    l.setTimeout(function() {
                        return l.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        Th = function(a) {
            Sh();
            var b = Qh.googleToken[5] || 0;
            a && (0 != b || W[3] >= +new Date ? Y.aa(a) : (Y.ca().push(a), Y.ia()));
            W[3] >= +new Date && W[2] >= +new Date || Y.ia()
        },
        Uh = function(a) {
            l.processGoogleToken = l.processGoogleToken || function(a, c) {
                var b = a;
                b = void 0 === b ? {} : b;
                c = void 0 === c ? 0 : c;
                a = b.newToken || "";
                var e = "NT" == a,
                    f = parseInt(b.freshLifetimeSecs || "", 10),
                    g = parseInt(b.validLifetimeSecs || "", 10);
                e && !g && (g = 3600);
                var h = b["1p_jar"] || "";
                b = b.pucrd || "";
                Sh();
                1 == c ? Y.Ba() : Y.Aa();
                var k = Qh.googleToken = Qh.googleToken || {},
                    m = 0 == c && a && ya(a) && !e && q(f) && 0 < f && q(g) && 0 < g && ya(h);
                e = e && !Y.N() && (!(W[3] >= +new Date) || "NT" == W[1]);
                var n = !(W[3] >= +new Date) && 0 != c;
                if (m || e || n) e = +new Date, f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && hc("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c, void 0), k[5] = c, k[1] = a, k[2] = f, k[3] = g, k[4] = h, k[6] = b, Sh();
                if (m || !Y.N()) {
                    c = Y.ca();
                    for (a = 0; a < c.length; a++) Y.aa(c[a]);
                    c.length = 0
                }
            };
            Th(a)
        },
        Vh = function(a) {
            Jh = Jh || new Fh;
            Kh(function(b) {
                b && a()
            })
        };
    var Z = wb("script"),
        Yh = function() {
            var a = B(w, H.H),
                b = B(w, H.G) || a;
            (B(w, H.u) || B(w, H.L) || b) && !w.google_sa_queue && (w.google_sa_queue = [], w.google_sl_win = w, w.google_sailm = !0, w.google_process_slots = function() {
                return Wh(w, !a)
            }, b = b ? Xh() : Xh("/show_ads_impl_single_load.js"), Mh(w.document, b, "preload", "script"), Lb(w.document, b))
        },
        Wh = Zd(215, function(a, b) {
            var c = a.google_sa_queue,
                d = c.shift();
            "function" == u(d) && Yd(216, $d, d);
            c.length && (b ? a.setTimeout(function() {
                return Wh(a, b)
            }, 0) : Wh(a, b))
        }),
        Zh = function(a) {
            return ["<", Z, ' src="', Xh(void 0 === a ? "/show_ads_impl.js" : a), '"></', Z, ">"].join("")
        },
        Xh = function(a) {
            a = void 0 === a ? "/show_ads_impl.js" : a;
            var b = Xb ? "https" : "http";
            a: {
                if (Vb) try {
                    var c = w.google_cafe_host || w.top.google_cafe_host;
                    if (c) {
                        var d = c;
                        break a
                    }
                } catch (e) {}
                d = Sa("", "pagead2.googlesyndication.com")
            }
            return qh(d, ["/pagead/js/", Ub(), "/r20170110", a, ""].join(""), b)
        },
        $h = function(a, b, c, d) {
            return function() {
                var e = !1;
                d && Ng().al(3E4);
                try {
                    var f = a.document.getElementById(b).contentWindow;
                    if (y(f)) {
                        var g = a.document.getElementById(b).contentWindow,
                            h = g.document;
                        h.body && h.body.firstChild || (/Firefox/.test(navigator.userAgent) ? h.open("text/html", "replace") : h.open(), g.google_async_iframe_close = !0, h.write(c))
                    } else {
                        var k = a.document.getElementById(b).contentWindow;
                        f = c;
                        f = String(f);
                        g = ['"'];
                        for (h = 0; h < f.length; h++) {
                            var m = f.charAt(h),
                                n = m.charCodeAt(0),
                                v = h + 1,
                                r;
                            if (!(r = kb[m])) {
                                if (31 < n && 127 > n) var p = m;
                                else {
                                    var t = void 0,
                                        A = m;
                                    if (A in lb) p = lb[A];
                                    else if (A in kb) p = lb[A] = kb[A];
                                    else {
                                        var L = A.charCodeAt(0);
                                        if (31 < L && 127 > L) t = A;
                                        else {
                                            if (256 > L) {
                                                if (t = "\\x", 16 > L || 256 < L) t += "0"
                                            } else t = "\\u", 4096 > L && (t += "0");
                                            t += L.toString(16).toUpperCase()
                                        }
                                        p = lb[A] = t
                                    }
                                }
                                r = p
                            }
                            g[v] = r
                        }
                        g.push('"');
                        k.location.replace("javascript:" + g.join(""))
                    }
                    e = !0
                } catch (Wa) {
                    k = be().google_jobrunner, Mg(k) && k.rl()
                }
                e && (e = rh("google_async_rrc", c), (new sh(a)).set(b, $h(a, b, e, !1)))
            }
        },
        ai = function(a) {
            var b = ["<iframe"];
            jc(a, function(a, d) {
                null != a && b.push(" " + d + '="' + jb(a) + '"')
            });
            b.push("></iframe>");
            return b.join("")
        },
        ci = function(a, b, c) {
            bi(a, b, c, function(a, b, f) {
                a = a.document;
                for (var d = b.id, e = 0; !d || a.getElementById(d);) d = "aswift_" + e++;
                b.id = d;
                b.name = d;
                d = Number(f.google_ad_width);
                e = Number(f.google_ad_height);
                16 == f.google_reactive_ad_format ? (f = a.createElement("div"), a = hg(b, d, e), f.innerHTML = a, c.appendChild(f.firstChild)) : (f = hg(b, d, e), c.innerHTML = f);
                return b.id
            })
        },
        bi = function(a, b, c, d) {
            var e = {},
                f = b.google_ad_height;
            e.width = '"' + b.google_ad_width + '"';
            e.height = '"' + f + '"';
            e.frameborder = '"0"';
            e.marginwidth = '"0"';
            e.marginheight = '"0"';
            e.vspace = '"0"';
            e.hspace = '"0"';
            e.allowtransparency = '"true"';
            e.scrolling = '"no"';
            e.allowfullscreen = '"true"';
            e.onload = '"' + th + '"';
            d = d(a, e, b);
            f = b.google_ad_output;
            (e = b.google_ad_format) || "html" != f && null != f || (e = b.google_ad_width + "x" + b.google_ad_height);
            f = !b.google_ad_slot || b.google_override_format || !Oa[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
            e && f ? e = e.toLowerCase() : e = "";
            b.google_ad_format = e;
            if (!q(b.google_reactive_sra_index) || !b.google_ad_unit_key) {
                e = [b.google_ad_slot, b.google_orig_ad_format || b.google_ad_format, b.google_ad_type, b.google_orig_ad_width || b.google_ad_width, b.google_orig_ad_height || b.google_ad_height];
                f = [];
                for (var g = 0, h = c; h && 25 > g; h = h.parentNode, ++g) f.push(9 !== h.nodeType && h.id || "");
                (f = f.join()) && e.push(f);
                b.google_ad_unit_key = Ob(e.join(":")).toString();
                e = [];
                for (f = 0; c && 25 > f; ++f) {
                    g = (g = 9 !== c.nodeType && c.id) ? "/" + g : "";
                    a: {
                        if (c && c.nodeName && c.parentElement) {
                            h = c.nodeName.toString().toLowerCase();
                            for (var k = c.parentElement.childNodes, m = 0, n = 0; n < k.length; ++n) {
                                var v = k[n];
                                if (v.nodeName && v.nodeName.toString().toLowerCase() === h) {
                                    if (c === v) {
                                        h = "." + m;
                                        break a
                                    }++m
                                }
                            }
                        }
                        h = ""
                    }
                    e.push((c.nodeName && c.nodeName.toString().toLowerCase()) + g + h);
                    c = c.parentElement
                }
                c = e.join() + ":";
                e = a;
                f = [];
                if (e) try {
                    var r = e.parent;
                    for (g = 0; r && r !== e && 25 > g; ++g) {
                        var p = r.frames;
                        for (h = 0; h < p.length; ++h)
                            if (e === p[h]) {
                                f.push(h);
                                break
                            }
                        e = r;
                        r = e.parent
                    }
                } catch (A) {}
                b.google_ad_dom_fingerprint = Ob(c + f.join()).toString()
            }
            r = Ch(b);
            p = Bh(b);
            var t;
            b = b.google_ad_client;
            if (!ig) b: {
                c = xb();
                for (e = 0; e < c.length; e++) try {
                    if (t = c[e].frames.google_esf) {
                        ig = t;
                        break b
                    }
                } catch (A) {}
                ig = null
            }
            ig ? t = "" : (t = {
                style: "display:none"
            }, /[^a-z0-9-]/.test(b) ? t = "" : (t["data-ad-client"] = gg(b), t.id = "google_esf", t.name = "google_esf", t.src = qh(Zb(), ["/pagead/html/", Ub(), "/r20170110/zrt_lookup.html#"].join("")), t = ai(t)));
            b = t;
            t = B(a, H.u) || B(a, H.L) || B(a, H.G) || B(a, H.H);
            c = B(a, H.G) || B(a, H.H) || B(a, oe.u);
            e = Ma;
            f = (new Date).getTime();
            a.google_t12n_vars = cf;
            g = a;
            g = gc(fc(g)) || g;
            g = g.google_unique_id;
            B(a, oe.u) ? (h = "<" + Z + ">window.google_process_slots=function(){window.google_sa_impl({iframeWin: window, pubWin: window.parent});" + ("};</" + Z + ">"), k = Zh(), h += k) : h = B(a, H.m) ? Zh("/show_ads_impl.js?" + H.m) : B(a, H.u) || B(a, H.L) ? "<" + Z + ">window.parent.google_sa_impl.call(" + ("this, window, document, location);</" + Z + ">") : B(a, H.G) || B(a, H.H) ? "<" + Z + ">window.parent.google_sa_impl({iframeWin: window, pubWin: window.parent});</" + Z + ">" : B(a, re.u) ? Zh("/show_ads_impl_le.js") : B(a, re.m) ? Zh("/show_ads_impl_le_c.js") : Zh();
            r = ["<!doctype html><html><body>", b, "<" + Z + ">", r, "google_sailm=" + c + ";", t ? "google_sl_win=window.parent;" : "", "google_unique_id=" + ("number" === typeof g ? g : 0) + ";", 'google_async_iframe_id="' + d + '";', "google_start_time=" + e + ";", p ? 'google_pub_vars="' + p + '";' : "", "google_bpp=" + (f > e ? f - e : 1) + ";", "google_async_rrc=0;google_iframe_start_time=new Date().getTime();", "</" + Z + ">", h, "</body></html>"].join("");
            b = a.document.getElementById(d) ? Og : Pg;
            d = $h(a, d, r, !0);
            t ? (a.google_sa_queue = a.google_sa_queue || [], a.google_sa_impl ? d() : a.google_sa_queue.push(d)) : b(d)
        },
        di = function(a, b) {
            var c = navigator;
            a && b && c && (a = a.document, b = gg(b), /[^a-z0-9-]/.test(b) || ((c = ab("r20160913")) && (c += "/"), Lb(a, qh("pagead2.googlesyndication.com", "/pub-config/" + c + b + ".js"))))
        };
    var ei = function(a, b, c) {
        for (var d = a.attributes, e = d.length, f = 0; f < e; f++) {
            var g = d[f];
            if (/data-/.test(g.name)) {
                var h = ab(g.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                if (!b.hasOwnProperty(h)) {
                    var k = g.value,
                        m = {},
                        n = (m.google_reactive_ad_format = Qa, m.google_allow_expandable_ads = Sb, m),
                        v = n.hasOwnProperty(h) ? n[h](k, null) : k;
                    null === v || (b[h] = v)
                }
            }
        }
        if ((B(c, ke.m) || B(c, ke.VIEWPORT) && c.document && c.document.body) && !oh(b)) {
            var r = parseInt(a.style.width, 10),
                p = ph(a, c);
            if (0 < p && r > p) {
                var t = parseInt(a.style.height, 10),
                    A = !!Oa[r + "x" + t];
                if (B(c, ke.VIEWPORT)) {
                    var L = p,
                        Wa = L;
                    if (A) {
                        var Ic = Pa(L, t);
                        if (Ic) Wa = Ic, b.google_ad_format = Ic + "x" + t + "_0ads_al";
                        else throw Error("TSS=" + L);
                    }
                    b.google_ad_resize = 1;
                    b.google_ad_width = Wa;
                    A || (b.google_ad_format = null, b.google_override_format = !0);
                    p = Wa;
                    a.style.width = p + "px";
                    var Jc = Wg(p, "auto", c, a, b).R;
                    b.google_responsive_formats = null;
                    Jc.minWidth() > p && !A && (b.google_ad_width = Jc.minWidth(), a.style.width = Jc.minWidth() + "px")
                } else B(c, ke.m) && (b.google_ad_resize = 0)
            }
        }
        var mf = b.google_reactive_ad_format;
        if (!b.google_enable_content_recommendations || 1 != mf && 2 != mf) {
            var nf = oh(b);
            if (nf) {
                var E = a.offsetWidth || (b.google_ad_resize ? parseInt(a.style.width, 10) : 0);
                a: {
                    var yb = b.google_ad_height || zg(a, c, "height");
                    switch (nf) {
                        case 5:
                            jh(E, b);
                            if (E < Ta)
                                if (Tg()) {
                                    kh(b, "mobile_banner_image_sidebyside", 1, 12);
                                    var of = +b.google_content_recommendation_columns_num;
                                    var pf = (E - 8 * of -8) / of ;
                                    var qf = b.google_content_recommendation_ui_type,
                                        rf = b.google_content_recommendation_rows_num - 1;
                                    var ba = new R(9, new gh(E, Math.floor(pf / 1.91 + 70) + Math.floor((pf * ch[qf] + dh[qf]) * rf + 8 * rf + 8)))
                                } else kh(b, "image_sidebyside", 1, 13), ba = new R(9, ih(E));
                            else kh(b, "image_stacked", 4, 2), ba = new R(9, ih(E));
                            break a;
                        case 9:
                            jh(E, b);
                            var Fa = b.google_content_recommendation_ui_type.split(","),
                                zb = b.google_content_recommendation_columns_num.split(","),
                                sf = b.google_content_recommendation_rows_num.split(",");
                            b: {
                                if (Fa.length == zb.length && zb.length == sf.length) {
                                    if (1 == Fa.length) {
                                        var tf = 0;
                                        break b
                                    }
                                    if (2 == Fa.length) {
                                        tf = E < Ta ? 0 : 1;
                                        break b
                                    }
                                    throw new S("The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + ("you are providing " + Fa.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".'));
                                }
                                if (Fa.length != zb.length) throw new S('The parameter length of data-matched-content-ui-type does not match data-matched-content-columns-num. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".');
                                throw new S('The parameter length of data-matched-content-columns-num does not match data-matched-content-rows-num. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".');
                            }
                            var Kc = tf,
                                Lc = Fa[Kc];
                            var Ab = 0 == Lc.lastIndexOf("pub_control_", 0) ? Lc : "pub_control_" + Lc;
                            for (var Ga, Mc = +zb[Kc], ri = fh[Ab], Ha = Mc; E / Ha < ri && 1 < Ha;) Ha--;
                            Ha !== Mc && l.console && l.console.warn("adsbygoogle warning: data-matched-content-columns-num " + Mc + " is too large. We override it to " + Ha + ".");
                            Ga = Ha;
                            var eb = +sf[Kc];
                            kh(b, Ab, Ga, eb);
                            if (Number.isNaN(Ga) || 0 === Ga) throw new S("Wrong value for data-matched-content-columns-num");
                            if (Number.isNaN(eb) || 0 === eb) throw new S("Wrong value for data-matched-content-rows-num");
                            var Nc = Math.floor(((E - 8 * Ga - 8) / Ga * ch[Ab] + dh[Ab]) * eb + 8 * eb + 8);
                            if (1500 < E) throw new S("Calculated slot width is too large: " + E);
                            if (1500 < Nc) throw new S("Calculated slot height is too large: " + Nc);
                            ba = new R(9, new gh(E, Nc));
                            break a;
                        case 4:
                            var Oc = Fg(c, a),
                                Bb = B(c, ge.V) ? 250 : 190,
                                Cb = 90;
                            Bb = void 0 === Bb ? 130 : Bb;
                            Cb = void 0 === Cb ? 30 : Cb;
                            var uf = Rg(nh, Ag(E));
                            if (!uf) throw new S("No link unit size for width=" + E + "px");
                            var si = Math.min(E, 1200),
                                vf = uf.height();
                            Oc = Math.max(vf, Oc);
                            var wf = (new R(10, new V(si, Math.min(Oc, 15 == vf ? Cb : Bb)))).R,
                                ti = wf.minWidth(),
                                xf = wf.height();
                            15 <= yb && (xf = yb);
                            ba = new R(10, new V(ti, xf));
                            break a;
                        case 8:
                            b: {
                                var ca = E,
                                    Ia = b.google_ad_layout || "image-top";
                                if ("in-article" == Ia) {
                                    var Ja = ca;
                                    if ("false" != b.google_full_width_responsive && (C(c, fe.I) || C(c, fe.J) || C(c, fe.m)) && ug(c, a, Ja, .2, b)) {
                                        var Pc = I(c).clientWidth;
                                        if (Pc)
                                            if (b.google_full_width_responsive_allowed = !0, C(c, fe.m)) ca = Ja;
                                            else {
                                                var yf = a.parentElement;
                                                if (yf) {
                                                    d: for (var ra = a, zf = 0; 100 > zf && ra.parentElement; ++zf) {
                                                        for (var Af = ra.parentElement.childNodes, Qc = 0; Qc < Af.length; ++Qc) {
                                                            var Bf = Af[Qc];
                                                            if (Bf != ra && xg(c, Bf)) break d
                                                        }
                                                        ra = ra.parentElement;
                                                        ra.style.width = "100%";
                                                        ra.style.height = "auto"
                                                    }
                                                    yg(c, a, yf, Ja, Pc, b);ca = Pc
                                                }
                                                else ca = Ja
                                            }
                                        else ca = Ja
                                    } else ca = Ja
                                }
                                if (250 > ca) throw new S("Fluid responsive ads must be at least 250px wide: availableWidth=" + ca);
                                var Ka = Math.min(1200, Math.floor(ca));
                                if (yb && "in-article" != Ia) {
                                    var Rc = Math.ceil(yb);
                                    if (50 > Rc) throw new S("Fluid responsive ads must be at least 50px tall: height=" + Rc);
                                    ba = new R(11, new N(Ka, Rc))
                                } else {
                                    if ("in-article" != Ia) {
                                        var Cf = b.google_ad_layout_key;
                                        if (Cf) {
                                            var Df = "" + Cf;
                                            var ui = Math.pow(10, 3),
                                                Sc = Df.match(/([+-][0-9a-z]+)/g),
                                                Ef = Sc && Sc.length;
                                            if (Ef) {
                                                for (var Ff = [], Tc = 0; Tc < Ef; Tc++) Ff.push(parseInt(Sc[Tc], 36) / ui);
                                                var Gf = Ff
                                            } else Gf = null;
                                            var Uc = Gf;
                                            if (!Uc) throw new S("Invalid data-ad-layout-key value: " + Df);
                                            for (var vi = (Ka + -725) / 1E3, Hf = 0, If = 1, wi = Uc.length, Vc = 0; Vc < wi; Vc++) Hf += Uc[Vc] * If, If *= vi;
                                            var sa = Math.ceil(1E3 * Hf - -725 + 10);
                                            if (isNaN(sa)) throw new S("Invalid height: height=" + sa);
                                            if (50 > sa) throw new S("Fluid responsive ads must be at least 50px tall: height=" + sa);
                                            if (1200 < sa) throw new S("Fluid responsive ads must be at most 1200px tall: height=" + sa);
                                            ba = new R(11, new N(Ka, sa));
                                            break b
                                        }
                                    }
                                    var Jf = lh[Ia];
                                    if (!Jf) throw new S("Invalid data-ad-layout value: " + Ia);
                                    var Kf = Math.ceil(Jf(Ka));
                                    ba = new R(11, "in-article" == Ia ? new mh(Ka, Kf) : new N(Ka, Kf))
                                }
                            }
                            break a
                    }
                    ba = void 0
                }
                var Lf = ba;
                var Mf = Lf ? Lf : Wg(E, b.google_ad_format, c, a, b);
                var Wc = Mf.R;
                b.google_ad_width = Wc.j(E);
                var xi = b.google_ad_height = Wc.height();
                a.style.height = xi + "px";
                b.google_full_width_responsive_allowed && (b.gfwrnh = b.google_ad_height + "px");
                b.google_ad_resizable = !0;
                b.google_ad_format = Wc.l(E);
                b.google_override_format = 1;
                b.google_responsive_auto_format = Mf.wa;
                b.google_loader_features_used = 128
            } else {
                if (!Qb.test(b.google_ad_width) && !Pb.test(a.style.width) || !Qb.test(b.google_ad_height) && !Pb.test(a.style.height)) {
                    var Db = z(a, c);
                    Db && (a.style.width = Db.width, a.style.height = Db.height, pg(Db, b));
                    b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                    b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                    b.google_loader_features_used = 256;
                    b.google_responsive_auto_format = fc(c) ? 14 : 12
                } else if (pg(a.style, b), !(b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height)) {
                    var yi = a.style.width;
                    a.style.width = "100%";
                    var zi = a.offsetWidth;
                    a.style.width = yi;
                    b.google_available_width = zi
                }
                if (C(c, "153762914") || C(c, "153762975") || C(c, "164692081") || Hg(c)) {
                    b.google_resizing_allowed = !1;
                    var Nf = !0
                } else Nf = !1;
                if (Nf) {
                    var ja = a.parentElement;
                    if (ja) {
                        var Eb = b.google_ad_format,
                            Xc;
                        if (Xc = Gg.test(Eb) || !Eb) {
                            var Fb = sc(c),
                                Yc;
                            if (!(Yc = null == Fb)) {
                                var Of = I(Fb).clientWidth,
                                    Gb;
                                if (!(Gb = !(488 > Of && 320 < Of) || !(Fb.innerHeight >= Fb.innerWidth) || tg(ja, c))) a: {
                                    b: {
                                        for (var Hb = ja, Pf = 0; 100 > Pf && Hb; Pf++) {
                                            var Qf = z(Hb, c);
                                            if (Qf && -1 != Qf.display.indexOf("table")) {
                                                var Rf = !0;
                                                break b
                                            }
                                            Hb = Hb.parentElement
                                        }
                                        Rf = !1
                                    }
                                    if (Rf)
                                        for (var Ib = ja, Sf = !1, Tf = 0; 100 > Tf && Ib; Tf++) {
                                            var Zc = Ib.style;
                                            if ("auto" == Zc.margin || "auto" == Zc.marginLeft || "auto" == Zc.marginRight) Sf = !0;
                                            if (Sf) {
                                                Gb = !0;
                                                break a
                                            }
                                            Ib = Ib.parentElement
                                        }
                                    Gb = !1
                                }
                                Yc = Gb
                            }
                            Xc = (Yc ? !1 : !0) && rg(a, c)
                        }
                        if (Xc) {
                            var Uf = a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width,
                                ka = I(c).clientWidth;
                            if (ka) {
                                var Vf = z(ja, c);
                                if (Vf) {
                                    var $c = wg(Vf, ka, Uf),
                                        Ai = $c.ga,
                                        Bi = $c.direction,
                                        Wf = $c.ba;
                                    if (!(5 > Wf || .4 < Wf / ka)) {
                                        var Jb = b.google_resizing_allowed = !0;
                                        if (C(c, "164692081") || Hg(c)) a: {
                                            for (var da = ja, Xf = 0; 100 > Xf && da; Xf++) {
                                                var Kb = da.style;
                                                if (Kb && Kb.height && "auto" != Kb.height && "inherit" != Kb.height) {
                                                    Jb = !1;
                                                    break a
                                                }
                                                da = da.parentElement
                                            }
                                            da = ja;
                                            for (var Yf = 0; 100 > Yf && da; Yf++) {
                                                var Zf = z(da, c);
                                                if (Zf && "hidden" == Zf.overflowY) {
                                                    Jb = !1;
                                                    break a
                                                }
                                                da = da.parentElement
                                            }
                                            Jb = !0
                                        }
                                        var $f = -1 * (vg(ja) + Ai) + "px";
                                        if (C(c, "153762975") || Hg(c)) "rtl" == Bi ? a.style.marginRight = $f : a.style.marginLeft = $f, a.style.width = ka + "px", a.style.zIndex = 2147483647;
                                        var ag = "",
                                            ta = parseInt(a.offsetHeight || a.style.height || b.google_ad_height, 10);
                                        if (Eb) {
                                            var bg = Eb.match(Gg);
                                            ag = bg[3];
                                            ta = parseInt(bg[2], 10)
                                        }
                                        Jb && Hg(c) && 1.15 < Uf / ta && (qg(a, c) < I(c).clientHeight || (ta = Math.round(5 * ka / 6)));
                                        if (C(c, "153762975") || Hg(c)) b.google_ad_format = ka + "x" + ta + ag, b.google_ad_width = ka, b.google_ad_height = ta, a.style.height = ta + "px";
                                        b.google_resizing_width = ka;
                                        b.google_resizing_height = ta
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else b.google_ad_width = I(c).clientWidth, b.google_ad_height = 50, a.style.display = "none"
    };
    var Pe = new function() {
        this.j = ["google-auto-placed"];
        this.l = {
            google_tag_origin: "qs"
        }
    };
    var fi = !1,
        gi = 0,
        hi = !1,
        ii = !1,
        ji = function(a) {
            return rc.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
        },
        li = function(a, b) {
            var c = window;
            a.setAttribute("data-adsbygoogle-status", "done");
            ki(a, b, c)
        },
        ki = function(a, b, c) {
            var d = qc();
            d.google_spfd || (d.google_spfd = ei);
            ei(a, b, c);
            if (!mi(a, b, c)) {
                if (b.google_reactive_ads_config) {
                    if (fi) throw new S("Only one 'enable_page_level_ads' allowed per page.");
                    fi = !0
                } else b.google_ama || nc(c);
                hi || (hi = !0, di(c, b.google_ad_client));
                jc(Ah, function(a, d) {
                    b[d] = b[d] || c[d]
                });
                b.google_loader_used = "aa";
                b.google_reactive_tag_first = 1 === gi;
                if ((d = b.google_ad_output) && "html" != d && "js" != d) throw new S("No support for google_ad_output=" + d);
                Yd(164, $d, function() {
                    ci(c, b, a)
                })
            }
        },
        mi = function(a, b, c) {
            var d = b.google_reactive_ads_config;
            if (d) {
                var e = d.page_level_pubvars;
                var f = (Aa(e) ? e : {}).google_tag_origin
            }
            if (b.google_ama || "js" === b.google_ad_output) return !1;
            var g = b.google_ad_slot;
            e = c.google_ad_modifications;
            !e || tc(e.ad_whitelist, g, f || b.google_tag_origin) ? e = null : (f = e.space_collapsing || "none", e = (g = tc(e.ad_blacklist, g)) ? {
                Z: !0,
                ja: g.space_collapsing || f
            } : e.remove_ads_by_default ? {
                Z: !0,
                ja: f
            } : null);
            if (e && e.Z && "on" != b.google_adtest) return "slot" == e.ja && (null !== Rb(a.getAttribute("width")) && a.setAttribute("width", 0), null !== Rb(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0;
            if ((e = z(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
            a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
            return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (l.console && l.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
        },
        ni = function(a) {
            for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c]) {
                var e = d;
                if (ji(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
            }
            return null
        },
        pi = function(a) {
            if (!ii) {
                ii = !0;
                try {
                    var b = l.localStorage.getItem("google_ama_config")
                } catch (A) {
                    b = null
                }
                try {
                    var c = b ? new hd(b ? JSON.parse(b) : null) : null
                } catch (A) {
                    c = null
                }
                if (b = c)
                    if (c = Fc(b, id, 3), !c || F(c, 1) <= +new Date) try {
                        l.localStorage.removeItem("google_ama_config")
                    } catch (A) {
                        we(l, {
                            lserr: 1
                        })
                    } else {
                        try {
                            a: {
                                var d = Ec(b, 5);
                                if (0 < d.length) var e = d;
                                else {
                                    c: {
                                        var f = l.location.pathname,
                                            g = Gc(b, kd, 7);d = {};
                                        for (c = 0; c < g.length; ++c) {
                                            var h = F(g[c], 1);
                                            q(h) && !d[h] && (d[h] = g[c])
                                        }
                                        for (var k = f.replace(/(^\/)|(\/$)/g, "");;) {
                                            var m = Ob(k);
                                            if (d[m]) {
                                                var n = d[m];
                                                break c
                                            }
                                            if (!k) {
                                                n = null;
                                                break c
                                            }
                                            k = k.substring(0, k.lastIndexOf("/"))
                                        }
                                    }
                                    e = n ? Ec(n, 2) : []
                                }
                                for (n = 0; n < e.length; n++)
                                    if (1 == e[n]) {
                                        var v = !0;
                                        break a
                                    }
                                v = !1
                            }
                            if (v) {
                                var r = new Ue;
                                (new Ye(new Qe(a, b), r)).start();
                                var p = r.l;
                                var t = Ea(af, l);
                                if (p.T) throw Error("Then functions already set.");
                                p.T = Ea($e, l);
                                p.ka = t;
                                We(p)
                            }
                        }
                        catch (A) {
                            we(l, {
                                atf: -1
                            })
                        }
                        B(l, ve.u) || (v = oi(), l.document.documentElement.appendChild(v), p = {}, a = (p.google_ama = !0, p.google_ad_client = a, p), li(v, a))
                    }
            }
        },
        oi = function() {
            var a = document.createElement("ins");
            a.className = "adsbygoogle";
            a.style.display = "none";
            return a
        },
        qi = function(a) {
            var b = {};
            jc(uc, function(c, d) {
                !1 === a.enable_page_level_ads ? b[d] = !1 : a.hasOwnProperty(d) && (b[d] = a[d])
            });
            Aa(a.enable_page_level_ads) && (b.page_level_pubvars = a.enable_page_level_ads);
            var c = oi();
            Na.body.appendChild(c);
            var d = {};
            d = (d.google_reactive_ads_config = b, d.google_ad_client = a.google_ad_client, d);
            li(c, d)
        },
        Ci = function(a) {
            var b = sc(window);
            if (!b) throw new S("Page-level tag does not work inside iframes.");
            b.google_reactive_ads_global_state || (b.google_reactive_ads_global_state = new bf);
            b.google_reactive_ads_global_state.wasPlaTagProcessed = !0;
            Na.body ? qi(a) : dc(Na, "DOMContentLoaded", Zd(191, function() {
                qi(a)
            }))
        },
        Di = function(a, b, c, d) {
            return Sg(b) ? (G.v = !0, G.j(a, b, .1, d, "puberror"), !1) : G.j(a, b, c, d)
        },
        Ei = function(a, b, c, d) {
            return Sg(b) ? !1 : G.j(a, b, c, d)
        },
        Gi = function(a) {
            var b = {};
            Yd(165, Di, function() {
                Fi(a, b)
            }, function(c) {
                c.client = c.client || b.google_ad_client || a.google_ad_client;
                c.slotname = c.slotname || b.google_ad_slot;
                c.tag_origin = c.tag_origin || b.google_tag_origin
            })
        },
        Fi = function(a, b) {
            Ma = (new Date).getTime();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if (ya(a.google_ad_client)) {
                        var c = !0;
                        break a
                    }
                    throw new S("'google_ad_client' is missing from the tag config.");
                }
                c = !1
            }
            if (c) 0 === gi && (gi = 1), pi(a.google_ad_client), Ci(a);
            else {
                0 === gi && (gi = 2);
                c = a.element;
                (a = a.params) && jc(a, function(a, c) {
                    b[c] = a
                });
                if ("js" === b.google_ad_output) {
                    l.google_ad_request_done_fns = l.google_ad_request_done_fns || [];
                    l.google_radlink_request_done_fns = l.google_radlink_request_done_fns || [];
                    if (b.google_ad_request_done) {
                        if ("function" != u(b.google_ad_request_done)) throw new S("google_ad_request_done parameter must be a function.");
                        l.google_ad_request_done_fns.push(b.google_ad_request_done);
                        delete b.google_ad_request_done;
                        b.google_ad_request_done_index = l.google_ad_request_done_fns.length - 1
                    } else throw new S("google_ad_request_done parameter must be specified.");
                    if (b.google_radlink_request_done) {
                        if ("function" != u(b.google_radlink_request_done)) throw new S("google_radlink_request_done parameter must be a function.");
                        l.google_radlink_request_done_fns.push(b.google_radlink_request_done);
                        delete b.google_radlink_request_done;
                        b.google_radlink_request_done_index = l.google_radlink_request_done_fns.length - 1
                    }
                    a = oi();
                    l.document.documentElement.appendChild(a);
                    c = a
                }
                if (c) {
                    if (!ji(c) && (c.id ? c = ni(c.id) : c = null, !c)) throw new S("'element' has already been filled.");
                    if (!("innerHTML" in c)) throw new S("'element' is not a good DOM element.");
                } else if (c = ni(), !c) throw new S("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
                li(c, b)
            }
        },
        Ii = function() {
            Xd();
            Yd(166, Ei, Hi)
        },
        Hi = function() {
            var a = gc(fc(w)) || w;
            eg(a);
            Ud(B(w, je.w) || B(w, he.w) || B(w, he.U));
            Yh();
            if (B(w, se.Y) || B(w, se.M) || B(w, se.X) || B(w, se.W)) Sh(), Ph(".google.co.in") && (X[1] = ".google.co.in"), B(w, se.M) ? (a = cc(), Vh(a), Uh(a)) : Uh(null);
            if ((a = window.adsbygoogle) && a.shift) try {
                for (var b, c = 20; 0 < a.length && (b = a.shift()) && 0 < c;) Gi(b), --c
            } catch (d) {
                throw window.setTimeout(Ii, 0), d;
            }
            if (!a || !a.loaded) {
                B(w, ue.u) && (b = Ae() ? Sa("", "pagead2.googlesyndication.com") : Zb(), Mh(qc().document, b, "preconnect"));
                window.adsbygoogle = {
                    push: Gi,
                    loaded: !0
                };
                a && Ji(a.onload);
                try {
                    Object.defineProperty(window.adsbygoogle, "onload", {
                        set: Ji
                    })
                } catch (d) {}
            }
        },
        Ji = function(a) {
            kc(a) && window.setTimeout(a, 0)
        };
    Ii();
}).call(this);