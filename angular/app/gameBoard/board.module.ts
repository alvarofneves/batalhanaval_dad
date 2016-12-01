import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BoardComponent } from './board.component';

@NgModule({
	imports: [ 
		BrowserModule 
	],
	declarations: [ 
		BoardComponent 
	],
	exports: [ 
		BoardComponent 
	]
})

export class BoardModule { }