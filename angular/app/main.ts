import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

(function() {
    'use strict';

	console.log("##### BRANCH 'leaderboard' | $angular/app/main.ts | >>>ANGULAR UP<<< | 19.16 #####");

    /*function resetBoard() {
        console.log("reset board");
    }

    function newGame() {
    	console.log("new game");
    }*/
})();