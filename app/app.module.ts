import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { FirstComponent }  from './first.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

//routing
import { MainComponent } from './routing/main.component';
import { HomeComponent } from './routing/home.component';
import { CoursesComponent } from './routing/courses.component';
import { AboutComponent } from './routing/about.component';
import { SingleCourseComponent } from './routing/single.course.component';

//forms
import { FormsComponent } from './forms/forms.component';

//import routes constant
import { routes } from './routing/app.routing';

//import API component
import { ApiComponent } from './api/api.component';

@NgModule({
  imports:      [BrowserModule, FormsModule, routes, HttpModule],
  declarations: [ 
                  AppComponent,
                  ParentComponent, ChildComponent,
                  FirstComponent,
                  MainComponent, HomeComponent, CoursesComponent, AboutComponent, SingleCourseComponent,
                  FormsComponent,
                  ApiComponent
                  ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }
