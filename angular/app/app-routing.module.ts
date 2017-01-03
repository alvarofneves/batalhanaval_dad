import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AppComponent }   	from './app.component';
import { RegisterComponent } 	from './playersRegister/register.component';
import { LoginComponent } 		from './playersLogin/login.component';
import { AdminPanelComponent } 	from './adminPanel/admin.component';
import { LobbyComponent }   	from './lobby/lobby.component';
import { GamePageComponent }   	from './gamePage/gamePage.component';
import { BoardComponent }   	from './gameBoard/board.component';
import { InitGameControlsComponent } 	from './gameInitControls/controls.component';
import { SelectShipsControlsComponent } from './gameSelectShipsControls/selectShips.component';
import { PageTopTenComponent }   		from './playersPageTopTen/pageTopTen.component';
import { TopTenVictoriesComponent }   	from './playersPageTopTen/topTenVictories.component';
import { TopTenScoreComponent }   		from './playersPageTopTen/topTenScore.component';
import { AboutComponent }   			from './about/about.component';
import { PageNotFoundComponent }   		from './PageNotFound/PageNotFound.component';
import { ChatComponent }   				from './chat/chat.component';

import { NotificationsModule } 			from './notifications/notifications.module';

import { WebSocketService } 			from './_services/websocket.service';
import { AuthGuard } 					from './_guards/auth-guard.service';

const appRoutes: Routes = [
	{ path: '', component: LobbyComponent },	
	{ path: 'lobby', component: LobbyComponent },

	{ path: 'register', component: RegisterComponent },

	{ path: 'login', component: LoginComponent },	

	{ path: 'board', component: BoardComponent },

	{ path: 'game', component: GamePageComponent },
		//children: [ 
		//	{ path: '/id', component: BoardComponent } ]
	//},	 		 

	{ path: 'topten', component: PageTopTenComponent },

	{ path: 'about', component: AboutComponent },		

		// criar Guard. Só admin aqui entra
	{ path: 'admin', component: AdminPanelComponent },

	// Redireciona para '/' quando outra coisa é escrita no URL que não seja uma rota definida
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
  		// ------------ MODULES ------------
  		RouterModule.forRoot(appRoutes,{ useHash: true} ),		// forRoot - uso só 1x; Depois poderei ter Children 
  		RouterModule.forChild(appRoutes)
  ],
  exports: [
    	RouterModule
  ]
})

export class AppRoutingModule {}		// We'll also export the AppRoutingModule so we can add it to our AppModule imports