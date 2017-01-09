"use strict";
var Game = (function () {
    function Game(playerCreator, beginDate, status) {
        this.playersArray = [];
        this.boardsArray = []; // Array para guardar boards dos players
        this.playsLogArray = []; // Array para guardar jogadas do jogo
        this.duration = 0;
        this.status = 'pendent';
        //this.status = 'progress';
        this.beginDate = Date.now();
        this.playersCount = 0;
        this.playersWaiting = 0;
    }
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map