import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.css']
})
export class DiagnosticsComponent implements OnInit {

  constructor() { }
  
   click1: string = "none";
   click: string = "block";
   location: string;   

  ngOnInit() {
  }

  onClick() {
    // this.spinnerService.show();
    // setTimeout(() => {
    //   this.spinnerService.hide();
    //   this.click = "none";
    //   this.click1 = "block";
    // }, 2000);
  }

}
