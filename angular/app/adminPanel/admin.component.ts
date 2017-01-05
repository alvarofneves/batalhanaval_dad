import { Component }      from '@angular/core';

import { Player }         from '../_shared/index'; 
import { Game }           from '../_shared/index';
import { Observable }     from 'rxjs/Rx';

import { PlayerService, AlertService, GameService, WebSocketService }  from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'admin',
    templateUrl: 'admin.component.html'
})

export class AdminPanelComponent {
    listPlayers: any[] = [];
    listTotGames: any[] = [];

    constructor(private playerService: PlayerService, private gameService: GameService, ) { 
    }

    ngOnInit() {
        this.listAllPlayers();
        this.listAllGames();
    }

    private listAllPlayers() {
        this.playerService.getAll()
            .subscribe(list => {
                this.listPlayers = list; 
        });
    }

    listAllGames() {
        this.gameService.getAllGames()
            .subscribe(list => {
                this.listTotGames = list;
                //for (let game of this.listTotGames) {
                    //console.log(game.beginDate);
                //}
            });
        
        // @param Recebe data num Long e converte para formato dd-mm-aaaa
        //for (let game in this.listTotGames) {
            //game.dateConverted = getTime();
        //}
    }

}