import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameComponent } from './game.component';
//1 modulo jogos - import board
import { BoardComponent } from '../gameBoard/board.component';


@NgModule({
	imports: [ 
		BrowserModule 
	],
	declarations: [ 
		GameComponent, 
		BoardComponent
	],
	exports: [ 
		GameComponent 
	]
})

export class GameModule { }