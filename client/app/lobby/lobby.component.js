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
var index_1 = require("../_shared/index");
var index_2 = require("../_services/index");
var LobbyComponent = (function () {
    function LobbyComponent(gameService, alertService, router) {
        this.gameService = gameService;
        this.alertService = alertService;
        this.router = router;
        this.listGamesPendent = [];
        this.listGamesProgress = [];
        this.listTotGames = [];
        this.listMyGames = [];
        this.player = [];
        this.game = new index_1.Game('', '', '');
    }
    LobbyComponent.prototype.ngOnInit = function () {
        this.listGamesByStatus('pendent');
        this.listGamesByStatus('progress');
    };
    LobbyComponent.prototype.createGame = function (idPlayer) {
        var _this = this;
        console.log("player_id: " + idPlayer);
        this.gameService.newGame(this.game)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            //this.router.navigate(['/lobby']);     // quero entrar no meu board e colocar barcos
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    LobbyComponent.prototype.joinGame = function () {
        //joinGame(idGame : number) {
        console.log('join! - enviar player_id + game_id');
        //this.router.navigate(['/game', idGame]);
    };
    LobbyComponent.prototype.listGamesByStatus = function (string) {
        var _this = this;
        // Guardar para array Games c/ status == 'pendent'
        if (string == 'pendent') {
            //console.log('if do pendent');
            this.gameService.getGamesByStatus('pendent')
                .subscribe(function (list) {
                _this.listGamesPendent = list;
            });
        }
        // Guardar para array Games c/ status == 'progress'
        if (string == 'progress') {
            this.gameService.getGamesByStatus('progress')
                .subscribe(function (list) {
                _this.listGamesProgress = list;
            });
        }
    };
    LobbyComponent.prototype.listGamesCurrentPlayer = function (idPlayer) {
        var _this = this;
        this.gameService.getGamesByCreator(idPlayer)
            .subscribe(function (list) {
            _this.listMyGames = list;
        });
    };
    return LobbyComponent;
}());
LobbyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lobby',
        templateUrl: 'lobby.component.html',
    }),
    __metadata("design:paramtypes", [index_2.GameService, index_2.AlertService, router_1.Router])
], LobbyComponent);
exports.LobbyComponent = LobbyComponent;
//# sourceMappingURL=lobby.component.js.map