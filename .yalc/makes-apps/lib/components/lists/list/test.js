"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var enzyme_1 = require("enzyme");
var _1 = tslib_1.__importDefault(require("."));
var item_1 = tslib_1.__importDefault(require("../item"));
describe('list', function () {
    describe('displaying different types of lists', function () {
        it('should render an unordered list', function () {
            var display = enzyme_1.shallow(react_1.default.createElement(_1.default, { data: [] }));
            expect(display.find('UnorderedList')).toHaveLength(1);
        });
        it('should render an ordered list', function () {
            var display = enzyme_1.shallow(react_1.default.createElement(_1.default, { ordered: true, data: [] }));
            expect(display.find('OrderedList')).toHaveLength(1);
        });
    });
    describe('displaying a list of strings', function () {
        var data = ['a', 'b', 'c'];
        describe('with no children or render function specified', function () {
            it('should render list items with the text displayed', function () {
                var display = enzyme_1.shallow(react_1.default.createElement(_1.default, { data: data }));
                var items = display.find('ListItem');
                expect(items).toHaveLength(data.length);
                var displays = items.map(function (item) { return item.render().text(); });
                expect(displays).toEqual(data);
            });
        });
        describe('with children as a function specified', function () {
            it('should render list items with the text displayed', function () {
                var display = enzyme_1.shallow(react_1.default.createElement(_1.default, { data: data }, function (item) { return react_1.default.createElement(item_1.default, null, item); }));
                var items = display.find('ListItem');
                expect(items).toHaveLength(data.length);
                var displays = items.map(function (item) { return item.render().text(); });
                expect(displays).toEqual(data);
            });
        });
        describe('with render function specified', function () {
            it('should render list items mapped to scalar values', function () {
                var display = enzyme_1.shallow(react_1.default.createElement(_1.default, { data: data, render: function (item, idx) {
                        switch (idx) {
                            case 0:
                                return item;
                            case 1:
                                return idx;
                            case 2:
                                return false;
                        }
                        throw new Error('oh noz!');
                    } }));
                var items = display.find('ListItem');
                expect(items).toHaveLength(data.length);
                var displays = items.map(function (item) { return item.render().text(); });
                expect(displays).toEqual(['a', '1', 'false']);
            });
            it('should render list items mapped to object values concisely', function () {
                var display = enzyme_1.shallow(react_1.default.createElement(_1.default, { data: data, render: function (item, idx) {
                        var _a;
                        return (_a = {}, _a[item] = idx, _a);
                    } }));
                var items = display.find('ListItem');
                expect(items).toHaveLength(data.length);
                var displays = items.map(function (item) { return item.render().text(); });
                expect(displays).toEqual(['{"a":0}', '{"b":1}', '{"c":2}']);
            });
            it('should render list items mapped to object values verbose', function () {
                var display = enzyme_1.shallow(react_1.default.createElement(_1.default, { data: data, render: function (item, idx) {
                        var _a;
                        return (_a = {}, _a[item] = idx, _a);
                    }, objectRenderer: { verbose: true, indent: 3 } }));
                var items = display.find('ListItem');
                expect(items).toHaveLength(data.length);
                var displays = items.map(function (item) { return item.render().text(); });
                var o1 = "{\n   \"a\": 0\n}";
                var o2 = "{\n   \"b\": 1\n}";
                var o3 = "{\n   \"c\": 2\n}";
                expect(displays).toEqual([o1, o2, o3]);
            });
        });
    });
});
//# sourceMappingURL=test.js.map