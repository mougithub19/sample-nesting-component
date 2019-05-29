import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <h1>
    1st Number : {{num1}}
    <br/>
    2nd Number : {{num2}}
    <br/>
    Total Number : {{num1}} + {{num2}}
  </h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Input() num1: number;
  @Input() num2: number;
}
