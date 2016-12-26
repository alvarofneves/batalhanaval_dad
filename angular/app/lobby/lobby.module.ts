import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LobbyComponent }   from './lobby.component';

@NgModule({
	imports: [ 
		BrowserModule, 
	],
	declarations: [ 
		LobbyComponent
	],
	exports: [ 
		LobbyComponent 
	]
})

export class LobbyModule { }