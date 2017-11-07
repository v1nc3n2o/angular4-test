import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  private dataSource: UserDataSource;
  private displayedColumns: string[];
  constructor(private userService: UserService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.displayedColumns = ['name', 'email', 'city', 'street', 'actions'];
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (result) => this.dataSource = new UserDataSource(result as User[], this.sort),
      (error) => console.log(error)
    );
  }

  openDialog(i): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '250px'// ,
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.deleteUser(i);
      }
    });
  }

  deleteUser(i) {
    this.dataSource.getUsers().splice(i, 1);
    const copiedData = this.dataSource.getUsers();
    this.dataSource = new UserDataSource(copiedData, this.sort);
  }

  resetUsers() {
    this.dataSource = undefined;
  }

  viewUserDetails(user) {
    this.userService.setselectedUser = user;
    this.router.navigate(['/dashboard/user-details']);
  }
}

@Component({
  selector: 'confirm-delete-dialog',
  templateUrl: 'confirm-delete-dialog.html',
})
export class ConfirmDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}

export class UserDataSource extends DataSource<User> {

  constructor(private users: User[], private _sort: MatSort) {
    super();
  }

  getUsers(): User[] {
    return this.users;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<User[]> {
    const displayDataChanges = [
      this.users,
      this._sort.sortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });
  }

  /** Returns a sorted copy of the database data. */
  getSortedData(): User[] {
    const data = this.users.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }
    const self = this._sort;
    return data.sort((a, b) => {
      console.log(this._sort);
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'name': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'city': [propertyA, propertyB] = [a.address.city, b.address.city]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }

  disconnect() { }
}
