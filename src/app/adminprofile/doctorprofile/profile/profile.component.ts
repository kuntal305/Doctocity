import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  disabled: boolean = true;
  confirm: boolean = false;
  alertShow: boolean = false;
  
  name: string = "Manish Chowdhury"
  age: number = 44;
  gender: string = "Male";
  speciality: string = "Ob-Gyn";
  exp: number = 25;
  address: string = "Zenith Super Specialist Hospital, Feeder Road, Rathtala, Belgharia";
  city: string = "Kolkata";
  pincode: number = 700056;
  email: string = "manishc@gmail.com";
  password: string = "Mc@020305";
  cpassword: string;
  _password: string;

  constructor() { }

  ngOnInit() {
    this._password = this.password;
  }

  onEdit() {
    this.disabled = !this.disabled;
  }

  onSave() {
    this.disabled = !this.disabled;
  }

  onCancel(form: NgForm) {
    form.resetForm();
  }

  passChange() {
    
    this.confirm = !this.confirm;
  }

  checkPass() {
    if (this.cpassword!=this.password) { 
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
