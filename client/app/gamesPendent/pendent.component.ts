import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

import { Game }                      from '../_shared/game';
import { AlertService, GameService } from '../_services/index';  

@Component({
	moduleId: module.id,
	selector: 'pendentGames',	
	templateUrl: 'pendent.component.html',
})

export class PendentGamesComponent { 
    private gameService: GameService;
    listGamesPendent: any[] = [];

    ngOnInit() {
    	this.listGamesByStatus('pendent');
    }

    listGamesByStatus(status) {
		this.gameService.getGamesByStatus('pendent')
    		.subscribe(list => {
    			this.listGamesPendent = list;
    		});	
    }
}