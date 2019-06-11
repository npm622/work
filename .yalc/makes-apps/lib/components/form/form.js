"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var utils_1 = require("../utils");
var defaultProps = {
    redirects: {},
    rootClass: 'form',
};
var checkIsClean = function (key, value, clean, validation) {
    var isClean = function (v, c) { return v === c; };
    if (validation) {
        var validator = validation[key];
        if (validator && validator.isClean) {
            isClean = validator.isClean;
        }
    }
    return isClean(value, clean[key]);
};
var getInitialForm = function (_a) {
    var initialForm = _a.initialForm;
    return initialForm;
};
var Form = /** @class */ (function (_super) {
    tslib_1.__extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            status: {
                pristine: true,
                redirect: '',
                submitting: false,
            },
            clean: getInitialForm(_this.props),
            data: getInitialForm(_this.props),
            dirty: {},
            errors: {},
            touched: {},
        };
        _this['submitApi'] = function () {
            return {
                data: _this.state.data,
                reset: _this.reset,
            };
        };
        _this['renderApi'] = function (classer) {
            var _a = _this.state, status = _a.status, data = _a.data, dirty = _a.dirty, errors = _a.errors, touched = _a.touched;
            return {
                classer: classer,
                status: status,
                data: data,
                dirty: dirty,
                errors: errors,
                touched: touched,
                reset: _this.reset,
                setFormKey: _this.setFormKey,
                setFormData: _this.setFormData,
                validateForm: _this.validateForm,
                submittable: !status.pristine && Object.values(errors).filter(function (e) { return !!e; }).length === 0,
            };
        };
        _this['reset'] = function (data, errors) {
            if (data === void 0) { data = {}; }
            if (errors === void 0) { errors = {}; }
            var newData = tslib_1.__assign({}, _this.state.clean, data);
            _this.setState(function () { return ({ clean: newData, data: newData, dirty: {}, errors: errors, touched: {} }); });
        };
        _this['submit'] = function (e) {
            e.preventDefault();
            var _a = _this.props.onSubmit, onSubmit = _a === void 0 ? function () { return void 0; } : _a;
            _this.setState(function (_a) {
                var status = _a.status;
                return ({ status: tslib_1.__assign({}, status, { submitting: true }) });
            }, function () {
                return Promise.resolve(onSubmit(_this.submitApi())).then(function (redirect) {
                    if (redirect === void 0) { redirect = ''; }
                    return _this.setState(function (_a) {
                        var status = _a.status;
                        return ({ status: tslib_1.__assign({}, status, { redirect: redirect, submitting: false }) });
                    });
                });
            });
        };
        _this['setFormKey'] = function (key, value) {
            var validation = _this.props.validation;
            var clean = _this.state.clean;
            _this.setState(function (state) {
                var _a, _b, _c, _d;
                return (tslib_1.__assign({}, state, { status: tslib_1.__assign({}, state.status, { pristine: false }), data: tslib_1.__assign({}, state.data, (_a = {}, _a[key] = value, _a)), dirty: tslib_1.__assign({}, state.dirty, (_b = {}, _b[key] = !checkIsClean(key, value, clean, validation), _b)), errors: tslib_1.__assign({}, state.errors, (_c = {}, _c[key] = '', _c)), touched: tslib_1.__assign({}, state.errors, (_d = {}, _d[key] = true, _d)) }));
            });
        };
        _this['setFormData'] = function (newData) {
            var validation = _this.props.validation;
            var clean = _this.state.clean;
            var dirty = Object.keys(newData).reduce(function (acc, key) {
                var _a;
                return (tslib_1.__assign({}, acc, (_a = {}, _a[key] = !checkIsClean(key, newData[key], clean, validation), _a)));
            }, tslib_1.__assign({}, _this.state.dirty));
            var errors = Object.keys(newData).reduce(function (acc, key) {
                var _a;
                return (tslib_1.__assign({}, acc, (_a = {}, _a[key] = '', _a)));
            }, tslib_1.__assign({}, _this.state.errors));
            var touched = Object.keys(newData).reduce(function (acc, key) {
                var _a;
                return (tslib_1.__assign({}, acc, (_a = {}, _a[key] = true, _a)));
            }, tslib_1.__assign({}, _this.state.touched));
            _this.setState(function (state) { return (tslib_1.__assign({}, state, { status: tslib_1.__assign({}, state.status, { pristine: Object.values(dirty).every(function (d) { return !d; }) }), data: tslib_1.__assign({}, state.data, newData), dirty: dirty,
                errors: errors,
                touched: touched })); });
        };
        _this['validateForm'] = function (key) {
            var validation = _this.props.validation;
            var data = _this.state.data;
            if (validation) {
                var validator = validation[key];
                if (validator && validator.isValid) {
                    var response = validator.isValid(data[key], data);
                    if (response) {
                        Promise.resolve(response).then(function (newErrors) {
                            if (Object.keys(newErrors).length > 0) {
                                _this.setState(function (state) { return ({ errors: tslib_1.__assign({}, state.errors, newErrors) }); });
                            }
                        });
                    }
                }
            }
        };
        return _this;
    }
    /*
    when debugging why the form looks funny, don't forget you removed a top level wrapper here
  
    --    <div class=`${rootClass}-layout` />    --
     */
    Form.prototype.render = function () {
        var _a = this.props, children = _a.children, redirects = _a.redirects, rootClass = _a.rootClass;
        var redirect = this.state.status.redirect;
        var redirectTo = redirects[redirect];
        if (redirectTo) {
            return react_1.default.createElement(react_router_dom_1.Redirect, { to: redirectTo });
        }
        var classer = new utils_1.Classer(rootClass);
        return (react_1.default.createElement("form", { className: classer.name(), onSubmit: this.submit }, react_1.default.Children.map(children(this.renderApi(classer)), function (child) {
            return react_1.default.cloneElement(child, { className: classnames_1.default(child.props.className, classer.name('child')) });
        })));
    };
    Form.defaultProps = defaultProps;
    return Form;
}(react_1.default.Component));
exports.default = Form;
//# sourceMappingURL=form.js.map