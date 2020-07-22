import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {
  showProfile: boolean = false;
  showNotifications: boolean = false;
  showHome: boolean = true;

  notificationNum: number = 8;
  readNotifications: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  clickHome() {
    this.showNotifications = false;
    this.showProfile = false;
    this.showHome = true;
  }

  openNotifications() {
    if (this.readNotifications == false)
      this.readNotifications = !this.readNotifications;
    this.showNotifications = true;
    this.showProfile = false;
    this.showHome = false;
  }
  openProfile() {
    this.showProfile = true;
    this.showNotifications = false;
    this.showHome = false;
  }
}
