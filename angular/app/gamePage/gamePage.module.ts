import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GamePageComponent } 			from './gamePage.component';
import { BoardComponent } 				from '../gameBoard/board.component';
import { InitGameControlsComponent } 	from '../gameInitControls/controls.component';
import { SelectShipsControlsComponent } from '../gameSelectShipsControls/selectShips.component';

@NgModule({
	imports: [ 
		BrowserModule
	],
	declarations: [ 
		GamePageComponent,
		BoardComponent,
		InitGameControlsComponent,
		SelectShipsControlsComponent
	],
	exports: [ 
		GamePageComponent,
		BoardComponent,
		InitGameControlsComponent,
		SelectShipsControlsComponent
	]
})

export class GamePageModule { }