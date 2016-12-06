import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { LobbyComponent }   from './lobby.component';

@NgModule({
	imports: [ 
		BrowserModule, 
	],
	declarations: [ 
		LobbyComponent
	]
})

export class LobbyModule { }