import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user.model'
import {Observable} from 'rxjs';

@Injectable()
export class UserService{

    constructor(private http: Http){}

    public getUsers(): Observable<User[]>{
        const url = 'https://jsonplaceholder.typicode.com/users';
        return this.http
            .get(url)
            .map(response =>response.json() as User[]);
    }
}