import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

import { Game, Player }                                from '../_shared/index';
import { AlertService, GameService, WebSocketService } from '../_services/index';  

@Component({
	moduleId: module.id,
	selector: 'lobby',	
	templateUrl: 'lobby.component.html',
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
        //console.log("creator-player_id: " + idPlayer);
        let board = [];
        for(let i = 0; i < 100; i++) {
            board[i] = 0;
        }
        let boardArray = [{
            'idPlayer': idPlayer,
            'board': board
        }];
        console.log('board player creator: ');
        console.log(boardArray);

        this.game.playersArray.push(idPlayer);         // TODO associar idPlayer que estiver logado. A receber '1' do html
        this.game.playerCreator = idPlayer;            // TODO associar idPlayer que estiver logado
        this.game.playersCount++;
        this.game.playersWaiting++;
        this.game.boardsArray = boardArray;
        this.gameService.newGame(this.game)
            .subscribe(
                data => {
                    //this.alertService.success('Registration successful', true);
                    this.router.navigate(['/game', data._id]);     // TODO entrar no board do criador do jogo atual jogo
                },
                error => {
                    this.alertService.error(error);
                }); 
    }

    // Quando player faz join() e entra para o jogo selecionado
    joinGame(game: Game, idPlayer: number) {                // TODO associar idPlayer que estiver logado. A receber '2' do html
        //console.log('join(): game | player: ' + game._id + ' | ' + idPlayer);
        let board = [];
        for(let i = 0; i < 100; i++) {
            board[i] = 0;
        }
        let boardArray = [{
            'idPlayer': idPlayer,
            'board': board
        }];

        /*
        se playersWaiting >= 4, ñ entrar
        se < 4: playersWaiting++; waitingPlayers++; por idPlayer na playersList[]
        entrar nesse game/ mostrar board vazio
        */
        if (game.playersWaiting >= 4) {
            window.alert('Jogo cheio. Procure outro jogo!');
        }
        else {
            //console.log('playersWaiting-antes incremento= ' + game.playersWaiting);
            game.playersArray.push(idPlayer);
            game.playersCount++; 
            game.playersWaiting++;
            game.boardsArray.push(boardArray);
            //console.log(game);
            this.gameService.joinGame(game)
                .subscribe(
                    data => {
                        //this.alertService.success('Update successful', true);
                        /*console.log('xpto data');
                        console.log(data);*/
                        //this.router.navigate(['/game', data._id]);    // TODO    // this.router.navigate(['/game', idGame]);
                        window.alert('Bem-vindo! Clique no link da consola para entrar no jogo');
                        console.log('O seu jogo --> http://localhost:7777/#/game/' + game._id);
                    },
                    error => {
                        this.alertService.error(error);
                    }); 
            //console.log('playersWaiting-apos incremento= ' + game.playersWaiting);
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