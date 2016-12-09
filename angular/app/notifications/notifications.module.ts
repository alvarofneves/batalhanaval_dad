import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NotificationsComponent }  from './notifications.component';

@NgModule({
  	imports: [ 
  		BrowserModule, 
  		HttpModule 
  	],
  	declarations: [ 
  		NotificationsComponent 
  	],
  	exports: [ 
  		NotificationsComponent
  	]
})

export class NotificationsModule { }