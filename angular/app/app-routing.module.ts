import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AppComponent }   from './app.component';
import { LobbyComponent }   from './lobby/lobby.component';
import { RegisterComponent } from './usersRegister/register.component';
import { BoardComponent }   from './gameBoard/board.component';
import { GamePageComponent }   from './gamePage/gamePage.component';
import { InitGameControlsComponent } from './initGameControls/controls.component';
import { SelectShipsControlsComponent } from './selectShipsControls/selectShips.component';
import { ChatComponent }   from './chat/chat.component';
import { NotificationsModule } from './notifications/notifications.module';
import { PageNotFoundComponent }   from './PageNotFound/PageNotFound.component';

import { WebSocketService } from './notifications/websocket.service';

const appRoutes: Routes = [
	{ path: '', component: LobbyComponent },	
	{ path: 'lobby', component: LobbyComponent },

	{ path: 'board', component: BoardComponent },

	{ path: 'game', component: GamePageComponent },	 		// add GUARD  
	//		children: [ { path: '/id', component: BoardComponent } ]

	//Redireciona para o formulario de registo
	{ path: 'register', component: RegisterComponent },

	// Redireciona para '/' quando outra coisa é escrita no URL que não seja uma rota definida
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
  	// ------------ MODULES ------------
  	RouterModule.forRoot(appRoutes,{ useHash: true} )		// forRoot - uso só 1x; Depois poderei ter Children 
  ],
  exports: [
    	RouterModule
  ]
})

export class AppRoutingModule {}		// We'll also export the AppRoutingModule so we can add it to our AppModule imports