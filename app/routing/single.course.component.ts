import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: '<single-course-component>',
    template: `
            <h1 class="text-center display-1">Single Course Component</h1>
            <hr><hr><hr>
            <h2 class="text-center display-3 text-success">{{course}}</h2>
    `
})


export class SingleCourseComponent{
    
    courses: string[];
    id: number;
    course: string;

    constructor(private _activatedRoute: ActivatedRoute, private _router: Router){
        this.courses = ['CS676', 'IT999', 'UX333', 'UI766'];
    }

    ngOnInit() {
        this.id = this._activatedRoute.snapshot.params['id'] - 1;
        this.validateParam();
        this.course = this.courses[this.id];
    }

    private validateParam() {
        if (this.id >= this.courses.length) {
            this._router.navigate(['/courses']);
        }
    }

}