"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var query_string_1 = tslib_1.__importDefault(require("query-string"));
var pages_1 = require("../../../pages");
var parseSearch = function (search) {
    if (!search) {
        return;
    }
    var _a = query_string_1.default.parse(search), token = _a.token, tokenId = _a.tokenId;
    return { token: token, tokenId: tokenId };
};
var ConfirmEmailPage = function (_a) {
    var links = _a.links, loginUrl = _a.loginUrl, search = _a.search, confirmEmail = _a.confirmEmail;
    var data = parseSearch(search);
    if (data) {
        var token = data.token, tokenId = data.tokenId;
        confirmEmail(token, tokenId);
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: loginUrl });
    }
    return (react_1.default.createElement(pages_1.Page, { type: "stacked" }, function (_a) {
        var baseProps = tslib_1.__rest(_a, []);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(pages_1.StackedPageLinks, tslib_1.__assign({}, baseProps, { links: links })),
            react_1.default.createElement(pages_1.StackedPageContent, tslib_1.__assign({}, baseProps),
                react_1.default.createElement("h1", { className: "stacked-page-content-header" }, "confirm email"),
                react_1.default.createElement("p", null, "thank you for waiting while we confirm your email..."))));
    }));
};
exports.default = ConfirmEmailPage;
//# sourceMappingURL=confirm_email.js.map