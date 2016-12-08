import { Component } from '@angular/core';
import { User }      from '../shared/user';
@Component({
  moduleId:  module.id,
  selector: 'user-form-register',
  templateUrl: 'register.html'
})
export class UserFormRegisterComponent {
  
  user = new User(1, 'John Doe', 'john@doe.com','john_password');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  addHero() {
    this.user = new User(2, 'Marie', 'marie@serp.com',"marie_password");
  }
}
