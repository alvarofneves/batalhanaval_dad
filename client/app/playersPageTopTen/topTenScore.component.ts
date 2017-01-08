import { Component } from '@angular/core';

import { Player } 		 from '../_shared/index'; 
import { PlayerService } from '../_services/index';

@Component({
	moduleId: module.id,
	selector: 'topTenScore',	
	templateUrl: 'topTenScore.component.html',
})

export class TopTenScoreComponent { 
    listTopTenScore: any[] = [];

    constructor(private playerService: PlayerService) { 
    }

    ngOnInit() {
        this.listPlayersTopScore();
    }

    private listPlayersTopScore() {
        this.playerService.getTopScore()
            .subscribe(list => {
                this.listTopTenScore = list; 
        });
    }
}
