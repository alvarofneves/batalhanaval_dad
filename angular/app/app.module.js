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
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var chat_component_1 = require("./chat/chat.component");
var PageNotFound_module_1 = require("./PageNotFound/PageNotFound.module");
var lobby_module_1 = require("./lobby/lobby.module");
var register_module_1 = require("./usersRegister/register.module");
var gamePage_module_1 = require("./gamePage/gamePage.module");
var notifications_module_1 = require("./notifications/notifications.module");
//services
var index_1 = require("./services/index");
var websocket_service_1 = require("./notifications/websocket.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            // ------------ MODULES ------------
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            lobby_module_1.LobbyModule,
            gamePage_module_1.GamePageModule,
            notifications_module_1.NotificationsModule,
            PageNotFound_module_1.PageNotFoundModule,
            register_module_1.RegisterModule
        ],
        declarations: [
            // ------------ COMPONENTS ------------
            app_component_1.AppComponent,
            chat_component_1.ChatComponent
        ],
        providers: [
            websocket_service_1.WebSocketService,
            index_1.PlayerService,
            index_1.AlertService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map