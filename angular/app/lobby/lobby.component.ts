import { Component } from '@angular/core';
import { Router }     from '@angular/router';

import { Game }                      from '../_shared/game';
import { AlertService, GameService } from '../_services/index';  

@Component({
	moduleId: module.id,
	selector: 'lobby',	
	templateUrl: 'lobby.component.html',
})

export class LobbyComponent { 
	listGamesArray: any[] = [];
	listGamesPendent: any[] = [];
	listGamesProgress: any[] = [];
	public string: String;
	public game: Game;

    constructor (private gameService: GameService, private alertService: AlertService, private router: Router) {
    	this.game = new Game('', '', '');
    }

    ngOnInit() {
    	//chamar 2x método getAllGames(): 'pendent' e 2x 'progress'
    	this.listGames();
    	//this.listGamesStr('pendent');
    	//this.listGamesStr('progress');
    }

	createGame() {
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

    listGames() {
    	this.gameService.getGamesCreated()
	    	.subscribe(list => {
	    		this.listGamesArray = list;
	    	});
    }

    listGamesStr(string) {
    	// Guardar para array Games c/ status == 'pendent'
    	if (string == 'pendent') {
    		this.gameService.getGamesByStatus(string)
	    		.subscribe(list => {
	    			this.listGamesPendent = list;
	    		});
    	} 
    	// Guardar para array Games c/ status == 'progress'
    	if (string == 'progress') {
    		this.gameService.getGamesByStatus(string)
	    		.subscribe(list => {
	    			this.listGamesProgress = list;
	    		});
    	}     	
    }
}