import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GamePageComponent } from './gamePage.component';
// import { BoardComponent } from './board.component';

@NgModule({
	imports: [ 
		BrowserModule
	],
	declarations: [ 
		GamePageComponent,
		//BoardComponent
	],
	exports: [ 
		GamePageComponent,
		//BoardComponent
	]
})

export class GamePageModule { }