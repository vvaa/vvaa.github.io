"use strict";
angular.module("views/generate.html", []).run(["$templateCache",
    function(e) {
        e.put("views/generate.html", '<div class="view-generate">    <div class="spinner-overlay" data-ng-show="loading"></div>    <div data-qr-generate-widget data-qrcode="qrcode"></div> </div>')
    }
]),

angular.module("views/generateWidget.html", []).run(["$templateCache",
    function(e) {
        e.put("views/generateWidget.html", '<div class="generate-widget">    <div class="row">      <div class="qr-generate-inputs" data-qr-tabbed-inputs             data-model="qrcode"></div>        <div class="qr-generate-result">          <div class="btn-toolbar">                <div class="btn-group">                    <button class="btn btn-primary"                            data-ng-click="save()">Save                    </button>                    <button type="button" class="btn"                            data-ng-model="optionsShown"                            data-btn-checkbox data-btn-checkbox-true="1"                            data-btn-checkbox-false="0">Options                    </button>                                </div>            </div>            <div class="qr-options" data-collapse="!optionsShown">                <div class="option option-margin"                     data-ng-hide="isLegacyBrowser">                    <label class="checkbox"                           data-tooltip="QR Code readers require a white                           margin to detect QR Codes. So make sure to print                           it on a light background instead."                           data-tooltip-placement="left">                        <input type="checkbox"                               data-ng-model="options.margin"                               data-ng-true-value="0"                               data-ng-false-value="1"/>                        No margin                    </label>                    <div class="alert"                         data-ng-show="options.size != qrCodeSize">                        Size was set to {{qrCodeSize}}px to avoid scaling                        which                        would reduce readability.                    </div>                </div>                <div class="option">                    <div class="option-legend">Size</div>                    <div data-qr-size-chooser                         data-size="options.size"></div>                </div>            </div>            <div class="qr-generated-code"                 data-qr-code                 data-qr-size="{{clampedSize}}"                 data-qr-hide="clampedSize > 400"                 data-qr-margin="{{options.margin}}"                 data-qr-content="{{encodedContent}}"></div>        </div>    </div>    <div class="row qr-big-code" data-ng-hide="clampedSize <= 400">        <div class="alert" data-ng-show="showClamped">            The QR Code is only displayed at a size of {{clampedSize}}px            but it            will be saved at a size of {{qrCodeSize}}px.        </div>        <div class="alert" data-ng-show="showClampedLegacy">            The QR Code is only displayed at a size of {{clampedSize}}px.            Upgrade your Browser get support for larger sizes.        </div>        <div class="qr-generated-code"             data-qr-hide="clampedSize <= 400"             data-qr-code data-qr-size="{{clampedSize}}"             data-qr-margin="{{options.margin}}"             data-qr-content="{{encodedContent}}"></div>    </div></div>')
    }
]),

angular.module("views/parsedContent.html", []).run(["$templateCache",
    function(e) {
        e.put("views/parsedContent.html", '<div class="qr-parsed-content">    <div data-ng-switch data-on="content.type">        <div data-ng-switch-when="sms" class="sms">            <div class="type-info">Type: SMS</div>            <span class="label">To:</span> <a href="tel:{{content.number}}">            {{content.number}}        </a>            <div class="content-text">{{content.text}}</div>        </div>        <div data-ng-switch-when="url" class="url">            <div class="type-info">Type: URL</div>            <a href="{{content.href}}">{{content.href}}</a>        </div>        <div data-ng-switch-when="tel" class="tel">            <div class="type-info">Type: Phone Number</div>            <a href="tel:{{content.number}}">{{content.number}}</a>        </div>        <div data-ng-switch-when="contact" class="contact">            <div class="type-info">Type: Contact</div>            <div class="name contact-item">                {{content.firstname}} {{content.name}}            </div>            <div data-ng-show="content.organization"                 class="organization contact-item">                {{content.organization}}            </div>            <div data-ng-show="content.addresses">                <div data-ng-repeat="address in content.addresses">                    <div class="address contact-item">                        {{address}}                    </div>                </div>            </div>            <div data-ng-repeat="tel in content.telephones">                <a href="tel:{{tel}}">{{tel}}</a>            </div>            <div data-ng-repeat="email in content.emails">                <a href="mailto:{{email}}">{{email}}</a>            </div>            <div data-ng-repeat="url in content.urls">                <a href="{{url}}">{{url}}</a>            </div>        </div>        <div data-ng-switch-when="text" class="text">            <div class="type-info">Type: Text</div>            <div class="content-text"                 data-ng-bind-html="content.text | linky"></div>        </div>        <div data-ng-switch-when="geo" class="geo">            <div class="type-info">Type: Location</div>            <a href="https://maps.google.de/maps?q={{content.longitude}},{{content.latitude}}">                Coordinate: {{content.longitude}}, {{content.latitude}}            </a>        </div>        <div data-ng-switch-default class="default">            <div class="type-info">Unknown Type</div>        </div>    </div></div>')
    }
]),

angular.module("views/qrHorizontalInput.html", []).run(["$templateCache",
    function(e) {
        e.put("views/qrHorizontalInput.html", '<div class="control-group">    <label class="control-label"           for="{{id}}">{{name}}</label>    <div class="controls">        <input type="text" id="{{id}}"               ng-model="model"               data-qr-focus="{{focus}}"               placeholder="{{placeholder}}">    </div></div>')
    }
]),

angular.module("views/qrSizeChooser.html", []).run(["$templateCache",
    function(e) {
        e.put("views/qrSizeChooser.html", '<div class="qr-size-chooser">    <button data-ng-repeat="size in sizes"        data-btn-radio="{{size}}"        data-ng-model="$parent.radioSize"        data-ng-class="{checked: size == $parent.radioSize}">        <span class="qr-size-name">{{size}}px</span>    </button>    <div class="qr-size-custom"        data-btn-radio="\'custom\'"        data-ng-model="radioSize"        data-ng-class="{checked: \'custom\' == radioSize}">        <label>            <span class="qr-size-name">Custom</span>            <span class="input-wrapper">                <input type="number"                       data-qr-autoselect                       data-ng-model="customSize"/>px            </span>        </label>    </div></div>')
    }
]),

angular.module("views/qrTabbedInputs.html", []).run(["$templateCache",
    function(e) {
        e.put("views/qrTabbedInputs.html", '<div data-tabset data-qr-selected-pane="model.type"     data-help-tour-highlight="qr-inputs"     class="tabs-left qr-inputs">    <div class="form-simple" data-tab         data-qr-pane-name="txt"         data-heading="Free Text">        <textarea                data-qr-focus="true"                placeholder="Enter text to share here."                autofocus="autofocus"                rows="5"                class="input-xlarge"                ng-model="data.txt"></textarea>    </div>    <div class="form-simple" data-tab         data-qr-pane-name="url"         data-heading="URL">        <input type="text" class="input-xlarge" autofocus="true"               ng-model="data.url"               placeholder="Enter URL"/>        <button class="btn"                data-ng-disabled="shortenButtonDisabled"                data-ng-show="!model.isDynamic &&                data.url.length > 19 && shortURLInfo.shortURL != data.url"                data-ng-click="shortenURL()">Shorten URL        </button>        <div class="alert alert-info"             data-ng-show="shortURLInfo.shortURL && shortURLInfo.shortURL == data.url">            The short URL {{shortURLInfo.shortURL}} encoded in the QR Code            redirects to <a data-ng-href="{{shortURLInfo.originalURL}}"                            target="_blank">            {{shortURLInfo.originalURL}}        </a>.        </div>    </div>    <div data-tab         data-qr-pane-name="contact"         data-heading="Contact">        <div class="form-horizontal">            <div data-qr-horizontal-input                 data-model="data.contact.name"                 data-name="Name">            </div>            <div data-qr-horizontal-input                 data-model="data.contact.firstname"                 data-name="First Name">            </div>            <div data-qr-horizontal-input                 data-model="data.contact.organization"                 data-name="Organization">            </div>            <div data-qr-horizontal-input                 data-model="data.contact.email"                 data-type="email"                 data-name="Email">            </div>            <div data-qr-horizontal-input                 data-model="data.contact.phone"                 data-type="tel"                 data-name="Phone">            </div>            <div data-qr-horizontal-input                 data-model="data.contact.cell"                 data-type="tel"                 data-name="Cell Phone">            </div>            <div data-qr-horizontal-input                 data-model="data.contact.fax"                 data-type="tel"                 data-name="Fax">            </div>            <div data-qr-horizontal-input                 data-model="data.contact.street"                 data-name="Street">            </div>            <div data-qr-horizontal-input                 data-model="data.contact.postcode"                 data-name="Postcode">            </div>            <div data-qr-horizontal-input                 data-model="data.contact.city"                 data-name="City">            </div>            <div data-qr-horizontal-input                 data-model="data.contact.region"                 data-name="Region/State">            </div>            <div data-qr-horizontal-input                 data-model="data.contact.country"                 data-name="Country">            </div>            <div data-qr-horizontal-input                 data-model="data.contact.url"                 data-type="url"                 data-name="URL">            </div>        </div>    </div>    <div data-tab         class="form-simple"         data-heading="Phone Number"         data-qr-pane-name="phone">        <input type="tel" ng-model="data.phone"               placeholder="Enter Phone Number"/>    </div>    <div data-tab         data-qr-pane-name="sms"         data-heading="SMS">        <div class="form-horizontal">            <div data-qr-horizontal-input                 data-model="data.sms.number"                 data-type="tel"                 data-name="Number">            </div>            <div class="control-group">                <label class="control-label"                       for="input-sms-message">Message</label>                <div class="controls">                    <textarea                            id="input-sms-message"                            placeholder="Enter Message"                            rows="5"                            class="input-xlarge"                            ng-model="data.sms.message">                    </textarea>                </div>            </div>        </div>    </div></div>')
    }
]),

angular.module("views/saveDialog.html", []).run(["$templateCache",
    function(e) {
        e.put("views/saveDialog.html", '<div class="modal-header">    <button type="button" class="close"            data-ng-click="cancel()">&times;</button>    <h4>Save QR Code</h4></div><div class="modal-body">    <form class="form-horizontal" data-ng-submit="save()">        <div data-qr-horizontal-input             data-model="filename"             data-placeholder="qrcode.{{format}}"             data-focus="true"             data-name="Filename">        </div>        <div class="control-group">            <label class="control-label">Format</label>            <div class="controls">                <label class="radio inline">                    <input type="radio" data-ng-model="format" value="png">PNG                </label>                <label class="radio inline">                    <input type="radio" data-ng-model="format" value="svg">SVG                </label>                <label class="radio inline">                    <input type="radio" data-ng-model="format" value="eps">EPS                </label>            </div>        </div>    </form></div><div class="modal-footer">    <button class="btn" data-ng-click="cancel()">Cancel</button>    <button class="btn btn-primary" data-ng-click="save()">Save</button></div>')
    }
]),

angular.module("templates", ["views/generate.html", "views/generateWidget.html", "views/saveDialog.html", "views/parsedContent.html", "views/qrHorizontalInput.html", "views/qrSizeChooser.html", "views/qrTabbedInputs.html"]),

angular.module("qrAppCommon", ["qrApp.routes", "qrApp.directives", "qrApp.ctrls", "ui.bootstrap", "templates"]),

angular.module("qrApp", ["qrAppCommon"]),

angular.module("qrApp.routes", []).config(["$routeProvider", "$locationProvider",
    function(e, t) {
        e.when("/", {
            templateUrl: "views/generate.html",
            controller: "GenerateCtrl"
        }).otherwise({
            templateUrl: "views/generate.html",
            controller: "GenerateCtrl"
        }), t.html5Mode(!0)
    }
]),


angular.module("qrApp.services", ["ngResource"]),

angular.module("qrApp.ctrls", ["qrApp.services", "qrApp.analytics", "ui.bootstrap"]),

angular.module("qrApp.directives", ["qrApp.ctrls", "ui.bootstrap", "templates"]),


angular.module("qrApp.directives").directive("qrTap", ["$parse",
    function(e) {
        return function(t, n, a) {
            var o = !1,
                i = e(a.qrTap);
            n.bind("touchstart", function() {
                o = !0
            }), n.bind("touchmove", function() {
                o = !1
            }), n.bind("touchend", function() {
                o && t.$apply(i, n)
            })
        }
    }
]),

angular.module("qrApp.directives").directive("button", function() {
    return {
        restrict: "E",
        link: function(e, t, n) {
            if (!("btnCheckbox" in n)) {
                var a = "active";
                t.bind("touchstart", function() {
                    t.addClass(a)
                }), t.bind("touchend", function() {
                    t.removeClass(a)
                })
            }
        }
    }
}),

angular.module("qrApp.directives").directive("qrScanning", function() {
    return {
        restrict: "AE",
        scope: {
            onDecoded: "=",
            stopped: "="
        },
        link: function(e, t, n) {
            var a = t[0],
                o = n.workerUrl,
                i = n.maxDecodeResolution,
                r = n.maxVisualizationResolution,
                s = new w69b.qr.ui.ContinuousScanner(o);
            e.onDecoded && s.setDecodedCallback(function(t) {
                e.$apply(function() {
                    e.onDecoded(t)
                })
            }), e.$on("$destroy", function() {
                s.dispose()
            }), e.$watch("stopped", function(e) {
                s.setStopped(e)
            }), i && s.setMaxVisualizationResolution(Number(r)), i && s.setMaxDecodingResolution(Number(i)), s.render(a)
        }
    }
}).directive("qrScanningEmbedded", ["constants",
    function(e) {
        return {
            restrict: "AE",
            template: '<iframe class="qr-scanning-embedded"></iframe>',
            replace: !0,
            scope: {
                onDecoded: "=",
                stopped: "="
            },
            link: function(t, n) {
                function a(t, n) {
                    r && r.postMessage({
                        msgtype: t,
                        data: n
                    }, e.SCAN_IFRAME_ORIGIN)
                }
                var o = n[0],
                    i = e.SCAN_IFRAME_URL,
                    r = o.contentWindow;
                if (!i) throw Error("no url configured");
                o.src = i, i = o.src, window.addEventListener("message", function(e) {
                    if (e.source == r) {
                        var n = e.data.msgtype,
                            a = e.data.data;
                        "decoded" == n && t.$apply(function() {
                            t.onDecoded(a)
                        })
                    }
                }, !1), t.$on("qrScanDispose", function() {
                    a("dispose"), o.src = "about:blank"
                }), n.bind("load", function() {
                    t.$watch("stopped", function(e) {
                        a("setStopped", e)
                    })
                })
            }
        }
    }
]),

angular.module("qrApp.directives").directive("qrParsedContent", function() {
    return {
        scope: {
            content: "=qrContent"
        },
        templateUrl: "views/parsedContent.html",
        replace: !0,
        controller: "ParsedContentCtrl",
        link: function(e, t) {
            t.bind("click", function(t) {
                var n = t.target;
                "a" == angular.lowercase(n.tagName) && (t.preventDefault(), e.openURL(n.href))
            })
        }
    }
}),

angular.module("qrApp.services").factory("qrContentParser", ["QrContent",
    function(e) {
        function t(t) {
            var n = /^SMSTO:([^:]*):(.*)$/i,
                a = n.exec(t);
            return a ? new e("sms", {
                number: a[1],
                text: a[2]
            }) : null
        }

        function n(t) {
            var n = /^tel:(.*)$/i,
                a = n.exec(t);
            return a ? new e("tel", {
                number: a[1]
            }) : null
        }

        function a(t) {
            var n = /^https?:\/\/[^\s]+$/i,
                a = n.exec(t);
            return a ? new e("url", {
                href: a[0]
            }) : null
        }

        function o(e) {
            var t = /^MECARD:(.*);$/i,
                n = t.exec(e);
            if (!n) return null;
            for (var a = s(n[1], ";"), o = {}, r = 0; a.length > r; ++r) {
                var c = s(a[r], ":");
                if (!(2 > c.length)) {
                    var l = angular.lowercase(c[0]),
                        u = i(c.slice(1).join(":"));
                    o[l] = o[l] || [], o[l].push([u])
                }
            }
            return d(o)
        }

        function i(e) {
            return e.replace(/\\,/g, ",").replace(/\\;/g, ";").replace(/\\\\/g, "\\").replace(/\\n/gi, "\n").replace(/\\:/g, ":")
        }

        function r(e) {
            return e.split("").reverse().join("")
        }

        function s(e, t) {
            var n = RegExp(t + "(?!\\\\)");
            return r(e).split(n).reverse().map(r)
        }

        function c(e) {
            var t = e.split(/\n|(\r\n)|(\n\r)/),
                n = /^\s*BEGIN:VCARD$/i,
                a = /^END:VCARD\s*$/i;
            if (!n.test(t[0])) return null;
            for (var o = {}, r = 1; t.length > r; ++r) {
                var c = t[r];
                if (a.test(c)) break;
                var l = /^(\w+)(?:;(?:TYPE=)?([\w]*)[^:]*)?:(.+)$/i.exec(c);
                if (l) {
                    var u = angular.lowercase(l[1]),
                        p = l[2],
                        h = null;
                    p && (h = angular.lowercase(p.split(";")[0])), h = h || "home";
                    var m = l[3];
                    m = s(m, ";").map(i), o[u] = o[u] || [], o[u].push(m)
                }
            }
            return d(o)
        }

        function d(t) {
            function n(e) {
                return t[e][0].join(", ").trim()
            }

            function a(e) {
                return t[e].map(function(e) {
                    return e.filter(function(e) {
                        return e
                    }).join(", ").trim()
                })
            }
            var o = {};
            return t.org && (o.organization = n("org")), t.email && (o.emails = a("email")), t.tel && (o.telephones = a("tel")), t.adr && (o.addresses = a("adr")), t.url && (o.urls = a("url")), t.n ? (o.name = t.n[0][0], o.firstname = t.n[0].slice(1).join(" ").trim()) : t.fn && (o.name = n("fn")), _.isEmpty(o) ? null : new e("contact", o)
        }

        function l(t) {
            var n = /^geo:([\-\d\.]+),([\-\d\.]+)(?:,([\-\d\.]+))?(?:\?(.*))?$/i,
                a = n.exec(t);
            if (!a) return null;
            var o = parseFloat(a[1]),
                i = parseFloat(a[2]);
            return i > 90 || -90 > i || o > 180 || -180 > i ? null : new e("geo", {
                longitude: o,
                latitude: i
            })
        }

        function u(t) {
            return new e("text", {
                text: t
            })
        }

        function p(e) {
            for (var i = [n, a, t, c, o, l, u], r = 0; i.length > r; ++r) {
                var s = i[r](e);
                if (s) return s
            }
            return null
        }
        return {
            parseTel: n,
            parseURL: a,
            parseSMS: t,
            parseVCard: c,
            parseMeCard: o,
            parseGeo: l,
            parse: p
        }
    }
]),

angular.module("qrApp.services").factory("QrContent", function() {
    var e = function(e, t) {
        angular.forEach(t, function(e, t) {
            this[t] = e
        }, this), this.type = e
    };
    return e
}),

angular.module("qrApp.services").factory("qrAudio", ["$window",
    function(e) {
        function t() {
            a.play()
        }
        var n;
        angular.isDefined(n) ? n = e.Audio : (n = function() {}, n.prototype.play = function() {});
        var a = new n("/audio/beep.ogg");
        return {
            beep: t
        }
    }
]),

angular.module("qrApp.ctrls").controller("DemoCtrl", ["$scope", "QrContent",
    function(e, t) {
        e.contact = new t("contact", {
            firstname: "Manuel",
            name: "Braun",
            telephones: ["12345", "789123"],
            emails: ["mb@example.com", "bla@xxxasdfasldkfjasfdlkasjadsasdfasdffk.com"],
            addresses: ["SomeStreet, SomeTown, Somewhere blabla USA", "Edith-Stein-Str 11, 79110 Freiburg, Germany"],
            urls: ["http://example.com", "http://youtube.com"],
            organization: "w69b"
        }), e.link = new t("url", {
            href: "http://example.com"
        }), e.tel = new t("tel", {
            number: "123456"
        }), e.text = new t("text", {
            text: "lorem ipem\nasdfasdf\nasdfdf\n<safe>asdfdf</safe>\n what about http://example.com ? or bla@example.com"
        }), e.sms = new t("sms", {
            number: "+4977123456",
            text: "hello world"
        })
    }
]),

angular.module("qrApp.services").factory("webActivities", ["$window",
    function(e) {
        function t(t) {
            m ? new MozActivity({
                name: "view",
                data: {
                    type: "url",
                    url: t
                }
            }) : e.open(t)
        }

        function n(t) {
            e.location = t
        }

        function a(t, n, a) {
            var o = n || "",
                i = a || "",
                r = "mailto:" + t + "?subject=" + encodeURIComponent(o) + "&body=" + encodeURIComponent(i);
            m ? new MozActivity({
                name: "new",
                data: {
                    url: r
                }
            }) : e.location.href = r
        }

        function o(e) {
            m && new MozActivity({
                name: "new",
                data: {
                    type: "websms/sms",
                    number: e
                }
            })
        }

        function i(t) {
            m ? new MozActivity({
                name: "dial",
                data: {
                    number: t
                }
            }) : e.location.href = "tel:" + t
        }

        function r(e) {
            if (m) {
                var t = new MozActivity({
                    name: "pick",
                    data: {
                        type: ["image/png", "image/jpg", "image/jpeg"]
                    }
                });
                t.onsuccess = function() {
                    e(t.result.blob)
                }
            } else {
                var n = document.createElement("input");
                n.type = "file";
                var a = function() {
                    n.files.length && e(n.files[0]), n.removeEventListener("change", a, !1)
                };
                n.addEventListener("change", a, !1), n.click()
            }
        }

        function s() {
            if (m) {
                var e = new MozActivity({
                    name: "pick",
                    data: {
                        type: ["webcontacts/contact"]
                    }
                });
                e.onsuccess = function() {
                    console.log(e.result)
                }
            }
        }

        function c(e) {
            if (m) {
                var t = {};
                e.telephones && e.telephones.length > 0 && (t.tel = e.telephones[0]), e.firstname && (t.giveName = e.firstname), e.name && (t.familyName = e.name), e.emails && e.emails.length > 0 && (t.email = e.emails[0]), e.organization && (t.company = e.organization), e.addresses && e.addresses.length > 0 && (t.address = e.addresses[0]), new MozActivity({
                    name: "new",
                    data: {
                        type: "webcontacts/contact",
                        params: t
                    }
                })
            }
        }

        function d(e) {
            new MozActivity({
                name: "share",
                data: {
                    number: 1,
                    url: e
                }
            })
        }

        function l(e) {
            new MozActivity({
                name: "share",
                data: {
                    number: 1,
                    blobs: [e]
                }
            })
        }

        function u(e, t) {
            w69b.FileSaver.saveAs(e, t)
        }

        function p() {
            return w69b.FileSaver.isSupported()
        }

        function h() {
            return m
        }
        var m = window.MozActivity ? !0 : !1;
        return {
            openURL: t,
            redirectTo: n,
            pickImage: r,
            pickContact: s,
            openDialer: i,
            composeSMS: o,
            composeEmail: a,
            saveContact: c,
            shareBlob: l,
            shareURL: d,
            saveBlob: u,
            isSaveBlobSupported: p,
            isComposeSMSSupported: h,
            isShareBlobSupported: h,
            isSaveContactSupported: h
        }
    }
]),

angular.module("qrApp.ctrls").controller("ParsedContentCtrl", ["$scope", "webActivities",
    function(e, t) {
        e.canComposeSMS = t.isComposeSMSSupported(), e.canSaveContact = t.isSaveContactSupported(), e.openURL = t.openURL, e.openDialer = t.openDialer, e.composeEmail = t.composeEmail, e.composeSMS = t.composeSMS, e.saveContact = t.saveContact
    }
]),

angular.module("qrApp.services").factory("fallbackDecoder", ["$window",
    function(e) {
        function t(t, a) {
            var o;
            o = angular.isString(t) ? t : e.URL.createObjectURL(t);
            var i = new Image;
            i.onload = function() {
                var r = w69b.imgtools.getImageData(i, 700);
                angular.isString(t) || e.URL.revokeObjectURL(o), n(r, a)
            }, i.src = o
        }

        function n(e, t) {
            o.decode(e, function(e, n) {
                e == a.DECODED ? t(n.text) : e == a.NOTFOUND && t(null)
            })
        }
        var a = w69b.qr.WorkerMessageType,
            o = new w69b.qr.DecodeInWorkerHelper;
        return {
            decode: n,
            decodeImage: t
        }
    }
]),

angular.module("qrApp.ctrls").controller("GenerateWidgetCtrl", ["$scope", "qrContentEncoder", "qrEncoder", "webActivities", "$dialog", "analytics", "$timeout", "zazzle", "statusbar",
    function(e, t, n, a, o, i, r, s, c) {
        function d() {
            return Math.min(1e4, e.qrCodeSize)
        }

        function l(t) {
            n.getPngBlob(e.encodedContent, d(), e.options.margin, function(e) {
                a.saveBlob(e, t), i.trackEvent("Generate", "Save", "saved png")
            })
        }

        function u(t) {
            var o = n.getSvgBlob(e.encodedContent, d(), e.options.margin);
            r(function() {
                a.saveBlob(o, t)
            }, 0), i.trackEvent("Generate", "Save", "saved svg")
        }

        function p(t) {
            var o = n.getEpsBlob(e.encodedContent, d(), e.options.margin);
            r(function() {
                a.saveBlob(o, t)
            }, 0), i.trackEvent("Generate", "Save", "saved eps")
        }
        var h = !(n.isSupported() && a.isSaveBlobSupported()),
            m = 700;
        h && (m = 500), e.isLegacyBrowser = h, e.optionsShown = 0, e.options = {
            size: 400,
            margin: 1
        }, e.zazzleRunning = !1, e.$watch("[qrcode, staticContent]", _.throttle(function() {
            e.encodedContent = e.staticContent ? e.staticContent : e.qrcode && e.qrcode.type ? t.encode(e.qrcode) : "", e.$root.$$phase || e.$apply()
        }, 400), !0), e.$watch("[options, encodedContent]", function() {
            var t = e.options.size;
            if (!n.isSupported()) return e.qrCodeSize = t, void 0;
            var a = n.getSize(e.encodedContent);
            1 > e.options.margin && (t = Math.floor(t / a) * a), a > t && (t = a), e.qrCodeSize = t
        }, !0), e.$watch("qrCodeSize", function(t) {
            t > m ? (e.showClamped = !h, e.showClampedLegacy = h) : (e.showClamped = !1, e.showClampedLegacy = !1), e.clampedSize = Math.min(Math.max(t, 0), m)
        }), e.save = function() {
            if (h) i.trackEvent("Generate", "Save", "Legacy"), a.redirectTo(n.getDownloadURL(e.encodedContent, e.clampedSize, e.options.margin));
            else {
                i.trackEvent("Generate", "Save", "Dialog");
                var t = o.dialog();
                t.open("views/saveDialog.html", "SaveDialogCtrl").then(function(e) {
                    e && ("png" == e.format ? l(e.filename) : "eps" == e.format ? p(e.filename) : u(e.filename))
                })
            }
        }, e.printWithZazzle = function() {
            if (!e.zazzleRunning) {
                if (!e.encodedContent.length) return c.showMessage("Please enter something first.", 2e3), void 0;
                e.zazzleRunning = !0, i.trackEvent("Zazzle", "Prepare", e.qrcode.type), s.prepareProducts(e.encodedContent, e.qrcode).then(function() {
                    e.zazzleRunning = !1
                })
            }
        }
    }
]),

angular.module("qrApp.directives").directive("qrCode", ["qrEncoder",
    function(e) {
        var t = !e.isSupported(),
            n = '<canvas data-ng-hide="hide"></canvas>';
        return t && (n = '<img data-ng-hide="hide"/>'), {
            scope: {
                content: "@qrContent",
                size: "@qrSize",
                hide: "=qrHide",
                margin: "@qrMargin"
            },
            template: n,
            replace: !0,
            link: function(n, a) {
                var o = a[0],
                    i = function() {
                        return "" !== n.margin ? Number(n.margin) : 1
                    }, r = function() {
                        n.hide || (t ? o.src = e.getHostedURL(n.content, Number(n.size) || 100, i()) : e.drawOnCavas(n.content, o, i()))
                    }, s = function() {
                        var e = n.size || 100;
                        o.width = e, o.height = e, r()
                    };
                n.$watch("[content, hide, margin]", function(e, t) {
                    angular.equals(e, t) || r()
                }, !0), n.$watch("size", s)
            }
        }
    }
]),

angular.module("qrApp.services").factory("qrEncoder", function() {
    function e(e, t, n) {
        w69b.qr.encoding.drawOnCanvas(e || "", t, n)
    }

    function t(e) {
        return w69b.qr.encoding.getSize(e)
    }

    function n(t, n, a, o) {
        var i = document.createElement("canvas");
        i.width = n, i.height = n, e(t, i, a), w69b.imgtools.getCanvasAsBlob(i, o)
    }

    function a(e, t, n) {
        return new Blob([w69b.qr.encoding.drawAsSVG(e, t, n)])
    }

    function o(e, t, n) {
        return new Blob([w69b.qr.encoding.drawAsEPS(e, t, n)])
    }

    function i(e, t, n) {
        var a = angular.isDefined(n) ? n : 1;
        return "http://chart.apis.google.com/chart?chs=" + t + "x" + t + "&cht=qr&chld=|" + a + "&chl=" + encodeURIComponent(e)
    }

    function r(e, t, n) {
        var a = angular.isDefined(n) ? n : 1;
        return "http://gen.the-qrcode-generator.com/?dl=1&size=" + t + "&margin=" + a + "&content=" + encodeURIComponent(e)
    }

    function s() {
        return "undefined" != typeof Int32Array
    }
    return {
        drawOnCavas: e,
        getSvgBlob: a,
        getEpsBlob: o,
        getPngBlob: n,
        getHostedURL: i,
        getDownloadURL: r,
        isSupported: s,
        getSize: t
    }
}),

angular.module("qrApp.directives").directive("qrHorizontalInput", function() {
    return {
        restrict: "EA",
        templateUrl: "views/qrHorizontalInput.html",
        replace: !0,
        controller: ["$scope", "idGenerator",
            function(e, t) {
                e.id = t.getId(), e.$watch("[optPlaceholder, name]", function() {
                    e.placeholder = e.optPlaceholder || e.name
                }, !0)
            }
        ],
        scope: {
            model: "=",
            name: "@",
            focus: "@",
            optPlaceholder: "@placeholder"
        },
        link: function(e, t, n) {
            n.type && (t.find("input").type = n.type)
        }
    }
}).controller("TabbedInputsCtrl", ["$scope", "$http", "statusbar",
    function(e, t, n) {
        function a() {
            var t = e.model.type;
            return {
                type: t,
                isDynamic: e.model.isDynamic,
                content: e.data[t]
            }
        }
        e.data = {
            txt: "",
            contact: {},
            sms: {},
            phone: "",
            url: ""
        }, e.shortenButtonDisabled = !1, e.shortURLInfo = {
            shortURL: "",
            originalURL: ""
        }, e.model || (e.model = {
            type: "txt",
            content: ""
        }), e.$watch("model.content", function(t) {
            e.data[e.model.type] = t
        }, !0), e.$watch(a, function(t) {
            e.model = t
        }, !0), e.shortenURL = function() {
            var a = e.data.url;
            /^https?:\/\//.test(a) || (a = "http://" + a), e.shortenButtonDisabled = !0, n.showMessage("Shortening URL...", 0), t.post("/api/shorten", a).success(function(t) {
                var o = t.short_url;
                e.data.url = o, e.shortenButtonDisabled = !1, e.shortURLInfo.originalURL = a, e.shortURLInfo.shortURL = o, n.hide()
            }).error(function() {
                e.shortenButtonDisabled = !1, n.showError("Oups, we could not shorten the URL. Are you online?")
            })
        }
    }
]).directive("qrTabbedInputs", function() {
    return {
        restrict: "EA",
        templateUrl: "views/qrTabbedInputs.html",
        replace: !1,
        controller: "TabbedInputsCtrl",
        scope: {
            model: "="
        }
    }
}).directive("qrSizeChooser", function() {
    return {
        restrict: "EA",
        controller: ["$scope",
            function(e) {
                e.sizes = [50, 100, 200, 300], e.radioSize = 300, e.customSize = 400
            }
        ],
        templateUrl: "views/qrSizeChooser.html",
        replace: !0,
        scope: {
            size: "="
        },
        link: function(e) {
            e.$watch("[radioSize, customSize]", function() {
                e.size = "custom" == e.radioSize ? e.customSize || 0 : e.radioSize
            }, !0)
        }
    }
}),

angular.module("qrApp.analytics", ["qrApp.constants"]).run(["$window", "$rootScope", "$location", "analytics", "constants",
    function(e, t, n, a, o) {
        var i = o.ANALYTICS_ACCOUNT;
        o.ANALYTICS_ENABLE || (e["ga-disable-" + i] = !0), a.push(["_setAccount", i]),
        function() {
            var e = document.createElement("script");
            e.type = "text/javascript", e.async = !0, e.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
            var t = document.getElementsByTagName("script")[0];
        }();
        var r = null;
        t.$on("$viewContentLoaded", function() {
            var e = n.path();
            r != e && (a.trackPageView(e), r = e)
        })
    }
]).service("analytics", ["$window",
    function(e) {
        function t(e) {
            a.push(["_trackPageview", e])
        }

        function n() {
            var e = Array.prototype.slice.call(arguments);
            a.push(["_trackEvent"].concat(e))
        }
        var a = {
            trackEvent: n,
            trackPageView: t,
            push: function(t) {
                e._gaq || (e._gaq = []), e._gaq.push(t)
            }
        };
        return a
    }
]),

angular.module("qrApp.services").factory("idGenerator", function() {
    var e = 0;
    return {
        getId: function() {
            return "gid-" + e++
        }
    }
}),

angular.module("qrApp.directives").controller("SelectedPaneCtrl", ["$scope",
    function(e) {
        this.setSelectedPane = function(t) {
            e.qrSelectedPane = t
        }, this.onChange = function(t) {
            e.$watch("qrSelectedPane", t)
        }
    }
]).directive("qrSelectedPane", function() {
    return {
        restrict: "A",
        controller: "SelectedPaneCtrl",
        scope: {
            qrSelectedPane: "="
        },
        priority: -100
    }
}).directive("qrPaneName", function() {
    return {
        require: ["^qrSelectedPane", "^tabset"],
        restrict: "A",
        priority: -100,
        link: function(e, t, n, a) {
            var o = n.qrPaneName,
                i = a[0],
                r = a[1];
            i.onChange(function(t) {
                t == o && r.select(e)
            }), e.$watch("active", function(e) {
                e && i.setSelectedPane(o)
            })
        }
    }
}),

angular.module("qrApp.services").factory("qrContentEncoder", function() {
    function e() {
        function e(e) {
            return !e
        }
        var t = ["BEGIN:VCARD", "VERSION:3.0"];
        return {
            addType: function(n, a) {
                var o;
                if (angular.isArray(a)) {
                    if (_.every(a, e)) return;
                    a = a.filter(_.isString), o = a.map(i).join(";")
                } else {
                    if (!a) return;
                    o = i(a)
                }
                t.push(angular.uppercase(n) + ":" + o)
            },
            toString: function() {
                return t.concat("END:VCARD").join("\n")
            }
        }
    }

    function t(e) {
        return "tel:" + e
    }

    function n(e, t) {
        return "SMSTO:" + e + ":" + t
    }

    function a(e) {
        return /^https?:\/\//.test(e) ? e : "http://" + e
    }

    function o(t) {
        var n = e();
        return n.addType("n", [t.name, t.firstname]), n.addType("org", t.organization), n.addType("email;type=internet", t.email), n.addType("url", t.url), n.addType("tel;type=cell", t.cell), n.addType("tel", t.phone), n.addType("tel;type=fax", t.fax), n.addType("adr", ["", "", t.street, t.city, t.region, t.postcode, t.country]), "" + n
    }

    function i(e) {
        return e.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/(\r?\n)|\r/g, "\\n")
    }

    function r(e) {
        var i = e.type,
            r = e.content;
        switch (i) {
            case "url":
                return a(r);
            case "txt":
                return r;
            case "sms":
                return n(r.number || "", r.message || "");
            case "phone":
                return t(r);
            case "contact":
                return o(r)
        }
        return ""
    }
    return {
        encode: r,
        vcardEscape: i,
        encodeVCard: o
    }
}),

angular.module("qrApp.ctrls").controller("ConfirmDialogCtrl", ["$scope", "dialog",
    function(e, t) {
        e.cancel = function() {
            t.close(!1)
        }, e.save = function() {
            t.close(!0)
        }
    }
]).controller("SaveDialogCtrl", ["$scope", "dialog",
    function(e, t) {
        e.cancel = function() {
            t.close()
        }, e.save = function() {
            var n = e.filename || "qrcode",
                a = e.format;
            /\.(png|svg|eps)/i.test(n) || (n += "." + a), t.close({
                filename: n,
                format: a
            })
        }, e.format = "png"
    }
]), 

angular.module("qrApp.directives").directive("qrFocus", ["$timeout",
    function(e) {
        return {
            link: function(t, n, a) {
                t.$watch(a.qrFocus, function(t) {
                    angular.isDefined(t) && t && e(function() {
                        n[0].focus(), n[0].select()
                    })
                }, !0), n.bind("blur", function() {
                    angular.isDefined(a.qrFocusLost) && t.$apply(a.qrFocusLost)
                })
            }
        }
    }
]).directive("qrAutoselect", ["$timeout",
    function(e) {
        return {
            link: function(t, n) {
                n.bind("focus click", function() {
                    e(function() {
                        n[0].select()
                    })
                })
            }
        }
    }
]),

angular.module("qrApp.services").provider("statusbar", function() {
    var e = null;
    this.setRootElement = function(t) {
        e = t
    }, this.$get = ["$document", "$timeout", "$compile", "$rootScope", "$window",
        function(t, n, a, o, i) {
            function r(e, t, a, o) {
                m && n.cancel(m), angular.isDefined(t) || (t = h), g.additionalClasses = a, g.message = e, g.shown = !0, g.closeable = o, t && (m = n(l, t))
            }

            function s(e, t, n) {
                r(e, t, "w69b-statusbar-error", n)
            }

            function c() {
                p = a(v)(g), p.bind("click", function(e) {
                    var t = e.target;
                    "a" == angular.lowercase(t.tagName) && (e.preventDefault(), l(), g.$digest(), i.open(t.href))
                }), (e || t.find("body")).append(p)
            }

            function d(e) {
                g.shown = e
            }

            function l() {
                d(!1)
            }

            function u() {
                p.remove()
            }
            var p, h = 3e3,
                m = null,
                v = '<div class="w69b-statusbar" data-ng-class="additionalClasses" data-ng-show="shown"><div class="w69b-statusbar-content"><button type="button" data-ng-show="closeable" class="close" data-ng-click="close()">×</button><span class="w69b-statusbar-text" data-ng-bind-html="message"></span></div></div>',
                g = o.$new(!0);
            return g.shown = !1, g.message = "", g.closeable = !0, g.additionalClasses = "", g.close = l, c(), {
                showMessage: r,
                showError: s,
                hide: l,
                dispose: u
            }
        }
    ]
}),

angular.module("qrApp.constants", []).config(["$provide",
    function(e) {
        e.constant("constants", {
            SCAN_IFRAME_BASE: "",
            SCAN_IFRAME_URL: "/scan_embed.html",
            SCAN_IFRAME_ORIGIN: "*",
            ANALYTICS_ACCOUNT: "UA-23874345-1",
            ANALYTICS_ENABLE: !1,
            IS_DEVELOPMENT: !0
        })
    }
]),

angular.module("qrApp.directives").directive("visuallead", ["$window", "constants",
    function(e, t) {
        return {
            template: "",
            restrict: "EA",
            link: function(n, a, o) {
                t.IS_DEVELOPMENT || angular.element(e).bind("load", function() {
                    a.html('<iframe id="visual_qr" src="' + o.url + '"' + 'seamless scrolling="no" ' + "></iframe>")
                })
            }
        }
    }
]),

angular.module("qrApp.services").factory("zazzle", ["$http", "$q", "statusbar", "strUtils",
    function(e, t, n, a) {
        function o(e) {
            var t = {}, n = null;
            if ("contact" == e.type) {
                var a = e.content,
                    o = [a.firstname, a.name].filter(_.isString);
                o.length && (t.name = o.join(" ")), t.organization = a.organization || t.name, a.url && (n = r(a.url));
                var i = [a.email, a.phone, n].filter(_.isString);
                i.length && (2 > i.length && i.push(""), t.contact = i.join("\n"))
            } else "url" == e.type && (n = r(e.content));
            return n && (t.url = n), t
        }

        function i(a, i) {
            var r = t.defer();
            n.showMessage("Preparing your Zazzle Products...", 0);
            var s = o(i);
            return s.encoded = a, e.post("/api/zazzle", s).success(function(e) {
                var t = e.url;
                n.showMessage('We have prepared your products. <a href="' + t + '" target="_blank">View them on Zazzle.</a>', 0, null, !0), r.resolve()
            }).error(function() {
                n.showError("Oups, we could not communicate with our backend. Are you online?"), r.resolve()
            }), r.promise
        }
        var r = a.humanizeURL;
        return {
            prepareProducts: i,
            paramsForQrcode: o
        }
    }
]),

angular.module("qrApp.directives").directive("qrDynamicPreview", ["strUtils",
    function(e) {
        return {
            restrict: "A",
            template: '<div class="qr-dynamic-preview"></div>',
            replace: !0,
            link: function(t, n, a) {
                t.$watch(a.qrDynamicPreview, function(t) {
                    var a = "",
                        o = t.content;
                    switch (t.type) {
                        case "url":
                            a = e.humanizeURL(o);
                            break;
                        case "txt":
                        case "phone":
                            a = o;
                            break;
                        case "contact":
                            var i = [o.firstname, o.name];
                            i = [i.filter(_.identity).join(" ")], i.push(o.organization), i = i.filter(_.identity), a = i.join(", ");
                            break;
                        case "sms":
                            a = ["To:", o.number, ",", o.message].join(" ")
                    }
                    n.text(a)
                }, !0)
            }
        }
    }
]).directive("qrViewsChart", ["scriptLoader",
    function(e) {
        var t = e.loadVisualization(["corechart"]);
        return {
            restrict: "A",
            template: '<div class="qr-views-chart"></div>',
            replace: !0,
            link: function(e, n, a) {
                function o(e) {
                    var t = new google.visualization.DataTable;
                    return t.addColumn("date", "Date"), t.addColumn("number", "Views"), e.forEach(function(e) {
                        t.addRow(e)
                    }), t
                }
                var i = {
                    pointSize: 5,
                    lineWidth: 3,
                    legend: {
                        position: "none"
                    },
                    vAxis: {
                        viewWindowMode: "pretty",
                        minValue: 1,
                        maxValue: 4,
                        gridlines: {
                            count: 3
                        },
                        textPosition: "in"
                    },
                    hAxis: {
                        gridlines: {
                            count: 0,
                            color: "transparent"
                        },
                        baselineColor: "transparent",
                        viewWindowMode: "pretty",
                        textPosition: "in"
                    },
                    chartArea: {
                        top: 10,
                        bottom: 20,
                        width: "100%",
                        height: "90%"
                    }
                };
                t.then(function() {
                    var t = new google.visualization.AreaChart(n[0]);
                    e.$watch(a.qrViewsChart, function(e) {
                        e && (i.pointSize = e.length > 40 ? 0 : 5, t.draw(o(e), i))
                    })
                })
            }
        }
    }
]),

angular.module("qrApp.services").factory("qrBackend", ["resourceStore", "$q", "$http", "dateUtils",
    function(e, t, n, a) {
        function o(e, t, o) {
            function i(e) {
                var n = e.data.map(function(e) {
                    var t = a.parseDate(e[0]),
                        n = e[1];
                    return [t, n]
                });
                if (t && o) {
                    var i;
                    i = n.length ? n[0][0] : a.addDay(o);
                    var r = [],
                        s = [];
                    if (a.forEachDay(t, i, function(e) {
                        r.push([e, 0])
                    }), n.length) {
                        var c = a.addDay(o);
                        a.forEachDay(a.addDay(n[n.length - 1][0]), c, function(e) {
                            s.push([e, 0])
                        })
                    }
                    n = r.concat(n, s)
                }
                return n
            }
            var r = "/api/dynamic/" + e + "/stats";
            return t && o && (r += "?dateFrom=" + a.formatDate(t) + "&dateTo=" + a.formatDate(o)), n.get(r).then(i)
        }

        function i() {
            return null === s && (s = [], n.get("/api/timezones").success(function(e) {
                var t = e.zones;
                t.forEach(function(e) {
                    s.push({
                        name: e.replace("_", " "),
                        id: e
                    })
                })
            })), s
        }
        var r = e("/api/dynamic", "qrid"),
            s = null;
        return {
            DynamicCode: r,
            getStats: o,
            getTimezones: i
        }
    }
]),

angular.module("qrApp.directives").directive("qrWhenScrolled", ["$timeout", "$window", "$document",
    function(e, t, n) {
        return {
            template: '<div class="spinner-inline" data-ng-show="loading"></div>',
            scope: {
                qrWhenScrolled: "&"
            },
            link: function(a, o, i) {
                function r() {
                    var e = l.getBoundingClientRect();
                    return e.top - u <= h.clientHeight
                }

                function s(t) {
                    a.loading = !1, v = t, e(c, 0)
                }

                function c() {
                    a.loading || v && r() && (a.loading = !0, m().then(s))
                }

                function d() {
                    n.unbind("scroll", c), p.unbind("resize", c)
                }
                var l = o[0],
                    u = i.scollSpace || 100,
                    p = angular.element(t),
                    h = n[0].documentElement,
                    m = a.qrWhenScrolled,
                    v = !0;
                a.loading = !1, n.bind("scroll", a.$apply.bind(a, c)), p.bind("resize", a.$apply.bind(a, c)), a.$on("$destroy", d), c()
            }
        }
    }
]),

angular.module("qrApp.services").factory("autoSave", ["$timeout",
    function(e) {
        function t(t, n) {
            function a() {
                return c ? (d = !0, void 0) : (s && e.cancel(s), s = e(function() {
                    return s = null, c = !0, t()
                }, n), void 0)
            }

            function o() {
                c = !1, d && t(), d = !1
            }

            function i() {
                s && (e.cancel(s), s = null, c = !0, t())
            }

            function r() {
                return d || s ? !0 : !1
            }
            var s = null,
                c = !1,
                d = !1;
            return n || (n = 1e3), {
                modelChanged: a,
                unlock: o,
                flush: i,
                isDirty: r
            }
        }
        return t
    }
]),

angular.module("qrApp.services").factory("auth", ["$window", "$http", "$rootScope", "$q", "$timeout", "$location", "analytics",
    function(e, t, n, a, o, i, r) {
        function s() {
            g.checkPending = !1
        }

        function c() {
            v && (v.reject(), v = null), r.trackEvent("Auth", "Popup", "open");
            var t = a.defer();
            if (m = e.open("/api/signin", "signin_popup", "height=500,width=900")) {
                var n = function() {
                    o(function() {
                        !m || m.closed ? g.isSignedIn || (t.reject(), r.trackEvent("Auth", "Popup", "cancel")) : n()
                    }, 500)
                };
                n(), v = t
            } else t.reject();
            return t.promise
        }

        function d(e) {
            e && angular.isObject(e) ? (g.isSignedIn = !0, g.nick = e.nick, h = e, v && (v.resolve(), v = null)) : (h = null, g.isSignedIn = !1, g.nick = "")
        }

        function l() {
            t.post("/api/signout").success(function() {
                d(null), i.path("/")
            })
        }

        function u(e) {
            g.isSignedIn ? e() : c().then(e)
        }

        function p() {
            return g.isSignedIn ? !1 : (i.search("next", i.path()), i.path("/signin"), !0)
        }
        var h, m = null,
            v = null;
        e.w69b_signed_in = function(e) {
            r.trackEvent("Auth", "Popup", "success"), d(e), n.$digest()
        };
        var g = {
            isSignedIn: !1,
            nick: "",
            signIn: c,
            signOut: l,
            checkPending: !1
        };
        n.auth = g;
        var f = {
            isSignedIn: function() {
                return g.isSignedIn
            },
            setAuthData: d,
            withAuth: u,
            signInIfNeeded: p,
            signIn: c,
            signOut: l,
            checkAuth: s
        };
        return f
    }
]),

angular.module("qrApp.directives").directive("qrGenerateWidget", function() {
    return {
        templateUrl: "views/generateWidget.html",
        controller: "GenerateWidgetCtrl",
        scope: {
            qrcode: "=",
            staticContent: "="
        },
        replace: !0,
        restrict: "EA",
        link: function() {}
    }
}),

angular.module("qrApp.ctrls").controller("GenerateCtrl", ["$scope", "auth", "qrBackend", "$location", "$routeParams", "analytics",
    function(e, t, n, a, o, i) {
        var r = n.DynamicCode;
        e.qrcode = {
            type: "txt",
            content: ""
        }, e.loading = !1, e.modified = !1;
        var s = o.d;
        s && (e.qrcode = /^https?:\/\//.test(s) ? {
            type: "url",
            content: s
        } : {
            type: "txt",
            content: s
        }), e.convertToDynamic = function() {
            t.withAuth(function() {
                i.trackEvent("MyCodes", "Create", "convert"), e.loading = !0;
                var t = new r({
                    title: "Converted QR Code",
                    isVirgin: !1,
                    qrcode: e.qrcode
                });
                t.$save(function() {
                    a.path("/mycodes/" + t.qrid)
                })
            })
        };
        var c = e.$watch("qrcode", function(t, n) {
            angular.equals(t, n) || (c(), e.modified = !0)
        }, !0)
    }
]),

angular.module("qrApp.services").factory("strUtils", function() {
    function e(e) {
        var t = /^https?:\/\/(.*)/.exec(e);
        return t ? t[1] : e
    }
    return {
        humanizeURL: e
    }
}).factory("dateUtils", function() {
    function e(e, t) {
        return e.getFullYear() == t.getFullYear() && e.getMonth() == t.getMonth() && e.getDate() == t.getDate()
    }

    function t(t, a, o) {
        if (!(t > a))
            for (var i = new Date(t); !e(i, a); i = n(i)) o(i)
    }

    function n(e) {
        var t = new Date(e);
        return t.setDate(t.getDate() + 1), t
    }

    function a(e) {
        function t(e) {
            return 10 > e ? "0" + e : e
        }
        return [e.getFullYear(), t(e.getMonth() + 1), t(e.getDate())].join("-")
    }

    function o(e) {
        var t = new Date(Date.parse(e));
        return t.setSeconds(0), t.setMinutes(0), t.setHours(0), t.setMilliseconds(0), t
    }
    return {
        parseDate: o,
        addDay: n,
        formatDate: a,
        dateEquals: e,
        forEachDay: t
    }
}),

angular.module("qrApp.services").factory("scriptLoader", ["$document", "$q", "$rootScope",
    function(e, t, n) {
        function a(e, t) {
            var n = s.createElement("script");
            n.type = "text/javascript", n.src = e;
            var a = s.getElementsByTagName("script")[0];
            n.onload = t, a.parentNode.insertBefore(n, a)
        }

        function o(e) {
            return s.querySelector('script[src="' + e + '"]')
        }

        function i(e) {
            function t() {
                google.load("visualization", "1", {
                    packages: e,
                    callback: function() {
                        n.$apply(function() {
                            r.resolve()
                        })
                    }
                })
            }
            var i = "https://www.google.com/jsapi";
            return o(i) ? t() : a(i, t), r.promise
        }
        var r = t.defer(),
            s = e[0];
        return {
            loadVisualization: i
        }
    }
]),

angular.module("qrApp.services").factory("resourceStore", ["$q", "$http",
    function(e, t) {
        function n() {
            var e = {}, t = [],
                n = {};
            return n.get = function(t) {
                return e.hasOwnProperty(t) ? e[t] : void 0
            }, n.put = function(n, a) {
                var o = !e.hasOwnProperty(n);
                e[n] = a, o && t.push(a)
            }, n.putFront = function(a, o) {
                n.delete(a), e[a] = o, t.unshift(o)
            }, n.delete = function(e) {
                var a = n.get(e);
                if (a) {
                    var o = t.indexOf(a);
                    t.splice(o, 1)
                }
            }, n.list = t, n
        }

        function a(a, o) {
            function i(e) {
                angular.copy(e || {}, this)
            }

            function r(e, t, n) {
                var a;
                t && (a = function(e) {
                    t(e.data)
                }), e.then(a, n)
            }

            function s(e) {
                return e ? [a, e].join("/") : a
            }
            var c = n(),
                d = i.prototype;
            d.$save = function(e, n) {
                var a = this,
                    o = t.post(s(this.getKey()), this).success(function(e) {
                        e && angular.copy(e, a), c.putFront(a.getKey(), a)
                    });
                r(o, e, n)
            }, d.$delete = function(e, n) {
                var a = this.getKey();
                c.delete(a);
                var o = t.delete(s(a));
                r(o, e, n)
            }, d.getKey = function() {
                return this[o]
            }, i.getByKey = function(n, a, o) {
                var d, l = c.get(n);
                return l ? d = e.when(l) : (l = new i, d = t.get(s(n)).success(function(e) {
                    angular.copy(e, l)
                }).error(function() {
                    c.delete(n)
                }), c.put(n, l)), r(d, a, o), l
            };
            var l = !0;
            return i.list = function() {
                var n = c.list;
                return n.loadNextPage = function() {
                    var r = e.defer(),
                        s = null;
                    if (l) l = !1;
                    else {
                        if (!n.nextCursor) return r.resolve(!1), r.promise;
                        s = {
                            cursor: n.nextCursor
                        }
                    }
                    return t.get(a, {
                        params: s
                    }).success(function(e) {
                        e.items.forEach(function(e) {
                            c.put(e[o], new i(e))
                        }), n.nextCursor = e.cursor, n.firstPageLoaded = !0, r.resolve(e.cursor ? !0 : !1)
                    }).error(r.reject), r.promise
                }, n
            }, i
        }
        return a.orderedMap = n, a
    }
]),

angular.module("qrApp.services").provider("httpInterceptor", function() {
    var e = 3,
        t = "/signin";
    this.setMaxRetries = function(t) {
        e = t
    }, this.setSignInPath = function(e) {
        t = e
    }, this.$get = ["$q", "$injector", "$location", "$rootScope", "$timeout",
        function(n, a, o, i, r) {
            function s() {
                return u || (u = a.get("$http")), u
            }

            function c(e) {
                var t = Math.min(Math.pow(2, e.retryCount), 32),
                    n = 1e3 * t + 1e3 * Math.random();
                return i.$broadcast("http:retryScheduled", e, n), r(function() {
                    return s()(e)
                }, n)
            }

            function d(e, t) {
                var n = angular.copy(e.config);
                return n.retryCount ? n.retryCount++ : n.retryCount = 1, !t || t >= n.retryCount ? c(n) : null
            }

            function l(a) {
                var r = a.status;
                if (0 === r) return d(a);
                if (r >= 500 && 600 > r) {
                    var s = d(a, e);
                    if (s) return s;
                    i.$broadcast("http:error", "server", a)
                } else 403 == r ? !i.auth || !i.auth.isSignedIn && o.path() != t ? (o.search("next", o.path()), o.path(t)) : i.$broadcast("http:error", "auth", a) : 404 == r ? i.$broadcast("http:error", "notfound", a) : i.$broadcast("http:error", "unknown", a);
                return n.reject(a)
            }
            var u;
            return function(e) {
                return e.then(null, l)
            }
        }
    ]
}),

angular.module("qrApp.services").factory("httpErrorNotifier", ["$rootScope", "statusbar", "$timeout", "analytics",
    function(e, t, n, a) {
        function o(e, n, o) {
            if (o.config.notifyErrors !== !1) {
                r(), "unknown" == n || "server" == n ? t.showError("Oups! An error occured during communication with our backend. Please try to reload the page.", null) : "auth" == n ? t.showMessage("You are not allowed to view this page.") : "notfound" == n && t.showMessage("The requested page does not exist.");
                var i = [o.status, o.config.url].join(" ");
                a.trackEvent("error", "http:" + n, i)
            }
        }

        function i(e) {
            var n = "Failed to communicate with backend. ",
                a = Math.floor(e / 1e3);
            n += 0 >= a ? "Retrying..." : "Retrying in " + a + " seconds.", t.showMessage(n, 3e3)
        }

        function r() {
            c && (n.cancel(c), c = null)
        }

        function s(e, t, a) {
            function o() {
                a -= 1e3, i(a), a > 0 && (c = n(o, 1e3))
            }
            t.notifyErrors !== !1 && (3e3 > a || (r(), i(a), c = n(o, 1e3)))
        }
        var c = null;
        return e.$on("http:error", o), e.$on("http:retryScheduled", s), {}
    }
]);
