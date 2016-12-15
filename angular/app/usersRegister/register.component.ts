import { Component } from '@angular/core';
import { Player }      from '../shared/player';


@Component({
  moduleId:  module.id,
  selector: 'register',
  templateUrl: 'register.component.html'
})

export class RegisterComponent {
  
  player = new Player(1, 'John Doe', 'john@doe.com','john_password');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  addPlayer() {
    this.player = new Player(2, 'Marie', 'marie@serp.com',"marie_password");
  }
}
