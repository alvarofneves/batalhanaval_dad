import { Component } from '@angular/core';
import { Router }     from '@angular/router';

import { Game }                      from '../_shared/game';
import { AlertService, GameService } from '../_services/index';  

@Component({
	moduleId: module.id,
	selector: 'lobby',	
	templateUrl: 'lobby.component.html',
})

export class LobbyComponent { 
    public game: Game;
    constructor (private gameService: GameService, private alertService: AlertService, private router: Router) {
        this.game = new Game("", "");          // @params: gameCreator: string, beginDate: string
    }

	createGame() {
        /*this.gameService.create(this.game)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/lobby']);     // quero entrar no meu board e colocar barcos
                },
                error => {
                    this.alertService.error(error);
                });  */
        console.log("new game created!");
    }
}