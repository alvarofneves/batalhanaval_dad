const io = require('socket.io');

export class WebSocketServer {
    public board: number[] = [];
    public io: any;

    public initBoard(){
        for(let i=0; i<100; i++) {
            this.board[i]=0;
        }
    }

    public init = (server: any) => {
        this.initBoard();
        this.io = io.listen(server);            
        this.io.sockets.on('connection', (client: any) => {
            client.emit('players', Date.now() + ': Welcome to battleship');                // data + ': string Welcome'
+           client.broadcast.emit('players', (new Date()).getTime() + ': A new player has arrived');   // data + ': string Arrived'
+           client.on('chat', (data) => this.io.emit('chat', Date.now() + ': ' + data));

            // Para tiros serem enviados a todos intervenientes
            client.emit('board', this.board);
            client.on('clickElement', (indexElement) => {
                this.board[indexElement]++;
                if (this.board[indexElement] > 2) {
                    this.board[indexElement] = 0;
                }
                this.notifyAll('board', this.board);
            });
        });
    };

    public notifyAll = (channel: string, message: string) => {
        this.io.sockets.emit(channel, Date.now() + ': ' + message);       // só chamada qd p.ex. se avisam tds players q Top10 foi consultado     
    }; 

    public actLists = (channel: string, data: string) => {
        this.io.sockets.emit(channel, 'data');         
    };
};
