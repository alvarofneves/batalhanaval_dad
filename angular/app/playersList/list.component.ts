import { Component } from '@angular/core';

import { Player } from '../_shared/player'; 
import { PlayerService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent {
	//leaderboard: ListPlayers[];

	//constructor() {
		//this.lustPlayersService.getList().subscribe((list) => this.list = list);
	//}

	//constructor(private playerService: PlayerService) {
        //this.currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
    //}

    //ngOnInit() {
        //this.loadAllPlayers();
    //}

    //deletePlayer(id: number) {
        //this.playerService.delete(id).subscribe(() => { this.loadAllPlayers() });
    //}

	//private loadAllPlayers() {
        //this.playerService.getAll().subscribe(players => { this.players = players; });
    //}
}
