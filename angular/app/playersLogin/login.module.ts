import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { RouterModule }     from '@angular/router';
import { SharedModule }     from '../shared/shared.module';
import { LoginComponent }   from './login.component';

@NgModule({
  imports: [ 
      RouterModule,
  		SharedModule, 
  		FormsModule
  ],
  declarations: [ 
  		LoginComponent
  ],
  
  exports: [ 
  		LoginComponent
  ]
})

export class LoginModule { }