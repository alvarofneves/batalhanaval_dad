"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
(function () {
    'use strict';
    console.log("início 00.38h....");
    var $btnStart = $('#btn-start');
    var $btnReset = $('#btn-reset');
    // testar app Node.js
    var var_a = 999;
    console.log("Print test <main.ts> ...." + var_a);
    $btnStart.click(newGame).click;
    $btnReset.click(resetBoard).click;
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
//# sourceMappingURL=main.js.map