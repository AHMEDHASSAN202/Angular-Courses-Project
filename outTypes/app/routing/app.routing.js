"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var courses_component_1 = require("./courses.component");
var about_component_1 = require("./about.component");
var single_course_component_1 = require("./single.course.component");
//forms
var forms_component_1 = require("../forms/forms.component");
//API
var api_component_1 = require("../api/api.component");
var app_routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'courses',
        component: courses_component_1.CoursesComponent
    },
    {
        path: 'courses/:id',
        component: single_course_component_1.SingleCourseComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'forms',
        component: forms_component_1.FormsComponent
    },
    {
        path: 'api',
        component: api_component_1.ApiComponent
    }
];
exports.routes = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routing.js.map