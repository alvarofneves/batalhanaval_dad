"use strict";

const io = require('socket.io');
const ws = module.exports = {};

let wsServer = null;	// AS estava 'let'. Dava erro no nodemon

ws.init = (server) => {
    wsServer = io.listen(server);
    wsServer.sockets.on('connection', function (client) {
        client.emit('players', Date.now() + ': Welcome to battleship');
        client.broadcast.emit('players', Date.now() + ': A new player has arrived');
        client.on('chat', (data) => wsServer.emit('chat', data));
    });
};

ws.notifyAll = (channel, message) => {
    wsServer.sockets.emit(channel, message);
};
