import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

import { Game }                                        from '../_shared/index';
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

    createGame() {
	//createGame(idUser: number) {
        this.gameService.newGame(this.game)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    //this.router.navigate(['/lobby']);     // quero entrar no meu board e colocar barcos
                },
                error => {
                    this.alertService.error(error);
                }); 
    }

    joinGame(idGame: any) {
    //joinGame(idGame : number) {
        console.log('game_id (586edb914a250a278838ec9e) = ' + idGame);
        this.router.navigate(['/game']);
    	//this.router.navigate(['/game', idGame]);
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