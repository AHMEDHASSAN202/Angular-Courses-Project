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
var app_service_1 = require("./app.service");
var ApiComponent = (function () {
    function ApiComponent(_app_service) {
        var _this = this;
        this._app_service = _app_service;
        this._app_service.getPosts().subscribe(function (data) { _this.posts = data; });
    }
    return ApiComponent;
}());
ApiComponent = __decorate([
    core_1.Component({
        template: "\n            <h1 class=\"display-1 text-center\">API</h1>\n            <ul>\n                <li *ngFor=\"let post of posts\">ID=> {{ post.id }} AND Post Title=> {{post.title}}</li>\n            </ul>\n        ",
        providers: [app_service_1.AppService]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], ApiComponent);
exports.ApiComponent = ApiComponent;
//# sourceMappingURL=api.component.js.map