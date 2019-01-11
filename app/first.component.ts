import { Component } from '@angular/core';


@Component({
    selector: 'first-component',
    template: `
        <h1 class="display-3">One Way Bindings</h1>
        <ul>
            <li *ngFor="let myFriend of myFriends">{{myFriend}}</li>
        </ul>
        <form>
            <div class="row">
                <input class='col-sm-8 form-control' type="text" #addNewFriend />
                <input type="submit" (click)="addNewFriendMethod(addNewFriend.value)" class='col-sm-4 btn btn-success' value="ADD NEW FRIEND">
            </div>
        </form>
        
        <hr/>

        <h1 class="display-3">Two Way Bindings</h1>
        <div>
            <h3 class="text-info mb-2 mt-5">{{title}}</h3>
            <input class="form-control" [(ngModel)]="title" />
        </div>
    `,
})

export class FirstComponent{

    //properties
    myFriends: string[];
    title: string;

    constructor() {
        this.myFriends = ['Osama', 'Mahmoud', 'Kassem'];
        this.title = 'Just Title For Test';
    }


    //add new friend into my friend arrray
    addNewFriendMethod(friend: string) {
        this.myFriends.push(friend);
    }

}
