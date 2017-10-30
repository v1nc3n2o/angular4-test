import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme: string;
  checked: boolean;
  constructor() { }

  public ngOnInit(): void {
    this.theme = 'my-theme-two';
    this.checked = true;

    // Observable.interval(1000 * 30).subscribe(period => {
    //   this.changeTheme(period);
    // });
  }

  changeTheme(num?: number) {
    // num % 2 === 0 ? this.theme = 'my-theme-two' : this.theme = 'my-theme-one';
    this.theme === 'my-theme-one' ? this.theme = 'my-theme-two' : this.theme = 'my-theme-one';
  }
}
