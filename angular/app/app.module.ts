import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';			
import { AppComponent }   from './app.component';

import { LobbyModule } from './lobby/lobby.module';
import { GamePageModule } from './gamePage/gamePage.module';	
//import { ChatNewViewModule } 		from './chatNewView/chat-new-view.module';	
import { PageNotFoundModule }   from './PageNotFound/PageNotFound.module';

import { WebSocketService } from './notifications/websocket.service';

@NgModule({
	imports: [ 
		// ------------ MODULES ------------
		BrowserModule, 
		FormsModule,
		AppRoutingModule,
		LobbyModule,
		GamePageModule,
		//ChatNewViewModule,
		PageNotFoundModule
	],
	declarations: [ 
		// ------------ COMPONENTS ------------
		AppComponent
	],
	providers: [
		WebSocketService
	],
	bootstrap: [ 
		AppComponent 
	]
})

export class AppModule { }