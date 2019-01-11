import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CoursesComponent } from './courses.component';
import { AboutComponent } from './about.component';
import { SingleCourseComponent } from './single.course.component';

//forms
import { FormsComponent } from '../forms/forms.component';

//API
import { ApiComponent } from '../api/api.component';

const app_routes: Routes = [
    {
        path: '',
        component: HomeComponent 
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'courses/:id',
        component: SingleCourseComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'api',
        component: ApiComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(app_routes);
