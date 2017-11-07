import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getSelectedUser;
  }

}
