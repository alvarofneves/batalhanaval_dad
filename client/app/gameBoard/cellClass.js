"use strict";
var CellClass = (function () {
    function CellClass(line, column) {
        this.line = line;
        this.column = column;
        this.value = "";
    }
    CellClass.prototype.setValue = function (value) {
        this.value = value;
    };
    CellClass.prototype.getValue = function () {
        return this.value;
    };
    CellClass.prototype.getLine = function () {
        return this.line;
    };
    CellClass.prototype.getColumn = function () {
        return this.column;
    };
    return CellClass;
}());
exports.CellClass = CellClass;
//# sourceMappingURL=cellClass.js.map