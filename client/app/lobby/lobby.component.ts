import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

import { Game, Player }                                from '../_shared/index';
import { AlertService, GameService, WebSocketService } from '../_services/index';  

@Component({
	moduleId: module.id,
	selector: 'lobby',	
	templateUrl: 'lobby.component.html'
})

export class LobbyComponent { 
	listGamesPendent: any[] = [];
	listGamesProgress: any[] = [];
	listTotGames: any[] = [];
    listMyGames: any[] = [];
    player: any[] = [];
    // Arrays usados nos channels / websockets
    listGamesPeChannel: string[] = [];
    listGamesPgChannel: string[] = [];

    public isLoggedIn = true;
	public string: String;
	public game: Game;
    constructor (private gameService: GameService, private alertService: AlertService, private router: Router, private wsService: WebSocketService) {
    	this.game = new Game('', '', '');
    }

    ngOnInit() {
    	this.listGamesByStatus('pendent');
    	this.listGamesByStatus('progress');
        this.wsService.getGamesPendent().subscribe((m:any) => this.listGamesPeChannel.push(<string>m));
        this.wsService.getGamesProgress().subscribe((m:any) => this.listGamesPgChannel.push(<string>m));
    }

    createGame(idPlayer: any) {
        /*let board = new Array(100);
        for(let i = 0; i < 100; i++) {
            board[i] = 0;
        }
        for (let j = 0; j < 4; j++) {
            board[Math.floor(Math.random() * (99 - 0)) + 0] = 1;    
        }
        let arrayPlayerBoard = [{
            'idPlayer': idPlayer,
            'board': board
        }];*/
        let board = new Array(100);
        for(let i = 0; i < 100; i++) {
            board[i] = 0;
        }
        for (let j = 0; j < 4; j++) {
            board[Math.floor(Math.random() * (99 - 0)) + 0] = 1;    
        }        
        console.log('board player creator: ');
        console.log(board);
        this.game.playersArray.push(idPlayer);         // TODO associar idPlayer que estiver logado. A receber '1' do html
        this.game.playerCreator = idPlayer;            // TODO associar idPlayer que estiver logado
        this.game.playersCount++;
        this.game.playersWaiting++;
        this.game.boardsArray.push(board);
        this.gameService.newGame(this.game)
            .subscribe(
                data => {
                    //this.alertService.success('Registration successful', true);
                    this.router.navigate(['/game', data._id]);     // TODO entrar no board do criador do jogo atual jogo
                },
                error => {
                    this.alertService.error(error);
                }); 
        //this.renderBoard(this.game, 0);
    }

    // Quando player faz join() e entra para o jogo selecionado
    joinGame(game: Game, idPlayer: number) {                // TODO associar idPlayer que estiver logado. A receber '2' do html
        if (game.playersWaiting >= 4) {
            window.alert('Jogo cheio. Procure outro jogo!');
        }
        else {
            let board = new Array(100);
            for(let i = 0; i < 100; i++) {
                board[i] = 0;
            }
            for (let j = 0; j < 4; j++) {
                board[Math.floor(Math.random() * (99 - 0)) + 0] = 1;    
            }
            console.log('Array com 4 subs do player2: ');
            console.log(board); 
            
            game.playersArray.push(idPlayer);
            game.playersCount++; 
            game.playersWaiting++;
            game.boardsArray.push(board);
            this.gameService.joinGame(game)
                .subscribe(
                    data => {
                        //this.alertService.success('Update successful', true);
                        /*console.log('xpto data');
                        console.log(data);*/
                        //this.router.navigate(['/game', data._id]);             
                        window.alert('Bem-vindo! Clique no link da consola para entrar no jogo');
                        console.log('O seu jogo --> http://localhost:7777/#/game/' + game._id);
                    },
                    error => {
                        this.alertService.error(error);
                    }); 
        }
    }

    // Pintar cells com Boat ou Água
    public renderBoard(game: Game, indexBoard: number) {
        console.log('desenhar.... ');
        for(let i = 0; i < this.game.boardsArray[indexBoard].length; i++) {
            // board[i] = 0;
            if (this.game.boardsArray[indexBoard].board[i] == 1) {    
                // Elem = água - pintar azul
            }
            else {        
                /// Elem = barco - pintar vermelho
            }
        }
    }

    listGamesByStatus(string) {
    	if (string == 'pendent') {
    		this.gameService.getGamesByStatus('pendent')
	    		.subscribe(list => {
	    			this.listGamesPendent = list;
	    		});
    	} 
    	if (string == 'progress') {
    		this.gameService.getGamesByStatus('progress')
	    		.subscribe(list => {
	    			this.listGamesProgress = list;
	    		});
    	}     	
    }

    listGamesCurrentPlayer(idPlayer) {
        this.gameService.getGamesByCreator(idPlayer)
            .subscribe(list => {
                this.listMyGames = list;
            });
    }
}