import { Component, OnInit } from '@angular/core';
import { UserRegistration, State } from './user-registration.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  user: UserRegistration;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zipCode: string;
  state: any;

  constructor() { }

  ngOnInit() {
    this.state = [
      { code: 'ITA', name: 'Italy' },
      { code: 'IRE', name: 'Ireland' },
      { code: 'SPA', name: 'Spain' }
    ];
  }

  deleteData(data, index) {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
    this.user.address = {
      street: '',
      zipCode: ''
    };
    this.lastName = undefined;
    this.firstName = undefined;
    this.email = undefined;
    this.phone = undefined;
    this.street = undefined;
    this.city = undefined;
    this.zipCode = undefined;
  }
}
