import { Component } from '@angular/core';
import { Player }      from '../shared/player';


@Component({
  moduleId:  module.id,
  selector: 'register',
  templateUrl: 'register.component.html'
})

export class RegisterComponent {
  
  player = new Player(1,"","","");
  //submitted = false;
  //onSubmit() {
    //this.submitted = true;
  //}

  onSubmit(){
     
     name=player.name;


     //depois return o path para o mongodb
     //observeble subscribe 
     //TODO criar pasta services + ver tutorial de login
  }
  createPlayer() {
    this.player = new Player(2, 'Marie', 'marie@serp.com',"marie_password");
  }


  }
}
