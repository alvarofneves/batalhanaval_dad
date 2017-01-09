"use strict";
var cellClass_1 = require("./cellClass");
var BoatClass = (function () {
    function BoatClass(name) {
        this.name = name;
        this.cells = [];
        for (var line = 0; line < 4; line++) {
            for (var column = 0; column < 4; column++) {
                this.cells.push(new cellClass_1.CellClass(line, column));
            }
        }
        switch (name.toUpperCase()) {
            case "AIRCRAFT":
                this.cellValue = "P";
                for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                    var cell = _a[_i];
                    if (cell.getLine() == 0 && cell.getColumn() == 0) {
                        cell.setValue(this.cellValue);
                    }
                    if (cell.getLine() == 1 && cell.getColumn() == 0) {
                        cell.setValue(this.cellValue);
                    }
                    if (cell.getLine() == 1 && cell.getColumn() == 1) {
                        cell.setValue(this.cellValue);
                    }
                    if (cell.getLine() == 1 && cell.getColumn() == 2) {
                        cell.setValue(this.cellValue);
                    }
                    if (cell.getLine() == 2 && cell.getColumn() == 0) {
                        cell.setValue(this.cellValue);
                    }
                }
                break;
            case "BATTLESHIP":
                this.cellValue = "N";
                for (var _b = 0, _c = this.cells; _b < _c.length; _b++) {
                    var cell = _c[_b];
                    if (cell.getLine() == 0 && cell.getColumn() == 0) {
                        cell.setValue(this.cellValue);
                    }
                    if (cell.getLine() == 0 && cell.getColumn() == 1) {
                        cell.setValue(this.cellValue);
                    }
                    if (cell.getLine() == 0 && cell.getColumn() == 2) {
                        cell.setValue(this.cellValue);
                    }
                    if (cell.getLine() == 0 && cell.getColumn() == 3) {
                        cell.setValue(this.cellValue);
                    }
                }
                break;
            case "CRUISER":
                this.cellValue = "N";
                for (var _d = 0, _e = this.cells; _d < _e.length; _d++) {
                    var cell = _e[_d];
                    if (cell.getLine() == 0 && cell.getColumn() == 0) {
                        cell.setValue(this.cellValue);
                    }
                    if (cell.getLine() == 0 && cell.getColumn() == 1) {
                        cell.setValue(this.cellValue);
                    }
                    if (cell.getLine() == 0 && cell.getColumn() == 2) {
                        cell.setValue(this.cellValue);
                    }
                }
                break;
            case "DESTROYER":
                this.cellValue = "N";
                for (var _f = 0, _g = this.cells; _f < _g.length; _f++) {
                    var cell = _g[_f];
                    if (cell.getLine() == 0 && cell.getColumn() == 0) {
                        cell.setValue(this.cellValue);
                    }
                    if (cell.getLine() == 0 && cell.getColumn() == 1) {
                        cell.setValue(this.cellValue);
                    }
                }
                break;
            case "SUBMARINE":
                this.cellValue = "N";
                for (var _h = 0, _j = this.cells; _h < _j.length; _h++) {
                    var cell = _j[_h];
                    if (cell.getLine() == 0 && cell.getColumn() == 0) {
                        cell.setValue(this.cellValue);
                    }
                }
                break;
        }
    }
    BoatClass.prototype.getCells = function () {
        return this.cells;
    };
    return BoatClass;
}());
exports.BoatClass = BoatClass;
//# sourceMappingURL=boatClass.js.map