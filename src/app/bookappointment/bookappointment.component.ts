import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {
  counter = Array;
  displayAlert: string = "none";
  displayDiv: string = "block";
  constructor(private router: Router) {
    
   }

  ngOnInit() {
  }

  numberReturn(length) {
    return new Array(length);
  }

  onBook() {
    // this.spinnerService.show();
    // setTimeout(() => {
    //   this.spinnerService.hide();
    //   this.displayAlert = "block";
    //   this.displayDiv = "none";  
    //   setTimeout(() => {
    //     this.router.navigateByUrl("/");
    //   }, 5000);
      
      
    // }, 1500);
    

    
  }

}
