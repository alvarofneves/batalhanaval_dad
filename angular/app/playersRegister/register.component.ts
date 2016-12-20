import { Component } from '@angular/core';
import { Player }      from '../shared/player';
import { AlertService, PlayerService } from '../services/index';  

@Component({
    moduleId:  module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    //loading = false;

    constructor(
        private playerService: PlayerService,
        private alertService: AlertService) { }

    player = new Player(0, "", "", "");      // mudar aqui o 'id'??
    //submitted = false;
    //onSubmit() {
      //this.submitted = true;
    //}

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
                    //this.loading = false;
                });  

       //depois return o path para o mongodb
       //observeble subscribe 
       //TODO criar pasta services + ver tutorial de login
      }
      //createPlayer() {
      //this.player = new Player(2, 'Marie', 'marie@serp.com',"marie_password");
      //}
}
