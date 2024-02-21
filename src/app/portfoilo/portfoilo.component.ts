import { Component } from '@angular/core';

@Component({
  selector: 'app-portfoilo',
  templateUrl: './portfoilo.component.html',
  styleUrls: ['./portfoilo.component.css']
})
export class PortfoiloComponent {
  
  flag:boolean=true
  imgs:string[]=[
    "./assets/poert1.png",
    "./assets/port2.png",
    "./assets/port3.png",
    "./assets/poert1.png",
    "./assets/port2.png",
    "./assets/port3.png"


  ]
  imgsrc:string=''
  hidelayer(element:EventTarget|null,img:HTMLImageElement):void{
    if(element==img)return;
    this.flag=true

  }


}
