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
var ListComponent = (function () {
    function ListComponent(playerService) {
        this.playerService = playerService;
        this.listPlayers = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.listAllPlayers();
    };
    ListComponent.prototype.listAllPlayers = function () {
        var _this = this;
        this.playerService.getAll()
            .subscribe(function (list) {
            _this.listPlayers = list;
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'list',
        templateUrl: 'list.component.html'
    }),
    __metadata("design:paramtypes", [index_1.PlayerService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map