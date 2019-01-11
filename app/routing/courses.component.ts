import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'courses-component',
    template: `
            <h1 class="display-1 text-center">Courses Component</h1>
            <div class="alert alert-dark mt-5">
                <ul>
                    <li *ngFor="let course of courses; let i = index">
                        <a (click)="goToCourse(i)" >{{course}}</a>
                    </li>
                </ul>
            <div>
    `
})

export class CoursesComponent{

    courses: string[];

    constructor(private _router: Router) {
        this.courses = ['CS676', 'IT999', 'UX333', 'UI766'];
    }

    goToCourse(idCourse: number) {
        this._router.navigate(['/courses', idCourse+1], {skipLocationChange: true});
    }
}