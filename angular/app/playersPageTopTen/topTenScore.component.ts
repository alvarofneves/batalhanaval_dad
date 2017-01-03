import { Component } from '@angular/core';

import { Player } 		 from '../_shared/index'; 
import { PlayerService } from '../_services/index';

@Component({
	moduleId: module.id,
	selector: 'topTenScore',	
	templateUrl: 'topTenScore.component.html',
})

export class TopTenScoreComponent { 

    listTopTenScorePlayers: any[] = [];

    constructor(private playerService: PlayerService) { 
    }

    ngOnInit() {
        this.listAllPlayers();
    }

    private listAllPlayers() {
        this.playerService.getAll()
            .subscribe(list => {
                this.listTopTenScorePlayers = list; 
        });
    }

}
