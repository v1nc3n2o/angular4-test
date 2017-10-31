import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private dataSource: UserDataSource;
  private displayedColumns: string[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.displayedColumns = ['name', 'email', 'city', 'street', 'delete'];
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (result) => this.dataSource = new UserDataSource(result),
      (error) => console.log(error)
    );
  }

  deleteUser(i) {
    this.dataSource.getUsers().splice(i,1);
    const copiedData = this.dataSource.getUsers();
    this.dataSource = new UserDataSource(copiedData);
  }

  resetUsers() {
    this.dataSource = undefined;
  }

}


export class UserDataSource extends DataSource<User> {

  constructor(public users: User[]) {
    super();
  }

  getUsers(): User[] {
    return this.users;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<User[]> {
    return Observable.of(this.users);
  }

  disconnect() { }
}
