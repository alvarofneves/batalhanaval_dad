import { Component } from '@angular/core';
import { Router }     from '@angular/router';

import { Player } from '../_shared/index'; 
import { PlayerService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent {
    listPlayers: any[] = [];

    constructor(private playerService: PlayerService) { 
    }

    ngOnInit() {
        this.listAllPlayers();
    }

    private listAllPlayers() {
        this.playerService.getAll()
            .subscribe(list => {
                this.listPlayers = list; 
        });
    }

    //deletePlayer(id: number) {
        //this.playerService.delete(id).subscribe(() => { this.loadAllPlayers() });
    //}
}