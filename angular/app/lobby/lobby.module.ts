import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { LobbyComponent }   	 from './lobby.component';
import { ChatComponent } 		 from '../chat/chat.component';
import { NotificationsModule }   from '../notifications/notifications.module';
//import { PendentGamesComponent } from '../gamesPendent/pendent.component';

@NgModule({
	imports: [ 
		BrowserModule, 
		FormsModule,
		NotificationsModule
	],
	declarations: [ 
		LobbyComponent,
		ChatComponent
		//PendentGamesComponent
	],
	exports: [ 
		LobbyComponent 
	]
})

export class LobbyModule { }