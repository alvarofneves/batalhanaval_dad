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
require("rxjs/add/operator/map");
var index_1 = require("../_services/index");
var PlayerService = (function () {
    function PlayerService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    PlayerService.prototype.create = function (player) {
        var headers = new http_1.Headers();
        var options = new http_1.RequestOptions({ headers: headers });
        headers.append("Content-Type", 'application/json');
        // NOTE: .map((response: Response) => response.json());      // post() : converte dados para JSON
        return this.http.post('/api/players', player, options).map(function (r) { return r.json(); });
    };
    PlayerService.prototype.getAll = function () {
        return this.http.get('/api/players').map(function (response) { return response.json(); });
    };
    // Actualizar lista de jogadores quando há novo registo
    //getAllWS(): Observable<Player[]> {
    //return this.http.get('/api/players').map((response: Response) => { 
    //let players = <Player[]>response.json();
    //console.log(players);
    //return players;
    //});
    //}
    PlayerService.prototype.getById = function (id) {
        return this.http.get('/api/players/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    PlayerService.prototype.getTopScore = function () {
        return this.http.get('/api/topscore').map(function (response) { return response.json(); });
    };
    PlayerService.prototype.getTopVict = function () {
        return this.http.get('/api/topvict').map(function (response) { return response.json(); });
    };
    PlayerService.prototype.delete = function (id) {
        return this.http.delete('/api/players/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    PlayerService.prototype.getPlayers = function () {
        // add authorization header with jwt token
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this.authService.token });
        var options = new http_1.RequestOptions({ headers: headers });
        // get users from api
        return this.http.get('/api/users', options)
            .map(function (response) { return response.json(); });
    };
    // private helper methods 
    PlayerService.prototype.jwt = function () {
        // create authorization header with jwt token        
        var currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
        if (currentPlayer && currentPlayer.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentPlayer.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return PlayerService;
}());
PlayerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, index_1.AuthService])
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map