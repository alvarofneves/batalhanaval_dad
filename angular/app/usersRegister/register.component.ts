import { Component } from '@angular/core';
import { Player }      from '../shared/player';
import { AlertService, PlayerService } from '../services/index';  



@Component({
  moduleId:  module.id,
  selector: 'register',
  templateUrl: 'register.component.html'
})

export class RegisterComponent {

    model: any = {};
    //loading = false;

    constructor(
        private playerService: PlayerService,
        private alertService: AlertService) { }

  
  player = new Player(1,"","","");
  //submitted = false;
  //onSubmit() {
    //this.submitted = true;
  //}

  register(player: Player) :Observable<any>{
      console.log("Player registado");

      this.playerService.create(this.model)
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                  //this.router.navigate(['/login']);
              },
              error => {
                  this.alertService.error(error);
                  //this.loading = false;
              });  

     return this.subscribe();

     newUser(player:User):Observable<any>{
        
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        var options = new RequestOptions({headers: headers});
        return this.http.post('http://localhost:7777/api/v1/players', player, options)
            .map(r=> r.json());

    }


     //depois return o path para o mongodb
     //observeble subscribe 
     //TODO criar pasta services + ver tutorial de login
  }
  //createPlayer() {
    //this.player = new Player(2, 'Marie', 'marie@serp.com',"marie_password");
  //}


}
