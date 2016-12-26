import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule }   	from '@angular/forms';		
import { AppRoutingModule } from './app-routing.module';

import { RegisterModule } 	from './playersRegister/register.module';
import { LoginModule }		from './playersLogin/login.module';
import { ListModule } 		from './playersList/list.module';
import { LobbyModule } 		from './lobby/lobby.module';
import { PageTopTenModule }   	from './playersPageTopTen/pageTopTen.module';
import { GamePageModule } 		from './gamePage/gamePage.module';		
import { AboutModule }   		from './about/about.module';
import { PageNotFoundModule }   from './PageNotFound/PageNotFound.module';	
import { NotificationsModule } 	from './notifications/notifications.module';

import { ChatComponent } 	from './chat/chat.component';
import { AppComponent }   	from './app.component';

// ------------ SERVICES ------------
import { AlertService, PlayerService } 	from './_services/index';   
import { AuthenticationService } 		from './_services/authentication.service';
import { SettingsService } 				from './_services/settings.service';
import { WebSocketService } 			from './notifications/websocket.service';

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
		PageTopTenModule,
		NotificationsModule,
		AboutModule,
		PageNotFoundModule
	],
	declarations: [ 
		// ------------ COMPONENTS ------------
		AppComponent
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