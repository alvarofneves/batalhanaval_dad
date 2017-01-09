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
var pageTopTen_component_1 = require("./pageTopTen.component");
var topTenVictories_component_1 = require("./topTenVictories.component");
var topTenScore_component_1 = require("./topTenScore.component");
var PageTopTenModule = (function () {
    function PageTopTenModule() {
    }
    return PageTopTenModule;
}());
PageTopTenModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule
        ],
        declarations: [
            pageTopTen_component_1.PageTopTenComponent,
            topTenVictories_component_1.TopTenVictoriesComponent,
            topTenScore_component_1.TopTenScoreComponent
        ],
        exports: [
            pageTopTen_component_1.PageTopTenComponent,
            topTenVictories_component_1.TopTenVictoriesComponent,
            topTenScore_component_1.TopTenScoreComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], PageTopTenModule);
exports.PageTopTenModule = PageTopTenModule;
//# sourceMappingURL=pageTopTen.module.js.map