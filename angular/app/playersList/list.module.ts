import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { SharedModule }  from '../shared/shared.module';
import { ListComponent } from './list.component';

@NgModule({
  imports: [ 
  		SharedModule, 
  		FormsModule
  ],
  declarations: [ 
  		ListComponent
  ],
  
  exports: [ 
  		ListComponent
  ]
})

export class ListModule { }
