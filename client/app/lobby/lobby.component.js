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
    function LobbyComponent(gameService, alertService, router, wsService) {
        this.gameService = gameService;
        this.alertService = alertService;
        this.router = router;
        this.wsService = wsService;
        this.listGamesPendent = [];
        this.listGamesProgress = [];
        this.listTotGames = [];
        this.listMyGames = [];
        this.player = [];
        // Arrays usados nos channels / websockets
        this.listGamesPeChannel = [];
        this.listGamesPgChannel = [];
        this.game = new index_1.Game('', '', '');
    }
    LobbyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listGamesByStatus('pendent');
        this.listGamesByStatus('progress');
        this.wsService.getGamesPendent().subscribe(function (m) { return _this.listGamesPeChannel.push(m); });
        this.wsService.getGamesProgress().subscribe(function (m) { return _this.listGamesPgChannel.push(m); });
    };
    LobbyComponent.prototype.createGame = function (idPlayer) {
        var _this = this;
        //console.log("creator-player_id: " + idPlayer);
        var board = [];
        for (var i = 0; i < 100; i++) {
            board[i] = 0;
        }
        var boardArray = [{
                'idPlayer': idPlayer,
                'board': board
            }];
        console.log('board player creator: ');
        console.log(boardArray);
        this.game.playersArray.push(idPlayer); // TODO associar idPlayer que estiver logado. A receber '1' do html
        this.game.playerCreator = idPlayer; // TODO associar idPlayer que estiver logado
        this.game.playersCount++;
        this.game.playersWaiting++;
        this.game.boardsArray = boardArray;
        this.gameService.newGame(this.game)
            .subscribe(function (data) {
            //this.alertService.success('Registration successful', true);
            _this.router.navigate(['/game', data._id]); // TODO entrar no board do criador do jogo atual jogo
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    // Quando player faz join() e entra para o jogo selecionado
    LobbyComponent.prototype.joinGame = function (game, idPlayer) {
        var _this = this;
        //console.log('join(): game | player: ' + game._id + ' | ' + idPlayer);
        var board = [];
        for (var i = 0; i < 100; i++) {
            board[i] = 0;
        }
        var boardArray = [{
                'idPlayer': idPlayer,
                'board': board
            }];
        /*
        se playersWaiting >= 4, ñ entrar
        se < 4: playersWaiting++; waitingPlayers++; por idPlayer na playersList[]
        entrar nesse game/ mostrar board vazio
        */
        if (game.playersWaiting >= 4) {
            window.alert('Jogo cheio. Procure outro jogo!');
        }
        else {
            //console.log('playersWaiting-antes incremento= ' + game.playersWaiting);
            game.playersArray.push(idPlayer);
            game.playersCount++;
            game.playersWaiting++;
            game.boardsArray.push(boardArray);
            //console.log(game);
            this.gameService.joinGame(game)
                .subscribe(function (data) {
                //this.alertService.success('Update successful', true);
                /*console.log('xpto data');
                console.log(data);*/
                //this.router.navigate(['/game', data._id]);    // TODO    // this.router.navigate(['/game', idGame]);
                window.alert('Bem-vindo! Clique no link da consola para entrar no jogo');
                console.log('O seu jogo --> http://localhost:7777/#/game/' + game._id);
            }, function (error) {
                _this.alertService.error(error);
            });
        }
    };
    LobbyComponent.prototype.listGamesByStatus = function (string) {
        var _this = this;
        if (string == 'pendent') {
            this.gameService.getGamesByStatus('pendent')
                .subscribe(function (list) {
                _this.listGamesPendent = list;
            });
        }
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
    __metadata("design:paramtypes", [index_2.GameService, index_2.AlertService, router_1.Router, index_2.WebSocketService])
], LobbyComponent);
exports.LobbyComponent = LobbyComponent;
//# sourceMappingURL=lobby.component.js.map