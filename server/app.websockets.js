"use strict";
var io = require('socket.io');
var WebSocketServer = (function () {
    function WebSocketServer() {
        var _this = this;
        this.init = function (server) {
            _this.io = io.listen(server);
            _this.io.sockets.on('connection', function (client) {
                client.emit('players', Date.now() + ': Welcome to battleship'); // data + ': string Welcome'
                +client.broadcast.emit('players', (new Date()).getTime() + ': A new player has arrived'); // data + ': string Arrived'
                +client.on('chat', function (data) { return _this.io.emit('chat', Date.now() + ': ' + data); });
            });
        };
        this.notifyAll = function (channel, message) {
            _this.io.sockets.emit(channel, Date.now() + ': ' + message); // só chamada qd p.ex. se avisam tds players q Top10 foi consultado     
        };
    }
    return WebSocketServer;
}());
exports.WebSocketServer = WebSocketServer;
;
