import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { PageNotFoundComponent }   from './PageNotFound.component';

@NgModule({
	imports: [ 
		BrowserModule, 
	],
	declarations: [ 
		PageNotFoundComponent
	]
})

export class PageNotFoundModule { }