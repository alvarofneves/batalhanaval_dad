import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Player }  from '../shared/player';
import { AlertService, PlayerService } from '../services/index';  

@Component({
    moduleId:  module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {

    public player: Player;
    
    constructor (private playerService: PlayerService, private alertService: AlertService) {
        // Quando form é carregado, dados do novo Player estão vazios 
        this.player = new Player("", "", "");


    }

    register() {
        console.log("Player registado");
        this.playerService.create(this.player)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    //this.router.navigate(['/lobby']);      // testar assim. Depois enviar p/ login
                },
                error => {
                    this.alertService.error(error);
                });  
    }

    // Apaga campos preenchidos
    clear() {
        console.log("clear!! ");
    }
}
