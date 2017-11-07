import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from './user.model';
import { Observable } from 'rxjs';

const url = 'https://jsonplaceholder.typicode.com/users';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  private _user: User;

  public getUsers() {
    return this.http.get(url);
  }

  public set setselectedUser(user: User) {
    this._user = user;
  }

  public get getSelectedUser() {
    return this._user;
  }
}
