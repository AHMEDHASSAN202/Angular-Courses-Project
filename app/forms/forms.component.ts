import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/forms/forms.component.html'
})

export class FormsComponent {

    userData: any;

    constructor() {
        this.userData = {
            email: 'ahmed@gmail.com',
            firstName: 'ahmed',
            lastName: 'hassan',
            password: 'ahmed_hassan'
        }
    }

    submitMethod(inputsValues: any) {
        console.log(inputsValues);
    }
}