import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  theme: string;
  checked: boolean;
  constructor() { }

  public ngOnInit(): void {
    this.theme = 'my-theme-two';
    this.checked = true;

  }

  changeTheme(num?: number) {
    this.theme === 'my-theme-one' ? this.theme = 'my-theme-two' : this.theme = 'my-theme-one';
  }

}
