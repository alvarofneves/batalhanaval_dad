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
var router_1 = require("@angular/router");
var game_1 = require("../_shared/game");
var index_1 = require("../_services/index");
var LobbyComponent = (function () {
    function LobbyComponent(gameService, alertService, router) {
        this.gameService = gameService;
        this.alertService = alertService;
        this.router = router;
        this.listGamesArray = [];
        this.listGamesPendent = [];
        this.listGamesProgress = [];
        this.game = new game_1.Game('', '', '');
    }
    LobbyComponent.prototype.ngOnInit = function () {
        //chamar 2x método getAllGames(): 'pendent' e 2x 'progress'
        this.listGames();
        //this.listGamesStr('pendent');
        //this.listGamesStr('progress');
    };
    LobbyComponent.prototype.createGame = function () {
        var _this = this;
        this.gameService.newGame(this.game)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            //this.router.navigate(['/lobby']);     // quero entrar no meu board e colocar barcos
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    LobbyComponent.prototype.listGames = function () {
        var _this = this;
        this.gameService.getGamesCreated()
            .subscribe(function (list) {
            _this.listGamesArray = list;
        });
    };
    LobbyComponent.prototype.listGamesStr = function (string) {
        var _this = this;
        // Guardar para array Games c/ status == 'pendent'
        if (string == 'pendent') {
            this.gameService.getGamesByStatus(string)
                .subscribe(function (list) {
                _this.listGamesPendent = list;
            });
        }
        // Guardar para array Games c/ status == 'progress'
        if (string == 'progress') {
            this.gameService.getGamesByStatus(string)
                .subscribe(function (list) {
                _this.listGamesProgress = list;
            });
        }
    };
    return LobbyComponent;
}());
LobbyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lobby',
        templateUrl: 'lobby.component.html',
    }),
    __metadata("design:paramtypes", [index_1.GameService, index_1.AlertService, router_1.Router])
], LobbyComponent);
exports.LobbyComponent = LobbyComponent;
//# sourceMappingURL=lobby.component.js.map