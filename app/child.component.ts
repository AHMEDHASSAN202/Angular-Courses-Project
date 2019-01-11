import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `
            <h1 class='display-4'>Child Component</h1>
            <h5 class='text-success'>{{titleChild}}</h5>
            <input type="text" (keyup)="methodEmitter(inputChild.value)" #inputChild class="border border-info form-control" />
    `,
    inputs: ['titleChild'],
    outputs: ['childData']
})


export class ChildComponent {

    //instance from EventEmitter Class
    childData = new EventEmitter<string>();

    constructor() {

    }

    methodEmitter(value: string) {
        this.childData.emit(value);
    }
}