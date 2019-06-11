"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var react_redux_1 = require("react-redux");
var react_hot_loader_1 = require("react-hot-loader");
var redux_1 = require("redux");
var redux_thunk_1 = tslib_1.__importDefault(require("redux-thunk"));
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var connected_react_router_1 = require("connected-react-router");
var history_1 = require("history");
var default_1 = /** @class */ (function () {
    function default_1(initialState) {
        var icons = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            icons[_i - 1] = arguments[_i];
        }
        this.initialState = initialState;
        this.middlewares = [];
        if (icons.length > 0) {
            fontawesome_svg_core_1.library.add.apply(fontawesome_svg_core_1.library, icons);
        }
    }
    default_1.prototype.createHistory = function (historySupplier) {
        if (historySupplier === void 0) { historySupplier = (function (present) {
            return present ? history_1.createBrowserHistory({ basename: process.env.PUBLIC_URL }) : history_1.createMemoryHistory();
        }); }
        var history = historySupplier(typeof window !== 'undefined');
        this.middlewares.push(connected_react_router_1.routerMiddleware(history));
        return history;
    };
    default_1.prototype.createStore = function (rootReducer, extraArg) {
        if (!extraArg) {
            this.middlewares.push(redux_thunk_1.default);
        }
        else {
            this.middlewares.push(redux_thunk_1.default.withExtraArgument(extraArg));
        }
        return redux_1.createStore(rootReducer, this.initialState, this.composeEnhancers()(redux_1.applyMiddleware.apply(void 0, this.middlewares)));
    };
    default_1.prototype.composeEnhancers = function () {
        if (process.env.NODE_ENV === 'production') {
            return redux_1.compose;
        }
        else {
            this.setupLoggerMiddleware();
            return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
        }
    };
    default_1.prototype.setupLoggerMiddleware = function () {
        var createLogger = require('redux-logger').createLogger;
        this.middlewares.push(createLogger({ duration: true }));
    };
    default_1.prototype.createRenderer = function (history, store, documentId) {
        return function (Component) {
            return react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
                react_1.default.createElement(connected_react_router_1.ConnectedRouter, { history: history },
                    react_1.default.createElement(react_hot_loader_1.AppContainer, null,
                        react_1.default.createElement(Component, null)))), document.getElementById(documentId));
        };
    };
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=index.js.map