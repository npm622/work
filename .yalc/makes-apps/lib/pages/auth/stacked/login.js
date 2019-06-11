"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var components_1 = require("../../../components");
var pages_1 = require("../../../pages");
var LoginPage = function (_a) {
    var links = _a.links, login = _a.login;
    return (react_1.default.createElement(pages_1.Page, { type: "stacked" }, function (_a) {
        var baseProps = tslib_1.__rest(_a, []);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(pages_1.StackedPageLinks, tslib_1.__assign({}, baseProps, { links: links })),
            react_1.default.createElement(pages_1.StackedPageContent, tslib_1.__assign({}, baseProps),
                react_1.default.createElement("h1", { className: "stacked-page-content-header" }, "login"),
                react_1.default.createElement(components_1.Form, { initialForm: { email: '', password: '' }, onSubmit: function (_a) {
                        var _b = _a.data, email = _b.email, password = _b.password;
                        return login(email, password);
                    } }, function (_a) {
                    var classer = _a.classer, errors = _a.errors, submittable = _a.submittable, setFormKey = _a.setFormKey, validateForm = _a.validateForm;
                    return [
                        react_1.default.createElement(components_1.FormControl, { classer: classer, label: "email", error: errors.email },
                            react_1.default.createElement(components_1.TextInput, { type: "email", placeholder: "liam@gmail.com", onBlur: function () { return validateForm('email'); }, onChange: function (email) { return setFormKey('email', email); } })),
                        react_1.default.createElement(components_1.FormControl, { classer: classer, label: "password", error: errors.password },
                            react_1.default.createElement(components_1.TextInput, { type: "password", placeholder: "password", onBlur: function () { return validateForm('password'); }, onChange: function (password) { return setFormKey('password', password); } })),
                        react_1.default.createElement(components_1.FormSubmit, { className: classer.name('submit'), submittable: submittable }),
                    ];
                }))));
    }));
};
exports.default = LoginPage;
//# sourceMappingURL=login.js.map