import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { GamePageComponent } from "./gamePage/gamePage.component";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

(function() {
    'use strict';

	console.log("$/angular/app/main.ts   [A CORRER] ");
	
	//let gpc = new GamePageComponent(4,false); //PLZFIX Plz remove when requested

    /*function resetBoard() {
        console.log("reset board");
    }

    function newGame() {
    	console.log("new game");
    }*/
})();