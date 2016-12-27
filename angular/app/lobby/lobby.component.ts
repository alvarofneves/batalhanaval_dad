import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'lobby',	
	templateUrl: 'lobby.component.html',
})

export class LobbyComponent { 
	createGame() {
        this.playerService.create(this.player)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);     
                },
                error => {
                    this.alertService.error(error);
                });  
        console.log("new game created!");
    }
}