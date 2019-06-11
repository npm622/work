"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('utils', () => {
    describe('classer', () => {
        const classer = new _1.Classer('test');
        it('should return a base class name', () => {
            expect(classer.name()).toBe('test');
        });
        it('should return a sub class name', () => {
            expect(classer.name('class')).toBe('test-class');
        });
        describe('with a sub classer', () => {
            const subclasser = classer.new('child');
            it('should return a base sub class name', () => {
                expect(subclasser.name()).toBe('test-child');
            });
            it('should return a sub sub class name', () => {
                expect(subclasser.name('class')).toBe('test-child-class');
            });
        });
    });
    describe('isFunction', () => {
        it('should return true for valid functions', () => {
            expect(_1.isFunction(() => { })).toBe(true);
        });
        it('should return false for non-functions', () => {
            expect(_1.isFunction({})).toBe(false);
            expect(_1.isFunction([])).toBe(false);
            expect(_1.isFunction('')).toBe(false);
        });
    });
    describe('hasChildren', () => {
        it('should return true for valid children as function props', () => {
            expect(_1.hasChildren({ children: () => { } })).toBe(true);
        });
        it('should return false for children props not as functions', () => {
            expect(_1.hasChildren({ children: null })).toBe(false);
            expect(_1.hasChildren({ children: {} })).toBe(false);
            expect(_1.hasChildren({ children: [] })).toBe(false);
            expect(_1.hasChildren({ children: '' })).toBe(false);
        });
    });
    describe('hasRender', () => {
        it('should return true for valid render props', () => {
            expect(_1.hasRender({ render: () => { } })).toBe(true);
        });
        it('should return false for render props not as functions', () => {
            expect(_1.hasRender({ render: null })).toBe(false);
            expect(_1.hasRender({ render: {} })).toBe(false);
            expect(_1.hasRender({ render: [] })).toBe(false);
            expect(_1.hasRender({ render: '' })).toBe(false);
        });
    });
});
//# sourceMappingURL=test.js.map