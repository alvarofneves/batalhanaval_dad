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
var AdminPanelComponent = (function () {
    function AdminPanelComponent(playerService, gameService, wsService) {
        this.playerService = playerService;
        this.gameService = gameService;
        this.wsService = wsService;
        this.listPlayers = [];
        this.listTotGames = [];
        // Arrays usados nos channels / websockets
        this.listPlayersChannel = [];
        this.listAllGamesChannel = [];
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
        this.listAllPlayers();
        this.listAllGames();
        //this.wsService.getAllPlayers().subscribe((m:any) => this.listPlayersChannel.push(<string>m));
        //this.wsService.getAllGames().subscribe((m:any) => this.listAllGamesChannel.push(<string>m));
    };
    AdminPanelComponent.prototype.listAllPlayers = function () {
        var _this = this;
        this.playerService.getAll()
            .subscribe(function (list) {
            _this.listPlayers = list;
        });
    };
    AdminPanelComponent.prototype.listAllGames = function () {
        var _this = this;
        this.gameService.getAllGames()
            .subscribe(function (list) {
            _this.listTotGames = list;
            //for (let game of this.listTotGames) {
            //console.log(game.beginDate);
            //}
        });
        // @param Recebe data num Long e converte para formato dd-mm-aaaa
        //for (let game in this.listTotGames) {
        //game.dateConverted = getTime();
        //}
    };
    AdminPanelComponent.prototype.showGameLog = function (game) {
        if (game.status == 'pendent') {
            window.alert('Registo de jogadas só disponível após conclusão do jogo');
        }
        else {
            window.alert('Registo de jogadas indisponível');
        }
    };
    return AdminPanelComponent;
}());
AdminPanelComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'admin',
        templateUrl: 'admin.component.html'
    }),
    __metadata("design:paramtypes", [index_1.PlayerService, index_1.GameService, index_1.WebSocketService])
], AdminPanelComponent);
exports.AdminPanelComponent = AdminPanelComponent;
//# sourceMappingURL=admin.component.js.map