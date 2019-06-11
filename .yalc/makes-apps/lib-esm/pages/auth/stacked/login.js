"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../../components");
const pages_1 = require("../../../pages");
const LoginPage = ({ links, login }) => (react_1.default.createElement(pages_1.Page, { type: "stacked" }, (_a) => {
    var baseProps = tslib_1.__rest(_a, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(pages_1.StackedPageLinks, Object.assign({}, baseProps, { links: links })),
        react_1.default.createElement(pages_1.StackedPageContent, Object.assign({}, baseProps),
            react_1.default.createElement("h1", { className: "stacked-page-content-header" }, "login"),
            react_1.default.createElement(components_1.Form, { initialForm: { email: '', password: '' }, onSubmit: ({ data: { email, password } }) => login(email, password) }, ({ classer, errors, submittable, setFormKey, validateForm }) => [
                react_1.default.createElement(components_1.FormControl, { classer: classer, label: "email", error: errors.email },
                    react_1.default.createElement(components_1.TextInput, { type: "email", placeholder: "liam@gmail.com", onBlur: () => validateForm('email'), onChange: email => setFormKey('email', email) })),
                react_1.default.createElement(components_1.FormControl, { classer: classer, label: "password", error: errors.password },
                    react_1.default.createElement(components_1.TextInput, { type: "password", placeholder: "password", onBlur: () => validateForm('password'), onChange: password => setFormKey('password', password) })),
                react_1.default.createElement(components_1.FormSubmit, { className: classer.name('submit'), submittable: submittable }),
            ]))));
}));
exports.default = LoginPage;
//# sourceMappingURL=login.js.map