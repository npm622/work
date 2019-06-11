"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeAccessor = function (key, accessor) {
    var accessorFn;
    if (!accessor) {
        accessorFn = function (data) { return data[key]; };
    }
    else {
        if (typeof accessor === 'function') {
            accessorFn = accessor;
        }
        else {
            if (accessor.indexOf('.') < 0) {
                accessorFn = function (data) { return data[accessor]; };
            }
            else {
                accessorFn = function (data) { return accessor.split('.').reduce(function (o, a) { return o[a]; }, data); };
            }
        }
    }
    return accessorFn;
};
exports.sortData = function (data) { return data; };
exports.toKey = function (item) { return Object.keys(item)
    .map(function (key) { return item[key]; })
    .map(function (v) { return (v ? v.toString() : ''); })
    .join(''); };
//# sourceMappingURL=utils.js.map