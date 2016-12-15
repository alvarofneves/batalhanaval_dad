import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

(function() {
    'use strict';

	console.log("$/angular/app/main.ts   >>> ANGULAR APP UP <<<	[14/12, 11.17h, AS]");

    /*function resetBoard() {
        console.log("reset board");
    }

    function newGame() {
    	console.log("new game");
    }*/
})();