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
var http_1 = require("@angular/http");
var GameService = (function () {
    function GameService(http) {
        this.http = http;
    }
    GameService.prototype.newGame = function (game) {
        console.log(game);
        return this.http.post('/api/games', game).map(function (r) { return r.json(); });
    };
    GameService.prototype.getAllGames = function () {
        return this.http.get('/api/games').map(function (response) { return response.json(); });
    };
    GameService.prototype.getGamesByStatus = function (status) {
        return this.http.get('/api/gamesSearch/' + status).map(function (response) { return response.json(); });
    };
    GameService.prototype.getGamesByCreator = function (idPlayer) {
        return this.http.get('/api/games').map(function (response) { return response.json(); });
    };
    return GameService;
}());
GameService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map