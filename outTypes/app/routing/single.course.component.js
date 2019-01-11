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
var SingleCourseComponent = (function () {
    function SingleCourseComponent(_activatedRoute, _router) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.courses = ['CS676', 'IT999', 'UX333', 'UI766'];
    }
    SingleCourseComponent.prototype.ngOnInit = function () {
        this.id = this._activatedRoute.snapshot.params['id'] - 1;
        this.validateParam();
        this.course = this.courses[this.id];
    };
    SingleCourseComponent.prototype.validateParam = function () {
        if (this.id >= this.courses.length) {
            this._router.navigate(['/courses']);
        }
    };
    return SingleCourseComponent;
}());
SingleCourseComponent = __decorate([
    core_1.Component({
        selector: '<single-course-component>',
        template: "\n            <h1 class=\"text-center display-1\">Single Course Component</h1>\n            <hr><hr><hr>\n            <h2 class=\"text-center display-3 text-success\">{{course}}</h2>\n    "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], SingleCourseComponent);
exports.SingleCourseComponent = SingleCourseComponent;
//# sourceMappingURL=single.course.component.js.map