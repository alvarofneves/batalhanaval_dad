import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AppComponent }   	from './app.component';
import { LobbyComponent }   	from './lobby/lobby.component';
import { RegisterComponent } 	from './playersRegister/register.component';
import { LoginComponent } 		from './playersLogin/login.component';
import { ListComponent } 		from './playersList/list.component';
import { BoardComponent }   	from './gameBoard/board.component';
import { GamePageComponent }   			from './gamePage/gamePage.component';
import { ChatComponent }   				from './chat/chat.component';
import { NotificationsModule } 			from './notifications/notifications.module';
import { AboutComponent }   			from './about/about.component';
import { PageNotFoundComponent }   		from './PageNotFound/PageNotFound.component';

import { AuthGuard } 		from './guards/auth-guard.service';
import { PageTopTenComponent }   from './playersPageTopTen/pageTopTen.component';
import { TopTenVictoriesComponent }   from './playersPageTopTen/topTenVictories/topTenVictories.component';
import { TopTenScoreComponent }   from './playersPageTopTen/topTenScore/topTenScore.component';
import { InitGameControlsComponent } from './gameInitControls/controls.component';
import { SelectShipsControlsComponent } from './gameSelectShipsControls/selectShips.component';
import { WebSocketService } from './notifications/websocket.service';

const appRoutes: Routes = [
	{ path: '', component: LobbyComponent },	
	{ path: 'lobby', component: LobbyComponent },

	//Redireciona para o formulario de registo
	{ path: 'register', component: RegisterComponent },

	{ path: 'login', component: LoginComponent },		

	{ path: 'board', component: BoardComponent },

	{ path: 'game', 						 
		component: GamePageComponent },
		//children: [ 
		//	{ path: '/id', component: BoardComponent } ]
	//},	 		 

	{ path: 'topten', component: PageTopTenComponent },

	{ path: 'gameRules', component: LobbyComponent },		// alterar
	{ path: 'about', component: AboutComponent },			// alterar
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