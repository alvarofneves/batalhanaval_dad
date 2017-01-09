"use strict";
var Game = (function () {
    function Game(playerCreator, beginDate, status) {
        this.gamePlayers = [];
        this.totPlayers = 0;
        this.totWaitingPlayers = 0;
        this.duration = 0;
        this.playerCreator = 1; //test
        //this.status = 'pendent';	
        this.status = 'progress';
        this.beginDate = Date.now();
    }
    return Game;
}());
exports.Game = Game;
