import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clinic-profile',
  templateUrl: './clinicprofile.component.html',
  styleUrls: ['./clinicprofile.component.css']
})
export class ClinicprofileComponent implements OnInit {
  showProfile: boolean = false;
  showNotifications: boolean = false;
  showHome: boolean = true;

  notificationNum: number = 7;
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
