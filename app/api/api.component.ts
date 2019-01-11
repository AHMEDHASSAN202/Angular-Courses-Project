import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
    template: `
            <h1 class="display-1 text-center">API</h1>
            <ul>
                <li *ngFor="let post of posts">ID=> {{ post.id }} AND Post Title=> {{post.title}}</li>
            </ul>
        `,
    providers: [AppService]
})

export class ApiComponent{
    
    posts: any;

    constructor(private _app_service: AppService) {
        
        this._app_service.getPosts().subscribe(data => { this.posts = data; });
    
    }
}