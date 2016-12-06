import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';				// Tem as rotas da app

import { AppComponent }   from './app.component';

import { LobbyModule } from './lobby/lobby.module';
import { GameModule } from './game/game.module';		// Pág. do jogo (board + butões + etc)
import { BoardModule } from './gameBoard/board.module';
import { InitGameControlsModule } from './initGameControls/controls.module';
import { SelectShipsControlsModule } from './selectShipsControls/selectShips.module';

@NgModule({
	imports: [ 
		// ------------ MODULES ------------
		BrowserModule, 
		AppRoutingModule,
		LobbyModule,
		BoardModule, 
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