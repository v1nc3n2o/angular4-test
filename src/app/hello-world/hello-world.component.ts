import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html'
})
export class HelloWorld implements OnInit {
  private values: string;
  private refVarValue: string;
  private valueArray: Array<String>;
  private nameModel: string;
  constructor() { }

  public ngOnInit(): void {
    this.values = '';
    this.refVarValue = '';
    this.valueArray = ['Hi','Coggix'];
  }


  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
  onKeyBinding(value:string){
    this.refVarValue += value + ' | ';
  }
  onKeyList(value:string){
    this.valueArray.push(value);
  }
}
