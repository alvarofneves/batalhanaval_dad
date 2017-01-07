import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { RouterModule }     from '@angular/router';
import { SharedModule }      from '../_shared/shared.module';

import { RegisterComponent } from './register.component';

@NgModule({
  imports: [ 
  		SharedModule, 
  		FormsModule,
      RouterModule
  ],
  declarations: [ 
  		RegisterComponent
  ],
  exports: [ 
  		RegisterComponent
  ]
})

export class RegisterModule { }
