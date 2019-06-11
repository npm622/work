"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const query_string_1 = tslib_1.__importDefault(require("query-string"));
const components_1 = require("../../../components");
const pages_1 = require("../../../pages");
const parseSearch = (search) => {
    if (!search) {
        return;
    }
    const { token, tokenId } = query_string_1.default.parse(search);
    return { token: token, tokenId: tokenId };
};
const ResetPasswordPage = ({ homeUrl, links, search, resetPassword }) => {
    return (react_1.default.createElement(pages_1.Page, { type: "stacked" }, (_a) => {
        var baseProps = tslib_1.__rest(_a, []);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(pages_1.StackedPageLinks, Object.assign({}, baseProps, { links: links })),
            react_1.default.createElement(pages_1.StackedPageContent, Object.assign({}, baseProps),
                react_1.default.createElement("h1", { className: "stacked-page-content-header" }, "reset password"),
                react_1.default.createElement(components_1.Form, { initialForm: { password: '' }, onSubmit: ({ data: { password }, reset }) => {
                        const data = parseSearch(search);
                        if (data) {
                            const { token, tokenId } = data;
                            Promise.resolve(resetPassword(token, tokenId, password))
                                .then(() => 'goto_home')
                                .catch(() => reset({ password }));
                        }
                    }, redirects: { goto_home: homeUrl } }, ({ classer, errors, submittable, setFormKey, validateForm }) => [
                    react_1.default.createElement(components_1.FormControl, { classer: classer, label: "password", error: errors.password },
                        react_1.default.createElement(components_1.TextInput, { type: "password", placeholder: "password", onBlur: () => validateForm('password'), onChange: password => setFormKey('password', password) })),
                    react_1.default.createElement(components_1.FormSubmit, { className: classer.name('submit'), submittable: submittable }),
                ]))));
    }));
};
exports.default = ResetPasswordPage;
//# sourceMappingURL=reset_password.js.map