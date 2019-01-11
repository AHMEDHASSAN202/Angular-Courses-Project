"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var first_component_1 = require("./first.component");
var parent_component_1 = require("./parent.component");
var child_component_1 = require("./child.component");
//routing
var main_component_1 = require("./routing/main.component");
var home_component_1 = require("./routing/home.component");
var courses_component_1 = require("./routing/courses.component");
var about_component_1 = require("./routing/about.component");
var single_course_component_1 = require("./routing/single.course.component");
//forms
var forms_component_1 = require("./forms/forms.component");
//import routes constant
var app_routing_1 = require("./routing/app.routing");
//import API component
var api_component_1 = require("./api/api.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routes, http_1.HttpModule],
        declarations: [
            app_component_1.AppComponent,
            parent_component_1.ParentComponent, child_component_1.ChildComponent,
            first_component_1.FirstComponent,
            main_component_1.MainComponent, home_component_1.HomeComponent, courses_component_1.CoursesComponent, about_component_1.AboutComponent, single_course_component_1.SingleCourseComponent,
            forms_component_1.FormsComponent,
            api_component_1.ApiComponent
        ],
        bootstrap: [main_component_1.MainComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map