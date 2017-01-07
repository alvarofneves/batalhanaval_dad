import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

import { Game, Player }              from '../_shared/index';
import { AlertService, GameService } from '../_services/index';  

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

	public string: String;
	public game: Game;
    constructor (private gameService: GameService, private alertService: AlertService, private router: Router) {
    	this.game = new Game('', '', '');
    }

    ngOnInit() {
    	this.listGamesByStatus('pendent');
    	this.listGamesByStatus('progress');
    }

    createGame(idPlayer: number) {
        console.log("player_id: " + idPlayer);
        this.game.playersArray[0] = idPlayer;           // TODO associar idPlayer que estiver logado. A receber '1' do html
        this.game.playerCreator = idPlayer;            // TODO associar idPlayer que estiver logado
        this.game.playersCount++;
        this.gameService.newGame(this.game)
            .subscribe(
                data => {
                    //this.alertService.success('Registration successful', true);
                    this.router.navigate(['/game']);     // TODO entrar no board do criador do jogo atual jogo
                },
                error => {
                    this.alertService.error(error);
                }); 
    }

    // Quando player faz join() e entra para o jogo selecionado
    joinGame(game: Game, idPlayer: number) {            // TODO associar idPlayer que estiver logado. A receber '2' do html
        console.log('join(): game | player: ' + game._id + ' | ' + idPlayer);
        /*
        se players = 4, ñ entrar
        se n = players++; por idPlayer na playersList[]
        entrar nesse game/ mostrar board vazio
        */
        if (game.playersCount >= 4) {
            window.alert('Jogo cheio. Procure outro jogo!');
        }
        else {
            console.log('playersCount (else)= ' + game.playersCount);
            //game.playersArray[game.playersCount] = idPlayer; 
            //console.log('ANTES PUSH. idPlayer: ' + idPlayer);
            //console.log(game.playersArray);
            //game.playersArray[0] = 0;
            //game.playersArray.push(idPlayer);
            game.playersCount++;
 
            this.gameService.updateGame(game.playersCount)
                .subscribe(
                    data => {
                        //this.alertService.success('Update successful', true);
                        this.router.navigate(['/game']);     // TODO    // this.router.navigate(['/game', idGame]);
                    },
                    error => {
                        this.alertService.error(error);
                    }); 
            //console.log('jogadores existentes apos- ' + this.game.playersCount);
        }
    }

    listGamesByStatus(string) {
    	// Guardar para array Games c/ status == 'pendent'
    	if (string == 'pendent') {
    		//console.log('if do pendent');
    		this.gameService.getGamesByStatus('pendent')
	    		.subscribe(list => {
	    			this.listGamesPendent = list;
	    		});
    	} 
    	// Guardar para array Games c/ status == 'progress'
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