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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var gamePage_component_1 = require("./gamePage.component");
var board_component_1 = require("../gameBoard/board.component");
var controls_component_1 = require("../gameInitControls/controls.component");
var selectShips_component_1 = require("../gameSelectShipsControls/selectShips.component");
var boats_component_1 = require("../gameBoard/boats.component");
var cell_component_1 = require("../gameBoard/cell.component");
//import { PendentGamesComponent } 		from '../gamesPendent/pendent.component';
var GamePageModule = (function () {
    function GamePageModule() {
    }
    return GamePageModule;
}());
GamePageModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule
        ],
        declarations: [
            gamePage_component_1.GamePageComponent,
            board_component_1.BoardComponent,
            controls_component_1.InitGameControlsComponent,
            selectShips_component_1.SelectShipsControlsComponent,
            //PendentGamesComponent
            boats_component_1.BoatsComponent,
            cell_component_1.CellComponent
        ],
        exports: [
            gamePage_component_1.GamePageComponent,
            board_component_1.BoardComponent,
            controls_component_1.InitGameControlsComponent,
            selectShips_component_1.SelectShipsControlsComponent,
            //PendentGamesComponent
            boats_component_1.BoatsComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], GamePageModule);
exports.GamePageModule = GamePageModule;
//# sourceMappingURL=gamePage.module.js.map