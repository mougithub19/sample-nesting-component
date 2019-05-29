import { Component, Input, EventEmitter, Output } from '@angular/core';
//Inner component
@Component({
  selector: 'hello',
  template: `
  <h1>
    1st Number : {{num1}}
    <br/>
    2nd Number : {{num2}}
    <br/>
    Eg. Interpolation
    =============
    <br/>
    Total Number : {{num1 + num2}}
    <br/>
    Eg. Property Binding
    ================
     <br/>
    Total Number : {{num3 + num4}}
    <br/>
    <input type= "text" (input)="emitEvent($event.target.value)"/>
    <br/>
    Message:{{msg}}
  </h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Input() num1: number;
  @Input() num2: number;
  @Input() num3: number;
  @Input() num4: number;
  @Output() itemclicked:EventEmitter<string>=new EventEmitter<string>();
  emitEvent(val):void{
    this.itemclicked.emit=val;

  }
}
