import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

import { Game }                      from '../_shared/game';
import { AlertService, GameService } from '../_services/index';  

@Component({
	moduleId: module.id,
	selector: 'lobby',	
	templateUrl: 'lobby.component.html',
})

export class LobbyComponent { 
	listGamesPendent: any[] = [];
	listGamesProgress: any[] = [];
	listGamesArray: any[] = [];
	public string: String;
	public game: Game;

    constructor (private gameService: GameService, private alertService: AlertService, private router: Router) {
    	this.game = new Game('', '', '');
    }

    ngOnInit() {
    	this.listGamesByStatus('pendent');
    	this.listGamesByStatus('progress');
    	this.listGames();
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

    joinGame() {
    //joinGame(idGame : number) {
    	console.log('join! - enviar player_id + game_id');
    	//this.router.navigate(['/game', idGame]);
    }

    listGames() {
    	this.gameService.getAllGames()
	    	.subscribe(list => {
	    		this.listGamesArray = list;
	    	});
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
}