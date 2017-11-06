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
  overlayContainer: any;

  constructor(overlayContainer: OverlayContainer) {
    this.overlayContainer = overlayContainer.getContainerElement();
  }

  public ngOnInit(): void {
    this.theme = 'my-theme-two';
    this.checked = true;
    this.overlayContainer && this.overlayContainer.classList.add(this.theme);
  }

  changeTheme(num?: number) {
    this.overlayContainer && this.overlayContainer.classList.remove(this.theme);
    this.theme === 'my-theme-one' ? this.theme = 'my-theme-two' : this.theme = 'my-theme-one';
    this.overlayContainer && this.overlayContainer.classList.add(this.theme);
  }

}
