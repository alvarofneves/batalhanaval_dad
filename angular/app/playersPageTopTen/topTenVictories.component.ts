import { Component } from '@angular/core';

import { Player } 		 from '../_shared/index'; 
import { PlayerService } from '../_services/index';

@Component({
	moduleId: module.id,
	selector: 'topTenVictories',	
	templateUrl: 'topTenVictories.component.html',
})

export class TopTenVictoriesComponent { 
	listTopTenVict: any[] = [];

    constructor(private playerService: PlayerService) { 
    }

    ngOnInit() {
        this.listPlayersTopVict();
    }

    private listPlayersTopVict() {
        this.playerService.getTopVict()
            .subscribe(list => {
                this.listTopTenVict = list; 
        });
    }
}
