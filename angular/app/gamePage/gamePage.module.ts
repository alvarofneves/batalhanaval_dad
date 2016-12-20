import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GamePageComponent } from './gamePage.component';
import { BoardComponent } from '../gameBoard/board.component';
import { InitGameControlsComponent } from '../initGameControls/controls.component';
import { SelectShipsControlsComponent } from '../selectShipsControls/selectShips.component';
import {BoatsComponent} from "../gameBoard/boats.component";
import {CellComponent} from "../gameBoard/cell.component";

@NgModule({
	imports: [ 
		BrowserModule
	],
	declarations: [ 
		GamePageComponent,
		BoardComponent,
		InitGameControlsComponent,
		SelectShipsControlsComponent,
		BoatsComponent,
		CellComponent
	],
	exports: [ 
		GamePageComponent,
		BoardComponent,
		InitGameControlsComponent,
		SelectShipsControlsComponent,
		BoatsComponent,
		CellComponent
	]
})

export class GamePageModule { }