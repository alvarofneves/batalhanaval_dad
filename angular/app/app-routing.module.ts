import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AppComponent }   from './app.component';
import { LobbyComponent }   from './lobby/lobby.component';
import { GamePageComponent }   from './gamePage/gamePage.component';
import { BoardComponent }   from './gameBoard/board.component';
import { InitGameControlsComponent } from './initGameControls/controls.component';
import { SelectShipsControlsComponent } from './selectShipsControls/selectShips.component';
import { ChatComponent }   from './chat/chat.component';
import { NotificationsModule } from './notifications/notifications.module';
import { WebSocketService } from './notifications/websocket.service';
import { PageNotFoundComponent }   from './PageNotFound/PageNotFound.component';

// Array JSON de objectos
const appRoutes: Routes = [
	{ path: '', component: LobbyComponent },	
	{ path: 'lobby', component: LobbyComponent },

	{ path: 'board', component: BoardComponent },

	{ path: 'game', component: GamePageComponent },	 		// add GUARD  
	//		children: [ { path: '/id', component: BoardComponent } ]

	//{ path: 'chat', component: ChatComponent },

	// Redireciona para '/' quando outra coisa é escrita no URL que não seja uma rota definida
	{ path: '**', component: PageNotFoundComponent }
	
		
	// { path: "app", component: AppComponent },
	// { path: 'login', component: LoginComponent }
	// { path: 'register', component: RegisterComponent }
	// { path: 'games', component: GamesComponent },
	// { path: 'leaderboard', component: LeaderboardComponent },
	// { path: 'gamesEnded', component: GamesEndedComponent },		// add GUARD
	// { path: 'gameRules', component: GameRulesComponent },
	// { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
	  	// ------------ MODULES ------------
	  	RouterModule.forRoot(appRoutes, {useHash: true}),		// forRoot - uso só 1x; Depois poderei ter Children		
  ],
  exports: [
    	RouterModule
  ]
})

export class AppRoutingModule {}		// We'll also export the AppRoutingModule so we can add it to our AppModule imports