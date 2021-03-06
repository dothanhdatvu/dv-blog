! function(e, t) {
    if ("function" == typeof define && define.amd) define("ReactTagsInput", ["module", "exports", "react"], t);
    else if ("undefined" != typeof exports) t(module, exports, require("react"));
    else {
        var n = {
            exports: {}
        };
        t(n, n.exports, e.React), e.ReactTagsInput = n.exports
    }
}(this, function(e, t, n) {
    "use strict";

    function a(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function u(e, t) {
        var n = {};
        for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
        return n
    }

    function i(e) {
        for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
        return t
    }

    function l(e) {
        return window.clipboardData ? window.clipboardData.getData("Text") : e.clipboardData ? e.clipboardData.getData("text/plain") : ""
    }

    function p(e) {
        var t = e.tag,
            n = e.key,
            a = e.onRemove,
            r = e.classNameRemove,
            o = u(e, ["tag", "key", "onRemove", "classNameRemove"]);
        return h["default"].createElement("span", v({
            key: n
        }, o), t, h["default"].createElement("a", {
            className: r,
            onClick: function(e) {
                return a(n)
            }
        }))
    }

    function c(e) {
        var t = e.onChange,
            n = e.value,
            a = u(e, ["onChange", "value"]);
        return h["default"].createElement("input", v({
            type: "text",
            onChange: t,
            value: n
        }, a))
    }

    function d(e, t) {
        return h["default"].createElement("span", null, e, t)
    }

    function f(e) {
        return e.split(" ").map(function(e) {
            return e.trim()
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var h = a(n),
        y = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }(),
        v = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        };
    p.propTypes = {
        key: h["default"].PropTypes.number,
        tag: h["default"].PropTypes.string,
        onRemove: h["default"].PropTypes.func,
        classNameRemove: h["default"].PropTypes.string
    }, c.propTypes = {
        value: h["default"].PropTypes.string,
        onChange: h["default"].PropTypes.func
    };
    var g = {
            className: "react-tagsinput-input",
            placeholder: "Add a tag"
        },
        m = function(e) {
            function t() {
                r(this, t);
                var e = o(this, Object.getPrototypeOf(t).call(this));
                return e.state = {
                    tag: "",
                    isFocused: !1
                }, e.focus = e.focus.bind(e), e.blur = e.blur.bind(e), e
            }
            return s(t, e), y(t, [{
                key: "_removeTag",
                value: function(e) {
                    var t = this.props.value.concat([]);
                    if (e > -1 && e < t.length) {
                        var n = t.splice(e, 1);
                        this.props.onChange(t, n, [e])
                    }
                }
            }, {
                key: "_clearInput",
                value: function() {
                    this.setState({
                        tag: ""
                    })
                }
            }, {
                key: "_addTags",
                value: function(e) {
                    var t = this.props,
                        n = t.validationRegex,
                        a = t.onChange,
                        r = t.onlyUnique,
                        o = t.maxTags,
                        s = t.value;
                    if (r && (e = i(e), e = e.filter(function(e) {
                            return -1 === s.indexOf(e)
                        })), e = e.filter(function(e) {
                            return n.test(e)
                        }), e = e.filter(function(e) {
                            return e.trim().length > 0
                        }), o >= 0) {
                        var u = Math.max(o - s.length, 0);
                        e = e.slice(0, u)
                    }
                    if (e.length > 0) {
                        for (var l = s.concat(e), p = [], c = 0; c < e.length; c++) p.push(s.length + c);
                        return a(l, e, p), this._clearInput(), !0
                    }
                    return !1
                }
            }, {
                key: "focus",
                value: function() {
                    this.refs.input.focus(), this.handleOnFocus()
                }
            }, {
                key: "blur",
                value: function() {
                    this.refs.input.blur(), this.handleOnBlur()
                }
            }, {
                key: "accept",
                value: function() {
                    var e = this.state.tag;
                    return "" !== e ? this._addTags([e]) : !1
                }
            }, {
                key: "addTag",
                value: function(e) {
                    return this._addTags([e])
                }
            }, {
                key: "clearInput",
                value: function() {
                    this._clearInput()
                }
            }, {
                key: "handlePaste",
                value: function(e) {
                    var t = this.props,
                        n = t.addOnPaste,
                        a = t.pasteSplit;
                    if (n) {
                        e.preventDefault();
                        var r = l(e),
                            o = a(r);
                        this._addTags(o)
                    }
                }
            }, {
                key: "handleKeyDown",
                value: function(e) {
                    var t = this.props,
                        n = t.value,
                        a = t.removeKeys,
                        r = t.addKeys,
                        o = this.state.tag,
                        s = "" === o,
                        u = -1 !== r.indexOf(e.keyCode),
                        i = -1 !== a.indexOf(e.keyCode);
                    u && this.accept() && e.preventDefault(), i && n.length > 0 && s && (e.preventDefault(), this._removeTag(n.length - 1))
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    e.target === this.refs.div && this.focus()
                }
            }, {
                key: "handleChange",
                value: function(e) {
                    var t = this.props.inputProps.onChange,
                        n = e.target.value;
                    t && t(e), this.setState({
                        tag: n
                    })
                }
            }, {
                key: "handleOnFocus",
                value: function(e) {
                    var t = this.props.inputProps.onFocus;
                    t && t(e), this.setState({
                        isFocused: !0
                    })
                }
            }, {
                key: "handleOnBlur",
                value: function(e) {
                    var t = this.props.inputProps.onBlur;
                    this.setState({
                        isFocused: !1
                    }), null != e && (t && t(e), this.props.addOnBlur && this._addTags([e.target.value]))
                }
            }, {
                key: "handleRemove",
                value: function(e) {
                    this._removeTag(e)
                }
            }, {
                key: "inputProps",
                value: function() {
                    var e = this.props.inputProps,
                        t = (e.onChange, e.onFocus, e.onBlur, u(e, ["onChange", "onFocus", "onBlur"]));
                    return v({}, g, t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.value,
                        a = (t.onChange, t.tagProps),
                        r = t.renderLayout,
                        o = t.renderTag,
                        s = t.renderInput,
                        i = (t.addKeys, t.removeKeys, t.className),
                        l = t.focusedClassName,
                        p = u(t, ["value", "onChange", "tagProps", "renderLayout", "renderTag", "renderInput", "addKeys", "removeKeys", "className", "focusedClassName"]),
                        c = this.state,
                        d = c.tag,
                        f = c.isFocused;
                    f && (i += " " + l);
                    var y = n.map(function(t, n) {
                            return o(v({
                                key: n,
                                tag: t,
                                onRemove: e.handleRemove.bind(e)
                            }, a))
                        }),
                        g = s(v({
                            ref: "input",
                            value: d,
                            onPaste: this.handlePaste.bind(this),
                            onKeyDown: this.handleKeyDown.bind(this),
                            onChange: this.handleChange.bind(this),
                            onFocus: this.handleOnFocus.bind(this),
                            onBlur: this.handleOnBlur.bind(this)
                        }, this.inputProps()));
                    return h["default"].createElement("div", v({
                        ref: "div",
                        onClick: this.handleClick.bind(this),
                        className: i
                    }, p), r(y, g))
                }
            }]), t
        }(h["default"].Component);
    m.propTypes = {
        focusedClassName: h["default"].PropTypes.string,
        addKeys: h["default"].PropTypes.array,
        addOnBlur: h["default"].PropTypes.bool,
        addOnPaste: h["default"].PropTypes.bool,
        inputProps: h["default"].PropTypes.object,
        onChange: h["default"].PropTypes.func.isRequired,
        removeKeys: h["default"].PropTypes.array,
        renderInput: h["default"].PropTypes.func,
        renderTag: h["default"].PropTypes.func,
        renderLayout: h["default"].PropTypes.func,
        pasteSplit: h["default"].PropTypes.func,
        tagProps: h["default"].PropTypes.object,
        onlyUnique: h["default"].PropTypes.bool,
        value: h["default"].PropTypes.array.isRequired,
        maxTags: h["default"].PropTypes.number,
        validationRegex: h["default"].PropTypes.instanceOf(RegExp)
    }, m.defaultProps = {
        className: "react-tagsinput",
        focusedClassName: "react-tagsinput--focused",
        addKeys: [9, 13],
        addOnBlur: !1,
        addOnPaste: !1,
        inputProps: {},
        removeKeys: [8],
        renderInput: c,
        renderTag: p,
        renderLayout: d,
        pasteSplit: f,
        tagProps: {
            className: "react-tagsinput-tag",
            classNameRemove: "react-tagsinput-remove"
        },
        onlyUnique: !1,
        maxTags: -1,
        validationRegex: /.*/
    }, t["default"] = m, e.exports = t["default"]
});
