import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageTopTenComponent } 		from './pageTopTen.component';
import { TopTenVictoriesComponent } from './topTenVictories/topTenVictories.component';
import { TopTenScoreComponent }   	from './topTenScore/topTenScore.component';

@NgModule({
	imports: [ 
		BrowserModule
	],
	declarations: [ 
		PageTopTenComponent,
		TopTenVictoriesComponent,
		TopTenScoreComponent
	],
	exports: [ 
		PageTopTenComponent,
		TopTenVictoriesComponent,
		TopTenScoreComponent
	]
})

export class PageTopTenModule { }