import { Component, OnInit } from '@angular/core';
import { User } from './user.model'
import { UserService } from './user.service';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users: UserDataSource;
  private displayedColumns : string[];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.displayedColumns = ['name','email', 'city', 'street'];
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (result)=> this.users = new UserDataSource(result),
      (error)=> console.log(error)
    );
  }

  resetUsers(){
    this.users = undefined;
  }
}


export class UserDataSource extends DataSource<User> {
  
    constructor(private users: User[]) {
      super();
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<User[]> {
      return Observable.of(this.users);
    }
  
    disconnect() {}
  }