import { Component, OnInit } from '@angular/core';

import { Player } from '../shared/index';
import { PlayerService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentPlayer: Player;
    players: Player[] = [];

    constructor(private playerService: PlayerService) {
        this.currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
    }

    ngOnInit() {
        this.loadAllPlayers();
    }

    deletePlayer(id: number) {
        this.playerService.delete(id).subscribe(() => { this.loadAllPlayers() });
    }

    private loadAllPlayers() {
        this.playerService.getAll().subscribe(players => { this.players = players; });
    }
}