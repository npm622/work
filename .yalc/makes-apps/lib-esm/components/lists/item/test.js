"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const _1 = tslib_1.__importDefault(require("."));
const mountListItem = ({ children, className }) => enzyme_1.shallow(react_1.default.createElement(_1.default, { className: className }, children));
describe('list item', () => {
    let display;
    it('should render with a default classname if not provided', () => {
        display = mountListItem({});
        expect(display.find('li')).toHaveLength(1);
        expect(display.prop('className')).toBe('list-item');
    });
    it('should render with a provided classname', () => {
        display = mountListItem({ className: 'custom-item extra-class' });
        expect(display.find('li')).toHaveLength(1);
        expect(display.prop('className')).toBe('custom-item extra-class');
    });
});
//# sourceMappingURL=test.js.map