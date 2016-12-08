import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';				// Tem as rotas da app

import { AppComponent }   from './app.component';

import { PageNotFoundModule }   from './PageNotFound/PageNotFound.module';
import { LobbyModule } from './lobby/lobby.module';
import { GamePageModule } from './gamePage/gamePage.module';			// Pág. do jogo (board + botões + etc)
import { BoardModule } from './gameBoard/board.module';
import { InitGameControlsModule } from './initGameControls/controls.module';
import { SelectShipsControlsModule } from './selectShipsControls/selectShips.module';

@NgModule({
	imports: [ 
		// ------------ MODULES ------------
		BrowserModule, 
		AppRoutingModule,
		PageNotFoundModule,
		LobbyModule,
		BoardModule, 
		GamePageModule,
		InitGameControlsModule, 
		SelectShipsControlsModule 
	],
	declarations: [ 
		// ------------ COMPONENTS ------------
		AppComponent 
	],
	bootstrap: [ 
		AppComponent 
	]
})

export class AppModule { }