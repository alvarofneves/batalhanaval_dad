"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_routes_1 = require('./app.routes'); // Tem as rotas da app
var app_component_1 = require('./app.component');
var lobby_module_1 = require('./lobby/lobby.module');
var board_module_1 = require('./gameBoard/board.module');
var controls_module_1 = require('./initGameControls/controls.module');
var selectShips_module_1 = require('./selectShipsControls/selectShips.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                // Aqui coloco os MODULES
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(// forRoot - uso só 1x; Depois poderei ter Children
                app_routes_1.routes),
                lobby_module_1.LobbyModule,
                board_module_1.BoardModule,
                controls_module_1.InitGameControlsModule,
                selectShips_module_1.SelectShipsControlsModule
            ],
            declarations: [
                // Aqui coloco os COMPONENTS
                app_component_1.AppComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map