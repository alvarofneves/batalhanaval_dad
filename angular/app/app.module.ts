import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';		

import { LobbyModule } from './lobby/lobby.module';
import { RegisterModule } from './playersRegister/register.module';
import { GamePageModule } from './gamePage/gamePage.module';		
import { NotificationsModule } from './notifications/notifications.module';
import { PageNotFoundModule }   from './PageNotFound/PageNotFound.module';

import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';	

import { ChatComponent } from './chat/chat.component';

// ------------ SERVICES ------------
import { AlertService, PlayerService } from './services/index';   
import { WebSocketService } from './notifications/websocket.service';

@NgModule({
	imports: [ 
		// ------------ MODULES ------------
		BrowserModule, 
		FormsModule,
		AppRoutingModule,
		LobbyModule,
		RegisterModule,
		GamePageModule,
		NotificationsModule,
		PageNotFoundModule
	],
	declarations: [ 
		// ------------ COMPONENTS ------------
		AppComponent,
		ChatComponent
	],
	providers: [
		WebSocketService,
		PlayerService,
		AlertService
	],
	bootstrap: [ 
		AppComponent 
	]
})

export class AppModule { }