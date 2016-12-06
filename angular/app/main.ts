import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

(function() {
    'use strict';

	console.log("$/angular/app/main.ts 15.09  //ok");

    function resetBoard() {
        console.log("reset board");
    }

    function newGame() {
    	console.log("new game");
    }
})();