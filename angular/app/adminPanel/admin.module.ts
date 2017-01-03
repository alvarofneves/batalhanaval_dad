import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { SharedModule }        from '../_shared/shared.module';
import { AdminPanelComponent } from './admin.component';
import { ListComponent }       from '../playersList/list.component';

@NgModule({
  imports: [ 
  		SharedModule, 
  		FormsModule
  ],
  declarations: [ 
  		AdminPanelComponent,
      ListComponent
  ],
  
  exports: [ 
  		AdminPanelComponent,
      ListComponent
  ]
})

export class AdminPanelModule { }