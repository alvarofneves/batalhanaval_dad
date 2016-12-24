import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { RouterModule }     from '@angular/router';

import { LoginComponent }   from './login.component';
import { SharedModule }     from '../_shared/shared.module';

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