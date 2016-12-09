import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';			

import { AppComponent }   from './app.component';
import { ChatComponent } from './chat/chat.component';

import { PageNotFoundModule }   from './PageNotFound/PageNotFound.module';
import { LobbyModule } from './lobby/lobby.module';
import { GameModule } from './game/game.module';			// Pág. do jogo (board + botões + etc)
import { InitGameControlsModule } from './initGameControls/controls.module';
import { SelectShipsControlsModule } from './selectShipsControls/selectShips.module';
import { NotificationsModule } from './notifications/notifications.module';

import { WebSocketService } from './notifications/websocket.service';

@NgModule({
	imports: [ 
		// ------------ MODULES ------------
		BrowserModule, 
		FormsModule,
		AppRoutingModule,
		PageNotFoundModule,
		LobbyModule,
		GameModule,
		InitGameControlsModule, 
		SelectShipsControlsModule,
		NotificationsModule
	],
	declarations: [ 
		// ------------ COMPONENTS ------------
		AppComponent,
		ChatComponent
	],
	providers: [
		WebSocketService
	],
	bootstrap: [ 
		AppComponent 
	]
})

export class AppModule { }