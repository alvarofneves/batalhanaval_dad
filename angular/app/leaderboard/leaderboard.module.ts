import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { LeaderboardComponent } from './leaderboard.component';

@NgModule({
	imports: [ 
		BrowserModule
	],
	declarations: [ 
		LeaderboardComponent		
	],
	exports: [ 
		LeaderboardComponent
	]
})

export class LeaderboardModule { }