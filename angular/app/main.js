"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
(function () {
    'use strict';
    // testar app Node.js
    var varA = 9999;
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
//# sourceMappingURL=main.js.map