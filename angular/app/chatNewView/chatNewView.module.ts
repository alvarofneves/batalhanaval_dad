import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { ChatNewViewComponent } from '../chatNewView/chatNewView.component';
import { ChatComponent } from '../chat/chat.component';

import { NotificationsModule } from '../notifications/notifications.module';

@NgModule({
	imports: [ 
		BrowserModule, 
		NotificationsModule
	],
	declarations: [ 
		ChatNewViewComponent,
		ChatComponent
	],
	exports: [ 
		ChatNewViewComponent 
	]
})

export class ChatNewViewModule { }