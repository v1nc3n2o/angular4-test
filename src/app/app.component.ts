import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme: string;

  constructor() { }

  public ngOnInit(): void {
    this.theme = 'my-theme-one';
    Observable.interval(1000 * 3).subscribe(x => {
      this.doSomething();
    });
  }

  doSomething() {
    if (this.theme === 'my-theme-one') {
      this.theme = 'my-theme-two';
    } else {
      this.theme = 'my-theme-one';
    }
  }
}
