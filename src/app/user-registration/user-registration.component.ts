import { Component, OnInit } from '@angular/core';
import { UserRegistration } from './user-registration.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  user: UserRegistration;
  showInformation: boolean;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;

  constructor() { }

  ngOnInit() {
  }

  deleteData(data, index) {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
    this.lastName = undefined;
    this.firstName = undefined;
    this.email = undefined;
    this.phone = undefined;
    this.showInformation = false;

  }

}
