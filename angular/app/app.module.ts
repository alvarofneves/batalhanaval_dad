import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';		

import { LobbyModule } 		from './lobby/lobby.module';
import { RegisterModule } 	from './playersRegister/register.module';
import { LoginModule }		from './playersLogin/login.module';
import { ListModule } 		from './playersList/list.module';
import { GamePageModule } 	from './gamePage/gamePage.module';		
import { NotificationsModule } 	from './notifications/notifications.module';
import { AboutModule }   		from './about/about.module';
import { PageNotFoundModule }   from './PageNotFound/PageNotFound.module';
import { AppRoutingModule } 	from './app-routing.module';	

import { ChatComponent } 	from './chat/chat.component';
import { AppComponent }   	from './app.component';

import { SettingsService } 	from './services/settings.service';

// ------------ SERVICES ------------
import { AlertService, PlayerService } 	from './services/index';   
import { WebSocketService } 			from './notifications/websocket.service';
import { AuthenticationService } 		from './services/authentication.service';

@NgModule({
	imports: [ 
		// ------------ MODULES ------------
		BrowserModule, 
		FormsModule,
		AppRoutingModule,
		LobbyModule,
		RegisterModule,
		LoginModule,
		ListModule,
		GamePageModule,
		NotificationsModule,
		AboutModule,
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
		AlertService,
		AuthenticationService,
		SettingsService
	],
	bootstrap: [ 
		AppComponent 
	]
})

export class AppModule { }