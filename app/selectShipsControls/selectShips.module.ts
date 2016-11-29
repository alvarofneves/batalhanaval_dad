import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SelectShipsControlsComponent }  from './selectShips.component';

@NgModule({	
	imports: [ 
		BrowserModule 
	],
	declarations: [ 
		SelectShipsControlsComponent 
	],
	exports: [ 
		SelectShipsControlsComponent 
	]
})

export class SelectShipsControlsModule { }