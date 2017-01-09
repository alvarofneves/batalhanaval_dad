"use strict";
var cellClass_1 = require("./cellClass");
var BoardClass = (function () {
    function BoardClass(numBoards) {
        this.id = numBoards;
        this.cells = [];
        for (var line = 1; line <= 10; line++) {
            for (var column = 1; column <= 10; column++) {
                this.cells.push(new cellClass_1.CellClass(line, column));
            }
        }
    }
    BoardClass.prototype.addBoat = function (startingCell, boat) {
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            for (var _b = 0, _c = boat.getCells(); _b < _c.length; _b++) {
                var c = _c[_b];
                if (cell.getLine() == startingCell.getLine() + c.getLine() &&
                    cell.getColumn() == startingCell.getColumn() + c.getColumn()) {
                    cell.setValue(c.getValue());
                }
            }
        }
    };
    BoardClass.prototype.getId = function () {
        return this.id;
    };
    return BoardClass;
}());
exports.BoardClass = BoardClass;
//# sourceMappingURL=boardClass.js.map