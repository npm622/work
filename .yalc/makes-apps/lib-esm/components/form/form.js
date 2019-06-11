"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const utils_1 = require("../utils");
const defaultProps = {
    redirects: {},
    rootClass: 'form',
};
const checkIsClean = (key, value, clean, validation) => {
    let isClean = (v, c) => v === c;
    if (validation) {
        const validator = validation[key];
        if (validator && validator.isClean) {
            isClean = validator.isClean;
        }
    }
    return isClean(value, clean[key]);
};
const getInitialForm = ({ initialForm }) => initialForm;
class Form extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: {
                pristine: true,
                redirect: '',
                submitting: false,
            },
            clean: getInitialForm(this.props),
            data: getInitialForm(this.props),
            dirty: {},
            errors: {},
            touched: {},
        };
        this['submitApi'] = () => {
            return {
                data: this.state.data,
                reset: this.reset,
            };
        };
        this['renderApi'] = (classer) => {
            const { status, data, dirty, errors, touched } = this.state;
            return {
                classer,
                status,
                data,
                dirty,
                errors,
                touched,
                reset: this.reset,
                setFormKey: this.setFormKey,
                setFormData: this.setFormData,
                validateForm: this.validateForm,
                submittable: !status.pristine && Object.values(errors).filter(e => !!e).length === 0,
            };
        };
        this['reset'] = (data = {}, errors = {}) => {
            const newData = Object.assign({}, this.state.clean, data);
            this.setState(() => ({ clean: newData, data: newData, dirty: {}, errors, touched: {} }));
        };
        this['submit'] = (e) => {
            e.preventDefault();
            const { onSubmit = () => void 0 } = this.props;
            this.setState(({ status }) => ({ status: Object.assign({}, status, { submitting: true }) }), () => Promise.resolve(onSubmit(this.submitApi())).then((redirect = '') => this.setState(({ status }) => ({ status: Object.assign({}, status, { redirect, submitting: false }) }))));
        };
        this['setFormKey'] = (key, value) => {
            const { validation } = this.props;
            const { clean } = this.state;
            this.setState(state => (Object.assign({}, state, { status: Object.assign({}, state.status, { pristine: false }), data: Object.assign({}, state.data, { [key]: value }), dirty: Object.assign({}, state.dirty, { [key]: !checkIsClean(key, value, clean, validation) }), errors: Object.assign({}, state.errors, { [key]: '' }), touched: Object.assign({}, state.errors, { [key]: true }) })));
        };
        this['setFormData'] = (newData) => {
            const { validation } = this.props;
            const { clean } = this.state;
            const dirty = Object.keys(newData).reduce((acc, key) => (Object.assign({}, acc, { [key]: !checkIsClean(key, newData[key], clean, validation) })), Object.assign({}, this.state.dirty));
            const errors = Object.keys(newData).reduce((acc, key) => (Object.assign({}, acc, { [key]: '' })), Object.assign({}, this.state.errors));
            const touched = Object.keys(newData).reduce((acc, key) => (Object.assign({}, acc, { [key]: true })), Object.assign({}, this.state.touched));
            this.setState(state => (Object.assign({}, state, { status: Object.assign({}, state.status, { pristine: Object.values(dirty).every(d => !d) }), data: Object.assign({}, state.data, newData), dirty,
                errors,
                touched })));
        };
        this['validateForm'] = (key) => {
            const { validation } = this.props;
            const { data } = this.state;
            if (validation) {
                const validator = validation[key];
                if (validator && validator.isValid) {
                    const response = validator.isValid(data[key], data);
                    if (response) {
                        Promise.resolve(response).then(newErrors => {
                            if (Object.keys(newErrors).length > 0) {
                                this.setState(state => ({ errors: Object.assign({}, state.errors, newErrors) }));
                            }
                        });
                    }
                }
            }
        };
    }
    /*
    when debugging why the form looks funny, don't forget you removed a top level wrapper here
  
    --    <div class=`${rootClass}-layout` />    --
     */
    render() {
        const { children, redirects, rootClass } = this.props;
        const { status: { redirect }, } = this.state;
        const redirectTo = redirects[redirect];
        if (redirectTo) {
            return react_1.default.createElement(react_router_dom_1.Redirect, { to: redirectTo });
        }
        const classer = new utils_1.Classer(rootClass);
        return (react_1.default.createElement("form", { className: classer.name(), onSubmit: this.submit }, react_1.default.Children.map(children(this.renderApi(classer)), child => react_1.default.cloneElement(child, { className: classnames_1.default(child.props.className, classer.name('child')) }))));
    }
}
Form.defaultProps = defaultProps;
exports.default = Form;
//# sourceMappingURL=form.js.map