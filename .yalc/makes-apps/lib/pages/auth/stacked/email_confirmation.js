"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var components_1 = require("../../../components");
var pages_1 = require("../../../pages");
var EmailConfirmationPage = function (_a) {
    var links = _a.links, loginUrl = _a.loginUrl, sendEmailConfirmation = _a.sendEmailConfirmation;
    return (react_1.default.createElement(pages_1.Page, { type: "stacked" }, function (_a) {
        var baseProps = tslib_1.__rest(_a, []);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(pages_1.StackedPageLinks, tslib_1.__assign({}, baseProps, { links: links })),
            react_1.default.createElement(pages_1.StackedPageContent, tslib_1.__assign({}, baseProps),
                react_1.default.createElement("h1", { className: "stacked-page-content-header" }, "email confirmation"),
                react_1.default.createElement(components_1.Form, { initialForm: { email: '' }, onSubmit: function (_a) {
                        var data = _a.data, reset = _a.reset;
                        return Promise.resolve(sendEmailConfirmation(data.email))
                            .then(function () { return 'goto_login'; })
                            .catch(function () { return reset(data); });
                    }, redirects: { goto_login: loginUrl } }, function (_a) {
                    var classer = _a.classer, errors = _a.errors, submittable = _a.submittable, setFormKey = _a.setFormKey, validateForm = _a.validateForm;
                    return [
                        react_1.default.createElement(components_1.FormControl, { classer: classer, label: "email", error: errors.email },
                            react_1.default.createElement(components_1.TextInput, { type: "email", placeholder: "liam@gmail.com", onBlur: function () { return validateForm('email'); }, onChange: function (email) { return setFormKey('email', email); } })),
                        react_1.default.createElement(components_1.FormSubmit, { className: classer.name('submit'), submittable: submittable }),
                    ];
                }))));
    }));
};
exports.default = EmailConfirmationPage;
//# sourceMappingURL=email_confirmation.js.map