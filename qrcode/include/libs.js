/*
 AngularJS v1.1.4
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M, V, s) {
    'use strict';

    function gc() {
        var b = M.angular;
        M.angular = hc;
        return b
    }

    function o(b, a, c) {
        var d;
        if (b)
            if (I(b))
                for (d in b) d != "prototype" && d != "length" && d != "name" && b.hasOwnProperty(d) && a.call(c, b[d], d);
            else
        if (b.forEach && b.forEach !== o) b.forEach(a, c);
        else if (!b || typeof b.length !== "number" ? 0 : typeof b.hasOwnProperty != "function" && typeof b.constructor != "function" || b instanceof P || ca && b instanceof ca || Da.call(b) !== "[object Object]" || typeof b.callee === "function")
            for (d = 0; d < b.length; d++) a.call(c, b[d], d);
        else
            for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d);
        return b
    }

    function rb(b) {
        var a = [],
            c;
        for (c in b) b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }

    function ic(b, a, c) {
        for (var d = rb(b), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
        return d
    }

    function sb(b) {
        return function(a, c) {
            b(c, a)
        }
    }

    function Ea() {
        for (var b = Z.length, a; b;) {
            b--;
            a = Z[b].charCodeAt(0);
            if (a == 57) return Z[b] = "A", Z.join("");
            if (a == 90) Z[b] = "0";
            else return Z[b] = String.fromCharCode(a + 1), Z.join("")
        }
        Z.unshift("0");
        return Z.join("")
    }

    function y(b) {
        o(arguments, function(a) {
            a !== b && o(a, function(a, d) {
                b[d] = a
            })
        });
        return b
    }

    function K(b) {
        return parseInt(b, 10)
    }

    function Fa(b, a) {
        return y(new(y(function() {}, {
            prototype: b
        })), a)
    }

    function t() {}

    function pa(b) {
        return b
    }

    function Q(b) {
        return function() {
            return b
        }
    }

    function u(b) {
        return typeof b == "undefined"
    }

    function w(b) {
        return typeof b != "undefined"
    }

    function L(b) {
        return b != null && typeof b == "object"
    }

    function x(b) {
        return typeof b == "string"
    }

    function Za(b) {
        return typeof b == "number"
    }

    function qa(b) {
        return Da.apply(b) == "[object Date]"
    }

    function C(b) {
        return Da.apply(b) == "[object Array]"
    }

    function I(b) {
        return typeof b == "function"
    }

    function ra(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }

    function S(b) {
        return x(b) ? b.replace(/^\s*/, "").replace(/\s*$/, "") : b
    }

    function jc(b) {
        return b && (b.nodeName || b.bind && b.find)
    }

    function $a(b, a, c) {
        var d = [];
        o(b, function(b, f, i) {
            d.push(a.call(c, b, f, i))
        });
        return d
    }

    function Ga(b, a) {
        if (b.indexOf) return b.indexOf(a);
        for (var c = 0; c < b.length; c++)
            if (a === b[c]) return c;
        return -1
    }

    function sa(b, a) {
        var c = Ga(b, a);
        c >= 0 && b.splice(c, 1);
        return a
    }

    function W(b, a) {
        if (ra(b) || b && b.$evalAsync && b.$watch) throw Error("Can't copy Window or Scope");
        if (a) {
            if (b === a) throw Error("Can't copy equivalent objects or arrays");
            if (C(b))
                for (var c = a.length = 0; c < b.length; c++) a.push(W(b[c]));
            else
                for (c in o(a, function(b, c) {
                    delete a[c]
                }), b) a[c] = W(b[c])
        } else(a = b) && (C(b) ? a = W(b, []) : qa(b) ? a = new Date(b.getTime()) : L(b) && (a = W(b, {})));
        return a
    }

    function kc(b, a) {
        var a = a || {}, c;
        for (c in b) b.hasOwnProperty(c) && c.substr(0, 2) !== "$$" && (a[c] = b[c]);
        return a
    }

    function ja(b, a) {
        if (b === a) return !0;
        if (b === null || a === null) return !1;
        if (b !== b && a !== a) return !0;
        var c = typeof b,
            d;
        if (c == typeof a && c == "object")
            if (C(b)) {
                if ((c = b.length) == a.length) {
                    for (d = 0; d < c; d++)
                        if (!ja(b[d], a[d])) return !1;
                    return !0
                }
            } else
        if (qa(b)) return qa(a) && b.getTime() == a.getTime();
        else {
            if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || ra(b) || ra(a)) return !1;
            c = {};
            for (d in b)
                if (!(d.charAt(0) === "$" || I(b[d]))) {
                    if (!ja(b[d], a[d])) return !1;
                    c[d] = !0
                }
            for (d in a)
                if (!c[d] && d.charAt(0) !== "$" && a[d] !== s && !I(a[d])) return !1;
            return !0
        }
        return !1
    }

    function ab(b, a) {
        var c = arguments.length > 2 ? ka.call(arguments, 2) : [];
        return I(a) && !(a instanceof RegExp) ? c.length ? function() {
            return arguments.length ? a.apply(b, c.concat(ka.call(arguments, 0))) : a.apply(b, c)
        } : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        } : a
    }

    function lc(b, a) {
        var c = a;
        /^\$+/.test(b) ? c = s : ra(a) ? c = "$WINDOW" : a && V === a ? c = "$DOCUMENT" : a && a.$evalAsync && a.$watch && (c = "$SCOPE");
        return c
    }

    function da(b, a) {
        return JSON.stringify(b, lc, a ? "  " : null)
    }

    function tb(b) {
        return x(b) ? JSON.parse(b) : b
    }

    function Ha(b) {
        b && b.length !== 0 ? (b = J("" + b), b = !(b == "f" || b == "0" || b == "false" || b == "no" || b == "n" || b == "[]")) : b = !1;
        return b
    }

    function ta(b) {
        b = v(b).clone();
        try {
            b.html("")
        } catch (a) {}
        var c = v("<div>").append(b).html();
        try {
            return b[0].nodeType === 3 ? J(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + J(b)
            })
        } catch (d) {
            return J(c)
        }
    }

    function bb(b) {
        var a = {}, c, d;
        o((b || "").split("&"), function(b) {
            b && (c = b.split("="), d = decodeURIComponent(c[0]), a[d] = w(c[1]) ? decodeURIComponent(c[1]) : !0)
        });
        return a
    }

    function ub(b) {
        var a = [];
        o(b, function(b, d) {
            a.push(ua(d, !0) + (b === !0 ? "" : "=" + ua(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function cb(b) {
        return ua(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function ua(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
    }

    function mc(b, a) {
        function c(a) {
            a && d.push(a)
        }
        var d = [b],
            e, f, i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
            h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        o(i, function(a) {
            i[a] = !0;
            c(V.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (o(b.querySelectorAll("." + a), c), o(b.querySelectorAll("." + a + "\\:"), c), o(b.querySelectorAll("[" + a + "]"), c))
        });
        o(d, function(a) {
            if (!e) {
                var b = h.exec(" " + a.className + " ");
                b ? (e = a, f = (b[2] || "").replace(/\s+/g, ",")) : o(a.attributes, function(b) {
                    if (!e && i[b.name]) e = a, f = b.value
                })
            }
        });
        e && a(e, f ? [f] : [])
    }

    function vb(b, a) {
        var c = function() {
            b = v(b);
            a = a || [];
            a.unshift(["$provide",
                function(a) {
                    a.value("$rootElement", b)
                }
            ]);
            a.unshift("ng");
            var c = wb(a);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector",
                function(a, b, c, d) {
                    a.$apply(function() {
                        b.data("$injector", d);
                        c(b)(a)
                    })
                }
            ]);
            return c
        }, d = /^NG_DEFER_BOOTSTRAP!/;
        if (M && !d.test(M.name)) return c();
        M.name = M.name.replace(d, "");
        Ia.resumeBootstrap = function(b) {
            o(b, function(b) {
                a.push(b)
            });
            c()
        }
    }

    function db(b, a) {
        a = a || "_";
        return b.replace(nc, function(b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }

    function eb(b, a, c) {
        if (!b) throw Error("Argument '" + (a || "?") + "' is " + (c || "required"));
        return b
    }

    function va(b, a, c) {
        c && C(b) && (b = b[b.length - 1]);
        eb(I(b), a, "not a function, got " + (b && typeof b == "object" ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function oc(b) {
        function a(a, b, e) {
            return a[b] || (a[b] = e())
        }
        return a(a(b, "angular", Object), "module", function() {
            var b = {};
            return function(d, e, f) {
                e && b.hasOwnProperty(d) && (b[d] = null);
                return a(b, d, function() {
                    function a(c, d, e) {
                        return function() {
                            b[e || "push"]([c, d, arguments]);
                            return m
                        }
                    }
                    if (!e) throw Error("No module: " + d);
                    var b = [],
                        c = [],
                        g = a("$injector", "invoke"),
                        m = {
                            _invokeQueue: b,
                            _runBlocks: c,
                            requires: e,
                            name: d,
                            provider: a("$provide", "provider"),
                            factory: a("$provide", "factory"),
                            service: a("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            animation: a("$animationProvider", "register"),
                            filter: a("$filterProvider", "register"),
                            controller: a("$controllerProvider", "register"),
                            directive: a("$compileProvider", "directive"),
                            config: g,
                            run: function(a) {
                                c.push(a);
                                return this
                            }
                        };
                    f && g(f);
                    return m
                })
            }
        })
    }

    function Ja(b) {
        return b.replace(pc, function(a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(qc, "Moz$1")
    }

    function fb(b, a) {
        function c() {
            var e;
            for (var b = [this], c = a, i, h, j, g, m, k; b.length;) {
                i = b.shift();
                h = 0;
                for (j = i.length; h < j; h++) {
                    g = v(i[h]);
                    c ? g.triggerHandler("$destroy") : c = !c;
                    m = 0;
                    for (e = (k = g.children()).length, g = e; m < g; m++) b.push(ca(k[m]))
                }
            }
            return d.apply(this, arguments)
        }
        var d = ca.fn[b],
            d = d.$original || d;
        c.$original = d;
        ca.fn[b] = c
    }

    function P(b) {
        if (b instanceof P) return b;
        if (!(this instanceof P)) {
            if (x(b) && b.charAt(0) != "<") throw Error("selectors not implemented");
            return new P(b)
        }
        if (x(b)) {
            var a = V.createElement("div");
            a.innerHTML = "<div>&#160;</div>" + b;
            a.removeChild(a.firstChild);
            gb(this, a.childNodes);
            this.remove()
        } else gb(this, b)
    }

    function hb(b) {
        return b.cloneNode(!0)
    }

    function wa(b) {
        xb(b);
        for (var a = 0, b = b.childNodes || []; a < b.length; a++) wa(b[a])
    }

    function yb(b, a, c) {
        var d = $(b, "events");
        $(b, "handle") && (u(a) ? o(d, function(a, c) {
            ib(b, c, a);
            delete d[c]
        }) : u(c) ? (ib(b, a, d[a]), delete d[a]) : sa(d[a], c))
    }

    function xb(b) {
        var a = b[Ka],
            c = La[a];
        c && (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), yb(b)), delete La[a], b[Ka] = s)
    }

    function $(b, a, c) {
        var d = b[Ka],
            d = La[d || -1];
        if (w(c)) d || (b[Ka] = d = ++rc, d = La[d] = {}), d[a] = c;
        else return d && d[a]
    }

    function zb(b, a, c) {
        var d = $(b, "data"),
            e = w(c),
            f = !e && w(a),
            i = f && !L(a);
        !d && !i && $(b, "data", d = {});
        if (e) d[a] = c;
        else if (f)
            if (i) return d && d[a];
            else y(d, a);
            else return d
    }

    function Ma(b, a) {
        return (" " + b.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") > -1
    }

    function Ab(b, a) {
        a && o(a.split(" "), function(a) {
            b.className = S((" " + b.className + " ").replace(/[\n\t]/g, " ").replace(" " + S(a) + " ", " "))
        })
    }

    function Bb(b, a) {
        a && o(a.split(" "), function(a) {
            if (!Ma(b, a)) b.className = S(b.className + " " + S(a))
        })
    }

    function gb(b, a) {
        if (a)
            for (var a = !a.nodeName && w(a.length) && !ra(a) ? a : [a], c = 0; c < a.length; c++) b.push(a[c])
    }

    function Cb(b, a) {
        return Na(b, "$" + (a || "ngController") + "Controller")
    }

    function Na(b, a, c) {
        b = v(b);
        for (b[0].nodeType == 9 && (b = b.find("html")); b.length;) {
            if (c = b.data(a)) return c;
            b = b.parent()
        }
    }

    function Db(b, a) {
        var c = Oa[a.toLowerCase()];
        return c && Eb[b.nodeName] && c
    }

    function sc(b, a) {
        var c = function(c, e) {
            if (!c.preventDefault) c.preventDefault = function() {
                c.returnValue = !1
            };
            if (!c.stopPropagation) c.stopPropagation = function() {
                c.cancelBubble = !0
            };
            if (!c.target) c.target = c.srcElement || V;
            if (u(c.defaultPrevented)) {
                var f = c.preventDefault;
                c.preventDefault = function() {
                    c.defaultPrevented = !0;
                    f.call(c)
                };
                c.defaultPrevented = !1
            }
            c.isDefaultPrevented = function() {
                return c.defaultPrevented
            };
            o(a[e || c.type], function(a) {
                a.call(b, c)
            });
            X <= 8 ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
        };
        c.elem = b;
        return c
    }

    function la(b) {
        var a = typeof b,
            c;
        if (a == "object" && b !== null)
            if (typeof(c = b.$$hashKey) == "function") c = b.$$hashKey();
            else {
                if (c === s) c = b.$$hashKey = Ea()
            } else c = b;
        return a + ":" + c
    }

    function Pa(b) {
        o(b, this.put, this)
    }

    function Fb(b) {
        var a, c;
        if (typeof b == "function") {
            if (!(a = b.$inject)) a = [], c = b.toString().replace(tc, ""), c = c.match(uc), o(c[1].split(vc), function(b) {
                b.replace(wc, function(b, c, d) {
                    a.push(d)
                })
            }), b.$inject = a
        } else C(b) ? (c = b.length - 1, va(b[c], "fn"), a = b.slice(0, c)) : va(b, "fn", !0);
        return a
    }

    function wb(b) {
        function a(a) {
            return function(b, c) {
                if (L(b)) o(b, sb(a));
                else return a(b, c)
            }
        }

        function c(a, b) {
            if (I(b) || C(b)) b = k.instantiate(b);
            if (!b.$get) throw Error("Provider " + a + " must define $get factory method.");
            return m[a + h] = b
        }

        function d(a, b) {
            return c(a, {
                $get: b
            })
        }

        function e(a) {
            var b = [];
            o(a, function(a) {
                if (!g.get(a))
                    if (g.put(a, !0), x(a)) {
                        var c = xa(a);
                        b = b.concat(e(c.requires)).concat(c._runBlocks);
                        try {
                            for (var d = c._invokeQueue, c = 0, h = d.length; c < h; c++) {
                                var f = d[c],
                                    n = k.get(f[0]);
                                n[f[1]].apply(n, f[2])
                            }
                        } catch (j) {
                            throw j.message && (j.message += " from " + a),
                            j;
                        }
                    } else
                if (I(a)) try {
                    b.push(k.invoke(a))
                } catch (i) {
                    throw i.message && (i.message += " from " + a), i;
                } else if (C(a)) try {
                    b.push(k.invoke(a))
                } catch (l) {
                    throw l.message && (l.message += " from " + String(a[a.length - 1])), l;
                } else va(a, "module")
            });
            return b
        }

        function f(a, b) {
            function c(d) {
                if (typeof d !== "string") throw Error("Service name expected");
                if (a.hasOwnProperty(d)) {
                    if (a[d] === i) throw Error("Circular dependency: " + j.join(" <- "));
                    return a[d]
                } else try {
                    return j.unshift(d), a[d] = i, a[d] = b(d)
                } finally {
                    j.shift()
                }
            }

            function d(a, b, e) {
                var g = [],
                    h = Fb(a),
                    f, j, n;
                j = 0;
                for (f = h.length; j < f; j++) n = h[j], g.push(e && e.hasOwnProperty(n) ? e[n] : c(n));
                a.$inject || (a = a[f]);
                switch (b ? -1 : g.length) {
                    case 0:
                        return a();
                    case 1:
                        return a(g[0]);
                    case 2:
                        return a(g[0], g[1]);
                    case 3:
                        return a(g[0], g[1], g[2]);
                    case 4:
                        return a(g[0], g[1], g[2], g[3]);
                    case 5:
                        return a(g[0], g[1], g[2], g[3], g[4]);
                    case 6:
                        return a(g[0], g[1], g[2], g[3], g[4], g[5]);
                    case 7:
                        return a(g[0], g[1], g[2], g[3], g[4], g[5], g[6]);
                    case 8:
                        return a(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7]);
                    case 9:
                        return a(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8]);
                    case 10:
                        return a(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9]);
                    default:
                        return a.apply(b, g)
                }
            }
            return {
                invoke: d,
                instantiate: function(a, b) {
                    var c = function() {}, e;
                    c.prototype = (C(a) ? a[a.length - 1] : a).prototype;
                    c = new c;
                    e = d(a, c, b);
                    return L(e) ? e : c
                },
                get: c,
                annotate: Fb
            }
        }
        var i = {}, h = "Provider",
            j = [],
            g = new Pa,
            m = {
                $provide: {
                    provider: a(c),
                    factory: a(d),
                    service: a(function(a, b) {
                        return d(a, ["$injector",
                            function(a) {
                                return a.instantiate(b)
                            }
                        ])
                    }),
                    value: a(function(a, b) {
                        return d(a, Q(b))
                    }),
                    constant: a(function(a, b) {
                        m[a] = b;
                        l[a] = b
                    }),
                    decorator: function(a, b) {
                        var c = k.get(a + h),
                            d = c.$get;
                        c.$get = function() {
                            var a = q.invoke(d, c);
                            return q.invoke(b, null, {
                                $delegate: a
                            })
                        }
                    }
                }
            }, k = m.$injector = f(m, function() {
                throw Error("Unknown provider: " + j.join(" <- "));
            }),
            l = {}, q = l.$injector = f(l, function(a) {
                a = k.get(a + h);
                return q.invoke(a.$get, a)
            });
        o(e(b), function(a) {
            q.invoke(a || t)
        });
        return q
    }

    function xc() {
        var b = !0;
        this.disableAutoScrolling = function() {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope",
            function(a, c, d) {
                function e(a) {
                    var b = null;
                    o(a, function(a) {
                        !b && J(a.nodeName) === "a" && (b = a)
                    });
                    return b
                }

                function f() {
                    var b = c.hash(),
                        d;
                    b ? (d = i.getElementById(b)) ? d.scrollIntoView() : (d = e(i.getElementsByName(b))) ? d.scrollIntoView() : b === "top" && a.scrollTo(0, 0) : a.scrollTo(0, 0)
                }
                var i = a.document;
                b && d.$watch(function() {
                    return c.hash()
                }, function() {
                    d.$evalAsync(f)
                });
                return f
            }
        ]
    }

    function Gb(b) {
        this.register = function(a, c) {
            b.factory(Ja(a) + "Animation", c)
        };
        this.$get = ["$injector",
            function(a) {
                return function(b) {
                    if (b) try {
                        return a.get(Ja(b) + "Animation")
                    } catch (d) {}
                }
            }
        ]
    }

    function yc(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, ka.call(arguments, 1))
            } finally {
                if (n--, n === 0)
                    for (; B.length;) try {
                        B.pop()()
                    } catch (b) {
                        c.error(b)
                    }
            }
        }

        function f(a, b) {
            (function z() {
                o(r, function(a) {
                    a()
                });
                p = b(z, a)
            })()
        }

        function i() {
            E != h.url() && (E = h.url(), o(G, function(a) {
                a(h.url())
            }))
        }
        var h = this,
            j = a[0],
            g = b.location,
            m = b.history,
            k = b.setTimeout,
            l = b.clearTimeout,
            q = {};
        h.isMock = !1;
        var n = 0,
            B = [];
        h.$$completeOutstandingRequest = e;
        h.$$incOutstandingRequestCount = function() {
            n++
        };
        h.notifyWhenNoOutstandingRequests = function(a) {
            o(r, function(a) {
                a()
            });
            n === 0 ? a() : B.push(a)
        };
        var r = [],
            p;
        h.addPollFn = function(a) {
            u(p) && f(100, k);
            r.push(a);
            return a
        };
        var E = g.href,
            D = a.find("base");
        h.url = function(a, b) {
            if (a) {
                if (E != a) return E = a, d.history ? b ? m.replaceState(null, "", a) : (m.pushState(null, "", a), D.attr("href", D.attr("href"))) : b ? g.replace(a) : g.href = a, h
            } else return g.href.replace(/%27/g, "'")
        };
        var G = [],
            R = !1;
        h.onUrlChange = function(a) {
            R || (d.history && v(b).bind("popstate", i), d.hashchange ? v(b).bind("hashchange", i) : h.addPollFn(i), R = !0);
            G.push(a);
            return a
        };
        h.baseHref = function() {
            var a = D.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
        };
        var A = {}, H = "",
            F = h.baseHref();
        h.cookies = function(a, b) {
            var d, e, g, h;
            if (a)
                if (b === s) j.cookie = escape(a) + "=;path=" + F + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
                else {
                    if (x(b)) d = (j.cookie = escape(a) + "=" + escape(b) + ";path=" + F).length + 1, d > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")
                } else {
                    if (j.cookie !== H) {
                        H = j.cookie;
                        d = H.split("; ");
                        A = {};
                        for (g = 0; g < d.length; g++) e = d[g], h = e.indexOf("="), h > 0 && (A[unescape(e.substring(0, h))] = unescape(e.substring(h + 1)))
                    }
                    return A
                }
        };
        h.defer = function(a, b) {
            var c;
            n++;
            c = k(function() {
                delete q[c];
                e(a)
            }, b || 0);
            q[c] = !0;
            return c
        };
        h.defer.cancel = function(a) {
            return q[a] ? (delete q[a], l(a), e(t), !0) : !1
        }
    }

    function zc() {
        this.$get = ["$window", "$log", "$sniffer", "$document",
            function(b, a, c, d) {
                return new yc(b, d, a, c)
            }
        ]
    }

    function Ac() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    if (a != k) {
                        if (l) {
                            if (l == a) l = a.n
                        } else l = a;
                        f(a.n, a.p);
                        f(a, k);
                        k = a;
                        k.n = null
                    }
                }

                function f(a, b) {
                    if (a != b) {
                        if (a) a.p = b;
                        if (b) b.n = a
                    }
                }
                if (b in a) throw Error("cacheId " + b + " taken");
                var i = 0,
                    h = y({}, d, {
                        id: b
                    }),
                    j = {}, g = d && d.capacity || Number.MAX_VALUE,
                    m = {}, k = null,
                    l = null;
                return a[b] = {
                    put: function(a, b) {
                        var c = m[a] || (m[a] = {
                            key: a
                        });
                        e(c);
                        if (!u(b)) return a in j || i++, j[a] = b, i > g && this.remove(l.key), b
                    },
                    get: function(a) {
                        var b = m[a];
                        if (b) return e(b), j[a]
                    },
                    remove: function(a) {
                        var b = m[a];
                        if (b) {
                            if (b == k) k = b.p;
                            if (b == l) l = b.n;
                            f(b.n, b.p);
                            delete m[a];
                            delete j[a];
                            i--
                        }
                    },
                    removeAll: function() {
                        j = {};
                        i = 0;
                        m = {};
                        k = l = null
                    },
                    destroy: function() {
                        m = h = j = null;
                        delete a[b]
                    },
                    info: function() {
                        return y({}, h, {
                            size: i
                        })
                    }
                }
            }
            var a = {};
            b.info = function() {
                var b = {};
                o(a, function(a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function(b) {
                return a[b]
            };
            return b
        }
    }

    function Bc() {
        this.$get = ["$cacheFactory",
            function(b) {
                return b("templates")
            }
        ]
    }

    function Hb(b) {
        var a = {}, c = "Directive",
            d = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
            e = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
            f = "Template must have exactly one root element. was: ",
            i = /^\s*(https?|ftp|mailto|file):/;
        this.directive = function j(d, e) {
            x(d) ? (eb(e, "directive"), a.hasOwnProperty(d) || (a[d] = [], b.factory(d + c, ["$injector", "$exceptionHandler",
                function(b, c) {
                    var e = [];
                    o(a[d], function(a) {
                        try {
                            var f = b.invoke(a);
                            if (I(f)) f = {
                                compile: Q(f)
                            };
                            else if (!f.compile && f.link) f.compile = Q(f.link);
                            f.priority = f.priority || 0;
                            f.name = f.name || d;
                            f.require = f.require || f.controller && f.name;
                            f.restrict = f.restrict || "A";
                            e.push(f)
                        } catch (j) {
                            c(j)
                        }
                    });
                    return e
                }
            ])), a[d].push(e)) : o(d, sb(j));
            return this
        };
        this.urlSanitizationWhitelist = function(a) {
            return w(a) ? (i = a, this) : i
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document",
            function(b, g, m, k, l, q, n, B, r) {
                function p(a, b, c) {
                    a instanceof v || (a = v(a));
                    o(a, function(b, c) {
                        b.nodeType == 3 && b.nodeValue.match(/\S+/) && (a[c] = v(b).wrap("<span></span>").parent()[0])
                    });
                    var d = D(a, b, a, c);
                    return function(b, c) {
                        eb(b, "scope");
                        for (var e = c ? za.clone.call(a) : a, g = 0, f = e.length; g < f; g++) {
                            var j = e[g];
                            (j.nodeType == 1 || j.nodeType == 9) && e.eq(g).data("$scope", b)
                        }
                        E(e, "ng-scope");
                        c && c(e, b);
                        d && d(b, e, e);
                        return e
                    }
                }

                function E(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {}
                }

                function D(a, b, c, d) {
                    function e(a, c, d, f) {
                        var j, i, l, m, n, k, q, p = [];
                        n = 0;
                        for (k = c.length; n < k; n++) p.push(c[n]);
                        q = n = 0;
                        for (k = g.length; n < k; q++) i = p[q], c = g[n++], j = g[n++], c ? (c.scope ? (l = a.$new(L(c.scope)), v(i).data("$scope", l)) : l = a, (m = c.transclude) || !f && b ? c(j, l, i, d, function(b) {
                            return function(c) {
                                var d = a.$new();
                                d.$$transcluded = !0;
                                return b(d, c).bind("$destroy", ab(d, d.$destroy))
                            }
                        }(m || b)) : c(j, l, i, s, f)) : j && j(a, i.childNodes, s, f)
                    }
                    for (var g = [], f, j, i, l = 0; l < a.length; l++) j = new ya,
                    f = G(a[l], [], j, d), j = (f = f.length ? R(f, a[l], j, b, c) : null) && f.terminal || !a[l].childNodes || !a[l].childNodes.length ? null : D(a[l].childNodes, f ? f.transclude : b), g.push(f), g.push(j), i = i || f || j;
                    return i ? e : null
                }

                function G(a, b, c, g) {
                    var f = c.$attr,
                        j;
                    switch (a.nodeType) {
                        case 1:
                            A(b, aa(jb(a).toLowerCase()), "E", g);
                            var i, l, n;
                            j = a.attributes;
                            for (var m = 0, k = j && j.length; m < k; m++)
                                if (i = j[m], i.specified) l = i.name, n = aa(l), ha.test(n) && (l = n.substr(6).toLowerCase()), n = aa(l.toLowerCase()), f[n] = l, c[n] = i = S(X && l == "href" ? decodeURIComponent(a.getAttribute(l, 2)) : i.value), Db(a, n) && (c[n] = !0), z(a, b, i, n), A(b, n, "A", g);
                            a = a.className;
                            if (x(a) && a !== "")
                                for (; j = e.exec(a);) n = aa(j[2]), A(b, n, "C", g) && (c[n] = S(j[3])), a = a.substr(j.index + j[0].length);
                            break;
                        case 3:
                            ga(b, a.nodeValue);
                            break;
                        case 8:
                            try {
                                if (j = d.exec(a.nodeValue)) n = aa(j[1]), A(b, n, "M", g) && (c[n] = S(j[2]))
                            } catch (q) {}
                    }
                    b.sort(N);
                    return b
                }

                function R(a, b, c, d, e) {
                    function j(a, b) {
                        if (a) a.require = z.require, B.push(a);
                        if (b) b.require = z.require, r.push(b)
                    }

                    function i(a, b) {
                        var c, d = "data",
                            e = !1;
                        if (x(a)) {
                            for (;
                                (c = a.charAt(0)) == "^" || c == "?";) a = a.substr(1), c == "^" && (d = "inheritedData"), e = e || c == "?";
                            c = b[d]("$" + a + "Controller");
                            if (!c && !e) throw Error("No controller: " + a);
                        } else C(a) && (c = [], o(a, function(a) {
                            c.push(i(a, b))
                        }));
                        return c
                    }

                    function l(a, d, e, f, j) {
                        var k, p, D, G, H;
                        k = b === e ? c : kc(c, new ya(v(e), c.$attr));
                        p = k.$$element;
                        if (ba) {
                            var z = /^\s*([@=&])(\??)\s*(\w*)\s*$/,
                                F = d.$parent || d;
                            o(ba.scope, function(a, b) {
                                var c = a.match(z) || [],
                                    e = c[3] || b,
                                    f = c[2] == "?",
                                    c = c[1],
                                    j, l, i;
                                d.$$isolateBindings[b] = c + e;
                                switch (c) {
                                    case "@":
                                        k.$observe(e, function(a) {
                                            d[b] = a
                                        });
                                        k.$$observers[e].$$scope = F;
                                        k[e] && (d[b] = g(k[e])(F));
                                        break;
                                    case "=":
                                        if (f && !k[e]) break;
                                        l = q(k[e]);
                                        i = l.assign || function() {
                                            j = d[b] = l(F);
                                            throw Error(Ib + k[e] + " (directive: " + ba.name + ")");
                                        };
                                        j = d[b] = l(F);
                                        d.$watch(function() {
                                            var a = l(F);
                                            a !== d[b] && (a !== j ? j = d[b] = a : i(F, a = j = d[b]));
                                            return a
                                        });
                                        break;
                                    case "&":
                                        l = q(k[e]);
                                        d[b] = function(a) {
                                            return l(F, a)
                                        };
                                        break;
                                    default:
                                        throw Error("Invalid isolate scope definition for directive " + ba.name + ": " + a);
                                }
                            })
                        }
                        ha && o(ha, function(a) {
                            var b = {
                                $scope: d,
                                $element: p,
                                $attrs: k,
                                $transclude: j
                            };
                            H = a.controller;
                            H == "@" && (H = k[a.name]);
                            p.data("$" + a.name + "Controller", n(H, b))
                        });
                        f = 0;
                        for (D = B.length; f < D; f++) try {
                            G = B[f], G(d, p, k, G.require && i(G.require, p))
                        } catch (E) {
                            m(E, ta(p))
                        }
                        a && a(d, e.childNodes, s, j);
                        f = 0;
                        for (D = r.length; f < D; f++) try {
                            G = r[f], G(d, p, k, G.require && i(G.require, p))
                        } catch (N) {
                            m(N, ta(p))
                        }
                    }
                    for (var k = -Number.MAX_VALUE, B = [], r = [], D = null, ba = null, N = null, A = c.$$element = v(b), z, T, R, ga, ia = d, ha, t, y, w = 0, u = a.length; w < u; w++) {
                        z = a[w];
                        R = s;
                        if (k > z.priority) break;
                        if (y = z.scope) ea("isolated scope", ba, z, A), L(y) && (E(A, "ng-isolate-scope"), ba = z), E(A, "ng-scope"), D = D || z;
                        T = z.name;
                        if (y = z.controller) ha = ha || {}, ea("'" + T + "' controller", ha[T], z, A), ha[T] = z;
                        if (y = z.transclude) ea("transclusion", ga, z, A), ga = z, k = z.priority, y == "element" ? (R = v(b), A = c.$$element = v(V.createComment(" " + T + ": " + c[T] + " ")), b = A[0], fa(e, v(R[0]), b), ia = p(R, d, k)) : (R = v(hb(b)).contents(), A.html(""), ia = p(R, d));
                        if (z.template)
                            if (ea("template", N, z, A), N = z, y = I(z.template) ? z.template(A, c) : z.template, y = Jb(y), z.replace) {
                                R = v("<div>" + S(y) + "</div>").contents();
                                b = R[0];
                                if (R.length != 1 || b.nodeType !== 1) throw Error(f + y);
                                fa(e, A, b);
                                T = {
                                    $attr: {}
                                };
                                a = a.concat(G(b, a.splice(w + 1, a.length - (w + 1)), T));
                                H(c, T);
                                u = a.length
                            } else A.html(y);
                        if (z.templateUrl) ea("template", N, z, A), N = z, l = F(a.splice(w, a.length - w), l, A, c, e, z.replace, ia), u = a.length;
                        else if (z.compile) try {
                            t = z.compile(A, c, ia), I(t) ? j(null, t) : t && j(t.pre, t.post)
                        } catch (J) {
                            m(J, ta(A))
                        }
                        if (z.terminal) l.terminal = !0, k = Math.max(k, z.priority)
                    }
                    l.scope = D && D.scope;
                    l.transclude = ga && ia;
                    return l
                }

                function A(d, e, g, f) {
                    var l = !1;
                    if (a.hasOwnProperty(e))
                        for (var i, e = b.get(e + c), n = 0, k = e.length; n < k; n++) try {
                            if (i = e[n], (f === s || f > i.priority) && i.restrict.indexOf(g) != -1) d.push(i), l = !0
                        } catch (q) {
                            m(q)
                        }
                    return l
                }

                function H(a, b) {
                    var c = b.$attr,
                        d = a.$attr,
                        e = a.$$element;
                    o(a, function(d, e) {
                        e.charAt(0) != "$" && (b[e] && (d += (e === "style" ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    });
                    o(b, function(b, g) {
                        g == "class" ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : g == "style" ? e.attr("style", e.attr("style") + ";" + b) : g.charAt(0) != "$" && !a.hasOwnProperty(g) && (a[g] = b, d[g] = c[g])
                    })
                }

                function F(a, b, c, d, e, g, j) {
                    var i = [],
                        n, m, q = c[0],
                        p = a.shift(),
                        ya = y({}, p, {
                            controller: null,
                            templateUrl: null,
                            transclude: null,
                            scope: null
                        }),
                        p = I(p.templateUrl) ? p.templateUrl(c, d) : p.templateUrl;
                    c.html("");
                    k.get(p, {
                        cache: l
                    }).success(function(l) {
                        var k, p, l = Jb(l);
                        if (g) {
                            p = v("<div>" + S(l) + "</div>").contents();
                            k = p[0];
                            if (p.length != 1 || k.nodeType !== 1) throw Error(f + l);
                            l = {
                                $attr: {}
                            };
                            fa(e, c, k);
                            G(k, a, l);
                            H(d, l)
                        } else k = q, c.html(l);
                        a.unshift(ya);
                        n = R(a, k, d, j);
                        for (m = D(c[0].childNodes, j); i.length;) {
                            var B = i.shift(),
                                l = i.shift();
                            p = i.shift();
                            var r = i.shift(),
                                F = k;
                            l !== q && (F = hb(k), fa(p, v(l), F));
                            n(function() {
                                b(m, B, F, e, r)
                            }, B, F, e, r)
                        }
                        i = null
                    }).error(function(a, b, c, d) {
                        throw Error("Failed to load template: " + d.url);
                    });
                    return function(a, c, d, e, g) {
                        i ? (i.push(c), i.push(d), i.push(e), i.push(g)) : n(function() {
                            b(m, c, d, e, g)
                        }, c, d, e, g)
                    }
                }

                function N(a, b) {
                    return b.priority - a.priority
                }

                function ea(a, b, c, d) {
                    if (b) throw Error("Multiple directives [" + b.name + ", " + c.name + "] asking for " + a + " on: " + ta(d));
                }

                function ga(a, b) {
                    var c = g(b, !0);
                    c && a.push({
                        priority: 0,
                        compile: Q(function(a, b) {
                            var d = b.parent(),
                                e = d.data("$binding") || [];
                            e.push(c);
                            E(d.data("$binding", e), "ng-binding");
                            a.$watch(c, function(a) {
                                b[0].nodeValue = a
                            })
                        })
                    })
                }

                function z(a, b, c, d) {
                    var e = g(c, !0);
                    e && b.push({
                        priority: 100,
                        compile: Q(function(a, b, c) {
                            b = c.$$observers || (c.$$observers = {});
                            if (e = g(c[d], !0)) c[d] = e(a), (b[d] || (b[d] = [])).$$inter = !0, (c.$$observers && c.$$observers[d].$$scope || a).$watch(e, function(a) {
                                c.$set(d, a)
                            })
                        })
                    })
                }

                function fa(a, b, c) {
                    var d = b[0],
                        e = d.parentNode,
                        g, f;
                    if (a) {
                        g = 0;
                        for (f = a.length; g < f; g++)
                            if (a[g] == d) {
                                a[g] = c;
                                break
                            }
                    }
                    e && e.replaceChild(c, d);
                    c[v.expando] = d[v.expando];
                    b[0] = c
                }
                var ya = function(a, b) {
                    this.$$element = a;
                    this.$attr = b || {}
                };
                ya.prototype = {
                    $normalize: aa,
                    $set: function(a, b, c, d) {
                        var e = Db(this.$$element[0], a),
                            g = this.$$observers;
                        e && (this.$$element.prop(a, b), d = e);
                        this[a] = b;
                        d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = db(a, "-"));
                        if (jb(this.$$element[0]) === "A" && a === "href") ba.setAttribute("href", b), e = ba.href, e.match(i) || (this[a] = b = "unsafe:" + e);
                        c !== !1 && (b === null || b === s ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                        g && o(g[a], function(a) {
                            try {
                                a(b)
                            } catch (c) {
                                m(c)
                            }
                        })
                    },
                    $observe: function(a, b) {
                        var c = this,
                            d = c.$$observers || (c.$$observers = {}),
                            e = d[a] || (d[a] = []);
                        e.push(b);
                        B.$evalAsync(function() {
                            e.$$inter || b(c[a])
                        });
                        return b
                    }
                };
                var ba = r[0].createElement("a"),
                    T = g.startSymbol(),
                    ia = g.endSymbol(),
                    Jb = T == "{{" || ia == "}}" ? pa : function(a) {
                        return a.replace(/\{\{/g, T).replace(/}}/g, ia)
                    }, ha = /^ngAttr[A-Z]/;
                return p
            }
        ]
    }

    function aa(b) {
        return Ja(b.replace(Cc, ""))
    }

    function Dc() {
        var b = {};
        this.register = function(a, c) {
            L(a) ? y(b, a) : b[a] = c
        };
        this.$get = ["$injector", "$window",
            function(a, c) {
                return function(d, e) {
                    if (x(d)) {
                        var f = d,
                            d = b.hasOwnProperty(f) ? b[f] : kb(e.$scope, f, !0) || kb(c, f, !0);
                        va(d, f, !0)
                    }
                    return a.instantiate(d, e)
                }
            }
        ]
    }

    function Ec() {
        this.$get = ["$window",
            function(b) {
                return v(b.document)
            }
        ]
    }

    function Fc() {
        this.$get = ["$log",
            function(b) {
                return function(a, c) {
                    b.error.apply(b, arguments)
                }
            }
        ]
    }

    function Gc() {
        var b = "{{",
            a = "}}";
        this.startSymbol = function(a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function(b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", "$exceptionHandler",
            function(c, d) {
                function e(e, j) {
                    for (var g, m, k = 0, l = [], q = e.length, n = !1, B = []; k < q;)(g = e.indexOf(b, k)) != -1 && (m = e.indexOf(a, g + f)) != -1 ? (k != g && l.push(e.substring(k, g)), l.push(k = c(n = e.substring(g + f, m))), k.exp = n, k = m + i, n = !0) : (k != q && l.push(e.substring(k)), k = q);
                    if (!(q = l.length)) l.push(""), q = 1;
                    if (!j || n) return B.length = q, k = function(a) {
                        try {
                            for (var b = 0, c = q, g; b < c; b++) {
                                if (typeof(g = l[b]) == "function") g = g(a), g == null || g == s ? g = "" : typeof g != "string" && (g = da(g));
                                B[b] = g
                            }
                            return B.join("")
                        } catch (f) {
                            d(Error("Error while interpolating: " + e + "\n" + f.toString()))
                        }
                    }, k.exp = e, k.parts = l, k
                }
                var f = b.length,
                    i = a.length;
                e.startSymbol = function() {
                    return b
                };
                e.endSymbol = function() {
                    return a
                };
                return e
            }
        ]
    }

    function Kb(b) {
        for (var b = b.split("/"), a = b.length; a--;) b[a] = cb(b[a]);
        return b.join("/")
    }

    function Aa(b, a) {
        var c = lb.exec(b),
            c = {
                protocol: c[1],
                host: c[3],
                port: K(c[5]) || Ba[c[1]] || null,
                path: c[6] || "/",
                search: c[8],
                hash: c[10]
            };
        if (a) a.$$protocol = c.protocol, a.$$host = c.host, a.$$port = c.port;
        return c
    }

    function ma(b, a, c) {
        return b + "://" + a + (c == Ba[b] ? "" : ":" + c)
    }

    function Hc(b, a, c) {
        var d = Aa(b);
        return decodeURIComponent(d.path) != a || u(d.hash) || d.hash.indexOf(c) !== 0 ? b : ma(d.protocol, d.host, d.port) + a.substr(0, a.lastIndexOf("/")) + d.hash.substr(c.length)
    }

    function Ic(b, a, c) {
        var d = Aa(b);
        if (decodeURIComponent(d.path) == a && !u(d.hash) && d.hash.indexOf(c) === 0) return b;
        else {
            var e = d.search && "?" + d.search || "",
                f = d.hash && "#" + d.hash || "",
                i = a.substr(0, a.lastIndexOf("/")),
                h = d.path.substr(i.length);
            if (d.path.indexOf(i) !== 0) throw Error('Invalid url "' + b + '", missing path prefix "' + i + '" !');
            return ma(d.protocol, d.host, d.port) + a + "#" + c + h + e + f
        }
    }

    function mb(b, a, c) {
        a = a || "";
        this.$$parse = function(b) {
            var c = Aa(b, this);
            if (c.path.indexOf(a) !== 0) throw Error('Invalid url "' + b + '", missing path prefix "' + a + '" !');
            this.$$path = decodeURIComponent(c.path.substr(a.length));
            this.$$search = bb(c.search);
            this.$$hash = c.hash && decodeURIComponent(c.hash) || "";
            this.$$compose()
        };
        this.$$compose = function() {
            var b = ub(this.$$search),
                c = this.$$hash ? "#" + cb(this.$$hash) : "";
            this.$$url = Kb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = ma(this.$$protocol, this.$$host, this.$$port) + a + this.$$url
        };
        this.$$rewriteAppUrl = function(a) {
            if (a.indexOf(c) == 0) return a
        };
        this.$$parse(b)
    }

    function Qa(b, a, c) {
        var d;
        this.$$parse = function(b) {
            var c = Aa(b, this);
            if (c.hash && c.hash.indexOf(a) !== 0) throw Error('Invalid url "' + b + '", missing hash prefix "' + a + '" !');
            d = c.path + (c.search ? "?" + c.search : "");
            c = Jc.exec((c.hash || "").substr(a.length));
            this.$$path = c[1] ? (c[1].charAt(0) == "/" ? "" : "/") + decodeURIComponent(c[1]) : "";
            this.$$search = bb(c[3]);
            this.$$hash = c[5] && decodeURIComponent(c[5]) || "";
            this.$$compose()
        };
        this.$$compose = function() {
            var b = ub(this.$$search),
                c = this.$$hash ? "#" + cb(this.$$hash) : "";
            this.$$url = Kb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = ma(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + a + this.$$url : "")
        };
        this.$$rewriteAppUrl = function(a) {
            if (a.indexOf(c) == 0) return a
        };
        this.$$parse(b)
    }

    function Lb(b, a, c, d) {
        Qa.apply(this, arguments);
        this.$$rewriteAppUrl = function(b) {
            if (b.indexOf(c) == 0) return c + d + "#" + a + b.substr(c.length)
        }
    }

    function Ra(b) {
        return function() {
            return this[b]
        }
    }

    function Mb(b, a) {
        return function(c) {
            if (u(c)) return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Kc() {
        var b = "",
            a = !1;
        this.hashPrefix = function(a) {
            return w(a) ? (b = a, this) : b
        };
        this.html5Mode = function(b) {
            return w(b) ? (a = b, this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement",
            function(c, d, e, f) {
                function i(a) {
                    c.$broadcast("$locationChangeSuccess", h.absUrl(), a)
                }
                var h, j, g, m = d.url(),
                    k = Aa(m);
                a ? (j = d.baseHref() || "/", g = j.substr(0, j.lastIndexOf("/")), k = ma(k.protocol, k.host, k.port) + g + "/", h = e.history ? new mb(Hc(m, j, b), g, k) : new Lb(Ic(m, j, b), b, k, j.substr(g.length + 1))) : (k = ma(k.protocol, k.host, k.port) + (k.path || "") + (k.search ? "?" + k.search : "") + "#" + b + "/", h = new Qa(m, b, k));
                f.bind("click", function(a) {
                    if (!a.ctrlKey && !(a.metaKey || a.which == 2)) {
                        for (var b = v(a.target); J(b[0].nodeName) !== "a";)
                            if (b[0] === f[0] || !(b = b.parent())[0]) return;
                        var d = b.prop("href"),
                            e = h.$$rewriteAppUrl(d);
                        d && !b.attr("target") && e && (h.$$parse(e), c.$apply(), a.preventDefault(), M.angular["ff-684208-preventDefault"] = !0)
                    }
                });
                h.absUrl() != m && d.url(h.absUrl(), !0);
                d.onUrlChange(function(a) {
                    h.absUrl() != a && (c.$evalAsync(function() {
                        var b = h.absUrl();
                        h.$$parse(a);
                        i(b)
                    }), c.$$phase || c.$digest())
                });
                var l = 0;
                c.$watch(function() {
                    var a = d.url(),
                        b = h.$$replace;
                    if (!l || a != h.absUrl()) l++, c.$evalAsync(function() {
                        c.$broadcast("$locationChangeStart", h.absUrl(), a).defaultPrevented ? h.$$parse(a) : (d.url(h.absUrl(), b), i(a))
                    });
                    h.$$replace = !1;
                    return l
                });
                return h
            }
        ]
    }

    function Lc() {
        var b = !0,
            a = this;
        this.debugEnabled = function(a) {
            return w(a) ? (b = a, this) : b
        };
        this.$get = ["$window",
            function(c) {
                function d(a) {
                    a instanceof Error && (a.stack ? a = a.message && a.stack.indexOf(a.message) === -1 ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                    return a
                }

                function e(a) {
                    var b = c.console || {}, e = b[a] || b.log || t;
                    return e.apply ? function() {
                        var a = [];
                        o(arguments, function(b) {
                            a.push(d(b))
                        });
                        return e.apply(b, a)
                    } : function(a, b) {
                        e(a, b)
                    }
                }
                return {
                    log: e("log"),
                    warn: e("warn"),
                    info: e("info"),
                    error: e("error"),
                    debug: function() {
                        var c = e("debug");
                        return function() {
                            b && c.apply(a, arguments)
                        }
                    }()
                }
            }
        ]
    }

    function Mc(b, a) {
        function c(a) {
            return a.indexOf(r) != -1
        }

        function d(a) {
            a = a || 1;
            return n + a < b.length ? b.charAt(n + a) : !1
        }

        function e(a) {
            return "0" <= a && a <= "9"
        }

        function f(a) {
            return a == " " || a == "\r" || a == "\t" || a == "\n" || a == "\u000b" || a == "\u00a0"
        }

        function i(a) {
            return "a" <= a && a <= "z" || "A" <= a && a <= "Z" || "_" == a || a == "$"
        }

        function h(a) {
            return a == "-" || a == "+" || e(a)
        }

        function j(a, c, d) {
            d = d || n;
            throw Error("Lexer Error: " + a + " at column" + (w(c) ? "s " + c + "-" + n + " [" + b.substring(c, d) + "]" : " " + d) + " in expression [" + b + "].");
        }

        function g() {
            for (var a = "", c = n; n < b.length;) {
                var g = J(b.charAt(n));
                if (g == "." || e(g)) a += g;
                else {
                    var f = d();
                    if (g == "e" && h(f)) a += g;
                    else if (h(g) && f && e(f) && a.charAt(a.length - 1) == "e") a += g;
                    else if (h(g) && (!f || !e(f)) && a.charAt(a.length - 1) == "e") j("Invalid exponent");
                    else break
                }
                n++
            }
            a *= 1;
            l.push({
                index: c,
                text: a,
                json: !0,
                fn: function() {
                    return a
                }
            })
        }

        function m() {
            for (var c = "", d = n, g, h, j; n < b.length;) {
                var k = b.charAt(n);
                if (k == "." || i(k) || e(k)) k == "." && (g = n), c += k;
                else break;
                n++
            }
            if (g)
                for (h = n; h < b.length;) {
                    k = b.charAt(h);
                    if (k == "(") {
                        j = c.substr(g - d + 1);
                        c = c.substr(0, g - d);
                        n = h;
                        break
                    }
                    if (f(k)) h++;
                    else break
                }
            d = {
                index: d,
                text: c
            };
            if (Ca.hasOwnProperty(c)) d.fn = d.json = Ca[c];
            else {
                var m = Nb(c, a);
                d.fn = y(function(a, b) {
                    return m(a, b)
                }, {
                    assign: function(a, b) {
                        return Ob(a, c, b)
                    }
                })
            }
            l.push(d);
            j && (l.push({
                index: g,
                text: ".",
                json: !1
            }), l.push({
                index: g + 1,
                text: j,
                json: !1
            }))
        }

        function k(a) {
            var c = n;
            n++;
            for (var d = "", e = a, g = !1; n < b.length;) {
                var h = b.charAt(n);
                e += h;
                if (g) h == "u" ? (h = b.substring(n + 1, n + 5), h.match(/[\da-f]{4}/i) || j("Invalid unicode escape [\\u" + h + "]"), n += 4, d += String.fromCharCode(parseInt(h, 16))) : (g = Nc[h], d += g ? g : h), g = !1;
                else if (h == "\\") g = !0;
                else if (h == a) {
                    n++;
                    l.push({
                        index: c,
                        text: e,
                        string: d,
                        json: !0,
                        fn: function() {
                            return d
                        }
                    });
                    return
                } else d += h;
                n++
            }
            j("Unterminated quote", c)
        }
        for (var l = [], q, n = 0, B = [], r, p = ":"; n < b.length;) {
            r = b.charAt(n);
            if (c("\"'")) k(r);
            else if (e(r) || c(".") && e(d())) g();
            else if (i(r)) {
                if (m(), "{,".indexOf(p) != -1 && B[0] == "{" && (q = l[l.length - 1])) q.json = q.text.indexOf(".") == -1
            } else if (c("(){}[].,;:")) l.push({
                index: n,
                text: r,
                json: ":[,".indexOf(p) != -1 && c("{[") || c("}]:,")
            }), c("{[") && B.unshift(r), c("}]") && B.shift(), n++;
            else if (f(r)) {
                n++;
                continue
            } else {
                var E = r + d(),
                    D = E + d(2),
                    G = Ca[r],
                    o = Ca[E],
                    A = Ca[D];
                A ? (l.push({
                    index: n,
                    text: D,
                    fn: A
                }), n += 3) : o ? (l.push({
                    index: n,
                    text: E,
                    fn: o
                }), n += 2) : G ? (l.push({
                    index: n,
                    text: r,
                    fn: G,
                    json: "[,:".indexOf(p) != -1 && c("+-")
                }), n += 1) : j("Unexpected next character ", n, n + 1)
            }
            p = r
        }
        return l
    }

    function Oc(b, a, c, d) {
        function e(a, c) {
            throw Error("Syntax Error: Token '" + c.text + "' " + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
        }

        function f() {
            if (F.length === 0) throw Error("Unexpected end of expression: " + b);
            return F[0]
        }

        function i(a, b, c, d) {
            if (F.length > 0) {
                var e = F[0],
                    g = e.text;
                if (g == a || g == b || g == c || g == d || !a && !b && !c && !d) return e
            }
            return !1
        }

        function h(b, c, d, g) {
            return (b = i(b, c, d, g)) ? (a && !b.json && e("is not valid json", b), F.shift(), b) : !1
        }

        function j(a) {
            h(a) || e("is unexpected, expecting [" + a + "]", i())
        }

        function g(a, b) {
            return y(function(c, d) {
                return a(c, d, b)
            }, {
                constant: b.constant
            })
        }

        function m(a, b, c) {
            return y(function(d, e) {
                return b(d, e, a, c)
            }, {
                constant: a.constant && c.constant
            })
        }

        function k() {
            for (var a = [];;)
                if (F.length > 0 && !i("}", ")", ";", "]") && a.push(fa()), !h(";")) return a.length == 1 ? a[0] : function(b, c) {
                    for (var d, e = 0; e < a.length; e++) {
                        var g = a[e];
                        g && (d = g(b, c))
                    }
                    return d
                }
        }

        function l() {
            for (var a = h(), b = c(a.text), d = [];;)
                if (a = h(":")) d.push(N());
                else {
                    var e = function(a, c, e) {
                        for (var e = [e], g = 0; g < d.length; g++) e.push(d[g](a, c));
                        return b.apply(a, e)
                    };
                    return function() {
                        return e
                    }
                }
        }

        function q() {
            for (var a = n(), b;;)
                if (b = h("||")) a = m(a, b.fn, n());
                else return a
        }

        function n() {
            var a = B(),
                b;
            if (b = h("&&")) a = m(a, b.fn, n());
            return a
        }

        function B() {
            var a = r(),
                b;
            if (b = h("==", "!=", "===", "!==")) a = m(a, b.fn, B());
            return a
        }

        function r() {
            var a;
            a = p();
            for (var b; b = h("+", "-");) a = m(a, b.fn, p());
            if (b = h("<", ">", "<=", ">=")) a = m(a, b.fn, r());
            return a
        }

        function p() {
            for (var a = E(), b; b = h("*", "/", "%");) a = m(a, b.fn, E());
            return a
        }

        function E() {
            var a;
            return h("+") ? D() : (a = h("-")) ? m(A, a.fn, E()) : (a = h("!")) ? g(a.fn, E()) : D()
        }

        function D() {
            var a;
            if (h("(")) a = fa(), j(")");
            else if (h("[")) a = G();
            else if (h("{")) a = o();
            else {
                var b = h();
                (a = b.fn) || e("not a primary expression", b);
                if (b.json) a.constant = a.literal = !0
            }
            for (var c; b = h("(", "[", ".");) b.text === "(" ? (a = ea(a, c), c = null) : b.text === "[" ? (c = a, a = z(a)) : b.text === "." ? (c = a, a = ga(a)) : e("IMPOSSIBLE");
            return a
        }

        function G() {
            var a = [],
                b = !0;
            if (f().text != "]") {
                do {
                    var c = N();
                    a.push(c);
                    c.constant || (b = !1)
                } while (h(","))
            }
            j("]");
            return y(function(b, c) {
                for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                return d
            }, {
                literal: !0,
                constant: b
            })
        }

        function o() {
            var a = [],
                b = !0;
            if (f().text != "}") {
                do {
                    var c = h(),
                        c = c.string || c.text;
                    j(":");
                    var d = N();
                    a.push({
                        key: c,
                        value: d
                    });
                    d.constant || (b = !1)
                } while (h(","))
            }
            j("}");
            return y(function(b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var g = a[e],
                        h = g.value(b, c);
                    d[g.key] = h
                }
                return d
            }, {
                literal: !0,
                constant: b
            })
        }
        var A = Q(0),
            H, F = Mc(b, d),
            N = function() {
                var a = q(),
                    c, d;
                return (d = h("=")) ? (a.assign || e("implies assignment but [" + b.substring(0, d.index) + "] can not be assigned to", d), c = q(), function(b, d) {
                    return a.assign(b, c(b, d), d)
                }) : a
            }, ea = function(a, b) {
                var c = [];
                if (f().text != ")") {
                    do c.push(N()); while (h(","))
                }
                j(")");
                return function(d, e) {
                    for (var g = [], h = b ? b(d, e) : d, f = 0; f < c.length; f++) g.push(c[f](d, e));
                    f = a(d, e) || t;
                    return f.apply ? f.apply(h, g) : f(g[0], g[1], g[2], g[3], g[4])
                }
            }, ga = function(a) {
                var b = h().text,
                    c = Nb(b, d);
                return y(function(b, d) {
                    return c(a(b, d), d)
                }, {
                    assign: function(c, d, e) {
                        return Ob(a(c, e), b, d)
                    }
                })
            }, z = function(a) {
                var b = N();
                j("]");
                return y(function(c, d) {
                    var e = a(c, d),
                        g = b(c, d),
                        h;
                    if (!e) return s;
                    if ((e = e[g]) && e.then) {
                        h = e;
                        if (!("$$v" in e)) h.$$v = s, h.then(function(a) {
                            h.$$v = a
                        });
                        e = e.$$v
                    }
                    return e
                }, {
                    assign: function(c, d, e) {
                        return a(c, e)[b(c, e)] = d
                    }
                })
            }, fa = function() {
                for (var a = N(), b;;)
                    if (b = h("|")) a = m(a, b.fn, l());
                    else return a
            };
        a ? (N = q, ea = ga = z = fa = function() {
            e("is not valid json", {
                text: b,
                index: 0
            })
        }, H = D()) : H = k();
        F.length !== 0 && e("is an unexpected token", F[0]);
        H.literal = !! H.literal;
        H.constant = !! H.constant;
        return H
    }

    function Ob(b, a, c) {
        for (var a = a.split("."), d = 0; a.length > 1; d++) {
            var e = a.shift(),
                f = b[e];
            f || (f = {}, b[e] = f);
            b = f
        }
        return b[a.shift()] = c
    }

    function kb(b, a, c) {
        if (!a) return b;
        for (var a = a.split("."), d, e = b, f = a.length, i = 0; i < f; i++) d = a[i], b && (b = (e = b)[d]);
        return !c && I(b) ? ab(e, b) : b
    }

    function Pb(b, a, c, d, e) {
        return function(f, i) {
            var h = i && i.hasOwnProperty(b) ? i : f,
                j;
            if (h === null || h === s) return h;
            if ((h = h[b]) && h.then) {
                if (!("$$v" in h)) j = h, j.$$v = s, j.then(function(a) {
                    j.$$v = a
                });
                h = h.$$v
            }
            if (!a || h === null || h === s) return h;
            if ((h = h[a]) && h.then) {
                if (!("$$v" in h)) j = h, j.$$v = s, j.then(function(a) {
                    j.$$v = a
                });
                h = h.$$v
            }
            if (!c || h === null || h === s) return h;
            if ((h = h[c]) && h.then) {
                if (!("$$v" in h)) j = h, j.$$v = s, j.then(function(a) {
                    j.$$v = a
                });
                h = h.$$v
            }
            if (!d || h === null || h === s) return h;
            if ((h = h[d]) && h.then) {
                if (!("$$v" in h)) j = h, j.$$v = s, j.then(function(a) {
                    j.$$v = a
                });
                h = h.$$v
            }
            if (!e || h === null || h === s) return h;
            if ((h = h[e]) && h.then) {
                if (!("$$v" in h)) j = h, j.$$v = s, j.then(function(a) {
                    j.$$v = a
                });
                h = h.$$v
            }
            return h
        }
    }

    function Nb(b, a) {
        if (nb.hasOwnProperty(b)) return nb[b];
        var c = b.split("."),
            d = c.length,
            e;
        if (a) e = d < 6 ? Pb(c[0], c[1], c[2], c[3], c[4]) : function(a, b) {
            var e = 0,
                g;
            do g = Pb(c[e++], c[e++], c[e++], c[e++], c[e++])(a, b), b = s, a = g; while (e < d);
            return g
        };
        else {
            var f = "var l, fn, p;\n";
            o(c, function(a, b) {
                f += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'
            });
            f += "return s;";
            e = Function("s", "k", f);
            e.toString = function() {
                return f
            }
        }
        return nb[b] = e
    }

    function Pc() {
        var b = {};
        this.$get = ["$filter", "$sniffer",
            function(a, c) {
                return function(d) {
                    switch (typeof d) {
                        case "string":
                            return b.hasOwnProperty(d) ? b[d] : b[d] = Oc(d, !1, a, c.csp);
                        case "function":
                            return d;
                        default:
                            return t
                    }
                }
            }
        ]
    }

    function Qc() {
        this.$get = ["$rootScope", "$exceptionHandler",
            function(b, a) {
                return Rc(function(a) {
                    b.$evalAsync(a)
                }, a)
            }
        ]
    }

    function Rc(b, a) {
        function c(a) {
            return a
        }

        function d(a) {
            return i(a)
        }
        var e = function() {
            var h = [],
                j, g;
            return g = {
                resolve: function(a) {
                    if (h) {
                        var c = h;
                        h = s;
                        j = f(a);
                        c.length && b(function() {
                            for (var a, b = 0, d = c.length; b < d; b++) a = c[b], j.then(a[0], a[1])
                        })
                    }
                },
                reject: function(a) {
                    g.resolve(i(a))
                },
                promise: {
                    then: function(b, g) {
                        var f = e(),
                            i = function(d) {
                                try {
                                    f.resolve((b || c)(d))
                                } catch (e) {
                                    a(e), f.reject(e)
                                }
                            }, n = function(b) {
                                try {
                                    f.resolve((g || d)(b))
                                } catch (c) {
                                    a(c), f.reject(c)
                                }
                            };
                        h ? h.push([i, n]) : j.then(i, n);
                        return f.promise
                    }
                }
            }
        }, f = function(a) {
                return a && a.then ? a : {
                    then: function(c) {
                        var d = e();
                        b(function() {
                            d.resolve(c(a))
                        });
                        return d.promise
                    }
                }
            },
            i = function(a) {
                return {
                    then: function(c, g) {
                        var f = e();
                        b(function() {
                            f.resolve((g || d)(a))
                        });
                        return f.promise
                    }
                }
            };
        return {
            defer: e,
            reject: i,
            when: function(h, j, g) {
                var m = e(),
                    k, l = function(b) {
                        try {
                            return (j || c)(b)
                        } catch (d) {
                            return a(d), i(d)
                        }
                    }, q = function(b) {
                        try {
                            return (g || d)(b)
                        } catch (c) {
                            return a(c), i(c)
                        }
                    };
                b(function() {
                    f(h).then(function(a) {
                        k || (k = !0, m.resolve(f(a).then(l, q)))
                    }, function(a) {
                        k || (k = !0, m.resolve(q(a)))
                    })
                });
                return m.promise
            },
            all: function(a) {
                var b = e(),
                    c = 0,
                    d = C(a) ? [] : {};
                o(a, function(a, e) {
                    c++;
                    f(a).then(function(a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                    }, function(a) {
                        d.hasOwnProperty(e) || b.reject(a)
                    })
                });
                c === 0 && b.resolve(d);
                return b.promise
            }
        }
    }

    function Sc() {
        var b = {};
        this.when = function(a, c) {
            b[a] = y({
                reloadOnSearch: !0,
                caseInsensitiveMatch: !1
            }, c);
            if (a) {
                var d = a[a.length - 1] == "/" ? a.substr(0, a.length - 1) : a + "/";
                b[d] = {
                    redirectTo: a
                }
            }
            return this
        };
        this.otherwise = function(a) {
            this.when(null, a);
            return this
        };
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache",
            function(a, c, d, e, f, i, h) {
                function j(a, b, c) {
                    for (var b = "^" + b.replace(/[-\/\\^$:*+?.()|[\]{}]/g, "\\$&") + "$", d = "", e = [], g = {}, f = /\\([:*])(\w+)/g, h, j = 0;
                        (h = f.exec(b)) !== null;) {
                        d += b.slice(j, h.index);
                        switch (h[1]) {
                            case ":":
                                d += "([^\\/]*)";
                                break;
                            case "*":
                                d += "(.*)"
                        }
                        e.push(h[2]);
                        j = f.lastIndex
                    }
                    d += b.substr(j);
                    var i = a.match(RegExp(d, c.caseInsensitiveMatch ? "i" : ""));
                    i && o(e, function(a, b) {
                        g[a] = i[b + 1]
                    });
                    return i ? g : null
                }

                function g() {
                    var b = m(),
                        g = q.current;
                    if (b && g && b.$$route === g.$$route && ja(b.pathParams, g.pathParams) && !b.reloadOnSearch && !l) g.params = b.params, W(g.params, d), a.$broadcast("$routeUpdate", g);
                    else if (b || g) l = !1, a.$broadcast("$routeChangeStart", b, g), (q.current = b) && b.redirectTo && (x(b.redirectTo) ? c.path(k(b.redirectTo, b.params)).search(b.params).replace() : c.url(b.redirectTo(b.pathParams, c.path(), c.search())).replace()), e.when(b).then(function() {
                        if (b) {
                            var a = y({}, b.resolve),
                                c;
                            o(a, function(b, c) {
                                a[c] = x(b) ? f.get(b) : f.invoke(b)
                            });
                            if (w(c = b.template)) I(c) && (c = c(b.params));
                            else if (w(c = b.templateUrl))
                                if (I(c) && (c = c(b.params)), w(c)) b.loadedTemplateUrl = c, c = i.get(c, {
                                    cache: h
                                }).then(function(a) {
                                    return a.data
                                });
                            w(c) && (a.$template = c);
                            return e.all(a)
                        }
                    }).then(function(c) {
                        if (b == q.current) {
                            if (b) b.locals = c, W(b.params, d);
                            a.$broadcast("$routeChangeSuccess", b, g)
                        }
                    }, function(c) {
                        b == q.current && a.$broadcast("$routeChangeError", b, g, c)
                    })
                }

                function m() {
                    var a, d;
                    o(b, function(b, e) {
                        if (!d && (a = j(c.path(), e, b))) d = Fa(b, {
                            params: y({}, c.search(), a),
                            pathParams: a
                        }), d.$$route = b
                    });
                    return d || b[null] && Fa(b[null], {
                        params: {},
                        pathParams: {}
                    })
                }

                function k(a, b) {
                    var c = [];
                    o((a || "").split(":"), function(a, d) {
                        if (d == 0) c.push(a);
                        else {
                            var e = a.match(/(\w+)(.*)/),
                                g = e[1];
                            c.push(b[g]);
                            c.push(e[2] || "");
                            delete b[g]
                        }
                    });
                    return c.join("")
                }
                var l = !1,
                    q = {
                        routes: b,
                        reload: function() {
                            l = !0;
                            a.$evalAsync(g)
                        }
                    };
                a.$on("$locationChangeSuccess", g);
                return q
            }
        ]
    }

    function Tc() {
        this.$get = Q({})
    }

    function Uc() {
        var b = 10;
        this.digestTtl = function(a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse",
            function(a, c, d) {
                function e() {
                    this.$id = Ea();
                    this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                    this["this"] = this.$root = this;
                    this.$$destroyed = !1;
                    this.$$asyncQueue = [];
                    this.$$listeners = {};
                    this.$$isolateBindings = {}
                }

                function f(a) {
                    if (j.$$phase) throw Error(j.$$phase + " already in progress");
                    j.$$phase = a
                }

                function i(a, b) {
                    var c = d(a);
                    va(c, b);
                    return c
                }

                function h() {}
                e.prototype = {
                    $new: function(a) {
                        if (I(a)) throw Error("API-CHANGE: Use $controller to instantiate controllers.");
                        a ? (a = new e, a.$root = this.$root) : (a = function() {}, a.prototype = this, a = new a, a.$id = Ea());
                        a["this"] = a;
                        a.$$listeners = {};
                        a.$parent = this;
                        a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                        a.$$prevSibling = this.$$childTail;
                        this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                        return a
                    },
                    $watch: function(a, b, c) {
                        var d = i(a, "watch"),
                            e = this.$$watchers,
                            f = {
                                fn: b,
                                last: h,
                                get: d,
                                exp: a,
                                eq: !! c
                            };
                        if (!I(b)) {
                            var j = i(b || t, "listener");
                            f.fn = function(a, b, c) {
                                j(c)
                            }
                        }
                        if (typeof a == "string" && d.constant) {
                            var r = f.fn;
                            f.fn = function(a, b, c) {
                                r.call(this, a, b, c);
                                sa(e, f)
                            }
                        }
                        if (!e) e = this.$$watchers = [];
                        e.unshift(f);
                        return function() {
                            sa(e, f)
                        }
                    },
                    $watchCollection: function(a, b) {
                        var c = this,
                            e, f, h = 0,
                            j = d(a),
                            i = [],
                            p = {}, o = 0;
                        return this.$watch(function() {
                            f = j(c);
                            var a, b;
                            if (L(f))
                                if (C(f)) {
                                    if (e !== i) e = i, o = e.length = 0, h++;
                                    a = f.length;
                                    if (o !== a) h++, e.length = o = a;
                                    for (b = 0; b < a; b++) e[b] !== f[b] && (h++, e[b] = f[b])
                                } else {
                                    e !== p && (e = p = {}, o = 0, h++);
                                    a = 0;
                                    for (b in f) f.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ? e[b] !== f[b] && (h++, e[b] = f[b]) : (o++, e[b] = f[b], h++));
                                    if (o > a)
                                        for (b in h++, e) e.hasOwnProperty(b) && !f.hasOwnProperty(b) && (o--, delete e[b])
                                } else e !== f && (e = f, h++);
                            return h
                        }, function() {
                            b(f, e, c)
                        })
                    },
                    $digest: function() {
                        var a, d, e, i, q = this.$$asyncQueue,
                            n, o, r = b,
                            p, E = [],
                            D, G;
                        f("$digest");
                        do {
                            o = !1;
                            for (p = this; q.length;) try {
                                p.$eval(q.shift())
                            } catch (s) {
                                c(s)
                            }
                            do {
                                if (i = p.$$watchers)
                                    for (n = i.length; n--;) try {
                                        if (a = i[n], (d = a.get(p)) !== (e = a.last) && !(a.eq ? ja(d, e) : typeof d == "number" && typeof e == "number" && isNaN(d) && isNaN(e))) o = !0, a.last = a.eq ? W(d) : d, a.fn(d, e === h ? d : e, p), r < 5 && (D = 4 - r, E[D] || (E[D] = []), G = I(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, G += "; newVal: " + da(d) + "; oldVal: " + da(e), E[D].push(G))
                                    } catch (A) {
                                        c(A)
                                    }
                                if (!(i = p.$$childHead || p !== this && p.$$nextSibling))
                                    for (; p !== this && !(i = p.$$nextSibling);) p = p.$parent
                            } while (p = i);
                            if (o && !r--) throw j.$$phase = null, Error(b + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " + da(E));
                        } while (o || q.length);
                        j.$$phase = null
                    },
                    $destroy: function() {
                        if (!(j == this || this.$$destroyed)) {
                            var a = this.$parent;
                            this.$broadcast("$destroy");
                            this.$$destroyed = !0;
                            if (a.$$childHead == this) a.$$childHead = this.$$nextSibling;
                            if (a.$$childTail == this) a.$$childTail = this.$$prevSibling;
                            if (this.$$prevSibling) this.$$prevSibling.$$nextSibling = this.$$nextSibling;
                            if (this.$$nextSibling) this.$$nextSibling.$$prevSibling = this.$$prevSibling;
                            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                        }
                    },
                    $eval: function(a, b) {
                        return d(a)(this, b)
                    },
                    $evalAsync: function(a) {
                        this.$$asyncQueue.push(a)
                    },
                    $apply: function(a) {
                        try {
                            return f("$apply"), this.$eval(a)
                        } catch (b) {
                            c(b)
                        } finally {
                            j.$$phase = null;
                            try {
                                j.$digest()
                            } catch (d) {
                                throw c(d), d;
                            }
                        }
                    },
                    $on: function(a, b) {
                        var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []);
                        c.push(b);
                        return function() {
                            c[Ga(c, b)] = null
                        }
                    },
                    $emit: function(a, b) {
                        var d = [],
                            e, f = this,
                            h = !1,
                            i = {
                                name: a,
                                targetScope: f,
                                stopPropagation: function() {
                                    h = !0
                                },
                                preventDefault: function() {
                                    i.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            }, j = [i].concat(ka.call(arguments, 1)),
                            p, o;
                        do {
                            e = f.$$listeners[a] || d;
                            i.currentScope = f;
                            p = 0;
                            for (o = e.length; p < o; p++)
                                if (e[p]) try {
                                    if (e[p].apply(null, j), h) return i
                                } catch (D) {
                                    c(D)
                                } else e.splice(p, 1), p--, o--;
                            f = f.$parent
                        } while (f);
                        return i
                    },
                    $broadcast: function(a, b) {
                        var d = this,
                            e = this,
                            f = {
                                name: a,
                                targetScope: this,
                                preventDefault: function() {
                                    f.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            }, h = [f].concat(ka.call(arguments, 1)),
                            i, j;
                        do {
                            d = e;
                            f.currentScope = d;
                            e = d.$$listeners[a] || [];
                            i = 0;
                            for (j = e.length; i < j; i++)
                                if (e[i]) try {
                                    e[i].apply(null, h)
                                } catch (p) {
                                    c(p)
                                } else e.splice(i, 1), i--, j--;
                            if (!(e = d.$$childHead || d !== this && d.$$nextSibling))
                                for (; d !== this && !(e = d.$$nextSibling);) d = d.$parent
                        } while (d = e);
                        return f
                    }
                };
                var j = new e;
                return j
            }
        ]
    }

    function Vc() {
        this.$get = ["$window", "$document",
            function(b, a) {
                var c = {}, d = K((/android (\d+)/.exec(J((b.navigator || {}).userAgent)) || [])[1]),
                    e = a[0] || {}, f, i = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                    h = e.body && e.body.style,
                    j = !1;
                if (h) {
                    for (var g in h)
                        if (j = i.exec(g)) {
                            f = j[0];
                            f = f.substr(0, 1).toUpperCase() + f.substr(1);
                            break
                        }
                    j = !! (f + "Transition" in h)
                }
                return {
                    history: !(!b.history || !b.history.pushState || d < 4),
                    hashchange: "onhashchange" in b && (!e.documentMode || e.documentMode > 7),
                    hasEvent: function(a) {
                        if (a == "input" && X == 9) return !1;
                        if (u(c[a])) {
                            var b = e.createElement("div");
                            c[a] = "on" + a in b
                        }
                        return c[a]
                    },
                    csp: e.securityPolicy ? e.securityPolicy.isActive : !1,
                    vendorPrefix: f,
                    supportsTransitions: j
                }
            }
        ]
    }

    function Wc() {
        this.$get = Q(M)
    }

    function Qb(b) {
        var a = {}, c, d, e;
        if (!b) return a;
        o(b.split("\n"), function(b) {
            e = b.indexOf(":");
            c = J(S(b.substr(0, e)));
            d = S(b.substr(e + 1));
            c && (a[c] ? a[c] += ", " + d : a[c] = d)
        });
        return a
    }

    function Xc(b, a) {
        var c = Yc.exec(b);
        if (c == null) return !0;
        var d = {
            protocol: c[2],
            host: c[4],
            port: K(c[6]) || Ba[c[2]] || null,
            relativeProtocol: c[2] === s || c[2] === ""
        }, c = lb.exec(a),
            c = {
                protocol: c[1],
                host: c[3],
                port: K(c[5]) || Ba[c[1]] || null
            };
        return (d.protocol == c.protocol || d.relativeProtocol) && d.host == c.host && (d.port == c.port || d.relativeProtocol && c.port == Ba[c.protocol])
    }

    function Rb(b) {
        var a = L(b) ? b : s;
        return function(c) {
            a || (a = Qb(b));
            return c ? a[J(c)] || null : a
        }
    }

    function Sb(b, a, c) {
        if (I(c)) return c(b, a);
        o(c, function(c) {
            b = c(b, a)
        });
        return b
    }

    function Zc() {
        var b = /^\s*(\[|\{[^\{])/,
            a = /[\}\]]\s*$/,
            c = /^\)\]\}',?\n/,
            d = this.defaults = {
                transformResponse: [
                    function(d) {
                        x(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = tb(d, !0)));
                        return d
                    }
                ],
                transformRequest: [
                    function(a) {
                        return L(a) && Da.apply(a) !== "[object File]" ? da(a) : a
                    }
                ],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    put: {
                        "Content-Type": "application/json;charset=utf-8"
                    }
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            }, e = this.interceptors = [],
            f = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
            function(a, b, c, g, m, k) {
                function l(a) {
                    function c(a) {
                        var b = y({}, a, {
                            data: Sb(a.data, a.headers, e.transformResponse)
                        });
                        return 200 <= a.status && a.status < 300 ? b : m.reject(b)
                    }
                    var e = {
                        transformRequest: d.transformRequest,
                        transformResponse: d.transformResponse
                    }, g = {};
                    y(e, a);
                    e.headers = g;
                    e.method = na(e.method);
                    y(g, d.headers.common, d.headers[J(e.method)], a.headers);
                    (a = Xc(e.url, b.url()) ? b.cookies()[e.xsrfCookieName || d.xsrfCookieName] : s) && (g[e.xsrfHeaderName || d.xsrfHeaderName] = a);
                    var f = [
                        function(a) {
                            var b = Sb(a.data, Rb(g), a.transformRequest);
                            u(a.data) && delete g["Content-Type"];
                            if (u(a.withCredentials) && !u(d.withCredentials)) a.withCredentials = d.withCredentials;
                            return q(a, b, g).then(c, c)
                        },
                        s
                    ],
                        j = m.when(e);
                    for (o(r, function(a) {
                        (a.request || a.requestError) && f.unshift(a.request, a.requestError);
                        (a.response || a.responseError) && f.push(a.response, a.responseError)
                    }); f.length;) var a = f.shift(),
                    i = f.shift(), j = j.then(a, i);
                    j.success = function(a) {
                        j.then(function(b) {
                            a(b.data, b.status, b.headers, e)
                        });
                        return j
                    };
                    j.error = function(a) {
                        j.then(null, function(b) {
                            a(b.data, b.status, b.headers, e)
                        });
                        return j
                    };
                    return j
                }

                function q(b, c, e) {
                    function f(a, b, c) {
                        o && (200 <= a && a < 300 ? o.put(s, [a, b, Qb(c)]) : o.remove(s));
                        h(b, a, c);
                        g.$apply()
                    }

                    function h(a, c, d) {
                        c = Math.max(c, 0);
                        (200 <= c && c < 300 ? k.resolve : k.reject)({
                            data: a,
                            status: c,
                            headers: Rb(d),
                            config: b
                        })
                    }

                    function j() {
                        var a = Ga(l.pendingRequests, b);
                        a !== -1 && l.pendingRequests.splice(a, 1)
                    }
                    var k = m.defer(),
                        q = k.promise,
                        o, r, s = n(b.url, b.params);
                    l.pendingRequests.push(b);
                    q.then(j, j);
                    if ((b.cache || d.cache) && b.cache !== !1 && b.method == "GET") o = L(b.cache) ? b.cache : L(d.cache) ? d.cache : B;
                    if (o)
                        if (r = o.get(s))
                            if (r.then) return r.then(j, j), r;
                            else C(r) ? h(r[1], r[0], W(r[2])) : h(r, 200, {});
                            else o.put(s, q);
                    r || a(b.method, s, c, f, e, b.timeout, b.withCredentials, b.responseType);
                    return q
                }

                function n(a, b) {
                    if (!b) return a;
                    var c = [];
                    ic(b, function(a, b) {
                        a == null || a == s || (C(a) || (a = [a]), o(a, function(a) {
                            L(a) && (a = da(a));
                            c.push(ua(b) + "=" + ua(a))
                        }))
                    });
                    return a + (a.indexOf("?") == -1 ? "?" : "&") + c.join("&")
                }
                var B = c("$http"),
                    r = [];
                o(e, function(a) {
                    r.unshift(x(a) ? k.get(a) : k.invoke(a))
                });
                o(f, function(a, b) {
                    var c = x(a) ? k.get(a) : k.invoke(a);
                    r.splice(b, 0, {
                        response: function(a) {
                            return c(m.when(a))
                        },
                        responseError: function(a) {
                            return c(m.reject(a))
                        }
                    })
                });
                l.pendingRequests = [];
                (function(a) {
                    o(arguments, function(a) {
                        l[a] = function(b, c) {
                            return l(y(c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                })("get", "delete", "head", "jsonp");
                (function(a) {
                    o(arguments, function(a) {
                        l[a] = function(b, c, d) {
                            return l(y(d || {}, {
                                method: a,
                                url: b,
                                data: c
                            }))
                        }
                    })
                })("post", "put");
                l.defaults = d;
                return l
            }
        ]
    }

    function $c() {
        this.$get = ["$browser", "$window", "$document",
            function(b, a, c) {
                return ad(b, bd, b.defer, a.angular.callbacks, c[0], a.location.protocol.replace(":", ""))
            }
        ]
    }

    function ad(b, a, c, d, e, f) {
        function i(a, b) {
            var c = e.createElement("script"),
                d = function() {
                    e.body.removeChild(c);
                    b && b()
                };
            c.type = "text/javascript";
            c.src = a;
            X ? c.onreadystatechange = function() {
                /loaded|complete/.test(c.readyState) && d()
            } : c.onload = c.onerror = d;
            e.body.appendChild(c)
        }
        return function(e, j, g, m, k, l, q, n) {
            function B(a, c, d, e) {
                c = (j.match(lb) || ["", f])[1] == "file" ? d ? 200 : 404 : c;
                a(c == 1223 ? 204 : c, d, e);
                b.$$completeOutstandingRequest(t)
            }
            b.$$incOutstandingRequestCount();
            j = j || b.url();
            if (J(e) == "jsonp") {
                var r = "_" + (d.counter++).toString(36);
                d[r] = function(a) {
                    d[r].data = a
                };
                i(j.replace("JSON_CALLBACK", "angular.callbacks." + r), function() {
                    d[r].data ? B(m, 200, d[r].data) : B(m, -2);
                    delete d[r]
                })
            } else {
                var p = new a;
                p.open(e, j, !0);
                o(k, function(a, b) {
                    a && p.setRequestHeader(b, a)
                });
                var s;
                p.onreadystatechange = function() {
                    if (p.readyState == 4) {
                        var a = p.getAllResponseHeaders(),
                            b = ["Cache-Control", "Content-Language", "Content-Type", "Expires", "Last-Modified", "Pragma"];
                        a || (a = "", o(b, function(b) {
                            var c = p.getResponseHeader(b);
                            c && (a += b + ": " + c + "\n")
                        }));
                        B(m, s || p.status, p.responseType ? p.response : p.responseText, a)
                    }
                };
                if (q) p.withCredentials = !0;
                if (n) p.responseType = n;
                p.send(g || "");
                l > 0 && c(function() {
                    s = -1;
                    p.abort()
                }, l)
            }
        }
    }

    function cd() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(b) {
                    return b === 1 ? "one" : "other"
                }
            }
        }
    }

    function dd() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
            function(b, a, c, d) {
                function e(e, h, j) {
                    var g = c.defer(),
                        m = g.promise,
                        k = w(j) && !j,
                        h = a.defer(function() {
                            try {
                                g.resolve(e())
                            } catch (a) {
                                g.reject(a), d(a)
                            }
                            k || b.$apply()
                        }, h),
                        j = function() {
                            delete f[m.$$timeoutId]
                        };
                    m.$$timeoutId = h;
                    f[h] = g;
                    m.then(j, j);
                    return m
                }
                var f = {};
                e.cancel = function(b) {
                    return b && b.$$timeoutId in f ? (f[b.$$timeoutId].reject("canceled"), a.defer.cancel(b.$$timeoutId)) : !1
                };
                return e
            }
        ]
    }

    function Tb(b) {
        function a(a, e) {
            return b.factory(a + c, e)
        }
        var c = "Filter";
        this.register = a;
        this.$get = ["$injector",
            function(a) {
                return function(b) {
                    return a.get(b + c)
                }
            }
        ];
        a("currency", Ub);
        a("date", Vb);
        a("filter", ed);
        a("json", fd);
        a("limitTo", gd);
        a("lowercase", hd);
        a("number", Wb);
        a("orderBy", Xb);
        a("uppercase", id)
    }

    function ed() {
        return function(b, a, c) {
            if (!C(b)) return b;
            var d = [];
            d.check = function(a) {
                for (var b = 0; b < d.length; b++)
                    if (!d[b](a)) return !1;
                return !0
            };
            switch (typeof c) {
                case "function":
                    break;
                case "boolean":
                    if (c == !0) {
                        c = function(a, b) {
                            return Ia.equals(a, b)
                        };
                        break
                    }
                default:
                    c = function(a, b) {
                        b = ("" + b).toLowerCase();
                        return ("" + a).toLowerCase().indexOf(b) > -1
                    }
            }
            var e = function(a, b) {
                if (typeof b == "string" && b.charAt(0) === "!") return !e(a, b.substr(1));
                switch (typeof a) {
                    case "boolean":
                    case "number":
                    case "string":
                        return c(a, b);
                    case "object":
                        switch (typeof b) {
                            case "object":
                                return c(a, b);
                            default:
                                for (var d in a)
                                    if (d.charAt(0) !== "$" && e(a[d], b)) return !0
                        }
                        return !1;
                    case "array":
                        for (d = 0; d < a.length; d++)
                            if (e(a[d], b)) return !0;
                        return !1;
                    default:
                        return !1
                }
            };
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    a = {
                        $: a
                    };
                case "object":
                    for (var f in a) f == "$" ? function() {
                        if (a[f]) {
                            var b = f;
                            d.push(function(c) {
                                return e(c, a[b])
                            })
                        }
                    }() : function() {
                        if (a[f]) {
                            var b = f;
                            d.push(function(c) {
                                return e(kb(c, b), a[b])
                            })
                        }
                    }();
                    break;
                case "function":
                    d.push(a);
                    break;
                default:
                    return b
            }
            for (var i = [], h = 0; h < b.length; h++) {
                var j = b[h];
                d.check(j) && i.push(j)
            }
            return i
        }
    }

    function Ub(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            if (u(d)) d = a.CURRENCY_SYM;
            return Yb(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
        }
    }

    function Wb(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return Yb(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function Yb(b, a, c, d, e) {
        if (isNaN(b) || !isFinite(b)) return "";
        var f = b < 0,
            b = Math.abs(b),
            i = b + "",
            h = "",
            j = [],
            g = !1;
        if (i.indexOf("e") !== -1) {
            var m = i.match(/([\d\.]+)e(-?)(\d+)/);
            m && m[2] == "-" && m[3] > e + 1 ? i = "0" : (h = i, g = !0)
        }
        if (!g) {
            i = (i.split(Zb)[1] || "").length;
            u(e) && (e = Math.min(Math.max(a.minFrac, i), a.maxFrac));
            var i = Math.pow(10, e),
                b = Math.round(b * i) / i,
                b = ("" + b).split(Zb),
                i = b[0],
                b = b[1] || "",
                g = 0,
                m = a.lgSize,
                k = a.gSize;
            if (i.length >= m + k)
                for (var g = i.length - m, l = 0; l < g; l++)(g - l) % k === 0 && l !== 0 && (h += c), h += i.charAt(l);
            for (l = g; l < i.length; l++)(i.length - l) % m === 0 && l !== 0 && (h += c), h += i.charAt(l);
            for (; b.length < e;) b += "0";
            e && e !== "0" && (h += d + b.substr(0, e))
        }
        j.push(f ? a.negPre : a.posPre);
        j.push(h);
        j.push(f ? a.negSuf : a.posSuf);
        return j.join("")
    }

    function ob(b, a, c) {
        var d = "";
        b < 0 && (d = "-", b = -b);
        for (b = "" + b; b.length < a;) b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function O(b, a, c, d) {
        return function(e) {
            e = e["get" + b]();
            if (c > 0 || e > -c) e += c;
            e === 0 && c == -12 && (e = 12);
            return ob(e, a, d)
        }
    }

    function Sa(b, a) {
        return function(c, d) {
            var e = c["get" + b](),
                f = na(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function Vb(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                var a = new Date(0),
                    f = 0,
                    i = 0,
                    h = b[8] ? a.setUTCFullYear : a.setFullYear,
                    j = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = K(b[9] + b[10]), i = K(b[9] + b[11]));
                h.call(a, K(b[1]), K(b[2]) - 1, K(b[3]));
                j.call(a, K(b[4] || 0) - f, K(b[5] || 0) - i, K(b[6] || 0), K(b[7] || 0))
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e) {
            var f = "",
                i = [],
                h, j, e = e || "mediumDate",
                e = b.DATETIME_FORMATS[e] || e;
            x(c) && (c = jd.test(c) ? K(c) : a(c));
            Za(c) && (c = new Date(c));
            if (!qa(c)) return c;
            for (; e;)(j = kd.exec(e)) ? (i = i.concat(ka.call(j, 1)), e = i.pop()) : (i.push(e), e = null);
            o(i, function(a) {
                h = ld[a];
                f += h ? h(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return f
        }
    }

    function fd() {
        return function(b) {
            return da(b, !0)
        }
    }

    function gd() {
        return function(b, a) {
            if (!C(b) && !x(b)) return b;
            a = K(a);
            if (x(b)) return a ? a >= 0 ? b.slice(0, a) : b.slice(a, b.length) : "";
            var c = [],
                d, e;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            a > 0 ? (d = 0, e = a) : (d = b.length + a, e = b.length);
            for (; d < e; d++) c.push(b[d]);
            return c
        }
    }

    function Xb(b) {
        return function(a, c, d) {
            function e(a, b) {
                return Ha(b) ? function(b, c) {
                    return a(c, b)
                } : a
            }
            if (!C(a)) return a;
            if (!c) return a;
            for (var c = C(c) ? c : [c], c = $a(c, function(a) {
                    var c = !1,
                        d = a || pa;
                    if (x(a)) {
                        if (a.charAt(0) == "+" || a.charAt(0) == "-") c = a.charAt(0) == "-", a = a.substring(1);
                        d = b(a)
                    }
                    return e(function(a, b) {
                        var c;
                        c = d(a);
                        var e = d(b),
                            f = typeof c,
                            h = typeof e;
                        f == h ? (f == "string" && (c = c.toLowerCase()), f == "string" && (e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = f < h ? -1 : 1;
                        return c
                    }, c)
                }), f = [], i = 0; i < a.length; i++) f.push(a[i]);
            return f.sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (e !== 0) return e
                }
                return 0
            }, d))
        }
    }

    function Y(b) {
        I(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return Q(b)
    }

    function $b(b, a) {
        function c(a, c) {
            c = c ? "-" + db(c, "-") : "";
            b.removeClass((a ? Ta : Ua) + c).addClass((a ? Ua : Ta) + c)
        }
        var d = this,
            e = b.parent().controller("form") || Va,
            f = 0,
            i = d.$error = {}, h = [];
        d.$name = a.name;
        d.$dirty = !1;
        d.$pristine = !0;
        d.$valid = !0;
        d.$invalid = !1;
        e.$addControl(d);
        b.addClass(oa);
        c(!0);
        d.$addControl = function(a) {
            h.push(a);
            a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a)
        };
        d.$removeControl = function(a) {
            a.$name && d[a.$name] === a && delete d[a.$name];
            o(i, function(b, c) {
                d.$setValidity(c, !0, a)
            });
            sa(h, a)
        };
        d.$setValidity = function(a, b, h) {
            var k = i[a];
            if (b) {
                if (k && (sa(k, h), !k.length)) {
                    f--;
                    if (!f) c(b), d.$valid = !0, d.$invalid = !1;
                    i[a] = !1;
                    c(!0, a);
                    e.$setValidity(a, !0, d)
                }
            } else {
                f || c(b);
                if (k) {
                    if (Ga(k, h) != -1) return
                } else i[a] = k = [], f++, c(!1, a), e.$setValidity(a, !1, d);
                k.push(h);
                d.$valid = !1;
                d.$invalid = !0
            }
        };
        d.$setDirty = function() {
            b.removeClass(oa).addClass(Wa);
            d.$dirty = !0;
            d.$pristine = !1;
            e.$setDirty()
        };
        d.$setPristine = function() {
            b.removeClass(Wa).addClass(oa);
            d.$dirty = !1;
            d.$pristine = !0;
            o(h, function(a) {
                a.$setPristine()
            })
        }
    }

    function U(b) {
        return u(b) || b === "" || b === null || b !== b
    }

    function Xa(b, a, c, d, e, f) {
        var i = function() {
            var e = a.val();
            if (Ha(c.ngTrim || "T")) e = S(e);
            d.$viewValue !== e && b.$apply(function() {
                d.$setViewValue(e)
            })
        };
        if (e.hasEvent("input")) a.bind("input", i);
        else {
            var h;
            a.bind("keydown", function(a) {
                a = a.keyCode;
                a === 91 || 15 < a && a < 19 || 37 <= a && a <= 40 || h || (h = f.defer(function() {
                    i();
                    h = null
                }))
            });
            a.bind("change", i)
        }
        d.$render = function() {
            a.val(U(d.$viewValue) ? "" : d.$viewValue)
        };
        var j = c.ngPattern,
            g = function(a, b) {
                return U(b) || a.test(b) ? (d.$setValidity("pattern", !0), b) : (d.$setValidity("pattern", !1), s)
            };
        j && (j.match(/^\/(.*)\/$/) ? (j = RegExp(j.substr(1, j.length - 2)), e = function(a) {
            return g(j, a)
        }) : e = function(a) {
            var c = b.$eval(j);
            if (!c || !c.test) throw Error("Expected " + j + " to be a RegExp but was " + c);
            return g(c, a)
        }, d.$formatters.push(e), d.$parsers.push(e));
        if (c.ngMinlength) {
            var m = K(c.ngMinlength),
                e = function(a) {
                    return !U(a) && a.length < m ? (d.$setValidity("minlength", !1), s) : (d.$setValidity("minlength", !0), a)
                };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var k = K(c.ngMaxlength),
                e = function(a) {
                    return !U(a) && a.length > k ? (d.$setValidity("maxlength", !1), s) : (d.$setValidity("maxlength", !0), a)
                };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
    }

    function pb(b, a) {
        b = "ngClass" + b;
        return Y(function(c, d, e) {
            function f(b) {
                if (a === !0 || c.$index % 2 === a) j && b !== j && i(j), h(b);
                j = b
            }

            function i(a) {
                L(a) && !C(a) && (a = $a(a, function(a, b) {
                    if (a) return b
                }));
                d.removeClass(C(a) ? a.join(" ") : a)
            }

            function h(a) {
                L(a) && !C(a) && (a = $a(a, function(a, b) {
                    if (a) return b
                }));
                a && d.addClass(C(a) ? a.join(" ") : a)
            }
            var j = s;
            c.$watch(e[b], f, !0);
            e.$observe("class", function() {
                var a = c.$eval(e[b]);
                f(a, a)
            });
            b !== "ngClass" && c.$watch("$index", function(d, f) {
                var j = d % 2;
                j !== f % 2 && (j == a ? h(c.$eval(e[b])) : i(c.$eval(e[b])))
            })
        })
    }
    var J = function(b) {
        return x(b) ? b.toLowerCase() : b
    }, na = function(b) {
            return x(b) ? b.toUpperCase() : b
        }, X = K((/msie (\d+)/.exec(J(navigator.userAgent)) || [])[1]),
        v, ca, ka = [].slice,
        Ya = [].push,
        Da = Object.prototype.toString,
        hc = M.angular,
        Ia = M.angular || (M.angular = {}),
        xa, jb, Z = ["0", "0", "0"];
    t.$inject = [];
    pa.$inject = [];
    jb = X < 9 ? function(b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && b.scopeName != "HTML" ? na(b.scopeName + ":" + b.nodeName) : b.nodeName
    } : function(b) {
        return b.nodeName ? b.nodeName : b[0].nodeName
    };
    var nc = /[A-Z]/g,
        md = {
            full: "1.1.4",
            major: 1,
            minor: 1,
            dot: 4,
            codeName: "quantum-manipulation"
        }, La = P.cache = {},
        Ka = P.expando = "ng-" + (new Date).getTime(),
        rc = 1,
        ac = M.document.addEventListener ? function(b, a, c) {
            b.addEventListener(a, c, !1)
        } : function(b, a, c) {
            b.attachEvent("on" + a, c)
        }, ib = M.document.removeEventListener ? function(b, a, c) {
            b.removeEventListener(a, c, !1)
        } : function(b, a, c) {
            b.detachEvent("on" + a, c)
        }, pc = /([\:\-\_]+(.))/g,
        qc = /^moz([A-Z])/,
        za = P.prototype = {
            ready: function(b) {
                function a() {
                    c || (c = !0, b())
                }
                var c = !1;
                V.readyState === "complete" ? setTimeout(a) : (this.bind("DOMContentLoaded", a), P(M).bind("load", a))
            },
            toString: function() {
                var b = [];
                o(this, function(a) {
                    b.push("" + a)
                });
                return "[" + b.join(", ") + "]"
            },
            eq: function(b) {
                return b >= 0 ? v(this[b]) : v(this[this.length + b])
            },
            length: 0,
            push: Ya,
            sort: [].sort,
            splice: [].splice
        }, Oa = {};
    o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(b) {
        Oa[J(b)] = b
    });
    var Eb = {};
    o("input,select,option,textarea,button,form,details".split(","), function(b) {
        Eb[na(b)] = !0
    });
    o({
        data: zb,
        inheritedData: Na,
        scope: function(b) {
            return Na(b, "$scope")
        },
        controller: Cb,
        injector: function(b) {
            return Na(b, "$injector")
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a)
        },
        hasClass: Ma,
        css: function(b, a, c) {
            a = Ja(a);
            if (w(c)) b.style[a] = c;
            else {
                var d;
                X <= 8 && (d = b.currentStyle && b.currentStyle[a], d === "" && (d = "auto"));
                d = d || b.style[a];
                X <= 8 && (d = d === "" ? s : d);
                return d
            }
        },
        attr: function(b, a, c) {
            var d = J(a);
            if (Oa[d])
                if (w(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
                else return b[a] || (b.attributes.getNamedItem(a) || t).specified ? d : s;
                else
            if (w(c)) b.setAttribute(a, c);
            else if (b.getAttribute) return b = b.getAttribute(a, 2), b === null ? s : b
        },
        prop: function(b, a, c) {
            if (w(c)) b[a] = c;
            else return b[a]
        },
        text: y(X < 9 ? function(b, a) {
            if (b.nodeType == 1) {
                if (u(a)) return b.innerText;
                b.innerText = a
            } else {
                if (u(a)) return b.nodeValue;
                b.nodeValue = a
            }
        } : function(b, a) {
            if (u(a)) return b.textContent;
            b.textContent = a
        }, {
            $dv: ""
        }),
        val: function(b, a) {
            if (u(a)) return b.value;
            b.value = a
        },
        html: function(b, a) {
            if (u(a)) return b.innerHTML;
            for (var c = 0, d = b.childNodes; c < d.length; c++) wa(d[c]);
            b.innerHTML = a
        }
    }, function(b, a) {
        P.prototype[a] = function(a, d) {
            var e, f;
            if ((b.length == 2 && b !== Ma && b !== Cb ? a : d) === s)
                if (L(a)) {
                    for (e = 0; e < this.length; e++)
                        if (b === zb) b(this[e], a);
                        else
                            for (f in a) b(this[e], f, a[f]);
                    return this
                } else {
                    if (this.length) return b(this[0], a, d)
                } else {
                    for (e = 0; e < this.length; e++) b(this[e], a, d);
                    return this
                }
            return b.$dv
        }
    });
    o({
        removeData: xb,
        dealoc: wa,
        bind: function a(c, d, e) {
            var f = $(c, "events"),
                i = $(c, "handle");
            f || $(c, "events", f = {});
            i || $(c, "handle", i = sc(c, f));
            o(d.split(" "), function(d) {
                var j = f[d];
                if (!j) {
                    if (d == "mouseenter" || d == "mouseleave") {
                        var g = 0;
                        f.mouseenter = [];
                        f.mouseleave = [];
                        a(c, "mouseover", function(a) {
                            g++;
                            g == 1 && i(a, "mouseenter")
                        });
                        a(c, "mouseout", function(a) {
                            g--;
                            g == 0 && i(a, "mouseleave")
                        })
                    } else ac(c, d, i), f[d] = [];
                    j = f[d]
                }
                j.push(e)
            })
        },
        unbind: yb,
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            wa(a);
            o(new P(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c
            })
        },
        children: function(a) {
            var c = [];
            o(a.childNodes, function(a) {
                a.nodeType === 1 && c.push(a)
            });
            return c
        },
        contents: function(a) {
            return a.childNodes || []
        },
        append: function(a, c) {
            o(new P(c), function(c) {
                (a.nodeType === 1 || a.nodeType === 11) && a.appendChild(c)
            })
        },
        prepend: function(a, c) {
            if (a.nodeType === 1) {
                var d = a.firstChild;
                o(new P(c), function(c) {
                    d ? a.insertBefore(c, d) : (a.appendChild(c), d = c)
                })
            }
        },
        wrap: function(a, c) {
            var c = v(c)[0],
                d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        },
        remove: function(a) {
            wa(a);
            var c = a.parentNode;
            c && c.removeChild(a)
        },
        after: function(a, c) {
            var d = a,
                e = a.parentNode;
            o(new P(c), function(a) {
                e.insertBefore(a, d.nextSibling);
                d = a
            })
        },
        addClass: Bb,
        removeClass: Ab,
        toggleClass: function(a, c, d) {
            u(d) && (d = !Ma(a, c));
            (d ? Bb : Ab)(a, c)
        },
        parent: function(a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a : null
        },
        next: function(a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            for (a = a.nextSibling; a != null && a.nodeType !== 1;) a = a.nextSibling;
            return a
        },
        find: function(a, c) {
            return a.getElementsByTagName(c)
        },
        clone: hb,
        triggerHandler: function(a, c) {
            var d = ($(a, "events") || {})[c];
            o(d, function(c) {
                c.call(a, null)
            })
        }
    }, function(a, c) {
        P.prototype[c] = function(c, e) {
            for (var f, i = 0; i < this.length; i++) f == s ? (f = a(this[i], c, e), f !== s && (f = v(f))) : gb(f, a(this[i], c, e));
            return f == s ? this : f
        }
    });
    Pa.prototype = {
        put: function(a, c) {
            this[la(a)] = c
        },
        get: function(a) {
            return this[la(a)]
        },
        remove: function(a) {
            var c = this[a = la(a)];
            delete this[a];
            return c
        }
    };
    var uc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        vc = /,/,
        wc = /^\s*(_?)(\S+?)\1\s*$/,
        tc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    Gb.$inject = ["$provide"];
    var nd = function() {
        this.$get = ["$animation", "$window", "$sniffer",
            function(a, c, d) {
                function e(a) {
                    a.css("display", "")
                }

                function f(a) {
                    a.css("display", "none")
                }

                function i(a, c, d) {
                    d ? d.after(a) : c.append(a)
                }

                function h(a) {
                    a.remove()
                }

                function j(a, c, d) {
                    i(a, c, d)
                }
                return function(g, m) {
                    function k(e, f, h) {
                        var i = l && g.$eval(l),
                            e = l ? L(i) ? i[e] : i + "-" + e : "",
                            j = (i = a(e)) && i.setup,
                            k = i && i.start;
                        if (e) {
                            var m = e + "-setup",
                                q = e + "-start";
                            return function(a, e, g) {
                                function i() {
                                    h(a, e, g);
                                    a.removeClass(m);
                                    a.removeClass(q)
                                }
                                if (!d.supportsTransitions && !j && !k) f(a, e, g), h(a, e, g);
                                else {
                                    a.addClass(m);
                                    f(a, e, g);
                                    if (a.length == 0) return i();
                                    var l = (j || t)(a);
                                    c.setTimeout(function() {
                                        a.addClass(q);
                                        if (k) k(a, i, l);
                                        else if (I(c.getComputedStyle)) {
                                            var e = d.vendorPrefix + "Transition",
                                                f = 0;
                                            o(a, function(a) {
                                                a = c.getComputedStyle(a) || {};
                                                f = Math.max(parseFloat(a.transitionDuration) || parseFloat(a[e + "Duration"]) || 0, f)
                                            });
                                            c.setTimeout(i, f * 1E3)
                                        } else i()
                                    }, 1)
                                }
                            }
                        } else return function(a, c, d) {
                            f(a, c, d);
                            h(a, c, d)
                        }
                    }
                    var l = m.ngAnimate,
                        q = {};
                    q.enter = k("enter", i, t);
                    q.leave = k("leave", t, h);
                    q.move = k("move", j, t);
                    q.show = k("show", e, t);
                    q.hide = k("hide", t, f);
                    return q
                }
            }
        ]
    }, Ib = "Non-assignable model expression: ";
    Hb.$inject = ["$provide"];
    var Cc = /^(x[\:\-_]|data[\:\-_])/i,
        lb = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
        bc = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
        Jc = bc,
        Ba = {
            http: 80,
            https: 443,
            ftp: 21
        };
    mb.prototype = {
        $$replace: !1,
        absUrl: Ra("$$absUrl"),
        url: function(a, c) {
            if (u(a)) return this.$$url;
            var d = bc.exec(a);
            d[1] && this.path(decodeURIComponent(d[1]));
            if (d[2] || d[1]) this.search(d[3] || "");
            this.hash(d[5] || "", c);
            return this
        },
        protocol: Ra("$$protocol"),
        host: Ra("$$host"),
        port: Ra("$$port"),
        path: Mb("$$path", function(a) {
            return a.charAt(0) == "/" ? a : "/" + a
        }),
        search: function(a, c) {
            if (u(a)) return this.$$search;
            w(c) ? c === null ? delete this.$$search[a] : this.$$search[a] = c : this.$$search = x(a) ? bb(a) : a;
            this.$$compose();
            return this
        },
        hash: Mb("$$hash", pa),
        replace: function() {
            this.$$replace = !0;
            return this
        }
    };
    Qa.prototype = Fa(mb.prototype);
    Lb.prototype = Fa(Qa.prototype);
    var Ca = {
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: t,
        "+": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return w(d) ? w(e) ? d + e : d : w(e) ? e : s
        },
        "-": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return (w(d) ? d : 0) - (w(e) ? e : 0)
        },
        "*": function(a, c, d, e) {
            return d(a, c) * e(a, c)
        },
        "/": function(a, c, d, e) {
            return d(a, c) / e(a, c)
        },
        "%": function(a, c, d, e) {
            return d(a, c) % e(a, c)
        },
        "^": function(a, c, d, e) {
            return d(a, c) ^ e(a, c)
        },
        "=": t,
        "===": function(a, c, d, e) {
            return d(a, c) === e(a, c)
        },
        "!==": function(a, c, d, e) {
            return d(a, c) !== e(a, c)
        },
        "==": function(a, c, d, e) {
            return d(a, c) == e(a, c)
        },
        "!=": function(a, c, d, e) {
            return d(a, c) != e(a, c)
        },
        "<": function(a, c, d, e) {
            return d(a, c) < e(a, c)
        },
        ">": function(a, c, d, e) {
            return d(a, c) > e(a, c)
        },
        "<=": function(a, c, d, e) {
            return d(a, c) <= e(a, c)
        },
        ">=": function(a, c, d, e) {
            return d(a, c) >= e(a, c)
        },
        "&&": function(a, c, d, e) {
            return d(a, c) && e(a, c)
        },
        "||": function(a, c, d, e) {
            return d(a, c) || e(a, c)
        },
        "&": function(a, c, d, e) {
            return d(a, c) & e(a, c)
        },
        "|": function(a, c, d, e) {
            return e(a, c)(a, c, d(a, c))
        },
        "!": function(a, c, d) {
            return !d(a, c)
        }
    }, Nc = {
            n: "\n",
            f: "\u000c",
            r: "\r",
            t: "\t",
            v: "\u000b",
            "'": "'",
            '"': '"'
        }, nb = {}, Yc = /^(([^:]+):)?\/\/(\w+:{0,1}\w*@)?([\w\.-]*)?(:([0-9]+))?(.*)$/,
        bd = M.XMLHttpRequest || function() {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (a) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (c) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (d) {}
            throw Error("This browser does not support XMLHttpRequest.");
        };
    Tb.$inject = ["$provide"];
    Ub.$inject = ["$locale"];
    Wb.$inject = ["$locale"];
    var Zb = ".",
        ld = {
            yyyy: O("FullYear", 4),
            yy: O("FullYear", 2, 0, !0),
            y: O("FullYear", 1),
            MMMM: Sa("Month"),
            MMM: Sa("Month", !0),
            MM: O("Month", 2, 1),
            M: O("Month", 1, 1),
            dd: O("Date", 2),
            d: O("Date", 1),
            HH: O("Hours", 2),
            H: O("Hours", 1),
            hh: O("Hours", 2, -12),
            h: O("Hours", 1, -12),
            mm: O("Minutes", 2),
            m: O("Minutes", 1),
            ss: O("Seconds", 2),
            s: O("Seconds", 1),
            sss: O("Milliseconds", 3),
            EEEE: Sa("Day"),
            EEE: Sa("Day", !0),
            a: function(a, c) {
                return a.getHours() < 12 ? c.AMPMS[0] : c.AMPMS[1]
            },
            Z: function(a) {
                var a = -1 * a.getTimezoneOffset(),
                    c = a >= 0 ? "+" : "";
                c += ob(Math[a > 0 ? "floor" : "ceil"](a / 60), 2) + ob(Math.abs(a % 60), 2);
                return c
            }
        }, kd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
        jd = /^\d+$/;
    Vb.$inject = ["$locale"];
    var hd = Q(J),
        id = Q(na);
    Xb.$inject = ["$parse"];
    var od = Q({
        restrict: "E",
        compile: function(a, c) {
            X <= 8 && (!c.href && !c.name && c.$set("href", ""), a.append(V.createComment("IE fix")));
            return function(a, c) {
                c.bind("click", function(a) {
                    c.attr("href") || a.preventDefault()
                })
            }
        }
    }),
        qb = {};
    o(Oa, function(a, c) {
        var d = aa("ng-" + c);
        qb[d] = function() {
            return {
                priority: 100,
                compile: function() {
                    return function(a, f, i) {
                        a.$watch(i[d], function(a) {
                            i.$set(c, !! a)
                        })
                    }
                }
            }
        }
    });
    o(["src", "href"], function(a) {
        var c = aa("ng-" + a);
        qb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, f) {
                    f.$observe(c, function(c) {
                        c && (f.$set(a, c), X && e.prop(a, f[a]))
                    })
                }
            }
        }
    });
    var Va = {
        $addControl: t,
        $removeControl: t,
        $setValidity: t,
        $setDirty: t,
        $setPristine: t
    };
    $b.$inject = ["$element", "$attrs", "$scope"];
    var Ya = function(a) {
        return ["$timeout", function(c) {
            var d = {
                name: "form",
                restrict: "E",
                controller: $b,
                compile: function() {
                    return {
                        pre: function(a, d, i, h) {
                            if (!i.action) {
                                var j = function(a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                };
                                ac(d[0], "submit", j);
                                d.bind("$destroy", function() {
                                    c(function() {
                                        ib(d[0], "submit", j)
                                    }, 0, !1)
                                })
                            }
                            var g = d.parent().controller("form"),
                                m = i.name || i.ngForm;
                            m && (a[m] = h);
                            g && d.bind("$destroy", function() {
                                g.$removeControl(h);
                                m && (a[m] = s);
                                y(h, Va)
                            })
                        }
                    }
                }
            };
            return a ? y(W(d), {
                restrict: "EAC"
            }) : d
        }]
    }, pd = Ya(),
        qd = Ya(!0),
        rd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        sd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        td = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        cc = {
            text: Xa,
            number: function(a, c, d, e, f, i) {
                Xa(a, c, d, e, f, i);
                e.$parsers.push(function(a) {
                    var c = U(a);
                    return c || td.test(a) ? (e.$setValidity("number", !0), a === "" ? null : c ? a : parseFloat(a)) : (e.$setValidity("number", !1), s)
                });
                e.$formatters.push(function(a) {
                    return U(a) ? "" : "" + a
                });
                if (d.min) {
                    var h = parseFloat(d.min),
                        a = function(a) {
                            return !U(a) && a < h ? (e.$setValidity("min", !1), s) : (e.$setValidity("min", !0), a)
                        };
                    e.$parsers.push(a);
                    e.$formatters.push(a)
                }
                if (d.max) {
                    var j = parseFloat(d.max),
                        d = function(a) {
                            return !U(a) && a > j ? (e.$setValidity("max", !1), s) : (e.$setValidity("max", !0), a)
                        };
                    e.$parsers.push(d);
                    e.$formatters.push(d)
                }
                e.$formatters.push(function(a) {
                    return U(a) || Za(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), s)
                })
            },
            url: function(a, c, d, e, f, i) {
                Xa(a, c, d, e, f, i);
                a = function(a) {
                    return U(a) || rd.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), s)
                };
                e.$formatters.push(a);
                e.$parsers.push(a)
            },
            email: function(a, c, d, e, f, i) {
                Xa(a, c, d, e, f, i);
                a = function(a) {
                    return U(a) || sd.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), s)
                };
                e.$formatters.push(a);
                e.$parsers.push(a)
            },
            radio: function(a, c, d, e) {
                u(d.name) && c.attr("name", Ea());
                c.bind("click", function() {
                    c[0].checked && a.$apply(function() {
                        e.$setViewValue(d.value)
                    })
                });
                e.$render = function() {
                    c[0].checked = d.value == e.$viewValue
                };
                d.$observe("value", e.$render)
            },
            checkbox: function(a, c, d, e) {
                var f = d.ngTrueValue,
                    i = d.ngFalseValue;
                x(f) || (f = !0);
                x(i) || (i = !1);
                c.bind("click", function() {
                    a.$apply(function() {
                        e.$setViewValue(c[0].checked)
                    })
                });
                e.$render = function() {
                    c[0].checked = e.$viewValue
                };
                e.$formatters.push(function(a) {
                    return a === f
                });
                e.$parsers.push(function(a) {
                    return a ? f : i
                })
            },
            hidden: t,
            button: t,
            submit: t,
            reset: t
        }, dc = ["$browser", "$sniffer",
            function(a, c) {
                return {
                    restrict: "E",
                    require: "?ngModel",
                    link: function(d, e, f, i) {
                        i && (cc[J(f.type)] || cc.text)(d, e, f, i, c, a)
                    }
                }
            }
        ],
        Ua = "ng-valid",
        Ta = "ng-invalid",
        oa = "ng-pristine",
        Wa = "ng-dirty",
        ud = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse",
            function(a, c, d, e, f) {
                function i(a, c) {
                    c = c ? "-" + db(c, "-") : "";
                    e.removeClass((a ? Ta : Ua) + c).addClass((a ? Ua : Ta) + c)
                }
                this.$modelValue = this.$viewValue = Number.NaN;
                this.$parsers = [];
                this.$formatters = [];
                this.$viewChangeListeners = [];
                this.$pristine = !0;
                this.$dirty = !1;
                this.$valid = !0;
                this.$invalid = !1;
                this.$name = d.name;
                var h = f(d.ngModel),
                    j = h.assign;
                if (!j) throw Error(Ib + d.ngModel + " (" + ta(e) + ")");
                this.$render = t;
                var g = e.inheritedData("$formController") || Va,
                    m = 0,
                    k = this.$error = {};
                e.addClass(oa);
                i(!0);
                this.$setValidity = function(a, c) {
                    if (k[a] !== !c) {
                        if (c) {
                            if (k[a] && m--, !m) i(!0), this.$valid = !0, this.$invalid = !1
                        } else i(!1), this.$invalid = !0, this.$valid = !1, m++;
                        k[a] = !c;
                        i(c, a);
                        g.$setValidity(a, c, this)
                    }
                };
                this.$setPristine = function() {
                    this.$dirty = !1;
                    this.$pristine = !0;
                    e.removeClass(Wa).addClass(oa)
                };
                this.$setViewValue = function(d) {
                    this.$viewValue = d;
                    if (this.$pristine) this.$dirty = !0, this.$pristine = !1, e.removeClass(oa).addClass(Wa), g.$setDirty();
                    o(this.$parsers, function(a) {
                        d = a(d)
                    });
                    if (this.$modelValue !== d) this.$modelValue = d, j(a, d), o(this.$viewChangeListeners, function(a) {
                        try {
                            a()
                        } catch (d) {
                            c(d)
                        }
                    })
                };
                var l = this;
                a.$watch(function() {
                    var c = h(a);
                    if (l.$modelValue !== c) {
                        var d = l.$formatters,
                            e = d.length;
                        for (l.$modelValue = c; e--;) c = d[e](c);
                        if (l.$viewValue !== c) l.$viewValue = c, l.$render()
                    }
                })
            }
        ],
        vd = function() {
            return {
                require: ["ngModel", "^?form"],
                controller: ud,
                link: function(a, c, d, e) {
                    var f = e[0],
                        i = e[1] || Va;
                    i.$addControl(f);
                    c.bind("$destroy", function() {
                        i.$removeControl(f)
                    })
                }
            }
        }, wd = Q({
            require: "ngModel",
            link: function(a, c, d, e) {
                e.$viewChangeListeners.push(function() {
                    a.$eval(d.ngChange)
                })
            }
        }),
        ec = function() {
            return {
                require: "?ngModel",
                link: function(a, c, d, e) {
                    if (e) {
                        d.required = !0;
                        var f = function(a) {
                            if (d.required && (U(a) || a === !1)) e.$setValidity("required", !1);
                            else return e.$setValidity("required", !0), a
                        };
                        e.$formatters.push(f);
                        e.$parsers.unshift(f);
                        d.$observe("required", function() {
                            f(e.$viewValue)
                        })
                    }
                }
            }
        }, xd = function() {
            return {
                require: "ngModel",
                link: function(a, c, d, e) {
                    var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                    e.$parsers.push(function(a) {
                        var c = [];
                        a && o(a.split(f), function(a) {
                            a && c.push(S(a))
                        });
                        return c
                    });
                    e.$formatters.push(function(a) {
                        return C(a) ? a.join(", ") : s
                    })
                }
            }
        }, yd = /^(true|false|\d+)$/,
        zd = function() {
            return {
                priority: 100,
                compile: function(a, c) {
                    return yd.test(c.ngValue) ? function(a, c, f) {
                        f.$set("value", a.$eval(f.ngValue))
                    } : function(a, c, f) {
                        a.$watch(f.ngValue, function(a) {
                            f.$set("value", a, !1)
                        })
                    }
                }
            }
        }, Ad = Y(function(a, c, d) {
            c.addClass("ng-binding").data("$binding", d.ngBind);
            a.$watch(d.ngBind, function(a) {
                c.text(a == s ? "" : a)
            })
        }),
        Bd = ["$interpolate",
            function(a) {
                return function(c, d, e) {
                    c = a(d.attr(e.$attr.ngBindTemplate));
                    d.addClass("ng-binding").data("$binding", c);
                    e.$observe("ngBindTemplate", function(a) {
                        d.text(a)
                    })
                }
            }
        ],
        Cd = [
            function() {
                return function(a, c, d) {
                    c.addClass("ng-binding").data("$binding", d.ngBindHtmlUnsafe);
                    a.$watch(d.ngBindHtmlUnsafe, function(a) {
                        c.html(a || "")
                    })
                }
            }
        ],
        Dd = pb("", !0),
        Ed = pb("Odd", 0),
        Fd = pb("Even", 1),
        Gd = Y({
            compile: function(a, c) {
                c.$set("ngCloak", s);
                a.removeClass("ng-cloak")
            }
        }),
        Hd = [
            function() {
                return {
                    scope: !0,
                    controller: "@"
                }
            }
        ],
        Id = ["$sniffer",
            function(a) {
                return {
                    priority: 1E3,
                    compile: function() {
                        a.csp = !0
                    }
                }
            }
        ],
        fc = {};
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress".split(" "), function(a) {
        var c = aa("ng-" + a);
        fc[c] = ["$parse",
            function(d) {
                return function(e, f, i) {
                    var h = d(i[c]);
                    f.bind(J(a), function(a) {
                        e.$apply(function() {
                            h(e, {
                                $event: a
                            })
                        })
                    })
                }
            }
        ]
    });
    var Jd = Y(function(a, c, d) {
        c.bind("submit", function() {
            a.$apply(d.ngSubmit)
        })
    }),
        Kd = ["$http", "$templateCache", "$anchorScroll", "$compile", "$animator",
            function(a, c, d, e, f) {
                return {
                    restrict: "ECA",
                    terminal: !0,
                    compile: function(i, h) {
                        var j = h.ngInclude || h.src,
                            g = h.onload || "",
                            m = h.autoscroll;
                        return function(h, i, o) {
                            var n = f(h, o),
                                s = 0,
                                r, p = function() {
                                    r && (r.$destroy(), r = null);
                                    n.leave(i.contents(), i)
                                };
                            h.$watch(j, function(f) {
                                var j = ++s;
                                f ? a.get(f, {
                                    cache: c
                                }).success(function(a) {
                                    j === s && (r && r.$destroy(), r = h.$new(), n.leave(i.contents(), i), a = v("<div/>").html(a).contents(), n.enter(a, i), e(a)(r), w(m) && (!m || h.$eval(m)) && d(), r.$emit("$includeContentLoaded"), h.$eval(g))
                                }).error(function() {
                                    j === s && p()
                                }) : p()
                            })
                        }
                    }
                }
            }
        ],
        Ld = Y({
            compile: function() {
                return {
                    pre: function(a, c, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }),
        Md = Y({
            terminal: !0,
            priority: 1E3
        }),
        Nd = ["$locale", "$interpolate",
            function(a, c) {
                var d = /{}/g;
                return {
                    restrict: "EA",
                    link: function(e, f, i) {
                        var h = i.count,
                            j = f.attr(i.$attr.when),
                            g = i.offset || 0,
                            m = e.$eval(j),
                            k = {}, l = c.startSymbol(),
                            q = c.endSymbol();
                        o(m, function(a, e) {
                            k[e] = c(a.replace(d, l + h + "-" + g + q))
                        });
                        e.$watch(function() {
                            var c = parseFloat(e.$eval(h));
                            return isNaN(c) ? "" : (m[c] || (c = a.pluralCat(c - g)), k[c](e, f, !0))
                        }, function(a) {
                            f.text(a)
                        })
                    }
                }
            }
        ],
        Od = ["$parse", "$animator",
            function(a, c) {
                return {
                    transclude: "element",
                    priority: 1E3,
                    terminal: !0,
                    compile: function(d, e, f) {
                        return function(d, e, j) {
                            var g = c(d, j),
                                m = j.ngRepeat,
                                k = m.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
                                l, q, n, s, r, p = {
                                    $id: la
                                };
                            if (!k) throw Error("Expected ngRepeat in form of '_item_ in _collection_[ track by _id_]' but got '" + m + "'.");
                            j = k[1];
                            n = k[2];
                            (k = k[4]) ? (l = a(k), q = function(a, c, e) {
                                r && (p[r] = a);
                                p[s] = c;
                                p.$index = e;
                                return l(d, p)
                            }) : q = function(a, c) {
                                return la(c)
                            };
                            k = j.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                            if (!k) throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" + j + "'.");
                            s = k[3] || k[1];
                            r = k[2];
                            var y = {};
                            d.$watchCollection(n, function(a) {
                                var c, j, k = e,
                                    l, n = {}, p, t, v, z, w, u, x = [];
                                if (C(a)) w = a;
                                else {
                                    w = [];
                                    for (v in a) a.hasOwnProperty(v) && v.charAt(0) != "$" && w.push(v);
                                    w.sort()
                                }
                                p = w.length;
                                j = x.length = w.length;
                                for (c = 0; c < j; c++)
                                    if (v = a === w ? c : w[c], z = a[v], l = q(v, z, c), u = y[l]) delete y[l], n[l] = u, x[c] = u;
                                    else
                                if (n.hasOwnProperty(l)) throw o(x, function(a) {
                                    a && a.element && (y[a.id] = a)
                                }), Error("Duplicates in a repeater are not allowed. Repeater: " + m);
                                else x[c] = {
                                    id: l
                                };
                                for (v in y)
                                    if (y.hasOwnProperty(v)) u = y[v], g.leave(u.element), u.element[0].$$NG_REMOVED = !0, u.scope.$destroy();
                                c = 0;
                                for (j = w.length; c < j; c++) {
                                    v = a === w ? c : w[c];
                                    z = a[v];
                                    u = x[c];
                                    if (u.element) {
                                        t = u.scope;
                                        l = k[0];
                                        do l = l.nextSibling; while (l && l.$$NG_REMOVED);
                                        u.element[0] != l && g.move(u.element, null, k);
                                        k = u.element
                                    } else t = d.$new();
                                    t[s] = z;
                                    r && (t[r] = v);
                                    t.$index = c;
                                    t.$first = c === 0;
                                    t.$last = c === p - 1;
                                    t.$middle = !(t.$first || t.$last);
                                    u.element || f(t, function(a) {
                                        g.enter(a, null, k);
                                        k = a;
                                        u.scope = t;
                                        u.element = a;
                                        n[u.id] = u
                                    })
                                }
                                y = n
                            })
                        }
                    }
                }
            }
        ],
        Pd = ["$animator",
            function(a) {
                return function(c, d, e) {
                    var f = a(c, e);
                    c.$watch(e.ngShow, function(a) {
                        f[Ha(a) ? "show" : "hide"](d)
                    })
                }
            }
        ],
        Qd = ["$animator",
            function(a) {
                return function(c, d, e) {
                    var f = a(c, e);
                    c.$watch(e.ngHide, function(a) {
                        f[Ha(a) ? "hide" : "show"](d)
                    })
                }
            }
        ],
        Rd = Y(function(a, c, d) {
            a.$watch(d.ngStyle, function(a, d) {
                d && a !== d && o(d, function(a, d) {
                    c.css(d, "")
                });
                a && c.css(a)
            }, !0)
        }),
        Sd = ["$animator",
            function(a) {
                return {
                    restrict: "EA",
                    require: "ngSwitch",
                    controller: ["$scope",
                        function() {
                            this.cases = {}
                        }
                    ],
                    link: function(c, d, e, f) {
                        var i = a(c, e),
                            h, j, g = [];
                        c.$watch(e.ngSwitch || e.on, function(a) {
                            for (var d = 0, l = g.length; d < l; d++) g[d].$destroy(), i.leave(j[d]);
                            j = [];
                            g = [];
                            if (h = f.cases["!" + a] || f.cases["?"]) c.$eval(e.change), o(h, function(a) {
                                var d = c.$new();
                                g.push(d);
                                a.transclude(d, function(c) {
                                    var d = a.element;
                                    j.push(c);
                                    i.enter(c, d.parent(), d)
                                })
                            })
                        })
                    }
                }
            }
        ],
        Td = Y({
            transclude: "element",
            priority: 500,
            require: "^ngSwitch",
            compile: function(a, c, d) {
                return function(a, f, i, h) {
                    h.cases["!" + c.ngSwitchWhen] = h.cases["!" + c.ngSwitchWhen] || [];
                    h.cases["!" + c.ngSwitchWhen].push({
                        transclude: d,
                        element: f
                    })
                }
            }
        }),
        Ud = Y({
            transclude: "element",
            priority: 500,
            require: "^ngSwitch",
            compile: function(a, c, d) {
                return function(a, c, i, h) {
                    h.cases["?"] = h.cases["?"] || [];
                    h.cases["?"].push({
                        transclude: d,
                        element: c
                    })
                }
            }
        }),
        Vd = Y({
            controller: ["$transclude", "$element",
                function(a, c) {
                    a(function(a) {
                        c.append(a)
                    })
                }
            ]
        }),
        Wd = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", "$animator",
            function(a, c, d, e, f, i, h) {
                return {
                    restrict: "ECA",
                    terminal: !0,
                    link: function(a, c, m) {
                        function k() {
                            var h = d.current && d.current.locals,
                                k = h && h.$template;
                            if (k) {
                                n.leave(c.contents(), c);
                                l && (l.$destroy(), l = null);
                                n.enter(v("<div></div>").html(k).contents(), c);
                                var k = f(c.contents()),
                                    m = d.current;
                                l = m.scope = a.$new();
                                if (m.controller) h.$scope = l, h = i(m.controller, h), c.children().data("$ngControllerController", h);
                                k(l);
                                l.$emit("$viewContentLoaded");
                                l.$eval(o);
                                e()
                            } else n.leave(c.contents(), c), l && (l.$destroy(), l = null)
                        }
                        var l, o = m.onload || "",
                            n = h(a, m);
                        a.$on("$routeChangeSuccess", k);
                        k()
                    }
                }
            }
        ],
        Xd = ["$templateCache",
            function(a) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(c, d) {
                        d.type == "text/ng-template" && a.put(d.id, c[0].text)
                    }
                }
            }
        ],
        Yd = Q({
            terminal: !0
        }),
        Zd = ["$compile", "$parse",
            function(a, c) {
                var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,
                    e = {
                        $setViewValue: t
                    };
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ["$element", "$scope", "$attrs",
                        function(a, c, d) {
                            var j = this,
                                g = {}, m = e,
                                k;
                            j.databound = d.ngModel;
                            j.init = function(a, c, d) {
                                m = a;
                                k = d
                            };
                            j.addOption = function(c) {
                                g[c] = !0;
                                m.$viewValue == c && (a.val(c), k.parent() && k.remove())
                            };
                            j.removeOption = function(a) {
                                this.hasOption(a) && (delete g[a], m.$viewValue == a && this.renderUnknownOption(a))
                            };
                            j.renderUnknownOption = function(c) {
                                c = "? " + la(c) + " ?";
                                k.val(c);
                                a.prepend(k);
                                a.val(c);
                                k.prop("selected", !0)
                            };
                            j.hasOption = function(a) {
                                return g.hasOwnProperty(a)
                            };
                            c.$on("$destroy", function() {
                                j.renderUnknownOption = t
                            })
                        }
                    ],
                    link: function(e, i, h, j) {
                        function g(a, c, d, e) {
                            d.$render = function() {
                                var a = d.$viewValue;
                                e.hasOption(a) ? (x.parent() && x.remove(), c.val(a), a === "" && p.prop("selected", !0)) : u(a) && p ? c.val("") : e.renderUnknownOption(a)
                            };
                            c.bind("change", function() {
                                a.$apply(function() {
                                    x.parent() && x.remove();
                                    d.$setViewValue(c.val())
                                })
                            })
                        }

                        function m(a, c, d) {
                            var e;
                            d.$render = function() {
                                var a = new Pa(d.$viewValue);
                                o(c.find("option"), function(c) {
                                    c.selected = w(a.get(c.value))
                                })
                            };
                            a.$watch(function() {
                                ja(e, d.$viewValue) || (e = W(d.$viewValue), d.$render())
                            });
                            c.bind("change", function() {
                                a.$apply(function() {
                                    var a = [];
                                    o(c.find("option"), function(c) {
                                        c.selected && a.push(c.value)
                                    });
                                    d.$setViewValue(a)
                                })
                            })
                        }

                        function k(e, f, h) {
                            function g() {
                                var a = {
                                    "": []
                                }, c = [""],
                                    d, i, t, v, u;
                                t = h.$modelValue;
                                v = p(e) || [];
                                var w = l ? rb(v) : v,
                                    z, x, A;
                                x = {};
                                u = !1;
                                var B, C;
                                if (n) u = new Pa(t);
                                else if (t === null || r) a[""].push({
                                    selected: t === null,
                                    id: "",
                                    label: ""
                                }), u = !0;
                                for (A = 0; z = w.length, A < z; A++) {
                                    x[k] = v[l ? x[l] = w[A] : A];
                                    d = m(e, x) || "";
                                    if (!(i = a[d])) i = a[d] = [], c.push(d);
                                    n ? d = u.remove(o(e, x)) != s : (d = t === o(e, x), u = u || d);
                                    B = j(e, x);
                                    B = B === s ? "" : B;
                                    i.push({
                                        id: l ? w[A] : A,
                                        label: B,
                                        selected: d
                                    })
                                }!n && !u && a[""].unshift({
                                    id: "?",
                                    label: "",
                                    selected: !0
                                });
                                x = 0;
                                for (w = c.length; x < w; x++) {
                                    d = c[x];
                                    i = a[d];
                                    if (q.length <= x) t = {
                                        element: D.clone().attr("label", d),
                                        label: i.label
                                    }, v = [t], q.push(v), f.append(t.element);
                                    else if (v = q[x], t = v[0], t.label != d) t.element.attr("label", t.label = d);
                                    B = null;
                                    A = 0;
                                    for (z = i.length; A < z; A++)
                                        if (d = i[A], u = v[A + 1]) {
                                            B = u.element;
                                            if (u.label !== d.label) B.text(u.label = d.label);
                                            if (u.id !== d.id) B.val(u.id = d.id);
                                            if (u.element.selected !== d.selected) B.prop("selected", u.selected = d.selected)
                                        } else d.id === "" && r ? C = r : (C = y.clone()).val(d.id).attr("selected", d.selected).text(d.label), v.push({
                                            element: C,
                                            label: d.label,
                                            id: d.id,
                                            selected: d.selected
                                        }), B ? B.after(C) : t.element.append(C), B = C;
                                    for (A++; v.length > A;) v.pop().element.remove()
                                }
                                for (; q.length > x;) q.pop()[0].element.remove()
                            }
                            var i;
                            if (!(i = t.match(d))) throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + t + "'.");
                            var j = c(i[2] || i[1]),
                                k = i[4] || i[6],
                                l = i[5],
                                m = c(i[3] || ""),
                                o = c(i[2] ? i[1] : k),
                                p = c(i[7]),
                                q = [
                                    [{
                                        element: f,
                                        label: ""
                                    }]
                                ];
                            r && (a(r)(e), r.removeClass("ng-scope"), r.remove());
                            f.html("");
                            f.bind("change", function() {
                                e.$apply(function() {
                                    var a, c = p(e) || [],
                                        d = {}, g, i, j, m, r, t;
                                    if (n) {
                                        i = [];
                                        m = 0;
                                        for (t = q.length; m < t; m++) {
                                            a = q[m];
                                            j = 1;
                                            for (r = a.length; j < r; j++)
                                                if ((g = a[j].element)[0].selected) g = g.val(), l && (d[l] = g), d[k] = c[g], i.push(o(e, d))
                                        }
                                    } else g = f.val(), g == "?" ? i = s : g == "" ? i = null : (d[k] = c[g], l && (d[l] = g), i = o(e, d));
                                    h.$setViewValue(i)
                                })
                            });
                            h.$render = g;
                            e.$watch(g)
                        }
                        if (j[1]) {
                            for (var l = j[0], q = j[1], n = h.multiple, t = h.ngOptions, r = !1, p, y = v(V.createElement("option")), D = v(V.createElement("optgroup")), x = y.clone(), j = 0, C = i.children(), A = C.length; j < A; j++)
                                if (C[j].value == "") {
                                    p = r = C.eq(j);
                                    break
                                }
                            l.init(q, r, x);
                            if (n && (h.required || h.ngRequired)) {
                                var H = function(a) {
                                    q.$setValidity("required", !h.required || a && a.length);
                                    return a
                                };
                                q.$parsers.push(H);
                                q.$formatters.unshift(H);
                                h.$observe("required", function() {
                                    H(q.$viewValue)
                                })
                            }
                            t ? k(e, i, q) : n ? m(e, i, q) : g(e, i, q, l)
                        }
                    }
                }
            }
        ],
        $d = ["$interpolate",
            function(a) {
                var c = {
                    addOption: t,
                    removeOption: t
                };
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(d, e) {
                        if (u(e.value)) {
                            var f = a(d.text(), !0);
                            f || e.$set("value", d.text())
                        }
                        return function(a, d, e) {
                            var g = d.parent(),
                                m = g.data("$selectController") || g.parent().data("$selectController");
                            m && m.databound ? d.prop("selected", !1) : m = c;
                            f ? a.$watch(f, function(a, c) {
                                e.$set("value", a);
                                a !== c && m.removeOption(c);
                                m.addOption(a)
                            }) : m.addOption(e.value);
                            d.bind("$destroy", function() {
                                m.removeOption(e.value)
                            })
                        }
                    }
                }
            }
        ],
        ae = Q({
            restrict: "E",
            terminal: !0
        });
    (ca = M.jQuery) ? (v = ca, y(ca.fn, {
            scope: za.scope,
            controller: za.controller,
            injector: za.injector,
            inheritedData: za.inheritedData
        }), fb("remove", !0), fb("empty"), fb("html")) : v = P;
    Ia.element = v;
    (function(a) {
        y(a, {
            bootstrap: vb,
            copy: W,
            extend: y,
            equals: ja,
            element: v,
            forEach: o,
            injector: wb,
            noop: t,
            bind: ab,
            toJson: da,
            fromJson: tb,
            identity: pa,
            isUndefined: u,
            isDefined: w,
            isString: x,
            isFunction: I,
            isObject: L,
            isNumber: Za,
            isElement: jc,
            isArray: C,
            version: md,
            isDate: qa,
            lowercase: J,
            uppercase: na,
            callbacks: {
                counter: 0
            },
            noConflict: gc
        });
        xa = oc(M);
        try {
            xa("ngLocale")
        } catch (c) {
            xa("ngLocale", []).provider("$locale", cd)
        }
        xa("ng", ["ngLocale"], ["$provide",
            function(a) {
                a.provider("$compile", Hb).directive({
                    a: od,
                    input: dc,
                    textarea: dc,
                    form: pd,
                    script: Xd,
                    select: Zd,
                    style: ae,
                    option: $d,
                    ngBind: Ad,
                    ngBindHtmlUnsafe: Cd,
                    ngBindTemplate: Bd,
                    ngClass: Dd,
                    ngClassEven: Fd,
                    ngClassOdd: Ed,
                    ngCsp: Id,
                    ngCloak: Gd,
                    ngController: Hd,
                    ngForm: qd,
                    ngHide: Qd,
                    ngInclude: Kd,
                    ngInit: Ld,
                    ngNonBindable: Md,
                    ngPluralize: Nd,
                    ngRepeat: Od,
                    ngShow: Pd,
                    ngSubmit: Jd,
                    ngStyle: Rd,
                    ngSwitch: Sd,
                    ngSwitchWhen: Td,
                    ngSwitchDefault: Ud,
                    ngOptions: Yd,
                    ngView: Wd,
                    ngTransclude: Vd,
                    ngModel: vd,
                    ngList: xd,
                    ngChange: wd,
                    required: ec,
                    ngRequired: ec,
                    ngValue: zd
                }).directive(qb).directive(fc);
                a.provider({
                    $anchorScroll: xc,
                    $animation: Gb,
                    $animator: nd,
                    $browser: zc,
                    $cacheFactory: Ac,
                    $controller: Dc,
                    $document: Ec,
                    $exceptionHandler: Fc,
                    $filter: Tb,
                    $interpolate: Gc,
                    $http: Zc,
                    $httpBackend: $c,
                    $location: Kc,
                    $log: Lc,
                    $parse: Pc,
                    $route: Sc,
                    $routeParams: Tc,
                    $rootScope: Uc,
                    $q: Qc,
                    $sniffer: Vc,
                    $templateCache: Bc,
                    $timeout: dd,
                    $window: Wc
                })
            }
        ])
    })(Ia);
    v(V).ready(function() {
        mc(V, vb)
    })
})(window, document);
angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');
/*
 AngularJS v1.1.4
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I, h) {
    'use strict';

    function i(a) {
        var d = {}, a = a.split(","),
            c;
        for (c = 0; c < a.length; c++) d[a[c]] = !0;
        return d
    }

    function z(a, d) {
        function c(a, b, c, f) {
            b = h.lowercase(b);
            if (m[b])
                for (; e.last() && n[e.last()];) g("", e.last());
            o[b] && e.last() == b && g("", b);
            (f = p[b] || !! f) || e.push(b);
            var j = {};
            c.replace(A, function(a, b, d, c, g) {
                j[b] = k(d || c || g || "")
            });
            d.start && d.start(b, j, f)
        }

        function g(a, b) {
            var c = 0,
                g;
            if (b = h.lowercase(b))
                for (c = e.length - 1; c >= 0; c--)
                    if (e[c] == b) break;
            if (c >= 0) {
                for (g = e.length - 1; g >= c; g--) d.end && d.end(e[g]);
                e.length = c
            }
        }
        var b, f, e = [],
            j = a;
        for (e.last = function() {
            return e[e.length - 1]
        }; a;) {
            f = !0;
            if (!e.last() || !q[e.last()]) {
                if (a.indexOf("<\!--") === 0) b = a.indexOf("--\>"), b >= 0 && (d.comment && d.comment(a.substring(4, b)), a = a.substring(b + 3), f = !1);
                else if (B.test(a)) {
                    if (b = a.match(r)) a = a.substring(b[0].length), b[0].replace(r, g), f = !1
                } else if (C.test(a) && (b = a.match(s))) a = a.substring(b[0].length), b[0].replace(s, c), f = !1;
                f && (b = a.indexOf("<"), f = b < 0 ? a : a.substring(0, b), a = b < 0 ? "" : a.substring(b), d.chars && d.chars(k(f)))
            } else a = a.replace(RegExp("(.*)<\\s*\\/\\s*" + e.last() + "[^>]*>", "i"), function(a, b) {
                b = b.replace(D, "$1").replace(E, "$1");
                d.chars && d.chars(k(b));
                return ""
            }), g("", e.last()); if (a == j) throw "Parse Error: " + a;
            j = a
        }
        g()
    }

    function k(a) {
        l.innerHTML = a.replace(/</g, "&lt;");
        return l.innerText || l.textContent || ""
    }

    function t(a) {
        return a.replace(/&/g, "&amp;").replace(F, function(a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function u(a) {
        var d = !1,
            c = h.bind(a, a.push);
        return {
            start: function(a, b, f) {
                a = h.lowercase(a);
                !d && q[a] && (d = a);
                !d && v[a] == !0 && (c("<"), c(a), h.forEach(b, function(a, b) {
                    var d = h.lowercase(b);
                    if (G[d] == !0 && (w[d] !== !0 || a.match(H))) c(" "), c(b), c('="'), c(t(a)), c('"')
                }), c(f ? "/>" : ">"))
            },
            end: function(a) {
                a = h.lowercase(a);
                !d && v[a] == !0 && (c("</"), c(a), c(">"));
                a == d && (d = !1)
            },
            chars: function(a) {
                d || c(t(a))
            }
        }
    }
    var s = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,
        r = /^<\s*\/\s*([\w:-]+)[^>]*>/,
        A = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
        C = /^</,
        B = /^<\s*\//,
        D = /<\!--(.*?)--\>/g,
        E = /<!\[CDATA\[(.*?)]]\>/g,
        H = /^((ftp|https?):\/\/|mailto:|tel:|#)/,
        F = /([^\#-~| |!])/g,
        p = i("area,br,col,hr,img,wbr"),
        x = i("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        y = i("rp,rt"),
        o = h.extend({}, y, x),
        m = h.extend({}, x, i("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
        n = h.extend({}, y, i("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
        q = i("script,style"),
        v = h.extend({}, p, m, n, o),
        w = i("background,cite,href,longdesc,src,usemap"),
        G = h.extend({}, w, i("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),
        l = document.createElement("pre");
    h.module("ngSanitize", []).value("$sanitize", function(a) {
        var d = [];
        z(a, u(d));
        return d.join("")
    });
    h.module("ngSanitize").directive("ngBindHtml", ["$sanitize",
        function(a) {
            return function(d, c, g) {
                c.addClass("ng-binding").data("$binding", g.ngBindHtml);
                d.$watch(g.ngBindHtml, function(b) {
                    b = a(b);
                    c.html(b || "")
                })
            }
        }
    ]);
    h.module("ngSanitize").filter("linky", function() {
        var a = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}\<\>]/,
            d = /^mailto:/;
        return function(c, g) {
            if (!c) return c;
            var b, f = c,
                e = [],
                j = u(e),
                i, k, l = {};
            if (h.isDefined(g)) l.target = g;
            for (; b = f.match(a);) i = b[0], b[2] == b[3] && (i = "mailto:" + i), k = b.index, j.chars(f.substr(0, k)), l.href = i, j.start("a", l), j.chars(b[0].replace(d, "")), j.end("a"), f = f.substring(k + b[0].length);
            j.chars(f);
            return e.join("")
        }
    })
})(window, window.angular);
/*
 AngularJS v1.1.4
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(B, f, x) {
    'use strict';
    f.module("ngResource", ["ng"]).factory("$resource", ["$http", "$parse",
        function(y, z) {
            function v(g, c) {
                this.template = g + "#";
                this.defaults = c || {};
                this.urlParams = {}
            }

            function w(g, c, d) {
                function j(e, b) {
                    var p = {}, b = q({}, c, b);
                    k(b, function(a, b) {
                        l(a) && (a = a());
                        var h;
                        a.charAt && a.charAt(0) == "@" ? (h = a.substr(1), h = z(h)(e)) : h = a;
                        p[b] = h
                    });
                    return p
                }

                function b(b) {
                    u(b || {}, this)
                }
                var m = new v(g),
                    d = q({}, A, d);
                k(d, function(e, c) {
                    e.method = f.uppercase(e.method);
                    var p = e.method == "POST" || e.method == "PUT" || e.method == "PATCH";
                    b[c] = function(a, c, h, g) {
                        function f() {
                            i.$resolved = !0
                        }
                        var n = {}, d, o = r,
                            s = null;
                        switch (arguments.length) {
                            case 4:
                                s = g, o = h;
                            case 3:
                            case 2:
                                if (l(c)) {
                                    if (l(a)) {
                                        o = a;
                                        s = c;
                                        break
                                    }
                                    o = c;
                                    s = h
                                } else {
                                    n = a;
                                    d = c;
                                    o = h;
                                    break
                                }
                            case 1:
                                l(a) ? o = a : p ? d = a : n = a;
                                break;
                            case 0:
                                break;
                            default:
                                throw "Expected between 0-4 arguments [params, data, success, error], got " + arguments.length + " arguments.";
                        }
                        var i = this instanceof b ? this : e.isArray ? [] : new b(d),
                            t = {};
                        k(e, function(a, b) {
                            b != "params" && b != "isArray" && (t[b] = u(a))
                        });
                        t.data = d;
                        m.setUrlParams(t, q({}, j(d, e.params || {}), n), e.url);
                        n = y(t);
                        i.$resolved = !1;
                        n.then(f, f);
                        i.$then = n.then(function(a) {
                            var c = a.data,
                                h = i.$then,
                                d = i.$resolved;
                            if (c) e.isArray ? (i.length = 0, k(c, function(a) {
                                i.push(new b(a))
                            })) : (u(c, i), i.$then = h, i.$resolved = d);
                            (o || r)(i, a.headers);
                            a.resource = i;
                            return a
                        }, s).then;
                        return i
                    };
                    b.prototype["$" + c] = function(a, e, h) {
                        var d = j(this),
                            f = r,
                            g;
                        switch (arguments.length) {
                            case 3:
                                d = a;
                                f = e;
                                g = h;
                                break;
                            case 2:
                            case 1:
                                l(a) ? (f = a, g = e) : (d = a, f = e || r);
                            case 0:
                                break;
                            default:
                                throw "Expected between 1-3 arguments [params, success, error], got " + arguments.length + " arguments.";
                        }
                        b[c].call(this, d, p ? this : x, f, g)
                    }
                });
                b.bind = function(b) {
                    return w(g, q({}, c, b), d)
                };
                return b
            }
            var A = {
                get: {
                    method: "GET"
                },
                save: {
                    method: "POST"
                },
                query: {
                    method: "GET",
                    isArray: !0
                },
                remove: {
                    method: "DELETE"
                },
                "delete": {
                    method: "DELETE"
                }
            }, r = f.noop,
                k = f.forEach,
                q = f.extend,
                u = f.copy,
                l = f.isFunction;
            v.prototype = {
                setUrlParams: function(g, c, d) {
                    var j = this,
                        b = d || j.template,
                        m, e, l = j.urlParams = {};
                    k(b.split(/\W/), function(c) {
                        c && RegExp("(^|[^\\\\]):" + c + "(\\W|$)").test(b) && (l[c] = !0)
                    });
                    b = b.replace(/\\:/g, ":");
                    c = c || {};
                    k(j.urlParams, function(d, a) {
                        m = c.hasOwnProperty(a) ? c[a] : j.defaults[a];
                        f.isDefined(m) && m !== null ? (e = encodeURIComponent(m).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), b = b.replace(RegExp(":" + a + "(\\W|$)", "g"), e + "$1")) : b = b.replace(RegExp("(/?):" + a + "(\\W|$)", "g"), function(a, b, c) {
                            return c.charAt(0) == "/" ? c : b + c
                        })
                    });
                    g.url = b.replace(/\/?#$/, "").replace(/\/*$/, "");
                    k(c, function(b, a) {
                        if (!j.urlParams[a]) g.params = g.params || {}, g.params[a] = b
                    })
                }
            };
            return w
        }
    ])
})(window, window.angular);
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.datepicker", "ui.bootstrap.dialog", "ui.bootstrap.dropdownToggle", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.position", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/dialog/message.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/typeahead/typeahead.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope",
    function(a, b, c) {
        function d(a) {
            for (var b in a)
                if (void 0 !== f.style[b]) return a[b]
        }
        var e = function(d, f, g) {
            g = g || {};
            var h = a.defer(),
                i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"],
                j = function() {
                    c.$apply(function() {
                        d.unbind(i, j), h.resolve(d)
                    })
                };
            return i && d.bind(i, j), b(function() {
                angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
            }), h.promise.cancel = function() {
                i && d.unbind(i, j), h.reject("Transition cancelled")
            }, h.promise
        }, f = document.createElement("trans"),
            g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }, h = {
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
            };
        return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
    }
]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition",
    function(a) {
        var b = function(a, b, c) {
            b.removeClass("collapse"), b.css({
                height: c
            }), b[0].offsetWidth, b.addClass("collapse")
        };
        return {
            link: function(c, d, e) {
                var f, g = !0;
                c.$watch(function() {
                    return d[0].scrollHeight
                }, function() {
                    0 !== d[0].scrollHeight && (f || (g ? b(c, d, d[0].scrollHeight + "px") : b(c, d, "auto")))
                }), c.$watch(e.collapse, function(a) {
                    a ? k() : j()
                });
                var h, i = function(b) {
                        return h && h.cancel(), h = a(d, b), h.then(function() {
                            h = void 0
                        }, function() {
                            h = void 0
                        }), h
                    }, j = function() {
                        g ? (g = !1, f || b(c, d, "auto")) : i({
                            height: d[0].scrollHeight + "px"
                        }).then(function() {
                            f || b(c, d, "auto")
                        }), f = !1
                    }, k = function() {
                        f = !0, g ? (g = !1, b(c, d, 0)) : (b(c, d, d[0].scrollHeight + "px"), i({
                            height: "0"
                        }))
                    }
            }
        }
    }
]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
    closeOthers: !0
}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig",
    function(a, b, c) {
        this.groups = [], this.closeOthers = function(d) {
            var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
            e && angular.forEach(this.groups, function(a) {
                a !== d && (a.isOpen = !1)
            })
        }, this.addGroup = function(a) {
            var b = this;
            this.groups.push(a), a.$on("$destroy", function() {
                b.removeGroup(a)
            })
        }, this.removeGroup = function(a) {
            var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(this.groups.indexOf(a), 1)
        }
    }
]).directive("accordion", function() {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    }
}).directive("accordionGroup", ["$parse", "$transition", "$timeout",
    function(a) {
        return {
            require: "^accordion",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/accordion/accordion-group.html",
            scope: {
                heading: "@"
            },
            controller: ["$scope",
                function() {
                    this.setHeading = function(a) {
                        this.heading = a
                    }
                }
            ],
            link: function(b, c, d, e) {
                var f, g;
                e.addGroup(b), b.isOpen = !1, d.isOpen && (f = a(d.isOpen), g = f.assign, b.$watch(function() {
                    return f(b.$parent)
                }, function(a) {
                    b.isOpen = a
                }), b.isOpen = f ? f(b.$parent) : !1), b.$watch("isOpen", function(a) {
                    a && e.closeOthers(b), g && g(b.$parent, a)
                })
            }
        }
    }
]).directive("accordionHeading", function() {
    return {
        restrict: "E",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        compile: function(a, b, c) {
            return function(a, b, d, e) {
                e.setHeading(c(a, function() {}))
            }
        }
    }
}).directive("accordionTransclude", function() {
    return {
        require: "^accordionGroup",
        link: function(a, b, c, d) {
            a.$watch(function() {
                return d[c.accordionTransclude]
            }, function(a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).directive("alert", function() {
    return {
        restrict: "EA",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {
            type: "=",
            close: "&"
        },
        link: function(a, b, c) {
            a.closeable = "close" in c
        }
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).directive("btnRadio", ["buttonConfig",
    function(a) {
        var b = a.activeClass || "active",
            c = a.toggleEvent || "click";
        return {
            require: "ngModel",
            link: function(a, d, e, f) {
                var g = a.$eval(e.btnRadio);
                a.$watch(function() {
                    return f.$modelValue
                }, function(a) {
                    angular.equals(a, g) ? d.addClass(b) : d.removeClass(b)
                }), d.bind(c, function() {
                    d.hasClass(b) || a.$apply(function() {
                        f.$setViewValue(g)
                    })
                })
            }
        }
    }
]).directive("btnCheckbox", ["buttonConfig",
    function(a) {
        var b = a.activeClass || "active",
            c = a.toggleEvent || "click";
        return {
            require: "ngModel",
            link: function(a, d, e, f) {
                var g = a.$eval(e.btnCheckboxTrue),
                    h = a.$eval(e.btnCheckboxFalse);
                g = angular.isDefined(g) ? g : !0, h = angular.isDefined(h) ? h : !1, a.$watch(function() {
                    return f.$modelValue
                }, function(a) {
                    angular.equals(a, g) ? d.addClass(b) : d.removeClass(b)
                }), d.bind(c, function() {
                    a.$apply(function() {
                        f.$setViewValue(d.hasClass(b) ? h : g)
                    })
                })
            }
        }
    }
]), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$transition", "$q",
    function(a, b, c) {
        function d() {
            function c() {
                f ? (a.next(), d()) : a.pause()
            }
            e && b.cancel(e);
            var g = +a.interval;
            !isNaN(g) && g >= 0 && (e = b(c, g))
        }
        var e, f, g = this,
            h = g.slides = [],
            i = -1;
        g.currentSlide = null, g.select = function(e, f) {
            function j() {
                g.currentSlide && angular.isString(f) && !a.noTransition && e.$element ? (e.$element.addClass(f), e.$element[0].offsetWidth = e.$element[0].offsetWidth, angular.forEach(h, function(a) {
                    angular.extend(a, {
                        direction: "",
                        entering: !1,
                        leaving: !1,
                        active: !1
                    })
                }), angular.extend(e, {
                    direction: f,
                    active: !0,
                    entering: !0
                }), angular.extend(g.currentSlide || {}, {
                    direction: f,
                    leaving: !0
                }), a.$currentTransition = c(e.$element, {}), function(b, c) {
                    a.$currentTransition.then(function() {
                        k(b, c)
                    }, function() {
                        k(b, c)
                    })
                }(e, g.currentSlide)) : k(e, g.currentSlide), g.currentSlide = e, i = l, d()
            }

            function k(b, c) {
                angular.extend(b, {
                    direction: "",
                    active: !0,
                    leaving: !1,
                    entering: !1
                }), angular.extend(c || {}, {
                    direction: "",
                    active: !1,
                    leaving: !1,
                    entering: !1
                }), a.$currentTransition = null
            }
            var l = h.indexOf(e);
            void 0 === f && (f = l > i ? "next" : "prev"), e && e !== g.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(j)) : j())
        }, g.indexOfSlide = function(a) {
            return h.indexOf(a)
        }, a.next = function() {
            var a = (i + 1) % h.length;
            return g.select(h[a], "next")
        }, a.prev = function() {
            var a = 0 > i - 1 ? h.length - 1 : i - 1;
            return g.select(h[a], "prev")
        }, a.select = function(a) {
            g.select(a)
        }, a.isActive = function(a) {
            return g.currentSlide === a
        }, a.slides = function() {
            return h
        }, a.$watch("interval", d), a.play = function() {
            f || (f = !0, d())
        }, a.pause = function() {
            f = !1, e && b.cancel(e)
        }, g.addSlide = function(b, c) {
            b.$element = c, h.push(b), 1 === h.length || b.active ? (g.select(h[h.length - 1]), 1 == h.length && a.play()) : b.active = !1
        }, g.removeSlide = function(a) {
            var b = h.indexOf(a);
            h.splice(b, 1), h.length > 0 && a.active && (b >= h.length ? g.select(h[b - 1]) : g.select(h[b]))
        }
    }
]).directive("carousel", [
    function() {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            controller: "CarouselController",
            require: "carousel",
            templateUrl: "template/carousel/carousel.html",
            scope: {
                interval: "=",
                noTransition: "="
            }
        }
    }
]).directive("slide", [
    function() {
        return {
            require: "^carousel",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/carousel/slide.html",
            scope: {
                active: "="
            },
            link: function(a, b, c, d) {
                d.addSlide(a, b), a.$on("$destroy", function() {
                    d.removeSlide(a)
                }), a.$watch("active", function(b) {
                    b && d.select(a)
                })
            }
        }
    }
]), angular.module("ui.bootstrap.datepicker", []).constant("datepickerConfig", {
    dayFormat: "dd",
    monthFormat: "MMMM",
    yearFormat: "yyyy",
    dayHeaderFormat: "EEE",
    dayTitleFormat: "MMMM yyyy",
    monthTitleFormat: "yyyy",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20
}).directive("datepicker", ["dateFilter", "$parse", "datepickerConfig",
    function(a, b, c) {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                model: "=ngModel",
                dateDisabled: "&"
            },
            templateUrl: "template/datepicker/datepicker.html",
            link: function(d, e, f) {
                function g(a, b, c) {
                    d.rows = a, d.labels = b, d.title = c
                }

                function h() {
                    d.showWeekNumbers = "day" === d.mode && l
                }

                function j(a, b) {
                    return "year" === d.mode ? b.getFullYear() - a.getFullYear() : "month" === d.mode ? new Date(b.getFullYear(), b.getMonth()) - new Date(a.getFullYear(), a.getMonth()) : "day" === d.mode ? new Date(b.getFullYear(), b.getMonth(), b.getDate()) - new Date(a.getFullYear(), a.getMonth(), a.getDate()) : void 0
                }

                function k(a) {
                    return m && j(a, m) > 0 || n && j(a, n) < 0 || d.dateDisabled && d.dateDisabled({
                        date: a,
                        mode: d.mode
                    })
                }
                d.mode = "day";
                var l, m, n, o = new Date,
                    p = {};
                p.day = angular.isDefined(f.dayFormat) ? d.$eval(f.dayFormat) : c.dayFormat, p.month = angular.isDefined(f.monthFormat) ? d.$eval(f.monthFormat) : c.monthFormat, p.year = angular.isDefined(f.yearFormat) ? d.$eval(f.yearFormat) : c.yearFormat, p.dayHeader = angular.isDefined(f.dayHeaderFormat) ? d.$eval(f.dayHeaderFormat) : c.dayHeaderFormat, p.dayTitle = angular.isDefined(f.dayTitleFormat) ? d.$eval(f.dayTitleFormat) : c.dayTitleFormat, p.monthTitle = angular.isDefined(f.monthTitleFormat) ? d.$eval(f.monthTitleFormat) : c.monthTitleFormat;
                var q = angular.isDefined(f.startingDay) ? d.$eval(f.startingDay) : c.startingDay,
                    r = angular.isDefined(f.yearRange) ? d.$eval(f.yearRange) : c.yearRange;
                f.showWeeks ? d.$parent.$watch(b(f.showWeeks), function(a) {
                    l = !! a, h()
                }) : (l = c.showWeeks, h()), f.min && d.$parent.$watch(b(f.min), function(a) {
                    m = new Date(a), v()
                }), f.max && d.$parent.$watch(b(f.max), function(a) {
                    n = new Date(a), v()
                });
                var s = function(a, b) {
                    for (var c = []; a.length > 0;) c.push(a.splice(0, b));
                    return c
                }, t = function(a, b) {
                        return new Date(a, b + 1, 0).getDate()
                    }, u = {
                        day: function() {
                            function b(b, d, f) {
                                for (var g = 0; d > g; g++) c.push({
                                    date: new Date(b),
                                    isCurrent: f,
                                    isSelected: w(b),
                                    label: a(b, p.day),
                                    disabled: k(b)
                                }), b.setDate(b.getDate() + 1);
                                e = b
                            }
                            var c = [],
                                d = [],
                                e = null,
                                f = new Date(o);
                            f.setDate(1);
                            var h = q - f.getDay(),
                                j = h > 0 ? 7 - h : -h;
                            for (j > 0 && (f.setDate(-j + 1), b(f, j, !1)), b(e || f, t(o.getFullYear(), o.getMonth()), !0), b(e, (7 - c.length % 7) % 7, !1), i = 0; 7 > i; i++) d.push(a(c[i].date, p.dayHeader));
                            g(s(c, 7), d, a(o, p.dayTitle))
                        },
                        month: function() {
                            for (var b = [], c = 0, d = o.getFullYear(); 12 > c;) {
                                var e = new Date(d, c++, 1);
                                b.push({
                                    date: e,
                                    isCurrent: !0,
                                    isSelected: w(e),
                                    label: a(e, p.month),
                                    disabled: k(e)
                                })
                            }
                            g(s(b, 3), [], a(o, p.monthTitle))
                        },
                        year: function() {
                            for (var b = [], c = parseInt((o.getFullYear() - 1) / r, 10) * r + 1, d = 0; r > d; d++) {
                                var e = new Date(c + d, 0, 1);
                                b.push({
                                    date: e,
                                    isCurrent: !0,
                                    isSelected: w(e),
                                    label: a(e, p.year),
                                    disabled: k(e)
                                })
                            }
                            var f = b[0].label + " - " + b[b.length - 1].label;
                            g(s(b, 5), [], f)
                        }
                    }, v = function() {
                        u[d.mode]()
                    }, w = function(a) {
                        if (d.model && d.model.getFullYear() === a.getFullYear()) {
                            if ("year" === d.mode) return !0;
                            if (d.model.getMonth() === a.getMonth()) return "month" === d.mode || "day" === d.mode && d.model.getDate() === a.getDate()
                        }
                        return !1
                    };
                d.$watch("model", function(a, b) {
                    angular.isDate(a) && (o = angular.copy(a)), angular.equals(a, b) || v()
                }), d.$watch("mode", function() {
                    h(), v()
                }), d.select = function(a) {
                    o = new Date(a), "year" === d.mode ? (d.mode = "month", o.setFullYear(a.getFullYear())) : "month" === d.mode ? (d.mode = "day", o.setMonth(a.getMonth())) : "day" === d.mode && (d.model = new Date(o))
                }, d.move = function(a) {
                    "day" === d.mode ? o.setMonth(o.getMonth() + a) : "month" === d.mode ? o.setFullYear(o.getFullYear() + a) : "year" === d.mode && o.setFullYear(o.getFullYear() + a * r), v()
                }, d.toggleMode = function() {
                    d.mode = "day" === d.mode ? "month" : "month" === d.mode ? "year" : "day"
                }, d.getWeekNumber = function(a) {
                    if ("day" === d.mode && d.showWeekNumbers && 7 === a.length) {
                        var b = q > 4 ? 11 - q : 4 - q,
                            c = new Date(a[b].date);
                        return c.setHours(0, 0, 0), Math.ceil(((c - new Date(c.getFullYear(), 0, 1)) / 864e5 + 1) / 7)
                    }
                }
            }
        }
    }
]);
var dialogModule = angular.module("ui.bootstrap.dialog", ["ui.bootstrap.transition"]);
dialogModule.controller("MessageBoxController", ["$scope", "dialog", "model",
    function(a, b, c) {
        a.title = c.title, a.message = c.message, a.buttons = c.buttons, a.close = function(a) {
            b.close(a)
        }
    }
]), dialogModule.provider("$dialog", function() {
    var a = {
        backdrop: !0,
        dialogClass: "modal",
        backdropClass: "modal-backdrop",
        transitionClass: "fade",
        triggerClass: "in",
        resolve: {},
        backdropFade: !1,
        dialogFade: !1,
        keyboard: !0,
        backdropClick: !0
    }, b = {}, c = {
            value: 0
        };
    this.options = function(a) {
        b = a
    }, this.$get = ["$http", "$document", "$compile", "$rootScope", "$controller", "$templateCache", "$q", "$transition", "$injector",
        function(d, e, f, g, h, i, j, k, l) {
            function m(a) {
                var b = angular.element("<div>");
                return b.addClass(a), b
            }

            function n(c) {
                var d = this,
                    e = this.options = angular.extend({}, a, b, c);
                this._open = !1, this.backdropEl = m(e.backdropClass), e.backdropFade && (this.backdropEl.addClass(e.transitionClass), this.backdropEl.removeClass(e.triggerClass)), this.modalEl = m(e.dialogClass), e.dialogFade && (this.modalEl.addClass(e.transitionClass), this.modalEl.removeClass(e.triggerClass)), this.handledEscapeKey = function(a) {
                    27 === a.which && (d.close(), a.preventDefault(), d.$scope.$apply())
                }, this.handleBackDropClick = function(a) {
                    d.close(), a.preventDefault(), d.$scope.$apply()
                }, this.handleLocationChange = function() {
                    d.close()
                }
            }
            var o = e.find("body");
            return n.prototype.isOpen = function() {
                return this._open
            }, n.prototype.open = function(a, b) {
                var c = this,
                    d = this.options;
                if (a && (d.templateUrl = a), b && (d.controller = b), !d.template && !d.templateUrl) throw new Error("Dialog.open expected template or templateUrl, neither found. Use options or open method to specify them.");
                return this._loadResolves().then(function(a) {
                    var b = a.$scope = c.$scope = a.$scope ? a.$scope : g.$new();
                    if (c.modalEl.html(a.$template), c.options.controller) {
                        var d = h(c.options.controller, a);
                        c.modalEl.children().data("ngControllerController", d)
                    }
                    f(c.modalEl)(b), c._addElementsToDom(), setTimeout(function() {
                        c.options.dialogFade && c.modalEl.addClass(c.options.triggerClass), c.options.backdropFade && c.backdropEl.addClass(c.options.triggerClass)
                    }), c._bindEvents()
                }), this.deferred = j.defer(), this.deferred.promise
            }, n.prototype.close = function(a) {
                function b(a) {
                    a.removeClass(d.options.triggerClass)
                }

                function c() {
                    d._open && d._onCloseComplete(a)
                }
                var d = this,
                    e = this._getFadingElements();
                if (e.length > 0)
                    for (var f = e.length - 1; f >= 0; f--) k(e[f], b).then(c);
                else this._onCloseComplete(a)
            }, n.prototype._getFadingElements = function() {
                var a = [];
                return this.options.dialogFade && a.push(this.modalEl), this.options.backdropFade && a.push(this.backdropEl), a
            }, n.prototype._bindEvents = function() {
                this.options.keyboard && o.bind("keydown", this.handledEscapeKey), this.options.backdrop && this.options.backdropClick && this.backdropEl.bind("click", this.handleBackDropClick), this.$scope.$on("$locationChangeSuccess", this.handleLocationChange)
            }, n.prototype._unbindEvents = function() {
                this.options.keyboard && o.unbind("keydown", this.handledEscapeKey), this.options.backdrop && this.options.backdropClick && this.backdropEl.unbind("click", this.handleBackDropClick)
            }, n.prototype._onCloseComplete = function(a) {
                this._removeElementsFromDom(), this._unbindEvents(), this.deferred.resolve(a)
            }, n.prototype._addElementsToDom = function() {
                o.append(this.modalEl), this.options.backdrop && (0 === c.value && o.append(this.backdropEl), c.value++), this._open = !0
            }, n.prototype._removeElementsFromDom = function() {
                this.modalEl.remove(), this.options.backdrop && (c.value--, 0 === c.value && this.backdropEl.remove()), this._open = !1
            }, n.prototype._loadResolves = function() {
                var a, b = [],
                    c = [],
                    e = this;
                return this.options.template ? a = j.when(this.options.template) : this.options.templateUrl && (a = d.get(this.options.templateUrl, {
                    cache: i
                }).then(function(a) {
                    return a.data
                })), angular.forEach(this.options.resolve || [], function(a, d) {
                    c.push(d), b.push(angular.isString(a) ? l.get(a) : l.invoke(a))
                }), c.push("$template"), b.push(a), j.all(b).then(function(a) {
                    var b = {};
                    return angular.forEach(a, function(a, d) {
                        b[c[d]] = a
                    }), b.dialog = e, b
                })
            }, {
                dialog: function(a) {
                    return new n(a)
                },
                messageBox: function(a, b, c) {
                    return new n({
                        templateUrl: "template/dialog/message.html",
                        controller: "MessageBoxController",
                        resolve: {
                            model: function() {
                                return {
                                    title: a,
                                    message: b,
                                    buttons: c
                                }
                            }
                        }
                    })
                }
            }
        }
    ]
}), angular.module("ui.bootstrap.dropdownToggle", []).directive("dropdownToggle", ["$document", "$location", "$window",
    function(a) {
        var b = null,
            c = angular.noop;
        return {
            restrict: "CA",
            link: function(d, e) {
                d.$watch("$location.path", function() {
                    c()
                }), e.parent().bind("click", function() {
                    c()
                }), e.bind("click", function(d) {
                    d.preventDefault(), d.stopPropagation();
                    var f = e === b;
                    b && c(), f || (e.parent().addClass("open"), b = e, c = function(d) {
                        d && (d.preventDefault(), d.stopPropagation()), a.unbind("click", c), e.parent().removeClass("open"), c = angular.noop, b = null
                    }, a.bind("click", c))
                })
            }
        }
    }
]), angular.module("ui.bootstrap.modal", ["ui.bootstrap.dialog"]).directive("modal", ["$parse", "$dialog",
    function(a, b) {
        return {
            restrict: "EA",
            terminal: !0,
            link: function(c, d, e) {
                var f, g = angular.extend({}, c.$eval(e.uiOptions || e.bsOptions || e.options)),
                    h = e.modal || e.show;
                g = angular.extend(g, {
                    template: d.html(),
                    resolve: {
                        $scope: function() {
                            return c
                        }
                    }
                });
                var i = b.dialog(g);
                d.remove(), f = e.close ? function() {
                    a(e.close)(c)
                } : function() {
                    angular.isFunction(a(h).assign) && a(h).assign(c, !1)
                }, c.$watch(h, function(a) {
                    a ? i.open().then(function() {
                        f()
                    }) : i.isOpen() && i.close()
                })
            }
        }
    }
]), angular.module("ui.bootstrap.pagination", []).constant("paginationConfig", {
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", ["paginationConfig",
    function(a) {
        return {
            restrict: "EA",
            scope: {
                numPages: "=",
                currentPage: "=",
                maxSize: "=",
                onSelectPage: "&"
            },
            templateUrl: "template/pagination/pagination.html",
            replace: !0,
            link: function(b, c, d) {
                function e(a, b, c, d) {
                    return {
                        number: a,
                        text: b,
                        active: c,
                        disabled: d
                    }
                }
                var f = angular.isDefined(d.boundaryLinks) ? b.$eval(d.boundaryLinks) : a.boundaryLinks,
                    g = angular.isDefined(d.directionLinks) ? b.$eval(d.directionLinks) : a.directionLinks,
                    h = angular.isDefined(d.firstText) ? d.firstText : a.firstText,
                    i = angular.isDefined(d.previousText) ? d.previousText : a.previousText,
                    j = angular.isDefined(d.nextText) ? d.nextText : a.nextText,
                    k = angular.isDefined(d.lastText) ? d.lastText : a.lastText,
                    l = angular.isDefined(d.rotate) ? b.$eval(d.rotate) : a.rotate;
                b.$watch("numPages + currentPage + maxSize", function() {
                    b.pages = [];
                    var a = 1,
                        c = b.numPages,
                        d = angular.isDefined(b.maxSize) && b.maxSize < b.numPages;
                    d && (l ? (a = Math.max(b.currentPage - Math.floor(b.maxSize / 2), 1), c = a + b.maxSize - 1, c > b.numPages && (c = b.numPages, a = c - b.maxSize + 1)) : (a = (Math.ceil(b.currentPage / b.maxSize) - 1) * b.maxSize + 1, c = Math.min(a + b.maxSize - 1, b.numPages)));
                    for (var m = a; c >= m; m++) {
                        var n = e(m, m, b.isActive(m), !1);
                        b.pages.push(n)
                    }
                    if (d && !l) {
                        if (a > 1) {
                            var o = e(a - 1, "...", !1, !1);
                            b.pages.unshift(o)
                        }
                        if (c < b.numPages) {
                            var p = e(c + 1, "...", !1, !1);
                            b.pages.push(p)
                        }
                    }
                    if (g) {
                        var q = e(b.currentPage - 1, i, !1, b.noPrevious());
                        b.pages.unshift(q);
                        var r = e(b.currentPage + 1, j, !1, b.noNext());
                        b.pages.push(r)
                    }
                    if (f) {
                        var s = e(1, h, !1, b.noPrevious());
                        b.pages.unshift(s);
                        var t = e(b.numPages, k, !1, b.noNext());
                        b.pages.push(t)
                    }
                    b.currentPage > b.numPages && b.selectPage(b.numPages)
                }), b.noPrevious = function() {
                    return 1 === b.currentPage
                }, b.noNext = function() {
                    return b.currentPage === b.numPages
                }, b.isActive = function(a) {
                    return b.currentPage === a
                }, b.selectPage = function(a) {
                    !b.isActive(a) && a > 0 && a <= b.numPages && (b.currentPage = a, b.onSelectPage({
                        page: a
                    }))
                }
            }
        }
    }
]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window",
    function(a, b) {
        function c(a, c) {
            return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
        }

        function d(a) {
            return "static" === (c(a, "position") || "static")
        }
        var e = function(b) {
            for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
            return e || c
        };
        return {
            position: function(b) {
                var c = this.offset(b),
                    d = {
                        top: 0,
                        left: 0
                    }, f = e(b[0]);
                return f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop, d.left += f.clientLeft), {
                    width: b.prop("offsetWidth"),
                    height: b.prop("offsetHeight"),
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offset: function(c) {
                var d = c[0].getBoundingClientRect();
                return {
                    width: c.prop("offsetWidth"),
                    height: c.prop("offsetHeight"),
                    top: d.top + (b.pageYOffset || a[0].body.scrollTop),
                    left: d.left + (b.pageXOffset || a[0].body.scrollLeft)
                }
            }
        }
    }
]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position"]).provider("$tooltip", function() {
    function a(a) {
        var b = /[A-Z]/g,
            c = "-";
        return a.replace(b, function(a, b) {
            return (b ? c : "") + a.toLowerCase()
        })
    }
    var b = {
        placement: "top",
        animation: !0,
        popupDelay: 0
    }, c = {
            mouseenter: "mouseleave",
            click: "click",
            focus: "blur"
        }, d = {};
    this.options = function(a) {
        angular.extend(d, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$parse", "$document", "$position",
        function(e, f, g, h, i, j) {
            return function(e, k, l) {
                function m(a) {
                    var b, d;
                    return b = a || n.trigger || l, d = angular.isDefined(n.trigger) ? c[n.trigger] || b : c[b] || b, {
                        show: b,
                        hide: d
                    }
                }
                var n = angular.extend({}, b, d),
                    o = a(e),
                    p = m(void 0),
                    q = "<" + o + "-popup " + 'title="{{tt_title}}" ' + 'content="{{tt_content}}" ' + 'placement="{{tt_placement}}" ' + 'animation="tt_animation()" ' + 'is-open="tt_isOpen"' + ">" + "</" + o + "-popup>";
                return {
                    restrict: "EA",
                    scope: !0,
                    link: function(a, b, c) {
                        function d() {
                            a.tt_isOpen ? o() : l()
                        }

                        function l() {
                            a.tt_popupDelay ? u = g(r, a.tt_popupDelay) : a.$apply(r)
                        }

                        function o() {
                            a.$apply(function() {
                                s()
                            })
                        }

                        function r() {
                            var c, d, e, f;
                            if (a.tt_content) {
                                switch (t && g.cancel(t), w.css({
                                    top: 0,
                                    left: 0,
                                    display: "block"
                                }), n.appendToBody ? (v = v || i.find("body"), v.append(w)) : b.after(w), c = n.appendToBody ? j.offset(b) : j.position(b), d = w.prop("offsetWidth"), e = w.prop("offsetHeight"), a.tt_placement) {
                                    case "right":
                                        f = {
                                            top: c.top + c.height / 2 - e / 2 + "px",
                                            left: c.left + c.width + "px"
                                        };
                                        break;
                                    case "bottom":
                                        f = {
                                            top: c.top + c.height + "px",
                                            left: c.left + c.width / 2 - d / 2 + "px"
                                        };
                                        break;
                                    case "left":
                                        f = {
                                            top: c.top + c.height / 2 - e / 2 + "px",
                                            left: c.left - d + "px"
                                        };
                                        break;
                                    default:
                                        f = {
                                            top: c.top - e + "px",
                                            left: c.left + c.width / 2 - d / 2 + "px"
                                        }
                                }
                                w.css(f), a.tt_isOpen = !0
                            }
                        }

                        function s() {
                            a.tt_isOpen = !1, g.cancel(u), angular.isDefined(a.tt_animation) && a.tt_animation() ? t = g(function() {
                                w.remove()
                            }, 500) : w.remove()
                        }
                        var t, u, v, w = f(q)(a);
                        a.tt_isOpen = !1, c.$observe(e, function(b) {
                            a.tt_content = b
                        }), c.$observe(k + "Title", function(b) {
                            a.tt_title = b
                        }), c.$observe(k + "Placement", function(b) {
                            a.tt_placement = angular.isDefined(b) ? b : n.placement
                        }), c.$observe(k + "Animation", function(b) {
                            a.tt_animation = angular.isDefined(b) ? h(b) : function() {
                                return n.animation
                            }
                        }), c.$observe(k + "PopupDelay", function(b) {
                            var c = parseInt(b, 10);
                            a.tt_popupDelay = isNaN(c) ? n.popupDelay : c
                        }), c.$observe(k + "Trigger", function(a) {
                            b.unbind(p.show), b.unbind(p.hide), p = m(a), p.show === p.hide ? b.bind(p.show, d) : (b.bind(p.show, l), b.bind(p.hide, o))
                        }), n.appendToBody && a.$on("$locationChangeSuccess", function() {
                            a.tt_isOpen && s()
                        }), a.$on("$destroy", function() {
                            a.tt_isOpen && s()
                        })
                    }
                }
            }
        }
    ]
}).directive("tooltipPopup", function() {
    return {
        restrict: "E",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    }
}).directive("tooltip", ["$tooltip",
    function(a) {
        return a("tooltip", "tooltip", "mouseenter")
    }
]).directive("tooltipHtmlUnsafePopup", function() {
    return {
        restrict: "E",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
}).directive("tooltipHtmlUnsafe", ["$tooltip",
    function(a) {
        return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
    }
]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    }
}).directive("popover", ["$compile", "$timeout", "$parse", "$window", "$tooltip",
    function(a, b, c, d, e) {
        return e("popover", "popover", "click")
    }
]), angular.module("ui.bootstrap.progressbar", ["ui.bootstrap.transition"]).constant("progressConfig", {
    animate: !0,
    autoType: !1,
    stackedTypes: ["success", "info", "warning", "danger"]
}).controller("ProgressBarController", ["$scope", "$attrs", "progressConfig",
    function(a, b, c) {
        function d(a) {
            return g[a]
        }
        var e = angular.isDefined(b.animate) ? a.$eval(b.animate) : c.animate,
            f = angular.isDefined(b.autoType) ? a.$eval(b.autoType) : c.autoType,
            g = angular.isDefined(b.stackedTypes) ? a.$eval("[" + b.stackedTypes + "]") : c.stackedTypes;
        this.makeBar = function(a, b, c) {
            var g = angular.isObject(a) ? a.value : a || 0,
                h = angular.isObject(b) ? b.value : b || 0,
                i = angular.isObject(a) && angular.isDefined(a.type) ? a.type : f ? d(c || 0) : null;
            return {
                from: h,
                to: g,
                type: i,
                animate: e
            }
        }, this.addBar = function(b) {
            a.bars.push(b), a.totalPercent += b.to
        }, this.clearBars = function() {
            a.bars = [], a.totalPercent = 0
        }, this.clearBars()
    }
]).directive("progress", function() {
    return {
        restrict: "EA",
        replace: !0,
        controller: "ProgressBarController",
        scope: {
            value: "=",
            onFull: "&",
            onEmpty: "&"
        },
        templateUrl: "template/progressbar/progress.html",
        link: function(a, b, c, d) {
            a.$watch("value", function(a, b) {
                if (d.clearBars(), angular.isArray(a))
                    for (var c = 0, e = a.length; e > c; c++) d.addBar(d.makeBar(a[c], b[c], c));
                else d.addBar(d.makeBar(a, b))
            }, !0), a.$watch("totalPercent", function(b) {
                b >= 100 ? a.onFull() : 0 >= b && a.onEmpty()
            }, !0)
        }
    }
}).directive("progressbar", ["$transition",
    function(a) {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                width: "=",
                old: "=",
                type: "=",
                animate: "="
            },
            templateUrl: "template/progressbar/bar.html",
            link: function(b, c) {
                b.$watch("width", function(d) {
                    b.animate ? (c.css("width", b.old + "%"), a(c, {
                        width: d + "%"
                    })) : c.css("width", d + "%")
                })
            }
        }
    }
]), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5
}).directive("rating", ["ratingConfig", "$parse",
    function(a, b) {
        return {
            restrict: "EA",
            scope: {
                value: "="
            },
            templateUrl: "template/rating/rating.html",
            replace: !0,
            link: function(c, d, e) {
                var f = angular.isDefined(e.max) ? c.$eval(e.max) : a.max;
                c.range = [];
                for (var g = 1; f >= g; g++) c.range.push(g);
                c.rate = function(a) {
                    c.readonly || (c.value = a)
                }, c.enter = function(a) {
                    c.readonly || (c.val = a)
                }, c.reset = function() {
                    c.val = angular.copy(c.value)
                }, c.reset(), c.$watch("value", function(a) {
                    c.val = a
                }), c.readonly = !1, e.readonly && c.$parent.$watch(b(e.readonly), function(a) {
                    c.readonly = !! a
                })
            }
        }
    }
]), angular.module("ui.bootstrap.tabs", []).directive("tabs", function() {
    return function() {
        throw new Error("The `tabs` directive is deprecated, please migrate to `tabset`. Instructions can be found at http://github.com/angular-ui/bootstrap/tree/master/CHANGELOG.md")
    }
}).controller("TabsetController", ["$scope", "$element",
    function(a) {
        var b = this,
            c = b.tabs = a.tabs = [];
        b.select = function(a) {
            angular.forEach(c, function(a) {
                a.active = !1
            }), a.active = !0
        }, b.addTab = function(a) {
            c.push(a), 1 == c.length && b.select(a)
        }, b.removeTab = function(a) {
            var d = c.indexOf(a);
            if (a.active && c.length > 1) {
                var e = d == c.length - 1 ? d - 1 : d + 1;
                b.select(c[e])
            }
            c.splice(d, 1)
        }
    }
]).directive("tabset", function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {},
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html"
    }
}).directive("tab", ["$parse", "$http", "$templateCache", "$compile",
    function(a) {
        return {
            require: "^tabset",
            restrict: "EA",
            replace: !0,
            templateUrl: "template/tabs/tab.html",
            transclude: !0,
            scope: {
                heading: "@",
                onSelect: "&select"
            },
            controller: function() {},
            compile: function(b, c, d) {
                return function(b, c, e, f) {
                    var g, h;
                    b.active = !1, e.active ? (g = a(e.active), h = g.assign, b.$parent.$watch(g, function(a) {
                        a && b.disabled ? h(b.$parent, !1) : b.active = !! a
                    })) : h = g = angular.noop, b.$watch("active", function(a) {
                        h(b.$parent, a), a && (f.select(b), b.onSelect())
                    }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
                        b.disabled = !! a
                    }), b.select = function() {
                        b.disabled || (b.active = !0)
                    }, f.addTab(b), b.$on("$destroy", function() {
                        f.removeTab(b)
                    }), b.active && h(b.$parent, !0), d(b.$parent, function(a) {
                        var c, d = [];
                        angular.forEach(a, function(a) {
                            a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" == a.tagName.toLowerCase() || "data-tab-heading" == a.tagName.toLowerCase()) ? c = a : d.push(a)
                        }), c && (b.headingElement = angular.element(c)), b.contentElement = angular.element(d)
                    })
                }
            }
        }
    }
]).directive("tabHeadingTransclude", [
    function() {
        return {
            restrict: "A",
            require: "^tab",
            link: function(a, b) {
                a.$watch("headingElement", function(a) {
                    a && (b.html(""), b.append(a))
                })
            }
        }
    }
]).directive("tabContentTransclude", ["$parse",
    function(a) {
        return {
            restrict: "A",
            require: "^tabset",
            link: function(b, c, d) {
                b.$watch(a(d.tabContentTransclude), function(a) {
                    c.html(""), a && c.append(a.contentElement)
                })
            }
        }
    }
]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position"]).factory("typeaheadParser", ["$parse",
    function(a) {
        var b = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
        return {
            parse: function(c) {
                var d = c.match(b);
                if (!d) throw new Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '" + c + "'.");
                return {
                    itemName: d[3],
                    source: a(d[4]),
                    viewMapper: a(d[2] || d[1]),
                    modelMapper: a(d[1])
                }
            }
        }
    }
]).directive("typeahead", ["$compile", "$parse", "$q", "$document", "$position", "typeaheadParser",
    function(a, b, c, d, e, f) {
        var g = [9, 13, 27, 38, 40];
        return {
            require: "ngModel",
            link: function(h, i, j, k) {
                var l, m = h.$eval(j.typeaheadMinLength) || 1,
                    n = f.parse(j.typeahead),
                    o = h.$eval(j.typeaheadEditable) !== !1,
                    p = b(j.typeaheadLoading).assign || angular.noop,
                    q = angular.element("<typeahead-popup matches='matches' active='activeIdx' select='select(activeIdx)' query='query' position='position'></typeahead-popup>"),
                    r = h.$new();
                h.$on("$destroy", function() {
                    r.$destroy()
                });
                var s = function() {
                    r.matches = [], r.activeIdx = -1
                }, t = function(a) {
                        var b = {
                            $viewValue: a
                        };
                        p(h, !0), c.when(n.source(r, b)).then(function(c) {
                            if (a === k.$viewValue) {
                                if (c.length > 0) {
                                    r.activeIdx = 0, r.matches.length = 0;
                                    for (var d = 0; d < c.length; d++) b[n.itemName] = c[d], r.matches.push({
                                        label: n.viewMapper(r, b),
                                        model: c[d]
                                    });
                                    r.query = a, r.position = e.position(i), r.position.top = r.position.top + i.prop("offsetHeight")
                                } else s();
                                p(h, !1)
                            }
                        }, function() {
                            s(), p(h, !1)
                        })
                    };
                s(), r.query = void 0, k.$parsers.push(function(a) {
                    return s(), l ? a : (a && a.length >= m && t(a), o ? a : void 0)
                }), k.$render = function() {
                    var a = {};
                    a[n.itemName] = l || k.$viewValue, i.val(n.viewMapper(r, a) || k.$viewValue), l = void 0
                }, r.select = function(a) {
                    var b = {};
                    b[n.itemName] = l = r.matches[a].model, k.$setViewValue(n.modelMapper(r, b)), k.$render()
                }, i.bind("keydown", function(a) {
                    0 !== r.matches.length && -1 !== g.indexOf(a.which) && (a.preventDefault(), 40 === a.which ? (r.activeIdx = (r.activeIdx + 1) % r.matches.length, r.$digest()) : 38 === a.which ? (r.activeIdx = (r.activeIdx ? r.activeIdx : r.matches.length) - 1, r.$digest()) : 13 === a.which || 9 === a.which ? r.$apply(function() {
                        r.select(r.activeIdx)
                    }) : 27 === a.which && (a.stopPropagation(), s(), r.$digest()))
                }), d.bind("click", function() {
                    s(), r.$digest()
                }), i.after(a(q)(r))
            }
        }
    }
]).directive("typeaheadPopup", function() {
    return {
        restrict: "E",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead.html",
        link: function(a) {
            a.isOpen = function() {
                return a.matches.length > 0
            }, a.isActive = function(b) {
                return a.active == b
            }, a.selectActive = function(b) {
                a.active = b
            }, a.selectMatch = function(b) {
                a.select({
                    activeIdx: b
                })
            }
        }
    }
}).filter("typeaheadHighlight", function() {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    return function(b, c) {
        return c ? b.replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : c
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache",
    function(a) {
        a.put("template/accordion/accordion-group.html", '<div class="accordion-group">\n  <div class="accordion-heading" ><a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a></div>\n  <div class="accordion-body" collapse="!isOpen">\n    <div class="accordion-inner" ng-transclude></div>  </div>\n</div>')
    }
]), angular.module("template/accordion/accordion.html", []).run(["$templateCache",
    function(a) {
        a.put("template/accordion/accordion.html", '<div class="accordion" ng-transclude></div>')
    }
]), angular.module("template/alert/alert.html", []).run(["$templateCache",
    function(a) {
        a.put("template/alert/alert.html", "<div class='alert' ng-class='type && \"alert-\" + type'>\n    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\n    <div ng-transclude></div>\n</div>\n")
    }
]), angular.module("template/carousel/carousel.html", []).run(["$templateCache",
    function(a) {
        a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a ng-click="prev()" class="carousel-control left" ng-show="slides().length > 1">&lsaquo;</a>\n    <a ng-click="next()" class="carousel-control right" ng-show="slides().length > 1">&rsaquo;</a>\n</div>\n')
    }
]), angular.module("template/carousel/slide.html", []).run(["$templateCache",
    function(a) {
        a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item\" ng-transclude></div>\n")
    }
]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache",
    function(a) {
        a.put("template/datepicker/datepicker.html", '<table class="well well-large">\n  <thead>\n    <tr class="text-center">\n      <th><button class="btn pull-left" ng-click="move(-1)"><i class="icon-chevron-left"></i></button></th>\n      <th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button class="btn btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th>\n      <th><button class="btn pull-right" ng-click="move(1)"><i class="icon-chevron-right"></i></button></th>\n    </tr>\n    <tr class="text-center" ng-show="labels.length > 0">\n      <th ng-show="showWeekNumbers">#</th>\n      <th ng-repeat="label in labels">{{label}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows">\n      <td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td>\n      <td ng-repeat="dt in row" class="text-center">\n        <button style="width:100%;" class="btn" ng-class="{\'btn-info\': dt.isSelected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{muted: ! dt.isCurrent}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }
]), angular.module("template/dialog/message.html", []).run(["$templateCache",
    function(a) {
        a.put("template/dialog/message.html", '<div class="modal-header">\n	<h3>{{ title }}</h3>\n</div>\n<div class="modal-body">\n	<p>{{ message }}</p>\n</div>\n<div class="modal-footer">\n	<button ng-repeat="btn in buttons" ng-click="close(btn.result)" class="btn" ng-class="btn.cssClass">{{ btn.label }}</button>\n</div>\n')
    }
]), angular.module("template/pagination/pagination.html", []).run(["$templateCache",
    function(a) {
        a.put("template/pagination/pagination.html", '<div class="pagination"><ul>\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  </ul>\n</div>\n')
    }
]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html-unsafe="content"></div>\n</div>\n')
    }
]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
    }
]), angular.module("template/popover/popover.html", []).run(["$templateCache",
    function(a) {
        a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
    }
]), angular.module("template/progressbar/bar.html", []).run(["$templateCache",
    function(a) {
        a.put("template/progressbar/bar.html", '<div class="bar" ng-class=\'type && "bar-" + type\'></div>')
    }
]), angular.module("template/progressbar/progress.html", []).run(["$templateCache",
    function(a) {
        a.put("template/progressbar/progress.html", '<div class="progress"><progressbar ng-repeat="bar in bars" width="bar.to" old="bar.from" animate="bar.animate" type="bar.type"></progressbar></div>')
    }
]), angular.module("template/rating/rating.html", []).run(["$templateCache",
    function(a) {
        a.put("template/rating/rating.html", '<span ng-mouseleave="reset()">\n	<i ng-repeat="number in range" ng-mouseenter="enter(number)" ng-click="rate(number)" ng-class="{\'icon-star\': number <= val, \'icon-star-empty\': number > val}"></i>\n</span>\n')
    }
]), angular.module("template/tabs/tab.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
    }
]), angular.module("template/tabs/tabset.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tabs/tabset.html", '\n<div class="tabbable">\n  <ul class="nav nav-tabs" ng-transclude>\n  </ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab" tt="tab">\n    </div>\n  </div>\n</div>\n')
    }
]), angular.module("template/typeahead/typeahead.html", []).run(["$templateCache",
    function(a) {
        a.put("template/typeahead/typeahead.html", '<ul class="typeahead dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)">\n        <a tabindex="-1" ng-click="selectMatch($index)" ng-bind-html-unsafe="match.label | typeaheadHighlight:query"></a>\n    </li>\n</ul>')
    }
]);
/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @version 0.6.0
 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
*/
function FastClick(a) {
    var c, b = this;
    this.trackingClick = !1;
    this.trackingClickStart = 0;
    this.targetElement = null;
    this.lastTouchIdentifier = this.touchStartY = this.touchStartX = 0;
    this.layer = a;
    if (!a || !a.nodeType) throw new TypeError("Layer must be a document node");
    this.onClick = function() {
        return FastClick.prototype.onClick.apply(b, arguments)
    };
    this.onMouse = function() {
        return FastClick.prototype.onMouse.apply(b, arguments)
    };
    this.onTouchStart = function() {
        return FastClick.prototype.onTouchStart.apply(b, arguments)
    };
    this.onTouchEnd = function() {
        return FastClick.prototype.onTouchEnd.apply(b, arguments)
    };
    this.onTouchCancel = function() {
        return FastClick.prototype.onTouchCancel.apply(b, arguments)
    };
    "undefined" !== typeof window.ontouchstart && (this.deviceIsAndroid && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, e) {
        var f = Node.prototype.removeEventListener;
        "click" === b ? f.call(a, b, c.hijacked || c, e) : f.call(a, b, c, e)
    }, a.addEventListener = function(b, c, e) {
        var f = Node.prototype.addEventListener;
        "click" === b ? f.call(a, b, c.hijacked || (c.hijacked = function(a) {
            a.propagationStopped || c(a)
        }), e) : f.call(a, b, c, e)
    }), "function" === typeof a.onclick && (c = a.onclick, a.addEventListener("click", function(a) {
        c(a)
    }, !1), a.onclick = null))
}
FastClick.prototype.deviceIsAndroid = 0 < navigator.userAgent.indexOf("Android");
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
FastClick.prototype.needsClick = function(a) {
    switch (a.nodeName.toLowerCase()) {
        case "button":
        case "input":
            return this.deviceIsIOS && "file" === a.type ? !0 : a.disabled;
        case "label":
        case "video":
            return !0;
        default:
            return /\bneedsclick\b/.test(a.className)
    }
};
FastClick.prototype.needsFocus = function(a) {
    switch (a.nodeName.toLowerCase()) {
        case "textarea":
        case "select":
            return !0;
        case "input":
            switch (a.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !a.disabled;
        default:
            return /\bneedsfocus\b/.test(a.className)
    }
};
FastClick.prototype.sendClick = function(a, c) {
    var b, d;
    document.activeElement && document.activeElement !== a && document.activeElement.blur();
    d = c.changedTouches[0];
    b = document.createEvent("MouseEvents");
    b.initMouseEvent("click", !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null);
    b.forwardedTouchEvent = !0;
    a.dispatchEvent(b)
};
FastClick.prototype.focus = function(a) {
    var c;
    this.deviceIsIOS && a.setSelectionRange ? (c = a.value.length, a.setSelectionRange(c, c)) : a.focus()
};
FastClick.prototype.updateScrollParent = function(a) {
    var c, b;
    c = a.fastClickScrollParent;
    if (!c || !c.contains(a)) {
        b = a;
        do {
            if (b.scrollHeight > b.offsetHeight) {
                c = b;
                a.fastClickScrollParent = b;
                break
            }
            b = b.parentElement
        } while (b)
    }
    c && (c.fastClickLastScrollTop = c.scrollTop)
};
FastClick.prototype.getTargetElementFromEventTarget = function(a) {
    return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
};
FastClick.prototype.onTouchStart = function(a) {
    var c, b, d;
    c = this.getTargetElementFromEventTarget(a.target);
    b = a.targetTouches[0];
    if (this.deviceIsIOS) {
        d = window.getSelection();
        if (d.rangeCount && !d.isCollapsed) return !0;
        if (!this.deviceIsIOS4) {
            if (b.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
            this.lastTouchIdentifier = b.identifier;
            this.updateScrollParent(c)
        }
    }
    this.trackingClick = !0;
    this.trackingClickStart = a.timeStamp;
    this.targetElement = c;
    this.touchStartX = b.pageX;
    this.touchStartY = b.pageY;
    200 > a.timeStamp - this.lastClickTime && a.preventDefault();
    return !0
};
FastClick.prototype.touchHasMoved = function(a) {
    a = a.changedTouches[0];
    return 10 < Math.abs(a.pageX - this.touchStartX) || 10 < Math.abs(a.pageY - this.touchStartY) ? !0 : !1
};
FastClick.prototype.findControl = function(a) {
    return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
};
FastClick.prototype.onTouchEnd = function(a) {
    var c, b, d = this.targetElement;
    this.touchHasMoved(a) && (this.trackingClick = !1, this.targetElement = null);
    if (!this.trackingClick) return !0;
    if (200 > a.timeStamp - this.lastClickTime) return this.cancelNextClick = !0;
    this.lastClickTime = a.timeStamp;
    c = this.trackingClickStart;
    this.trackingClick = !1;
    this.trackingClickStart = 0;
    this.deviceIsIOSWithBadTarget && (b = a.changedTouches[0], d = document.elementFromPoint(b.pageX - window.pageXOffset, b.pageY - window.pageYOffset));
    b = d.tagName.toLowerCase();
    if ("label" === b) {
        if (c = this.findControl(d)) {
            this.focus(d);
            if (this.deviceIsAndroid) return !1;
            d = c
        }
    } else if (this.needsFocus(d)) {
        if (100 < a.timeStamp - c || this.deviceIsIOS && window.top !== window && "input" === b) return this.targetElement = null, !1;
        this.focus(d);
        if (!this.deviceIsIOS4 || "select" !== b) this.targetElement = null, a.preventDefault();
        return !1
    }
    if (this.deviceIsIOS && !this.deviceIsIOS4 && (c = d.fastClickScrollParent) && c.fastClickLastScrollTop !== c.scrollTop) return !0;
    if (!this.needsClick(d)) {
        a.preventDefault();
        var g = this;
        setTimeout(function() {
            g.sendClick(d, a)
        }, 0)
    }
    return !1
};
FastClick.prototype.onTouchCancel = function() {
    this.trackingClick = !1;
    this.targetElement = null
};
FastClick.prototype.onMouse = function(a) {
    return !this.targetElement || a.forwardedTouchEvent || !a.cancelable ? !0 : !this.needsClick(this.targetElement) || this.cancelNextClick ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0
};
FastClick.prototype.onClick = function(a) {
    if (this.trackingClick) return this.targetElement = null, this.trackingClick = !1, !0;
    if ("submit" === a.target.type && 0 === a.detail) return !0;
    a = this.onMouse(a);
    a || (this.targetElement = null);
    return a
};
FastClick.prototype.destroy = function() {
    var a = this.layer;
    this.deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0));
    a.removeEventListener("click", this.onClick, !0);
    a.removeEventListener("touchstart", this.onTouchStart, !1);
    a.removeEventListener("touchend", this.onTouchEnd, !1);
    a.removeEventListener("touchcancel", this.onTouchCancel, !1)
};
FastClick.attach = function(a) {
    return new FastClick(a)
};
"undefined" !== typeof define && define.amd && define(function() {
    return FastClick
});
"undefined" !== typeof module && module.exports && (module.exports = FastClick.attach, module.exports.FastClick = FastClick);
// Copyright 2012
(function() {
    function i(a) {
        throw a;
    }
    var k = void 0,
        l = !0,
        n = null,
        p = !1;

    function aa() {
        return function() {}
    }

    function q(a) {
        return function() {
            return this[a]
        }
    }
    var s, ba = ba || {}, v = this;

    function ca(a) {
        da(a)
    }

    function da(a, b, c) {
        a = a.split(".");
        c = c || v;
        !(a[0] in c) && c.execScript && c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)!a.length && ea(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
    }

    function fa() {
        for (var a = ["window", "event"], b = v, c; c = a.shift();)
            if (ga(b[c])) b = b[c];
            else return n;
        return b
    }

    function ha() {}

    function ia(a) {
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
            else
        if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function ea(a) {
        return a !== k
    }

    function ga(a) {
        return a != n
    }

    function ja(a) {
        return "array" == ia(a)
    }

    function ka(a) {
        var b = ia(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function y(a) {
        return "string" == typeof a
    }

    function la(a) {
        return "number" == typeof a
    }

    function ma(a) {
        return "function" == ia(a)
    }

    function na(a) {
        var b = typeof a;
        return "object" == b && a != n || "function" == b
    }

    function oa(a) {
        return a[pa] || (a[pa] = ++qa)
    }
    var pa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
        qa = 0;

    function ra(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function sa(a, b, c) {
        a || i(Error());
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
    }

    function ta(a, b, c) {
        ta = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ra : sa;
        return ta.apply(n, arguments)
    }

    function z(a, b) {
        da(a, b, k)
    }

    function A(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.P = b.prototype;
        a.prototype = new c
    };

    function C() {
        0 != ua && (this.td = Error().stack, va[oa(this)] = this)
    }
    var ua = 0,
        va = {};
    C.prototype.Lb = p;
    C.prototype.S = function() {
        if (!this.Lb && (this.Lb = l, this.n(), 0 != ua)) {
            var a = oa(this);
            delete va[a]
        }
    };
    C.prototype.n = function() {
        this.Ec && wa.apply(n, this.Ec);
        if (this.$b)
            for (; this.$b.length;) this.$b.shift()()
    };

    function xa(a) {
        a && "function" == typeof a.S && a.S()
    }

    function wa(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            ka(d) ? wa.apply(n, d) : xa(d)
        }
    };
    var ya;

    function za(a, b) {
        this.blob = a;
        this.name = b;
        this.wa = n
    }
    A(za, C);
    var Aa = function() {
        var a = document.createElement("a");
        return navigator.msSaveBlob || "download" in a
    }();

    function Ba(a) {
        var b = document.createEvent("MouseEvents");
        b.initMouseEvent("click", l, l, window, 0, 0, 0, 0, 0, p, p, p, p, 0, n);
        return a.dispatchEvent(b)
    }
    za.prototype.save = function() {
        var a = document.createElement("a");
        if (!("download" in a)) return p;
        this.wa || (this.wa = window.URL.createObjectURL(this.blob));
        a.href = this.wa;
        a.download = this.name;
        return Ba(a)
    };
    za.prototype.n = function() {
        this.wa && window.URL.revokeObjectURL(this.wa)
    };
    z("w69b.FileSaver.saveAs", function(a, b) {
        var c = navigator.msSaveBlob;
        if (c) c.call(navigator, a, b);
        else {
            var d = new za(a, b);
            d.save();
            window.setTimeout(function() {
                d.S()
            }, 0)
        }
    });
    z("w69b.FileSaver.isSupported", function() {
        return Aa
    });

    function E(a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, E) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    }
    A(E, Error);
    E.prototype.name = "CustomError";

    function Ca(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }

    function Da(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }

    function Ea(a) {
        if (!Fa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ga, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ha, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ia, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ja, "&quot;"));
        return a
    }
    var Ga = /&/g,
        Ha = /</g,
        Ia = />/g,
        Ja = /\"/g,
        Fa = /[&<>\"]/;

    function Ka(a, b) {
        return -1 != a.indexOf(b)
    }

    function La(a) {
        for (var b = 0, c = Da(String(Ma)).split("."), a = Da(String(a)).split("."), d = Math.max(c.length, a.length), e = 0; 0 == b && e < d; e++) {
            var f = c[e] || "",
                g = a[e] || "",
                h = RegExp("(\\d*)(\\D*)", "g"),
                j = RegExp("(\\d*)(\\D*)", "g");
            do {
                var m = h.exec(f) || ["", "", ""],
                    r = j.exec(g) || ["", "", ""];
                if (0 == m[0].length && 0 == r[0].length) break;
                b = Na(0 == m[1].length ? 0 : parseInt(m[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || Na(0 == m[2].length, 0 == r[2].length) || Na(m[2], r[2])
            } while (0 == b)
        }
        return b
    }

    function Na(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var F = Array.prototype,
        Oa = F.indexOf ? function(a, b, c) {
            return F.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = c == n ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (y(a)) return !y(b) || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        }, Pa = F.forEach ? function(a, b, c) {
            F.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = y(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        }, Qa = F.some ? function(a, b, c) {
            return F.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = y(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return l;
            return p
        };

    function Ra(a, b) {
        return 0 <= Oa(a, b)
    }

    function Sa(a) {
        return 0 == a.length
    }

    function Ta(a, b) {
        var c = Oa(a, b);
        0 <= c && Va(a, c)
    }

    function Va(a, b) {
        F.splice.call(a, b, 1)
    }

    function Wa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Xa(a, b, c) {
        return 2 >= arguments.length ? F.slice.call(a, b) : F.slice.call(a, b, c)
    }

    function Ya(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    var Za, $a, ab, bb, cb;

    function db() {
        return v.navigator ? v.navigator.userAgent : n
    }

    function eb() {
        return v.navigator
    }(function() {
        bb = ab = $a = Za = p;
        var a;
        if (a = db()) {
            var b = eb();
            Za = 0 == a.indexOf("Opera");
            $a = !Za && -1 != a.indexOf("MSIE");
            ab = !Za && -1 != a.indexOf("WebKit");
            bb = !Za && !ab && "Gecko" == b.product
        }
    })();
    var fb = Za,
        G = $a,
        gb = bb,
        hb = ab,
        ib = function() {
            var a = eb();
            return a && a.platform || ""
        }();
    (function() {
        cb = Ka(ib, "Mac")
    })();
    var jb = cb;

    function kb() {
        var a = v.document;
        return a ? a.documentMode : k
    }
    var Ma = function() {
        var a = "",
            b;
        fb && v.opera ? (a = v.opera.version, a = "function" == typeof a ? a() : a) : (gb ? b = /rv\:([^\);]+)(\)|;)/ : G ? b = /MSIE\s+([^\);]+)(\)|;)/ : hb && (b = /WebKit\/(\S+)/), b && (a = (a = b.exec(db())) ? a[1] : ""));
        return G && (b = kb(), b > parseFloat(a)) ? String(b) : a
    }(),
        lb = {};

    function H(a) {
        return lb[a] || (lb[a] = 0 <= La(a))
    }

    function mb() {
        return G && 9 <= nb
    }
    var nb = function() {
        var a = v.document;
        return !a || !G ? k : kb() || ("CSS1Compat" == a.compatMode ? parseInt(Ma, 10) : 5)
    }();
    var ob = !G || mb(),
        pb = G && !H("9");
    !hb || H("528");
    gb && H("1.9b") || G && H("8") || fb && H("9.5") || hb && H("528");
    gb && !H("8") || G && H("9");

    function qb(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    }
    s = qb.prototype;
    s.n = aa();
    s.S = aa();
    s.da = p;
    s.defaultPrevented = p;
    s.Sa = l;
    s.preventDefault = function() {
        this.defaultPrevented = l;
        this.Sa = p
    };

    function rb(a) {
        rb[" "](a);
        return a
    }
    rb[" "] = ha;

    function sb(a) {
        try {
            return rb(a.nodeName), l
        } catch (b) {}
        return p
    };

    function tb(a, b) {
        a && this.Oa(a, b)
    }
    A(tb, qb);
    s = tb.prototype;
    s.target = n;
    s.relatedTarget = n;
    s.offsetX = 0;
    s.offsetY = 0;
    s.clientX = 0;
    s.clientY = 0;
    s.screenX = 0;
    s.screenY = 0;
    s.button = 0;
    s.keyCode = 0;
    s.charCode = 0;
    s.ctrlKey = p;
    s.altKey = p;
    s.shiftKey = p;
    s.metaKey = p;
    s.Xc = p;
    s.Nb = n;
    s.Oa = function(a, b) {
        var c = this.type = a.type;
        qb.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        d ? gb && (sb(d) || (d = n)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = hb || a.offsetX !== k ? a.offsetX : a.layerX;
        this.offsetY = hb || a.offsetY !== k ? a.offsetY : a.layerY;
        this.clientX = a.clientX !== k ? a.clientX : a.pageX;
        this.clientY = a.clientY !== k ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.Xc = jb ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.Nb = a;
        a.defaultPrevented && this.preventDefault();
        delete this.da
    };
    s.preventDefault = function() {
        tb.P.preventDefault.call(this);
        var a = this.Nb;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = p, pb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    s.n = aa();

    function ub() {}
    var vb = 0;
    s = ub.prototype;
    s.key = 0;
    s.ea = p;
    s.Fa = p;
    s.Oa = function(a, b, c, d, e, f) {
        ma(a) ? this.Ub = l : a && a.handleEvent && ma(a.handleEvent) ? this.Ub = p : i(Error("Invalid listener argument"));
        this.ua = a;
        this.ec = b;
        this.src = c;
        this.type = d;
        this.capture = !! e;
        this.ob = f;
        this.Fa = p;
        this.key = ++vb;
        this.ea = p
    };
    s.handleEvent = function(a) {
        return this.Ub ? this.ua.call(this.ob || this.src, a) : this.ua.handleEvent.call(this.ua, a)
    };

    function wb(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function xb(a, b) {
        b in a && delete a[b]
    }

    function yb(a, b) {
        return b in a ? a[b] : k
    }

    function zb(a) {
        var b = {}, c;
        for (c in a) b[c] = a[c];
        return b
    }
    var Ab = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Bb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ab.length; f++) c = Ab[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Cb = {}, I = {}, Db = {}, Eb = {};

    function Fb(a, b, c, d, e) {
        if (ja(b)) {
            for (var f = 0; f < b.length; f++) Fb(a, b[f], c, d, e);
            return n
        }
        return Gb(a, b, c, p, d, e)
    }

    function Gb(a, b, c, d, e, f) {
        b || i(Error("Invalid event type"));
        var e = !! e,
            g = I;
        b in g || (g[b] = {
            C: 0,
            q: 0
        });
        g = g[b];
        e in g || (g[e] = {
            C: 0,
            q: 0
        }, g.C++);
        var g = g[e],
            h = oa(a),
            j;
        g.q++;
        if (g[h]) {
            j = g[h];
            for (var m = 0; m < j.length; m++)
                if (g = j[m], g.ua == c && g.ob == f) {
                    if (g.ea) break;
                    d || (j[m].Fa = p);
                    return j[m].key
                }
        } else j = g[h] = [], g.C++;
        m = Hb();
        m.src = a;
        g = new ub;
        g.Oa(c, m, a, b, e, f);
        g.Fa = d;
        c = g.key;
        m.key = c;
        j.push(g);
        Cb[c] = g;
        Db[h] || (Db[h] = []);
        Db[h].push(g);
        a.addEventListener ? (a == v || !a.Ib) && a.addEventListener(b, m, e) : a.attachEvent(Ib(b), m);
        return c
    }

    function Hb() {
        var a = Jb,
            b = ob ? function(c) {
                return a.call(b.src, b.key, c)
            } : function(c) {
                c = a.call(b.src, b.key, c);
                if (!c) return c
            };
        return b
    }

    function Kb(a, b, c, d, e) {
        if (ja(b))
            for (var f = 0; f < b.length; f++) Kb(a, b[f], c, d, e);
        else Gb(a, b, c, l, d, e)
    }

    function Lb(a, b, c, d, e) {
        if (ja(b))
            for (var f = 0; f < b.length; f++) Lb(a, b[f], c, d, e);
        else if (d = !! d, a = Mb(a, b, d))
            for (f = 0; f < a.length; f++)
                if (a[f].ua == c && a[f].capture == d && a[f].ob == e) {
                    Nb(a[f].key);
                    break
                }
    }

    function Nb(a) {
        if (!Cb[a]) return p;
        var b = Cb[a];
        if (b.ea) return p;
        var c = b.src,
            d = b.type,
            e = b.ec,
            f = b.capture;
        c.removeEventListener ? (c == v || !c.Ib) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(Ib(d), e);
        c = oa(c);
        Db[c] && (e = Db[c], Ta(e, b), 0 == e.length && delete Db[c]);
        b.ea = l;
        if (b = I[d][f][c]) b.Yb = l, Ob(d, f, c, b);
        delete Cb[a];
        return l
    }

    function Ob(a, b, c, d) {
        if (!d.Ra && d.Yb) {
            for (var e = 0, f = 0; e < d.length; e++) d[e].ea ? d[e].ec.src = n : (e != f && (d[f] = d[e]), f++);
            d.length = f;
            d.Yb = p;
            0 == f && (delete I[a][b][c], I[a][b].C--, 0 == I[a][b].C && (delete I[a][b], I[a].C--), 0 == I[a].C && delete I[a])
        }
    }

    function Pb(a) {
        var b = 0;
        if (a != n) {
            if (a = oa(a), Db[a])
                for (var a = Db[a], c = a.length - 1; 0 <= c; c--) Nb(a[c].key), b++
        } else wb(Cb, function(a, c) {
            Nb(c);
            b++
        })
    }

    function Mb(a, b, c) {
        var d = I;
        return b in d && (d = d[b], c in d && (d = d[c], a = oa(a), d[a])) ? d[a] : n
    }

    function Ib(a) {
        return a in Eb ? Eb[a] : Eb[a] = "on" + a
    }

    function Qb(a, b, c, d, e) {
        var f = 1,
            b = oa(b);
        if (a[b]) {
            a.q--;
            a = a[b];
            a.Ra ? a.Ra++ : a.Ra = 1;
            try {
                for (var g = a.length, h = 0; h < g; h++) {
                    var j = a[h];
                    j && !j.ea && (f &= Rb(j, e) !== p)
                }
            } finally {
                a.Ra--, Ob(c, d, b, a)
            }
        }
        return Boolean(f)
    }

    function Rb(a, b) {
        a.Fa && Nb(a.key);
        return a.handleEvent(b)
    }

    function Sb(a, b) {
        var c = b.type || b,
            d = I;
        if (!(c in d)) return l;
        if (y(b)) b = new qb(b, a);
        else if (b instanceof qb) b.target = b.target || a;
        else {
            var e = b,
                b = new qb(c, a);
            Bb(b, e)
        }
        var e = 1,
            f, d = d[c],
            c = l in d,
            g;
        if (c) {
            f = [];
            for (g = a; g; g = Tb(g)) f.push(g);
            g = d[l];
            g.q = g.C;
            for (var h = f.length - 1; !b.da && 0 <= h && g.q; h--) b.currentTarget = f[h], e &= Qb(g, f[h], b.type, l, b) && b.Sa != p
        }
        if (p in d)
            if (g = d[p], g.q = g.C, c)
                for (h = 0; !b.da && h < f.length && g.q; h++) b.currentTarget = f[h], e &= Qb(g, f[h], b.type, p, b) && b.Sa != p;
            else
                for (d = a; !b.da && d && g.q; d = Tb(d)) b.currentTarget = d, e &= Qb(g, d, b.type, p, b) && b.Sa != p;
        return Boolean(e)
    }

    function Jb(a, b) {
        if (!Cb[a]) return l;
        var c = Cb[a],
            d = c.type,
            e = I;
        if (!(d in e)) return l;
        var e = e[d],
            f, g;
        if (!ob) {
            f = b || fa();
            var h = l in e,
                j = p in e;
            if (h) {
                if (Ub(f)) return l;
                Vb(f)
            }
            var m = new tb;
            m.Oa(f, this);
            f = l;
            try {
                if (h) {
                    for (var r = [], t = m.currentTarget; t; t = t.parentNode) r.push(t);
                    g = e[l];
                    g.q = g.C;
                    for (var u = r.length - 1; !m.da && 0 <= u && g.q; u--) m.currentTarget = r[u], f &= Qb(g, r[u], d, l, m);
                    if (j) {
                        g = e[p];
                        g.q = g.C;
                        for (u = 0; !m.da && u < r.length && g.q; u++) m.currentTarget = r[u], f &= Qb(g, r[u], d, p, m)
                    }
                } else f = Rb(c, m)
            } finally {
                r && (r.length = 0)
            }
            return f
        }
        d = new tb(b, this);
        return f = Rb(c, d)
    }

    function Vb(a) {
        var b = p;
        if (0 == a.keyCode) try {
            a.keyCode = -1;
            return
        } catch (c) {
            b = l
        }
        if (b || a.returnValue == k) a.returnValue = l
    }

    function Ub(a) {
        return 0 > a.keyCode || a.returnValue != k
    }
    aa()(function(a) {
        Jb = a(Jb)
    });

    function Wb(a, b) {
        this.width = a;
        this.height = b
    }
    s = Wb.prototype;
    s.m = function() {
        return new Wb(this.width, this.height)
    };
    s.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    s.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    s.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    s.scale = function(a, b) {
        var c = la(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    var Xb = n,
        Yb = n;

    function Zb(a) {
        $b();
        for (var b = Yb, c = [], d = 0; d < a.length;) {
            var e = b[a.charAt(d++)],
                f = d < a.length ? b[a.charAt(d)] : 0;
            ++d;
            var g = d < a.length ? b[a.charAt(d)] : 0;
            ++d;
            var h = d < a.length ? b[a.charAt(d)] : 0;
            ++d;
            (e == n || f == n || g == n || h == n) && i(Error());
            c.push(e << 2 | f >> 4);
            64 != g && (c.push(f << 4 & 240 | g >> 2), 64 != h && c.push(g << 6 & 192 | h))
        }
        return c
    }

    function $b() {
        if (!Xb) {
            Xb = {};
            Yb = {};
            for (var a = 0; 65 > a; a++) Xb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Yb[Xb[a]] = a
        }
    };

    function ac(a, b) {
        var c = document.createElement("canvas"),
            d = new Wb(a.width, a.height);
        b && bc(d, b);
        c.width = d.width;
        c.height = d.height;
        c = c.getContext("2d");
        c.drawImage(a, 0, 0, d.width, d.height);
        return c.getImageData(0, 0, d.width, d.height)
    }

    function bc(a, b) {
        var c = Math.min(b / a.width, b / a.height);
        1 >= c && a.scale(c).round()
    }
    z("w69b.imgtools.getImageData", ac);
    z("w69b.imgtools.getCanvasAsBlob", function(a, b) {
        if (a.toBlob) a.toBlob(b);
        else if (a.toDataURL) {
            var c = a.toDataURL();
            Ca(c, "data:image/png;base64,") || i(Error());
            c = c.substring(22);
            c = new Uint8Array(Zb(c));
            c = new Blob([c], {
                type: "image/png"
            });
            b(c)
        } else i(Error())
    });

    function cc() {
        C.call(this);
        this.bb = document.createElement("canvas");
        this.o = document.createElement("video");
        this.Fb = this.bb.getContext("2d")
    }
    A(cc, C);
    var dc = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    dc && (dc = dc.bind(navigator));
    s = cc.prototype;
    s.bb = n;
    s.Fb = n;
    s.o = n;
    s.Va = n;

    function ec(a) {
        return a.o
    }
    s.start = function(a) {
        Kb(this.o, "canplay", function() {
            this.qc(a)
        }, p, this);
        fc(this)
    };
    s.qc = function(a) {
        0 < this.o.videoWidth && 0 < this.o.videoHeight ? a() : window.setTimeout(this.qc.bind(this, a), 100)
    };
    s.getImageData = function(a) {
        var b = this.bb;
        if (b.width != a.width || b.height != a.height) b.width = a.width, b.height = a.height;
        var c = this.Fb;
        gc(this, b, c);
        return c.getImageData(0, 0, a.width, a.height)
    };

    function gc(a, b, c) {
        a = ec(a);
        b = Math.max(b.height / a.videoHeight, b.width / a.videoWidth);
        c.drawImage(a, 0, 0, a.videoWidth * b, a.videoHeight * b)
    }
    s.Tc = function(a) {
        this.o !== n && (this.o.src = navigator.getUserMedia ? a : window.URL.createObjectURL(a), this.o.play(), this.Va = a)
    };
    s.Sc = function(a) {
        window.console.log("error code:");
        window.console.log(a)
    };

    function fc(a) {
        dc({
            video: l
        }, a.Tc.bind(a), a.Sc.bind(a))
    }
    s.n = function() {
        var a = this.o.src;
        this.o.pause();
        this.o.src = "";
        window.URL && window.URL.revokeObjectURL && window.URL.revokeObjectURL(a);
        this.o = n;
        this.Va && this.Va.stop && this.Va.stop()
    };

    function hc(a, b, c) {
        this.data = c;
        this.width = a;
        this.height = b
    }
    hc.prototype.b = q("width");
    hc.prototype.a = q("height");
    hc.prototype.get = function(a, b) {
        return 0 < this.data[4 * (b * this.width + a)] ? p : l
    };

    function ic(a, b, c) {
        this.data = c || new Uint8Array(4 * a * b);
        this.width = a;
        this.height = b
    }
    ic.prototype.set = function(a, b, c, d, e, f) {
        a = 4 * (b * this.width + a);
        this.data[a] = c;
        this.data[a + 1] = d;
        this.data[a + 2] = e;
        this.data[a + 3] = f || 255
    };

    function jc(a, b, c) {
        a.set(b, 4, c, c, c, 255)
    }
    ic.prototype.get = function(a, b) {
        var c = 4 * (b * this.width + a);
        return [this.data[c], this.data[c + 1], this.data[c + 2], this.data[c + 3]]
    };

    function kc(a) {
        this.ja = {};
        a && this.set(a)
    }
    kc.prototype.m = function() {
        var a = new kc;
        a.ja = zb(this.ja);
        return a
    };
    kc.prototype.set = function(a) {
        wb(a, function(a, c) {
            0 < a.length && "i" == a[0] ? lc(this, c, a.slice(1)) : mc(this, c, a)
        }, this);
        return this
    };

    function nc(a, b, c, d) {
        a.ja[b] = [c, d]
    }

    function lc(a, b, c) {
        nc(a, b, (c.length || 1) + "i", c);
        return a
    }

    function mc(a, b, c) {
        nc(a, b, (c.length || 1) + "f", c)
    }

    function oc(a, b) {
        var c = a.ja[b];
        return c ? c[1] : n
    }
    kc.prototype.apply = function(a) {
        var b = pc(a);
        wb(this.ja, function(c, d) {
            b[c[0]].apply(a, [d].concat(c[1]))
        }, this)
    };

    function qc(a) {
        this.wb = [];
        this.j = a
    }

    function J(a, b, c) {
        a.wb.push([b, c])
    }
    qc.prototype.W = function(a, b, c, d) {
        for (var e = n, f = this.j, g = this.wb.length, b = 0 == g % 2 ? [c, b] : [b, c], c = a, a = 0; a < g; ++a) {
            var h = this.wb[a];
            if (h.length) {
                var j = h[0],
                    h = h[1];
                j != e && (rc(j), sc(j), e = j);
                j.jc("imageIn", c);
                h.apply(j);
                a == g - 1 && d ? tc(f) : (c = b[a % 2], uc(f, c));
                var m = oc(h, "outOffset");
                vc(f, m ? m[0] : 0, m ? m[1] : 0, oc(h, "width"), oc(h, "height"));
                wc(j)
            } else j = b[a % 2], h(c, j, b[(a + 1) % 2]), c = j
        }
    };

    function xc(a, b, c) {
        this.c = a;
        var c = yc(this, c || "attribute vec2 position;\nvoid main(void) {\ngl_Position = vec4(position, 0, 1);\n}", l),
            b = yc(this, b, p),
            d = a.createProgram();
        a.attachShader(d, c);
        a.attachShader(d, b);
        a.linkProgram(d);
        a.getProgramParameter(d, a.LINK_STATUS) || i(Error("Could not link shader program: " + a.getProgramInfoLog(d)));
        this.ba = d
    }
    s = xc.prototype;
    s.ba = n;

    function sc(a) {
        var b = a.c,
            a = b.getAttribLocation(a.ba, "position"),
            c = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, c);
        b.bufferData(b.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), b.STATIC_DRAW);
        b.enableVertexAttribArray(a);
        b.vertexAttribPointer(a, 2, b.FLOAT, p, 0, 0)
    }

    function rc(a) {
        a.c.useProgram(a.ba)
    }

    function wc(a) {
        a = a.c;
        a.drawArrays(a.TRIANGLES, 0, 6)
    }
    s.gd = function(a, b) {
        var c = this.c.getUniformLocation(this.ba, a);
        this.c.uniform1f(c, b)
    };
    s.hd = function(a, b, c) {
        a = this.c.getUniformLocation(this.ba, a);
        this.c.uniform2f(a, b, c)
    };
    s.jc = function(a, b) {
        var c = this.c.getUniformLocation(this.ba, a);
        this.c.uniform1i(c, b)
    };

    function pc(a) {
        return a.Pc
    }
    s.Pc = {
        "1i": xc.prototype.jc,
        "1f": xc.prototype.gd,
        "2f": xc.prototype.hd
    };

    function yc(a, b, c) {
        a = a.c;
        c = a.createShader(c ? a.VERTEX_SHADER : a.FRAGMENT_SHADER);
        a.shaderSource(c, b);
        a.compileShader(c);
        a.getShaderParameter(c, a.COMPILE_STATUS) || i(Error("Could not compile shader: " + a.getShaderInfoLog(c)));
        return c
    };

    function zc() {
        E.call(this)
    }
    A(zc, E);
    zc.prototype.name = "NotSupported";

    function Ac(a) {
        this.Wa = [];
        this.J = a || document.createElement("canvas");
        try {
            this.c = this.J.getContext("webgl") || this.J.getContext("experimental-webgl")
        } catch (b) {}
        this.c || i(new zc);
        Bc();
        this.Ic = this.c.createFramebuffer()
    }
    var Cc = n;
    s = Ac.prototype;
    s.c = n;
    s.ic = function(a, b) {
        this.J.width = a;
        this.J.height = b
    };
    s.b = function() {
        return this.J.width
    };
    s.a = function() {
        return this.J.height
    };

    function vc(a, b, c, d, e) {
        a.c.viewport(b, c, d, e)
    }

    function tc(a) {
        a = a.c;
        a.bindFramebuffer(a.FRAMEBUFFER, n)
    }
    s.getContext = q("c");

    function Dc(a) {
        return a.Wa[0]
    }

    function Ec(a) {
        for (var b = a.b(), c = a.a(), d = 0; 3 > d; ++d) a.Wa[d] = a.createTexture(d, b, c)
    }

    function Fc(a) {
        var b = a.c;
        b.activeTexture(b.TEXTURE0);
        b.bindTexture(b.TEXTURE_2D, a.Wa[0]);
        b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, 1);
        b.bindTexture(b.TEXTURE_2D, n)
    }
    s.createTexture = function(a, b, c) {
        var d = this.c,
            e = d.createTexture();
        d.activeTexture(d.TEXTURE0 + a);
        d.bindTexture(d.TEXTURE_2D, e);
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE);
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE);
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.LINEAR);
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.LINEAR);
        b && c && d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, b, c, 0, d.RGBA, d.UNSIGNED_BYTE, n);
        return e
    };

    function uc(a, b) {
        var c = a.c,
            d = a.Wa[b];
        c.bindFramebuffer(c.FRAMEBUFFER, a.Ic);
        c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, d, 0)
    }

    function Gc() {
        return Cc
    }
    s.getImageData = function() {
        var a = this.c,
            b = this.b(),
            c = this.a(),
            d = new Uint8Array(4 * b * c);
        a.readPixels(0, 0, b, c, a.RGBA, a.UNSIGNED_BYTE, d);
        return new ic(b, c, d)
    };

    function Bc() {
        if (!Cc) {
            var a = document.createElement("canvas"),
                b = a.getContext("webgl") || a.getContext("experimental-webgl");
            a.width = 20;
            a.height = 20;
            a.vd = p;
            var c = new xc(b, "precision mediump float;\nvoid main() {\nvec4 result = vec4(1.0);\nresult.rg = gl_FragCoord.xy / 10.0;\ngl_FragColor = result;\n}");
            rc(c);
            sc(c);
            wc(c);
            c = new Uint8Array(4 * a.width * a.height);
            b.readPixels(0, 0, a.width, a.height, b.RGBA, b.UNSIGNED_BYTE, c);
            a = c[0];
            b = c[1];
            a = Math.round(100 * a / 255) / 10;
            b = Math.round(100 * b / 255) / 10;
            Cc = [a, b]
        }
    };

    function Hc(a) {
        this.j = new Ac(a)
    }
    var Ic = n;
    s = Hc.prototype;
    s.bc = n;
    s.Ua = p;
    s.Pb = p;

    function Jc(a, b) {
        return new xc(a.j.getContext(), b)
    }

    function Kc(a) {
        a.Pb = p
    }

    function Lc(a, b, c) {
        a.Ua || (a.Zc = Jc(a, "precision mediump float;\nuniform float width;\nuniform float height;\nuniform float inwidth;\nuniform float inheight;\nuniform float texwidth;\nuniform float texheight;\nuniform vec2 fragCoordOffset;\nuniform sampler2D imageIn;\nvec2 dim = vec2(width, height);\nvec2 texdim = vec2(texwidth, texheight);\nvec2 indim = vec2(inwidth, inheight);\nvec2 texscale = indim / texdim;\nvec2 getNormalizedFragCoord() {\nreturn (gl_FragCoord.xy - fragCoordOffset) + 0.5;\n}\nvec2 mirrorMargin = 1.0 / indim;\nvec2 mirrorBorder = 1.0 - mirrorMargin;\nvoid mirror(inout vec2 pos) {\npos = pos - step(mirrorBorder, pos) * (pos - mirrorBorder);\npos *= 2.0 * (0.5 - step(0.0, -pos));\n}\nuniform vec2 sampleDirection;\nvec2 sampleStep = sampleDirection / indim;\nvoid addSample(inout vec4 result, vec2 p, float offset, float weight) {\nvec2 pos = (p + offset * sampleStep);\nmirror(pos);\npos *= texscale;\nvec4 color = texture2D(imageIn, pos);\nfloat gray = (color.r + color.g + color.b) / 3.0;\nresult.r = min(result.r, gray);\nresult.g = max(result.g, gray);\nresult.b += gray * weight;\n}\nvoid gauss9(inout vec4 result, vec2 p) {\naddSample(result, p, -4.0, 0.0459);\naddSample(result, p, -3.0, 0.0822);\naddSample(result, p, -2.0, 0.1247);\naddSample(result, p, -1.0, 0.1601);\naddSample(result, p, 0.0, 0.1741);\naddSample(result, p, 1.0, 0.1601);\naddSample(result, p, 2.0, 0.1247);\naddSample(result, p, 3.0, 0.0822);\naddSample(result, p, 4.0, 0.0459);\n}\nvoid main() {\nvec2 p = getNormalizedFragCoord() / dim;\nvec4 result  = vec4(1.0, 0.0, 0.0, 1.0);\ngauss9(result, p);\ngl_FragColor = result;\n}"), a.ya = Jc(a, "precision mediump float;\nuniform float width;\nuniform float height;\nuniform float inwidth;\nuniform float inheight;\nuniform float texwidth;\nuniform float texheight;\nuniform vec2 fragCoordOffset;\nuniform sampler2D imageIn;\nvec2 dim = vec2(width, height);\nvec2 texdim = vec2(texwidth, texheight);\nvec2 indim = vec2(inwidth, inheight);\nvec2 texscale = indim / texdim;\nvec2 getNormalizedFragCoord() {\nreturn (gl_FragCoord.xy - fragCoordOffset) + 0.5;\n}\nvec2 mirrorMargin = 1.0 / indim;\nvec2 mirrorBorder = 1.0 - mirrorMargin;\nvoid mirror(inout vec2 pos) {\npos = pos - step(mirrorBorder, pos) * (pos - mirrorBorder);\npos *= 2.0 * (0.5 - step(0.0, -pos));\n}\nuniform vec2 sampleDirection;\nuniform vec2 outOffset;\nuniform vec2 inOffset;\nvec2 inOffsetNormalized = inOffset / texdim;\nvec2 sampleStep = sampleDirection / indim;\nvoid addSample(inout vec4 result, vec2 p, float offset, float weight) {\nvec2 pos = (p + offset * sampleStep);\nmirror(pos);\npos *= texscale;\npos += inOffsetNormalized;\nvec4 color = texture2D(imageIn, pos);\nresult.r = min(result.r, color.r);\nresult.g = max(result.g, color.g);\nresult.b += color.b * weight;\n}\nvoid gauss9(inout vec4 result, vec2 p) {\naddSample(result, p, -4.0, 0.0459);\naddSample(result, p, -3.0, 0.0822);\naddSample(result, p, -2.0, 0.1247);\naddSample(result, p, -1.0, 0.1601);\naddSample(result, p, 0.0, 0.1741);\naddSample(result, p, 1.0, 0.1601);\naddSample(result, p, 2.0, 0.1247);\naddSample(result, p, 3.0, 0.0822);\naddSample(result, p, 4.0, 0.0459);\n}\nvoid main() {\nvec2 p = (getNormalizedFragCoord() - outOffset) / dim;\nvec4 result  = vec4(0.0, 0.0, 0.0, 1.0);\ngauss9(result, p);\n// //\ngl_FragColor = result;\n//\n}"), a.$c = Jc(a, "precision mediump float;\nuniform float width;\nuniform float height;\nuniform float inwidth;\nuniform float inheight;\nuniform float texwidth;\nuniform float texheight;\nuniform vec2 fragCoordOffset;\nuniform sampler2D imageIn;\nvec2 dim = vec2(width, height);\nvec2 texdim = vec2(texwidth, texheight);\nvec2 indim = vec2(inwidth, inheight);\nvec2 texscale = indim / texdim;\nvec2 getNormalizedFragCoord() {\nreturn (gl_FragCoord.xy - fragCoordOffset) + 0.5;\n}\nvec2 mirrorMargin = 1.0 / indim;\nvec2 mirrorBorder = 1.0 - mirrorMargin;\nvoid mirror(inout vec2 pos) {\npos = pos - step(mirrorBorder, pos) * (pos - mirrorBorder);\npos *= 2.0 * (0.5 - step(0.0, -pos));\n}\nvec4 sampleAt(vec2 pos, float scale) {\nmirror(pos);\nvec2 offset = scale * vec2(indim.x, 0) / texdim;\npos = pos * texscale + offset;\nreturn texture2D(imageIn, pos);\n}\nfloat getDynRange(vec4 color) {\nreturn color.g - color.r;\n}\nvoid main() {\nvec2 p = getNormalizedFragCoord() / dim;\nvec4 color;\nfloat minDynRange = 0.3;\ncolor = sampleAt(p, 0.0);\nif (getDynRange(color) < minDynRange) {\ncolor = sampleAt(p, 1.0);\nif (getDynRange(color) < minDynRange) {\ncolor = sampleAt(p, 2.0);\n}\n}\ncolor.z -= 0.02;\n//\n//\ngl_FragColor = color;\n}"), a.ad = Jc(a, "precision mediump float;\nuniform float width;\nuniform float height;\nuniform float inwidth;\nuniform float inheight;\nuniform float texwidth;\nuniform float texheight;\nuniform vec2 fragCoordOffset;\nuniform sampler2D imageIn;\nvec2 dim = vec2(width, height);\nvec2 texdim = vec2(texwidth, texheight);\nvec2 indim = vec2(inwidth, inheight);\nvec2 texscale = indim / texdim;\nvec2 getNormalizedFragCoord() {\nreturn (gl_FragCoord.xy - fragCoordOffset) + 0.5;\n}\nuniform sampler2D origImage;\nvec2 texscaleBlackLevels = indim / texdim;\nvoid main() {\nvec2 p = getNormalizedFragCoord() / dim;\nvec4 color = texture2D(origImage, p);\nfloat gray = (color.r + color.g + color.b) / 3.0;\nfloat black = texture2D(imageIn, p * texscaleBlackLevels).z;\nfloat binary = gray > black ? 1.0 : 0.0;\ngl_FragColor = vec4(binary, binary, binary, 1.0);\n}"), a.dc = Jc(a, "precision mediump float;\nuniform float width;\nuniform float height;\nuniform float inwidth;\nuniform float inheight;\nuniform float texwidth;\nuniform float texheight;\nuniform vec2 fragCoordOffset;\nuniform sampler2D imageIn;\nvec2 dim = vec2(width, height);\nvec2 texdim = vec2(texwidth, texheight);\nvec2 indim = vec2(inwidth, inheight);\nvec2 texscale = indim / texdim;\nvec2 getNormalizedFragCoord() {\nreturn (gl_FragCoord.xy - fragCoordOffset) + 0.5;\n}\nvec2 mirrorMargin = 1.0 / indim;\nvec2 mirrorBorder = 1.0 - mirrorMargin;\nvoid mirror(inout vec2 pos) {\npos = pos - step(mirrorBorder, pos) * (pos - mirrorBorder);\npos *= 2.0 * (0.5 - step(0.0, -pos));\n}\nuniform vec2 sampleDirection;\nuniform vec2 outOffset;\nuniform vec2 inOffset;\nvec2 sampleStep = sampleDirection / indim;\nvec2 inOffsetNormalized = inOffset / texdim;\nvoid addSample(inout vec4 result, vec2 p, float offset, float weight) {\nvec2 pos = (p + offset * sampleStep);\nmirror(pos);\npos *= texscale;\npos += inOffsetNormalized;\nvec4 color = texture2D(imageIn, pos);\nresult.rgb += color.rgb * weight;\n}\nvoid gauss9(inout vec4 result, vec2 p) {\naddSample(result, p, -4.0, 0.0459);\naddSample(result, p, -3.0, 0.0822);\naddSample(result, p, -2.0, 0.1247);\naddSample(result, p, -1.0, 0.1601);\naddSample(result, p, 0.0, 0.1741);\naddSample(result, p, 1.0, 0.1601);\naddSample(result, p, 2.0, 0.1247);\naddSample(result, p, 3.0, 0.0822);\naddSample(result, p, 4.0, 0.0459);\n}\nvoid main() {\nvec2 p = (getNormalizedFragCoord() - outOffset) / dim;\nvec4 result  = vec4(0.0, 0.0, 0.0, 1.0);\ngauss9(result, p);\ngl_FragColor = result;\n}"));
        if (!a.Ua || a.j.b() != b || a.j.a() != c) a.j.ic(b, c), Ec(a.j), a.Pb && Fc(a.j), a.bc = Mc(a);
        a.Ua = l
    }

    function Mc(a) {
        var b = a.j.b(),
            c = a.j.a(),
            d = new qc(a.j),
            e = new kc({
                width: b,
                height: c,
                inwidth: b,
                inheight: c,
                texwidth: b,
                texheight: c,
                inOffset: [0, 0],
                outOffset: [0, 0],
                fragCoordOffset: Gc()
            }),
            f = Math.max(1, b >> 3),
            g = Math.max(1, c >> 3),
            h = e.m().set({
                width: f,
                height: g,
                inwidth: f,
                inheight: g
            });
        J(d, a.dc, e.m().set({
            width: f,
            sampleDirection: [0, 1]
        }));
        J(d, a.dc, h.m().set({
            inheight: c,
            sampleDirection: [1, 0]
        }));
        J(d, a.Zc, h.m().set({
            sampleDirection: [0, 1]
        }));
        J(d, a.ya, h.m().set({
            sampleDirection: [1, 0]
        }));
        J(d, a.ya, h.m().set({
            sampleDirection: [0,
                2
            ]
        }));
        J(d, a.ya, h.m().set({
            sampleDirection: [2, 0],
            outOffset: [f, 0]
        }));
        J(d, a.ya, h.m().set({
            sampleDirection: [0, 2],
            inOffset: [f, 0]
        }));
        J(d, a.ya, h.m().set({
            sampleDirection: [2, 0],
            outOffset: [2 * f, 0]
        }));
        J(d, a.$c, h);
        J(d, a.ad, lc(h.m(), "origImage", 0).set({
            width: b,
            height: c,
            inwidth: f,
            inheight: g
        }));
        return d
    }
    s.getImageData = function() {
        return this.j.getImageData()
    };

    function Nc(a) {
        a = a.j.getImageData();
        return new hc(a.width, a.height, a.data)
    }
    s.W = function(a) {
        this.Ua || i(Error());
        var b = this.j.getContext();
        b.activeTexture(b.TEXTURE0);
        b.bindTexture(b.TEXTURE_2D, Dc(this.j));
        a instanceof ic ? b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, a.width, a.height, 0, b.RGBA, b.UNSIGNED_BYTE, a.data) : b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a);
        this.bc.W(0, 1, 2, l)
    };

    function Oc() {
        for (var a = new Uint8Array(8E3), b = 0; 20 > b; ++b)
            for (var c = 0; 100 > c; ++c) {
                var d = 4 * (100 * b + c),
                    e = c;
                a[d] = e;
                a[d + 1] = e;
                a[d + 2] = e;
                a[d + 3] = 255
            }
        return new ic(100, 20, a)
    }

    function Pc() {
        if (Ic === n) {
            var a = Oc();
            jc(a, 30, 20);
            jc(a, 90, 50);
            try {
                var b = new Hc
            } catch (c) {
                return p
            }
            Kc(b);
            Lc(b, 100, 20);
            b.W(a);
            a = b.getImageData();
            Ic = 0 == a.get(30, 4)[0] && 0 == a.get(90, 4)[0] && 255 == a.get(31, 4)[0] && 255 == a.get(29, 4)[0]
        }
        return Ic
    };

    function K(a) {
        E.call(this, a)
    }
    A(K, E);

    function L(a) {
        K.call(this, a)
    }
    A(L, K);

    function M(a) {
        K.call(this, a)
    }
    A(M, K);

    function Qc(a) {
        E.call(this, a || "InvalidCharset")
    }
    A(Qc, E);

    function Rc(a, b) {
        this.fa = a;
        this.Wc = b || []
    }

    function Sc(a) {
        return a.Qa() ? n : a.fa
    }
    Rc.prototype.Qa = function() {
        return this.fa instanceof K
    };

    function Tc(a) {
        return a.Wc
    }
    Rc.prototype.toJSON = function() {
        return {
            text: Sc(this),
            patterns: Tc(this)
        }
    };

    function Uc(a, b) {
        this.x = a;
        this.y = b
    };

    function Vc(a, b, c) {
        Uc.call(this, a, b);
        this.count = 1;
        this.h = c
    }
    A(Vc, Uc);
    Vc.prototype.$a = function(a, b, c) {
        return Math.abs(b - this.y) <= a && Math.abs(c - this.x) <= a ? (a = Math.abs(a - this.h), 1 >= a || 1 >= a / this.h) : p
    };
    Vc.prototype.gb = function(a, b, c) {
        return new Vc((this.x + b) / 2, (this.y + a) / 2, (this.h + c) / 2)
    };
    Vc.prototype.toJSON = function() {
        return {
            x: this.x,
            y: this.y,
            size: this.h
        }
    };

    function Wc(a, b, c, d, e, f, g) {
        this.k = a;
        this.xa = [];
        this.jd = b;
        this.kd = c;
        this.width = d;
        this.height = e;
        this.Nc = f;
        this.zc = [0, 0, 0];
        this.za = g
    }
    Wc.prototype.Z = function(a, b) {
        return b - a[2] - a[1] / 2
    };

    function Xc(a, b) {
        for (var c = a.Nc, d = c / 2, e = 0; 3 > e; e++)
            if (Math.abs(c - b[e]) >= d) return p;
        return l
    }
    Wc.prototype.hb = function(a, b, c, d) {
        var e = this.k,
            f = e.a(),
            g = this.zc;
        g[0] = 0;
        g[1] = 0;
        g[2] = 0;
        for (var h = a; 0 <= h && e.get(b, h) && g[1] <= c;) g[1]++, h--;
        if (0 > h || g[1] > c) return NaN;
        for (; 0 <= h && !e.get(b, +h) && g[0] <= c;) g[0]++, h--;
        if (g[0] > c) return NaN;
        for (h = a + 1; h < f && e.get(b, h) && g[1] <= c;) g[1]++, h++;
        if (h == f || g[1] > c) return NaN;
        for (; h < f && !e.get(b, h) && g[2] <= c;) g[2]++, h++;
        return g[2] > c || 5 * Math.abs(g[0] + g[1] + g[2] - d) >= 2 * d ? NaN : Xc(this, g) ? this.Z(g, h) : NaN
    };
    Wc.prototype.qa = function(a, b, c) {
        c = this.Z(a, c);
        b = this.hb(b, Math.floor(c), 2 * a[1], a[0] + a[1] + a[2]);
        if (!isNaN(b)) {
            for (var a = (a[0] + a[1] + a[2]) / 3, d = this.xa.length, e = 0; e < d; e++) {
                var f = this.xa[e];
                if (f.$a(a, b, c)) return f.gb(b, c, a)
            }
            c = new Vc(c, b, a);
            this.xa.push(c);
            this.za != n && this.za(c)
        }
        return n
    };
    Wc.prototype.find = function() {
        for (var a = this.jd, b = this.height, c = this.k, d = a + this.width, e = this.kd + (b >> 1), f = [0, 0, 0], g = 0; g < b; g++) {
            var h = e + (0 == (g & 1) ? g + 1 >> 1 : -(g + 1 >> 1));
            f[0] = 0;
            f[1] = 0;
            f[2] = 0;
            for (var j = a; j < d && c.get(j, h);) j++;
            for (var m = 0; j < d;) {
                if (c.get(j, h))
                    if (1 == m) f[m]++;
                    else
                if (2 == m) {
                    if (Xc(this, f) && (m = this.qa(f, h, j), m != n)) return m;
                    f[0] = f[2];
                    f[1] = 1;
                    f[2] = 0;
                    m = 1
                } else f[++m]++;
                else 1 == m && m++, f[m]++;
                j++
            }
            if (Xc(this, f) && (m = this.qa(f, h, d), m != n)) return m
        }
        if (0 < this.xa.length) return this.xa[0];
        i(new M)
    };

    function Yc(a, b) {
        var c = ea(b) ? b : a;
        (1 > a || 1 > c) && i(Error());
        this.width = a;
        this.height = c;
        var d = a >> 5;
        0 != (a & 31) && d++;
        this.ga = d;
        this.i = new Uint32Array(d * c)
    }
    s = Yc.prototype;
    s.b = q("width");
    s.a = q("height");
    s.get = function(a, b) {
        return 0 != (this.i[b * this.ga + (a >> 5)] >> (a & 31) & 1)
    };
    s.set = function(a, b) {
        this.i[b * this.ga + (a >> 5)] |= 1 << (a & 31)
    };
    s.K = function(a, b) {
        this.i[b * this.ga + (a >> 5)] ^= 1 << (a & 31)
    };
    s.clear = function() {
        for (var a = this.i.length, b = 0; b < a; b++) this.i[b] = 0
    };

    function Zc(a, b, c, d, e) {
        (0 > c || 0 > b) && i(Error());
        (1 > e || 1 > d) && i(Error());
        d = b + d;
        e = c + e;
        for ((e > a.height || d > a.width) && i(Error()); c < e; c++)
            for (var f = c * a.ga, g = b; g < d; g++) a.i[f + (g >> 5)] |= 1 << (g & 31)
    }
    s.toString = function() {
        for (var a = [], b = 0; b < this.height; b++) {
            for (var c = 0; c < this.width; c++) a.push(this.get(c, b) ? "X " : "  ");
            a.push("\n")
        }
        return a.join("")
    };

    function $c(a, b) {
        var c = a.b(),
            d = a.a(),
            e = l,
            f, g, h;
        for (h = 0; h < b.length && e; h += 2) f = b[h] >> 0, g = b[h + 1] >> 0, (-1 > f || f > c || -1 > g || g > d) && i(new M), e = p, -1 == f ? (b[h] = 0, e = l) : f == c && (b[h] = c - 1, e = l), -1 == g ? (b[h + 1] = 0, e = l) : g == d && (b[h + 1] = d - 1, e = l);
        e = l;
        for (h = b.length - 2; 0 <= h && e; h -= 2) f = b[h] >> 0, g = b[h + 1] >> 0, (-1 > f || f > c || -1 > g || g > d) && i(new M), e = p, -1 == f ? (b[h] = 0, e = l) : f == c && (b[h] = c - 1, e = l), -1 == g ? (b[h + 1] = 0, e = l) : g == d && (b[h + 1] = d - 1, e = l)
    };

    function ad(a, b, c, d, e, f, g, h, j) {
        this.r = a;
        this.s = d;
        this.t = g;
        this.u = b;
        this.v = e;
        this.w = h;
        this.z = c;
        this.A = f;
        this.B = j
    }

    function bd(a, b) {
        for (var c = b.length, d = a.r, e = a.s, f = a.t, g = a.u, h = a.v, j = a.w, m = a.z, r = a.A, t = a.B, u = 0; u < c; u += 2) {
            var w = b[u],
                x = b[u + 1],
                D = f * w + j * x + t;
            b[u] = (d * w + g * x + m) / D;
            b[u + 1] = (e * w + h * x + r) / D
        }
    }

    function cd(a) {
        return new ad(a.v * a.B - a.w * a.A, a.w * a.z - a.u * a.B, a.u * a.A - a.v * a.z, a.t * a.A - a.s * a.B, a.r * a.B - a.t * a.z, a.s * a.z - a.r * a.A, a.s * a.w - a.t * a.v, a.t * a.u - a.r * a.w, a.r * a.v - a.s * a.u)
    }

    function dd(a, b) {
        return new ad(a.r * b.r + a.u * b.s + a.z * b.t, a.r * b.u + a.u * b.v + a.z * b.w, a.r * b.z + a.u * b.A + a.z * b.B, a.s * b.r + a.v * b.s + a.A * b.t, a.s * b.u + a.v * b.v + a.A * b.w, a.s * b.z + a.v * b.A + a.A * b.B, a.t * b.r + a.w * b.s + a.B * b.t, a.t * b.u + a.w * b.v + a.B * b.w, a.t * b.z + a.w * b.A + a.B * b.B)
    }

    function ed(a, b, c, d, e, f, g, h, j, m, r, t, u, w, x, D) {
        return dd(fd(j, m, r, t, u, w, x, D), gd(a, b, c, d, e, f, g, h))
    }

    function fd(a, b, c, d, e, f, g, h) {
        var j = h - f,
            m = b - d + f - h;
        if (0 == j && 0 == m) return new ad(c - a, e - c, a, d - b, f - d, b, 0, 0, 1);
        var r = c - e,
            t = g - e,
            e = a - c + e - g,
            f = d - f,
            u = r * j - t * f,
            j = (e * j - t * m) / u,
            m = (r * m - e * f) / u;
        return new ad(c - a + j * c, g - a + m * g, a, d - b + j * d, h - b + m * h, b, j, m, 1)
    }

    function gd(a, b, c, d, e, f, g, h) {
        return cd(fd(a, b, c, d, e, f, g, h))
    };

    function hd() {}
    hd.prototype.gc = function(a, b, c, d, e, f, g, h, j, m, r, t, u, w, x, D, Z, Ua, B) {
        return id(a, b, c, ed(d, e, f, g, h, j, m, r, t, u, w, x, D, Z, Ua, B))
    };

    function id(a, b, c, d) {
        (0 >= b || 0 >= c) && i(new M);
        for (var e = new Yc(b, c), b = Array(b << 1), f, g = 0; g < c; g++) {
            var h = b.length,
                j = g + 0.5;
            for (f = 0; f < h; f += 2) b[f] = (f >> 1) + 0.5, b[f + 1] = j;
            bd(d, b);
            $c(a, b);
            try {
                for (f = 0; f < h; f += 2) a.get(b[f] >> 0, b[f + 1] >> 0) && e.set(f >> 1, g)
            } catch (m) {
                i(new M)
            }
        }
        return e
    }
    aa()(new hd);

    function jd(a, b, c, d) {
        Uc.call(this, a, b);
        this.count = ea(d) ? d : 1;
        this.h = c
    }
    A(jd, Uc);

    function kd(a) {
        return a.count
    }
    jd.prototype.$a = function(a, b, c) {
        return Math.abs(b - this.y) <= a && Math.abs(c - this.x) <= a ? (a = Math.abs(a - this.h), 1 >= a || a <= this.h) : p
    };
    jd.prototype.gb = function(a, b, c) {
        var d = this.count,
            e = d + 1;
        return new jd((d * this.x + b) / e, (d * this.y + a) / e, (d * this.h + c) / e, e)
    };

    function ld(a) {
        function b(a, b) {
            var c = a.x - b.x,
                d = a.y - b.y;
            return c * c + d * d
        }
        var c = b(a[0], a[1]),
            d = b(a[1], a[2]),
            e = b(a[0], a[2]);
        d >= c && d >= e ? (d = a[0], c = a[1], e = a[2]) : e >= d && e >= c ? (d = a[1], c = a[0], e = a[2]) : (d = a[2], c = a[0], e = a[1]);
        var f = d.x,
            g = d.y;
        0 > (e.x - f) * (c.y - g) - (e.y - g) * (c.x - f) && (f = c, c = e, e = f);
        a[0] = c;
        a[1] = d;
        a[2] = e
    }
    jd.prototype.toJSON = function() {
        return {
            x: this.x,
            y: this.y,
            size: this.h
        }
    };

    function md(a) {
        this.uc = a[0];
        this.ld = a[1];
        this.md = a[2]
    };

    function nd(a, b, c) {
        this.width = a;
        this.height = b;
        this.data = c
    }
    nd.prototype.get = function(a, b) {
        return this.data[b * this.width + a]
    };
    nd.prototype.b = q("width");
    nd.prototype.a = q("height");
    nd.prototype.oa = q("data");

    function od(a, b, c) {
        for (var c = c == n || c.length < a.width ? new Uint8Array(a.width) : c, b = b * a.width, d = 0; d < a.width; ++d) c[d] = a.data[b + d];
        return c
    }

    function pd(a, b) {
        return new nd(a, b, new Uint8Array(new ArrayBuffer(a * b)))
    };

    function qd(a, b) {
        this.sa = a;
        this.p = [];
        this.$ = Array(5);
        this.fc = b || n;
        this.pb = p
    }
    var rd = [
        [0, 1, 2],
        [0, 1, 3],
        [0, 1, 4],
        [0, 1, 5],
        [0, 2, 3],
        [0, 2, 4],
        [0, 2, 5],
        [0, 3, 4],
        [0, 3, 5],
        [0, 4, 5],
        [1, 2, 3],
        [1, 2, 4],
        [1, 2, 5],
        [1, 3, 4],
        [1, 3, 5],
        [1, 4, 5],
        [2, 3, 4],
        [2, 3, 5],
        [2, 4, 5],
        [3, 4, 5]
    ];
    qd.prototype.find = function(a) {
        var b = a && !! a[1],
            a = this.sa.height,
            c = this.sa.width,
            d = Math.floor(3 * a / 228);
        if (3 > d || b) d = 3;
        for (var b = p, e = Array(5), f, g = d - 1; g < a && !b; g += d) {
            e[0] = 0;
            e[1] = 0;
            e[2] = 0;
            e[3] = 0;
            for (var h = f = e[4] = 0; h < c; h++) this.sa.get(h, g) ? (1 == (f & 1) && f++, e[f]++) : 0 == (f & 1) ? 4 == f ? sd(e) ? (f = this.qa(e, g, h)) ? (d = 2, this.pb ? b = td(this) : (f = ud(this), f > e[2] && (g += f - e[2] - d, h = c - 1)), f = 0, e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0) : (e[0] = e[2], e[1] = e[3], e[2] = e[4], e[3] = 1, e[4] = 0, f = 3) : (e[0] = e[2], e[1] = e[3], e[2] = e[4], e[3] = 1, e[4] = 0, f = 3) : e[++f]++ : e[f]++;
            if (sd(e) && (f = this.qa(e, g, c))) d = e[0], this.pb && (b = td(this))
        }
        a = vd(this, l);
        ld(a);
        return new md(a)
    };
    qd.prototype.Z = function(a, b) {
        return b - a[4] - a[3] - a[2] / 2
    };

    function sd(a) {
        for (var b = 0, c = 0; 5 > c; c++) {
            var d = a[c];
            if (0 == d) return p;
            b += d
        }
        if (7 > b) return p;
        b = Math.floor((b << 8) / 7);
        c = Math.floor(b / 2);
        return Math.abs(b - (a[0] << 8)) < c && Math.abs(b - (a[1] << 8)) < c && Math.abs(3 * b - (a[2] << 8)) < 3 * c && Math.abs(b - (a[3] << 8)) < c && Math.abs(b - (a[4] << 8)) < c
    }

    function wd(a) {
        a.$[0] = 0;
        a.$[1] = 0;
        a.$[2] = 0;
        a.$[3] = 0;
        a.$[4] = 0;
        return a.$
    }
    qd.prototype.hb = function(a, b, c, d) {
        for (var e = this.sa, f = e.height, g = wd(this), h = a; 0 <= h && e.get(b, h);) g[2]++, h--;
        if (0 > h) return NaN;
        for (; 0 <= h && !e.get(b, h) && g[1] <= c;) g[1]++, h--;
        if (0 > h || g[1] > c) return NaN;
        for (; 0 <= h && e.get(b, h) && g[0] <= c;) g[0]++, h--;
        if (g[0] > c) return NaN;
        for (h = a + 1; h < f && e.get(b, h);) g[2]++, h++;
        if (h == f) return NaN;
        for (; h < f && !e.get(b, h) && g[3] < c;) g[3]++, h++;
        if (h == f || g[3] >= c) return NaN;
        for (; h < f && e.get(b, h) && g[4] < c;) g[4]++, h++;
        return g[4] >= c || 5 * Math.abs(g[0] + g[1] + g[2] + g[3] + g[4] - d) >= 2 * d ? NaN : sd(g) ? this.Z(g, h) : NaN
    };

    function xd(a, b, c, d, e) {
        for (var f = a.sa, g = f.width, h = wd(a), j = b; 0 <= j && f.get(j, c);) h[2]++, j--;
        if (0 > j) return NaN;
        for (; 0 <= j && !f.get(j, c) && h[1] <= d;) h[1]++, j--;
        if (0 > j || h[1] > d) return NaN;
        for (; 0 <= j && f.get(j, c) && h[0] <= d;) h[0]++, j--;
        if (h[0] > d) return NaN;
        for (j = b + 1; j < g && f.get(j, c);) h[2]++, j++;
        if (j == g) return NaN;
        for (; j < g && !f.get(j, c) && h[3] < d;) h[3]++, j++;
        if (j == g || h[3] >= d) return NaN;
        for (; j < g && f.get(j, c) && h[4] < d;) h[4]++, j++;
        return h[4] >= d || 5 * Math.abs(h[0] + h[1] + h[2] + h[3] + h[4] - e) >= e ? NaN : sd(h) ? a.Z(h, j) : NaN
    }
    qd.prototype.qa = function(a, b, c) {
        var d = a[0] + a[1] + a[2] + a[3] + a[4],
            c = this.Z(a, c),
            b = this.hb(b, Math.floor(c), a[2], d);
        if (!isNaN(b) && (c = xd(this, Math.floor(c), Math.floor(b), a[2], d), !isNaN(c))) {
            for (var a = d / 7, d = p, e = 0; e < this.p.length; e++) {
                var f = this.p[e];
                if (f.$a(a, b, c)) {
                    this.p[e] = f.gb(b, c, a);
                    d = l;
                    break
                }
            }
            d || (c = new jd(c, b, a), this.p.push(c), this.fc != n && this.fc(c));
            return l
        }
        return p
    };

    function ud(a) {
        if (1 >= a.p.length) return 0;
        for (var b = n, c = 0; c < a.p.length; ++c) {
            var d = a.p[c];
            if (2 <= kd(d))
                if (b == n) b = d;
                else return a.pb = l, Math.floor((Math.abs(b.x - d.x) - Math.abs(b.y - d.y)) / 2)
        }
        return 0
    }

    function td(a) {
        var b = 0,
            c = 0,
            d = a.p.length;
        a.p.forEach(function(a) {
            2 <= kd(a) && (b++, c += a.h)
        }, a);
        if (3 > b) return p;
        var e = c / d,
            f = 0;
        a.p.forEach(function(a) {
            f += Math.abs(a.h - e)
        });
        if (f > 0.05 * c) return p;
        a = vd(a);
        return 0.05 > yd(a)
    }

    function vd(a, b) {
        var c = a.p.length;
        3 > c && i(new M);
        var d, e = Wa(a.p);
        if (3 < c) {
            var f = 0,
                g = 0;
            e.forEach(function(a) {
                a = a.h;
                f += a;
                g += a * a
            });
            d = f / c;
            c = Math.sqrt(g / c - d * d);
            e.sort(zd(d));
            for (var c = Math.max(0.2 * d, c), h = 0; h < e.length && 3 < e.length; h++) Math.abs(e[h].h - d) > c && (Va(e, h), h--)
        }
        3 < e.length && (f = 0, e.forEach(function(a) {
            f += a.h
        }), d = f / e.length, e.sort(Ad(d)), b ? (d = Bd(e).map(function(a) {
            return {
                xc: a,
                lc: yd(a)
            }
        }), d.sort(function(a, b) {
            return Ya(a.lc, b.lc)
        }), e = d[0].xc) : e = e.slice(0, 3));
        return e
    }

    function Bd(a) {
        var b = a.length,
            c = [];
        rd.forEach(function(d) {
            d[0] < b && (d[1] && b && d[2] < b) && c.push([a[d[0]], a[d[1]], a[d[2]]])
        });
        return c
    }

    function zd(a) {
        return function(b, c) {
            var d = Math.abs(c.h - a),
                e = Math.abs(b.h - a);
            return d < e ? -1 : d == e ? 0 : 1
        }
    }

    function Ad(a) {
        return function(b, c) {
            if (kd(c) == kd(b)) {
                var d = Math.abs(c.h - a),
                    e = Math.abs(b.h - a);
                return d < e ? 1 : d == e ? 0 : -1
            }
            return kd(c) - kd(b)
        }
    }

    function Cd(a, b) {
        var c = a.x - b.x,
            d = a.y - b.y,
            e = Math.sqrt(c * c + d * d);
        return [c / e, d / e]
    }

    function Dd(a, b) {
        return a[0] * b[0] + a[1] * b[1]
    }
    var Ed = Math.sqrt(0.5);

    function yd(a) {
        var b = Cd(a[0], a[1]),
            c = Cd(a[0], a[2]),
            a = Cd(a[1], a[2]),
            b = [Math.abs(Dd(b, c)), Math.abs(Dd(b, a)), Math.abs(Dd(c, a))];
        b.sort();
        return b[0] + Math.abs(b[1] - Ed) + Math.abs(b[2] - Ed)
    };

    function Fd(a, b, c, d) {
        a -= c;
        b -= d;
        return Math.sqrt(a * a + b * b)
    };

    function N(a, b) {
        this.count = a;
        this.Jb = b
    }

    function O(a, b, c) {
        this.La = a;
        this.ma = c ? [b, c] : [b]
    }

    function Gd(a) {
        return a.ma
    }

    function Hd(a) {
        return a.La * Id(a)
    }

    function Id(a) {
        for (var b = 0, c = 0; c < a.ma.length; c++) b += a.ma[c].count;
        return b
    }

    function P(a, b, c, d, e, f) {
        this.Ba = a;
        this.Ea = b;
        this.ma = [c, d, e, f];
        a = 0;
        b = c.La;
        c = Gd(c);
        for (d = 0; d < c.length; d++) e = c[d], a += e.count * (e.Jb + b);
        this.Xa = a
    }

    function Jd(a) {
        return a.Ba
    }

    function Kd(a) {
        return a.Xa
    }
    P.prototype.toString = function() {
        return "" + this.Ba
    };

    function Ld(a) {
        return 17 + 4 * a.Ba
    }

    function Md(a) {
        var b = Ld(a),
            c = new Yc(b);
        Zc(c, 0, 0, 9, 9);
        Zc(c, b - 8, 0, 8, 9);
        Zc(c, 0, b - 8, 9, 8);
        for (var d = a.Ea.length, e = 0; e < d; e++)
            for (var f = a.Ea[e] - 2, g = 0; g < d; g++) 0 == e && (0 == g || g == d - 1) || e == d - 1 && 0 == g || Zc(c, a.Ea[g] - 2, f, 5, 5);
        Zc(c, 6, 9, 1, b - 17);
        Zc(c, 9, 6, b - 17, 1);
        6 < a.Ba && (Zc(c, b - 11, 0, 3, 6), Zc(c, 0, b - 11, 6, 3));
        return c
    }

    function Nd(a, b) {
        return a.ma[b.Vc]
    }
    var Od = [31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017],
        Pd = function() {
            return [new P(1, [], new O(7, new N(1, 19)), new O(10, new N(1, 16)), new O(13, new N(1, 13)), new O(17, new N(1, 9))), new P(2, [6, 18], new O(10, new N(1, 34)), new O(16, new N(1, 28)), new O(22, new N(1, 22)), new O(28, new N(1, 16))), new P(3, [6, 22], new O(15, new N(1, 55)), new O(26, new N(1, 44)), new O(18, new N(2, 17)), new O(22, new N(2, 13))), new P(4, [6, 26], new O(20, new N(1, 80)), new O(18, new N(2, 32)), new O(26, new N(2, 24)), new O(16, new N(4, 9))), new P(5, [6, 30], new O(26, new N(1, 108)), new O(24, new N(2, 43)), new O(18, new N(2, 15), new N(2, 16)), new O(22, new N(2, 11), new N(2, 12))), new P(6, [6, 34], new O(18, new N(2, 68)), new O(16, new N(4, 27)), new O(24, new N(4, 19)), new O(28, new N(4, 15))), new P(7, [6, 22, 38], new O(20, new N(2, 78)), new O(18, new N(4, 31)), new O(18, new N(2, 14), new N(4, 15)), new O(26, new N(4, 13), new N(1, 14))), new P(8, [6, 24, 42], new O(24, new N(2, 97)), new O(22, new N(2, 38), new N(2, 39)), new O(22, new N(4, 18), new N(2, 19)), new O(26, new N(4, 14), new N(2, 15))), new P(9, [6, 26, 46], new O(30, new N(2, 116)), new O(22, new N(3, 36), new N(2, 37)), new O(20, new N(4, 16), new N(4, 17)), new O(24, new N(4, 12), new N(4, 13))), new P(10, [6, 28, 50], new O(18, new N(2, 68), new N(2, 69)), new O(26, new N(4, 43), new N(1, 44)), new O(24, new N(6, 19), new N(2, 20)), new O(28, new N(6, 15), new N(2, 16))), new P(11, [6, 30, 54], new O(20, new N(4, 81)), new O(30, new N(1, 50), new N(4, 51)), new O(28, new N(4, 22), new N(4, 23)), new O(24, new N(3, 12), new N(8, 13))), new P(12, [6, 32, 58], new O(24, new N(2, 92), new N(2, 93)), new O(22, new N(6, 36), new N(2, 37)), new O(26, new N(4, 20), new N(6, 21)), new O(28, new N(7, 14), new N(4, 15))), new P(13, [6, 34, 62], new O(26, new N(4, 107)), new O(22, new N(8, 37), new N(1, 38)), new O(24, new N(8, 20), new N(4, 21)), new O(22, new N(12, 11), new N(4, 12))), new P(14, [6, 26, 46, 66], new O(30, new N(3, 115), new N(1, 116)), new O(24, new N(4, 40), new N(5, 41)), new O(20, new N(11, 16), new N(5, 17)), new O(24, new N(11, 12), new N(5, 13))), new P(15, [6, 26, 48, 70], new O(22, new N(5, 87), new N(1, 88)), new O(24, new N(5, 41), new N(5, 42)), new O(30, new N(5, 24), new N(7, 25)), new O(24, new N(11, 12), new N(7, 13))), new P(16, [6, 26, 50, 74], new O(24, new N(5, 98), new N(1, 99)), new O(28, new N(7, 45), new N(3, 46)), new O(24, new N(15, 19), new N(2, 20)), new O(30, new N(3, 15), new N(13, 16))), new P(17, [6, 30, 54, 78], new O(28, new N(1, 107), new N(5, 108)), new O(28, new N(10, 46), new N(1, 47)), new O(28, new N(1, 22), new N(15, 23)), new O(28, new N(2, 14), new N(17, 15))), new P(18, [6, 30, 56, 82], new O(30, new N(5, 120), new N(1, 121)), new O(26, new N(9, 43), new N(4, 44)), new O(28, new N(17, 22), new N(1, 23)), new O(28, new N(2, 14), new N(19, 15))), new P(19, [6, 30, 58, 86], new O(28, new N(3, 113), new N(4, 114)), new O(26, new N(3, 44), new N(11, 45)), new O(26, new N(17, 21), new N(4, 22)), new O(26, new N(9, 13), new N(16, 14))), new P(20, [6, 34, 62, 90], new O(28, new N(3, 107), new N(5, 108)), new O(26, new N(3, 41), new N(13, 42)), new O(30, new N(15, 24), new N(5, 25)), new O(28, new N(15, 15), new N(10, 16))), new P(21, [6, 28, 50, 72, 94], new O(28, new N(4, 116), new N(4, 117)), new O(26, new N(17, 42)), new O(28, new N(17, 22), new N(6, 23)), new O(30, new N(19, 16), new N(6, 17))), new P(22, [6, 26, 50, 74, 98], new O(28, new N(2, 111), new N(7, 112)), new O(28, new N(17, 46)), new O(30, new N(7, 24), new N(16, 25)), new O(24, new N(34, 13))), new P(23, [6, 30, 54, 74, 102], new O(30, new N(4, 121), new N(5, 122)), new O(28, new N(4, 47), new N(14, 48)), new O(30, new N(11, 24), new N(14, 25)), new O(30, new N(16, 15), new N(14, 16))), new P(24, [6, 28,
                54, 80, 106
            ], new O(30, new N(6, 117), new N(4, 118)), new O(28, new N(6, 45), new N(14, 46)), new O(30, new N(11, 24), new N(16, 25)), new O(30, new N(30, 16), new N(2, 17))), new P(25, [6, 32, 58, 84, 110], new O(26, new N(8, 106), new N(4, 107)), new O(28, new N(8, 47), new N(13, 48)), new O(30, new N(7, 24), new N(22, 25)), new O(30, new N(22, 15), new N(13, 16))), new P(26, [6, 30, 58, 86, 114], new O(28, new N(10, 114), new N(2, 115)), new O(28, new N(19, 46), new N(4, 47)), new O(28, new N(28, 22), new N(6, 23)), new O(30, new N(33, 16), new N(4, 17))), new P(27, [6, 34, 62, 90, 118], new O(30, new N(8, 122), new N(4, 123)), new O(28, new N(22, 45), new N(3, 46)), new O(30, new N(8, 23), new N(26, 24)), new O(30, new N(12, 15), new N(28, 16))), new P(28, [6, 26, 50, 74, 98, 122], new O(30, new N(3, 117), new N(10, 118)), new O(28, new N(3, 45), new N(23, 46)), new O(30, new N(4, 24), new N(31, 25)), new O(30, new N(11, 15), new N(31, 16))), new P(29, [6, 30, 54, 78, 102, 126], new O(30, new N(7, 116), new N(7, 117)), new O(28, new N(21, 45), new N(7, 46)), new O(30, new N(1, 23), new N(37, 24)), new O(30, new N(19, 15), new N(26, 16))), new P(30, [6, 26, 52, 78, 104, 130], new O(30, new N(5, 115), new N(10, 116)), new O(28, new N(19, 47), new N(10, 48)), new O(30, new N(15, 24), new N(25, 25)), new O(30, new N(23, 15), new N(25, 16))), new P(31, [6, 30, 56, 82, 108, 134], new O(30, new N(13, 115), new N(3, 116)), new O(28, new N(2, 46), new N(29, 47)), new O(30, new N(42, 24), new N(1, 25)), new O(30, new N(23, 15), new N(28, 16))), new P(32, [6, 34, 60, 86, 112, 138], new O(30, new N(17, 115)), new O(28, new N(10, 46), new N(23, 47)), new O(30, new N(10, 24), new N(35, 25)), new O(30, new N(19, 15), new N(35, 16))), new P(33, [6, 30, 58, 86, 114, 142], new O(30, new N(17, 115), new N(1, 116)), new O(28, new N(14, 46), new N(21, 47)), new O(30, new N(29, 24), new N(19, 25)), new O(30, new N(11, 15), new N(46, 16))), new P(34, [6, 34, 62, 90, 118, 146], new O(30, new N(13, 115), new N(6, 116)), new O(28, new N(14, 46), new N(23, 47)), new O(30, new N(44, 24), new N(7, 25)), new O(30, new N(59, 16), new N(1, 17))), new P(35, [6, 30, 54, 78, 102, 126, 150], new O(30, new N(12, 121), new N(7, 122)), new O(28, new N(12, 47), new N(26, 48)), new O(30, new N(39, 24), new N(14, 25)), new O(30, new N(22, 15), new N(41, 16))), new P(36, [6, 24, 50, 76, 102, 128, 154], new O(30, new N(6, 121), new N(14, 122)), new O(28, new N(6, 47), new N(34, 48)), new O(30, new N(46, 24), new N(10, 25)), new O(30, new N(2, 15), new N(64, 16))), new P(37, [6, 28, 54, 80, 106, 132, 158], new O(30, new N(17, 122), new N(4, 123)), new O(28, new N(29, 46), new N(14, 47)), new O(30, new N(49, 24), new N(10, 25)), new O(30, new N(24, 15), new N(46, 16))), new P(38, [6, 32, 58, 84, 110, 136, 162], new O(30, new N(4, 122), new N(18, 123)), new O(28, new N(13, 46), new N(32, 47)), new O(30, new N(48, 24), new N(14, 25)), new O(30, new N(42, 15), new N(32, 16))), new P(39, [6, 26, 54, 82, 110, 138, 166], new O(30, new N(20, 117), new N(4, 118)), new O(28, new N(40, 47), new N(7, 48)), new O(30, new N(43, 24), new N(22, 25)), new O(30, new N(10, 15), new N(67, 16))), new P(40, [6, 30, 58, 86, 114, 142, 170], new O(30, new N(19, 118), new N(6, 119)), new O(28, new N(18, 47), new N(31, 48)), new O(30, new N(34, 24), new N(34, 25)), new O(30, new N(20, 15), new N(61, 16)))]
        }();

    function Qd(a) {
        (1 > a || 40 < a) && i(new L);
        return Pd[a - 1]
    }

    function Rd(a) {
        1 != a % 4 && i(new L);
        return Qd(a - 17 >> 2)
    }

    function Sd(a) {
        for (var b = 4294967295, c = 0, d = 0; d < Od.length; d++) {
            var e = Od[d];
            if (e == a) return Qd(d + 7);
            e = Td(a, e);
            e < b && (c = d + 7, b = e)
        }
        return 3 >= b ? Qd(c) : n
    };

    function Ud(a, b) {
        this.i = a;
        this.Yc = b
    }

    function Vd(a, b) {
        this.k = a;
        this.za = b || n
    }

    function Wd(a, b, c, d, e) {
        var f = Math.abs(e - c) > Math.abs(d - b);
        if (f) var g = b,
        b = c, c = g, g = d, d = e, e = g;
        for (var g = Math.abs(d - b), h = Math.abs(e - c), j = -g >> 1, m = b < d ? 1 : -1, r = c < e ? 1 : -1, t = 0, u = d + m, w = b, x = c; w != u; w += m) {
            if (1 == t == !! a.k.get(f ? x : w, f ? w : x)) {
                if (2 == t) return Fd(w, x, b, c);
                t++
            }
            j += h;
            if (0 < j) {
                if (x == e) break;
                x += r;
                j -= g
            }
        }
        return 2 == t ? Fd(d + m, e, b, c) : NaN
    }

    function Xd(a, b, c, d, e) {
        var f = Wd(a, b, c, d, e),
            g = 1,
            d = b - (d - b);
        0 > d ? (g = b / (b - d), d = 0) : d >= a.k.width && (g = (a.k.width - 1 - b) / (d - b), d = a.k.width - 1);
        e = Math.floor(c - (e - c) * g);
        g = 1;
        0 > e ? (g = c / (c - e), e = 0) : e >= a.k.height && (g = (a.k.height - 1 - c) / (e - c), e = a.k.height - 1);
        d = Math.floor(b + (d - b) * g);
        f += Wd(a, b, c, d, e);
        return f - 1
    }

    function Yd(a, b, c) {
        var d = Xd(a, Math.floor(b.x), Math.floor(b.y), Math.floor(c.x), Math.floor(c.y)),
            a = Xd(a, Math.floor(c.x), Math.floor(c.y), Math.floor(b.x), Math.floor(b.y));
        return isNaN(d) ? a / 7 : isNaN(a) ? d / 7 : (d + a) / 14
    }

    function Zd(a, b, c, d) {
        return (Yd(a, b, c) + Yd(a, b, d)) / 2
    }

    function $d(a, b) {
        var c = a.x - b.x,
            d = a.y - b.y;
        return Math.sqrt(c * c + d * d)
    }

    function ae(a, b, c, d) {
        a = Math.round(($d(a, b) / d + $d(a, c) / d) / 2) + 7;
        switch (a % 4) {
            case 0:
                a++;
                break;
            case 2:
                a--;
                break;
            case 3:
                a += 2
        }
        return a
    }

    function be(a, b, c, d, e) {
        var f = Math.floor(e * b),
            e = Math.max(0, c - f),
            c = Math.min(a.k.width - 1, c + f);
        c - e < 3 * b && i(new M);
        var g = Math.max(0, d - f),
            d = Math.min(a.k.height - 1, d + f);
        return (new Wc(a.k, e, g, c - e, d - g, b, a.za)).find()
    }

    function ce(a, b, c, d, e) {
        var e = e - 3.5,
            f, g, h;
        d != n ? (f = d.x, d = d.y, g = h = e - 3) : (f = b.x - a.x + c.x, d = b.y - a.y + c.y, g = h = e);
        return ed(3.5, 3.5, e, 3.5, g, h, 3.5, e, a.x, a.y, b.x, b.y, f, d, c.x, c.y)
    }
    Vd.prototype.gc = function(a, b, c) {
        return id(a, c, c, b)
    };

    function de(a, b) {
        var c = b.ld,
            d = b.md,
            e = b.uc,
            f = Zd(a, c, d, e);
        1 > f && i(new M);
        var g = ae(c, d, e, f),
            h = Rd(g),
            j = Ld(h) - 7,
            m = n;
        if (0 < h.Ea.length)
            for (var j = 1 - 3 / j, h = Math.floor(c.x + j * (d.x - c.x + e.x - c.x)), j = Math.floor(c.y + j * (d.y - c.y + e.y - c.y)), r = 4; 16 >= r; r *= 2) try {
                m = be(a, f, h, j, r);
                break
            } catch (t) {
                t instanceof M || i(t)
            }
        f = a.gc(a.k, ce(c, d, e, m, g), g);
        return new Ud(f, m == n ? [e, c, d] : [e, c, d, m])
    }

    function ee(a) {
        var b = (new qd(a.k, a.za)).find();
        return de(a, b)
    };

    function fe(a, b, c) {
        this.Vc = a;
        this.i = b;
        this.name = c
    }
    var ge = new fe(0, 1, "L"),
        he = new fe(1, 0, "M"),
        ie = new fe(2, 3, "Q"),
        je = new fe(3, 2, "H"),
        ke = [he, ge, je, ie];

    function le(a) {
        var b = {
            L: ge,
            M: he,
            Q: ie,
            H: je
        };
        return b.hasOwnProperty(a) ? b[a] : n
    }
    fe.prototype.toString = q("name");

    function me(a) {
        (0 > a || a >= ke.length) && i(Error());
        return ke[a]
    };

    function ne(a, b) {
        return 0 <= a ? a >> b : (a >> b) + (2 << ~b)
    }

    function oe(a) {
        this.Gc = me(a >> 3 & 3);
        this.Bc = a & 7
    }
    var pe = [
        [21522, 0],
        [20773, 1],
        [24188, 2],
        [23371, 3],
        [17913, 4],
        [16590, 5],
        [20375, 6],
        [19104, 7],
        [30660, 8],
        [29427, 9],
        [32170, 10],
        [30877, 11],
        [26159, 12],
        [25368, 13],
        [27713, 14],
        [26998, 15],
        [5769, 16],
        [5054, 17],
        [7399, 18],
        [6608, 19],
        [1890, 20],
        [597, 21],
        [3340, 22],
        [2107, 23],
        [13663, 24],
        [12392, 25],
        [16177, 26],
        [14854, 27],
        [9396, 28],
        [8579, 29],
        [11994, 30],
        [11245, 31]
    ],
        qe = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4];

    function Td(a, b) {
        a ^= b;
        return qe[a & 15] + qe[ne(a, 4) & 15] + qe[ne(a, 8) & 15] + qe[ne(a, 12) & 15] + qe[ne(a, 16) & 15] + qe[ne(a, 20) & 15] + qe[ne(a, 24) & 15] + qe[ne(a, 28) & 15]
    }

    function re(a) {
        var b = se(a);
        return b != n ? b : se(a ^ 21522)
    }

    function se(a) {
        for (var b = 4294967295, c = 0, d = 0; d < pe.length; d++) {
            var e = pe[d],
                f = e[0];
            if (f == a) return new oe(e[1]);
            f = Td(a, f);
            f < b && (c = e[1], b = f)
        }
        return 3 >= b ? new oe(c) : n
    };

    function te(a) {
        (0 > a || 7 < a) && i(Error());
        return ue[a]
    }

    function ve() {}
    ve.prototype.U = function(a, b) {
        for (var c = 0; c < b; c++)
            for (var d = 0; d < b; d++) this.l(c, d) && a.K(d, c)
    };
    ve.prototype.l = function(a, b) {
        return 0 == (a + b & 1)
    };

    function we() {}
    we.prototype.U = function(a, b) {
        for (var c = 0; c < b; c++)
            for (var d = 0; d < b; d++) this.l(c, d) && a.K(d, c)
    };
    we.prototype.l = function(a) {
        return 0 == (a & 1)
    };

    function xe() {}
    xe.prototype.U = function(a, b) {
        for (var c = 0; c < b; c++)
            for (var d = 0; d < b; d++) this.l(c, d) && a.K(d, c)
    };
    xe.prototype.l = function(a, b) {
        return 0 == b % 3
    };

    function ye() {}
    ye.prototype.U = function(a, b) {
        for (var c = 0; c < b; c++)
            for (var d = 0; d < b; d++) this.l(c, d) && a.K(d, c)
    };
    ye.prototype.l = function(a, b) {
        return 0 == (a + b) % 3
    };

    function ze() {}
    ze.prototype.U = function(a, b) {
        for (var c = 0; c < b; c++)
            for (var d = 0; d < b; d++) this.l(c, d) && a.K(d, c)
    };
    ze.prototype.l = function(a, b) {
        return 0 == (ne(a, 1) + b / 3 & 1)
    };

    function Ae() {}
    Ae.prototype.U = function(a, b) {
        for (var c = 0; c < b; c++)
            for (var d = 0; d < b; d++) this.l(c, d) && a.K(d, c)
    };
    Ae.prototype.l = function(a, b) {
        var c = a * b;
        return 0 == (c & 1) + c % 3
    };

    function Be() {}
    Be.prototype.U = function(a, b) {
        for (var c = 0; c < b; c++)
            for (var d = 0; d < b; d++) this.l(c, d) && a.K(d, c)
    };
    Be.prototype.l = function(a, b) {
        var c = a * b;
        return 0 == ((c & 1) + c % 3 & 1)
    };

    function Ce() {}
    Ce.prototype.U = function(a, b) {
        for (var c = 0; c < b; c++)
            for (var d = 0; d < b; d++) this.l(c, d) && a.K(d, c)
    };
    Ce.prototype.l = function(a, b) {
        return 0 == ((a + b & 1) + a * b % 3 & 1)
    };
    var ue = [new ve, new we, new xe, new ye, new ze, new Ae, new Be, new Ce];

    function De(a) {
        var b = a.a();
        (21 > b || 1 != (b & 3)) && i(new L);
        this.X = a;
        this.T = this.G = n
    }

    function Q(a, b, c, d) {
        return a.X.get(b, c) ? d << 1 | 1 : d << 1
    }

    function Ee(a) {
        if (a.T != n) return a.T;
        for (var b = 0, c = 0; 6 > c; c++) b = Q(a, c, 8, b);
        b = Q(a, 7, 8, b);
        b = Q(a, 8, 8, b);
        b = Q(a, 8, 7, b);
        for (c = 5; 0 <= c; c--) b = Q(a, 8, c, b);
        a.T = re(b);
        if (a.T != n) return a.T;
        for (var d = a.X.a(), b = 0, e = d - 8, c = d - 1; c >= e; c--) b = Q(a, c, 8, b);
        for (c = d - 7; c < d; c++) b = Q(a, 8, c, b);
        a.T = re(b);
        if (a.T != n) return a.T;
        i(new L)
    }

    function Fe(a) {
        if (a.G != n) return a.G;
        var b = a.X.a(),
            c = b - 17 >> 2;
        if (6 >= c) return Qd(c);
        for (var c = 0, d = b - 11, e = 5; 0 <= e; e--)
            for (var f = b - 9; f >= d; f--) c = Q(a, f, e, c);
        a.G = Sd(c);
        if (a.G != n && Ld(a.G) == b) return a.G;
        c = 0;
        for (f = 5; 0 <= f; f--)
            for (e = b - 9; e >= d; e--) c = Q(a, f, e, c);
        a.G = Sd(c);
        if (a.G != n && Ld(a.G) == b) return a.G;
        i(new L)
    }

    function Ge(a) {
        var b = Ee(a),
            c = Fe(a),
            d = te(b.Bc),
            b = a.X.a();
        d.U(a.X, b);
        for (var d = Md(c), e = l, f = Array(c.Xa), g = 0, h = 0, j = 0, m = b - 1; 0 < m; m -= 2) {
            6 == m && m--;
            for (var r = 0; r < b; r++)
                for (var t = e ? b - 1 - r : r, u = 0; 2 > u; u++) d.get(m - u, t) || (j++, h <<= 1, a.X.get(m - u, t) && (h |= 1), 8 == j && (f[g++] = h, h = j = 0));
            e ^= 1
        }
        g != c.Xa && i(new L);
        return f
    };

    function He(a, b) {
        this.Zb = a;
        this.V = b
    }

    function Ie(a, b, c) {
        a.length != b.Xa && i("ArgumentException");
        for (var d = Nd(b, c), c = 0, e = Gd(d), b = 0; b < e.length; b++) c += e[b].count;
        for (var c = Array(c), f = 0, g = 0; g < e.length; g++)
            for (var h = e[g], b = 0; b < h.count; b++) {
                var j = h.Jb,
                    m = d.La + j;
                c[f++] = new He(j, Array(m))
            }
        b = c[0].V.length;
        for (e = c.length - 1; 0 <= e && c[e].V.length != b;) e--;
        e++;
        d = b - d.La;
        for (b = h = 0; b < d; b++)
            for (g = 0; g < f; g++) c[g].V[b] = a[h++];
        for (g = e; g < f; g++) c[g].V[d] = a[h++];
        j = c[0].V.length;
        for (b = d; b < j; b++)
            for (g = 0; g < f; g++) c[g].V[g < e ? b : b + 1] = a[h++];
        return c
    };

    function Je(a, b) {
        a != n && this.append.apply(this, arguments)
    }
    s = Je.prototype;
    s.f = "";
    s.set = function(a) {
        this.f = "" + a
    };
    s.append = function(a, b, c) {
        this.f += a;
        if (b != n)
            for (var d = 1; d < arguments.length; d++) this.f += arguments[d];
        return this
    };
    s.clear = function() {
        this.f = ""
    };
    s.toString = q("f");

    function Ke(a) {
        this.F = a;
        this.I = this.Y = 0
    }

    function R(a, b) {
        (1 > b || 32 < b || b > S(a)) && i(Error());
        var c = 0;
        if (0 < a.I) {
            var c = 8 - a.I,
                d = b < c ? b : c,
                e = c - d,
                c = (a.F[a.Y] & 255 >> 8 - d << e) >> e,
                b = b - d;
            a.I += d;
            8 == a.I && (a.I = 0, a.Y++)
        }
        if (0 < b) {
            for (; 8 <= b;) c = c << 8 | a.F[a.Y] & 255, a.Y++, b -= 8;
            0 < b && (e = 8 - b, c = c << b | (a.F[a.Y] & 255 >> e << e) >> e, a.I += b)
        }
        return c
    }

    function S(a) {
        return 8 * (a.F.length - a.Y) - a.I
    };
    var Le = {
        "0": ["CP437"],
        2: ["CP437"],
        1: ["ISO-8859-1"],
        3: ["ISO-8859-1"],
        4: ["ISO-8859-2"],
        5: ["ISO-8859-3"],
        6: ["ISO-8859-4"],
        7: ["ISO-8859-5"],
        8: ["ISO-8859-6"],
        9: ["ISO-8859-7"],
        10: ["ISO-8859-7"],
        11: ["ISO-8859-9"],
        12: ["ISO-8859-10"],
        13: ["ISO-8859-11"],
        14: ["ISO-8859-12"],
        15: ["ISO-8859-13"],
        16: ["ISO-8859-14"],
        17: ["ISO-8859-15"],
        18: ["ISO-8859-16"],
        20: ["SHIFT_JIS"],
        21: ["ISO-8859-16"],
        22: ["Cp1251", "windows-1251"],
        23: ["Cp1252", "windows-1252"],
        24: ["Cp1256", "windows-1256"],
        25: ["UTF-16BE", "UnicodeBig"],
        26: ["UTF-8"],
        27: ["ASCII", "US-ASCII"],
        170: ["ASCII", "US-ASCII"],
        28: ["Big5"],
        29: ["GB18030", "GB2312", "EUC_CN", "GBK"],
        30: ["EUC-KR"]
    }, Me = {};
    (function() {
        wb(Le, function(a, b) {
            a.forEach(function(a) {
                Me[a] || (Me[a] = b)
            })
        })
    })();

    function Ne(a) {
        return Number(Me[a])
    }

    function Oe(a) {
        return (a = Le[a]) ? a[0] : n
    };

    function T(a, b, c) {
        this.yc = a;
        this.i = b;
        this.Oc = c || "NONAME"
    }
    var Pe = new T([0, 0, 0], 0, "TERMINATOR"),
        Qe = new T([10, 12, 14], 1, "NUMERIC"),
        Re = new T([9, 11, 13], 2, "ALPHANUMERIC"),
        Se = new T([0, 0, 0], 3, "STRUCTURED_APPEND"),
        Te = new T([8, 16, 16], 4, "BYTE"),
        Ue = new T([0, 0, 0], 7, "ECI"),
        Ve = new T([8, 10, 12], 8, "KANJI"),
        We = new T([0, 0, 0], 5, "FNC1_FIRST_POSITION"),
        Xe = new T([0, 0, 0], 9, "FNC1_SECOND_POSITION"),
        Ye = new T([8, 10, 12], 13, "HANZI");

    function Ze(a, b) {
        var c = b.Ba;
        return a.yc[9 >= c ? 0 : 26 >= c ? 1 : 2]
    }
    T.prototype.toString = q("Oc");

    function $e(a) {
        switch (a) {
            case 0:
                return Pe;
            case 1:
                return Qe;
            case 2:
                return Re;
            case 3:
                return Se;
            case 4:
                return Te;
            case 5:
                return We;
            case 7:
                return Ue;
            case 8:
                return Ve;
            case 9:
                return Xe;
            case 13:
                return Ye;
            default:
                i(Error())
        }
    };
    (function(a) {
        function b(a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d;
                d = a.charCodeAt(c);
                var j = k;
                55296 <= d && 56319 >= d ? (j = a.charCodeAt(c + 1), isNaN(j) && i("fixedCharCodeAt: Invalid Encoding"), d = 1024 * (d - 55296) + (j - 56320) + 65536) : d = 56320 <= d && 57343 >= d ? p : d;
                d && (127 >= d ? b.push(d) : (2047 >= d ? b.push(192 | d >> 6) : (65535 >= d ? b.push(224 | d >> 12) : (2097151 >= d ? b.push(240 | d >> 18) : (67108863 >= d ? b.push(240 | d >> 24) : (b.push(240 | 1 & d >> 30), b.push(128 | 63 & d >> 24)), b.push(128 | 63 & d >> 18)), b.push(128 | 63 & d >> 12)), b.push(128 | 63 & d >> 6)), b.push(128 | d & 63)))
            }
            return b
        }

        function c(a) {
            function b(d) {
                d > c && i(Error());
                d = a[d];
                128 !== (d & 192) && i(Error());
                return d & 63
            }
            var c = a.length,
                d = [];
            try {
                for (var j = 0; j < c; ++j) {
                    var m = a[j];
                    if (255 < m) return n;
                    var r;
                    0 === (m & 128) ? r = m : 192 === (m & 224) ? (r = (31 & m) << 6 | b(j + 1), j += 1) : 224 === (m & 240) ? (r = (15 & m) << 12 | b(j + 1) << 6 | b(j + 2), j += 2) : 240 === (m & 248) ? (r = (7 & m) << 18 | b(j + 1) << 12 | b(j + 2) << 6 | b(j + 3), j += 3) : 248 === (m & 252) ? (r = (3 & m) << 24 | b(j + 1) << 18 | b(j + 2) << 12 | b(j + 3) << 6 | b(j + 4), j += 4) : 252 === (m & 254) && (r = (1 & m) << 30 | b(j + 1) << 24 | b(j + 2) << 18 | b(j + 3) << 12 | b(j + 4) << 6 | b(j + 5), j += 5);
                    d.push(r)
                }
            } catch (t) {
                return n
            }
            for (var j = [], u, m = 0; m < d.length; ++m) r = d[m], u = r - 65536, r = 65535 < r ? [55296 + (u >> 10), 56320 + (u & 1023)] : [r], j.push(String.fromCharCode.apply(n, r));
            return j.join("")
        }
        var d = {
            zb: b,
            Za: c
        };
        "object" == typeof ba && ca ? (ya = {}, ya.zb = b, ya.Za = c) : "function" == typeof a.Dc ? a.Dc(d) : a.utf8 = d
    })(self);
    var af = {
        Cp1251: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя",
        Cp1252: "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        Cp1256: "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے",
        "ISO-8859-1": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        "ISO-8859-2": " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙",
        "ISO-8859-3": " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙",
        "ISO-8859-4": " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙",
        "ISO-8859-5": " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ",
        "ISO-8859-6": " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������",
        "ISO-8859-7": " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�",
        "ISO-8859-8": " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�",
        "ISO-8859-9": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ",
        "ISO-8859-10": " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ",
        "ISO-8859-11": " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����",
        "ISO-8859-13": " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’",
        "ISO-8859-14": " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ",
        "ISO-8859-15": " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        "ISO-8859-16": " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
    }, bf = {};

    function cf(a, b) {
        var c = "\x00\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~" + af[b];
        c || i(Error());
        return a.map(function(a) {
            return c[a]
        }).join("")
    }

    function df(a) {
        return !!af[a]
    }

    function ef(a, b) {
        for (var c = ff(b), d = [], e = 0; e < a.length; ++e) {
            var f = c[a[e]];
            if (f === k) return n;
            d.push(f)
        }
        return d
    }

    function ff(a) {
        var b = bf[a];
        if (!b) {
            var b = {}, c = "\x00\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~" + af[a];
            c || i(Error());
            for (var d = 0; d < c.length; ++d) b[c[d]] = d
        }
        return bf[a] = b
    };

    function gf(a, b) {
        var c = b || "UTF-8",
            d = n;
        "UTF-8" == c ? d = ya.Za(a) : df(c) ? d = cf(a, c) : (self.iconv || i(new Qc("iconv not loaded, cannot handle " + c)), d = self.iconv.convert(a, c, "UTF-8"), d === n && i(new Qc("toStr " + c + " to UTF-8 " + a)), d = ya.Za(d));
        d === n && i(new Qc);
        return d
    }

    function hf(a, b) {
        var c = b || "UTF-8",
            d = n;
        "UTF-8" == c ? (d = ya.zb(a), d === n && i(new Qc)) : df(c) ? d = ef(a, c) : (d = ya.zb(a), self.iconv || i(new Qc("iconv not loaded")), d = self.iconv.convert(d, "UTF-8", c));
        d === n && i(new Qc(c + " to bytes: " + a));
        return d
    }

    function jf(a) {
        for (var b = a.length, c = l, d = l, e = l, f = 0, g = 0, h = 0, j = 0, m = 0, r = 0, t = 0, u = 0, w = 0, x = 0, D = 0, Z = 3 < a.length && 239 == a[0] && 187 == a[1] && 191 == a[2], Ua = 0; Ua < b && (c || d || e); Ua++) {
            var B = a[Ua] & 255;
            e && (0 < f ? 0 == (B & 128) ? e = p : f-- : 0 != (B & 128) && (0 == (B & 64) ? e = p : (f++, 0 == (B & 32) ? g++ : (f++, 0 == (B & 16) ? h++ : (f++, 0 == (B & 8) ? j++ : e = p)))));
            c && (127 < B && 160 > B ? c = p : 159 < B && (192 > B || 215 == B || 247 == B) && D++);
            d && (0 < m ? 64 > B || 127 == B || 252 < B ? d = p : m-- : 128 == B || 160 == B || 239 < B ? d = p : 160 < B && 224 > B ? (r++, u = 0, t++, t > w && (w = t)) : 127 < B ? (m++, t = 0, u++, u > x && (x = u)) : u = t = 0)
        }
        e && 0 < f && (e = p);
        d && 0 < m && (d = p);
        return e && (Z || 0 < g + h + j) ? "UTF-8" : d && (3 <= w || 3 <= x) ? "SHIFT_JIS" : c && d ? 2 == w && 2 == r || 10 * D >= b ? "SHIFT_JIS" : "ISO-8859-1" : c ? "ISO-8859-1" : d ? "SHIFT_JIS" : "UTF-8"
    };
    var kf = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");

    function lf(a, b) {
        var c = new Ke(a),
            d = new Je,
            e = [],
            f, g = n;
        do
            if (f = 4 > S(c) ? Pe : $e(R(c, 4)), f != Pe && !(f == We || f == Xe))
                if (f == Se) 16 > S(c) && i(new L), R(c, 16);
                else if (f == Ue) g = mf(c), g = Oe(g), g == n && i(new L);
        else if (f == Ye) {
            var h = R(c, 4),
                j = R(c, Ze(f, b));
            1 == h && nf(c, d, j)
        } else h = R(c, Ze(f, b)), f == Qe ? of(c, d, h) : f == Re ? pf(c, d, h) : f == Te ? qf(c, d, h, g, e) : f == Ve ? rf(c, d, h) : i(new L);
        while (f != Pe);
        return d.toString()
    }

    function nf(a, b, c) {
        13 * c > S(a) && i(new L);
        for (var d = Array(2 * c), e = 0; 0 < c;) {
            var f = R(a, 13),
                f = f / 96 << 8 | f % 96,
                f = 959 > f ? f + 41377 : f + 42657;
            d[e] = f >> 8 & 255;
            d[e + 1] = f & 255;
            e += 2;
            c--
        }
        b.append(gf(d, "GB2312"))
    }

    function rf(a, b, c) {
        13 * c > S(a) && i(new L);
        for (var d = Array(2 * c), e = 0; 0 < c;) {
            var f = R(a, 13),
                f = f / 192 << 8 | f % 192,
                f = 7936 > f ? f + 33088 : f + 49472;
            d[e] = f >> 8;
            d[e + 1] = f;
            e += 2;
            c--
        }
        b.append(gf(d, "SJIS"))
    }

    function qf(a, b, c, d, e) {
        c << 3 > S(a) && i(new L);
        for (var f = Array(c), g = 0; g < c; g++) f[g] = R(a, 8);
        a = d ? d : jf(f);
        b.append(gf(f, a));
        e.push(f)
    }

    function sf(a) {
        a >= kf.length && i(new L);
        return kf[Math.floor(a)]
    }

    function pf(a, b, c) {
        for (; 1 < c;) {
            11 > S(a) && i(new L);
            var d = R(a, 11);
            b.append(sf(d / 45));
            b.append(sf(d % 45));
            c -= 2
        }
        1 == c && (6 > S(a) && i(new L), b.append(sf(R(a, 6))))
    }

    function of(a, b, c) {
        for (; 3 <= c;) {
            10 > S(a) && i(new L);
            var d = R(a, 10);
            1E3 <= d && i(new L);
            b.append(sf(d / 100));
            b.append(sf(d / 10 % 10));
            b.append(sf(d % 10));
            c -= 3
        }
        2 == c ? (7 > S(a) && i(new L), a = R(a, 7), 100 <= a && i(new L), b.append(sf(a / 10)), b.append(sf(a % 10))) : 1 == c && (4 > S(a) && i(new L), a = R(a, 4), 10 <= a && i(new L), b.append(sf(a)))
    }

    function mf(a) {
        var b = R(a, 8);
        if (0 == (b & 128)) return b & 127;
        if (128 == (b & 192)) return a = R(a, 8), (b & 63) << 8 | a;
        if (192 == (b & 224)) return a = R(a, 16), (b & 31) << 16 | a;
        i(new L)
    };

    function tf() {}
    A(tf, Error);

    function U(a, b) {
        this.field = a;
        var c = b.length;
        if (1 < c && 0 == b[0]) {
            for (var d = 1; d < c && 0 == b[d];) d++;
            if (d == c) this.d = a.R.d;
            else {
                this.d = Array(c - d);
                for (c = 0; c < this.d.length; c++) this.d[c] = 0;
                for (c = 0; c < this.d.length; c++) this.d[c] = b[d + c]
            }
        } else this.d = b
    }

    function uf(a, b) {
        return a ^ b
    }

    function vf(a) {
        return 0 == a.d[0]
    }

    function V(a) {
        return a.d.length - 1
    }

    function wf(a, b) {
        return a.d[a.d.length - 1 - b]
    }

    function xf(a, b) {
        if (0 == b) return wf(a, 0);
        var c = a.d.length;
        if (1 == b) {
            for (var d = 0, e = 0; e < c; e++) d = uf(d, a.d[e]);
            return d
        }
        d = a.d[0];
        for (e = 1; e < c; e++) d = uf(a.field.multiply(b, d), a.d[e]);
        return d
    }

    function yf(a, b) {
        a.field != b.field && i(new tf);
        if (vf(a)) return b;
        if (vf(b)) return a;
        var c = a.d,
            d = b.d;
        if (c.length > d.length) var e = c,
        c = d, d = e;
        for (var e = Array(d.length), f = d.length - c.length, g = 0; g < f; g++) e[g] = d[g];
        for (g = f; g < d.length; g++) e[g] = uf(c[g - f], d[g]);
        return new U(a.field, e)
    }

    function zf(a, b) {
        a.field != b.field && i(new tf);
        if (vf(a) || vf(b)) return a.field.R;
        for (var c = a.d, d = c.length, e = b.d, f = e.length, g = Array(d + f - 1), h = 0; h < d; h++)
            for (var j = c[h], m = 0; m < f; m++) g[h + m] = uf(g[h + m], a.field.multiply(j, e[m]));
        return new U(a.field, g)
    }

    function Af(a, b) {
        if (0 == b) return a.field.R;
        if (1 == b) return a;
        for (var c = a.d.length, d = Array(c), e = 0; e < c; e++) d[e] = a.field.multiply(a.d[e], b);
        return new U(a.field, d)
    }

    function Bf(a, b, c) {
        if (0 == c) return a.field.R;
        for (var d = a.d.length, b = Array(d + b), e = 0; e < b.length; e++) b[e] = 0;
        for (e = 0; e < d; e++) b[e] = a.field.multiply(a.d[e], c);
        return new U(a.field, b)
    }

    function Cf(a, b) {
        a.field != b.field && i(new tf);
        for (var c = a.field.R, d = a, e = a.field.inverse(wf(b, V(b))); V(d) >= V(b) && !vf(d);) var f = V(d) - V(b),
        g = a.field.multiply(wf(d, V(d)), e), h = Bf(b, f, g), f = Df(a.field, f, g), c = yf(c, f), d = yf(d, h);
        return [c, d]
    }
    U.prototype.toString = function() {
        for (var a = [], b = V(this); 0 <= b; b--) {
            var c = wf(this, b);
            if (0 != c) {
                0 > c ? (a.push(" - "), c = -c) : 0 < a.length && a.push(" + ");
                if (0 == b || 1 != c) c = this.field.log(c), 0 == c ? a.push("1") : 1 == c ? a.push("a") : (a.push("a^"), a.push(c));
                0 != b && (1 == b ? a.push("x") : (a.push("x^"), a.push(b)))
            }
        }
        return a.join("")
    };

    function Ef(a) {
        this.na = Array(256);
        this.va = Array(256);
        for (var b = 1, c = 0; 256 > c; c++) this.na[c] = b, b <<= 1, 256 <= b && (b ^= a);
        for (c = 0; 255 > c; c++) this.va[this.na[c]] = c;
        a = Array(1);
        a[0] = 0;
        this.R = new U(this, Array(a));
        a = Array(1);
        a[0] = 1;
        this.ac = new U(this, Array(a))
    }

    function Df(a, b, c) {
        0 > b && i(Error());
        if (0 == c) return a.R;
        for (var b = Array(b + 1), d = 0; d < b.length; d++) b[d] = 0;
        b[0] = c;
        return new U(a, b)
    }
    Ef.prototype.exp = function(a) {
        return this.na[a]
    };
    Ef.prototype.log = function(a) {
        0 == a && i(Error());
        return this.va[a]
    };
    Ef.prototype.inverse = function(a) {
        0 == a && i(Error());
        return this.na[255 - this.va[a]]
    };
    Ef.prototype.multiply = function(a, b) {
        return 0 == a || 0 == b ? 0 : 1 == a ? b : 1 == b ? a : this.na[(this.va[a] + this.va[b]) % 255]
    };
    var Ff = new Ef(285);
    new Ef(301);

    function Gf(a) {
        K.call(this, a)
    }
    A(Gf, K);

    function Hf(a) {
        this.field = a
    }
    Hf.prototype.Ka = function(a, b) {
        for (var c = new U(this.field, a), d = Array(b), e = 0; e < d.length; e++) d[e] = 0;
        for (var f = l, e = 0; e < b; e++) {
            var g = xf(c, this.field.exp(e));
            d[d.length - 1 - e] = g;
            0 != g && (f = p)
        }
        if (!f) {
            e = new U(this.field, d);
            c = If(this, Df(this.field, b, 1), e, b);
            e = c[1];
            c = Jf(this, c[0]);
            d = Kf(this, e, c);
            for (e = 0; e < c.length; e++) f = a.length - 1 - this.field.log(c[e]), 0 > f && i(new Gf("bad error location")), a[f] = uf(a[f], d[e])
        }
    };

    function If(a, b, c, d) {
        if (V(b) < V(c)) var e = b,
        b = c, c = e;
        for (var e = a.field.ac, f = a.field.R, g = a.field.R, h = a.field.ac; V(c) >= Math.floor(d / 2);) {
            var j = b,
                m = e,
                r = g,
                b = c,
                e = f,
                g = h;
            vf(b) && i(new Gf("r_{i-1} was zero"));
            c = j;
            h = a.field.R;
            for (f = a.field.inverse(wf(b, V(b))); V(c) >= V(b) && !vf(c);) var j = V(c) - V(b),
            t = a.field.multiply(wf(c, V(c)), f), h = yf(h, Df(a.field, j, t)), c = yf(c, Bf(b, j, t));
            f = yf(zf(h, e), m);
            h = yf(zf(h, g), r)
        }
        d = wf(h, 0);
        0 == d && i(new Gf("sigmaTilde(0) was zero"));
        a = a.field.inverse(d);
        d = Af(h, a);
        a = Af(c, a);
        return [d, a]
    }

    function Jf(a, b) {
        var c = V(b);
        if (1 == c) return [wf(b, 1)];
        for (var d = Array(c), e = 0, f = 1; 256 > f && e < c; f++) 0 == xf(b, f) && (d[e] = a.field.inverse(f), e++);
        e != c && i(new Gf("locator degree does not match number of roots"));
        return d
    }

    function Kf(a, b, c) {
        for (var d = c.length, e = Array(d), f = 0; f < d; f++) {
            for (var g = a.field.inverse(c[f]), h = 1, j = 0; j < d; j++) f != j && (h = a.field.multiply(h, uf(1, a.field.multiply(c[j], g))));
            e[f] = a.field.multiply(xf(b, g), a.field.inverse(h))
        }
        return e
    };
    var Lf = new Hf(Ff);

    function Mf(a, b) {
        for (var c = a.length, d = Array(c), e = 0; e < c; e++) d[e] = a[e] & 255;
        Lf.Ka(d, a.length - b);
        for (e = 0; e < b; e++) a[e] = d[e]
    }

    function Nf(a) {
        for (var b = new De(a), a = Fe(b), c = Ee(b).Gc, b = Ge(b), c = Ie(b, a, c), d = 0, b = 0; b < c.length; b++) d += c[b].Zb;
        for (var d = Array(d), e = 0, f = 0; f < c.length; f++) {
            var b = c[f],
                g = b.V,
                h = b.Zb;
            Mf(g, h);
            for (b = 0; b < h; b++) d[e++] = g[b]
        }
        return lf(d, a)
    };

    function Of(a) {
        this.e = a || 0;
        this.g = Pf(this.e)
    }

    function W(a) {
        return a.e
    }

    function Qf(a) {
        return a.e + 7 >> 3
    }

    function Rf(a, b) {
        if (b > a.g.length << 5) {
            var c = Pf(b);
            c.set(a.g, 0);
            a.g = c
        }
    }
    s = Of.prototype;
    s.get = function(a) {
        return 0 != (this.g[a >> 5] & 1 << (a & 31))
    };
    s.set = function(a) {
        this.g[a >> 5] |= 1 << (a & 31)
    };
    s.K = function(a) {
        this.g[a >> 5] ^= 1 << (a & 31)
    };
    s.clear = function() {
        for (var a = this.g.length, b = 0; b < a; b++) this.g[b] = 0
    };

    function Sf(a, b) {
        Rf(a, a.e + 1);
        b && (a.g[a.e >> 5] |= 1 << (a.e & 31));
        a.e++
    }

    function X(a, b, c) {
        (0 > c || 32 < c) && i(Error());
        for (Rf(a, a.e + c); 0 < c; c--) Sf(a, 1 == (b >> c - 1 & 1))
    }

    function Tf(a, b) {
        var c = b.e;
        Rf(a, a.e + c);
        for (var d = 0; d < c; d++) Sf(a, b.get(d))
    }

    function Uf(a, b) {
        a.g.length != b.g.length && i(Error());
        for (var c = 0; c < a.g.length; c++) a.g[c] ^= b.g[c]
    }

    function Vf(a, b, c, d) {
        for (var e = 0; e < d; e++) {
            for (var f = 0, g = 0; 8 > g; g++) a.get(b) && (f |= 1 << 7 - g), b++;
            c[0 + e] = f
        }
    }

    function Pf(a) {
        return new Int32Array(a + 31 >> 5)
    }
    s.toString = function() {
        for (var a = [], b = 0; b < this.e; b++) 0 == (b & 7) && a.push(" "), a.push(this.get(b) ? "X" : ".");
        return a.join("")
    };

    function Wf() {
        this.kb = Ff;
        this.wc = [new U(Ff, [1])]
    }

    function Xf(a, b) {
        var c = a.wc;
        if (b >= c.length)
            for (var d = c[c.length - 1], e = c.length; e <= b; e++) d = zf(d, new U(a.kb, [1, a.kb.exp(e - 1)])), c.push(d);
        return c[b]
    }

    function Yf(a, b, c) {
        0 == c && i(Error("No error correction bytes"));
        var d = b.length - c;
        0 >= d && i(Error("No data bytes provided"));
        for (var e = Xf(a, c), f = b.slice(0, d), a = new U(a.kb, f), a = Bf(a, c, 1), e = Cf(a, e)[1].d, c = c - e.length, a = 0; a < c; a++) b[d + a] = 0;
        for (a = 0; a < e.length; ++a) b[d + c + a] = e[a]
    };

    function Zf(a, b) {
        this.Ac = a;
        this.Fc = b
    }

    function $f(a) {
        return a.Ac
    }

    function ag(a) {
        return a.Fc
    };

    function bg(a, b) {
        this.ha = a;
        this.ra = b;
        this.F = new Int8Array(a * b)
    }

    function cg(a) {
        return a.F
    }
    s = bg.prototype;
    s.a = q("ra");
    s.b = q("ha");
    s.get = function(a, b) {
        return this.F[this.ha * b + a]
    };
    s.set = function(a, b, c) {
        this.F[this.ha * b + a] = c
    };
    s.clear = function(a) {
        for (var b = 0; b < this.F.length; ++b) this.F[b] = a
    };
    s.toString = function() {
        for (var a = [], b = 0; b < this.ra; ++b) {
            for (var c = 0; c < this.ha; ++c) switch (this.get(c, b)) {
                case 0:
                    a.push(" 0");
                    break;
                case 1:
                    a.push(" 1");
                    break;
                default:
                    a.push("  ")
            }
            a.push("\n")
        }
        return a.join("")
    };

    function dg(a) {
        return eg(a, l) + eg(a, p)
    }

    function fg(a) {
        for (var b = 0, c = a.b(), d = a.a(), e = 0; e < d - 1; e++)
            for (var f = 0; f < c - 1; f++) {
                var g = a.get(f, e);
                g == a.get(f + 1, e) && (g == a.get(f, e + 1) && g == a.get(f + 1, e + 1)) && b++
            }
        return 3 * b
    }

    function gg(a) {
        for (var b = 0, c = a.b(), d = a.a(), e = cg(a), f = 0; f < d; f++)
            for (var g = c * f, h = 0; h < c; h++) {
                if (h + 6 < c && 1 == e[g + h] && 0 == e[g + h + 1] && 1 == e[g + h + 2] && 1 == e[g + h + 3] && 1 == e[g + h + 4] && 0 == e[g + h + 5] && 1 == e[g + h + 6] && (h + 10 < c && 0 == e[g + h + 7] && 0 == e[g + h + 8] && 0 == e[g + h + 9] && 0 == e[g + h + 10] || 0 <= h - 4 && 0 == e[g + h - 1] && 0 == e[g + h - 2] && 0 == e[g + h - 3] && 0 == e[g + h - 4])) b += 40;
                if (f + 6 < d && 1 == a.get(h, f) && 0 == a.get(h, f + 1) && 1 == a.get(h, f + 2) && 1 == a.get(h, f + 3) && 1 == a.get(h, f + 4) && 0 == a.get(h, f + 5) && 1 == a.get(h, f + 6) && (f + 10 < d && 0 == a.get(h, f + 7) && 0 == a.get(h, f + 8) && 0 == a.get(h, f + 9) && 0 == a.get(h, f + 10) || 0 <= f - 4 && 0 == a.get(h, f - 1) && 0 == a.get(h, f - 2) && 0 == a.get(h, f - 3) && 0 == a.get(h, f - 4))) b += 40
            }
        return b
    }

    function hg(a) {
        for (var b = 0, c = a.b(), d = a.a(), e = 0; e < d; e++)
            for (var f = 0; f < c; f++) 1 == a.get(f, e) && b++;
        return 10 * Math.floor(20 * Math.abs(b / (a.a() * a.b()) - 0.5))
    }

    function ig(a, b, c) {
        var d;
        switch (a) {
            case 0:
                d = c + b & 1;
                break;
            case 1:
                d = c & 1;
                break;
            case 2:
                d = b % 3;
                break;
            case 3:
                d = (c + b) % 3;
                break;
            case 4:
                d = (c >>> 1) + b / 3 & 1;
                break;
            case 5:
                a = c * b;
                d = (a & 1) + a % 3;
                break;
            case 6:
                a = c * b;
                d = (a & 1) + a % 3 & 1;
                break;
            case 7:
                d = c * b % 3 + (c + b & 1) & 1;
                break;
            default:
                i(Error("Invalid mask pattern: " + a))
        }
        return 0 == d
    }

    function eg(a, b) {
        for (var c = 0, d = b ? a.a() : a.b(), e = b ? a.b() : a.a(), f = 0; f < d; f++) {
            for (var g = 0, h = -1, j = 0; j < e; j++) {
                var m = b ? a.get(j, f) : a.get(f, j);
                m == h ? g++ : (5 <= g && (c += 3 + (g - 5)), g = 1, h = m)
            }
            5 < g && (c += 3 + (g - 5))
        }
        return c
    };

    function Y(a) {
        E.call(this, a)
    }
    A(Y, E);

    function jg() {}
    s = jg.prototype;
    s.Xb = n;
    s.Mb = n;
    s.oc = n;
    s.Wb = -1;
    s.N = n;
    s.oa = q("N");
    s.toString = function() {
        var a = [];
        a.push("<<\n");
        a.push(" mode: ");
        a.push(this.Xb.toString());
        a.push("\n ecLevel: ");
        a.push(this.Mb.toString());
        a.push("\n version: ");
        a.push(this.oc.toString());
        a.push("\n maskPattern: ");
        a.push(this.Wb);
        this.N == n ? a.push("\n matrix: null\n") : (a.push("\n matrix:\n"), a.push(this.N.toString()));
        a.push(">>\n");
        return a.join("")
    };

    function kg(a, b) {
        a.Xb = b
    }

    function lg(a, b) {
        a.Mb = b
    }
    s.setVersion = function(a) {
        this.oc = a
    };

    function mg(a, b) {
        a.Wb = b
    }

    function ng(a, b) {
        a.N = b
    }

    function og(a) {
        return 0 <= a && 8 > a
    };
    var pg = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1]
    ],
        qg = [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1]
        ],
        rg = [
            [-1, -1, -1, -1, -1, -1, -1],
            [6, 18, -1, -1, -1, -1, -1],
            [6, 22, -1, -1, -1, -1, -1],
            [6, 26, -1, -1, -1, -1, -1],
            [6, 30, -1, -1, -1, -1, -1],
            [6, 34, -1, -1, -1, -1, -1],
            [6, 22, 38, -1, -1, -1, -1],
            [6, 24, 42, -1, -1, -1, -1],
            [6, 26, 46, -1, -1, -1, -1],
            [6, 28, 50, -1, -1, -1, -1],
            [6, 30, 54, -1, -1, -1, -1],
            [6, 32, 58, -1, -1, -1, -1],
            [6, 34, 62, -1, -1, -1, -1],
            [6, 26, 46, 66, -1, -1, -1],
            [6,
                26, 48, 70, -1, -1, -1
            ],
            [6, 26, 50, 74, -1, -1, -1],
            [6, 30, 54, 78, -1, -1, -1],
            [6, 30, 56, 82, -1, -1, -1],
            [6, 30, 58, 86, -1, -1, -1],
            [6, 34, 62, 90, -1, -1, -1],
            [6, 28, 50, 72, 94, -1, -1],
            [6, 26, 50, 74, 98, -1, -1],
            [6, 30, 54, 78, 102, -1, -1],
            [6, 28, 54, 80, 106, -1, -1],
            [6, 32, 58, 84, 110, -1, -1],
            [6, 30, 58, 86, 114, -1, -1],
            [6, 34, 62, 90, 118, -1, -1],
            [6, 26, 50, 74, 98, 122, -1],
            [6, 30, 54, 78, 102, 126, -1],
            [6, 26, 52, 78, 104, 130, -1],
            [6, 30, 56, 82, 108, 134, -1],
            [6, 34, 60, 86, 112, 138, -1],
            [6, 30, 58, 86, 114, 142, -1],
            [6, 34, 62, 90, 118, 146, -1],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
        ],
        sg = [
            [8, 0],
            [8, 1],
            [8, 2],
            [8, 3],
            [8, 4],
            [8, 5],
            [8, 7],
            [8, 8],
            [7, 8],
            [5, 8],
            [4, 8],
            [3, 8],
            [2, 8],
            [1, 8],
            [0, 8]
        ];

    function tg(a) {
        a.clear(-1)
    }

    function ug(a, b, c, d, e) {
        tg(e);
        vg(c, e);
        wg(b, d, e);
        xg(c, e);
        yg(a, d, e)
    }

    function vg(a, b) {
        zg(b);
        Ag(b);
        Bg(a, b);
        Cg(b)
    }

    function wg(a, b, c) {
        var d = new Of;
        Dg(a, b, d);
        for (a = 0; a < W(d); ++a) {
            b = d.get(W(d) - 1 - a);
            c.set(sg[a][0], sg[a][1], b);
            if (8 > a) var e = c.b() - a - 1,
            f = 8;
            else e = 8, f = c.a() - 7 + (a - 8);
            c.set(e, f, b)
        }
    }

    function xg(a, b) {
        if (!(7 > Jd(a))) {
            var c = new Of;
            Eg(a, c);
            for (var d = 17, e = 0; 6 > e; ++e)
                for (var f = 0; 3 > f; ++f) {
                    var g = c.get(d);
                    d--;
                    b.set(e, b.a() - 11 + f, g);
                    b.set(b.a() - 11 + f, e, g)
                }
        }
    }

    function yg(a, b, c) {
        for (var d = 0, e = -1, f = c.b() - 1, g = c.a() - 1; 0 < f;) {
            for (6 == f && (f -= 1); 0 <= g && g < c.a();) {
                for (var h = 0; 2 > h; ++h) {
                    var j = f - h;
                    if (Fg(c.get(j, g))) {
                        var m;
                        d < W(a) ? (m = a.get(d), ++d) : m = p; - 1 != b && ig(b, j, g) && (m = !m);
                        c.set(j, g, m)
                    }
                }
                g += e
            }
            e = -e;
            g += e;
            f -= 2
        }
        d != W(a) && i(new Y("Not all bits consumed: " + d + "/" + W(a)))
    }

    function Gg(a) {
        for (var b = 0; 0 != a;) a >>>= 1, ++b;
        return b
    }

    function Hg(a, b) {
        for (var c = Gg(b), a = a << c - 1; Gg(a) >= c;) a ^= b << Gg(a) - c;
        return a
    }

    function Dg(a, b, c) {
        og(b) || i(new Y("Invalid mask pattern"));
        a = a.i << 3 | b;
        X(c, a, 5);
        X(c, Hg(a, 1335), 10);
        a = new Of;
        X(a, 21522, 15);
        Uf(c, a);
        15 != W(c) && i(new Y("should not happen but we got: " + W(c)))
    }

    function Eg(a, b) {
        X(b, Jd(a), 6);
        X(b, Hg(Jd(a), 7973), 12);
        18 != W(b) && i(new Y("should not happen but we got: " + W(b)))
    }

    function Fg(a) {
        return -1 == a
    }

    function Cg(a) {
        for (var b = 8; b < a.b() - 8; ++b) {
            var c = (b + 1) % 2;
            Fg(a.get(b, 6)) && a.set(b, 6, c);
            Fg(a.get(6, b)) && a.set(6, b, c)
        }
    }

    function Ag(a) {
        0 == a.get(8, a.a() - 8) && i(new Y);
        a.set(8, a.a() - 8, 1)
    }

    function Ig(a, b, c) {
        for (var d = 0; 8 > d; ++d) Fg(c.get(a + d, b)) || i(new Y), c.set(a + d, b, 0)
    }

    function Jg(a, b, c) {
        for (var d = 0; 7 > d; ++d) Fg(c.get(a, b + d)) || i(new Y), c.set(a, b + d, 0)
    }

    function Kg(a, b, c) {
        for (var d = 0; 5 > d; ++d)
            for (var e = 0; 5 > e; ++e) c.set(a + e, b + d, qg[d][e])
    }

    function Lg(a, b, c) {
        for (var d = 0; 7 > d; ++d)
            for (var e = 0; 7 > e; ++e) c.set(a + e, b + d, pg[d][e])
    }

    function zg(a) {
        var b = pg[0].length;
        Lg(0, 0, a);
        Lg(a.b() - b, 0, a);
        Lg(0, a.b() - b, a);
        Ig(0, 7, a);
        Ig(a.b() - 8, 7, a);
        Ig(0, a.b() - 8, a);
        Jg(7, 0, a);
        Jg(a.a() - 7 - 1, 0, a);
        Jg(7, a.a() - 7, a)
    }

    function Bg(a, b) {
        if (!(2 > Jd(a)))
            for (var c = Jd(a) - 1, d = rg[c], c = rg[c].length, e = 0; e < c; ++e)
                for (var f = 0; f < c; ++f) {
                    var g = d[e],
                        h = d[f]; - 1 == h || -1 == g || Fg(b.get(h, g)) && Kg(h - 2, g - 2, b)
                }
    };
    var Mg = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1];

    function Ng(a) {
        return dg(a) + fg(a) + gg(a) + hg(a)
    }

    function Og(a, b) {
        var c = n;
        c == n && (c = "UTF-8");
        var d = Pg(a, c),
            e = new Of;
        if (d == Te && "UTF-8" != c) {
            var f = Ne(c);
            f && Qg(f, e)
        }
        Rg(d, e);
        f = new Of;
        Sg(a, d, f, c);
        var c = W(e) + Ze(d, Qd(1)) + W(f),
            c = Tg(c, b),
            c = Tg(W(e) + Ze(d, c) + W(f), b),
            g = new Of;
        Tf(g, e);
        Ug(d == Te ? Qf(f) : a.length, c, d, g);
        Tf(g, f);
        e = Nd(c, b);
        f = Kd(c) - Hd(e);
        Vg(f, g);
        e = Wg(g, Kd(c), f, Id(e));
        f = new jg;
        lg(f, b);
        kg(f, d);
        f.setVersion(c);
        d = Ld(c);
        d = new bg(d, d);
        g = Xg(e, b, c, d);
        mg(f, g);
        ug(e, b, c, g, d);
        ng(f, d);
        return f
    }

    function Yg(a) {
        a = Number(a);
        return a < Mg.length ? Mg[a] : -1
    }

    function Pg(a, b) {
        if ("SHIFT_JIS" == b) return Zg(a) ? Ve : Te;
        for (var c = p, d = p, e = 0; e < a.length; ++e) {
            var f = a.charCodeAt(e);
            if (48 <= f && 57 >= f) c = l;
            else if (-1 != Yg(f)) d = l;
            else return Te
        }
        return d ? Re : c ? Qe : Te
    }

    function Zg(a) {
        var b = [];
        try {
            b = hf(a, "SHIFT_JIS")
        } catch (c) {
            return p
        }
        a = b.length;
        if (0 != a % 2) return p;
        for (var d = 0; d < a; d += 2) {
            var e = b[d] & 255;
            if ((129 > e || 159 < e) && (224 > e || 235 < e)) return p
        }
        return l
    }

    function Xg(a, b, c, d) {
        for (var e = Number.MAX_VALUE, f = -1, g = 0; 8 > g; g++) {
            ug(a, b, c, g, d);
            var h = Ng(d);
            h < e && (e = h, f = g)
        }
        return f
    }

    function Tg(a, b) {
        for (var c = 1; 40 >= c; c++) {
            var d = Qd(c);
            if (Kd(d) - Hd(Nd(d, b)) >= Math.floor((a + 7) / 8)) return d
        }
        i(new Y("Data too big"))
    }

    function Vg(a, b) {
        var c, d = a << 3;
        W(b) > d && i(new Y("data bits cannot fit in the QR Code" + W(b) + " > " + d));
        for (c = 0; 4 > c && W(b) < d; ++c) Sf(b, p);
        c = W(b) & 7;
        if (0 < c)
            for (; 8 > c; c++) Sf(b, p);
        var e = a - Qf(b);
        for (c = 0; c < e; ++c) X(b, 0 == (c & 1) ? 236 : 17, 8);
        W(b) != d && i(new Y("Bits size does not equal capacity"))
    }

    function $g(a, b, c, d, e, f) {
        d >= c && i(new Y("Block ID too large"));
        var g = a % c,
            h = c - g,
            j = Math.floor(a / c),
            b = Math.floor(b / c),
            m = b + 1,
            r = j - b,
            j = j + 1 - m;
        r != j && i(new Y("EC bytes mismatch"));
        c != h + g && i(new Y("RS blocks mismatch"));
        a != (b + r) * h + (m + j) * g && i(new Y("Total bytes mismatch"));
        d < h ? (e[0] = b, f[0] = r) : (e[0] = m, f[0] = j)
    }

    function Wg(a, b, c, d) {
        Qf(a) != c && i(new Y("Number of bits and data bytes does not match"));
        var e = 0,
            f = 0,
            g = 0,
            h = [],
            j;
        for (j = 0; j < d; ++j) {
            var m = [0],
                r = [0];
            $g(b, c, d, j, m, r);
            var t = m[0],
                u = Array(t);
            Vf(a, 8 * e, u, t);
            r = ah(u, r[0]);
            h.push(new Zf(u, r));
            f = Math.max(f, t);
            g = Math.max(g, r.length);
            e += m[0]
        }
        c != e && i(new Y("Data bytes does not match offset"));
        var w = new Of;
        for (j = 0; j < f; ++j) h.forEach(function(a) {
            a = $f(a);
            j < a.length && X(w, a[j], 8)
        });
        for (j = 0; j < g; ++j) h.forEach(function(a) {
            a = ag(a);
            j < a.length && X(w, a[j], 8)
        });
        b != Qf(w) && i(new Y("Interleaving error: " + b + " and " + Qf(w) + " differ."));
        return w
    }

    function ah(a, b) {
        var c = a.length,
            d = Array(c + b),
            e;
        for (e = 0; e < c; e++) d[e] = a[e] & 255;
        Yf(new Wf, d, b);
        var f = Array(b);
        for (e = 0; e < b; e++) f[e] = d[c + e];
        return f
    }

    function Rg(a, b) {
        X(b, a.i, 4)
    }

    function Ug(a, b, c, d) {
        b = Ze(c, b);
        a >= 1 << b && i(new Y(a + " is bigger than " + ((1 << b) - 1)));
        X(d, a, b)
    }

    function Sg(a, b, c, d) {
        switch (b) {
            case Qe:
                bh(a, c);
                break;
            case Re:
                ch(a, c);
                break;
            case Te:
                dh(a, c, d);
                break;
            case Ve:
                eh(a, c);
                break;
            default:
                i(new Y("Invalid mode: " + b))
        }
    }

    function bh(a, b) {
        for (var c = a.length, d = 0, e; d < c;) {
            var f = a.charCodeAt(d) - 48;
            d + 2 < c ? (e = a.charCodeAt(d + 1) - 48, X(b, 100 * f + 10 * e + (a.charCodeAt(d + 2) - 48), 10), d += 3) : d + 1 < c ? (e = a.charCodeAt(d + 1) - 48, X(b, 10 * f + e, 7), d += 2) : (X(b, f, 4), d++)
        }
    }

    function ch(a, b) {
        for (var c = a.length, d = 0; d < c;) {
            var e = Yg(a.charCodeAt(d)); - 1 == e && i(new Y);
            if (d + 1 < c) {
                var f = Yg(a.charCodeAt(d + 1)); - 1 == f && i(new Y);
                X(b, 45 * e + f, 11);
                d += 2
            } else X(b, e, 6), d++
        }
    }

    function dh(a, b, c) {
        var d;
        try {
            d = hf(a, c)
        } catch (e) {
            i(new Y(e))
        }
        d.forEach(function(a) {
            X(b, a, 8)
        })
    }

    function eh(a, b) {
        var c;
        try {
            c = hf(a, "Shift_JIS")
        } catch (d) {
            i(new Y(d))
        }
        for (var e = c.length, f = 0; f < e; f += 2) {
            var g = (c[f] & 255) << 8 | c[f + 1] & 255,
                h = -1;
            33088 <= g && 40956 >= g ? h = g - 33088 : 57408 <= g && 60351 >= g && (h = g - 49472); - 1 == h && i(new Y("Invalid byte sequence"));
            X(b, 192 * (h >> 8) + (h & 255), 13)
        }
    }

    function Qg(a, b) {
        X(b, Ue.i, 4);
        X(b, a, 8)
    };

    function fh(a) {
        this.source = a
    }

    function gh(a) {
        return a.source
    }
    fh.prototype.Na = aa();
    fh.prototype.b = function() {
        return this.source.width
    };
    fh.prototype.a = function() {
        return this.source.height
    };

    function hh(a) {
        fh.call(this, a);
        this.rb = new Uint8Array(0);
        this.Gb = new Uint8Array(ih)
    }
    A(hh, fh);
    var ih = 32;
    hh.prototype.Na = function() {
        var a = gh(this),
            b = a.b(),
            c = a.a(),
            d = new Yc(b, c),
            e, f, g, h;
        jh(this, b);
        var j = this.Gb;
        for (h = 1; 5 > h; h++) {
            e = od(a, c * h / 5, this.rb);
            var m = (b << 2) / 5;
            for (g = b / 5; g < m; g++) f = e[g] & 255, j[f >> 3]++
        }
        j = kh(j);
        e = a.oa();
        for (h = 0; h < c; h++) {
            a = h * b;
            for (g = 0; g < b; g++) f = e[a + g] & 255, f < j && d.set(g, h)
        }
        return d
    };

    function jh(a, b) {
        a.rb.length < b && (a.rb = new Uint8Array(b));
        for (var c = 0; c < ih; c++) a.Gb[c] = 0
    }

    function kh(a) {
        var b, c, d = a.length,
            e = 0,
            f = 0,
            g = 0;
        for (b = 0; b < d; b++) a[b] > g && (f = b, g = a[b]), a[b] > e && (e = a[b]);
        var h = g = 0;
        for (b = 0; b < d; b++) c = b - f, c *= a[b] * c, c > h && (g = b, h = c);
        f > g && (b = f, f = g, g = b);
        g - f <= d >> 4 && i(new M);
        d = g - 1;
        h = -1;
        for (b = g - 1; b > f; b--) c = b - f, c = c * c * (g - b) * (e - a[b]), c > h && (d = b, h = c);
        return d << 3
    };

    function lh(a, b) {
        this.xd = a;
        this.yb = b;
        this.data = new Int32Array(a * b)
    }

    function mh(a, b, c) {
        return a.data[a.yb * b + c]
    }

    function nh(a, b, c, d) {
        a.data[a.yb * b + c] = d
    };

    function oh(a) {
        hh.call(this, a)
    }
    A(oh, hh);
    oh.prototype.Na = function() {
        if (this.N != n) return this.N;
        var a = gh(this),
            b = a.b(),
            c = a.a();
        if (40 <= b && 40 <= c) {
            var a = a.oa(),
                d = b >> 3;
            0 != (b & 7) && d++;
            var e = c >> 3;
            0 != (c & 7) && e++;
            var f = ph(a, d, e, b, c),
                g = new Yc(b, c);
            qh(a, d, e, b, c, f, g);
            this.N = g
        } else this.N = oh.P.Na.call(this);
        return this.N
    };

    function qh(a, b, c, d, e, f, g) {
        for (var h = 0; h < c; h++) {
            var j = h << 3,
                m = e - 8;
            j > m && (j = m);
            for (m = 0; m < b; m++) {
                var r = m << 3,
                    t = d - 8;
                r > t && (r = t);
                for (var t = rh(m, b - 3), u = rh(h, c - 3), w = 0, x = -2; 2 >= x; x++) var D = (u + x) * f.yb,
                Z = f.data, w = w + (Z[D + t - 2] + Z[D + t - 1] + Z[D + t] + Z[D + t + 1] + Z[D + t + 2]);
                sh(a, r, j, w / 25, d, g)
            }
        }
    }

    function rh(a, b) {
        return 2 > a ? 2 : a > b ? b : a
    }

    function sh(a, b, c, d, e, f) {
        for (var g = 0, h = c * e + b; 8 > g; g++, h += e)
            for (var j = 0; 8 > j; j++)(a[h + j] & 255) <= d && f.set(b + j, c + g)
    }

    function ph(a, b, c, d, e) {
        for (var f, g = new lh(c, b), h = 0; h < c; h++) {
            var j = h << 3,
                m = e - 8;
            j > m && (j = m);
            for (m = 0; m < b; m++) {
                f = m << 3;
                var r = d - 8;
                f > r && (f = r);
                for (var t = 0, r = 255, u = 0, w = 0, x = j * d + f; 8 > w; w++, x += d) {
                    for (f = 0; 8 > f; f++) {
                        var D = a[x + f] & 255,
                            t = t + D;
                        D < r && (r = D);
                        D > u && (u = D)
                    }
                    if (24 < u - r) {
                        w++;
                        for (x += d; 8 > w; w++, x += d)
                            for (f = 0; 8 > f; f++) t += a[x + f] & 255
                    }
                }
                t >>= 6;
                24 >= u - r && (t = r >> 1, 0 < h && 0 < m && (u = mh(g, h - 1, m) + 2 * mh(g, h, m - 1) + mh(g, h - 1, m - 1) >> 2, r < u && (t = u)));
                nh(g, h, m, t)
            }
        }
        return g
    };

    function th(a) {
        a = uh(a);
        return (new oh(a)).Na()
    }

    function uh(a) {
        for (var b = pd(a.width, a.height), c = b.data, a = a.data, d = 0; d < c.length; ++d) {
            var e = 4 * d;
            c[d] = (33 * a[e] + 34 * a[e + 1] + 33 * a[e + 2]) / 100
        }
        return b
    };
    var vh = n;

    function wh() {
        vh || (vh = new Hc);
        return vh
    }

    function xh(a, b) {
        var c;
        try {
            c = yh(a, b)
        } catch (d) {
            c = new Rc(d), d instanceof K || i(d)
        }
        return c
    }

    function yh(a, b) {
        var c;
        c = a instanceof hc ? a : th(a);
        c = ee(new Vd(c, b));
        var d = Nf(c.i);
        return new Rc(d, c.Yc)
    }
    z("w69b.qr.decoding.decode", function(a, b, c) {
        var d = new Image;
        d.onload = function() {
            var a = ac(d, 700);
            if (c && Pc()) {
                var f = wh();
                Lc(f, a.width, a.height);
                f.W(a);
                a = Nc(f)
            }
            a = xh(a);
            b(a)
        };
        d.src = a
    });

    function zh(a) {
        this.J = a;
        this.c = a.getContext("2d");
        this.cb = "rgb(255, 255, 255)";
        this.jb = "rgb(0, 0, 0)"
    }
    zh.prototype.lb = function(a, b) {
        this.J.width = a;
        this.J.height = b;
        this.c.fillStyle = this.cb;
        this.c.fillRect(0, 0, a, b)
    };
    zh.prototype.mb = function(a, b, c, d) {
        this.c.fillStyle = this.jb;
        this.c.fillRect(a, b, c, d)
    };

    function Ah() {
        this.f = [];
        this.rc = "1 1 1";
        this.Hc = "0 0 0";
        this.cc = n;
        this.ha = this.ra = 0
    }
    s = Ah.prototype;
    s.Db = function(a, b) {
        this.f.push("%!PS-Adobe-3.0 EPSF-3.0");
        this.f.push("%%BoundingBox: 0 0 " + a + " " + b);
        this.ha = a;
        this.ra = b
    };
    s.Da = function(a, b, c, d, e) {
        this.cc != e && (this.f.push(e + " setrgbcolor"), this.cc = e);
        b = this.ra - b;
        this.f.push(a + " " + b + " moveto");
        this.f.push("0 " + -d + " rlineto " + c + " 0 rlineto 0 " + d + " rlineto closepath");
        this.f.push("fill")
    };
    s.lb = function(a, b) {
        this.Db(a, b);
        this.Da(0, 0, a, b, this.rc)
    };
    s.mb = function(a, b, c, d) {
        this.Da(a, b, c, d, this.Hc)
    };
    s.toString = function() {
        return this.f.join("\n")
    };

    function Bh() {
        this.f = [];
        this.cb = "white";
        this.jb = "black"
    }
    s = Bh.prototype;
    s.Db = function(a, b) {
        this.f.push('<?xml version="1.0" encoding="UTF-8"?>');
        this.f.push('<svg version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="' + a + '" height="' + b + '">')
    };
    s.Da = function(a, b, c, d, e) {
        this.f.push('<rect shape-rendering="optimizeSpeed"  x="' + a + '" y="' + b + '" width="' + c + '" height="' + d + '" fill="' + e + '" />')
    };
    s.lb = function(a, b) {
        this.Db(a, b);
        this.Da(0, 0, a, b, this.cb)
    };
    s.mb = function(a, b, c, d) {
        this.Da(a, b, c, d, this.jb)
    };
    s.toString = function() {
        return this.f.join("\n") + "</svg>"
    };

    function Ch(a, b, c, d, e) {
        var a = a.oa(),
            f = a.b(),
            g = a.a(),
            h = f + (e << 1),
            j = g + (e << 1),
            c = Math.max(c, h),
            e = Math.max(d, j),
            d = Math.floor(Math.min(c / h, e / j)),
            h = c - f * d >> 1,
            j = e - g * d >> 1;
        b.lb(c, e);
        c = 0;
        for (e = j; c < g; c++, e += d)
            for (var j = 0, m = h; j < f; j++, m += d) 1 == a.get(j, c) && b.mb(m, e, d, d)
    };
    var Dh = n,
        Eh = n,
        Fh = n;

    function Gh(a, b) {
        var c = n;
        b && (c = le(b));
        c = c || ge;
        if (Dh == a && Eh == c) return Fh;
        var d = Og(a, c);
        Dh = a;
        Eh = c;
        return Fh = d
    }
    z("w69b.qr.encoding.drawOnCanvas", function(a, b, c, d) {
        a = Gh(a, d);
        c = ea(c) ? c : 4;
        d = new zh(b);
        Ch(a, d, b.width, b.height, c)
    });
    z("w69b.qr.encoding.drawAsSVG", function(a, b, c, d) {
        a = Gh(a, d);
        d = new Bh;
        Ch(a, d, b, b, ea(c) ? c : 4);
        return d.toString()
    });
    z("w69b.qr.encoding.drawAsEPS", function(a, b, c, d) {
        a = Gh(a, d);
        d = new Ah;
        Ch(a, d, b, b, ea(c) ? c : 4);
        return d.toString()
    });
    z("w69b.qr.encoding.getSize", function(a, b) {
        return Gh(a, b).oa().b()
    });
    var Hh, Ih = !G || mb();
    !gb && !G || G && mb() || gb && H("1.9.1");
    G && H("9");

    function Jh(a) {
        a = a.className;
        return y(a) && a.match(/\S+/g) || []
    }

    function Kh(a, b) {
        var c = Jh(a),
            d = Xa(arguments, 1),
            e = c.length + d.length;
        Lh(c, d);
        a.className = c.join(" ");
        return c.length == e
    }

    function Lh(a, b) {
        for (var c = 0; c < b.length; c++) Ra(a, b[c]) || a.push(b[c])
    };

    function Mh(a) {
        return a ? new Nh(Oh(a)) : Hh || (Hh = new Nh)
    }

    function Ph(a, b) {
        wb(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Qh ? a.setAttribute(Qh[d], b) : Ca(d, "aria-") || Ca(d, "data-") ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var Qh = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Rh(a, b) {
        var c = b[0],
            d = b[1];
        if (!Ih && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', Ea(d.name), '"');
            if (d.type) {
                c.push(' type="', Ea(d.type), '"');
                var e = {};
                Bb(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (y(d) ? c.className = d : ja(d) ? Kh.apply(n, [c].concat(d)) : Ph(c, d));
        2 < b.length && Sh(a, c, b, 2);
        return c
    }

    function Sh(a, b, c, d) {
        function e(c) {
            c && b.appendChild(y(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            ka(f) && !Th(f) ? Pa(Uh(f) ? Wa(f) : f, e) : e(f)
        }
    }

    function Vh() {
        return document.createElement("SCRIPT")
    }

    function Wh(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function Th(a) {
        return na(a) && 0 < a.nodeType
    }

    function Oh(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Uh(a) {
        if (a && "number" == typeof a.length) {
            if (na(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (ma(a)) return "function" == typeof a.item
        }
        return p
    }

    function Nh(a) {
        this.la = a || v.document || document
    }
    s = Nh.prototype;
    s.Qb = Mh;

    function Xh(a) {
        return a.la
    }
    s.nb = function(a) {
        return y(a) ? this.la.getElementById(a) : a
    };
    s.Ja = function(a, b, c) {
        return Rh(this.la, arguments)
    };
    s.createElement = function(a) {
        return this.la.createElement(a)
    };
    s.createTextNode = function(a) {
        return this.la.createTextNode(a)
    };
    s.appendChild = function(a, b) {
        a.appendChild(b)
    };
    s.append = function(a, b) {
        Sh(Oh(a), a, arguments, 1)
    };

    function Yh(a) {
        C.call(this);
        this.Jc = a;
        this.qb = []
    }
    A(Yh, C);
    var Zh = [];

    function $h(a, b, c) {
        var d = window;
        ja(b) || (Zh[0] = b, b = Zh);
        for (var e = 0; e < b.length; e++) {
            var f = Fb(d, b[e], c || a, p, a.Jc || a);
            a.qb.push(f)
        }
    }

    function ai(a) {
        Pa(a.qb, Nb);
        a.qb.length = 0
    }
    Yh.prototype.n = function() {
        Yh.P.n.call(this);
        ai(this)
    };
    Yh.prototype.handleEvent = function() {
        i(Error("EventHandler.handleEvent not implemented"))
    };

    function bi() {
        C.call(this)
    }
    A(bi, C);
    s = bi.prototype;
    s.Ib = l;
    s.vb = n;

    function Tb(a) {
        return a.vb
    }
    s.xb = function(a) {
        this.vb = a
    };
    s.addEventListener = function(a, b, c, d) {
        Fb(this, a, b, c, d)
    };
    s.removeEventListener = function(a, b, c, d) {
        Lb(this, a, b, c, d)
    };
    s.dispatchEvent = function(a) {
        return Sb(this, a)
    };
    s.n = function() {
        bi.P.n.call(this);
        Pb(this);
        this.vb = n
    };

    function ci() {}(function() {
        ci.Rb = function() {
            return ci.Tb ? ci.Tb : ci.Tb = new ci
        }
    })();
    ci.prototype.Qc = 0;

    function di(a) {
        return ":" + (a.Qc++).toString(36)
    }
    ci.Rb();

    function ei(a) {
        bi.call(this);
        this.ib = a || Mh();
        this.bd = fi
    }
    A(ei, bi);
    ei.prototype.Kc = ci.Rb();
    var fi = n;
    s = ei.prototype;
    s.Sb = n;
    s.ta = p;
    s.D = n;
    s.bd = n;
    s.Mc = n;
    s.O = n;
    s.Ia = n;
    s.Ha = n;
    s.od = p;

    function gi(a) {
        return a.Sb || (a.Sb = di(a.Kc))
    }
    s.nb = q("D");

    function hi(a, b) {
        a.D = b
    }

    function ii(a) {
        return a.ca || (a.ca = new Yh(a))
    }

    function ji(a) {
        a == n && i(Error("Unable to set parent component"));
        a.O = n;
        ei.P.xb.call(a, n)
    }
    s.xb = function(a) {
        this.O && this.O != a && i(Error("Method not supported"));
        ei.P.xb.call(this, a)
    };
    s.Qb = q("ib");

    function ki(a) {
        return a.ta
    }
    s.Ja = function() {
        this.D = this.ib.createElement("div")
    };
    s.W = function(a) {
        li(this, a)
    };

    function li(a, b) {
        a.ta && i(Error("Component already rendered"));
        a.D || a.Ja();
        b ? b.insertBefore(a.D, n) : Xh(a.ib).body.appendChild(a.D);
        (!a.O || ki(a.O)) && a.Ma()
    }
    s.Ma = function() {
        this.ta = l;
        mi(this, function(a) {
            !ki(a) && a.nb() && a.Ma()
        })
    };

    function ni(a) {
        mi(a, function(a) {
            ki(a) && ni(a)
        });
        a.ca && ai(a.ca);
        a.ta = p
    }
    s.n = function() {
        ei.P.n.call(this);
        this.ta && ni(this);
        this.ca && (this.ca.S(), delete this.ca);
        mi(this, function(a) {
            a.S()
        });
        !this.od && this.D && Wh(this.D);
        this.O = this.Mc = this.D = this.Ha = this.Ia = n
    };

    function oi(a, b) {
        return a.Ha && b ? yb(a.Ha, b) || n : n
    }

    function mi(a, b) {
        a.Ia && Pa(a.Ia, b, k)
    }
    s.removeChild = function(a, b) {
        if (a) {
            var c = y(a) ? a : gi(a),
                a = oi(this, c);
            c && a && (xb(this.Ha, c), Ta(this.Ia, a), b && (ni(a), a.D && Wh(a.D)), ji(a))
        }
        a || i(Error("Child is not in parent component"));
        return a
    };
    aa()();
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    function pi(a, b) {
        this.Ta = [];
        this.wd = a;
        this.Cc = b || n
    }
    s = pi.prototype;
    s.Ob = p;
    s.pa = p;
    s.eb = p;
    s.tc = p;
    s.kc = p;
    s.vc = 0;
    s.Hb = function(a, b) {
        this.eb = p;
        qi(this, a, b)
    };

    function qi(a, b, c) {
        a.Ob = l;
        a.fa = c;
        a.pa = !b;
        ri(a)
    }

    function si(a) {
        ti(a) && (a.kc || i(new ui(a)), a.kc = p)
    }

    function vi(a) {
        si(a);
        qi(a, l, n)
    }

    function wi(a, b) {
        si(a);
        qi(a, p, b)
    }

    function xi(a, b, c) {
        yi(a, b, n, c)
    }

    function yi(a, b, c, d) {
        a.Ta.push([b, c, d]);
        ti(a) && ri(a)
    }

    function ti(a) {
        return a.Ob
    }
    s.Qa = function(a) {
        return a instanceof Error
    };

    function zi(a) {
        return Qa(a.Ta, function(a) {
            return ma(a[1])
        })
    }

    function ri(a) {
        a.Bb && (ti(a) && zi(a)) && (v.clearTimeout(a.Bb), delete a.Bb);
        a.O && (a.O.vc--, delete a.O);
        for (var b = a.fa, c = p, d = p; a.Ta.length && !a.eb;) {
            var e = a.Ta.shift(),
                f = e[0],
                g = e[1],
                e = e[2];
            if (f = a.pa ? g : f) try {
                var h = f.call(e || a.Cc, b);
                ea(h) && (a.pa = a.pa && (h == b || a.Qa(h)), a.fa = b = h);
                b instanceof pi && (d = l, a.eb = l)
            } catch (j) {
                b = j, a.pa = l, zi(a) || (c = l)
            }
        }
        a.fa = b;
        d && (yi(b, ta(a.Hb, a, l), ta(a.Hb, a, p)), b.tc = l);
        c && (a.Bb = v.setTimeout(function() {
            i(b)
        }, 0))
    }

    function ui(a) {
        E.call(this);
        this.ud = a
    }
    A(ui, E);
    ui.prototype.message = "Deferred has already fired";
    ui.prototype.name = "AlreadyCalledError";

    function Ai(a) {
        var b = {}, c = b.document || document,
            d = Vh(),
            e = {
                hc: d,
                mc: k
            }, f = new pi(Bi, e),
            g = n,
            h = ga(b.timeout) ? b.timeout : 5E3;
        0 < h && (g = window.setTimeout(function() {
            Ci(d, l);
            wi(f, new Di(Ei, "Timeout reached for loading script " + a))
        }, h), e.mc = g);
        d.onload = d.onreadystatechange = function() {
            if (!d.readyState || "loaded" == d.readyState || "complete" == d.readyState) Ci(d, b.sd || p, g), vi(f)
        };
        d.onerror = function() {
            Ci(d, l, g);
            wi(f, new Di(Fi, "Error while loading script " + a))
        };
        Ph(d, {
            type: "text/javascript",
            charset: "UTF-8",
            src: a
        });
        Gi(c).appendChild(d);
        return f
    }

    function Gi(a) {
        var b = a.getElementsByTagName("HEAD");
        return !b || Sa(b) ? a.documentElement : b[0]
    }

    function Bi() {
        if (this && this.hc) {
            var a = this.hc;
            a && "SCRIPT" == a.tagName && Ci(a, l, this.mc)
        }
    }

    function Ci(a, b, c) {
        ga(c) && v.clearTimeout(c);
        a.onload = ha;
        a.onerror = ha;
        a.onreadystatechange = ha;
        b && window.setTimeout(function() {
            Wh(a)
        }, 0)
    }
    var Fi = 0,
        Ei = 1;

    function Di(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        E.call(this, c);
        this.code = a
    }
    A(Di, E);

    function Hi() {
        var a = Ii,
            a = a.slice(0, a.lastIndexOf("/") + 1);
        /^\/+$/.test(a) || (a = a.replace(/\/+$/, ""));
        return a
    };
    z("w69b.qr.WorkerMessageType", {
        pd: "success",
        qd: "notfound",
        rd: "pattern"
    });
    z("w69b.qr.WorkerMessageType.DECODED", "success");
    z("w69b.qr.WorkerMessageType.NOTFOUND", "notfound");

    function Ji() {
        var a = Ii;
        a || i(Error("missing worker url setup"));
        (this.nc = Ki()) ? (this.ia = new Worker(a), window.console.log("using worker"), this.ia.addEventListener("message", this.Uc.bind(this)), Li && this.ia.postMessage({
            setIconvUrl: Li
        })) : (window.console.log("using fallback"), this.ia = n);
        this.fb = n
    }
    Ji.prototype.nd = l;
    var Ii = "",
        Li = n;

    function Ki() {
        return hb || gb
    }
    Ji.prototype.Uc = function(a) {
        if (this.fb) {
            var b = a.data[0];
            "ffmemoryhack" != b && ((a = a.data[1]) && (a = window.JSON.parse(a)), this.fb(b, a))
        }
    };
    Ji.prototype.Ka = function(a, b) {
        var c = p;
        this.nd && (!this.Ca && Pc() && (this.Ca = new Hc), this.Ca && (Lc(this.Ca, a.width, a.height), this.Ca.W(a), a = Nc(this.Ca), c = l));
        if (this.nc) {
            var d = a.data.buffer,
                c = {
                    width: a.width,
                    height: a.height,
                    buffer: d,
                    isBinary: c
                };
            this.fb = b;
            this.ia.postMessage(c, [d]);
            a.data = n
        } else Mi(this, a, b)
    };

    function Mi(a, b, c) {
        try {
            var d = xh(b, function(a) {
                c("pattern", a.toJSON())
            }.bind(a))
        } catch (e) {
            if (e instanceof Qc && !self.iconv && Li) {
                d = Li;
                !Ca(d, "http://") && !Ca(d, "https://") && (d = Hi() + "/" + d);
                xi(Ai(d), function() {
                    Mi(this, b, c)
                }, a);
                return
            }
            i(e)
        }
        d.Qa() ? c("notfound") : c("success", d.toJSON());
        delete b.data
    }
    z("w69b.qr.DecodeInWorkerHelper", Ji);
    z("w69b.qr.DecodeInWorkerHelper.prototype.decode", Ji.prototype.Ka);
    z("w69b.qr.DecodeInWorkerHelper.setWorkerUrl", function(a) {
        Ii = a
    });
    z("w69b.qr.DecodeInWorkerHelper.setIconvUrl", function(a) {
        Li = a
    });

    function Ni(a, b, c) {
        this.x = a;
        this.y = b;
        this.size = c || 4;
        this.sc = (new Date).getTime()
    }

    function $() {
        ei.call(this);
        this.Ga = new cc;
        this.ia = new Ji;
        this.aa = [];
        this.Vb = n;
        this.e = new Wb(200, 200);
        this.ka = new Wb(200, 200);
        this.Kb = ha
    }
    A($, ei);
    s = $.prototype;
    s.Ya = n;
    s.pc = n;
    s.aa = n;
    s.Pa = p;
    s.tb = 0;
    s.sb = 500;
    s.Lc = 500;
    s.ab = 0;
    s.Ab = 0;
    s.Aa = p;
    s.cd = function(a) {
        this.Kb = a
    };
    s.ic = function(a, b) {
        this.e.width = a;
        this.e.height = b;
        this.ka = this.e.m();
        Oi(this)
    };
    s.Cb = function() {
        var a = window.devicePixelRatio || 1,
            a = 1,
            b = this.nb();
        this.e.width = b.clientWidth * a;
        this.e.height = b.clientHeight * a;
        this.ka = this.e.m();
        Oi(this)
    };
    s.ed = function(a) {
        this.tb = a;
        Oi(this)
    };
    s.dd = function(a) {
        this.sb = a;
        Oi(this)
    };
    s.fd = function(a) {
        a = !! a;
        a != this.Aa && ((this.Aa = a) || Pi(this))
    };
    s.Ja = function() {
        this.Ya = this.Qb().Ja("canvas");
        this.pc = this.Ya.getContext("2d");
        hi(this, this.Ya);
        this.Ga.start(this.ub.bind(this))
    };
    s.ub = function() {
        if (!this.Aa) {
            Qi(this);
            this.Vb = (new Date).getTime();
            if (!this.Pa) {
                var a = this.Ga.getImageData(this.ka);
                a != n && this.ia.Ka(a, this.Rc.bind(this))
            }
            Pi(this)
        }
    };

    function Oi(a) {
        a.tb && bc(a.e, a.tb);
        a.sb && bc(a.ka, a.sb)
    }

    function Qi(a) {
        var b = a.e,
            c = a.Ya;
        if (c.width != b.width || c.height != b.height) c.width = b.width, c.height = b.height;
        b = a.pc;
        gc(a.Ga, c, b);
        for (var c = a.e.width / a.ka.width, d = a.Lc, e = (new Date).getTime(), f = 0; f < a.aa.length; ++f) {
            var g = a.aa[f],
                h = e - g.sc;
            if (!(h >= d)) {
                var h = (d - h) / d,
                    j = g.x * c,
                    m = g.y * c,
                    g = g.size * c * h;
                b.fillStyle = "rgba(200,255,50," + h + ")";
                b.beginPath();
                b.arc(j, m, g, 0, 2 * Math.PI, p);
                b.fill()
            }
        }
    }

    function Pi(a) {
        var b = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame;
        if (b) a.ab = b.call(window, a.ub.bind(a));
        else {
            var b = (new Date).getTime() - a.Vb,
                c = 0;
            40 > b && (c = 40 - b);
            a.Ab = window.setTimeout(a.ub.bind(a), c)
        }
    }
    s.Rc = function(a, b) {
        if (this.Aa) this.Pa = p;
        else switch (a) {
            case "success":
                b.patterns.forEach(this.Eb, this);
                Ri(this, b.text);
                this.Pa = p;
                break;
            case "notfound":
                this.Pa = p;
                break;
            case "pattern":
                this.Eb(b)
        }
    };

    function Ri(a, b) {
        a.Kb(b)
    }
    s.Eb = function(a) {
        this.aa.unshift(new Ni(a.x, a.y, a.size));
        this.aa.splice(9, this.aa.length - 10)
    };
    s.Ma = function() {
        $.P.Ma.call(this);
        this.Cb();
        $h(ii(this), "resize", this.Cb);
        $h(ii(this), "orientationchange", this.Cb)
    };
    s.n = function() {
        $.P.n.call(this);
        this.Aa = l;
        this.Ga.S();
        if (this.ab) {
            var a = window.cancelAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame;
            a && a.call(window, this.ab)
        }
        this.Ab && window.clearTimeout(this.Ab)
    };
    z("w69b.qr.ui.ContinuousScanner", $);
    z("w69b.qr.ui.ContinuousScanner.prototype.render", $.prototype.W);
    z("w69b.qr.ui.ContinuousScanner.prototype.setMaxVisualizationResolution", $.prototype.ed);
    z("w69b.qr.ui.ContinuousScanner.prototype.setMaxDecodingResolution", $.prototype.dd);
    z("w69b.qr.ui.ContinuousScanner.prototype.dispose", $.prototype.S);
    z("w69b.qr.ui.ContinuousScanner.prototype.setDecodedCallback", $.prototype.cd);
    z("w69b.qr.ui.ContinuousScanner.prototype.setStopped", $.prototype.fd);
    z("w69b.qr.ui.ContinuousScanner.isSupported", function() {
        if (!dc) return p;
        var a = db() || "",
            b = /Chrome\/(\d+)/.exec(a);
        return b && 21 > b[1] ? p : (b = /Firefox\/(\d+)/.exec(a)) && (20 > b[1] || 24 > b[1] && (Ka(a, "Android") || Ka(a, "iPhone") || Ka(a, "iPad"))) ? p : l
    });
})();
(function() {
    var n = this,
        t = n._,
        r = {}, e = Array.prototype,
        u = Object.prototype,
        i = Function.prototype,
        a = e.push,
        o = e.slice,
        c = e.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        s = e.forEach,
        p = e.map,
        h = e.reduce,
        v = e.reduceRight,
        d = e.filter,
        g = e.every,
        m = e.some,
        y = e.indexOf,
        b = e.lastIndexOf,
        x = Array.isArray,
        _ = Object.keys,
        j = i.bind,
        w = function(n) {
            return n instanceof w ? n : this instanceof w ? (this._wrapped = n, void 0) : new w(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : n._ = w, w.VERSION = "1.4.4";
    var A = w.each = w.forEach = function(n, t, e) {
        if (null != n)
            if (s && n.forEach === s) n.forEach(t, e);
            else
        if (n.length === +n.length) {
            for (var u = 0, i = n.length; i > u; u++)
                if (t.call(e, n[u], u, n) === r) return
        } else
            for (var a in n)
                if (w.has(n, a) && t.call(e, n[a], a, n) === r) return
    };
    w.map = w.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e[e.length] = t.call(r, n, u, i)
        }), e)
    };
    var O = "Reduce of empty array with no initial value";
    w.reduce = w.foldl = w.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h) return e && (t = w.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
        }), !u) throw new TypeError(O);
        return r
    }, w.reduceRight = w.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v) return e && (t = w.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = w.keys(n);
            i = a.length
        }
        if (A(n, function(o, c, l) {
            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
        }), !u) throw new TypeError(O);
        return r
    }, w.find = w.detect = function(n, t, r) {
        var e;
        return E(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, w.filter = w.select = function(n, t, r) {
        var e = [];
        return null == n ? e : d && n.filter === d ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && (e[e.length] = n)
        }), e)
    }, w.reject = function(n, t, r) {
        return w.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, w.every = w.all = function(n, t, e) {
        t || (t = w.identity);
        var u = !0;
        return null == n ? u : g && n.every === g ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !! u)
    };
    var E = w.some = w.any = function(n, t, e) {
        t || (t = w.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !! u)
    };
    w.contains = w.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : E(n, function(n) {
            return n === t
        })
    }, w.invoke = function(n, t) {
        var r = o.call(arguments, 2),
            e = w.isFunction(t);
        return w.map(n, function(n) {
            return (e ? t : n[t]).apply(n, r)
        })
    }, w.pluck = function(n, t) {
        return w.map(n, function(n) {
            return n[t]
        })
    }, w.where = function(n, t, r) {
        return w.isEmpty(t) ? r ? null : [] : w[r ? "find" : "filter"](n, function(n) {
            for (var r in t)
                if (t[r] !== n[r]) return !1;
            return !0
        })
    }, w.findWhere = function(n, t) {
        return w.where(n, t, !0)
    }, w.max = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.max.apply(Math, n);
        if (!t && w.isEmpty(n)) return -1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a >= e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.min = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.min.apply(Math, n);
        if (!t && w.isEmpty(n)) return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            e.computed > a && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.shuffle = function(n) {
        var t, r = 0,
            e = [];
        return A(n, function(n) {
            t = w.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    };
    var k = function(n) {
        return w.isFunction(n) ? n : function(t) {
            return t[n]
        }
    };
    w.sortBy = function(n, t, r) {
        var e = k(t);
        return w.pluck(w.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return -1
            }
            return n.index < t.index ? -1 : 1
        }), "value")
    };
    var F = function(n, t, r, e) {
        var u = {}, i = k(t || w.identity);
        return A(n, function(t, a) {
            var o = i.call(r, t, a, n);
            e(u, o, t)
        }), u
    };
    w.groupBy = function(n, t, r) {
        return F(n, t, r, function(n, t, r) {
            (w.has(n, t) ? n[t] : n[t] = []).push(r)
        })
    }, w.countBy = function(n, t, r) {
        return F(n, t, r, function(n, t) {
            w.has(n, t) || (n[t] = 0), n[t]++
        })
    }, w.sortedIndex = function(n, t, r, e) {
        r = null == r ? w.identity : k(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            u > r.call(e, n[o]) ? i = o + 1 : a = o
        }
        return i
    }, w.toArray = function(n) {
        return n ? w.isArray(n) ? o.call(n) : n.length === +n.length ? w.map(n, w.identity) : w.values(n) : []
    }, w.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : w.keys(n).length
    }, w.first = w.head = w.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, w.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, w.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, w.rest = w.tail = w.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, w.compact = function(n) {
        return w.filter(n, w.identity)
    };
    var R = function(n, t, r) {
        return A(n, function(n) {
            w.isArray(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
        }), r
    };
    w.flatten = function(n, t) {
        return R(n, t, [])
    }, w.without = function(n) {
        return w.difference(n, o.call(arguments, 1))
    }, w.uniq = w.unique = function(n, t, r, e) {
        w.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? w.map(n, r, e) : n,
            i = [],
            a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : w.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, w.union = function() {
        return w.uniq(c.apply(e, arguments))
    }, w.intersection = function(n) {
        var t = o.call(arguments, 1);
        return w.filter(w.uniq(n), function(n) {
            return w.every(t, function(t) {
                return w.indexOf(t, n) >= 0
            })
        })
    }, w.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return w.filter(n, function(n) {
            return !w.contains(t, n)
        })
    }, w.zip = function() {
        for (var n = o.call(arguments), t = w.max(w.pluck(n, "length")), r = Array(t), e = 0; t > e; e++) r[e] = w.pluck(n, "" + e);
        return r
    }, w.object = function(n, t) {
        if (null == n) return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, w.indexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = 0,
            u = n.length;
        if (r) {
            if ("number" != typeof r) return e = w.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++)
            if (n[e] === t) return e;
        return -1
    }, w.lastIndexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;)
            if (n[u] === t) return u;
        return -1
    }, w.range = function(n, t, r) {
        1 >= arguments.length && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u;) i[u++] = n, n += r;
        return i
    }, w.bind = function(n, t) {
        if (n.bind === j && j) return j.apply(n, o.call(arguments, 1));
        var r = o.call(arguments, 2);
        return function() {
            return n.apply(t, r.concat(o.call(arguments)))
        }
    }, w.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            return n.apply(this, t.concat(o.call(arguments)))
        }
    }, w.bindAll = function(n) {
        var t = o.call(arguments, 1);
        return 0 === t.length && (t = w.functions(n)), A(t, function(t) {
            n[t] = w.bind(n[t], n)
        }), n
    }, w.memoize = function(n, t) {
        var r = {};
        return t || (t = w.identity),
        function() {
            var e = t.apply(this, arguments);
            return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }, w.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, w.defer = function(n) {
        return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)))
    }, w.throttle = function(n, t) {
        var r, e, u, i, a = 0,
            o = function() {
                a = new Date, u = null, i = n.apply(r, e)
            };
        return function() {
            var c = new Date,
                l = t - (c - a);
            return r = this, e = arguments, 0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u || (u = setTimeout(o, l)), i
        }
    }, w.debounce = function(n, t, r) {
        var e, u;
        return function() {
            var i = this,
                a = arguments,
                o = function() {
                    e = null, r || (u = n.apply(i, a))
                }, c = r && !e;
            return clearTimeout(e), e = setTimeout(o, t), c && (u = n.apply(i, a)), u
        }
    }, w.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    }, w.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, w.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
            return t[0]
        }
    }, w.after = function(n, t) {
        return 0 >= n ? t() : function() {
            return 1 > --n ? t.apply(this, arguments) : void 0
        }
    }, w.keys = _ || function(n) {
        if (n !== Object(n)) throw new TypeError("Invalid object");
        var t = [];
        for (var r in n) w.has(n, r) && (t[t.length] = r);
        return t
    }, w.values = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push(n[r]);
        return t
    }, w.pairs = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push([r, n[r]]);
        return t
    }, w.invert = function(n) {
        var t = {};
        for (var r in n) w.has(n, r) && (t[n[r]] = r);
        return t
    }, w.functions = w.methods = function(n) {
        var t = [];
        for (var r in n) w.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, w.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t) n[r] = t[r]
        }), n
    }, w.pick = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, w.omit = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        for (var u in n) w.contains(r, u) || (t[u] = n[u]);
        return t
    }, w.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t) null == n[r] && (n[r] = t[r])
        }), n
    }, w.clone = function(n) {
        return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({}, n) : n
    }, w.tap = function(n, t) {
        return t(n), n
    };
    var I = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof w && (n = n._wrapped), t instanceof w && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t)) return !1;
        switch (u) {
            case "[object String]":
                return n == t + "";
            case "[object Number]":
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +t;
            case "[object RegExp]":
                return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t) return !1;
        for (var i = r.length; i--;)
            if (r[i] == n) return e[i] == t;
        r.push(n), e.push(t);
        var a = 0,
            o = !0;
        if ("[object Array]" == u) {
            if (a = n.length, o = a == t.length)
                for (; a-- && (o = I(n[a], t[a], r, e)););
        } else {
            var c = n.constructor,
                f = t.constructor;
            if (c !== f && !(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f)) return !1;
            for (var s in n)
                if (w.has(n, s) && (a++, !(o = w.has(t, s) && I(n[s], t[s], r, e)))) break;
            if (o) {
                for (s in t)
                    if (w.has(t, s) && !a--) break;
                o = !a
            }
        }
        return r.pop(), e.pop(), o
    };
    w.isEqual = function(n, t) {
        return I(n, t, [], [])
    }, w.isEmpty = function(n) {
        if (null == n) return !0;
        if (w.isArray(n) || w.isString(n)) return 0 === n.length;
        for (var t in n)
            if (w.has(n, t)) return !1;
        return !0
    }, w.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, w.isArray = x || function(n) {
        return "[object Array]" == l.call(n)
    }, w.isObject = function(n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        w["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), w.isArguments(arguments) || (w.isArguments = function(n) {
        return !(!n || !w.has(n, "callee"))
    }), "function" != typeof / . / && (w.isFunction = function(n) {
        return "function" == typeof n
    }), w.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, w.isNaN = function(n) {
        return w.isNumber(n) && n != +n
    }, w.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, w.isNull = function(n) {
        return null === n
    }, w.isUndefined = function(n) {
        return n === void 0
    }, w.has = function(n, t) {
        return f.call(n, t)
    }, w.noConflict = function() {
        return n._ = t, this
    }, w.identity = function(n) {
        return n
    }, w.times = function(n, t, r) {
        for (var e = Array(n), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e
    }, w.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    };
    var M = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    M.unescape = w.invert(M.escape);
    var S = {
        escape: RegExp("[" + w.keys(M.escape).join("") + "]", "g"),
        unescape: RegExp("(" + w.keys(M.unescape).join("|") + ")", "g")
    };
    w.each(["escape", "unescape"], function(n) {
        w[n] = function(t) {
            return null == t ? "" : ("" + t).replace(S[n], function(t) {
                return M[n][t]
            })
        }
    }), w.result = function(n, t) {
        if (null == n) return null;
        var r = n[t];
        return w.isFunction(r) ? r.call(n) : r
    }, w.mixin = function(n) {
        A(w.functions(n), function(t) {
            var r = w[t] = n[t];
            w.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), D.call(this, r.apply(w, n))
            }
        })
    };
    var N = 0;
    w.uniqueId = function(n) {
        var t = ++N + "";
        return n ? n + t : t
    }, w.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var T = /(.)^/,
        q = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    w.template = function(n, t, r) {
        var e;
        r = w.defaults({}, r, w.templateSettings);
        var u = RegExp([(r.escape || T).source, (r.interpolate || T).source, (r.evaluate || T).source].join("|") + "|$", "g"),
            i = 0,
            a = "__p+='";
        n.replace(u, function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(B, function(n) {
                return "\\" + q[n]
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = Function(r.variable || "obj", "_", a)
        } catch (o) {
            throw o.source = a, o
        }
        if (t) return e(t, w);
        var c = function(n) {
            return e.call(this, n, w)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
    }, w.chain = function(n) {
        return w(n).chain()
    };
    var D = function(n) {
        return this._chain ? w(n).chain() : n
    };
    w.mixin(w), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], D.call(this, r)
        }
    }), A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            return D.call(this, t.apply(this._wrapped, arguments))
        }
    }), w.extend(w.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this);