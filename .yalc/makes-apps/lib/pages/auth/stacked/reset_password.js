"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var query_string_1 = tslib_1.__importDefault(require("query-string"));
var components_1 = require("../../../components");
var pages_1 = require("../../../pages");
var parseSearch = function (search) {
    if (!search) {
        return;
    }
    var _a = query_string_1.default.parse(search), token = _a.token, tokenId = _a.tokenId;
    return { token: token, tokenId: tokenId };
};
var ResetPasswordPage = function (_a) {
    var homeUrl = _a.homeUrl, links = _a.links, search = _a.search, resetPassword = _a.resetPassword;
    return (react_1.default.createElement(pages_1.Page, { type: "stacked" }, function (_a) {
        var baseProps = tslib_1.__rest(_a, []);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(pages_1.StackedPageLinks, tslib_1.__assign({}, baseProps, { links: links })),
            react_1.default.createElement(pages_1.StackedPageContent, tslib_1.__assign({}, baseProps),
                react_1.default.createElement("h1", { className: "stacked-page-content-header" }, "reset password"),
                react_1.default.createElement(components_1.Form, { initialForm: { password: '' }, onSubmit: function (_a) {
                        var password = _a.data.password, reset = _a.reset;
                        var data = parseSearch(search);
                        if (data) {
                            var token = data.token, tokenId = data.tokenId;
                            Promise.resolve(resetPassword(token, tokenId, password))
                                .then(function () { return 'goto_home'; })
                                .catch(function () { return reset({ password: password }); });
                        }
                    }, redirects: { goto_home: homeUrl } }, function (_a) {
                    var classer = _a.classer, errors = _a.errors, submittable = _a.submittable, setFormKey = _a.setFormKey, validateForm = _a.validateForm;
                    return [
                        react_1.default.createElement(components_1.FormControl, { classer: classer, label: "password", error: errors.password },
                            react_1.default.createElement(components_1.TextInput, { type: "password", placeholder: "password", onBlur: function () { return validateForm('password'); }, onChange: function (password) { return setFormKey('password', password); } })),
                        react_1.default.createElement(components_1.FormSubmit, { className: classer.name('submit'), submittable: submittable }),
                    ];
                }))));
    }));
};
exports.default = ResetPasswordPage;
//# sourceMappingURL=reset_password.js.map