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
var core_2 = require("@angular/core");
var ChildComponent = (function () {
    function ChildComponent() {
        //instance from EventEmitter Class
        this.childData = new core_2.EventEmitter();
    }
    ChildComponent.prototype.methodEmitter = function (value) {
        this.childData.emit(value);
    };
    return ChildComponent;
}());
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child-component',
        template: "\n            <h1 class='display-4'>Child Component</h1>\n            <h5 class='text-success'>{{titleChild}}</h5>\n            <input type=\"text\" (keyup)=\"methodEmitter(inputChild.value)\" #inputChild class=\"border border-info form-control\" />\n    ",
        inputs: ['titleChild'],
        outputs: ['childData']
    }),
    __metadata("design:paramtypes", [])
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map