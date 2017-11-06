import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  theme: string;
  checked: boolean;
  containerElement: Element;


  constructor(private overlayContainer: OverlayContainer) { }

  public ngOnInit(): void {
    this.theme = 'my-theme-two';
    this.checked = true;
    this.containerElement = this.overlayContainer.getContainerElement();
    this.containerElement.classList.add(this.theme);
  }

  changeTheme() {
    this.containerElement.classList.remove(this.theme);
    this.theme === 'my-theme-one' ? this.theme = 'my-theme-two' : this.theme = 'my-theme-one';
    this.containerElement.classList.add(this.theme);
  }

}
