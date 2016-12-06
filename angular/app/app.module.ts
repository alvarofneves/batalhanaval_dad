import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { routes } from './app.routes'				// Tem as rotas da app
import { AppComponent }   from './app.component';
import { LobbyModule } from './lobby/lobby.module';
import { BoardModule } from './gameBoard/board.module';
import { InitGameControlsModule } from './initGameControls/controls.module';
import { SelectShipsControlsModule } from './selectShipsControls/selectShips.module';

@NgModule({
	imports: [ 
		// Aqui coloco os MODULES
		BrowserModule, 
		RouterModule.forRoot(			// forRoot - uso só 1x; Depois poderei ter Children
			routes
		),
		LobbyModule,
		BoardModule, 
		InitGameControlsModule, 
		SelectShipsControlsModule 
	],
	declarations: [ 
		// Aqui coloco os COMPONENTS
		AppComponent 
	],
	bootstrap: [ 
		AppComponent 
	]
})

export class AppModule { }