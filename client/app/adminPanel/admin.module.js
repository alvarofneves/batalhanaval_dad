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
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../_shared/shared.module");
var admin_component_1 = require("./admin.component");
var list_component_1 = require("../playersList/list.component");
var AdminPanelModule = (function () {
    function AdminPanelModule() {
    }
    return AdminPanelModule;
}());
AdminPanelModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            forms_1.FormsModule
        ],
        declarations: [
            admin_component_1.AdminPanelComponent,
            list_component_1.ListComponent
        ],
        exports: [
            admin_component_1.AdminPanelComponent,
            list_component_1.ListComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], AdminPanelModule);
exports.AdminPanelModule = AdminPanelModule;
//# sourceMappingURL=admin.module.js.map