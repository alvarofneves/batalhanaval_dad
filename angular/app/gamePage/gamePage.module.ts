import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GamePageComponent } 			from './gamePage.component';
import { BoardComponent } 				from '../gameBoard/board.component';
import { InitGameControlsComponent } 	from '../gameInitControls/controls.component';
import { SelectShipsControlsComponent } from '../gameSelectShipsControls/selectShips.component';
//import { PendentGamesComponent } 		from '../gamesPendent/pendent.component';

@NgModule({
	imports: [ 
		BrowserModule
	],
	declarations: [ 
		GamePageComponent,
		BoardComponent,
		InitGameControlsComponent,
		SelectShipsControlsComponent
		//PendentGamesComponent
		BoatsComponent,
		CellComponent
	],
	exports: [ 
		GamePageComponent,
		BoardComponent,
		InitGameControlsComponent,
		SelectShipsControlsComponent,
		//PendentGamesComponent
		BoatsComponent,
	]
})

export class GamePageModule { }