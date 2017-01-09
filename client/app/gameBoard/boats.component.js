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
var index_1 = require("../_services/index");
var multiComponent_service_1 = require("../_services/multiComponent.service");
var BoatsComponent = (function () {
    function BoatsComponent(gameService, multiComponentService) {
        this.gameService = gameService;
        this.multiComponentService = multiComponentService;
        this.boats = [];
        this.counters = [];
        this.boats = ["Aircraft", "Battleship", "Cruiser", "Destroyer", "Submarine"];
        this.counters = [1, 1, 2, 3, 4];
    }
    BoatsComponent.prototype.prepareBoat = function (boat, i) {
        if (this.counters[i] > 0) {
            this.multiComponentService.boatPrepared(true);
            console.log("Clicked Boat: " + boat + " Quantity available: " + this.counters[i]);
            this.counters[i]--;
        }
        else {
            console.log("No " + boat + "s available!");
        }
    };
    return BoatsComponent;
}());
BoatsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'boats-container',
        templateUrl: 'boats.component.html',
        providers: [index_1.GameService, multiComponent_service_1.MultiComponentService]
    }),
    __metadata("design:paramtypes", [index_1.GameService, multiComponent_service_1.MultiComponentService])
], BoatsComponent);
exports.BoatsComponent = BoatsComponent;
//# sourceMappingURL=boats.component.js.map