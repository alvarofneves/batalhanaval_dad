const io = require('socket.io');
const ws = module.exports = {};

let wsServer = null;

ws.init = (server) => {
    wsServer = io.listen(server);
    wsServer.sockets.on('connection', function (client) {
        client.emit('players', Date.now() + ': Welcome to Battleship @DAD');
        client.broadcast.emit('players', Date.now() + ': A new player came in');
        client.on('chat', (data) => wsServer.emit('chat', data));
    });
};

ws.notifyAll = (channel, message) => {
    wsServer.sockets.emit(channel, message);
};
