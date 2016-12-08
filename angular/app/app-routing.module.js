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
var router_1 = require('@angular/router');
// import { AppComponent }   from './app.component';
var lobby_component_1 = require('./lobby/lobby.component');
var PageNotFound_component_1 = require('./PageNotFound/PageNotFound.component');
var board_component_1 = require('./gameBoard/board.component');
var game_component_1 = require('./game/game.component');
// Array JSON de objectos
var appRoutes = [
    { path: '', component: lobby_component_1.LobbyComponent },
    { path: 'lobby', component: lobby_component_1.LobbyComponent },
    { path: 'board', component: board_component_1.BoardComponent },
    { path: 'game', component: game_component_1.GameComponent },
    //		children: [ { path: '/id', component: BoardComponent } ]
    // Redireciona para '/' quando outra coisa é escrita no URL que não seja uma rota definida
    { path: '**', component: PageNotFound_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                // ------------ MODULES ------------
                router_1.RouterModule.forRoot(appRoutes) // forRoot - uso só 1x; Depois poderei ter Children
            ],
            //declarations: [
            //LobbyComponent
            //PageNotFoundComponent
            //],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule; // We'll also export the AppRoutingModule so we can add it to our AppModule imports
//# sourceMappingURL=app-routing.module.js.map