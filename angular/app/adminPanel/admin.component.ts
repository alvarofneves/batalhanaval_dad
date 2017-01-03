import { Component }      from '@angular/core';

import { Player }         from '../_shared/player'; 
import { PlayerService }  from '../_services/index';
import { Game }           from '../_shared/game';
import { AlertService, GameService } from '../_services/index'; 

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
            });
    }

    // @param Recebe data ??? e converte para formato dd-mm-aaaa
    convertDate() {
        dateConverted = getTime();
    }
}