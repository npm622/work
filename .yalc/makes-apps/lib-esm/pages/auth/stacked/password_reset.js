"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../../components");
const pages_1 = require("../../../pages");
const PasswordResetPage = ({ email, homeUrl, links, sendPasswordReset }) => (react_1.default.createElement(pages_1.Page, { type: "stacked" }, (_a) => {
    var baseProps = tslib_1.__rest(_a, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(pages_1.StackedPageLinks, Object.assign({}, baseProps, { links: links })),
        react_1.default.createElement(pages_1.StackedPageContent, Object.assign({}, baseProps),
            react_1.default.createElement("h1", { className: "stacked-page-content-header" }, "password reset"),
            react_1.default.createElement(components_1.Form, { initialForm: { email: email || '' }, onSubmit: ({ data, reset }) => Promise.resolve(sendPasswordReset(data.email))
                    .then(() => 'goto_home')
                    .catch(() => reset(data)), redirects: { goto_home: homeUrl } }, ({ classer, errors, submittable, setFormKey, validateForm }) => [
                react_1.default.createElement(components_1.FormControl, { classer: classer, label: "email", error: errors.email },
                    react_1.default.createElement(components_1.TextInput, { type: "email", disabled: !!email, placeholder: "abigail@gmail.com", onBlur: () => validateForm('email'), onChange: email => setFormKey('email', email) })),
                react_1.default.createElement(components_1.FormSubmit, { className: classer.name('submit'), submittable: submittable }),
            ]))));
}));
exports.default = PasswordResetPage;
//# sourceMappingURL=password_reset.js.map