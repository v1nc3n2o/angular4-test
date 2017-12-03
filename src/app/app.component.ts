import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme: string;
  checked: boolean;
  containerElement: Element;
  condition: boolean;

  constructor(private overlayContainer: OverlayContainer) { }

  public ngOnInit(): void {
    this.theme = 'my-theme-two';
    this.checked = true;
    this.containerElement = this.overlayContainer.getContainerElement();
    this.containerElement.classList.add(this.theme);
    this.condition = true;
  }

  changeTheme() {
    this.containerElement.classList.remove(this.theme);
    this.theme === 'my-theme-one' ? this.theme = 'my-theme-two' : this.theme = 'my-theme-one';
    this.containerElement.classList.add(this.theme);
  }

  toggleCondition() {
    this.condition = !this.condition;
  }
}
