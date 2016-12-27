import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChatNewViewComponent } from '../chatNewView/chat-new-view.component';
//import { ChatComponent } 		from '../chat/chat.component';
//import { NotificationsComponent } 		from '../notifications/notifications.component';
	
//import { NotificationsModule }  from '../notifications/notifications.module';

@NgModule({
	imports: [ 
		BrowserModule,
		//NotificationsModule
	],
	declarations: [ 
		ChatNewViewComponent,
		//ChatComponent,
		//NotificationsComponent
	],
	exports: [ 
		ChatNewViewComponent 
	]
})

export class ChatNewViewModule { }