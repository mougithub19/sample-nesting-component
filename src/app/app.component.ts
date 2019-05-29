import { Component } from '@angular/core';
//Outer component
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  num1:number=100;
  num2:number=200;
  num3:number=300;
  num4:number=400;
  msg:string="";
  showMessage(value:string):void{
    this.msg=value;
  }

}
