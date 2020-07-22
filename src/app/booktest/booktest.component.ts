import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booktest',
  templateUrl: './booktest.component.html',
  styleUrls: ['./booktest.component.css']
})
export class BooktestComponent implements OnInit {
  displayAlert: string = "none";
  displayDiv: string = "block";
  counter= Array;

  constructor( private router: Router) { }

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
