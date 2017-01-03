import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { RegisterComponent } from './register.component';
import { SharedModule }      from '../_shared/shared.module';

@NgModule({
  imports: [ 
  		SharedModule, 
  		FormsModule
  ],
  declarations: [ 
  		RegisterComponent
  ],
  exports: [ 
  		RegisterComponent
  ]
})

export class RegisterModule { }
