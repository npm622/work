"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const _1 = tslib_1.__importDefault(require("."));
const item_1 = tslib_1.__importDefault(require("../item"));
describe('list', () => {
    describe('displaying different types of lists', () => {
        it('should render an unordered list', () => {
            const display = enzyme_1.shallow(react_1.default.createElement(_1.default, { data: [] }));
            expect(display.find('UnorderedList')).toHaveLength(1);
        });
        it('should render an ordered list', () => {
            const display = enzyme_1.shallow(react_1.default.createElement(_1.default, { ordered: true, data: [] }));
            expect(display.find('OrderedList')).toHaveLength(1);
        });
    });
    describe('displaying a list of strings', () => {
        const data = ['a', 'b', 'c'];
        describe('with no children or render function specified', () => {
            it('should render list items with the text displayed', () => {
                const display = enzyme_1.shallow(react_1.default.createElement(_1.default, { data: data }));
                const items = display.find('ListItem');
                expect(items).toHaveLength(data.length);
                const displays = items.map(item => item.render().text());
                expect(displays).toEqual(data);
            });
        });
        describe('with children as a function specified', () => {
            it('should render list items with the text displayed', () => {
                const display = enzyme_1.shallow(react_1.default.createElement(_1.default, { data: data }, item => react_1.default.createElement(item_1.default, null, item)));
                const items = display.find('ListItem');
                expect(items).toHaveLength(data.length);
                const displays = items.map(item => item.render().text());
                expect(displays).toEqual(data);
            });
        });
        describe('with render function specified', () => {
            it('should render list items mapped to scalar values', () => {
                const display = enzyme_1.shallow(react_1.default.createElement(_1.default, { data: data, render: (item, idx) => {
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
                const items = display.find('ListItem');
                expect(items).toHaveLength(data.length);
                const displays = items.map(item => item.render().text());
                expect(displays).toEqual(['a', '1', 'false']);
            });
            it('should render list items mapped to object values concisely', () => {
                const display = enzyme_1.shallow(react_1.default.createElement(_1.default, { data: data, render: (item, idx) => ({ [item]: idx }) }));
                const items = display.find('ListItem');
                expect(items).toHaveLength(data.length);
                const displays = items.map(item => item.render().text());
                expect(displays).toEqual(['{"a":0}', '{"b":1}', '{"c":2}']);
            });
            it('should render list items mapped to object values verbose', () => {
                const display = enzyme_1.shallow(react_1.default.createElement(_1.default, { data: data, render: (item, idx) => ({ [item]: idx }), objectRenderer: { verbose: true, indent: 3 } }));
                const items = display.find('ListItem');
                expect(items).toHaveLength(data.length);
                const displays = items.map(item => item.render().text());
                const o1 = `{\n   \"a\": 0\n}`;
                const o2 = `{\n   \"b\": 1\n}`;
                const o3 = `{\n   \"c\": 2\n}`;
                expect(displays).toEqual([o1, o2, o3]);
            });
        });
    });
});
//# sourceMappingURL=test.js.map