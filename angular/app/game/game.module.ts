import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameComponent } from './game.component';

@NgModule({
	imports: [ 
		BrowserModule 
	],
	declarations: [ 
		GameComponent 
	],
	exports: [ 
		GameComponent 
	]
})

export class GameModule { }