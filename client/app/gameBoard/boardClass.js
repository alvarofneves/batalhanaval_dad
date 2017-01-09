"use strict";
var BoardClass = (function () {
    function BoardClass() {
    }
    /*public constructor() {
        this.receivingBoats = false;
        this.id = "Board"+new Date();
        this.cells = [];
        for (let line=1; line<=10; line++) {
            for(let column=1; column<=10; column++) {
                this.cells.push(new CellClass(line, column));
            }
        }
    } */
    BoardClass.prototype.addBoat = function (startingCell, boat) {
        var cellArr = [];
        var protectedSea = [];
        var boatLabel = "C";
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            if (cell.getValue()) {
                return -1;
            }
            for (var _b = 0, _c = boat.getCells(); _b < _c.length; _b++) {
                var c = _c[_b];
                if (cell.getLine() == startingCell.getLine() + c.getLine() &&
                    cell.getColumn() == startingCell.getColumn() + c.getColumn()) {
                    if (c.getValue() != "" && c.getValue() != "~") {
                        if (cell.getLine() >= 0 && cell.getLine() <= 9) {
                            if (cell.getColumn() >= 0 && cell.getColumn() <= 9) {
                                cellArr.push(cell);
                                boatLabel = c.getValue();
                            }
                            else {
                                return -1;
                            }
                        }
                        else {
                            return -1;
                        }
                    }
                    else {
                        if (c.getValue() == "~") {
                            if (cell.getLine() >= 0 && cell.getLine() <= 9) {
                                if (cell.getColumn() >= 0 && cell.getColumn() <= 9) {
                                    protectedSea.push(cell);
                                }
                            }
                        }
                    }
                }
            }
        }
        for (var _d = 0, cellArr_1 = cellArr; _d < cellArr_1.length; _d++) {
            var c = cellArr_1[_d];
            c.setValue(boatLabel);
        }
        for (var _e = 0, protectedSea_1 = protectedSea; _e < protectedSea_1.length; _e++) {
            var c = protectedSea_1[_e];
            c.setValue("~");
        }
        return 0;
    };
    BoardClass.prototype.getId = function () {
        return this.id;
    };
    BoardClass.prototype.getCells = function () {
        return this.cells;
    };
    return BoardClass;
}());
exports.BoardClass = BoardClass;
//# sourceMappingURL=boardClass.js.map