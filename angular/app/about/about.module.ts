import { NgModule }     from '@angular/core';
import { RouterModule }     from '@angular/router';

import { AboutComponent }   from './about.component';

@NgModule({
  imports: [ 
      RouterModule,
  ],
  declarations: [ 
  		AboutComponent
  ],
  
  exports: [ 
  		AboutComponent
  ]
})

export class AboutModule { }