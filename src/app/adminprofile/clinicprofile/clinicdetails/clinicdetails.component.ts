import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinicdetails.component.html',
  styleUrls: ['./clinicdetails.component.css']
})
export class ClinicdetailsComponent implements OnInit {
  disabled: boolean = true;
  confirm: boolean = false;
  alertShow: boolean = false;
  hideEdit: boolean = false;


  username: string = "Raj Dutta";
  clinicname: string = "Suraksha Diagnostic Clinic";
  address: string = "9/4 Feeder Road, Rathtala, Belgharia";
  city: string = "Kolkata";
  pincode: number = 700056;
  email: string = "rdutta@gmail.com"
  password: string = "Rd@020305";
  _password: string;
  cpassword: string;  

  ngOnInit() {
    this._password = this.password;
  }

  onEdit() {
    this.hideEdit = !this.hideEdit
    this.disabled = false;
  }

  onSave() {
    this.disabled = true;
    this.confirm = false;
  }

  onCancel(form: NgForm) {
    form.resetForm();
  }

  passChange() {

    this.confirm = !this.confirm;
  }

  checkPass() {
    if (this.cpassword != this.password) {
      this.alertShow = !this.alertShow;
      this.password = this._password;
      this.cpassword = "";
    }
  }

  closeConf() {
    if (this.confirm == true)
      this.confirm = !this.confirm;
  }

}
