import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {BoardClass} from "./gameBoard/boardClass";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

(function() {
    'use strict';

	console.log("$/angular/app/main.ts    [12.50h AS]  main");

	new BoardClass();

    /*function resetBoard() {
        console.log("reset board");
    }

    function newGame() {
    	console.log("new game");
    }*/
})();