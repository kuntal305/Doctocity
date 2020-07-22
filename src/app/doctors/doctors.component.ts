import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  click: string = "block";
  click1: string = "none";
  doctors = [ 
    { id: 1, name: 'Dentist' },
    { id: 2, name: 'ENT Specialist' },
    { id: 3, name: 'Gen. Physician' }
   ];
   doctorList: any[];
  constructor(private authService: AuthService, private spinner: NgxSpinnerService) {
    
   }

  ngOnInit() {

  }


  enterDetails(location, speciality:string) {
    
    //  this.doctors = this.authService.fetchDoctors(details);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.authService.fetchDoctors(location, speciality)
        .subscribe(doctors => {
           this.doctorList = doctors;
           console.log(this.doctorList.length)
        })
      this.click = "none";
      this.click1 = "block";
    }, 1000);
    


  }

  

}
