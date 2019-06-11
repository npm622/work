"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_dom_1 = tslib_1.__importDefault(require("react-dom"));
const react_redux_1 = require("react-redux");
const react_hot_loader_1 = require("react-hot-loader");
const redux_1 = require("redux");
const redux_thunk_1 = tslib_1.__importDefault(require("redux-thunk"));
const fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
const connected_react_router_1 = require("connected-react-router");
const history_1 = require("history");
class default_1 {
    constructor(initialState, ...icons) {
        this.initialState = initialState;
        this.middlewares = [];
        if (icons.length > 0) {
            fontawesome_svg_core_1.library.add(...icons);
        }
    }
    createHistory(historySupplier = (present => present ? history_1.createBrowserHistory({ basename: process.env.PUBLIC_URL }) : history_1.createMemoryHistory())) {
        const history = historySupplier(typeof window !== 'undefined');
        this.middlewares.push(connected_react_router_1.routerMiddleware(history));
        return history;
    }
    createStore(rootReducer, extraArg) {
        if (!extraArg) {
            this.middlewares.push(redux_thunk_1.default);
        }
        else {
            this.middlewares.push(redux_thunk_1.default.withExtraArgument(extraArg));
        }
        return redux_1.createStore(rootReducer, this.initialState, this.composeEnhancers()(redux_1.applyMiddleware(...this.middlewares)));
    }
    composeEnhancers() {
        if (process.env.NODE_ENV === 'production') {
            return redux_1.compose;
        }
        else {
            this.setupLoggerMiddleware();
            return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
        }
    }
    setupLoggerMiddleware() {
        const { createLogger } = require('redux-logger');
        this.middlewares.push(createLogger({ duration: true }));
    }
    createRenderer(history, store, documentId) {
        return (Component) => react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(connected_react_router_1.ConnectedRouter, { history: history },
                react_1.default.createElement(react_hot_loader_1.AppContainer, null,
                    react_1.default.createElement(Component, null)))), document.getElementById(documentId));
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map