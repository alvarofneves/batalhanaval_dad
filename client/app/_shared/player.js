"use strict";
var Player = (function () {
    function Player(name, email, password, token, logged) {
        this.numGamesPlayed = 0;
        this.numGamesWon = 0;
        this.score = 0;
        this.percGamesWon = 0;
        this.name = name;
        this.email = email;
        this.password = password;
        this.token = 'Benfica Campeão';
        this.logged = false;
    }
    Player.fromBody = function (body) {
        return new Player(body.name, body.email, body.password, body.token, body.logged);
    };
    return Player;
}());
exports.Player = Player;
