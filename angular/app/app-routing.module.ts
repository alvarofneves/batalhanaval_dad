import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AppComponent }   from './app.component';
import { LobbyComponent }   from './lobby/lobby.component';
import { GamePageComponent }   from './gamePage/gamePage.component';
import { BoardComponent }   from './gameBoard/board.component';
import { PageTopTenComponent }   from './playersPageTopTen/pageTopTen.component';
import { TopTenVictoriesComponent }   from './playersPageTopTen/topTenVictories/topTenVictories.component';
import { TopTenScoreComponent }   from './playersPageTopTen/topTenScore/topTenScore.component';
import { InitGameControlsComponent } from './gameInitControls/controls.component';
import { SelectShipsControlsComponent } from './gameSelectShipsControls/selectShips.component';
import { NotificationsModule } from './notifications/notifications.module';
import { WebSocketService } from './notifications/websocket.service';
import { PageNotFoundComponent }   from './PageNotFound/PageNotFound.component';

const appRoutes: Routes = [
	{ path: '', component: LobbyComponent },	
	{ path: 'lobby', component: LobbyComponent },

	//Redireciona para o formulario de registo
	{ path: 'register', component: LobbyComponent },

	{ path: 'login', component: LobbyComponent },

	{ path: 'board', component: BoardComponent },

	{ path: 'game', component: GamePageComponent },	 		// add GUARD  
	//		children: [ { path: '/id', component: BoardComponent } ]

	{ path: 'topten', component: PageTopTenComponent },

	{ path: 'gameRules', component: LobbyComponent },		// alterar

	{ path: 'about', component: LobbyComponent },			// alterar

	{ path: 'players', component: LobbyComponent },			

	// Redireciona para '/' quando outra coisa é escrita no URL que não seja uma rota definida
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
	  	// ------------ MODULES ------------
	  	RouterModule.forRoot(appRoutes)		// forRoot - uso só 1x; Depois poderei ter Children
  ],
  exports: [
    	RouterModule
  ]
})

export class AppRoutingModule {}		// We'll also export the AppRoutingModule so we can add it to our AppModule imports