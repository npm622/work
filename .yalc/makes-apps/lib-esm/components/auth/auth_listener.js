"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const mongodb_stitch_browser_sdk_1 = require("mongodb-stitch-browser-sdk");
class StitchAuthListener extends react_1.default.Component {
    get authListener() {
        return {
            onAuthEvent: (auth) => this.props.setUser(auth.user),
        };
    }
    componentDidMount() {
        if (mongodb_stitch_browser_sdk_1.Stitch.defaultAppClient) {
            mongodb_stitch_browser_sdk_1.Stitch.defaultAppClient.auth.addAuthListener(this.authListener);
        }
        const { stitch, fetchUser } = this.props;
        if (stitch) {
            fetchUser(stitch.email || '');
        }
    }
    componentDidUpdate(prevProps) {
        const { stitch, fetchUser } = this.props;
        const { stitch: prevStitch } = prevProps;
        let prevEmail;
        if (prevStitch) {
            prevEmail = prevStitch.email;
        }
        if (stitch && stitch.email !== prevEmail) {
            fetchUser(stitch.email || '');
        }
    }
    componentWillUnmount() {
        if (mongodb_stitch_browser_sdk_1.Stitch.defaultAppClient) {
            mongodb_stitch_browser_sdk_1.Stitch.defaultAppClient.auth.removeAuthListener(this.authListener);
        }
    }
    render() {
        return this.props.children;
    }
}
exports.default = StitchAuthListener;
//# sourceMappingURL=auth_listener.js.map