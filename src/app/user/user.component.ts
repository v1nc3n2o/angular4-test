import { Component, OnInit, Inject } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private dataSource: UserDataSource;
  private displayedColumns: string[];

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns = ['name', 'email', 'city', 'street', 'delete'];
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (result) => this.dataSource = new UserDataSource(result),
      (error) => console.log(error)
    );
  }

  openDialog(i): void {
    let dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '250px'// ,
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response)
        this.deleteUser(i);
    });
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

  constructor(private users: User[]) {
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
