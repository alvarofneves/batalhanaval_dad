import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AppComponent }   from './app.component';
import { LobbyComponent }   from './lobby/lobby.component';
import { PageNotFoundComponent }   from './PageNotFound/PageNotFound.component';
import { BoardComponent }   from './gameBoard/board.component';

// Array JSON de objectos
const appRoutes: Routes = [
	{ path: '', component: LobbyComponent },	
	{ path: 'lobby', component: LobbyComponent },

	{ path: 'board', component: BoardComponent },

	// Redireciona para '/' quando outra coisa é escrita no URL que não seja uma rota definida
	{ path: '**', component: PageNotFoundComponent }
	
		
	// { path: "app", component: AppComponent },
	// { path: "lobby", component: LobbyComponent }
		// add children p/ chat
		  // children: { path: 'chatPublic', component: ChatComponent }  
	// { path: 'login', component: LoginComponent }
	// { path: 'register', component: RegisterComponent }
	// { path: 'games', component: GamesComponent },
	// { path: 'leaderboard', component: LeaderboardComponent },
	// { path: "game", component: GameComponent }	 // add GUARD  
	//			children: [ { path: '/id', component: BoardComponent } ]
	// { path: 'gamesEnded', component: GamesEndedComponent },		// add GUARD
	// { path: 'gameRules', component: GameRulesComponent },
	// { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
  		// ------------ MODULES ------------
  		RouterModule.forRoot(appRoutes)		// forRoot - uso só 1x; Depois poderei ter Children
  ],
  	//declarations: [
  		//LobbyComponent
  		//PageNotFoundComponent
  //],
  exports: [
    	RouterModule
  ]
})

export class AppRoutingModule {}		// We'll also export the AppRoutingModule so we can add it to our AppModule imports