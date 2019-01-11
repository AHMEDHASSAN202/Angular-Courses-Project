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
var FirstComponent = (function () {
    function FirstComponent() {
        this.myFriends = ['Osama', 'Mahmoud', 'Kassem'];
        this.title = 'Just Title For Test';
    }
    //add new friend into my friend arrray
    FirstComponent.prototype.addNewFriendMethod = function (friend) {
        this.myFriends.push(friend);
    };
    return FirstComponent;
}());
FirstComponent = __decorate([
    core_1.Component({
        selector: 'first-component',
        template: "\n        <h1 class=\"display-3\">One Way Bindings</h1>\n        <ul>\n            <li *ngFor=\"let myFriend of myFriends\">{{myFriend}}</li>\n        </ul>\n        <form>\n            <div class=\"row\">\n                <input class='col-sm-8 form-control' type=\"text\" #addNewFriend />\n                <input type=\"submit\" (click)=\"addNewFriendMethod(addNewFriend.value)\" class='col-sm-4 btn btn-success' value=\"ADD NEW FRIEND\">\n            </div>\n        </form>\n        \n        <hr/>\n\n        <h1 class=\"display-3\">Two Way Bindings</h1>\n        <div>\n            <h3 class=\"text-info mb-2 mt-5\">{{title}}</h3>\n            <input class=\"form-control\" [(ngModel)]=\"title\" />\n        </div>\n    ",
    }),
    __metadata("design:paramtypes", [])
], FirstComponent);
exports.FirstComponent = FirstComponent;
//# sourceMappingURL=first.component.js.map