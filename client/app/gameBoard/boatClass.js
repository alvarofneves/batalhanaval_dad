"use strict";
var cellClass_1 = require("./cellClass");
var BoatClass = (function () {
    function BoatClass(name) {
        this.id = new Date() + "BOAT" + name;
        this.name = name;
        this.cells = [];
        for (var line = 0; line < 6; line++) {
            for (var column = 0; column < 6; column++) {
                this.cells.push(new cellClass_1.CellClass(line, column));
            }
        }
        var protectedSea = "~";
        switch (name.toUpperCase()) {
            case "AIRCRAFT":
                this.cellValue = "P";
                for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                    var cell = _a[_i];
                    for (var i = 0; i < 3; i++) {
                        if (cell.getLine() == 0 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                    for (var j = 1; j < 4; j++) {
                        if (cell.getLine() == j && cell.getColumn() == 0) {
                            cell.setValue(protectedSea);
                        }
                    }
                    for (var j = 1; j < 4; j++) {
                        if (cell.getLine() == j && cell.getColumn() == 1) {
                            cell.setValue(this.cellValue);
                        }
                    }
                    for (var i = 2; i < 5; i++) {
                        if (cell.getLine() == 1 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                    for (var i = 1; i < 4; i++) {
                        if (cell.getLine() == 2 && cell.getColumn() == i) {
                            cell.setValue(this.cellValue);
                        }
                    }
                    if (cell.getLine() == 2 && cell.getColumn() == 4) {
                        cell.setValue(protectedSea);
                    }
                    for (var i = 2; i < 5; i++) {
                        if (cell.getLine() == 3 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                    for (var i = 0; i < 3; i++) {
                        if (cell.getLine() == 4 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                }
                break;
            case "BATTLESHIP":
                this.cellValue = "N";
                for (var _b = 0, _c = this.cells; _b < _c.length; _b++) {
                    var cell = _c[_b];
                    for (var i = 0; i < 6; i++) {
                        if (cell.getLine() == 0 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                    if (cell.getLine() == 1 && cell.getColumn() == 0) {
                        cell.setValue(protectedSea);
                    }
                    for (var i = 1; i < 5; i++) {
                        if (cell.getLine() == 1 && cell.getColumn() == i) {
                            cell.setValue(this.cellValue);
                        }
                    }
                    if (cell.getLine() == 1 && cell.getColumn() == 5) {
                        cell.setValue(protectedSea);
                    }
                    for (var i = 0; i < 6; i++) {
                        if (cell.getLine() == 2 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                }
                break;
            case "CRUISER":
                this.cellValue = "N";
                for (var _d = 0, _e = this.cells; _d < _e.length; _d++) {
                    var cell = _e[_d];
                    for (var i = 0; i < 5; i++) {
                        if (cell.getLine() == 0 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                    if (cell.getLine() == 1 && cell.getColumn() == 0) {
                        cell.setValue(protectedSea);
                    }
                    for (var i = 1; i < 4; i++) {
                        if (cell.getLine() == 1 && cell.getColumn() == i) {
                            cell.setValue(this.cellValue);
                        }
                    }
                    if (cell.getLine() == 1 && cell.getColumn() == 4) {
                        cell.setValue(protectedSea);
                    }
                    for (var i = 0; i < 5; i++) {
                        if (cell.getLine() == 2 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                }
                break;
            case "DESTROYER":
                this.cellValue = "N";
                for (var _f = 0, _g = this.cells; _f < _g.length; _f++) {
                    var cell = _g[_f];
                    for (var i = 0; i < 4; i++) {
                        if (cell.getLine() == 0 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                    if (cell.getLine() == 1 && cell.getColumn() == 0) {
                        cell.setValue(protectedSea);
                    }
                    for (var i = 1; i < 3; i++) {
                        if (cell.getLine() == 1 && cell.getColumn() == i) {
                            cell.setValue(this.cellValue);
                        }
                    }
                    if (cell.getLine() == 1 && cell.getColumn() == 3) {
                        cell.setValue(protectedSea);
                    }
                    for (var i = 0; i < 4; i++) {
                        if (cell.getLine() == 2 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                }
                break;
            case "SUBMARINE":
                this.cellValue = "N";
                for (var _h = 0, _j = this.cells; _h < _j.length; _h++) {
                    var cell = _j[_h];
                    for (var i = 0; i < 3; i++) {
                        if (cell.getLine() == 0 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                    if (cell.getLine() == 1 && cell.getColumn() == 0) {
                        cell.setValue(protectedSea);
                    }
                    if (cell.getLine() == 1 && cell.getColumn() == 1) {
                        cell.setValue(this.cellValue);
                    }
                    if (cell.getLine() == 1 && cell.getColumn() == 2) {
                        cell.setValue(protectedSea);
                    }
                    for (var i = 0; i < 3; i++) {
                        if (cell.getLine() == 2 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                }
                break;
        }
    }
    BoatClass.prototype.getCells = function () {
        return this.cells;
    };
    BoatClass.prototype.getName = function () {
        return this.name;
    };
    return BoatClass;
}());
exports.BoatClass = BoatClass;
//# sourceMappingURL=boatClass.js.map