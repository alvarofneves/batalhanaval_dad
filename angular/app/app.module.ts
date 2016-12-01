import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

// Imports created for this project
import { BoardModule } from './gameBoard/board.module';
import { InitGameControlsModule } from './initGameControls/controls.module'
import { SelectShipsControlsModule } from './selectShipsControls/selectShips.module'

@NgModule({
	imports: [ 
		BrowserModule, 
		BoardModule, 
		InitGameControlsModule, 
		SelectShipsControlsModule 
	],
	declarations: [ 
		AppComponent 
	],
	bootstrap: [ 
		AppComponent 
	]
})

export class AppModule { }
