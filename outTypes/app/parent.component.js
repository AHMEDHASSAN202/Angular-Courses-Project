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
var ParentComponent = (function () {
    function ParentComponent() {
    }
    return ParentComponent;
}());
ParentComponent = __decorate([
    core_1.Component({
        selector: 'parent-component',
        template: "\n        <h1 class='display-4'>Parent Component</h1>\n        <h5 class=\"text-info\">{{parentData}}</h5>\n        <input (keyup)=\"false\" class=\"border border-success form-control mb-5\" #inputParent type=\"text\" />\n        <hr>\n        <div class=\"mt-5 alert alert-warning\">\n            <child-component (childData)=\"parentData = $event\" [titleChild]=\"inputParent.value\"></child-component>\n        <div>\n\n    "
    }),
    __metadata("design:paramtypes", [])
], ParentComponent);
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map