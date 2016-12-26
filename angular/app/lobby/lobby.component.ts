import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'lobby',	
	templateUrl: 'lobby.component.html',
})

export class LobbyComponent { 
	createGame() {
        console.log("novo jogo!!");
    }
}