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
    // $('app-root').addClass(this.theme);
    this.checked = true;

  }

  changeTheme(num?: number) {
    // num % 2 === 0 ? this.theme = 'my-theme-two' : this.theme = 'my-theme-one';
    // $('app-root').removeClass(this.theme);
    // this.theme === 'my-theme-one' ? this.theme = 'my-theme-two' : this.theme = 'my-theme-one';
    // $('app-root').addClass(this.theme);
  }

}
