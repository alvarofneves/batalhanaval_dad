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
var router_1 = require("@angular/router");
var player_1 = require("../_shared/player");
var index_1 = require("../_services/index");
var RegisterComponent = (function () {
    function RegisterComponent(playerService, alertService, router) {
        this.playerService = playerService;
        this.alertService = alertService;
        this.router = router;
        // Quando form é carregado, dados do novo Player estão vazios 
        this.player = new player_1.Player("", "", "", "", false); // @params: name, email, password, confirmPassword
    }
    RegisterComponent.prototype.registerPlayer = function () {
        var _this = this;
        this.playerService.create(this.player)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
        });
        console.log("Player registado");
    };
    RegisterComponent.prototype.comparePassword = function (password, confirmPassword) {
        if (password === confirmPassword) {
            return true;
        }
        return false; //{message : 'Password not Match'}
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register',
        templateUrl: 'register.component.html',
        styleUrls: ['./forms.css']
    }),
    __metadata("design:paramtypes", [index_1.PlayerService, index_1.AlertService, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map