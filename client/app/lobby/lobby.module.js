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
var lobby_component_1 = require("./lobby.component");
var chat_component_1 = require("../chat/chat.component");
var notifications_module_1 = require("../notifications/notifications.module");
//import { PendentGamesComponent } from '../gamesPendent/pendent.component';
var LobbyModule = (function () {
    function LobbyModule() {
    }
    return LobbyModule;
}());
LobbyModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            notifications_module_1.NotificationsModule
        ],
        declarations: [
            lobby_component_1.LobbyComponent,
            chat_component_1.ChatComponent
        ],
        exports: [
            lobby_component_1.LobbyComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], LobbyModule);
exports.LobbyModule = LobbyModule;
//# sourceMappingURL=lobby.module.js.map