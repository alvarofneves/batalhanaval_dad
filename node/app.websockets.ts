const io = require('socket.io');

export class WebSocketServer {
    public io: any;

    public init = (server: any) => {
        this.io = io.listen(server);            
        this.io.sockets.on('connection', (client: any) => {
            client.emit('players', Date.now() + ': Welcome to battleship');                // data + ': string Welcome'
+           client.broadcast.emit('players', (new Date()).getTime() + ': A new player has arrived');   // data + ': string Arrived'
+           client.on('chat', (data) => this.io.emit('chat', Date.now() + ': ' + data));
        });
    };

   public notifyAll = (channel: string, message: string) => {
        this.io.sockets.emit(channel, Date.now() + ': ' + message);       // só chamada qd p.ex. se avisam tds players q Top10 foi consultado     
    }; 
};
