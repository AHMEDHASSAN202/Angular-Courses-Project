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
var CoursesComponent = (function () {
    function CoursesComponent(_router) {
        this._router = _router;
        this.courses = ['CS676', 'IT999', 'UX333', 'UI766'];
    }
    CoursesComponent.prototype.goToCourse = function (idCourse) {
        this._router.navigate(['/courses', idCourse + 1], { skipLocationChange: true });
    };
    return CoursesComponent;
}());
CoursesComponent = __decorate([
    core_1.Component({
        selector: 'courses-component',
        template: "\n            <h1 class=\"display-1 text-center\">Courses Component</h1>\n            <div class=\"alert alert-dark mt-5\">\n                <ul>\n                    <li *ngFor=\"let course of courses; let i = index\">\n                        <a (click)=\"goToCourse(i)\" >{{course}}</a>\n                    </li>\n                </ul>\n            <div>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CoursesComponent);
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map