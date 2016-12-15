import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { SharedModule }  from '../shared/shared.module';
import { RegisterComponent } from './register.component';

@NgModule({
  imports:      [ 
  		SharedModule, 
  		FormsModule
  ],
  declarations: [ 
  		RegisterComponent
  ],
  exports:      [ 
  		RegisterComponent
  ]
})


export class RegisterModule { }
