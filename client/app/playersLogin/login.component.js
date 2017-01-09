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
var index_1 = require("../_services/index");
var LoginComponent = (function () {
    function LoginComponent(route, router, authService, alertService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authService.logout();
        // get return url from route parameters or default to '/' 
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
        console.log('on submit');
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        console.log(form);
        this.loading = true;
        this.authService.login(form.email, form.password)
            .subscribe(function (result) {
            console.log('login successful');
            _this.alertService.success('Loggin successful', true);
            _this.router.navigate(['/lobby']);
        });
        //alterar estado do jogador
        //console.log(result.id);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html',
        styleUrls: ['../playersRegister/forms.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, index_1.AuthService, index_1.AlertService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map