import { Component, Input } from '@angular/core';
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
  </h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Input() num1: number;
  @Input() num2: number;
  @Input() num3: number;
  @Input() num4: number;
}
