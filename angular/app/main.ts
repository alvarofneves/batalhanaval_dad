import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

(function() {
    'use strict';

    // testar app Node.js
	let varA = 9999;
	console.log("$angular/app/main.ts 00.48    //ok");

    /**
    * Reset the board
    */
    function resetBoard() {
        console.log("reset board");
    }

	/**
    * Begin a new game
    */
    function newGame() {
    	console.log("new game");
    }
})();