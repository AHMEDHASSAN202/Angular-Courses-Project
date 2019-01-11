import { Component } from '@angular/core';

@Component ({
    selector: 'parent-component',
    template: `
        <h1 class='display-4'>Parent Component</h1>
        <h5 class="text-info">{{parentData}}</h5>
        <input (keyup)="false" class="border border-success form-control mb-5" #inputParent type="text" />
        <hr>
        <div class="mt-5 alert alert-warning">
            <child-component (childData)="parentData = $event" [titleChild]="inputParent.value"></child-component>
        <div>

    `
})

export class ParentComponent {

    parentData: string;

    constructor() {

    }
}