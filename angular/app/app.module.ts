import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';			
import { AppComponent }   from './app.component';

import { ChatNewViewModule } from './chatNewView/chatNewView.module';
//import { ChatComponent } from './chat/chat.component';
//import { NotificationsModule } from './notifications/notifications.module';

import { PageNotFoundModule }   from './PageNotFound/PageNotFound.module';
import { LobbyModule } from './lobby/lobby.module';
import { GamePageModule } from './gamePage/gamePage.module';		

import { WebSocketService } from './notifications/websocket.service';

@NgModule({
	imports: [ 
		// ------------ MODULES ------------
		BrowserModule, 
		FormsModule,
		AppRoutingModule,
		LobbyModule,
		GamePageModule,
		//NotificationsModule,
		PageNotFoundModule
	],
	declarations: [ 
		// ------------ COMPONENTS ------------
		AppComponent
		//ChatComponent
	],
	providers: [
		WebSocketService
	],
	bootstrap: [ 
		AppComponent 
	]
})

export class AppModule { }