"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const query_string_1 = tslib_1.__importDefault(require("query-string"));
const pages_1 = require("../../../pages");
const parseSearch = (search) => {
    if (!search) {
        return;
    }
    const { token, tokenId } = query_string_1.default.parse(search);
    return { token: token, tokenId: tokenId };
};
const ConfirmEmailPage = ({ links, loginUrl, search, confirmEmail }) => {
    const data = parseSearch(search);
    if (data) {
        const { token, tokenId } = data;
        confirmEmail(token, tokenId);
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: loginUrl });
    }
    return (react_1.default.createElement(pages_1.Page, { type: "stacked" }, (_a) => {
        var baseProps = tslib_1.__rest(_a, []);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(pages_1.StackedPageLinks, Object.assign({}, baseProps, { links: links })),
            react_1.default.createElement(pages_1.StackedPageContent, Object.assign({}, baseProps),
                react_1.default.createElement("h1", { className: "stacked-page-content-header" }, "confirm email"),
                react_1.default.createElement("p", null, "thank you for waiting while we confirm your email..."))));
    }));
};
exports.default = ConfirmEmailPage;
//# sourceMappingURL=confirm_email.js.map