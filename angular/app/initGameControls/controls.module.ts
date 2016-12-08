import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InitGameControlsComponent }  from './controls.component';

@NgModule({
	imports: [ 
		BrowserModule 
	],
	declarations: [ 
		InitGameControlsComponent 
	],
	exports: [ 
		InitGameControlsComponent 
	]
})

export class InitGameControlsModule { }
