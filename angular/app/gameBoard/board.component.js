"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var boardClass_1 = require("./boardClass");
var boatClass_1 = require("./boatClass");
var cellClass_1 = require("./cellClass");
var BoardComponent = (function () {
    function BoardComponent() {
        this.id = 0 /*id*/;
        var board = new boardClass_1.BoardClass(/*id*/ 0);
        var aircraft = new boatClass_1.BoatClass("aircraft");
        var battleship = new boatClass_1.BoatClass("battleship");
        var cruiser1 = new boatClass_1.BoatClass("cruiser");
        var cruiser2 = new boatClass_1.BoatClass("cruiser");
        var destroyer1 = new boatClass_1.BoatClass("destroyer");
        var destroyer2 = new boatClass_1.BoatClass("destroyer");
        var destroyer3 = new boatClass_1.BoatClass("destroyer");
        var submarine1 = new boatClass_1.BoatClass("submarine");
        var submarine2 = new boatClass_1.BoatClass("submarine");
        var submarine3 = new boatClass_1.BoatClass("submarine");
        var submarine4 = new boatClass_1.BoatClass("submarine");
        board.addBoat(new cellClass_1.CellClass(2, 2), aircraft);
    }
    BoardComponent.prototype.getLabel = function (currentRow) {
        return String.fromCharCode(65 + currentRow);
    };
    BoardComponent.prototype.clickElemento = function (l, i) {
        console.log(this.id + "-" + l + ":" + i);
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'game-board',
        templateUrl: 'board.component.html',
    }),
    __metadata("design:paramtypes", [])
], BoardComponent);
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map