"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var enzyme_1 = require("enzyme");
var _1 = tslib_1.__importDefault(require("."));
var mountListItem = function (_a) {
    var children = _a.children, className = _a.className;
    return enzyme_1.shallow(react_1.default.createElement(_1.default, { className: className }, children));
};
describe('ordered list', function () {
    var display;
    it('should render with a default classname if not provided', function () {
        display = mountListItem({});
        expect(display.find('ol')).toHaveLength(1);
        expect(display.prop('className')).toBe('list');
    });
    it('should render with a provided classname', function () {
        display = mountListItem({ className: 'custom-list extra-class' });
        expect(display.find('ol')).toHaveLength(1);
        expect(display.prop('className')).toBe('custom-list extra-class');
    });
});
//# sourceMappingURL=test.js.map