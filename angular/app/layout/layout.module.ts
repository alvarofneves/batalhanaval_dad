import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutComponent }  from './layout.component';

@NgModule({	
	imports: [ 
		BrowserModule 
	],
	declarations: [ 
		LayoutComponent 
	],
	exports: [ 
		LayoutComponent 
	]
})

export class LayoutModule { }