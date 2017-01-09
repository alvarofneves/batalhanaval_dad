import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule }   	from '@angular/forms';		
import { AppRoutingModule } from './app-routing.module';

import { RegisterModule } 	from './playersRegister/register.module';
import { LoginModule }		from './playersLogin/login.module';
import { AdminPanelModule } from './adminPanel/admin.module';
import { LobbyModule } 		from './lobby/lobby.module';
import { PageTopTenModule }   	from './playersPageTopTen/pageTopTen.module';
import { GamePageModule } 		from './gamePage/gamePage.module';		
import { AboutModule }   		from './about/about.module';
import { PageNotFoundModule }   from './pageNotFound/pageNotFound.module';	
import { NotificationsModule } 	from './notifications/notifications.module';

import { ChatComponent } 	from './chat/chat.component';
import { AppComponent }   	from './app.component';

// ------------ SERVICES ------------
import { AlertService, AuthService, SettingsService, PlayerService, GameService, WebSocketService } from './_services/index';   

@NgModule({
	imports: [ 
		// ------------ MODULES ------------
		BrowserModule, 
		FormsModule,
		AppRoutingModule,
		LobbyModule,
		RegisterModule,
		LoginModule,
		AdminPanelModule,
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
		SettingsService,
		PlayerService,
		GameService,
		AlertService,
		WebSocketService,
		AuthService
	],
	bootstrap: [ 
		AppComponent 
	]
})

export class AppModule { }