import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SharedModule }  from '../_shared/shared.module';
import { ListComponent } from './list.component';

@NgModule({
  imports: [ 
  		SharedModule, 
  		FormsModule,
      BrowserModule,
      
  ],
  declarations: [ 
  		ListComponent
  ],
  
  exports: [ 
  		ListComponent
  ]
})

export class ListModule { }
