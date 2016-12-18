import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';			

import { AppComponent }   from './app.component';
import { ChatComponent } from './chat/chat.component';

import { PageNotFoundModule }   from './PageNotFound/PageNotFound.module';
import { LobbyModule } from './lobby/lobby.module';
import { RegisterModule } from './usersRegister/register.module';
import { GamePageModule } from './gamePage/gamePage.module';		
import { NotificationsModule } from './notifications/notifications.module';

//services
import { AlertService, PlayerService } from './services/index';   
import { WebSocketService } from './notifications/websocket.service';

@NgModule({
	imports: [ 
		// ------------ MODULES ------------
		BrowserModule, 
		FormsModule,
		AppRoutingModule,
		LobbyModule,
		GamePageModule,
		NotificationsModule,
		PageNotFoundModule,
		RegisterModule
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