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
var index_1 = require("../_services/index");
var NotificationsComponent = (function () {
    function NotificationsComponent(wsService) {
        this.wsService = wsService;
        this.playersChannel = [];
        this.chatChannel = [];
        this.gameChannel = [];
    }
    // To use the WebSocket service is necessary to subscribe the observable
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // NOTA: por à escuta também no HTML 
        this.wsService.getChatMessages().subscribe(function (m) { return _this.chatChannel.push(m); });
        this.wsService.getPlayersMessages().subscribe(function (m) { return _this.playersChannel.push(m); });
        this.wsService.getNewGamesCreated().subscribe(function (m) { return _this.gameChannel.push(m); });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'notifications-panel',
        templateUrl: 'notifications.component.html'
    }),
    __metadata("design:paramtypes", [index_1.WebSocketService])
], NotificationsComponent);
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=notifications.component.js.map