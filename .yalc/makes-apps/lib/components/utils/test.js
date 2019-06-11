"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('utils', function () {
    describe('classer', function () {
        var classer = new _1.Classer('test');
        it('should return a base class name', function () {
            expect(classer.name()).toBe('test');
        });
        it('should return a sub class name', function () {
            expect(classer.name('class')).toBe('test-class');
        });
        describe('with a sub classer', function () {
            var subclasser = classer.new('child');
            it('should return a base sub class name', function () {
                expect(subclasser.name()).toBe('test-child');
            });
            it('should return a sub sub class name', function () {
                expect(subclasser.name('class')).toBe('test-child-class');
            });
        });
    });
    describe('isFunction', function () {
        it('should return true for valid functions', function () {
            expect(_1.isFunction(function () { })).toBe(true);
        });
        it('should return false for non-functions', function () {
            expect(_1.isFunction({})).toBe(false);
            expect(_1.isFunction([])).toBe(false);
            expect(_1.isFunction('')).toBe(false);
        });
    });
    describe('hasChildren', function () {
        it('should return true for valid children as function props', function () {
            expect(_1.hasChildren({ children: function () { } })).toBe(true);
        });
        it('should return false for children props not as functions', function () {
            expect(_1.hasChildren({ children: null })).toBe(false);
            expect(_1.hasChildren({ children: {} })).toBe(false);
            expect(_1.hasChildren({ children: [] })).toBe(false);
            expect(_1.hasChildren({ children: '' })).toBe(false);
        });
    });
    describe('hasRender', function () {
        it('should return true for valid render props', function () {
            expect(_1.hasRender({ render: function () { } })).toBe(true);
        });
        it('should return false for render props not as functions', function () {
            expect(_1.hasRender({ render: null })).toBe(false);
            expect(_1.hasRender({ render: {} })).toBe(false);
            expect(_1.hasRender({ render: [] })).toBe(false);
            expect(_1.hasRender({ render: '' })).toBe(false);
        });
    });
});
//# sourceMappingURL=test.js.map