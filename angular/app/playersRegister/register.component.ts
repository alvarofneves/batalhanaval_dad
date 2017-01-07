import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

import { Player }                      from '../_shared/player';
import { AlertService, PlayerService } from '../_services/index'; 



@Component({
    moduleId:  module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['./forms.css'] 
})

export class RegisterComponent {
    public player: Player;
    
    constructor (private playerService: PlayerService, private alertService: AlertService, private router: Router) {
        // Quando form é carregado, dados do novo Player estão vazios 
        this.player = new Player("", "", "", "");      // @params: name, email, password, confirmPassword
    }

    registerPlayer() {
        this.playerService.create(this.player)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);     
                },
                error => {
                    this.alertService.error(error);
                });  
        console.log("Player registado");
    }
    comparePassword(password:string, confirmPassword:string){

        if(password === confirmPassword) {   //if(formPlayer.password.value === formPlayer.confirmPassword.value) {

            return true;
        }
        return false ; //{message : 'Password not Match'}



    }
}