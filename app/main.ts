import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

(function() {
    'use strict';

    console.log("início 01.45h....");

    /*let $btnStart = $('#btn-start');
    let $btnReset = $('#btn-reset');*/

    // testar app Node.js
	let varA = 999;
	console.log("Print test <main.ts> ...." + vaAr);

	/*$btnStart.click(newGame).click;
	$btnReset.click(resetBoard).click;*/

    //TODO selecionar cell clicada
	function selectedCell() {
	}

	/**
     * Default informations for the HTML page when loaded
     */
    function loadPage() {
        //$grid.attr('disabled', 'disabled');       
    }

	/**
    * Begin a new game
    */
    function newGame() {
    	console.log("new game");
    }

	/**
    * Reset the board
    */
    function resetBoard() {
    	console.log("reset board");
    }
})();