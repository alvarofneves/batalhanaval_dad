import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { LobbyComponent }   from './lobby.component';

import { ChatComponent } from '../chat/chat.component';
import { NotificationsModule } from '../notifications/notifications.module';

@NgModule({
	imports: [ 
		BrowserModule, 
		NotificationsModule
	],
	declarations: [ 
		LobbyComponent,
		ChatComponent
	],
	exports: [ 
		LobbyComponent 
	]
})

export class LobbyModule { }